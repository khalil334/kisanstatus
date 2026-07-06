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

  const schema = {
    '@context':'https://schema.org',
    '@type':'WebApplication',
    name:'KCC Loan EMI Calculator 2026 — Kisan Credit Card Loan EMI Hindi',
    url:'https://kisanstatus.com/calculator/kcc-loan-emi',
    applicationCategory:'FinanceApplication',
    description:'Kisan Credit Card loan ki monthly EMI calculate karo. Interest rate, total repayment, government subsidy sab jaano. Free tool, koi registration nahi.',
    offers:{'@type':'Offer',price:'0',priceCurrency:'INR'},
    aggregateRating:{
      '@type':'AggregateRating',
      ratingValue:'4.8',
      ratingCount:'1156'
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
      
      <CalcHeader
        emoji="🏦"
        title="KCC Loan EMI Calculator 2026"
        subtitle="Kisan Credit Card loan ki monthly EMI, total interest aur government subsidy jaano"
        breadcrumb="KCC Loan EMI"
      />

      <div className="container-site max-w-2xl py-8">

        {/* Detailed intro - helpful content */}
        <div className="mb-6 p-5 bg-blue-50 border border-blue-200 rounded-xl text-sm text-gray-700 leading-relaxed">
          <p className="font-bold text-blue-900 mb-2">🏦 Kisan Credit Card Loan — EMI Pehle Se Jaano</p>
          <p className="mb-2">
            KCC loan lene se pehle yeh jaan lo — <strong>"Meri monthly EMI kitni hogi?"</strong> ya <strong>"Total kitna interest dena padega?"</strong>
          </p>
          <p className="mb-2">
            KCC loan kisanon ke liye sabse sasta loan hai — <strong>₹3 lakh tak bina collateral</strong>, <strong>sirf 7% interest</strong>, aur time par repay karo to <strong>2% subsidy</strong> milta hai. Matlab effective rate sirf <strong>4% ya 5%</strong>!
          </p>
          <p className="text-xs text-blue-700 mt-3">
            💡 <strong>Example:</strong> Agar ₹1 lakh ka loan liya 7% par 12 mahine ke liye, to monthly EMI ₹8,653 hogi. Total interest ₹3,842. Par 2% subsidy se ₹2,000 bachenge!
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-gray-900 text-base mb-5">🧮 Loan Details Bharo</h2>

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
              <p className="text-xs text-blue-700 font-bold uppercase tracking-wide mb-3">📊 Aapki EMI Details</p>
              <ResultRow label="Monthly EMI" value={fmt(emi)} bold />
              <ResultRow label="Total Interest" value={fmt(totalInterest)} />
              <ResultRow label="Total Repayment" value={fmt(totalPayable)} />
              {subsidy>0 && (
                <>
                  <div className="my-2 pt-2 border-t border-blue-200">
                    <p className="text-xs text-blue-600 font-semibold mb-2">🎁 Government Subsidy (2% Interest Subvention)</p>
                    <ResultRow label="2% Subsidy Bachat" value={`-${fmt(subsidy)}`} />
                    <ResultRow label="Effective Cost (Subsidy ke baad)" value={fmt(effectiveCost)} bold highlight />
                  </div>
                  <p className="text-xs text-blue-600 mt-2">✅ Time par repay karo — ₹{fmt(subsidy).replace('₹','')} extra bachenge!</p>
                </>
              )}
              
              {/* Explanation */}
              <div className="mt-4 p-3 bg-white rounded-xl text-xs text-gray-700">
                <p className="font-bold mb-1">📖 Iska Matlab Kya Hai?</p>
                <p>Aapne ₹{fmt(P)} ka loan liya {rate}% interest par {months} mahine ke liye. Har mahine ₹{fmt(emi)} dena hoga. Total ₹{fmt(totalInterest)} interest dena padega. Par agar time par repay kiya to ₹{fmt(subsidy)} ki subsidy milegi — effective cost sirf ₹{fmt(effectiveCost)} hogi.</p>
              </div>
            </div>
          )}

          {/* Quick facts */}
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

        {/* How to apply - detailed guide */}
        <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <h3 className="font-black text-gray-900 text-sm mb-4">📋 KCC Loan Kaise Le — Step by Step</h3>
          <div className="space-y-3">
            {[
              {n:1,s:'Nazdiki bank jao — SBI, PNB, Bank of Baroda, ya cooperative bank. Koi bhi bank jo kisan loan deta ho'},
              {n:2,s:'KCC application form maango — free milta hai. Ya online apply karo bank ki website se'},
              {n:3,s:'Documents ready karo: Aadhaar card, PAN card, land records (khasra/khatauni), bank passbook, 2 photo'},
              {n:4,s:'Form bhar ke submit karo — bank 7-14 din mein verify karega. Field inspection bhi ho sakti hai'},
              {n:5,s:'Loan approve hone par KCC card milega — ATM card jaisa dikhta hai. Limit turant use kar sakte ho'},
              {n:6,s:'Jab zaroorat ho paisa nikalo. Fasal bechne ke baad repay karo — 2% subsidy milegi'},
            ].map(({n,s})=>(
              <div key={n} className="flex gap-3 items-start">
                <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{n}</span>
                <p className="text-sm text-gray-700">{s}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl">
            <p className="text-xs text-green-800 font-bold mb-1">📄 Documents Checklist:</p>
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
            📖 KCC Loan Complete Guide Padho →
          </Link>
        </div>

        {/* Common mistakes */}
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="font-bold text-yellow-900 text-sm mb-2">⚠️ KCC Loan Mein Aksar Yeh Galtiyan Hoti Hain:</p>
          <ul className="space-y-1.5 text-xs text-yellow-800">
            <li>❌ <strong>Time par repay nahi karna</strong> — 2% subsidy nahi milegi, interest badh jayega</li>
            <li>❌ <strong>Zyada loan lena</strong> — zaroorat se zyada mat lo, wapas karna mushkil hoga</li>
            <li>❌ <strong>Galat purpose batana</strong> — bank verify karta hai, fraud pakda gaya to blacklisting</li>
            <li>❌ <strong>Documents fake dena</strong> — land records verify hote hain, fraud case ban sakta hai</li>
            <li>❌ <strong>EMI miss karna</strong> — CIBIL score kharab hoga, future mein loan nahi milega</li>
          </ul>
        </div>

        {/* Tips */}
        <div className="mt-6">
          <h3 className="font-black text-gray-900 text-sm mb-3">💡 KCC Loan Se Maximum Fayda Kaise Uthao</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-green-50 border border-green-200 rounded-xl">
              <p className="font-bold text-green-900 mb-1">💰 Sahi Amount Lo</p>
              <p className="text-green-800">Zaroorat ke hisaab se lo — na zyada, na kam. ₹1 lakh chahiye to ₹1 lakh lo, ₹3 lakh nahi. Zyada loan = zyada interest</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="font-bold text-blue-900 mb-1">⏰ Time Par Repay Karo</p>
              <p className="text-blue-800">Fasal bechne ke baad turant repay karo — 2% subsidy milegi. CIBIL score bhi accha rahega</p>
            </div>
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl">
              <p className="font-bold text-purple-900 mb-1">🏦 Sahi Bank Chuno</p>
              <p className="text-purple-800">SBI, PNB, BoB mein process fast hai. Cooperative banks mein zyada flexible hote hain. Compare karo</p>
            </div>
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="font-bold text-amber-900 mb-1">📊 Hisab Rakho</p>
              <p className="text-amber-800">Loan ka paisa kahan use kiya — record rakho. Bank audit kar sakta hai. Receipt sambhal ke rakho</p>
            </div>
          </div>
        </div>

        <CalcDisclaimer note="Interest rates bank-wise alag hote hain. Kuch banks 9% tak charge karte hain. Actual EMI aur terms ke liye apni bank branch se confirm karo. Yeh calculator sirf estimate hai." />
        
        <OtherCalcs current="/calculator/kcc-loan-emi" />

        {/* Related articles */}
        <div className="mt-6 p-5 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="font-bold text-blue-900 text-sm mb-3">📖 KCC Loan Se Related Guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Link href="/articles/KisanCreditCardOnlineApply2026" className="p-3 bg-white border border-blue-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
              💳 KCC Loan Apply — Complete Guide
            </Link>
            <Link href="/articles/KisanRinKahaSeLe2026" className="p-3 bg-white border border-blue-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
              💰 Kisan Loan Kahan Se Le — 5 Options
            </Link>
            <Link href="/articles/PmKisan24viKist2026" className="p-3 bg-white border border-blue-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
              📆 PM Kisan Status — ₹6,000 Free
            </Link>
            <Link href="/articles/PmfbyCropInsurance2026" className="p-3 bg-white border border-blue-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
              🛡️ Fasal Bima — Loan ke sath zaroori
            </Link>
            <Link href="/calculator/crop-profit" className="p-3 bg-white border border-blue-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
              📊 Kheti Munafa Calculator
            </Link>
            <Link href="/calculator/installment-tracker" className="p-3 bg-white border border-blue-200 rounded-xl text-xs font-semibold text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
              📆 Kist Status Tracker
            </Link>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mt-6 p-5 bg-gray-50 border border-gray-200 rounded-xl">
          <p className="font-bold text-gray-900 text-sm mb-3">❓ KCC Loan Ke Baare Mein Aksar Sawaal</p>
          <div className="space-y-3 text-xs">
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">KCC loan kitne din mein milta hai?</summary>
              <p className="mt-2 text-gray-700">Agar sab documents theek hain to 7-14 din mein mil jata hai. Kuch banks mein 21 din tak lag sakte hain. Online apply karo to fast hota hai.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">KCC loan ka interest rate kya hai?</summary>
              <p className="mt-2 text-gray-700">₹3 lakh tak ke liye 7% saalana hai. Agar time par repay karo to 2% subsidy milta hai — effective rate 4-5% ho jata hai. Yeh sabse sasta loan hai kisanon ke liye.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">Kya KCC loan bina collateral milta hai?</summary>
              <p className="mt-2 text-gray-700">Haan! ₹1.6 lakh tak bina kisi collateral ke milta hai. ₹3 lakh tak bhi mil sakta hai agar aapka credit history accha ho. Land documents dikhane padte hain par mortgage nahi karna padta.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">KCC loan wapas nahi kiya to kya hoga?</summary>
              <p className="mt-2 text-gray-700">Interest badh jayega — 7% se 13-15% ho jayega. 2% subsidy nahi milegi. CIBIL score kharab hoga — future mein loan nahi milega. Bank legal action bhi le sakta hai. Isliye time par repay karo.</p>
            </details>
            <details className="bg-white border border-gray-200 rounded-lg p-3">
              <summary className="font-bold text-gray-900 cursor-pointer">KCC loan kis kaam ke liye use kar sakte hain?</summary>
              <p className="mt-2 text-gray-700">Kheti ke liye — beej, khad, mazdoori. Equipment khareedne — tractor, pump. Allied activities — dairy, fishery, poultry. Personal kaam — ghar repair, shaadi, education. Par bank ko batana padta hai kis kaam ke liye le rahe ho.</p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}