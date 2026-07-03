import type { Metadata } from 'next';
import Link from 'next/link';

const DOMAIN = 'https://kisanstatus.com';

export const metadata: Metadata = {
  title: 'Agrarian Welfare Beneficiary Roster 2026 — All States & UTs | Village Wise Check',
  description: 'Cultivator benefit roster 2026 — apna state select karo aur village wise roster check karo. All 37 states and UTs covered. Free online guidance.',
  keywords: [
    'agrarian welfare beneficiary roster 2026',
    'cultivator benefit state wise roster',
    'scheme village wise roster',
    'कृषि कल्याण लाभार्थी सूची 2026',
    'program beneficiary roster all states',
  ],
  authors: [{ name: 'KisanStatus Team', url: `${DOMAIN}/about` }],
  alternates: { canonical: `${DOMAIN}/beneficiary-list` },
  openGraph: {
    title: 'Agrarian Welfare Beneficiary Roster 2026 — All States & UTs',
    description: 'Apna state select karo aur village wise beneficiary roster check karo. 37 states/UTs covered.',
    type: 'website',
    url: `${DOMAIN}/beneficiary-list`,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/images/agrarian-welfare-beneficiary-roster-2026.webp`, width: 1200, height: 630, alt: 'Agrarian Welfare Beneficiary Roster 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agrarian Welfare Beneficiary Roster 2026 — All States & UTs',
    description: 'Apna state select karo aur village wise roster check karo.',
    site: '@kisanstatus',
    images: [`${DOMAIN}/images/agrarian-welfare-beneficiary-roster-2026.webp`],
  },
};

// ── All 37 States/UTs ────────────────────────────────────────────────────────
const STATES = [
  { slug: 'andhra-pradesh', name: 'Andhra Pradesh', crop: 'Rice, Tobacco', emoji: '🌾' },
  { slug: 'arunachal-pradesh', name: 'Arunachal Pradesh', crop: 'Rice, Maize', emoji: '🏔️' },
  { slug: 'assam', name: 'Assam', crop: 'Tea, Rice, Jute', emoji: '🍵' },
  { slug: 'bihar', name: 'Bihar', crop: 'Wheat, Rice, Maize', emoji: '🌾' },
  { slug: 'chhattisgarh', name: 'Chhattisgarh', crop: 'Rice, Pulses', emoji: '🌾' },
  { slug: 'goa', name: 'Goa', crop: 'Rice, Coconut, Cashew', emoji: '🥥' },
  { slug: 'gujarat', name: 'Gujarat', crop: 'Cotton, Groundnut', emoji: '🌿' },
  { slug: 'haryana', name: 'Haryana', crop: 'Wheat, Rice', emoji: '🌾' },
  { slug: 'himachal-pradesh', name: 'Himachal Pradesh', crop: 'Apple, Wheat', emoji: '🍎' },
  { slug: 'jharkhand', name: 'Jharkhand', crop: 'Rice, Pulses', emoji: '🌾' },
  { slug: 'karnataka', name: 'Karnataka', crop: 'Sugarcane, Cotton, Ragi', emoji: '🌿' },
  { slug: 'kerala', name: 'Kerala', crop: 'Rice, Coconut, Rubber', emoji: '🥥' },
  { slug: 'madhya-pradesh', name: 'Madhya Pradesh', crop: 'Soybean, Wheat', emoji: '🌾' },
  { slug: 'maharashtra', name: 'Maharashtra', crop: 'Sugarcane, Cotton, Onion', emoji: '🧅' },
  { slug: 'manipur', name: 'Manipur', crop: 'Rice, Vegetables', emoji: '🌾' },
  { slug: 'meghalaya', name: 'Meghalaya', crop: 'Rice, Ginger', emoji: '🫚' },
  { slug: 'mizoram', name: 'Mizoram', crop: 'Rice, Ginger', emoji: '🌾' },
  { slug: 'nagaland', name: 'Nagaland', crop: 'Rice, Maize', emoji: '🌾' },
  { slug: 'odisha', name: 'Odisha', crop: 'Rice, Pulses', emoji: '🌾' },
  { slug: 'punjab', name: 'Punjab', crop: 'Wheat, Rice', emoji: '🌾' },
  { slug: 'rajasthan', name: 'Rajasthan', crop: 'Bajra, Mustard', emoji: '🌿' },
  { slug: 'sikkim', name: 'Sikkim', crop: 'Cardamom, Ginger', emoji: '🫚' },
  { slug: 'tamil-nadu', name: 'Tamil Nadu', crop: 'Rice, Banana', emoji: '🍌' },
  { slug: 'telangana', name: 'Telangana', crop: 'Rice, Cotton', emoji: '🌾' },
  { slug: 'tripura', name: 'Tripura', crop: 'Rice, Rubber', emoji: '🌾' },
  { slug: 'uttar-pradesh', name: 'Uttar Pradesh', crop: 'Wheat, Sugarcane', emoji: '🌾' },
  { slug: 'uttarakhand', name: 'Uttarakhand', crop: 'Rice, Wheat', emoji: '🏔️' },
  { slug: 'west-bengal', name: 'West Bengal', crop: 'Rice, Jute, Potato', emoji: '🥔' },
  { slug: 'delhi', name: 'Delhi', crop: 'Vegetables, Dairy', emoji: '🥬' },
  { slug: 'jammu-kashmir', name: 'Jammu & Kashmir', crop: 'Apple, Saffron', emoji: '🍎' },
  { slug: 'ladakh', name: 'Ladakh', crop: 'Barley, Apricot', emoji: '🏔️' },
  { slug: 'puducherry', name: 'Puducherry', crop: 'Rice, Sugarcane', emoji: '🌾' },
  { slug: 'andaman-nicobar', name: 'Andaman & Nicobar', crop: 'Coconut, Spices', emoji: '🥥' },
  { slug: 'chandigarh', name: 'Chandigarh', crop: 'Wheat, Vegetables', emoji: '🥬' },
  { slug: 'dadra-nagar-haveli', name: 'Dadra & Nagar Haveli', crop: 'Rice, Mango', emoji: '🥭' },
  { slug: 'lakshadweep', name: 'Lakshadweep', crop: 'Coconut, Coir', emoji: '🥥' },
];

// ── JSON-LD Schema ───────────────────────────────────────────────────────────
const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Agrarian Welfare Beneficiary Roster 2026 — All States & UTs',
  description: 'Cultivator benefit roster 2026 — select your state and check village wise roster. All 37 states and UTs covered.',
  url: `${DOMAIN}/beneficiary-list`,
  inLanguage: 'hi-IN',
  isPartOf: { '@type': 'WebSite', name: 'KisanStatus.com', url: DOMAIN },
  numberOfItems: STATES.length,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: STATES.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${DOMAIN}/beneficiary-list/${s.slug}`,
      name: `Agrarian Welfare Beneficiary Roster ${s.name} 2026`,
    })),
  },
};

export default function BeneficiaryListPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section
        className="py-10 md:py-14"
        style={{ background: 'linear-gradient(135deg,#052e16 0%,#14532d 60%,#166534 100%)' }}
      >
        <div className="container-site text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-green-300 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            📋 Beneficiary Roster
          </span>
          <h1 className="text-2xl md:text-4xl font-black text-white mb-3">
            Agrarian Welfare Beneficiary Roster 2026
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

        {/* Prominent Disclaimer — Top Priority */}
        <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-6 mb-8 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-3xl shrink-0" aria-hidden="true">⚠️</span>
            <div className="flex-1">
              <h2 className="font-black text-amber-900 text-base mb-2">
                Yeh Official Roster Nahi Hai
              </h2>
              <p className="text-sm text-amber-800 leading-relaxed">
                Apna naam sirf <strong>pmkisan.gov.in</strong> par check kar sakte ho. Hum wahan tak pahunchne mein help karte hain — seedha link neeche hai.
              </p>
            </div>
          </div>
          <a
            href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-700 hover:bg-green-600 text-white font-black px-5 py-4 rounded-xl text-sm transition-colors text-center shadow-md hover:shadow-lg"
          >
            ✅ Official Roster Check Karo → pmkisan.gov.in
          </a>
        </div>

        {/* Quick CTA */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex-1">
            <p className="font-black text-green-900 text-base">⚡ Direct Status Check Karna Hai?</p>
            <p className="text-xs text-green-700 mt-1">Biometric credential number se turant apna beneficiary status check karo</p>
          </div>
          <a
            href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#14532d] hover:bg-green-800 text-white font-black px-5 py-3 rounded-xl text-sm transition-colors shadow-md"
          >
            Official Portal →
          </a>
        </div>

        {/* How to Check */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
          <h2 className="font-black text-gray-900 text-lg mb-4">📋 Village Wise Roster Kaise Dekhein?</h2>
          <ol className="space-y-3">
            {[
              'Neeche apna <strong>State</strong> select karo',
              'State page par <strong>District, Block, Village</strong> select karo',
              '<strong>"Get Report"</strong> click karo — poori roster aa jayegi',
              'Apna naam search karo — <strong>haan ya na</strong> turant pata chalega',
            ].map((step, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#14532d] text-white text-xs font-black flex items-center justify-center">{i + 1}</span>
                <span className="text-sm text-gray-700 pt-0.5" dangerouslySetInnerHTML={{ __html: step }} />
              </li>
            ))}
          </ol>
        </div>

        {/* States Grid */}
        <h2 className="text-2xl font-black text-gray-900 mb-6">
          🗺️ Apna State Select Karo
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
          {STATES.map((state) => (
            <Link
              key={state.slug}
              href={`/beneficiary-list/${state.slug}`}
              className="group bg-white rounded-2xl p-5 border border-gray-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
            >
              <span className="text-3xl shrink-0">{state.emoji}</span>
              <div className="min-w-0">
                <p className="font-black text-gray-900 text-sm group-hover:text-[#14532d] transition-colors truncate">
                  {state.name}
                </p>
                <p className="text-[11px] text-gray-500 truncate">{state.crop}</p>
              </div>
              <span className="ml-auto text-green-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">→</span>
            </Link>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
          <h3 className="font-black text-yellow-900 text-base mb-2">⚠️ Important Information</h3>
          <ul className="space-y-2 text-sm text-yellow-900">
            <li>• Beneficiary roster sirf <strong>registered cultivators</strong> ki dikhti hai</li>
            <li>• Agar naam nahi hai toh <Link href="/articles/pm-kisan-registration-online-2026" className="font-bold underline hover:text-yellow-700">naya enrollment</Link> karo</li>
            <li>• Naam hai lekin paisa nahi aaya? <Link href="/articles/pm-kisan-payment-failed-status-2026" className="font-bold underline hover:text-yellow-700">Payment Fix Guide</Link> padho</li>
            <li>• Digital verification pending hai? <Link href="/articles/pm-kisan-ekyc-online-2026" className="font-bold underline hover:text-yellow-700">Digital Verification Guide</Link> follow karo</li>
          </ul>
        </div>

        {/* Related Guides */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
          <h3 className="font-black text-green-900 text-base mb-4">📖 Related Agrarian Welfare Guides</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { href: '/articles/pm-kisan-23vi-kist-2026-status-check', label: '📅 23vi Tranche Status' },
              { href: '/articles/pm-kisan-ekyc-online-2026', label: '🔐 Digital Verification Guide' },
              { href: '/articles/pm-kisan-payment-failed-status-2026', label: '💸 Payment Fix' },
              { href: '/articles/pm-kisan-registration-online-2026', label: '📝 Enrollment' },
              { href: '/articles/pm-kisan-name-correction-online-2026', label: '✏️ Identity Rectification' },
              { href: '/calculator/installment-tracker', label: '📆 Installment Tracker' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs px-3 py-2.5 bg-white border border-green-200 text-green-800 rounded-xl hover:bg-[#14532d] hover:text-white transition-colors font-medium text-center"
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