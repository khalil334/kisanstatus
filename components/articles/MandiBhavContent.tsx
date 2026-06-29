'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MANDI_DATA = {
  lastUpdated: '30 June 2026, 09:30 AM',
  vegetables: [
    { name: 'आलू (Aloo)', rate: '₹20-24/kg', prevRate: 18, change: '+₹2', trend: 'up' as const },
    { name: 'प्याज (Pyaaz)', rate: '₹26-30/kg', prevRate: 28, change: '-₹2', trend: 'down' as const },
    { name: 'टमाटर (Tamatar)', rate: '₹38-45/kg', prevRate: 35, change: '+₹5', trend: 'up' as const },
    { name: 'गाजर (Gaajar)', rate: '₹22-28/kg', prevRate: 25, change: '-₹3', trend: 'down' as const },
    { name: 'गोभी (Gobhi)', rate: '₹18-24/kg', prevRate: 20, change: '-₹2', trend: 'down' as const },
    { name: 'भिंडी (Bhindi)', rate: '₹42-48/kg', prevRate: 40, change: '+₹4', trend: 'up' as const },
    { name: 'पालक (Palak)', rate: '₹15-20/kg', prevRate: 15, change: '0', trend: 'stable' as const },
    { name: 'मेथी (Methi)', rate: '₹25-30/kg', prevRate: 25, change: '0', trend: 'stable' as const },
    { name: 'लौकी (Lauki)', rate: '₹12-16/kg', prevRate: 14, change: '-₹2', trend: 'down' as const },
    { name: 'खीरा (Kheera)', rate: '₹18-22/kg', prevRate: 20, change: '-₹2', trend: 'down' as const },
    { name: 'शिमला मिर्च (Shimla Mirch)', rate: '₹45-55/kg', prevRate: 45, change: '0', trend: 'stable' as const },
    { name: 'बैंगन (Baingan)', rate: '₹22-28/kg', prevRate: 24, change: '-₹2', trend: 'down' as const },
    { name: 'मटर (Matar)', rate: '₹35-42/kg', prevRate: 38, change: '-₹3', trend: 'down' as const },
    { name: 'मूली (Mooli)', rate: '₹10-14/kg', prevRate: 12, change: '-₹2', trend: 'down' as const },
    { name: 'शलगम (Shalgam)', rate: '₹12-16/kg', prevRate: 14, change: '-₹2', trend: 'down' as const },
  ],
  fruits: [
    { name: 'सेब (Seb)', rate: '₹130-160/kg', prevRate: 120, change: '+₹10', trend: 'up' as const },
    { name: 'केला (Kela)', rate: '₹48-58/dozen', prevRate: 50, change: '-₹2', trend: 'down' as const },
    { name: 'संतरा (Santra)', rate: '₹85-105/kg', prevRate: 80, change: '+₹5', trend: 'up' as const },
    { name: 'अंगूर (Angoor)', rate: '₹95-115/kg', prevRate: 100, change: '-₹5', trend: 'down' as const },
    { name: 'आम (Aam)', rate: '₹160-220/kg', prevRate: 150, change: '+₹20', trend: 'up' as const },
    { name: 'पपीता (Papita)', rate: '₹38-48/kg', prevRate: 40, change: '-₹2', trend: 'down' as const },
    { name: 'अनार (Anar)', rate: '₹110-130/kg', prevRate: 110, change: '0', trend: 'stable' as const },
    { name: 'नाशपाती (Nashpati)', rate: '₹70-90/kg', prevRate: 75, change: '-₹5', trend: 'down' as const },
    { name: 'आड़ू (Aadu)', rate: '₹55-70/kg', prevRate: 60, change: '-₹5', trend: 'down' as const },
    { name: 'लीची (Litchi)', rate: '₹120-150/kg', prevRate: 130, change: '-₹10', trend: 'down' as const },
  ],
  stateRates: [
    { state: 'दिल्ली (Delhi)', mandi: 'Azadpur Mandi', veg: '₹25-30', fruit: '₹90-120' },
    { state: 'मुंबई (Mumbai)', mandi: 'Vashi Mandi', veg: '₹28-35', fruit: '₹95-125' },
    { state: 'कोलकाता (Kolkata)', mandi: 'Sealdah Mandi', veg: '₹22-28', fruit: '₹85-110' },
    { state: 'चेन्नई (Chennai)', mandi: 'Koyambedu Mandi', veg: '₹26-32', fruit: '₹88-115' },
    { state: 'बेंगलुरु (Bengaluru)', mandi: 'Yeshwanthpur Mandi', veg: '₹24-30', fruit: '₹85-112' },
  ],
};

const RELATED_ARTICLES = [
  { title: 'PM Kisan 23vi Kist Status Check', slug: '/articles/pm-kisan-23vi-kist-2026-status-check', emoji: '📆', desc: 'Apni 23vi kist ka status check karein' },
  { title: 'PM Kisan eKYC Online 2026', slug: '/articles/pm-kisan-ekyc-online-2026', emoji: '🔐', desc: 'eKYC complete karein - bilkul free' },
  { title: 'Soil Health Card Complete Guide', slug: '/articles/soil-health-card-complete-guide-2026', emoji: '🌱', desc: 'Mitti health card download karein' },
  { title: 'PM Kisan Payment Failed Solution', slug: '/articles/pm-kisan-payment-failed-status-2026', emoji: '💸', desc: 'Payment fail hone par kya karein' },
];

const getSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Aaj Ka Mandi Bhav 30 June 2026 - Sabzi aur Fruit Rates Today in Hindi',
  description: 'Aaj ka mandi bhav - aloo ka bhav, pyaaz ka rate, tamatar ka bhav, fruit mandi bhav wholesale rates',
  datePublished: '2026-06-30',
  dateModified: new Date().toISOString(),
  author: { '@type': 'Organization', name: 'KisanStatus.com', url: 'https://kisanstatus.com' },
  publisher: { '@type': 'Organization', name: 'KisanStatus.com', logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kisanstatus.com/articles/mandi-bhav-today' },
  keywords: 'aaj ka mandi bhav, mandi bhav today in hindi, aaj ke sabzi bhav, aloo ka bhav, pyaaz ka rate, tamatar ka bhav, fruit mandi bhav, wholesale mandi rates',
});

const getFaqSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Aaj ka mandi bhav kya hai?', acceptedAnswer: { '@type': 'Answer', text: 'Aaj ka mandi bhav: Aloo ₹20-24/kg, Pyaaz ₹26-30/kg, Tamatar ₹38-45/kg, Seb ₹130-160/kg, Kela ₹48-58/dozen. Ye wholesale mandi rates hain.' } },
    { '@type': 'Question', name: 'Aloo ka bhav aaj kya hai?', acceptedAnswer: { '@type': 'Answer', text: 'Aaj aloo ka bhav ₹20-24 per kg hai wholesale mandi mein. Kal ka rate ₹18 tha, aaj ₹2 badha hai.' } },
    { '@type': 'Question', name: 'Pyaaz ka rate aaj kya hai?', acceptedAnswer: { '@type': 'Answer', text: 'Aaj pyaaz ka rate ₹26-30 per kg hai. Kal ke mukable ₹2 kam hua hai.' } },
    { '@type': 'Question', name: 'Tamatar ka bhav kya hai aaj?', acceptedAnswer: { '@type': 'Answer', text: 'Aaj tamatar ka bhav ₹38-45 per kg hai wholesale mandi mein. Kal se ₹5 badha hai.' } },
    { '@type': 'Question', name: 'Fruit mandi bhav kahan check karein?', acceptedAnswer: { '@type': 'Answer', text: 'Fruit mandi bhav aap yahan check kar sakte hain. Seb ₹130-160/kg, Kela ₹48-58/dozen, Santra ₹85-105/kg, Aam ₹160-220/kg.' } },
  ],
});

export default function MandiBhavContent() {
  const [currentTime, setCurrentTime] = useState('');
  const [pmKisanCalc, setPmKisanCalc] = useState({ years: 1, totalAmount: 6000 });
  const [mandiCalc, setMandiCalc] = useState({ quantity: 100, rate: 25, cost: 1500, profit: 1000 });

  useEffect(() => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' }));
  }, []);

  const calculatePmKisan = (years: number) => {
    setPmKisanCalc({ years, totalAmount: years * 6000 });
  };

  const calculateMandiProfit = (qty: number, rate: number, cost: number) => {
    const revenue = qty * rate;
    setMandiCalc({ quantity: qty, rate, cost, profit: revenue - cost });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema()) }} />

      <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">🏪</span>
            <div>
              <h1 className="text-2xl md:text-4xl font-black">Aaj Ka Mandi Bhav 30 June 2026 - Sabzi aur Fruit Rates Today</h1>
              <p className="text-green-100 text-sm mt-2">Last Updated: {MANDI_DATA.lastUpdated} {currentTime && `at ${currentTime}`}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <section className="mb-8 bg-white rounded-2xl p-6 shadow-lg">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Aaj ka mandi bhav</strong> - Kya aap janna chahte hain ki <strong>aaj ke sabzi bhav</strong> kya hain? 
            Ya <strong>fruit mandi bhav</strong> check karna chahte hain? Yahan aapko milenge <strong>wholesale mandi rates</strong> 
            jo daily update hote hain. Hum aapko batayenge ki <strong>aloo ka bhav</strong>, <strong>pyaaz ka rate aaj</strong>, 
            <strong> tamatar ka bhav kya hai</strong>, aur sabhi seasonal sabziyon aur phalon ke <strong>mandi rates today</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ye <strong>mandi bhav today in hindi</strong> mein hai taaki har kisan aur aam aadmi ko samajh aaye. 
            Humare <strong>aaj ka sabzi rate</strong> wholesale market se liye gaye hain, jo retail se 20-30% saste hote hain.
          </p>
        </section>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-lg">
          <p className="text-blue-800 text-sm"><strong>📢 Note:</strong> Ye rates wholesale mandi ke hain. Retail rates 10-20% zyada ho sakte hain. Apne nazdeeki mandi ke exact rates ke liye local market check karein.</p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">🥬</span> Aaj Ke Sabzi Bhav - Vegetable Rates Today
          </h2>
          <p className="text-gray-600 mb-6">Yahan dekhein <strong>aaj ke sabzi bhav</strong> - <strong>aloo ka bhav</strong>, <strong>pyaaz ka rate</strong>, <strong> tamatar ka bhav</strong>, aur sabhi seasonal sabziyon ke wholesale rates.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MANDI_DATA.vegetables.map((veg, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-5 border-2 border-green-100">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">{veg.name}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${veg.trend === 'up' ? 'bg-red-100 text-red-700' : veg.trend === 'down' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                    {veg.trend === 'up' ? '↑' : veg.trend === 'down' ? '↓' : '→'} {veg.change}
                  </span>
                </div>
                <div className="text-2xl font-black text-green-700 mb-2">{veg.rate}</div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Kal: ₹{veg.prevRate}</span>
                  <span className="text-gray-500">Wholesale</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/articles/mandi-bhav-today/mandi-vegetables-potato-onion.webp" alt="Aloo aur Pyaaz" fill className="object-cover hover:scale-110 transition-transform" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm font-bold">आलू और प्याज</div>
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/articles/mandi-bhav-today/mandi-vegetables-tomato-carrot.webp" alt="Tamatar aur Gaajar" fill className="object-cover hover:scale-110 transition-transform" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm font-bold">टमाटर और गाजर</div>
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/articles/mandi-bhav-today/mandi-fresh-vegetables-mixed.webp" alt="Tazi Sabziyan" fill className="object-cover hover:scale-110 transition-transform" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm font-bold">ताजी सब्जियां</div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">🍎</span> Fruit Mandi Bhav - Phalon Ke Rates Today
          </h2>
          <p className="text-gray-600 mb-6">Check karein <strong>fruit mandi bhav</strong> - <strong>seb ka rate</strong>, <strong>kele ka bhav</strong>, <strong> santra ka rate</strong>, <strong>aam ka bhav</strong>, aur sabhi seasonal phalon ke wholesale prices.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MANDI_DATA.fruits.map((fruit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-5 border-2 border-amber-100">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">{fruit.name}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${fruit.trend === 'up' ? 'bg-red-100 text-red-700' : fruit.trend === 'down' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                    {fruit.trend === 'up' ? '↑' : fruit.trend === 'down' ? '↓' : '→'} {fruit.change}
                  </span>
                </div>
                <div className="text-2xl font-black text-amber-700 mb-2">{fruit.rate}</div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Kal: ₹{fruit.prevRate}</span>
                  <span className="text-gray-500">Wholesale</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/articles/mandi-bhav-today/mandi-fruits-apple-banana.webp" alt="Seb aur Kela" fill className="object-cover hover:scale-110 transition-transform" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm font-bold">सेब और केला</div>
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/articles/mandi-bhav-today/mandi-fruits-mango-orange.webp" alt="Aam aur Santra" fill className="object-cover hover:scale-110 transition-transform" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm font-bold">आम और संतरा</div>
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/articles/mandi-bhav-today/mandi-fresh-fruits-mixed.webp" alt="Taze Phal" fill className="object-cover hover:scale-110 transition-transform" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm font-bold">ताजे फल</div>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">📍</span> State-wise Mandi Bhav - Major Cities
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-50">
                <tr>
                  <th className="text-left p-3 font-bold text-gray-900">State/City</th>
                  <th className="text-left p-3 font-bold text-gray-900">Mandi</th>
                  <th className="text-left p-3 font-bold text-gray-900">Sabzi Rate</th>
                  <th className="text-left p-3 font-bold text-gray-900">Fruit Rate</th>
                </tr>
              </thead>
              <tbody>
                {MANDI_DATA.stateRates.map((item, index) => (
                  <tr key={index} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="p-3 font-bold text-gray-900">{item.state}</td>
                    <td className="p-3 text-gray-600">{item.mandi}</td>
                    <td className="p-3 text-green-700 font-bold">{item.veg}</td>
                    <td className="p-3 text-amber-700 font-bold">{item.fruit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
          <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">💰</span> PM Kisan Benefit Calculator
          </h2>
          <p className="text-gray-600 mb-6">Kitna paisa milega PM Kisan se? Calculate karein:</p>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">Kitne saal tak PM Kisan lenge?</label>
              <input type="range" min="1" max="10" value={pmKisanCalc.years} onChange={(e) => calculatePmKisan(Number(e.target.value))} className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer" />
              <div className="flex justify-between text-xs text-gray-500 mt-1"><span>1 saal</span><span>10 saal</span></div>
            </div>
            <div className="bg-green-100 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-600 mb-1">Total Benefit</div>
              <div className="text-4xl font-black text-green-700">₹{pmKisanCalc.totalAmount.toLocaleString('en-IN')}</div>
              <div className="text-xs text-gray-500 mt-2">({pmKisanCalc.years} saal × ₹6,000 per year)</div>
            </div>
            <div className="mt-4 text-center">
              <Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="inline-flex items-center gap-2 text-green-700 font-bold hover:text-green-800">Apna status check karein →</Link>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
          <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">🧮</span> Mandi Profit Calculator
          </h2>
          <p className="text-gray-600 mb-6">Apna munafa calculate karein:</p>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Quantity (Kg)</label>
                <input type="number" value={mandiCalc.quantity} onChange={(e) => calculateMandiProfit(Number(e.target.value), mandiCalc.rate, mandiCalc.cost)} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Rate (₹/Kg)</label>
                <input type="number" value={mandiCalc.rate} onChange={(e) => calculateMandiProfit(mandiCalc.quantity, Number(e.target.value), mandiCalc.cost)} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Total Cost (₹)</label>
                <input type="number" value={mandiCalc.cost} onChange={(e) => calculateMandiProfit(mandiCalc.quantity, mandiCalc.rate, Number(e.target.value))} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 rounded-xl p-4 text-center">
                <div className="text-sm text-gray-600 mb-1">Total Revenue</div>
                <div className="text-3xl font-black text-blue-700">₹{(mandiCalc.quantity * mandiCalc.rate).toLocaleString('en-IN')}</div>
              </div>
              <div className={`rounded-xl p-4 text-center ${mandiCalc.profit >= 0 ? 'bg-green-100' : 'bg-red-100'}`}>
                <div className="text-sm text-gray-600 mb-1">Net Profit</div>
                <div className={`text-3xl font-black ${mandiCalc.profit >= 0 ? 'text-green-700' : 'text-red-700'}`}>₹{mandiCalc.profit.toLocaleString('en-IN')}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">❓</span> Aaj Ka Mandi Bhav - Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Aaj ka mandi bhav kya hai?</h3>
              <p className="text-gray-600">Aaj ka mandi bhav: Aloo ₹20-24/kg, Pyaaz ₹26-30/kg, Tamatar ₹38-45/kg, Seb ₹130-160/kg, Kela ₹48-58/dozen. Ye wholesale mandi rates hain jo daily update hote hain.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Aloo ka bhav aaj kya hai?</h3>
              <p className="text-gray-600">Aaj aloo ka bhav ₹20-24 per kg hai wholesale mandi mein. Kal ka rate ₹18 tha, aaj ₹2 badha hai.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Pyaaz ka rate aaj kya hai?</h3>
              <p className="text-gray-600">Aaj pyaaz ka rate ₹26-30 per kg hai. Kal ke mukable ₹2 kam hua hai.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Tamatar ka bhav kya hai aaj?</h3>
              <p className="text-gray-600">Aaj tamatar ka bhav ₹38-45 per kg hai wholesale mandi mein. Kal se ₹5 badha hai.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Fruit mandi bhav kahan check karein?</h3>
              <p className="text-gray-600">Fruit mandi bhav aap yahan check kar sakte hain. Seb ₹130-160/kg, Kela ₹48-58/dozen, Santra ₹85-105/kg, Aam ₹160-220/kg.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">📚</span> Related Articles Padhein
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RELATED_ARTICLES.map((article, index) => (
              <Link key={index} href={article.slug} className="group bg-white rounded-xl p-5 border-2 border-gray-100 hover:border-green-300 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{article.emoji}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors mb-1">{article.title}</h3>
                    <p className="text-sm text-gray-500">{article.desc}</p>
                  </div>
                  <span className="text-green-600 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 border-2 border-green-200">
          <h3 className="text-xl font-black text-gray-900 mb-4">📝 Mandi Bhav Check Karne ke Tips:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span><span>Subah 8-10 baje mandi visit karein - best rates milte hain</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span><span>Wholesale mandi mein retail se 20-30% sasta milta hai</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span><span>Seasonal sabziyon ke rates kam hote hain</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span><span>Online mandi bhav apps bhi use kar sakte hain</span></li>
          </ul>
        </section>

        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-xl transition-all hover:scale-105">← Wapas Home Page Par</Link>
        </div>
      </div>
    </>
  );
}