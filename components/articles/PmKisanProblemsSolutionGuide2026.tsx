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
  headline:'Farmer Welfare Scheme 10 Common Issues Guide 2026 — Har Issue Ka Real Solution',
  description:'Government benefit scheme ki 10 sabse common issues — RFT pending, PFMS error, DBT transfer fail, declined application, land record linking, naam mismatch — sab ka tested solution ek jagah.',
  image:`${DOMAIN}/og-image.jpg`, datePublished:PUBLISHED, dateModified:MODIFIED,
  author:{'@type':'Organization',name:'KisanStatus Team',url:`${DOMAIN}/about`},
  publisher:{'@type':'Organization',name:'KisanStatus.com',url:DOMAIN},
  mainEntityOfPage:{'@type':'WebPage','@id':URL},
  inLanguage:'hi-IN', wordCount:4500,
}];

const RELATED = [
  {slug:'pm-kisan-ekyc-online-2026',                  title:'Digital Verification Guide',   emoji:'🔐'},
  {slug:'pm-kisan-payment-failed-status-2026',        title:'DBT Transfer Failed Fix',      emoji:'💸'},
  {slug:'pm-kisan-rejected-list-2026',                title:'Application Declined Fix',     emoji:'❌'},
  {slug:'pm-kisan-land-seeding-status-check',         title:'Land Record Linking Fix',      emoji:'🌾'},
  {slug:'pm-kisan-name-correction-online-2026',       title:'Naam Correction Guide',        emoji:'✏️'},
  {slug:'pm-kisan-23vi-kist-2026-status-check',       title:'23vi Installment Status',      emoji:'📅'},
];

const PROBLEMS = [
  {
    n:1, title:'RFT Signed By State',
    tag:'Most Googled',
    tagColor:'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
    mystery:'Yeh status dekhke lakho farmers confused ho jaate hain. Matlab simple hai.',
    explain:'RFT = Request For Transfer. "RFT Signed By State" = State government ne disbursement release kar di — ab PFMS (Public Financial Management System) se bank mein transfer hogi. Yeh good news hai — paisa raste mein hai.',
    fix:'Kuch nahi karna — 3-7 working days mein bank mein credit ho jaayega. Screenshot lo aur wait karo. Agar 10 din baad nahi aaya to bank se NPCI mapper check karo.',
    articleHref: '/articles/pm-kisan-payment-failed-status-2026',
  },
  {
    n:2, title:'PFMS Se Disbursement Nahi Aayi',
    tag:'Common',
    tagColor:'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
    mystery:'PFMS successful dikhta hai lekin bank mein paisa nahi.',
    explain:'PFMS (Public Financial Management System) government ki disbursement gateway hai. PFMS ne bank ko transfer bheja — lekin bank reject kar di ya bounce ho gayi. Yeh NPCI UID seeding issue hai 90% cases mein.',
    fix:'Bank branch jao → "UID NPCI seeding hai?" puchho → Nahi hai to form bharo (free) → 3-7 din mein link → Agli tranche mein credit + arrears.',
    articleHref: '/articles/pm-kisan-payment-failed-status-2026',
  },
  {
    n:3, title:'Digital Verification Status "Pending" Dikhta Hai',
    tag:'Very Common',
    tagColor:'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
    mystery:'Authentication karne ke baad bhi status "pending" dikh raha hai.',
    explain:'Authentication karne ke baad portal par update hone mein 24-72 hours lagte hain. Agar OTP se kiya hai to 24 ghante mein. CSC biometric se 48-72 ghante mein. Server sync hone mein time lagta hai.',
    fix:'24-72 ghante wait karo — dobara check karo. Agar 3 din baad bhi "Pending" hai — pmkisan.gov.in par verification section mein check karo. "Already Verified" aana chahiye. Nahi aaya to dobara karo ya CSC jao.',
    articleHref: '/articles/pm-kisan-ekyc-online-2026',
  },
  {
    n:4, title:'Approved Recipient Status Nahi Dikh Raha',
    tag:'Confusing',
    tagColor:'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    mystery:'"No Record Found" ya blank page aa jaata hai.',
    explain:'3 reasons ho sakte hain: (1) UID/mobile number galat enter kiya, (2) Enrollment abhi pending hai state verification mein, (3) Enrollment kisi aur number se hua tha.',
    fix:'Pehle UID number dobara check karo — identity card se. Phir Mobile number try karo. Phir Enrollment ID (agar available hai). Kuch bhi kaam nahi kiya to helpline 155261 call karo — naam batao, woh check kar denge.',
    articleHref: '/articles/pm-kisan-beneficiary-list-2026',
  },
  {
    n:5, title:'Naam Roster Mein Hai Par DBT Nahi',
    tag:'Frustrating',
    tagColor:'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    mystery:'Approved recipients roster mein naam hai, status "Active" hai — phir bhi disbursement nahi.',
    explain:'Active status aur payment aana do alag cheezein hain. Disbursement ke liye additionally: digital verification complete, bank UID NPCI seeded, aur IFSC code sahi hona chahiye. Inme se koi ek missing ho to tranche bounce hoti hai.',
    fix:'Checklist: (1) Verification check karo — "Done" hona chahiye. (2) Bank branch mein NPCI mapper confirm karo. (3) IFSC code portal par verify karo passbook se. Teeno ok hai to helpline 155261 call karo.',
    articleHref: '/articles/pm-kisan-payment-failed-status-2026',
  },
  {
    n:6, title:'"UID Authentication Failed"',
    tag:'Technical',
    tagColor:'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300',
    mystery:'Digital verification karte waqt "Authentication Failed" error aata hai.',
    explain:'3 common reasons: (1) UID number galat enter kiya, (2) OTP galat ya expire hua, (3) Identity record kisi problem mein hai (naam mismatch, locked UID).',
    fix:'Step 1: UID number dobara check karo. Step 2: OTP 30 second ke andar enter karo. Step 3: Agar baar baar fail ho — UIDAI helpline 1947 call karo — identity record check karwao. Step 4: CSC biometric try karo — wahan OTP ki zaroorat nahi.',
    articleHref: '/articles/pm-kisan-ekyc-online-2026',
  },
  {
    n:7, title:'State Verification Mein Atka Hua',
    tag:'Slow Process',
    tagColor:'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
    mystery:'Enrollment ke mahine baad bhi "Under Verification" dikh raha hai.',
    explain:'State government har enrollment manually verify karta hai — zameen records, eligibility check, aur document verification. Busy seasons mein ya backlog ke waqt 45-60 din tak lag sakte hain.',
    fix:'Agar 60 din se zyada ho gaaye — Block Agriculture Office mein jao. Enrollment acknowledgement dikhao. Officer state portal par manually push kar sakta hai. Helpline 155261 par escalate bhi kar sakte ho.',
    articleHref: '/articles/pm-kisan-registration-online-2026',
  },
  {
    n:8, title:'Land Record Linking Nahi Ho Rahi',
    tag:'Office Waala',
    tagColor:'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
    mystery:'"Land Seeding: No" — patwari ke paas gaye, unhone kaha "ho jaayega" — lekin mahine ho gaye.',
    explain:'Zameen mapping ek multi-step government process hai — Patwari → Block Office → State Revenue Dept → Scheme portal. Agar ek step mein bhi delay hai — pura process ruk jaata hai.',
    fix:'Patwari se written acknowledgement lo. Block Agriculture Officer ko letter likho — registered post se. Agar 30 din mein nahi hua — District Collector office mein complaint. Helpline 155261 par land mapping complaint darj karo.',
    articleHref: '/articles/pm-kisan-land-seeding-status-check',
  },
  {
    n:9, title:'DBT Doosre Ke Account Mein Gayi',
    tag:'Rare But Real',
    tagColor:'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
    mystery:'IFSC ya account number galat tha — paisa wrong account mein credit hua.',
    explain:'Yeh rare hai lekin hota hai. Scheme disbursement ek baar credit hone ke baad wapas nahi hoti directly — lekin process hai.',
    fix:'Immediately Bank branch jao → Wrong credit ke baare mein likh ke complaint do. Bank RBI guidelines ke under wrong credit wapas le sakta hai. Saath hi portal par bank details correct karo (passbook se). Helpline 155261 complaint daalo. Agar bank cooperate nahi karta — Banking Ombudsman complaint.',
    articleHref: '/articles/pm-kisan-payment-failed-status-2026',
  },
  {
    n:10, title:'Helpline Utha Nahi Raha — Kya Karein?',
    tag:'Practical',
    tagColor:'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    mystery:'155261 call karta hoon — engaged, ya koi answer nahi deta.',
    explain:'Scheme helpline 9 AM to 6 PM, Monday to Friday available hai. Lunch time (1-2 PM) aur peak hours mein bahut busy hoti hai.',
    fix:'Best time: Subah 9:10-9:30 AM ya shaam 4:30-5:30 PM. Alternate number: 011-24300606 try karo. Email: pmkisan-ict@gov.in par likho — enrollment ID include karo. Block Agriculture Office mein personally jaana best option hai complex issues ke liye.',
    articleHref: '/contact',
  },
];

export default function PmKisanProblemsSolutionGuide2026() {
  return (
    <>
      {schemas.map((s,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link><span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link><span>/</span>
            <span className="text-white font-bold">10 Common Issues Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">🔧 10 Issues</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Farmer Welfare Scheme 10 Common Issues 2026 — Har Ek Ka Real Solution Yahan Hai
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 20 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <img
            src="/images/problems-guide.png"
            alt="Farmer welfare scheme 10 issues aur unke solutions 2026"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">10 Common Issues — 10 Real Solutions 2026</p>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-blue-800 dark:text-blue-300 mb-2">📖 Yeh Guide Kaise Use Karein</h2>
          <p className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
            Neeche 10 issues hain — apni issue ki number dhundho aur directly us section par jao. Har section mein: <strong>issue ka matlab</strong>, <strong>kyun hoti hai</strong>, aur <strong>exact fix steps</strong>. Specific issue ke liye detailed guide ka link bhi hai.
          </p>
        </div>

        <div className="my-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {PROBLEMS.map(({n,title})=>(
            <a key={n} href={`#problem-${n}`}
              className="flex items-center gap-2 p-2.5 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-green-300 dark:hover:border-green-700 hover:bg-[var(--color-bg-alt)] transition-colors text-xs font-medium text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
              <span className="w-6 h-6 rounded-full bg-red-600 text-white text-[10px] font-black flex items-center justify-center shrink-0">{n}</span>
              {title}
            </a>
          ))}
        </div>

        <div className="space-y-5">
          {PROBLEMS.map(({n,title,tag,tagColor,mystery,explain,fix,articleHref})=>(
            <div key={n} id={`problem-${n}`} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm scroll-mt-6">
              <div className="flex items-start gap-3 px-5 py-4 bg-[var(--color-bg-alt)] border-b border-[var(--color-border)]">
                <span className="w-9 h-9 rounded-full bg-red-600 text-white font-black flex items-center justify-center shrink-0 text-sm">{n}</span>
                <div className="flex-1">
                  <p className="font-black text-[var(--color-text)] text-sm">{title}</p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tagColor}`}>{tag}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="mb-3 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-xl">
                  <p className="text-xs text-amber-900 dark:text-amber-300 italic">&quot;{mystery}&quot;</p>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mb-3 leading-relaxed"><strong className="text-[var(--color-text)]">Kyun hota hai:</strong> {explain}</p>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl p-3 mb-3">
                  <p className="text-xs font-black text-green-800 dark:text-green-300 mb-1">✅ Solution:</p>
                  <p className="text-xs text-green-900 dark:text-green-200 leading-relaxed">{fix}</p>
                </div>
                <Link href={articleHref}
                  className="text-xs font-bold text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  📖 Detailed Guide Padho →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl text-center">
          <p className="font-black text-green-900 dark:text-green-300 text-base mb-1">📞 Koi Issue Solve Nahi Hui?</p>
          <p className="text-sm text-green-700 dark:text-green-400 mb-4">Helpline par call karo — government free support deti hai</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:155261" className="bg-green-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">📞 155261</a>
            <a href="tel:01124300606" className="bg-green-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">📞 011-24300606</a>
            <a href="mailto:pmkisan-ict@gov.in" className="border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500">✉️ Email</a>
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