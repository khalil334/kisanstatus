'use client';
import Link from 'next/link';
import { SvgBeneficiaryList, SvgDocuments, SvgFAQ } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED  = '2026-06-27T08:00:00+05:30'; // ✅ Updated

const DOMAIN = 'https://kisanstatus.com';
const URL    = `${DOMAIN}/articles/pm-kisan-beneficiary-list-2026`;

const schemas = [
  {
    '@context':'https://schema.org','@type':'Article',
    headline:'PM Kisan Beneficiary List 2026 — Apna Naam Check Karo, Village Wise PDF Download',
    description:'PM Kisan beneficiary list 2026 — 23vi kist release ho chuki hai. Apna naam kaise check kare, village wise list kaise dekhe, rejected aur inactive naam kyon hote hain — complete Hinglish guide.',
    image:`${DOMAIN}/og-image.webp`, datePublished:PUBLISHED, dateModified:MODIFIED,
    author:{'@type':'Person',name:'Sidhu Singh',url:`${DOMAIN}/about`},
    publisher:{'@type':'Organization',name:'KisanStatus.com',url:DOMAIN},
    mainEntityOfPage:{'@type':'WebPage','@id':URL},
    inLanguage:'hi-IN', wordCount:3200,
  },
  {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:DOMAIN},
      {'@type':'ListItem',position:2,name:'Articles',item:`${DOMAIN}/articles`},
      {'@type':'ListItem',position:3,name:'PM Kisan Beneficiary List 2026',item:URL},
    ],
  },
  {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:[
      {'@type':'Question',name:'PM Kisan beneficiary list mein naam kaise check karein?',
        acceptedAnswer:{'@type':'Answer',text:'pmkisan.gov.in → Farmers Corner → Beneficiary Status → Aadhaar ya Mobile number enter karo → Get Data click karo. Status aur list mein naam dikh jaayega.'}},
      {'@type':'Question',name:'PM Kisan beneficiary list village wise kaise dekhen?',
        acceptedAnswer:{'@type':'Answer',text:'pmkisan.gov.in → Dashboard → State select karo → District → Block → Village → Village ki poori list screen par aa jaayegi — naam search kar sakte ho.'}},
      {'@type':'Question',name:'Beneficiary list mein naam nahi hai to kya karein?',
        acceptedAnswer:{'@type':'Answer',text:'Pehle Beneficiary Status check karo rejection reason ke liye. Common reasons: eKYC pending, land seeding nahi, naam mismatch, duplicate registration. Specific problem fix karo phir 15-30 din mein list mein naam aa jaayega.'}},
    ],
  },
];

const RELATED = [
  {slug:'pm-kisan-ekyc-online-2026',                     title:'PM Kisan eKYC Online 2026',      emoji:'🔐'},
  {slug:'pm-kisan-rejected-list-2026',                   title:'PM Kisan Rejected List Fix',     emoji:'📋'},
  {slug:'pm-kisan-payment-failed-status-2026',           title:'Payment Failed Solution',        emoji:'💸'},
  {slug:'pm-kisan-name-correction-online-2026',          title:'Name Correction Guide',          emoji:'✏️'},
  {slug:'pm-kisan-beneficiary-list-village-wise-2026',   title:'Village Wise List Guide',        emoji:'🏘️'},
  {slug:'pm-kisan-land-seeding-status-check',            title:'Land Seeding Status Fix',        emoji:'🌾'},
];

// ✅ COMPLETE STATES LIST (28 States + 8 UTs)
const STATES_LIST = [
  // Major States
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
  // Union Territories
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

      {/* Header */}
      <div className="bg-primary-600 py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/articles" className="hover:text-white">PM Kisan Guide</Link><span>/</span>
            <span className="text-white">Beneficiary List 2026</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">📋 Beneficiary List</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Beneficiary List 2026 — Apna Naam Check Karo, Village Wise List Dekho &amp; PDF Download Guide
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">Sidhu Singh</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 14 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-6 rounded-2xl overflow-hidden border border-green-100 shadow-md">
          <img
            src="/images/beneficiary-list-board.png"
            alt="PM Kisan beneficiary list village wise 2026"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">PM Kisan Beneficiary List 2026 — Naam Check Karo</p>
        </div>

        {/* Quick answer box */}
        <div className="my-6 p-5 bg-green-50 border-2 border-green-600 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-green-800 mb-3">⚡ 2 Minute Mein Naam Check Karo</h2>
          <StepList>
            <SI n={1}>Mobile ya computer par <strong>pmkisan.gov.in</strong> kholo</SI>
            <SI n={2}><strong>Farmers Corner</strong> menu tap karo</SI>
            <SI n={3}><strong>Beneficiary Status</strong> select karo</SI>
            <SI n={4}>Aadhaar Number ya Mobile Number enter karo</SI>
            <SI n={5}><strong>Get Data</strong> button dabao — naam aur status dikh jaayega</SI>
          </StepList>
          <IB><strong>✅ "Active"</strong> dikhega toh list mein ho — kist aayegi. <strong>❌ "Rejected"</strong> dikhega toh neeche wali guide padho — fix karo.</IB>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <SH>PM Kisan Beneficiary List Kya Hoti Hai?</SH>
          <p className="text-gray-700 leading-relaxed mb-3">
            PM Kisan Samman Nidhi scheme mein sirf woh farmers list mein aate hain jo <strong>verified aur eligible</strong> hain. Yeh list government har kist se pehle update karti hai — isme naam hona matlab paisa aayega, nahi hona matlab koi na koi problem hai.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Bahut se farmers sochte hain ki registration karne ke baad automatically list mein aa jaate hain — yeh galat hai. Registration ke baad <strong>state verification, land seeding aur eKYC</strong> — teeno complete hone ke baad hi naam beneficiary list mein aata hai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
            {[
              {icon:'✅',title:'Active',desc:'Naam hai, kist aayegi',bg:'bg-green-50 border-green-200',tc:'text-green-800'},
              {icon:'❌',title:'Rejected',desc:'Problem hai — fix karo',bg:'bg-red-50 border-red-200',tc:'text-red-800'},
              {icon:'⏳',title:'Pending',desc:'Verification chal rahi hai',bg:'bg-amber-50 border-amber-200',tc:'text-amber-800'},
            ].map(s=>(
              <div key={s.title} className={`p-4 ${s.bg} border rounded-xl text-center`}>
                <div className="text-3xl mb-2">{s.icon}</div>
                <p className={`font-black text-sm ${s.tc}`}>{s.title}</p>
                <p className="text-xs text-gray-600 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <SH>Village Wise Beneficiary List Kaise Dekhen?</SH>
          <p className="text-gray-700 leading-relaxed mb-3">
            Apne poore gaon ki list dekhnI hai — kaun kaun is scheme mein hai? Yeh feature PM Kisan portal par available hai. Aise dekho:
          </p>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> open karo → upar menu mein <strong>Dashboard</strong> click karo</SI>
            <SI n={2}>Left side mein <strong>State</strong> select karo — apna state chunio</SI>
            <SI n={3}><strong>District</strong> select karo — phir <strong>Sub-District/Block</strong></SI>
            <SI n={4}><strong>Village</strong> select karo — apne gaon ka naam dhundho</SI>
            <SI n={5}>Poori village list screen par aa jaayegi — <strong>Ctrl+F</strong> (PC) ya search se naam dhundho</SI>
            <SI n={6}>PDF save karna hai to <strong>browser ka print option → Save as PDF</strong> use karo</SI>
          </StepList>
          <WB><strong>📱 Mobile Par:</strong> Share button → Print → Save as PDF. Ya screenshot lekar gallery mein save karo.</WB>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <SH>Naam List Mein Nahi Hai — 7 Common Reasons</SH>
          <p className="text-gray-700 leading-relaxed mb-4">
            Agar Beneficiary Status mein naam nahi aa raha ya <strong>Rejected</strong> dikh raha hai — ek ek reason check karo:
          </p>
          <div className="space-y-3">
            {[
              {n:1, r:'eKYC Incomplete',    d:'Sabse common reason — 60% cases mein yahi hota hai. Aadhaar OTP se eKYC nahi hui.',      fix:'pmkisan.gov.in → eKYC → Aadhaar number → OTP verify. Free hai, 5 minute mein ho jaata hai.',                   color:'bg-red-100 text-red-700'},
              {n:2, r:'Land Seeding Nahi',  d:'Aapki zameen ka record PM Kisan portal se link nahi hua — "Land Seeding No" dikhta hai.', fix:'Patwari se milein → Khasra-Khatauni update → Block Agriculture Office mein application do.',                 color:'bg-orange-100 text-orange-700'},
              {n:3, r:'Naam Mismatch',      d:'Aadhaar mein naam alag, bank mein alag — system reject kar deta hai.',                   fix:'pmkisan.gov.in → Farmers Corner → Name Correction → Aadhaar jaisa naam daalo.',                               color:'bg-yellow-100 text-yellow-700'},
              {n:4, r:'Bank Aadhaar Seeding',d:'Bank account mein Aadhaar link nahi — NPCI seeding missing.',                         fix:'Bank branch mein jao → Aadhaar seeding form bharo → 3-7 din mein fix.',                                        color:'bg-blue-100 text-blue-700'},
              {n:5, r:'Duplicate Registration',d:'Same Aadhaar se do baar registration ho gaya.',                                     fix:'Helpline 155261 par call karo — duplicate entry remove karwao.',                                              color:'bg-purple-100 text-purple-700'},
              {n:6, r:'Ineligible Category',d:'Government employee, income tax filer, MP/MLA — eligible nahi hain.',                  fix:'Eligibility dobara check karo. Agar galat reject hua to Agriculture office mein appeal karo.',                 color:'bg-gray-100 text-gray-700'},
              {n:7, r:'State Verification Pending',d:'Registration hua hai lekin state ne abhi verify nahi kiya.',                    fix:'2-4 hafte wait karo. Phir bhi nahi hua to Block Agriculture Officer se contact karo.',                         color:'bg-teal-100 text-teal-700'},
            ].map(({n,r,d,fix,color})=>(
              <div key={n} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="flex items-start gap-3 mb-2">
                  <span className={`${color} text-xs font-black w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5`}>{n}</span>
                  <p className="font-black text-gray-900 text-sm">{r}</p>
                </div>
                <p className="text-xs text-gray-600 mb-2 pl-9">{d}</p>
                <div className="pl-9 flex items-start gap-2">
                  <span className="text-green-600 font-bold text-xs shrink-0">✅ Fix:</span>
                  <p className="text-xs text-green-800 font-medium">{fix}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 — Status types table */}
        <section className="mb-8">
          <SH>Beneficiary Status — Har Status Ka Matlab</SH>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">Portal Par Status</th>
                  <th className="p-3 text-left">Matlab</th>
                  <th className="p-3 text-left">Kya Karna Hai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['✅ Active / Beneficiary','List mein hai — kist aayegi','Kuch nahi, wait karo'],
                  ['❌ Rejected','Application fail hui — reason check karo','Reason dekho, fix karo'],
                  ['⏳ Under Verification','State review chal rahi hai','2-4 hafte wait karo'],
                  ['💳 Payment Failed','Approved hai, payment nahi pahunchi','Bank/NPCI fix karo'],
                  ['🔄 Pending','Registration complete, verification baaki','Patiently wait karo'],
                  ['🚫 Deactivated','Pehle active tha, koi issue aaya','Block office contact karo'],
                ].map(([s,m,k],i)=>(
                  <tr key={s} className={i%2===0?'bg-white':'bg-green-50/50'}>
                    <td className="p-3 border-b font-medium text-xs">{s}</td>
                    <td className="p-3 border-b text-gray-700 text-xs">{m}</td>
                    <td className="p-3 border-b text-xs text-green-700 font-medium">{k}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5 — State-wise direct links */}
        <section className="mb-8">
          <SH>State Wise Beneficiary List — Quick Links (36 States & UTs)</SH>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Har state ka PM Kisan dashboard alag hota hai. Apna state select karo — complete list neeche hai:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {STATES_LIST.map(([icon,name,slug])=>(
              <Link key={slug} href={`/beneficiary-list/${slug}`}
                className="flex items-center gap-2 p-3 bg-white border border-green-200 rounded-xl text-green-800 text-xs font-semibold hover:bg-green-600 hover:text-white hover:border-green-600 transition-all">
                <span>{icon}</span>{name}
              </Link>
            ))}
          </div>
        </section>

        {/* Section 6 — Kist schedule — ✅ UPDATED */}
        <section className="mb-8">
          <SH>23वीं किस्त Release Ho Chuki — 24वीं किस्त Kab Aayegi?</SH>
          <div className="my-4 p-4 bg-green-50 border-2 border-green-600 rounded-xl">
            <p className="text-sm font-bold text-green-800 mb-2">✅ 23वीं किस्त — 20 June 2026 ko Release Ho Chuki!</p>
            <p className="text-xs text-green-700">9.44 Crore+ kisanon ko ₹2,000 seedha bank mein mil chuke hain. Apna status abhi check karo.</p>
          </div>
          <div className="my-4 p-4 bg-amber-50 border-2 border-amber-400 rounded-xl">
            <p className="text-sm font-bold text-amber-800 mb-2">⏳ 24वीं किस्त — October 2026 Expected</p>
            <p className="text-xs text-amber-700">List mein naam hona chahiye — iske liye eKYC, land seeding aur bank Aadhaar seeding complete karo.</p>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Beneficiary list har kist se pehle update hoti hai. List mein naam hona chahiye — iske liye:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {icon:'🔐',title:'eKYC Complete Karo',desc:'Sabse pehle — bina eKYC ke list mein nahi aao ge',href:'/articles/pm-kisan-ekyc-online-2026',cta:'eKYC Guide →'},
              {icon:'🏦',title:'Bank Aadhaar Seed Karo',desc:'Bank account mein Aadhaar link hona zaroori hai',href:'/articles/pm-kisan-payment-failed-status-2026',cta:'Payment Guide →'},
              {icon:'✅',title:'Status Check Karo',desc:'Active dikhna chahiye — Rejected nahi',href:'/articles/pm-kisan-23vi-kist-2026-status-check',cta:'Status Guide →'},
              {icon:'🌾',title:'Land Seeding Fix Karo',desc:'Land Seeding No dikh raha hai to patwari se milein',href:'/articles/pm-kisan-land-seeding-status-check',cta:'Land Guide →'},
            ].map(c=>(
              <Link key={c.href} href={c.href}
                className="flex gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-green-300 hover:shadow-sm transition-all no-underline group">
                <span className="text-2xl shrink-0">{c.icon}</span>
                <div>
                  <p className="font-black text-gray-900 text-sm group-hover:text-green-700 transition-colors">{c.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{c.desc}</p>
                  <p className="text-xs text-green-700 font-bold mt-1.5">{c.cta}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 7 — FAQ */}
        <section className="mb-8">
          <SH>Aksar Puchhe Jane Wale Sawaal</SH>
          <SvgFAQ caption="PM Kisan Beneficiary List FAQ 2026"/>
          <div className="space-y-3 mt-4">
            {[
              {q:'Naam list mein hai par payment nahi aayi — kya problem hai?',a:'Naam list mein hona aur payment aana alag cheez hai. Payment ke liye bank mein Aadhaar seeding honi chahiye, IFSC code sahi hona chahiye, aur account active hona chahiye. Payment Failed guide padho.'},
              {q:'Village wise list mein kaafi naam nahi hain — kyun?',a:'List sirf active beneficiaries dikhati hai. Jo log rejected, deactivated ya pending hain — woh nahi dikhte. Iska matlab yeh nahi ki unka naam nahi hai — unki application process mein hai.'},
              {q:'Kya beneficiary list public hai?',a:'Haan — PM Kisan ki beneficiary list publicly accessible hai — pmkisan.gov.in → Dashboard par. Koi bhi kisi bhi gaon ki list dekh sakta hai.'},
              {q:'List mein naam aane mein kitna time lagta hai?',a:'Registration ke baad: State verification 2-4 hafte, eKYC instant, land seeding 15-30 din. Sab complete hone ke baad next installment cycle mein naam list mein aata hai.'},
              {q:'Kya main dusre gaon ki list dekh sakta hoon?',a:'Haan — Dashboard par kisi bhi state, district, block, village ki list dekh sakte ho. Koi restriction nahi hai.'},
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

        {/* Gov link */}
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