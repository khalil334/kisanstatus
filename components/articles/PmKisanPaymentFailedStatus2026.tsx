'use client';
import Link from 'next/link';
import { SvgPaymentFailed, SvgFAQ } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, DB, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED  = '2026-06-10T08:00:00+05:30';
const DOMAIN = 'https://kisanstatus.com';
const URL    = `${DOMAIN}/articles/pm-kisan-payment-failed-status-2026`;

const schemas = [
  {
    '@context':'https://schema.org','@type':'Article',
    headline:'PM Kisan Payment Failed 2026 — 8 Reasons Aur Ghar Baithe Fix Guide',
    description:'PM Kisan payment nahi aayi 2026 — NPCI error, bank Aadhaar seeding, wrong IFSC — 8 real reasons aur har ek ka tested fix. Hinglish step-by-step guide.',
    image:`${DOMAIN}/og-image.jpg`, datePublished:PUBLISHED, dateModified:MODIFIED,
    author:{'@type':'Person',name:'Sidhu Singh',url:`${DOMAIN}/about`},
    publisher:{'@type':'Organization',name:'KisanStatus.com',url:DOMAIN},
    mainEntityOfPage:{'@type':'WebPage','@id':URL},
    inLanguage:'hi-IN', wordCount:4000,
  },
  {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:[
      {'@type':'Question',name:'PM Kisan payment failed kyun hoti hai?',
        acceptedAnswer:{'@type':'Answer',text:'Main reasons: bank mein Aadhaar seeding nahi, galat IFSC code, account band ya frozen, naam mismatch, eKYC pending. Beneficiary Status mein exact error code dekho phir fix karo.'}},
      {'@type':'Question',name:'Payment failed hone ke baad paisa wapas milega?',
        acceptedAnswer:{'@type':'Answer',text:'Haan — failed payment automatically return hoti hai government ke paas. Problem fix hone ke baad arrears mein wapas milti hai agli successful payment ke saath.'}},
      {'@type':'Question',name:'PM Kisan NPCI error fix kaise kare?',
        acceptedAnswer:{'@type':'Answer',text:'Bank branch mein jao → "Aadhaar NPCI seeding" form bharo → Aadhaar aur passbook lo → 3-7 din mein fix. Ya bank app se bhi kar sakte ho — Aadhaar link option mein.'}},
    ],
  },
];

const RELATED = [
  {slug:'pm-kisan-ekyc-online-2026',                   title:'eKYC Karo — Payment Fix Hogi', emoji:'🔐'},
  {slug:'pm-kisan-rejected-list-2026',                 title:'Rejected List — Reason Fix',    emoji:'❌'},
  {slug:'pm-kisan-name-correction-online-2026',        title:'Naam Correction Guide',         emoji:'✏️'},
  {slug:'pm-kisan-beneficiary-list-2026',              title:'Beneficiary List Check',         emoji:'📋'},
  {slug:'pm-kisan-21vi-installment-status-check',      title:'Status Check Guide',             emoji:'📅'},
  {slug:'pm-kisan-problems-solution-guide-2026',       title:'10 Problems Complete Guide',     emoji:'🔧'},
];

export default function PmKisanPaymentFailedStatus2026() {
  return (
    <>
      {schemas.map((s,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}

      <div className="bg-primary-600 py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/articles/pm-kisan-21vi-installment-status-check" className="hover:text-white">PM Kisan Guide</Link><span>/</span>
            <span className="text-white">Payment Failed Fix</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">💸 Payment Failed</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Payment Nahi Aayi 2026 — 8 Reasons Aur Har Ek Ka Real Fix
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">Sidhu Singh</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 15 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-6 rounded-2xl overflow-hidden border border-green-100 shadow-md">
          <img
            src="/images/payment-failed.png"
            alt="PM Kisan payment failed fix guide 2026"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">PM Kisan Payment Failed — 8 Reasons Aur Fix Guide 2026</p>
        </div>

        {/* Real scenario */}
        <div className="my-6 p-5 bg-red-50 border-2 border-red-400 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-red-800 mb-2">😤 Yeh Situation Toh Jaani Pehchaani Hai</h2>
          <p className="text-sm text-red-900 leading-relaxed mb-2">
            Status check kiya — <strong>"Payment Success"</strong> dikh raha hai. Bank mein gaye — <strong>koi credit nahi</strong>. Phone karke puchha helpline pe — bola "processing mein hai". 15 din ho gaye — kuch nahi.
          </p>
          <p className="text-sm text-red-900 leading-relaxed">
            Yeh payment failure hai — aur iska ek specific reason hai. <strong>Reason pehchano — fix karo — paisa wapas aayega.</strong> Is guide mein sab 8 reasons aur exact fix hai.
          </p>
        </div>

        {/* Step 1 — Diagnose */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Pehla Kaam — Exact Problem Pata Karo
          </h2>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholo → Farmers Corner → <strong>Beneficiary Status</strong></SI>
            <SI n={2}>Aadhaar ya Mobile number daalo → Get Data</SI>
            <SI n={3}><strong>Payment Details</strong> section scroll karo — har kist ki entry hogi</SI>
            <SI n={4}>Last kist mein <strong>status code</strong> dekho — "Payment Success", "Payment Failed", "Return", ya error code</SI>
            <SI n={5}>Error code note karo — neeche wali list mein dekho apna code aur fix karo</SI>
          </StepList>
          <IB>
            <strong>💡 Payment Success But Bank Mein Nahi?</strong> Matlab payment government se chali gayi lekin bank mein credit nahi hui — yeh NPCI seeding ya account issue hai. Neeche Reason #1 padho.
          </IB>
        </section>

        {/* 8 Reasons */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            8 Payment Failure Reasons — Apna Dhundho, Fix Karo
          </h2>
          <div className="space-y-4">
            {[
              {
                n:1, title:'NPCI Aadhaar Bank Seeding Nahi',
                badge:'Most Common — 50% Cases',
                badgeColor:'bg-red-100 text-red-700',
                symptom:'Status "Payment Success" lekin bank mein nahi aaya',
                explain:'PM Kisan payment Aadhaar ke zariye NPCI (National Payments Corporation) se route hoti hai. Agar tumhara bank account Aadhaar se NPCI mein seed nahi — payment bounce karti hai.',
                fix:[
                  'Bank branch mein jao — "Aadhaar NPCI seeding karna hai" bolo',
                  'Aadhaar card original + bank passbook lekar jao',
                  'Form bharo — free hoga',
                  '3-7 din mein link ho jaayega',
                  'Ya net banking/bank app mein "Aadhaar link" option dekho',
                ],
                time:'3-7 din',
              },
              {
                n:2, title:'Galat IFSC Code Register Hua',
                badge:'Common — Easily Fixable',
                badgeColor:'bg-orange-100 text-orange-700',
                symptom:'Payment ek alag bank mein chali gayi ya return aayi',
                explain:'Registration ke waqt IFSC code 1-2 letter galat type ho gaya — payment wrong branch ya bank mein jaati hai ya bounce karti hai.',
                fix:[
                  'pmkisan.gov.in → Farmers Corner → Edit Aadhaar Details → Bank Details',
                  'Passbook kholo — IFSC code copy karo EXACTLY',
                  'IFSC 11 characters ka hota hai — jaise SBIN0001234',
                  'Update karo aur submit karo — 7-14 din mein fix',
                ],
                time:'7-14 din',
              },
              {
                n:3, title:'eKYC Incomplete Ya Expire',
                badge:'Very Common',
                badgeColor:'bg-yellow-100 text-yellow-700',
                symptom:'Payment list mein naam hai lekin payment nahi aayi',
                explain:'Agar eKYC pending hai ya somehow invalidate ho gayi — payment rok li jaati hai even if sab kuch sahi tha pehle.',
                fix:[
                  'pmkisan.gov.in → eKYC → Aadhaar number daalo',
                  '"eKYC Already Done" dikhega — good. Agar OTP form aaye — abhi karo',
                  'CSC center bhi option hai — biometric se free mein',
                  'eKYC ke 24-48 ghante baad status update hoga',
                ],
                time:'Instant to 48 hrs',
              },
              {
                n:4, title:'Bank Account Band Ya Frozen',
                badge:'Easily Overlooked',
                badgeColor:'bg-blue-100 text-blue-700',
                symptom:'Account number sahi hai lekin credit nahi hoti',
                explain:'Account inactive (2 saal se transaction nahi), frozen (court order/bank action), ya converted to different type — payment bounce hoti hai.',
                fix:[
                  'Bank branch mein jao — "Mera account active hai?" puchho',
                  'KYC update karo agar bola jaaye — Aadhaar + photo',
                  'Minimum balance maintain karo',
                  'Agar frozen hai — reason pata karo aur resolve karo',
                  'Phir PM Kisan portal par bank details re-verify karo',
                ],
                time:'3-14 din depending on issue',
              },
              {
                n:5, title:'Naam Mismatch — Bank aur Aadhaar Alag',
                badge:'Causes Multiple Issues',
                badgeColor:'bg-purple-100 text-purple-700',
                symptom:'Payment DBT mein reject hoti hai — naam verify nahi hota',
                explain:'NPCI payment route karte waqt naam match karta hai — bank mein naam alag hua to NPCI reject kar deta hai.',
                fix:[
                  'Bank branch → naam Aadhaar ke jaisa update karo',
                  'PM Kisan portal → naam correction karo',
                  'Dono jagah bilkul same naam hona chahiye — Aadhaar jaisa',
                  'Naam correction guide: is site par padho',
                ],
                time:'15-20 din',
              },
              {
                n:6, title:'Joint Account — Wrong Primary Holder',
                badge:'Easy Fix',
                badgeColor:'bg-teal-100 text-teal-700',
                symptom:'Payment bounce hoti hai joint account mein',
                explain:'Joint account mein PM Kisan wale farmer ka naam FIRST hona chahiye. Agar wife/son ka naam first hai — NPCI mismatch ho sakta hai.',
                fix:[
                  'Bank branch → account holder order check karo',
                  'Farmer ka naam first primary holder banana hoga',
                  'Ya individual account kholo — joint se zyada better hai',
                  'PM Kisan portal par nayi account details update karo',
                ],
                time:'7-14 din',
              },
              {
                n:7, title:'State/District Registration Error',
                badge:'Rare But Tricky',
                badgeColor:'bg-gray-100 text-gray-700',
                symptom:'State ne beneficiary list mein include nahi kiya',
                explain:'Agar registration mein galat state ya district select hua — state ki beneficiary list mein naam nahi aata, payment nahi hoti.',
                fix:[
                  'Block Agriculture Officer ke paas jao — registration details check karo',
                  'State correction ke liye formal application do',
                  'Helpline 155261 par call karo — registration number batao',
                  'Correction mein 20-30 din lag sakte hain',
                ],
                time:'20-30 din',
              },
              {
                n:8, title:'Bank Server/Technical Error',
                badge:'Temporary — Self Resolves',
                badgeColor:'bg-green-100 text-green-700',
                symptom:'Status mein "Technical Error" ya "Bank Server Error"',
                explain:'Kisi bhi bank ka server down hone par ya high traffic mein payment fail ho sakti hai — yeh temporary hota hai.',
                fix:[
                  '24-48 ghante wait karo — automatically re-try hota hai',
                  'Bank ka customer care call karo — confirm karo',
                  'Agar 7 din baad bhi nahi — helpline 155261 call karo',
                  'Generally is case mein paisa automatically credit ho jaata hai',
                ],
                time:'24 hrs to 7 din',
              },
            ].map(({n,title,badge,badgeColor,symptom,explain,fix,time})=>(
              <div key={n} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 px-5 py-4 bg-gray-50 border-b border-gray-100">
                  <span className="w-8 h-8 rounded-full bg-red-600 text-white text-sm font-black flex items-center justify-center shrink-0">{n}</span>
                  <div className="flex-1">
                    <p className="font-black text-gray-900 text-sm">{title}</p>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeColor}`}>{badge}</span>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold shrink-0">{time}</span>
                </div>
                <div className="p-5">
                  <div className="mb-3 p-3 bg-amber-50 border border-amber-100 rounded-lg">
                    <p className="text-xs text-amber-800"><strong>Symptom:</strong> {symptom}</p>
                  </div>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed"><strong>Kyun hota hai:</strong> {explain}</p>
                  <div className="bg-green-50 border border-green-100 rounded-xl p-3">
                    <p className="text-xs font-black text-green-800 mb-2">✅ Fix Karo:</p>
                    <ol className="space-y-1">
                      {fix.map((f,i)=>(
                        <li key={i} className="flex gap-2 text-xs text-green-900">
                          <span className="font-bold shrink-0 text-green-600">{i+1}.</span>{f}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Failed payment wapas milegi? */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Failed Payment Wapas Milegi? — Arrears System
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            <strong>Haan — bilkul milegi.</strong> PM Kisan ka arrears system yeh guarantee karta hai ki koi bhi kist permanently lost nahi hoti. Yeh hota hai:
          </p>
          <div className="space-y-2">
            {[
              {step:'Payment government se send hoti hai',icon:'📤',color:'bg-blue-500'},
              {step:'Bank ya NPCI mein fail ho jaati hai — return hoti hai',icon:'↩️',color:'bg-red-500'},
              {step:'Amount PM Kisan government account mein wapas aata hai',icon:'🏛️',color:'bg-amber-500'},
              {step:'Tum problem fix karte ho',icon:'🔧',color:'bg-purple-500'},
              {step:'Next payment cycle mein — dono kist (current + arrears) ek saath credit',icon:'💰',color:'bg-green-600'},
            ].map(({step,icon,color})=>(
              <div key={step} className="flex items-center gap-3">
                <span className={`${color} text-white text-sm w-8 h-8 rounded-full flex items-center justify-center shrink-0`}>{icon}</span>
                <div className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 shadow-sm">{step}</div>
              </div>
            ))}
          </div>
          <IB><strong>💰 Example:</strong> 3 kistein miss huin — ₹6,000. Problem fix ki. Agli payment mein ₹8,000 aayenge — ₹2,000 current + ₹6,000 arrears. Government tumhara paisa nahi rakhti.</IB>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Payment Problem — Asli Sawaal
          </h2>
          <SvgFAQ caption="PM Kisan Payment Failed FAQ 2026"/>
          <div className="space-y-3 mt-4">
            {[
              {q:'Kitni baar payment fail ho sakti hai?',a:'Koi limit nahi — lekin har failure mein reason hota hai. Ek baar root cause fix ho jaaye to dobara nahi hogi. Agar baar baar fail ho rahi hai — har baar alag reason ho sakta hai — ek ek check karo.'},
              {q:'Helpline 155261 par call karna chahiye?',a:'Haan — agar khud fix nahi kar pa rahe ho ya reason portal par clear nahi hai. Registration number ready rakho. Helpline ke operators detailed history dekh sakte hain. Calling hours: 9 AM to 6 PM, Monday to Friday.'},
              {q:'Payment failed hone ke baad kitne din mein arrears milenge?',a:'Jis din problem fix ho us din se 15-30 din mein. Lekin yeh next installment date par depend karta hai — agar 23vi kist July mein hai aur tune June mein fix kiya — to July mein hi milega. Earlier fix karo — earlier milega.'},
              {q:'Bank ne kaha ki "hamare paas koi payment nahi aayi" — kya karein?',a:'Portal par Payment Success dikhta hai lekin bank mein nahi — yeh NPCI seeding issue hai guaranteed. Bank wale sach bol rahe hain — payment bounce ho ke government ke paas wapas gayi. NPCI seeding fix karo (Reason #1) — 3-7 din mein aayega.'},
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
          label="PM Kisan Beneficiary Status — Payment Details Check"
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
