'use client';
import Link from 'next/link';
import { SvgCorrection, SvgDeactivate, SvgFAQ } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, DB, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED  = '2026-06-10T08:00:00+05:30';
const DOMAIN = 'https://kisanstatus.com';
const URL = `${DOMAIN}/articles/pm-kisan-correction-deactivate-block-guide-2026`;

const schemas = [{
  '@context':'https://schema.org','@type':'Article',
  headline:'PM Kisan Correction, Deactivate & Block Guide 2026 — Naam Bank Zameen Fix Karo',
  description:'PM Kisan mein naam, bank, zameen correction kaise kare. Deactivated account reactivate kaise kare. Blocked account unblock kaise kare — complete 2026 guide.',
  image:`${DOMAIN}/og-image.jpg`, datePublished:PUBLISHED, dateModified:MODIFIED,
  author:{'@type':'Person',name:'Sidhu Singh',url:`${DOMAIN}/about`},
  publisher:{'@type':'Organization',name:'KisanStatus.com',url:DOMAIN},
  mainEntityOfPage:{'@type':'WebPage','@id':URL},
  inLanguage:'hi-IN', wordCount:3800,
}];

const RELATED = [
  {slug:'pm-kisan-name-correction-online-2026',    title:'Naam Correction Guide',         emoji:'✏️'},
  {slug:'pm-kisan-ekyc-online-2026',               title:'eKYC Guide',                    emoji:'🔐'},
  {slug:'pm-kisan-rejected-list-2026',             title:'Rejected List Fix',             emoji:'❌'},
  {slug:'pm-kisan-payment-failed-status-2026',     title:'Payment Failed Fix',            emoji:'💸'},
  {slug:'pm-kisan-land-seeding-status-check',      title:'Land Seeding Fix',              emoji:'🌾'},
  {slug:'pm-kisan-problems-solution-guide-2026',   title:'10 Problems Guide',             emoji:'🔧'},
];

export default function PmKisanCorrectionDeactivateBlockGuide2026() {
  return (
    <>
      {schemas.map((s,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}
      <div className="bg-primary-600 py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">Correction &amp; Deactivate Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">🛠️ Correction Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Correction, Deactivate &amp; Block Guide 2026 — Naam, Bank, Zameen — Sab Fix
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">Sidhu Singh</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 18 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-6 rounded-2xl overflow-hidden border border-green-100 shadow-md">
          <img
            src="/images/correction-guide.png"
            alt="PM Kisan correction aur deactivate guide 2026"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">PM Kisan Correction Guide 2026 — Naam Bank Zameen Sab Fix</p>
        </div>

        {/* Quick decision chart */}
        <div className="my-6 p-5 bg-blue-50 border-2 border-blue-400 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-blue-800 mb-3">🎯 Apni Problem Identify Karo — Direct Guide Par Jao</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              {problem:'Naam galat hai',                  fix:'Naam Correction (Section 1)',    color:'bg-purple-50 border-purple-200'},
              {problem:'Bank account galat hai',          fix:'Bank Correction (Section 2)',    color:'bg-blue-50 border-blue-200'},
              {problem:'Account deactivated ho gaya',     fix:'Reactivation Guide (Section 3)', color:'bg-red-50 border-red-200'},
              {problem:'Account block hai',               fix:'Unblock Process (Section 4)',    color:'bg-orange-50 border-orange-200'},
              {problem:'Mobile number change karna hai',  fix:'Mobile Update (Section 5)',      color:'bg-green-50 border-green-200'},
              {problem:'Zameen ki details galat hain',    fix:'Land Correction (Section 6)',    color:'bg-amber-50 border-amber-200'},
            ].map(({problem,fix,color})=>(
              <div key={problem} className={`p-3 ${color} border rounded-xl text-xs`}>
                <p className="font-bold text-gray-900">❓ {problem}</p>
                <p className="text-green-700 font-medium mt-1">→ {fix}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 1 — Naam */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Section 1 — Naam Correction
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Naam mismatch — Aadhaar, bank aur PM Kisan portal — teeno jagah alag naam hona sabse common problem hai aur sabse easy fix bhi hai.
          </p>
          <StepList>
            <SI n={1}>pmkisan.gov.in → Farmers Corner → <strong>Edit Aadhaar Details</strong></SI>
            <SI n={2}><strong>Name Correction</strong> select karo</SI>
            <SI n={3}>Aadhaar card saamne rakho → EXACTLY wahi naam type karo</SI>
            <SI n={4}>Aadhaar scan upload karo (front+back, 2MB se kam)</SI>
            <SI n={5}>Submit → Reference number note karo</SI>
            <SI n={6}>15-20 working days mein update hoga</SI>
          </StepList>
          <WB><strong>⚠️ Order Important Hai:</strong> Agar Aadhaar mein bhi naam galat hai — pehle UIDAI se Aadhaar fix karo, phir PM Kisan. Ulta karne se dobara problem aayegi.</WB>
        </section>

        {/* Section 2 — Bank */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Section 2 — Bank Account Correction
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Galat account number, galat IFSC, ya purana closed account — yeh sab payment fail karate hain.
          </p>
          <StepList>
            <SI n={1}>pmkisan.gov.in → Farmers Corner → <strong>Edit Aadhaar Details</strong></SI>
            <SI n={2}><strong>Bank Account Details</strong> select karo</SI>
            <SI n={3}>Passbook kholo — Account Number aur IFSC carefully copy karo</SI>
            <SI n={4}>New details enter karo → Bank name select karo</SI>
            <SI n={5}>Passbook scan upload karo (first page, clear)</SI>
            <SI n={6}>Submit → 7-14 din mein update</SI>
          </StepList>
          <IB><strong>💡 Ensure Before Update:</strong> New bank account mein Aadhaar NPCI seeding honi chahiye — warna payment phir se fail hogi. Bank branch mein confirm karo pehle.</IB>
        </section>

        {/* Section 3 — Deactivation */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Section 3 — Deactivated Account Reactivate Kaise Karein
          </h2>
          <div className="my-6 rounded-2xl overflow-hidden border border-green-100 shadow-md">
          <img
            src="/images/correction-guide.png"
            alt="PM Kisan correction aur deactivate guide 2026"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">PM Kisan Deactivated Account — Reactivation Process 2026</p>
        </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Deactivation tab hoti hai jab state ya PM Kisan team ko lagta hai ki koi ineligibility condition aa gayi — family member sarkari naukri mein, zameen transfer, ya income change.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
              <h3 className="font-black text-red-800 text-xs mb-2">🚫 Common Deactivation Reasons</h3>
              <ul className="space-y-1 text-xs text-gray-700">
                {['Family member government job mein gaya','Zameen doosre ke naam transfer ho gayi','Income tax filing detect hui','Duplicate account found','Land area exceeded limit','State verification mein fail'].map(r=><li key={r} className="flex gap-1"><span className="text-red-500">•</span>{r}</li>)}
              </ul>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
              <h3 className="font-black text-green-800 text-xs mb-2">✅ Reactivation Steps</h3>
              <ul className="space-y-1 text-xs text-gray-700">
                {['Block Agriculture Officer se milein','Deactivation reason pata karo','Eligibility proof documents lo','Written application submit karo','15-30 din mein review','Helpline 155261 follow up karo'].map((s,i)=><li key={i} className="flex gap-1"><span className="text-green-600 font-bold">{i+1}.</span>{s}</li>)}
              </ul>
            </div>
          </div>
          <WB><strong>⚠️ Portal Se Nahi Hoga:</strong> Deactivation fix portal se nahi hoti — Block Agriculture Office ya helpline se hi hoti hai. Portal sirf active accounts ko edit karne deta hai.</WB>
        </section>

        {/* Section 4 — Block */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Section 4 — Account Block/Freeze Kaise Hata
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Account block ya freeze hone ke do types hain — PM Kisan level block aur Bank level block. Dono ke liye alag process hai.
          </p>
          <div className="space-y-3">
            {[
              {
                type:'PM Kisan Portal Level Block',
                icon:'🏛️',
                why:'Fraud detection, duplicate entry, ya government audit mein flagged',
                fix:'Helpline 155261 par call karo → Registration number batao → Officer specific reason batayega → Documentation submit karo → 15-30 din review',
              },
              {
                type:'Bank Account Level Block/Freeze',
                icon:'🏦',
                why:'KYC expire, suspicious activity, court order, ya account minimum balance se neeche',
                fix:'Bank branch mein jao → Account freeze kyun hua puchho → KYC update karo → Issue resolve karo → PM Kisan payment automatically resume hogi',
              },
            ].map(({type,icon,why,fix})=>(
              <div key={type} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <span className="text-2xl">{icon}</span>
                  <p className="font-black text-gray-900 text-sm">{type}</p>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-xs text-gray-600"><strong>Kyun hota hai:</strong> {why}</p>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-xs text-green-800"><strong>✅ Fix:</strong> {fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 — Mobile */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Section 5 — Mobile Number Update
          </h2>
          <StepList>
            <SI n={1}>Nazdiki CSC (Common Service Center) dhundho — locator.csccloud.in</SI>
            <SI n={2}>CSC operator ko bolo: "PM Kisan mobile number update karna hai"</SI>
            <SI n={3}>Aadhaar card aur naya active mobile number lekar jao</SI>
            <SI n={4}>Operator portal par mobile update request dalega</SI>
            <SI n={5}>3-7 din mein naya number active ho jaayega</SI>
          </StepList>
          <IB><strong>📌 Note:</strong> Mobile update ke liye naya number Aadhaar se linked hona zaroori nahi — lekin agar OTP eKYC karna ho future mein to Aadhaar se link karo.</IB>
        </section>

        {/* Section 6 — Land */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Section 6 — Zameen/Land Details Correction
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Khasra number galat, area wrong, ya zameen ka ownership change — yeh portal se nahi hota, office se hota hai.
          </p>
          <StepList>
            <SI n={1}>Patwari/Lekhapal se milein — updated Khasra-Khatauni lo</SI>
            <SI n={2}>Block Agriculture Officer ke paas jao</SI>
            <SI n={3}>Land correction application form bharo</SI>
            <SI n={4}>Documents submit karo: Aadhaar + naya Khasra + passbook</SI>
            <SI n={5}>20-30 din mein portal par update hoga</SI>
          </StepList>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">FAQ</h2>
          <div className="space-y-3">
            {[
              {q:'Ek se zyada correction ek saath ho sakti hain?',a:'Naam aur bank correction saath ho sakti hain — portal par dono options hain. Land correction alag process hai — office se. Deactivation aur naam correction alag alag resolve hoti hain.'},
              {q:'Correction ke baad confirm kaise karein ki ho gayi?',a:'Beneficiary Status mein updated details dikhna chahiye — 15-20 din baad check karo. Screenshot lo current details ka — comparison ke liye.'},
              {q:'Koi bhi correction free hai ya charge lagta hai?',a:'Portal se sabhi corrections bilkul free hain. CSC center par mobile update pe nominal charge lag sakta hai (₹20-30) — lekin sarkari corrections free honi chahiye. Koi bhi zyada charge kare to 155261 complaint karo.'},
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

        <GovLink href="https://pmkisan.gov.in/FarmerCornerEditAadhaar.aspx" label="PM Kisan — Edit/Correction Portal" guide="Correction Karo"/>
        <CalcBanner/>
        <RelatedArticles articles={RELATED}/>
        <AuthorBox modified={MODIFIED}/>
        <BottomNav/>
        <Disclaimer/>
      </div>
    </>
  );
}
