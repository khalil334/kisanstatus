'use client';
import { useState } from 'react';
import Link from 'next/link';
import { InputField, SelectField, ResultRow, fmt, OtherCalcs, CalcHeader, CalcDisclaimer } from './CalcShared';

// ✅ UPDATED: 2025-26 MSP Rates (CCEA Approved)
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
    '@context':'https://schema.org','@type':'WebApplication',
    name:'MSP Income Calculator 2026',
    url:'https://kisanstatus.com/calculator/msp-income',
    applicationCategory:'FinanceApplication',
    description:'Minimum Support Price par fasal bechne se income calculate karo — 2025-26 MSP rates',
    offers:{'@type':'Offer',price:'0',priceCurrency:'INR'},
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
      <CalcHeader
        emoji="💹"
        title="MSP Income Calculator 2026"
        subtitle="Government Minimum Support Price par fasal bechne se kitna paisa milega"
        breadcrumb="MSP Income"
      />

      <div className="container-site max-w-2xl py-8">

        <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-xl text-sm text-gray-700">
          <p><strong>💹 MSP (Minimum Support Price)</strong> woh minimum rate hai jo government guaranteed karti hai apni fasal ke liye. Mandi mein rate kam ho toh bhi government MSP pe khareedegi.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-gray-900 text-base mb-5">🧮 Fasal Details Bharo</h2>

          <SelectField
            label="Fasal (Crop)"
            value={crop} onChange={setCrop}
            options={Object.entries(MSP).map(([k,v])=>({value:k,label:`${v.name} — ₹${v.msp}/qtl`}))}
          />
          <SelectField
            label="Quantity Unit"
            value={unit} onChange={setUnit}
            options={[
              {value:'quintal', label:'Quintal (100 kg) — sabse common'},
              {value:'kg',      label:'Kilogram (kg)'},
              {value:'ton',     label:'Metric Ton (1000 kg)'},
              {value:'hectare', label:'Hectare (average yield se calculate)'},
            ]}
          />
          <InputField
            label={`Quantity (${unit})`}
            value={qty} onChange={setQty} min={0} placeholder="10"
            hint={unit==='hectare'?`${cropData.name} ka average yield: ${cropData.avgYield} qtl/hectare`:'Apni actual production daalo'}
          />
          {unit!=='hectare' && (
            <InputField
              label="Aapki zameen (hectare)"
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
              <ResultRow label="Quantity (quintals)" value={`${qtl.toFixed(2)} qtl`} />
              <ResultRow label="Per Hectare Income" value={fmt(perHectare)} />
              <ResultRow label="Total MSP Income" value={fmt(income)} bold />
              <div className="mt-3 pt-3 border-t border-orange-200 text-xs text-orange-700">
                💡 Yeh rates 2025-26 ke hain — official confirmation ke liye agricoop.nic.in check karein
              </div>
            </div>
          )}

          {/* MSP rates table */}
          <div className="mt-5">
            <p className="font-bold text-gray-900 text-xs mb-3">📋 All Crops MSP 2025-26</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-orange-600 text-white">
                    <th className="p-2 text-left">Fasal</th>
                    <th className="p-2 text-right">MSP (₹/qtl)</th>
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

        <CalcDisclaimer note="MSP rates 2025-26 ke hain — official confirmation ke liye agricoop.nic.in check karein" />
        <OtherCalcs current="/calculator/msp-income" />
      </div>
    </>
  );
}