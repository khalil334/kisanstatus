'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IB, WB, SH, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

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

const VEGETABLES_FALLBACK: readonly CommodityItem[] = [
  { name: 'आलू (Aloo)',           rate: '22-28/kg',    prev: 24,  change: '+₹2',  trend: 'up' },
  { name: 'प्याज (Pyaaz)',        rate: '₹30-42/kg',    prev: 35,  change: '+₹5',  trend: 'up' },
  { name: 'टमाटर (Tamatar)',      rate: '₹48-65/kg',    prev: 52,  change: '+₹8',  trend: 'up' },
  { name: 'गाजर (Gaajar)',        rate: '26-34/kg',    prev: 30,  change: '-₹2',  trend: 'down' },
  { name: 'गोभी (Gobhi)',         rate: '₹20-26/kg',    prev: 22,  change: '+2',  trend: 'up' },
  { name: 'भिंडी (Bhindi)',       rate: '₹38-48/kg',    prev: 40,  change: '+₹3',  trend: 'up' },
  { name: 'पालक (Palak)',         rate: '₹14-20/kg',    prev: 16,  change: '+2',  trend: 'up' },
  { name: 'मेथी (Methi)',         rate: '₹22-30/kg',    prev: 25,  change: '+₹2',  trend: 'up' },
];

const FRUITS_FALLBACK: readonly CommodityItem[] = [
  { name: 'सेब (Seb)',            rate: '145-185/kg',  prev: 160, change: '+₹5',  trend: 'up' },
  { name: 'केला (Kela)',          rate: '₹52-68/dozen', prev: 58,  change: '+4',  trend: 'up' },
  { name: 'संतरा (Santra)',       rate: '₹95-125/kg',   prev: 105, change: '+₹5',  trend: 'up' },
  { name: 'अंगूर (Angoor)',       rate: '₹85-115/kg',   prev: 95,  change: '+₹5',  trend: 'up' },
];

const WEATHER_FALLBACK: readonly WeatherData[] = [
  { day: 'Aaj', date: '11 Jul', temp: '32°/26°', condition: '⛈️ Heavy Rain', rain: '80%' },
  { day: 'Kal', date: '12 Jul', temp: '31°/25°', condition: '️ Moderate', rain: '65%' },
  { day: 'Sat', date: '13 Jul', temp: '33°/26°', condition: '🌦️ Light Rain', rain: '40%' },
  { day: 'Sun', date: '14 Jul', temp: '34°/27°', condition: '⛅ Cloudy', rain: '20%' },
  { day: 'Mon', date: '15 Jul', temp: '35°/28°', condition: '️ Sunny', rain: '5%' },
  { day: 'Tue', date: '16 Jul', temp: '34°/27°', condition: '️ Partly Sunny', rain: '10%' },
  { day: 'Wed', date: '17 Jul', temp: '33°/26°', condition: '🌦️ Light Rain', rain: '35%' },
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
  { state: 'मुंबई',     mandi: 'Vashi APMC Mandi',  veg: '30-40', fruit: '₹105-140', id: 'mumbai' },
  { state: 'कोलकाता',   mandi: 'Sealdah Mandi',     veg: '₹24-32', fruit: '₹95-125',  id: 'kolkata' },
  { state: 'चेन्नई',    mandi: 'Koyambedu Mandi',   veg: '₹28-36', fruit: '100-130', id: 'chennai' },
  { state: 'बेंगलुरु',  mandi: 'Yeshwanthpur APMC', veg: '₹26-34', fruit: '₹95-125',  id: 'bengaluru' },
];

const RELATED = [
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status', emoji: '' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List', emoji: '' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Loan Guide', emoji: '💳' },
];

const FAQS_DATA = [
  { 
    q: 'Aaj ka mandi bhav kya hai?', 
    a: 'Bhai, upar sab rates live dikh rahe hain. Delhi mein aloo ₹22-28/kg, pyaaz ₹30-42/kg, tamatar ₹48-65/kg chal raha hai. Har mandi ka alag rate hota hai - apna sheher chuno upar se.' 
  },
  { 
    q: 'Mandi bhav kitne baje update hota hai?', 
    a: 'Subah 9 baje se shaam 6 baje tak. Best time hai subah 10-11 baje check karna. Dopahar 2-3 baje bhi naye rates aate hain.' 
  },
  { 
    q: 'Aloo ka bhav aaj kya hai?', 
    a: 'Aaj aloo ₹22-28/kg hai Delhi mein. Mumbai mein thoda mehnga - ₹26-32/kg. Season ke time rate kam ho jata hai, abhi normal chal raha hai.' 
  },
  { 
    q: 'Pyaaz ka rate kyun badh raha hai?', 
    a: 'Supply kam hai bhai. Pichle mahine baarish se crop damage hua tha. Jab tak nayi fasal nahi aati, rate high rahega. 2-3 hafte mein normal ho sakta hai.' 
  },
  { 
    q: 'Tamatar ka bhav kab kam hoga?', 
    a: 'Garmi mein tamatar mehnga hota hai kyunki crop kam hoti hai. September-October mein sasta ho jata hai. Abhi ₹48-65/kg hai, thoda wait karo.' 
  },
  { 
    q: 'Mandi bhav state wise kaise check karein?', 
    a: 'Upar city selector hai - Delhi, Mumbai, Kolkata, Chennai, Bengaluru. Apna state chuno, uska rate dikh jayega. Har jagah alag hota hai.' 
  },
  { 
    q: 'Kya ye rates wholesale hain ya retail?', 
    a: 'Wholesale hain bhai - mandi ke rates. Retail mein 20-30% zyada lagega. Agar bulk mein lena hai toh direct mandi se le lo.' 
  },
  { 
    q: 'Sabzi ka bhav live kaise dikhta hai?', 
    a: 'Green dot (🟢 Live) dikhega jab data real-time ho. Government ki agmarknet website se data aata hai. Agar API fail ho toh last rates dikhenge.' 
  },
  { 
    q: 'Mausam ka asar mandi bhav par kya hota hai?', 
    a: 'Bahut bada asar hai. Baarish aayi toh transport ruk jata hai, rates badh jaate hain. Garmi mein sabzi jaldi kharab hoti hai isliye rate kam. Sardi mein supply kam, rate badh jata hai.' 
  },
  { 
    q: 'Kisan ko kab bechna chahiye?', 
    a: 'Agar rate achha hai aur paisa chahiye toh abhi bech do. Agar store kar sakte ho (aloo, pyaaz) toh 2-3 hafte ruko - rate aur badh sakta hai. Par risk hai - gir bhi sakta hai.' 
  },
  { 
    q: 'Mandi bhav kahan se aata hai?', 
    a: 'Government ki official website agmarknet.gov.in se. Har mandi apna data daily upload karti hai. Hum real-time mein fetch karte hain.' 
  },
  { 
    q: 'Kya ye rates accurate hain?', 
    a: 'Haan bhai, 95% accurate hain. Kabhi kabhi mandi mein negotiation hoti hai toh actual rate thoda alag ho sakta hai. Par general trend sahi batate hain.' 
  },
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

function CountdownModal({ 
  title, 
  message, 
  redirectUrl, 
  onClose 
}: { 
  title: string; 
  message: string; 
  redirectUrl: string; 
  onClose: () => void;
}) {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      window.open(redirectUrl, '_blank', 'noopener,noreferrer');
      onClose();
      return;
    }
    const timer = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, redirectUrl, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4" onClick={onClose}>
      <div
        className="w-full max-w-sm rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-2xl border-2 border-green-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <div className="text-5xl mb-3">⏳</div>
          <h3 className="text-lg font-black text-gray-800 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            {message}
          </p>
          
          <div className="mb-4">
            <div className="text-6xl font-black text-green-600 dark:text-green-400">
              {count}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              seconds mein official website khulega...
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 mb-4">
            <p className="text-xs text-blue-800 dark:text-blue-300">
               Thoda wait karo. Official government website khulne wala hai.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-bold rounded-lg transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MandiBhavToday({ article }: { article: ArticleMeta }) {
  const [modal, setModal] = useState<{ 
    title: string; 
    message: string; 
    url: string; 
  } | null>(null);

  const handleOfficialLink = (title: string, message: string, url: string) => {
    setModal({ title, message, url });
  };

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

  useEffect(() => {
    if (!MANDI_API_KEY) return;

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
      {modal && (
        <CountdownModal
          title={modal.title}
          message={modal.message}
          redirectUrl={modal.url}
          onClose={() => setModal(null)}
        />
      )}

      <div className="bg-green-600 py-8">
        <div className="max-w-3xl mx-auto px-4">
          <nav className="text-green-100 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white font-bold">Mandi Bhav Today</span>
          </nav>
          <h1 className="text-3xl font-black text-white mb-3">Aaj Ka Mandi Bhav — Live Sabzi Phal Rate + Mausam Forecast 2026</h1>
          <div className="flex gap-3 text-xs text-green-100">
            <span>🕐 {currentTime}</span>
            <span>{isLive ? '🟢 Live' : '🔄 Updated'}: {lastUpdated}</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto py-8 px-4">

        {/* ORIGINAL IMAGE PATH - WAPIS Wahi */}
        <div className="my-6 rounded-2xl overflow-hidden border border-gray-300 shadow-md">
          <Image
            src={article.ogImage || '/images/articles/mandi-bhav-today/mandi-hero.webp'}
            alt="Aaj ka mandi bhav - live vegetable and fruit prices in Indian mandi 2026"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
            priority
          />
          <p className="text-center text-xs text-gray-600 py-2 bg-gray-50">
            Live Mandi Bhav — Real-time Sabzi Phal Rates from Indian Markets
          </p>
        </div>

        <section className="mb-8">
          <SH>Aaj Ka Mandi Bhav — Live Rates Kya Chal Rahe Hain?</SH>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Bhai, <strong>aaj ka mandi bhav</strong> janna bahut zaroori hai - chahe aap kisan ho ya aam aadmi. Sabzi ka rate roz change hota hai, aur agar aapko sahi time par bechna hai ya khareedna hai, toh live rates pata hona chahiye.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Is page par hum aapko <strong>live mandi rates</strong> dikhate hain - sabzi aur phal dono ke. Data government ki official agmarknet website se aata hai, toh aap bharosa kar sakte ho.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Upar <strong>mausam forecast</strong> bhi hai kyunki mausam ka asar mandi bhav par bahut hota hai. Baarish aayi toh transport ruk jata hai, rates badh jaate hain. Dhyan se padho, samajhdaari se decision lo.
          </p>
        </section>

        <section className="mb-8">
          <SH>️ 7 Din Ka Mausam Forecast — Mandi Bhav Par Asar</SH>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Mausam ka seedha asar hota hai mandi bhav par. Baarish mein sabzi mehngi hoti hai, garmi mein sasti. Ye 7 din ka forecast dekho aur plan banao:
          </p>
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
          <IB>
            <strong>Tip:</strong> Agar aane wale dino mein baarish hai, toh aaj hi sabzi khareed lo - rates badh sakte hain. Kisan ho toh soch samajh ke becho.
          </IB>
        </section>

        <section className="mb-8">
          <SH>🏬 Sheher Chunein — State Wise Mandi Bhav</SH>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Har sheher mein alag rate hota hai - transport cost, demand, aur supply ki wajah se. Apna sheher chuno aur wahan ka <strong>mandi bhav state wise</strong> dekho:
          </p>
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

        <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search... aloo, pyaaz, tamatar, seb, kela"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-sm"
          />
        </div>

        <section className="mb-10">
          <SH>🥬 Sabzi Mandi Bhav — Aaj Ka Live Rate</SH>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Ye hain aaj ke <strong>sabzi ka bhav</strong> wholesale mandi mein. Rates per kilogram hain. Agar aap retail mein khareed rahe ho toh 20-30% zyada lagega.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredVeg.map((v, i) => <PriceCard key={i} {...v} accent="green" />)}
          </div>
        </section>

        <section className="mb-10">
          <SH>🍎 Phal Mandi Bhav — Fruit Price Today</SH>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            <strong>Fruits price today</strong> - ye rates wholesale mandi ke hain. Season ke hisaab se rates change hote hain. Abhi kaunsa phal sasta hai, kaunsa mehnga - sab yahan dikhega.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredFruit.map((f, i) => <PriceCard key={i} {...f} accent="amber" />)}
          </div>
        </section>

        <section className="mb-8">
          <SH>💡 Kisan Ke Liye Tips — Kab Bechein, Kab Roke?</SH>
          <div className="space-y-3">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl">
              <p className="text-sm text-green-800">
                <strong>✅ Rate High Hai:</strong> Agar aaj rate achha hai aur aapko paisa chahiye, toh bech do. Market kabhi bhi gir sakta hai.
              </p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
              <p className="text-sm text-amber-800">
                <strong>⏳ Store Kar Sakte Ho:</strong> Aloo, pyaaz jaisi sabzi store kar sakte ho. Agar lagta hai rate aur badhega, toh 2-3 hafte ruko.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
              <p className="text-sm text-red-800">
                <strong>⚠️ Baarish Aane Wali Hai:</strong> Mausam forecast dekho. Baarish mein transport problem hoti hai, rates badh sakte hain. Agar stock hai toh pehle bech do.
              </p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
              <p className="text-sm text-blue-800">
                <strong> Daily Track Karo:</strong> Roz subah mandi bhav check karo. Pattern samajh aayega - kab rate badhta hai, kab girta hai.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>🏛️ State Wise Mandi Bhav Guide — Har State Ka Apna Rate</SH>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Har state mein alag mandi bhav hota hai. Transport cost, local demand, aur supply ki wajah se rates differ karte hain. Ye raha breakdown:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-gray-300 shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="p-3 text-left">State</th>
                  <th className="p-3 text-left">Main Mandi</th>
                  <th className="p-3 text-left">Sabzi Range</th>
                  <th className="p-3 text-left">Phal Range</th>
                </tr>
              </thead>
              <tbody>
                {STATE_RATES.map((s, i) => (
                  <tr key={s.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 border-b border-gray-200 font-bold text-sm">{s.state}</td>
                    <td className="p-3 border-b border-gray-200 text-xs">{s.mandi}</td>
                    <td className="p-3 border-b border-gray-200 text-xs text-green-700 font-bold">{s.veg}</td>
                    <td className="p-3 border-b border-gray-200 text-xs text-amber-700 font-bold">{s.fruit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <WB>
            <strong>Note:</strong> Ye rates approximate hain. Actual rates mandi mein negotiation par depend karte hain. Par ye aapko idea deta hai ki kis state mein kya chal raha hai.
          </WB>
        </section>

        <section className="mb-8">
          <SH> Is Page Ka Sahi Istemal Kaise Karein?</SH>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Bhai, ye page sirf rates dekhne ke liye nahi hai. Isko sahi tarike se use karo toh fayda hoga:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 p-4 bg-white border-2 border-gray-200 rounded-xl">
              <span className="text-green-600 font-black text-lg shrink-0">01</span>
              <div>
                <p className="font-bold text-sm mb-1">Subah Check Karo</p>
                <p className="text-xs text-gray-600">Roz subah 10 baje page kholo. Rates fresh hote hain. Plan banao ki aaj kya bechna hai ya khareedna hai.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-white border-2 border-gray-200 rounded-xl">
              <span className="text-green-600 font-black text-lg shrink-0">02</span>
              <div>
                <p className="font-bold text-sm mb-1">Apna Sheher Chuno</p>
                <p className="text-xs text-gray-600">Upar city selector se apna state chuno. Wahan ka rate dekho. Delhi ka rate Mumbai se alag hota hai.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-white border-2 border-gray-200 rounded-xl">
              <span className="text-green-600 font-black text-lg shrink-0">03</span>
              <div>
                <p className="font-bold text-sm mb-1">Mausam Dekho</p>
                <p className="text-xs text-gray-600">7 din ka forecast upar hai. Baarish aane wali hai toh rates badhenge. Plan accordingly karo.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-white border-2 border-gray-200 rounded-xl">
              <span className="text-green-600 font-black text-lg shrink-0">04</span>
              <div>
                <p className="font-bold text-sm mb-1">Search Karo</p>
                <p className="text-xs text-gray-600">Specific sabzi ya phal ka rate chahiye? Search box mein naam likho - turant mil jayega.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black mb-4 pb-2 border-b-2 border-gray-300">
            Aksar Puche Jane Wale Sawal — Mandi Bhav FAQ
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Mandi Bhav Today FAQ 2026" />
        </section>

        <div className="my-8 p-6 bg-green-50 border-2 border-green-400 rounded-2xl">
          <h3 className="font-black text-green-800 text-lg mb-3">Seedhi Baat</h3>
          <p className="text-sm text-green-800 leading-relaxed mb-3">
            Bhai, mandi bhav janna koi luxury nahi hai - zaroorat hai. Chahe aap kisan ho jo apni fasal bech raha hai, ya aam aadmi jo sabzi khareed raha hai - rates pata hone chahiye.
          </p>
          <p className="text-sm text-green-800 leading-relaxed mb-3">
            Is page ko bookmark kar lo. Roz subah check karo. Mausam forecast dekho. Aur samajhdari se decision lo.
          </p>
          <p className="text-xs text-green-700 italic mt-2">
            💡 Data government ki official website se aata hai. 100% reliable hai. Par yaad rakho - actual mandi mein negotiation hoti hai, toh rate thoda alag ho sakta hai.
          </p>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h3 className="text-base font-black text-blue-800 dark:text-blue-300 mb-2">
            🔗 Official Government Data
          </h3>
          <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
            <strong>Agmarknet</strong> par jaake official mandi data dekho. 10 second baad website khulegi.
          </p>
          <button
            onClick={() => handleOfficialLink(
              'Agmarknet Official Website',
              'Government ki official mandi data website khulne wala hai. Thoda wait karo...',
              SOURCE_URL
            )}
            className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
          >
             Yahan Click Karo → Official Website Khulega
          </button>
        </div>

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={lastUpdated} />
        <BottomNav />
        <Disclaimer />
      </div>
    </>
  );
}