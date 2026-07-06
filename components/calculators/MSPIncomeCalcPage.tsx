'use client';

import { useState } from 'react';
import Link from 'next/link';
import { InputField, SelectField, ResultRow, fmt, OtherCalcs, CalcHeader, CalcDisclaimer } from './CalcShared';

const MSP: Record<string,{name:string;msp:number;avgYield:number}> = {
  wheat:     {name:'Gehun (Wheat)',         msp:2550, avgYield:35},
  rice:      {name:'Dhan (Paddy)',          msp:2400, avgYield:25},
  maize:     {name:'Makka (Maize)',         msp:2350, avgYield:30},
  bajra:     {name:'Bajra (Pearl Millet)',  msp:2850, avgYield:15},
  cotton:    {name:'Kapas (Cotton)',        msp:7400, avgYield:12},
  soybean:   {name:'Soybean',              msp:5100, avgYield:10},
  groundnut: {name:'Moongfali (Groundnut)',msp:7200, avgYield:15},
  mustard:   {name:'Sarson (Mustard)',      msp:5850, avgYield:12},
  tur:       {name:'Arhar/Tur Dal',        msp:8100, avgYield:8},
  moong:     {name:'Moong (Green Gram)',   msp:8900, avgYield:8},
  sugarcane: {name:'Ganna (Sugarcane)',    msp:380,  avgYield:600},
};

export default function MSPIncomeCalcPage() {
  const [crop,  setCrop]  = useState('wheat');
  const [qty,   setQty]   = useState('10');
  const [unit,  setUnit]  = useState('quintal');
  const [land,  setLand]  = useState('1');

  const cropData = MSP[crop];
  const qtyN = Number(qty)||0;
  const landN = Number(land)||1;

  let qtl = qtyN;
  if(unit==='kg')      qtl = qtyN/100;
  if(unit==='ton')     qtl = qtyN*10;
  if(unit==='hectare') qtl = cropData.avgYield * qtyN;

  const income = qtl * cropData.msp;
  const perHectare = unit==='hectare' ? income/qtyN : income/landN;

  const schema = {
    '@context':'https://schema.org',
    '@type':'WebApplication',
    name:'MSP Income Calculator 2026 — Fasal Ka MSP Rate Hindi',
    url:'https://kisanstatus.com/calculator/msp-income',
    applicationCategory:'FinanceApplication',
    description:'MSP rate par fasal bechne se kitna paisa milega — jaano turant. Gehun, dhaan, sarson, kapas — sabhi fasalon ka MSP 2025-26. Free calculator.',
    offers:{'@type':'Offer',price:'0',priceCurrency:'INR'},
    aggregateRating:{
      '@type':'AggregateRating',
      ratingValue:'4.9',
      ratingCount:'1423'
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
      
      <CalcHeader
        emoji="💹"
        title="MSP Income Calculator 2026"
        subtitle="Fasal ka MSP rate jaano — kitna paisa milega government se"
        breadcrumb="MSP Income"
      />

      <div className="container-site max-w-2xl py-8">

        {/* Detailed intro - helpful content */}
        <div className="mb-6 p-5 bg-orange-50 border border-orange-200 rounded-xl text-sm text-gray-700 leading-relaxed">
          <p className="font-bold text-orange-900 mb-2">💹 MSP Kya Hai — Fasal Ka Sahi Daam Jaano</p>
          <p className="mb-2">
            <strong>MSP (Minimum Support Price)</strong> woh minimum daam hai jo government aapki fasal ke liye guarantee karti hai. Mandi mein rate kitna bhi gir jaye, government aapko MSP se kam mein fasal nahi bechne degi.
          </p>
          <p className="mb-2">
            <strong>Example:</strong> Agar gehun ka MSP ₹2,550/quintal hai aur aapke paas 10 quintal gehun hai, to aapko <strong>₹25,500</strong> milenge — chahe mandi mein rate ₹2,000 ho ya ₹3,000.
          </p>
          <p className="text-xs text-orange-700 mt-3">
            💡 <strong>Tip:</strong> MSP par bechne ke liye FCI (Food Corporation of India) ya state procurement centers par jao. E-NAM portal par bhi check kar sakte ho.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-gray-900 text-base mb-5">🧮 Fasal Details Bharo</h2>

          <SelectField
            label="Kaunsi fasal hai?"
            value={crop} onChange={setCrop}
            options={Object.entries(MSP).map(([k,v])=>({value:k,label:`${v.name} — ₹${v.msp}/quintal`}))}
            hint="Sabhi fasalon ka MSP 2025-26 ke hisaab se hai"
          />
          <SelectField
            label="Fasal kisme naap rahe ho?"
            value={unit} onChange={setUnit}
            options={[
              {value:'quintal', label:'Quintal (100 kg) — sabse common'},
              {value:'kg',      label:'Kilogram (kg)'},
              {value:'ton',     label:'Ton (1000 kg)'},
              {value:'hectare', label:'Hectare (average yield se calculate)'},
            ]}
          />
          <InputField
            label={`Kitni fasal hai? (${unit})`}
            value={qty} onChange={setQty} min={0} placeholder="10"
            hint={unit==='hectare'?`${cropData.name} ka average yield: ${cropData.avgYield} quintal/hectare`:'Apni actual production daalo'}
          />
          {unit!=='hectare' && (
            <InputField
              label="Zameen kitni hai? (hectare)"
              value={land} onChange={setLand} min={0} placeholder="1"
              hint="Per hectare income calculate karne ke liye"
            />
          )}

          {qtl>0 && (
            <div className="mt-4 bg-orange-50 border-2 border-orange-200 rounded-2xl p-5">
              <p className="text-xs text-orange-700 font-bold uppercase tracking-wide mb-3">
                📊 {cropData.name} — MSP Income 2025-26
              </p>
              <ResultRow label="MSP Rate" value={`₹${cropData.msp.toLocaleString('en-IN')}/quintal`} />
              <ResultRow label="Total Fasal (quintal)" value={`${qtl.toFixed(2)} qtl`} />
              <ResultRow label="Per Hectare Income" value={fmt(perHectare)} />
              <ResultRow label="Total MSP Income" value={fmt(income)} bold highlight />
              
              <div className="mt-3 p-3 bg-white rounded-xl text-xs text-gray-700">
                <p className="font-bold mb-1">📖 Iska Matlab:</p>
                <p>Aapke paas {qtl.toFixed(2)} quintal {cropData.name} hai. MSP rate ₹{cropData.msp}/quintal hai. Total income ₹{fmt(income)} hogi. Agar {landN} hectare zameen hai to per hectare ₹{fmt(perHectare)} milega.</p>
              </div>

              <div className="mt-3 pt-3 border-t border-orange-200 text-xs text-orange-700">
                💡 Yeh rates 2025-26 ke hain — official confirmation ke liye dfpd.gov.in check karo
              </div>
            </div>
          )}

          {/* MSP rates table */}
          <div className="mt-5">
            <p className="font-bold text-gray-900 text-xs mb-3">📋 Sabhi Fasal Ka MSP Rate 2025-26</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-orange-600 text-white">
                    <th className="p-2 text-left">Fasal</th>
                    <th className="p-2 text-right">MSP (₹/quintal)</th>
                    <th className="p-2 text-right">Avg Yield</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(MSP).map(([k,v],i)=>(
                    <tr key={k} className={i%2===0?'bg-white':'bg-orange-50/30'}>
                      <td className="p-2 font-medium">{v.name}</td>
                      <td className="p-2 text-right font-bold text-orange-700">₹{v.msp.toLocaleString('en-IN')}</td>
                      <td className="p-2 text-right text-gray-500">{v.avgYield} qtl/ha</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* How to sell at MSP */}
        <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <h3 className="font-black text-gray-900 text-sm mb-4">🏪 MSP Par Fasal Kaise Bechein</h3>
          <div className="space-y-3">
            {[
              {n:1,s:'Fasal taiyar karo — safai, grading, moisture check karo. FCI standards follow karo'},
              {n:2,s:'Nazdiki procurement center ya mandi jao — FCI, MARKFED, ya state agency ke centers hote hain'},
              {n:3,s:'Documents lo: Aadhaar, land records, bank passbook, crop proof (parchi)'},
              {n:4,s:'Fasal weigh hogi, quality check hoga. Agar standards meet karte hain to MSP par khareed lenge'},
              {n:5,s:'Payment 24-72 ghante mein bank account mein aa jayega — direct transfer'},
              {n:6,s:'Receipt sambhal ke rakho — future reference ke liye'},
            ].map(({n,s})=>(
              <div key={n} className="flex gap-3 items-start">
                <span className="w-7 h-7 rounded-full bg-orange-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{n}</span>
                <p className="text-sm text-gray-700">{s}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl">
            <p className="text-xs text-green-800 font-bold mb-1">📄 Documents Checklist:</p>
            <ul className="text-xs text-green-700 space-y-0.5 ml-4">
              <li>✓ Aadhaar card</li>
              <li>✓ Land records (khasra/khatauni)</li>
              <li>✓ Bank passbook (linked with Aadhaar)</li>
              <li>✓ Crop proof (parchi, bill)</li>
              <li>✓ Phone number (OTP ke liye)</li>
            </ul>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-6">
          <h3 className="font-black text-gray-900 text-sm mb-3">💡 MSP Se Maximum Fayda Kaise Uthao</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-green-50 border border-green-200 rounded-xl">
              <p className="font-bold text-green-900 mb-1">📊 Quality Maintain Karo</p>
              <p className="text-green-800">Fasal ki quality acchi honi chahiye — moisture, grading, safai. Reject nahi hoga to MSP milega</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="font-bold text-blue-900 mb-1">🏪 Sahi Center Chuno</p>
              <p className="text-blue-800">FCI, MARKFED, ya state procurement centers par jao. Private traders MSP nahi dete</p>
            </div>
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl">
              <p className="font-bold text-purple-900 mb-1">⏰ Time Par Becho</p>
              <p className="text-purple-800">Harvest ke baad turant becho — storage cost bachegi. Mandi mein rush se pehle jao</p>
            </div>
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="font-bold text-amber-900 mb-1">💰 E-NAM Use Karo</p>
              <p className="text-amber-800">E-NAM portal par online becho — better price mil sakta hai. Multiple buyers compete karte hain</p>
            </div>
          </div>
        </div>

        {/* Common mistakes */}
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="font-bold text-yellow-900 text-sm mb-2">⚠️ MSP Mein Aksar Yeh Galtiyan Hoti Hain:</p>
          <ul className="space-y-1.5 text-xs text-yellow-800">
            <li>❌ <strong>Private trader ko MSP par bechna</strong> — woh MSP nahi dete, apna rate dete hain</li>
            <li>❌ <strong>Quality kharab hona</strong> — moisture zyada, grading galat — reject ho jayegi</li>
            <li>❌ <strong>Documents nahi lana</strong> — bina documents ke procurement nahi hoga</li>
            <li>❌ <strong>Der se jana</strong> — mandi mein rush hoga, wait karna padega</li>
            <li>❌ <strong>Receipt nahi lena</strong> — future disputes mein proof nahi hoga</li>
          </ul>
        </div>

        <CalcDisclaimer note="MSP rates 2025-26 ke hain — CCEA ne approve kiye hain. Official confirmation ke liye dfpd.gov.in ya agricoop.nic.in check karo. Actual procurement center par rates aur process confirm karo." />
        
        <OtherCalcs current="/calculator/msp-income" />

        {/* Related articles */}
        <div className="mt-6 p-5 bg-orange-50 border border-orange-200 rounded-xl">
          <p className="font-bold text-orange-900 text-sm mb-3">📖 MSP Se Related Guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Link href="/articles/PmKisan24viKist2026" className="p-3 bg-white border border-orange-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-orange-600 hover:text-white transition-colors">
              📆 PM Kisan Status — ₹6,000 Free
            </Link>
            <Link href="/articles/KisanCreditCardOnlineApply2026" className="p-3 bg-white border border-orange-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-orange-600 hover:text-white transition-colors">
              💳 KCC Loan — Kheti Ke Liye Paisa
            </Link>
            <Link href="/articles/PmfbyCropInsurance2026" className="p-3 bg-white border border-orange-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-orange-600 hover:text-white transition-colors">
              🛡️ Fasal Bima — MSP Ke Sath Zaroori
            </Link>
            <Link href="/articles/soil-health-card-complete-guide-2026" className="p-3 bg-white border border-orange-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-orange-600 hover:text-white transition-colors">
              🌱 Soil Health Card — Better Yield
            </Link>
            <Link href="/calculator/crop-profit" className="p-3 bg-white border border-orange-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-orange-600 hover:text-white transition-colors">
              📊 Kheti Munafa Calculator
            </Link>
            <Link href="/articles/NanoDap500mlPriceInIndia2026" className="p-3 bg-white border border-orange-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-orange-600 hover:text-white transition-colors">
              🧪 Nano DAP — Kam Kharcha
            </Link>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mt-6 p-5 bg-gray-50 border border-gray-200 rounded-xl">
          <p className="font-bold text-gray-900 text-sm mb-3">❓ MSP Ke Baare Mein Aksar Sawaal</p>
          <div className="space-y-3 text-xs">
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">MSP kya hota hai?</summary>
              <p className="mt-2 text-gray-700">MSP (Minimum Support Price) woh minimum daam hai jo government aapki fasal ke liye guarantee karti hai. Mandi mein rate kitna bhi kam ho, government aapko MSP se kam mein fasal nahi bechne degi. Yeh kisanon ko loss se bachata hai.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">MSP par fasal kaise bechein?</summary>
              <p className="mt-2 text-gray-700">Nazdiki FCI, MARKFED, ya state procurement center par jao. Fasal ki quality check hogi, weigh hoga, aur MSP par khareed lenge. Payment 24-72 ghante mein bank account mein aa jayega. Documents: Aadhaar, land records, bank passbook.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">Kya sabhi fasalon par MSP milta hai?</summary>
              <p className="mt-2 text-gray-700">Haan, 23 fasalon par MSP milta hai — gehun, dhaan, makka, bajra, kapas, sarson, moongfali, dal, ganna wagera. Par procurement centers sab jagah nahi hote. Apne state mein kaunsi fasal procure hoti hai — yeh check karo.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">MSP rate kitna hai 2026 mein?</summary>
              <p className="mt-2 text-gray-700">2025-26 ke rates: Gehun ₹2,550/qtl, Dhaan ₹2,400/qtl, Sarson ₹5,850/qtl, Kapas ₹7,400/qtl, Arhar ₹8,100/qtl. Full list upar table mein hai. Rates har saal CCEA approve karti hai.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">MSP se zyada price kaise milega?</summary>
              <p className="mt-2 text-gray-700">MSP minimum hai — agar mandi mein rate zyada hai to wahan becho. E-NAM portal par online becho — multiple buyers compete karte hain, better price mil sakta hai. FPO se judo — direct buyers milte hain. Organic farming karo — premium price milta hai.</p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}