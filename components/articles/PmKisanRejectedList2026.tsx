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
    headline:'PM Kisan Rejected List 2026 — Rejection Reason Pata Karo & Step-by-Step Fix Guide',
    description:'PM Kisan rejected list 2026 — 10 rejection reasons, Aadhaar mismatch, eKYC fail, land seeding no — har ek problem ka real solution Hinglish mein.',
    image:`${DOMAIN}/og-image.jpg`, datePublished:PUBLISHED, dateModified:MODIFIED,
    author:{'@type':'Person',name:'Sidhu Singh',url:`${DOMAIN}/about`},
    publisher:{'@type':'Organization',name:'KisanStatus.com',url:DOMAIN},
    mainEntityOfPage:{'@type':'WebPage','@id':URL},
    inLanguage:'hi-IN', wordCount:3400,
  },
  {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:DOMAIN},
      {'@type':'ListItem',position:2,name:'Articles',item:`${DOMAIN}/articles`},
      {'@type':'ListItem',position:3,name:'PM Kisan Rejected List 2026',item:URL},
    ],
  },
  {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:[
      {'@type':'Question',name:'PM Kisan rejected list mein naam kyun aata hai?',
        acceptedAnswer:{'@type':'Answer',text:'Common reasons: Aadhaar-bank naam mismatch, eKYC incomplete, land seeding nahi, galat IFSC code, duplicate registration, ineligible category (government employee/income tax filer).'}},
      {'@type':'Question',name:'PM Kisan rejection fix karne ke baad kist milegi?',
        acceptedAnswer:{'@type':'Answer',text:'Haan — rejection fix hone ke baad account reactivate ho jaata hai aur sabhi missed installments arrears mein credit hoti hain. Correction mein 15-30 din lag sakte hain type ke hisaab se.'}},
      {'@type':'Question',name:'Rejected farmer kya direct official site par correction kar sakta hai?',
        acceptedAnswer:{'@type':'Answer',text:'Kuch corrections portal se hote hain (naam, bank) aur kuch ke liye Block Agriculture Office jaana padta hai (land seeding, duplicate). pmkisan.gov.in → Farmers Corner → Edit Aadhaar Details par check karo.'}},
    ],
  },
];

const RELATED = [
  {slug:'pm-kisan-ekyc-online-2026',                    title:'eKYC Karo — Free Guide',         emoji:'🔐'},
  {slug:'pm-kisan-payment-failed-status-2026',          title:'Payment Failed Fix',              emoji:'💸'},
  {slug:'pm-kisan-name-correction-online-2026',         title:'Name Correction Guide',           emoji:'✏️'},
  {slug:'pm-kisan-land-seeding-status-check',           title:'Land Seeding Fix',                emoji:'🌾'},
  {slug:'pm-kisan-beneficiary-list-2026',               title:'Beneficiary List Check',          emoji:'📋'},
  {slug:'pm-kisan-problems-solution-guide-2026',        title:'10 Problems Guide',               emoji:'🔧'},
];

export default function PmKisanRejectedList2026() {
  return (
    <>
      {schemas.map((s,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}

      <div className="bg-primary-600 py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/articles/pm-kisan-21vi-installment-status-check" className="hover:text-white">PM Kisan Guide</Link><span>/</span>
            <span className="text-white">Rejected List 2026</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">❌ Rejected List</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Rejected List 2026 — Rejection Reason Pata Karo &amp; Ghar Baithe Fix Karo
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">Sidhu Singh</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 16 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-6 rounded-2xl overflow-hidden border border-green-100 shadow-md">
          <img
            src="/images/registration-approved.png"
            alt="PM Kisan rejected list reason fix guide 2026"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">PM Kisan Rejected — Reason Pata Karo, Fix Karo, Kist Pao</p>
        </div>

        {/* Reality check box */}
        <div className="my-6 p-5 bg-red-50 border-2 border-red-400 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-red-800 mb-2">🚨 Rejection Permanent Nahi Hai — Fix Ho Sakta Hai</h2>
          <p className="text-sm text-red-700 mb-3">
            Agar PM Kisan mein naam <strong>Rejected</strong> dikh raha hai — ghabrao mat. <strong>90% cases mein rejection fix ho jaati hai</strong> — bas sahi reason pata karna hota hai aur specific action leni hoti hai. Missedkistein bhi wapas milti hain.
          </p>
          <div className="bg-white border border-red-200 rounded-xl p-3">
            <p className="text-xs font-bold text-red-800 mb-2">Pehle Reason Check Karo:</p>
            <StepList>
              <SI n={1}><strong>pmkisan.gov.in</strong> kholo → Farmers Corner → Beneficiary Status</SI>
              <SI n={2}>Aadhaar ya Mobile number daalo → Get Data</SI>
              <SI n={3}>Status section mein <strong>exact rejection reason</strong> likha hoga</SI>
              <SI n={4}>Woh reason note karo → neeche us reason ka fix padho</SI>
            </StepList>
          </div>
        </div>

        <section className="mb-8">
          <SH>Rejection vs Deactivation — Fark Kya Hai?</SH>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bahut log in dono ko same samajhte hain — lekin yeh alag hain aur fix bhi alag tarike se hota hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
              <h3 className="font-black text-red-800 text-sm mb-2">❌ Rejected</h3>
              <ul className="space-y-1.5 text-xs text-gray-700">
                {['Application level par fail hua','Registration ke time koi problem aayi','Portal par seedha correction ho sakti hai','15-20 din mein fix ho jaata hai usually'].map(i=><li key={i} className="flex gap-2"><span className="text-red-500 shrink-0">•</span>{i}</li>)}
              </ul>
            </div>
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl">
              <h3 className="font-black text-orange-800 text-sm mb-2">🚫 Deactivated</h3>
              <ul className="space-y-1.5 text-xs text-gray-700">
                {['Pehle active tha, baad mein koi problem aayi','State ne manually deactivate kiya','Block Agriculture Office jaana padta hai','20-30 din lag sakte hain reactivation mein'].map(i=><li key={i} className="flex gap-2"><span className="text-orange-500 shrink-0">•</span>{i}</li>)}
              </ul>
            </div>
          </div>
          <IB><strong>💡 Simple Rule:</strong> Dono fix ho sakte hain. Rejection = portal se. Deactivation = office se. Dono mein missed kistein arrears mein wapas milti hain.</IB>
        </section>

        <section className="mb-8">
          <SH>10 Rejection Reasons &amp; Har Ek Ka Real Fix</SH>
          <div className="space-y-3">
            {[
              {n:1, r:'eKYC Incomplete',         emoji:'🔐',
                d:'Yeh sabse common reason hai — 60% rejections sirf is wajah se hoti hain. Aadhaar OTP ya biometric verification pending hai.',
                fix:'pmkisan.gov.in → eKYC section → Aadhaar number → OTP verify. Sirf 5 minute lagte hain, bilkul free.',
                time:'Instant', difficulty:'Aasaan'},
              {n:2, r:'Aadhaar-Bank Naam Mismatch',emoji:'✏️',
                d:'PM Kisan portal mein naam aur bank account mein naam alag hai — system automatically reject kar deta hai.',
                fix:'pmkisan.gov.in → Farmers Corner → Edit Aadhaar Details → Name Correction → Aadhaar jaisa naam daalo.',
                time:'15-20 din', difficulty:'Medium'},
              {n:3, r:'Land Seeding No',          emoji:'🌾',
                d:'Aapki zameen ka record state land database se PM Kisan portal par link nahi hua. Portal par "Land Seeding No" ya "Land Seeding Pending" dikhta hai.',
                fix:'Patwari/lekhapal se milein → Khasra-Khatauni update → Block Agriculture Office mein Land Seeding form bharo.',
                time:'15-30 din', difficulty:'Kuch mehnat lagti hai'},
              {n:4, r:'Galat Bank Details',       emoji:'🏦',
                d:'Account number ya IFSC code galat daala gaya registration ke time — payment fail hoti hai ya return hoti hai.',
                fix:'pmkisan.gov.in → Farmers Corner → Edit Aadhaar Details → Bank Account Correction → Passbook se exactly copy karo.',
                time:'7-14 din', difficulty:'Aasaan'},
              {n:5, r:'Bank Aadhaar Seeding Nahi',emoji:'🔗',
                d:'Bank account Aadhaar se NPCI ke zariye link nahi — payment credit nahi ho sakti.',
                fix:'Bank branch mein jao → "Aadhaar seeding" form bharo → Aadhaar + passbook lekar jao → 3-7 din mein link ho jaata hai.',
                time:'3-7 din', difficulty:'Aasaan'},
              {n:6, r:'Duplicate Registration',   emoji:'🔄',
                d:'Ek hi Aadhaar se do alag registrations hain system mein — duplicate detect hoke reject hoti hai.',
                fix:'PM Kisan helpline 155261 par call karo → Duplicate entry identify karo → Purani ya galat entry remove karwao.',
                time:'7-15 din', difficulty:'Helpline se hoga'},
              {n:7, r:'Ineligible Category',      emoji:'🚫',
                d:'Government employee, income tax filer, MP/MLA, doctor/lawyer/engineer (registered professional) — yeh log eligible nahi hain.',
                fix:'Agar galat reject hua (genuinely farmer hain) to documents le jao Agriculture office mein → Eligibility proof submit karo.',
                time:'20-30 din', difficulty:'Office jaana padega'},
              {n:8, r:'Land Records Nahi Mile',   emoji:'📋',
                d:'State revenue database mein aapke naam par zameen registered nahi dikhi — registration time par mismatch tha.',
                fix:'Revenue/patwari office → Land records update karwao → Phir PM Kisan portal par reapply ya correction karo.',
                time:'20-40 din', difficulty:'Multiple steps'},
              {n:9, r:'Documents Blurry/Invalid', emoji:'📄',
                d:'Upload kiye documents — Aadhaar scan, passbook — itne blur ya chhote hain ki system read nahi kar paya.',
                fix:'Clear daylight mein dobara scan karo → 2MB se kam rakho → JPEG format mein upload karo → pmkisan.gov.in par re-upload.',
                time:'Instant after upload', difficulty:'Aasaan'},
              {n:10,r:'Mobile Number Issue',      emoji:'📱',
                d:'Registered mobile number invalid hai, kisi aur ke naam hai, ya Aadhaar se link nahi hai.',
                fix:'CSC center jao → Mobile number update request → Apna valid Aadhaar-linked number register karwao → Free hai.',
                time:'3-7 din', difficulty:'CSC centre se'},
            ].map(({n,r,emoji,d,fix,time,difficulty})=>(
              <div key={n} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <span className="w-7 h-7 rounded-full bg-red-600 text-white text-xs font-black flex items-center justify-center shrink-0">{n}</span>
                  <span className="text-xl">{emoji}</span>
                  <p className="font-black text-gray-900 text-sm">{r}</p>
                  <div className="ml-auto flex gap-2">
                    <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">{time}</span>
                    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{difficulty}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">{d}</p>
                  <div className="flex items-start gap-2 bg-green-50 rounded-lg p-3">
                    <span className="text-green-600 font-black text-xs shrink-0 mt-0.5">✅ FIX:</span>
                    <p className="text-xs text-green-800 leading-relaxed">{fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>Correction Ke Baad Kitna Wait Karna Hoga?</SH>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">Correction Type</th>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Kahan Se</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['eKYC','Instant (OTP) / 1-2 din (CSC)','Portal ya CSC'],
                  ['Bank Aadhaar Seeding','3-7 din','Bank branch'],
                  ['Bank Account Details','7-14 din','Portal'],
                  ['Naam Correction','15-20 din','Portal'],
                  ['Land Seeding','15-30 din','Patwari + Block Office'],
                  ['Duplicate Removal','7-15 din','Helpline 155261'],
                  ['Ineligibility Appeal','20-30 din','Agriculture Office'],
                  ['Land Records Update','20-40 din','Revenue Office + Portal'],
                ].map(([t,time,kahan],i)=>(
                  <tr key={t} className={i%2===0?'bg-white':'bg-green-50/50'}>
                    <td className="p-3 border-b font-medium text-xs">{t}</td>
                    <td className="p-3 border-b text-xs text-blue-700 font-semibold">{time}</td>
                    <td className="p-3 border-b text-xs text-gray-600">{kahan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <IB><strong>💰 Arrears:</strong> Correction ke baad sabhi missed installments arrears mein milti hain — ek saath credit hoti hain next successful payment mein.</IB>
        </section>

        <section className="mb-8">
          <SH>Documents Jo Saath Rakhne Chahiye</SH>
          <SvgDocuments caption="PM Kisan Rejection Fix — Required Documents 2026"/>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {[
              {doc:'Aadhaar Card',detail:'Original + clear scan (front & back)',always:true},
              {doc:'Bank Passbook',detail:'First page — account number, IFSC, naam clearly visible',always:true},
              {doc:'Khasra-Khatauni',detail:'Latest land records — state portal ya patwari se',always:true},
              {doc:'Mobile Number',detail:'Aadhaar-linked active number — OTP receive karne ke liye',always:true},
              {doc:'Registration Number',detail:'PM Kisan registration ID — status check ke liye',always:false},
              {doc:'Rejection Screenshot',detail:'Portal se status screenshot — office mein kaam aata hai',always:false},
            ].map(({doc,detail,always})=>(
              <div key={doc} className="flex gap-3 p-3 bg-white border border-gray-200 rounded-xl">
                <span className={`text-lg shrink-0 ${always?'text-green-600':'text-blue-500'}`}>{always?'✅':'📎'}</span>
                <div>
                  <p className="font-bold text-gray-900 text-xs">{doc} {always&&<span className="text-red-500">*</span>}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-red-600 mt-2">* = Har case mein zaroori hai</p>
        </section>

        <section className="mb-8">
          <SH>FAQ — Rejection Ke Baare Mein Common Sawaal</SH>
          <div className="space-y-3">
            {[
              {q:'Rejection fix karne ke baad kist automatically aayegi?',a:'Haan — ek baar rejection fix ho jaaye aur account active ho jaaye, next installment date par kist automatically bank mein credit ho jaayegi. Alag se kuch karne ki zaroorat nahi.'},
              {q:'Kya main ek saath multiple corrections kar sakta hoon?',a:'Haan — naam, bank, aur eKYC ek saath ho sakti hain. Land seeding alag process hai. Pehle eKYC karo (fastest), phir baaki corrections.'},
              {q:'Office nahi ja sakta — koi alternative?',a:'eKYC, naam correction, bank correction — yeh teeno portal se ghar baithe ho sakti hain. Land seeding aur ineligibility appeal ke liye office ya CSC center zaroori hai.'},
              {q:'Rejection status mein koi reason nahi dikhta — kya karna hai?',a:'Kuch cases mein reason portal par nahi dikhta — seedha PM Kisan helpline 155261 par call karo aur registration ID bolo. Woh exact reason bata denge.'},
              {q:'Maine sab fix kar diya par status abhi bhi Rejected dikh raha hai?',a:'Portal update hone mein 15-30 din lagte hain. Patience rakhein. Agar 30 din baad bhi nahi badla to helpline 155261 par call karo ya Block Agriculture Officer se milein.'},
            ].map(({q,a})=>(
              <details key={q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="p-4 font-semibold text-gray-900 cursor-pointer bg-gray-50 hover:bg-green-50 text-sm flex justify-between items-center gap-3">
                  <span>{q}</span>
                  <span className="text-green-600 text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="p-4 text-sm text-gray-700 leading-relaxed border-t border-gray-100">{a}</div>
              </details>
            ))}
          </div>
        </section>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="PM Kisan Beneficiary Status — Rejection Reason Check Karo"
          guide="Status Check Karo"
          guideHref="/articles/pm-kisan-21vi-installment-status-check"
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
