'use client';
/**
 * AgriCalculator.tsx — KisanStatus.com
 * Professional Indian Agriculture Calculator
 * Tools: PM Kisan Income, MSP Earnings, Crop Profit, Irrigation Cost, Loan EMI, Fertilizer
 * Author: KisanStatus Team
 */
import { useState } from 'react';

type Tab = 'pmkisan' | 'msp' | 'profit' | 'emi' | 'fertilizer' | 'irrigation';

const MSP: Record<string, { name: string; msp: number; unit: string }> = {
  wheat:       { name: 'Gehun (Wheat)',          msp: 2275,  unit: 'quintal' },
  paddy:       { name: 'Dhan (Paddy)',            msp: 2300,  unit: 'quintal' },
  maize:       { name: 'Makka (Maize)',           msp: 2225,  unit: 'quintal' },
  soybean:     { name: 'Soybean',                 msp: 4892,  unit: 'quintal' },
  cotton_med:  { name: 'Kapas (Cotton Med.)',     msp: 7121,  unit: 'quintal' },
  cotton_long: { name: 'Kapas (Cotton Long)',     msp: 7521,  unit: 'quintal' },
  groundnut:   { name: 'Moongfali (Groundnut)',   msp: 6783,  unit: 'quintal' },
  sunflower:   { name: 'Surajmukhi (Sunflower)',  msp: 7280,  unit: 'quintal' },
  arhar:       { name: 'Arhar (Tur Dal)',         msp: 7550,  unit: 'quintal' },
  moong:       { name: 'Moong (Green Gram)',      msp: 8682,  unit: 'quintal' },
  urad:        { name: 'Urad (Black Gram)',       msp: 7400,  unit: 'quintal' },
  bajra:       { name: 'Bajra (Pearl Millet)',    msp: 2625,  unit: 'quintal' },
  jowar:       { name: 'Jowar (Sorghum)',         msp: 3371,  unit: 'quintal' },
  mustard:     { name: 'Sarson (Mustard)',        msp: 5950,  unit: 'quintal' },
  gram:        { name: 'Chana (Gram)',            msp: 5440,  unit: 'quintal' },
  masur:       { name: 'Masoor (Lentil)',         msp: 6425,  unit: 'quintal' },
  sugarcane:   { name: 'Ganna (Sugarcane)',       msp: 340,   unit: 'quintal' },
};

function Inp({ label, value, onChange, placeholder, type = 'number', min, suffix }:
  { label: string; value: string | number; onChange: (v: string) => void; placeholder?: string; type?: string; min?: number; suffix?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1">{label}</label>
      <div className="relative">
        <input
          type={type} value={value} min={min}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full border border-[var(--color-border)] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary-light)] bg-[var(--color-card)] text-[var(--color-text)] pr-12 transition-colors"
        />
        {suffix && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--color-text-muted)] font-medium">{suffix}</span>}
      </div>
    </div>
  );
}

function Sel({ label, value, onChange, options }:
  { label: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1">{label}</label>
      <select value={value} onChange={e => onChange(e.target.value)}
        className="w-full border border-[var(--color-border)] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary-light)] bg-[var(--color-card)] text-[var(--color-text)] transition-colors">
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

function Result({ label, value, highlight, sub }: { label: string; value: string; highlight?: boolean; sub?: string }) {
  return (
    <div className={`flex items-center justify-between py-2.5 border-b border-[var(--color-border)] last:border-0 ${highlight ? 'bg-green-50 dark:bg-green-900/20 -mx-4 px-4 rounded-xl' : ''}`}>
      <span className="text-sm text-[var(--color-text-muted)]">{label}</span>
      <div className="text-right">
        <span className={`font-bold text-sm ${highlight ? 'text-green-700 dark:text-green-300 text-base' : 'text-[var(--color-text)]'}`}>{value}</span>
        {sub && <p className="text-[10px] text-[var(--color-text-muted)]">{sub}</p>}
      </div>
    </div>
  );
}

const fmt = (n: number) => `₹${Math.round(n).toLocaleString('en-IN')}`;

function PmKisanCalc() {
  const [land, setLand] = useState('2');
  const [reg, setReg] = useState('yes');
  const [ekyc, setEkyc] = useState('yes');
  const [years, setYears] = useState('5');

  const eligible = reg === 'yes' && ekyc === 'yes';
  const perYear = eligible ? 6000 : 0;
  const total = perYear * Number(years);
  const kists = eligible ? 3 : 0;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <Inp label="Zameen (Hectare)" value={land} onChange={setLand} placeholder="2" suffix="ha" />
        <Inp label="Kitne Saal?" value={years} onChange={setYears} placeholder="5" suffix="yr" />
        <Sel label="Registration Hai?" value={reg} onChange={setReg}
          options={[{ value: 'yes', label: 'Haan — Registered' }, { value: 'no', label: 'Nahi — Register Karo' }]} />
        <Sel label="eKYC Complete?" value={ekyc} onChange={setEkyc}
          options={[{ value: 'yes', label: 'Haan — Done' }, { value: 'no', label: 'Nahi — Pending' }]} />
      </div>

      <div className="bg-[var(--color-bg-alt)] rounded-2xl p-4 space-y-1">
        <Result label="Saalana Labh" value={eligible ? fmt(perYear) : '₹0'} />
        <Result label="Kiston ki Sankhya" value={`${kists} kist/saal`} />
        <Result label="Har Kist" value={eligible ? fmt(2000) : '₹0'} />
        <Result label={`${years} Saal Mein Total`} value={fmt(total)} highlight />
        {!eligible && (
          <p className="text-xs text-red-600 dark:text-red-400 pt-2">
            {reg === 'no' ? '⚠️ Pehle registration karo — pmkisan.gov.in par free' : '⚠️ eKYC complete karo — bina eKYC kist nahi milti'}
          </p>
        )}
        {eligible && (
          <p className="text-xs text-green-600 dark:text-green-400 pt-2">✅ Aap {years} saal mein {fmt(total)} ke haqdaar hain!</p>
        )}
      </div>

      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-xs text-blue-800 dark:text-blue-300">
        <strong>📌 Note:</strong> PM Kisan ₹6,000/saal sabhi registered eligible farmers ko milta hai — zameen ki size se fark nahi padta (jab tak chote/marginal farmer hain).
      </div>
    </div>
  );
}

function MspCalc() {
  const [crop, setCrop] = useState('wheat');
  const [qty, setQty] = useState('20');
  const [market, setMarket] = useState('');

  const c = MSP[crop];
  const mspEarning = c.msp * Number(qty);
  const marketEarning = market ? Number(market) * Number(qty) : 0;
  const diff = marketEarning - mspEarning;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3">
        <Sel label="Fasal Chuniye" value={crop} onChange={setCrop}
          options={Object.entries(MSP).map(([k, v]) => ({ value: k, label: `${v.name} — MSP ₹${v.msp.toLocaleString()}/qtl` }))} />
        <div className="grid grid-cols-2 gap-3">
          <Inp label="Paidavar (Quintal)" value={qty} onChange={setQty} suffix="qtl" />
          <Inp label="Market Rate (Optional)" value={market} onChange={setMarket} placeholder="2400" suffix="₹/qtl" />
        </div>
      </div>

      <div className="bg-[var(--color-bg-alt)] rounded-2xl p-4 space-y-1">
        <Result label={`MSP Rate (${c.name})`} value={`₹${c.msp.toLocaleString()}/qtl`} />
        <Result label="Aapki Paidavar" value={`${qty} quintal`} />
        <Result label="MSP Se Kamai" value={fmt(mspEarning)} highlight />
        {market && (
          <>
            <Result label="Market Se Kamai" value={fmt(marketEarning)} />
            <Result
              label={diff >= 0 ? 'Market Faida' : 'MSP Faida'}
              value={`${diff >= 0 ? '+' : ''}${fmt(Math.abs(diff))}`}
            />
            {diff < 0 && (
              <p className="text-xs text-amber-700 dark:text-amber-400 pt-1">💡 MSP par becho — market se {fmt(Math.abs(diff))} zyada milega!</p>
            )}
          </>
        )}
      </div>

      <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-xs text-amber-800 dark:text-amber-300">
        <strong>📌 MSP 2025-26:</strong> Government guaranteed minimum price. Agar market rate kam ho to sarkar kharidegi is rate par.
      </div>
    </div>
  );
}

function ProfitCalc() {
  const [area, setArea]     = useState('1');
  const [yield_, setYield]  = useState('25');
  const [price, setPrice]   = useState('2300');
  const [seed, setSeed]     = useState('3000');
  const [fert, setFert]     = useState('5000');
  const [labor, setLabor]   = useState('8000');
  const [other, setOther]   = useState('2000');

  const areaNum    = Number(area) || 1;
  const revenue    = Number(yield_) * Number(price) * areaNum;
  const totalCost  = (Number(seed) + Number(fert) + Number(labor) + Number(other)) * areaNum;
  const profit     = revenue - totalCost;
  const margin     = revenue > 0 ? ((profit / revenue) * 100).toFixed(1) : '0';

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <Inp label="Zameen (Bigha/Acre)" value={area} onChange={setArea} suffix="acre" />
        <Inp label="Paidavar (Qtl/Acre)" value={yield_} onChange={setYield} suffix="qtl" />
        <Inp label="Bikri Rate (₹/Qtl)" value={price} onChange={setPrice} suffix="₹" />
        <Inp label="Beej Kharcha (₹/Acre)" value={seed} onChange={setSeed} suffix="₹" />
        <Inp label="Khad Kharcha (₹/Acre)" value={fert} onChange={setFert} suffix="₹" />
        <Inp label="Mazdoori (₹/Acre)" value={labor} onChange={setLabor} suffix="₹" />
        <Inp label="Anya Kharcha (₹/Acre)" value={other} onChange={setOther} suffix="₹" />
      </div>

      <div className="bg-[var(--color-bg-alt)] rounded-2xl p-4 space-y-1">
        <Result label="Kul Amdani" value={fmt(revenue)} />
        <Result label="Kul Kharcha" value={fmt(totalCost)} />
        <Result label="Shuddh Munafa" value={profit >= 0 ? fmt(profit) : `-${fmt(Math.abs(profit))}`} highlight />
        <Result label="Profit Margin" value={`${margin}%`} />
        <Result label="Per Acre Munafa" value={profit >= 0 ? fmt(profit / areaNum) : `-${fmt(Math.abs(profit / areaNum))}`} />
      </div>

      {profit < 0 && (
        <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-xs text-red-800 dark:text-red-300">
          ⚠️ Is rate par nuksan ho raha hai. Kharcha kam karo ya MSP par becho.
        </div>
      )}
    </div>
  );
}

function EmiCalc() {
  const [amount, setAmount] = useState('100000');
  const [rate, setRate]     = useState('7');
  const [tenure, setTenure] = useState('5');
  const [type, setType]     = useState('kcc');

  const P = Number(amount);
  const R = Number(rate) / 12 / 100;
  const N = Number(tenure) * 12;
  const emi = R > 0 ? (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1) : P / N;
  const totalPay = emi * N;
  const totalInt = totalPay - P;

  const loanTypes: Record<string, string> = {
    kcc: 'KCC (Kisan Credit Card) — 7% (Subsidized)',
    term: 'Agriculture Term Loan — 9-11%',
    tractor: 'Tractor Loan — 8.5-11%',
    land: 'Zameen Kharidne Ka Loan — 9.5%',
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3">
        <Sel label="Loan Prakar" value={type} onChange={setType}
          options={Object.entries(loanTypes).map(([k, v]) => ({ value: k, label: v }))} />
        <div className="grid grid-cols-2 gap-3">
          <Inp label="Loan Amount" value={amount} onChange={setAmount} suffix="₹" />
          <Inp label="Byaj Dar (%/saal)" value={rate} onChange={setRate} suffix="%" />
          <Inp label="Avadhi (Saal)" value={tenure} onChange={setTenure} suffix="yr" />
        </div>
      </div>

      <div className="bg-[var(--color-bg-alt)] rounded-2xl p-4 space-y-1">
        <Result label="Har Mahine EMI" value={fmt(emi)} highlight />
        <Result label="Kul Bhugtan" value={fmt(totalPay)} />
        <Result label="Kul Byaj" value={fmt(totalInt)} />
        <Result label="Avadhi" value={`${tenure} saal (${N} mahine)`} />
      </div>

      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-xs text-blue-800 dark:text-blue-300">
        <strong>💡 KCC Tip:</strong> Kisan Credit Card par 3 lakh tak ka loan 7% par milta hai — agar time par chukao to 3% aur subsidy bhi milti hai — effective rate sirf 4%!
      </div>
    </div>
  );
}

function FertCalc() {
  const [area, setArea]   = useState('1');
  const [crop, setCrop]   = useState('wheat');
  const [urea, setUrea]   = useState('0');
  const [dap, setDap]     = useState('0');
  const [mop, setMop]     = useState('0');

  const recs: Record<string, { n: number; p: number; k: number }> = {
    wheat:    { n: 120, p: 60, k: 40 },
    paddy:    { n: 120, p: 60, k: 60 },
    maize:    { n: 120, p: 60, k: 40 },
    cotton:   { n: 100, p: 50, k: 50 },
    sugarcane:{ n: 150, p: 60, k: 60 },
    soybean:  { n: 30,  p: 60, k: 40 },
    mustard:  { n: 120, p: 60, k: 40 },
  };

  const rec = recs[crop] || recs.wheat;
  const areaNum = Number(area);

  const nFromUrea = Number(urea) * 0.46;
  const nFromDap  = Number(dap) * 0.18;
  const pFromDap  = Number(dap) * 0.46;
  const kFromMop  = Number(mop) * 0.60;

  const totalN = (nFromUrea + nFromDap) / areaNum;
  const totalP = pFromDap / areaNum;
  const totalK = kFromMop / areaNum;

  const ureaPrice = 266;
  const dapPrice  = 1350;
  const mopPrice  = 1700;

  const totalCost = Number(urea) * (ureaPrice / 50) + Number(dap) * (dapPrice / 50) + Number(mop) * (mopPrice / 50);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <Inp label="Zameen (Acre)" value={area} onChange={setArea} suffix="acre" />
        <Sel label="Fasal" value={crop} onChange={setCrop}
          options={[
            {value:'wheat', label:'Gehun (Wheat)'},{value:'paddy', label:'Dhan (Paddy)'},
            {value:'maize', label:'Makka (Maize)'},{value:'cotton', label:'Kapas (Cotton)'},
            {value:'sugarcane', label:'Ganna (Sugarcane)'},{value:'soybean', label:'Soybean'},
            {value:'mustard', label:'Sarson (Mustard)'},
          ]} />
        <Inp label="Urea (kg)" value={urea} onChange={setUrea} suffix="kg" />
        <Inp label="DAP (kg)" value={dap} onChange={setDap} suffix="kg" />
        <Inp label="MOP/Potash (kg)" value={mop} onChange={setMop} suffix="kg" />
      </div>

      <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-xs">
        <p className="font-bold text-amber-800 dark:text-amber-300 mb-1">📋 Recommended NPK per Acre ({crop}):</p>
        <div className="flex gap-4 text-amber-700 dark:text-amber-400">
          <span>N: <strong>{rec.n} kg</strong></span>
          <span>P: <strong>{rec.p} kg</strong></span>
          <span>K: <strong>{rec.k} kg</strong></span>
        </div>
        <p className="text-amber-600 dark:text-amber-400 mt-1">= Urea: {Math.round(rec.n/0.46)} kg + DAP: {Math.round(rec.p/0.46)} kg + MOP: {Math.round(rec.k/0.60)} kg</p>
      </div>

      <div className="bg-[var(--color-bg-alt)] rounded-2xl p-4 space-y-1">
        <Result label="Applied N" value={`${totalN.toFixed(0)} kg/acre`} />
        <Result label="Applied P" value={`${totalP.toFixed(0)} kg/acre`} />
        <Result label="Applied K" value={`${totalK.toFixed(0)} kg/acre`} />
        <Result label="Kul Kharcha" value={fmt(totalCost)} highlight />
        <Result label="Per Acre Kharcha" value={fmt(totalCost / areaNum)} />
      </div>
    </div>
  );
}

function IrrigationCalc() {
  const [area, setArea]     = useState('1');
  const [method, setMethod] = useState('flood');
  const [crop, setCrop]     = useState('wheat');
  const [water, setWater]   = useState('600');
  const [rate, setRate]     = useState('8');

  const waterReq: Record<string, number> = {
    wheat: 450, paddy: 1200, maize: 500, cotton: 700,
    sugarcane: 2000, mustard: 300, vegetables: 400,
  };

  const methodEff: Record<string, { eff: number; label: string; save: number }> = {
    flood:  { eff: 0.45, label: 'Flood Irrigation', save: 0 },
    furrow: { eff: 0.55, label: 'Furrow Irrigation', save: 18 },
    drip:   { eff: 0.90, label: 'Drip Irrigation',  save: 50 },
    sprinkler: { eff: 0.75, label: 'Sprinkler',     save: 35 },
  };

  const areaNum    = Number(area);
  const m          = methodEff[method];
  const cropWater  = waterReq[crop] || Number(water);
  const actualWater = cropWater / m.eff;
  const costPerHour = Number(rate);
  const pumpHours  = (actualWater * areaNum * 10) / 3600;
  const totalCost  = pumpHours * costPerHour;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <Inp label="Zameen (Acre)" value={area} onChange={setArea} suffix="acre" />
        <Sel label="Fasal" value={crop} onChange={setCrop}
          options={[
            {value:'wheat',label:'Gehun'},{value:'paddy',label:'Dhan'},{value:'maize',label:'Makka'},
            {value:'cotton',label:'Kapas'},{value:'sugarcane',label:'Ganna'},
            {value:'mustard',label:'Sarson'},{value:'vegetables',label:'Sabziyan'},
          ]} />
        <Sel label="Sinchai Tarika" value={method} onChange={setMethod}
          options={Object.entries(methodEff).map(([k,v])=>({value:k, label:`${v.label} (${Math.round(v.eff*100)}% eff.)`}))} />
        <Inp label="Bijli Rate (₹/hr)" value={rate} onChange={setRate} suffix="₹/hr" />
      </div>

      <div className="bg-[var(--color-bg-alt)] rounded-2xl p-4 space-y-1">
        <Result label={`Fasal Zaroorat (${crop})`} value={`${cropWater} mm/season`} />
        <Result label="Method Efficiency" value={`${Math.round(m.eff * 100)}%`} />
        <Result label="Actual Water Need" value={`${Math.round(actualWater)} mm`} />
        <Result label="Estimated Pump Hours" value={`${pumpHours.toFixed(0)} hrs`} />
        <Result label="Estimated Sinchai Cost" value={fmt(totalCost)} highlight />
        {method !== 'flood' && (
          <Result label="Water Saved vs Flood" value={`~${m.save}% bachta hai`} />
        )}
      </div>

      <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-xs text-green-800 dark:text-green-300">
        <strong>💧 Tip:</strong> Drip ya sprinkler irrigation se 35-50% paani bachta hai — PM Krishi Sinchai Yojana mein 55% subsidy milti hai!
      </div>
    </div>
  );
}

export default function AgriCalculator() {
  const [tab, setTab] = useState<Tab>('pmkisan');

  const tabs: { id: Tab; label: string; emoji: string; desc: string }[] = [
    { id: 'pmkisan',    label: 'PM Kisan',        emoji: '🌾', desc: 'Labh Calculator' },
    { id: 'msp',        label: 'MSP Kamai',        emoji: '💰', desc: 'Fasal Income'    },
    { id: 'profit',     label: 'Crop Profit',      emoji: '📊', desc: 'Munafa Hisab'   },
    { id: 'emi',        label: 'Kisan Loan EMI',   emoji: '🏦', desc: 'EMI Calculator' },
    { id: 'fertilizer', label: 'Khad Kharcha',     emoji: '🌿', desc: 'Fertilizer Cost'},
    { id: 'irrigation', label: 'Sinchai Cost',     emoji: '💧', desc: 'Paani Kharcha'  },
  ];

  return (
    <section className="py-14 bg-[var(--color-card)]" id="agri-calculator" aria-labelledby="calc-heading">
      <div className="container-site max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            🧮 Free Tool
          </span>
          <h2 id="calc-heading" className="text-2xl md:text-3xl font-black text-[var(--color-text)] mb-2">
            Kisan Agriculture Calculator
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm max-w-xl mx-auto">
            India ke kisaanon ke liye — PM Kisan labh, MSP kamai, crop profit, loan EMI, khad aur sinchai kharcha ek jagah
          </p>
        </div>

        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-3 md:grid-cols-6 border-b border-[var(--color-border)] bg-[var(--color-bg-alt)]">
            {tabs.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`flex flex-col items-center gap-1 py-3 px-2 text-center transition-all border-b-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-inset ${
                  tab === t.id
                    ? 'border-[var(--color-primary)] bg-[var(--color-card)] text-[var(--color-primary)]'
                    : 'border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-card)]'
                }`}>
                <span className="text-xl">{t.emoji}</span>
                <span className="text-[10px] font-bold leading-tight">{t.label}</span>
                <span className="text-[9px] text-[var(--color-text-muted)] hidden md:block">{t.desc}</span>
              </button>
            ))}
          </div>

          <div className="p-5 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">{tabs.find(t => t.id === tab)?.emoji}</span>
              <div>
                <h3 className="font-black text-[var(--color-text)]">{tabs.find(t => t.id === tab)?.label} Calculator</h3>
                <p className="text-xs text-[var(--color-text-muted)]">{tabs.find(t => t.id === tab)?.desc}</p>
              </div>
            </div>

            {tab === 'pmkisan'    && <PmKisanCalc />}
            {tab === 'msp'        && <MspCalc />}
            {tab === 'profit'     && <ProfitCalc />}
            {tab === 'emi'        && <EmiCalc />}
            {tab === 'fertilizer' && <FertCalc />}
            {tab === 'irrigation' && <IrrigationCalc />}
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border-t border-green-100 dark:border-green-800 px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--color-text-muted)]">
            <span>✍️ By KisanStatus Team | KisanStatus.com</span>
            <span>⚠️ Yeh calculator sirf estimate deta hai — final figures official sources se verify karein</span>
          </div>
        </div>
      </div>
    </section>
  );
}