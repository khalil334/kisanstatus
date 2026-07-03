'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-21vi-installment-status-check', title: 'Latest Cycle Status', emoji: '📅' },
  { slug: 'pm-kisan-payment-failed-status-2026', title: 'DBT Failed Fix', emoji: '💸' },
  { slug: 'pm-kisan-ekyc-online-2026', title: 'Identity Validation', emoji: '🔐' },
  { slug: 'pm-kisan-rejected-list-2026', title: 'Application Declined Fix', emoji: '❌' },
  { slug: 'pm-kisan-beneficiary-list-2026', title: 'Eligible Roster Check', emoji: '📋' },
  { slug: 'pm-kisan-problems-solution-guide-2026', title: '10 Common Issues Guide', emoji: '🔧' },
];

const FAQS_DATA = [
  { q: 'Ledger mein purana cycle "Not Released" dikh raha hai — milega kya?', a: 'Haan. Current eligibility valid hai aur technical issue fix ho jaata hai toh saare missed cycles arrears mein ek saath credit hote hain. Sirf tab nahi milenge jab us period mein genuinely ineligible the.' },
  { q: 'Bank mein entry hai lekin portal par "Failed" — kisko maanein?', a: 'Bank statement final proof. Portal sync mein 7-15 din lagte hain. Ulta case — portal "Success" bank mein nahi — toh NPCI mapping issue. Bank branch jakar DBT seeding confirm karwao.' },
  { q: 'Registration number se kuch nahi dikhta?', a: 'Number galat ya mobile change ke baad old number se search. Aadhaar try karo. Phir bhi blank = state verification pending. 155261 par confirm karo.' },
  { q: 'Arrears ka expiry date hai kya?', a: 'Officially koi expiry nahi. Scheme active hai tab tak poore arrears milte hain. Maine 2019 se miss hue 8 cycles (₹16,000) 2025 mein credit hote dekhe. Par jitna jaldi fix utna behtar.' },
  { q: 'FTO Generated lekin 10 din ho gaye?', a: '10 din zyada hai. Usually 2-5 din mein credit. Bank visit karo — dormant account ya galat IFSC ho sakta hai. 155261 par escalate karo.' },
  { q: 'PFMS par bhi history check kar sakte hain?', a: 'Haan. pfms.nic.in → "Track NSP Payments" → Aadhaar ya UTI reference se search. PM Kisan portal down ho toh best backup.' },
];

const DISBURSEMENT_RECORD = [
  { label: '22nd', date: '13 Mar 2026', amount: '₹2,000', status: '✅ Credited' },
  { label: '21st', date: 'Nov 2025', amount: '₹2,000', status: '✅ Credited' },
  { label: '20th', date: 'Jul 2025', amount: '₹2,000', status: '✅ Credited' },
  { label: '19th', date: 'Feb 2025', amount: '₹2,000', status: '✅ Credited' },
  { label: '18th', date: 'Oct 2024', amount: '₹2,000', status: '✅ Credited' },
  { label: '17th', date: 'Jun 2024', amount: '₹2,000', status: '✅ Credited' },
  { label: '16th', date: 'Feb 2024', amount: '₹2,000', status: '✅ Credited' },
  { label: '15th', date: 'Nov 2023', amount: '₹2,000', status: '✅ Credited' },
  { label: '14th', date: 'Jul 2023', amount: '₹2,000', status: '✅ Credited' },
  { label: '13th', date: 'Feb 2023', amount: '₹2,000', status: '✅ Credited' },
];

export default function PmKisanInstallmentHistoryCheckOnline({ article }: { article: ArticleMeta }) {
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
            <span className="text-white font-bold">Payment Ledger</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">DBT Record Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Payment Ledger Check 2026: Poora DBT Trail Dekho, Missed Cycles Gino, Arrears Calculate Karo
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 8 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/pm-kisan-installment-history-check-online.webp'}
            alt="PM Kisan disbursement ledger check online 2026 — complete DBT payment trail on mobile"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Complete DBT Payment Record — Har Cycle Ka Status Ek Jagah
          </p>
        </div>

        {/* Field Hook */}
        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-blue-800 dark:text-blue-300 mb-2">Ek Real Case</h2>
          <p className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed mb-2">
            Gorakhpur. Rajendra Yadav. Lagta tha sirf 2 cycles miss hue. Portal khola toh nikla — <strong>7 pending, ₹14,000 arrears.</strong> eKYC 2023 mein expire hui thi, unhe pata hi nahi chala.
          </p>
          <p className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
            Identity validation + land seeding fix. <strong>45 din mein ₹16,000 ek saath credit.</strong> Isliye yeh guide — assumption mat rakho, poora trail check karo.
          </p>
        </div>

        {/* Why Check */}
        <section className="mb-8">
          <SH>Kyun Check Karna Chahiye?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Zyadatar log sirf latest cycle dekhte hain. Purane missed payments ka andaza nahi. DBT system mein har eligible cycle arrears queue mein add hota hai — lekin release tab hota hai jab underlying issue resolve ho.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            ₹4,000 soch rahe ho, actually ₹18,000 ban raha ho — yeh sirf complete ledger check se pata chalega.
          </p>
          <IB>
            <strong>Screenshot Lo:</strong> Poora trail save karo. Bank visit, helpline call, BAO meeting — sab jagah yahi document pehle maanga jaata hai.
          </IB>
        </section>

        {/* How To Access */}
        <section className="mb-8">
          <SH>Portal Par Record Kaise Nikalein</SH>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> open karo</SI>
            <SI n={2}>Farmers Corner → <strong>Beneficiary Status</strong></SI>
            <SI n={3}>Aadhaar / Mobile / Registration ID enter karo</SI>
            <SI n={4}>Captcha → <strong>Get Data</strong></SI>
            <SI n={5}><strong>Payment Details</strong> section scroll karo</SI>
            <SI n={6}>"Not Released", "Failed", "Rejected" entries count karo — yahi arrears hain</SI>
          </StepList>
          <WB>
            <strong>Backup:</strong> Portal slow/error = <strong>pfms.nic.in</strong> try karo. "Track NSP Payments" mein Aadhaar se same DBT trail milti hai. Zyada stable hai.
          </WB>
        </section>

        {/* Disbursement Timeline */}
        <section className="mb-8">
          <SH>Complete Timeline — Launch Se Ab Tak</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Cycle</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-right">Amount</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-amber-50 dark:bg-amber-900/20">
                  <td className="p-3 border-b border-[var(--color-border)] font-black text-amber-800 dark:text-amber-300">23rd</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-amber-700 dark:text-amber-400">Jun-Jul 2026</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-right font-bold text-amber-700 dark:text-amber-400">₹2,000</td>
                  <td className="p-3 border-b border-[var(--color-border)]"><span className="text-xs bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full font-bold">Upcoming</span></td>
                </tr>
                {DISBURSEMENT_RECORD.map(({ label, date, amount, status }, i) => (
                  <tr key={label} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-bold text-[var(--color-text)]">{label}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{date}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-right font-semibold text-green-700 dark:text-green-400">{amount}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-medium">{status}</td>
                  </tr>
                ))}
                <tr className="bg-[var(--color-bg-alt)]">
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]" colSpan={2}>1st–12th (Feb 2019 – Oct 2022)</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-right text-xs font-bold text-[var(--color-text-muted)]">₹24,000</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-600 dark:text-green-400">All Credited</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-green-700 text-white">
                  <td className="p-3 font-black" colSpan={2}>Total (22 released)</td>
                  <td className="p-3 text-right font-black text-lg">₹44,000</td>
                  <td className="p-3 text-xs">Max possible</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-xs text-[var(--color-text-muted)] mt-2">Actual amount registration date aur eligibility period par depend karta hai.</p>
        </section>

        {/* Arrears Quick Reference */}
        <section className="mb-8">
          <SH>Arrears Calculator — Quick Reference</SH>
          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-5 shadow-sm">
            <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[var(--color-bg-alt)]">
                    <th className="p-3 text-left">Missed</th>
                    <th className="p-3 text-right">Arrears</th>
                    <th className="p-3 text-left">After Fix (+ Next)</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((n, i) => (
                    <tr key={n} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                      <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{n}</td>
                      <td className="p-3 border-b border-[var(--color-border)] text-right font-black text-green-700 dark:text-green-400">₹{(n * 2000).toLocaleString('en-IN')}</td>
                      <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">₹{((n + 1) * 2000).toLocaleString('en-IN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">
                <strong>Example:</strong> Rajendra — 7 missed = ₹14,000 arrears + ₹2,000 next = <strong>₹16,000 single credit.</strong> 45 days fix-to-credit.
              </p>
            </div>
          </div>
        </section>

        {/* Status Labels */}
        <section className="mb-8">
          <SH>Status Labels Ka Matlab</SH>
          <div className="space-y-3">
            {[
              { label: 'Success / Credited', color: 'green', meaning: 'Bank mein jama. Statement verify karo.', action: 'Kuch mat karo.' },
              { label: 'FTO Generated', color: 'blue', meaning: 'State approved. Bank processing.', action: '2-5 din wait. 7+ din = bank visit.' },
              { label: 'RFT Signed', color: 'blue', meaning: 'State sign done. Upload pending.', action: '7-15 din normal.' },
              { label: 'Not Released', color: 'amber', meaning: 'Process nahi hua. Eligibility/tech hold.', action: 'Rejection reason dekho. Fix karo.' },
              { label: 'Failed / Rejected', color: 'red', meaning: 'Attempt fail. Mismatch/NPCI/inactive.', action: 'Error note karo. Fix guide follow.' },
              { label: 'Reversed', color: 'red', meaning: 'Paisa gaya, wapas aaya. Dormant/mismatch.', action: 'Bank activate. Portal update. Auto retry.' },
            ].map(({ label, color, meaning, action }) => (
              <div key={label} className={`p-4 bg-${color}-50 dark:bg-${color}-900/20 border border-${color}-200 dark:border-${color}-800 rounded-xl`}>
                <p className={`font-black text-${color}-800 dark:text-${color}-300 text-sm mb-1`}>{label}</p>
                <p className="text-xs text-[var(--color-text-muted)] mb-1">{meaning}</p>
                <p className={`text-xs text-${color}-700 dark:text-${color}-400 font-semibold`}>➡️ {action}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-Verification */}
        <section className="mb-8">
          <SH>Triple Verification — Portal + Bank + PFMS</SH>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-[var(--color-text)] text-sm mb-1">pmkisan.gov.in</p>
              <p className="text-xs text-[var(--color-text-muted)]">Primary. Sync delay 7-15 din possible.</p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-[var(--color-text)] text-sm mb-1">Bank Statement</p>
              <p className="text-xs text-[var(--color-text-muted)]">Final proof. "PM KISAN" / "DBT AGRI" search.</p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-[var(--color-text)] text-sm mb-1">pfms.nic.in</p>
              <p className="text-xs text-[var(--color-text-muted)]">Master DB. Portal down = best backup.</p>
            </div>
          </div>
          <DB>
            <strong>Discrepancy?</strong> Bank statement authoritative. Teeno screenshot lo, 155261 par reconciliation ticket daalo.
          </DB>
        </section>

        {/* State Processing Speed */}
        <section className="mb-8">
          <SH>State-wise Processing Speed</SH>
          <div className="space-y-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-1">Fast (1-3 Days)</p>
              <p className="text-xs text-[var(--color-text-muted)]">UP, MP, Gujarat, Haryana — automated systems mature.</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-1">Normal (3-7 Days)</p>
              <p className="text-xs text-[var(--color-text-muted)]">Bihar, Rajasthan, Karnataka, Telangana, TN — some manual steps.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">Slow (7-15 Days)</p>
              <p className="text-xs text-[var(--color-text-muted)]">Jharkhand, Odisha, CG, NE — connectivity + staff issues. 15+ din = helpline.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Real Sawal — Seedhe Jawaab
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Payment Ledger FAQ 2026 — Verified Answers" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="Official Beneficiary Status & Ledger"
          guide="Abhi Record Check Karo"
          guideHref="/articles/pm-kisan-payment-failed-status-2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="📊"
          title="Apna Arrears Calculate Karo"
          desc="Kitne cycles miss hue, kitna paisa banega — turant jaano"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-23vi-kist-2026-status-check', l: '📅 23vi Status' },
          { href: '/articles/pm-kisan-payment-failed-status-2026', l: '💸 Payment Fix' },
          { href: '/calculator/installment-tracker', l: '📊 Tracker' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}