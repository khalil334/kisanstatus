'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IB, WB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

// ═══════════════════════════════════════════════════════════
// LIVE APIS - Mandi Rates + Real-time Weather
// ═══════════════════════════════════════════════════════════

const MANDI_API_KEY = '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b';
const MANDI_API_URL = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${MANDI_API_KEY}&format=json&limit=100`;

const WEATHER_API_KEY = '41172979d253435000dfadb0faf9bf9c';
const WEATHER_API_URL = (lat: number, lon: number) => 
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;

// Default location — Delhi (can be changed to user's location)
const DEFAULT_LAT = 28.7041;
const DEFAULT_LON = 77.1025;

const SOURCE_URL = 'https://agmarknet.gov.in';

type Trend = 'up' | 'down' | 'stable';

interface CommodityItem {
  name: string;
  rate: string;
  prev: number;
  change: string;
  trend: Trend;
}

interface LiveRecord {
  state: string;
  district: string;
  market: string;
  commodity: string;
  variety: string;
  grade: string;
  arrival_date: string;
  min_price: string;
  max_price: string;
  modal_price: string;
}

interface WeatherData {
  day: string;
  date: string;
  temp: string;
  condition: string;
  rain: string;
}

// FALLBACK DATA
const VEGETABLES_FALLBACK: readonly CommodityItem[] = [
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
];

const FRUITS_FALLBACK: readonly CommodityItem[] = [
  { name: 'सेब (Seb)',            rate: '₹145-185/kg',  prev: 160, change: '+₹5',  trend: 'up' },
  { name: 'केला (Kela)',          rate: '₹52-68/dozen', prev: 58,  change: '+₹4',  trend: 'up' },
  { name: 'संतरा (Santra)',       rate: '₹95-125/kg',   prev: 105, change: '+₹5',  trend: 'up' },
  { name: 'अंगूर (Angoor)',       rate: '₹85-115/kg',   prev: 95,  change: '+₹5',  trend: 'up' },
  { name: 'आम (Aam)',             rate: '₹100-160/kg',  prev: 130, change: '-₹20', trend: 'down' },
];

const VEG_NAME_MAP: Record<string, string> = {
  'Potato': 'आलू (Aloo)', 'Onion': 'प्याज (Pyaaz)', 'Tomato': 'टमाटर (Tamatar)',
  'Carrot': 'गाजर (Gaajar)', 'Cabbage': 'गोभी (Gobhi)', 'Bhindi': 'भिंडी (Bhindi)',
  'Methi': 'मेथी (Methi)', 'Bottle gourd': 'लौकी (Lauki)', 'Cucumber': 'खीरा (Kheera)',
  'Brinjal': 'बैंगन (Baingan)',
};

const FRUIT_NAME_MAP: Record<string, string> = {
  'Apple': 'सेब (Seb)', 'Banana': 'केला (Kela)', 'Orange': 'संतरा (Santra)',
  'Grapes': 'अंगूर (Angoor)', 'Mango': 'आम (Aam)',
};

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

const CROP_ADVISORY = [
  { crop: '🌾 Dhaan (Rice)', tip: 'Transplanting ka time hai. Nursery se 25-30 din purane paudhe lagao. Zinc sulfate 25kg/acre daalo.', urgency: 'high' },
  { crop: '🌽 Makka (Maize)', tip: 'Boai complete karo. Weed control zaroori — 15-20 din mein atrazine spray karo.', urgency: 'medium' },
  { crop: '🫘 Moong/Urad', tip: 'Monsoon moong ki boai ka last week. Seed rate 10-12 kg/acre. Rhizobium treatment zaroori.', urgency: 'high' },
  { crop: '🥜 Mungfali', tip: 'Boai shuru karo. Gypsum 200kg/acre daalo. White grub ke liye neem cake use karo.', urgency: 'medium' },
];

const SCHEME_ALERTS = [
  { icon: '💰', title: 'PM Kisan 24vi Kist', desc: 'Expected Oct 2026. eKYC abhi complete karo.', link: '/articles/PmKisan24viKist2026', color: 'green' },
  { icon: '☀️', title: 'PM Kusum Solar Pump', desc: 'Subsidy quota limited — jaldi apply karo.', link: '/articles/PmKusumYojanaSolarSubsidy2026', color: 'amber' },
  { icon: '🛡️', title: 'PMFBY Insurance', desc: 'Kharif enrollment deadline: 31 July 2026.', link: '/articles/PmfbyCropInsurance2026', color: 'red' },
  { icon: '🔐', title: 'eKYC Mandatory', desc: 'Bina eKYC ke agli kist nahi milegi.', link: '/articles/PmKisanEkycOnline2026', color: 'blue' },
];

const RELATED = [
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status', emoji: '📆' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'soil-health-card-complete-guide-2026', title: 'Soil Health Card', emoji: '🌱' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List', emoji: '📋' },
  { slug: 'PmKusumYojanaSolarSubsidy2026', title: 'Solar Pump Subsidy', emoji: '☀️' },
];

const FAQS_DATA = [
  { q: 'Aaj ka mandi bhav live kyon change hota hai?', a: 'AgMarkNet data real-time update hota hai — jab kisan/seller new commodity market mein bring karte hain, rates tureeman change ho jaate hain.' },
  { q: 'Mausam ke base par farming plan kaise banau?', a: 'Forecast dekho, 3-5 din ka weather dekh kar decide karo. Heavy rain hua to spraying avoid karo, sunny din pe lagao.' },
  { q: 'Kis din best mandi rate milte hain?', a: 'Subah 6-9 AM, fresh supply aa jaati hai. Supply zyada = price kam. Peak trading hours avoid karo.' },
  { q: 'Thok aur retail price mein farak kyun?', a: 'Transport (5-8%), storage (3-5%), wastage (5-10%), wholesaler-retailer margin (10-15%).' },
  { q: 'Monsoon mein sabzi ke rate kyon badhte hain?', a: 'Production kam, transport complicated, storage ka cost zyada, spoilage risk zyada.' },
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
        <span>Thok rate approx.</span>
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

  const [vegetables, setVegetables] = useState<readonly CommodityItem[]>(VEGETABLES_FALLBACK);
  const [fruits, setFruits] = useState<readonly CommodityItem[]>(FRUITS_FALLBACK);
  const [weatherForecast, setWeatherForecast] = useState<WeatherData[]>([]);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleString('hi-IN'));
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const tick = () => setCurrentTime(new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' }));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  // ═══ FETCH LIVE MANDI RATES ═══
  useEffect(() => {
    async function fetchMandi() {
      try {
        const res = await fetch(MANDI_API_URL);
        if (!res.ok) throw new Error('Mandi API failed');
        const data = await res.json();
        const records: LiveRecord[] = data.records || [];

        const vegMap = new Map<string, number[]>();
        const fruitMap = new Map<string, number[]>();

        for (const rec of records) {
          const modal = Number(rec.modal_price);
          if (!modal || modal <= 0) continue;

          if (VEG_NAME_MAP[rec.commodity]) {
            const label = VEG_NAME_MAP[rec.commodity];
            if (!vegMap.has(label)) vegMap.set(label, []);
            vegMap.get(label)!.push(modal);
          }
          if (FRUIT_NAME_MAP[rec.commodity]) {
            const label = FRUIT_NAME_MAP[rec.commodity];
            if (!fruitMap.has(label)) fruitMap.set(label, []);
            fruitMap.get(label)!.push(modal);
          }
        }

        const buildItems = (map: Map<string, number[]>, fallback: readonly CommodityItem[]): CommodityItem[] => {
          if (map.size === 0) return [...fallback];
          const items: CommodityItem[] = [];
          map.forEach((prices, name) => {
            const min = Math.round(Math.min(...prices) / 10);
            const max = Math.round(Math.max(...prices) / 10);
            items.push({ name, rate: `₹${min}-${max}/kg`, prev: min, change: '—', trend: 'stable' });
          });
          fallback.forEach(f => { if (!items.find(i => i.name === f.name)) items.push(f); });
          return items;
        };

        setVegetables(buildItems(vegMap, VEGETABLES_FALLBACK));
        setFruits(buildItems(fruitMap, FRUITS_FALLBACK));
        setIsLive(true);
      } catch (err) {
        setIsLive(false);
      }
      setLastUpdated(new Date().toLocaleString('hi-IN'));
    }

    fetchMandi();
  }, []);

  // ═══ FETCH LIVE WEATHER ═══
  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(WEATHER_API_URL(DEFAULT_LAT, DEFAULT_LON));
        if (!res.ok) throw new Error('Weather API failed');
        const data = await res.json();
        const list = data.list || [];

        const weatherMap: Record<string, any> = {};
        list.slice(0, 40).forEach((item: any) => {
          const date = new Date(item.dt * 1000).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
          if (!weatherMap[date]) weatherMap[date] = item;
        });

        const forecast: WeatherData[] = Object.entries(weatherMap)
          .slice(0, 7)
          .map(([date, item]: [string, any]) => ({
            day: new Date(item.dt * 1000).toLocaleDateString('en-IN', { weekday: 'short' }),
            date,
            temp: `${Math.round(item.main.temp)}°/${Math.round(item.main.temp_min)}°`,
            condition: item.weather[0].main,
            rain: `${Math.round((item.clouds.all || 0))}%`,
          }));

        setWeatherForecast(forecast);
      } catch (err) {
        console.error('Weather fetch failed');
      }
    }

    fetchWeather();
  }, []);

  const filteredVeg = useMemo(() => vegetables.filter(v => v.name.toLowerCase().includes(search.toLowerCase())), [search, vegetables]);
  const filteredFruit = useMemo(() => fruits.filter(f => f.name.toLowerCase().includes(search.toLowerCase())), [search, fruits]);

  const revenue = mandiCalc.qty * mandiCalc.rate;
  const profit = revenue - mandiCalc.cost;
  const city = STATE_RATES.find(s => s.id === selectedCity)!;

  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Aaj Ka Kisan Dashboard</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">📊 Live Mandi Bhav + Real-time Mausam</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Aaj Ka Kisan Dashboard — Live Mandi Rates + Real-time Weather + Fasal Tips
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>🕐 {currentTime}</span>
            <span className={isLive ? 'text-green-300 font-bold' : ''}>
              {isLive ? '🟢 Live Data' : '🔄 Updated'}: {lastUpdated}
            </span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/mandi-bhav-today/mandi-fresh-vegetables-mixed.webp'}
            alt="Live mandi bhav aaj ka rate — real-time kisan dashboard"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* WEATHER SECTION */}
        <section className="mb-8">
          <SH>🌤️ 7 Din Ka Real-time Mausam Forecast</SH>
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-3 min-w-max">
              {weatherForecast.length > 0 ? weatherForecast.map((w, i) => (
                <div key={i} className="flex-shrink-0 w-28 rounded-xl p-3 text-center border-2 bg-[var(--color-card)] border-[var(--color-border)]">
                  <div className="text-xs font-bold mb-1">{w.day}</div>
                  <div className="text-sm font-black mb-1">{w.date}</div>
                  <div className="text-2xl mb-1">{w.condition}</div>
                  <div className="text-sm font-black mb-1">{w.temp}</div>
                  <div className="text-[10px] font-bold">☁️ {w.rain}</div>
                </div>
              )) : <p className="text-[var(--color-text-muted)] text-sm">Weather data loading...</p>}
            </div>
          </div>
        </section>

        {/* SCHEME ALERTS */}
        <section className="mb-8">
          <SH>🔔 Scheme Alerts — Deadline Miss Mat Karo</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SCHEME_ALERTS.map((alert, i) => (
              <Link key={i} href={alert.link} className="block p-4 rounded-xl border-2 hover:shadow-md transition-all bg-green-50 dark:bg-green-900/20 border-green-300">
                <p className="font-black text-sm mb-1">{alert.title}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{alert.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CROP ADVISORY */}
        <section className="mb-8">
          <SH>🌱 Fasal Salah — Mausam Ke Anusar</SH>
          <div className="space-y-3">
            {CROP_ADVISORY.map((item, i) => (
              <div key={i} className="p-4 rounded-xl border-2 bg-green-50 dark:bg-green-900/20 border-green-300">
                <p className="font-black text-sm mb-1">{item.crop}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{item.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CITY SELECTOR */}
        <section className="mb-8">
          <SH>🏬 Sheher Select Karo — Live Mandi Bhav Dekho</SH>
          <div className="flex flex-wrap gap-2 mb-4">
            {STATE_RATES.map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedCity(s.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border-2 ${
                  selectedCity === s.id
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-[var(--color-card)] text-[var(--color-text)]'
                }`}
              >
                {s.state}
              </button>
            ))}
          </div>
          <div className="bg-green-50 rounded-xl p-5 border border-green-300">
            <div className="font-black text-lg mb-3">{city.state} — {city.mandi}</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[var(--color-card)] rounded-xl p-4 text-center border border-green-300">
                <div className="text-xs mb-1">Sabzi Average Thok Bhav</div>
                <div className="text-2xl font-black text-green-700">{city.veg}</div>
              </div>
              <div className="bg-[var(--color-card)] rounded-xl p-4 text-center border border-amber-300">
                <div className="text-xs mb-1">Phal Average Thok Bhav</div>
                <div className="text-2xl font-black text-amber-700">{city.fruit}</div>
              </div>
            </div>
          </div>
        </section>

        {/* SEARCH */}
        <div className="mb-6 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">🔍</span>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search mandi bhav — aloo, tamatar, seb..."
            className="w-full pl-11 pr-4 py-3 border-2 rounded-xl text-sm bg-[var(--color-card)]"
          />
        </div>

        {/* VEGETABLES */}
        <section className="mb-10">
          <SH>🥬 Sabzi Mandi Bhav — Live Rate</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVeg.map((v, i) => <PriceCard key={i} {...v} accent="green" />)}
          </div>
        </section>

        {/* FRUITS */}
        <section className="mb-10">
          <SH>🍎 Phal Mandi Bhav — Live Price</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFruit.map((f, i) => <PriceCard key={i} {...f} accent="amber" />)}
          </div>
        </section>

        {/* CALCULATOR */}
        <section className="mb-10">
          <SH>🧮 Fasal Munafa Calculator</SH>
          <div className="bg-amber-50 rounded-2xl p-6 border-2 border-amber-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Quantity (kg)', key: 'qty' },
                { label: 'Rate (₹/kg)', key: 'rate' },
                { label: 'Cost (₹)', key: 'cost' },
              ].map(({ label, key }) => (
                <div key={key}>
                  <label className="block text-xs font-bold mb-1">{label}</label>
                  <input
                    type="number"
                    value={mandiCalc[key as keyof typeof mandiCalc]}
                    onChange={e => setMandiCalc(prev => ({ ...prev, [key]: Number(e.target.value) }))}
                    className="w-full px-4 py-2 border-2 rounded-lg text-sm bg-[var(--color-card)]"
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-300">
                <div className="text-xs mb-1">Revenue</div>
                <div className="text-3xl font-black text-blue-700">₹{revenue.toLocaleString('en-IN')}</div>
              </div>
              <div className={`rounded-xl p-4 text-center border ${profit >= 0 ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
                <div className="text-xs mb-1">Profit/Loss</div>
                <div className={`text-3xl font-black ${profit >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                  {profit >= 0 ? '+' : ''}₹{profit.toLocaleString('en-IN')}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black mb-4 pb-2 border-b-2">Aksar Puche Jane Wale Sawal</h2>
          <FAQBlock faqs={FAQS_DATA} caption="Live Mandi Dashboard FAQ" />
        </section>

        <GovLink
          href={SOURCE_URL}
          label="Official Mandi Rates — AgMarkNet"
          guide="Check Portal"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="agmarknet.gov.in"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={lastUpdated} />
        <BottomNav />
        <Disclaimer />
      </div>
    </>
  );
}
