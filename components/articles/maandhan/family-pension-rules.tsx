import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, WB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { MaandhanArticleMeta } from '@/lib/maandhan-data';

const PUBLISHED = '2026-07-26T08:00:00+05:30';
const MODIFIED = '2026-07-29T10:30:00+05:30';

const RELATED_CARDS = [
  {
    slug: 'pm-kisan-maandhan-withdrawal-refund-rules',
    title: 'Withdrawal & Refund Rules',
    desc: 'Agar 60 saal se pehle scheme chhodni pade ya death ho jaye, toh paisa kaise wapas milta hai.',
    emoji: '💸',
  },
  {
    slug: 'pm-kisan-maandhan-status-check-online',
    title: 'Apna Status Check Karein',
    desc: 'Pension card download karne ke baad apna contribution history aur active status verify karein.',
    emoji: '🔍',
  },
  {
    slug: 'pmkmy-bank-account-change',
    title: 'Bank Account Change Karein',
    desc: 'Agar purana bank band ho gaya hai, to naye account me pension details kaise update karein.',
    emoji: '🏦',
  },
];

const FAQS_DATA = [
  {
    q: 'Yadi nomination mein patni ka naam nahi hai, to kya unka claim reject ho jayega?',
    a: 'Bilkul nahi, haq banta hai, lekin process thoda lamba ho jata hai. Patni ko Tehsil se Legal Heir Certificate ya court se succession certificate lena hoga. Nominee hone par settlement 1-2 mahine mein ho jata hai, jabki bina nominee ke isme 6 se 12 mahine lag sakte hain. Isliye nomination update karna bahut zaroori hai.',
  },
  {
    q: 'Kya refund hone wale corpus amount mein LIC ka interest bhi shamil hota hai?',
    a: 'Haan, shamil hota hai. LIC of India jo fund manage karti hai, usme farmer aur sarkar ke contribution ke saath-saath compounded returns bhi add hote hain. Exact calculation LIC ki actuarial team karti hai, aur claimant ko final credited amount claim settlement letter mein dikhai deta hai.',
  },
  {
    q: 'Surviving spouse ko milne wala ₹1,500 monthly pension kab tak chalta rahega?',
    a: 'Jab tak surviving partner zinda hain, tab tak ye amount milta rahega. Iski koi fixed time limit nahi hai (5 saal ya 25 saal, amount same rahega). Haan, kuch states mein LIC ko claimant ke jeevit hone ka proof dene ke liye annual life certificate submit karna hota hai.',
  },
  {
    q: 'Agar deceased farmer ka bank account band ho chuka hai, to corpus kahan aayega?',
    a: 'Corpus amount deceased ke band account mein nahi aayega. Claim form mein claimant (nominee/legal heir) apna khud ka active bank account detail dete hain, aur paisa seedha unke account mein transfer hota hai. Bas bank details sahi aur account active hona chahiye.',
  },
  {
    q: 'Kya doosri wife ya live-in partner ko bhi is scheme ka benefit mil sakta hai?',
    a: 'Scheme guidelines mein sirf "legally wedded spouse" (kanooni taur par shadi shuda patni/pati) ko hi primary claimant maana gaya hai. Bina legal divorce ke doosri shadi ya live-in relationship mein official recognition nahi milti. Aise complex cases mein local family court ya tehsil se legal salah lena padta hai.',
  },
  {
    q: 'Agar farmer ne sirf 2-3 saal hi contribution diya aur uske baad death ho gayi, to kya kuch milega?',
    a: 'Haan, bilkul milega. Chahe 6 mahine ka contribution ho ya 15 saal ka, jo bhi corpus us waqt tak bana hai, uska poora hisaab diya jayega. Amount kam hoga kyunki fund kam jama hua hoga, lekin sarkar ka matching share aur us duration ka interest dono add hokar refund honge.',
  },
  {
    q: 'CSC ya online portal kaam nahi kar raha hai, to claim process kaise aage badhayein?',
    a: 'Portal downtime ek common issue hai. Aise mein CSC se physical claim form lekar manually fill karein. Agar woh mana karein, to unse likhit mein lein ki system down hai. Phir seedha linked bank branch jayein. Har step, form aur receipt ki photo apne phone mein save karein, kyunki baad mein ye proof bahut kaam aata hai.',
  },
];

export default function FamilyPensionRules({ article }: { article: MaandhanArticleMeta }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: 'PMKMY Family Pension Rules: Pati Ke Baad Kya Hoga? (2026)',
              description: 'Know what happens to PMKMY pension after a farmer death. Family pension rules, spouse claim process, corpus fund details, and real mistakes to avoid.',
              image: 'https://kisanstatus.com/images/articles/maandhan/family-pension-rules/hero.webp',
              inLanguage: 'hi-IN',
              keywords: 'PMKMY family pension rules, PM Kisan Maandhan death claim, spouse pension after 60, corpus refund process',
              articleSection: 'Agriculture & Pension Schemes',
              wordCount: 2100,
              author: {
                '@type': 'Organization',
                name: 'KisanStatus Team',
                url: 'https://kisanstatus.com/about',
              },
              publisher: {
                '@type': 'Organization',
                name: 'KisanStatus',
                logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.png' },
              },
              datePublished: PUBLISHED,
              dateModified: MODIFIED,
              mainEntityOfPage: { '@type': 'WebPage', '@id': `https://kisanstatus.com/maandhan/${article.slug}` },
            },
            {
              '@type': 'FAQPage',
              mainEntity: FAQS_DATA.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            },
          ],
        }) }}
      />

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/maandhan" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Maandhan Yojana</Link>
            <span>/</span>
            <span className="text-white font-bold">Family Pension Rules</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Kisan Pension Scheme</span>

          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PMKMY Family Pension Rules: Pati Ke Baad Kya Hoga? (2026)
          </h1>

          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 12 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/family-pension-rules/hero.webp"
            alt="Widow farmer checking PM Kisan Maandhan family pension documents at bank"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Family pension claim process ko samajhna aapke parivar ke liye bahut zaroori hai
          </p>
        </div>

        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-xl">
          <p className="text-sm md:text-base text-red-900 dark:text-red-100 leading-relaxed font-medium">
            <strong>Seedhi baat:</strong> Maan lijiye ek kisan ne 40 ki umar mein PM Kisan Maandhan Yojana (PMKMY) join ki. Har mahine unke account se premium kata. Lekin 55 ki umar mein unka achanak dehant ho gaya. Ab unke parivar ke man mein ek hi sawal hai: <em>"Kya jama kiya hua paisa wapas milega ya pension shuru hogi?"</em> Yeh confusion bahut common hai, aur iska jawab scheme ke rules mein chhupa hai.
          </p>
        </div>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Hum is topic ko bilkul ground level se samjhenge. Koi bhari-bharkam sarkari jargon nahi, na hi copy-paste kiya hua content. Sirf ek clear, fact-based guide jo aapko batayegi ki surviving family ka kya haq banta hai, claim process kaise kaam karta hai, aur kin galtiyan se bachna hai.
        </p>

        <section className="mb-8">
          <SH>PMKMY Family Pension Ka Core Rule: Jo Sabko Samajhna Chahiye</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jab koi farmer scheme join karta hai, to ek retirement corpus banta hai. Yeh ek long-term savings pot hai jisme farmer ka monthly contribution aur sarkar ka equal match fund jama hota hai. 60 saal ki umar mein yeh pot ₹3,000 monthly pension ke roop mein return karna shuru karta hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Lekin agar contributor 60 saal ki umar tak pahunchne se pehle hi is duniya ko alvida keh dete hain, to rules do alag scenarios mein divide ho jate hain. In dono ke beech ka antar samajhna bahut zaroori hai.
          </p>

          <div className="my-6 rounded-xl overflow-hidden border border-[var(--color-border)] shadow-sm">
            <Image
              src="/images/articles/maandhan/family-pension-rules/process-flowchart.webp"
              alt="PMKMY family pension process flowchart showing two scenarios"
              width={800}
              height={400}
              className="w-full"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
              Figure: Death ke baad pension ka process - 60 se pehle vs baad
            </p>
          </div>

          <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">Scenario A: 60 Saal Se Pehle Death (Pension Start Hone Se Pehle)</h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              Yadi enrolled farmer 60 saal ki umar se pehle expire ho jate hain (matlab unhone ₹3,000 monthly payout lena shuru nahi kiya tha), to surviving spouse ke paas <strong>do options</strong> hote hain:
            </p>

            <div className="space-y-3 mb-4">
              <div className="p-4 bg-white dark:bg-gray-800 border-l-4 border-green-500 rounded">
                <p className="font-bold text-sm text-green-700 dark:text-green-400 mb-2">✅ Option 1: Scheme Continue Karein</p>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  Surviving spouse scheme ko continue kar sakte hain. Is case mein, unhe regular monthly contributions deni hongi jab tak woh 60 saal ki umar tak nahi pahunch jate. 60 saal hone par, unhe ₹3,000 monthly pension milna shuru ho jayegi — bilkul waise hi jaise original subscriber ko milta.
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 border-l-4 border-blue-500 rounded">
                <p className="font-bold text-sm text-blue-700 dark:text-blue-400 mb-2">💰 Option 2: Exit Karein Aur Lump-Sum Le Lein</p>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  Agar spouse scheme continue nahi karna chahte, to woh exit kar sakte hain. Is case mein, unhe accumulated corpus (jama kiya hua fund + sarkar ka matching share + earned interest) ek saath lump-sum refund ke roop mein mil jata hai.
                </p>
              </div>
            </div>

            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 p-3 rounded">
              <strong>Important Fact:</strong> Bahut se parivar ko lagta hai ki sirf lump-sum refund hi option hai, lekin aisa nahi hai. Aap scheme continue karke monthly pension bhi le sakte hain. Dono options available hain — aapki financial situation aur age ke hisaab se choose karein.
            </p>
          </div>

          <div className="my-6 p-5 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-xl">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">Scenario B: 60 Saal Ke Baad Death (Pension Chal Raha Ho)</h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
              Yadi farmer 60 saal ki umar paar kar chuke the aur unhe ₹3,000 har mahine mil rahe the, to situation badal jati hai. Is case mein, surviving legal partner (patni/pati) ko us monthly amount ka 50% — yani ₹1,500 har mahine — unki puri zindagi ke liye milne ka haq hota hai. Ise hi "Family Pension" kaha jata hai.
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 p-3 rounded">
              <strong>Dhyan dein:</strong> 60 se pehle = Do options (continue ya lump-sum). 60 ke baad = Surviving spouse ke liye continuing monthly benefit (₹1,500/month).
            </p>
          </div>
        </section>

        <section className="mb-8">
          <SH>Pension Ka Haqdar Kaun? 'Survivor' Ki Sahi Paribhasha</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Scheme guidelines ke mutabik, legally wedded partner primary claimant hote hain. Agar surviving spouse nahi hain, to legal heir (aam taur par adult bachha ya enrolment ke waqt registered nominee) claim kar sakta hai. Lekin ground reality mein paperwork gaps aksar problems create karte hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Udaharan ke liye, maan lijiye ek kisan ne enrolment ke waqt nomination mein apne bhai ya pita ka naam likh diya tha, lekin ab woh is duniya mein nahi hain. Aise mein bank bina legal no-objection certificate ya succession certificate ke wife ko paisa dene se inkar kar sakta hai, jisse process mein mahino ki deri ho sakti hai.
          </p>
          <WB>
            <strong>Pro Tip:</strong> Apni nomination aaj hi check karein. Agar aapka naam nahi hai, ya listed person ab appropriate nahi hai, to nearest Common Service Centre (CSC) ya <Link href="/maandhan/pm-kisan-maandhan-eligibility-documents" className="text-green-700 underline hover:text-green-900">PMKMY portal</Link> ke through ise turant update karwayein. Yeh 15 minute ka kaam aapke parivar ko saalon ki pareshani se bacha sakta hai.
          </WB>
        </section>

        <section className="mb-8">
          <SH>Corpus Fund Kaise Calculate Hota Hai? (Sahi Ganit)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har mahine, farmer ki umar ke hisaab se ek fixed amount kata jata hai. 30 saal ke kisan ka contribution 50 saal ke kisan se kam hota hai, kyunki unke paas fund build karne ka zyada time hota hai. Sarkar is amount ko barabar match karti hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jab death pension age se pehle hoti hai, to farmer ka contribution + sarkar ka matching share + LIC dwara diya gaya interest = Total Refundable Corpus.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Approximate Estimate:</strong> Yadi ek farmer ne 35 saal ki umar mein join kiya aur 55 saal ki umar mein unka dehant hua, to corpus lagbhag ₹2.5 se ₹3.5 lakhs ke beech ho sakta hai. Yadi 50 saal ki umar mein join karke 58 saal mein death hui, to yeh ₹80,000 se ₹1.2 lakhs ke aas-paas ho sakta hai. <em>(Note: Yeh ek approximate estimate hai, exact figure LIC ya aapke bank se confirm karein, kyunki yeh actuarial tables par depend karta hai.)</em>
          </p>
        </section>

        <section className="mb-8">
          <SH>Claim Process: Step-by-Step Practical Checklist</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Official guidelines seedhi hain, lekin ground level par patience aur paperwork discipline ki zaroorat hoti hai. Neeche di gayi checklist ko follow karein:
          </p>

          <div className="my-6 rounded-xl overflow-hidden border border-[var(--color-border)] shadow-sm">
            <Image
              src="/images/articles/maandhan/family-pension-rules/portal-screenshot.webp"
              alt="PMKMY official portal screenshot showing claim section"
              width={800}
              height={500}
              className="w-full"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
              Figure: PMKMY portal par claim process ka screenshot
            </p>
          </div>

          <StepList>
            <SI n={1}><strong>Death Certificate Prapt Karein:</strong> Yeh sabse pehla aur mandatory document hai. Ise municipal corporation ya gram panchayat office se turant banwayein. Iske bina koi bhi process aage nahi badhega.</SI>
            <SI n={2}><strong>Enrolment Bank ya CSC Visit Karein:</strong> Claim form usi bank branch ya CSC mein submit karna hota hai jahan farmer ne originally enrolment kiya tha. Koi bhi random branch isme madad nahi kar sakti.</SI>
            <SI n={3}><strong>Survivor Claim Form Fill Karein:</strong> Form mein deceased, claimant, aur bank account ki details dhyan se bharein. Ek bhi spelling mistake ya account number ka galat digit pure file ko reject karwa sakta hai.</SI>
            <SI n={4}><strong>Supporting Documents Attach Karein:</strong> Death certificate, claimant ka ID proof (Aadhaar), address proof, original PMKMY card/receipt, cancelled cheque/passbook copy, aur marriage certificate. <br/><em>State-wise Variation:</em> Kuch states (jaise UP, Bihar, MP) mein Tehsil se 'Legal Heir Certificate' ya additional affidavit mandatory maang sakte hain. Apne district ke specific rules CSC ya bank se confirm karein.</SI>
            <SI n={5}><strong>Verification aur Disbursement ka Wait Karein:</strong> Bank claim ko LIC of India ko forward karta hai. Verification mein documents ki completeness ke hisaab se 30 din se 6 mahine tak lag sakte hain. Paisa NEFT/RTGS ke through claimant ke account mein aata hai.</SI>
          </StepList>

          <WB>
            <strong>Honest Advice:</strong> Bank ya CSC jaate waqt kisi literate parivar ke sadasya ya local advocate ko saath le jayein. Sirf isliye nahi ki process complex hai, balki isliye ki koi aapki baat ko samajh kar unnecessary demands ke khilaf bol sake.
          </WB>
        </section>

        <section className="mb-8">
          <SH>₹1,500 Monthly Pension: Surviving Spouse Ke Liye Rules</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Yadi farmer 60 saal ke baad expire hote hain aur unhe pension mil rahi thi, to surviving spouse ko 50% amount (₹1,500/month) lifetime ke liye milta hai. Yeh process automatic nahi hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Surviving partner ko formally apply karna hoga, relationship prove karni hogi (marriage certificate ya joint affidavit), aur apne khud ke bank account mein transfer set up karna hoga. Purane account mein paisa aana band ho jayega, isliye transition formal hona zaroori hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Top 5 Galtiyan Jo Claim Reject Karwa Sakti Hain (Aur Bachav)</SH>

          <div className="my-6 rounded-xl overflow-hidden border border-[var(--color-border)] shadow-sm">
            <Image
              src="/images/articles/maandhan/family-pension-rules/claim-form.webp"
              alt="PMKMY survivor claim form screenshot with filled example"
              width={800}
              height={600}
              className="w-full"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
              Figure: Survivor claim form ka sample - dhyan se bharein
            </p>
          </div>

          <div className="space-y-3 mb-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-sm text-red-800 dark:text-red-300 mb-1">❌ Galti 1: Nominee Ko Update Na Karna</p>
              <p className="text-xs text-[var(--color-text-muted)]">Enrolment ke waqt parent ya sibling ko nominee banana, aur baad mein unke guzarne par use update na karna. Shadi ya kisi bhi major life event ke baad CSC jakar nomination update zaroor karein.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-sm text-red-800 dark:text-red-300 mb-1">❌ Galti 2: Bank Account Ko Dormant Hone Dena</p>
              <p className="text-xs text-[var(--color-text-muted)]">Agar linked savings account mein 2 saal se koi transaction nahi hua, to bank use 'dormant' mark kar deta hai. Claim process ke waqt transfer fail ho jata hai. Account ko active rakhne ke liye chote transactions (jaise ₹100) karte rahein.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-sm text-red-800 dark:text-red-300 mb-1">❌ Galti 3: Enrolment Receipt Phenk Dena</p>
              <p className="text-xs text-[var(--color-text-muted)]">Enrolment receipt mein aapka unique number aur contribution history hoti hai. Ise hamesha safe rakhein ya uski photo apne phone mein save kar lein. Har query mein yeh number kaam aata hai.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-sm text-red-800 dark:text-red-300 mb-1">❌ Galti 4: Marriage Ko Legally Register Na Karwana</p>
              <p className="text-xs text-[var(--color-text-muted)]">Gaon mein traditional shadi ke baad legal registration na karwana baad mein marital relationship prove karne mein rukawat ban sakta hai. Ration card ya voter list mein dono ke naam ek saath hone se madad milti hai.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-sm text-red-800 dark:text-red-300 mb-1">❌ Galti 5: Claim File Karne Mein Bahut Deri Karna</p>
              <p className="text-xs text-[var(--color-text-muted)]">Grief ke waqt delay natural hai, lekin mahino tak deri karne se documents degrade hote hain aur bank staff change ho jate hain. Ideal yahi hai ki death ke 30 din ke andar process shuru kar dein.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Red Flags: Kab Aur Kaise Karein Escalate?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Normal processing time 30 se 60 din hota hai. Lekin kuch situations mein aapko turant higher authorities ke paas jana chahiye:
          </p>
          <ul className="list-disc pl-5 text-sm text-[var(--color-text-muted)] space-y-2 mb-4">
            <li><strong>Unreasonable Delay:</strong> Yadi bank ya CSC 45 din se zyada time le raha hai bina kisi likhit (written) reason ke.</li>
            <li><strong>Wrong Information:</strong> Yadi officials aapse aise documents maang rahe hain jo PMKMY guidelines mein mandatory nahi hain (jaise unnecessary police verification).</li>
            <li><strong>Unofficial Charges:</strong> Claim process ke liye koi bhi "speed money" ya unofficial charge maanga jana. Yeh illegal hai.</li>
          </ul>
          <WB>
            <strong>Escalation Path:</strong> Sabse pehle bank ke Branch Manager se likhit mein complaint karein. Agar 7 din mein solution na mile, to <strong>District Collector (Jan Sunwai)</strong>, <strong>LIC Grievance Redressal Portal</strong>, ya <strong>Banking Ombudsman</strong> ke paas apni complaint file karein. Bureaucracy written complaints par jaldi react karti hai.
          </WB>
        </section>

        <section className="mb-8">
          <SH>Quick Comparison: Before 60 vs. After 60</SH>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-xs border border-[var(--color-border)] rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[var(--color-bg-alt)] text-left">
                  <th className="p-2 font-black">Aspect</th>
                  <th className="p-2 font-black">Death Before Age 60</th>
                  <th className="p-2 font-black">Death After Age 60</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[var(--color-border)]"><td className="p-2 font-bold">Parivar ko kya milega</td><td className="p-2">Do options: (1) Scheme continue karke ₹3,000/month pension, ya (2) Lump-sum corpus refund</td><td className="p-2">Surviving partner ko lifetime ke liye ₹1,500 monthly</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]"><td className="p-2 font-bold">Benefit ki nature</td><td className="p-2">Ya to recurring pension ya one-time settlement</td><td className="p-2">Recurring pension-like payment</td></tr>
                <tr className="border-t border-[var(--color-border)]"><td className="p-2 font-bold">Primary claimant</td><td className="p-2">Surviving spouse ya Legal Heir</td><td className="p-2">Legally wedded surviving partner</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]"><td className="p-2 font-bold">Key document needed</td><td className="p-2">Death certificate + nominee proof + choice form</td><td className="p-2">Death certificate + marriage proof + pension records</td></tr>
                <tr className="border-t border-[var(--color-border)]"><td className="p-2 font-bold">Approximate timeline</td><td className="p-2">1 se 6 mahine</td><td className="p-2">1 se 3 mahine (yadi pension already active thi)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <SH>Nomination Kaise Update Karein? (Step-by-Step)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Apni nomination update karna bahut aasaan hai. Neeche diye gaye steps follow karein:
          </p>
          <div className="my-6 rounded-xl overflow-hidden border border-[var(--color-border)] shadow-sm">
            <Image
              src="/images/articles/maandhan/family-pension-rules/nomination-update.webp"
              alt="How to update nomination in PMKMY - step by step guide screenshot"
              width={800}
              height={500}
              className="w-full"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
              Figure: CSC ya bank mein nomination update karne ka process
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Sawal Jo Log Sach Me Poochte Hain (FAQs)
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm italic mb-4">
            Yeh wo sawal hain jo CSC centres aur bank branches mein sabse zyada pooche jate hain — generic nahi, bilkul practical.
          </p>
          <FAQBlock faqs={FAQS_DATA} caption="PM-KMY Family Pension — Sawal Jawab" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Ek Baat Yaad Rakhein</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Aapke loved one ne jo paisa jama kiya, woh ek right hai, koi ehsaan nahi. System thoda slow ho sakta hai, lekin persistence se kaam zaroor hota hai. Ek step ek time lein. Pehle death certificate, phir nomination check, phir bank visit. Kisi bhi official ko aapko darane na dein. Aapka haq hai wahan khade hone ka.
          </p>
        </div>

        <GovLink
          href="https://pmkmy.gov.in"
          label="PM Kisan Maandhan Official Portal"
          guide="Check Eligibility &amp; Status"
          guideHref="/maandhan/pm-kisan-maandhan-eligibility-documents"
          portalName="pmkmy.gov.in"
        />

        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Ye Bhi Padhein</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RELATED_CARDS.map((card) => (
              <Link
                key={card.slug}
                href={`/maandhan/${card.slug}`}
                className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg hover:border-green-500 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{card.emoji}</div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-green-600 transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                  {card.desc}
                </p>
                <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                  Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/maandhan/pm-kisan-maandhan-withdrawal-refund-rules', l: '💸 Withdrawal Rules' },
          { href: '/maandhan/pm-kisan-maandhan-status-check-online', l: '🔍 Status Check' },
          { href: '/maandhan/pmkmy-bank-account-change', l: '🏦 Bank Change' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
