'use client';
import Link from 'next/link';
import { SvgProblemsSolution, SvgFAQ } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED  = '2026-06-10T08:00:00+05:30';
const DOMAIN = 'https://kisanstatus.com';
const URL = `${DOMAIN}/articles/pm-kisan-problems-solution-guide-2026`;

const schemas = [{
  '@context':'https://schema.org','@type':'Article',
  headline:'PM Kisan 10 Common Problems Guide 2026 — Har Problem Ka Real Solution',
  description:'PM Kisan ki 10 sabse common problems — RFT pending, PFMS error, payment fail, rejected, land seeding, naam mismatch — sab ka tested solution ek jagah.',
  image:`${DOMAIN}/og-image.jpg`, datePublished:PUBLISHED, dateModified:MODIFIED,
  author:{'@type':'Person',name:'Sidhu Singh',url:`${DOMAIN}/about`},
  publisher:{'@type':'Organization',name:'KisanStatus.com',url:DOMAIN},
  mainEntityOfPage:{'@type':'WebPage','@id':URL},
  inLanguage:'hi-IN', wordCount:4500,
}];

const RELATED = [
  {slug:'pm-kisan-ekyc-online-2026',                  title:'eKYC Complete Guide',          emoji:'🔐'},
  {slug:'pm-kisan-payment-failed-status-2026',        title:'Payment Failed Fix',           emoji:'💸'},
  {slug:'pm-kisan-rejected-list-2026',                title:'Rejected List Fix',            emoji:'❌'},
  {slug:'pm-kisan-land-seeding-status-check',         title:'Land Seeding Fix',             emoji:'🌾'},
  {slug:'pm-kisan-name-correction-online-2026',       title:'Naam Correction Guide',        emoji:'✏️'},
  {slug:'pm-kisan-21vi-installment-status-check',     title:'Status Check Guide',           emoji:'📅'},
];

const PROBLEMS = [
  {
    n:1, title:'RFT Signed By State',
    tag:'Most Googled',
    tagColor:'bg-red-100 text-red-700',
    mystery:'Yeh status dekhke lakho farmers confused ho jaate hain. Matlab simple hai.',
    explain:'RFT = Request For Transfer. "RFT Signed By State" = State government ne payment release kar di — ab PFMS (Public Financial Management System) se bank mein transfer hogi. Yeh good news hai — paisa raste mein hai.',
    fix:'Kuch nahi karna — 3-7 working days mein bank mein credit ho jaayega. Screenshot lo aur wait karo. Agar 10 din baad nahi aaya to bank se NPCI seeding check karo.',
    articleHref: '/articles/pm-kisan-payment-failed-status-2026',
  },
  {
    n:2, title:'PFMS Se Payment Nahi Aayi',
    tag:'Common',
    tagColor:'bg-orange-100 text-orange-700',
    mystery:'PFMS successful dikhta hai lekin bank mein paisa nahi.',
    explain:'PFMS (Public Financial Management System) government ki payment gateway hai. PFMS ne bank ko payment bheja — lekin bank reject kar di ya bounce ho gayi. Yeh NPCI Aadhaar seeding issue hai 90% cases mein.',
    fix:'Bank branch jao → "Aadhaar NPCI seeding hai?" puchho → Nahi hai to form bharo (free) → 3-7 din mein link → Agli payment mein credit + arrears.',
    articleHref: '/articles/pm-kisan-payment-failed-status-2026',
  },
  {
    n:3, title:'eKYC Status "Pending" Dikhta Hai',
    tag:'Very Common',
    tagColor:'bg-yellow-100 text-yellow-700',
    mystery:'eKYC karne ke baad bhi status "pending" dikh raha hai.',
    explain:'eKYC karne ke baad portal par update hone mein 24-72 hours lagte hain. Agar OTP se kiya hai to 24 ghante mein. CSC biometric se 48-72 ghante mein. Server sync hone mein time lagta hai.',
    fix:'24-72 ghante wait karo — dobara check karo. Agar 3 din baad bhi "Pending" hai — pmkisan.gov.in par eKYC section mein check karo. "eKYC Already Done" aana chahiye. Nahi aaya to dobara karo ya CSC jao.',
    articleHref: '/articles/pm-kisan-ekyc-online-2026',
  },
  {
    n:4, title:'Beneficiary Status Nahi Dikh Raha',
    tag:'Confusing',
    tagColor:'bg-blue-100 text-blue-700',
    mystery:'"No Record Found" ya blank page aa jaata hai.',
    explain:'3 reasons ho sakte hain: (1) Aadhaar/mobile number galat enter kiya, (2) Registration abhi pending hai state verification mein, (3) Registration kisi aur number se hua tha.',
    fix:'Pehle Aadhaar number dobara check karo — passbook se. Phir Mobile number try karo. Phir Registration number (agar available hai). Kuch bhi kaam nahi kiya to helpline 155261 call karo — naam batao, woh check kar denge.',
    articleHref: '/articles/pm-kisan-beneficiary-list-2026',
  },
  {
    n:5, title:'Naam List Mein Hai Par Payment Nahi',
    tag:'Frustrating',
    tagColor:'bg-purple-100 text-purple-700',
    mystery:'Beneficiary list mein naam hai, status "Active" hai — phir bhi payment nahi.',
    explain:'Active status aur payment aana do alag cheezein hain. Payment ke liye additionally: eKYC complete, bank Aadhaar NPCI seeded, aur IFSC code sahi hona chahiye. Inme se koi ek missing ho to payment bounce hoti hai.',
    fix:'Checklist: (1) eKYC check karo — "Done" hona chahiye. (2) Bank branch mein NPCI seeding confirm karo. (3) IFSC code portal par verify karo passbook se. Teeno ok hai to helpline 155261 call karo.',
    articleHref: '/articles/pm-kisan-payment-failed-status-2026',
  },
  {
    n:6, title:'"Aadhaar Authentication Failed"',
    tag:'Technical',
    tagColor:'bg-teal-100 text-teal-700',
    mystery:'eKYC karte waqt "Authentication Failed" error aata hai.',
    explain:'3 common reasons: (1) Aadhaar number galat enter kiya, (2) OTP galat ya expire hua, (3) Aadhaar record kisi problem mein hai (naam mismatch, locked Aadhaar).',
    fix:'Step 1: Aadhaar number dobara check karo. Step 2: OTP 30 second ke andar enter karo. Step 3: Agar baar baar fail ho — UIDAI helpline 1947 call karo — Aadhaar record check karwao. Step 4: CSC biometric try karo — wahan OTP ki zaroorat nahi.',
    articleHref: '/articles/pm-kisan-ekyc-online-2026',
  },
  {
    n:7, title:'State Verification Mein Atka Hua',
    tag:'Slow Process',
    tagColor:'bg-gray-100 text-gray-700',
    mystery:'Registration ke mahine baad bhi "Under Verification" dikh raha hai.',
    explain:'State government har registration manually verify karta hai — zameen records, eligibility check, aur document verification. Busy seasons mein ya backlog ke waqt 45-60 din tak lag sakte hain.',
    fix:'Agar 60 din se zyada ho gaaye — Block Agriculture Office mein jao. Registration acknowledgement dikhao. Officer state portal par manually push kar sakta hai. Helpline 155261 par escalate bhi kar sakte ho.',
    articleHref: '/articles/pm-kisan-registration-online-2026',
  },
  {
    n:8, title:'Land Seeding Nahi Ho Rahi',
    tag:'Office Waala',
    tagColor:'bg-amber-100 text-amber-700',
    mystery:'"Land Seeding: No" — patwari ke paas gaye, unhone kaha "ho jaayega" — lekin mahine ho gaye.',
    explain:'Land seeding ek multi-step government process hai — Patwari → Block Office → State Revenue Dept → PM Kisan portal. Agar ek step mein bhi delay hai — pura process ruk jaata hai.',
    fix:'Patwari se written acknowledgement lo. Block Agriculture Officer ko letter likho — registered post se. Agar 30 din mein nahi hua — District Collector office mein complaint. Helpline 155261 par land seeding complaint darj karo.',
    articleHref: '/articles/pm-kisan-land-seeding-status-check',
  },
  {
    n:9, title:'Payment Doosre Ke Account Mein Gayi',
    tag:'Rare But Real',
    tagColor:'bg-red-100 text-red-700',
    mystery:'IFSC ya account number galat tha — paisa wrong account mein credit hua.',
    explain:'Yeh rare hai lekin hota hai. PM Kisan payment ek baar credit hone ke baad wapas nahi hoti directly — lekin process hai.',
    fix:'Immediately Bank branch jao → Wrong credit ke baare mein likh ke complaint do. Bank RBI guidelines ke under wrong credit wapas le sakta hai. Saath hi PM Kisan portal par bank details correct karo (passbook se). Helpline 155261 complaint daalo. Agar bank cooperate nahi karta — Banking Ombudsman complaint.',
    articleHref: '/articles/pm-kisan-payment-failed-status-2026',
  },
  {
    n:10, title:'Helpline Utha Nahi Raha — Kya Karein?',
    tag:'Practical',
    tagColor:'bg-green-100 text-green-700',
    mystery:'155261 call karta hoon — engaged, ya koi answer nahi deta.',
    explain:'PM Kisan helpline 9 AM to 6 PM, Monday to Friday available hai. Lunch time (1-2 PM) aur peak hours mein bahut busy hoti hai.',
    fix:'Best time: Subah 9:10-9:30 AM ya shaam 4:30-5:30 PM. Alternate number: 011-24300606 try karo. Email: pmkisan-ict@gov.in par likho — registration number include karo. Block Agriculture Office mein personally jaana best option hai complex issues ke liye.',
    articleHref: '/articles/pm-kisan-problems-solution-guide-2026',
  },
];

export default function PmKisanProblemsSolutionGuide2026() {
  return (
    <>
      {schemas.map((s,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}
      <div className="bg-primary-600 py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">PM Kisan Problems Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">🔧 10 Problems</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan 10 Common Problems 2026 — Har Ek Ka Real Solution Yahan Hai
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">Sidhu Singh</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 20 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-6 rounded-2xl overflow-hidden border border-green-100 shadow-md">
          <img
            src="/images/problems-guide.png"
            alt="PM Kisan 10 problems aur unke solutions"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">PM Kisan 10 Problems — 10 Real Solutions 2026</p>
        </div>

        <div className="my-6 p-5 bg-blue-50 border-2 border-blue-400 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-blue-800 mb-2">📖 Yeh Guide Kaise Use Karein</h2>
          <p className="text-sm text-blue-900 leading-relaxed">
            Neeche 10 problems hain — apni problem ki number dhundho aur directly us section par jao. Har section mein: <strong>problem ka matlab</strong>, <strong>kyun hoti hai</strong>, aur <strong>exact fix steps</strong>. Specific problem ke liye detailed guide ka link bhi hai.
          </p>
        </div>

        {/* Quick index */}
        <div className="my-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {PROBLEMS.map(({n,title})=>(
            <a key={n} href={`#problem-${n}`}
              className="flex items-center gap-2 p-2.5 bg-white border border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-colors text-xs font-medium text-gray-700">
              <span className="w-6 h-6 rounded-full bg-red-600 text-white text-[10px] font-black flex items-center justify-center shrink-0">{n}</span>
              {title}
            </a>
          ))}
        </div>

        {/* All problems */}
        <div className="space-y-5">
          {PROBLEMS.map(({n,title,tag,tagColor,mystery,explain,fix,articleHref})=>(
            <div key={n} id={`problem-${n}`} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm scroll-mt-6">
              <div className="flex items-start gap-3 px-5 py-4 bg-gray-50 border-b border-gray-100">
                <span className="w-9 h-9 rounded-full bg-red-600 text-white font-black flex items-center justify-center shrink-0 text-sm">{n}</span>
                <div className="flex-1">
                  <p className="font-black text-gray-900 text-sm">{title}</p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tagColor}`}>{tag}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="mb-3 p-3 bg-amber-50 border border-amber-100 rounded-xl">
                  <p className="text-xs text-amber-900 italic">&quot;{mystery}&quot;</p>
                </div>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed"><strong className="text-gray-800">Kyun hota hai:</strong> {explain}</p>
                <div className="bg-green-50 border border-green-100 rounded-xl p-3 mb-3">
                  <p className="text-xs font-black text-green-800 mb-1">✅ Solution:</p>
                  <p className="text-xs text-green-900 leading-relaxed">{fix}</p>
                </div>
                <Link href={articleHref}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1">
                  📖 Detailed Guide Padho →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 bg-green-50 border border-green-200 rounded-2xl text-center">
          <p className="font-black text-green-900 text-base mb-1">📞 Koi Problem Solve Nahi Hui?</p>
          <p className="text-sm text-green-700 mb-4">Helpline par call karo — government free support deti hai</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:155261" className="bg-green-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-green-600 transition-colors">📞 155261</a>
            <a href="tel:01124300606" className="bg-green-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-green-600 transition-colors">📞 011-24300606</a>
            <a href="mailto:pmkisan-ict@gov.in" className="border border-green-400 text-green-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-green-100 transition-colors">✉️ Email</a>
          </div>
        </div>

        <CalcBanner/>
        <RelatedArticles articles={RELATED}/>
        <AuthorBox modified={MODIFIED}/>
        <BottomNav/>
        <Disclaimer/>
      </div>
    </>
  );
}
