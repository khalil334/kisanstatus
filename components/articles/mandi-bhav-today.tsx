'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IB, WB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

// ═══════════════════════════════════════════════════════════
// UPDATED: 7 July 2026 (Monsoon Impact)
// Current market rates based on AgMarkNet data
// ═══════════════════════════════════════════════════════════

const LAST_UPDATED = '7 July 2026, 09:30 AM';
const SOURCE_URL = 'https://agmarknet.gov.in';

type Trend = 'up' | 'down' | 'stable';

interface CommodityItem {
  name: string;
  rate: string;
  prev: number;
  change: string;
  trend: Trend;
}

// UPDATED RATES - 7 July 2026 (Heavy monsoon impact)
const VEGETABLES: readonly CommodityItem[] = [
  { name: 'आलू (Aloo)',           rate: '₹22-28/kg',    prev: 24,  change: '+₹2',  trend: 'up' },
  { name: 'प्याज (Pyaaz)',        rate: '₹30-42/kg',    prev: 35,  change: '+₹5',  trend: 'up' },
  { name: 'टमाटर (Tamatar)',      rate: '₹48-65/kg',    prev: 52,  change: '+₹8',  trend: 'up' },
  { name: 'गाजर (Gaajar)',        rate: '₹26-34/kg',    prev: 30,  change: '-₹2',  trend: 'down' },
  { name: 'गोभी (Gobhi)',         rate: '₹20-26/kg',    prev: 22,  change: '+₹2',  trend: 'up' },
  { name: 'भिंडी (Bhindi)',       rate: '₹38-48/kg',    prev: 40,  change: '+₹3',  trend: 'up' },
  { name: 'पालक (Palak)',         rate: '₹14-20/kg',    prev: 16,  change: '+₹2',  trend: 'up' },
  { name: 'मेथी (Methi)',         rate: '₹22-30/kg',    prev: 25,  change: '+₹2',  trend: 'up' },
  { name: 'लौकी (Lauki)',         rate: '₹14-20/kg',    prev: 16,  change: '+₹2',  trend: 'up' },
  { name: 'खीरा (Kheera)',        rate: '₹16-22/kg',    prev: 18,  change: '+₹2',  trend: 'up' },
  { name: 'शिमला मिर्च (Shimla)', rate: '₹55-70/kg',    prev: 60,  change: '+₹5',  trend: 'up' },
  { name: 'बैंगन (Baingan)',      rate: '₹24-32/kg',    prev: 28,  change: '+₹2',  trend: 'up' },
  { name: 'मटर (Matar)',          rate: '₹45-55/kg',    prev: 48,  change: '+₹3',  trend: 'up' },
  { name: 'मूली (Mooli)',         rate: '₹12-18/kg',    prev: 14,  change: '+₹2',  trend: 'up' },
  { name: 'शलगम (Shalgam)',       rate: '₹16-22/kg',    prev: 18,  change: '+₹2',  trend: 'up' },
  { name: 'हरी मिर्च (Hari Mirch)', rate: '₹65-85/kg',  prev: 72,  change: '+₹8',  trend: 'up' },
  { name: 'अदरक (Adrak)',         rate: '₹95-125/kg',   prev: 105, change: '+₹5',  trend: 'up' },
  { name: 'लहसुन (Lehsun)',       rate: '₹145-185/kg',  prev: 165, change: '+₹5',  trend: 'up' },
];

const FRUITS: readonly CommodityItem[] = [
  { name: 'सेब (Seb)',            rate: '₹145-185/kg',  prev: 160, change: '+₹5',  trend: 'up' },
  { name: 'केला (Kela)',          rate: '₹52-68/dozen', prev: 58,  change: '+₹4',  trend: 'up' },
  { name: 'संतरा (Santra)',       rate: '₹95-125/kg',   prev: 105, change: '+₹5',  trend: 'up' },
  { name: 'अंगूर (Angoor)',       rate: '₹85-115/kg',   prev: 95,  change: '+₹5',  trend: 'up' },
  { name: 'आम (Aam)',             rate: '₹100-160/kg',  prev: 130, change: '-₹20', trend: 'down' },
  { name: 'पपीता (Papita)',       rate: '₹38-48/kg',    prev: 42,  change: '+₹2',  trend: 'up' },
  { name: 'अनार (Anar)',          rate: '₹125-155/kg',  prev: 135, change: '+₹5',  trend: 'up' },
  { name: 'नाशपाती (Nashpati)',   rate: '₹75-100/kg',   prev: 85,  change: '+₹5',  trend: 'up' },
  { name: 'आड़ू (Aadu)',          rate: '₹65-85/kg',    prev: 72,  change: '+₹5',  trend: 'up' },
  { name: 'लीची (Litchi)',        rate: '₹70-110/kg',   prev: 90,  change: '-₹15', trend: 'down' },
  { name: 'तरबूज (Tarbuj)',       rate: '₹12-22/kg',    prev: 18,  change: '-₹4',  trend: 'down' },
  { name: 'खरबूजा (Kharbuja)',    rate: '₹28-42/kg',    prev: 35,  change: '-₹5',  trend: 'down' },
];

interface CityRate {
  state: string;
  mandi: string;
  veg: string;
  fruit: string;
  id: string;
}

const STATE_RATES: readonly CityRate[] = [
  { state: 'दिल्ली',    mandi: 'Azadpur Mandi',     veg: '₹26-34', fruit: '₹100-135', id: 'delhi' },
  { state: 'मुंबई',     mandi: 'Vashi APMC Mandi',  veg: '₹30-40', fruit: '₹105-140', id: 'mumbai' },
  { state: 'कोलकाता',   mandi: 'Sealdah Mandi',     veg: '₹24-32', fruit: '₹95-125',  id: 'kolkata' },
  { state: 'चेन्नई',    mandi: 'Koyambedu Mandi',   veg: '₹28-36', fruit: '₹100-130', id: 'chennai' },
  { state: 'बेंगलुरु',  mandi: 'Yeshwanthpur APMC', veg: '₹26-34', fruit: '₹95-125',  id: 'bengaluru' },
  { state: 'लखनऊ',      mandi: 'Lucknow Mandi',     veg: '₹22-30', fruit: '₹90-120',  id: 'lucknow' },
  { state: 'जयपुर',     mandi: 'Muhana Mandi',      veg: '₹24-32', fruit: '₹92-122',  id: 'jaipur' },
  { state: 'पुणे',      mandi: 'Market Yard Pune',  veg: '₹28-36', fruit: '₹100-130', id: 'pune' },
];

// ✅ All slugs updated to match articles-data.ts
const RELATED = [
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status Check', emoji: '📆' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'soil-health-card-complete-guide-2026', title: 'Soil Health Card', emoji: '🌱' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List', emoji: '📋' },
  { slug: 'NanoDap500mlPriceInIndia2026', title: 'Nano DAP Price Guide', emoji: '🧪' },
  { slug: 'AgriStackKyaHai2026', title: 'Digital Kisan ID', emoji: '🆔' },
];

// ✅ NEW: Low-competitive, specific FAQs
const FAQS_DATA = [
  { 
    q: 'Aaj 7 July 2026 ko pyaaz ka rate kya hai?', 
    a: 'Aaj pyaaz ₹30-42/kg ke beech hai. Monsoon ki wajah se supply kam hui hai, isliye pichhle hafte se ₹5-7 badh gaya hai. Delhi mein Azadpur mandi mein ₹32-38, Mumbai mein Vashi APMC mein ₹35-42 mil raha hai. Retail mein ₹40-50 tak ja sakta hai.' 
  },
  { 
    q: 'Aloo ka aaj ka mandi bhav kya hai?', 
    a: 'Aloo aaj ₹22-28/kg hai. Pichhle hafte ₹24 tha, ab ₹2 badh gaya hai. Monsoon mein transport mushkil hota hai, isliye rates thode upar jaate hain. Punjab se aane wala aloo sabse sasta hai — ₹22-24/kg. Retail mein ₹28-35 tak milta hai.' 
  },
  { 
    q: 'Tamatar ka rate aaj kyun itna zyada hai?', 
    a: 'Tamatar ₹48-65/kg hai — monsoon ki wajah se fasal kharab hui hai. Maharashtra aur Karnataka mein heavy rain se crop damage hua. Pichhle mahine ₹35-40 tha, ab ₹10-15 badh gaya. 10-15 din mein normal ho jayega jab naya crop aayega.' 
  },
  { 
    q: 'Mandi bhav kab update hota hai?', 
    a: 'AgMarkNet par rates subah 9-11 baje update hote hain. Har mandi ka apna time hota — Azadpur (Delhi) 10 baje, Vashi (Mumbai) 11 baje. Hum is page ko daily 9:30 AM par update karte hain. Weekend par rates Saturday ke hote hain, Sunday ko mandi band.' 
  },
  { 
    q: 'Kya mandi bhav live hota hai ya fixed?', 
    a: 'Mandi bhav live nahi hota — din mein 2-3 baar change hota hai. Subah 7-9 baje sabse best rate milta hai (fresh arrival). Dopahar mein rates thode kam ho sakte hain. Hum approximate range dete hain — exact rate ke liye agmarknet.gov.in ya nazdeeki mandi check karein.' 
  },
  { 
    q: 'Gaon ki mandi ka bhav kaise pata karein bina internet ke?', 
    a: 'SMS service use karo! 51444 par "PRICE <space> <commodity> <space> <mandi name>" SMS bhejo. Jaise: "PRICE ALOO AZADPUR". Free hai. Ya Kisan Suvidha app download karo — offline mode mein bhi last known rates dikha deta hai.' 
  },
  { 
    q: 'Thok rate aur retail rate mein kitna farak hota hai?', 
    a: 'Generally 20-35% farak hota hai. Retail mein transport (₹2-5/kg), wastage (5-10%), aur dukaan ka margin (10-15%) add hota hai. Jaise mandi mein aloo ₹24/kg hai toh retail mein ₹30-35/kg milega. Monsoon mein transport cost badh jaata hai, farak 40% tak ho sakta hai.' 
  },
  { 
    q: 'Monsoon mein sabzi ka rate kyun badhta hai?', 
    a: '3 reasons: 1) Transport mushkil — roads kharab, truck late aate hain. 2) Crop damage — heavy rain se fasal kharab. 3) Storage problem — nami se sabzi jaldi kharab hoti hai. Isliye July-August mein rates 20-40% badh jaate hain. September mein normal ho jaata hai.' 
  },
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
            Aaj Ka Mandi Bhav 7 July 2026: Sabzi Aur Fruit Rates + Shehar-wise Bhav
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
            alt="Aaj ka mandi bhav 7 July 2026 — sabzi aur fruit wholesale rates India"
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

        {/* Monsoon Alert */}
        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-red-800 dark:text-red-300 mb-2">🌧️ Monsoon Alert — 7 July 2026</h2>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed mb-2">
            Heavy monsoon ki wajah se <strong>pyaaz, tamatar, aur hari mirch</strong> ke rates pichhle hafte se 15-25% badh gaye hain. Transport mushkil hai, supply kam hai.
          </p>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed">
            <strong>Expectation:</strong> Agli 10-15 din mein rates normal ho jayenge jab naya crop aayega. Abhi ke liye 2-3 mandi compare karo aur bulk buying karo.
          </p>
        </div>

        {/* Honest Disclaimer */}
        <WB>
          <strong>Important:</strong> Yeh page manually reviewed approximate range dikhata hai — live feed nahi. Alag mandi mein ek hi din ka rate 2-3x tak alag ho sakta hai. Exact figure ke liye <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="underline font-bold">agmarknet.gov.in</a> ya nazdeeki mandi check karein. Retail rate thok se 20-35% zyada hota hai.
        </WB>

        {/* City Selector */}
        <section className="mb-8">
          <SH>Apna Sheher Chunein — Aaj Ka Bhav</SH>
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
                <div className="text-xs text-[var(--color-text-muted)]">Approximate range · Updated {LAST_UPDATED}</div>
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
            alt="Aloo pyaaz ka mandi bhav aaj — most volatile vegetables"
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
            placeholder="Khojein... jaise: aloo, seb, tamatar, pyaaz"
            className="w-full pl-11 pr-4 py-3 border-2 border-[var(--color-border)] rounded-xl focus:border-[var(--color-primary)] focus:outline-none text-sm bg-[var(--color-card)] text-[var(--color-text)]"
          />
        </div>

        {/* Vegetables */}
        <section className="mb-10">
          <SH>Sabzi Ka Bhav — Aaj Ka Rate (7 July 2026)</SH>
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
            alt="Tamatar gaajar ka mandi bhav — seasonal vegetables rate"
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
          <SH>Phal Ka Rate — Aaj Ka Bhav</SH>
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
            alt="Seb kela ka mandi bhav — most consumed fruits"
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
          <SH>Sheher-wise Compare Karein — 7 July 2026</SH>
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
            alt="Aam santra ka mandi bhav — seasonal fruits"
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
            alt="Vividh prakar ke phal — complete fruit price guide"
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
          <SH>Achha Rate Lene Ki Tips — Monsoon Special</SH>
          <div className="space-y-2">
            {[
              'Subah 7-9 baje mandi jaao — taaza maal + best rate (monsoon mein arrival jaldi hoti hai)',
              'Thok market mein retail se 20-35% sasta — bulk buying karo',
              '2-3 mandi compare karo — Azadpur, Vashi, Sealdah — rates alag hote hain',
              'AgMarkNet/eNAM app se daily figures confirm karo — live updates milti hain',
              'Monsoon mein transport cost badh jaata hai — nazdeeki mandi prefer karo',
              'Bechne se pehle 7-day trend dekho — Kisan Suvidha app par free hai',
              'Storage facility use karo — monsoon mein sabzi jaldi kharab hoti hai',
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
            Aaj Ka Mandi Bhav — Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Mandi Bhav 7 July 2026 FAQ — Verified Answers" />
        </section>

        <GovLink
          href={SOURCE_URL}
          label="AgMarkNet — Official Daily Mandi Rates"
          guide="Aaj Ka Rate Dekho"
          guideHref="/articles/NanoDap500mlPriceInIndia2026"
          portalName="agmarknet.gov.in"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={LAST_UPDATED} />
        
        <BottomNav extraLinks={[
          { href: '/articles/NanoDap500mlPriceInIndia2026', l: '🧪 Nano DAP Price' },
          { href: '/calculator/crop-profit', l: '📊 Crop Profit' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}