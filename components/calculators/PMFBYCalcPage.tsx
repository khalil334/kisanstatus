'use client';

import { useState } from 'react';
import Link from 'next/link';
import { InputField, SelectField, ResultRow, fmt, OtherCalcs, CalcHeader, CalcDisclaimer } from './CalcShared';

// PMFBY premium rates — kharif aur rabi ke liye alag. Govt subsidy calculation yahan hoti hai.
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
  // Govt subsidy calculation — 2% se upar wala hissa government bharta hai
  const govShare   = totalCover*(rate>2?rate-2:0)/100;
  const farmerPays = premium - govShare;

  // Schema mein naye SEO keywords — "PMFBY Fasal Bima Premium Calculator" repetitive tha
  const schema = {
    '@context':'https://schema.org',
    '@type':'WebApplication',
    name:'Agricultural Yield Risk Coverage Analyzer 2026',
    url:'https://kisanstatus.com/calculator/pmfby-premium',
    applicationCategory:'FinanceApplication',
    description:'Crop protection scheme ki coverage fee estimate karo — kharif aur rabi dono seasons ke liye',
    offers:{'@type':'Offer',price:'0',priceCurrency:'INR'},
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
      
      {/* Title aur breadcrumb mein naye keywords — "PMFBY Premium" purana tha */}
      <CalcHeader
        emoji="🛡️"
        title="Crop Protection Premium Analyzer 2026"
        subtitle="Apni fasal ki coverage fee estimate karo — Kharif aur Rabi dono ke liye"
        breadcrumb="Crop Protection"
      />

      <div className="container-site max-w-2xl py-8">

        {/* Intro mein naye keywords — "PMFBY" repetitive tha */}
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-gray-700">
          <p><strong>🛡️ Agrarian Yield Risk Coverage</strong> mein fasal kharab hone par central administration compensation deti hai. Coverage fee bahut kam hai — <strong>sirf 1.5% to 5%</strong> aapko dena hota hai, baaki government bharta hai.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-gray-900 text-base mb-5">🧮 Fasal Details Bharo</h2>

          <SelectField
            label="Fasal (Crop)"
            value={crop} onChange={setCrop}
            options={Object.entries(PMFBY_RATES).map(([k,v])=>({value:k,label:v.name}))}
          />
          <SelectField
            label="Season"
            value={season} onChange={setSeason}
            options={[
              {value:'kharif',label:'🌧️ Kharif (June–October) — Dhan, Makka, Cotton'},
              {value:'rabi',  label:'❄️ Rabi (November–March) — Gehun, Sarson, Dal'},
            ]}
          />
          <InputField
            label="Sum Insured (₹ per hectare)"
            value={sumInsured} onChange={setSumInsured} min={1000} placeholder="50000"
            hint="Apne district ke actual sum insured ke liye bank ya CSC se pucho"
          />
          <InputField
            label="Zameen (hectare)"
            value={area} onChange={setArea} min={0.1} placeholder="1"
            hint="1 hectare = 2.47 acre = 10,000 sq meter"
          />

          {insured>0 && (
            <div className="mt-4 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5">
              {/* Result section mein naye keywords — "Fasal Bima Premium" purana tha */}
              <p className="text-xs text-amber-700 font-bold uppercase tracking-wide mb-3">
                📊 Aapki Coverage Fee — {cropData.name} ({season==='kharif'?'Kharif':'Rabi'})
              </p>
              {/* Naye labels — "Premium Rate" generic tha */}
              <ResultRow label={`Coverage Fee Rate (aapka share)`} value={`${rate}%`} />
              <ResultRow label="Total Coverage" value={fmt(totalCover)} />
              <ResultRow label="Total Fee" value={fmt(premium)} />
              <ResultRow label="🎁 Govt. Subsidy (estimate)" value={`-${fmt(govShare)}`} />
              <ResultRow label="Aap Kitna Bharenge" value={fmt(Math.max(0,farmerPays))} bold />
              <div className="mt-3 pt-3 border-t border-amber-200">
                <p className="text-xs text-amber-800">
                  🛡️ Fasal kharab hone par maximum compensation: <strong>{fmt(totalCover)}</strong>
                </p>
              </div>
            </div>
          )}

          {/* Claim process quick guide — naye keywords use kiye */}
          <div className="mt-5 p-4 bg-green-50 border border-green-200 rounded-xl">
            <p className="font-bold text-green-900 text-xs mb-2">⚡ Fasal Kharab Ho Jaaye To — Compensation Kaise Lein?</p>
            <div className="space-y-1.5 text-xs text-gray-700">
              {[
                '72 ghante mein bank ya insurance company ko inform karo',
                'Crop loss ki photos aur video lo — proof ke liye',
                'Kisan portal ya mobile app par indemnity file karo',
                'District Agriculture Officer ko written complaint do',
                'Survey ke baad 2-4 hafte mein compensation settle hota hai',
              ].map((s,i)=>(
                <p key={i} className="flex gap-2">
                  <span className="text-green-600 font-bold shrink-0">{i+1}.</span>{s}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Eligibility — naye keywords use kiye */}
        <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <h3 className="font-black text-gray-900 text-sm mb-3">✅ Crop Protection Ke Liye Eligible Koun Hai?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {[
              {t:'All cultivators',d:'Land owner aur tenant farmers dono'},
              {t:'Sabhi crops',d:'Kharif, Rabi, horticulture — sab cover'},
              {t:'Credit facility wale',d:'Compulsory enrollment for credit holders'},
              {t:'Non-credit',d:'Optional — khud apply kar sakte ho'},
            ].map(({t,d})=>(
              <div key={t} className="flex gap-2 p-2.5 bg-green-50 border border-green-100 rounded-lg">
                <span className="text-green-600 shrink-0">✓</span>
                <div><p className="font-bold text-gray-900">{t}</p><p className="text-gray-500">{d}</p></div>
              </div>
            ))}
          </div>
          {/* Link text mein naya keyword — "PMFBY Complete Guide" purana tha */}
          <Link href="/articles/pmfby-crop-insurance-2026"
            className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-green-700">
            📖 Crop Protection Complete Guide Padho →
          </Link>
        </div>

        <CalcDisclaimer note="Crop protection coverage fees district-wise alag hote hain. Exact figures ke liye apne bank, CSC center ya official portal se confirm karein." />
        <OtherCalcs current="/calculator/pmfby-premium" />
      </div>
    </>
  );
}