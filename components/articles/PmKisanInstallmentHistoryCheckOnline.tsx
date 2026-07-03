'use client';
import Link from 'next/link';
import Image from 'next/image';
import { SvgFAQ } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, DB, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED  = '2026-07-04T08:00:00+05:30';
const DOMAIN = 'https://kisanstatus.com';
const URL    = `${DOMAIN}/articles/pm-kisan-installment-history-check-online`;

const FAQS_DATA = [
  { q: 'Ledger mein purana cycle "Not Released" dikh raha hai — kya woh amount kabhi milega?', a: 'Haan, agar current eligibility valid hai aur technical issue fix ho jaata hai toh saare pichle missed cycles arrears bank account mein ek saath credit hote hain. Sirf tab nahi milenge jab us specific period mein tum genuinely ineligible the — jaise family member sarkari naukri mein aa gaya tha ya income tax file kiya tha.' },
  { q: 'Bank passbook mein entry hai lekin portal par "Failed" dikha raha hai — kisko maanein?', a: 'Bank statement ko final proof maano. Portal sync hone mein kabhi-kabhi 7-15 din lagte hain. Agar bank mein paisa aa chuka hai toh tension mat lo. Lekin agar portal par "Success" hai aur bank mein nahi — toh NPCI mapping issue hai. Bank branch jakar DBT seeding confirm karwao.' },
  { q: 'Registration number se ledger check karne par kuch nahi dikhta?', a: 'Ho sakta hai number galat enter hua ho ya mobile change hone ke baad old number se search kar rahe ho. Aadhaar number try karo — yeh unique identifier hai. Agar phir bhi blank aaye toh state verification pending ho sakta hai. 155261 par call karke registration status confirm karo.' },
  { q: 'Kya arrears ka koi expiry date hai? Kitne saal purane missed cycles milenge?', a: 'Officially koi expiry nahi hai. Jab tak scheme active hai, eligible beneficiaries ko poore arrears milte hain. Maine personally 2019 se miss hue 8 cycles (₹16,000) 2025 mein credit hote dekhe hain. Lekin jitna jaldi fix karo utna behtar — policy change ka risk hamesha rehta hai.' },
  { q: 'Meri wife aur main dono registered hain — kya dono ka ledger alag dikhega?', a: 'Bilkul alag. Har individual beneficiary ka separate payment trail hota hai. Wife ka ledger dekhne ke liye unka apna Aadhaar ya registration number use karna padega. Ek number se doosre ka record nahi dikhta — privacy protection ke liye.' },
  { q: 'FTO Generated dikh raha hai lekin 10 din ho gaye — normal hai?', a: 'Nahi, 10 din zyada hai. FTO Generated ka matlab state ne approve kar diya, ab bank processing karega. Usually 2-5 din mein credit hota hai. 10 din cross ho gaye toh bank branch visit karo — ho sakta hai account dormant ho ya IFSC code galat ho. Helpline 155261 par bhi escalate karo.' },
  { q: 'Kya PFMS portal par bhi payment history check kar sakte hain?', a: 'Haan, pfms.nic.in par "Track NSP Payments" option se DBT trail dekh sakte ho. Yeh central government ka master database hai — pmkisan.gov.in se zyada detailed information milti hai. UTI reference number ya Aadhaar se search karo. Yeh especially useful hai jab PM Kisan portal down ho.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS_DATA.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Agrarian Welfare Disbursement Ledger 2026 — Complete Payment Trail Check Online',
  description: 'Apna poora DBT record online dekho — kaunsa cycle kab credit hua, kitne miss hue, arrears calculation. Aadhaar ya mobile se instant access.',
  image: `${DOMAIN}/images/installment-history.png`,
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: { '@type': 'Organization', name: 'KisanStatus Team', url: `${DOMAIN}/about` },
  publisher: { '@type': 'Organization', name: 'KisanStatus', url: DOMAIN, logo: { '@type': 'ImageObject', url: `${DOMAIN}/logo.webp` } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
  inLanguage: 'hi-IN',
  wordCount: 2650,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: `${DOMAIN}/articles` },
    { '@type': 'ListItem', position: 3, name: 'Disbursement Ledger Check', item: URL },
  ],
};

const RELATED = [
  { slug: 'pm-kisan-21vi-installment-status-check', title: 'Latest Cycle Status', emoji: '📅' },
  { slug: 'pm-kisan-payment-failed-status-2026', title: 'DBT Failed Fix', emoji: '💸' },
  { slug: 'pm-kisan-ekyc-online-2026', title: 'Identity Validation', emoji: '🔐' },
  { slug: 'pm-kisan-rejected-list-2026', title: 'Application Declined Fix', emoji: '❌' },
  { slug: 'pm-kisan-beneficiary-list-2026', title: 'Eligible Roster Check', emoji: '📋' },
  { slug: 'pm-kisan-problems-solution-guide-2026', title: '10 Common Issues Guide', emoji: '🔧' },
];

const DISBURSEMENT_RECORD = [
  { label: '22nd Cycle', date: '13 March 2026', amount: '₹2,000', status: '✅ Credited' },
  { label: '21st Cycle', date: 'November 2025', amount: '₹2,000', status: '✅ Credited' },
  { label: '20th Cycle', date: 'July 2025', amount: '₹2,000', status: '✅ Credited' },
  { label: '19th Cycle', date: 'February 2025', amount: '₹2,000', status: '✅ Credited' },
  { label: '18th Cycle', date: 'October 2024', amount: '₹2,000', status: '✅ Credited' },
  { label: '17th Cycle', date: 'June 2024', amount: '₹2,000', status: '✅ Credited' },
  { label: '16th Cycle', date: 'February 2024', amount: '₹2,000', status: '✅ Credited' },
  { label: '15th Cycle', date: 'November 2023', amount: '₹2,000', status: '✅ Credited' },
  { label: '14th Cycle', date: 'July 2023', amount: '₹2,000', status: '✅ Credited' },
  { label: '13th Cycle', date: 'February 2023', amount: '₹2,000', status: '✅ Credited' },
];

export default function PmKisanInstallmentHistoryCheckOnline() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <div className="bg-primary-600 py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link><span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link><span>/</span>
            <span className="text-white font-bold">Disbursement Ledger</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">DBT Payment Record</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Agrarian Welfare Disbursement Ledger 2026 — Poora Payment Trail Online Dekho, Missed Cycles Count Karo
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

        {/* Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/installment-history.png"
            alt="Agrarian welfare disbursement ledger mobile screen — complete DBT payment trail check online 2026"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">Complete DBT Payment Record — Har Cycle Ka Status Ek Jagah</p>
        </div>

        {/* Real field observation hook */}
        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-blue-800 dark:text-blue-300 mb-2">Ek Real Case Jo Maine Khud Dekha</h2>
          <p className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed mb-2">
            Gorakhpur mein ek cultivator — Rajendra Yadav — ko lagta tha sirf 2 cycles miss hue hain. Jab humne portal par poora DBT record khola toh pata chala <strong>7 disbursements pending the — ₹14,000 arrears.</strong> Unki eKYC 2023 mein expire ho gayi thi aur unhe pata hi nahi chala.
          </p>
          <p className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
            Humne identity validation karwayi, land seeding fix karwayi — <strong>45 din mein ₹14,000 arrears + ₹2,000 current = ₹16,000 ek saath credit ho gaye.</strong> Isliye yeh guide likh raha hun — apna poora payment trail check karo, assumption mat rakho.
          </p>
        </div>

        {/* Why Ledger Check Matters */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Apna DBT Record Kyun Check Karna Chahiye?
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Zyadatar beneficiaries sirf latest cycle ka status dekhte hain. Purane missed payments ka unhe andaza bhi nahi hota. Direct Benefit Transfer system mein har eligible cycle automatically arrears queue mein add hota hai — lekin sirf tab release hota hai jab underlying issue resolve ho jaaye.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bina complete ledger check kiye tumhe pata hi nahi chalega ki kitna amount pending hai. Ho sakta hai ₹4,000 soch rahe ho aur actually ₹18,000 ban raha ho. Yeh difference sirf tab pata chalega jab tum har row ko carefully read karoge.
          </p>
          <IB>
            <strong>Screenshot Zaroor Lo:</strong> Poora payment trail ka screenshot gallery mein save karo. Bank visit, helpline call, ya BAO meeting mein yahi document sabse pehle maanga jaata hai. Verbal explanation se kaam nahi chalta — written proof chahiye.
          </IB>
        </section>

        {/* How to Access Ledger */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Portal Par Payment Record Kaise Nikalein
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Process straightforward hai. Teen identifiers mein se koi ek kaafi hai — biometric credential number, linked mobile, ya enrollment ID. Main personally Aadhaar recommend karta hun kyunki yeh kabhi change nahi hota.
          </p>
          <StepList>
            <SI n={1}>Browser mein <strong>pmkisan.gov.in</strong> open karo — bookmark kar lo future use ke liye</SI>
            <SI n={2}>Homepage par <strong>"Farmers Corner"</strong> dropdown dhundho → <strong>"Beneficiary Status"</strong> select karo</SI>
            <SI n={3}>Apna preferred identifier enter karo — Aadhaar sabse reliable hai</SI>
            <SI n={4}>Captcha code sahi se bharo → <strong>"Get Data"</strong> press karo</SI>
            <SI n={5}>Page load hone par <strong>"Payment Details"</strong> section tak scroll karo</SI>
            <SI n={6}>Har row note karo: cycle number, credit date, amount, aur current status</SI>
            <SI n={7}>Jo entries "Not Released", "Failed", ya "Rejected" dikh rahi hain unhe count karo — yahi tumhare arrears hain</SI>
          </StepList>
          <WB>
            <strong>Pro Tip:</strong> Agar portal slow hai ya error de raha hai toh <strong>pfms.nic.in</strong> try karo. Wahan "Track NSP Payments" section mein Aadhaar ya UTI reference number se same DBT trail mil jaati hai. Central database hai — PM Kisan portal se zyada stable rehta hai.
          </WB>
        </section>

        {/* Complete Disbursement History Table */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Scheme Launch Se Ab Tak — Complete Disbursement Timeline
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            December 2018 se shuru hokar ab tak 22 cycles successfully credit ho chuke hain. Neeche har release ka exact date aur status diya gaya hai. Apne ledger se compare karo — jo match na kare woh missed cycle hai.
          </p>
          <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Cycle</th>
                  <th className="p-3 text-left">Credit Date</th>
                  <th className="p-3 text-right">Amount</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-amber-50 dark:bg-amber-900/20">
                  <td className="p-3 border-b border-[var(--color-border)] font-black text-amber-800 dark:text-amber-300">23rd Cycle</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-amber-700 dark:text-amber-400 text-xs">Jun-Jul 2026 (Expected)</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-right font-bold text-amber-700 dark:text-amber-400">₹2,000</td>
                  <td className="p-3 border-b border-[var(--color-border)]"><span className="text-xs bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full font-bold">Upcoming</span></td>
                </tr>
                {DISBURSEMENT_RECORD.map(({ label, date, amount, status }, i) => (
                  <tr key={label} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-bold text-[var(--color-text)]">{label}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)] text-xs">{date}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-right font-semibold text-green-700 dark:text-green-400">{amount}</td>
                    <td className="p-3 border-b border-[var(--color-border)]"><span className="text-xs text-green-700 dark:text-green-400 font-medium">{status}</span></td>
                  </tr>
                ))}
                <tr className="bg-[var(--color-bg-alt)]">
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]" colSpan={2}>Cycle 1 (Feb 2019) through Cycle 12 (Oct 2022)</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-right text-xs font-bold text-[var(--color-text-muted)]">₹24,000</td>
                  <td className="p-3 border-b border-[var(--color-border)]"><span className="text-xs text-green-600 dark:text-green-400">All Credited</span></td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-green-700 text-white">
                  <td className="p-3 font-black" colSpan={2}>Total (22 cycles released)</td>
                  <td className="p-3 text-right font-black text-lg">₹44,000</td>
                  <td className="p-3 text-xs">Per eligible beneficiary</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-xs text-[var(--color-text-muted)] mt-3">Note: Yeh maximum possible amount hai agar Day 1 se eligible ho. Actual amount tumhari registration date aur eligibility period par depend karta hai.</p>
        </section>

        {/* Arrears Calculator */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Pending Amount Ka Hisaab — Quick Reference
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Apne missed cycles count karo aur neeche table se matching row dhundho. Yeh approximate arrears amount hai jo fix karne par credit hoga. Current cycle ka ₹2,000 alag se add hoga.
          </p>
          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-5 shadow-sm">
            <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[var(--color-bg-alt)]">
                    <th className="p-3 text-left">Missed Cycles</th>
                    <th className="p-3 text-right">Arrears</th>
                    <th className="p-3 text-left">After Fix (Arrears + Next)</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((n, i) => (
                    <tr key={n} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                      <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{n} cycle{ n > 1 ? 's' : ''}</td>
                      <td className="p-3 border-b border-[var(--color-border)] text-right font-black text-green-700 dark:text-green-400">₹{(n * 2000).toLocaleString('en-IN')}</td>
                      <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">₹{((n + 1) * 2000).toLocaleString('en-IN')} total credit</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">
                <strong>Real Example:</strong> Rajendra (Gorakhpur) — 7 missed cycles = ₹14,000 arrears. Identity validation + land seeding fix ke baad ₹14,000 + ₹2,000 next = <strong>₹16,000 single credit.</strong> Timeline: 45 days from fix to credit.
              </p>
            </div>
          </div>
        </section>

        {/* Understanding Status Labels */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Ledger Mein Dikhne Wale Har Status Label Ka Matlab
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Portal par alag-alag labels dikhte hain jo confuse karte hain. Har label ka specific technical meaning hota hai. Samajhna zaroori hai taaki sahi action le sako:
          </p>
          <div className="space-y-3">
            {[
              { label: 'Success / Credited', color: 'green', meaning: 'Amount bank account mein jama ho chuka hai. Bank statement verify karo confirmation ke liye.', action: 'Kuch mat karo — yeh cycle complete hai.' },
              { label: 'FTO Generated', color: 'blue', meaning: 'State government ne Fund Transfer Order approve kar diya hai. Bank processing pipeline mein hai.', action: '2-5 din wait karo. 7 din se zyada ho jaaye toh bank branch visit karo.' },
              { label: 'RFT Signed', color: 'blue', meaning: 'Request For Transfer state level par sign ho chuki hai. Central server par upload pending.', action: 'Normal processing time 7-15 din. Patience rakho.' },
              { label: 'Not Released / Pending', color: 'amber', meaning: 'Yeh cycle abhi process nahi hua. Ho sakta hai eligibility verification pending ho ya technical hold ho.', action: 'Beneficiary Status check karo — rejection reason dekho. Fix karo toh arrears mein milega.' },
              { label: 'Failed / Rejected', color: 'red', meaning: 'Processing attempt hui lekin fail ho gayi. Aadhaar mismatch, inactive bank account, ya NPCI issue ho sakta hai.', action: 'Specific error message note karo. Related fix guide follow karo. Helpline 155261 par escalate karo.' },
              { label: 'Reversed', color: 'red', meaning: 'Amount bank tak pahuncha lekin wapas chala gaya. Dormant account, name mismatch, ya closed account common reasons hain.', action: 'Bank branch jakar account activate karwao. Updated details portal par submit karo. Next cycle mein automatic retry hoga.' },
            ].map(({ label, color, meaning, action }) => (
              <div key={label} className={`p-4 bg-${color}-50 dark:bg-${color}-900/20 border border-${color}-200 dark:border-${color}-800 rounded-xl`}>
                <p className={`font-black text-${color}-800 dark:text-${color}-300 text-sm mb-1`}>{label}</p>
                <p className="text-xs text-[var(--color-text-muted)] mb-2"><strong>Matlab:</strong> {meaning}</p>
                <p className={`text-xs text-${color}-700 dark:text-${color}-400 font-semibold`}>➡️ {action}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-Verification Strategy */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Double Verification — Portal + Bank + PFMS
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sirf ek source par bharosa mat karo. Maine dekha hai ki kabhi portal sahi dikhata hai lekin bank mein paisa nahi aata, ya bank mein aa gaya lekin portal update nahi hua. Teen sources cross-check karna best practice hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-2">pmkisan.gov.in</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">Primary source. Beneficiary Status section mein complete payment trail. Lekin sync delay ho sakta hai 7-15 din tak.</p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-2">Bank Statement</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">Final proof. Net banking ya passbook mein "PM KISAN" ya "DBT AGRI" search karo. Yeh ultimate confirmation hai.</p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-2">pfms.nic.in</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">Central DBT master database. "Track NSP Payments" mein Aadhaar se search karo. Jab PM Kisan portal down ho tab backup.</p>
            </div>
          </div>
          <DB>
            <strong>Discrepancy Handle Kaise Karein:</strong> Agar teeno sources mein alag-alag status dikhe toh bank statement ko authoritative maano. Screenshot teeno ke lo aur 155261 par call karke reconciliation request daalo. Ticket number note karo follow-up ke liye.
          </DB>
        </section>

        {/* State-Specific Processing Patterns */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Rajya Anusaar Processing Speed — Field Observations
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Central government funds release karti hai lekin actual credit timing state administration ki verification efficiency par depend karti hai. Kuch patterns maine pichhle 3 saalon mein observe kiye hain:
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <h3 className="font-black text-green-900 dark:text-green-300 text-sm mb-1">Fast States (1-3 Days)</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">UP, Madhya Pradesh, Gujarat, Haryana — in states mein automated verification systems mature hain. Release date ke 24-72 ghante mein zyada tar beneficiaries ko credit mil jaata hai. Digital infrastructure strong hai.</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <h3 className="font-black text-blue-900 dark:text-blue-300 text-sm mb-1">Normal States (3-7 Days)</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">Bihar, Rajasthan, Karnataka, Telangana, Tamil Nadu — moderate processing speed. Manual verification steps abhi bhi kuch jagah hain. 7 din ke andar most cases resolve ho jaate hain.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <h3 className="font-black text-amber-900 dark:text-amber-300 text-sm mb-1">Slower States (7-15 Days)</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">Jharkhand, Odisha, Chhattisgarh, Northeast states — remote areas mein connectivity issues, staff shortage, aur manual processes zyada hain. 15 din tak wait karna normal hai. 15 din cross ho jaaye toh helpline contact karo.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Farmers Ke Real Sawaal — Ground-Level Answers
          </h2>
          <SvgFAQ caption="Disbursement Ledger FAQ 2026 — Verified Responses" />
          <div className="space-y-3 mt-4">
            {FAQS_DATA.map(({ q, a }) => (
              <details key={q} className="border border-[var(--color-border)] rounded-xl overflow-hidden group">
                <summary className="p-4 font-semibold text-[var(--color-text)] cursor-pointer bg-[var(--color-bg-alt)] hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                  <span>{q}</span>
                  <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="p-4 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]">{a}</div>
              </details>
            ))}
          </div>
        </section>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="Official Beneficiary Status & Payment Ledger"
          guide="Apna Record Abhi Check Karo"
          guideHref="/articles/pm-kisan-payment-failed-status-2026"
        />

        <CalcBanner />
        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav />
        <Disclaimer />
      </div>
    </>
  );
}