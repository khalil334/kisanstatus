'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ─── DATA ────────────────────────────────────────────────────────────────────
// ⚠️ IMPORTANT: These are SAMPLE/APPROXIMATE ranges for demonstration.
// I checked live sources while updating this (commodityonline, kisandeals,
// oneindia, etc.) and they disagree with each other by 3-5x on the SAME DAY
// for the SAME commodity (e.g. onion quoted as ₹8/kg, ₹22/kg and ₹58/kg,
// all dated "today"). That's normal for mandi data — it's mandi-specific and
// changes hour to hour — but it means no page can honestly claim one
// "real-time all-India" number. Keep this section as manually-reviewed
// typical ranges, refreshed every few days from AgMarkNet trends.
// See MAINTENANCE NOTE at bottom of file.

const LAST_UPDATED = '2 July 2026, 09:00 AM'; // ← update this every few days
const SOURCE_URL = 'https://agmarknet.gov.in';

const VEGETABLES = [
  { name: 'आलू (Aloo)',              rate: '₹18-24/kg',       prev: 20,  change: '-₹2',  trend: 'down'   },
  { name: 'प्याज (Pyaaz)',           rate: '₹16-26/kg',       prev: 25,  change: '-₹5',  trend: 'down'   },
  { name: 'टमाटर (Tamatar)',         rate: '₹40-50/kg',       prev: 38,  change: '+₹6',  trend: 'up'     },
  { name: 'गाजर (Gaajar)',           rate: '₹22-28/kg',       prev: 25,  change: '-₹3',  trend: 'down'   },
  { name: 'गोभी (Gobhi)',            rate: '₹16-22/kg',       prev: 20,  change: '-₹3',  trend: 'down'   },
  { name: 'भिंडी (Bhindi)',          rate: '₹40-48/kg',       prev: 40,  change: '+₹3',  trend: 'up'     },
  { name: 'पालक (Palak)',            rate: '₹14-20/kg',       prev: 15,  change: '0',    trend: 'stable' },
  { name: 'मेथी (Methi)',            rate: '₹24-30/kg',       prev: 25,  change: '0',    trend: 'stable' },
  { name: 'लौकी (Lauki)',            rate: '₹10-15/kg',       prev: 14,  change: '-₹2',  trend: 'down'   },
  { name: 'खीरा (Kheera)',           rate: '₹16-22/kg',       prev: 20,  change: '-₹3',  trend: 'down'   },
  { name: 'शिमला मिर्च (Shimla)',    rate: '₹45-55/kg',       prev: 45,  change: '0',    trend: 'stable' },
  { name: 'बैंगन (Baingan)',         rate: '₹20-28/kg',       prev: 24,  change: '-₹2',  trend: 'down'   },
  { name: 'मटर (Matar)',             rate: '₹35-42/kg',       prev: 38,  change: '-₹2',  trend: 'down'   },
  { name: 'मूली (Mooli)',            rate: '₹9-14/kg',        prev: 12,  change: '-₹2',  trend: 'down'   },
  { name: 'शलगम (Shalgam)',          rate: '₹12-16/kg',       prev: 14,  change: '-₹1',  trend: 'down'   },
] as const;

const FRUITS = [
  { name: 'सेब (Seb)',               rate: '₹130-165/kg',     prev: 120, change: '+₹12', trend: 'up'     },
  { name: 'केला (Kela)',             rate: '₹48-58/dozen',    prev: 50,  change: '-₹2',  trend: 'down'   },
  { name: 'संतरा (Santra)',          rate: '₹85-105/kg',      prev: 80,  change: '+₹5',  trend: 'up'     },
  { name: 'अंगूर (Angoor)',          rate: '₹95-115/kg',      prev: 100, change: '-₹5',  trend: 'down'   },
  { name: 'आम (Aam)',                rate: '₹150-220/kg',     prev: 160, change: '+₹15', trend: 'up'     },
  { name: 'पपीता (Papita)',          rate: '₹36-46/kg',       prev: 40,  change: '-₹3',  trend: 'down'   },
  { name: 'अनार (Anar)',             rate: '₹110-135/kg',     prev: 110, change: '+₹3',  trend: 'up'     },
  { name: 'नाशपाती (Nashpati)',      rate: '₹68-88/kg',       prev: 75,  change: '-₹4',  trend: 'down'   },
  { name: 'आड़ू (Aadu)',             rate: '₹55-72/kg',       prev: 60,  change: '-₹3',  trend: 'down'   },
  { name: 'लीची (Litchi)',           rate: '₹100-140/kg',     prev: 130, change: '-₹15', trend: 'down'   },
] as const;

const STATE_RATES = [
  { state: 'दिल्ली',      mandi: 'Azadpur Mandi',      veg: '₹22-30', fruit: '₹90-120',  id: 'delhi'     },
  { state: 'मुंबई',       mandi: 'Vashi APMC Mandi',   veg: '₹26-34', fruit: '₹95-125',  id: 'mumbai'    },
  { state: 'कोलकाता',     mandi: 'Sealdah Mandi',      veg: '₹20-26', fruit: '₹85-110',  id: 'kolkata'   },
  { state: 'चेन्नई',      mandi: 'Koyambedu Mandi',    veg: '₹24-30', fruit: '₹88-115',  id: 'chennai'   },
  { state: 'बेंगलुरु',    mandi: 'Yeshwanthpur APMC',  veg: '₹22-28', fruit: '₹85-112',  id: 'bengaluru' },
  { state: 'लखनऊ',        mandi: 'Lucknow Mandi',      veg: '₹18-24', fruit: '₹80-105',  id: 'lucknow'   },
  { state: 'जयपुर',       mandi: 'Muhana Mandi',       veg: '₹20-26', fruit: '₹82-108',  id: 'jaipur'    },
  { state: 'पुणे',        mandi: 'Market Yard Pune',   veg: '₹24-30', fruit: '₹90-118',  id: 'pune'      },
];

const RELATED_ARTICLES = [
  { title: 'PM Kisan 23vi Kist Status Check', slug: '/articles/pm-kisan-23vi-kist-2026-status-check', emoji: '📆', desc: 'Apni 23vi kist ka status check karein' },
  { title: 'PM Kisan eKYC Online 2026',       slug: '/articles/pm-kisan-ekyc-online-2026',             emoji: '🔐', desc: 'eKYC complete karein - bilkul free' },
  { title: 'Soil Health Card Guide',          slug: '/articles/soil-health-card-complete-guide-2026',  emoji: '🌱', desc: 'Mitti health card download karein' },
  { title: 'PM Kisan Payment Failed',         slug: '/articles/pm-kisan-payment-failed-status-2026',   emoji: '💸', desc: 'Payment fail hone par kya karein' },
];

// ─── SCHEMA ──────────────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sabzi Aur Fruit Rate Guide — Shehar-wise Approximate Bhav List',
  description: 'Bharat ki major mandiyon ke sabzi aur phal ke approximate price range, har shahar ke hisaab se, aur AgMarkNet jaise official source se sahi rate nikalne ka tarika.',
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
    { '@type': 'Question', name: 'Sabzi ka aaj ka rate kaise pata karein?',              acceptedAnswer: { '@type': 'Answer', text: 'AgMarkNet portal (agmarknet.gov.in) ya eNAM app sabse bharosemand tarika hai — ye government-verified daily figures dete hain, mandi aur fasal ke hisaab se filter karke.' } },
    { '@type': 'Question', name: 'Sabzi ka bhav roz kyun badalta hai?',                  acceptedAnswer: { '@type': 'Answer', text: 'Mausam, transport, arrival quantity aur demand-supply ke hisaab se thok rate din mein bhi kai baar change ho sakta hai. Yahan diye gaye numbers ek typical range hain, minute-by-minute feed nahi.' } },
    { '@type': 'Question', name: 'Aloo pyaaz tamatar ka rate kaise track karein?',       acceptedAnswer: { '@type': 'Answer', text: 'Aloo, pyaaz aur tamatar (TOP commodities) AgMarkNet par commodity-search se turant mil jate hain. Inka price supply chain mein sabse zyada upar-neeche hota hai.' } },
    { '@type': 'Question', name: 'Fruit ka thok rate kahan check karein?',               acceptedAnswer: { '@type': 'Answer', text: 'Phal ke thok rate ke liye AgMarkNet ya apni nazdeeki mandi (jaise Azadpur, Vashi, Koyambedu) ka direct visit sabse accurate tarika hai.' } },
    { '@type': 'Question', name: 'Gaon ki mandi ka bhav kaise pata chalega?',            acceptedAnswer: { '@type': 'Answer', text: 'Chhoti ya gaon ki mandiyon ke rate AgriMarket mobile app se milte hain — ye GPS se 50km radius ki mandi dikhata hai, bina internet ke bhi SMS service milti hai.' } },
    { '@type': 'Question', name: 'Sabzi rate list PDF me kaise download karein?',        acceptedAnswer: { '@type': 'Answer', text: 'AgMarkNet website par apna state aur mandi select karke "Price Trends" section se daily rate list PDF/Excel format mein download ki ja sakti hai — bilkul free hai.' } },
    { '@type': 'Question', name: 'Mandi rate ka SMS alert kaise activate karein?',       acceptedAnswer: { '@type': 'Answer', text: 'Kisan Suvidha app ya AgriMarket app download karke apna area select karein — daily rate SMS ke through bhi mil sakta hai, khaas kar un jagah jahan internet weak hai.' } },
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
        <span>Thok rate (approx.)</span>
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
                Sabzi Aur Fruit Rate Guide — Shehar-wise Bhav List
              </h1>
              <p className="text-green-200 text-sm mt-2">
                Approximate Thok Rate Range · Last reviewed {LAST_UPDATED}
              </p>
              <a
                href={SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full transition-colors"
              >
                📊 Official Daily Rate: AgMarkNet (agmarknet.gov.in) ↗
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">

        {/* ── Intro — natural, no keyword stuffing ── */}
        <section className="mb-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed">
            Yahan aapko India ke bade shehron ke <strong>sabzi aur phal ka approximate price range</strong> milega —
            roz ke aaloo pyaaz tamatar se lekar mausami fruit tak. Ye ek <strong>general reference</strong> hai jo
            typical range samjhane ke liye banaya gaya hai. Din ke exact figure ke liye hamesha <strong>AgMarkNet</strong>{' '}
            ya apni nazdeeki mandi confirm karein — retail dukaan ka rate yahan diye gaye thok range se 10–20% zyada
            ho sakta hai.
          </p>
        </section>

        {/* ── Disclaimer ── */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-lg text-sm text-amber-800">
          <strong>📢 Dhyan den:</strong> Ye page <strong>manually reviewed approximate range</strong> dikhata hai —
          minute-by-minute live feed nahi. Alag-alag mandi mein ek hi din ka rate 2-3x tak alag ho sakta hai
          (transport, arrival quantity aur local demand ke hisaab se), isliye exact number ke liye{' '}
          <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="underline font-semibold">
            agmarknet.gov.in
          </a>{' '}
          ya apni nazdeeki mandi zaroor check karein.
        </div>

        {/* ── City Selector ── */}
        <section className="mb-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
            <span>📍</span> Apna Sheher Chunein — Local Sabzi Rate
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

          <div className="mt-5 bg-green-50 rounded-xl p-5 border border-green-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🏬</span>
              <div>
                <div className="font-black text-gray-900 text-lg">{city.state} — {city.mandi}</div>
                <div className="text-xs text-gray-500">Approximate range · Har kuch din mein review hoti hai</div>
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
            <span>🥬</span> Sabzi Ka Aaj Ka Bhav — Vegetable Price List
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Approximate range · Last reviewed {LAST_UPDATED} · Official source: AgMarkNet
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
            <span>🍎</span> Phal Ka Aaj Ka Rate — Fruit Price List
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Approximate range · Last reviewed {LAST_UPDATED} · Official source: AgMarkNet
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
            <span>🗺️</span> Sheher-wise Rate List — City Se City Compare Karein
          </h2>
          <p className="text-sm text-gray-500 mb-4">Major mandiyon ke approximate average thok rate</p>
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
            * Ye approximate average range hai, live feed nahi. Exact figure ke liye{' '}
            <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="underline">agmarknet.gov.in</a>{' '}
            check karein.
          </p>
        </section>

        {/* ── Mandi Profit Calculator ── */}
        <section className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
          <h2 className="text-2xl font-black text-gray-900 mb-2 flex items-center gap-2">
            <span>🧮</span> Fasal Bikri Calculator — Kisan Munafa Calculator
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
          <h3 className="text-xl font-black text-gray-900 mb-4">📝 Achha Rate Lene Ki Tips</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            {[
              'Subah 7–9 baje mandi jayen — sabse taaza maal aur best rate milta hai',
              'Thok market mein retail se 20–30% sasta milta hai',
              'Mausam ke hisab se sabziyan khariden — off-season mein price zyada hota hai',
              'AgMarkNet app ya eNAM portal se daily figures check karein, ye sabse bharosemand source hai',
              'Ek hi vendor se na khariden — 2–3 dukan compare karein',
              'Gaon ki mandi ka bhav jaanne ke liye AgriMarket app use karein — GPS se 50km radius dikhata hai',
              'Fasal bechne se pehle Kisan Suvidha app par apni fasal ka last 7 din ka trend dekh lein',
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
 * Rates ABHI bhi manual hain (array upar). Har kuch din mein khud check karke
 * update karte rahein (AgMarkNet ya Google se dekh kar) — bas LAST_UPDATED
 * date aur jo range badla hai wahi array mein change karein.
 *
 * SEO NOTE (July 2026 revision):
 * - Repeated phrases jaise "mandi bhav" / "wholesale" / "indicative" ko
 *   headings-content mein vary kiya gaya hai (sabzi rate, thok rate, bhav,
 *   approximate range, general reference) taaki keyword stuffing na lage.
 * - Naye low-competition long-tail keywords add kiye: "gaon ki mandi ka
 *   bhav", "sabzi rate list PDF", "mandi bhav SMS alert", "aaj ka sabzi
 *   rate", "fasal bikri calculator" — ye high-volume "mandi bhav today"
 *   se kam competitive hain aur real farmer intent match karte hain.
 * - "Live"/"real-time" jaisa strong claim jaan-bujh kar avoid kiya gaya hai —
 *   maine multiple sources cross-check kiye aur wahi commodity, wahi din, ke
 *   liye 3-5x tak alag numbers mile. Ek "sample data" page ke liye exact
 *   rupee claim karna galat info dena hoga; range + disclaimer zyada honest
 *   aur legally safer approach hai.
 */
