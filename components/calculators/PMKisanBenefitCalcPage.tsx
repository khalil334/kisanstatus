'use client';

import { useState } from 'react';
import Link from 'next/link';
import { InputField, SelectField, ResultRow, fmt, OtherCalcs, CalcHeader, CalcDisclaimer } from './CalcShared';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-03-02T08:09:33+05:30';
const MODIFIED = '2026-04-05T09:08:11+05:30';

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

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

  return (
    <>

      <CalcHeader
        emoji="🌾"
        title="PM Kisan Calculator 2026"
        subtitle="Kitna paisa milega PM Kisan se — apne hisaab se calculate karo"
        breadcrumb="PM Kisan Paisa"
      />

      <div className="container-site max-w-2xl py-8">

        <div className="flex flex-wrap gap-3 text-xs text-[var(--color-text-muted)] mb-4">
          <span>✍️ <Link href="/about" className="underline hover:text-[var(--color-text)]">{AUTHOR_NAME}</Link></span>
          <span>📅 {fmtDate(PUBLISHED)}</span>
          <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
        </div>

        <div className="mb-6 p-5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-sm text-[var(--color-text)] leading-relaxed">
          <p className="font-bold text-green-900 dark:text-green-300 mb-2">🌾 PM Kisan Se Kitna Paisa Milega</p>
          <p className="mb-2">
            <strong>PM Kisan Samman Nidhi</strong> ke tahat har eligible kisan ko saal mein <strong>₹6,000</strong> milte hain, <strong>₹2,000 ki teen kist</strong> mein — direct bank account mein (DBT ke through).
          </p>
          <p className="mb-2">
            Hisaab lagayen to agar aap 3 saal se enrolled ho aur sab kist time par aayi hain, toh ab tak <strong>₹18,000</strong> mil chuke honge. 5 saal poore ho jayein toh ye figure <strong>₹30,000</strong> tak pahunch jata hai.
          </p>
          <p className="text-xs text-green-700 dark:text-green-300 mt-3">
            💡 Koi kist miss ho gayi ho toh ghabrao mat — eKYC aur bank seeding complete karo, arrears mein wapas mil jati hai.
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
                <p>Aap {y} saal se PM Kisan mein ho. Har saal ₹6,000 milte hain (₹2,000 ki 3 kist). Total {totalI} kist aa chuki hain ya aayengi. Kul {fmt(total)} mile hain. Agar {missed} kist miss hui thi to arrears mein {fmt(arrears)} milenge. Total {fmt(total + arrears)} milenge.</p>
              </div>

              <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-800 text-xs text-green-700 dark:text-green-300">
                ✅ eKYC done + zameen 2 hectare tak = <strong>Aap eligible hain!</strong>
              </div>
            </div>
          )}
        </div>

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
                    <td className="p-2 text-right font-bold text-green-700">{fmt((y-5)*6000)}</td>
                  </tr>
                )}
                <tr className="bg-green-100 dark:bg-green-900/30 font-bold">
                  <td className="p-2" colSpan={4}>Kul {y} Saal</td>
                  <td className="p-2 text-right text-green-800 dark:text-green-300">{fmt(y*6000)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-5 shadow-sm">
          <h3 className="font-black text-[var(--color-text)] text-sm mb-4">📝 PM Kisan Mein Register Kaise Ho</h3>
          <div className="space-y-3">
            {[
              {n:1,s:'Nazdiki CSC center jao, ya seedha pmkisan.gov.in par online apply kar do'},
              {n:2,s:'Documents ready rakho: Aadhaar, bank passbook, land records (khasra), mobile number'},
              {n:3,s:'Form mein naam, pata, bank details aur zameen ki details bharo'},
              {n:4,s:'Uske baad verification hoti hai — 7-14 din mein status check karte rehna'},
              {n:5,s:'Saath mein eKYC bhi complete kar lo — Aadhaar se link karke'},
              {n:6,s:'Sab sahi raha toh pehli kist 2-3 mahine mein bank account mein aa jati hai'},
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

        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl">
          <p className="font-bold text-yellow-900 dark:text-yellow-300 text-sm mb-2">⚠️ PM Kisan Mein Aksar Yeh Galtiyan Hoti Hain:</p>
          <ul className="space-y-1.5 text-xs text-yellow-800 dark:text-yellow-400">
            <li>❌ eKYC ko taalna — isse kist rukti hai aur arrears mein fasna padta hai</li>
            <li>❌ Bank account Aadhaar se link na hona — jiski wajah se payment fail ho jati hai</li>
            <li>❌ Land records mein galti — naam ya area match na hone par application reject ho jata hai</li>
            <li>❌ Mobile number badal jana bina update kiye — OTP nahi aata, eKYC atak jati hai</li>
            <li>❌ Status kabhi check hi na karna — pata hi nahi chalta ki kist aayi ya nahi</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="font-black text-[var(--color-text)] text-sm mb-3">💡 PM Kisan Se Maximum Fayda Kaise Uthao</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-bold text-green-900 dark:text-green-300 mb-1">⏰ Time Par eKYC Karo</p>
              <p className="text-green-800 dark:text-green-400">Har kist se pehle eKYC dekh lo, complete nahi hai to kar lo — CSC center aur online, dono free hain</p>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-bold text-blue-900 dark:text-blue-300 mb-1">🏦 Bank Account Check Karo</p>
              <p className="text-blue-800 dark:text-blue-400">Bank account Aadhaar se linked aur active hona chahiye — PFMS portal se ek baar confirm kar lo</p>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <p className="font-bold text-purple-900 dark:text-purple-300 mb-1">📊 Status Regular Check Karo</p>
              <p className="text-purple-800 dark:text-purple-400">pmkisan.gov.in par mahine mein ek baar status dekh lena achhi aadat hai, problem miley toh turant fix karo</p>
            </div>
            <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-bold text-amber-900 dark:text-amber-300 mb-1">📄 Documents Update Rakho</p>
              <p className="text-amber-800 dark:text-amber-400">Naam, pata ya bank details badle to turant update kar do, warna payment fail ho sakti hai</p>
            </div>
          </div>
        </div>

        <CalcDisclaimer note="PM Kisan amounts government policy ke hisaab se change ho sakte hain. Exact status ke liye pmkisan.gov.in check karo. Yeh calculator sirf estimate hai." />

        <OtherCalcs current="/calculator/pm-kisan-benefit" />

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

        <div className="mt-6 p-5 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl">
          <p className="font-bold text-[var(--color-text)] text-sm mb-3">❓ PM Kisan Ke Baare Mein Aksar Sawaal</p>
          <div className="space-y-3 text-xs">
            <details className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-3">
              <summary className="font-bold text-[var(--color-text)] cursor-pointer">PM Kisan mein kitna paisa milta hai?</summary>
              <p className="mt-2 text-[var(--color-text-muted)]">Saal mein ₹6,000 milte hain — ₹2,000 ki teen kist mein, April, August aur December ke aas-paas. 5 saal poore hone tak ye ₹30,000 tak pahunch jata hai. Paisa seedha bank account mein transfer hota hai.</p>
            </details>
            <details className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-3">
              <summary className="font-bold text-[var(--color-text)] cursor-pointer">PM Kisan ke liye kaun eligible hai?</summary>
              <p className="mt-2 text-[var(--color-text-muted)]">2 hectare (5 acre) tak zameen wale kisan eligible hote hain — chahe land owner ho ya tenant farmer. SC/ST/OBC sab shamil hain. bas eKYC complete honi chahiye aur bank account Aadhaar se linked hona chahiye.</p>
            </details>
            <details className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-3">
              <summary className="font-bold text-[var(--color-text)] cursor-pointer">Kist nahi aayi to kya karu?</summary>
              <p className="mt-2 text-[var(--color-text-muted)]">Sabse pehle pmkisan.gov.in par status check karo, wahan problem dikh jayegi. eKYC pending hai toh wo karo, bank seeding nahi hai toh bank jao, land records galat hai toh patwari se milo. Zyadatar cases 72 ghante mein fix ho jate hain.</p>
            </details>
            <details className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-3">
              <summary className="font-bold text-[var(--color-text)] cursor-pointer">eKYC kaise karein?</summary>
              <p className="mt-2 text-[var(--color-text-muted)]">Teen tarike hain — PM Kisan portal par online Aadhaar OTP se, nazdiki CSC center par biometric se, ya mobile app se. Teeno free hain aur 5 minute mein ho jata hai.</p>
            </details>
            <details className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-3">
              <summary className="font-bold text-[var(--color-text)] cursor-pointer">Missed kist ka paisa milega?</summary>
              <p className="mt-2 text-[var(--color-text-muted)]">Haan, agar problem fix ho gayi hai toh missed kist arrears mein wapas mil jati hai. Jaise, 2 kist miss hui aur ab eKYC ho gayi, toh ₹4,000 arrears mein aa jayenge. Bas dekhna, kuch cases mein isse claim karne ki time limit hoti hai, isliye jaldi kar lena behtar hai.</p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}
