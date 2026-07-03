'use client';

import { useState } from 'react';
import Link from 'next/link';
import { InputField, SelectField, ResultRow, fmt, OtherCalcs, CalcHeader, CalcDisclaimer } from './CalcShared';

export default function CropProfitCalcPage() {
  const [land,       setLand]       = useState('1');
  const [sellPrice,  setSellPrice]  = useState('2000');
  const [yieldQ,     setYieldQ]     = useState('25');
  const [seed,       setSeed]       = useState('2000');
  const [fertilizer, setFertilizer] = useState('3000');
  const [labor,      setLabor]      = useState('4000');
  const [irrigation, setIrrigation] = useState('1500');
  const [other,      setOther]      = useState('1000');

  const landN    = Number(land)||1;
  const revenue  = (Number(sellPrice)||0) * (Number(yieldQ)||0) * landN;
  const costPerH = (Number(seed)||0)+(Number(fertilizer)||0)+(Number(labor)||0)+(Number(irrigation)||0)+(Number(other)||0);
  const totalCost= costPerH * landN;
  const profit   = revenue - totalCost;
  const profitPH = profit/landN;
  const isProfit = profit>=0;
  const roi      = totalCost>0 ? (profit/totalCost)*100 : 0;

  // Schema mein naye SEO keywords use kiye hain — purane repetitive keywords nahi
  const schema = {
    '@context':'https://schema.org',
    '@type':'WebApplication',
    name:'Agricultural Yield Profit Analysis Tool 2026',
    url:'https://kisanstatus.com/calculator/crop-profit',
    applicationCategory:'FinanceApplication',
    description:'Kheti mein net profit ya loss estimate karo — seed se lekar selling tak poora hisaab',
    offers:{'@type':'Offer',price:'0',priceCurrency:'INR'},
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
      
      {/* Title mein naya keyword — "Crop Profit/Loss Calculator" purana tha */}
      <CalcHeader
        emoji="📊"
        title="Yield Profit/Loss Analyzer 2026"
        subtitle="Kheti mein poora hisaab — kharcha, amdani, net profit ya loss — per hectare"
        breadcrumb="Yield Analysis"
      />

      <div className="container-site max-w-2xl py-8">

        {/* Intro text mein naya keyword */}
        <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-xl text-sm text-gray-700">
          <p><strong>📊 Agricultural Yield Analyzer</strong> — ek fasal season mein sab kharcha aur amdani dalo, net profit ya loss instantly pata karo. Agli season ki planning ke liye helpful hai.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-gray-900 text-base mb-5">🧮 Apna Hisaab Bharo</h2>

          {/* Revenue section */}
          <div className="mb-5 p-4 bg-green-50 border border-green-200 rounded-xl">
            <p className="font-bold text-green-800 text-xs mb-3 uppercase tracking-wide">💰 Amdani (Revenue)</p>
            <InputField label="Zameen (hectare)" value={land} onChange={setLand} min={0} placeholder="1" hint="1 hectare = 2.47 acre"/>
            <InputField label="Selling price (₹ per quintal)" value={sellPrice} onChange={setSellPrice} min={0} placeholder="2000" hint="Procurement rate ya mandi rate — jo bhi milega"/>
            <InputField label="Expected yield (quintal per hectare)" value={yieldQ} onChange={setYieldQ} min={0} placeholder="25" hint="Pichhle saal kya hua tha use base karo"/>
          </div>

          {/* Cost section */}
          <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="font-bold text-red-800 text-xs mb-3 uppercase tracking-wide">💸 Kharcha (Cost per Hectare)</p>
            <InputField label="🌱 Beej kharcha (Seed cost) ₹" value={seed} onChange={setSeed} min={0} placeholder="2000"/>
            <InputField label="🧪 Khad + spray (Fertilizer + Pesticide) ₹" value={fertilizer} onChange={setFertilizer} min={0} placeholder="3000"/>
            <InputField label="👷 Mazdoori (Labor — jutai, katai) ₹" value={labor} onChange={setLabor} min={0} placeholder="4000"/>
            <InputField label="💧 Sinchai (Irrigation) ₹" value={irrigation} onChange={setIrrigation} min={0} placeholder="1500"/>
            <InputField label="🚜 Doosra kharcha (Transport, rent, other) ₹" value={other} onChange={setOther} min={0} placeholder="1000"/>
          </div>

          {/* Results */}
          {revenue>0 && (
            <div className={`mt-4 border-2 rounded-2xl p-5 ${isProfit?'bg-green-50 border-green-300':'bg-red-50 border-red-300'}`}>
              <p className={`text-xs font-bold uppercase tracking-wide mb-3 ${isProfit?'text-green-700':'text-red-700'}`}>
                {isProfit?'📊 Fayda Ho Raha Hai! 🎉':'📊 Nuksan Ho Raha Hai ⚠️'}
              </p>
              <ResultRow label="Total Revenue (Amdani)" value={fmt(revenue)} />
              <ResultRow label="Total Cost (Kharcha)" value={fmt(totalCost)} />
              {/* Naya keyword — "Yield Profit" use kiya */}
              <ResultRow label="Yield Profit per Hectare" value={fmt(profitPH)} />
              <ResultRow label="ROI (Return on Investment)" value={`${roi.toFixed(1)}%`} />
              <ResultRow
                label={isProfit?'🎉 Net Profit':'⚠️ Net Loss'}
                value={fmt(Math.abs(profit))}
                bold
              />
              {!isProfit && (
                <div className="mt-3 p-3 bg-red-100 rounded-xl text-xs text-red-800 space-y-1">
                  <p className="font-bold">💡 Nuksan kam karne ke tarike:</p>
                  {/* Naye keywords use kiye — purane repetitive keywords nahi */}
                  <p>• Agrarian welfare ₹6,000 saalana benefit le lo</p>
                  <p>• Credit facility loan low interest par lo — 7% subsidized</p>
                  <p>• Crop protection scheme karo — kharab hone par cover</p>
                  <p>• Procurement rate par sell karo mandi rate se zyada ho toh</p>
                </div>
              )}
            </div>
          )}

          {/* Tips — naye keywords use kiye */}
          <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
            {[
              {icon:'💡',tip:'Seed cost bachao',detail:'Certified seeds bulk mein lo — 15-20% sasta padega'},
              {icon:'💡',tip:'Labor cost kam karo',detail:'Machine hire karo — jab zyada mazdoor na mile'},
              {icon:'💡',tip:'Irrigation efficient',detail:'Drip irrigation — 40% paani aur bijli bachti hai'},
              {icon:'💡',tip:'Procurement rate par becho',detail:'E-NAM portal ya FPO se direct becho — better price'},
            ].map(({icon,tip,detail})=>(
              <div key={tip} className="p-2.5 bg-gray-50 border border-gray-200 rounded-xl">
                <p className="font-bold text-gray-900 flex gap-1"><span>{icon}</span>{tip}</p>
                <p className="text-gray-500 mt-0.5">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <CalcDisclaimer note="Yeh tool estimate provide karta hai. Actual yield, price aur costs local conditions par depend karti hain." />
        <OtherCalcs current="/calculator/crop-profit" />

        {/* Helpful Guides — naye SEO labels use kiye */}
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
          <p className="font-bold text-green-900 text-xs mb-2">📖 Helpful Guides</p>
          <div className="flex flex-wrap gap-2">
            {[
              {href:'/articles/kisan-rin-kaha-se-le-2026',   l:'💰 Credit Facility Guide'},
              {href:'/articles/pmfby-crop-insurance-2026',   l:'🛡️ Crop Protection Guide'},
              {href:'/articles/pm-kisan-ekyc-online-2026',   l:'🔐 Digital Verification Guide'},
              {href:'/calculator/msp-income',                 l:'💹 Procurement Rate Tool'},
            ].map(({href,l})=>(
              <Link key={href} href={href} className="text-xs px-3 py-1.5 bg-white border border-green-200 text-green-800 rounded-full hover:bg-green-600 hover:text-white transition-colors font-medium">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}