import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/site-config';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: `Free PM Kisan Tools 2026 — EMI, MSP & Status Check`,
  description: '7 free kisan tools: PM Kisan status check, KCC loan EMI, MSP income, aur fasal bima premium calculator. Bina registration ke, bilkul free.',
  alternates: { canonical: `${SITE_URL}/calculator` },
  keywords: [
    'pm kisan calculator', 'kcc loan emi calculator', 'crop insurance premium calculator',
    'msp income calculator', 'crop profit calculator', 'pm kisan status check tool',
    'kisan credit card emi', 'pmfby premium calculator', 'free kisan tools',
    'kheti ka munafa calculator', 'fasal bima premium calculator hindi',
  ],
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/calculator`,
    siteName: SITE_NAME,
    title: `Free PM Kisan Tools 2026 — EMI, MSP & Status Check`,
    description: '7 free kisan utilities — koi login nahi, koi charge nahi. Bank jaane se pehle apna hisaab khud karo.',
    locale: 'hi_IN',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `Free PM Kisan Tools 2026 – ${SITE_NAME}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Free PM Kisan Tools 2026 — EMI, MSP & Status Check`,
    description: '7 free kisan utilities — koi login nahi, koi charge nahi.',
    images: [DEFAULT_OG_IMAGE],
    site: '@kisanstatus',
  },
};

function IconSearch({ className = 'w-6 h-6' }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>;
}
function IconCalendar({ className = 'w-6 h-6' }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>;
}
function IconWheat({ className = 'w-6 h-6' }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>;
}
function IconBank({ className = 'w-6 h-6' }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>;
}
function IconShield({ className = 'w-6 h-6' }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>;
}
function IconTrending({ className = 'w-6 h-6' }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>;
}
function IconChart({ className = 'w-6 h-6' }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>;
}
function IconCalculator({ className = 'w-5 h-5' }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}
function IconArrowRight({ className = 'w-4 h-4' }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>;
}
function IconCheck({ className = 'w-3 h-3' }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" /></svg>;
}
function IconFire({ className = 'w-3 h-3' }: { className?: string }) {
  return <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" /></svg>;
}

const CALCS = [
  { href: '/calculator/quick-status-check', index: '00', icon: IconSearch, title: 'PM Kisan Status Check', hindi: 'पीएम किसान स्टेटस चेक', desc: 'Aadhaar ya mobile number daalein aur seedha official portal par apna latest kist status verify karein. Bilkul free aur instant.', tags: ['Aadhaar Check', 'Mobile Check', 'Instant Redirect'], group: 'scheme', featured: true, badge: 'New Tool' },
  { href: '/calculator/installment-tracker', index: '01', icon: IconCalendar, title: 'Kist Status Tracker', hindi: 'किस्त स्टेटस ट्रैकर', desc: 'Kist aayi ya nahi? eKYC, bank aur land seeding check karke 4 aasaan sawaalon mein exact reason jaanein.', tags: ['Latest Kist', 'eKYC Check', 'Instant Result'], group: 'scheme', featured: false },
  { href: '/calculator/pm-kisan-benefit', index: '02', icon: IconWheat, title: 'PM Kisan Calculator', hindi: 'पीएम किसान कैलकुलेटर', desc: 'Saalana ₹6,000 ka total benefit, kitni kist milengi aur arrears ka hisaab lagayein. Free estimator.', tags: ['₹6,000/yr', '3 Kist', 'Eligibility'], group: 'scheme' },
  { href: '/calculator/kcc-loan-emi', index: '03', icon: IconBank, title: 'KCC Loan EMI Calculator', hindi: 'केसीसी लोन ईएमआई कैलकुलेटर', desc: 'Kisan Credit Card (KCC) loan ki monthly EMI, total interest aur 2% government subsidy ka exact hisaab lagayein.', tags: ['7% Rate', 'Govt Subsidy', 'Monthly EMI'], group: 'credit' },
  { href: '/calculator/pmfby-premium', index: '04', icon: IconShield, title: 'Fasal Bima Premium', hindi: 'फसल बीमा प्रीमियम', desc: 'PMFBY ke tahat Kharif aur Rabi fasal ka insurance premium aur maximum claim amount jaanein.', tags: ['Kharif + Rabi', 'All Crops', 'Claim Amount'], group: 'insurance' },
  { href: '/calculator/msp-income', index: '05', icon: IconTrending, title: 'MSP Income Calculator', hindi: 'एमएसपी आय कैलकुलेटर', desc: '2025-26 MSP rates par gehun, dhaan, sarson ya kapas — kisi bhi fasal ki total income calculate karein.', tags: ['2025-26 Rates', '11 Crops', 'Per Hectare'], group: 'data' },
  { href: '/calculator/crop-profit', index: '06', icon: IconChart, title: 'Kheti Ka Munafa', hindi: 'खेती का मुनाफा', desc: 'Beej, khad, mazdoori aur sinchai ka kharcha daal kar fasal ka net profit ya loss turant jaanein.', tags: ['Full Season', 'All Costs', 'Net Profit'], group: 'data' },
];

const GROUP_STYLES: Record<string, { bar: string; chip: string; btn: string; glow: string; icon: string }> = {
  scheme:    { bar: 'bg-emerald-600', chip: 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30', btn: 'bg-emerald-700 hover:bg-emerald-800', glow: 'hover:shadow-emerald-100 dark:hover:shadow-emerald-900/20', icon: 'text-emerald-600 dark:text-emerald-400' },
  credit:    { bar: 'bg-blue-600',    chip: 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30',        btn: 'bg-blue-700 hover:bg-blue-800',       glow: 'hover:shadow-blue-100 dark:hover:shadow-blue-900/20',       icon: 'text-blue-600 dark:text-blue-400' },
  insurance: { bar: 'bg-amber-600',   chip: 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/30',      btn: 'bg-amber-700 hover:bg-amber-800',     glow: 'hover:shadow-amber-100 dark:hover:shadow-amber-900/20',     icon: 'text-amber-600 dark:text-amber-400' },
  data:      { bar: 'bg-slate-600',   chip: 'text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800',     btn: 'bg-slate-700 hover:bg-slate-800',     glow: 'hover:shadow-slate-100 dark:hover:shadow-slate-900/20',     icon: 'text-slate-600 dark:text-slate-400' },
};

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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Free Kisan Calculators', item: `${SITE_URL}/calculator` },
  ],
};

export default function CalculatorIndexPage() {
  const featured = CALCS.find((c) => c.featured);
  const rest = CALCS.filter((c) => !c.featured);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-[var(--color-primary)] py-10">
        <div className="container-site text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 bg-white/15 text-green-200 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            <IconCalculator className="w-4 h-4" />
            Free Utilities
          </span>
          <h1 className="text-2xl md:text-4xl font-black text-white mb-3">
            Free PM Kisan Tools 2026 — EMI, MSP & Status Check
          </h1>
          <h2 className="text-green-200 text-sm md:text-base font-normal max-w-2xl mx-auto mb-6">
            7 free kisan utilities — koi registration nahi, koi charge nahi. Bank jaane se pehle apna hisaab khud karo.
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
        {featured && (
          <Link
            href={featured.href}
            className={`group relative flex flex-col sm:flex-row items-stretch gap-5 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 mb-5 overflow-hidden transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${GROUP_STYLES[featured.group].glow}`}
          >
            <span className={`absolute left-0 top-0 bottom-0 w-1.5 ${GROUP_STYLES[featured.group].bar}`} />
            <div className="flex-1 pl-2">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-3xl ${GROUP_STYLES[featured.group].icon}`}>
                  <featured.icon className="w-8 h-8" />
                </span>
                {featured.badge && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-full">
                    <IconFire className="w-3 h-3" /> {featured.badge}
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
              <span className={`w-full text-center ${GROUP_STYLES[featured.group].btn} text-white font-black py-3 px-4 rounded-xl text-sm transition-colors whitespace-nowrap inline-flex items-center justify-center gap-1`}>
                Kholo <IconArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rest.map((c) => {
            const s = GROUP_STYLES[c.group];
            const Icon = c.icon;
            return (
              <Link
                key={c.href}
                href={c.href}
                className={`group relative flex flex-col bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-5 gap-3 overflow-hidden transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${s.glow}`}
              >
                <span className={`absolute left-0 top-0 bottom-0 w-1 ${s.bar}`} />
                <div className="flex items-start justify-between pl-2">
                  <span className={`text-3xl ${s.icon}`}>
                    <Icon className="w-8 h-8" />
                  </span>
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
                <span className={`w-full text-center ${s.btn} text-white font-black py-2.5 rounded-xl text-sm transition-colors mt-1 inline-flex items-center justify-center gap-1`}>
                  Utility Kholo <IconArrowRight className="w-3 h-3" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-[var(--color-text)] text-lg mb-4">In Tools Ka Sahi Upyog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[var(--color-text-muted)]">
            <div>
              <p className="font-bold text-[var(--color-text)] mb-2 flex items-center gap-2">
                <span className="font-mono text-emerald-600 dark:text-emerald-400 text-xs">01</span>
                <IconSearch className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Status Verification:
              </p>
              <ul className="space-y-1 text-xs">
                {['Aadhaar number daalein (12 digits)', 'Mobile number daalein (10 digits)', 'Check Now button dabayein', 'Seedha official portal par redirect'].map((s) => (
                  <li key={s} className="flex gap-1.5"><IconCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-[var(--color-text)] mb-2 flex items-center gap-2">
                <span className="font-mono text-blue-600 dark:text-blue-400 text-xs">02</span>
                <IconBank className="w-4 h-4 text-blue-600 dark:text-blue-400" /> KCC EMI Calculator:
              </p>
              <ul className="space-y-1 text-xs">
                {['Loan amount enter karein', 'Interest rate (usually 7%) daalein', 'Repayment months chunein', 'Govt subsidy automatically calculate'].map((s) => (
                  <li key={s} className="flex gap-1.5"><IconCheck className="w-3 h-3 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 p-5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl">
          <p className="font-black text-green-900 dark:text-green-300 text-sm mb-4">Related PM Kisan Guides</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { href: '/articles/PmKisanEkycOnline2026', l: 'eKYC Guide' },
              { href: '/articles/PmKisan24viKist2026', l: '24vi Kist Status' },
              { href: '/articles/PmKisanPaymentFailedFix2026', l: 'Payment Fix' },
              { href: '/articles/KisanRinKahaSeLe2026', l: 'Loan Guide' },
              { href: '/articles/PmfbyCropInsurance2026', l: 'Crop Insurance' },
              { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
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