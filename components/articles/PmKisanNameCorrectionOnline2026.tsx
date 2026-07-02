'use client';
import Link from 'next/link';
import { SvgNameCorrection, SvgAadhaarCorrection, SvgDocuments, SvgFaqCorrection } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, DB, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED  = '2026-06-10T08:00:00+05:30';
const DOMAIN = 'https://kisanstatus.com';
const URL    = `${DOMAIN}/articles/pm-kisan-name-correction-online-2026`;

const schemas = [
  {
    '@context':'https://schema.org','@type':'Article',
    headline:'PM Kisan Beneficiary Name Modification 2026 — Identity Galat Hai? Ghar Baithe 15 Minute Mein Fix Karo',
    description:'PM Kisan beneficiary name correction 2026 — Aadhaar mismatch, bank naam alag, spelling galat — step-by-step Hinglish guide. Ghar baithe portal se ya CSC center se free mein fix karo.',
    image:`${DOMAIN}/og-image.jpg`, datePublished:PUBLISHED, dateModified:MODIFIED,
    author:{'@type':'Organization',name:'KisanStatus Team',url:`${DOMAIN}/about`},
    publisher:{'@type':'Organization',name:'KisanStatus.com',url:DOMAIN},
    mainEntityOfPage:{'@type':'WebPage','@id':URL},
    inLanguage:'hi-IN', wordCount:3800,
  },
  {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:DOMAIN},
      {'@type':'ListItem',position:2,name:'Articles',item:`${DOMAIN}/articles`},
      {'@type':'ListItem',position:3,name:'PM Kisan Name Modification 2026',item:URL},
    ],
  },
  {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:[
      {'@type':'Question',name:'PM Kisan beneficiary name modification kaise kare?',
        acceptedAnswer:{'@type':'Answer',text:'pmkisan.gov.in → Farmers Corner → Edit Aadhaar Details → Name Correction → Aadhaar card dekh ke EXACTLY wahi naam daalo → documents upload → submit. 15-20 din mein update hoga.'}},
      {'@type':'Question',name:'Identity rectification ke baad missed installments milegi?',
        acceptedAnswer:{'@type':'Answer',text:'Haan — correction approve hone ke baad sabhi missed installments arrears mein credit hoti hain — agli successful payment ke saath ek saath milegi.'}},
      {'@type':'Question',name:'PM Kisan name modification free hai?',
        acceptedAnswer:{'@type':'Answer',text:'Bilkul free hai — portal se bhi aur CSC center se bhi. Koi bhi charge kare to PM Kisan helpline 155261 par complaint karo.'}},
    ],
  },
];

const RELATED = [
  {slug:'pm-kisan-ekyc-online-2026',                    title:'Digital Verification Guide 2026', emoji:'🔐'},
  {slug:'pm-kisan-payment-failed-status-2026',          title:'DBT Transfer Failed Fix',          emoji:'💸'},
  {slug:'pm-kisan-rejected-list-2026',                  title:'Application Declined — Reason & Fix', emoji:'❌'},
  {slug:'pm-kisan-beneficiary-list-2026',               title:'Eligible Farmers Roster Check',     emoji:'📋'},
  {slug:'pm-kisan-land-seeding-status-check',           title:'Land Record Integration Fix',       emoji:'🌾'},
  {slug:'pm-kisan-problems-solution-guide-2026',        title:'10 Common Issues Guide',            emoji:'🔧'},
];

export default function PmKisanNameCorrectionOnline2026() {
  return (
    <>
      {schemas.map((s,i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}

      {/* Header */}
      <div className="bg-primary-600 py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/articles/pm-kisan-21vi-installment-status-check" className="hover:text-white">PM Kisan Guide</Link><span>/</span>
            <span className="text-white">Identity Modification 2026</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">✏️ Beneficiary Name Update</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Beneficiary Name Modification 2026 — Identity Galat Hai? Ghar Baithe 15 Minute Mein Fix Karo
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 16 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-6 rounded-2xl overflow-hidden border border-green-100 shadow-md">
          <img
            src="/images/name-correction.jpg"
            alt="PM Kisan beneficiary name modification — galat identity fix karo 2026"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">PM Kisan Identity Modification — Naam Galat Hai To Aise Fix Karo 2026</p>
        </div>

        {/* Problem statement — no fake story */}
        <div className="my-6 p-5 bg-amber-50 border-2 border-amber-500 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 mb-2">⚠️ Common Problem — Yeh Galti Bahut Hoti Hai</h2>
          <p className="text-sm text-amber-900 leading-relaxed mb-3">
            Registration ke waqt naam type karte waqt <strong>"RAMESH KUAMR"</strong> likh diya — ek letter galat. Bank mein naam hai <strong>"RAMESH KUMAR"</strong>. Aadhaar mein bhi <strong>"RAMESH KUMAR"</strong>. Lekin PM Kisan system ne teen jagah teen alag naam dekhe — eKYC fail, payment ruk gayi, 3 installments miss ho gayin.
          </p>
          <p className="text-sm text-amber-900 leading-relaxed">
            Yeh ek letter ki galti ₹6,000 rok sakti hai. Is guide mein seedha fix karo — koi jugaad nahi, sahi tarika.
          </p>
        </div>

        {/* Quick fix */}
        <div className="my-6 p-5 bg-green-50 border-2 border-green-600 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-green-800 mb-3">⚡ Quick Fix — Portal Se Identity Modification</h2>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholo — mobile ya computer dono chalega</SI>
            <SI n={2}>Upar menu mein <strong>Farmers Corner</strong> tap karo</SI>
            <SI n={3}><strong>Edit Aadhaar Details</strong> option chunio</SI>
            <SI n={4}><strong>Name Correction</strong> select karo</SI>
            <SI n={5}>Apna Aadhaar card saamne rakho — <strong>EXACTLY wahi spelling</strong> type karo — ek letter bhi alag nahi</SI>
            <SI n={6}>Aadhaar scan upload karo (front + back, clear photo, 2MB se kam)</SI>
            <SI n={7}>Submit karo — reference number screenshot lo</SI>
            <SI n={8}><strong>15-20 working days</strong> mein portal par update dikhai dega</SI>
          </StepList>
          <IB><strong>💡 Ek Kaam Pehle Karo:</strong> Correction se pehle Aadhaar card nikal ke check karo — wahan exactly kya likha hai. Wahi naam PM Kisan mein dalwana hai.</IB>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            1. Identity Mismatch Se Kya Kya Ruk Jaata Hai?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bahut se farmers yeh nahi jaante — sirf naam ki spelling ki galti se <strong>poori chain toot jaati hai</strong>. Ek baar dekho kya kya band ho jaata hai:
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">Identity Mismatch Ki Wajah Se</th>
                  <th className="p-3 text-left">Rectification Ke Baad</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['❌ eKYC OTP match nahi hota — fail ho jaati hai','✅ eKYC turat complete ho jaati hai'],
                  ['❌ NPCI bank Aadhaar seeding reject karta hai','✅ Seeding accept hoti hai — payment channel khulta hai'],
                  ['❌ Payment DBT mein fail ya return ho jaati hai','✅ ₹2,000 seedha bank mein credit'],
                  ['❌ Rejected list mein naam aa jaata hai','✅ Active beneficiary — agle installment mein naam confirmed'],
                  ['❌ Agle installments bhi automatic ruk jaate hain','✅ Arrears sameit sab ek saath milta hai'],
                ].map(([a,b],i)=>(
                  <tr key={i} className={i%2===0?'bg-white':'bg-green-50/50'}>
                    <td className="p-3 border-b text-red-700 text-xs">{a}</td>
                    <td className="p-3 border-b text-green-700 text-xs">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <WB><strong>⚠️ Important:</strong> PM Kisan, Aadhaar, aur Bank — teeno jagah naam bilkul same hona chahiye. Ek jagah bhi alag hai to dikkat aayegi.</WB>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            2. 6 Types Ki Identity Galtiyan — Pehchano Apni
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Real farmer cases se liye hain yeh examples — dekho konsi galti tumhari hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {type:'Typing Mistake',     icon:'⌨️', ex:'"RAMESH KUAMR" → sahi hai "RAMESH KUMAR"',    why:'Registration ke waqt hurry mein type kiya'},
              {type:'Missing Part',       icon:'✂️', ex:'"SURESH KUMAR" → sahi hai "SURESH PRASAD KUMAR"', why:'Middle naam chhoot gaya'},
              {type:'Initial/Abbreviation',icon:'🔤',ex:'"RAJESH K" → sahi hai "RAJESH KUMAR"',        why:'Pura surname nahi dala'},
              {type:'Transliteration Fark',icon:'🗣️',ex:'"RAAMLAL" → sahi hai "RAMLAL"',               why:'Regional pronunciation ka asar'},
              {type:'Ulta Naam',          icon:'🔄', ex:'"KUMAR RAJESH" → sahi hai "RAJESH KUMAR"',    why:'First/last naam order ulta ho gaya'},
              {type:'Shaadi Ke Baad',     icon:'💍', ex:'"PRIYA SHARMA" → ab "PRIYA VERMA"',           why:'Surname change ke baad update nahi kiya'},
            ].map(({type,icon,ex,why})=>(
              <div key={type} className="p-4 bg-white border border-gray-200 rounded-xl hover:border-green-300 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{icon}</span>
                  <p className="font-black text-gray-900 text-sm">{type}</p>
                </div>
                <p className="text-xs font-mono text-red-700 bg-red-50 px-2 py-1 rounded mb-1">{ex}</p>
                <p className="text-[11px] text-gray-500">Wajah: {why}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            3. Aadhaar Mein Hi Identity Galat Hai — Pehle Yeh Karo
          </h2>
          <SvgAadhaarCorrection caption="Aadhaar Identity Galat Hai — UIDAI Se Pehle Fix Karwao"/>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Bahut baar aisa hota hai ki Aadhaar card mein hi naam galat enrolled ho gaya — jab school certificate ya voter ID se galat copy hua. Is case mein <strong>pehle Aadhaar thik karwana hoga, phir PM Kisan update hoga.</strong>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <h3 className="font-black text-blue-800 text-sm mb-3">🌐 Online — myAadhaar Portal</h3>
              <StepList>
                <SI n={1}>myaadhaar.uidai.gov.in kholo</SI>
                <SI n={2}>Mobile OTP se login karo</SI>
                <SI n={3}>Update Aadhaar Details → Name</SI>
                <SI n={4}>Supporting document upload karo</SI>
                <SI n={5}>₹50 fee pay karo online</SI>
                <SI n={6}>2-4 hafte mein update</SI>
              </StepList>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
              <h3 className="font-black text-green-800 text-sm mb-3">🏢 Offline — Aadhaar Centre</h3>
              <StepList>
                <SI n={1}>locator.uidai.gov.in se nazdiki centre dhundho</SI>
                <SI n={2}>ID proof lao: PAN/Passport/Voter ID</SI>
                <SI n={3}>Correction form bharo — free</SI>
                <SI n={4}>Biometric re-verification</SI>
                <SI n={5}>Acknowledgement slip lo</SI>
                <SI n={6}>7-14 din mein update</SI>
              </StepList>
            </div>
          </div>
          <IB>
            <strong>📋 Sahi Order:</strong> Aadhaar naam fix → phir PM Kisan portal naam update → phir bank naam update (agar alag hai). Teeno ek order mein karo — ulti seedhi karne se problem aati hai.
          </IB>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            4. Bank Mein Identity Update Kaise Kare
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Bank account mein naam update karna PM Kisan portal se alag process hai — yeh seedha bank branch mein hota hai:
          </p>
          <StepList>
            <SI n={1}>Apni bank branch mein jao — jahan PM Kisan wala account hai</SI>
            <SI n={2}>Bank manager ya officer se bolo — <strong>"Naam update karna hai Aadhaar ke anusaar"</strong></SI>
            <SI n={3}>Naam change ka reason batao — spelling galat hai, ya legal change hai</SI>
            <SI n={4}>Documents submit karo: Aadhaar (original + copy) + passbook</SI>
            <SI n={5}>Shaadi ke baad naam change: Marriage certificate bhi lagegi</SI>
            <SI n={6}>Legal name change: Gazette notification ki copy chahiye</SI>
            <SI n={7}>Bank 7-14 din mein naam update kar deta hai — confirm karo</SI>
          </StepList>
          <WB>
            <strong>⚠️ Bank Naam Aur Aadhaar Naam Same Hona Chahiye:</strong> Bank mein naam update karte waqt wahi naam dalwao jo Aadhaar mein hai — alag naam se phir se problem aayegi.
          </WB>
        </section>

        {/* Section 5 — Documents table */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            5. Kaun Se Documents Chahiye — Case Wise
          </h2>
          <SvgDocuments caption="PM Kisan Identity Modification — Required Documents 2026"/>
          <div className="overflow-x-auto my-4 rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">Tumhari Situation</th>
                  <th className="p-3 text-left">Kya Documents Chahiye</th>
                  <th className="p-3 text-left">Kahan Submit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['PM Kisan mein typing galti',   'Aadhaar card front+back (clear scan)',                          'pmkisan.gov.in portal'],
                  ['Aadhaar mein naam galat',       'PAN card + Voter ID/Passport + School certificate',             'UIDAI / Aadhaar centre'],
                  ['Bank naam alag',                'Aadhaar card + bank passbook first page',                       'Bank branch'],
                  ['Shaadi ke baad surname change', 'Marriage certificate + naya Aadhaar + husband ka ID',           'Bank + UIDAI + PM Kisan'],
                  ['Legal naam change (court)',      'Gazette notification + naya Aadhaar + old ID proof',            'Bank + UIDAI + PM Kisan'],
                  ['Regional spelling alag',        'Aadhaar + affidavit (notary se) confirming same person',        'UIDAI centre'],
                ].map(([sit,doc,kahan],i)=>(
                  <tr key={sit} className={i%2===0?'bg-white':'bg-green-50/50'}>
                    <td className="p-3 border-b font-medium text-xs">{sit}</td>
                    <td className="p-3 border-b text-gray-700 text-xs">{doc}</td>
                    <td className="p-3 border-b text-xs text-green-700 font-medium">{kahan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6 — Timeline */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            6. Rectification Ke Baad Installment Kab Aayega?
          </h2>
          <div className="space-y-3">
            {[
              {step:'Portal par naam correction submit kiya',time:'Day 1',color:'bg-blue-500'},
              {step:'State authority review karti hai documents',time:'Day 3-7',color:'bg-yellow-500'},
              {step:'Correction approve hota hai — portal update hota hai',time:'Day 15-20',color:'bg-orange-500'},
              {step:'Aadhaar seeding aur bank match verify hota hai',time:'Day 20-25',color:'bg-purple-500'},
              {step:'Next PM Kisan installment date par ₹2,000 credit',time:'Next Installment',color:'bg-green-500'},
              {step:'Missed installments arrears mein ek saath credit',time:'Same Payment',color:'bg-emerald-600'},
            ].map(({step,time,color})=>(
              <div key={step} className="flex items-start gap-3">
                <span className={`${color} text-white text-[10px] font-black px-2 py-1 rounded-full shrink-0 whitespace-nowrap mt-0.5`}>{time}</span>
                <div className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 shadow-sm">{step}</div>
              </div>
            ))}
          </div>
          <IB><strong>💰 Arrears Guarantee:</strong> 3 installments miss ho gayi? Correction ke baad teeno ki ₹6,000 ek saath credit hogi agli successful payment mein.</IB>
        </section>

        {/* Section 7 — FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            7. Identity Modification — Real Questions, Direct Answers
          </h2>
          <SvgFaqCorrection caption="PM Kisan Beneficiary Name Correction FAQ — Farmers Ke Real Sawaal"/>
          <div className="space-y-3 mt-4">
            {[
              {
                q:'Naam correction ke baad status portal par kaafi din nahi badla — kya karna hai?',
                a:'15-20 working days wait karo — isme Saturday/Sunday count nahi hote. 25 din baad bhi nahi badla to Reference Number lekar Block Agriculture Office jao ya helpline 155261 par call karo. Status update mein genuinely itna waqt lagta hai — patience zaruri hai.',
              },
              {
                q:'Maine do baar submit kar diya galti se — kya dono process honge?',
                a:'Ghabrao nahi — system generally latest submission ko process karta hai. Lekin agar dono approve ho jayen to confusion ho sakti hai. Helpline 155261 par call karke batao ki duplicate submission hui hai — woh ek cancel kar denge.',
              },
              {
                q:'Portal par naam correction ka option nahi dikh raha — kya karna hai?',
                a:'Kuch cases mein yeh option temporarily unavailable hota hai — server maintenance ya state-wise rollout ki wajah se. CSC center par jao — wahan operator directly PM Kisan portal par correction request daal sakta hai. Ya Block Agriculture Office mein physical application do.',
              },
              {
                q:'Naam correction free hai ya kuch fees lagti hai?',
                a:'PM Kisan portal par naam correction bilkul free hai. Aadhaar naam correction ke liye UIDAI ₹50 charge karta hai — yeh PM Kisan se alag process hai. Bank naam update bhi free hota hai. Koi bhi dukaan wala ya CSC operator PM Kisan correction ke liye charge kare to 155261 par complaint karo.',
              },
              {
                q:'Naam correction ek baar hi ho sakti hai ya baar baar?',
                a:'Generally ek hi baar hoti hai — isliye pehli baar mein sahi karo. Aadhaar card saamne rakh ke typo-free naam type karo. Agar genuinely ek baar ke baad bhi galti reh gayi to office mein manual correction possible hai — lekin yeh process lamba aur mushkil hai.',
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
          href="https://pmkisan.gov.in/FarmerCornerEditAadhaar.aspx"
          label="PM Kisan — Beneficiary Name Modification Portal"
          guide="Identity Modify Karo"
          guideHref="/articles/pm-kisan-rejected-list-2026"
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