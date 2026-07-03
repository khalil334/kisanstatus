/**
 * CalcShared.tsx — Reusable UI blocks for all financial utilities
 * Ek baar likho, sab calculator pages mein use karo. Consistency maintain hoti hai.
 */
'use client';

import Link from 'next/link';

// Standard text/number input with optional suffix. Focus ring green rakhi hai theme ke hisaab se.
export function InputField({ 
  label, 
  value, 
  onChange, 
  type = 'number', 
  min, 
  placeholder, 
  hint, 
  id,
  suffix  // ✅ Added suffix prop
}: {
  label: string; 
  value: string | number; 
  onChange: (v: string) => void;
  type?: string; 
  min?: number; 
  placeholder?: string; 
  hint?: string; 
  id?: string;
  suffix?: string;  // ✅ Added suffix type
}) {
  // Accessibility fix: label aur input ko link kiya hai screen readers ke liye
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="mb-4">
      <label htmlFor={inputId} className="block text-sm font-bold text-gray-700 mb-1">{label}</label>
      <div className="relative">  {/* ✅ Relative container for absolute suffix positioning */}
        <input
          id={inputId}
          type={type}
          min={min}
          value={value}
          placeholder={placeholder}
          onChange={e => onChange(e.target.value)}
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400 bg-white transition-colors pr-12"  // ✅ pr-12 for suffix spacing
        />
        {suffix && (  // ✅ Conditional suffix display
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-medium">
            {suffix}
          </span>
        )}
      </div>
      {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
    </div>
  );
}

// Dropdown select. Options array pass karna padta hai.
export function SelectField({ label, value, onChange, options, hint, id }: {
  label: string; value: string; onChange: (v: string) => void;
  options: { value: string; label: string }[]; hint?: string; id?: string;
}) {
  const selectId = id || label.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="mb-4">
      <label htmlFor={selectId} className="block text-sm font-bold text-gray-700 mb-1">{label}</label>
      <select
        id={selectId}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
      >
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
    </div>
  );
}

// Result display row. Last item ka border remove karne ke liye last:border-0 use kiya.
export function ResultRow({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0 ${bold ? 'font-black text-lg' : 'text-sm'}`}>
      <span className="text-gray-600">{label}</span>
      <span className={bold ? 'text-green-700 text-xl' : 'font-semibold text-gray-900'}>{value}</span>
    </div>
  );
}

// Indian currency formatter. en-IN locale use kiya hai taaki commas sahi aayein (₹1,00,000).
export function fmt(n: number) {
  return '₹' + Math.round(n).toLocaleString('en-IN');
}

// Cross-linking data. Naye SEO titles use kiye hain jo actual pages ke match karte hain.
export const OTHER_CALCS = [
  { href: '/calculator/installment-tracker', emoji: '📆', name: 'Tranche Status Tracker', color: 'bg-teal-50 border-teal-200 text-teal-800' },
  { href: '/calculator/pm-kisan-benefit', emoji: '🌾', name: 'Cultivator Benefit Estimator', color: 'bg-green-50 border-green-200 text-green-800' },
  { href: '/calculator/kcc-loan-emi', emoji: '🏦', name: 'Credit Facility EMI', color: 'bg-blue-50 border-blue-200 text-blue-800' },
  { href: '/calculator/pmfby-premium', emoji: '🛡️', name: 'Crop Protection Premium', color: 'bg-amber-50 border-amber-200 text-amber-800' },
  { href: '/calculator/msp-income', emoji: '💹', name: 'Procurement Rate Income', color: 'bg-orange-50 border-orange-200 text-orange-800' },
  { href: '/calculator/crop-profit', emoji: '📊', name: 'Yield Profit/Loss', color: 'bg-purple-50 border-purple-200 text-purple-800' },
];

// Related utilities grid. Current page ko filter out karta hai taaki self-linking na ho.
export function OtherCalcs({ current }: { current: string }) {
  return (
    <div className="mt-8 p-5 bg-gray-50 border border-gray-200 rounded-2xl">
      <h3 className="font-black text-gray-900 text-sm mb-4">🧮 Doosre Free Utilities</h3>
      <div className="grid grid-cols-2 gap-2">
        {OTHER_CALCS.filter(c => c.href !== current).map(c => (
          <Link key={c.href} href={c.href}
            className={`flex items-center gap-2 p-3 border rounded-xl text-xs font-bold hover:shadow-md transition-all ${c.color}`}>
            <span className="text-lg">{c.emoji}</span>{c.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Page header with breadcrumb. Gradient background theme ke sath match karta hai.
export function CalcHeader({ emoji, title, subtitle, breadcrumb }: {
  emoji: string; title: string; subtitle: string; breadcrumb: string;
}) {
  return (
    <div className="bg-primary-600 py-8">
      <div className="container-site max-w-2xl">
        <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
          <Link href="/" className="hover:text-white">Home</Link><span>/</span>
          <Link href="/calculator" className="hover:text-white">Utilities</Link><span>/</span>
          <span className="text-white">{breadcrumb}</span>
        </nav>
        <div className="flex items-center gap-4">
          <span className="text-5xl">{emoji}</span>
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-white leading-tight">{title}</h1>
            <p className="text-green-200 text-sm mt-1">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Legal protection ke liye zaroori hai. Estimates aur actual figures mein farq ho sakta hai.
export function CalcDisclaimer({ note }: { note: string }) {
  return (
    <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 leading-relaxed">
      <strong>📌 Note:</strong> {note} Yeh tool sirf estimate deta hai — actual figures ke liye apne bank, CSC center ya official portal se confirm karein.
    </div>
  );
}