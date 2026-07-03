'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-06-28T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-23vi-kist-2026-status-check', title: '23vi Installment Status', emoji: '📅' },
  { slug: 'pm-kisan-ekyc-online-2026', title: 'Digital Verification Guide', emoji: '🔐' },
  { slug: 'pm-kisan-payment-failed-status-2026', title: 'Payment Failed Fix', emoji: '💸' },
  { slug: 'pm-kisan-name-correction-online-2026', title: 'Name Correction Guide', emoji: '✏️' },
  { slug: 'pm-kisan-rejected-list-2026', title: 'Rejected List Fix', emoji: '❌' },
  { slug: 'pm-kisan-registration-online-2026', title: 'New Enrollment Guide', emoji: '📝' },
];

const FAQS_DATA = [
  { q: 'Self-Enrolled Beneficiary Verification kaise kare?', a: 'pmkisan.gov.in → Farmers Corner → "Status of Self Registered Farmer/CSC Farmer" → Aadhaar number dalo → Captcha → Get Data. Status dikh jayega.' },
  { q: 'Pending verification ka kya matlab hai?', a: 'Authentication chal raha hai. 7-10 din wait karo. 15 din se zyada ho toh helpline 155261 par call karo ya District Agriculture Office jaao.' },
  { q: 'Rejected hone par kya kare?', a: 'Rejection reason pata karo portal par. Galti sudharo, dobara apply karo. Detailed fix ke liye Rejected List Fix Guide padho.' },
  { q: '"No Record Found" error aa raha hai?', a: 'Aadhaar number galat hai ya enrollment submit nahi hua. Dobara check karo. Phir bhi na dikhe toh CSC center jaake confirm karo.' },
  { q: 'Self-Enrollment aur CSC Enrollment mein kya farak hai?', a: 'Dono same scheme ke liye hain. CSC = operator ne kiya. Self = ghar baithe khud kiya. Status check process dono ke liye same hai.' },
  { q: 'Approved dikh raha hai lekin paisa nahi aaya?', a: 'eKYC complete karo pehle. Phir NPCI seeding bank mein confirm karo. Dono done = agli cycle mein payment aayegi.' },
];

export default function PmKisanSelfRegisteredStatusCheck({ article }: { article: ArticleMeta }) {
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
            <span className="text-white font-bold truncate max-w-[200px]">{article.title || 'Self-Registered Status Check'}</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Self-Enrollment Verification</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Khud Se Apply Kiya Tha? Ab Status Kaise Check Karein — Step-by-Step Guide
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 7 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Hero Image #1 — PRESERVED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/pm-kisan-status-check-tool-interface.webp'}
            alt="PM Kisan self-registered farmer status check tool interface — Aadhaar input screen"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Official Portal Par Self-Registered Status Kaise Check Karein
          </p>
        </div>

        {/* Quick Answer */}
        <div className="my-6 p-5 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-green-800 dark:text-green-300 mb-2">⚡ Quick Answer</h2>
          <p className="text-sm text-green-900 dark:text-green-200 leading-relaxed">
            <strong>pmkisan.gov.in</strong> → Farmers Corner → <strong>"Status of Self Registered Farmer/CSC Farmer"</strong> → Aadhaar number dalo → Captcha verify → <strong>Get Data</strong>. Status dikh jayega.
          </p>
        </div>

        {/* What Is Self-Enrollment */}
        <section className="mb-8">
          <SH>Self-Enrolled Beneficiary Ka Matlab Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Enrollment ke do tarike hain:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <span className="text-2xl block mb-2">🏢</span>
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-1">CSC Enrollment</p>
              <p className="text-xs text-[var(--color-text-muted)]">Jan Seva Kendra jaake operator ne enrollment kiya.</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <span className="text-2xl block mb-2">🏠</span>
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-1">Self-Enrollment</p>
              <p className="text-xs text-[var(--color-text-muted)]">Ghar baithe pmkisan.gov.in par khud apply kiya.</p>
            </div>
          </div>
          <WB>
            <strong>Common Problem:</strong> Enrollment ke baad 4 mahine tak paisa nahi aata. Check karne par pata chalta hai application "Pending" thi kyunki Aadhaar-bank link nahi tha. <strong>Status check zaroori hai!</strong>
          </WB>
        </section>

        {/* Steps Infographic #2 — PRESERVED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/pm-kisan-status-check-steps-infographic.webp"
            alt="Step by step infographic — self-registered farmer status check process on pmkisan.gov.in"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Step-by-Step Verification Process
          </p>
        </div>

        {/* 6 Steps */}
        <section className="mb-8">
          <SH>Status Check — 6 Steps</SH>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> open karo. Hamesha official site — fake sites se bacho</SI>
            <SI n={2}>Homepage par <strong>Farmers Corner</strong> section dhundo</SI>
            <SI n={3}><strong>"Status of Self Registered Farmer/CSC Farmer"</strong> click karo</SI>
            <SI n={4}>12-digit Aadhaar number bina space ke enter karo</SI>
            <SI n={5}>Captcha type karo → <strong>Get Data</strong> dabao</SI>
            <SI n={6}>Application status screen par dikh jayega</SI>
          </StepList>
          <DB>
            <strong>Dhyan Rakhein:</strong> Aadhaar number galat = "No Record Found" error. Sahi number daalo. Galti ho gayi toh <Link href="/articles/pm-kisan-name-correction-online-2026" className="underline font-bold">Identity Rectification Guide</Link> padho.
          </DB>
        </section>

        {/* Farmer Photo #3 — PRESERVED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/indian-farmer-checking-phone-status.webp"
            alt="Indian cultivator checking self-registered application status on smartphone in field"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* Status Types Table */}
        <section className="mb-8">
          <SH>Status Ke Types Aur Matlab</SH>
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
                  ['✅ Approved', 'Enrollment safal — payment shuru hogi', 'eKYC complete karo'],
                  ['⏳ Pending', 'Verification chal raha hai', '7-15 din wait karo'],
                  ['❌ Rejected', 'Koi galti mili hai', <Link key="rej" href="/articles/pm-kisan-rejected-list-2026" className="text-green-700 dark:text-green-400 underline font-bold">Fix Guide →</Link>],
                ].map(([status, meaning, action], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-semibold text-xs text-[var(--color-text)]">{status}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{meaning}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-medium">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Common Problems */}
        <section className="mb-8">
          <SH>Common Problems + Solutions</SH>
          <div className="space-y-3">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">❌ "No Record Found"</p>
              <p className="text-xs text-red-700 dark:text-red-400">Aadhaar galat ya enrollment submit nahi hua. Dobara check karo ya CSC jaao.</p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">⏳ 15 Din Se Zyada Pending</p>
              <p className="text-xs text-amber-700 dark:text-amber-400">Helpline 155261 par call karo ya District Agriculture Office visit karo.</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-4">
              <p className="font-black text-purple-800 dark:text-purple-300 text-sm mb-1">✏️ Identity Mismatch</p>
              <p className="text-xs text-purple-700 dark:text-purple-400"><Link href="/articles/pm-kisan-name-correction-online-2026" className="underline font-bold">Identity Rectification Guide →</Link> follow karo.</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-1">✅ Approved Par Paisa Nahi Aaya</p>
              <p className="text-xs text-blue-700 dark:text-blue-400">Pehle eKYC karo. Phir bank mein NPCI seeding confirm karo. Dono done = payment aayegi.</p>
            </div>
          </div>
        </section>

        {/* Helpline */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5 mb-8 space-y-2">
          <p className="font-black text-[var(--color-text)] text-sm mb-2">Help Ke Liye Sampark</p>
          <p className="text-sm text-[var(--color-text-muted)]">📞 Helpline: <a href="tel:155261" className="font-bold text-[var(--color-primary)] hover:underline">155261</a> (Toll Free)</p>
          <p className="text-sm text-[var(--color-text-muted)]">📞 Alternate: <a href="tel:1800115526" className="font-bold text-[var(--color-primary)] hover:underline">1800-115-526</a></p>
          <p className="text-sm text-[var(--color-text-muted)]">📧 Email: pmkisan-krishi@gov.in</p>
          <p className="text-xs text-[var(--color-text-muted)] mt-2">⏰ Mon-Sat, 9 AM - 6 PM</p>
        </div>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Self-Registered Status FAQ 2026 — Verified Answers" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Portal — Self-Registered Status Check"
          guide="Abhi Status Dekho"
          guideHref="/articles/pm-kisan-ekyc-online-2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="📋"
          title="Apna Status Track Karo"
          desc="Kitni kist aayi, pending kya hai — complete history jaano"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-23vi-kist-2026-status-check', l: '📅 23vi Status' },
          { href: '/articles/pm-kisan-ekyc-online-2026', l: '🔐 eKYC Guide' },
          { href: '/articles/pm-kisan-rejected-list-2026', l: '❌ Rejected Fix' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}