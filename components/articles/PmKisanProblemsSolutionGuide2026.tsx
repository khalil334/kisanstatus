'use client';

import Link from 'next/link';
import Image from 'next/image';
import { IB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-ekyc-online-2026', title: 'Digital Verification Guide', emoji: '🔐' },
  { slug: 'pm-kisan-payment-failed-status-2026', title: 'Credit Transfer Failed Fix', emoji: '💸' },
  { slug: 'pm-kisan-rejected-list-2026', title: 'Application Declined Fix', emoji: '❌' },
  { slug: 'pm-kisan-land-seeding-status-check', title: 'Land Record Linking Fix', emoji: '🌾' },
  { slug: 'pm-kisan-name-correction-online-2026', title: 'Identity Correction Guide', emoji: '✏️' },
  { slug: 'pm-kisan-23vi-kist-2026-status-check', title: '23vi Installment Status', emoji: '📅' },
];

const PROBLEMS = [
  {
    n: 1, title: 'Transfer Request Approved By State',
    tag: 'Most Googled', tagColor: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
    mystery: 'Yeh status dekhke kai farmers confused ho jaate hain. Matlab simple hai.',
    explain: 'RFT = Request For Transfer. "RFT Signed By State" = State government ne monetary release kar di — ab financial gateway se bank mein credit hoga. Good news — paisa raste mein hai.',
    fix: 'Kuch nahi karna — 3-7 working days mein credit. Screenshot lo, wait karo. 10 din baad bhi nahi aaya toh bank se NPCI mapper check karo.',
    href: '/articles/pm-kisan-payment-failed-status-2026',
  },
  {
    n: 2, title: 'Treasury Gateway Se Payout Nahi Aayi',
    tag: 'Common', tagColor: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
    mystery: 'Treasury successful dikhta hai lekin bank mein paisa nahi.',
    explain: 'PFMS ne bank ko transfer bheja — lekin bank reject ya bounce. 90% cases mein Aadhaar seeding issue hai.',
    fix: 'Bank jao → "Aadhaar seeding hai?" pucho → Nahi toh form bharo (free) → 3-7 din link → Agli cycle mein credit + arrears.',
    href: '/articles/pm-kisan-payment-failed-status-2026',
  },
  {
    n: 3, title: 'Digital Verification "Pending" Dikhta Hai',
    tag: 'Very Common', tagColor: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
    mystery: 'Authentication karne ke baad bhi pending.',
    explain: 'Portal update hone mein 24-72 hours lagte hain. OTP se 24h, CSC biometric se 48-72h. Server sync time leta hai.',
    fix: '24-72h wait → dobara check. 3 din baad bhi pending = verification section mein recheck. "Already Verified" na dikhe toh dobara karo ya CSC jao.',
    href: '/articles/pm-kisan-ekyc-online-2026',
  },
  {
    n: 4, title: 'Eligible Beneficiary Status Nahi Dikh Raha',
    tag: 'Confusing', tagColor: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    mystery: '"No Record Found" ya blank page.',
    explain: '3 reasons: (1) Aadhaar/mobile galat enter, (2) Enrollment state verification mein pending, (3) Kisi aur number se enrollment hua tha.',
    fix: 'Aadhaar dobara check → Mobile try → Enrollment ID try. Kuch kaam na kare toh 155261 call — naam batao, woh check kar denge.',
    href: '/articles/pm-kisan-beneficiary-list-2026',
  },
  {
    n: 5, title: 'Roster Mein Hai Par Credit Nahi',
    tag: 'Frustrating', tagColor: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    mystery: 'Active status, roster mein naam — phir bhi payout nahi.',
    explain: 'Active ≠ payment. Additionally chahiye: digital verification done, NPCI seeded, IFSC sahi. Ek bhi missing = bounce.',
    fix: 'Checklist: (1) Verification "Done"? (2) Bank mein NPCI confirm? (3) IFSC passbook se match? Teeno ok = 155261 call.',
    href: '/articles/pm-kisan-payment-failed-status-2026',
  },
  {
    n: 6, title: '"Aadhaar Authentication Failed"',
    tag: 'Technical', tagColor: 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300',
    mystery: 'Verification karte waqt error aata hai.',
    explain: '3 reasons: (1) Aadhaar galat enter, (2) OTP expire/galat, (3) Identity record problem (naam mismatch, locked Aadhaar).',
    fix: 'Step 1: Aadhaar recheck. Step 2: OTP 30 sec mein enter. Step 3: Baar baar fail = 1947 call. Step 4: CSC biometric try — OTP nahi chahiye.',
    href: '/articles/pm-kisan-ekyc-online-2026',
  },
  {
    n: 7, title: 'State Verification Mein Atka Hua',
    tag: 'Slow Process', tagColor: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
    mystery: 'Mahine baad bhi "Under Verification".',
    explain: 'State manually verify karta hai — zameen, eligibility, documents. Busy season mein 45-60 din lag sakte hain.',
    fix: '60+ din = Block Agriculture Office jao. Acknowledgement dikhao. Officer manually push kar sakta hai. 155261 par escalate bhi karo.',
    href: '/articles/pm-kisan-registration-online-2026',
  },
  {
    n: 8, title: 'Land Record Linking Nahi Ho Rahi',
    tag: 'Office Waala', tagColor: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
    mystery: '"Land Seeding: No" — patwari ne kaha "ho jaayega" — mahine beet gaye.',
    explain: 'Multi-step process: Patwari → Block → State Revenue → Portal. Ek step delay = pura ruk jaata hai.',
    fix: 'Patwari se written acknowledgement lo. BAO ko registered post letter. 30 din mein nahi = District Collector complaint. 155261 par land mapping complaint.',
    href: '/articles/pm-kisan-land-seeding-status-check',
  },
  {
    n: 9, title: 'Credit Doosre Ke Account Mein Gayi',
    tag: 'Rare But Real', tagColor: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
    mystery: 'IFSC/account galat — paisa wrong account mein.',
    explain: 'Rare lekin hota hai. Ek baar credit hone ke baad directly wapas nahi hota — lekin process hai.',
    fix: 'Immediately bank jao → written complaint wrong credit ki. RBI guidelines under bank wapas le sakta hai. Portal par details correct karo. Banking Ombudsman last resort.',
    href: '/articles/pm-kisan-payment-failed-status-2026',
  },
  {
    n: 10, title: 'Helpline Utha Nahi Raha',
    tag: 'Practical', tagColor: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    mystery: '155261 engaged ya koi answer nahi.',
    explain: '9 AM-6 PM Mon-Fri. Lunch (1-2 PM) aur peak hours mein bahut busy.',
    fix: 'Best: 9:10-9:30 AM ya 4:30-5:30 PM. Alt: 011-24300606. Email: pmkisan-ict@gov.in (enrollment ID include). Complex issues = BAO personally milo.',
    href: '/contact',
  },
];

export default function PmKisanProblemsSolutionGuide2026({ article }: { article: ArticleMeta }) {
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
            <span className="text-white font-bold">10 Roadblocks Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Troubleshooting Hub</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            10 Common Roadblocks 2026: Har Problem Ka Tested Solution Ek Jagah
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 15 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Hero Image — PATH UNCHANGED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/problems-guide.png'}
            alt="Cultivator benefit scheme 10 roadblocks aur unke solutions 2026"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            10 Common Roadblocks — 10 Real Solutions
          </p>
        </div>

        {/* How To Use */}
        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-blue-800 dark:text-blue-300 mb-2">Yeh Guide Kaise Use Karein</h2>
          <p className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
            Apni problem ka number dhundho, seedha us section par jao. Har section mein: <strong>kya matlab hai</strong>, <strong>kyun hota hai</strong>, <strong>exact fix</strong>. Detailed guide ka link bhi hai.
          </p>
        </div>

        {/* Quick Navigator */}
        <div className="my-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {PROBLEMS.map(({ n, title }) => (
            <a
              key={n}
              href={`#problem-${n}`}
              className="flex items-center gap-2 p-2.5 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-green-300 dark:hover:border-green-700 hover:bg-[var(--color-bg-alt)] transition-colors text-xs font-medium text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            >
              <span className="w-6 h-6 rounded-full bg-red-600 text-white text-[10px] font-black flex items-center justify-center shrink-0">{n}</span>
              <span className="line-clamp-1">{title}</span>
            </a>
          ))}
        </div>

        {/* All 10 Problems */}
        <div className="space-y-5">
          {PROBLEMS.map(({ n, title, tag, tagColor, mystery, explain, fix, href }) => (
            <div key={n} id={`problem-${n}`} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm scroll-mt-6">
              <div className="flex items-start gap-3 px-5 py-4 bg-[var(--color-bg-alt)] border-b border-[var(--color-border)]">
                <span className="w-9 h-9 rounded-full bg-red-600 text-white font-black flex items-center justify-center shrink-0 text-sm">{n}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-black text-[var(--color-text)] text-sm">{title}</p>
                  <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${tagColor}`}>{tag}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="mb-3 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-xl">
                  <p className="text-xs text-amber-900 dark:text-amber-300 italic">&quot;{mystery}&quot;</p>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mb-3 leading-relaxed">
                  <strong className="text-[var(--color-text)]">Kyun:</strong> {explain}
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl p-3 mb-3">
                  <p className="text-xs font-black text-green-800 dark:text-green-300 mb-1">✅ FIX:</p>
                  <p className="text-xs text-green-900 dark:text-green-200 leading-relaxed">{fix}</p>
                </div>
                <Link
                  href={href}
                  className="text-xs font-bold text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  📖 Detailed Guide →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Helpline CTA */}
        <div className="mt-8 p-5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl text-center">
          <p className="font-black text-green-900 dark:text-green-300 text-base mb-1">Koi Problem Solve Nahi Hui?</p>
          <p className="text-sm text-green-700 dark:text-green-400 mb-4">Helpline par call karo — free government support</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:155261" className="bg-green-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500">📞 155261</a>
            <a href="tel:01124300606" className="bg-green-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500">📞 011-24300606</a>
            <a href="mailto:pmkisan-ict@gov.in" className="border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500">✉️ Email</a>
          </div>
        </div>

        <CalcBanner
          icon="🔧"
          title="Apna Status Check Karo"
          desc="Beneficiary active hai ya nahi, kitne installments pending — turant jaano"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-payment-failed-status-2026', l: '💸 Payment Fix' },
          { href: '/articles/pm-kisan-ekyc-online-2026', l: '🔐 eKYC Guide' },
          { href: '/articles/pm-kisan-land-seeding-status-check', l: '🌾 Land Fix' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}