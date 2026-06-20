'use client';
import Link from 'next/link';
import { SvgRegistration, SvgDocuments, SvgFAQ } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, DB, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED  = '2026-06-10T08:00:00+05:30';
const DOMAIN = 'https://kisanstatus.com';
const URL    = `${DOMAIN}/articles/pm-kisan-registration-online-2026`;

const schemas = [
  {
    '@context':'https://schema.org','@type':'Article',
    headline:'PM Kisan Registration Online 2026 — Naye Farmer Ka Pehla Step: Documents Se Lekar Submit Tak',
    description:'PM Kisan registration online 2026 — kaun eligible hai, kya documents chahiye, step-by-step registration process, common mistakes aur rejection se bachne ke tips.',
    image:`${DOMAIN}/og-image.jpg`, datePublished:PUBLISHED, dateModified:MODIFIED,
    author:{'@type':'Person',name:'Sidhu Singh',url:`${DOMAIN}/about`},
    publisher:{'@type':'Organization',name:'KisanStatus.com',url:DOMAIN},
    mainEntityOfPage:{'@type':'WebPage','@id':URL},
    inLanguage:'hi-IN', wordCount:4000,
  },
  {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:DOMAIN},
      {'@type':'ListItem',position:2,name:'Articles',item:`${DOMAIN}/articles`},
      {'@type':'ListItem',position:3,name:'PM Kisan Registration 2026',item:URL},
    ],
  },
  {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:[
      {'@type':'Question',name:'PM Kisan registration kaise kare?',
        acceptedAnswer:{'@type':'Answer',text:'pmkisan.gov.in → Farmers Corner → New Farmer Registration → Aadhaar number → state select karo → form fill karo → land details add karo → submit. Free hai, 10-15 minute lagti hai.'}},
      {'@type':'Question',name:'PM Kisan registration ke liye kya chahiye?',
        acceptedAnswer:{'@type':'Answer',text:'Aadhaar card, Aadhaar-linked mobile number, bank account details (passbook), khasra/khatauni (land records). Sab documents ready rakho pehle.'}},
      {'@type':'Question',name:'PM Kisan registration ke baad pehli kist kab aayegi?',
        acceptedAnswer:{'@type':'Answer',text:'Registration ke baad state verification, land seeding aur eKYC complete honi chahiye — isme 30-60 din lag sakte hain. Phir agli scheduled installment mein payment aayegi.'}},
    ],
  },
];

const RELATED = [
  {slug:'pm-kisan-ekyc-online-2026',                    title:'eKYC Guide — Registration Ke Baad',   emoji:'🔐'},
  {slug:'pm-kisan-beneficiary-list-2026',               title:'Check Karo List Mein Naam',            emoji:'📋'},
  {slug:'pm-kisan-land-seeding-status-check',           title:'Land Seeding Kya Hoti Hai',            emoji:'🌾'},
  {slug:'pm-kisan-rejected-list-2026',                  title:'Rejected Kyun Hua — Fix Karo',         emoji:'❌'},
  {slug:'pm-kisan-name-correction-online-2026',         title:'Naam Galat Tha — Correction',          emoji:'✏️'},
  {slug:'pm-kisan-problems-solution-guide-2026',        title:'10 Common Problems Guide',             emoji:'🔧'},
];

export default function PmKisanRegistrationOnline2026() {
  return (
    <>
      {schemas.map((s,i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}

      <div className="bg-primary-600 py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/articles/pm-kisan-21vi-installment-status-check" className="hover:text-white">PM Kisan Guide</Link><span>/</span>
            <span className="text-white">Registration 2026</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">📝 New Registration</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Registration Online 2026 — Pehli Baar Register Karna Hai? Yeh Guide Padho Pehle
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
            src="/images/registration-steps.jpg"
            alt="PM Kisan new farmer registration steps 2026"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">PM Kisan New Farmer Registration 2026 — Step by Step Guide</p>
        </div>

        {/* Honest intro */}
        <div className="my-6 p-5 bg-blue-50 border-2 border-blue-400 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-blue-800 mb-2">📢 Registration Se Pehle Yeh Pado</h2>
          <p className="text-sm text-blue-900 leading-relaxed mb-2">
            Registration karna simple hai — lekin <strong>galat information daalne par rejection pakki hai</strong>. Bahut log hurry mein form bhar dete hain aur phir mahino tak kist nahi aati.
          </p>
          <p className="text-sm text-blue-900 leading-relaxed">
            Is guide mein hum pehle batayenge <strong>kya documents tayaar karo</strong>, phir <strong>form mein exactly kya bharna hai</strong>, aur <strong>kaun si galtiyan mat karo</strong>. 10 minute time do — sahi se karo.
          </p>
        </div>

        {/* Eligibility check */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Pehle Check Karo — Kya Tum Eligible Ho?
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Registration karne se pehle check karo ki tum eligible ho — warna registration hoga aur baad mein reject ho jaayega. Yeh conditions hain:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
              <h3 className="font-black text-green-800 text-sm mb-3">✅ Eligible Hain</h3>
              <ul className="space-y-1.5 text-xs text-gray-700">
                {[
                  'Small aur marginal farmers — 2 hectare (5 acre) tak zameen',
                  'Zameen apne naam par registered ho (ya spouse ke naam par)',
                  'Indian citizen ho',
                  'Aadhaar card ho',
                  'Active bank account ho',
                  'Tenant farmers (kuch states mein allowed)',
                ].map(item=>(
                  <li key={item} className="flex gap-2"><span className="text-green-600 shrink-0">✓</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
              <h3 className="font-black text-red-800 text-sm mb-3">❌ Eligible Nahi Hain</h3>
              <ul className="space-y-1.5 text-xs text-gray-700">
                {[
                  'Government employees (state + central)',
                  'Income Tax filers (last assessment year mein)',
                  'Ex-MPs, Ex-MLAs, Ex-Ministers',
                  'Registered doctors, lawyers, engineers, CAs',
                  '10,000+ monthly pension wale retired employees',
                  '2 hectare se zyada zameen wale (kuch exceptions hain)',
                ].map(item=>(
                  <li key={item} className="flex gap-2"><span className="text-red-500 shrink-0">✗</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <IB><strong>💡 Confusion?</strong> Agar bete ne sarkari naukri ki hai aur pitaji ke naam zameen hai — pitaji eligible hain (agar woh IT filer nahi hain). Joint family mein sirf woh member ineligible hoga jis par restriction hai.</IB>
        </section>

        {/* Documents section */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Documents Pehle Tayaar Karo — Beech Mein Mat Dhundho
          </h2>
          <SvgDocuments caption="PM Kisan Registration — Required Documents 2026"/>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Sabse badi galti yeh hoti hai — form fill karte waqt document dhundh rahe hote hain aur galat number type ho jaata hai. <strong>Pehle yeh sab nikal ke rakho:</strong>
          </p>
          <div className="space-y-3">
            {[
              {doc:'Aadhaar Card',       must:true,  detail:'Original dekhke number type karna — 12 digits, ek bhi galat nahi hona chahiye',    tip:'Photo lelo mobile mein — form fill karte waqt saamne rakhna'},
              {doc:'Mobile Number',      must:true,  detail:'Aadhaar se linked active number — OTP is number par aayega',                       tip:'Agar linked nahi — pehle UIDAI se link karwao ya CSC se eKYC karo'},
              {doc:'Bank Passbook',      must:true,  detail:'First page — Account number, IFSC code, Branch name, Account holder naam',         tip:'IFSC code carefully copy karo — yeh most common error hai'},
              {doc:'Land Records',       must:true,  detail:'Khasra number, Khatauni/Patta — state land records se',                            tip:'Patwari se latest copy lo — purani record reject ho sakti hai'},
              {doc:'Mobile Pe Photos',   must:false, detail:'Sabhi documents ki clear photos lo — upload karne padenge',                        tip:'2MB se kam size mein — compress kar lo agar zyada hai'},
            ].map(({doc,must,detail,tip})=>(
              <div key={doc} className="flex gap-3 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                <span className={`text-xl shrink-0 mt-0.5 ${must?'text-green-600':'text-blue-500'}`}>{must?'📋':'📎'}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-black text-gray-900 text-sm">{doc}</p>
                    {must && <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">ZARURI</span>}
                  </div>
                  <p className="text-xs text-gray-600 mb-1">{detail}</p>
                  <p className="text-[11px] text-green-700 font-medium">💡 Tip: {tip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Step by step registration */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Registration Process — Ek Ek Step Seedha
          </h2>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholo — computer ya mobile dono chalega (mobile mein desktop mode on karo)</SI>
            <SI n={2}>Homepage par <strong>"Farmers Corner"</strong> menu tap karo</SI>
            <SI n={3}><strong>"New Farmer Registration"</strong> option select karo</SI>
            <SI n={4}><strong>Rural Farmer Registration</strong> ya Urban chunio — gaon mein ho to Rural</SI>
            <SI n={5}>Aadhaar number enter karo → apna <strong>State select karo</strong> → captcha bharo → <strong>Get OTP</strong> click karo</SI>
            <SI n={6}>Mobile par OTP aayega → enter karo → Proceed</SI>
            <SI n={7}><strong>Personal Details</strong> form aayega — naam (Aadhaar jaisa exactly), category, farmer type</SI>
            <SI n={8}><strong>Bank Account Details</strong> — Account number, IFSC, bank name → passbook se exactly copy karo</SI>
            <SI n={9}><strong>Land Details</strong> section — survey/khasra number, area in hectare, land ownership</SI>
            <SI n={10}>Documents upload karo — Aadhaar, passbook, land records (clear photos, 2MB se kam)</SI>
            <SI n={11}>Sab details dobara check karo — ek baar submit hone ke baad kuch cheezein change mushkil hoti hain</SI>
            <SI n={12}><strong>Submit</strong> karo — registration number milega — <strong>screenshot zaroor lo</strong></SI>
          </StepList>
          <WB>
            <strong>⚠️ Sabse Common Mistake:</strong> IFSC code galat enter karna. Passbook mein clearly IFSC hota hai — 11 characters, SBIN0001234 format mein. Ek bhi letter galat = payment fail.
          </WB>
        </section>

        {/* After registration */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Registration Ke Baad Kya Hota Hai — Timeline
          </h2>
          <div className="space-y-3">
            {[
              {step:'Registration submit hua',                        time:'Day 1',      status:'✅',color:'bg-green-500'},
              {step:'eKYC karo — OTP ya CSC se (abhi kar lo)',        time:'Day 1-3',    status:'🔐',color:'bg-blue-500'},
              {step:'State agriculture office verification',           time:'Day 7-14',   status:'⏳',color:'bg-yellow-500'},
              {step:'Land seeding process — patwari ke records se',   time:'Day 14-30',  status:'🌾',color:'bg-amber-500'},
              {step:'Beneficiary list mein naam aata hai',             time:'Day 30-45',  status:'📋',color:'bg-purple-500'},
              {step:'Pehli installment credit hoti hai',               time:'Agli Kist',  status:'💰',color:'bg-emerald-600'},
            ].map(({step,time,status,color})=>(
              <div key={step} className="flex items-center gap-3">
                <span className={`${color} text-white text-[10px] font-black px-2 py-1 rounded-full shrink-0 whitespace-nowrap`}>{time}</span>
                <span className="text-lg shrink-0">{status}</span>
                <div className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 shadow-sm">{step}</div>
              </div>
            ))}
          </div>
          <IB><strong>💡 Important:</strong> Registration ke turant baad eKYC karo — warna delay ho jaayegi. eKYC ghar baithe free mein: pmkisan.gov.in → eKYC → OTP verify.</IB>
        </section>

        {/* Common mistakes */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            5 Galtiyan Jo Rejection Karti Hain — Bachte Raho
          </h2>
          <div className="space-y-3">
            {[
              {n:1, mistake:'IFSC Code Galat Daalna',       impact:'Payment fail ya wrong account mein ja sakti hai', fix:'Passbook ki first page kholo → IFSC dhundho → carefully type karo → dobara check karo'},
              {n:2, mistake:'Naam Aadhaar Se Alag',         impact:'eKYC fail, rejected list mein naam aa sakta hai', fix:'Aadhaar card saamne rakho → exactly wahi naam daalo — space, spelling sab same'},
              {n:3, mistake:'Purane Land Records Dena',     impact:'State verification mein fail ho sakta hai',       fix:'Patwari se latest khasra-khatauni lo — current year wala chahiye'},
              {n:4, mistake:'Joint Account Se Register Karna', impact:'Naam mismatch ho sakta hai seeding mein',     fix:'Individual account best hai — joint mein Aadhaar wale ka naam pehle hona chahiye'},
              {n:5, mistake:'eKYC Baad Mein Karni Hai Socha', impact:'Bina eKYC ke koi kist nahi aayegi',           fix:'Registration ke turant baad — usi din — eKYC karo: 5 minute, free'},
            ].map(({n,mistake,impact,fix})=>(
              <div key={n} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 px-4 py-3 bg-orange-50 border-b border-orange-100">
                  <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-black flex items-center justify-center shrink-0">{n}</span>
                  <p className="font-black text-orange-900 text-sm">{mistake}</p>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-xs text-red-700 flex gap-2"><span className="font-bold shrink-0">Impact:</span>{impact}</p>
                  <div className="flex items-start gap-2 bg-green-50 rounded-lg p-2.5">
                    <span className="text-green-600 font-black text-xs shrink-0">✅</span>
                    <p className="text-xs text-green-800">{fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Registration FAQ — Jo Sab Poochte Hain
          </h2>
          <div className="space-y-3">
            {[
              {
                q:'Registration karne ke baad koi confirmation message aata hai?',
                a:'Haan — submit karne ke baad screen par registration number aata hai. Kuch states mein SMS bhi aata hai registered mobile par. Screenshot ya note zaroor karo — baad mein status track karne ke kaam aata hai.',
              },
              {
                q:'Ek zameen par do logon ka registration ho sakta hai?',
                a:'Nahi — ek khasra number ya ek plot par sirf ek registration allowed hai. Agar pita-putra dono ke naam zameen hai to jiske naam zyada land hai ya jo actual farmer hai — wahi register kare. Dono ka ek saath nahi hoga.',
              },
              {
                q:'Registered mobile number change ho gaya — kya karein?',
                a:'Pehle UIDAI se Aadhaar mein mobile update karwao — uske baad PM Kisan portal par bhi automatically link ho jaayega. Temporary solution: CSC center par jaake biometric eKYC karo — mobile ki zaroorat nahi padegi.',
              },
              {
                q:'Registration mein galti ho gayi — edit kar sakte hain?',
                a:'Kuch details edit ho sakti hain — pmkisan.gov.in → Farmers Corner → Edit Aadhaar Details par. Bank details, naam correction wahan hai. Land details ke liye Block Agriculture Office jaana pad sakta hai ya helpline 155261 par call karo.',
              },
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
          href="https://pmkisan.gov.in/NewFarmerRegistration.aspx"
          label="PM Kisan — New Farmer Registration Portal"
          guide="Register Karo"
          guideHref="/articles/pm-kisan-ekyc-online-2026"
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
