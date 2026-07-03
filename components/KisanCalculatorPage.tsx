/**
 * KisanCalculatorPage.tsx — Multi-tab agricultural utilities suite
 * 5 calculators: Welfare Benefit, Credit Facility EMI, Crop Protection Premium, Procurement Rate Income, Yield Profit
 * 'use client' — all interactive
 */
'use client';

import { useState } from 'react';
import Link from 'next/link';

// ── Types ──────────────────────────────────────────────────────────────────
type CalcId = 'pmkisan' | 'kcc' | 'pmfby' | 'msp' | 'profit';

// ── Procurement Rate Data 2025-26 (CCEA approved) ────────────────────────
const MSP_RATES: Record<string, { name: string; msp: number; unit: string }> = {
  wheat:      { name: 'Gehun (Wheat)',          msp: 2550,  unit: 'per quintal' },
  rice:       { name: 'Dhan (Paddy/Rice)',       msp: 2400,  unit: 'per quintal' },
  maize:      { name: 'Makka (Maize)',           msp: 2350,  unit: 'per quintal' },
  bajra:      { name: 'Bajra (Pearl Millet)',    msp: 2850,  unit: 'per quintal' },
  cotton:     { name: 'Kapas (Cotton) Medium',  msp: 7400,  unit: 'per quintal' },
  soybean:    { name: 'Soybean',                msp: 5100,  unit: 'per quintal' },
  groundnut:  { name: 'Moongfali (Groundnut)',  msp: 7200,  unit: 'per quintal' },
  mustard:    { name: 'Sarson (Mustard)',        msp: 5850,  unit: 'per quintal' },
  sunflower:  { name: 'Surajmukhi (Sunflower)', msp: 7500,  unit: 'per quintal' },
  sugarcane:  { name: 'Ganna (Sugarcane) FRP',  msp: 380,   unit: 'per quintal' },
  tur:        { name: 'Arhar/Tur (Pigeon Pea)', msp: 8100,  unit: 'per quintal' },
  moong:      { name: 'Moong (Green Gram)',      msp: 8900,  unit: 'per quintal' },
};

// ── Crop Protection Premium Rates (approx) ───────────────────────────────
const PMFBY_RATES: Record<string, { name: string; kharifRate: number; rabiRate: number }> = {
  rice:      { name: 'Dhan (Paddy)',   kharifRate: 2.0, rabiRate: 1.5 },
  wheat:     { name: 'Gehun',         kharifRate: 1.5, rabiRate: 1.5 },
  cotton:    { name: 'Kapas',         kharifRate: 5.0, rabiRate: 4.0 },
  oilseeds:  { name: 'Oilseeds',      kharifRate: 2.0, rabiRate: 1.5 },
  pulses:    { name: 'Pulses/Dal',    kharifRate: 2.0, rabiRate: 1.5 },
  maize:     { name: 'Makka',         kharifRate: 2.0, rabiRate: 1.5 },
  other:     { name: 'Other Crops',   kharifRate: 2.0, rabiRate: 1.5 },
};

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components — reusable form elements
// ─────────────────────────────────────────────────────────────────────────────

function InputField({ label, value, onChange, type = 'number', min, placeholder, hint }: {
  label: string; value: string | number; onChange: (v: string) => void;
  type?: string; min?: number; placeholder?: string; hint?: string;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        min={min}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
      />
      {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
    </div>
  );
}

function SelectField({ label, value, onChange, options, hint }: {
  label: string; value: string; onChange: (v: string) => void;
  options: { value: string; label: string }[]; hint?: string;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
      >
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
    </div>
  );
}

function ResultBox({ children, color = 'green' }: { children: React.ReactNode; color?: 'green' | 'blue' | 'yellow' | 'orange' }) {
  const colors = {
    green:  'bg-green-50 border-green-200 text-green-900',
    blue:   'bg-blue-50 border-blue-200 text-blue-900',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    orange: 'bg-orange-50 border-orange-200 text-orange-900',
  };
  return (
    <div className={`rounded-2xl border-2 p-5 mt-4 ${colors[color]}`}>
      {children}
    </div>
  );
}

function ResultRow({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex justify-between items-center py-2 border-b border-gray-100 last:border-0 ${bold ? 'font-bold text-lg' : 'text-sm'}`}>
      <span className="text-gray-600">{label}</span>
      <span className={bold ? 'text-green-700 text-xl' : 'font-semibold'}>{value}</span>
    </div>
  );
}

// Indian currency formatter with en-IN locale
function fmt(n: number) {
  return '₹' + Math.round(n).toLocaleString('en-IN');
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. Agrarian Welfare Benefit Estimator
// ─────────────────────────────────────────────────────────────────────────────
function PMKisanCalc() {
  const [years, setYears] = useState('3');
  const [land, setLand] = useState('2');
  const [hasVerification, setHasVerification] = useState('yes');

  const y = Math.max(1, Math.min(30, Number(years) || 1));
  const tranchesPerYear = 3;
  const amountPerTranche = 2000;
  const totalTranches = y * tranchesPerYear;
  const totalAmount = totalTranches * amountPerTranche;
  const eligible = hasVerification === 'yes' && Number(land) > 0 && Number(land) <= 2;
  const marginalBonus = Number(land) <= 1 ? 'Aap small/marginal cultivator hain — priority eligible!' : '';

  return (
    <div>
      <p className="text-gray-500 text-sm mb-5">Kitna agrarian welfare benefit milega — years ke hisaab se estimate karo</p>
      <InputField label="Aap kitne saal se enrolled hain ya rahenge?" value={years} onChange={setYears} min={1} placeholder="3" hint="1 se 30 saal ke beech" />
      <InputField label="Aapki zameen (hectare mein)" value={land} onChange={setLand} min={0} placeholder="2" hint="2 hectare tak ke cultivators eligible hain" />
      <SelectField label="Digital verification complete hai?" value={hasVerification} onChange={setHasVerification} options={[{ value: 'yes', label: '✅ Haan — complete hai' }, { value: 'no', label: '❌ Nahi — pending hai' }]} />

      <ResultBox color="green">
        {!eligible ? (
          <div className="text-center py-2">
            <p className="text-2xl mb-2">⚠️</p>
            {hasVerification === 'no'
              ? <p className="font-bold text-orange-700">Digital verification complete nahi hai — payment rok sakti hai!<br/><span className="text-sm font-normal">Official portal par free verification karein.</span></p>
              : <p className="font-bold text-red-700">2 hectare se zyada zameen wale eligible nahi hain.</p>
            }
          </div>
        ) : (
          <>
            {marginalBonus && <p className="text-xs bg-green-200 text-green-800 px-3 py-1 rounded-full mb-3 inline-block">{marginalBonus}</p>}
            <ResultRow label="Har tranche mein" value={fmt(amountPerTranche)} />
            <ResultRow label="Saal mein (3 tranche)" value={fmt(amountPerTranche * 3)} />
            <ResultRow label="Kul tranches" value={`${totalTranches} tranche`} />
            <ResultRow label={`${y} saal mein kul benefit`} value={fmt(totalAmount)} bold />
          </>
        )}
      </ResultBox>

      <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800">
        <strong>📌 Dhyan rakhein:</strong> Yeh estimate hai. Actual amount government ke rules ke hisaab se badal sakti hai. Latest info ke liye <strong>official portal</strong> check karein.
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. Credit Facility EMI Calculator
// ─────────────────────────────────────────────────────────────────────────────
function KCCLoanCalc() {
  const [amount, setAmount] = useState('100000');
  const [rate, setRate] = useState('7');
  const [months, setMonths] = useState('12');

  const P = Number(amount) || 0;
  const R = (Number(rate) || 0) / 100 / 12;
  const N = Number(months) || 1;

  let emi = 0;
  let totalPayable = 0;
  let totalInterest = 0;

  if (P > 0 && R > 0 && N > 0) {
    emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    totalPayable = emi * N;
    totalInterest = totalPayable - P;
  } else if (P > 0 && N > 0) {
    emi = P / N;
    totalPayable = P;
    totalInterest = 0;
  }

  // 2% interest subvention for credit facility
  const govSubsidy = Number(rate) <= 7 ? P * 0.02 : 0;

  return (
    <div>
      <p className="text-gray-500 text-sm mb-5">Credit facility loan ki monthly payment calculate karo</p>
      <InputField label="Loan amount (₹)" value={amount} onChange={setAmount} min={1000} placeholder="100000" hint="Credit limit usually ₹3 lakh tak cultivators ko milti hai" />
      <InputField label="Interest rate (% per year)" value={rate} onChange={setRate} min={0} placeholder="7" hint="Govt subsidized rate ~7% — check karein apne bank se" />
      <InputField label="Repayment period (months)" value={months} onChange={setMonths} min={1} placeholder="12" hint="Usually 12 months (1 crop season)" />

      {emi > 0 && (
        <ResultBox color="blue">
          <ResultRow label="Monthly Payment" value={fmt(emi)} bold />
          <ResultRow label="Kul interest" value={fmt(totalInterest)} />
          <ResultRow label="Kul repayment" value={fmt(totalPayable)} />
          {govSubsidy > 0 && <ResultRow label="Govt 2% subvention (approx)" value={`-${fmt(govSubsidy)}`} />}
          {govSubsidy > 0 && <ResultRow label="Aapko effective cost" value={fmt(totalPayable - govSubsidy)} bold />}
        </ResultBox>
      )}
      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-800">
        <strong>📌 Credit facility tip:</strong> Time par repay karo — 2% extra interest subvention milti hai government se. Total effective rate 5% tak aa sakta hai.
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. Crop Protection Premium Calculator
// ─────────────────────────────────────────────────────────────────────────────
function PMFBYCalc() {
  const [crop, setCrop] = useState('rice');
  const [season, setSeason] = useState('kharif');
  const [sumInsured, setSumInsured] = useState('50000');

  const cropData = PMFBY_RATES[crop];
  const rate = season === 'kharif' ? cropData.kharifRate : cropData.rabiRate;
  const insuredAmt = Number(sumInsured) || 0;
  const totalPremium = (insuredAmt * rate) / 100;
  const farmerShare = Math.min(totalPremium, insuredAmt * (rate / 100));
  const govShare = totalPremium - farmerShare;

  const cropOptions = Object.entries(PMFBY_RATES).map(([k, v]) => ({ value: k, label: v.name }));

  return (
    <div>
      <p className="text-gray-500 text-sm mb-5">Crop protection scheme — aapka premium aur government contribution</p>
      <SelectField label="Fasal (Crop)" value={crop} onChange={setCrop} options={cropOptions} />
      <SelectField label="Season" value={season} onChange={setSeason} options={[{ value: 'kharif', label: '🌧️ Kharif (June–Oct)' }, { value: 'rabi', label: '❄️ Rabi (Nov–Mar)' }]} />
      <InputField label="Sum Insured (₹ per hectare)" value={sumInsured} onChange={setSumInsured} min={1000} placeholder="50000" hint="Apne district ke liye actual sum insured bank ya CSC se poochein" />

      {insuredAmt > 0 && (
        <ResultBox color="yellow">
          <p className="text-xs text-yellow-700 mb-3">Premium Rate: <strong>{rate}%</strong> ({season === 'kharif' ? 'Kharif' : 'Rabi'} — {cropData.name})</p>
          <ResultRow label="Kul premium" value={fmt(totalPremium)} />
          <ResultRow label="Aapka share (cultivator)" value={fmt(farmerShare)} bold />
          <ResultRow label="Govt + Insurer share" value={fmt(govShare)} />
          <div className="mt-3 pt-3 border-t border-yellow-200 text-xs text-yellow-800">
            🛡️ Cover: Agar fasal kharab hui toh <strong>{fmt(insuredAmt)}</strong> tak claim kar sakte hain
          </div>
        </ResultBox>
      )}
      <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-xs text-yellow-800">
        <strong>📌 Crop protection tip:</strong> Premium rates approximate hain. Actual rates district-wise alag hote hain. Apne bank ya CSC center se confirm karein.
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. Procurement Rate Income Calculator
// ─────────────────────────────────────────────────────────────────────────────
function MSPCalc() {
  const [crop, setCrop] = useState('wheat');
  const [quantity, setQuantity] = useState('10');
  const [unit, setUnit] = useState('quintal');

  const cropData = MSP_RATES[crop];
  const qty = Number(quantity) || 0;

  // Convert to quintals
  let qtyInQuintal = qty;
  if (unit === 'kg') qtyInQuintal = qty / 100;
  if (unit === 'ton') qtyInQuintal = qty * 10;
  if (unit === 'hectare') {
    const yields: Record<string, number> = {
      wheat: 35, rice: 25, maize: 30, bajra: 15, cotton: 12,
      soybean: 10, groundnut: 15, mustard: 12, sunflower: 10,
      sugarcane: 600, tur: 8, moong: 8,
    };
    qtyInQuintal = (yields[crop] || 20) * qty;
  }

  const totalIncome = qtyInQuintal * cropData.msp;

  const cropOptions = Object.entries(MSP_RATES).map(([k, v]) => ({ value: k, label: v.name }));
  const unitOptions = [
    { value: 'quintal', label: 'Quintal (100 kg)' },
    { value: 'kg', label: 'Kilogram (kg)' },
    { value: 'ton', label: 'Metric Ton' },
    { value: 'hectare', label: 'Hectare (avg yield)' },
  ];

  return (
    <div>
      <p className="text-gray-500 text-sm mb-5">Guaranteed procurement rate par fasal bechne se kitna paisa milega — estimate karo</p>
      <SelectField label="Fasal (Crop)" value={crop} onChange={setCrop} options={cropOptions} />
      <SelectField label="Matra (Unit)" value={unit} onChange={setUnit} options={unitOptions} />
      <InputField label={`Quantity (${unit})`} value={quantity} onChange={setQuantity} min={0} placeholder="10" />

      {qty > 0 && (
        <ResultBox color="orange">
          <p className="text-xs text-orange-700 mb-3">Procurement Rate 2025-26: <strong>₹{cropData.msp.toLocaleString('en-IN')} {cropData.unit}</strong></p>
          {unit === 'hectare' && (
            <ResultRow label={`Estimated yield (${qtyInQuintal.toFixed(1)} qtl)`} value={`${qty} hectare`} />
          )}
          <ResultRow label="Quantity (quintals)" value={`${qtyInQuintal.toFixed(2)} qtl`} />
          <ResultRow label="Guaranteed rate" value={`₹${cropData.msp.toLocaleString('en-IN')}/qtl`} />
          <ResultRow label="Estimated procurement income" value={fmt(totalIncome)} bold />
          <div className="mt-3 pt-3 border-t border-orange-200 text-xs text-orange-800">
            💡 Mandi mein sell karne ke liye apne state ki agriculture mandi app ya e-NAM portal use karein.
          </div>
        </ResultBox>
      )}
      <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-xl text-xs text-orange-800">
        <strong>📌 Procurement rate note:</strong> Yeh 2025-26 rates hain. Actual market price alag ho sakti hai. Official rates: <strong>dfpd.gov.in</strong>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. Yield Profit/Loss Analyzer
// ─────────────────────────────────────────────────────────────────────────────
function CropProfitCalc() {
  const [landHa, setLandHa] = useState('1');
  const [sellingPrice, setSellingPrice] = useState('2000');
  const [yieldQtl, setYieldQtl] = useState('25');
  const [seedCost, setSeedCost] = useState('2000');
  const [fertilizerCost, setFertilizerCost] = useState('3000');
  const [laborCost, setLaborCost] = useState('4000');
  const [otherCost, setOtherCost] = useState('1000');

  const land = Number(landHa) || 1;
  const price = Number(sellingPrice) || 0;
  const yieldQ = Number(yieldQtl) || 0;
  const totalRevenue = price * yieldQ * land;
  const totalCost = (Number(seedCost) + Number(fertilizerCost) + Number(laborCost) + Number(otherCost)) * land;
  const profit = totalRevenue - totalCost;
  const profitPerHa = land > 0 ? profit / land : 0;
  const isProfit = profit >= 0;

  return (
    <div>
      <p className="text-gray-500 text-sm mb-5">Ek season mein fasal se kitna fayda ya nuksan — poora hisaab</p>
      <InputField label="Zameen (hectare)" value={landHa} onChange={setLandHa} min={0} placeholder="1" />
      <InputField label="Selling price (₹ per quintal)" value={sellingPrice} onChange={setSellingPrice} min={0} placeholder="2000" hint="Procurement rate ya mandi rate daalein" />
      <InputField label="Expected yield (quintal per hectare)" value={yieldQtl} onChange={setYieldQtl} min={0} placeholder="25" />
      <p className="text-xs font-bold text-gray-500 mt-2 mb-2 uppercase tracking-wide">Kharcha (per hectare)</p>
      <InputField label="Beej kharcha (Seed cost) ₹" value={seedCost} onChange={setSeedCost} min={0} placeholder="2000" />
      <InputField label="Khad + spray (Fertilizer) ₹" value={fertilizerCost} onChange={setFertilizerCost} min={0} placeholder="3000" />
      <InputField label="Mazdoori (Labor) ₹" value={laborCost} onChange={setLaborCost} min={0} placeholder="4000" />
      <InputField label="Doosra kharcha (Other) ₹" value={otherCost} onChange={setOtherCost} min={0} placeholder="1000" />

      {totalRevenue > 0 && (
        <ResultBox color={isProfit ? 'green' : 'yellow'}>
          <ResultRow label="Kul amdani (Revenue)" value={fmt(totalRevenue)} />
          <ResultRow label="Kul kharcha (Cost)" value={fmt(totalCost)} />
          <ResultRow label="Profit / Hectare" value={fmt(profitPerHa)} />
          <ResultRow label={isProfit ? '🎉 Net Profit' : '⚠️ Net Loss'} value={fmt(Math.abs(profit))} bold />
          {!isProfit && (
            <div className="mt-3 p-3 bg-red-50 rounded-xl text-xs text-red-700">
              💡 Nuksan ho raha hai — Credit facility loan, agrarian welfare benefit ya crop protection insurance consider karein.
            </div>
          )}
        </ResultBox>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Related articles links — varied SEO labels
// ─────────────────────────────────────────────────────────────────────────────
const RELATED_ARTICLES = [
  { href: '/articles/pm-kisan-21vi-installment-status-check', label: '📅 21vi Tranche Verification' },
  { href: '/articles/pm-kisan-installment-history-check-online', label: '📊 Tranche History' },
  { href: '/articles/kisan-rin-kaha-se-le-2026', label: '💰 Credit Facility Guide' },
  { href: '/articles/pmfby-crop-insurance-2026', label: '🌱 Crop Protection Guide' },
  { href: '/articles/kisan-tractor-loan-2026', label: '🚜 Farm Equipment Loan' },
  { href: '/articles/pm-kisan-registration-online-2026', label: '📝 Scheme Enrollment' },
  { href: '/articles/pm-kisan-ekyc-online-2026', label: '🔐 Digital Verification Guide' },
  { href: '/articles/pm-kisan-payment-failed-status-2026', label: '💸 Payment Fix Guide' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Calculator tab config — varied titles for SEO
// ─────────────────────────────────────────────────────────────────────────────
const CALCS: { id: CalcId; emoji: string; title: string; shortTitle: string; color: string; component: React.ComponentType }[] = [
  { id: 'pmkisan', emoji: '🌾', title: 'Welfare Benefit Estimator',  shortTitle: 'Benefit',    color: 'green',  component: PMKisanCalc  },
  { id: 'kcc',     emoji: '🏦', title: 'Credit Facility EMI',        shortTitle: 'Credit',     color: 'blue',   component: KCCLoanCalc  },
  { id: 'pmfby',   emoji: '🛡️', title: 'Crop Protection Premium',    shortTitle: 'Protection', color: 'yellow', component: PMFBYCalc    },
  { id: 'msp',     emoji: '💹', title: 'Procurement Rate Income',    shortTitle: 'Procurement',color: 'orange', component: MSPCalc      },
  { id: 'profit',  emoji: '📊', title: 'Yield Profit/Loss',          shortTitle: 'Yield',      color: 'purple', component: CropProfitCalc },
];

const TAB_COLORS: Record<string, string> = {
  green:  'bg-green-600 text-white border-green-600',
  blue:   'bg-blue-600 text-white border-blue-600',
  yellow: 'bg-yellow-500 text-white border-yellow-500',
  orange: 'bg-orange-500 text-white border-orange-500',
  purple: 'bg-purple-600 text-white border-purple-600',
};
const TAB_INACTIVE = 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50';

// ─────────────────────────────────────────────────────────────────────────────
// Main export
// ─────────────────────────────────────────────────────────────────────────────
export default function KisanCalculatorPage() {
  const [activeCalc, setActiveCalc] = useState<CalcId>('pmkisan');
  const active = CALCS.find(c => c.id === activeCalc)!;
  const ActiveComponent = active.component;

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero section */}
      <section className="bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-green-200 text-xs font-bold px-4 py-2 rounded-full mb-4">
            🧮 Free Agricultural Utilities — KisanStatus.com
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">
            Cultivator Calculator Suite 2026
          </h1>
          <p className="text-green-100 text-base md:text-lg max-w-2xl mx-auto">
            Welfare benefit, credit facility EMI, crop protection premium, procurement rate income aur yield profit — <strong>5 utilities ek jagah</strong>
          </p>
          <Link href="/" className="inline-flex items-center gap-2 mt-6 text-green-200 text-sm hover:text-white">
            ← Wapas Homepage
          </Link>
        </div>
      </section>

      {/* Sticky calculator tabs */}
      <div className="sticky top-0 z-20 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {CALCS.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveCalc(c.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl border text-sm font-semibold transition-all ${
                  activeCalc === c.id ? TAB_COLORS[c.color] : TAB_INACTIVE
                }`}
              >
                <span>{c.emoji}</span>
                <span className="hidden sm:inline">{c.shortTitle}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active calculator content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Calculator card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{active.emoji}</span>
                <div>
                  <h2 className="text-xl font-black text-gray-800">{active.title}</h2>
                  <p className="text-xs text-gray-400">Utility — KisanStatus.com</p>
                </div>
              </div>
              <ActiveComponent />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Quick switch */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 className="font-bold text-gray-700 text-sm mb-3">🧮 Doosre Utilities</h3>
              <div className="space-y-2">
                {CALCS.filter(c => c.id !== activeCalc).map(c => (
                  <button
                    key={c.id}
                    onClick={() => setActiveCalc(c.id)}
                    className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors border border-gray-100"
                  >
                    <span>{c.emoji}</span>
                    <span>{c.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Related articles */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 className="font-bold text-gray-700 text-sm mb-3">📚 Related Guides</h3>
              <div className="space-y-2">
                {RELATED_ARTICLES.map(a => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors border border-gray-100"
                  >
                    {a.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Official portal link */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
              <p className="text-xs font-bold text-green-800 mb-2">🌐 Official Portal</p>
              <a
                href="https://pmkisan.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors"
              >
                pmkisan.gov.in →
              </a>
              <p className="text-xs text-green-700 mt-2 text-center">Support Line: 155261</p>
            </div>
          </div>
        </div>

        {/* All utilities quick access */}
        <div className="mt-10">
          <h2 className="text-xl font-black text-gray-800 mb-4">Saare Utilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {CALCS.map(c => (
              <button
                key={c.id}
                onClick={() => { setActiveCalc(c.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`p-4 rounded-2xl border-2 text-center transition-all ${
                  activeCalc === c.id ? `border-current ${TAB_COLORS[c.color]}` : 'border-gray-200 bg-white hover:border-green-300 hover:bg-green-50'
                }`}
              >
                <div className="text-3xl mb-2">{c.emoji}</div>
                <div className="text-xs font-bold">{c.shortTitle}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="mt-8 p-4 bg-gray-100 rounded-2xl text-xs text-gray-500">
          <strong>⚠️ Disclaimer:</strong> Yeh utilities sirf estimate ke liye hain. Actual amounts government rules, bank policies aur local conditions ke hisaab se alag ho sakte hain. Financial decisions lene se pehle apne bank, CSC center ya agriculture officer se confirm karein.
        </div>
      </div>
    </main>
  );
}