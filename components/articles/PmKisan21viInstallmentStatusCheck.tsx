'use client';
import Link from 'next/link';
import { SvgInstallmentStatus, SvgFAQ } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, DB, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED  = '2026-06-10T08:00:00+05:30';
const DOMAIN = 'https://kisanstatus.com';
const URL    = `${DOMAIN}/articles/pm-kisan-21vi-installment-status-check`;

const schemas = [
  {
    '@context':'https://schema.org','@type':'Article',
    headline:'PM Kisan 21vi 22vi Installment Status Check 2026 — Mobile Se 2 Minute Mein',
    description:'PM Kisan 21vi aur 22vi kist status check karo — Aadhaar, mobile ya registration number se. Payment date, amount, aur next installment guide — Hinglish mein.',
    image:`${DOMAIN}/og-image.jpg`, datePublished:PUBLISHED, dateModified:MODIFIED,
    author:{'@type':'Person',name:'Sidhu Singh',url:`${DOMAIN}/about`},
    publisher:{'@type':'Organization',name:'KisanStatus.com',url:DOMAIN},
    mainEntityOfPage:{'@type':'WebPage','@id':URL},
    inLanguage:'hi-IN', wordCount:3800,
  },
  {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:[
      {'@type':'Question',name:'PM Kisan 22vi kist kab aayi?',
        acceptedAnswer:{'@type':'Answer',text:'PM Kisan 22vi kist 13 March 2026 ko release hui — ₹2,000 directly bank mein DBT se. Status check: pmkisan.gov.in → Beneficiary Status.'}},
      {'@type':'Question',name:'PM Kisan 23vi kist kab aayegi?',
        acceptedAnswer:{'@type':'Answer',text:'23vi PM Kisan kist June-July 2026 mein expected hai. Exact date official announcement par depend karti hai. Tab tak eKYC complete rakho aur status check karte raho.'}},
      {'@type':'Question',name:'PM Kisan status mobile se kaise check karein?',
        acceptedAnswer:{'@type':'Answer',text:'pmkisan.gov.in kholo → Farmers Corner → Beneficiary Status → Aadhaar number ya mobile number enter karo → Get Data. Mobile browser mein bhi kaam karta hai.'}},
    ],
  },
];

const RELATED = [
  {slug:'pm-kisan-ekyc-online-2026',                   title:'eKYC Guide 2026',               emoji:'🔐'},
  {slug:'pm-kisan-payment-failed-status-2026',         title:'Payment Nahi Aayi — Fix',        emoji:'💸'},
  {slug:'pm-kisan-rejected-list-2026',                 title:'Rejected List Fix',              emoji:'❌'},
  {slug:'pm-kisan-beneficiary-list-2026',              title:'Beneficiary List Check',         emoji:'📋'},
  {slug:'pm-kisan-installment-history-check-online',   title:'Poori Kist History',             emoji:'📊'},
  {slug:'pm-kisan-problems-solution-guide-2026',       title:'10 Problems Guide',              emoji:'🔧'},
];

export default function PmKisan21viInstallmentStatusCheck() {
  return (
    <>
      {schemas.map((s,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}

      <div className="bg-primary-600 py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">PM Kisan Status Check 2026</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">📅 Status Check</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan 22vi Kist Status Check 2026 — Mobile Se 2 Minute Mein Pata Karo
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">Sidhu Singh</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 10 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-6 rounded-2xl overflow-hidden border border-green-100 shadow-md">
          <img
            src="/images/status-check.jpg"
            alt="PM Kisan 22vi kist beneficiary status check 2026"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">PM Kisan 22vi Kist Status Check — Aadhaar Se Mobile Par 2026</p>
        </div>

        {/* Kist dates info */}
        <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {kist:'21vi Kist',date:'Nov 2025',amount:'₹2,000',status:'✅ Released',bg:'bg-green-50 border-green-200',tc:'text-green-800'},
            {kist:'22vi Kist',date:'13 Mar 2026',amount:'₹2,000',status:'✅ Released',bg:'bg-green-50 border-green-300',tc:'text-green-800'},
            {kist:'23vi Kist',date:'Jun-Jul 2026',amount:'₹2,000',status:'⏳ Expected',bg:'bg-amber-50 border-amber-200',tc:'text-amber-800'},
          ].map(({kist,date,amount,status,bg,tc})=>(
            <div key={kist} className={`p-4 ${bg} border rounded-2xl text-center`}>
              <p className={`font-black text-sm ${tc}`}>{kist}</p>
              <p className="text-xl font-black text-gray-900 my-1">{amount}</p>
              <p className="text-xs text-gray-600">{date}</p>
              <span className={`text-xs font-bold ${tc} mt-1 block`}>{status}</span>
            </div>
          ))}
        </div>

        {/* Quick check */}
        <div className="my-6 p-5 bg-green-50 border-2 border-green-600 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-green-800 mb-3">⚡ 2 Minute Mein Status Check</h2>
          <StepList>
            <SI n={1}>Mobile browser mein <strong>pmkisan.gov.in</strong> kholo</SI>
            <SI n={2}><strong>Farmers Corner</strong> menu tap karo — scroll karke dhundho</SI>
            <SI n={3}><strong>Beneficiary Status</strong> select karo</SI>
            <SI n={4}><strong>Aadhaar Number</strong> ya <strong>Mobile Number</strong> enter karo</SI>
            <SI n={5}><strong>Get Data</strong> button dabao</SI>
            <SI n={6}>Payment history dekho — 22vi kist <strong>13 March 2026</strong> ki entry hogi</SI>
          </StepList>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Status Mein Kya Kya Dikh Sakta Hai — Matlab Samjho
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Matlab</th>
                  <th className="p-3 text-left">Kya Karna Hai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['✅ Payment Success','Paisa bank mein credit ho gaya','Bank statement check karo — 24-48 hrs mein dikhega'],
                  ['⏳ FTO Is Generated','File To Order create ho gayi — processing mein','2-5 din wait karo — bank mein aa jaayega'],
                  ['🔄 Payment Under Process','PFMS se bank ko bheja ja raha hai','3-7 din wait karo — phir check karo'],
                  ['❌ Payment Failed/Return','Bank ya NPCI mein bounce hua','Neeche failure guide padho — 8 reasons'],
                  ['🚫 Rejected','Application level issue','Rejection guide padho — fix karo'],
                  ['⚠️ eKYC Pending','Bina eKYC payment nahi hogi','Abhi eKYC karo — 5 min free mein'],
                ].map(([s,m,k],i)=>(
                  <tr key={s} className={i%2===0?'bg-white':'bg-green-50/50'}>
                    <td className="p-3 border-b font-medium text-xs">{s}</td>
                    <td className="p-3 border-b text-xs text-gray-700">{m}</td>
                    <td className="p-3 border-b text-xs text-green-700 font-medium">{k}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            3 Tarike Se Status Check — Kaun Sa Tumhare Liye Best?
          </h2>
          <div className="space-y-3">
            {[
              {
                method:'Aadhaar Number Se',
                icon:'🪪',
                best:'Sabse accurate — direct UIDAI linked',
                steps:['pmkisan.gov.in → Farmers Corner → Beneficiary Status','Select "Aadhaar Number"','12-digit Aadhaar daalo','Captcha → Get Data'],
                tip:'Aadhaar card saamne rakho — galti mat karna',
              },
              {
                method:'Mobile Number Se',
                icon:'📱',
                best:'Jab Aadhaar haath mein na ho',
                steps:['pmkisan.gov.in → Beneficiary Status','Select "Mobile Number"','10-digit registered mobile daalo','Captcha → Get Data'],
                tip:'Wahi number kaam karega jo registration mein diya tha',
              },
              {
                method:'Registration Number Se',
                icon:'🔢',
                best:'Agar registration number pata ho',
                steps:['pmkisan.gov.in → Beneficiary Status','Select "Registration Number"','PM Kisan registration ID daalo','Captcha → Get Data'],
                tip:'Registration number old SMS ya application receipt mein hota hai',
              },
            ].map(({method,icon,best,steps,tip})=>(
              <div key={method} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <p className="font-black text-gray-900 text-sm">{method}</p>
                    <p className="text-xs text-green-700 font-medium">{best}</p>
                  </div>
                </div>
                <div className="p-4">
                  <ol className="space-y-1.5">
                    {steps.map((s,i)=>(
                      <li key={i} className="flex gap-2 text-xs text-gray-700">
                        <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold flex items-center justify-center shrink-0">{i+1}</span>
                        {s}
                      </li>
                    ))}
                  </ol>
                  <p className="text-[11px] text-amber-700 mt-2 flex gap-1"><span>💡</span>{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            23vi Kist Ke Liye Abhi Kya Karo
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            23vi kist June-July 2026 expected hai. Abhi se yeh 3 kaam karo — kist pakki rahegi:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {n:'1',icon:'🔐',title:'eKYC Check Karo',desc:'Portal par "eKYC Done" dikhna chahiye — nahi dikhta to abhi free mein karo',href:'/articles/pm-kisan-ekyc-online-2026',cta:'eKYC Guide'},
              {n:'2',icon:'🏦',title:'Bank Aadhaar Seeding',desc:'Bank branch mein confirm karo ki Aadhaar linked hai — NPCI seeding zaroori',href:'/articles/pm-kisan-payment-failed-status-2026',cta:'Payment Guide'},
              {n:'3',icon:'✅',title:'Beneficiary Status',desc:'"Active" dikhna chahiye — "Rejected" ya "Inactive" nahi',href:'/articles/pm-kisan-rejected-list-2026',cta:'Rejected Fix'},
            ].map(({n,icon,title,desc,href,cta})=>(
              <div key={n} className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-green-700 text-white text-xs font-black flex items-center justify-center">{n}</span>
                  <span className="text-xl">{icon}</span>
                </div>
                <p className="font-black text-gray-900 text-sm">{title}</p>
                <p className="text-xs text-gray-500">{desc}</p>
                <Link href={href} className="text-xs font-bold text-green-700 hover:text-green-900 mt-auto">{cta} →</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">FAQ</h2>
          <SvgFAQ caption="PM Kisan Status Check FAQ 2026"/>
          <div className="space-y-3 mt-4">
            {[
              {q:'Status mein "FTO Generated" hai lekin paisa nahi aaya — kab aayega?',a:'FTO (File To Order) matlab government ne payment process shuru kar di. Bank mein aane mein 3-7 working days lagte hain. Agar 10 din baad bhi nahi aaya to bank se puchho aur helpline 155261 call karo.'},
              {q:'Ek baar payment success dikhne ke baad phir se check karna chahiye?',a:'Zaroori nahi — lekin next kist se pehle eKYC aur bank seeding status check karna smart hai. Kabhi kabhi technical updates ki wajah se status change ho jaata hai.'},
              {q:'Mobile number change ho gaya — status kaise check karein?',a:'Aadhaar number se check karo — mobile ki zaroorat nahi padegi. Ya registration number se bhi check ho sakta hai. Naya number update karne ke liye CSC center jao.'},
              {q:'Bank statement mein "PM KISAN" entry hai lekin amount alag hai?',a:'PM Kisan se ₹2,000 aata hai per installment. Agar kum aaya hai — check karo ki account se koi charge to nahi kata. Zyada aaya hai — arrears mein pichli missed kist bhi aayi hogi.'},
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
          label="PM Kisan Beneficiary Status — Official Check"
          guide="Status Check Karo"
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
