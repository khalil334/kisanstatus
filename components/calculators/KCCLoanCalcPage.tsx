'use client';

import { useState } from 'react';
import Link from 'next/link';
import { InputField, SelectField, ResultRow, fmt, OtherCalcs, CalcHeader, CalcDisclaimer } from './CalcShared';

export default function KCCLoanCalcPage() {
  const [amount,  setAmount]  = useState('100000');
  const [rate,    setRate]    = useState('7');
  const [months,  setMonths]  = useState('12');
  const [purpose, setPurpose] = useState('crop');

  const P = Number(amount)||0;
  const R = (Number(rate)||0)/100/12;
  const N = Number(months)||1;

  let emi=0, totalPayable=0, totalInterest=0;
  if(P>0 && R>0 && N>0){
    emi = (P*R*Math.pow(1+R,N))/(Math.pow(1+R,N)-1);
    totalPayable = emi*N;
    totalInterest = totalPayable-P;
  } else if(P>0 && N>0){
    emi=P/N; totalPayable=P; totalInterest=0;
  }

  const subsidy = Number(rate)<=7 ? P*0.02 : 0;
  const effectiveCost = totalPayable - subsidy;

  // Schema mein naye SEO keywords — purane repetitive "KCC Loan" nahi
  const schema = {
    '@context':'https://schema.org',
    '@type':'WebApplication',
    name:'Agricultural Credit Card EMI Calculator 2026',
    url:'https://kisanstatus.com/calculator/kcc-loan-emi',
    applicationCategory:'FinanceApplication',
    description:'Farm credit facility ki monthly payment aur total repayment calculate karo',
    offers:{'@type':'Offer',price:'0',priceCurrency:'INR'},
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
      
      {/* Title aur breadcrumb mein naye keywords — "KCC Loan EMI" purana tha */}
      <CalcHeader
        emoji="🏦"
        title="Credit Facility EMI Calculator 2026"
        subtitle="Agricultural credit — monthly payment, total interest, government subsidy sab ek jagah"
        breadcrumb="Credit Facility EMI"
      />

      <div className="container-site max-w-2xl py-8">

        {/* Intro text mein naya keyword — "KCC" repetitive tha */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl text-sm text-gray-700">
          <p><strong>🏦 Agricultural Credit Facility</strong> pe loan lene se pehle EMI calculate karo — surprise nahi hoga. Government 2% interest subvention deti hai agar time par repay karo.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-gray-900 text-base mb-5">🧮 Loan Details Bharo</h2>

          <SelectField
            label="Loan ka purpose"
            value={purpose} onChange={setPurpose}
            options={[
              {value:'crop',    label:'🌾 Crop cultivation (sabse common)'},
              {value:'agri',    label:'🚜 Agricultural equipment'},
              {value:'allied',  label:'🐄 Allied activities (dairy, fishery)'},
              {value:'personal',label:'🏠 Personal/household'},
            ]}
            hint="Purpose se interest rate aur limit alag hoti hai"
          />
          <InputField
            label="Loan amount (₹)"
            value={amount} onChange={setAmount} min={1000} placeholder="100000"
            hint="Credit facility crop limit usually ₹1.6 lakh tak bina collateral — ₹3 lakh tak possible"
          />
          <InputField
            label="Interest rate (% per year)"
            value={rate} onChange={setRate} min={0} placeholder="7"
            hint="Subsidized rate ~7% — prompt repayment karo to effective 5% lagta hai"
          />
          <InputField
            label="Repayment period (months)"
            value={months} onChange={setMonths} min={1} placeholder="12"
            hint="Crop loan usually 12 months (1 season) — longer period ke liye bank se pucho"
          />

          {emi>0 && (
            <div className="mt-4 bg-blue-50 border-2 border-blue-200 rounded-2xl p-5">
              {/* Result section mein naya keyword — "KCC EMI" purana tha */}
              <p className="text-xs text-blue-700 font-bold uppercase tracking-wide mb-3">📊 Aapki Credit Facility Payment</p>
              {/* Naye labels — "Monthly EMI" generic tha */}
              <ResultRow label="Monthly Payment" value={fmt(emi)} bold />
              <ResultRow label="Total Interest" value={fmt(totalInterest)} />
              <ResultRow label="Total Repayment" value={fmt(totalPayable)} />
              {subsidy>0 && (
                <>
                  <div className="my-2 pt-2 border-t border-blue-200">
                    <p className="text-xs text-blue-600 font-semibold mb-2">🎁 Prompt Repayment Bonus (2% subvention)</p>
                    <ResultRow label="Govt 2% subvention" value={`-${fmt(subsidy)}`} />
                    <ResultRow label="Effective Cost" value={fmt(effectiveCost)} bold />
                  </div>
                  <p className="text-xs text-blue-600 mt-2">✅ Time par repay karo — ₹{fmt(subsidy).replace('₹','')} extra bachega!</p>
                </>
              )}
            </div>
          )}

          {/* Quick facts — naye keywords use kiye */}
          <div className="mt-5 grid grid-cols-2 gap-2">
            {[
              {t:'₹1.6 Lakh',d:'Bina collateral limit'},
              {t:'7% Rate',   d:'Subsidized interest'},
              {t:'5% Effective',d:'Prompt repayment ke baad'},
              {t:'12 Months', d:'Typical crop loan period'},
            ].map(({t,d})=>(
              <div key={t} className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <p className="font-black text-blue-700 text-sm">{t}</p>
                <p className="text-[11px] text-gray-500">{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to apply guide — naya keyword use kiya */}
        <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <h3 className="font-black text-gray-900 text-sm mb-4">📋 Credit Facility Kaise Lein — Quick Guide</h3>
          <div className="space-y-2">
            {[
              {n:1,s:'Nazdiki SBI, PNB, Bank of Baroda ya cooperative bank jao'},
              {n:2,s:'Credit facility application form maango — free milega'},
              {n:3,s:'Documents lo: Aadhaar, land records (khasra), bank passbook, photo'},
              {n:4,s:'Form bhar ke submit karo — 7-14 din mein verification'},
              {n:5,s:'Credit card milega — limit usable hogi turant'},
              {n:6,s:'Kist katne ke baad repay karo — 2% bonus milega'},
            ].map(({n,s})=>(
              <div key={n} className="flex gap-3 items-center">
                <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center shrink-0">{n}</span>
                <p className="text-sm text-gray-700">{s}</p>
              </div>
            ))}
          </div>
          {/* Link text mein naya keyword — "KCC Loan" purana tha */}
          <Link href="/articles/kisan-rin-kaha-se-le-2026"
            className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900">
            📖 Credit Facility Complete Guide Padho →
          </Link>
        </div>

        <CalcDisclaimer note="Interest rates aur payment bank-wise alag hoti hain. Actual figures ke liye apni bank branch se confirm karein." />
        <OtherCalcs current="/calculator/kcc-loan-emi" />
      </div>
    </>
  );
}