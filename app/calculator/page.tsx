import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `Free PM Kisan Tools 2026 — Status Check, EMI, Insurance & Profit Calculator | ${SITE_NAME}`,
  description: '7 free kisan utilities — status verification, KCC loan EMI, crop insurance premium, MSP income aur profit/loss analysis. No registration, no charge.',
  alternates: { canonical: `${SITE_URL}/calculator` },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/calculator`,
    siteName: SITE_NAME,
    title: `Free PM Kisan Tools 2026 — Status, EMI, Insurance & Profit Calculator`,
    description: '7 free kisan utilities — no login, no charge. Bank jaane se pehle hisaab karo.',
    locale: 'hi_IN',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `Free PM Kisan Tools 2026 – ${SITE_NAME}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Free PM Kisan Tools 2026 — Status, EMI, Insurance & Profit Calculator`,
    description: '7 free kisan utilities — no login, no charge.',
    images: [DEFAULT_OG_IMAGE],
    site: '@kisanstatus',
  },
};

const CALCS = [
  {
    href: '/calculator/quick-status-check',
    index: '00',
    emoji: '🔍',
    title: 'Quick Status Verification',
    hindi: 'क्विक स्टेटस वेरिफिकेशन',
    desc: 'Aadhaar ya mobile number daalo aur seedha official portal par apna 23vi tranche status verify karo. Instant & Free.',
    tags: ['Aadhaar Check', 'Mobile Check', 'Instant Redirect'],
    group: 'scheme',
    featured: true,
    badge: '🔥 New Tool',
  },
  {
    href: '/calculator/installment-tracker',
    index: '01',
    emoji: '📆',
    title: 'Installment Tracker',
    hindi: 'किस्त स्टेटस ट्रैकर',
    desc: '23vi kist aayi ya nahi? eKYC, bank seeding, land record check karke 4 sawaal mein exact reason pata karo.',
    tags: ['23vi Kist', 'eKYC Check', 'Instant Result'],
    group: 'scheme',
    featured: false,
  },
  {
    href: '/calculator/pm-kisan-benefit',
    index: '02',
    emoji: '🌾',
    title: 'PM Kisan Benefit Estimator',
    hindi: 'कृषक लाभ अनुमानक',
    desc: 'Saalana ₹6,000 — estimate karo kitni kist milengi, total benefit, aur arrears. eKYC check bhi.',
    tags: ['₹6,000/yr', '3 Kist', 'Eligibility'],
    group: 'scheme',
  },
  {
    href: '/calculator/kcc-loan-emi',
    index: '03',
    emoji: '🏦',
    title: 'KCC Loan EMI Calculator',
    hindi: 'ऋण सुविधा EMI कैलकुलेटर',
    desc: 'Kisan Credit Card loan ki monthly EMI, total interest, aur 2% government subvention benefit calculate karo.',
    tags: ['7% Rate', 'Govt Subsidy', 'Monthly EMI'],
    group: 'credit',
  },
  {
    href: '/calculator/pmfby-premium',
    index: '04',
    emoji: '🛡️',
    title: 'Crop Insurance Premium',
    hindi: 'फसल सुरक्षा प्रीमियम कैलकुलेटर',
    desc: 'PMFBY — Kharif/Rabi fasal ka insurance premium aur maximum claim amount calculate karo.',
    tags: ['Kharif + Rabi', 'All Crops', 'Claim Amount'],
    group: 'insurance',
  },
  {
    href: '/calculator/msp-income',
    index: '05',
    emoji: '💹',
    title: 'MSP Income Calculator',
    hindi: 'न्यूनतम समर्थन मूल्य आय कैलकुलेटर',
    desc: '2024-25 MSP rates par gehun, dhan, cotton, sarson — kisi bhi fasal ki total income calculate karo.',
    tags: ['2024-25 Rates', '11 Crops', 'Per Hectare'],
    group: 'data',
  },
  {
    href: '/calculator/crop-profit',
    index: '06',
    emoji: '📊',
    title: 'Crop Profit/Loss Analyzer',
    hindi: 'फसल लाभ/हानि विश्लेषक',
    desc: 'Seed, fertilizer, labor, irrigation — sab kharcha daalo aur net profit ya loss instantly pata karo.',
    tags: ['Full Season', 'All Costs', 'Net Profit'],
    group: 'data',
  },
];

// Dark mode compatible group styles
const GROUP_STYLES: Record<string, { bar: string; chip: string; btn: string; glow: string }> = {
  scheme:    { bar: 'bg-emerald-600', chip: 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30', btn: 'bg-emerald-700 hover:bg-emerald-800', glow: 'hover:shadow-emerald-100 dark:hover:shadow-emerald-900/20' },
  credit:    { bar: 'bg-blue-600',    chip: 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30',        btn: 'bg-blue-700 hover:bg-blue-800',       glow: 'hover:shadow-blue-100 dark:hover:shadow-blue-900/20' },
  insurance: { bar: 'bg-amber-600',   chip: 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/30',      btn: 'bg-amber-700 hover:bg-amber-800',     glow: 'hover:shadow-amber-100 dark:hover:shadow-amber-900/20' },
  data:      { bar: 'bg-slate-600',   chip: 'text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800',     btn: 'bg-slate-700 hover:bg-slate-800',     glow: 'hover:shadow-slate-100 dark:hover:shadow-slate-900/20' },
};

export default function CalculatorIndexPage() {
  const featured = CALCS.find((c) => c.featured);
  const rest = CALCS.filter((c) => !c.featured);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Free PM Kisan Tools 2026 — ${SITE_NAME}`,
    description: '7 free kisan utilities — status verification, KCC EMI, crop insurance premium, MSP income, profit/loss analysis.',
    numberOfItems: CALCS.length,
    itemListElement: CALCS.map((calc, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: calc.title,
      description: calc.desc,
      url: `${SITE_URL}${calc.href}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* Hero */}
      <div className="bg-[var(--color-primary)] py-10">
        <div className="container-site text-center max-w-3xl">
          <span className="inline-block bg-white/15 text-green-200 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            🧮 Free Utilities
          </span>
          <h1 className="text-2xl md:text-4xl font-black text-white mb-3">
            PM Kisan Tools Suite — Status Check, EMI, Insurance, MSP &amp; Profit Analysis
          </h1>
          <h2 className="text-green-200 text-sm md:text-base font-normal max-w-2xl mx-auto mb-6">
            कृषि उपकरण — 7 free utilities, koi registration nahi, koi charge nahi. Bank jaane se pehle hisaab karo.
          </h2>
          <div className="flex items-center justify-center gap-6 font-mono text-white/90 text-sm border-t border-white/15 pt-5 max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold tabular-nums">07</span>
              <span className="text-[10px] uppercase tracking-wider text-green-200/80">Utilities</span>
            </div>
            <span className="text-white/20">|</span>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold tabular-nums">00</span>
              <span className="text-[10px] uppercase tracking-wider text-green-200/80">Login</span>
            </div>
            <span className="text-white/20">|</span>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold tabular-nums">100%</span>
              <span className="text-[10px] uppercase tracking-wider text-green-200/80">Free</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-site py-12 max-w-4xl">

        {/* Featured Tool */}
        {featured && (
          <Link
            href={featured.href}
            className={`group relative flex flex-col sm:flex-row items-stretch gap-5 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 mb-5 overflow-hidden transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${GROUP_STYLES[featured.group].glow}`}
          >
            <span className={`absolute left-0 top-0 bottom-0 w-1.5 ${GROUP_STYLES[featured.group].bar}`} />
            <div className="flex-1 pl-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl">{featured.emoji}</span>
                {featured.badge && (
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-full">
                    ● {featured.badge}
                  </span>
                )}
              </div>
              <h2 className="font-black text-[var(--color-text)] text-xl leading-tight">{featured.title}</h2>
              <p className="text-sm text-[var(--color-text-muted)] font-medium mt-0.5 mb-2">{featured.hindi}</p>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-md">{featured.desc}</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3 font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-muted)]">
                {featured.tags.map((t, i) => (
                  <span key={t} className="flex items-center gap-3">
                    {t}
                    {i < featured.tags.length - 1 && <span className="opacity-30">·</span>}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-3 sm:w-40">
              <span className="font-mono text-5xl font-bold text-gray-100 dark:text-gray-800 leading-none select-none">{featured.index}</span>
              <span className={`w-full text-center ${GROUP_STYLES[featured.group].btn} text-white font-black py-3 px-4 rounded-xl text-sm transition-colors whitespace-nowrap`}>
                Kholo →
              </span>
            </div>
          </Link>
        )}

        {/* Rest of Tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rest.map((c) => {
            const s = GROUP_STYLES[c.group];
            return (
              <Link
                key={c.href}
                href={c.href}
                className={`group relative flex flex-col bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-5 gap-3 overflow-hidden transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${s.glow}`}
              >
                <span className={`absolute left-0 top-0 bottom-0 w-1 ${s.bar}`} />
                <div className="flex items-start justify-between pl-2">
                  <span className="text-3xl">{c.emoji}</span>
                  <span className="font-mono text-3xl font-bold text-gray-100 dark:text-gray-800 leading-none select-none">{c.index}</span>
                </div>
                <div className="pl-2">
                  <h2 className="font-black text-[var(--color-text)] text-base leading-tight">{c.title}</h2>
                  <p className="text-xs text-[var(--color-text-muted)] font-medium mt-0.5 mb-2">{c.hindi}</p>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{c.desc}</p>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-1 pl-2 font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
                  {c.tags.map((t, i) => (
                    <span key={t} className="flex items-center gap-2">
                      {t}
                      {i < c.tags.length - 1 && <span className="opacity-30">·</span>}
                    </span>
                  ))}
                </div>
                <span className={`w-full text-center ${s.btn} text-white font-black py-2.5 rounded-xl text-sm transition-colors mt-1`}>
                  Utility Kholo →
                </span>
              </Link>
            );
          })}
        </div>

        {/* How To Use */}
        <div className="mt-10 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-[var(--color-text)] text-lg mb-4">कृषि Utilities का सही उपयोग</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[var(--color-text-muted)]">
            <div>
              <p className="font-bold text-[var(--color-text)] mb-2 flex items-center gap-2">
                <span className="font-mono text-emerald-600 dark:text-emerald-400 text-xs">01</span> 🔍 Status Verification:
              </p>
              <ul className="space-y-1 text-xs">
                {['Aadhaar number daalo (12 digits)', 'Mobile number daalo (10 digits)', 'Check Now button dabao', 'Seedha official portal par redirect'].map((s) => (
                  <li key={s} className="flex gap-1.5"><span className="text-emerald-600 dark:text-emerald-400 font-mono">✓</span>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-[var(--color-text)] mb-2 flex items-center gap-2">
                <span className="font-mono text-blue-600 dark:text-blue-400 text-xs">02</span> 🏦 KCC EMI Calculator:
              </p>
              <ul className="space-y-1 text-xs">
                {['Loan amount enter karo', 'Interest rate (usually 7%) daalo', 'Repayment months chunio', 'Govt subsidy automatically calculate'].map((s) => (
                  <li key={s} className="flex gap-1.5"><span className="text-blue-600 dark:text-blue-400 font-mono">✓</span>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className="mt-6 p-5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl">
          <p className="font-black text-green-900 dark:text-green-300 text-sm mb-4">📖 Related PM Kisan Guides</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { href: '/articles/pm-kisan-ekyc-online-2026', l: '🔐 eKYC Guide' },
              { href: '/articles/pm-kisan-23vi-kist-2026-status-check', l: '📅 23vi Kist Status' },
              { href: '/articles/pm-kisan-payment-failed-status-2026', l: '💸 Payment Fix' },
              { href: '/articles/kisan-rin-kaha-se-le-2026', l: '💰 Loan Guide' },
              { href: '/articles/pmfby-crop-insurance-2026', l: '🛡️ Crop Insurance' },
              { href: '/articles/pm-kisan-registration-online-2026', l: '📝 Enrollment' },
            ].map(({ href, l }) => (
              <Link
                key={href}
                href={href}
                className="text-xs px-3 py-2 bg-[var(--color-card)] border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 rounded-xl hover:bg-green-700 hover:text-white dark:hover:bg-green-700 transition-colors font-medium text-center focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}