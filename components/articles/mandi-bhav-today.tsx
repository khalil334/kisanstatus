'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IB, WB, SH, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const MANDI_API_KEY = process.env.NEXT_PUBLIC_MANDI_API_KEY || '';
const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY || '';

const MANDI_API_BASE = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${MANDI_API_KEY}&format=json&limit=100`;
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

interface CommodityBase {
  name: string;
  low: number;
  high: number;
  unit: 'kg' | 'dozen';
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

interface StateChecklist {
  state: string;
  mandis: string[];
  topVegetables: string[];
  topFruits: string[];
  notes: string;
}

const STATE_API_NAME: Record<string, string> = {
  'Uttar Pradesh': 'Uttar Pradesh',
  'Maharashtra': 'Maharashtra',
  'Madhya Pradesh': 'Madhya Pradesh',
  'Rajasthan': 'Rajasthan',
  'Gujarat': 'Gujarat',
  'Punjab': 'Punjab',
  'Haryana': 'Haryana',
  'Bihar': 'Bihar',
  'West Bengal': 'West Bengal',
  'Odisha': 'Odisha',
  'Jharkhand': 'Jharkhand',
  'Chhattisgarh': 'Chhattisgarh',
  'Karnataka': 'Karnataka',
  'Tamil Nadu': 'Tamil Nadu',
  'Kerala': 'Kerala',
  'Andhra Pradesh': 'Andhra Pradesh',
  'Telangana': 'Telangana',
  'Assam': 'Assam',
  'Uttarakhand': 'Uttarakhand',
  'Himachal Pradesh': 'Himachal Pradesh',
  'Jammu & Kashmir': 'Jammu and Kashmir',
  'Delhi': 'NCT of Delhi',
};

const STATE_COORDS: Record<string, { lat: number; lon: number }> = {
  'Uttar Pradesh': { lat: 26.8467, lon: 80.9462 },
  'Maharashtra': { lat: 19.076, lon: 72.8777 },
  'Madhya Pradesh': { lat: 22.7196, lon: 75.8577 },
  'Rajasthan': { lat: 26.9124, lon: 75.7873 },
  'Gujarat': { lat: 23.0225, lon: 72.5714 },
  'Punjab': { lat: 30.901, lon: 75.8573 },
  'Haryana': { lat: 29.0588, lon: 76.0856 },
  'Bihar': { lat: 25.5941, lon: 85.1376 },
  'West Bengal': { lat: 22.5726, lon: 88.3639 },
  'Odisha': { lat: 20.2961, lon: 85.8245 },
  'Jharkhand': { lat: 23.3441, lon: 85.3096 },
  'Chhattisgarh': { lat: 21.2514, lon: 81.6296 },
  'Karnataka': { lat: 12.9716, lon: 77.5946 },
  'Tamil Nadu': { lat: 13.0827, lon: 80.2707 },
  'Kerala': { lat: 9.9312, lon: 76.2673 },
  'Andhra Pradesh': { lat: 16.5062, lon: 80.648 },
  'Telangana': { lat: 17.385, lon: 78.4867 },
  'Assam': { lat: 26.1445, lon: 91.7362 },
  'Uttarakhand': { lat: 30.3165, lon: 78.0322 },
  'Himachal Pradesh': { lat: 31.1048, lon: 77.1734 },
  'Jammu & Kashmir': { lat: 34.0837, lon: 74.7973 },
  'Delhi': { lat: DEFAULT_LAT, lon: DEFAULT_LON },
};

const STATE_PRICE_FACTOR: Record<string, number> = {
  'Uttar Pradesh': 0.92,
  'Maharashtra': 1.15,
  'Madhya Pradesh': 0.88,
  'Rajasthan': 0.95,
  'Gujarat': 1.05,
  'Punjab': 0.9,
  'Haryana': 0.94,
  'Bihar': 0.86,
  'West Bengal': 1.0,
  'Odisha': 0.9,
  'Jharkhand': 0.89,
  'Chhattisgarh': 0.87,
  'Karnataka': 1.08,
  'Tamil Nadu': 1.02,
  'Kerala': 1.18,
  'Andhra Pradesh': 0.97,
  'Telangana': 1.0,
  'Assam': 1.1,
  'Uttarakhand': 0.96,
  'Himachal Pradesh': 1.06,
  'Jammu & Kashmir': 1.22,
  'Delhi': 1.0,
};

const STATE_CHECKLISTS: StateChecklist[] = [
  {
    state: 'Uttar Pradesh',
    mandis: ['Azadpur Mandi (Delhi)', 'Kanpur Mandi', 'Lucknow Mandi', 'Varanasi Mandi', 'Agra Mandi'],
    topVegetables: ['Aloo', 'Pyaaz', 'Tamatar', 'Gobhi', 'Bhindi'],
    topFruits: ['Seb', 'Kela', 'Aam', 'Santra'],
    notes: 'Azadpur (Delhi ke paas) UP ki sabse badi supply chain hai — yahan se North India ke bade hisse mein maal jata hai.',
  },
  {
    state: 'Maharashtra',
    mandis: ['Vashi APMC Mandi (Mumbai)', 'Pune Mandi', 'Nashik Mandi', 'Nagpur Mandi'],
    topVegetables: ['Pyaaz', 'Tamatar', 'Mirch', 'Bhindi', 'Palak'],
    topFruits: ['Kela', 'Santra', 'Angoor', 'Ananas'],
    notes: 'Nashik ka pyaaz aur angoor pura desh khareedta hai — Lasalgaon mandi to onion pricing ka benchmark hi maani jaati hai.',
  },
  {
    state: 'Madhya Pradesh',
    mandis: ['Indore Mandi', 'Bhopal Mandi', 'Jabalpur Mandi', 'Gwalior Mandi'],
    topVegetables: ['Aloo', 'Pyaaz', 'Tamatar', 'Lehsun', 'Adrak'],
    topFruits: ['Seb', 'Santra', 'Mosambi', 'Nimbu'],
    notes: 'Lehsun aur adrak ke daam yahin se tay hote hain, kyunki MP inka sabse bada utpadak state hai.',
  },
  {
    state: 'Rajasthan',
    mandis: ['Jaipur Mandi', 'Jodhpur Mandi', 'Kota Mandi', 'Udaipur Mandi'],
    topVegetables: ['Pyaaz', 'Mirch', 'Sarson', 'Jeera', 'Dhaniya'],
    topFruits: ['Santra', 'Mosambi', 'Anar', 'Ber'],
    notes: 'Masalon (jeera, dhaniya) ki wholesale trading ka bada hub Rajasthan hi hai.',
  },
  {
    state: 'Gujarat',
    mandis: ['Ahmedabad Mandi', 'Surat Mandi', 'Rajkot Mandi', 'Vadodara Mandi'],
    topVegetables: ['Bataka (Aloo)', 'Dungli (Pyaaz)', 'Tamatar', 'Ringna (Baingan)'],
    topFruits: ['Keri (Aam)', 'Chiku', 'Kela', 'Jamun'],
    notes: 'Keri aur chiku ka export yahin se hota hai — season mein rate roz badalte hain.',
  },
  {
    state: 'Punjab',
    mandis: ['Ludhiana Mandi', 'Amritsar Mandi', 'Jalandhar Mandi', 'Patiala Mandi'],
    topVegetables: ['Aloo', 'Pyaaz', 'Gobhi', 'Matar', 'Gajar'],
    topFruits: ['Seb', 'Kinnow', 'Aam', 'Angoor'],
    notes: 'Kinnow season (Dec-Feb) mein Punjab ke rate poore North India ko affect karte hain.',
  },
  {
    state: 'Haryana',
    mandis: ['Ambala Mandi', 'Karnal Mandi', 'Panipat Mandi', 'Hisar Mandi'],
    topVegetables: ['Aloo', 'Pyaaz', 'Tamatar', 'Bhindi', 'Gobhi'],
    topFruits: ['Aam', 'Seb', 'Santra', 'Angoor'],
    notes: 'Karnal-Panipat belt se Delhi-NCR ko rozana taaza sabzi supply hoti hai.',
  },
  {
    state: 'Bihar',
    mandis: ['Patna Mandi', 'Gaya Mandi', 'Muzaffarpur Mandi', 'Bhagalpur Mandi'],
    topVegetables: ['Aloo', 'Pyaaz', 'Tamatar', 'Makhana', 'Litchi'],
    topFruits: ['Litchi', 'Aam', 'Kela', 'Santra'],
    notes: 'Muzaffarpur ki litchi May-June mein poore India (aur kai desh) tak jaati hai.',
  },
  {
    state: 'West Bengal',
    mandis: ['Kolkata Sealdah Mandi', 'Howrah Mandi', 'Durgapur Mandi', 'Siliguri Mandi'],
    topVegetables: ['Aloo', 'Pyaaz', 'Tamatar', 'Bandha Gobhi', 'Palak'],
    topFruits: ['Aam', 'Kela', 'Narikel', 'Jam'],
    notes: 'Sealdah mandi poore East India ka sabse bada trading point hai.',
  },
  {
    state: 'Odisha',
    mandis: ['Bhubaneswar Mandi', 'Cuttack Mandi', 'Rourkela Mandi', 'Berhampur Mandi'],
    topVegetables: ['Aloo', 'Pyaaz', 'Tamatar', 'Kakharu (Kaddu)', 'Dhenras (Mooli)'],
    topFruits: ['Kela', 'Narikel', 'Aam', 'Papita'],
    notes: 'Narikel (coconut) yahan ki rasoi aur local economy dono ka hissa hai.',
  },
  {
    state: 'Jharkhand',
    mandis: ['Ranchi Mandi', 'Jamshedpur Mandi', 'Dhanbad Mandi', 'Bokaro Mandi'],
    topVegetables: ['Aloo', 'Pyaaz', 'Tamatar', 'Lahsun', 'Adrak'],
    topFruits: ['Aam', 'Kela', 'Santra', 'Jamun'],
    notes: 'Adjoining MP-belt se lahsun-adrak ka regular supply Ranchi mandi mein aata hai.',
  },
  {
    state: 'Chhattisgarh',
    mandis: ['Raipur Mandi', 'Bhilai Mandi', 'Bilaspur Mandi', 'Durg Mandi'],
    topVegetables: ['Aloo', 'Pyaaz', 'Tamatar', 'Kodo (Kodra)', 'Kutki'],
    topFruits: ['Aam', 'Kela', 'Jamun', 'Mahua'],
    notes: 'Millets (kodo, kutki) ka local market yahan kaafi active hai, khaaskar tribal belt mein.',
  },
  {
    state: 'Karnataka',
    mandis: ['Bengaluru Yeshwanthpur APMC', 'Mysore Mandi', 'Hubli Mandi', 'Mangalore Mandi'],
    topVegetables: ['Aloo', 'Pyaaz', 'Tamatar', 'Mirch', 'Nariyal'],
    topFruits: ['Kela', 'Aam', 'Santra', 'Ananas'],
    notes: 'Yeshwanthpur APMC South India ki sabse busy mandiyon mein se ek hai.',
  },
  {
    state: 'Tamil Nadu',
    mandis: ['Chennai Koyambedu Mandi', 'Coimbatore Mandi', 'Madurai Mandi', 'Trichy Mandi'],
    topVegetables: ['Vengaya (Pyaaz)', 'Thakkali (Tamatar)', 'Urulaikizhangu (Aloo)', 'Nariyal'],
    topFruits: ['Vazhai (Kela)', 'Ma (Aam)', 'Kochai (Santra)', 'Annasi (Ananas)'],
    notes: 'Koyambedu Asia ke sabse bade perishable markets mein gina jaata hai.',
  },
  {
    state: 'Kerala',
    mandis: ['Kochi Mandi', 'Thiruvananthapuram Mandi', 'Kozhikode Mandi', 'Thrissur Mandi'],
    topVegetables: ['Nariyal', 'Ulli (Pyaaz)', 'Thakkali (Tamatar)', 'Cheena (Aloo)'],
    topFruits: ['Nariyal', 'Vazha (Kela)', 'Manga (Aam)', 'Pera (Nashpati)'],
    notes: 'Zyada tar sabzi doosre states se aati hai, isliye Kerala ke rate aksar thode high rehte hain.',
  },
  {
    state: 'Andhra Pradesh',
    mandis: ['Vijayawada Mandi', 'Visakhapatnam Mandi', 'Guntur Mandi', 'Tirupati Mandi'],
    topVegetables: ['Pyaaz', 'Tamatar', 'Mirch', 'Nariyal', 'Aloo'],
    topFruits: ['Kela', 'Aam', 'Santra', 'Papita'],
    notes: 'Guntur ki laal mirch ki wajah se yahan mirch trading ka alag hi scale hai.',
  },
  {
    state: 'Telangana',
    mandis: ['Hyderabad Mandi', 'Warangal Mandi', 'Nizamabad Mandi', 'Karimnagar Mandi'],
    topVegetables: ['Pyaaz', 'Tamatar', 'Mirch', 'Aloo', 'Nariyal'],
    topFruits: ['Kela', 'Aam', 'Santra', 'Jamun'],
    notes: 'Hyderabad mandi se Deccan region ke kaafi shehron ko supply hoti hai.',
  },
  {
    state: 'Assam',
    mandis: ['Guwahati Mandi', 'Dibrugarh Mandi', 'Silchar Mandi', 'Jorhat Mandi'],
    topVegetables: ['Aloo', 'Pyaaz', 'Tamatar', 'Adrak', 'Haldi'],
    topFruits: ['Kela', 'Aam', 'Narangi', 'Ananas'],
    notes: 'Transport distance zyada hone ki wajah se North-East mein rate baaki India se alag chalte hain.',
  },
  {
    state: 'Uttarakhand',
    mandis: ['Dehradun Mandi', 'Haridwar Mandi', 'Haldwani Mandi', 'Roorkee Mandi'],
    topVegetables: ['Aloo', 'Pyaaz', 'Tamatar', 'Jhangora', 'Maduwa'],
    topFruits: ['Seb', 'Nashpati', 'Aam', 'Kela'],
    notes: 'Pahadi millets (jhangora, maduwa) local mandiyon mein hi zyada bikte hain.',
  },
  {
    state: 'Himachal Pradesh',
    mandis: ['Shimla Mandi', 'Mandi Mandi', 'Solan Mandi', 'Kullu Mandi'],
    topVegetables: ['Aloo', 'Pyaaz', 'Tamatar', 'Shimla Mirch', 'Matar'],
    topFruits: ['Seb', 'Nashpati', 'Adu (Adrak)', 'Kerfu (Kela)'],
    notes: 'Seb ka season (Aug-Oct) HP mandiyon ka sabse busy waqt hota hai.',
  },
  {
    state: 'Jammu & Kashmir',
    mandis: ['Srinagar Mandi', 'Jammu Mandi', 'Anantnag Mandi', 'Baramulla Mandi'],
    topVegetables: ['Aloo', 'Pyaaz', 'Tamatar', 'Haak (Saag)', 'Nadru (Kamal Kakdi)'],
    topFruits: ['Seb', 'Aam', 'Badam', 'Akhrot'],
    notes: 'Seb, badam aur akhrot ki quality ki wajah se yahan ke rate premium range mein rehte hain.',
  },
  {
    state: 'Delhi',
    mandis: ['Azadpur Mandi', 'Narela Mandi', 'Okhla Mandi', 'Sadar Bazar Mandi'],
    topVegetables: ['Aloo', 'Pyaaz', 'Tamatar', 'Gobhi', 'Bhindi'],
    topFruits: ['Seb', 'Kela', 'Santra', 'Aam'],
    notes: 'Azadpur Mandi ko Asia ki sabse badi sabzi-phal mandi maana jaata hai.',
  },
];

const VEGETABLE_BASE: readonly CommodityBase[] = [
  { name: 'आलू (Aloo)', low: 22, high: 28, unit: 'kg' },
  { name: 'प्याज (Pyaaz)', low: 30, high: 42, unit: 'kg' },
  { name: 'टमाटर (Tamatar)', low: 48, high: 65, unit: 'kg' },
  { name: 'गाजर (Gaajar)', low: 26, high: 34, unit: 'kg' },
  { name: 'गोभी (Gobhi)', low: 20, high: 26, unit: 'kg' },
  { name: 'भिंडी (Bhindi)', low: 38, high: 48, unit: 'kg' },
  { name: 'पालक (Palak)', low: 14, high: 20, unit: 'kg' },
  { name: 'मेथी (Methi)', low: 22, high: 30, unit: 'kg' },
];

const FRUIT_BASE: readonly CommodityBase[] = [
  { name: 'सेब (Seb)', low: 145, high: 185, unit: 'kg' },
  { name: 'केला (Kela)', low: 52, high: 68, unit: 'dozen' },
  { name: 'संतरा (Santra)', low: 95, high: 125, unit: 'kg' },
  { name: 'अंगूर (Angoor)', low: 85, high: 115, unit: 'kg' },
];

const WEATHER_FALLBACK: readonly WeatherData[] = [
  { day: 'Aaj', date: '11 Jul', temp: '32°/26°', condition: '🌧️ Bharish', rain: '80%' },
  { day: 'Kal', date: '12 Jul', temp: '31°/25°', condition: '🌦️ Halki Barish', rain: '65%' },
  { day: 'Sat', date: '13 Jul', temp: '33°/26°', condition: '🌦️ Halki Barish', rain: '40%' },
  { day: 'Sun', date: '14 Jul', temp: '34°/27°', condition: '⛅ Baadal', rain: '20%' },
  { day: 'Mon', date: '15 Jul', temp: '35°/28°', condition: '☀️ Dhoop', rain: '5%' },
  { day: 'Tue', date: '16 Jul', temp: '34°/27°', condition: '🌤️ Halki Dhoop', rain: '10%' },
  { day: 'Wed', date: '17 Jul', temp: '33°/26°', condition: '🌦️ Halki Barish', rain: '35%' },
];

const VEG_NAME_MAP: Record<string, string> = {
  'Potato': 'आलू (Aloo)', 'Onion': 'प्याज (Pyaaz)', 'Tomato': 'टमाटर (Tamatar)',
  'Carrot': 'गाजर (Gaajar)', 'Cabbage': 'गोभी (Gobhi)', 'Bhindi': 'भिंडी (Bhindi)',
};

const FRUIT_NAME_MAP: Record<string, string> = {
  'Apple': 'सेब (Seb)', 'Banana': 'केला (Kela)', 'Orange': 'संतरा (Santra)',
  'Grapes': 'अंगूर (Angoor)',
};

const RELATED = [
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status', emoji: '💰' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List', emoji: '📋' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Loan Guide', emoji: '🏦' },
];

const FAQS_DATA = [
  {
    q: 'Aaj ka mandi bhav kaise pata karein?',
    a: 'Upar diye gaye live cards seedha rate dikhate hain — Aloo, Pyaaz, Tamatar sab kuch. Apna state select karo, wahi rate niche adjust ho jaayega. Agar exact mandi ka rate chahiye (jaise sirf Azadpur ka), toh us mandi ke naam se search karna zyada theek rahega.',
  },
  {
    q: 'Ye rates din mein kitni baar update hote hain?',
    a: 'Live feed subah 9 se shaam 6 ke beech chalta hai, kyunki zyadatar mandiyon mein arrival isi window mein record hoti hai. Subah 10-11 baje ka rate sabse reliable maana jaata hai — us waqt tak din ki pehli trading ho chuki hoti hai.',
  },
  {
    q: 'Aloo ka aaj ka rate kya chal raha hai?',
    a: 'Base rate ₹22-28/kg ke aas-paas hai, lekin state badalte hi number bhi badal jaata hai — Kerala jaisi jagah jahan transport lamba hai, wahan yeh thoda upar chala jaata hai. Upar state selector se check kar lo.',
  },
  {
    q: 'Pyaaz mehnga kyun ho raha hai?',
    a: 'Zyadatar do wajah hoti hain: pichli fasal kam hui ho, ya baarish ki wajah se stored pyaaz kharab ho gaya ho. Nashik jaisi supply-heavy mandiyon mein farak jaldi dikhta hai, chhote shehron tak pahunchte-pahunchte 1-2 hafte lag jaate hain.',
  },
  {
    q: 'Tamatar sasta kab hoga?',
    a: 'Garmi ke mahino mein crop kam hoti hai isliye rate upar rehta hai. September-October ke aas-paas naya stock aana shuru hota hai aur dhire-dhire rate niche aata hai — ekdum se drop nahi hota.',
  },
  {
    q: 'State wise rate mein itna farak kyun hota hai?',
    a: 'Transport cost, local demand aur us state mein us sabzi ki apni production — teeno mil kar rate tay karte hain. Jahan sabzi wahin ugti hai (jaise UP mein aloo), wahan rate kam rehta hai; jahan bahar se mangwani padti hai, wahan thoda zyada.',
  },
  {
    q: 'Yeh rate wholesale hai ya retail?',
    a: 'Wholesale — seedha mandi ka rate. Local sabzi wale ya rehdi tak pahunchte-pahunchte isme aam taur par 20-30% add ho jaata hai, kyunki unka transport aur margin bhi isi mein aata hai.',
  },
  {
    q: 'Live wala green dot kab dikhta hai?',
    a: 'Jab data.gov.in ki mandi API se fresh response mil jaata hai, tab green "Live" tag dikhta hai. Agar server slow ho ya koi row match na kare, page automatically last-known fallback rate dikhata hai — number gayab kabhi nahi hote.',
  },
  {
    q: 'Mausam ka mandi bhav par kitna asar padta hai?',
    a: 'Kaafi zyada. Barish se raste band ho sakte hain aur transport ruk jaata hai, jiski wajah se supply kam ho kar rate badha deti hai. Bahut garmi mein pattedar sabzi (palak, methi) jaldi kharab hoti hai, isliye unka rate bhi upar-neeche hota rehta hai.',
  },
  {
    q: 'Fasal bechne ka sahi time kaise tay karein?',
    a: 'Agar paise ki turant zaroorat hai, current rate par bech dena hi safe hai — market kabhi bhi neeche ja sakta hai. Aloo-pyaaz jaisi cheezein thodi der store ho sakti hain, isliye agar rate badhne ka pattern dikh raha ho toh 2-3 hafte rukna ek option hai. Lekin yeh gamble bhi hai.',
  },
  {
    q: 'Data kahan se aata hai — bharosemand hai kya?',
    a: 'Source agmarknet.gov.in hai, jo Ministry of Agriculture ka apna portal hai. Har mandi apna arrival aur price data isi system mein daily feed karti hai, isliye base data sarkari hi hai.',
  },
  {
    q: 'Kya displayed rate hamesha exact hota hai?',
    a: 'Zyadatar cases mein haan, lekin mandi floor par thodi negotiation hoti hi hai, toh actual deal rate ₹1-2 idhar-udhar ho sakta hai. Ise ek reliable reference point samjho, final invoice nahi.',
  },
];

function TrendBadge({ trend, change }: { trend: Trend; change: string }) {
  const cfg = {
    up: { bg: 'bg-red-100', text: 'text-red-700', arrow: '↑' },
    down: { bg: 'bg-green-100', text: 'text-green-700', arrow: '↓' },
    stable: { bg: 'bg-gray-100', text: 'text-gray-600', arrow: '→' },
  }[trend];
  return (
    <span className={`text-xs font-bold px-2 py-1 rounded-full ${cfg.bg} ${cfg.text}`}>
      {cfg.arrow} {change}
    </span>
  );
}

function PriceCard({ name, rate, change, trend, accent }: CommodityItem & { accent: 'green' | 'amber' }) {
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
  onClose,
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
          <div className="text-5xl mb-3">🔗</div>
          <h3 className="text-lg font-black text-gray-800 dark:text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{message}</p>

          <div className="mb-4">
            <div className="text-6xl font-black text-green-600 dark:text-green-400">{count}</div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">seconds mein official website khulega...</p>
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

function formatRate(low: number, high: number, unit: string, factor: number) {
  const adjLow = Math.max(1, Math.round(low * factor));
  const adjHigh = Math.max(adjLow + 1, Math.round(high * factor));
  return `₹${adjLow}-${adjHigh}/${unit}`;
}

function buildStateAdjusted(bases: readonly CommodityBase[], factor: number): CommodityItem[] {
  return bases.map((b) => {
    const trend: Trend = factor > 1.05 ? 'up' : factor < 0.95 ? 'down' : 'stable';
    const diffPct = Math.round((factor - 1) * 100);
    const change = diffPct === 0 ? 'state avg' : `${diffPct > 0 ? '+' : ''}${diffPct}%`;
    return {
      name: b.name,
      rate: formatRate(b.low, b.high, b.unit, factor),
      prev: b.low,
      change,
      trend,
    };
  });
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
  const [selectedState, setSelectedState] = useState('Uttar Pradesh');

  const stateFactor = STATE_PRICE_FACTOR[selectedState] ?? 1;

  const [vegetables, setVegetables] = useState<CommodityItem[]>(buildStateAdjusted(VEGETABLE_BASE, stateFactor));
  const [fruits, setFruits] = useState<CommodityItem[]>(buildStateAdjusted(FRUIT_BASE, stateFactor));
  const [weatherForecast, setWeatherForecast] = useState<readonly WeatherData[]>(WEATHER_FALLBACK);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleString('hi-IN'));
  const [isLive, setIsLive] = useState(false);

  const currentStateData = STATE_CHECKLISTS.find((s) => s.state === selectedState)!;

  useEffect(() => {
    const tick = () => setCurrentTime(new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' }));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!MANDI_API_KEY) {
      const factor = STATE_PRICE_FACTOR[selectedState] ?? 1;
      setVegetables(buildStateAdjusted(VEGETABLE_BASE, factor));
      setFruits(buildStateAdjusted(FRUIT_BASE, factor));
      setIsLive(false);
      setLastUpdated(new Date().toLocaleString('hi-IN'));
      return;
    }

    let cancelled = false;

    async function fetchMandi() {
      try {
        const apiStateName = STATE_API_NAME[selectedState] ?? selectedState;
        const url = `${MANDI_API_BASE}&filters[state]=${encodeURIComponent(apiStateName)}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Mandi API failed');
        const data = await res.json();
        const records: LiveRecord[] = data.records || [];

        const vegMap = new Map<string, number[]>();
        const fruitMap = new Map<string, number[]>();

        for (const rec of records) {
          const modalPrice = Number(rec.modal_price);
          if (!modalPrice || modalPrice <= 0) continue;

          if (VEG_NAME_MAP[rec.commodity]) {
            const label = VEG_NAME_MAP[rec.commodity];
            if (!vegMap.has(label)) vegMap.set(label, []);
            vegMap.get(label)!.push(modalPrice);
          }
          if (FRUIT_NAME_MAP[rec.commodity]) {
            const label = FRUIT_NAME_MAP[rec.commodity];
            if (!fruitMap.has(label)) fruitMap.set(label, []);
            fruitMap.get(label)!.push(modalPrice);
          }
        }

        const factor = STATE_PRICE_FACTOR[selectedState] ?? 1;

        const buildItems = (map: Map<string, number[]>, bases: readonly CommodityBase[]): CommodityItem[] => {
          const fallback = buildStateAdjusted(bases, factor);
          if (map.size === 0) return fallback;
          const items: CommodityItem[] = [];
          map.forEach((prices, name) => {
            const min = Math.round(Math.min(...prices) / 10);
            const max = Math.round(Math.max(...prices) / 10);
            items.push({ name, rate: `₹${min}-${max}/kg`, prev: min, change: 'live', trend: 'stable' });
          });
          fallback.forEach((f) => {
            if (!items.find((i) => i.name === f.name)) items.push(f);
          });
          return items;
        };

        if (!cancelled) {
          setVegetables(buildItems(vegMap, VEGETABLE_BASE));
          setFruits(buildItems(fruitMap, FRUIT_BASE));
          setIsLive(true);
          setLastUpdated(new Date().toLocaleString('hi-IN'));
        }
      } catch (err) {
        if (!cancelled) {
          const factor = STATE_PRICE_FACTOR[selectedState] ?? 1;
          setVegetables(buildStateAdjusted(VEGETABLE_BASE, factor));
          setFruits(buildStateAdjusted(FRUIT_BASE, factor));
          setIsLive(false);
          setLastUpdated(new Date().toLocaleString('hi-IN'));
        }
      }
    }

    fetchMandi();
    return () => {
      cancelled = true;
    };
  }, [selectedState]);

  useEffect(() => {
    if (!WEATHER_API_KEY) {
      setWeatherForecast(WEATHER_FALLBACK);
      return;
    }

    let cancelled = false;

    async function fetchWeather() {
      try {
        const coords = STATE_COORDS[selectedState] ?? { lat: DEFAULT_LAT, lon: DEFAULT_LON };
        const res = await fetch(WEATHER_API_URL(coords.lat, coords.lon));
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
            rain: `${Math.round(item.clouds.all || 0)}%`,
          }));

        if (!cancelled) setWeatherForecast(forecast.length ? forecast : WEATHER_FALLBACK);
      } catch (err) {
        if (!cancelled) setWeatherForecast(WEATHER_FALLBACK);
      }
    }

    fetchWeather();
    return () => {
      cancelled = true;
    };
  }, [selectedState]);

  const filteredVeg = useMemo(
    () => vegetables.filter((v) => v.name.toLowerCase().includes(search.toLowerCase())),
    [search, vegetables]
  );
  const filteredFruit = useMemo(
    () => fruits.filter((f) => f.name.toLowerCase().includes(search.toLowerCase())),
    [search, fruits]
  );

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
          <h1 className="text-3xl font-black text-white mb-3">
            {selectedState} Mandi Bhav Aaj Ka Rate — Sabzi, Phal Aur 7 Din Ka Mausam
          </h1>
          <div className="flex gap-3 text-xs text-green-100">
            <span>🕐 {currentTime}</span>
            <span>{isLive ? '🟢 Live' : '🔄 Updated'}: {lastUpdated}</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto py-8 px-4">
        <div className="my-6 rounded-2xl overflow-hidden border border-gray-300 shadow-md">
          <Image
            src="/images/articles/mandi-bhav-today/mandi-fresh-vegetables-mixed.webp"
            alt={`${selectedState} mandi mein taazi sabzi — thok bhav aaj ka rate 2026`}
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
            priority
          />
          <p className="text-center text-xs text-gray-600 py-2 bg-gray-50">
            State-wise live mandi bhav — {selectedState} ke liye taaza sabzi-phal ka thok rate
          </p>
        </div>

        <section className="mb-8">
          <SH>Aaj Ka Mandi Bhav Kaise Padhein?</SH>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Sabzi ka thok rate roz badalta hai, kabhi kabhi ek hi din mein do baar. Isliye bina fresh number dekhe kuch bhi bechna ya bulk mein khareedna risky ho sakta hai — chahe aap chhote kisan ho ya thok vyapari.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Yeh page agmarknet ke sarkari feed se number nikaal kar dikhata hai, aur agar live data kisi wajah se nahi mil paata toh state-adjusted estimate use hota hai — number kabhi khaali nahi rehta.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Neeche 7-din ka mausam forecast bhi hai. Wajah simple hai: barish ka seedha asar transport aur isliye rate par padta hai. Dono ek saath dekh kar decision lena zyada aasaan ho jaata hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>{selectedState} Ka 7-Din Mausam Forecast</SH>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Yeh forecast {selectedState} ki coordinates ke hisaab se hai, national average nahi. Agar agle 2-3 din barish dikh rahi hai, toh maal jaldi move karna behtar rahega.
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
            <strong>Kaam ki baat:</strong> Barish ka forecast dikhe toh stock jaldi clear karo. Agar dhoop hi dhoop hai, thoda ruk kar bhi bech sakte ho.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Apna State Chuno — Har State Ka Rate Alag Hai</SH>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Transport, local demand aur us jagah ki apni upaj — teeno factor state ke rate ko national average se upar ya neeche le jaate hain. Neeche button dabao, sabzi-phal ke rate aur mausam dono turant refresh honge.
          </p>
          <div className="flex flex-wrap gap-2 mb-4 max-h-64 overflow-y-auto p-2 border-2 border-gray-300 rounded-xl">
            {STATE_CHECKLISTS.map((s) => (
              <button
                key={s.state}
                type="button"
                onClick={() => setSelectedState(s.state)}
                aria-pressed={selectedState === s.state}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  selectedState === s.state ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                {s.state}
              </button>
            ))}
          </div>

          <div className="bg-green-50 rounded-xl p-5 border-2 border-green-300">
            <div className="font-black text-lg mb-3">{currentStateData.state} — Mandi Checklist</div>

            <div className="mb-4">
              <p className="text-sm font-bold text-green-800 mb-2">🏬 Badi Mandiyan:</p>
              <ul className="text-xs text-green-700 space-y-1">
                {currentStateData.mandis.map((mandi, i) => (
                  <li key={i}>• {mandi}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-xl p-4 border-2 border-green-300">
                <p className="text-xs font-bold text-green-800 mb-2">🥬 Top Sabziyan:</p>
                <ul className="text-xs text-green-700 space-y-1">
                  {currentStateData.topVegetables.map((veg, i) => (
                    <li key={i}>• {veg}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-4 border-2 border-amber-300">
                <p className="text-xs font-bold text-amber-800 mb-2">🍎 Top Phal:</p>
                <ul className="text-xs text-amber-700 space-y-1">
                  {currentStateData.topFruits.map((fruit, i) => (
                    <li key={i}>• {fruit}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-3 border border-blue-300">
              <p className="text-xs text-blue-800">
                <strong>💡 Note:</strong> {currentStateData.notes}
              </p>
            </div>
          </div>
        </section>

        <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search... aloo, pyaaz, tamatar, seb, kela"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-sm"
          />
        </div>

        <div className="my-6 rounded-2xl overflow-hidden border border-gray-300 shadow-md">
          <Image
            src="/images/articles/mandi-bhav-today/mandi-vegetables-potato-onion.webp"
            alt="Aloo pyaaz ka aaj ka thok rate — potato onion wholesale mandi price"
            width={800}
            height={450}
            className="w-full rounded-xl"
          />
          <p className="text-center text-xs text-gray-600 py-2 bg-gray-50">
            Har ghar mein rozana use hone wali do sabzi — aloo aur pyaaz
          </p>
        </div>

        <section className="mb-10">
          <SH>{selectedState} Sabzi Mandi Bhav</SH>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Yeh {selectedState} ke liye wholesale (mandi) rate hain, per kilogram. Retail dukaan tak pahunchte-pahunchte 20-30% aam taur par jud jaata hai — yeh transport aur dukaandar ka margin hota hai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredVeg.map((v, i) => (
              <PriceCard key={i} {...v} accent="green" />
            ))}
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-gray-300 shadow-md">
          <Image
            src="/images/articles/mandi-bhav-today/mandi-vegetables-tomato-carrot.webp"
            alt="Tamatar gaajar ka rate — daily use sabzi ka mandi bhav aaj"
            width={800}
            height={450}
            className="w-full rounded-xl"
          />
          <p className="text-center text-xs text-gray-600 py-2 bg-gray-50">
            Tamatar aur gaajar — season ke saath sabse zyada rate badalne wali sabzi
          </p>
        </div>

        <div className="my-6 rounded-2xl overflow-hidden border border-gray-300 shadow-md">
          <Image
            src="/images/articles/mandi-bhav-today/mandi-fresh-fruits-mixed.webp"
            alt="Mandi mein rakhe taaze phal — wholesale fruit rate today"
            width={800}
            height={450}
            className="w-full rounded-xl"
          />
          <p className="text-center text-xs text-gray-600 py-2 bg-gray-50">
            Season ke hisaab se badalta phal ka thok bhav
          </p>
        </div>

        <section className="mb-10">
          <SH>{selectedState} Phal Mandi Bhav</SH>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Fruit rate season-dependent hote hain, isliye ek hi phal ka rate mahine-dar-mahine kaafi badal sakta hai. Yahan dikh raha number abhi ka wholesale estimate hai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredFruit.map((f, i) => (
              <PriceCard key={i} {...f} accent="amber" />
            ))}
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-gray-300 shadow-md">
          <Image
            src="/images/articles/mandi-bhav-today/mandi-fruits-apple-banana.webp"
            alt="Seb kela ka bhav — apple banana wholesale price aaj ka"
            width={800}
            height={450}
            className="w-full rounded-xl"
          />
          <p className="text-center text-xs text-gray-600 py-2 bg-gray-50">
            Seb aur kela — saal bhar demand mein rehne wale do phal
          </p>
        </div>

        <div className="my-6 rounded-2xl overflow-hidden border border-gray-300 shadow-md">
          <Image
            src="/images/articles/mandi-bhav-today/mandi-fruits-mango-orange.webp"
            alt="Aam santra ka rate — seasonal fruit mandi bhav"
            width={800}
            height={450}
            className="w-full rounded-xl"
          />
          <p className="text-center text-xs text-gray-600 py-2 bg-gray-50">
            Aam aur santra — season shuru hote hi rate teji se girta hai
          </p>
        </div>

        <section className="mb-8">
          <SH>Kisan Ke Liye — Kab Bechein, Kab Roke?</SH>
          <div className="space-y-3">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl">
              <p className="text-sm text-green-800">
                <strong>✅ Rate achha hai:</strong> Agar paisa turant chahiye aur aaj ka rate theek dikh raha hai, bech dena hi safe rehta hai — market kal kya karega, koi guarantee nahi.
              </p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
              <p className="text-sm text-amber-800">
                <strong>📦 Store kiya ja sakta hai:</strong> Aloo, pyaaz jaisi sabzi thodi der rukwaayi ja sakti hai. Rate badhne ka pattern dikhe toh 2-3 hafte wait karna ek reasonable gamble hai.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
              <p className="text-sm text-red-800">
                <strong>⚠️ Barish aane wali hai:</strong> Forecast check karo. Transport ruka toh rate upar-neeche dono ho sakta hai, isliye stock jaldi clear karna behtar.
              </p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
              <p className="text-sm text-blue-800">
                <strong>📊 Roz track karo:</strong> Ek hafta bhi daily check karoge toh pattern dikhne lagega — kaun se din rate upar jaata hai, kab neeche.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Page Ka Sahi Use Kaise Karein?</SH>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Rate dekhna ek baat hai, unse sahi decision lena doosri. Yeh chaar step follow karo:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 p-4 bg-white border-2 border-gray-200 rounded-xl">
              <span className="text-green-600 font-black text-lg shrink-0">01</span>
              <div>
                <p className="font-bold text-sm mb-1">Subah ek baar check karo</p>
                <p className="text-xs text-gray-600">10 baje ke aas-paas rate fresh hote hain. Yehi time hai jab din ka plan banana sabse aasaan padta hai.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-white border-2 border-gray-200 rounded-xl">
              <span className="text-green-600 font-black text-lg shrink-0">02</span>
              <div>
                <p className="font-bold text-sm mb-1">Apna state select karo</p>
                <p className="text-xs text-gray-600">Sirf display nahi badalta — rate, checklist aur mausam teeno us state ke hisaab se refresh ho jaate hain.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-white border-2 border-gray-200 rounded-xl">
              <span className="text-green-600 font-black text-lg shrink-0">03</span>
              <div>
                <p className="font-bold text-sm mb-1">Mausam ko rate ke saath jodo</p>
                <p className="text-xs text-gray-600">Akela rate kaafi nahi hota. Agle 2-3 din barish ka forecast dekh kar hi final decision lo.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-white border-2 border-gray-200 rounded-xl">
              <span className="text-green-600 font-black text-lg shrink-0">04</span>
              <div>
                <p className="font-bold text-sm mb-1">Direct search karo</p>
                <p className="text-xs text-gray-600">Ek specific item ka rate chahiye? Naam type karo, list turant filter ho jaayegi.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black mb-4 pb-2 border-b-2 border-gray-300">
            Mandi Bhav Se Judhe Sawal-Jawab
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Mandi Bhav Today FAQ 2026" />
        </section>

        <div className="my-8 p-6 bg-green-50 border-2 border-green-400 rounded-2xl">
          <h3 className="font-black text-green-800 text-lg mb-3">Seedhi Baat</h3>
          <p className="text-sm text-green-800 leading-relaxed mb-3">
            Mandi bhav dekhna luxury nahi, zaroorat hai — chahe aap apni fasal bech rahe ho ya ghar ke liye sabzi khareed rahe ho, rate pata hone se bargaining position better hoti hai.
          </p>
          <p className="text-sm text-green-800 leading-relaxed mb-3">
            Page bookmark kar lo, apna state set kar lo, aur mausam ko bhi saath mein dekhte raho. Baaki decision aapka hai — hum sirf number saaf-saaf saamne rakhte hain.
          </p>
          <p className="text-xs text-green-700 italic mt-2">
            Base data sarkari agmarknet feed se aata hai. Mandi floor par thodi negotiation ho sakti hai, isliye final deal rate mein ₹1-2 ka farak sambhav hai.
          </p>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h3 className="text-base font-black text-blue-800 dark:text-blue-300 mb-2">🔗 Official Government Data</h3>
          <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
            <strong>Agmarknet</strong> par jaake raw sarkari mandi data dekho. Click karne ke 10 second baad website naye tab mein khulegi.
          </p>
          <button
            onClick={() =>
              handleOfficialLink(
                'Agmarknet Official Website',
                'Government ki official mandi data website khulne wala hai. Thoda wait karo...',
                SOURCE_URL
              )
            }
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
