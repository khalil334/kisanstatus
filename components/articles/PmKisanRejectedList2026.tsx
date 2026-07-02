'use client';
import Link from 'next/link';
import { SvgDeactivate, SvgDocuments, SvgFAQ } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED  = '2026-06-10T08:00:00+05:30';
const DOMAIN = 'https://kisanstatus.com';
const URL    = `${DOMAIN}/articles/pm-kisan-rejected-list-2026`;

const schemas = [
  {
    '@context':'https://schema.org','@type':'Article',
    headline:'PM Kisan Application Declined 2026 — 10 Reasons & Step-by-Step Fix Guide',
    description:'PM Kisan rejected list 2026 — 10 decline reasons, UID mismatch, digital verification fail, land record linking — har ek problem ka real solution Hinglish mein.',
    image:`${DOMAIN}/og-image.jpg`, datePublished:PUBLISHED, dateModified:MODIFIED,
    author:{'@type':'Organization',name:'KisanStatus Team',url:`${DOMAIN}/about`},
    publisher:{'@type':'Organization',name:'KisanStatus.com',url:DOMAIN},
    mainEntityOfPage:{'@type':'WebPage','@id':URL},
    inLanguage:'hi-IN', wordCount:3400,
  },
  {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:DOMAIN},
      {'@type':'ListItem',position:2,name:'Articles',item:`${DOMAIN}/articles`},
      {'@type':'ListItem',position:3,name:'Application Declined Guide 2026',item:URL},
    ],
  },
  {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:[
      {'@type':'Question',name:'PM Kisan application fail kyun hoti hai?',
        acceptedAnswer:{'@type':'Answer',text:'Common reasons: Aadhaar-bank naam mismatch, digital verification incomplete, land record linking pending, galat IFSC code, duplicate enrollment, ineligible category (government employee/income tax filer).'}},
      {'@type':'Question',name:'Decline fix karne ke baad installment milegi?',
        acceptedAnswer:{'@type':'Answer',text:'Haan — fix hone ke baad account reactivate ho jaata hai aur sabhi missed installments arrears mein credit hoti hain. Correction mein 15-30 din lag sakte hain type ke hisaab se.'}},
      {'@type':'Question',name:'Kya direct official portal par correction ho sakta hai?',
        acceptedAnswer:{'@type':'Answer',text:'Kuch corrections portal se hote hain (naam, bank) aur kuch ke liye Block Agriculture Office jaana padta hai (land linking, duplicate). pmkisan.gov.in → Farmers Corner → Edit Aadhaar Details par check karo.'}},
    ],
  },
];

const RELATED = [
  {slug:'pm-kisan-ekyc-online-2026',                    title:'Digital Verification Guide',    emoji:'🔐'},
  {slug:'pm-kisan-payment-failed-status-2026',          title:'DBT Transfer Failed Fix',       emoji:'💸'},
  {slug:'pm-kisan-name-correction-online-2026',         title:'Name Correction Guide',         emoji:'✏️'},
  {slug:'pm-kisan-land-seeding-status-check',           title:'Land Record Linking Fix',       emoji:'🌾'},
  {slug:'pm-kisan-beneficiary-list-2026',               title:'Beneficiary List Check',        emoji:'📋'},
  {slug:'pm-kisan-problems-solution-guide-2026',        title:'10 Problems Guide',             emoji:'🔧'},
];

export default function PmKisanRejectedList2026() {
  return (
    <>
      {schemas.map((s,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link><span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link><span>/</span>
            <span className="text-white font-bold">Application Declined 2026</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">❌ Declined Applications</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Application Declined 2026 — Reason Pata Karo &amp; Ghar Baithe Fix Karo
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 16 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <img
            src="/images/registration-approved.png"
            alt="PM Kisan application declined reason fix guide 2026"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">Application Declined — Reason Pata Karo, Fix Karo, Installment Pao</p>
        </div>

        {/* Reality check box */}
        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-800 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-red-800 dark:text-red-300 mb-2">🚨 Decline Permanent Nahi Hai — Fix Ho Sakta Hai</h2>
          <p className="text-sm text-red-700 dark:text-red-200 mb-3">
            Agar scheme mein naam <strong>Declined</strong> dikh raha hai — ghabrao mat. <strong>90% cases mein approval wapas mil jaati hai</strong> — bas sahi reason pata karna hota hai aur specific action leni hoti hai. Missed installments bhi wapas milti hain.
          </p>
          <div className="bg-[var(--color-card)] border border-red-200 dark:border-red-800 rounded-xl p-3">
            <p className="text-xs font-bold text-red-800 dark:text-red-300 mb-2">Pehle Reason Check Karo:</p>
            <StepList>
              <SI n={1}><strong>pmkisan.gov.in</strong> kholo → Farmers Corner → Beneficiary Status</SI>
              <SI n={2}>UID ya Mobile number daalo → Get Data</SI>
              <SI n={3}>Status section mein <strong>exact decline reason</strong> likha hoga</SI>
              <SI n={4}>Woh reason note karo → neeche us reason ka fix padho</SI>
            </StepList>
          </div>
        </div>

        <section className="mb-8">
          <SH>Decline vs Deactivation — Fark Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
            Bahut log in dono ko same samajhte hain — lekin yeh alag hain aur fix bhi alag tarike se hota hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <h3 className="font-black text-red-800 dark:text-red-300 text-sm mb-2">❌ Declined</h3>
              <ul className="space-y-1.5 text-xs text-[var(--color-text-muted)]">
                {['Application level par fail hua','Enrollment ke time koi problem aayi','Portal par seedha correction ho sakti hai','15-20 din mein fix ho jaata hai usually'].map(i=><li key={i} className="flex gap-2"><span className="text-red-500 dark:text-red-400 shrink-0">•</span>{i}</li>)}
              </ul>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl">
              <h3 className="font-black text-orange-800 dark:text-orange-300 text-sm mb-2">🚫 Deactivated</h3>
              <ul className="space-y-1.5 text-xs text-[var(--color-text-muted)]">
                {['Pehle active tha, baad mein koi problem aayi','State ne manually deactivate kiya','Block Agriculture Office jaana padta hai','20-30 din lag sakte hain reactivation mein'].map(i=><li key={i} className="flex gap-2"><span className="text-orange-500 dark:text-orange-400 shrink-0">•</span>{i}</li>)}
              </ul>
            </div>
          </div>
          <IB><strong>💡 Simple Rule:</strong> Dono fix ho sakte hain. Decline = portal se. Deactivation = office se. Dono mein missed installments arrears mein wapas milti hain.</IB>
        </section>

        <section className="mb-8">
          <SH>10 Decline Reasons &amp; Har Ek Ka Real Fix</SH>
          <div className="space-y-3">
            {[
              {n:1, r:'Digital Verification Incomplete', emoji:'🔐',
                d:'Yeh sabse common reason hai — 60% declines sirf is wajah se hoti hain. UID OTP ya biometric authentication pending hai.',
                fix:'pmkisan.gov.in → verification section → UID number → OTP verify. Sirf 5 minute lagte hain, bilkul free.',
                time:'Instant', difficulty:'Aasaan'},
              {n:2, r:'UID-Bank Naam Mismatch',emoji:'✏️',
                d:'Portal mein naam aur bank account mein naam alag hai — system automatically decline kar deta hai.',
                fix:'pmkisan.gov.in → Farmers Corner → Edit Aadhaar Details → Name Correction → UID jaisa naam daalo.',
                time:'15-20 din', difficulty:'Medium'},
              {n:3, r:'Land Record Linking Pending', emoji:'🌾',
                d:'Aapki zameen ka record state land database se portal par link nahi hua. Portal par "Land Seeding No" ya "Land Seeding Pending" dikhta hai.',
                fix:'Patwari/lekhapal se milein → Khasra-Khatauni update → Block Agriculture Office mein Land Seeding form bharo.',
                time:'15-30 din', difficulty:'Kuch mehnat lagti hai'},
              {n:4, r:'Galat Bank Details', emoji:'🏦',
                d:'Account number ya IFSC code galat daala gaya enrollment ke time — DBT transfer fail hoti hai ya return hoti hai.',
                fix:'pmkisan.gov.in → Farmers Corner → Edit Aadhaar Details → Bank Account Correction → Passbook se exactly copy karo.',
                time:'7-14 din', difficulty:'Aasaan'},
              {n:5, r:'NPCI Mapper Link Missing',emoji:'🔗',
                d:'Bank account UID se NPCI ke zariye link nahi — payment credit nahi ho sakti.',
                fix:'Bank branch mein jao → "Aadhaar seeding" form bharo → UID + passbook lekar jao → 3-7 din mein link ho jaata hai.',
                time:'3-7 din', difficulty:'Aasaan'},
              {n:6, r:'Duplicate Enrollment', emoji:'🔄',
                d:'Ek hi UID se do alag registrations hain system mein — duplicate detect hoke decline hoti hai.',
                fix:'Helpline 155261 par call karo → Duplicate entry identify karo → Purani ya galat entry remove karwao.',
                time:'7-15 din', difficulty:'Helpline se hoga'},
              {n:7, r:'Ineligible Category', emoji:'🚫',
                d:'Government employee, income tax filer, MP/MLA, doctor/lawyer/engineer (registered professional) — yeh log eligible nahi hain.',
                fix:'Agar galat decline hua (genuinely farmer hain) to documents le jao Agriculture office mein → Eligibility proof submit karo.',
                time:'20-30 din', difficulty:'Office jaana padega'},
              {n:8, r:'Land Records Not Found', emoji:'📋',
                d:'State revenue database mein aapke naam par zameen registered nahi dikhi — enrollment time par mismatch tha.',
                fix:'Revenue/patwari office → Land records update karwao → Phir portal par reapply ya correction karo.',
                time:'20-40 din', difficulty:'Multiple steps'},
              {n:9, r:'Documents Blurry/Invalid', emoji:'📄',
                d:'Upload kiye documents — UID scan, passbook — itne blur ya chhote hain ki system read nahi kar paya.',
                fix:'Clear daylight mein dobara scan karo → 2MB se kam rakho → JPEG format mein upload karo → portal par re-upload.',
                time:'Instant after upload', difficulty:'Aasaan'},
              {n:10,r:'Mobile Number Issue', emoji:'📱',
                d:'Registered mobile number invalid hai, kisi aur ke naam hai, ya UID se link nahi hai.',
                fix:'CSC center jao → Mobile number update request → Apna valid UID-linked number register karwao → Free hai.',
                time:'3-7 din', difficulty:'CSC centre se'},
            ].map(({n,r,emoji,d,fix,time,difficulty})=>(
              <div key={n} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 px-4 py-3 bg-[var(--color-bg-alt)] border-b border-[var(--color-border)]">
                  <span className="w-7 h-7 rounded-full bg-red-600 text-white text-xs font-black flex items-center justify-center shrink-0">{n}</span>
                  <span className="text-xl">{emoji}</span>
                  <p className="font-black text-[var(--color-text)] text-sm">{r}</p>
                  <div className="ml-auto flex gap-2">
                    <span className="text-[10px] bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-medium">{time}</span>
                    <span className="text-[10px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full font-medium">{difficulty}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-[var(--color-text-muted)] mb-3 leading-relaxed">{d}</p>
                  <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0 mt-0.5">✅ FIX:</span>
                    <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">{fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>Correction Ke Baad Kitna Wait Karna Hoga?</SH>
          <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Correction Type</th>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Kahan Se</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Digital Verification','Instant (OTP) / 1-2 din (CSC)','Portal ya CSC'],
                  ['NPCI Mapper Link','3-7 din','Bank branch'],
                  ['Bank Account Details','7-14 din','Portal'],
                  ['Naam Correction','15-20 din','Portal'],
                  ['Land Record Linking','15-30 din','Patwari + Block Office'],
                  ['Duplicate Removal','7-15 din','Helpline 155261'],
                  ['Ineligibility Appeal','20-30 din','Agriculture Office'],
                  ['Land Records Update','20-40 din','Revenue Office + Portal'],
                ].map(([t,time,kahan],i)=>(
                  <tr key={t} className={i%2===0?'bg-[var(--color-card)]':'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{t}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-blue-700 dark:text-blue-400 font-semibold">{time}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{kahan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <IB><strong>💰 Arrears:</strong> Correction ke baad sabhi missed installments arrears mein milti hain — ek saath credit hoti hain next successful payment mein.</IB>
        </section>

        <section className="mb-8">
          <SH>Documents Jo Saath Rakhne Chahiye</SH>
          <SvgDocuments caption="Application Decline Fix — Required Documents 2026"/>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {[
              {doc:'UID Card (Aadhaar)',detail:'Original + clear scan (front & back)',always:true},
              {doc:'Bank Passbook',detail:'First page — account number, IFSC, naam clearly visible',always:true},
              {doc:'Khasra-Khatauni',detail:'Latest land records — state portal ya patwari se',always:true},
              {doc:'Mobile Number',detail:'UID-linked active number — OTP receive karne ke liye',always:true},
              {doc:'Enrollment ID',detail:'Registration number — status check ke liye',always:false},
              {doc:'Decline Screenshot',detail:'Portal se status screenshot — office mein kaam aata hai',always:false},
            ].map(({doc,detail,always})=>(
              <div key={doc} className="flex gap-3 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <span className={`text-lg shrink-0 ${always?'text-green-600 dark:text-green-400':'text-blue-500 dark:text-blue-400'}`}>{always?'✅':'📎'}</span>
                <div>
                  <p className="font-bold text-[var(--color-text)] text-xs">{doc} {always&&<span className="text-red-500 dark:text-red-400">*</span>}</p>
                  <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-red-600 dark:text-red-400 mt-2">* = Har case mein zaroori hai</p>
        </section>

        <section className="mb-8">
          <SH>FAQ — Decline Ke Baare Mein Common Sawaal</SH>
          <div className="space-y-3">
            {[
              {q:'Correction ke baad installment automatically aayegi?',a:'Haan — ek baar decline fix ho jaaye aur account active ho jaaye, next payment date par tranche automatically bank mein credit ho jaayegi. Alag se kuch karne ki zaroorat nahi.'},
              {q:'Kya main ek saath multiple corrections kar sakta hoon?',a:'Haan — naam, bank, aur digital verification ek saath ho sakti hain. Land linking alag process hai. Pehle verification karo (fastest), phir baaki corrections.'},
              {q:'Office nahi ja sakta — koi alternative?',a:'Digital verification, naam correction, bank correction — yeh teeno portal se ghar baithe ho sakti hain. Land linking aur ineligibility appeal ke liye office ya CSC center zaroori hai.'},
              {q:'Status mein koi reason nahi dikhta — kya karna hai?',a:'Kuch cases mein reason portal par nahi dikhta — seedha helpline 155261 par call karo aur enrollment ID bolo. Woh exact reason bata denge.'},
              {q:'Maine sab fix kar diya par status abhi bhi declined dikh raha hai?',a:'Portal update hone mein 15-30 din lagte hain. Patience rakhein. Agar 30 din baad bhi nahi badla to helpline 155261 par call karo ya Block Agriculture Officer se milein.'},
            ].map(({q,a})=>(
              <details key={q} className="border border-[var(--color-border)] rounded-xl overflow-hidden group">
                <summary className="p-4 font-semibold text-[var(--color-text)] cursor-pointer bg-[var(--color-bg-alt)] hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                  <span>{q}</span>
                  <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="p-4 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]">{a}</div>
              </details>
            ))}
          </div>
        </section>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="Beneficiary Status — Decline Reason Check Karo"
          guide="Status Check Karo"
          guideHref="/articles/pm-kisan-23vi-kist-2026-status-check"
        />

        <CalcBanner/>
        <RelatedArticles articles={RELATED}/>
        <AuthorBox modified={MODIFIED}/>
        <BottomNav/>
        <Disclaimer/>
      </div>
    </>
  );
}