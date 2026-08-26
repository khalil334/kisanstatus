import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-02-11T18:34:34+05:30';
const MODIFIED = '2026-08-19T19:34:36+05:30';

const IMG_BASE = '/images/articles/pm-kisan-self-registered-status-check';

const RELATED = [
  { slug: 'PmKisanRejectedStatusReApplyGuide', title: 'Rejected Status. Dobara Apply' },
  { slug: 'PmKisanCorrectionForm2026', title: 'Correction Form Guide' },
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Generated Meaning' },
];

const FAQS_DATA = [
  {
    q: 'Self-registration mein kitna time lagta hai approval mein?',
    a: 'Normally ek-do hafte lagte hain verification mein. Lekin kabhi-kabhi 30-45 din bhi ho jaate hain agar land records match nahi hote ya eKYC pending hai. Status check karte raho, "Pending" dikh raha hai toh wait karo, "Rejected" dikhe toh reason dekho aur fix karo.',
  },
  {
    q: 'Khud registration kiya lekin abhi tak koi payment nahi aayi, kyun?',
    a: 'Teen wajah ho sakti hain: (1) eKYC nahi hui, pehle wahi nipta lo, (2) Bank account Aadhaar se link nahi. NPCI seeding karwao, (3) Land seeding pending hai. Revenue office se contact karo. Sabse pehle status check karo portal par, wahan exact reason dikhega.',
  },
  {
    q: 'Reference number kho gaya hai — ab kya karun?',
    a: 'Koi baat nahi. Aadhaar number se hi sab check ho jaata hai. Beneficiary status mein Aadhaar daalo, puri history saamne.',
  },
  {
    q: 'Online registration mein photo upload karni thi. Kya size chahiye?',
    a: 'Passport size, 20-50 KB tak. White background preferred hai, zaroori nahi. Mobile se kheenchi hui bhi chal jaati hai. Bas chehra saaf dikhna chahiye, dhundhli nahi. Reject ho gayi? Dobara upload kar do, koi limit nahi hai.',
  },
  {
    q: 'Registration ke baad mobile number change kar sakte hain?',
    a: 'Haan. pmkisan.gov.in par "Edit Aadhaar Details" se update ho jaata hai. Purane number par OTP aayega. Purana number hi band ho gaya hai? Tab CSC jaana padega, operator karwa dega.',
  },
];

const HOWTO_STEPS = [
  { name: 'pmkisan.gov.in kholo', text: 'Mobile ya computer, jo bhi ho, official portal pmkisan.gov.in kholo.' },
  { name: 'Farmers Corner dhundo', text: 'Homepage par upar "Farmers Corner" section dhundo.' },
  { name: 'Beneficiary Status par click karo', text: '"Beneficiary Status" option select karo.' },
  { name: 'Aadhaar option select karo', text: 'Do options milenge. Aadhaar ya Mobile number. Aadhaar select karo, zyada reliable hai.' },
  { name: 'Aadhaar number type karo', text: '12-digit Aadhaar number bina space ya dash ke type karo.' },
  { name: 'Captcha bharo aur Get Data dabao', text: 'Screen par diya captcha bharo aur "Get Data" button dabao.' },
  { name: 'Status dekho', text: 'Registered ho toh naam, gaon, mobile/bank ke last digits, registration date aur status (Active/Pending/Rejected) dikh jayega.' },
];

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'PM Kisan Self Registration Status Check Kaise Karein',
  description: 'pmkisan.gov.in par Aadhaar number se PM Kisan beneficiary status check karne ka step-by-step tarika.',
  step: HOWTO_STEPS.map((s) => ({
    '@type': 'HowToStep',
    name: s.name,
    text: s.text,
  })),
};

export default function PmKisanSelfRegisteredStatusCheck({ article }: { article: ArticleMeta }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Self Registration Status</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Self Registration Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Self Registration Status Check 2026: Khud Kiya Registration? Yahan Se Pata Karo
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>10 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || `${IMG_BASE}/hero.webp`}
            alt="PM Kisan self registration status check, online application tracking guide 2026"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Self Registration Status Check — Step by Step Guide
          </p>
        </div>

        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 dark:border-amber-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">Alag Portal Dhundna Band Karein</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            CSC se karwaya ya khud online kiya, farak nahi padta. <strong>Status check karne ka tarika same hai.</strong>
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            Self-registration karne wale aksar sochte hain ki unke liye koi alag portal hoga. Aisa kuch nahi hai. Sab ka status ek hi jagah, pmkisan.gov.in ke Beneficiary Status mein, sirf Aadhaar number se check hota hai.
          </p>
        </div>

        <section className="mb-8">
          <SH>Self Registration Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jab aap khud pmkisan.gov.in par jaake form bharte hain. Bina CSC operator ki help ke, usse self-registration kehte hain. Yeh option 2019 mein add hua tha jab portal ko farmer-friendly banaya gaya, lekin abhi bhi zyadatar log iske baare mein nahi jaante. Isliye CSC pe line lagi rehti hai jabki ghar baithe kaam ho sakta hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Registration khud karne ke baad sabse zyada confusion status check karne mein hoti hai. Log sochte hain "maine khud kiya, shayad koi alag reference number ya login chahiye." Aisa kuch nahi hai. System mein CSC registration aur self registration mein koi field-level farak nahi hota. Dono Aadhaar-linked entries hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Waise portal par ek dedicated option bhi hai — Farmers Corner mein <strong>"Status of Self Registered Farmer"</strong> naam se. Wahan Aadhaar daal ke sirf apni application ka verification status dekh sakte ho, approve hui ya abhi patwari ke paas atki hai. Beneficiary Status se pehle yeh wala check karna better hai agar registration naya-naya kiya hai.
          </p>
          <IB>
            <strong>Fayda:</strong> ₹20-50 bach jaate hain jo CSC wala charge leta hai. <strong>Nuksan:</strong> Agar koi galti ho gayi toh khud correct karna padega, koi help nahi karega. Ek common mistake: naam Aadhaar se hooba-hoo match nahi karna (middle name chhod dena, spelling farak), isse verification atak jaata hai.
          </IB>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={`${IMG_BASE}/self-registration-form.webp`}
            alt="PM Kisan self registration online form on pmkisan.gov.in. Farmers Corner new farmer registration"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            New Farmer Registration Form. Farmers Corner Section
          </p>
        </div>

        <section className="mb-8">
          <SH>Status Check Kaise Karein. Step by Step</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Yeh process bas 2 minute ka hai. Login ya password kuch nahi chahiye, sirf Aadhaar number.
          </p>

          <StepList>
            <SI n={1}>pmkisan.gov.in kholo — mobile ya computer, jo bhi ho</SI>
            <SI n={2}>Farmers Corner dhundo, homepage par upar dikhega</SI>
            <SI n={3}>"Beneficiary Status" par click karo</SI>
            <SI n={4}>Do options milenge. Aadhaar ya Mobile number. Aadhaar select karo (zyada reliable hai)</SI>
            <SI n={5}>12-digit Aadhaar number type karo, bina space ya dash ke</SI>
            <SI n={6}>Captcha bharo aur "Get Data" button dabao</SI>
            <SI n={7}>Agar aap registered ho toh puri details dikh jayengi:</SI>
          </StepList>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-200 dark:border-green-800 my-4">
            <p className="font-bold text-green-800 dark:text-green-300 text-sm mb-3">Kya Dikhega Screen Par:</p>
            <ul className="text-xs text-[var(--color-text-muted)] space-y-2">
              <li>✓ Naam (jaise registration mein bhara tha)</li>
              <li>✓ Gaon ka naam, District, State</li>
              <li>✓ Mobile number (last 4 digits)</li>
              <li>✓ Bank account number (last 4 digits)</li>
              <li>✓ Registration date</li>
              <li>✓ Status: Active / Pending / Rejected</li>
              <li>✓ Kitni installments mili (agar Active hai toh)</li>
            </ul>
          </div>

          <WB>
            <strong>Ek Suggestion:</strong> "Not Found" dikh raha hai? Do baar check karo. Aadhaar sahi type kiya? Agar phir bhi nahi mil raha toh registration hi nahi hua hoga. Kabhi-kabhi form submit hote waqt session timeout ho jaata hai aur data save nahi hota, lekin farmer ko lagta hai ho gaya. Dobara apply karo.
          </WB>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={`${IMG_BASE}/beneficiary-status-result.webp`}
            alt="PM Kisan beneficiary status check result screen, showing active status with payment details"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Beneficiary Status Result. Active Dikh Raha Hai
          </p>
        </div>

        <section className="mb-8">
          <SH>Status Ka Matlab Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Teen status ho sakte hain — har ek ka alag matlab hai.
          </p>

          <div className="space-y-3">
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-xl">
              <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Active</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Matlab sab theek hai. Aap verified ho, payment eligible ho. Agli kist aayegi automatically. Bas bank account active rakho, eKYC complete rakho.
              </p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-xl">
              <h3 className="font-black text-amber-800 dark:text-amber-300 text-sm mb-2">Pending / Under Verification</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-2">
                Matlab application submit ho gayi hai lekin abhi verify nahi hui. Yeh normal hai. Usually ek se do hafte ke andar clear ho jaata hai, kyunki verification State Nodal Officer ke through manually hota hai, automated nahi.
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">
                <strong>Kya karein:</strong> Wait karo. 15 din se zyada ho raha hai toh CSC jaao ya helpline 155261 par call karo.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-xl">
              <h3 className="font-black text-red-800 dark:text-red-300 text-sm mb-2">Rejected</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-2">
                Matlab koi problem hai. Portal par reason dikhega. Woh dekho.
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">
                <strong>Common reasons:</strong> Naam mismatch, land record issue, eKYC pending, bank account inactive. Reason ke hisaab se fix karo aur dobara apply karo.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Self Registration vs CSC. Kya Farak Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Log confuse ho jaate hain. Kya farak padta hai?
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Point</th>
                  <th className="p-3 text-left">Self Registration</th>
                  <th className="p-3 text-left">CSC Registration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cost', 'Free', '₹20-50 charge'],
                  ['Convenience', 'Ghar baithe', 'CSC jaana padega'],
                  ['Help', 'Khud karni padegi', 'Operator help karega'],
                  ['Mistake Correction', 'Khud karni padegi', 'Operator karega'],
                  ['Status Check', 'Same portal', 'Same portal'],
                  ['Processing Time', 'Same (7-15 days)', 'Same (7-15 days)'],
                  ['Payment', 'Same (direct to bank)', 'Same (direct to bank)'],
                ].map(([point, self, csc], i) => (
                  <tr key={point} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{point}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{self}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{csc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <IB>
            <strong>Yaani:</strong> Registration process mein farak hai, lekin ek baar registered ho jaane ke baad system dono ko ek jaisa treat karta hai. Koi alag category ya priority nahi hoti.
          </IB>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={`${IMG_BASE}/edit-aadhaar-details.webp`}
            alt="PM Kisan Edit Aadhaar Details option, correcting name, mobile number, and bank details after self registration"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Edit Aadhaar Details. Correction Option for Self-Registered Farmers
          </p>
        </div>

        <section className="mb-8">
          <SH>6 Common Problems + Solutions</SH>
          <div className="space-y-3">
            {[
              {
                problem: 'Status check karne par "Not Found" dikh raha hai',
                solution: 'Aadhaar number dobara check karo. Agar sahi hai toh matlab registration hi nahi hua — form submit hote waqt error aaya hoga jo notice nahi hua. Aisa bhi ho sakta hai ki internet slow ho aur confirmation page load hone se pehle hi tab band ho jaaye, lagta hai registration ho gaya, lekin backend mein kuch save hi nahi hota. Dobara apply karo pmkisan.gov.in par, aur is baar confirmation message ka screenshot le lo.',
              },
              {
                problem: 'Naam galat dikh raha hai',
                solution: 'Registration mein typing mistake ho gayi hogi. "Edit Aadhaar Details" mein jaake correct karo. Aadhaar card se exact match hona chahiye, spelling, spacing, initials sab.',
              },
              {
                problem: 'Mobile number galat hai',
                solution: 'Edit option se change kar sakte ho. Purane number par OTP aayega. Agar purana number band hai toh CSC jaana padega, wahan operator biometric se verify karke update kar dega.',
              },
              {
                problem: 'Bank account number wrong hai',
                solution: 'Yeh serious hai. Payment galat account mein jaayegi. Bina der correct karo. Branch se IFSC code bhi verify karo, ek digit galat hone se bhi transfer fail ho jaata hai.',
              },
              {
                problem: 'Do baar registration ho gaya galti se',
                solution: 'Ghabrao mat, system Aadhaar se duplicate pakad leta hai aur zyada tar entries khud filter ho jaati hain. Lekin agar dono alag-alag dikh rahi hain toh helpline 155261 par call karo; wo ek entry hata denge. Dhyan rahe: jab tak duplicate bana rehta hai, payment kisi bhi entry par release nahi hoti.',
              },
              {
                problem: 'Pending dikh raha hai 30 din se zyada',
                solution: 'Helpline 155261 par call karo. Ya nearest Block Agriculture Office jaao. Woh log manually check karke bata denge ki kahan atka hai. Zyadatar cases mein land seeding ya eKYC hi wajah hoti hai. Maan lijiye khasra number revenue records mein purane naam se register hai (jaise dada ke naam par), jabki PM Kisan form mein current owner ka naam diya gaya hai — aisi mismatch verification ko lambe samay tak atka sakti hai. Aise case mein tehsil/revenue office se naam-transfer (dakhil-kharij) record dikhana padta hai, tabhi status aage badhta hai.',
              },
            ].map(({ problem, solution }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-bold text-red-700 dark:text-red-400 text-sm mb-2">{problem}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>Solution:</strong> {solution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>Registration Ke Baad Kya Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sirf apply karne se kaam nahi hoga. Yeh karna padega:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <h3 className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">1. eKYC Complete Karo</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Bina eKYC ke payment nahi aayegi. OTP ya CSC se 2 minute ka kaam hai.</p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-2">2. Bank Account Verify Karo</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Aadhaar se link hona chahiye. NPCI seeding confirm karo branch se.</p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <h3 className="font-black text-amber-800 dark:text-amber-300 text-sm mb-2">3. Land Seeding Check Karo</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Khasra number portal par dikhna chahiye. Nahi hai toh patwari se contact karo.</p>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <h3 className="font-black text-purple-800 dark:text-purple-300 text-sm mb-2">4. Regular Status Check</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Har 7-10 din mein check karo. Koi problem hai toh shuru mein hi pata chal jaayega.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Active Ho Gaya. Ab Paisa Kab Aayega? (FTO Ka Chakkar)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Status Active dikhne ka matlab ye nahi ki kal paisa aa jayega. Active hone ke baad ek aur station hai. <strong>FTO</strong>, yaani Fund Transfer Order. Ye ek tarah ka payment order hai jo batch mein banta hai. Aapke state/district ke verified kisano ki list ek saath process hoti hai, ek-ek karke nahi. FTO ban gaya to uske kuch hi dino mein DBT (Direct Benefit Transfer) se paisa seedha bank khaate me credit hota hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Isliye agar aapke gaon ke kisi aur ka paisa aa gaya aur aapka nahi, to ghabrao mat, ho sakta hai aapka FTO agle batch me ho. Status page par hi FTO ka status bhi dikhta hai. Uska poora matlab, har stage ka timeline aur 30 din se zyada atakne par kya karna hai. Sab humne{' '}
            <Link href="/articles/fto-status-check-paisa-kab-aayega" className="underline font-bold text-green-700 dark:text-green-400">FTO status guide</Link> mein detail se likha hai. Naye self-registered kisano ke liye yahi agla page hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Status Check Ke Naam Par Chalne Wali Fake Websites</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Google par &ldquo;pm kisan status&rdquo; type karo to upar kai .com aur .in websites dikhengi jo sarkari jaisi lagti hain. Inme se kuch sirf ads dikhati hain. Wo jhelne layak hain. Par kuch aapka Aadhaar number aur mobile maang kar <strong>OTP</strong> tak poochhne lagti hain. Yaad rakho: asli status check me <strong>OTP ki zaroorat hi nahi padti</strong> — sirf Aadhaar aur captcha. Aur central sarkar ki har asli scheme ka portal <strong>gov.in ya nic.in</strong> par hota hai. Pmkisan.gov.in ke alawa kisi site par apni details mat daalo.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Agar kisi call ya website par OTP de diya aur khaate se paisa kat gaya, to der mat karo, <strong>1930</strong> par call karo ya <strong>cybercrime.gov.in</strong> par shikayat darj karo, aur apne bank ko turant batao. Jitni jaldi report hogi, paisa wapas milne ke chances utne behtar.
          </p>
        </section>

        <section className="mb-8">
          <SH>Help Kahan Se Le?</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Helpline</p>
              <p className="text-xs text-[var(--color-text-muted)]">155261 (Toll Free)</p>
              <p className="text-xs text-[var(--color-text-muted)]">Mon-Sat, 9 AM - 6 PM</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">Block Office</p>
              <p className="text-xs text-[var(--color-text-muted)]">Agriculture Officer se milo</p>
              <p className="text-xs text-[var(--color-text-muted)]">Written complaint do</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <p className="font-black text-purple-800 dark:text-purple-300 text-sm mb-2">CSC Center</p>
              <p className="text-xs text-[var(--color-text-muted)]">Nazdeeki CSC jaao</p>
              <p className="text-xs text-[var(--color-text-muted)]">₹20-30 charge lag sakta hai</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-2">Email</p>
              <p className="text-xs text-[var(--color-text-muted)]">pmkisan-ict@gov.in</p>
              <p className="text-xs text-[var(--color-text-muted)]">Screenshot attach karo</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="p-4 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl">
            <p className="text-xs font-bold text-[var(--color-text)] mb-2">Official Source</p>
            <ul className="text-xs text-[var(--color-text-muted)] space-y-1 list-disc list-inside">
              <li>
                Status check ka process. Farmers Corner &gt; Know Your Status, official portal:{' '}
                <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="underline text-[var(--color-primary)]">pmkisan.gov.in</a>
              </li>
              <li>
                Status of Self Registered Farmer, updation/verification page, official portal:{' '}
                <a href="https://pmkisan.gov.in/SearchSelfRegisterfarmerDetailsnewUpdated.aspx" target="_blank" rel="noopener noreferrer" className="underline text-[var(--color-primary)]">pmkisan.gov.in. Self Registered Farmers Updation</a>
              </li>
            </ul>
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={`${IMG_BASE}/helpline-support.webp`}
            alt="PM Kisan helpline 155261 and grievance support options for self-registered farmers facing status issues"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Where to Get Help. Helpline, Block Office, CSC, Email
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Self Registration Wale Kisano Ke Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} variant="cards" caption="PM Kisan Self Registration Status FAQ 2026. Real Answers" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Self-Registration Walon Ki Checklist</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Khud registration karne walon ke paas CSC operator ka reminder nahi hota — yeh 5 kaam khud track karne padte hain:
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>pmkisan.gov.in par Beneficiary Status mein Aadhaar se status dekhein</li>
            <li>Pehli baar “Pending for Approval” dikhna normal hai. State verification chal raha hai</li>
            <li>eKYC complete karein, self-registered logon ka yeh sabse zyada chhutta hai</li>
            <li>Land seeding status bhi dekh lein, form khud bhara hai toh Khasra galti aam hai</li>
            <li>Har 7-10 din mein status dobara check karte rahein jab tak Active na ho</li>
          </ol>
        </div>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="PM Kisan Beneficiary Status. Official Portal"
          guide="Abhi Check Karo"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          title="Apna Total Benefit Calculate Karo"
          desc="Kitni installments mili, kitni pending. Sab jaano"
          primaryCta={{ href: '/calculator/pm-kisan-benefit', label: 'Benefit Calculator →' }}
          secondaryCta={{ href: '/calculator', label: 'Sab Utilities' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} bioKey="PmKisanSelfRegisteredStatusCheck" />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisan24viKist2026', l: '24vi Kist' },
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
          { href: '/articles/PmKisanEkycOnline2026', l: 'eKYC Guide' },
        ]} />
        <Disclaimer k="PmKisanSelfRegisteredStatusCheck" />
      </div>
    </>
  );
}
