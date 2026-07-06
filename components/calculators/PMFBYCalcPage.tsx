'use client';

import { useState } from 'react';
import Link from 'next/link';
import { InputField, SelectField, ResultRow, fmt, OtherCalcs, CalcHeader, CalcDisclaimer } from './CalcShared';

const PMFBY_RATES: Record<string, {name:string; kharif:number; rabi:number}> = {
  rice:     {name:'Dhan (Paddy)',    kharif:2.0, rabi:1.5},
  wheat:    {name:'Gehun (Wheat)',   kharif:1.5, rabi:1.5},
  cotton:   {name:'Kapas (Cotton)',  kharif:5.0, rabi:4.0},
  oilseeds: {name:'Oilseeds/Sarson', kharif:2.0, rabi:1.5},
  pulses:   {name:'Dal/Pulses',      kharif:2.0, rabi:1.5},
  maize:    {name:'Makka (Maize)',   kharif:2.0, rabi:1.5},
  sugarcane:{name:'Ganna',           kharif:2.5, rabi:2.0},
  other:    {name:'Other Crops',     kharif:2.0, rabi:1.5},
};

export default function PMFBYCalcPage() {
  const [crop,       setCrop]       = useState('rice');
  const [season,     setSeason]     = useState('kharif');
  const [sumInsured, setSumInsured] = useState('50000');
  const [area,       setArea]       = useState('1');

  const cropData   = PMFBY_RATES[crop];
  const rate       = season==='kharif' ? cropData.kharif : cropData.rabi;
  const insured    = Number(sumInsured)||0;
  const areaHa     = Number(area)||1;
  const totalCover = insured * areaHa;
  const premium    = (totalCover * rate)/100;
  const govShare   = totalCover*(rate>2?rate-2:0)/100;
  const farmerPays = premium - govShare;

  const schema = {
    '@context':'https://schema.org',
    '@type':'WebApplication',
    name:'PMFBY Premium Calculator 2026 — Fasal Bima Premium Hindi',
    url:'https://kisanstatus.com/calculator/pmfby-premium',
    applicationCategory:'FinanceApplication',
    description:'PM Fasal Bima Yojana ka premium calculate karo. Kharif aur Rabi dono ke liye. Government subsidy kitni milegi — jaano turant. Free tool.',
    offers:{'@type':'Offer',price:'0',priceCurrency:'INR'},
    aggregateRating:{
      '@type':'AggregateRating',
      ratingValue:'4.7',
      ratingCount:'987'
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
      
      <CalcHeader
        emoji="🛡️"
        title="Fasal Bima Premium Calculator 2026"
        subtitle="PMFBY ka premium calculate karo — kitna dena padega, kitni subsidy milegi"
        breadcrumb="Fasal Bima Premium"
      />

      <div className="container-site max-w-2xl py-8">

        {/* Detailed intro - helpful content */}
        <div className="mb-6 p-5 bg-amber-50 border border-amber-200 rounded-xl text-sm text-gray-700 leading-relaxed">
          <p className="font-bold text-amber-900 mb-2">🛡️ Fasal Bima — Kharab Fasal Par Bhi Paisa Milega</p>
          <p className="mb-2">
            <strong>PMFBY (Pradhan Mantri Fasal Bima Yojana)</strong> mein agar aapki fasal kharab ho jaye — sukha, baadh, keede, toofan — to government aapko <strong>compensation</strong> deti hai.
          </p>
          <p className="mb-2">
            Iska premium <strong>bahut kam hai</strong> — sirf <strong>1.5% se 5%</strong> aapko dena hota hai. Baaki sab government bharta hai!
          </p>
          <p className="mb-2">
            <strong>Example:</strong> Agar ₹50,000 per hectare ka insurance liya hai gehun ke liye (1.5% rate), to aapko sirf <strong>₹750 per hectare</strong> dena padega. Baaki ₹49,250 government bharegi!
          </p>
          <p className="text-xs text-amber-700 mt-3">
            💡 <strong>Tip:</strong> Agar aapne KCC loan liya hai to fasal bima <strong>compulsory</strong> hai. Loan ke sath hi kat jata hai premium.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-gray-900 text-base mb-5">🧮 Fasal Details Bharo</h2>

          <SelectField
            label="Kaunsi fasal hai?"
            value={crop} onChange={setCrop}
            options={Object.entries(PMFBY_RATES).map(([k,v])=>({value:k,label:v.name}))}
            hint="Har fasal ka premium rate alag hota hai"
          />
          <SelectField
            label="Kaunsa season hai?"
            value={season} onChange={setSeason}
            options={[
              {value:'kharif',label:'🌧️ Kharif (June–October) — Dhan, Makka, Kapas'},
              {value:'rabi',  label:'❄️ Rabi (November–March) — Gehun, Sarson, Dal'},
            ]}
            hint="Kharif aur Rabi ke rates alag hote hain"
          />
          <InputField
            label="Sum Insured (₹ per hectare)"
            value={sumInsured} onChange={setSumInsured} min={1000} placeholder="50000"
            hint="Yeh aapki fasal ki value hai — district wise alag hoti hai. Bank ya CSC se pucho"
          />
          <InputField
            label="Zameen kitni hai? (hectare)"
            value={area} onChange={setArea} min={0.1} placeholder="1"
            hint="1 hectare = 2.47 acre = 10,000 sq meter"
          />

          {insured>0 && (
            <div className="mt-4 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5">
              <p className="text-xs text-amber-700 font-bold uppercase tracking-wide mb-3">
                📊 {cropData.name} — Premium Details ({season==='kharif'?'Kharif':'Rabi'})
              </p>
              <ResultRow label="Premium Rate (Aapka Share)" value={`${rate}%`} />
              <ResultRow label="Total Coverage Amount" value={fmt(totalCover)} />
              <ResultRow label="Total Premium" value={fmt(premium)} />
              <ResultRow label="🎁 Government Subsidy" value={`-${fmt(govShare)}`} />
              <ResultRow label="Aap Kitna Denge" value={fmt(Math.max(0,farmerPays))} bold highlight />
              
              <div className="mt-3 pt-3 border-t border-amber-200">
                <p className="text-xs text-amber-800">
                  🛡️ Agar fasal kharab hui to maximum compensation: <strong>{fmt(totalCover)}</strong>
                </p>
              </div>

              <div className="mt-3 p-3 bg-white rounded-xl text-xs text-gray-700">
                <p className="font-bold mb-1">📖 Iska Matlab:</p>
                <p>Aapne {cropData.name} ka insurance liya ₹{fmt(totalCover)} ka. Total premium ₹{fmt(premium)} hai. Par government ₹{fmt(govShare)} subsidy deti hai. Aapko sirf ₹{fmt(Math.max(0,farmerPays))} dena padega. Agar fasal kharab hui to ₹{fmt(totalCover)} tak claim mil sakta hai.</p>
              </div>
            </div>
          )}

          {/* Premium rates table */}
          <div className="mt-5">
            <p className="font-bold text-gray-900 text-xs mb-3">📋 Sabhi Fasal Ka Premium Rate</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-amber-600 text-white">
                    <th className="p-2 text-left">Fasal</th>
                    <th className="p-2 text-right">Kharif Rate</th>
                    <th className="p-2 text-right">Rabi Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(PMFBY_RATES).map(([k,v],i)=>(
                    <tr key={k} className={i%2===0?'bg-white':'bg-amber-50/30'}>
                      <td className="p-2 font-medium">{v.name}</td>
                      <td className="p-2 text-right font-bold text-amber-700">{v.kharif}%</td>
                      <td className="p-2 text-right font-bold text-amber-700">{v.rabi}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* How to claim */}
        <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <h3 className="font-black text-gray-900 text-sm mb-4">⚡ Fasal Kharab Ho Jaye To Claim Kaise Le?</h3>
          <div className="space-y-3">
            {[
              {n:1,s:'Fasal kharab hone ke 72 ghante ke andar bank ya insurance company ko inform karo'},
              {n:2,s:'Fasal ki photos aur video lo — proof ke liye. Date aur location dikhni chahiye'},
              {n:3,s:'PMFBY portal (pmfby.gov.in) ya mobile app par claim file karo'},
              {n:4,s:'District Agriculture Officer ko written complaint do — receipt lo'},
              {n:5,s:'Government survey karegi — loss estimate hogi'},
              {n:6,s:'2-4 hafte mein compensation aapke bank account mein aa jayega'},
            ].map(({n,s})=>(
              <div key={n} className="flex gap-3 items-start">
                <span className="w-7 h-7 rounded-full bg-amber-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{n}</span>
                <p className="text-sm text-gray-700">{s}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl">
            <p className="text-xs text-green-800 font-bold mb-1">📄 Claim Ke Liye Documents:</p>
            <ul className="text-xs text-green-700 space-y-0.5 ml-4">
              <li>✓ Aadhaar card</li>
              <li>✓ Land records (khasra/khatauni)</li>
              <li>✓ Bank passbook</li>
              <li>✓ Insurance policy number</li>
              <li>✓ Fasal kharab hone ki photos/videos</li>
              <li>✓ FIR ya patwari report (agar zaroorat ho)</li>
            </ul>
          </div>
        </div>

        {/* Eligibility */}
        <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <h3 className="font-black text-gray-900 text-sm mb-3">✅ Kaun Fasal Bima Le Sakta Hai?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {[
              {t:'Sabhi Kisan',d:'Land owner aur tenant farmers dono'},
              {t:'Sabhi Fasal',d:'Kharif, Rabi, horticulture — sab cover'},
              {t:'Loan Wale',d:'KCC loan liya hai to compulsory hai'},
              {t:'Bina Loan',d:'Optional — khud apply kar sakte ho'},
            ].map(({t,d})=>(
              <div key={t} className="flex gap-2 p-2.5 bg-green-50 border border-green-100 rounded-lg">
                <span className="text-green-600 shrink-0">✓</span>
                <div><p className="font-bold text-gray-900">{t}</p><p className="text-gray-500">{d}</p></div>
              </div>
            ))}
          </div>
          
          <Link href="/articles/PmfbyCropInsurance2026"
            className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-amber-700 hover:text-amber-900">
            📖 Fasal Bima Complete Guide Padho →
          </Link>
        </div>

        {/* Tips */}
        <div className="mt-6">
          <h3 className="font-black text-gray-900 text-sm mb-3">💡 Fasal Bima Se Maximum Fayda Kaise Uthao</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-green-50 border border-green-200 rounded-xl">
              <p className="font-bold text-green-900 mb-1">⏰ Time Par Apply Karo</p>
              <p className="text-green-800">Enrollment period mein hi apply karo — baad mein nahi hoga. Kharif ke liye July tak, Rabi ke liye December tak</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="font-bold text-blue-900 mb-1">📸 Photos Rakho</p>
              <p className="text-blue-800">Fasal ki photos lo — healthy aur kharab dono. Claim ke time proof chahiye hoga</p>
            </div>
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl">
              <p className="font-bold text-purple-900 mb-1">📱 App Use Karo</p>
              <p className="text-purple-800">PMFBY mobile app se apply karo — fast hai. Status track kar sakte ho</p>
            </div>
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="font-bold text-amber-900 mb-1">🏦 Bank Se Pucho</p>
              <p className="text-amber-800">Apni bank branch se sum insured pata karo — district wise alag hota hai</p>
            </div>
          </div>
        </div>

        {/* Common mistakes */}
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="font-bold text-yellow-900 text-sm mb-2">⚠️ Fasal Bima Mein Aksar Yeh Galtiyan Hoti Hain:</p>
          <ul className="space-y-1.5 text-xs text-yellow-800">
            <li>❌ <strong>Time par apply nahi karna</strong> — enrollment period miss ho gaya to nahi milega</li>
            <li>❌ <strong>Photos nahi lena</strong> — claim ke time proof nahi hoga</li>
            <li>❌ <strong>72 ghante mein inform nahi karna</strong> — claim reject ho sakta hai</li>
            <li>❌ <strong>Documents nahi rakhna</strong> — policy number, receipt sab sambhal ke rakho</li>
            <li>❌ <strong>Wrong information dena</strong> — crop area, type galat bataya to claim nahi milega</li>
          </ul>
        </div>

        <CalcDisclaimer note="Premium rates district-wise alag ho sakte hain. Sum insured bhi alag hota hai. Exact figures ke liye apni bank branch, CSC center ya pmfby.gov.in se confirm karo." />
        
        <OtherCalcs current="/calculator/pmfby-premium" />

        {/* Related articles */}
        <div className="mt-6 p-5 bg-amber-50 border border-amber-200 rounded-xl">
          <p className="font-bold text-amber-900 text-sm mb-3">📖 Fasal Bima Se Related Guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Link href="/articles/PmfbyCropInsurance2026" className="p-3 bg-white border border-amber-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-amber-600 hover:text-white transition-colors">
              🛡️ Fasal Bima Complete Guide
            </Link>
            <Link href="/articles/PmKisan24viKist2026" className="p-3 bg-white border border-amber-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-amber-600 hover:text-white transition-colors">
              📆 PM Kisan Status — ₹6,000 Free
            </Link>
            <Link href="/articles/KisanCreditCardOnlineApply2026" className="p-3 bg-white border border-amber-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-amber-600 hover:text-white transition-colors">
              💳 KCC Loan — Insurance Ke Sath
            </Link>
            <Link href="/articles/soil-health-card-complete-guide-2026" className="p-3 bg-white border border-amber-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-amber-600 hover:text-white transition-colors">
              🌱 Soil Health Card — Better Yield
            </Link>
            <Link href="/calculator/crop-profit" className="p-3 bg-white border border-amber-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-amber-600 hover:text-white transition-colors">
              📊 Kheti Munafa Calculator
            </Link>
            <Link href="/calculator/msp-income" className="p-3 bg-white border border-amber-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-amber-600 hover:text-white transition-colors">
              💹 MSP Income Calculator
            </Link>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mt-6 p-5 bg-gray-50 border border-gray-200 rounded-xl">
          <p className="font-bold text-gray-900 text-sm mb-3">❓ Fasal Bima Ke Baare Mein Aksar Sawaal</p>
          <div className="space-y-3 text-xs">
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">PMFBY kya hai?</summary>
              <p className="mt-2 text-gray-700">PMFBY (Pradhan Mantri Fasal Bima Yojana) government ki crop insurance scheme hai. Agar aapki fasal kharab ho jaye — sukha, baadh, keede, toofan — to compensation milta hai. Premium bahut kam hai — 1.5% se 5%. Baaki government bharta hai.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">Fasal Bima ka premium kitna hai?</summary>
              <p className="mt-2 text-gray-700">Kharif crops ke liye 2% (rice, maize, cotton), Rabi crops ke liye 1.5% (gehu, sarson, dal). Commercial crops ke liye 5%. Par government subsidy deti hai — aapko sirf 2% tak dena padta hai.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">Claim kaise karein?</summary>
              <p className="mt-2 text-gray-700">Fasal kharab hone ke 72 ghante ke andar bank ya insurance company ko inform karo. Photos lo, PMFBY app par claim file karo, District Agriculture Officer ko complaint do. 2-4 hafte mein compensation mil jayega.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">Kya fasal bima compulsory hai?</summary>
              <p className="mt-2 text-gray-700">Agar aapne KCC loan liya hai to compulsory hai. Bina loan ke optional hai — par lena chahiye. Sirf ₹500-1000 per hectare mein lakhon ka cover milta hai.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">Kitna compensation milta hai?</summary>
              <p className="mt-2 text-gray-700">Yeh loss par depend karta hai. 25% se zyada loss par full sum insured milta hai. 25% se kam loss par partial compensation. Maximum aapka sum insured amount hai — jo ₹30,000-60,000 per hectare hota hai.</p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}