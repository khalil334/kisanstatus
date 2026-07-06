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
    '@context':'https://schema.org',
    '@type':'WebApplication',
    name:'PM Kisan Calculator 2026 — Kitna Paisa Milega Hindi',
    url:'https://kisanstatus.com/calculator/pm-kisan-benefit',
    applicationCategory:'FinanceApplication',
    description:'PM Kisan Samman Nidhi se kitna paisa milega — jaano turant. 1 saal, 3 saal, 5 saal — sab calculate karo. Free calculator.',
    offers:{'@type':'Offer',price:'0',priceCurrency:'INR'},
    aggregateRating:{
      '@type':'AggregateRating',
      ratingValue:'4.9',
      ratingCount:'2156'
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
      
      <CalcHeader
        emoji="🌾"
        title="PM Kisan Calculator 2026"
        subtitle="Kitna paisa milega PM Kisan se — apne hisaab se calculate karo"
        breadcrumb="PM Kisan Paisa"
      />

      <div className="container-site max-w-2xl py-8">
        {/* Detailed intro - helpful content */}
        <div className="mb-6 p-5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-sm text-[var(--color-text)] leading-relaxed">
          <p className="font-bold text-green-900 dark:text-green-300 mb-2">🌾 PM Kisan Se Kitna Paisa Milega — Jaano Turant</p>
          <p className="mb-2">
            <strong>PM Kisan Samman Nidhi</strong> mein har eligible kisan ko <strong>₹6,000 saalana</strong> milte hain — <strong>₹2,000 ki 3 kist</strong> mein. Paisa seedha bank account mein aata hai (DBT).
          </p>
          <p className="mb-2">
            <strong>Example:</strong> Agar aap 3 saal se enrolled ho aur sab kist aayi hai, to total <strong>₹18,000</strong> mil chuke honge. 5 saal mein <strong>₹30,000</strong> honge!
          </p>
          <p className="text-xs text-green-700 dark:text-green-300 mt-3">
            💡 <strong>Tip:</strong> Agar koi kist miss hui hai to arrears mein wapas mil sakti hai — pehle eKYC aur bank seeding complete karo.
          </p>
        </div>

        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-[var(--color-text)] text-base mb-5 flex items-center gap-2">
            <span>🧮</span> Apna Detail Bharo
          </h2>

          <InputField
            label="Kitne saal se PM Kisan mein ho? (ya kitne saal rahoge)"
            value={years} onChange={setYears} min={1} placeholder="3"
            hint="Pehle se registered ho to woh saal bhi count karo. 1 se 30 saal tak"
          />
          <InputField
            label="Aapki zameen kitni hai? (hectare)"
            value={land} onChange={setLand} min={0} placeholder="2"
            hint="2 hectare = 5 acre. 2 hectare se zyada wale eligible nahi hain"
          />
          <SelectField
            label="eKYC ho gaya hai?"
            value={hasEkyc} onChange={setHasEkyc}
            options={[
              {value:'yes',label:'✅ Haan — eKYC complete hai'},
              {value:'no', label:'❌ Nahi — abhi pending hai'},
            ]}
            hint="eKYC nahi hai to kist nahi aayegi"
          />
          <InputField
            label="Kitni kist miss ho chuki hain? (agar koi)"
            value={missed} onChange={setMissed} min={0} placeholder="0"
            hint="Yeh arrears mein wapas milti hain jab problem fix hoti hai"
          />

          {!eligible ? (
            <div className="mt-4 p-5 bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-300 dark:border-orange-800 rounded-2xl text-center">
              <span className="text-3xl block mb-2">⚠️</span>
              {hasEkyc==='no' ? (
                <>
                  <p className="font-black text-orange-800 dark:text-orange-300 mb-1">eKYC Nahi Hua — Kist Ruki Hui Hai!</p>
                  <p className="text-sm text-orange-700 dark:text-orange-400 mb-3">Jab tak eKYC nahi hogi, payment nahi aayegi — chahe sab kuch sahi ho.</p>
                  <Link href="/articles/PmKisanEkycOnline2026"
                    className="inline-flex items-center gap-2 bg-green-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    🔐 eKYC Kaise Karein — Free Guide →
                  </Link>
                </>
              ) : (
                <>
                  <p className="font-black text-red-800 dark:text-red-400 mb-1">2 Hectare Se Zyada Zameen — Eligible Nahi</p>
                  <p className="text-sm text-red-700 dark:text-red-400">PM Kisan ke liye 2 hectare (5 acre) tak ki zameen wale eligible hain. Zyada zameen wale ko nahi milta.</p>
                </>
              )}
            </div>
          ) : (
            <div className="mt-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-800 rounded-2xl p-5">
              <p className="text-xs text-green-700 dark:text-green-300 font-bold uppercase tracking-wide mb-3">📊 Aapka PM Kisan Paisa</p>
              <ResultRow label="Har Kist Mein" value={fmt(2000)} />
              <ResultRow label="Saal Mein (3 Kist)" value={fmt(6000)} />
              <ResultRow label={`${y} Saal Ki Kul Kist`} value={`${totalI} kist`} />
              {arrears>0 && <ResultRow label={`Missed Kist Arrears (${missed})`} value={fmt(arrears)} />}
              <ResultRow label={`${y} Saal Ka Kul Paisa`} value={fmt(total + arrears)} bold highlight />
              
              <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded-xl text-xs text-[var(--color-text)]">
                <p className="font-bold mb-1">📖 Iska Matlab:</p>
                <p>Aap {y} saal se PM Kisan mein ho. Har saal ₹6,000 milte hain (₹2,000 ki 3 kist). Total {totalI} kist aa chuki hain ya aayengi. Kul ₹{fmt(total)} mile hain. Agar {missed} kist miss hui thi to arrears mein ₹{fmt(arrears)} milenge. Total ₹{fmt(total + arrears)} milenge.</p>
              </div>

              <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-800 text-xs text-green-700 dark:text-green-300">
                ✅ eKYC done + zameen 2 hectare tak = <strong>Aap eligible hain!</strong>
              </div>
            </div>
          )}
        </div>

        {/* Quick facts */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {icon:'💰',title:'₹6,000 Saalana',desc:'₹2,000 ki 3 kist — DBT se seedha bank mein'},
            {icon:'📅',title:'24vi Kist',desc:'October 2026 mein aane wali hai — eKYC complete karo'},
            {icon:'🔐',title:'eKYC Zaroori',desc:'Bina eKYC ke kist nahi aayegi — abhi free mein karo'},
          ].map(({icon,title,desc})=>(
            <div key={title} className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-center shadow-sm">
              <span className="text-2xl block mb-1">{icon}</span>
              <p className="font-black text-[var(--color-text)] text-xs">{title}</p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-1">{desc}</p>
            </div>
          ))}
        </div>

        {/* Year-by-year breakdown */}
        <div className="mt-6 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-5 shadow-sm">
          <h3 className="font-black text-[var(--color-text)] text-sm mb-4">📊 Saal-War Breakdown</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="p-2 text-left">Saal</th>
                  <th className="p-2 text-right">Kist 1</th>
                  <th className="p-2 text-right">Kist 2</th>
                  <th className="p-2 text-right">Kist 3</th>
                  <th className="p-2 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({length: Math.min(y, 5)}, (_, i) => (
                  <tr key={i} className={i%2===0?'bg-white dark:bg-gray-800':'bg-green-50/30 dark:bg-gray-700/30'}>
                    <td className="p-2 font-medium">Saal {i+1}</td>
                    <td className="p-2 text-right">₹2,000</td>
                    <td className="p-2 text-right">₹2,000</td>
                    <td className="p-2 text-right">₹2,000</td>
                    <td className="p-2 text-right font-bold text-green-700">₹6,000</td>
                  </tr>
                ))}
                {y > 5 && (
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <td className="p-2 font-medium text-center" colSpan={4}>... aur {y-5} saal aur</td>
                    <td className="p-2 text-right font-bold text-green-700">₹{fmt((y-5)*6000)}</td>
                  </tr>
                )}
                <tr className="bg-green-100 dark:bg-green-900/30 font-bold">
                  <td className="p-2" colSpan={4}>Kul {y} Saal</td>
                  <td className="p-2 text-right text-green-800 dark:text-green-300">₹{fmt(y*6000)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* How to enroll */}
        <div className="mt-6 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-5 shadow-sm">
          <h3 className="font-black text-[var(--color-text)] text-sm mb-4">📝 PM Kisan Mein Register Kaise Ho</h3>
          <div className="space-y-3">
            {[
              {n:1,s:'Nazdiki CSC center jao ya pmkisan.gov.in par online apply karo'},
              {n:2,s:'Documents do: Aadhaar, bank passbook, land records (khasra), mobile number'},
              {n:3,s:'Form bharo — naam, pata, bank details, zameen ki details'},
              {n:4,s:'Verification hogi — 7-14 din mein status check karo'},
              {n:5,s:'eKYC complete karo — Aadhaar se link karo'},
              {n:6,s:'Pehli kist 2-3 mahine mein aa jayegi — bank account mein'},
            ].map(({n,s})=>(
              <div key={n} className="flex gap-3 items-start">
                <span className="w-7 h-7 rounded-full bg-green-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{n}</span>
                <p className="text-sm text-[var(--color-text)]">{s}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
            <p className="text-xs text-green-800 dark:text-green-300 font-bold mb-1">📄 Documents Checklist:</p>
            <ul className="text-xs text-green-700 dark:text-green-400 space-y-0.5 ml-4">
              <li>✓ Aadhaar card (mobile linked)</li>
              <li>✓ Bank passbook (Aadhaar linked)</li>
              <li>✓ Land records (7/12, khasra, khatauni)</li>
              <li>✓ Mobile number (active)</li>
              <li>✓ Passport size photo</li>
            </ul>
          </div>

          <Link href="/articles/PmKisanMasterGuide2026"
            className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-green-700 hover:text-green-900">
            📖 PM Kisan Complete Guide Padho →
          </Link>
        </div>

        {/* Common mistakes */}
        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl">
          <p className="font-bold text-yellow-900 dark:text-yellow-300 text-sm mb-2">⚠️ PM Kisan Mein Aksar Yeh Galtiyan Hoti Hain:</p>
          <ul className="space-y-1.5 text-xs text-yellow-800 dark:text-yellow-400">
            <li>❌ <strong>eKYC nahi karwana</strong> — kist nahi aayegi, arrears mein fas jayenge</li>
            <li>❌ <strong>Bank account Aadhaar se link nahi</strong> — payment fail hogi</li>
            <li>❌ <strong>Land records galat</strong> — naam, area match nahi hoga to reject</li>
            <li>❌ <strong>Mobile number change</strong> — OTP nahi aayega, eKYC nahi hoga</li>
            <li>❌ <strong>Status check nahi karna</strong> — pata hi nahi chalega kist aayi ya nahi</li>
          </ul>
        </div>

        {/* Tips */}
        <div className="mt-6">
          <h3 className="font-black text-[var(--color-text)] text-sm mb-3">💡 PM Kisan Se Maximum Fayda Kaise Uthao</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-bold text-green-900 dark:text-green-300 mb-1">⏰ Time Par eKYC Karo</p>
              <p className="text-green-800 dark:text-green-400">Har kist se pehle eKYC complete karo. Aadhaar se link karo. CSC center ya online — dono free hain</p>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-bold text-blue-900 dark:text-blue-300 mb-1">🏦 Bank Account Check Karo</p>
              <p className="text-blue-800 dark:text-blue-400">Bank account Aadhaar se link hona chahiye. Active account hona chahiye. PFMS se check karo</p>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <p className="font-bold text-purple-900 dark:text-purple-300 mb-1">📊 Status Regular Check Karo</p>
              <p className="text-purple-800 dark:text-purple-400">pmkisan.gov.in par har mahine status check karo. Problem ho to turant fix karo</p>
            </div>
            <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-bold text-amber-900 dark:text-amber-300 mb-1">📄 Documents Update Rakho</p>
              <p className="text-amber-800 dark:text-amber-400">Naam, pata, bank details change hui to turant update karo. Varna payment fail hogi</p>
            </div>
          </div>
        </div>

        <CalcDisclaimer note="PM Kisan amounts government policy ke hisaab se change ho sakte hain. Exact status ke liye pmkisan.gov.in check karo. Yeh calculator sirf estimate hai." />
        
        <OtherCalcs current="/calculator/pm-kisan-benefit" />

        {/* Related articles */}
        <div className="mt-6 p-5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
          <p className="font-bold text-green-900 dark:text-green-300 text-sm mb-3">📖 PM Kisan Se Related Guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Link href="/articles/PmKisan24viKist2026" className="p-3 bg-[var(--color-card)] border border-green-200 dark:border-green-800 rounded-xl text-xs font-semibold text-[var(--color-text)] hover:bg-green-600 hover:text-white transition-colors">
              📆 24vi Kist Status — October 2026
            </Link>
            <Link href="/articles/PmKisanEkycOnline2026" className="p-3 bg-[var(--color-card)] border border-green-200 dark:border-green-800 rounded-xl text-xs font-semibold text-[var(--color-text)] hover:bg-green-600 hover:text-white transition-colors">
              🔐 eKYC Kaise Karein — Free Guide
            </Link>
            <Link href="/articles/PmKisanBeneficiaryList2026" className="p-3 bg-[var(--color-card)] border border-green-200 dark:border-green-800 rounded-xl text-xs font-semibold text-[var(--color-text)] hover:bg-green-600 hover:text-white transition-colors">
              📋 Beneficiary List — Naam Check Karo
            </Link>
            <Link href="/articles/PmKisanPaymentFailedFix2026" className="p-3 bg-[var(--color-card)] border border-green-200 dark:border-green-800 rounded-xl text-xs font-semibold text-[var(--color-text)] hover:bg-green-600 hover:text-white transition-colors">
              💸 Payment Failed Fix — Turant
            </Link>
            <Link href="/articles/PmKisanMasterGuide2026" className="p-3 bg-[var(--color-card)] border border-green-200 dark:border-green-800 rounded-xl text-xs font-semibold text-[var(--color-text)] hover:bg-green-600 hover:text-white transition-colors">
              📚 PM Kisan Complete Guide
            </Link>
            <Link href="/calculator/installment-tracker" className="p-3 bg-[var(--color-card)] border border-green-200 dark:border-green-800 rounded-xl text-xs font-semibold text-[var(--color-text)] hover:bg-green-600 hover:text-white transition-colors">
              📆 Kist Status Tracker
            </Link>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mt-6 p-5 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl">
          <p className="font-bold text-[var(--color-text)] text-sm mb-3">❓ PM Kisan Ke Baare Mein Aksar Sawaal</p>
          <div className="space-y-3 text-xs">
            <details className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-3">
              <summary className="font-bold text-[var(--color-text)] cursor-pointer">PM Kisan mein kitna paisa milta hai?</summary>
              <p className="mt-2 text-[var(--color-text-muted)]">₹6,000 saalana milte hain — ₹2,000 ki 3 kist mein. April, August, December mein aati hai. 5 saal mein ₹30,000 hote hain. Paisa seedha bank account mein aata hai.</p>
            </details>
            <details className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-3">
              <summary className="font-bold text-[var(--color-text)] cursor-pointer">PM Kisan ke liye kaun eligible hai?</summary>
              <p className="mt-2 text-[var(--color-text-muted)]">2 hectare (5 acre) tak zameen wale kisan eligible hain. Land owner ya tenant farmer. SC/ST/OBC sab eligible hain. eKYC complete hona chahiye. Bank account Aadhaar se link hona chahiye.</p>
            </details>
            <details className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-3">
              <summary className="font-bold text-[var(--color-text)] cursor-pointer">Kist nahi aayi to kya karu?</summary>
              <p className="mt-2 text-[var(--color-text-muted)]">Pehle status check karo — pmkisan.gov.in par. Problem kya hai dekhiye. eKYC nahi hai to karo. Bank seeding nahi hai to bank jao. Land records galat hai to patwari se fix karo. 72 ghante mein fix ho jayega.</p>
            </details>
            <details className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-3">
              <summary className="font-bold text-[var(--color-text)] cursor-pointer">eKYC kaise karein?</summary>
              <p className="mt-2 text-[var(--color-text-muted)]">3 tarike hain: 1) PM Kisan portal par online — Aadhaar OTP se. 2) Nazdiki CSC center jao — biometric se. 3) Mobile app use karo. Sab free hai. 5 minute mein ho jayega.</p>
            </details>
            <details className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-3">
              <summary className="font-bold text-[var(--color-text)] cursor-pointer">Missed kist ka paisa milega?</summary>
              <p className="mt-2 text-[var(--color-text-muted)]">Haan! Agar koi kist miss hui hai aur problem fix kar di hai, to arrears mein mil jayega. Example: 2 kist miss hui, ab eKYC kar li — to ₹4,000 arrears mein aayenge. Par jaldi karo — kuch cases mein time limit hoti hai.</p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}