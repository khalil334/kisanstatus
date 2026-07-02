'use client';
import Link from 'next/link';
import { SvgBeneficiaryList, SvgDocuments, SvgFAQ } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED  = '2026-06-27T08:00:00+05:30';

const DOMAIN = 'https://kisanstatus.com';
const URL    = `${DOMAIN}/articles/pm-kisan-beneficiary-list-2026`;

const schemas = [
  {
    '@context':'https://schema.org','@type':'Article',
    headline:'PM Kisan Approved Recipients List 2026 — Apna Naam Check Karo, Village Wise PDF Download',
    description:'PM Kisan registered cultivators list 2026 — 23vi tranche release ho chuki hai. Apna naam kaise check kare, village wise roster kaise dekhe, declined aur inactive naam kyon hote hain — complete Hinglish guide.',
    image:`${DOMAIN}/og-image.webp`, datePublished:PUBLISHED, dateModified:MODIFIED,
    author:{'@type':'Organization',name:'KisanStatus Team',url:`${DOMAIN}/about`},
    publisher:{'@type':'Organization',name:'KisanStatus.com',url:DOMAIN},
    mainEntityOfPage:{'@type':'WebPage','@id':URL},
    inLanguage:'hi-IN', wordCount:3200,
  },
  {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:DOMAIN},
      {'@type':'ListItem',position:2,name:'Articles',item:`${DOMAIN}/articles`},
      {'@type':'ListItem',position:3,name:'Approved Recipients Roster 2026',item:URL},
    ],
  },
  {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:[
      {'@type':'Question',name:'PM Kisan approved recipients list mein naam kaise check karein?',
        acceptedAnswer:{'@type':'Answer',text:'pmkisan.gov.in → Farmers Corner → Beneficiary Status → UID ya Mobile number enter karo → Get Data click karo. Status aur roster mein naam dikh jaayega.'}},
      {'@type':'Question',name:'PM Kisan village wise roster kaise dekhen?',
        acceptedAnswer:{'@type':'Answer',text:'pmkisan.gov.in → Dashboard → State select karo → District → Block → Village → Village ki poori list screen par aa jaayegi — naam search kar sakte ho.'}},
      {'@type':'Question',name:'Roster mein naam nahi hai to kya karein?',
        acceptedAnswer:{'@type':'Answer',text:'Pehle Beneficiary Status check karo decline reason ke liye. Common reasons: digital verification pending, land record linking nahi, naam mismatch, duplicate enrollment. Specific problem fix karo phir 15-30 din mein list mein naam aa jaayega.'}},
    ],
  },
];

const RELATED = [
  {slug:'pm-kisan-ekyc-online-2026',                     title:'Digital Verification Guide', emoji:'🔐'},
  {slug:'pm-kisan-rejected-list-2026',                   title:'Application Declined Fix',   emoji:'📋'},
  {slug:'pm-kisan-payment-failed-status-2026',           title:'DBT Transfer Failed Fix',    emoji:'💸'},
  {slug:'pm-kisan-name-correction-online-2026',          title:'Name Correction Guide',      emoji:'✏️'},
  {slug:'pm-kisan-beneficiary-list-village-wise-2026',   title:'Village Wise Roster Guide',  emoji:'🏘️'},
  {slug:'pm-kisan-land-seeding-status-check',            title:'Land Record Linking Fix',    emoji:'🌾'},
];

const STATES_LIST = [
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
  ['🌊','Kerala','kerala'],
  ['🌴','Telangana','telangana'],
  ['🌿','Gujarat','gujarat'],
  ['🌾','Assam','assam'],
  ['🌊','Jharkhand','jharkhand'],
  ['🏔️','Uttarakhand','uttarakhand'],
  ['🌾','Chhattisgarh','chhattisgarh'],
  ['🌊','Himachal Pradesh','himachal-pradesh'],
  ['🏔️','Jammu & Kashmir','jammu-and-kashmir'],
  ['🌿','Goa','goa'],
  ['🏔️','Sikkim','sikkim'],
  ['🌊','Tripura','tripura'],
  ['🌾','Meghalaya','meghalaya'],
  ['🌿','Manipur','manipur'],
  ['🌊','Nagaland','nagaland'],
  ['🏔️','Arunachal Pradesh','arunachal-pradesh'],
  ['🌾','Mizoram','mizoram'],
  ['🏛️','Delhi','delhi'],
  ['🌊','Puducherry','puducherry'],
  ['🏝️','Andaman & Nicobar','andaman-nicobar'],
  ['🏔️','Ladakh','ladakh'],
  ['🌊','Lakshadweep','lakshadweep'],
  ['🏛️','Chandigarh','chandigarh'],
  ['🌾','Dadra & Nagar Haveli','dadra-nagar-haveli'],
  ['🏝️','Daman & Diu','daman-diu'],
];

export default function PmKisanBeneficiaryList2026() {
  return (
    <>
      {schemas.map((s,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link><span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link><span>/</span>
            <span className="text-white font-bold">Approved Recipients Roster 2026</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">📋 Eligible Farmers Roster</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Approved Recipients Roster 2026 — Apna Naam Check Karo, Village Wise List Dekho &amp; PDF Download Guide
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 14 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <img
            src="/images/beneficiary-list-board.png"
            alt="PM Kisan approved recipients roster village wise 2026"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">Approved Recipients Roster 2026 — Naam Check Karo</p>
        </div>

        <div className="my-6 p-5 bg-green-50 dark:bg-green-900/20 border-2 border-green-600 dark:border-green-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-green-800 dark:text-green-300 mb-3">⚡ 2 Minute Mein Naam Check Karo</h2>
          <StepList>
            <SI n={1}>Mobile ya computer par <strong>pmkisan.gov.in</strong> kholo</SI>
            <SI n={2}><strong>Farmers Corner</strong> menu tap karo</SI>
            <SI n={3}><strong>Beneficiary Status</strong> select karo</SI>
            <SI n={4}>UID Number ya Mobile Number enter karo</SI>
            <SI n={5}><strong>Get Data</strong> button dabao — naam aur status dikh jaayega</SI>
          </StepList>
          <IB><strong>✅ "Active"</strong> dikhega toh roster mein ho — installment aayegi. <strong>❌ "Rejected"</strong> dikhega toh neeche wali guide padho — fix karo.</IB>
        </div>

        <section className="mb-8">
          <SH>PM Kisan Approved Recipients Roster Kya Hoti Hai?</SH>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-3">
            Farmer welfare scheme mein sirf woh cultivators roster mein aate hain jo <strong>verified aur eligible</strong> hain. Yeh roster government har tranche se pehle update karti hai — isme naam hona matlab paisa aayega, nahi hona matlab koi na koi problem hai.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-3">
            Bahut se farmers sochte hain ki enrollment ke baad automatically roster mein aa jaate hain — yeh galat hai. Enrollment ke baad <strong>state verification, land record linking aur digital verification</strong> — teeno complete hone ke baad hi naam approved recipients roster mein aata hai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
            {[
              {icon:'✅',title:'Active',desc:'Naam hai, installment aayegi',bg:'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',tc:'text-green-800 dark:text-green-300'},
              {icon:'❌',title:'Declined',desc:'Problem hai — fix karo',bg:'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',tc:'text-red-800 dark:text-red-300'},
              {icon:'⏳',title:'Pending',desc:'Verification chal rahi hai',bg:'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800',tc:'text-amber-800 dark:text-amber-300'},
            ].map(s=>(
              <div key={s.title} className={`p-4 ${s.bg} border rounded-xl text-center`}>
                <div className="text-3xl mb-2">{s.icon}</div>
                <p className={`font-black text-sm ${s.tc}`}>{s.title}</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>Village Wise Approved Recipients Roster Kaise Dekhen?</SH>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-3">
            Apne poore gaon ki roster dekhni hai — kaun kaun is scheme mein hai? Yeh feature portal par available hai. Aise dekho:
          </p>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> open karo → upar menu mein <strong>Dashboard</strong> click karo</SI>
            <SI n={2}>Left side mein <strong>State</strong> select karo — apna state chunio</SI>
            <SI n={3}><strong>District</strong> select karo — phir <strong>Sub-District/Block</strong></SI>
            <SI n={4}><strong>Village</strong> select karo — apne gaon ka naam dhundho</SI>
            <SI n={5}>Poori village roster screen par aa jaayegi — <strong>Ctrl+F</strong> (PC) ya search se naam dhundho</SI>
            <SI n={6}>PDF save karna hai to <strong>browser ka print option → Save as PDF</strong> use karo</SI>
          </StepList>
          <WB><strong>📱 Mobile Par:</strong> Share button → Print → Save as PDF. Ya screenshot lekar gallery mein save karo.</WB>
        </section>

        <section className="mb-8">
          <SH>Naam Roster Mein Nahi Hai — 7 Common Reasons</SH>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
            Agar Beneficiary Status mein naam nahi aa raha ya <strong>Declined</strong> dikh raha hai — ek ek reason check karo:
          </p>
          <div className="space-y-3">
            {[
              {n:1, r:'Digital Verification Incomplete',    d:'Sabse common reason — 60% cases mein yahi hota hai. UID OTP se authentication nahi hui.',      fix:'pmkisan.gov.in → verification section → UID number → OTP verify. Free hai, 5 minute mein ho jaata hai.',                   color:'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'},
              {n:2, r:'Land Record Linking Nahi',  d:'Aapki zameen ka record portal se link nahi hua — "Land Seeding No" dikhta hai.', fix:'Patwari se milein → Khasra-Khatauni update → Block Agriculture Office mein application do.',                 color:'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'},
              {n:3, r:'Naam Mismatch',      d:'UID mein naam alag, bank mein alag — system decline kar deta hai.',                   fix:'pmkisan.gov.in → Farmers Corner → Name Correction → UID jaisa naam daalo.',                               color:'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'},
              {n:4, r:'NPCI Mapper Link Missing',d:'Bank account mein UID link nahi — NPCI seeding missing.',                         fix:'Bank branch mein jao → Aadhaar seeding form bharo → 3-7 din mein fix.',                                        color:'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'},
              {n:5, r:'Duplicate Enrollment',d:'Same UID se do baar enrollment ho gaya.',                                     fix:'Helpline 155261 par call karo — duplicate entry remove karwao.',                                              color:'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'},
              {n:6, r:'Ineligible Category',d:'Government employee, income tax filer, MP/MLA — eligible nahi hain.',                  fix:'Eligibility dobara check karo. Agar galat decline hua to Agriculture office mein appeal karo.',                 color:'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'},
              {n:7, r:'State Verification Pending',d:'Enrollment hua hai lekin state ne abhi verify nahi kiya.',                    fix:'2-4 hafte wait karo. Phir bhi nahi hua to Block Agriculture Officer se contact karo.',                         color:'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300'},
            ].map(({n,r,d,fix,color})=>(
              <div key={n} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4 shadow-sm">
                <div className="flex items-start gap-3 mb-2">
                  <span className={`${color} text-xs font-black w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5`}>{n}</span>
                  <p className="font-black text-[var(--color-text)] text-sm">{r}</p>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mb-2 pl-9">{d}</p>
                <div className="pl-9 flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold text-xs shrink-0">✅ Fix:</span>
                  <p className="text-xs text-green-800 dark:text-green-300 font-medium">{fix}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>Beneficiary Status — Har Status Ka Matlab</SH>
          <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Portal Par Status</th>
                  <th className="p-3 text-left">Matlab</th>
                  <th className="p-3 text-left">Kya Karna Hai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['✅ Active / Approved','Roster mein hai — installment aayegi','Kuch nahi, wait karo'],
                  ['❌ Declined','Application fail hui — reason check karo','Reason dekho, fix karo'],
                  ['⏳ Under Verification','State review chal rahi hai','2-4 hafte wait karo'],
                  ['💳 DBT Transfer Failed','Approved hai, payment nahi pahunchi','Bank/NPCI fix karo'],
                  ['🔄 Pending','Enrollment complete, verification baaki','Patiently wait karo'],
                  ['🚫 Deactivated','Pehle active tha, koi issue aaya','Block office contact karo'],
                ].map(([s,m,k],i)=>(
                  <tr key={s} className={i%2===0?'bg-[var(--color-card)]':'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{s}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)] text-xs">{m}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-medium">{k}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <SH>State Wise Approved Recipients Roster — Quick Links (36 States & UTs)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har state ka farmer welfare dashboard alag hota hai. Apna state select karo — complete roster neeche hai:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {STATES_LIST.map(([icon,name,slug])=>(
              <Link key={slug} href={`/beneficiary-list/${slug}`}
                className="flex items-center gap-2 p-3 bg-[var(--color-card)] border border-green-200 dark:border-green-800 rounded-xl text-green-800 dark:text-green-300 text-xs font-semibold hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                <span>{icon}</span>{name}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>23वीं Tranche Release Ho Chuki — 24वीं Tranche Kab Aayegi?</SH>
          <div className="my-4 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-600 dark:border-green-700 rounded-xl">
            <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-2">✅ 23वीं Tranche — 20 June 2026 ko Release Ho Chuki!</p>
            <p className="text-xs text-green-700 dark:text-green-400">9.44 Crore+ kisanon ko ₹2,000 seedha bank mein mil chuke hain. Apna status abhi check karo.</p>
          </div>
          <div className="my-4 p-4 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 dark:border-amber-700 rounded-xl">
            <p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-2">⏳ 24वीं Tranche — October 2026 Expected</p>
            <p className="text-xs text-amber-700 dark:text-amber-400">Roster mein naam hona chahiye — iske liye digital verification, land record linking aur bank NPCI seeding complete karo.</p>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Approved recipients roster har tranche se pehle update hoti hai. Roster mein naam hona chahiye — iske liye:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {icon:'🔐',title:'Digital Verification Complete Karo',desc:'Sabse pehle — bina authentication ke roster mein nahi aao ge',href:'/articles/pm-kisan-ekyc-online-2026',cta:'Verification Guide →'},
              {icon:'🏦',title:'Bank NPCI Seed Karo',desc:'Bank account mein UID link hona zaroori hai',href:'/articles/pm-kisan-payment-failed-status-2026',cta:'DBT Guide →'},
              {icon:'✅',title:'Status Check Karo',desc:'Active dikhna chahiye — Declined nahi',href:'/articles/pm-kisan-23vi-kist-2026-status-check',cta:'Status Guide →'},
              {icon:'🌾',title:'Land Record Linking Fix Karo',desc:'Land Seeding No dikh raha hai to patwari se milein',href:'/articles/pm-kisan-land-seeding-status-check',cta:'Land Guide →'},
            ].map(c=>(
              <Link key={c.href} href={c.href}
                className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-green-300 dark:hover:border-green-700 hover:shadow-sm transition-all no-underline group focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                <span className="text-2xl shrink-0">{c.icon}</span>
                <div>
                  <p className="font-black text-[var(--color-text)] text-sm group-hover:text-[var(--color-primary)] transition-colors">{c.title}</p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{c.desc}</p>
                  <p className="text-xs text-green-700 dark:text-green-400 font-bold mt-1.5">{c.cta}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>Aksar Puchhe Jane Wale Sawaal</SH>
          <SvgFAQ caption="PM Kisan Approved Recipients Roster FAQ 2026"/>
          <div className="space-y-3 mt-4">
            {[
              {q:'Naam roster mein hai par payment nahi aayi — kya problem hai?',a:'Naam roster mein hona aur payment aana alag cheez hai. Payment ke liye bank mein NPCI seeding honi chahiye, IFSC code sahi hona chahiye, aur account active hona chahiye. DBT Transfer Failed guide padho.'},
              {q:'Village wise roster mein kaafi naam nahi hain — kyun?',a:'Roster sirf active approved recipients dikhati hai. Jo log declined, deactivated ya pending hain — woh nahi dikhte. Iska matlab yeh nahi ki unka naam nahi hai — unki application process mein hai.'},
              {q:'Kya approved recipients roster public hai?',a:'Haan — scheme ki roster publicly accessible hai — pmkisan.gov.in → Dashboard par. Koi bhi kisi bhi gaon ki roster dekh sakta hai.'},
              {q:'Roster mein naam aane mein kitna time lagta hai?',a:'Enrollment ke baad: State verification 2-4 hafte, digital verification instant, land record linking 15-30 din. Sab complete hone ke baad next tranche cycle mein naam roster mein aata hai.'},
              {q:'Kya main dusre gaon ki roster dekh sakta hoon?',a:'Haan — Dashboard par kisi bhi state, district, block, village ki roster dekh sakte ho. Koi restriction nahi hai.'},
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
          label="PM Kisan Beneficiary Status Check"
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