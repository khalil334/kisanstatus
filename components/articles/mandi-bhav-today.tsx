'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IB, WB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

// ═══════════════════════════════════════════════════════════
// UPDATED: July 4, 2026
// Current market rates based on AgMarkNet data
// ═══════════════════════════════════════════════════════════

const LAST_UPDATED = '4 July 2026, 08:00 AM';
const SOURCE_URL = 'https://agmarknet.gov.in';

type Trend = 'up' | 'down' | 'stable';

interface CommodityItem {
  name: string;
  rate: string;
  prev: number;
  change: string;
  trend: Trend;
}

// UPDATED RATES - July 2026 (Monsoon season impact)
const VEGETABLES: readonly CommodityItem[] = [
  { name: 'आलू (Aloo)',           rate: '₹20-26/kg',    prev: 22,  change: '-₹2',  trend: 'down' },
  { name: 'प्याज (Pyaaz)',        rate: '₹28-38/kg',    prev: 32,  change: '+₹4',  trend: 'up' },
  { name: 'टमाटर (Tamatar)',      rate: '₹45-60/kg',    prev: 42,  change: '+₹8',  trend: 'up' },
  { name: 'गाजर (Gaajar)',        rate: '₹24-32/kg',    prev: 28,  change: '-₹3',  trend: 'down' },
  { name: 'गोभी (Gobhi)',         rate: '₹18-24/kg',    prev: 22,  change: '-₹2',  trend: 'down' },
  { name: 'भिंडी (Bhindi)',       rate: '₹35-45/kg',    prev: 38,  change: '-₹3',  trend: 'down' },
  { name: 'पालक (Palak)',         rate: '₹12-18/kg',    prev: 15,  change: '-₹2',  trend: 'down' },
  { name: 'मेथी (Methi)',         rate: '₹20-28/kg',    prev: 24,  change: '-₹2',  trend: 'down' },
  { name: 'लौकी (Lauki)',         rate: '₹12-18/kg',    prev: 16,  change: '-₹2',  trend: 'down' },
  { name: 'खीरा (Kheera)',        rate: '₹14-20/kg',    prev: 18,  change: '-₹2',  trend: 'down' },
  { name: 'शिमला मिर्च (Shimla)', rate: '₹50-65/kg',    prev: 55,  change: '+₹5',  trend: 'up' },
  { name: 'बैंगन (Baingan)',      rate: '₹22-30/kg',    prev: 26,  change: '-₹2',  trend: 'down' },
  { name: 'मटर (Matar)',          rate: '₹40-50/kg',    prev: 45,  change: '-₹3',  trend: 'down' },
  { name: 'मूली (Mooli)',         rate: '₹10-16/kg',    prev: 14,  change: '-₹2',  trend: 'down' },
  { name: 'शलगम (Shalgam)',       rate: '₹14-20/kg',    prev: 18,  change: '-₹2',  trend: 'down' },
  { name: 'हरी मिर्च (Hari Mirch)', rate: '₹60-80/kg',  prev: 70,  change: '+₹5',  trend: 'up' },
  { name: 'अदरक (Adrak)',         rate: '₹90-120/kg',   prev: 100, change: '+₹10', trend: 'up' },
  { name: 'लहसुन (Lehsun)',       rate: '₹140-180/kg',  prev: 160, change: '+₹10', trend: 'up' },
];

const FRUITS: readonly CommodityItem[] = [
  { name: 'सेब (Seb)',            rate: '₹140-180/kg',  prev: 150, change: '+₹10', trend: 'up' },
  { name: 'केला (Kela)',          rate: '₹50-65/dozen', prev: 55,  change: '+₹3',  trend: 'up' },
  { name: 'संतरा (Santra)',       rate: '₹90-120/kg',   prev: 100, change: '+₹8',  trend: 'up' },
  { name: 'अंगूर (Angoor)',       rate: '₹80-110/kg',   prev: 95,  change: '-₹5',  trend: 'down' },
  { name: 'आम (Aam)',             rate: '₹120-180/kg',  prev: 150, change: '-₹20', trend: 'down' },
  { name: 'पपीता (Papita)',       rate: '₹35-45/kg',    prev: 40,  change: '-₹3',  trend: 'down' },
  { name: 'अनार (Anar)',          rate: '₹120-150/kg',  prev: 130, change: '+₹8',  trend: 'up' },
  { name: 'नाशपाती (Nashpati)',   rate: '₹70-95/kg',    prev: 80,  change: '-₹5',  trend: 'down' },
  { name: 'आड़ू (Aadu)',          rate: '₹60-80/kg',    prev: 70,  change: '-₹5',  trend: 'down' },
  { name: 'लीची (Litchi)',        rate: '₹80-120/kg',   prev: 110, change: '-₹20', trend: 'down' },
  { name: 'तरबूज (Tarbuj)',       rate: '₹15-25/kg',    prev: 20,  change: '-₹3',  trend: 'down' },
  { name: 'खरबूजा (Kharbuja)',    rate: '₹30-45/kg',    prev: 38,  change: '-₹5',  trend: 'down' },
];

interface CityRate {
  state: string;
  mandi: string;
  veg: string;
  fruit: string;
  id: string;
}

const STATE_RATES: readonly CityRate[] = [
  { state: 'दिल्ली',    mandi: 'Azadpur Mandi',     veg: '₹24-32', fruit: '₹95-130',  id: 'delhi' },
  { state: 'मुंबई',     mandi: 'Vashi APMC Mandi',  veg: '₹28-38', fruit: '₹100-135', id: 'mumbai' },
  { state: 'कोलकाता',   mandi: 'Sealdah Mandi',     veg: '₹22-30', fruit: '₹90-120',  id: 'kolkata' },
  { state: 'चेन्नई',    mandi: 'Koyambedu Mandi',   veg: '₹26-34', fruit: '₹95-125',  id: 'chennai' },
  { state: 'बेंगलुरु',  mandi: 'Yeshwanthpur APMC', veg: '₹24-32', fruit: '₹90-120',  id: 'bengaluru' },
  { state: 'लखनऊ',      mandi: 'Lucknow Mandi',     veg: '₹20-28', fruit: '₹85-115',  id: 'lucknow' },
  { state: 'जयपुर',     mandi: 'Muhana Mandi',      veg: '₹22-30', fruit: '₹88-118',  id: 'jaipur' },
  { state: 'पुणे',      mandi: 'Market Yard Pune',  veg: '₹26-34', fruit: '₹95-125',  id: 'pune' },
];

// ✅ FIXED: All slugs updated to match articles-data.ts
const RELATED = [
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status Check', emoji: '📆' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'soil-health-card-complete-guide-2026', title: 'Soil Health Card', emoji: '🌱' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List', emoji: '📋' },
  { slug: 'NanoDap500mlPriceInIndia2026', title: 'Nano DAP Price Guide', emoji: '🧪' },
  { slug: 'AgriStackKyaHai2026', title: 'Digital Kisan ID', emoji: '🆔' },
];

const FAQS_DATA = [
  { q: 'Sabzi ka aaj ka rate kaise pata karein?', a: 'AgMarkNet portal (agmarknet.gov.in) ya eNAM app sabse bharosemand tarika hai — government-verified daily figures milte hain, mandi aur fasal ke hisaab se filter karke.' },
  { q: 'Sabzi ka bhav roz kyun badalta hai?', a: 'Mausam, transport, arrival quantity aur demand-supply ke hisaab se thok rate din mein bhi kai baar change hota hai. Yahan diye gaye numbers typical range hain, minute-by-minute feed nahi.' },
  { q: 'Aloo pyaaz tamatar ka rate kaise track karein?', a: 'TOP commodities (Aloo, Pyaaz, Tamatar) AgMarkNet par commodity-search se turant mil jaate hain. Inka price supply chain mein sabse zyada volatile hota hai.' },
  { q: 'Gaon ki mandi ka bhav kaise pata chalega?', a: 'AgriMarket mobile app GPS se 50km radius ki mandi dikhata hai. Internet weak hai toh SMS service bhi available hai. Kisan Suvidha app bhi try karo.' },
  { q: 'Sabzi rate list PDF mein kaise download karein?', a: 'AgMarkNet par state aur mandi select karke "Price Trends" section se daily rate list PDF/Excel format mein free download hoti hai.' },
  { q: 'Mandi rate ka SMS alert kaise activate karein?', a: 'Kisan Suvidha ya AgriMarket app download karo, area select karo — daily rate SMS se milta hai. Khaas kar un jagah jahan internet weak hai.' },
  { q: 'Thok rate aur retail rate mein kitna farak hota hai?', a: 'Generally 10-30%. Retail dukaan par transport, wastage, aur margin add hota hai. Mandi mein subah 7-9 baje best thok rate milta hai.' },
];

// ═══════════════════════════════════════════════════════════
// SUB-COMPONENTS
// ═══════════════════════════════════════════════════════════

function TrendBadge({ trend, change }: { trend: Trend; change: string }) {
  const cfg = {
    up:     { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-700 dark:text-red-300', arrow: '↑' },
    down:   { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-300', arrow: '↓' },
    stable: { bg: 'bg-gray-100 dark:bg-gray-800', text: 'text-gray-600 dark:text-gray-400', arrow: '→' },
  }[trend];
  return (
    <span className={`text-xs font-bold px-2 py-1 rounded-full ${cfg.bg} ${cfg.text}`}>
      {cfg.arrow} {change}
    </span>
  );
}

function PriceCard({ name, rate, prev, change, trend, accent }: CommodityItem & { accent: 'green' | 'amber' }) {
  const border = accent === 'green' ? 'border-green-200 dark:border-green-800' : 'border-amber-200 dark:border-amber-800';
  const priceColor = accent === 'green' ? 'text-green-700 dark:text-green-400' : 'text-amber-700 dark:text-amber-400';
  return (
    <div className={`bg-[var(--color-card)] rounded-xl shadow-sm hover:shadow-lg transition-all p-5 border-2 ${border}`}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-bold text-[var(--color-text)] text-base leading-snug">{name}</h3>
        <TrendBadge trend={trend} change={change} />
      </div>
      <div className={`text-2xl font-black ${priceColor} mb-2`}>{rate}</div>
      <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)]">
        <span>Pichla: ₹{prev}</span>
        <span>Thok (approx.)</span>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export default function MandiBhavContent({ article }: { article: ArticleMeta }) {
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

  const filteredVeg = useMemo(() => VEGETABLES.filter(v => v.name.toLowerCase().includes(search.toLowerCase())), [search]);
  const filteredFruit = useMemo(() => FRUITS.filter(f => f.name.toLowerCase().includes(search.toLowerCase())), [search]);

  const revenue = mandiCalc.qty * mandiCalc.rate;
  const profit = revenue - mandiCalc.cost;
  const city = STATE_RATES.find(s => s.id === selectedCity)!;

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
            <span className="text-white font-bold">Market Rates</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Daily Market Reference</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Sabzi Aur Fruit Rate Guide 2026: Shehar-wise Bhav + Munafa Calculator
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>🕐 {currentTime}</span>
            <span>🔄 Updated: {LAST_UPDATED}</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* IMAGE 1: Hero - Mixed Vegetables — PATH UNCHANGED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/mandi-bhav-today/mandi-fresh-vegetables-mixed.webp'}
            alt="Fresh vegetables wholesale mandi rates India 2026 — daily approximate price reference"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Approximate Thok Rate Range · Official Source: AgMarkNet · Updated {LAST_UPDATED}
          </p>
        </div>

        {/* Honest Disclaimer */}
        <WB>
          <strong>Important:</strong> Yeh page manually reviewed approximate range dikhata hai — live feed nahi. Alag mandi mein ek hi din ka rate 2-3x tak alag ho sakta hai. Exact figure ke liye <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="underline font-bold">agmarknet.gov.in</a> ya nazdeeki mandi check karein. Retail rate thok se 10-30% zyada hota hai.
        </WB>

        {/* City Selector */}
        <section className="mb-8">
          <SH>Apna Sheher Chunein</SH>
          <div className="flex flex-wrap gap-2 mb-4">
            {STATE_RATES.map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedCity(s.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  selectedCity === s.id
                    ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white shadow-md'
                    : 'bg-[var(--color-card)] border-[var(--color-border)] text-[var(--color-text)] hover:border-green-400'
                }`}
              >
                {s.state}
              </button>
            ))}
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🏬</span>
              <div>
                <div className="font-black text-[var(--color-text)] text-lg">{city.state} — {city.mandi}</div>
                <div className="text-xs text-[var(--color-text-muted)]">Approximate range · Har kuch din review</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[var(--color-card)] rounded-xl p-4 text-center border border-green-200 dark:border-green-800">
                <div className="text-xs text-[var(--color-text-muted)] mb-1">Sabzi Average</div>
                <div className="text-2xl font-black text-green-700 dark:text-green-400">{city.veg}</div>
                <div className="text-xs text-[var(--color-text-muted)]">per kg</div>
              </div>
              <div className="bg-[var(--color-card)] rounded-xl p-4 text-center border border-amber-200 dark:border-amber-800">
                <div className="text-xs text-[var(--color-text-muted)] mb-1">Phal Average</div>
                <div className="text-2xl font-black text-amber-700 dark:text-amber-400">{city.fruit}</div>
                <div className="text-xs text-[var(--color-text-muted)]">per kg</div>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE 2: Potato & Onion — PATH UNCHANGED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/mandi-bhav-today/mandi-vegetables-potato-onion.webp"
            alt="Potato and onion wholesale mandi rates — most volatile vegetables in Indian market"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Aloo aur Pyaaz — Sabse Zyada Price Fluctuation Wali Sabziyan
          </p>
        </div>

        {/* Search */}
        <div className="mb-6 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] text-lg">🔍</span>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Khojein... jaise: aloo, seb, tamatar"
            className="w-full pl-11 pr-4 py-3 border-2 border-[var(--color-border)] rounded-xl focus:border-[var(--color-primary)] focus:outline-none text-sm bg-[var(--color-card)] text-[var(--color-text)]"
          />
        </div>

        {/* Vegetables */}
        <section className="mb-10">
          <SH>Sabzi Ka Bhav — Vegetable Rates</SH>
          <p className="text-xs text-[var(--color-text-muted)] mb-4">Approximate range · Updated {LAST_UPDATED}</p>

          {filteredVeg.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredVeg.map((v, i) => (
                <PriceCard key={i} {...v} accent="green" />
              ))}
            </div>
          ) : (
            <p className="text-[var(--color-text-muted)] text-center py-8">Koi result nahi mila.</p>
          )}
        </section>

        {/* IMAGE 3: Tomato & Carrot — PATH UNCHANGED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/mandi-bhav-today/mandi-vegetables-tomato-carrot.webp"
            alt="Tomato and carrot wholesale prices — seasonal vegetables rate guide"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Tamatar aur Gaajar — Seasonal Vegetables
          </p>
        </div>

        {/* Fruits */}
        <section className="mb-10">
          <SH>Phal Ka Rate — Fruit Prices</SH>
          <p className="text-xs text-[var(--color-text-muted)] mb-4">Approximate range · Updated {LAST_UPDATED}</p>

          {filteredFruit.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFruit.map((f, i) => (
                <PriceCard key={i} {...f} accent="amber" />
              ))}
            </div>
          ) : (
            <p className="text-[var(--color-text-muted)] text-center py-8">Koi result nahi mila.</p>
          )}
        </section>

        {/* IMAGE 4: Apple & Banana — PATH UNCHANGED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/mandi-bhav-today/mandi-fruits-apple-banana.webp"
            alt="Apple and banana wholesale mandi rates — most consumed fruits in India"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Seb aur Kela — Sabse Zyada Khaye Jane Wale Phal
          </p>
        </div>

        {/* All Cities Table */}
        <section className="mb-10">
          <SH>Sheher-wise Compare Karein</SH>
          <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Sheher</th>
                  <th className="p-3 text-left">Mandi</th>
                  <th className="p-3 text-left">Sabzi</th>
                  <th className="p-3 text-left">Phal</th>
                </tr>
              </thead>
              <tbody>
                {STATE_RATES.map((r, i) => (
                  <tr
                    key={r.id}
                    onClick={() => setSelectedCity(r.id)}
                    className={`border-b border-[var(--color-border)] cursor-pointer transition-colors ${
                      selectedCity === r.id ? 'bg-green-50 dark:bg-green-900/20' : 'hover:bg-[var(--color-bg-alt)]'
                    }`}
                  >
                    <td className="p-3 font-bold text-[var(--color-text)]">{r.state}</td>
                    <td className="p-3 text-[var(--color-text-muted)]">{r.mandi}</td>
                    <td className="p-3 font-bold text-green-700 dark:text-green-400">{r.veg}</td>
                    <td className="p-3 font-bold text-amber-700 dark:text-amber-400">{r.fruit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* IMAGE 5: Mango & Orange — PATH UNCHANGED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/mandi-bhav-today/mandi-fruits-mango-orange.webp"
            alt="Mango and orange wholesale rates — seasonal fruit prices across Indian mandis"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Aam aur Santra — Seasonal Fruits Price Guide
          </p>
        </div>

        {/* Mandi Profit Calculator */}
        <section className="mb-10">
          <SH>Fasal Bikri Calculator — Munafa Jaano</SH>
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 border-2 border-amber-200 dark:border-amber-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Quantity (kg)', key: 'qty' },
                { label: 'Rate (₹/kg)', key: 'rate' },
                { label: 'Total Cost (₹)', key: 'cost' },
              ].map(({ label, key }) => (
                <div key={key}>
                  <label className="block text-xs font-bold text-[var(--color-text-muted)] mb-1">{label}</label>
                  <input
                    type="number"
                    value={mandiCalc[key as keyof typeof mandiCalc]}
                    onChange={e => setMandiCalc(prev => ({ ...prev, [key]: Number(e.target.value) }))}
                    className="w-full px-4 py-2 border-2 border-[var(--color-border)] rounded-lg focus:border-amber-500 focus:outline-none text-sm bg-[var(--color-card)] text-[var(--color-text)]"
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center border border-blue-200 dark:border-blue-800">
                <div className="text-xs text-[var(--color-text-muted)] mb-1">Total Revenue</div>
                <div className="text-3xl font-black text-blue-700 dark:text-blue-400">₹{revenue.toLocaleString('en-IN')}</div>
              </div>
              <div className={`rounded-xl p-4 text-center border ${profit >= 0 ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'}`}>
                <div className="text-xs text-[var(--color-text-muted)] mb-1">Net Profit / Loss</div>
                <div className={`text-3xl font-black ${profit >= 0 ? 'text-green-700 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {profit >= 0 ? '+' : ''}₹{profit.toLocaleString('en-IN')}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE 6: Mixed Fruits — PATH UNCHANGED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/mandi-bhav-today/mandi-fresh-fruits-mixed.webp"
            alt="Mixed fresh fruits wholesale market rates — complete fruit price guide for farmers"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Vividh Prakar Ke Phal — Complete Fruit Price Guide
          </p>
        </div>

        {/* Tips */}
        <section className="mb-10">
          <SH>Achha Rate Lene Ki Tips</SH>
          <div className="space-y-2">
            {[
              'Subah 7-9 baje mandi jaao — taaza maal + best rate',
              'Thok market mein retail se 20-30% sasta',
              'Mausam ke hisaab se kharido — off-season mein mehnga',
              'AgMarkNet/eNAM se daily figures confirm karo',
              '2-3 dukan compare karo — ek vendor se mat lo',
              'Bechne se pehle Kisan Suvidha app par 7-day trend dekho',
            ].map((tip) => (
              <div key={tip} className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <span className="text-green-600 dark:text-green-400 font-bold shrink-0 mt-0.5">✓</span>
                <span className="text-sm text-[var(--color-text-muted)]">{tip}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Mandi Rate FAQ 2026 — Verified Answers" />
        </section>

        {/* ✅ FIXED: GovLink with correct slug */}
        <GovLink
          href={SOURCE_URL}
          label="AgMarkNet — Official Daily Mandi Rates"
          guide="Aaj Ka Rate Dekho"
          guideHref="/articles/NanoDap500mlPriceInIndia2026"
          portalName="agmarknet.gov.in"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={article.modifiedTime || article.publishedTime || new Date().toISOString()} />
        
        {/* ✅ FIXED: BottomNav with correct slug */}
        <BottomNav extraLinks={[
          { href: '/articles/NanoDap500mlPriceInIndia2026', l: '🧪 Nano DAP Price' },
          { href: '/calculator/crop-profit', l: '📊 Crop Profit' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}

/**
 * MAINTENANCE NOTE:
 * Rates manual hain. Har kuch din AgMarkNet se check karke update karo.
 * LAST_UPDATED date + changed ranges update karo bas.
 * Live feed claim mat karo — multiple sources disagree 3-5x on same day.
 */