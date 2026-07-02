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

  const schema = {
    '@context':'https://schema.org','@type':'WebApplication',
    name:'PM Kisan Benefit Calculator 2026',
    url:'https://kisanstatus.com/calculator/pm-kisan-benefit',
    applicationCategory:'FinanceApplication',
    description:'PM Kisan Samman Nidhi benefit calculator — saalana ₹6000 ka hisaab lagao',
    offers:{'@type':'Offer',price:'0',priceCurrency:'INR'},
    author:{'@type':'Organization',name:'KisanStatus Team'},
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
      <CalcHeader
        emoji="🌾"
        title="PM Kisan Benefit Calculator 2026"
        subtitle="Kitni kist milegi, kitna total paisa — apne hisaab se calculate karo"
        breadcrumb="PM Kisan Benefit"
      />

      <div className="container-site max-w-2xl py-8">
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-sm text-[var(--color-text)]">
          <p><strong>🌾 PM Kisan Samman Nidhi</strong> mein eligible farmers ko saal mein <strong>₹6,000</strong> milte hain — ₹2,000 ki 3 kiston mein. Is calculator se pata karo ki tum kitna total benefit le sakte ho.</p>
        </div>

        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-[var(--color-text)] text-base mb-5 flex items-center gap-2">
            <span>🧮</span> Apna Detail Bharo
          </h2>

          <InputField
            label="Aap kitne saal se PM Kisan mein enrolled hain / rahenge?"
            value={years} onChange={setYears} min={1} placeholder="3"
            hint="Sirf enrolled saal count karo — pehle se registered ho to woh bhi"
          />
          <InputField
            label="Aapki zameen (hectare mein)"
            value={land} onChange={setLand} min={0} placeholder="2"
            hint="2 hectare = 5 acre. 2 se zyada wale eligible nahi hain"
          />
          <SelectField
            label="eKYC complete hai?"
            value={hasEkyc} onChange={setHasEkyc}
            options={[
              {value:'yes',label:'✅ Haan — complete hai'},
              {value:'no', label:'❌ Nahi — abhi pending hai'},
            ]}
          />
          <InputField
            label="Kitni kistein miss ho chuki hain? (agar koi)"
            value={missed} onChange={setMissed} min={0} placeholder="0"
            hint="Yeh arrears mein wapas milti hain jab problem fix hoti hai"
          />

          {!eligible ? (
            <div className="mt-4 p-5 bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-300 dark:border-orange-800 rounded-2xl text-center">
              <span className="text-3xl block mb-2">⚠️</span>
              {hasEkyc==='no' ? (
                <>
                  <p className="font-black text-orange-800 dark:text-orange-300 mb-1">eKYC Pending — Kist Rok Sakti Hai!</p>
                  <p className="text-sm text-orange-700 dark:text-orange-400 mb-3">Jab tak eKYC nahi hogi, payment nahi aayegi — chahe sab kuch sahi ho.</p>
                  <Link href="/articles/pm-kisan-ekyc-online-2026"
                    className="inline-flex items-center gap-2 bg-green-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    🔐 Free eKYC Guide Padho →
                  </Link>
                </>
              ) : (
                <>
                  <p className="font-black text-red-800 dark:text-red-400 mb-1">2 Hectare Se Zyada — Ineligible</p>
                  <p className="text-sm text-red-700 dark:text-red-400">PM Kisan ke liye 2 hectare (5 acre) tak ki zameen wale eligible hain.</p>
                </>
              )}
            </div>
          ) : (
            <div className="mt-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-800 rounded-2xl p-5">
              <p className="text-xs text-green-700 dark:text-green-300 font-bold uppercase tracking-wide mb-3">📊 Aapka PM Kisan Benefit</p>
              <ResultRow label="Har kist mein" value={fmt(2000)} />
              <ResultRow label="Saal mein (3 kist)" value={fmt(6000)} />
              <ResultRow label={`${y} saal ki kul kist`} value={`${totalI} installments`} />
              {arrears>0 && <ResultRow label={`Missed kist arrears (${missed})`} value={fmt(arrears)} />}
              <ResultRow label={`${y} Saal Ka Kul Laabh`} value={fmt(total + arrears)} bold />
              <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-800 text-xs text-green-700 dark:text-green-300">
                ✅ eKYC done + zameen 2 hectare tak = <strong>Aap eligible hain!</strong>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {icon:'💰',title:'₹6,000 Saalana',desc:'3 kiston mein — ₹2,000 har baar DBT se seedha bank mein'},
            {icon:'📅',title:'23vi Kist',desc:'Jun-Jul 2026 mein expected — eKYC complete honi chahiye'},
            {icon:'🔐',title:'eKYC Zaroori',desc:'Bina eKYC ke ek bhi kist nahi aayegi — abhi free mein karo'},
          ].map(({icon,title,desc})=>(
            <div key={title} className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-center shadow-sm">
              <span className="text-2xl block mb-1">{icon}</span>
              <p className="font-black text-[var(--color-text)] text-xs">{title}</p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-1">{desc}</p>
            </div>
          ))}
        </div>

        <CalcDisclaimer note="PM Kisan amounts government policy ke hisaab se change ho sakti hain. 23vi kist ki exact date ke liye pmkisan.gov.in check karein." />
        <OtherCalcs current="/calculator/pm-kisan-benefit" />

        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
          <p className="font-bold text-green-900 dark:text-green-300 text-sm mb-2">🔗 Related Guides</p>
          <div className="flex flex-wrap gap-2">
            {[
              {href:'/articles/pm-kisan-ekyc-online-2026',            l:'🔐 eKYC Guide'},
              {href:'/articles/pm-kisan-21vi-installment-status-check',l:'📅 Status Check'},
              {href:'/articles/pm-kisan-payment-failed-status-2026',   l:'💸 Payment Failed'},
              {href:'/articles/pm-kisan-rejected-list-2026',           l:'❌ Rejected Fix'},
            ].map(({href,l})=>(
              <Link key={href} href={href} className="text-xs px-3 py-1.5 bg-[var(--color-card)] border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 rounded-full hover:bg-green-600 hover:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-green-500">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}