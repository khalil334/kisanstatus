/**
 * CalcShared.tsx — Shared UI components for all calculator pages
 */
'use client';
import Link from 'next/link';
import { useState } from 'react';

export function InputField({ label, value, onChange, type='number', min, placeholder, hint }: {
  label:string; value:string|number; onChange:(v:string)=>void;
  type?:string; min?:number; placeholder?:string; hint?:string;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold text-gray-700 mb-1">{label}</label>
      <input type={type} min={min} value={value} placeholder={placeholder}
        onChange={e=>onChange(e.target.value)}
        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400 bg-white transition-colors"/>
      {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
    </div>
  );
}

export function SelectField({ label, value, onChange, options, hint }: {
  label:string; value:string; onChange:(v:string)=>void;
  options:{value:string;label:string}[]; hint?:string;
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold text-gray-700 mb-1">{label}</label>
      <select value={value} onChange={e=>onChange(e.target.value)}
        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
        {options.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
    </div>
  );
}

export function ResultRow({ label, value, bold }: { label:string; value:string; bold?:boolean }) {
  return (
    <div className={`flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0 ${bold?'font-black text-lg':'text-sm'}`}>
      <span className="text-gray-600">{label}</span>
      <span className={bold?'text-green-700 text-xl':'font-semibold text-gray-900'}>{value}</span>
    </div>
  );
}

export function fmt(n:number) {
  return '₹' + Math.round(n).toLocaleString('en-IN');
}

export const OTHER_CALCS = [
  { href:'/calculator/pm-kisan-benefit', emoji:'🌾', name:'PM Kisan Benefit', color:'bg-green-50 border-green-200 text-green-800' },
  { href:'/calculator/kcc-loan-emi',     emoji:'🏦', name:'KCC Loan EMI',     color:'bg-blue-50 border-blue-200 text-blue-800'   },
  { href:'/calculator/pmfby-premium',    emoji:'🛡️', name:'PMFBY Premium',    color:'bg-amber-50 border-amber-200 text-amber-800' },
  { href:'/calculator/msp-income',       emoji:'💹', name:'MSP Income',       color:'bg-orange-50 border-orange-200 text-orange-800' },
  { href:'/calculator/crop-profit',      emoji:'📊', name:'Crop Profit',      color:'bg-purple-50 border-purple-200 text-purple-800' },
];

export function OtherCalcs({ current }: { current:string }) {
  return (
    <div className="mt-8 p-5 bg-gray-50 border border-gray-200 rounded-2xl">
      <h3 className="font-black text-gray-900 text-sm mb-4">🧮 Doosre Free Calculators</h3>
      <div className="grid grid-cols-2 gap-2">
        {OTHER_CALCS.filter(c=>c.href!==current).map(c=>(
          <Link key={c.href} href={c.href}
            className={`flex items-center gap-2 p-3 border rounded-xl text-xs font-bold hover:shadow-md transition-all ${c.color}`}>
            <span className="text-lg">{c.emoji}</span>{c.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function CalcHeader({ emoji, title, subtitle, breadcrumb }: {
  emoji:string; title:string; subtitle:string; breadcrumb:string;
}) {
  return (
    <div className="bg-primary-600 py-8">
      <div className="container-site max-w-2xl">
        <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
          <Link href="/" className="hover:text-white">Home</Link><span>/</span>
          <Link href="/calculator" className="hover:text-white">Calculators</Link><span>/</span>
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

export function CalcDisclaimer({ note }: { note:string }) {
  return (
    <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 leading-relaxed">
      <strong>📌 Note:</strong> {note} Yeh tool sirf estimate deta hai — actual figures ke liye apne bank, CSC center ya official portal se confirm karein.
    </div>
  );
}
