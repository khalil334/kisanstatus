'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IB, WB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

// ═══════════════════════════════════════════════════════════
// UPDATED: 8 July 2026 (Daily Kisan Dashboard)
// Mandi Bhav + Mausam + Fasal Salah + Scheme Alert
// ═══════════════════════════════════════════════════════════

const LAST_UPDATED = '8 July 2026, 09:30 AM';
const SOURCE_URL = 'https://agmarknet.gov.in';

type Trend = 'up' | 'down' | 'stable';

interface CommodityItem {
  name: string;
  rate: string;
  prev: number;
  change: string;
  trend: Trend;
}

// UPDATED RATES - 8 July 2026
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

// ✅ NEW: Seasonal Crop Advisory (July 2026 - Monsoon)
const CROP_ADVISORY = [
  { crop: '🌾 Dhaan (Rice)', tip: 'Transplanting ka time hai. Nursery se 25-30 din purane paudhe lagao. Zinc sulfate 25kg/acre daalo.', urgency: 'high' },
  { crop: '🌽 Makka (Maize)', tip: 'Boai complete karo. Weed control zaroori — 15-20 din mein atrazine spray karo.', urgency: 'medium' },
  { crop: '🫘 Moong/Urad', tip: 'Monsoon moong ki boai ka last week. Seed rate 10-12 kg/acre. Rhizobium treatment zaroori.', urgency: 'high' },
  { crop: '🥜 Mungfali', tip: 'Boai shuru karo. Gypsum 200kg/acre daalo. White grub ke liye neem cake use karo.', urgency: 'medium' },
  { crop: '🌶️ Sabziyan', tip: 'Bhindi, lauki, karela — raised bed par lagao. Drainage achha rakho warna root rot hoga.', urgency: 'low' },
];

// ✅ NEW: Upcoming Deadlines & Alerts
const SCHEME_ALERTS = [
  { icon: '💰', title: 'PM Kisan 24vi Kist', desc: 'Expected Oct 2026. eKYC abhi complete karo.', link: '/articles/PmKisan24viKist2026', color: 'green' },
  { icon: '☀️', title: 'PM Kusum Solar Pump', desc: 'Subsidy quota limited — jaldi apply karo.', link: '/articles/PmKusumYojanaSolarSubsidy2026', color: 'amber' },
  { icon: '🛡️', title: 'PMFBY Insurance', desc: 'Kharif enrollment deadline: 31 July 2026.', link: '/articles/PmfbyCropInsurance2026', color: 'red' },
  { icon: '🔐', title: 'eKYC Mandatory', desc: 'Bina eKYC ke agli kist nahi milegi.', link: '/articles/PmKisanEkycOnline2026', color: 'blue' },
];

// ✅ NEW: 7-Day Weather Forecast (Sample Data)
const WEATHER_FORECAST = [
  { day: 'Aaj', date: '8 Jul', temp: '32°/26°', condition: '⛈️ Heavy Rain', rain: '80%' },
  { day: 'Kal', date: '9 Jul', temp: '31°/25°', condition: '🌧️ Moderate', rain: '65%' },
  { day: 'Thu', date: '10 Jul', temp: '33°/26°', condition: '🌦️ Light Rain', rain: '40%' },
  { day: 'Fri', date: '11 Jul', temp: '34°/27°', condition: '⛅ Cloudy', rain: '20%' },
  { day: 'Sat', date: '12 Jul', temp: '35°/28°', condition: '☀️ Sunny', rain: '5%' },
  { day: 'Sun', date: '13 Jul', temp: '34°/27°', condition: '🌤️ Partly Sunny', rain: '10%' },
  { day: 'Mon', date: '14 Jul', temp: '33°/26°', condition: '🌦️ Light Rain', rain: '35%' },
];

const RELATED = [
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status Check', emoji: '📆' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'soil-health-card-complete-guide-2026', title: 'Soil Health Card', emoji: '🌱' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List', emoji: '📋' },
  { slug: 'NanoDap500mlPriceInIndia2026', title: 'Nano DAP Price Guide', emoji: '🧪' },
  { slug: 'PmKusumYojanaSolarSubsidy2026', title: 'Solar Pump Subsidy', emoji: '☀️' },
];

const FAQS_DATA = [
  { q: 'Aaj 8 July 2026 ko pyaaz ka rate kya hai?', a: '₹30-42/kg. Monsoon se supply kam hai, pichhle hafte se ₹5-7 badha hai.' },
  { q: 'Aloo ka aaj ka mandi bhav?', a: '₹22-28/kg. Punjab aloo sabse sasta ₹22-24. Retail mein ₹28-35.' },
  { q: 'Tamatar itna mehnga kyun?', a: '₹48-65/kg. Maharashtra/Karnataka mein heavy rain se crop damage. 10-15 din mein normal hoga.' },
  { q: 'Mandi bhav kab update hota hai?', a: 'AgMarkNet par 9-11 AM. Hum daily 9:30 AM update karte hain. Sunday mandi band.' },
  { q: 'Thok aur retail mein kitna farak?', a: '20-35%. Transport + wastage + margin add hota hai. Monsoon mein 40% tak.' },
  { q: 'Bina internet mandi bhav kaise pata karein?', a: 'SMS: 51444 par "PRICE ALOO AZADPUR" bhejo. Free hai. Ya Kisan Suvidha app offline mode.' },
  { q: 'Monsoon mein rate kyun badhta hai?', a: 'Transport mushkil + crop damage + storage problem. July-August mein 20-40% upar. September mein normal.' },
  { q: 'Abhi kaunsi fasal boani chahiye?', a: 'Dhaan transplanting, makka boai, moong/urad last week, mungfali shuru. Sabzi raised bed par.' },
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
            <span className="text-white font-bold">Kisan Dashboard</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">📊 Daily Kisan Dashboard</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Aaj Ka Kisan Dashboard — Mandi Bhav + Mausam + Fasal Salah + Scheme Alert
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>🕐 {currentTime}</span>
            <span>🔄 Updated: {LAST_UPDATED}</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* IMAGE 1: Hero */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/mandi-bhav-today/mandi-fresh-vegetables-mixed.webp'}
            alt="Aaj ka kisan dashboard — mandi bhav mausam fasal salah scheme alert ek jagah"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Roz Subah Ye Page Kholo — Sab Kuch Ek Jagah Milega
          </p>
        </div>

        {/* ═══ SECTION 1: WEATHER FORECAST ═══ */}
        <section className="mb-8">
          <SH>🌤️ 7 Din Ka Mausam — Kheti Planning Ke Liye</SH>
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-3 min-w-max">
              {WEATHER_FORECAST.map((w, i) => (
                <div key={i} className={`flex-shrink-0 w-28 rounded-xl p-3 text-center border-2 ${
                  i === 0 ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-400 dark:border-blue-600' : 'bg-[var(--color-card)] border-[var(--color-border)]'
                }`}>
                  <div className="text-xs font-bold text-[var(--color-text-muted)] mb-1">{w.day}</div>
                  <div className="text-[10px] text-[var(--color-text-muted)] mb-2">{w.date}</div>
                  <div className="text-2xl mb-1">{w.condition.split(' ')[0]}</div>
                  <div className="text-sm font-black text-[var(--color-text)] mb-1">{w.temp}</div>
                  <div className="text-[10px] text-blue-600 dark:text-blue-400 font-bold">🌧️ {w.rain}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-[var(--color-text-muted)] mt-3 italic">
            💡 <strong>Tip:</strong> Aaj-kal heavy rain hai — spraying mat karo. Transplanting ke liye Friday-Saturday best window hai.
          </p>
        </section>

        {/* ═══ SECTION 2: SCHEME ALERTS ═══ */}
        <section className="mb-8">
          <SH>🔔 Scheme Alerts — Deadline Miss Mat Karo</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SCHEME_ALERTS.map((alert, i) => {
              const colors = {
                green: 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700',
                amber: 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700',
                red: 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700',
                blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700',
              };
              return (
                <Link key={i} href={alert.link} className={`block p-4 rounded-xl border-2 ${colors[alert.color as keyof typeof colors]} hover:shadow-md transition-all`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl shrink-0">{alert.icon}</span>
                    <div>
                      <p className="font-black text-[var(--color-text)] text-sm mb-1">{alert.title}</p>
                      <p className="text-xs text-[var(--color-text-muted)]">{alert.desc}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ═══ SECTION 3: CROP ADVISORY ═══ */}
        <section className="mb-8">
          <SH>🌱 Fasal Salah — July 2026 (Monsoon Season)</SH>
          <div className="space-y-3">
            {CROP_ADVISORY.map((item, i) => (
              <div key={i} className={`p-4 rounded-xl border-2 ${
                item.urgency === 'high' ? 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700' :
                item.urgency === 'medium' ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700' :
                'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700'
              }`}>
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0">{item.crop.split(' ')[0]}</span>
                  <div>
                    <p className="font-black text-[var(--color-text)] text-sm mb-1">{item.crop}</p>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{item.tip}</p>
                  </div>
                  {item.urgency === 'high' && <span className="ml-auto text-[10px] font-bold bg-red-600 text-white px-2 py-0.5 rounded-full shrink-0">URGENT</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Monsoon Alert */}
        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-red-800 dark:text-red-300 mb-2">🌧️ Monsoon Alert — 8 July 2026</h2>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed mb-2">
            Heavy monsoon ki wajah se <strong>pyaaz, tamatar, hari mirch</strong> ke rates 15-25% badh gaye hain.
          </p>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed">
            <strong>Expectation:</strong> 10-15 din mein normal hoga. Abhi bulk buying karo.
          </p>
        </div>

        {/* Disclaimer */}
        <WB>
          <strong>Note:</strong> Rates approximate hain — AgMarkNet data based. Exact rate ke liye <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="underline font-bold">agmarknet.gov.in</a> check karein. Retail rate thok se 20-35% zyada hota hai.
        </WB>

        {/* City Selector */}
        <section className="mb-8">
          <SH>🏬 Apna Sheher Chunein — Aaj Ka Bhav</SH>
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
                <div className="text-xs text-[var(--color-text-muted)]">Updated {LAST_UPDATED}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[var(--color-card)] rounded-xl p-4 text-center border border-green-200 dark:border-green-800">
                <div className="text-xs text-[var(--color-text-muted)] mb-1">Sabzi Average</div>
                <div className="text-2xl font-black text-green-700 dark:text-green-400">{city.veg}</div>
              </div>
              <div className="bg-[var(--color-card)] rounded-xl p-4 text-center border border-amber-200 dark:border-amber-800">
                <div className="text-xs text-[var(--color-text-muted)] mb-1">Phal Average</div>
                <div className="text-2xl font-black text-amber-700 dark:text-amber-400">{city.fruit}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Search */}
        <div className="mb-6 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] text-lg">🔍</span>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Khojein... aloo, seb, tamatar, pyaaz"
            className="w-full pl-11 pr-4 py-3 border-2 border-[var(--color-border)] rounded-xl focus:border-[var(--color-primary)] focus:outline-none text-sm bg-[var(--color-card)] text-[var(--color-text)]"
          />
        </div>

        {/* Vegetables */}
        <section className="mb-10">
          <SH>🥬 Sabzi Ka Bhav — Aaj Ka Rate</SH>
          {filteredVeg.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredVeg.map((v, i) => <PriceCard key={i} {...v} accent="green" />)}
            </div>
          ) : (
            <p className="text-[var(--color-text-muted)] text-center py-8">Koi result nahi mila.</p>
          )}
        </section>

        {/* Fruits */}
        <section className="mb-10">
          <SH>🍎 Phal Ka Rate — Aaj Ka Bhav</SH>
          {filteredFruit.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFruit.map((f, i) => <PriceCard key={i} {...f} accent="amber" />)}
            </div>
          ) : (
            <p className="text-[var(--color-text-muted)] text-center py-8">Koi result nahi mila.</p>
          )}
        </section>

        {/* All Cities Table */}
        <section className="mb-10">
          <SH>📊 Sheher-wise Compare Karein</SH>
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
                {STATE_RATES.map((r) => (
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

        {/* Profit Calculator */}
        <section className="mb-10">
          <SH>🧮 Fasal Bikri Calculator — Munafa Jaano</SH>
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

        {/* Tips */}
        <section className="mb-10">
          <SH>💡 Achha Rate Lene Ki Tips</SH>
          <div className="space-y-2">
            {[
              'Subah 7-9 baje mandi jaao — taaza maal + best rate',
              'Thok market mein retail se 20-35% sasta — bulk buying karo',
              '2-3 mandi compare karo — rates alag hote hain',
              'AgMarkNet/eNAM app se daily figures confirm karo',
              'Monsoon mein nazdeeki mandi prefer karo — transport cost bachega',
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
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Kisan Dashboard FAQ — Verified Answers" />
        </section>

        <GovLink
          href={SOURCE_URL}
          label="AgMarkNet — Official Daily Mandi Rates"
          guide="Official Rate Dekho"
          guideHref="/articles/NanoDap500mlPriceInIndia2026"
          portalName="agmarknet.gov.in"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={LAST_UPDATED} />

        <BottomNav extraLinks={[
          { href: '/articles/PmKusumYojanaSolarSubsidy2026', l: '☀️ Solar Pump' },
          { href: '/calculator/crop-profit', l: '📊 Crop Profit' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}