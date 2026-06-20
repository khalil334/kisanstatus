'use client';
import Link from 'next/link';
import { SvgBeneficiaryList, SvgFAQ } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED  = '2026-06-10T08:00:00+05:30';
const DOMAIN = 'https://kisanstatus.com';
const URL = `${DOMAIN}/articles/pm-kisan-beneficiary-list-village-wise-2026`;

const schemas = [{
  '@context':'https://schema.org','@type':'Article',
  headline:'PM Kisan Village Wise Beneficiary List 2026 — Apne Gaon Ki Poori List Kaise Dekhen',
  description:'PM Kisan village wise beneficiary list 2026 — gaon ki list kaise dekhe, PDF kaise download kare, naam kyun nahi hai aur fix kaise kare. State wise guide.',
  image:`${DOMAIN}/og-image.jpg`, datePublished:PUBLISHED, dateModified:MODIFIED,
  author:{'@type':'Person',name:'Sidhu Singh',url:`${DOMAIN}/about`},
  publisher:{'@type':'Organization',name:'KisanStatus.com',url:DOMAIN},
  mainEntityOfPage:{'@type':'WebPage','@id':URL},
  inLanguage:'hi-IN', wordCount:3600,
}];

const RELATED = [
  {slug:'pm-kisan-beneficiary-list-2026',            title:'Apna Naam Check Karo',          emoji:'📋'},
  {slug:'pm-kisan-ekyc-online-2026',                 title:'eKYC Guide',                    emoji:'🔐'},
  {slug:'pm-kisan-rejected-list-2026',               title:'Rejected List Fix',             emoji:'❌'},
  {slug:'pm-kisan-registration-online-2026',         title:'New Registration Guide',        emoji:'📝'},
  {slug:'pm-kisan-land-seeding-status-check',        title:'Land Seeding Fix',              emoji:'🌾'},
  {slug:'pm-kisan-21vi-installment-status-check',    title:'Status Check Guide',            emoji:'📅'},
];

export default function PmKisanBeneficiaryListVillageWise2026() {
  return (
    <>
      {schemas.map((s,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}

      <div className="bg-primary-600 py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/articles/pm-kisan-21vi-installment-status-check" className="hover:text-white">PM Kisan Guide</Link><span>/</span>
            <span className="text-white">Village Wise List</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">🏘️ Village List</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Village Wise Beneficiary List 2026 — Apne Gaon Ki Poori List Dekho &amp; PDF Download
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">Sidhu Singh</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 12 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-6 rounded-2xl overflow-hidden border border-green-100 shadow-md">
          <img
            src="/images/village-wise-list.png"
            alt="PM Kisan village wise beneficiary list gram panchayat"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">PM Kisan Village Wise List 2026 — Gaon Ki Poori List Online</p>
        </div>

        <div className="my-6 p-5 bg-blue-50 border-2 border-blue-400 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-blue-800 mb-2">🏘️ Village List Kyun Dekhni Chahiye?</h2>
          <p className="text-sm text-blue-900 leading-relaxed">
            Haryana ke ek Sarpanch ne bataya — unhone apne gaon ki village wise list dekhi to pata chala ki <strong>23 eligible farmers registered hi nahi the</strong>. Unhone drive karwaya, sab register hue, agli kist mein sabko paisa mila. Village list sirf apna naam check karne ke liye nahi — poore gaon ki help karne ke liye bhi hai.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Village Wise List Kaise Dekhen — 5 Steps
          </h2>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholo → upar <strong>Dashboard</strong> click karo</SI>
            <SI n={2}>Left side mein dropdown se <strong>State</strong> select karo — apna state chunio</SI>
            <SI n={3}><strong>District</strong> select karo — phir <strong>Sub-District/Tehsil/Block</strong></SI>
            <SI n={4}><strong>Village</strong> select karo — apna gaon naam dhundho (English mein hoga)</SI>
            <SI n={5}>Poori village list screen par aa jaayegi — <strong>Ctrl+F</strong> (PC) ya browser search se naam dhundho</SI>
          </StepList>
          <IB>
            <strong>📱 Mobile Par PDF Save Karna:</strong> Browser menu (3 dots) → Share → Print → Save as PDF. Ya full page screenshot lo — 2-3 screenshots mein poori list aa jaayegi.
          </IB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            List Mein Naam Dhundhne Ka Smart Tarika
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
              <h3 className="font-black text-gray-900 text-sm mb-3">💻 Computer Par</h3>
              <ul className="space-y-2 text-xs text-gray-700">
                {[
                  'Ctrl+F dabao — search box khulega',
                  'Naam type karo — sab matches highlight honge',
                  'Father ka naam ya partial naam bhi kaam karta hai',
                  'Ctrl+P → Save as PDF — full list save hogi',
                ].map(s=><li key={s} className="flex gap-2"><span className="text-green-600">✓</span>{s}</li>)}
              </ul>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
              <h3 className="font-black text-gray-900 text-sm mb-3">📱 Mobile Par</h3>
              <ul className="space-y-2 text-xs text-gray-700">
                {[
                  'Chrome: 3 dots → Find in page',
                  'Naam type karo — yellow highlight',
                  'Screenshot lo — share karo',
                  'Desktop mode on karo agar list nahi dikh rahi',
                ].map(s=><li key={s} className="flex gap-2"><span className="text-blue-600">✓</span>{s}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            State Wise Village List — Direct Links
          </h2>
          <p className="text-gray-700 text-sm mb-4">Apna state select karo — PM Kisan dashboard directly wahan jaayega:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              ['🏔️','Uttar Pradesh','uttar-pradesh'],
              ['🌊','Bihar','bihar'],
              ['🌿','Madhya Pradesh','madhya-pradesh'],
              ['☀️','Rajasthan','rajasthan'],
              ['🌾','Maharashtra','maharashtra'],
              ['🐟','West Bengal','west-bengal'],
              ['🌴','Karnataka','karnataka'],
              ['🌊','Odisha','odisha'],
              ['🌞','Tamil Nadu','tamil-nadu'],
              ['🌾','Punjab','punjab'],
              ['🚜','Haryana','haryana'],
              ['🌶️','Andhra Pradesh','andhra-pradesh'],
              ['🏔️','Himachal Pradesh','himachal-pradesh'],
              ['🌿','Chhattisgarh','chhattisgarh'],
              ['🌾','Jharkhand','jharkhand'],
              ['🏔️','Uttarakhand','uttarakhand'],
              ['🌊','Gujarat','gujarat'],
              ['🌴','Kerala','kerala'],
            ].map(([icon,name,slug])=>(
              <Link key={slug} href={`/beneficiary-list/${slug}`}
                className="flex items-center gap-2 p-3 bg-white border border-green-200 rounded-xl text-xs font-semibold text-green-800 hover:bg-green-600 hover:text-white transition-all">
                <span>{icon}</span>{name}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Village List Mein Naam Nahi — Kya Karna Hai?
          </h2>
          <div className="space-y-3">
            {[
              {reason:'Naam galat spelling se register hua',fix:'pmkisan.gov.in → Naam Correction karo — Aadhaar jaisi spelling daalo',href:'/articles/pm-kisan-name-correction-online-2026'},
              {reason:'eKYC nahi hui — list mein nahi aaya',fix:'pmkisan.gov.in → eKYC → OTP verify karo — 24-48 ghante mein list mein naam aayega',href:'/articles/pm-kisan-ekyc-online-2026'},
              {reason:'Land seeding pending — rejected status',fix:'Patwari se milein → Khasra update → Block office mein form bharo',href:'/articles/pm-kisan-land-seeding-status-check'},
              {reason:'State verification pending hai abhi',fix:'2-4 hafte wait karo — phir check karo. 60 din baad bhi nahi to Block Office jao',href:'/articles/pm-kisan-registration-online-2026'},
              {reason:'Account deactivated ho gaya',fix:'Block Agriculture Officer se milein — reactivation form bharo',href:'/articles/pm-kisan-correction-deactivate-block-guide-2026'},
            ].map(({reason,fix,href})=>(
              <div key={reason} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <p className="font-bold text-gray-900 text-sm mb-2">❓ {reason}</p>
                <p className="text-xs text-green-800 mb-2"><strong>✅ Fix:</strong> {fix}</p>
                <Link href={href} className="text-xs font-bold text-blue-700">Detailed Guide →</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">FAQ</h2>
          <SvgFAQ caption="PM Kisan Village List FAQ 2026"/>
          <div className="space-y-3 mt-4">
            {[
              {q:'Kya village list mein sabhi farmers hote hain ya sirf kuch?',a:'Village list mein sirf ACTIVE beneficiaries hote hain — jo registered hain, eligible hain, aur currently payment receive kar rahe hain. Rejected, deactivated ya pending farmers list mein nahi dikhte. Isliye naam nahi hona ka matlab rejected nahi — individually Beneficiary Status check karo pata chalega.'},
              {q:'Village mein naye farmers ko list mein aane mein kitna time lagta hai?',a:'Registration ke baad state verification (2-4 hafte), eKYC (instant), land seeding (15-30 din) — sab complete hone ke baad next installment release ke waqt naam list mein aata hai. Total 30-60 din typical hai.'},
              {q:'Kya main dusre state ya district ki village list dekh sakta hoon?',a:'Haan — PM Kisan dashboard public hai. Koi bhi kisi bhi state, district, block, village ki list dekh sakta hai. Koi restriction nahi hai — government transparency ke liye yeh public rakhti hai.'},
              {q:'List mein mera naam hai lekin payment nahi aayi?',a:'Naam list mein hona aur payment aana do alag cheezein hain. Payment ke liye alag se: bank Aadhaar NPCI seeding, sahi IFSC code, aur eKYC complete honi chahiye. Payment guide padho — 8 reasons explain kiye hain.'},
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

        <GovLink href="https://pmkisan.gov.in/Dashboard.aspx" label="PM Kisan Dashboard — Village Wise List" guide="Village List Dekho"/>
        <CalcBanner/>
        <RelatedArticles articles={RELATED}/>
        <AuthorBox modified={MODIFIED}/>
        <BottomNav/>
        <Disclaimer/>
      </div>
    </>
  );
}
