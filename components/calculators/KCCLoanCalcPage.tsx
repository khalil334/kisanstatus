'use client';

import { useState } from 'react';
import Link from 'next/link';
import { InputField, SelectField, ResultRow, fmt, OtherCalcs, CalcHeader, CalcDisclaimer } from './CalcShared';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-02-23T09:36:02+05:30';
const MODIFIED = '2026-04-16T08:42:49+05:30';

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

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

  const subsidy = Number(rate)<=7
    ? Math.min(P*0.02*(N/12), totalInterest)
    : 0;
  const effectiveCost = totalPayable - subsidy;

  return (
    <>

      <CalcHeader
        emoji="🏦"
        title="KCC Loan EMI Calculator 2026"
        subtitle="Kisan Credit Card loan ki monthly EMI, total interest aur government subsidy jaano"
        breadcrumb="KCC Loan EMI"
      />

      <div className="container-site max-w-2xl py-8">

        <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
          <span><Link href="/about" className="underline hover:text-gray-700">{AUTHOR_NAME}</Link></span>
          <span>{fmtDate(PUBLISHED)}</span>
          <span>Updated: {fmtDate(MODIFIED)}</span>
        </div>

        <div className="mb-6 p-5 bg-blue-50 border border-blue-200 rounded-xl text-sm text-gray-700 leading-relaxed">
          <p className="font-bold text-blue-900 mb-2">🏦 KCC Loan Lene Se Pehle EMI Jaan Lo</p>
          <p className="mb-2">
            Loan lene se pehle sabse pehla sawaal yahi aata hai — <strong>monthly kitna dena padega</strong>, aur <strong>total kitna interest ban jayega</strong>. Neeche calculator mein daal ke turant pata chal jayega.
          </p>
          <p className="mb-2">
            Waise KCC dusre loans se kaafi sasta padta hai — <strong>₹3 lakh tak bina collateral</strong> mil jata hai, interest bhi <strong>7%</strong> se shuru hota hai, aur agar time pe chuka do to <strong>2% ki subsidy</strong> upar se milti hai. Yani effective rate <strong>4-5%</strong> tak neeche aa jata hai — market ke doosre loans se kaafi kam.
          </p>
          <p className="text-xs text-blue-700 mt-3">
             Ek example se samjho: ₹1 lakh 7% par 12 mahine ke liye lo to EMI ₹8,653 banti hai, total interest ₹3,832. Par subsidy mil jaye to us mein se ₹2,000 wapas bach jate hain.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-gray-900 text-base mb-5">Loan Details Bharo</h2>

          <SelectField
            label="Loan kis kaam ke liye chahiye?"
            value={purpose} onChange={setPurpose}
            options={[
              {value:'crop',    label:'🌾 Kheti ke liye (beej, khad, mazdoori)'},
              {value:'agri',    label:'🚜 Tractor, pump, equipment khareedne'},
              {value:'allied',  label:'🐄 Dairy, fishery, poultry ke liye'},
              {value:'personal',label:'🏠 Ghar ya personal kaam ke liye'},
            ]}
            hint="Kheti ke liye sabse sasta loan milta hai — 7% tak"
          />
          <InputField
            label="Kitna loan chahiye? (₹)"
            value={amount} onChange={setAmount} min={1000} placeholder="100000"
            hint="₹1.6 lakh tak bina collateral milta hai. ₹3 lakh tak possible hai. Apni zaroorat ke hisaab se lo"
          />
          <InputField
            label="Interest rate kitna hai? (% saalana)"
            value={rate} onChange={setRate} min={0} placeholder="7"
            hint="KCC loan par 7% milta hai. Time par repay karo to 2% subsidy se effective 4-5% ho jata hai"
          />
          <InputField
            label="Kitne mahine mein wapas karoge?"
            value={months} onChange={setMonths} min={1} placeholder="12"
            hint="Kheti loan usually 12 mahine (1 season). Equipment ke liye 3-5 saal tak mil sakta hai"
          />

          {emi>0 && (
            <div className="mt-4 bg-blue-50 border-2 border-blue-200 rounded-2xl p-5">
              <p className="text-xs text-blue-700 font-bold uppercase tracking-wide mb-3">Aapki EMI Details</p>
              <ResultRow label="Monthly EMI" value={fmt(emi)} bold />
              <ResultRow label="Total Interest" value={fmt(totalInterest)} />
              <ResultRow label="Total Repayment" value={fmt(totalPayable)} />
              {subsidy>0 && (
                <>
                  <div className="my-2 pt-2 border-t border-blue-200">
                    <p className="text-xs text-blue-600 font-semibold mb-2">Government Subsidy (2% Interest Subvention)</p>
                    <ResultRow label="2% Subsidy Bachat" value={`-${fmt(subsidy)}`} />
                    <ResultRow label="Effective Cost (Subsidy ke baad)" value={fmt(effectiveCost)} bold highlight />
                  </div>
                  <p className="text-xs text-blue-600 mt-2">Time par repay karo — ₹{fmt(subsidy).replace('₹','')} extra bachenge!</p>
                </>
              )}

              <div className="mt-4 p-3 bg-white rounded-xl text-xs text-gray-700">
                <p className="font-bold mb-1">Iska Matlab Kya Hai?</p>
                <p>Aapne {fmt(P)} ka loan liya {rate}% interest par {months} mahine ke liye. Har mahine {fmt(emi)} dena hoga. Total {fmt(totalInterest)} interest dena padega. Par agar time par repay kiya to {fmt(subsidy)} ki subsidy milegi — effective cost sirf {fmt(effectiveCost)} hogi.</p>
              </div>
            </div>
          )}

          <div className="mt-5 grid grid-cols-2 gap-2">
            {[
              {t:'₹3 Lakh',d:'Maximum loan limit'},
              {t:'7% Rate',d:'Subsidized interest'},
              {t:'4% Effective',d:'Subsidy ke baad'},
              {t:'12 Mahine',d:'Kheti loan period'},
            ].map(({t,d})=>(
              <div key={t} className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <p className="font-black text-blue-700 text-sm">{t}</p>
                <p className="text-[11px] text-gray-500">{d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <h3 className="font-black text-gray-900 text-sm mb-4">KCC Loan Kaise Le — Step by Step</h3>
          <div className="space-y-3">
            {[
              {n:1,s:'Nazdiki bank jao — SBI, PNB, Bank of Baroda, ya koi cooperative bank jo kisan loan deta ho'},
              {n:2,s:'KCC application form maango, ye free milta hai. Chaho to bank ki website se online bhi apply kar sakte ho'},
              {n:3,s:'Documents pehle se ready rakho: Aadhaar, PAN, land records (khasra/khatauni), bank passbook, 2 photo'},
              {n:4,s:'Form bhar ke jama karo — bank usually 7-14 din mein verify kar deta hai, kabhi field inspection bhi ho jati hai'},
              {n:5,s:'Approve hone par ek KCC card milega, dekhne mein ATM card jaisa — limit turant use kar sakte ho'},
              {n:6,s:'Zaroorat par paisa nikalo, aur fasal bikne ke baad chuka do — tabhi 2% subsidy ka fayda milega'},
            ].map(({n,s})=>(
              <div key={n} className="flex gap-3 items-start">
                <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{n}</span>
                <p className="text-sm text-gray-700">{s}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl">
            <p className="text-xs text-green-800 font-bold mb-1">Documents Checklist:</p>
            <ul className="text-xs text-green-700 space-y-0.5 ml-4">
              <li>✓ Aadhaar card + PAN card</li>
              <li>✓ Land records (7/12 extract, khasra, khatauni)</li>
              <li>✓ Bank passbook (pichhle 6 mahine ka)</li>
              <li>✓ Passport size photos (2-4)</li>
              <li>✓ Caste certificate (agar SC/ST/OBC ho to subsidy zyada)</li>
            </ul>
          </div>

          <Link href="/articles/KisanCreditCardOnlineApply2026"
            className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900">
             KCC Loan Complete Guide Padho →
          </Link>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="font-bold text-yellow-900 text-sm mb-2">KCC Loan Mein Aksar Yeh Galtiyan Hoti Hain:</p>
          <ul className="space-y-1.5 text-xs text-yellow-800">
            <li>Time par repay nahi karna — isse na sirf subsidy chhoot jati hai, interest bhi badh jata hai</li>
            <li>Zaroorat se zyada loan le lena — jitna lo utna hi wapas karna aasan rahega</li>
            <li>Purpose galat bata dena — bank verify karta hai, pakde gaye to blacklist ho sakte ho</li>
            <li>Land records mein gadbad — ye bhi verify hote hain, fraud case tak ban sakta hai</li>
            <li>EMI baar baar miss karna — CIBIL kharab hota hai, aage loan milna mushkil ho jata hai</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="font-black text-gray-900 text-sm mb-3">KCC Loan Se Maximum Fayda Kaise Uthao</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-green-50 border border-green-200 rounded-xl">
              <p className="font-bold text-green-900 mb-1">Sahi Amount Lo</p>
              <p className="text-green-800">Zaroorat jitna hi lo — ₹1 lakh chahiye to ₹1 lakh lo, poori limit use karne ki zaroorat nahi. Zyada loan matlab zyada interest bhi</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="font-bold text-blue-900 mb-1">Time Par Repay Karo</p>
              <p className="text-blue-800">Fasal bik jaye toh der mat karo — jaldi chuka doge to subsidy ka fayda bhi milega aur CIBIL bhi accha rahega</p>
            </div>
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl">
              <p className="font-bold text-purple-900 mb-1">🏦 Sahi Bank Chuno</p>
              <p className="text-purple-800">SBI, PNB, BoB jaise banks mein process fast hota hai, cooperative banks kai baar zyada flexible nikalte hain — dono compare karke dekho</p>
            </div>
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="font-bold text-amber-900 mb-1">Hisab Rakho</p>
              <p className="text-amber-800">Loan ka paisa kahan gaya, iska record rakho — bank kabhi audit kar sakta hai, toh receipts sambhal ke rakhna behtar hai</p>
            </div>
          </div>
        </div>

        <CalcDisclaimer note="Interest rates bank-wise alag hote hain. Kuch banks 9% tak charge karte hain. Actual EMI aur terms ke liye apni bank branch se confirm karo. Yeh calculator sirf estimate hai." />

        <OtherCalcs current="/calculator/kcc-loan-emi" />

        <div className="mt-6 p-5 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="font-bold text-blue-900 text-sm mb-3">KCC Loan Se Related Guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Link href="/articles/KisanCreditCardOnlineApply2026" className="p-3 bg-white border border-blue-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
               KCC Loan Apply — Complete Guide
            </Link>
            <Link href="/articles/KisanRinKahaSeLe2026" className="p-3 bg-white border border-blue-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
               Kisan Loan Kahan Se Le — 5 Options
            </Link>
            <Link href="/articles/PmKisan24viKist2026" className="p-3 bg-white border border-blue-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
               PM Kisan Status — ₹6,000 Free
            </Link>
            <Link href="/articles/PmfbyCropInsurance2026" className="p-3 bg-white border border-blue-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
               Fasal Bima — Loan ke sath zaroori
            </Link>
            <Link href="/calculator/crop-profit" className="p-3 bg-white border border-blue-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
               Kheti Munafa Calculator
            </Link>
            <Link href="/calculator/installment-tracker" className="p-3 bg-white border border-blue-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
               Kist Status Tracker
            </Link>
          </div>
        </div>

        <div className="mt-6 p-5 bg-gray-50 border border-gray-200 rounded-xl">
          <p className="font-bold text-gray-900 text-sm mb-3">KCC Loan Ke Baare Mein Aksar Sawaal</p>
          <div className="space-y-3 text-xs">
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">KCC loan kitne din mein milta hai?</summary>
              <p className="mt-2 text-gray-700">Documents sahi hon to 7-14 din mein mil jata hai, kuch banks mein thoda zyada time bhi lag sakta hai — 21 din tak. Online apply karne se generally fast hota hai.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">KCC loan ka interest rate kya hai?</summary>
              <p className="mt-2 text-gray-700">₹3 lakh tak ke liye 7% saalana rate hai. Time par repay karo to 2% subsidy milti hai, aur effective rate 4-5% tak neeche aa jata hai — kisanon ke liye ye sabse sasta option hai.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">Kya KCC loan bina collateral milta hai?</summary>
              <p className="mt-2 text-gray-700">Haan, ₹1.6 lakh tak bina collateral ke mil jata hai. Credit history accha ho to ₹3 lakh tak bhi mil sakta hai. Land documents dikhane padte hain, par mortgage nahi karna padta.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">KCC loan wapas nahi kiya to kya hoga?</summary>
              <p className="mt-2 text-gray-700">Interest 7% se badh ke 13-15% tak ho sakta hai, subsidy bhi nahi milegi. CIBIL score par bhi asar padta hai, jisse aage loan lena mushkil ho jata hai. Extreme cases mein bank legal action bhi le sakta hai — isliye time par chukana hi behtar hai.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">KCC loan kis kaam ke liye use kar sakte hain?</summary>
              <p className="mt-2 text-gray-700">Kheti ke liye — beej, khad, mazdoori; equipment ke liye — tractor, pump; allied activities jaise dairy, fishery, poultry; aur personal zaroorat jaise ghar repair, shaadi, padhai ke liye bhi. Par jis kaam ke liye le rahe ho, wo bank ko batana padta hai.</p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}
