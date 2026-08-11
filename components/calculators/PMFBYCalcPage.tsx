'use client';

import { useState } from 'react';
import Link from 'next/link';
import { InputField, SelectField, ResultRow, fmt, OtherCalcs, CalcHeader, CalcDisclaimer } from './CalcShared';

const SITE_URL = 'https://kisanstatus.com';
const SITE_NAME = 'KisanStatus';
const AUTHOR_NAME = 'KisanStatus Team';
const AUTHOR_URL = `${SITE_URL}/about`;
const PUBLISHED = '2026-03-05T08:00:00+05:30';
const MODIFIED = '2026-07-09T08:00:00+05:30';

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

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
  const farmerPays = (totalCover * rate)/100;

  return (
    <>

      <CalcHeader
        emoji="🛡️"
        title="Fasal Bima Premium Calculator 2026"
        subtitle="PMFBY ka premium calculate karo — kitna dena padega, kitni subsidy milegi"
        breadcrumb="Fasal Bima Premium"
      />

      <div className="container-site max-w-2xl py-8">

        <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
          <span>✍️ <Link href="/about" className="underline hover:text-gray-700">{AUTHOR_NAME}</Link></span>
          <span>📅 {fmtDate(PUBLISHED)}</span>
          <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
        </div>

        <div className="mb-6 p-5 bg-amber-50 border border-amber-200 rounded-xl text-sm text-gray-700 leading-relaxed">
          <p className="font-bold text-amber-900 mb-2">🛡️ Fasal Bima — Kharab Fasal Par Bhi Paisa Milega</p>
          <p className="mb-2">
            <strong>PMFBY (Pradhan Mantri Fasal Bima Yojana)</strong> ka idea simple hai — sukha, baadh, keede ya toofan se fasal kharab ho jaye, toh government aapko uska compensation deti hai.
          </p>
          <p className="mb-2">
            Sabse achhi baat iska premium hai — kisan ka hissa sirf <strong>1.5% se 5%</strong> tak hota hai, baaki poora amount government khud bharti hai.
          </p>
          <p className="mb-2">
            Ek udaharan lein: gehun ke liye ₹50,000 per hectare ka insurance liya (1.5% rate par), toh aapki jeb se sirf <strong>₹750 per hectare</strong> jayega — actual premium isse kahin zyada hota hai, aur us baaki hisse ko government bharti hai.
          </p>
          <p className="text-xs text-amber-700 mt-3">
            💡 KCC loan liya hai toh fasal bima automatically compulsory ho jata hai — loan ke saath hi premium kat jata hai.
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
              <ResultRow label="Aap Kitna Denge (Aapka Premium)" value={fmt(Math.max(0,farmerPays))} bold highlight />
              <p className="text-[11px] text-amber-700 mt-2">🎁 Actual premium isse zyada hota hai — baaki hissa government bharti hai (amount district notification par depend karta hai)</p>

              <div className="mt-3 pt-3 border-t border-amber-200">
                <p className="text-xs text-amber-800">
                  🛡️ Agar fasal kharab hui to maximum compensation: <strong>{fmt(totalCover)}</strong>
                </p>
              </div>

              <div className="mt-3 p-3 bg-white rounded-xl text-xs text-gray-700">
                <p className="font-bold mb-1">📖 Iska Matlab:</p>
                <p>Aapne {cropData.name} ka insurance liya {fmt(totalCover)} ka. Aapka share {rate}% hai, yani aapko sirf {fmt(Math.max(0,farmerPays))} dena padega — baaki premium government bharti hai. Agar fasal kharab hui to {fmt(totalCover)} tak claim mil sakta hai.</p>
              </div>
            </div>
          )}

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

        <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <h3 className="font-black text-gray-900 text-sm mb-4">⚡ Fasal Kharab Ho Jaye To Claim Kaise Le?</h3>
          <div className="space-y-3">
            {[
              {n:1,s:'Fasal kharab ho toh der mat karo — 72 ghante ke andar bank ya insurance company ko inform kar do'},
              {n:2,s:'Fasal ki photos aur video le lo, jisme date aur location clearly dikhe — ye proof ka kaam karega'},
              {n:3,s:'PMFBY portal (pmfby.gov.in) ya mobile app se claim file kar do'},
              {n:4,s:'District Agriculture Officer ko bhi written complaint de dena, aur receipt le lena'},
              {n:5,s:'Uske baad government survey ke through loss ka estimate lagaya jata hai'},
              {n:6,s:'Sab theek raha toh 2-4 hafte mein compensation bank account mein aa jata hai'},
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

        <div className="mt-6">
          <h3 className="font-black text-gray-900 text-sm mb-3">💡 Fasal Bima Se Maximum Fayda Kaise Uthao</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-green-50 border border-green-200 rounded-xl">
              <p className="font-bold text-green-900 mb-1">⏰ Time Par Apply Karo</p>
              <p className="text-green-800">Enrollment window nikal gayi toh dobara mauka nahi milta — Kharif ke liye lagbhag July tak, Rabi ke liye December tak</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="font-bold text-blue-900 mb-1">📸 Photos Rakho</p>
              <p className="text-blue-800">Fasal healthy ho tab bhi aur kharab ho tab bhi photos lete rehna — claim ke waqt yahi proof kaam aata hai</p>
            </div>
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl">
              <p className="font-bold text-purple-900 mb-1">📱 App Use Karo</p>
              <p className="text-purple-800">PMFBY mobile app se apply karna faster hota hai, aur status bhi wahi se track kar sakte ho</p>
            </div>
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="font-bold text-amber-900 mb-1">🏦 Bank Se Pucho</p>
              <p className="text-amber-800">Sum insured district ke hisaab se badalta rahta hai, isliye apni bank branch se ek baar confirm kar lena behtar hai</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="font-bold text-yellow-900 text-sm mb-2">⚠️ Fasal Bima Mein Aksar Yeh Galtiyan Hoti Hain:</p>
          <ul className="space-y-1.5 text-xs text-yellow-800">
            <li>❌ Enrollment period miss kar dena — uske baad us season ke liye apply nahi ho pata</li>
            <li>❌ Photos na lena — claim ke waqt proof dikhane mein dikkat hoti hai</li>
            <li>❌ 72 ghante ke andar inform na karna — isse claim reject bhi ho sakta hai</li>
            <li>❌ Policy number ya receipt sambhal ke na rakhna — zaroorat par dhundna mushkil ho jata hai</li>
            <li>❌ Crop area ya type galat bata dena — isse bhi claim atak sakta hai</li>
          </ul>
        </div>

        <CalcDisclaimer note="Premium rates district-wise alag ho sakte hain. Sum insured bhi alag hota hai. Exact figures ke liye apni bank branch, CSC center ya pmfby.gov.in se confirm karo." />

        <OtherCalcs current="/calculator/pmfby-premium" />

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

        <div className="mt-6 p-5 bg-gray-50 border border-gray-200 rounded-xl">
          <p className="font-bold text-gray-900 text-sm mb-3">❓ Fasal Bima Ke Baare Mein Aksar Sawaal</p>
          <div className="space-y-3 text-xs">
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">PMFBY kya hai?</summary>
              <p className="mt-2 text-gray-700">PMFBY, yani Pradhan Mantri Fasal Bima Yojana, government ki crop insurance scheme hai. Sukha, baadh, keede ya toofan se fasal kharab ho jaye toh compensation milta hai, aur kisan ko sirf 1.5% se 5% tak hi premium dena padta hai — baaki government ka hissa hota hai.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">Fasal Bima ka premium kitna hai?</summary>
              <p className="mt-2 text-gray-700">Kharif crops (rice, maize, cotton) ke liye 2%, Rabi crops (gehun, sarson, dal) ke liye 1.5%, aur commercial crops ke liye 5% tak. Government subsidy ki wajah se aksar kisan ka hissa 2% tak hi rehta hai.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">Claim kaise karein?</summary>
              <p className="mt-2 text-gray-700">Fasal kharab hote hi 72 ghante ke andar bank ya insurance company ko batana zaroori hai. Photos lo, PMFBY app par claim file karo, aur District Agriculture Officer ko complaint bhi de do — usually 2-4 hafte mein compensation aa jata hai.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">Kya fasal bima compulsory hai?</summary>
              <p className="mt-2 text-gray-700">KCC loan liya hai toh haan, compulsory hai. Bina loan ke optional hai, par lena samajhdaari hai — sirf ₹500-1000 per hectare mein lakhon tak ka cover mil jata hai.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">Kitna compensation milta hai?</summary>
              <p className="mt-2 text-gray-700">Ye loss ke percentage par depend karta hai — 25% se zyada loss ho toh full sum insured milta hai, kam ho toh usi hisaab se partial. Maximum limit aapke sum insured amount tak hoti hai, jo generally ₹30,000-60,000 per hectare ke aas-paas hota hai.</p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}
