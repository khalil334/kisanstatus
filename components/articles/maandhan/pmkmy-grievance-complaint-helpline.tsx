'use client';

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { SI, StepList, IB, WB, DB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { MaandhanArticleMeta } from '@/lib/maandhan-data';

const PUBLISHED = '2026-07-28T08:00:00+05:30';
const MODIFIED = '2026-07-28T08:00:00+05:30';

const RELATED_CARDS = [
  {
    slug: 'pm-kisan-maandhan-status-check-online',
    title: 'Status Check Online',
    desc: 'Apna pension status, contribution history aur payment details online kaise check karein.',
    emoji: '🔍',
  },
  {
    slug: 'pmkmy-bank-account-change',
    title: 'Bank Account Change',
    desc: 'Registered bank account update ya change karne ka complete process.',
    emoji: '🏦',
  },
  {
    slug: 'pm-kisan-maandhan-pension-card-download',
    title: 'Pension Card Download',
    desc: 'PMKMY pension card/acknowledgement ghar baithe kaise download karein.',
    emoji: '📄',
  },
];

const FAQS_DATA = [
  {
    q: 'PM Kisan Maandhan Yojana ka official helpline number kya hai?',
    a: 'PMKMY ka fund LIC manage karti hai. Sabse safe tarika ye hai ki aap official portal pmkmy.gov.in par jakar "Contact Us" section check karein. Wahan diya gaya toll-free number ya regional LIC office ka number hi use karein. Internet par ghoom rahe random numbers par apni OTP ya Aadhaar details share na karein.',
  },
  {
    q: 'Online grievance file karne ke baad reply aane me kitna time lagta hai?',
    a: 'Sarkari guidelines ke mutabiq, ek standard grievance ka resolution 15 se 30 working days ke andar hona chahiye. Simple queries jaldi resolve ho jati hain, lekin account correction ya payment delay me thoda waqt lag sakta hai kyunki usme bank aur LIC dono ki verification chahiye hoti hai.',
  },
  {
    q: 'CSC wale ne galat details daal di hain, ab shikayat kahan karein?',
    a: 'Agar enrollment ke waqt naam, date of birth, ya mobile number galat daal diya gaya hai, to sabse pehle usi CSC center par jayein jahan se form bhara tha. Agar wo cooperate nahi karte, to nazdeeki bank branch (jahan se auto-debit hota hai) me likhit shikayat dein.',
  },
  {
    q: 'Mere account se paisa kat raha hai lekin portal par status "Inactive" kyun dikh raha hai?',
    a: 'Ye aksar tab hota hai jab bank se paisa kat to jata hai, lekin LIC ke system me update nahi ho pata (technical glitch ya NACH file mismatch). Iski shikayat aapko seedha PMKMY portal par "Grievance" section me karni chahiye, saath hi apne bank se transaction proof lekar email karna chahiye.',
  },
  {
    q: 'Kya main email par bhi complaint bhej sakta hoon?',
    a: 'Haan, lekin email tabhi effective hoti hai jab aap sahi department ko likh rahe hon. PMKMY portal par "Contact Us" page par diye gaye official grievance email ID ka hi use karein. Email me apna Subscriber ID, registered mobile number, aur clear issue likhein.',
  },
  {
    q: 'Helpline number par call karne par koi jawab nahi mil raha, kya karun?',
    a: 'Call volume bahut high hota hai. Koshish karein ki subah 10 baje se 11 baje ke beech call karein. Agar fir bhi na lage, to online grievance portal sabse behtar vikalp hai kyunki wahan aapko ek written tracking number milta hai jise aap baad me follow-up ke liye use kar sakte hain.',
  },
  {
    q: 'Meri complaint ka status kaise track karun?',
    a: 'Jab aap PMKMY portal par grievance register karte hain, to aapko ek unique Complaint Reference Number milta hai. Portal par "Track Grievance" ya "Status Check" ke option me ye number daalkar aap dekh sakte hain ki aapki shikayat abhi kis stage par hai.',
  },
  {
    q: 'Auto-debit fail ho raha hai har mahine, iska solution kya hai?',
    a: 'Auto-debit fail hone ke do mukhya karan hote hain: ya to account me sufficient balance nahi hai, ya phir aapka NACH mandate expire ya block ho gaya hai. Pehle bank branch me jakar NACH mandate ka status check karwayein. Agar mandate me issue hai, to naya mandate form bharna padega.',
  },
];

export default function PMKMYGrievanceComplaintHelpline({ article }: { article: MaandhanArticleMeta }) {
  return (
    <>
      <Script id="maandhan-grievance-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: 'PMKMY Grievance & Complaint Helpline – Shikayat Darj Karne Ka Sahi Tarika',
              description: 'PM Kisan Maandhan Yojana me shikayat kaise karein? Helpline numbers, online grievance process, CSC complaint, aur common problems ka practical solution.',
              image: 'https://kisanstatus.com/images/articles/maandhan/grievance-helpline-hero.webp',
              inLanguage: 'hi-IN',
              keywords: 'PMKMY helpline number, PM Kisan Maandhan complaint, pension shikayat, grievance redressal, toll free number, CSC complaint',
              articleSection: 'Agriculture & Pension Schemes',
              wordCount: 2400,
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
        })}
      </Script>

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/maandhan" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Maandhan Yojana</Link>
            <span>/</span>
            <span className="text-white font-bold">Grievance & Helpline</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Support & Complaints</span>

          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PMKMY Grievance & Complaint Helpline – Shikayat Darj Karne Ka Sahi Tarika
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
            src="/images/articles/maandhan/grievance-helpline-hero.webp"
            alt="Farmer calling PMKMY helpline number for pension complaint and grievance redressal"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Sahi madad tak pahunchne ka complete raasta
          </p>
        </div>

        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-xl">
          <p className="text-sm md:text-base text-red-900 dark:text-red-100 leading-relaxed font-medium">
            <strong>Samasya kya hai?</strong> PM Kisan Maandhan Yojana me paisa kat raha hai par status inactive dikh raha hai? Helpline par call nahi lag raha? CSC wala galat information de raha hai? Aisi pareshaniyan aam hain, lekin inka hal nikalna mushkil nahi hai. Is guide me hum aapko batayenge ki shikayat darj karne ke kaun se tareeke actually kaam karte hain aur aap apni problem ka solution bina baar-baar chakkar lagaye kaise pa sakte hain.
          </p>
        </div>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          PM Kisan Maandhan Yojana (PMKMY) me 60 saal ki umar ke baad ₹3,000 mahina pension milne ka wada sarkar karti hai. Lekin jab baat actual execution ki aati hai, to kai kisanon ko auto-debit fail hone, payment delay, ya account status 'inactive' dikhne jaisi pareshaniyon ka samna karna padta hai. Aise me sabse bada sawal yahi aata hai ki shikayat kahan aur kaise karein.
        </p>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Internet par bahut saari adhuri ya galat jankari ghoom rahi hai. Is article me hum sirf wahi tareeke batayenge jo official guidelines ke hisab se sahi hain aur jinse aapki samasya ka practical hal nikal sakega.
        </p>

        <section className="mb-8">
          <SH>Official Helpline aur Contact — Kin Numbers Par Bharosa Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sabse pehli aur sabse zaroori baat: Internet par ghoom rahe random 1800 numbers par kabhi bhi apni OTP, Aadhaar, ya bank details share na karein. PMKMY ka fund Life Insurance Corporation (LIC) manage karti hai, isliye iski official shikayat prakriya bhi LIC aur sarkari portal ke through hi chalti hai.
          </p>

          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-xl p-5 mb-6">
            <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-4">📞 Verified Contact Karne Ke Tareeke</h3>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-xl font-black text-green-700 dark:text-green-400 mb-1">Official Portal: pmkmy.gov.in</p>
                <p className="text-xs text-[var(--color-text-muted)] mb-2">Sabse safe aur updated contact yahi milega</p>
                <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                  <li>🌐 Website ke niche "Contact Us" ya "Helpline" section check karein.</li>
                  <li>📋 Wahan diya gaya toll-free number ya regional LIC office ka number hi use karein.</li>
                  <li> Call karne ka sahi waqt: Subah 10:30 se 11:30 ke beech (jab lines kam busy hoti hain).</li>
                </ul>
              </div>
            </div>
          </div>

          <WB>
            <strong>Fraud Alert:</strong> Koi bhi aapse paise nahi maangega helpline par. Agar koi "processing fee" ya "fast track charge" maange, to wo fraud hai. Turant call cut karein aur iski shikayat karein.
          </WB>
        </section>

        <section className="mb-8">
          <SH>Sahi Jagah Shikayat Karein — Problem Ke Hisab Se Solution</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sabse badi galti jo kisan karte hain wo ye hai ki wo har problem ke liye CSC ya helpline par chakkar kaat-te hain. Asliyat ye hai ki har problem ka alag nodal officer hota hai. Neeche di gayi table se samjhein ki aapki problem ka solution kahan milega:
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Problem Kya Hai?</th>
                  <th className="p-3 text-left">Kisko Contact Karein?</th>
                  <th className="p-3 text-left">Kyun?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">Enrollment me galat details (Naam, DOB, Mobile)</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text)]">CSC Center ya Bank Branch</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Entry level correction sirf enrollment point par hi ho sakta hai.</td>
                </tr>
                <tr className="bg-green-50/40 dark:bg-green-900/10">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">Auto-debit fail ho raha hai / NACH issue</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text)]">Apni Bank Branch</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">NACH mandate bank ke system se manage hota hai.</td>
                </tr>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">Pension payment nahi aayi / Account inactive</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text)]">PMKMY Portal / LIC</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Fund management LIC ke paas hai, payment unhi se release hoti hai.</td>
                </tr>
                <tr className="bg-green-50/40 dark:bg-green-900/10">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">Portal login ya technical error</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text)]">PMKMY Helpdesk Email</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Technical glitches portal team hi fix karti hai.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Jab aap sahi department ko shikayat bhejte hain, to resolution jaldi milta hai. Galat jagah shikayat karne se wo bas transfer hoti rehti hai aur aapka waqt barbad hota hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Online Grievance — Sabse Trackable Tarika</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Online grievance file karne ka sabse bada fayda ye hai ki aapke paas ek written record (complaint number) hota hai. Helpline par baat karne ka koi proof nahi rehta, lekin online portal par aap har step track kar sakte hain.
          </p>

          <StepList>
            <SI n={1}><strong>PMKMY Official Portal Par Jaayein:</strong> Browser me pmkmy.gov.in type karein. Dhyan rahe — .gov.in wali site hi kholein.</SI>
            <SI n={2}><strong>Login Karein:</strong> "Subscriber Login" par click karein. Apna registered mobile number daalein aur OTP verify karein. Agar mobile number change ho gaya hai, to ye method kaam nahi karega — aapko CSC jaana padega.</SI>
            <SI n={3}><strong>Grievance Section Kholein:</strong> Dashboard par "Grievance" ya "Raise Complaint" ka option dikhega. Us par click karein.</SI>
            <SI n={4}><strong>Complaint Type Chunein:</strong> Dropdown menu me se apni problem ka type select karein — jaise "Payment Not Received", "Wrong Deduction", "Account Issue", etc.</SI>
            <SI n={5}><strong>Detail Me Likhein:</strong> Apni problem ko clear aur detail me likhein. Jaise: "Mere account se har mahine ₹100 kat rahe hain lekin portal par status 'Inactive' dikh raha hai. Last 3 mahine se payment confirm nahi ho rahi." Jitni detail doge, utna jaldi solution milega.</SI>
            <SI n={6}><strong>Documents Attach Karein:</strong> Agar aapke paas koi proof hai — jaise bank statement screenshot, transaction ID — to use attach karein.</SI>
            <SI n={7}><strong>Submit Karein aur Number Note Karein:</strong> Submit button dabate hi aapko ek <strong>Complaint Reference Number</strong> milega. Ise kahin likh lein ya screenshot le lein.</SI>
          </StepList>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/online-grievance-portal.webp"
              alt="PMKMY online grievance portal screenshot showing complaint registration form"
              width={1000}
              height={560}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Online grievance file karte waqt complaint number zaroor note karein
            </p>
          </div>

          <IB>
            <strong>Pro Tip:</strong> Complaint file karne ke 7 din baad portal par "Track Complaint" section me jakar apna reference number daalein. Agar status "Under Process" hai, to thoda aur wait karein. Agar 15 din tak koi update nahi, to fir se grievance file karein ya helpline par call karein with reference number.
          </IB>
        </section>

        <section className="mb-8">
          <SH>CSC Center Par Complaint — Kab aur Kaise Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            CSC (Common Service Center) wale wo log hain jinhone aapki enrollment ki thi. Agar problem enrollment se related hai — jaise galat details daal di, wrong bank account link kar diya, ya mobile number galat register kar diya — to CSC hi sabse behtar option hai.
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-300 dark:border-amber-700">
              <h4 className="font-bold text-amber-900 dark:text-amber-300 mb-2">✅ CSC Tab Jayein Jab:</h4>
              <ul className="text-sm text-[var(--color-text-muted)] space-y-1 list-disc pl-5">
                <li>Enrollment form me galati hui ho</li>
                <li>Aadhaar number galat register ho gaya ho</li>
                <li>Bank account change karna ho</li>
                <li>Mobile number update karna ho</li>
                <li>Pension card download nahi ho raha ho</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-300 dark:border-red-700">
              <h4 className="font-bold text-red-900 dark:text-red-300 mb-2">❌ CSC Tab Na Jayein Jab:</h4>
              <ul className="text-sm text-[var(--color-text-muted)] space-y-1 list-disc pl-5">
                <li>Payment issue ho (ye bank ya LIC ka matter hai)</li>
                <li>Pension amount kam mil rahi ho</li>
                <li>Account technical issue ho</li>
              </ul>
            </div>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            CSC par jaate waqt ye documents zaroor le jaayein:
          </p>
          <ul className="list-disc pl-6 text-sm text-[var(--color-text-muted)] space-y-2 mb-4">
            <li>Aadhaar card (original + photocopy)</li>
            <li>Bank passbook (jisme IFSC code ho)</li>
            <li>Enrollment receipt (agar hai)</li>
            <li>Mobile phone (OTP verification ke liye)</li>
          </ul>

          <WB>
            <strong>Important:</strong> CSC wale se hamesha acknowledgement slip lein jisme likha ho ki unhone aapki complaint register kar li hai. Slip par date, unka signature, aur complaint number hona chahiye. Bina slip ke baad me proof nahi bachega.
          </WB>
        </section>

        <section className="mb-8">
          <SH>Bank Branch Me Complaint — Direct Solution</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar aapki problem auto-debit se related hai — jaise paisa kat raha hai lekin portal par update nahi ho raha, ya account me balance nahi hai — to seedha apni bank branch me jaayein jahan se auto-debit hota hai.
          </p>

          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-5 rounded-r-xl mb-6">
            <h3 className="font-bold text-purple-900 dark:text-purple-300 mb-3">Bank Me Ye Steps Follow Karein:</h3>
            <ol className="list-decimal pl-6 text-sm text-[var(--color-text-muted)] space-y-2">
              <li>Branch manager se miliye — counter wale staff se nahi</li>
              <li>Apni problem clear batayein with dates aur amounts</li>
              <li>Bank statement dikhayein jisme deduction dikh rahi ho</li>
              <li>NACH mandate copy maangein (agar available ho)</li>
              <li>Complaint register me entry karwayein</li>
              <li>Acknowledgement slip lein with complaint number</li>
            </ol>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bank wale aapko ek complaint number denge. Is number se aap baad me status check kar sakte hain. Agar bank wale cooperate nahi kar rahe, to unse RBI Banking Ombudsman ka form maangein — ye sunte hi wo serious ho jayenge.
          </p>
        </section>

        <section className="mb-8">
          <SH>Email Par Complaint — Likhit Shikayat Ka Tarika</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar aapko lagta hai ki phone par baat karne se kaam nahi banega, ya aap chahte hain ki aapki complaint ka written record rahe, to email sabse behtar option hai. Iska fayda ye hai ki aap sab kuch detail me likh sakte hain, documents attach kar sakte hain, aur reply ka proof hamesha rehta hai.
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">📧 Official Email Kaise Dhundein?</h3>
            <p className="text-sm text-[var(--color-text-muted)] mb-3">
              Email IDs badal sakti hain, isliye sabse safe tarika ye hai ki aap <strong>pmkmy.gov.in</strong> par jakar "Contact Us" page par diye gaye official grievance email ID ka hi use karein. LIC ke official PMKMY page par bhi regional office ke emails mil jate hain.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800 mb-6">
            <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-3">Email Kaise Likhein — Perfect Format:</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-xs space-y-2">
              <p><strong>Subject:</strong> PMKMY Grievance - [Aapka Naam] - [Mobile Number]</p>
              <br />
              <p><strong>Body:</strong></p>
              <p>Respected Sir/Madam,</p>
              <br />
              <p>Mera naam [Aapka Naam] hai. Main PM Kisan Maandhan Yojana ka registered subscriber hoon.</p>
              <br />
              <p><strong>Meri Details:</strong></p>
              <ul className="list-disc pl-4">
                <li>Aadhaar Number: [XXXXXXXXXXXX]</li>
                <li>Registered Mobile: [98765XXXXX]</li>
                <li>Bank Account: [Last 4 digits]</li>
                <li>Enrollment Date: [Month/Year]</li>
              </ul>
              <br />
              <p><strong>Meri Samasya:</strong></p>
              <p>[Yahan apni problem detail me likhein — jaise "Pichle 3 mahine se mere account se ₹100 kat rahe hain lekin portal par status 'Inactive' dikh raha hai."]</p>
              <br />
              <p><strong>Mera Nivedan:</strong></p>
              <p>Kripya meri is samasya ka samadhan karein aur mujhe reply karein.</p>
              <br />
              <p>Dhanyavad,</p>
              <p>[Aapka Naam]</p>
              <p>[Mobile Number]</p>
              <p>[Date]</p>
            </div>
          </div>

          <IB>
            <strong>Pro Tip:</strong> Email bhejne ke baad "Sent Items" me check karein ki email successfully send hua hai. Agar 7 working days me reply na aaye, to same email ko "Forward" karke fir se bhejein with subject me "REMINDER: " add karke.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Common Problems aur Unke Quick Solutions</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Yahan wo top problems hain jo aksar kisanon ko face karni padti hain, aur unka practical solution:
          </p>

          <div className="space-y-4">
            <div className="border border-red-200 dark:border-red-800 rounded-lg p-5 bg-red-50 dark:bg-red-900/20">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Problem 1: Auto-Debit Fail Ho Raha Hai</h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-2"><strong>Kyun hota hai:</strong> Account me balance nahi hai, ya NACH mandate expire ho gaya hai, ya bank ne mandate block kar diya hai.</p>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Solution:</strong> Pehle account me balance check karein. Agar balance hai, to bank branch me jaakar NACH mandate status check karwayein. Naya mandate set karwana pad sakta hai.</p>
            </div>

            <div className="border border-orange-200 dark:border-orange-800 rounded-lg p-5 bg-orange-50 dark:bg-orange-900/20">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Problem 2: Pension Payment Nahi Mil Rahi</h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-2"><strong>Kyun hota hai:</strong> Account inactive ho gaya hai, KYC pending hai, ya bank account change ho gaya hai.</p>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Solution:</strong> Portal par login karke status check karein. Agar "KYC Pending" hai, to CSC par jaakar biometric verification karwayein. Agar account change hua hai, to bank branch me jaakar update karwayein.</p>
            </div>

            <div className="border border-yellow-200 dark:border-yellow-800 rounded-lg p-5 bg-yellow-50 dark:bg-yellow-900/20">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Problem 3: CSC Wale Ne Galat Details Daal Di</h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-2"><strong>Kyun hota hai:</strong> CSC operator ne jaldi-baazi me galat information enter kar di — jaise wrong DOB, wrong account number, ya galat mobile number.</p>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Solution:</strong> Usi CSC par jaayein jahan se enrollment karwayi thi. Correction form bharein. Agar wo mana karein, to bank branch me complaint karein ya LIC ko email karein with proof.</p>
            </div>

            <div className="border border-blue-200 dark:border-blue-800 rounded-lg p-5 bg-blue-50 dark:bg-blue-900/20">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Problem 4: Portal Par Login Nahi Ho Raha</h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-2"><strong>Kyun hota hai:</strong> Mobile number change ho gaya hai, ya OTP nahi aa raha, ya portal down hai.</p>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Solution:</strong> Agar mobile number change hua hai, to CSC par jaakar update karwayein. Agar OTP nahi aa raha, to DND check karein. Portal down hai to 2-3 ghante baad try karein.</p>
            </div>

            <div className="border border-green-200 dark:border-green-800 rounded-lg p-5 bg-green-50 dark:bg-green-900/20">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Problem 5: Paisa Kat Raha Hai Par Status Update Nahi</h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-2"><strong>Kyun hota hai:</strong> Bank se paisa kat gaya lekin LIC ke system me update nahi hua — technical glitch ya delay.</p>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Solution:</strong> Bank statement download karein jisme deduction dikh rahi ho. Ise LIC ko email karein with complaint. 7-10 din me update ho jayega.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Complaint Ka Status Kaise Track Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jab aap kahi bhi complaint file karte hain — online, CSC, bank, ya email — to hamesha ek reference number milta hai. Is number se aap apni complaint ka status check kar sakte hain.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">📱 Online Portal</h3>
              <p className="text-xs text-[var(--color-text-muted)]">PMKMY portal par "Track Complaint" section me reference number daalein. Real-time status dikhega.</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2"> Helpline Call</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Official number par call karke apna reference number batayein. Operator status bata dega.</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-100 dark:border-yellow-800">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">📧 Email Reply</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Agar email kiya tha, to reply check karein. Agar nahi aaya, to reminder email bhejein.</p>
            </div>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Typical Timeline:</strong>
          </p>
          <ul className="list-disc pl-6 text-sm text-[var(--color-text-muted)] space-y-2">
            <li><strong>Simple queries:</strong> 3-5 working days</li>
            <li><strong>Payment issues:</strong> 7-10 working days</li>
            <li><strong>Account correction:</strong> 15-20 working days</li>
            <li><strong>Complex cases:</strong> 30 working days tak lag sakte hain</li>
          </ul>

          <WB>
            <strong>Important:</strong> Agar 15 din se zyada ho gaye aur koi update nahi, to complaint ko "escalate" karein — matlab upar wale authority ko email karein ya district nodal officer se contact karein.
          </WB>
        </section>

        <section className="mb-8">
          <SH>District Nodal Officer Se Contact</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar helpline, online grievance, CSC, bank — kahi se bhi solution nahi mil raha, to last option hai apne district ke PMKMY Nodal Officer se contact karna. Ye officer district level par sabse higher authority hote hain PMKMY ke liye.
          </p>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-5 rounded-r-xl mb-6">
            <h3 className="font-bold text-indigo-900 dark:text-indigo-300 mb-3">Nodal Officer Ko Kaise Dhundein?</h3>
            <ol className="list-decimal pl-6 text-sm text-[var(--color-text-muted)] space-y-2">
              <li>Google par search karein: "[Aapka District] PMKMY nodal officer contact"</li>
              <li>Ya district official website par jaayein — wahan "Agriculture Department" ya "PMKMY" section me contact mil jayega</li>
              <li>Agar online nahi mil raha, to district collector office me jaakar puchen</li>
            </ol>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Nodal officer ko email karte waqt apni puri complaint history attach karein — helpline call dates, online grievance numbers, CSC acknowledgement copies, sab kuch. Jab wo dekhte hain ki aapne pehle se kaafi koshish ki hai, to wo seriously lete hain.
          </p>
        </section>

        <section className="mb-8">
          <SH>Complaint Karte Waqt Ye Galtiyan Na Karein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bahut se kisan complaint to karte hain lekin kuch aam galtiyan kar dete hain jiski wajah se solution late milta hai ya milta hi nahi.
          </p>

          <div className="space-y-3 mb-4">
            <div className="flex items-start">
              <span className="text-red-600 mr-3 font-bold text-xl">✗</span>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Galti 1:</strong> Complaint number note nahi karna. Bina number ke baad me proof nahi bachta.</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-3 font-bold text-xl">✗</span>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Galti 2:</strong> Problem ko detail me nahi batana. "Paisa nahi mila" likhne se kaam nahi chalega — date, amount, transaction ID sab likhein.</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-3 font-bold text-xl">✗</span>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Galti 3:</strong> Ek baar complaint karke chhod dena. Agar 7 din me reply na aaye, to follow-up zaroor karein.</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-3 font-bold text-xl"></span>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Galti 4:</strong> Galat jagah complaint karna. Payment issue ke liye CSC par jaane se kaam nahi banega — bank ya LIC ko contact karein.</p>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-3 font-bold text-xl">✗</span>
              <p className="text-sm text-[var(--color-text-muted)]"><strong>Galti 5:</strong> Documents attach nahi karna. Bank statement, screenshot, receipt — jo bhi proof ho, use zaroor attach karein.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Poochhe Jaane Wale Sawal (FAQs)
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PMKMY Grievance & Helpline — Sawal Jawab" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Aakhri Salah</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Shikayat karna koi buri baat nahi hai — ye aapka haq hai. Lekin shikayat tabhi kaam karegi jab aap sahi tareeke se, sahi jagah, aur sahi information ke saath karenge. Upar bataye gaye sabhi methods official guidelines par aadhaarit hain.
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Sabse pehle online grievance try karein — ye sabse trackable hai. Agar kaam na bane, to helpline par call karein. Agar fir bhi solution na mile, to district nodal officer ko email karein. Himmat na haarein — aapki pension aapka haq hai, aur uske liye ladna padega to ladna chahiye.
          </p>
        </div>

        <GovLink
          href="https://pmkmy.gov.in"
          label="PM Kisan Maandhan Official Portal"
          guide="Grievance Registration"
          guideHref="/maandhan/pm-kisan-maandhan-status-check-online"
          portalName="pmkmy.gov.in"
        />

        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Related Articles</h3>
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
          { href: '/maandhan/pm-kisan-maandhan-status-check-online', l: '🔍 Status Check' },
          { href: '/maandhan/pmkmy-bank-account-change', l: '🏦 Bank Change' },
          { href: '/maandhan/pm-kisan-maandhan-pension-card-download', l: '📄 Pension Card' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}