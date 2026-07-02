'use client';
import Link from 'next/link';
import { SvgLandSeeding, SvgDocuments, SvgFAQ } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, DB, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED  = '2026-06-10T08:00:00+05:30';
const DOMAIN = 'https://kisanstatus.com';
const URL    = `${DOMAIN}/articles/pm-kisan-land-seeding-status-check`;

const schemas = [
  {
    '@context':'https://schema.org','@type':'Article',
    headline:'PM Kisan Land Record Integration 2026 — "Zameen Mapping Pending" Fix Karo Step by Step',
    description:'PM Kisan land record linking kya hai, "Land Seeding No" kyun aata hai, patwari se kaise fix karein — complete Hinglish guide with state-wise process.',
    image:`${DOMAIN}/og-image.jpg`, datePublished:PUBLISHED, dateModified:MODIFIED,
    author:{'@type':'Organization',name:'KisanStatus Team',url:`${DOMAIN}/about`},
    publisher:{'@type':'Organization',name:'KisanStatus.com',url:DOMAIN},
    mainEntityOfPage:{'@type':'WebPage','@id':URL},
    inLanguage:'hi-IN', wordCount:4200,
  },
  {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:[
      {'@type':'Question',name:'PM Kisan land record integration kya hoti hai?',
        acceptedAnswer:{'@type':'Answer',text:'Land record integration matlab aapki zameen ka record (khasra/khatauni) state revenue department se PM Kisan portal par link hona. Bina linking ke payment nahi hoti.'}},
      {'@type':'Question',name:'"Zameen Mapping Pending" aaye toh kya karein?',
        acceptedAnswer:{'@type':'Answer',text:'Apne gaon ke patwari/lekhapal se milein → Khasra-Khatauni update karwao → Block Agriculture Office mein Land Integration form bharo → 15-30 din mein fix hota hai.'}},
    ],
  },
];

const RELATED = [
  {slug:'pm-kisan-ekyc-online-2026',                   title:'Digital Verification Guide',    emoji:'🔐'},
  {slug:'pm-kisan-rejected-list-2026',                 title:'Application Declined Fix',      emoji:'❌'},
  {slug:'pm-kisan-payment-failed-status-2026',         title:'DBT Transfer Failed Fix',       emoji:'💸'},
  {slug:'pm-kisan-beneficiary-list-2026',              title:'Beneficiary List Check',        emoji:'📋'},
  {slug:'pm-kisan-registration-online-2026',           title:'New Enrollment Guide',          emoji:'📝'},
  {slug:'pm-kisan-problems-solution-guide-2026',       title:'10 Problems Guide',             emoji:'🔧'},
];

export default function PmKisanLandSeedingStatusCheck() {
  return (
    <>
      {schemas.map((s,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link><span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link><span>/</span>
            <span className="text-white font-bold">Land Record Integration Fix</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">🌾 Land Mapping</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Land Record Integration 2026 — &quot;Land Seeding No&quot; Kyun Aata Hai Aur Kaise Fix Karo
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
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <img
            src="/images/land-seeding-field.png"
            alt="PM Kisan land record integration patwari se fix karo 2026"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">Land Record Integration — Patwari Se Fix Karo 2026</p>
        </div>

        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 dark:border-amber-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">🌾 Land Mapping — Common Problem</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            Bahut se farmers 2 saal se scheme mein registered hain, digital verification bhi complete hai, bank bhi linked hai. Lekin installment nahi aati. Status check karte hain — <strong>"Land Seeding: No"</strong>. Samajh nahi aata ki yeh kya hota hai.
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            Patwari ke paas jaana padta hai, Khasra update karwana padta hai, Agriculture Office mein form dena padta hai — <strong>25 din mein problem fix, aur 3 installments arrears mein ek saath credit.</strong> Is guide mein wahi process hai.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            1. Land Record Integration Kya Hai?
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            PM Kisan ek database hai jo farmers ki zameen ki information rakhta hai. Yeh information state ke Revenue Department (land records) se leni padti hai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
            {[
              {icon:'📋',title:'State Revenue Records',desc:'Patwari/Lekhapal ke paas — Khasra, Khatauni, zameen ka saara record'},
              {icon:'🔗',title:'Link/Integration',desc:'Yeh record portal par aapke UID se link hona chahiye'},
              {icon:'✅',title:'Mapping Complete',desc:'Tab hi "Land Seeding: Yes" dikhega aur payment eligible hogi'},
            ].map(({icon,title,desc})=>(
              <div key={title} className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
                <span className="text-3xl block mb-2">{icon}</span>
                <p className="font-black text-green-800 dark:text-green-300 text-sm">{title}</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">Simple hai.</p>
          <IB><strong>📌 Definition:</strong> Land Mapping = aapki zameen ka government record PM Kisan se connected hona. Nahi hua = payment nahi. Hua = payment milegi.</IB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            2. Land Record Linking Status Check
          </h2>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholo</SI>
            <SI n={2}>Farmers Corner → <strong>Beneficiary Status</strong> click karo</SI>
            <SI n={3}>UID ya Mobile number daalo → Get Data</SI>
            <SI n={4}>Details mein <strong>"Land Seeding"</strong> field dhundho</SI>
            <SI n={5}>
              <div className="space-y-1 text-xs">
                <p><strong className="text-green-700 dark:text-green-400">✅ "Yes"</strong> — Sab theek hai, payment eligible</p>
                <p><strong className="text-red-700 dark:text-red-400">❌ "No"</strong> — Problem hai, fix karna hoga</p>
                <p><strong className="text-amber-700 dark:text-amber-400">⏳ "Pending"</strong> — Process mein hai, wait karo</p>
              </div>
            </SI>
          </StepList>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            3. "Zameen Mapping Pending" — 5 Step Fix Process
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Yeh process har state mein slightly alag hai — lekin basic steps same hain:
          </p>
          <StepList>
            <SI n={1}>
              <div>
                <p className="font-bold">Apne gaon ke Patwari/Lekhapal se milein</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Patwari village revenue officer hota hai — zameen ki sari entries unke paas hoti hain. "PM Kisan land record integration karwani hai" bolo.</p>
              </div>
            </SI>
            <SI n={2}>
              <div>
                <p className="font-bold">Latest Khasra-Khatauni nikalo</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Patwari tumhe Khasra number (plot ID) aur Khatauni (ownership document) denge ya update karenge. Current year ka chahiye.</p>
              </div>
            </SI>
            <SI n={3}>
              <div>
                <p className="font-bold">Block Agriculture Office mein jao</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Land Integration correction/update form milega yahan. Khasra, UID, passbook lekar jao. Officer form fill karne mein help karega.</p>
              </div>
            </SI>
            <SI n={4}>
              <div>
                <p className="font-bold">Acknowledgement lelo</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Form submit karne par reference number ya stamp wali copy milegi — yeh rakho. Agar baad mein follow-up karna pade to kaam aayega.</p>
              </div>
            </SI>
            <SI n={5}>
              <div>
                <p className="font-bold">15-30 din baad status check karo</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">pmkisan.gov.in par Beneficiary Status mein "Land Seeding: Yes" dikhna chahiye. Nahi dikh raha? Acknowledgement lekar Block Office wapas jao.</p>
              </div>
            </SI>
          </StepList>

          <SvgDocuments caption="Land Record Integration Fix — Required Documents"/>
          <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Kahan Jaana Hai</th>
                  <th className="p-3 text-left">Documents Chahiye</th>
                  <th className="p-3 text-left">Kya Milega</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Patwari/Lekhapal','UID card + previous Khasra (agar ho)','Updated Khasra-Khatauni'],
                  ['Block Agriculture Office','UID + Khasra + Bank passbook','Land Integration form submission'],
                  ['Tehsil/SDM Office (agar needed)','Sab upar wale documents + application','Legal land correction (rare cases)'],
                ].map(([k,d,m],i)=>(
                  <tr key={k} className={i%2===0?'bg-[var(--color-card)]':'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{k}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{d}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-green-700 dark:text-green-400 font-medium">{m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            4. Land Mapping "Pending" — Timeline Guide
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            "Pending" matlab process shuru ho gayi hai — wait karo. Lekin kitna wait?
          </p>
          <div className="space-y-3">
            {[
              {time:'Day 1-7',status:'Agriculture Office ne form receive kiya',action:'Kuch nahi karna'},
              {time:'Day 7-15',status:'State portal par update upload hota hai',action:'Status check karo — "Pending" hi rahega'},
              {time:'Day 15-30',status:'PM Kisan portal par reflect hona chahiye',action:'Status check karo — "Yes" dikhna chahiye'},
              {time:'30+ din',status:'Abhi bhi "Pending" — follow up zaruri',action:'Block Office jao, acknowledgement dikhao, escalate karo'},
            ].map(({time,status,action})=>(
              <div key={time} className="flex gap-3 items-start">
                <span className="bg-amber-500 text-white text-[10px] font-black px-2 py-1 rounded-full shrink-0 whitespace-nowrap mt-0.5">{time}</span>
                <div className="flex-1 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl px-4 py-2.5">
                  <p className="text-sm text-[var(--color-text-muted)]">{status}</p>
                  <p className="text-xs text-green-700 dark:text-green-400 font-medium mt-1">→ {action}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            5. Land Record Integration FAQ
          </h2>
          <SvgFAQ caption="PM Kisan Land Mapping FAQ 2026"/>
          <div className="space-y-3 mt-4">
            {[
              {q:'Kya land mapping ek baar hoti hai ya baar baar karni padti hai?',a:'Ek baar ho jaaye to permanent rehti hai — jab tak zameen ki details mein koi change na ho (sale, partition, inheritance). Agar zameen kisi aur ke naam ho jaaye ya split ho jaaye to dobara linking karni padti hai.'},
              {q:'Tenant farmer ya share cropper ka land record integration kaise hoga?',a:'Kuch states mein tenant farmers ke liye alag process hai. State Agriculture Department se puchho — kuch states ne "Lease Agreement" ko integration document accept karna shuru kiya hai. UP, Bihar, MP mein tenant farmers ke liye provisions hain.'},
              {q:'Ek khasra number par do logon ka naam hai — dono ki mapping hogi?',a:'Generally ek khasra se sirf ek enrollment hoti hai. Agar do bhaiyon ki joint zameen hai — dono ek ek karte hain to system conflict detect kar sakta hai. Ek bhai registered kare ya partition karwao pehle.'},
              {q:'Land mapping fix hone ke baad kitni installments ek saath milegi?',a:'Jitni installments miss huin sabki arrears milegi — ek saath. Agar 3 installments miss huin — ₹6,000 arrears + next installment ₹2,000 = ₹8,000 ek baar credit. Government paisa nahi rakhti.'},
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
          label="PM Kisan — Land Record Integration Status Check"
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