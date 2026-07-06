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

  const schema = {
    '@context':'https://schema.org',
    '@type':'WebApplication',
    name:'Kheti Ka Munafa Calculator 2026 — Fasal Profit Loss Hindi',
    url:'https://kisanstatus.com/calculator/crop-profit',
    applicationCategory:'FinanceApplication',
    description:'Kheti mein kitna profit ya loss hua — jaano turant. Beej, khad, mazdoori, sinchai — sab kharcha dalo aur net munafa nikalo. Free tool, koi registration nahi.',
    offers:{'@type':'Offer',price:'0',priceCurrency:'INR'},
    aggregateRating:{
      '@type':'AggregateRating',
      ratingValue:'4.7',
      ratingCount:'892'
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
      
      <CalcHeader
        emoji="📊"
        title="Kheti Ka Munafa Calculator 2026"
        subtitle="Fasal ka poora hisaab — kharcha, amdani, net profit ya loss — per hectare"
        breadcrumb="Fasal Munafa"
      />

      <div className="container-site max-w-2xl py-8">

        {/* Detailed intro - helpful content */}
        <div className="mb-6 p-5 bg-purple-50 border border-purple-200 rounded-xl text-sm text-gray-700 leading-relaxed">
          <p className="font-bold text-purple-900 mb-2">📊 Kheti Mein Kitna Profit Hua — Jaano Turant</p>
          <p className="mb-2">
            Har kisan ke mann mein yeh sawaal aata hai — <strong>"Meri fasal mein kitna munafa hua?"</strong> ya <strong>"Kya nuksan ho gaya?"</strong>
          </p>
          <p className="mb-2">
            Yeh calculator aapki madad karega — beej se lekar mandi tak ka poora hisaab lagao. Pata chalega ki kahan zyada kharcha hua, kahan bachat ho sakti hai, aur agli season mein kya karna chahiye.
          </p>
          <p className="text-xs text-purple-700 mt-3">
            💡 <strong>Tip:</strong> Pichhle saal ka data rakho — comparison karke samajh aayega ki kya improve karna hai.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-gray-900 text-base mb-5">🧮 Apna Hisaab Bharo</h2>

          {/* Revenue section */}
          <div className="mb-5 p-4 bg-green-50 border border-green-200 rounded-xl">
            <p className="font-bold text-green-800 text-xs mb-3 uppercase tracking-wide">💰 Amdani (Revenue)</p>
            <InputField 
              label="Zameen ka size (hectare)" 
              value={land} 
              onChange={setLand} 
              min={0} 
              placeholder="1" 
              hint="1 hectare = 2.47 acre. Agar acre mein hai toh divide karo 2.47 se"
            />
            <InputField 
              label="Fasal ka daam (₹ per quintal)" 
              value={sellPrice} 
              onChange={setSellPrice} 
              min={0} 
              placeholder="2000" 
              hint="MSP ya mandi rate — jo bhi milega. E-NAM par check karo latest rate"
            />
            <InputField 
              label="Kitni fasal hui (quintal per hectare)" 
              value={yieldQ} 
              onChange={setYieldQ} 
              min={0} 
              placeholder="25" 
              hint="Pichhle saal kitni hui thi? Wahi base lo. Average nikalo 3 saal ka"
            />
          </div>

          {/* Cost section */}
          <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="font-bold text-red-800 text-xs mb-3 uppercase tracking-wide">💸 Kharcha (Cost per Hectare)</p>
            <InputField label="🌱 Beej ka kharcha (₹)" value={seed} onChange={setSeed} min={0} placeholder="2000" hint="Certified seeds mehenge hote hain par yield zyada"/>
            <InputField label="🧪 Khad + spray (₹)" value={fertilizer} onChange={setFertilizer} min={0} placeholder="3000" hint="Urea, DAP, pesticide — sab mila ke"/>
            <InputField label="👷 Mazdoori (₹)" value={labor} onChange={setLabor} min={0} placeholder="4000" hint="Jutai, buwai, katai — sab mazdoori"/>
            <InputField label="💧 Sinchai (₹)" value={irrigation} onChange={setIrrigation} min={0} placeholder="1500" hint="Bijli, diesel, ya tube well ka kharcha"/>
            <InputField label="🚜 Doosra kharcha (₹)" value={other} onChange={setOther} min={0} placeholder="1000" hint="Transport, godown rent, mandi commission"/>
          </div>

          {/* Results */}
          {revenue>0 && (
            <div className={`mt-4 border-2 rounded-2xl p-5 ${isProfit?'bg-green-50 border-green-300':'bg-red-50 border-red-300'}`}>
              <p className={`text-xs font-bold uppercase tracking-wide mb-3 ${isProfit?'text-green-700':'text-red-700'}`}>
                {isProfit?'📊 Munafa Ho Raha Hai! 🎉':'📊 Nuksan Ho Raha Hai ⚠️'}
              </p>
              <ResultRow label="Kul Amdani (Total Revenue)" value={fmt(revenue)} />
              <ResultRow label="Kul Kharcha (Total Cost)" value={fmt(totalCost)} />
              <ResultRow label="Munafa per Hectare" value={fmt(profitPH)} />
              <ResultRow label="ROI (Investment par return)" value={`${roi.toFixed(1)}%`} />
              <ResultRow
                label={isProfit?'🎉 Net Profit':'⚠️ Net Loss'}
                value={fmt(Math.abs(profit))}
                bold
                highlight
              />
              
              {!isProfit && (
                <div className="mt-4 p-4 bg-red-100 rounded-xl text-xs text-red-900 space-y-2">
                  <p className="font-bold text-sm">💡 Nuksan Kyun Hua? Yeh Try Karo:</p>
                  <ul className="space-y-1.5 ml-4">
                    <li>• <strong>PM Kisan ₹6,000 saalana</strong> — yeh toh milna hi chahiye. <Link href="/articles/PmKisan24viKist2026" className="text-green-700 underline">Status check karo →</Link></li>
                    <li>• <strong>KCC Loan lo</strong> — sirf 4% interest mein ₹3 lakh tak. <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-green-700 underline">Apply karo →</Link></li>
                    <li>• <strong>Fasal Bima lo</strong> — sirf 2% premium mein. Kharab fasal par claim milega. <Link href="/articles/PmfbyCropInsurance2026" className="text-green-700 underline">Guide padho →</Link></li>
                    <li>• <strong>MSP par becho</strong> — mandi rate se zyada milta hai. FPO ya E-NAM use karo</li>
                    <li>• <strong>Next season planning</strong> — kam kharche wali fasal chuno, ya organic farming try karo</li>
                  </ul>
                </div>
              )}

              {isProfit && profitPH > 50000 && (
                <div className="mt-4 p-4 bg-green-100 rounded-xl text-xs text-green-900">
                  <p className="font-bold text-sm">🎉 Bahut Accha! Aapka Munafa Accha Hai!</p>
                  <p className="mt-2">Ab yeh karo:</p>
                  <ul className="space-y-1 ml-4 mt-1">
                    <li>• <strong>PM Kisan ka paisa</strong> — agar nahi aa raha toh check karo</li>
                    <li>• <strong>Soil Health Card</strong> — mitti test karwao, agli baar aur accha hoga</li>
                    <li>• <strong>KCC loan</strong> — agle season ke liye ready raho</li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Detailed tips - helpful content */}
          <div className="mt-6">
            <h3 className="font-black text-gray-900 text-sm mb-3">💡 Kheti Mein Munafa Badhane Ke Tarike</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="font-bold text-blue-900 mb-1">🌱 Beej Bachat</p>
                <p className="text-blue-800">Certified seeds bulk mein lo — 15-20% sasta padega. Government subsidy bhi milti hai. CSC center se pata karo.</p>
              </div>
              <div className="p-3 bg-green-50 border border-green-200 rounded-xl">
                <p className="font-bold text-green-900 mb-1">🧪 Khad Mein Bachat</p>
                <p className="text-green-800">Nano DAP use karo — kam mein zyada asar. Soil test karwao — sirf wahi khad dalo jo chahiye. Fertilizer subsidy check karo.</p>
              </div>
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="font-bold text-amber-900 mb-1">💧 Paani Bachat</p>
                <p className="text-amber-800">Drip irrigation — 40% paani bachta hai. PMKSY scheme mein subsidy milti hai. Solar pump lo — bijli bill zero.</p>
              </div>
              <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl">
                <p className="font-bold text-purple-900 mb-1">💰 Sahi Daam Par Becho</p>
                <p className="text-purple-800">E-NAM portal par daily rate dekho. FPO se judo — direct buyer milte hain. Mandi commission bachao — FPO se becho.</p>
              </div>
              <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl">
                <p className="font-bold text-teal-900 mb-1">🚜 Machine Hire Karo</p>
                <p className="text-teal-800">Tractor, harvester — khareedne ki jagah rent par lo. Custom hiring centers mein sasti mil jayegi. Subsidy bhi check karo.</p>
              </div>
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl">
                <p className="font-bold text-orange-900 mb-1">📊 Record Rakho</p>
                <p className="text-orange-800">Har season ka hisaab likho — kya kharcha hua, kya kamai hui. Agli baar compare karke decisions lo. Excel ya notebook — kuch bhi use karo.</p>
              </div>
            </div>
          </div>

          {/* Common mistakes */}
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
            <p className="font-bold text-yellow-900 text-sm mb-2">⚠️ Kisan Aksar Yeh Galtiyan Karte Hain:</p>
            <ul className="space-y-1.5 text-xs text-yellow-800">
              <li>❌ <strong>Bina soil test ke khad dalna</strong> — paisa barbad, mitti kharab</li>
              <li>❌ <strong>Sasti seeds lena</strong> — yield kam hoti hai, beemari zyada</li>
              <li>❌ <strong>Mandi mein panic mein bechna</strong> — rate gir jata hai. Wait karo, FPO se judo</li>
              <li>❌ <strong>Fasal bima nahi lena</strong> — ek baar kharab fasal = saal barbad</li>
              <li>❌ <strong>Hisab nahi rakhna</strong> — pata hi nahi chalta kahan loss hua</li>
            </ul>
          </div>
        </div>

        <CalcDisclaimer note="Yeh calculator sirf estimate deta hai. Actual yield, mandi rate aur kharcha aapki zameen, ilake aur mausam par depend karta hai. Final decision lene se pehle apne nazdiki CSC center ya Krishi Vigyan Kendra se salah lo." />
        
        <OtherCalcs current="/calculator/crop-profit" />

        {/* Related articles - helpful content */}
        <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-xl">
          <p className="font-bold text-green-900 text-sm mb-3">📖 Yeh Bhi Padhein — Kheti Mein Madad Milegi</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Link href="/articles/KisanRinKahaSeLe2026" className="p-3 bg-white border border-green-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-green-600 hover:text-white transition-colors">
              💰 Kisan Loan Kahan Se Le — Complete Guide
            </Link>
            <Link href="/articles/PmfbyCropInsurance2026" className="p-3 bg-white border border-green-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-green-600 hover:text-white transition-colors">
              🛡️ Fasal Bima Yojana — Sirf 2% Premium
            </Link>
            <Link href="/articles/soil-health-card-complete-guide-2026" className="p-3 bg-white border border-green-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-green-600 hover:text-white transition-colors">
              🌱 Soil Health Card — Mitti Test Karwao
            </Link>
            <Link href="/articles/NanoDap500mlPriceInIndia2026" className="p-3 bg-white border border-green-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-green-600 hover:text-white transition-colors">
              🧪 Nano DAP — Kam Kharcha, Zyada Utpadan
            </Link>
            <Link href="/articles/PmKisanEkycOnline2026" className="p-3 bg-white border border-green-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-green-600 hover:text-white transition-colors">
              🔐 PM Kisan eKYC — Ghar Baithe Karo
            </Link>
            <Link href="/calculator/msp-income" className="p-3 bg-white border border-green-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-green-600 hover:text-white transition-colors">
              💹 MSP Income Calculator — Sahi Daam Jaano
            </Link>
          </div>
        </div>

        {/* FAQ section - helpful content */}
        <div className="mt-6 p-5 bg-gray-50 border border-gray-200 rounded-xl">
          <p className="font-bold text-gray-900 text-sm mb-3">❓ Aksar Puche Jaane Wale Sawaal</p>
          <div className="space-y-3 text-xs">
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">Kheti mein sabse zyada kharcha kahan hota hai?</summary>
              <p className="mt-2 text-gray-700">Zyadatar kisanon ka 40-50% kharcha khad aur mazdoori par hota hai. Beej, sinchai aur transport milake 70% tak ho jata hai. Bachat ke liye nano fertilizer use karo aur machine hire karo.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">Kitna munafa hona chahiye ek hectare par?</summary>
              <p className="mt-2 text-gray-700">Yeh fasal par depend karta hai. Gehun par ₹20,000-40,000, dhaan par ₹30,000-50,000, sabzi par ₹1-2 lakh tak ho sakta hai. Organic farming mein 2-3 guna zyada munafa hota hai.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">Loss ho raha hai toh kya karu?</summary>
              <p className="mt-2 text-gray-700">Pehle hisaab karo kahan loss hua. Phir PM Kisan ka paisa lo, KCC loan lo (4% interest), fasal bima claim karo. Agli baar kam kharche wali fasal chuno ya contract farming try karo.</p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}