'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IB, WB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

const MANDI_API_KEY = process.env.NEXT_PUBLIC_MANDI_API_KEY || '';
const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY || '';

const MANDI_API_URL = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${MANDI_API_KEY}&format=json&limit=100`;

const WEATHER_API_URL = (lat: number, lon: number) => 
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;

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
];

const FRUITS_FALLBACK: readonly CommodityItem[] = [
  { name: 'सेब (Seb)',            rate: '₹145-185/kg',  prev: 160, change: '+₹5',  trend: 'up' },
  { name: 'केला (Kela)',          rate: '₹52-68/dozen', prev: 58,  change: '+₹4',  trend: 'up' },
  { name: 'संतरा (Santra)',       rate: '₹95-125/kg',   prev: 105, change: '+₹5',  trend: 'up' },
  { name: 'अंगूर (Angoor)',       rate: '₹85-115/kg',   prev: 95,  change: '+₹5',  trend: 'up' },
];

// WEATHER FALLBACK - Static data jab API fail ho
const WEATHER_FALLBACK: readonly WeatherData[] = [
  { day: 'Aaj', date: '9 Jul', temp: '32°/26°', condition: '⛈️ Heavy Rain', rain: '80%' },
  { day: 'Kal', date: '10 Jul', temp: '31°/25°', condition: '🌧️ Moderate', rain: '65%' },
  { day: 'Thu', date: '11 Jul', temp: '33°/26°', condition: '🌦️ Light Rain', rain: '40%' },
  { day: 'Fri', date: '12 Jul', temp: '34°/27°', condition: '⛅ Cloudy', rain: '20%' },
  { day: 'Sat', date: '13 Jul', temp: '35°/28°', condition: '☀️ Sunny', rain: '5%' },
  { day: 'Sun', date: '14 Jul', temp: '34°/27°', condition: '🌤️ Partly Sunny', rain: '10%' },
  { day: 'Mon', date: '15 Jul', temp: '33°/26°', condition: '🌦️ Light Rain', rain: '35%' },
];

const VEG_NAME_MAP: Record<string, string> = {
  'Potato': 'आलू (Aloo)', 'Onion': 'प्याज (Pyaaz)', 'Tomato': 'टमाटर (Tamatar)',
  'Carrot': 'गाजर (Gaajar)', 'Cabbage': 'गोभी (Gobhi)', 'Bhindi': 'भिंडी (Bhindi)',
};

const FRUIT_NAME_MAP: Record<string, string> = {
  'Apple': 'सेब (Seb)', 'Banana': 'केला (Kela)', 'Orange': 'संतरा (Santra)',
  'Grapes': 'अंगूर (Angoor)',
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
];

const RELATED = [
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status', emoji: '📆' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
];

const FAQS_DATA = [
  { q: 'Mandi bhav live kyon change hota hai?', a: 'Real-time data update hota hai jab naye commodity market mein aate hain.' },
  { q: 'Mausam forecast kaafi accurate hai?', a: '5-din tak accurate hoti hai.' },
];

function TrendBadge({ trend, change }: { trend: Trend; change: string }) {
  const cfg = {
    up:     { bg: 'bg-red-100', text: 'text-red-700', arrow: '↑' },
    down:   { bg: 'bg-green-100', text: 'text-green-700', arrow: '↓' },
    stable: { bg: 'bg-gray-100', text: 'text-gray-600', arrow: '→' },
  }[trend];
  return (
    <span className={`text-xs font-bold px-2 py-1 rounded-full ${cfg.bg} ${cfg.text}`}>
      {cfg.arrow} {change}
    </span>
  );
}

function PriceCard({ name, rate, prev, change, trend, accent }: CommodityItem & { accent: 'green' | 'amber' }) {
  const border = accent === 'green' ? 'border-green-200' : 'border-amber-200';
  const priceColor = accent === 'green' ? 'text-green-700' : 'text-amber-700';
  return (
    <div className={`bg-white rounded-xl shadow-sm p-5 border-2 ${border}`}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-bold text-base">{name}</h3>
        <TrendBadge trend={trend} change={change} />
      </div>
      <div className={`text-2xl font-black ${priceColor} mb-2`}>{rate}</div>
    </div>
  );
}

export default function MandiBhavToday({ article }: { article: ArticleMeta }) {
  const [currentTime, setCurrentTime] = useState('');
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('delhi');

  const [vegetables, setVegetables] = useState<readonly CommodityItem[]>(VEGETABLES_FALLBACK);
  const [fruits, setFruits] = useState<readonly CommodityItem[]>(FRUITS_FALLBACK);
  const [weatherForecast, setWeatherForecast] = useState<readonly WeatherData[]>(WEATHER_FALLBACK);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleString('hi-IN'));
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const tick = () => setCurrentTime(new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' }));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  // FETCH LIVE MANDI RATES
  useEffect(() => {
    if (!MANDI_API_KEY) {
      return;
    }

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

  // FETCH LIVE WEATHER
  useEffect(() => {
    if (!WEATHER_API_KEY) {
      setWeatherForecast(WEATHER_FALLBACK);
      return;
    }

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
        // API fail ho to fallback dikhega
        setWeatherForecast(WEATHER_FALLBACK);
      }
    }

    fetchWeather();
  }, []);

  const filteredVeg = useMemo(() => vegetables.filter(v => v.name.toLowerCase().includes(search.toLowerCase())), [search, vegetables]);
  const filteredFruit = useMemo(() => fruits.filter(f => f.name.toLowerCase().includes(search.toLowerCase())), [search, fruits]);

  const city = STATE_RATES.find(s => s.id === selectedCity)!;

  return (
    <>
      <div className="bg-green-600 py-8">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-black text-white mb-3">Aaj Ka Mandi Bhav — Live Rates + Weather</h1>
          <div className="flex gap-3 text-xs text-green-100">
            <span>🕐 {currentTime}</span>
            <span>{isLive ? '🟢 Live' : '🔄 Updated'}: {lastUpdated}</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto py-8 px-4">
        {/* WEATHER */}
        <section className="mb-8">
          <h2 className="text-xl font-black mb-4">🌤️ 7 Din Ka Mausam Forecast</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {weatherForecast.map((w, i) => (
              <div key={i} className="flex-shrink-0 w-28 rounded-xl p-3 text-center border-2 bg-white border-gray-300">
                <div className="text-xs font-bold mb-1">{w.day}</div>
                <div className="text-sm font-black mb-1">{w.date}</div>
                <div className="text-2xl mb-1">{w.condition.split(' ')[0]}</div>
                <div className="text-sm font-black mb-1">{w.temp}</div>
                <div className="text-[10px] font-bold text-blue-600">💧 {w.rain}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CITY SELECTOR */}
        <section className="mb-8">
          <h2 className="text-xl font-black mb-4">🏬 Sheher Chunein</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {STATE_RATES.map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedCity(s.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  selectedCity === s.id ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-900'
                }`}
              >
                {s.state}
              </button>
            ))}
          </div>
          <div className="bg-green-50 rounded-xl p-5 border-2 border-green-300">
            <div className="font-black text-lg mb-3">{city.state} — {city.mandi}</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 text-center border-2 border-green-300">
                <div className="text-xs mb-1">Sabzi Thok Bhav</div>
                <div className="text-2xl font-black text-green-700">{city.veg}</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border-2 border-amber-300">
                <div className="text-xs mb-1">Phal Thok Bhav</div>
                <div className="text-2xl font-black text-amber-700">{city.fruit}</div>
              </div>
            </div>
          </div>
        </section>

        {/* SEARCH */}
        <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search... aloo, seb, pyaaz"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-sm"
          />
        </div>

        {/* VEGETABLES */}
        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">🥬 Sabzi Mandi Bhav</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredVeg.map((v, i) => <PriceCard key={i} {...v} accent="green" />)}
          </div>
        </section>

        {/* FRUITS */}
        <section className="mb-10">
          <h2 className="text-xl font-black mb-4">🍎 Phal Mandi Bhav</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredFruit.map((f, i) => <PriceCard key={i} {...f} accent="amber" />)}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black mb-4">FAQ</h2>
          <FAQBlock faqs={FAQS_DATA} caption="Mandi Bhav FAQ" />
        </section>

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={lastUpdated} />
        <BottomNav />
        <Disclaimer />
      </div>
    </>
  );
}
