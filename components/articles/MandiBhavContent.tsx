'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ============================
// ✅ PAGE.TSX MEIN YE DAALO:
// export const metadata = {
//   title: 'Aaj Ka Mandi Bhav 30 June 2026 - Sabzi aur Fruit Rates Today | KisanStatus',
//   description: 'Aaj ka mandi bhav - aloo ₹20-24/kg, pyaaz ₹26-30/kg, tamatar ₹38-45/kg. Daily updated wholesale mandi rates in Hindi.',
// };
// ============================

// ✅ TODAY'S RATES - UPDATE KARO DAILY
const MANDI_DATA = {
  date: '30 June 2026',
  lastUpdated: '30 June 2026, 09:30 AM',
  vegetables: [
    { name: 'आलू (Aloo)',    rate: '₹20-24/kg',      prevRate: 18,  change: '+₹2', trend: 'up'     as const },
    { name: 'प्याज (Pyaaz)', rate: '₹26-30/kg',      prevRate: 28,  change: '-₹2', trend: 'down'   as const },
    { name: 'टमाटर (Tamatar)',rate: '₹38-45/kg',     prevRate: 35,  change: '+₹5', trend: 'up'     as const },
    { name: 'गाजर (Gaajar)', rate: '₹22-28/kg',      prevRate: 25,  change: '-₹3', trend: 'down'   as const },
    { name: 'गोभी (Gobhi)',  rate: '₹18-24/kg',      prevRate: 20,  change: '-₹2', trend: 'down'   as const },
    { name: 'भिंडी (Bhindi)',rate: '₹42-48/kg',      prevRate: 40,  change: '+₹4', trend: 'up'     as const },
  ],
  fruits: [
    { name: 'सेब (Seb)',       rate: '₹130-160/kg',   prevRate: 120, change: '+₹10', trend: 'up'   as const },
    { name: 'केला (Kela)',     rate: '₹48-58/dozen',  prevRate: 50,  change: '-₹2',  trend: 'down' as const },
    { name: 'संतरा (Santra)',  rate: '₹85-105/kg',    prevRate: 80,  change: '+₹5',  trend: 'up'   as const },
    { name: 'अंगूर (Angoor)', rate: '₹95-115/kg',    prevRate: 100, change: '-₹5',  trend: 'down' as const },
    { name: 'आम (Aam)',        rate: '₹160-220/kg',   prevRate: 150, change: '+₹20', trend: 'up'   as const },
    { name: 'पपीता (Papita)', rate: '₹38-48/kg',     prevRate: 40,  change: '-₹2',  trend: 'down' as const },
  ],
};

// ✅ RELATED ARTICLES
const RELATED_ARTICLES = [
  { title: 'PM Kisan 23vi Kist Status Check', slug: '/articles/pm-kisan-23vi-kist-2026-status-check', emoji: '📆', desc: 'Apni 23vi kist ka status check karein' },
  { title: 'PM Kisan eKYC Online 2026',        slug: '/articles/pm-kisan-ekyc-online-2026',           emoji: '🔐', desc: 'eKYC complete karein - bilkul free' },
  { title: 'Soil Health Card Complete Guide',   slug: '/articles/soil-health-card-complete-guide-2026',emoji: '🌱', desc: 'Mitti health card download karein' },
  { title: 'PM Kisan Payment Failed Solution',  slug: '/articles/pm-kisan-payment-failed-status-2026',emoji: '💸', desc: 'Payment fail hone par kya karein' },
];

// ✅ JSON-LD ARTICLE SCHEMA
const getSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: `Aaj Ka Mandi Bhav ${MANDI_DATA.date} - Sabzi aur Fruit Rates Today`,
  description: 'Aaj ka mandi bhav - aloo ka bhav, pyaaz ka rate, tamatar ka bhav, fruit mandi bhav wholesale rates',
  datePublished: '2026-06-30',
  dateModified: new Date().toISOString(),
  author: { '@type': 'Organization', name: 'KisanStatus.com', url: 'https://kisanstatus.com' },
  publisher: {
    '@type': 'Organization',
    name: 'KisanStatus.com',
    logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kisanstatus.com/articles/mandi-bhav-today' },
  keywords: 'aaj ka mandi bhav, mandi bhav today in hindi, aaj ke sabzi bhav, aloo ka bhav, pyaaz ka rate, tamatar ka bhav, fruit mandi bhav',
});

// ✅ FAQ SCHEMA
const getFaqSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Aaj ka mandi bhav kya hai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Aaj ka mandi bhav: Aloo ₹20-24/kg, Pyaaz ₹26-30/kg, Tamatar ₹38-45/kg, Seb ₹130-160/kg, Kela ₹48-58/dozen. Ye wholesale mandi rates hain.' },
    },
    {
      '@type': 'Question',
      name: 'Aloo ka bhav aaj kya hai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Aaj aloo ka bhav ₹20-24 per kg hai wholesale mandi mein. Kal ka rate ₹18 tha, aaj ₹2 badha hai.' },
    },
    {
      '@type': 'Question',
      name: 'Pyaaz ka rate aaj kya hai?',
      acceptedAnswer: { '@type': 'Answer', text: 'Aaj pyaaz ka rate ₹26-30 per kg hai. Kal ke mukable ₹2 kam hua hai.' },
    },
    {
      '@type': 'Question',
      name: 'Tamatar ka bhav kya hai aaj?',
      acceptedAnswer: { '@type': 'Answer', text: 'Aaj tamatar ka bhav ₹38-45 per kg hai wholesale mandi mein. Kal se ₹5 badha hai.' },
    },
    {
      '@type': 'Question',
      name: 'Fruit mandi bhav kahan check karein?',
      acceptedAnswer: { '@type': 'Answer', text: 'Fruit mandi bhav aap yahan check kar sakte hain. Seb ₹130-160/kg, Kela ₹48-58/dozen, Santra ₹85-105/kg, Aam ₹160-220/kg.' },
    },
  ],
});

// ✅ TREND BADGE — with aria-label for screen readers
function TrendBadge({ trend, change }: { trend: 'up' | 'down' | 'stable'; change: string }) {
  const config = {
    up:     { bg: 'bg-red-100 text-red-700',   icon: '↑', label: `Rate badha: ${change}` },
    down:   { bg: 'bg-green-100 text-green-700', icon: '↓', label: `Rate gira: ${change}` },
    stable: { bg: 'bg-gray-100 text-gray-700',  icon: '→', label: 'Rate stable hai' },
  };
  const { bg, icon, label } = config[trend];
  return (
    <span
      className={`text-xs font-bold px-2 py-1 rounded-full ${bg}`}
      aria-label={label}
      role="img"
    >
      {icon} {change}
    </span>
  );
}

// ✅ RATE CARD
function RateCard({
  item,
  accentColor,
}: {
  item: { name: string; rate: string; prevRate: number; change: string; trend: 'up' | 'down' | 'stable' };
  accentColor: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 p-5 border-2 border-gray-100 hover:border-green-200">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-bold text-gray-900 text-lg leading-tight">{item.name}</h3>
        <TrendBadge trend={item.trend} change={item.change} />
      </div>
      <div className={`text-2xl font-black mb-2 ${accentColor}`}>{item.rate}</div>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>Kal: ₹{item.prevRate}</span>
        <span className="bg-gray-100 px-2 py-0.5 rounded-full">Wholesale</span>
      </div>
    </div>
  );
}

export default function MandiBhavContent() {
  const [currentTime, setCurrentTime] = useState('');
  const [pmKisanYears, setPmKisanYears] = useState(1);

  // ✅ Mandi Calculator — cost starts at 0
  const [mandiCalc, setMandiCalc] = useState({ quantity: 100, rate: 25, cost: 0 });

  useEffect(() => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' }));
  }, []);

  const pmKisanTotal = pmKisanYears * 6000;
  const mandiRevenue = mandiCalc.quantity * mandiCalc.rate;
  const mandiProfit  = mandiRevenue - mandiCalc.cost;

  return (
    <>
      {/* ✅ JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema()) }} />

      {/* ✅ HEADER */}
      <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-8">
        <div className="container mx-auto px-4">
          {/* ✅ Back button — TOP pe bhi */}
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-green-100 hover:text-white text-sm mb-4 transition-colors"
          >
            ← Home
          </Link>
          <div className="flex items-start gap-3">
            <span className="text-4xl" aria-hidden="true">🏪</span>
            <div>
              <h1 className="text-2xl md:text-4xl font-black leading-tight">
                Aaj Ka Mandi Bhav {MANDI_DATA.date} — Sabzi aur Fruit Rates Today
              </h1>
              <p className="text-green-100 text-sm mt-2">
                <time dateTime="2026-06-30T09:30">
                  Last Updated: {MANDI_DATA.lastUpdated} {currentTime && `(${currentTime})`}
                </time>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">

        {/* ✅ INTRO — SEO keywords */}
        <section className="mb-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-3">
            <strong>Aaj ka mandi bhav</strong> — Kya aap janna chahte hain ki <strong>aaj ke sabzi bhav</strong> kya hain?
            Ya <strong>fruit mandi bhav</strong> check karna chahte hain? Yahan aapko milenge <strong>wholesale mandi rates</strong> jo daily update hote hain.
            Hum aapko batayenge ki <strong>aloo ka bhav</strong>, <strong>pyaaz ka rate aaj</strong>, <strong>tamatar ka bhav kya hai</strong>,
            aur sabhi seasonal sabziyon aur phalon ke <strong>mandi rates today</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ye <strong>mandi bhav today in Hindi</strong> mein hai taaki har kisan aur aam aadmi ko samajh aaye.
            Humare <strong>aaj ka sabzi rate</strong> wholesale market se liye gaye hain, jo retail se 20–30% saste hote hain.
          </p>
        </section>

        {/* ✅ ALERT */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-lg" role="note">
          <p className="text-blue-800 text-sm">
            <strong>📢 Note:</strong> Ye rates wholesale mandi ke hain. Retail rates 10–20% zyada ho sakte hain.
            Apne nazdeeki mandi ke exact rates ke liye local market check karein.
          </p>
        </div>

        {/* ✅ VEGETABLES */}
        <section className="mb-12" aria-labelledby="sabzi-heading">
          <h2 id="sabzi-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-3 flex items-center gap-2">
            <span aria-hidden="true">🥬</span> Aaj Ke Sabzi Bhav — Vegetable Rates Today
          </h2>
          <p className="text-gray-600 mb-6">
            Yahan dekhein <strong>aaj ke sabzi bhav</strong> — <strong>aloo ka bhav</strong>, <strong>pyaaz ka rate</strong>,
            <strong> tamatar ka bhav</strong>, aur sabhi seasonal sabziyon ke wholesale rates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MANDI_DATA.vegetables.map((veg, i) => (
              <RateCard key={i} item={veg} accentColor="text-green-700" />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {[
              { src: '/images/article/mandi-vegetables-potato-onion.webp', alt: 'Aloo aur Pyaaz mandi mein', label: 'आलू और प्याज' },
              { src: '/images/article/mandi-vegetables-tomato-carrot.webp', alt: 'Tamatar aur Gaajar taze', label: 'टमाटर और गाजर' },
              { src: '/images/article/mandi-fresh-vegetables-mixed.webp', alt: 'Tazi mixed sabziyan market mein', label: 'ताजी सब्जियां' },
            ].map((img, i) => (
              <div key={i} className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-110 transition-transform duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm font-bold" aria-hidden="true">
                  {img.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ FRUITS */}
        <section className="mb-12" aria-labelledby="phal-heading">
          <h2 id="phal-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-3 flex items-center gap-2">
            <span aria-hidden="true">🍎</span> Fruit Mandi Bhav — Phalon Ke Rates Today
          </h2>
          <p className="text-gray-600 mb-6">
            Check karein <strong>fruit mandi bhav</strong> — <strong>seb ka rate</strong>, <strong>kele ka bhav</strong>,
            <strong> santra ka rate</strong>, <strong>aam ka bhav</strong>, aur sabhi seasonal phalon ke wholesale prices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MANDI_DATA.fruits.map((fruit, i) => (
              <RateCard key={i} item={fruit} accentColor="text-amber-700" />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {[
              { src: '/images/article/mandi-fruits-apple-banana.webp', alt: 'Seb aur Kela taze phal', label: 'सेब और केला' },
              { src: '/images/article/mandi-fruits-mango-orange.webp', alt: 'Aam aur Santra mandi mein', label: 'आम और संतरा' },
              { src: '/images/article/mandi-fresh-fruits-mixed.webp', alt: 'Taze mixed phal market mein', label: 'ताजे फल' },
            ].map((img, i) => (
              <div key={i} className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-110 transition-transform duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm font-bold" aria-hidden="true">
                  {img.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ PM KISAN CALCULATOR */}
        <section className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200" aria-labelledby="pmkisan-calc-heading">
          <h2 id="pmkisan-calc-heading" className="text-2xl font-black text-gray-900 mb-2 flex items-center gap-2">
            <span aria-hidden="true">💰</span> PM Kisan Benefit Calculator
          </h2>
          <p className="text-gray-600 mb-6">Kitne saal tak milega — total amount calculate karein:</p>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <label htmlFor="pm-kisan-slider" className="block text-sm font-bold text-gray-700 mb-2">
              Kitne saal: <strong>{pmKisanYears} saal</strong>
            </label>
            <input
              id="pm-kisan-slider"
              type="range"
              min="1"
              max="10"
              value={pmKisanYears}
              onChange={(e) => setPmKisanYears(Number(e.target.value))}
              className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              aria-valuemin={1}
              aria-valuemax={10}
              aria-valuenow={pmKisanYears}
              aria-valuetext={`${pmKisanYears} saal`}
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1 mb-4">
              <span>1 saal</span><span>10 saal</span>
            </div>

            <div className="bg-green-100 rounded-xl p-4 text-center" role="status" aria-live="polite">
              <div className="text-sm text-gray-600 mb-1">Total Benefit</div>
              <div className="text-4xl font-black text-green-700">₹{pmKisanTotal.toLocaleString('en-IN')}</div>
              <div className="text-xs text-gray-500 mt-1">({pmKisanYears} saal × ₹6,000/year)</div>
            </div>

            <div className="mt-4 text-center">
              <Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="text-green-700 font-bold hover:text-green-800 hover:underline">
                Apna status check karein →
              </Link>
            </div>
          </div>
        </section>

        {/* ✅ MANDI PROFIT CALCULATOR — cost starts at 0 */}
        <section className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200" aria-labelledby="profit-calc-heading">
          <h2 id="profit-calc-heading" className="text-2xl font-black text-gray-900 mb-2 flex items-center gap-2">
            <span aria-hidden="true">🧮</span> Mandi Profit Calculator
          </h2>
          <p className="text-gray-600 mb-6">Apna munafa calculate karein:</p>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Quantity (Kg)', field: 'quantity' as const, placeholder: '100' },
                { label: 'Rate (₹/Kg)',   field: 'rate'     as const, placeholder: '25'  },
                { label: 'Total Cost (₹)',field: 'cost'     as const, placeholder: '0'   },
              ].map(({ label, field, placeholder }) => (
                <div key={field}>
                  <label htmlFor={`calc-${field}`} className="block text-sm font-bold text-gray-700 mb-2">{label}</label>
                  <input
                    id={`calc-${field}`}
                    type="number"
                    min="0"
                    value={mandiCalc[field]}
                    placeholder={placeholder}
                    onChange={(e) => setMandiCalc((prev) => ({ ...prev, [field]: Number(e.target.value) }))}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4" role="status" aria-live="polite">
              <div className="bg-blue-100 rounded-xl p-4 text-center">
                <div className="text-sm text-gray-600 mb-1">Total Revenue</div>
                <div className="text-3xl font-black text-blue-700">₹{mandiRevenue.toLocaleString('en-IN')}</div>
              </div>
              <div className={`rounded-xl p-4 text-center ${mandiProfit >= 0 ? 'bg-green-100' : 'bg-red-100'}`}>
                <div className="text-sm text-gray-600 mb-1">Net Profit</div>
                <div className={`text-3xl font-black ${mandiProfit >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                  ₹{mandiProfit.toLocaleString('en-IN')}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ FAQ SECTION */}
        <section className="mb-12 bg-white rounded-2xl p-6 shadow-sm border border-gray-100" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
            <span aria-hidden="true">❓</span> Aaj Ka Mandi Bhav — Aksar Puche Jane Wale Sawaal
          </h2>

          <dl className="space-y-5">
            {[
              {
                q: 'Aaj ka mandi bhav kya hai?',
                a: 'Aaj ka mandi bhav: Aloo ₹20-24/kg, Pyaaz ₹26-30/kg, Tamatar ₹38-45/kg, Seb ₹130-160/kg, Kela ₹48-58/dozen. Ye wholesale mandi rates hain jo daily update hote hain.',
              },
              { q: 'Aloo ka bhav aaj kya hai?',      a: 'Aaj aloo ka bhav ₹20-24 per kg hai wholesale mandi mein. Kal ka rate ₹18 tha, aaj ₹2 badha hai.' },
              { q: 'Pyaaz ka rate aaj kya hai?',     a: 'Aaj pyaaz ka rate ₹26-30 per kg hai. Kal ke mukable ₹2 kam hua hai.' },
              { q: 'Tamatar ka bhav kya hai aaj?',   a: 'Aaj tamatar ka bhav ₹38-45 per kg hai wholesale mandi mein. Kal se ₹5 badha hai.' },
              { q: 'Fruit mandi bhav kahan check karein?', a: 'Fruit mandi bhav aap yahan check kar sakte hain. Seb ₹130-160/kg, Kela ₹48-58/dozen, Santra ₹85-105/kg, Aam ₹160-220/kg.' },
            ].map(({ q, a }, i) => (
              <div key={i} className="border-l-4 border-green-500 pl-4">
                <dt className="font-bold text-gray-900 text-lg mb-1">{q}</dt>
                <dd className="text-gray-600">{a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ✅ INTERNAL LINKS */}
        <section className="mb-12" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
            <span aria-hidden="true">📚</span> Related Articles Padhein
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RELATED_ARTICLES.map((article, i) => (
              <Link
                key={i}
                href={article.slug}
                className="group bg-white rounded-xl p-5 border-2 border-gray-100 hover:border-green-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl" aria-hidden="true">{article.emoji}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors mb-1">{article.title}</h3>
                    <p className="text-sm text-gray-500">{article.desc}</p>
                  </div>
                  <span className="text-green-600 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ✅ TIPS */}
        <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 border-2 border-green-200">
          <h3 className="text-xl font-black text-gray-900 mb-4">📝 Mandi Bhav Check Karne ke Tips:</h3>
          <ul className="space-y-3 text-gray-700" role="list">
            {[
              'Subah 8–10 baje mandi visit karein — best rates milte hain',
              'Wholesale mandi mein retail se 20–30% sasta milta hai',
              'Seasonal sabziyon ke rates kam hote hain',
              'Online mandi bhav apps bhi use kar sakte hain (AgMarkNet, eNAM)',
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5" aria-hidden="true">✓</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ✅ BACK BUTTON — Bottom */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-xl transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            ← Wapas Home Page Par
          </Link>
        </div>
      </div>
    </>
  );
}
