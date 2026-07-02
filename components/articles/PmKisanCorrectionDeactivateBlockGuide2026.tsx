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
  headline:'Cultivator Benefit Scheme — Profile Update, Deactivation & Block Guide 2026',
  description:'DBT scheme mein naam, bank, zameen update kaise kare. Deactivated profile reactivate kaise kare. Blocked record unblock kaise kare — complete 2026 guide.',
  image:`${DOMAIN}/og-image.jpg`, datePublished:PUBLISHED, dateModified:MODIFIED,
  author:{'@type':'Organization',name:'KisanStatus Team',url:`${DOMAIN}/about`},
  publisher:{'@type':'Organization',name:'KisanStatus.com',url:DOMAIN},
  mainEntityOfPage:{'@type':'WebPage','@id':URL},
  inLanguage:'hi-IN', wordCount:3800,
}];

const RELATED = [
  {slug:'pm-kisan-name-correction-online-2026',    title:'Naam Update Guide',         emoji:'✏️'},
  {slug:'pm-kisan-ekyc-online-2026',               title:'Digital Verification',      emoji:'🔐'},
  {slug:'pm-kisan-rejected-list-2026',             title:'Application Declined Fix',  emoji:'❌'},
  {slug:'pm-kisan-payment-failed-status-2026',     title:'DBT Transfer Failed',       emoji:'💸'},
  {slug:'pm-kisan-land-seeding-status-check',      title:'Zameen Mapping Fix',        emoji:'🌾'},
  {slug:'pm-kisan-problems-solution-guide-2026',   title:'10 Issues Guide',           emoji:'🔧'},
];

export default function PmKisanCorrectionDeactivateBlockGuide2026() {
  return (
    <>
      {schemas.map((s,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link><span>/</span>
            <span className="text-white font-bold">Profile Update &amp; Reactivation Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">🛠️ Profile Update Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            DBT Scheme Profile Update, Deactivation &amp; Block Guide 2026 — Naam, Bank, Zameen — Sab Fix
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 18 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <SvgCorrection caption="Cultivator Benefit Profile Update 2026 — Naam Bank Zameen Sab Fix" />

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-blue-800 dark:text-blue-300 mb-3">🎯 Apni Problem Identify Karo — Direct Guide Par Jao</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              {problem:'Naam galat hai',                  fix:'Naam Update (Section 1)',    color:'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'},
              {problem:'Bank record galat hai',           fix:'Bank Update (Section 2)',    color:'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'},
              {problem:'Profile deactivated ho gayi',     fix:'Reactivation Guide (Section 3)', color:'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'},
              {problem:'Record block hai',                fix:'Unblock Process (Section 4)',    color:'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'},
              {problem:'Mobile number change karna hai',  fix:'Mobile Update (Section 5)',      color:'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'},
              {problem:'Zameen ki details galat hain',    fix:'Land Update (Section 6)',        color:'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'},
            ].map(({problem,fix,color})=>(
              <div key={problem} className={`p-3 ${color} border rounded-xl text-xs`}>
                <p className="font-bold text-[var(--color-text)]">❓ {problem}</p>
                <p className="text-green-700 dark:text-green-400 font-medium mt-1">→ {fix}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            1. Naam Mismatch — Kaise Theek Karein?
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Naam mismatch — UID, banking partner aur scheme portal — teeno jagah alag naam hona sabse common issue hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">Easy fix hai.</p>
          <StepList>
            <SI n={1}>pmkisan.gov.in → Farmers Corner → <strong>Edit UID Details</strong></SI>
            <SI n={2}><strong>Name Modification</strong> select karo</SI>
            <SI n={3}>UID card saamne rakho → EXACTLY wahi naam type karo</SI>
            <SI n={4}>UID scan upload karo (front+back, 2MB se kam)</SI>
            <SI n={5}>Submit karo → Reference number note karo</SI>
            <SI n={6}>15-20 working days mein changes reflect honge</SI>
          </StepList>
          <WB><strong>⚠️ Order Important Hai:</strong> Agar UID mein bhi naam galat hai — pehle UIDAI se UID fix karo, phir scheme portal. Ulta karne se dobara problem aayegi.</WB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            2. Banking Partner Record — Galat Details Fix
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Galat account number, galat IFSC, ya purana closed account — yeh sab DBT transfer fail karate hain.
          </p>
          <StepList>
            <SI n={1}>pmkisan.gov.in → Farmers Corner → <strong>Edit UID Details</strong></SI>
            <SI n={2}><strong>Banking Partner Details</strong> select karo</SI>
            <SI n={3}>Passbook kholo — Account Number aur IFSC carefully copy karo</SI>
            <SI n={4}>New details enter karo → Banking partner name select karo</SI>
            <SI n={5}>Passbook scan upload karo (first page, clear)</SI>
            <SI n={6}>Submit karo → 7-14 din mein changes aa jaate hain</SI>
          </StepList>
          <IB><strong>💡 Ensure Before Update:</strong> New banking partner record mein UID NPCI seeding honi chahiye — warna payment phir se fail hogi. Banking partner branch mein confirm karo pehle.</IB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            3. Deactivated Profile — Reactivate Kaise Karein?
          </h2>
          <SvgDeactivate caption="Scheme Deactivated Profile — Reactivation Process 2026" />
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Deactivation tab hoti hai jab state ya scheme team ko lagta hai ki koi ineligibility condition aa gayi — family member sarkari naukri mein, zameen transfer, ya income change.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <h3 className="font-black text-red-800 dark:text-red-300 text-xs mb-2">🚫 Common Deactivation Reasons</h3>
              <ul className="space-y-1 text-xs text-[var(--color-text-muted)]">
                {['Family member government job mein gaya','Zameen doosre ke naam transfer ho gayi','Income tax filing detect hui','Duplicate record found','Land area exceeded limit','State verification mein fail'].map(r=><li key={r} className="flex gap-1"><span className="text-red-500 dark:text-red-400">•</span>{r}</li>)}
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <h3 className="font-black text-green-800 dark:text-green-300 text-xs mb-2">✅ Reactivation Steps</h3>
              <ul className="space-y-1 text-xs text-[var(--color-text-muted)]">
                {['Block Agriculture Officer se milein','Deactivation reason pata karo','Eligibility proof documents lo','Written application submit karo','15-30 din mein review','Helpline 155261 follow up karo'].map((s,i)=><li key={i} className="flex gap-1"><span className="text-green-600 dark:text-green-400 font-bold">{i+1}.</span>{s}</li>)}
              </ul>
            </div>
          </div>
          <WB><strong>⚠️ Portal Se Nahi Hoga:</strong> Deactivation fix portal se nahi hoti — Block Agriculture Office ya helpline se hi hoti hai. Portal sirf active profiles ko edit karne deta hai.</WB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            4. Record Block/Freeze — Unblock Process
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Record block ya freeze hone ke do types hain — Scheme level block aur Banking partner level block.
          </p>
          <div className="space-y-3">
            {[
              {
                type:'Scheme Portal Level Block',
                icon:'🏛️',
                why:'Fraud detection, duplicate entry, ya government audit mein flagged',
                fix:'Helpline 155261 par call karo → Registration number batao → Officer specific reason batayega → Documentation submit karo → 15-30 din review',
              },
              {
                type:'Banking Partner Level Block/Freeze',
                icon:'🏦',
                why:'KYC expire, suspicious activity, court order, ya record minimum balance se neeche',
                fix:'Banking partner branch mein jao → Record freeze kyun hua puchho → KYC update karo → Issue resolve karo → DBT payment automatically resume hogi',
              },
            ].map(({type,icon,why,fix})=>(
              <div key={type} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 px-4 py-3 bg-[var(--color-bg-alt)] border-b border-[var(--color-border)]">
                  <span className="text-2xl">{icon}</span>
                  <p className="font-black text-[var(--color-text)] text-sm">{type}</p>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-xs text-[var(--color-text-muted)]"><strong>Kyun hota hai:</strong> {why}</p>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <p className="text-xs text-green-800 dark:text-green-300"><strong>✅ Fix:</strong> {fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            5. Mobile Number Change — Online Ya CSC Se
          </h2>
          <StepList>
            <SI n={1}>Nazdiki CSC (Common Service Center) dhundho — locator.csccloud.in</SI>
            <SI n={2}>CSC operator ko bolo: "Scheme mobile number update karna hai"</SI>
            <SI n={3}>UID card aur naya active mobile number lekar jao</SI>
            <SI n={4}>Operator portal par mobile update request dalega</SI>
            <SI n={5}>3-7 din mein naya number active ho jaayega</SI>
          </StepList>
          <IB><strong>📌 Note:</strong> Mobile update ke liye naya number UID se linked hona zaroori nahi — lekin agar OTP digital verification karna ho future mein to UID se link karo.</IB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            6. Zameen/Land Details — Office Se Update
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Khasra number galat, area wrong, ya zameen ka ownership change — yeh portal se nahi hota, office se hota hai.
          </p>
          <StepList>
            <SI n={1}>Patwari/Lekhapal se milein — updated Khasra-Khatauni lo</SI>
            <SI n={2}>Block Agriculture Officer ke paas jao</SI>
            <SI n={3}>Land update application form bharo</SI>
            <SI n={4}>Documents submit karo: UID + naya Khasra + passbook</SI>
            <SI n={5}>20-30 din mein portal par changes reflect honge</SI>
          </StepList>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">FAQ</h2>
          <SvgFAQ caption="Profile Update — Aksar Pooche Jaane Wale Sawaal" />
          <div className="space-y-3">
            {[
              {q:'Ek se zyada updates ek saath ho sakti hain?',a:'Naam aur banking partner record saath ho sakti hain — portal par dono options hain. Land update alag process hai — office se. Deactivation aur naam update alag alag resolve hoti hain.'},
              {q:'Update ke baad confirm kaise karein ki ho gayi?',a:'Beneficiary Status mein updated details dikhna chahiye — 15-20 din baad check karo. Screenshot lo current details ka — comparison ke liye.'},
              {q:'Koi bhi update free hai ya charge lagta hai?',a:'Portal se sabhi updates bilkul free hain. CSC center par mobile update pe nominal charge lag sakta hai (₹20-30) — lekin sarkari updates free honi chahiye. Koi bhi zyada charge kare to 155261 complaint karo.'},
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

        <GovLink href="https://pmkisan.gov.in/FarmerCornerEditAadhaar.aspx" label="Scheme Portal — Edit/Update Platform" guide="Update Karo"/>
        <CalcBanner/>
        <RelatedArticles articles={RELATED}/>
        <AuthorBox modified={MODIFIED}/>
        <BottomNav/>
        <Disclaimer/>
      </div>
    </>
  );
}