import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Kisan Calculators 2026 — Installment Tracker, PM Kisan, KCC Loan, PMFBY, MSP, Crop Profit',
  description: '6 free agricultural calculators for Indian farmers — Installment status tracker, PM Kisan benefit, KCC loan EMI, PMFBY fasal bima premium, MSP income aur crop profit/loss. No registration.',
  alternates: { canonical: 'https://kisanstatus.com/calculator' },
};

const CALCS = [
  {
    href:'/calculator/installment-tracker',
    emoji:'📆',
    title:'Installment Status Tracker',
    hindi:'किस्त स्टेटस ट्रैकर',
    desc:'23vi kist aayi ya nahi? eKYC, bank seeding, land seeding check karke 4 sawaal mein exact reason pata karo.',
    tags:['23vi Kist Tracker','eKYC Check','Instant Result'],
    bg:'bg-teal-50', border:'border-teal-200', btn:'bg-teal-700 hover:bg-teal-600',
  },
  {
    href:'/calculator/pm-kisan-benefit',
    emoji:'🌾',
    title:'PM Kisan Benefit Calculator',
    hindi:'पीएम किसान लाभ कैलकुलेटर',
    desc:'Saalana ₹6,000 — calculate karo kitni kistein milegi, total benefit, aur arrears. eKYC check bhi.',
    tags:['₹6,000 Annual','3 Installments','Eligibility Check'],
    bg:'bg-green-50', border:'border-green-200', btn:'bg-green-700 hover:bg-green-600',
  },
  {
    href:'/calculator/kcc-loan-emi',
    emoji:'🏦',
    title:'KCC Loan EMI Calculator',
    hindi:'KCC लोन EMI कैलकुलेटर',
    desc:'Kisan Credit Card loan ki monthly EMI, total interest, aur 2% government subvention benefit calculate karo.',
    tags:['7% Interest Rate','Govt Subsidy','Monthly EMI'],
    bg:'bg-blue-50', border:'border-blue-200', btn:'bg-blue-700 hover:bg-blue-600',
  },
  {
    href:'/calculator/pmfby-premium',
    emoji:'🛡️',
    title:'PMFBY Fasal Bima Premium',
    hindi:'फसल बीमा प्रीमियम कैलकुलेटर',
    desc:'Pradhan Mantri Fasal Bima Yojana — Kharif/Rabi fasal ka insurance premium aur maximum claim calculate karo.',
    tags:['Kharif + Rabi','All Crops','Claim Amount'],
    bg:'bg-amber-50', border:'border-amber-200', btn:'bg-amber-700 hover:bg-amber-600',
  },
  {
    href:'/calculator/msp-income',
    emoji:'💹',
    title:'MSP Income Calculator',
    hindi:'MSP आय कैलकुलेटर',
    desc:'2024-25 MSP rates par gehun, dhan, cotton, sarson — kisi bhi fasal ki total income calculate karo.',
    tags:['2024-25 Rates','11 Crops','Per Hectare'],
    bg:'bg-orange-50', border:'border-orange-200', btn:'bg-orange-700 hover:bg-orange-600',
  },
  {
    href:'/calculator/crop-profit',
    emoji:'📊',
    title:'Crop Profit/Loss Calculator',
    hindi:'फसल मुनाफा कैलकुलेटर',
    desc:'Seed, fertilizer, labor, irrigation — sab kharcha daalo aur net profit ya loss instantly pata karo. Per hectare breakdown.',
    tags:['Full Season','All Costs','Net Profit'],
    bg:'bg-purple-50', border:'border-purple-200', btn:'bg-purple-700 hover:bg-purple-600',
  },
];

export default function CalculatorIndexPage() {
  return (
    <>
      <div className="bg-primary-600 py-10">
        <div className="container-site text-center max-w-3xl">
          <span className="inline-block bg-white/15 text-green-200 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">🧮 Free Tools</span>
          <h1 className="text-2xl md:text-4xl font-black text-white mb-3">
            Kisan Calculators — Installment Tracker, KCC, PMFBY, MSP & Crop Profit
          </h1>
          <h2 className="text-green-200 text-sm md:text-base font-normal max-w-2xl mx-auto">
            कृषि कैलकुलेटर — 6 free tools, koi registration nahi, koi charge nahi. Bank jaane se pehle hisaab karo.
          </h2>
        </div>
      </div>

      <div className="container-site py-12 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CALCS.map(c=>(
            <div key={c.href} className={`${c.bg} ${c.border} border rounded-2xl p-5 flex flex-col gap-4 hover:shadow-xl transition-all hover:scale-[1.01]`}>
              <div className="flex items-start justify-between">
                <span className="text-4xl">{c.emoji}</span>
                <span className="text-[10px] font-black bg-white border border-gray-200 text-gray-600 px-2 py-1 rounded-full">Free Tool</span>
              </div>
              <div>
                <h2 className="font-black text-gray-900 text-base leading-tight">{c.title}</h2>
                <p className="text-xs text-gray-500 font-medium mt-0.5 mb-2">{c.hindi}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {c.tags.map(t=>(
                  <span key={t} className="text-[10px] bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded-full font-medium">{t}</span>
                ))}
              </div>
              <Link href={c.href}
                className={`w-full text-center ${c.btn} text-white font-black py-3 rounded-xl text-sm transition-colors mt-auto`}>
                {c.emoji} Calculator Kholo →
              </Link>
            </div>
          ))}
        </div>

        {/* Info section */}
        <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-gray-900 text-lg mb-4">कृषि Calculators का सही उपयोग — How To Use</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-bold text-gray-900 mb-2">🌾 PM Kisan Calculator ke liye:</p>
              <ul className="space-y-1 text-xs text-gray-600">
                {['Registered years enter karo','Land area (hectare) daalo','eKYC status select karo','Miss kist count karo'].map(s=><li key={s} className="flex gap-1.5"><span className="text-green-600">✓</span>{s}</li>)}
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-2">🏦 KCC Loan Calculator ke liye:</p>
              <ul className="space-y-1 text-xs text-gray-600">
                {['Loan amount enter karo','Interest rate (usually 7%) daalo','Repayment months chunio','Government subsidy automatically calculate hogi'].map(s=><li key={s} className="flex gap-1.5"><span className="text-blue-600">✓</span>{s}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Related guides */}
        <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-2xl">
          <p className="font-black text-green-900 text-sm mb-4">📖 Related PM Kisan Guides</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              {href:'/articles/pm-kisan-ekyc-online-2026',          l:'🔐 eKYC Guide'},
              {href:'/articles/pm-kisan-21vi-installment-status-check',l:'📅 Status Check'},
              {href:'/articles/pm-kisan-payment-failed-status-2026', l:'💸 Payment Fix'},
              {href:'/articles/kisan-rin-kaha-se-le-2026',           l:'💰 Kisan Loan Guide'},
              {href:'/articles/pmfby-crop-insurance-2026',           l:'🛡️ PMFBY Guide'},
              {href:'/articles/pm-kisan-registration-online-2026',   l:'📝 Registration'},
            ].map(({href,l})=>(
              <Link key={href} href={href}
                className="text-xs px-3 py-2 bg-white border border-green-200 text-green-800 rounded-xl hover:bg-green-700 hover:text-white transition-colors font-medium text-center">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
