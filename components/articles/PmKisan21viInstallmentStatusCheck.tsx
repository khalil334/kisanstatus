'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-ekyc-online-2026', title: 'Digital Verification Guide', emoji: '🔐' },
  { slug: 'pm-kisan-payment-failed-status-2026', title: 'Payment Failed Fix', emoji: '💸' },
  { slug: 'pm-kisan-rejected-list-2026', title: 'Rejected List Fix', emoji: '❌' },
  { slug: 'pm-kisan-beneficiary-list-2026', title: 'Beneficiary Roster Check', emoji: '📋' },
  { slug: 'pm-kisan-installment-history-check-online', title: 'Complete Payment History', emoji: '📊' },
  { slug: 'pm-kisan-23vi-kist-2026-status-check', title: '23vi Installment Status', emoji: '📅' },
];

const FAQS_DATA = [
  {
    q: 'FTO Generated dikh raha hai lekin paisa nahi aaya — kab tak aayega?',
    a: 'FTO matlab Fund Transfer Order generate ho chuka hai — government ne payment process shuru kar diya. Bank mein credit hone mein 3-7 working days lagte hain normally. Agar 10 din baad bhi nahi aaya toh bank branch visit karo aur helpline 155261 par call karo. Kabhi-kabhi NPCI mapping issue hota hai jo bank fix karta hai.',
  },
  {
    q: 'Mobile number change ho gaya — ab status kaise check karein?',
    a: 'Aadhaar number se check karo — mobile ki zaroorat nahi. Ya registration number se bhi ho sakta hai. Naya number update karne ke liye CSC center jaao ya pmkisan.gov.in par "Update Mobile" option use karo. Update mein 7-10 din lagte hain.',
  },
  {
    q: 'Bank statement mein PM KISAN entry hai lekin amount ₹2,000 se alag hai?',
    a: '₹2,000 standard installment amount hai. Kam aaya ho toh check karo ki bank ne koi charge toh nahi kaata. Zyada aaya ho toh arrears mein pichli missed installments bhi aayi hongi. Payment history portal par dekho — har installment ki alag entry hoti hai.',
  },
  {
    q: 'Status "Active" hai lekin pichle 2 installments nahi aaye — kyun?',
    a: 'Active status ka matlab eligibility confirm hai. Lekin payment ke liye eKYC + NPCI seeding + land seeding teeno complete hone chahiye. Beneficiary Status mein individual installment check karo — har ek ka alag status hota hai. Missing installments arrears mein aayengi jab pending condition fix hogi.',
  },
  {
    q: 'Ek baar payment success dikha — phir se check karna zaroori hai?',
    a: 'Zaroori nahi. Lekin next installment se pehle eKYC aur bank seeding status verify karna smart hai. Technical updates ya Aadhaar changes ki wajah se kabhi-kabhi status change ho jaata hai. Har 2-3 mahine mein ek baar check karo.',
  },
  {
    q: '22vi kist aayi lekin 21vi nahi aayi — kya karein?',
    a: 'Portal par installment history check karo. 21vi "Failed" ya "Not Released" dikh rahi hai toh reason note karo. Usually eKYC pending ya land seeding incomplete hota hai. Fix karo — arrears mein missed installment next cycle mein aa jaayegi. Helpline 155261 par bhi puch sakte ho.',
  },
  {
    q: 'CSC center par status check karwane ka charge kitna hai?',
    a: 'Status check FREE hai. Koi operator charge maange toh refuse karo. Sirf eKYC ya correction services ke liye nominal fee ho sakti hai. Fraud ki complaint 1800-1214-060 par karo.',
  },
];

export default function PmKisan21viInstallmentStatusCheck({ article }: { article: ArticleMeta }) {
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
            <span className="text-white font-bold">Installment Status</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Status Check Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan 22vi Kist Status 2026: Mobile Se 2 Minute Mein Check Karo — Aadhaar, Mobile Ya Registration Number Se
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

        {/* Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/pm-kisan-21vi-installment-status-check.webp'}
            alt="PM Kisan 22vi installment beneficiary status check 2026 — mobile par Aadhaar se verify karo"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            PM Kisan Beneficiary Status — Aadhaar, Mobile Ya Registration Number Se Check Karo
          </p>
        </div>

        {/* Installment Cards */}
        <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: '21vi Installment', date: 'Nov 2025', amount: '₹2,000', status: '✅ Released', color: 'green' },
            { label: '22vi Installment', date: '13 Mar 2026', amount: '₹2,000', status: '✅ Released', color: 'green' },
            { label: '23vi Installment', date: 'Jun-Jul 2026', amount: '₹2,000', status: '⏳ Expected', color: 'amber' },
          ].map(({ label, date, amount, status, color }) => (
            <div key={label} className={`p-4 bg-${color}-50 dark:bg-${color}-900/20 border border-${color}-200 dark:border-${color}-800 rounded-2xl text-center`}>
              <p className={`font-black text-sm text-${color}-800 dark:text-${color}-300`}>{label}</p>
              <p className="text-xl font-black text-[var(--color-text)] my-1">{amount}</p>
              <p className="text-xs text-[var(--color-text-muted)]">{date}</p>
              <span className={`text-xs font-bold text-${color}-800 dark:text-${color}-300 mt-1 block`}>{status}</span>
            </div>
          ))}
        </div>

        {/* Quick Status Check */}
        <div className="my-6 p-5 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-green-800 dark:text-green-300 mb-3">2 Minute Mein Status Check</h2>
          <StepList>
            <SI n={1}>Mobile browser mein <strong>pmkisan.gov.in</strong> kholo</SI>
            <SI n={2}><strong>Farmers Corner</strong> menu tap karo</SI>
            <SI n={3}><strong>Beneficiary Status</strong> select karo</SI>
            <SI n={4}><strong>Aadhaar Number</strong> ya <strong>Mobile Number</strong> enter karo</SI>
            <SI n={5}><strong>Get Data</strong> button dabao</SI>
            <SI n={6}>Payment history dekho — 22vi installment <strong>13 March 2026</strong> ki entry hogi</SI>
          </StepList>
        </div>

        {/* Section: Status Meanings */}
        <section className="mb-8">
          <SH>Status Mein Kya Dikha Sakta Hai — Matlab Samjho</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Matlab</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['✅ Payment Success', 'Bank mein credit ho gaya', 'Statement check karo — 24-48 hrs'],
                  ['⏳ FTO Generated', 'Fund Transfer Order create — processing mein', '2-5 din wait karo'],
                  ['🔄 Under Process', 'PFMS se bank ko bheja ja raha hai', '3-7 din wait, phir check'],
                  ['❌ Failed / Return', 'Bank ya NPCI mein bounce', 'Failure guide padho neeche'],
                  ['🚫 Rejected', 'Application level issue', 'Rejection guide padho'],
                  ['⚠️ eKYC Pending', 'Bina verification payment nahi', 'Abhi eKYC karo — free'],
                ].map(([status, meaning, action], i) => (
                  <tr key={status} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{status}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{meaning}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-medium">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: 3 Methods */}
        <section className="mb-8">
          <SH>3 Tarike Se Status Check — Kaunsa Best?</SH>
          <div className="space-y-4">
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🪪</span>
                <div>
                  <p className="font-black text-[var(--color-text)] text-sm">Aadhaar Number Se</p>
                  <p className="text-xs text-green-700 dark:text-green-400 font-medium">Sabse accurate — UIDAI linked</p>
                </div>
              </div>
              <ol className="space-y-1.5 ml-1">
                <li className="flex gap-2 text-xs text-[var(--color-text-muted)]"><span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold flex items-center justify-center shrink-0">1</span> pmkisan.gov.in → Beneficiary Status</li>
                <li className="flex gap-2 text-xs text-[var(--color-text-muted)]"><span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold flex items-center justify-center shrink-0">2</span> "Aadhaar Number" select karo</li>
                <li className="flex gap-2 text-xs text-[var(--color-text-muted)]"><span className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold flex items-center justify-center shrink-0">3</span> 12-digit Aadhaar daalo → Captcha → Get Data</li>
              </ol>
              <p className="text-[11px] text-amber-700 dark:text-amber-400 mt-2">💡 Aadhaar card saamne rakho — digit galti mat karna</p>
            </div>

            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="font-black text-[var(--color-text)] text-sm">Mobile Number Se</p>
                  <p className="text-xs text-green-700 dark:text-green-400 font-medium">Jab Aadhaar haath mein na ho</p>
                </div>
              </div>
              <ol className="space-y-1.5 ml-1">
                <li className="flex gap-2 text-xs text-[var(--color-text-muted)]"><span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold flex items-center justify-center shrink-0">1</span> Beneficiary Status → "Mobile Number" select</li>
                <li className="flex gap-2 text-xs text-[var(--color-text-muted)]"><span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold flex items-center justify-center shrink-0">2</span> 10-digit registered mobile daalo</li>
                <li className="flex gap-2 text-xs text-[var(--color-text-muted)]"><span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold flex items-center justify-center shrink-0">3</span> Captcha → Get Data</li>
              </ol>
              <p className="text-[11px] text-amber-700 dark:text-amber-400 mt-2">💡 Wahi number kaam karega jo registration mein diya tha</p>
            </div>

            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔢</span>
                <div>
                  <p className="font-black text-[var(--color-text)] text-sm">Registration Number Se</p>
                  <p className="text-xs text-green-700 dark:text-green-400 font-medium">Agar registration ID pata ho</p>
                </div>
              </div>
              <ol className="space-y-1.5 ml-1">
                <li className="flex gap-2 text-xs text-[var(--color-text-muted)]"><span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-[10px] font-bold flex items-center justify-center shrink-0">1</span> Beneficiary Status → "Registration Number"</li>
                <li className="flex gap-2 text-xs text-[var(--color-text-muted)]"><span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-[10px] font-bold flex items-center justify-center shrink-0">2</span> PM Kisan registration ID daalo</li>
                <li className="flex gap-2 text-xs text-[var(--color-text-muted)]"><span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-[10px] font-bold flex items-center justify-center shrink-0">3</span> Captcha → Get Data</li>
              </ol>
              <p className="text-[11px] text-amber-700 dark:text-amber-400 mt-2">💡 Registration number old SMS ya application receipt mein hota hai</p>
            </div>
          </div>
        </section>

        {/* Section: Prepare for 23vi */}
        <section className="mb-8">
          <SH>23vi Installment Ke Liye Abhi Kya Karo</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            23vi installment June-July 2026 expected. Yeh 3 cheezein abhi confirm karo — installment pakki rahegi.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-green-700 text-white text-xs font-black flex items-center justify-center">1</span>
                <span className="text-xl">🔐</span>
              </div>
              <p className="font-black text-[var(--color-text)] text-sm">eKYC Verify Karo</p>
              <p className="text-xs text-[var(--color-text-muted)]">Portal par "eKYC Done" dikhna chahiye. Nahi dikhta toh abhi free mein karo.</p>
              <Link href="/articles/pm-kisan-ekyc-online-2026" className="text-xs font-bold text-green-700 dark:text-green-400 hover:underline mt-auto">eKYC Guide →</Link>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-blue-700 text-white text-xs font-black flex items-center justify-center">2</span>
                <span className="text-xl">🏦</span>
              </div>
              <p className="font-black text-[var(--color-text)] text-sm">Bank Seeding Check</p>
              <p className="text-xs text-[var(--color-text-muted)]">Bank branch mein confirm karo — NPCI seeding zaroori hai DBT ke liye.</p>
              <Link href="/articles/pm-kisan-payment-failed-status-2026" className="text-xs font-bold text-blue-700 dark:text-blue-400 hover:underline mt-auto">Payment Guide →</Link>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-700 text-white text-xs font-black flex items-center justify-center">3</span>
                <span className="text-xl">✅</span>
              </div>
              <p className="font-black text-[var(--color-text)] text-sm">Beneficiary Status</p>
              <p className="text-xs text-[var(--color-text-muted)]">"Active" dikhna chahiye. "Rejected" ya "Inactive" fix karo immediately.</p>
              <Link href="/articles/pm-kisan-rejected-list-2026" className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:underline mt-auto">Rejected Fix →</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Installment Status FAQ 2026 — Verified Answers" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="PM Kisan Beneficiary Status — Official Portal"
          guide="Abhi Status Check Karo"
          guideHref="/articles/pm-kisan-ekyc-online-2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="📅"
          title="Apni Installment Track Karo"
          desc="Kitni kist aayi, kitni pending — complete payment history jaano"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator', label: '🧮 Sab Utilities' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-23vi-kist-2026-status-check', l: '📅 23vi Status' },
          { href: '/articles/pm-kisan-ekyc-online-2026', l: '🔐 eKYC Guide' },
          { href: '/articles/pm-kisan-installment-history-check-online', l: '📊 History' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}