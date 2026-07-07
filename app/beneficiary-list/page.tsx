import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_URL, DEFAULT_OG_IMAGE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `PM Kisan Beneficiary List 2026 — All States & UTs | Village Wise Check | ${SITE_NAME}`,
  description: 'PM Kisan beneficiary list 2026 — apna state select karo aur village wise roster check karo. All 36 states and UTs covered. Free online guidance.',
  keywords: [
    'pm kisan beneficiary list 2026',
    'pm kisan state wise roster',
    'pm kisan village wise list',
    'किसान सम्मान निधि लाभार्थी सूची 2026',
    'pm kisan beneficiary status all states',
  ],
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  alternates: { canonical: `${SITE_URL}/beneficiary-list` },
  openGraph: {
    title: `PM Kisan Beneficiary List 2026 — All States & UTs | ${SITE_NAME}`,
    description: 'Apna state select karo aur village wise beneficiary roster check karo. 36 states/UTs covered.',
    type: 'website',
    url: `${SITE_URL}/beneficiary-list`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: 'PM Kisan Beneficiary List 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `PM Kisan Beneficiary List 2026 — All States & UTs`,
    description: 'Apna state select karo aur village wise roster check karo.',
    site: '@kisanstatus',
    images: [DEFAULT_OG_IMAGE],
  },
};

const STATES = [
  { slug: 'uttar-pradesh', name: 'Uttar Pradesh', crop: 'Wheat, Sugarcane', emoji: '🌾' },
  { slug: 'maharashtra', name: 'Maharashtra', crop: 'Sugarcane, Cotton, Onion', emoji: '🧅' },
  { slug: 'madhya-pradesh', name: 'Madhya Pradesh', crop: 'Soybean, Wheat', emoji: '🌾' },
  { slug: 'bihar', name: 'Bihar', crop: 'Wheat, Rice, Maize', emoji: '🌾' },
  { slug: 'rajasthan', name: 'Rajasthan', crop: 'Bajra, Mustard', emoji: '🌿' },
  { slug: 'west-bengal', name: 'West Bengal', crop: 'Rice, Jute, Potato', emoji: '🥔' },
  { slug: 'karnataka', name: 'Karnataka', crop: 'Sugarcane, Cotton, Ragi', emoji: '🌿' },
  { slug: 'gujarat', name: 'Gujarat', crop: 'Cotton, Groundnut', emoji: '🌿' },
  { slug: 'tamil-nadu', name: 'Tamil Nadu', crop: 'Rice, Banana', emoji: '🍌' },
  { slug: 'telangana', name: 'Telangana', crop: 'Rice, Cotton', emoji: '🌾' },
  { slug: 'andhra-pradesh', name: 'Andhra Pradesh', crop: 'Rice, Tobacco', emoji: '🌾' },
  { slug: 'odisha', name: 'Odisha', crop: 'Rice, Pulses', emoji: '🌾' },
  { slug: 'kerala', name: 'Kerala', crop: 'Rice, Coconut, Rubber', emoji: '🥥' },
  { slug: 'punjab', name: 'Punjab', crop: 'Wheat, Rice', emoji: '🌾' },
  { slug: 'haryana', name: 'Haryana', crop: 'Wheat, Rice', emoji: '🌾' },
  { slug: 'jharkhand', name: 'Jharkhand', crop: 'Rice, Pulses', emoji: '🌾' },
  { slug: 'chhattisgarh', name: 'Chhattisgarh', crop: 'Rice, Pulses', emoji: '🌾' },
  { slug: 'assam', name: 'Assam', crop: 'Tea, Rice, Jute', emoji: '🍵' },
  { slug: 'uttarakhand', name: 'Uttarakhand', crop: 'Rice, Wheat', emoji: '🏔️' },
  { slug: 'himachal-pradesh', name: 'Himachal Pradesh', crop: 'Apple, Wheat', emoji: '🍎' },
  { slug: 'goa', name: 'Goa', crop: 'Rice, Coconut, Cashew', emoji: '🥥' },
  { slug: 'tripura', name: 'Tripura', crop: 'Rice, Rubber', emoji: '🌾' },
  { slug: 'meghalaya', name: 'Meghalaya', crop: 'Rice, Ginger', emoji: '🫚' },
  { slug: 'manipur', name: 'Manipur', crop: 'Rice, Vegetables', emoji: '🌾' },
  { slug: 'nagaland', name: 'Nagaland', crop: 'Rice, Maize', emoji: '🌾' },
  { slug: 'mizoram', name: 'Mizoram', crop: 'Rice, Ginger', emoji: '🌾' },
  { slug: 'arunachal-pradesh', name: 'Arunachal Pradesh', crop: 'Rice, Maize', emoji: '🏔️' },
  { slug: 'sikkim', name: 'Sikkim', crop: 'Cardamom, Ginger', emoji: '🫚' },
  { slug: 'delhi', name: 'Delhi', crop: 'Vegetables, Dairy', emoji: '🥬' },
  { slug: 'jammu-kashmir', name: 'Jammu & Kashmir', crop: 'Apple, Saffron', emoji: '🍎' },
  { slug: 'ladakh', name: 'Ladakh', crop: 'Barley, Apricot', emoji: '🏔️' },
  { slug: 'puducherry', name: 'Puducherry', crop: 'Rice, Sugarcane', emoji: '🌾' },
  { slug: 'chandigarh', name: 'Chandigarh', crop: 'Wheat, Vegetables', emoji: '🥬' },
  { slug: 'andaman-nicobar', name: 'Andaman & Nicobar', crop: 'Coconut, Spices', emoji: '🥥' },
  { slug: 'dadra-nagar-haveli', name: 'Dadra & Nagar Haveli', crop: 'Rice, Mango', emoji: '🥭' },
  { slug: 'lakshadweep', name: 'Lakshadweep', crop: 'Coconut, Coir', emoji: '🥥' },
];

export default function BeneficiaryListPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `PM Kisan Beneficiary List 2026 — All States & UTs | ${SITE_NAME}`,
    description: 'PM Kisan beneficiary roster 2026 — select your state and check village wise roster. All 36 states and UTs covered.',
    url: `${SITE_URL}/beneficiary-list`,
    inLanguage: 'hi-IN',
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    numberOfItems: STATES.length,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: STATES.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/beneficiary-list/${s.slug}`,
        name: `PM Kisan Beneficiary List ${s.name} 2026`,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="py-10 md:py-14 bg-[var(--color-primary)]">
        <div className="container-site text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-green-300 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            📋 Beneficiary Roster
          </span>
          <h1 className="text-2xl md:text-4xl font-black text-white mb-3">
            PM Kisan Beneficiary List 2026
          </h1>
          <p className="text-green-200 text-sm md:text-base max-w-xl mx-auto mb-4">
            Apna state select karo aur village wise beneficiary roster check karo.
            Naam hai ya nahi, turant pata karo.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-green-300 text-sm">
            <span className="bg-white/10 px-3 py-1 rounded-full">🗺️ {STATES.length} States/UTs</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🆓 Free Check</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">⚡ Instant Result</span>
          </div>
        </div>
      </section>

      <div className="container-site py-10">

        {/* Disclaimer — Top Priority */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 dark:border-amber-700 rounded-2xl p-6 mb-8 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-3xl shrink-0" aria-hidden="true">⚠️</span>
            <div className="flex-1">
              <h2 className="font-black text-amber-900 dark:text-amber-300 text-base mb-2">
                Yeh Official Roster Nahi Hai
              </h2>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                Apna naam sirf <strong>pmkisan.gov.in</strong> par check kar sakte ho. Hum wahan tak pahunchne mein help karte hain — seedha link neeche hai.
              </p>
            </div>
          </div>
          <a
            href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-700 hover:bg-green-600 text-white font-black px-5 py-4 rounded-xl text-sm transition-colors text-center shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            ✅ Official Roster Check Karo → pmkisan.gov.in
          </a>
        </div>

        {/* Quick CTA */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex-1">
            <p className="font-black text-green-900 dark:text-green-300 text-base">⚡ Direct Status Check?</p>
            <p className="text-xs text-green-700 dark:text-green-400 mt-1">Aadhaar number se turant beneficiary status check karo</p>
          </div>
          <a
            href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[var(--color-primary)] hover:bg-green-800 text-white font-black px-5 py-3 rounded-xl text-sm transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Official Portal →
          </a>
        </div>

        {/* How to Check */}
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 mb-8 shadow-sm">
          <h2 className="font-black text-[var(--color-text)] text-lg mb-4">📋 Village Wise Roster Kaise Dekhein?</h2>
          <ol className="space-y-3">
            {[
              { num: 1, text: 'Neeche apna ', bold: 'State', suffix: ' select karo' },
              { num: 2, text: 'State page par ', bold: 'District, Block, Village', suffix: ' select karo' },
              { num: 3, text: '', bold: '"Get Report"', suffix: ' click karo — poori roster aa jayegi' },
              { num: 4, text: 'Apna naam search karo — ', bold: 'haan ya na', suffix: ' turant pata chalega' },
            ].map((step) => (
              <li key={step.num} className="flex gap-3 items-start">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[var(--color-primary)] text-white text-xs font-black flex items-center justify-center">{step.num}</span>
                <span className="text-sm text-[var(--color-text-muted)] pt-0.5">
                  {step.text}<strong className="text-[var(--color-text)]">{step.bold}</strong>{step.suffix}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* States Grid */}
        <h2 className="text-2xl font-black text-[var(--color-text)] mb-6">
          🗺️ Apna State Select Karo
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
          {STATES.map((state) => (
            <Link
              key={state.slug}
              href={`/beneficiary-list/${state.slug}`}
              className="group bg-[var(--color-card)] rounded-2xl p-5 border border-[var(--color-border)] hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 flex items-center gap-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <span className="text-3xl shrink-0">{state.emoji}</span>
              <div className="min-w-0">
                <p className="font-black text-[var(--color-text)] text-sm group-hover:text-[var(--color-primary)] transition-colors truncate">
                  {state.name}
                </p>
                <p className="text-[11px] text-[var(--color-text-muted)] truncate">{state.crop}</p>
              </div>
              <span className="ml-auto text-green-600 dark:text-green-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">→</span>
            </Link>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-6 mb-8">
          <h3 className="font-black text-yellow-900 dark:text-yellow-300 text-base mb-2">⚠️ Important Information</h3>
          <ul className="space-y-2 text-sm text-yellow-900 dark:text-yellow-200">
            <li>• Beneficiary roster sirf <strong>registered kisanon</strong> ki dikhti hai</li>
            <li>• Naam nahi hai? <Link href="/articles/PmKisanMasterGuide2026" className="font-bold underline hover:text-yellow-700 dark:hover:text-yellow-100">Master Guide Dekho</Link></li>
            <li>• Naam hai lekin paisa nahi aaya? <Link href="/articles/PmKisanPaymentFailedFix2026" className="font-bold underline hover:text-yellow-700 dark:hover:text-yellow-100">Payment Fix Guide</Link></li>
            <li>• eKYC pending? <Link href="/articles/PmKisanEkycOnline2026" className="font-bold underline hover:text-yellow-700 dark:hover:text-yellow-100">Digital Verification Guide</Link></li>
          </ul>
        </div>

        {/* Related Guides */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6">
          <h3 className="font-black text-green-900 dark:text-green-300 text-base mb-4">📖 Related PM Kisan Guides</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { href: '/articles/PmKisan24viKist2026', label: '📅 24vi Kist Status' },
              { href: '/articles/PmKisanEkycOnline2026', label: '🔐 eKYC Guide' },
              { href: '/articles/PmKisanPaymentFailedFix2026', label: '💸 Payment Fix' },
              { href: '/articles/PmKisanMasterGuide2026', label: '📚 Master Guide' },
              { href: '/articles/KisanCreditCardOnlineApply2026', label: '💳 KCC Apply' },
              { href: '/calculator/installment-tracker', label: '📆 Tracker' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs px-3 py-2.5 bg-[var(--color-card)] border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 rounded-xl hover:bg-green-700 hover:text-white dark:hover:bg-green-700 transition-colors font-medium text-center focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}