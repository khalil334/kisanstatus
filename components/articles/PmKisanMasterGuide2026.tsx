'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-07-05T08:00:00+05:30';
const MODIFIED = '2026-07-05T08:00:00+05:30';

const RELATED = [
  { slug: 'kisan-credit-card-online-apply-2026', title: 'KCC Online Apply', emoji: '💳' },
  { slug: 'nano-dap-500ml-price-in-india-2026', title: 'Nano DAP Price', emoji: '🌱' },
  { slug: 'soil-health-card-complete-guide-2026', title: 'Soil Health Card', emoji: '🌾' },
  { slug: 'pmfby-crop-insurance-2026', title: 'Crop Insurance', emoji: '🛡️' },
  { slug: 'agristack-kya-hai', title: 'Digital Kisan ID', emoji: '🆔' },
  { slug: 'kisan-rin-kaha-se-le-2026', title: 'Agricultural Loan', emoji: '🏦' },
];

const FAQS_DATA = [
  { q: 'PM Kisan mein registration kaise kare mobile se?', a: 'pmkisan.gov.in kholo → New Farmer Registration → Aadhaar daalo → OTP verify → Land details bharo → Bank link karo. CSC se bhi ho jaata hai. Documents: Aadhaar, Khatauni, Passbook.' },
  { q: 'eKYC nahi hui toh kya hoga?', a: 'Payment ruk jayegi. 2023 se mandatory hai. pmkisan.gov.in → eKYC → OTP verify. Mobile linked nahi hai toh CSC jaake fingerprint karwao. Free hai.' },
  { q: 'Payment status kaise check kare bina OTP ke?', a: 'Beneficiary List mein jaao → State → District → Block → Village select karo → Apna naam dhundo. OTP nahi chahiye. Ya status check mein Aadhaar daalo.' },
  { q: 'Naam correction ke baad kitne din mein payment aayegi?', a: '15-20 din lagte hain update hone mein. Phir agli installment ke saath arrears bhi mil jayenge. Reference number save rakho.' },
  { q: 'Rejected list se kaise nikle?', a: 'Reason dekho portal par. Land record issue hai toh Khatauni update karo. eKYC pending hai toh complete karo. Phir dobara apply karo. CSC se help lo.' },
  { q: 'Mobile number change karne ka charge kitna hai?', a: 'Bilkul free hai. Online kar sakte ho agar purana number active hai. CSC se bhi ho jaata hai — ₹20-30 service charge le sakte hain.' },
  { q: '23vi kist kab aayegi?', a: 'June-July 2026 mein aani chahiye. Agar eKYC complete hai aur bank account active hai toh automatic credit ho jayegi. Status check karte raho.' },
];

export default function PmKisanMasterGuide2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">PM Kisan Complete Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">🌾 Master Guide 2026</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan 2026: Registration Se Lekar Payment Tak — Har Problem Ka Solution Ek Jagah
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 25 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* IMAGE 1: Hero */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/pm-kisan-complete-guide/hero.webp'}
            alt="PM Kisan scheme complete guide 2026 — registration, eKYC, payment status, problem solutions"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            PM Kisan Master Guide 2026 — Har Problem Ka Ek Saath Hal
          </p>
        </div>

        {/* Real Hook */}
        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 dark:border-amber-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">Sach Baat</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            Har saal ₹6,000 milna chahiye. Lekin 40% farmers ko payment ruk jaati hai — eKYC nahi hui, naam galat hai, bank account problem hai.
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            Yeh guide unhi 40% ke liye hai. Registration, eKYC, payment check, naam correction, rejected list — sab ek jagah. Koi bakchodi nahi, seedha solution.
          </p>
        </div>

        {/* Section 1: What Is PM Kisan */}
        <section className="mb-8">
          <SH>PM Kisan Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Central government ki scheme. Har saal ₹6,000 — teen installments mein (₹2,000 har 4 mahine mein). Seedha bank account mein.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kaun le sakta hai? Jo kheti karta hai. Chahe zameen 0.1 acre ho ya 50 acre. Tenant farmer bhi le sakta hai (NOC ke saath).
          </p>
          <IB>
            <strong>Important:</strong> Yeh loan nahi hai. Wapas nahi karna. Pure tarah free. Government ka gift hai kisanon ko.
          </IB>
        </section>

        {/* Section 2: Registration */}
        <section className="mb-8">
          <SH>Registration Kaise Kare?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Do tarike hain — online ghar baithe, ya CSC center jaake.
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Tarika 1: Online (Ghar Baithe)</h3>
          <StepList>
            <SI n={1}>pmkisan.gov.in kholo — mobile ya computer</SI>
            <SI n={2}>Farmers Corner → New Farmer Registration</SI>
            <SI n={3}>Aadhaar number daalo → OTP verify</SI>
            <SI n={4}>Personal details bharo — naam, mobile, address</SI>
            <SI n={5}>Land details — Khasra number, area, village</SI>
            <SI n={6}>Bank account number + IFSC code</SI>
            <SI n={7}>Documents upload — Aadhaar, Khatauni, Passbook</SI>
            <SI n={8}>Submit → Reference number screenshot lo</SI>
          </StepList>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Tarika 2: CSC Center</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Nazdeeki CSC jaao. Operator sab karega. Charge ₹20-50 (zyada maange toh complaint karo).
          </p>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl mb-4">
            <p className="font-bold text-blue-800 dark:text-blue-300 text-sm mb-2">Documents Le Jaao:</p>
            <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
              <li>✓ Aadhaar card (original + photocopy)</li>
              <li>✓ Khatauni / Khasra / 7/12</li>
              <li>✓ Bank passbook (first page)</li>
              <li>✓ Mobile number (Aadhaar se linked)</li>
              <li>✓ Passport size photo (2)</li>
            </ul>
          </div>
          <WB>
            <strong>Tip:</strong> Registration ke baad 7-10 din mein status check karo. "Pending" hai toh wait karo. "Rejected" hai toh reason dekho.
          </WB>
        </section>

        {/* IMAGE 2: Registration Process */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-complete-guide/registration-process.webp"
            alt="PM Kisan registration process step by step — online and CSC center method"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            PM Kisan Registration Process — Online aur CSC Dono Tarike
          </p>
        </div>

        {/* Section 3: eKYC */}
        <section className="mb-8">
          <SH>eKYC Kyun Zaroori Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bina eKYC ke payment nahi aayegi. 2023 se mandatory hai. Aadhaar se identity confirm hoti hai.
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3">OTP Se (Agar Mobile Linked Hai)</h3>
          <StepList>
            <SI n={1}>pmkisan.gov.in → Farmers Corner → eKYC</SI>
            <SI n={2}>Aadhaar number daalo</SI>
            <SI n={3}>OTP aayega registered mobile par</SI>
            <SI n={4}>OTP enter karo → Submit</SI>
            <SI n={5}>Done! 2 minute ka kaam</SI>
          </StepList>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Biometric Se (Agar Mobile Linked Nahi)</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            CSC center jaao. Fingerprint scan hoga. ₹20-30 charge. 24 ghante mein complete.
          </p>
          <DB>
            <strong>Warning:</strong> eKYC free hai. Koi ₹100+ maange toh fraud hai. 155261 par complaint karo.
          </DB>
        </section>

        {/* IMAGE 3: eKYC Process */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-complete-guide/ekyc-process.webp"
            alt="PM Kisan eKYC process — OTP and biometric verification methods"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            eKYC Process — OTP aur Biometric Dono Tarike
          </p>
        </div>

        {/* Section 4: Status Check */}
        <section className="mb-8">
          <SH>Payment Status Kaise Check Kare?</SH>
          <StepList>
            <SI n={1}>pmkisan.gov.in → Farmers Corner → Beneficiary Status</SI>
            <SI n={2}>Aadhaar number daalo → Get Data</SI>
            <SI n={3}>Complete history dikh jayegi</SI>
          </StepList>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Matlab</th>
                  <th className="p-3 text-left">Kya Karein</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['✅ Active', 'Sab theek — payment aayegi', 'Wait karo'],
                  ['⏳ Pending', 'Verification chal rahi hai', '7-15 din wait'],
                  ['❌ Rejected', 'Koi problem hai', 'Reason dekho, fix karo'],
                  ['💳 DBT Failed', 'Bank account problem', 'NPCI seeding check karo'],
                ].map(([status, meaning, action], i) => (
                  <tr key={status} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-bold text-xs text-[var(--color-text)]">{status}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{meaning}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-medium">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Payment Problems */}
        <section className="mb-8">
          <SH>Payment Kyun Nahi Aayi? — 5 Reasons</SH>
          <div className="space-y-3">
            {[
              { reason: 'eKYC Pending', fix: 'Turant eKYC karo — portal ya CSC se' },
              { reason: 'Bank Account Aadhaar Se Linked Nahi', fix: 'Bank jaao → NPCI seeding form bharo → 7 din' },
              { reason: 'Naam Mismatch (Aadhaar ≠ Bank)', fix: 'Bank mein naam Aadhaar jaisa karwao' },
              { reason: 'Land Record Issue', fix: 'Khatauni update karwao → Dobara apply' },
              { reason: 'Account Dormant', fix: 'Bank jaao → Account activate karo' },
            ].map(({ reason, fix }) => (
              <div key={reason} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-bold text-red-700 dark:text-red-400 text-sm mb-2">❌ {reason}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>Fix:</strong> {fix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IMAGE 4: Payment Success */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-complete-guide/payment-success.webp"
            alt="PM Kisan payment success — ₹2000 credited to bank account"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Payment Success — ₹2,000 Direct Bank Account Mein
          </p>
        </div>

        {/* Section 6: Name Correction */}
        <section className="mb-8">
          <SH>Naam Galat Hai — Kaise Theek Kare?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Registration mein typing mistake ho gayi? Koi baat nahi. Online theek ho jaata hai.
          </p>
          <StepList>
            <SI n={1}>pmkisan.gov.in → Farmers Corner → Edit Aadhaar Details</SI>
            <SI n={2}>Name Correction select karo</SI>
            <SI n={3}>Aadhaar card saamne rakh ke EXACT naam type karo</SI>
            <SI n={4}>Aadhaar scan upload karo</SI>
            <SI n={5}>Submit → 15-20 din mein update</SI>
          </StepList>
          <IB>
            <strong>Important:</strong> Aadhaar mein jo likha hai, wahi dalna hai. "RAMESH KUMAR" hai toh "RAMESH KUAMR" mat likhna. Ek letter bhi galat = phir se problem.
          </IB>
        </section>

        {/* Section 7: Rejected List */}
        <section className="mb-8">
          <SH>Rejected List Mein Naam — Ab Kya?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Pehle reason dekho portal par. Phir fix karo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              { issue: 'Land Record Problem', solution: 'Khatauni update → Re-apply' },
              { issue: 'eKYC Nahi Hui', solution: 'Turant eKYC karo' },
              { issue: 'Bank Account Issue', solution: 'NPCI seeding karwao' },
              { issue: 'Documents Clear Nahi', solution: 'Clear scan upload karo' },
            ].map(({ issue, solution }) => (
              <div key={issue} className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                <p className="font-bold text-red-800 dark:text-red-300 text-sm mb-2">{issue}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{solution}</p>
              </div>
            ))}
          </div>
          <WB>
            <strong>Tip:</strong> CSC ya Block Agriculture Office se help lo. Woh manually check karke bata denge kya problem hai.
          </WB>
        </section>

        {/* Section 8: Mobile Number Change */}
        <section className="mb-8">
          <SH>Mobile Number Change Kaise Kare?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Purana number band ho gaya? Koi baat nahi. Update ho jaata hai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Online (Agar Purana Number Active Hai)</h3>
              <p className="text-xs text-[var(--color-text-muted)]">pmkisan.gov.in → Edit Mobile → OTP verify → Naya number daalo</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <h3 className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">CSC Se (Agar Purana Number Band Hai)</h3>
              <p className="text-xs text-[var(--color-text-muted)]">CSC jaao → Operator update karega → ₹20-30 charge</p>
            </div>
          </div>
        </section>

        {/* Section 9: Installment History */}
        <section className="mb-8">
          <SH>Purani Installments Ka Hisaab</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kitni aayi, kitni pending — sab check kar sakte ho.
          </p>
          <StepList>
            <SI n={1}>pmkisan.gov.in → Farmers Corner → Beneficiary Status</SI>
            <SI n={2}>Aadhaar number daalo</SI>
            <SI n={3}>Complete table dikh jayegi:</SI>
          </StepList>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3">Installment</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50 dark:bg-green-900/20">
                  <td className="p-3">23vi Kist</td>
                  <td className="p-3">₹2,000</td>
                  <td className="p-3 text-green-700">✅ Paid</td>
                  <td className="p-3">June 2026</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="p-3">24vi Kist</td>
                  <td className="p-3">₹2,000</td>
                  <td className="p-3 text-amber-700">⏳ Pending</td>
                  <td className="p-3">October 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* IMAGE 5: Status Check */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-complete-guide/status-check.webp"
            alt="PM Kisan beneficiary status check — check payment history online"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Status Check — Apni Payment History Dekho
          </p>
        </div>

        {/* Section 10: Common Problems */}
        <section className="mb-8">
          <SH>10 Common Problems — Quick Fixes</SH>
          <div className="space-y-2">
            {[
              'OTP nahi aa raha → Mobile Aadhaar se linked hai? Check karo',
              'Portal slow hai → Subah 6-8 AM try karo',
              'Naam update nahi ho raha → 15-20 din wait karo',
              'Bank account change karna hai → Branch jaake karwao, phir portal par update karo',
              'Land record online nahi hai → Patwari se update karwao',
              'Duplicate registration → Helpline 155261 par call karo',
              'Payment aayi lekin account mein nahi dikh rahi → 3-5 din wait karo',
              'Account band ho gaya → Naya account kholo → Portal par update karo',
              'eKYC fail ho rahi hai → CSC jaake biometric karo',
              'Status "Inactive" dikh raha hai → Block office jaao',
            ].map((problem, i) => (
              <div key={i} className="flex gap-2 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg">
                <span className="text-green-600 dark:text-green-400 font-bold shrink-0">{i + 1}.</span>
                <span className="text-xs text-[var(--color-text-muted)]">{problem}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 11: Helpline */}
        <section className="mb-8">
          <SH>Help Kahan Se Le?</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">📞 Helpline</p>
              <p className="text-xs text-[var(--color-text-muted)]">155261 (Toll Free)</p>
              <p className="text-xs text-[var(--color-text-muted)]">Mon-Sat, 9 AM - 6 PM</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">📧 Email</p>
              <p className="text-xs text-[var(--color-text-muted)]">pmkisan-ict@gov.in</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <p className="font-black text-purple-800 dark:text-purple-300 text-sm mb-2">🏢 Block Office</p>
              <p className="text-xs text-[var(--color-text-muted)]">Block Agriculture Officer</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-2">💻 CSC Center</p>
              <p className="text-xs text-[var(--color-text-muted)]">Nazdeeki CSC jaao</p>
            </div>
          </div>
        </section>

        {/* IMAGE 6: Helpline Support */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-complete-guide/helpline-support.webp"
            alt="PM Kisan helpline support — 155261 toll free number for farmers"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Helpline Support — 155261 Par Call Karo
          </p>
        </div>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Master Guide FAQ 2026 — Real Answers" />
        </section>

        {/* Conclusion */}
        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Bottom Line</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            PM Kisan simple scheme hai. Bas teen cheezein yaad rakho:
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>eKYC complete karo</li>
            <li>Bank account Aadhaar se link karo (NPCI seeding)</li>
            <li>Naam teeno jagah same rakho (Aadhaar = Bank = PM Kisan)</li>
          </ol>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mt-3">
            In teeno ka dhyan rakha toh payment kabhi nahi rukegi.
          </p>
        </div>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Official Portal"
          guide="Abhi Check Karo"
          guideHref="/articles/pm-kisan-23vi-kist-2026-status-check"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="💰"
          title="Apna Benefit Calculate Karo"
          desc="Kitni installments mili, kitni pending — sab jaano"
          primaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Calculator Kholo →' }}
          secondaryCta={{ href: '/calculator', label: '🧮 Sab Utilities' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-23vi-kist-2026-status-check', l: '📅 Status Check' },
          { href: '/articles/pm-kisan-ekyc-online-2026', l: '🔐 eKYC Guide' },
          { href: '/articles/pm-kisan-rejected-list-2026', l: '❌ Rejected Fix' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}