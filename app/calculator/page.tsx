import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Kisan Calculators 2026 — Installment Tracker, PM Kisan, KCC Loan, PMFBY, MSP, Crop Profit',
  description: '6 free agricultural calculators for Indian farmers — Installment status tracker, PM Kisan benefit, KCC loan EMI, PMFBY fasal bima premium, MSP income aur crop profit/loss. No registration.',
  alternates: { canonical: 'https://kisanstatus.com/calculator' },
  openGraph: {
    type: 'website',
    url: 'https://kisanstatus.com/calculator',
    siteName: 'KisanStatus.com',
    title: 'Free Kisan Calculators 2026 — KCC, PMFBY, MSP & Crop Profit',
    description: '6 free agricultural calculators — installment tracker, PM Kisan benefit, KCC loan EMI, PMFBY premium, MSP income, crop profit/loss. No login, no charge.',
    images: [
      {
        url: 'https://kisanstatus.com/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Free Kisan Calculators 2026 – KisanStatus.com',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Kisan Calculators 2026 — KCC, PMFBY, MSP & Crop Profit',
    description: '6 free agricultural calculators for Indian farmers — no login, no charge.',
    images: ['https://kisanstatus.com/og-image.webp'],
    site: '@kisanstatus',
  },
};

// ── Calculator data ──────────────────────────────────────────────────────────
const CALCS = [
  {
    href: '/calculator/installment-tracker',
    index: '01',
    emoji: '📆',
    title: 'Installment Status Tracker',
    hindi: 'किस्त स्टेटस ट्रैकर',
    desc: '23vi kist aayi ya nahi? eKYC, bank seeding, land seeding check karke 4 sawaal mein exact reason pata karo.',
    tags: ['23vi Kist', 'eKYC Check', 'Instant Result'],
    group: 'scheme',
    featured: true,
    badge: 'Abhi Trending',
  },
  {
    href: '/calculator/pm-kisan-benefit',
    index: '02',
    emoji: '🌾',
    title: 'PM Kisan Benefit Calculator',
    hindi: 'पीएम किसान लाभ कैलकुलेटर',
    desc: 'Saalana ₹6,000 — calculate karo kitni kistein milegi, total benefit, aur arrears. eKYC check bhi.',
    tags: ['₹6,000/yr', '3 Installments', 'Eligibility'],
    group: 'scheme',
  },
  {
    href: '/calculator/kcc-loan-emi',
    index: '03',
    emoji: '🏦',
    title: 'KCC Loan EMI Calculator',
    hindi: 'KCC लोन EMI कैलकुलेटर',
    desc: 'Kisan Credit Card loan ki monthly EMI, total interest, aur 2% government subvention benefit calculate karo.',
    tags: ['7% Rate', 'Govt Subsidy', 'Monthly EMI'],
    group: 'credit',
  },
  {
    href: '/calculator/pmfby-premium',
    index: '04',
    emoji: '🛡️',
    title: 'PMFBY Fasal Bima Premium',
    hindi: 'फसल बीमा प्रीमियम कैलकुलेटर',
    desc: 'Pradhan Mantri Fasal Bima Yojana — Kharif/Rabi fasal ka insurance premium aur maximum claim calculate karo.',
    tags: ['Kharif + Rabi', 'All Crops', 'Claim Amount'],
    group: 'insurance',
  },
  {
    href: '/calculator/msp-income',
    index: '05',
    emoji: '💹',
    title: 'MSP Income Calculator',
    hindi: 'MSP आय कैलकुलेटर',
    desc: '2024-25 MSP rates par gehun, dhan, cotton, sarson — kisi bhi fasal ki total income calculate karo.',
    tags: ['2024-25 Rates', '11 Crops', 'Per Hectare'],
    group: 'data',
  },
  {
    href: '/calculator/crop-profit',
    index: '06',
    emoji: '📊',
    title: 'Crop Profit/Loss Calculator',
    hindi: 'फसल मुनाफा कैलकुलेटर',
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

// ✅ DEFAULT EXPORT — Ye zaroori hai!
export default function CalculatorIndexPage() {
  const featured = CALCS.find((c) => c.featured);
  const rest = CALCS.filter((c) => !c.featured);

  return (
    <>
      {/* ── Hero ── */}
      <div className="bg-primary-600 py-10">
        <div className="container-site text-center max-w-3xl">
          <span className="inline-block bg-white/15 text-green-200 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            🧮 Free Tools
          </span>
          <h1 className="text-2xl md:text-4xl font-black text-white mb-3">
            Kisan Calculators — Installment Tracker, KCC, PMFBY, MSP &amp; Crop Profit
          </h1>
          <h2 className="text-green-200 text-sm md:text-base font-normal max-w-2xl mx-auto mb-6">
            कृषि कैलकुलेटर — 6 free tools, koi registration nahi, koi charge nahi. Bank jaane se pehle hisaab karo.
          </h2>

          {/* Digital readout strip */}
          <div className="flex items-center justify-center gap-6 font-mono text-white/90 text-sm border-t border-white/15 pt-5 max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold tabular-nums">06</span>
              <span className="text-[10px] uppercase tracking-wider text-green-200/80">Tools</span>
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

        {/* ── Featured tool ── */}
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

        {/* ── Rest of the tools ── */}
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
                  Calculator Kholo →
                </span>
              </Link>
            );
          })}
        </div>

        {/* Info section */}
        <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-gray-900 text-lg mb-4">कृषि Calculators का सही उपयोग — How To Use</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="font-mono text-emerald-600 text-xs">01</span> 🌾 PM Kisan Calculator ke liye:
              </p>
              <ul className="space-y-1 text-xs text-gray-600">
                {['Registered years enter karo', 'Land area (hectare) daalo', 'eKYC status select karo', 'Miss kist count karo'].map((s) => (
                  <li key={s} className="flex gap-1.5"><span className="text-emerald-600 font-mono">✓</span>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="font-mono text-blue-600 text-xs">02</span> 🏦 KCC Loan Calculator ke liye:
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
          <p className="font-black text-emerald-900 text-sm mb-4">📖 Related PM Kisan Guides</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { href: '/articles/pm-kisan-ekyc-online-2026', l: '🔐 eKYC Guide' },
              { href: '/articles/pm-kisan-23vi-kist-2026-status-check', l: '📅 23vi Kist Status' },
              { href: '/articles/pm-kisan-payment-failed-status-2026', l: '💸 Payment Fix' },
              { href: '/articles/kisan-rin-kaha-se-le-2026', l: '💰 Kisan Loan Guide' },
              { href: '/articles/pmfby-crop-insurance-2026', l: '🛡️ PMFBY Guide' },
              { href: '/articles/pm-kisan-registration-online-2026', l: '📝 Registration' },
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