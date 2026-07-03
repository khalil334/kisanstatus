'use client';

import { useState } from 'react';
import Link from 'next/link';
import { InputField, SelectField, ResultRow, fmt, OtherCalcs, CalcHeader, CalcDisclaimer } from './CalcShared';

export default function PMKisanBenefitCalcPage() {
  const [years, setYears]       = useState('3');
  const [land, setLand]         = useState('2');
  const [hasEkyc, setHasEkyc]   = useState('yes');
  const [missed, setMissed]     = useState('0');

  const y      = Math.max(1, Math.min(30, Number(years)||1));
  const landN  = Number(land)||0;
  const totalI = y * 3;
  const total  = totalI * 2000;
  const arrears= Number(missed) * 2000;
  const eligible = hasEkyc==='yes' && landN>0 && landN<=2;

  // Schema mein naye SEO keywords — "PM Kisan Benefit Calculator" repetitive tha
  const schema = {
    '@context':'https://schema.org',
    '@type':'WebApplication',
    name:'Agrarian Welfare Payment Estimator 2026',
    url:'https://kisanstatus.com/calculator/pm-kisan-benefit',
    applicationCategory:'FinanceApplication',
    description:'Cultivator benefit program ka total payment estimate karo — saalana ₹6000 ka hisaab lagao',
    offers:{'@type':'Offer',price:'0',priceCurrency:'INR'},
    author:{'@type':'Organization',name:'KisanStatus Team'},
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
      
      {/* Title aur breadcrumb mein naye keywords — "PM Kisan Benefit" purana tha */}
      <CalcHeader
        emoji="🌾"
        title="Cultivator Benefit Estimator 2026"
        subtitle="Kitni tranche milegi, kitna total payment — apne hisaab se estimate karo"
        breadcrumb="Benefit Estimator"
      />

      <div className="container-site max-w-2xl py-8">
        {/* Intro mein naye keywords — "PM Kisan Samman Nidhi" repetitive tha */}
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-sm text-[var(--color-text)]">
          <p><strong>🌾 Agrarian Welfare Scheme</strong> mein eligible cultivators ko saal mein <strong>₹6,000</strong> milte hain — ₹2,000 ki 3 tranches mein. Is tool se pata karo ki tum kitna total benefit le sakte ho.</p>
        </div>

        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-[var(--color-text)] text-base mb-5 flex items-center gap-2">
            <span>🧮</span> Apna Detail Bharo
          </h2>

          <InputField
            label="Aap kitne saal se scheme mein enrolled hain / rahenge?"
            value={years} onChange={setYears} min={1} placeholder="3"
            hint="Sirf enrolled saal count karo — pehle se registered ho to woh bhi"
          />
          <InputField
            label="Aapki zameen (hectare mein)"
            value={land} onChange={setLand} min={0} placeholder="2"
            hint="2 hectare = 5 acre. 2 se zyada wale eligible nahi hain"
          />
          <SelectField
            label="Digital verification complete hai?"
            value={hasEkyc} onChange={setHasEkyc}
            options={[
              {value:'yes',label:'✅ Haan — complete hai'},
              {value:'no', label:'❌ Nahi — abhi pending hai'},
            ]}
          />
          <InputField
            label="Kitni tranches miss ho chuki hain? (agar koi)"
            value={missed} onChange={setMissed} min={0} placeholder="0"
            hint="Yeh arrears mein wapas milti hain jab problem fix hoti hai"
          />

          {!eligible ? (
            <div className="mt-4 p-5 bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-300 dark:border-orange-800 rounded-2xl text-center">
              <span className="text-3xl block mb-2">⚠️</span>
              {hasEkyc==='no' ? (
                <>
                  <p className="font-black text-orange-800 dark:text-orange-300 mb-1">Digital Verification Pending — Tranche Rok Sakti Hai!</p>
                  <p className="text-sm text-orange-700 dark:text-orange-400 mb-3">Jab tak digital verification nahi hogi, payment nahi aayegi — chahe sab kuch sahi ho.</p>
                  {/* Link text mein naya keyword — "eKYC Guide" purana tha */}
                  <Link href="/articles/pm-kisan-ekyc-online-2026"
                    className="inline-flex items-center gap-2 bg-green-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    🔐 Free Digital Verification Guide Padho →
                  </Link>
                </>
              ) : (
                <>
                  <p className="font-black text-red-800 dark:text-red-400 mb-1">2 Hectare Se Zyada — Ineligible</p>
                  <p className="text-sm text-red-700 dark:text-red-400">Scheme ke liye 2 hectare (5 acre) tak ki zameen wale eligible hain.</p>
                </>
              )}
            </div>
          ) : (
            <div className="mt-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-800 rounded-2xl p-5">
              {/* Result section mein naye keywords — "PM Kisan Benefit" purana tha */}
              <p className="text-xs text-green-700 dark:text-green-300 font-bold uppercase tracking-wide mb-3">📊 Aapka Scheme Benefit</p>
              {/* Naye labels — "kist" repetitive tha */}
              <ResultRow label="Har tranche mein" value={fmt(2000)} />
              <ResultRow label="Saal mein (3 tranche)" value={fmt(6000)} />
              <ResultRow label={`${y} saal ki kul tranche`} value={`${totalI} installments`} />
              {arrears>0 && <ResultRow label={`Missed tranche arrears (${missed})`} value={fmt(arrears)} />}
              <ResultRow label={`${y} Saal Ka Kul Benefit`} value={fmt(total + arrears)} bold />
              <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-800 text-xs text-green-700 dark:text-green-300">
                ✅ Digital verification done + zameen 2 hectare tak = <strong>Aap eligible hain!</strong>
              </div>
            </div>
          )}
        </div>

        {/* Quick facts cards — naye keywords use kiye */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {icon:'💰',title:'₹6,000 Saalana',desc:'3 tranches mein — ₹2,000 har baar DBT se seedha bank mein'},
            {icon:'📅',title:'23vi Tranche',desc:'Jun-Jul 2026 mein expected — digital verification complete honi chahiye'},
            {icon:'🔐',title:'Digital Verification Zaroori',desc:'Bina verification ke ek bhi tranche nahi aayegi — abhi free mein karo'},
          ].map(({icon,title,desc})=>(
            <div key={title} className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-center shadow-sm">
              <span className="text-2xl block mb-1">{icon}</span>
              <p className="font-black text-[var(--color-text)] text-xs">{title}</p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-1">{desc}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer mein naye keywords — "PM Kisan" repetitive tha */}
        <CalcDisclaimer note="Scheme amounts government policy ke hisaab se change ho sakti hain. 23vi tranche ki exact date ke liye pmkisan.gov.in check karein." />
        <OtherCalcs current="/calculator/pm-kisan-benefit" />

        {/* Related guides — naye SEO labels use kiye */}
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
          <p className="font-bold text-green-900 dark:text-green-300 text-sm mb-2">🔗 Related Guides</p>
          <div className="flex flex-wrap gap-2">
            {[
              {href:'/articles/pm-kisan-ekyc-online-2026',            l:'🔐 Digital Verification Guide'},
              {href:'/articles/pm-kisan-21vi-installment-status-check',l:'📅 Verification Check'},
              {href:'/articles/pm-kisan-payment-failed-status-2026',   l:'💸 Payment Fix'},
              {href:'/articles/pm-kisan-rejected-list-2026',           l:'❌ Rejection Fix'},
            ].map(({href,l})=>(
              <Link key={href} href={href} className="text-xs px-3 py-1.5 bg-[var(--color-card)] border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 rounded-full hover:bg-green-600 hover:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-green-500">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}