'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ─── DATA ────────────────────────────────────────────────────────────────────
// ⚠️ IMPORTANT: These are SAMPLE/INDICATIVE rates for demonstration.
// Update this section manually each day (or wire up a real data source)
// before relying on it for real users. See note at bottom of file.

const LAST_UPDATED = '1 July 2026, 09:30 AM'; // ← update this daily
const SOURCE_URL = 'https://agmarknet.gov.in';

const VEGETABLES = [
  { name: 'आलू (Aloo)',              rate: '₹20-24/kg',       prev: 18,  change: '+₹2',  trend: 'up'     },
  { name: 'प्याज (Pyaaz)',           rate: '₹26-30/kg',       prev: 28,  change: '-₹2',  trend: 'down'   },
  { name: 'टमाटर (Tamatar)',         rate: '₹38-45/kg',       prev: 35,  change: '+₹5',  trend: 'up'     },
  { name: 'गाजर (Gaajar)',           rate: '₹22-28/kg',       prev: 25,  change: '-₹3',  trend: 'down'   },
  { name: 'गोभी (Gobhi)',            rate: '₹18-24/kg',       prev: 20,  change: '-₹2',  trend: 'down'   },
  { name: 'भिंडी (Bhindi)',          rate: '₹42-48/kg',       prev: 40,  change: '+₹4',  trend: 'up'     },
  { name: 'पालक (Palak)',            rate: '₹15-20/kg',       prev: 15,  change: '0',    trend: 'stable' },
  { name: 'मेथी (Methi)',            rate: '₹25-30/kg',       prev: 25,  change: '0',    trend: 'stable' },
  { name: 'लौकी (Lauki)',            rate: '₹12-16/kg',       prev: 14,  change: '-₹2',  trend: 'down'   },
  { name: 'खीरा (Kheera)',           rate: '₹18-22/kg',       prev: 20,  change: '-₹2',  trend: 'down'   },
  { name: 'शिमला मिर्च (Shimla)',    rate: '₹45-55/kg',       prev: 45,  change: '0',    trend: 'stable' },
  { name: 'बैंगन (Baingan)',         rate: '₹22-28/kg',       prev: 24,  change: '-₹2',  trend: 'down'   },
  { name: 'मटर (Matar)',             rate: '₹35-42/kg',       prev: 38,  change: '-₹3',  trend: 'down'   },
  { name: 'मूली (Mooli)',            rate: '₹10-14/kg',       prev: 12,  change: '-₹2',  trend: 'down'   },
  { name: 'शलगम (Shalgam)',          rate: '₹12-16/kg',       prev: 14,  change: '-₹2',  trend: 'down'   },
] as const;

const FRUITS = [
  { name: 'सेब (Seb)',               rate: '₹130-160/kg',     prev: 120, change: '+₹10', trend: 'up'     },
  { name: 'केला (Kela)',             rate: '₹48-58/dozen',    prev: 50,  change: '-₹2',  trend: 'down'   },
  { name: 'संतरा (Santra)',          rate: '₹85-105/kg',      prev: 80,  change: '+₹5',  trend: 'up'     },
  { name: 'अंगूर (Angoor)',          rate: '₹95-115/kg',      prev: 100, change: '-₹5',  trend: 'down'   },
  { name: 'आम (Aam)',                rate: '₹160-220/kg',     prev: 150, change: '+₹20', trend: 'up'     },
  { name: 'पपीता (Papita)',          rate: '₹38-48/kg',       prev: 40,  change: '-₹2',  trend: 'down'   },
  { name: 'अनार (Anar)',             rate: '₹110-130/kg',     prev: 110, change: '0',    trend: 'stable' },
  { name: 'नाशपाती (Nashpati)',      rate: '₹70-90/kg',       prev: 75,  change: '-₹5',  trend: 'down'   },
  { name: 'आड़ू (Aadu)',             rate: '₹55-70/kg',       prev: 60,  change: '-₹5',  trend: 'down'   },
  { name: 'लीची (Litchi)',           rate: '₹120-150/kg',     prev: 130, change: '-₹10', trend: 'down'   },
] as const;

const STATE_RATES = [
  { state: 'दिल्ली',      mandi: 'Azadpur Mandi',      veg: '₹25-30', fruit: '₹90-120',  id: 'delhi'     },
  { state: 'मुंबई',       mandi: 'Vashi APMC Mandi',   veg: '₹28-35', fruit: '₹95-125',  id: 'mumbai'    },
  { state: 'कोलकाता',     mandi: 'Sealdah Mandi',      veg: '₹22-28', fruit: '₹85-110',  id: 'kolkata'   },
  { state: 'चेन्नई',      mandi: 'Koyambedu Mandi',    veg: '₹26-32', fruit: '₹88-115',  id: 'chennai'   },
  { state: 'बेंगलुरु',    mandi: 'Yeshwanthpur APMC',  veg: '₹24-30', fruit: '₹85-112',  id: 'bengaluru' },
  { state: 'लखनऊ',        mandi: 'Lucknow Mandi',      veg: '₹20-26', fruit: '₹80-105',  id: 'lucknow'   },
  { state: 'जयपुर',       mandi: 'Muhana Mandi',       veg: '₹22-28', fruit: '₹82-108',  id: 'jaipur'    },
  { state: 'पुणे',        mandi: 'Market Yard Pune',   veg: '₹26-32', fruit: '₹90-118',  id: 'pune'      },
];

const RELATED_ARTICLES = [
  { title: 'PM Kisan 23vi Kist Status Check', slug: '/articles/pm-kisan-23vi-kist-2026-status-check', emoji: '📆', desc: 'Apni 23vi kist ka status check karein' },
  { title: 'PM Kisan eKYC Online 2026',       slug: '/articles/pm-kisan-ekyc-online-2026',             emoji: '🔐', desc: 'eKYC complete karein - bilkul free' },
  { title: 'Soil Health Card Guide',          slug: '/articles/soil-health-card-complete-guide-2026',  emoji: '🌱', desc: 'Mitti health card download karein' },
  { title: 'PM Kisan Payment Failed',         slug: '/articles/pm-kisan-payment-failed-status-2026',   emoji: '💸', desc: 'Payment fail hone par kya karein' },
];

// ─── SCHEMA ──────────────────────────────────────────────────────────────────
// Wording softened: "indicative range" instead of asserting verified live data
// from AgMarkNet for an exact date, since rates here are manually maintained.

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Mandi Bhav Guide – Sabzi aur Fruit Ke Indicative Wholesale Rates',
  description: 'Bharat ki major mandiyon ke sabzi aur phal ke indicative wholesale price ranges, har shahar ke hisaab se, aur AgMarkNet jaise official source se rate check karne ka tarika.',
  datePublished: '2026-06-30',
  dateModified: new Date().toISOString(),
  author: { '@type': 'Organization', name: 'KisanStatus.com', url: 'https://kisanstatus.com' },
  publisher: { '@type': 'Organization', name: 'KisanStatus.com', logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kisanstatus.com/articles/mandi-bhav-today' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Mandi bhav kaise pata karein?',                  acceptedAnswer: { '@type': 'Answer', text: 'Mandi bhav check karne ke liye AgMarkNet portal (agmarknet.gov.in) ya eNAM app sabse reliable source hain. Ye government-verified daily rates dete hain, mandi aur commodity ke hisaab se filter karke.' } },
    { '@type': 'Question', name: 'Sabzi mandi rate aaj kya hota hai?',             acceptedAnswer: { '@type': 'Answer', text: 'Sabzi ke wholesale rates roz badalte hain mausam, supply aur demand ke hisaab se. Is page par indicative ranges diye gaye hain — exact aaj ke rate ke liye AgMarkNet ya apni local mandi check karein.' } },
    { '@type': 'Question', name: 'Aloo pyaaz tamatar ka rate kaise track karein?', acceptedAnswer: { '@type': 'Answer', text: 'Aloo, pyaaz aur tamatar (TOP commodities) ke rates AgMarkNet par commodity-wise search se mil jate hain. Inke rates supply chain mein sabse zyada fluctuate karte hain.' } },
    { '@type': 'Question', name: 'Fruit mandi bhav kahan check karein?',           acceptedAnswer: { '@type': 'Answer', text: 'Fruit wholesale rates ke liye AgMarkNet portal ya apni nazdeeki mandi (jaise Azadpur, Vashi, Koyambedu) ka direct visit sabse accurate tarika hai.' } },
    { '@type': 'Question', name: 'Gaon ki mandi rate list kaise milegi?',          acceptedAnswer: { '@type': 'Answer', text: 'Chhoti ya gaon ki mandiyon ke rates AgriMarket mobile app se milte hain — ye GPS se 50km radius ki mandiyon ka data dikhata hai, bina internet ke bhi SMS service available hai.' } },
  ],
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

type Trend = 'up' | 'down' | 'stable';

function TrendBadge({ trend, change }: { trend: Trend; change: string }) {
  const cfg = {
    up:     { bg: 'bg-red-100',   text: 'text-red-700',   arrow: '↑' },
    down:   { bg: 'bg-green-100', text: 'text-green-700', arrow: '↓' },
    stable: { bg: 'bg-gray-100',  text: 'text-gray-600',  arrow: '→' },
  }[trend];
  return (
    <span className={`text-xs font-bold px-2 py-1 rounded-full ${cfg.bg} ${cfg.text}`}>
      {cfg.arrow} {change}
    </span>
  );
}

function PriceCard({
  name, rate, prev, change, trend, accent,
}: {
  name: string; rate: string; prev: number; change: string; trend: Trend; accent: 'green' | 'amber';
}) {
  const border = accent === 'green' ? 'border-green-100' : 'border-amber-100';
  const priceColor = accent === 'green' ? 'text-green-700' : 'text-amber-700';
  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-5 border-2 ${border}`}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-bold text-gray-900 text-base leading-snug">{name}</h3>
        <TrendBadge trend={trend} change={change} />
      </div>
      <div className={`text-2xl font-black ${priceColor} mb-2`}>{rate}</div>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>Pichla range: ₹{prev}</span>
        <span>Wholesale (indicative)</span>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function MandiBhavContent() {
  const [currentTime, setCurrentTime] = useState('');
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('delhi');
  const [mandiCalc, setMandiCalc] = useState({ qty: 100, rate: 25, cost: 1500 });

  useEffect(() => {
    const tick = () => setCurrentTime(new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' }));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  const filteredVeg   = useMemo(() => VEGETABLES.filter(v => v.name.toLowerCase().includes(search.toLowerCase())), [search]);
  const filteredFruit = useMemo(() => FRUITS.filter(f => f.name.toLowerCase().includes(search.toLowerCase())),     [search]);

  const revenue = mandiCalc.qty * mandiCalc.rate;
  const profit  = revenue - mandiCalc.cost;
  const city    = STATE_RATES.find(s => s.id === selectedCity)!;

  return (
    <>
      {/* ── Schema ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <header className="bg-gradient-to-r from-green-700 to-emerald-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-4">
            <span className="text-4xl mt-1">🏪</span>
            <div>
              <h1 className="text-2xl md:text-4xl font-black leading-tight">
                Mandi Bhav Guide — Sabzi aur Fruit Wholesale Rates
              </h1>
              <p className="text-green-200 text-sm mt-2">
                Indicative Sabzi &amp; Fruit Wholesale Price Ranges · Last reviewed {LAST_UPDATED}
              </p>
              {/* Source badge */}
              <a
                href={SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full transition-colors"
              >
                📊 Official Live Rates: AgMarkNet (agmarknet.gov.in) ↗
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">

        {/* ── Intro — natural, no keyword stuffing ── */}
        <section className="mb-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed">
            Yahan aapko India ki major mandion ke <strong>sabzi aur phal ke indicative wholesale price ranges</strong> milenge —
            roz ke aaloo pyaaz tamatar rate se lekar mausami phalon tak. Ye ek <strong>general guide</strong> hai jo aapko
            typical rate range samjhane ke liye banaya gaya hai. Exact aaj ke live rate ke liye hamesha{' '}
            <strong>AgMarkNet</strong> ya apni local mandi check karein — retail prices yahan diye gaye wholesale rates se
            10–20% zyada ho sakti hain.
          </p>
        </section>

        {/* ── Disclaimer ── */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-lg text-sm text-amber-800">
          <strong>📢 Dhyan den:</strong> Ye page <strong>indicative/sample wholesale ranges</strong> dikhata hai jo periodically
          review kiye jate hain — live, minute-by-minute mandi feed nahi hai. Din-pratidin ke exact rate, mandi-wise
          variation aur arrival quantity ke liye{' '}
          <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="underline font-semibold">
            agmarknet.gov.in
          </a>{' '}
          ya apni nazdeeki mandi zaroor check karein.
        </div>

        {/* ── City Selector ── */}
        <section className="mb-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
            <span>📍</span> Apna Sheher Chunein — Shehar-wise Mandi Bhav
          </h2>
          <div className="flex flex-wrap gap-2">
            {STATE_RATES.map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedCity(s.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
                  selectedCity === s.id
                    ? 'bg-green-600 border-green-600 text-white shadow-md'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-green-400'
                }`}
              >
                {s.state}
              </button>
            ))}
          </div>

          {/* Selected city rates */}
          <div className="mt-5 bg-green-50 rounded-xl p-5 border border-green-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🏬</span>
              <div>
                <div className="font-black text-gray-900 text-lg">{city.state} — {city.mandi}</div>
                <div className="text-xs text-gray-500">Indicative wholesale range · Periodically reviewed</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 text-center border border-green-100">
                <div className="text-xs text-gray-500 mb-1">Sabzi Average</div>
                <div className="text-2xl font-black text-green-700">{city.veg}</div>
                <div className="text-xs text-gray-400">per kg</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-amber-100">
                <div className="text-xs text-gray-500 mb-1">Phal Average</div>
                <div className="text-2xl font-black text-amber-700">{city.fruit}</div>
                <div className="text-xs text-gray-400">per kg</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Search ── */}
        <div className="mb-6 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Sabzi ya phal khojein... jaise: aloo, seb, tamatar"
            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-sm"
          />
        </div>

        {/* ── Vegetables ── */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 flex items-center gap-2">
            <span>🥬</span> Sabzi Mandi Bhav — Vegetable Wholesale Price List
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Indicative wholesale ranges · Last reviewed {LAST_UPDATED} · Official source: AgMarkNet
          </p>

          {filteredVeg.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredVeg.map((v, i) => (
                <PriceCard key={i} {...v} trend={v.trend as Trend} accent="green" />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center py-8">Koi result nahi mila.</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { src: '/images/articles/mandi-bhav-today/mandi-vegetables-potato-onion.webp',  alt: 'Aloo aur Pyaaz mandi', label: 'आलू और प्याज' },
              { src: '/images/articles/mandi-bhav-today/mandi-vegetables-tomato-carrot.webp', alt: 'Tamatar aur Gaajar',    label: 'टमाटर और गाजर' },
              { src: '/images/articles/mandi-bhav-today/mandi-fresh-vegetables-mixed.webp',   alt: 'Tazi Sabziyan',         label: 'ताजी सब्जियां' },
            ].map((img, i) => (
              <div key={i} className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2 text-white text-sm font-bold">{img.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Fruits ── */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 flex items-center gap-2">
            <span>🍎</span> Phal Mandi Bhav — Fruit Wholesale Price List
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Indicative wholesale ranges · Last reviewed {LAST_UPDATED} · Official source: AgMarkNet
          </p>

          {filteredFruit.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFruit.map((f, i) => (
                <PriceCard key={i} {...f} trend={f.trend as Trend} accent="amber" />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center py-8">Koi result nahi mila.</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { src: '/images/articles/mandi-bhav-today/mandi-fruits-apple-banana.webp', alt: 'Seb aur Kela',   label: 'सेब और केला' },
              { src: '/images/articles/mandi-bhav-today/mandi-fruits-mango-orange.webp', alt: 'Aam aur Santra', label: 'आम और संतरा' },
              { src: '/images/articles/mandi-bhav-today/mandi-fresh-fruits-mixed.webp',  alt: 'Taze Phal',       label: 'ताजे फल' },
            ].map((img, i) => (
              <div key={i} className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2 text-white text-sm font-bold">{img.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── All Cities Table ── */}
        <section className="mb-12 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
            <span>🗺️</span> Sheher-wise Mandi Bhav List
          </h2>
          <p className="text-sm text-gray-500 mb-4">Major mandion ke indicative average wholesale rates</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-green-50 text-left">
                  <th className="p-3 font-bold text-gray-700">Sheher</th>
                  <th className="p-3 font-bold text-gray-700">Mandi</th>
                  <th className="p-3 font-bold text-gray-700">Sabzi (avg)</th>
                  <th className="p-3 font-bold text-gray-700">Phal (avg)</th>
                </tr>
              </thead>
              <tbody>
                {STATE_RATES.map((r, i) => (
                  <tr
                    key={i}
                    onClick={() => setSelectedCity(r.id)}
                    className={`border-t border-gray-100 cursor-pointer transition-colors ${
                      selectedCity === r.id ? 'bg-green-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <td className="p-3 font-bold text-gray-900">{r.state}</td>
                    <td className="p-3 text-gray-600">{r.mandi}</td>
                    <td className="p-3 font-bold text-green-700">{r.veg}</td>
                    <td className="p-3 font-bold text-amber-700">{r.fruit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            * Ye indicative average ranges hain, live feed nahi. Exact rates ke liye{' '}
            <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="underline">agmarknet.gov.in</a>{' '}
            check karein.
          </p>
        </section>

        {/* ── Mandi Profit Calculator ── */}
        <section className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
          <h2 className="text-2xl font-black text-gray-900 mb-2 flex items-center gap-2">
            <span>🧮</span> Mandi Profit Calculator — Kisan Munafa Calculator
          </h2>
          <p className="text-gray-600 text-sm mb-6">Apni fasal ka munafa calculate karein</p>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Quantity (kg)', value: mandiCalc.qty,  key: 'qty'  },
                { label: 'Rate (₹/kg)',   value: mandiCalc.rate, key: 'rate' },
                { label: 'Total Cost (₹)',value: mandiCalc.cost, key: 'cost' },
              ].map(({ label, value, key }) => (
                <div key={key}>
                  <label className="block text-xs font-bold text-gray-600 mb-1">{label}</label>
                  <input
                    type="number"
                    value={value}
                    onChange={e => setMandiCalc(prev => ({ ...prev, [key]: Number(e.target.value) }))}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none text-sm"
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                <div className="text-xs text-gray-500 mb-1">Total Revenue</div>
                <div className="text-3xl font-black text-blue-700">₹{revenue.toLocaleString('en-IN')}</div>
              </div>
              <div className={`rounded-xl p-4 text-center border ${profit >= 0 ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                <div className="text-xs text-gray-500 mb-1">Net Profit / Loss</div>
                <div className={`text-3xl font-black ${profit >= 0 ? 'text-green-700' : 'text-red-600'}`}>
                  {profit >= 0 ? '+' : ''}₹{profit.toLocaleString('en-IN')}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mb-12 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
            <span>❓</span> Aksar Puche Jane Wale Sawaal
          </h2>
          <div className="space-y-5">
            {faqSchema.mainEntity.map((q, i) => (
              <div key={i} className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-gray-900 text-base mb-1">{q.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tips ── */}
        <section className="mb-12 bg-green-50 rounded-2xl p-6 border-2 border-green-200">
          <h3 className="text-xl font-black text-gray-900 mb-4">📝 Mandi Se Achha Rate Lene Ki Tips</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            {[
              'Subah 7–9 baje mandi jayen — sabse taaze maal aur best rates milte hain',
              'Wholesale mandi mein retail se 20–30% sasta milta hai',
              'Mausam ke hisab se sabziyan khariden — off-season mein rate zyada hota hai',
              'AgMarkNet app ya eNAM portal se daily live rates check karein, ye sabse accurate source hai',
              'Ek hi vendor se na khariden — 2–3 dukan compare karein',
              'Gaon ki mandi rate jaanne ke liye AgriMarket app use karein — GPS se 50km radius ki mandi dikhata hai',
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Related Articles ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
            <span>📚</span> Aur Helpful Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RELATED_ARTICLES.map((a, i) => (
              <Link
                key={i}
                href={a.slug}
                className="group bg-white rounded-xl p-5 border-2 border-gray-100 hover:border-green-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{a.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors mb-1 text-sm">{a.title}</h3>
                    <p className="text-xs text-gray-500">{a.desc}</p>
                  </div>
                  <span className="text-green-600 group-hover:translate-x-1 transition-transform shrink-0">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Back CTA ── */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-xl transition-all hover:scale-105 shadow-md"
          >
            ← Wapas Home Page Par
          </Link>
        </div>
      </div>
    </>
  );
}

/**
 * ─── MAINTENANCE NOTE ───────────────────────────────────────────────────────
 * Yeh rates ABHI manual hain (hardcoded array mein upar). In typical numbers
 * ko har kuch din mein khud check karke update karte rahein (AgMarkNet ya
 * Google se dekh kar) — bas LAST_UPDATED date aur jo rate badla hai wahi
 * array mein change karein. Jab tak ye automated nahi hai, "indicative" /
 * "sample range" wording mat hatayein — isse page honest aur trustworthy
 * rehta hai aur galat real-time claim nahi karta.
 */
