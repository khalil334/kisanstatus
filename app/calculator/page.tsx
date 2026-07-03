/**
 * /calculator — KisanStatus.com
 * Agricultural Tools Suite — SEO optimized index page
 */
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Agricultural Tools 2026 — Status Verification, Credit, Insurance & Profit Analysis | KisanStatus.com',
  description: '7 free farming utilities for Indian cultivators — status verification, credit facility EMI, crop protection premium, procurement rate income aur profit/loss analysis. No registration required.',
  alternates: { canonical: 'https://kisanstatus.com/calculator' },
  openGraph: {
    type: 'website',
    url: 'https://kisanstatus.com/calculator',
    siteName: 'KisanStatus.com',
    title: 'Free Agricultural Tools 2026 — Status Verification, Credit, Insurance & Profit Analysis',
    description: '7 free farming utilities — status verification, credit facility EMI, crop protection, procurement rate income, crop profit/loss. No login, no charge.',
    locale: 'en_IN',
    images: [
      {
        url: 'https://kisanstatus.com/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Free Agricultural Tools 2026 – KisanStatus.com',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Agricultural Tools 2026 — Status Verification, Credit, Insurance & Profit Analysis',
    description: '7 free farming utilities for Indian cultivators — no login, no charge.',
    images: ['https://kisanstatus.com/og-image.webp'],
    site: '@kisanstatus',
  },
};

// ── Tools data ───────────────────────────────────────────────────────────────
const CALCS = [
  {
    href: '/calculator/quick-status-check',
    index: '00',
    emoji: '🔍',
    title: 'Quick Status Verification',
    hindi: 'क्विक स्टेटस वेरिफिकेशन',
    desc: 'Biometric credential ya contact number daalein aur seedha official portal par apna 23vi tranche status verify karein. Instant & Free.',
    tags: ['Biometric Credential Check', 'Contact Check', 'Instant Redirect'],
    group: 'scheme',
    featured: true,
    badge: '🔥 New Tool',
  },
  {
    href: '/calculator/installment-tracker',
    index: '01',
    emoji: '📆',
    title: 'Tranche Status Tracker',
    hindi: 'ट्रान्च स्टेटस ट्रैकर',
    desc: '23vi tranche aayi ya nahi? Digital verification, bank seeding, land record integration check karke 4 sawaal mein exact reason pata karo.',
    tags: ['23vi Tranche', 'Digital Verification', 'Instant Result'],
    group: 'scheme',
    featured: false,
  },
  {
    href: '/calculator/pm-kisan-benefit',
    index: '02',
    emoji: '🌾',
    title: 'Cultivator Benefit Estimator',
    hindi: 'कृषक लाभ अनुमानक',
    desc: 'Saalana ₹6,000 — estimate karo kitni tranches milengi, total benefit, aur arrears. Digital verification check bhi.',
    tags: ['₹6,000/yr', '3 Tranches', 'Eligibility'],
    group: 'scheme',
  },
  {
    href: '/calculator/kcc-loan-emi',
    index: '03',
    emoji: '🏦',
    title: 'Credit Facility EMI Calculator',
    hindi: 'ऋण सुविधा EMI कैलकुलेटर',
    desc: 'Kisan Credit Card loan ki monthly EMI, total interest, aur 2% government subvention benefit calculate karo.',
    tags: ['7% Rate', 'Govt Subsidy', 'Monthly EMI'],
    group: 'credit',
  },
  {
    href: '/calculator/pmfby-premium',
    index: '04',
    emoji: '🛡️',
    title: 'Crop Protection Premium',
    hindi: 'फसल सुरक्षा प्रीमियम कैलकुलेटर',
    desc: 'Pradhan Mantri Fasal Bima Yojana — Kharif/Rabi fasal ka insurance premium aur maximum claim calculate karo.',
    tags: ['Kharif + Rabi', 'All Crops', 'Claim Amount'],
    group: 'insurance',
  },
  {
    href: '/calculator/msp-income',
    index: '05',
    emoji: '💹',
    title: 'Procurement Rate Income',
    hindi: 'न्यूनतम समर्थन मूल्य आय कैलकुलेटर',
    desc: '2024-25 MSP rates par gehun, dhan, cotton, sarson — kisi bhi fasal ki total income calculate karo.',
    tags: ['2024-25 Rates', '11 Crops', 'Per Hectare'],
    group: 'data',
  },
  {
    href: '/calculator/crop-profit',
    index: '06',
    emoji: '📊',
    title: 'Yield Profit/Loss Analyzer',
    hindi: 'फसल लाभ/हानि विश्लेषक',
    desc: 'Seed, fertilizer, labor, irrigation — sab kharcha daalo aur net profit ya loss instantly pata karo. Per hectare breakdown.',
    tags: ['Full Season', 'All Costs', 'Net Profit'],
    group: 'data',
  },
];

// Accent system — one deliberate color per real category
const GROUP_STYLES: Record<string, { bar: string; chip: string; btn: string; glow: string }> = {
  scheme:    { bar: 'bg-emerald-600', chip: 'text-emerald-700 bg-emerald-50',  btn: 'bg-emerald-700 hover:bg-emerald-800', glow: 'hover:shadow-emerald-100' },
  credit:    { bar: 'bg-blue-600',    chip: 'text-blue-700 bg-blue-50',        btn: 'bg-blue-700 hover:bg-blue-800',       glow: 'hover:shadow-blue-100' },
  insurance: { bar: 'bg-amber-600',   chip: 'text-amber-700 bg-amber-50',      btn: 'bg-amber-700 hover:bg-amber-800',     glow: 'hover:shadow-amber-100' },
  data:      { bar: 'bg-slate-600',   chip: 'text-slate-700 bg-slate-100',     btn: 'bg-slate-700 hover:bg-slate-800',     glow: 'hover:shadow-slate-100' },
};

export default function CalculatorIndexPage() {
  const featured = CALCS.find((c) => c.featured);
  const rest = CALCS.filter((c) => !c.featured);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Free Agricultural Tools 2026',
    description: '7 free farming utilities for Indian cultivators — status verification, credit facility EMI, crop protection premium, procurement rate income aur profit/loss analysis.',
    numberOfItems: CALCS.length,
    itemListElement: CALCS.map((calc, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: calc.title,
      description: calc.desc,
      url: `https://kisanstatus.com${calc.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Hero */}
      <div className="bg-primary-600 py-10">
        <div className="container-site text-center max-w-3xl">
          <span className="inline-block bg-white/15 text-green-200 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            🧮 Free Utilities
          </span>
          <h1 className="text-2xl md:text-4xl font-black text-white mb-3">
            Agricultural Tools Suite — Status Verification, Credit, Insurance, Procurement Rate &amp; Profit Analysis
          </h1>
          <h2 className="text-green-200 text-sm md:text-base font-normal max-w-2xl mx-auto mb-6">
            कृषि उपकरण — 7 free utilities, koi registration nahi, koi charge nahi. Bank jaane se pehle hisaab karo.
          </h2>

          {/* Digital readout strip */}
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

      <div className="container-site py-12 max-w-4xl mx-auto">

        {/* Featured tool */}
        {featured && (
          <Link
            href={featured.href}
            className={`group relative flex flex-col sm:flex-row items-stretch gap-5 bg-white border border-gray-200 rounded-2xl p-6 mb-5 overflow-hidden transition-all hover:shadow-xl ${GROUP_STYLES[featured.group].glow}`}
          >
            <span className={`absolute left-0 top-0 bottom-0 w-1.5 ${GROUP_STYLES[featured.group].bar}`} />
            <div className="flex-1 pl-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl">{featured.emoji}</span>
                {featured.badge && (
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                    ● {featured.badge}
                  </span>
                )}
              </div>
              <h2 className="font-black text-gray-900 text-xl leading-tight">{featured.title}</h2>
              <p className="text-sm text-gray-500 font-medium mt-0.5 mb-2">{featured.hindi}</p>
              <p className="text-sm text-gray-600 leading-relaxed max-w-md">{featured.desc}</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3 font-mono text-[11px] uppercase tracking-wider text-gray-400">
                {featured.tags.map((t, i) => (
                  <span key={t} className="flex items-center gap-3">
                    {t}
                    {i < featured.tags.length - 1 && <span className="text-gray-300">·</span>}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-3 sm:w-40">
              <span className="font-mono text-5xl font-bold text-gray-100 leading-none select-none">{featured.index}</span>
              <span className={`w-full text-center ${GROUP_STYLES[featured.group].btn} text-white font-black py-3 px-4 rounded-xl text-sm transition-colors whitespace-nowrap`}>
                Kholo →
              </span>
            </div>
          </Link>
        )}

        {/* Rest of the tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rest.map((c) => {
            const s = GROUP_STYLES[c.group];
            return (
              <Link
                key={c.href}
                href={c.href}
                className={`group relative flex flex-col bg-white border border-gray-200 rounded-2xl p-5 gap-3 overflow-hidden transition-all hover:shadow-lg ${s.glow}`}
              >
                <span className={`absolute left-0 top-0 bottom-0 w-1 ${s.bar}`} />
                <div className="flex items-start justify-between pl-2">
                  <span className="text-3xl">{c.emoji}</span>
                  <span className="font-mono text-3xl font-bold text-gray-100 leading-none select-none">{c.index}</span>
                </div>
                <div className="pl-2">
                  <h2 className="font-black text-gray-900 text-base leading-tight">{c.title}</h2>
                  <p className="text-xs text-gray-500 font-medium mt-0.5 mb-2">{c.hindi}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{c.desc}</p>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-1 pl-2 font-mono text-[10px] uppercase tracking-wider text-gray-400">
                  {c.tags.map((t, i) => (
                    <span key={t} className="flex items-center gap-2">
                      {t}
                      {i < c.tags.length - 1 && <span className="text-gray-300">·</span>}
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

        {/* Info section */}
        <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-gray-900 text-lg mb-4">कृषि Utilities का सही उपयोग — How To Use</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="font-mono text-emerald-600 text-xs">01</span> 🔍 Quick Status Verification ke liye:
              </p>
              <ul className="space-y-1 text-xs text-gray-600">
                {['Biometric credential number daalo (12 digits)', 'Contact number daalo (10 digits)', 'Check Now button dabao', 'Seedha official portal par redirect hoga'].map((s) => (
                  <li key={s} className="flex gap-1.5"><span className="text-emerald-600 font-mono">✓</span>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="font-mono text-blue-600 text-xs">02</span> 🏦 Credit Facility Calculator ke liye:
              </p>
              <ul className="space-y-1 text-xs text-gray-600">
                {['Loan amount enter karo', 'Interest rate (usually 7%) daalo', 'Repayment months chunio', 'Government subsidy automatically calculate hogi'].map((s) => (
                  <li key={s} className="flex gap-1.5"><span className="text-blue-600 font-mono">✓</span>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related guides */}
        <div className="mt-6 p-5 bg-emerald-50 border border-emerald-200 rounded-2xl">
          <p className="font-black text-emerald-900 text-sm mb-4">📖 Related Agrarian Welfare Guides</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { href: '/articles/pm-kisan-ekyc-online-2026', l: '🔐 Digital Verification Guide' },
              { href: '/articles/pm-kisan-23vi-kist-2026-status-check', l: '📅 23vi Tranche Status' },
              { href: '/articles/pm-kisan-payment-failed-status-2026', l: '💸 Payment Fix' },
              { href: '/articles/kisan-rin-kaha-se-le-2026', l: '💰 Credit Facility Guide' },
              { href: '/articles/pmfby-crop-insurance-2026', l: '🛡️ Crop Protection Guide' },
              { href: '/articles/pm-kisan-registration-online-2026', l: '📝 Enrollment' },
            ].map(({ href, l }) => (
              <Link
                key={href}
                href={href}
                className="text-xs px-3 py-2 bg-white border border-emerald-200 text-emerald-800 rounded-xl hover:bg-emerald-700 hover:text-white transition-colors font-medium text-center"
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