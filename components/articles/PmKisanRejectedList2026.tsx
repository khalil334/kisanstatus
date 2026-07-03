'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-ekyc-online-2026', title: 'Digital Verification Guide', emoji: '🔐' },
  { slug: 'pm-kisan-payment-failed-status-2026', title: 'Credit Transfer Failed Fix', emoji: '💸' },
  { slug: 'pm-kisan-name-correction-online-2026', title: 'Name Correction Guide', emoji: '✏️' },
  { slug: 'pm-kisan-land-seeding-status-check', title: 'Land Record Linking Fix', emoji: '🌾' },
  { slug: 'pm-kisan-beneficiary-list-2026', title: 'Beneficiary Roster Check', emoji: '📋' },
  { slug: 'pm-kisan-problems-solution-guide-2026', title: '10 Roadblocks Guide', emoji: '🔧' },
];

const FAQS_DATA = [
  {
    q: 'Application fail kyun hoti hai?',
    a: 'Common reasons: Aadhaar-bank naam mismatch, digital verification incomplete, land record linking pending, galat IFSC code, duplicate enrollment, ineligible category (govt employee/IT filer). Portal par exact reason check karo.',
  },
  {
    q: 'Rectification ke baad payment milegi?',
    a: 'Haan. Fix hone ke baad account reactivate hota hai aur sabhi missed payments arrears mein credit hoti hain. Correction mein 15-30 din lag sakte hain type ke hisaab se.',
  },
  {
    q: 'Kya portal par seedha rectification ho sakta hai?',
    a: 'Kuch haan (naam, bank, verification), kuch ke liye BAO office jaana padta hai (land linking, duplicate, ineligibility appeal). pmkisan.gov.in → Edit Aadhaar Details par check karo.',
  },
  {
    q: 'Ek saath multiple rectifications kar sakte hain?',
    a: 'Haan. Naam, bank, verification ek saath ho sakti hain. Land linking alag process. Pehle verification karo (fastest), phir baaki.',
  },
  {
    q: 'Status mein reason nahi dikhta — kya karein?',
    a: 'Seedha 155261 par call karo, enrollment ID bolo. Woh exact reason bata denge. Ya Block Agriculture Officer se milo.',
  },
  {
    q: 'Sab fix kiya par status abhi bhi rejected?',
    a: 'Portal update mein 15-30 din lagte hain. 30 din baad bhi na badle toh 155261 call ya BAO se milo. Screenshot rakho proof ke liye.',
  },
  {
    q: 'Office nahi ja sakta — alternative?',
    a: 'Verification, naam, bank — teeno portal se ghar baithe. Land linking aur ineligibility appeal ke liye office/CSC zaroori hai.',
  },
];

const REJECTIONS = [
  { n: 1, r: 'Digital Verification Incomplete', emoji: '🔐', d: '60% rejections sirf is wajah se. Aadhaar OTP ya biometric auth pending.', fix: 'pmkisan.gov.in → verification → Aadhaar → OTP verify. 5 minute, free.', time: 'Instant', diff: 'Aasaan' },
  { n: 2, r: 'Aadhaar-Bank Naam Mismatch', emoji: '✏️', d: 'Portal aur bank mein naam alag — system auto-reject.', fix: 'Edit Aadhaar Details → Name Correction → Aadhaar jaisa exactly naam.', time: '15-20 din', diff: 'Medium' },
  { n: 3, r: 'Land Record Linking Pending', emoji: '🌾', d: '"Land Seeding No" dikhta hai. Zameen portal se link nahi.', fix: 'Patwari se Khasra-Khatauni update → BAO Land Seeding form.', time: '15-30 din', diff: 'Mehnat' },
  { n: 4, r: 'Galat Bank Details', emoji: '🏦', d: 'Account/IFSC galat — credit fail ya return.', fix: 'Edit Aadhaar Details → Bank Correction → Passbook se copy.', time: '7-14 din', diff: 'Aasaan' },
  { n: 5, r: 'NPCI Link Missing', emoji: '🔗', d: 'Bank mein Aadhaar link hai lekin NPCI mapper mein nahi.', fix: 'Bank jao → "Aadhaar seeding" form → Aadhaar + passbook.', time: '3-7 din', diff: 'Aasaan' },
  { n: 6, r: 'Duplicate Enrollment', emoji: '🔄', d: 'Ek Aadhaar se do registrations — duplicate detect.', fix: '155261 call → Duplicate identify → Galat entry remove.', time: '7-15 din', diff: 'Helpline' },
  { n: 7, r: 'Ineligible Category', emoji: '🚫', d: 'Govt employee, IT filer, MP/MLA, registered professional.', fix: 'Galat reject? Documents le jao Agri office → Eligibility proof.', time: '20-30 din', diff: 'Office' },
  { n: 8, r: 'Land Records Not Found', emoji: '📋', d: 'Revenue database mein naam par zameen nahi dikhi.', fix: 'Revenue/patwari → Records update → Portal par reapply.', time: '20-40 din', diff: 'Multi-step' },
  { n: 9, r: 'Documents Blurry/Invalid', emoji: '📄', d: 'Upload blur/chhota — system read nahi kar paya.', fix: 'Clear scan, <2MB, JPEG format → Re-upload.', time: 'Instant', diff: 'Aasaan' },
  { n: 10, r: 'Mobile Number Issue', emoji: '📱', d: 'Registered number invalid, kisi aur ka, ya Aadhaar se unlink.', fix: 'CSC jao → Mobile update request → Valid number register.', time: '3-7 din', diff: 'CSC' },
];

export default function PmKisanRejectedList2026({ article }: { article: ArticleMeta }) {
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
            <span className="text-white font-bold">Rejected Applications Fix</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Rejection Rectification</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Application Rejected 2026: 10 Reasons + Har Ek Ka Tested Solution
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 10 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Hero Image — PATH UNCHANGED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/registration-approved.png'}
            alt="PM Kisan application rejected reason rectification guide 2026"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Rejected? Reason Pata Karo, Fix Karo, Payment Pao
          </p>
        </div>

        {/* Reality Check */}
        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-800 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-red-800 dark:text-red-300 mb-2">Rejection Permanent Nahi Hai</h2>
          <p className="text-sm text-red-700 dark:text-red-200 mb-3">
            <strong>90% cases mein approval wapas mil jaati hai.</strong> Bas sahi reason pata karo, specific action lo. Missed payments bhi arrears mein milti hain.
          </p>
          <div className="bg-[var(--color-card)] border border-red-200 dark:border-red-800 rounded-xl p-3">
            <p className="text-xs font-bold text-red-800 dark:text-red-300 mb-2">Pehle Reason Check Karo:</p>
            <StepList>
              <SI n={1}><strong>pmkisan.gov.in</strong> → Farmers Corner → Beneficiary Status</SI>
              <SI n={2}>Aadhaar / Mobile → Get Data</SI>
              <SI n={3}><strong>Exact rejection reason</strong> note karo</SI>
              <SI n={4}>Neeche us reason ka rectification padho</SI>
            </StepList>
          </div>
        </div>

        {/* Rejected vs Deactivated */}
        <section className="mb-8">
          <SH>Rejected Vs Deactivated — Fark Samjho</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <h3 className="font-black text-red-800 dark:text-red-300 text-sm mb-2">❌ Rejected</h3>
              <ul className="space-y-1.5 text-xs text-[var(--color-text-muted)]">
                <li className="flex gap-2"><span className="text-red-500 dark:text-red-400 shrink-0">•</span>Application level par fail</li>
                <li className="flex gap-2"><span className="text-red-500 dark:text-red-400 shrink-0">•</span>Enrollment time problem</li>
                <li className="flex gap-2"><span className="text-red-500 dark:text-red-400 shrink-0">•</span>Portal se rectification possible</li>
                <li className="flex gap-2"><span className="text-red-500 dark:text-red-400 shrink-0">•</span>15-20 din mein fix</li>
              </ul>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl">
              <h3 className="font-black text-orange-800 dark:text-orange-300 text-sm mb-2">🚫 Deactivated</h3>
              <ul className="space-y-1.5 text-xs text-[var(--color-text-muted)]">
                <li className="flex gap-2"><span className="text-orange-500 dark:text-orange-400 shrink-0">•</span>Pehle active tha, baad mein problem</li>
                <li className="flex gap-2"><span className="text-orange-500 dark:text-orange-400 shrink-0">•</span>State ne manually deactivate kiya</li>
                <li className="flex gap-2"><span className="text-orange-500 dark:text-orange-400 shrink-0">•</span>BAO office jaana padta hai</li>
                <li className="flex gap-2"><span className="text-orange-500 dark:text-orange-400 shrink-0">•</span>20-30 din reactivation</li>
              </ul>
            </div>
          </div>
          <IB>
            <strong>Simple Rule:</strong> Rejection = portal se fix. Deactivation = office se. Dono mein missed payments arrears mein milti hain.
          </IB>
        </section>

        {/* 10 Rejection Reasons */}
        <section className="mb-8">
          <SH>10 Rejection Reasons + Tested Solutions</SH>
          <div className="space-y-3">
            {REJECTIONS.map(({ n, r, emoji, d, fix, time, diff }) => (
              <div key={n} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 px-4 py-3 bg-[var(--color-bg-alt)] border-b border-[var(--color-border)]">
                  <span className="w-7 h-7 rounded-full bg-red-600 text-white text-xs font-black flex items-center justify-center shrink-0">{n}</span>
                  <span className="text-xl">{emoji}</span>
                  <p className="font-black text-[var(--color-text)] text-sm flex-1">{r}</p>
                  <div className="flex gap-2 shrink-0">
                    <span className="text-[10px] bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-medium">{time}</span>
                    <span className="text-[10px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full font-medium">{diff}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-[var(--color-text-muted)] mb-3 leading-relaxed">{d}</p>
                  <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0 mt-0.5">FIX:</span>
                    <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">{fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rectification Timeline */}
        <section className="mb-8">
          <SH>Rectification Ke Baad Kitna Wait?</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Type</th>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Kahan Se</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Digital Verification', 'Instant / 1-2 din', 'Portal / CSC'],
                  ['NPCI Seeding', '3-7 din', 'Bank branch'],
                  ['Bank Details Fix', '7-14 din', 'Portal'],
                  ['Naam Rectification', '15-20 din', 'Portal'],
                  ['Land Record Linking', '15-30 din', 'Patwari + BAO'],
                  ['Duplicate Removal', '7-15 din', 'Helpline 155261'],
                  ['Ineligibility Appeal', '20-30 din', 'Agri Office'],
                  ['Land Records Update', '20-40 din', 'Revenue + Portal'],
                ].map(([type, time, where], i) => (
                  <tr key={type} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{type}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-blue-700 dark:text-blue-400 font-semibold">{time}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <IB>
            <strong>Arrears:</strong> Rectification ke baad sabhi missed payments arrears mein milti hain — ek saath credit next successful payment mein.
          </IB>
        </section>

        {/* Documents */}
        <section className="mb-8">
          <SH>Zaroori Documents — Ready Rakho</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { doc: 'Aadhaar Card', detail: 'Original + clear scan (front & back)', must: true },
              { doc: 'Bank Passbook', detail: 'First page — account, IFSC, naam visible', must: true },
              { doc: 'Khasra-Khatauni', detail: 'Latest land records — patwari se', must: true },
              { doc: 'Active Mobile', detail: 'Aadhaar-linked — OTP receive ke liye', must: true },
              { doc: 'Enrollment ID', detail: 'Registration number — status track', must: false },
              { doc: 'Rejection Screenshot', detail: 'Portal se — office mein kaam aata hai', must: false },
            ].map(({ doc, detail, must }) => (
              <div key={doc} className="flex gap-3 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <span className={`text-lg shrink-0 ${must ? 'text-green-600 dark:text-green-400' : 'text-blue-500 dark:text-blue-400'}`}>{must ? '✅' : '📎'}</span>
                <div>
                  <p className="font-bold text-[var(--color-text)] text-xs">
                    {doc} {must && <span className="text-red-500 dark:text-red-400">*</span>}
                  </p>
                  <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-red-600 dark:text-red-400 mt-2">* = Har case mein zaroori</p>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Real Sawal — Seedhe Jawaab
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Rejection Rectification FAQ 2026 — Verified Answers" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="Beneficiary Status — Rejection Reason Check"
          guide="Abhi Reason Dekho"
          guideHref="/articles/pm-kisan-23vi-kist-2026-status-check"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="❌"
          title="Apna Arrears Calculate Karo"
          desc="Kitne installments miss hue, rectification ke baad kitna milega — jaano"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-ekyc-online-2026', l: '🔐 eKYC Guide' },
          { href: '/articles/pm-kisan-name-correction-online-2026', l: '✏️ Name Fix' },
          { href: '/articles/pm-kisan-land-seeding-status-check', l: '🌾 Land Fix' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}