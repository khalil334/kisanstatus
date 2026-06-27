'use client';
import Link from 'next/link';
import { SvgEkycStatus, SvgMobileUpdate, SvgFAQ } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, DB, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED  = '2026-06-10T08:00:00+05:30';
const DOMAIN = 'https://kisanstatus.com';
const URL    = `${DOMAIN}/articles/pm-kisan-ekyc-online-2026`;

const schemas = [
  {
    '@context':'https://schema.org','@type':'Article',
    headline:'PM Kisan eKYC Online 2026 — OTP Method, CSC Biometric, Status Check & Error Fix Guide',
    description:'PM Kisan eKYC 2026 — ghar baithe OTP se karo ya CSC center par biometric se. Status check karo, common errors fix karo — bilkul free, step-by-step Hinglish guide.',
    image:`${DOMAIN}/og-image.jpg`, datePublished:PUBLISHED, dateModified:MODIFIED,
    author:{'@type':'Person',name:'Sidhu Singh',url:`${DOMAIN}/about`},
    publisher:{'@type':'Organization',name:'KisanStatus.com',url:DOMAIN},
    mainEntityOfPage:{'@type':'WebPage','@id':URL},
    inLanguage:'hi-IN', wordCount:4200,
  },
  {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:DOMAIN},
      {'@type':'ListItem',position:2,name:'Articles',item:`${DOMAIN}/articles`},
      {'@type':'ListItem',position:3,name:'PM Kisan eKYC Online 2026',item:URL},
    ],
  },
  {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:[
      {'@type':'Question',name:'PM Kisan eKYC online kaise kare?',
        acceptedAnswer:{'@type':'Answer',text:'pmkisan.gov.in → Farmers Corner → eKYC → Aadhaar number daalo → Get OTP → OTP enter karo → Submit. 5 minute mein complete. Free hai.'}},
      {'@type':'Question',name:'eKYC ke liye kya chahiye?',
        acceptedAnswer:{'@type':'Answer',text:'OTP method ke liye: Aadhaar card + Aadhaar se linked active mobile number. CSC method ke liye: sirf Aadhaar card + fingerprint/iris scan.'}},
      {'@type':'Question',name:'PM Kisan eKYC free hai?',
        acceptedAnswer:{'@type':'Answer',text:'Haan — bilkul free. Portal se bhi aur CSC center se bhi. Koi charge kare to 155261 par complaint karo.'}},
      {'@type':'Question',name:'eKYC nahi ki to kya hoga?',
        acceptedAnswer:{'@type':'Answer',text:'Bina eKYC ke koi bhi kist nahi aayegi — chahe registration kitna bhi sahi ho. eKYC mandatory hai 2022 se.'}},
    ],
  },
];

// ✅ FIXED: Updated 21vi → 23vi Kist
const RELATED = [
  {slug:'pm-kisan-payment-failed-status-2026',          title:'Payment Failed Fix Guide',        emoji:'💸'},
  {slug:'pm-kisan-rejected-list-2026',                  title:'Rejected List — Reason & Fix',   emoji:'❌'},
  {slug:'pm-kisan-name-correction-online-2026',         title:'Name Correction Guide',           emoji:'✏️'},
  {slug:'pm-kisan-beneficiary-list-2026',               title:'Beneficiary List Check',          emoji:'📋'},
  {slug:'pm-kisan-23vi-kist-2026-status-check',         title:'23vi Kist Status Check',          emoji:'📅'},
  {slug:'pm-kisan-registration-online-2026',            title:'New Registration Guide',          emoji:'📝'},
];

export default function PmKisanEkycOnline2026() {
  return (
    <>
      {schemas.map((s,i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}

      {/* Header */}
      <div className="bg-primary-600 py-8">
        <div className="container-site max-w-3xl">
          {/* ✅ FIXED: Breadcrumb updated — /articles instead of outdated 21vi link */}
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/articles" className="hover:text-white">Articles</Link><span>/</span>
            <span className="text-white">eKYC Online 2026</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">🔐 eKYC Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan eKYC Online 2026 — OTP Se Ghar Baithe Karo Ya CSC Center Par — Dono Free
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
            src="/images/ekyc-otp.jpg"
            alt="PM Kisan eKYC OTP portal — mobile se ghar baithe karo 2026"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">PM Kisan eKYC 2026 — OTP Method vs CSC Biometric — Kaun Sa Sahi Hai?</p>
        </div>

        {/* Real story hook */}
        <div className="my-6 p-5 bg-red-50 border-2 border-red-400 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-red-800 mb-2">🚨 Suno — Yeh Galti Mat Karna</h2>
          <p className="text-sm text-red-900 leading-relaxed mb-2">
            Bihar ke ek kisan bhai ne bataya — <strong>4 saal se PM Kisan registered hain, lekin ek bhi kist nahi aayi.</strong> Registration sahi tha, zameen sahi thi, bank account sahi tha. Problem kya thi? <strong>eKYC kabhi ki hi nahi thi.</strong>
          </p>
          <p className="text-sm text-red-900 leading-relaxed">
            ₹48,000 (24 kistein × ₹2,000) — sab arrears mein padi rahi. eKYC karne ke <strong>ek mahine baad</strong> sab credit hua. Tum bhi yeh galti mat karo — abhi 5 minute mein karo.
          </p>
        </div>

        {/* Quick method chooser */}
        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 border-2 border-green-500 rounded-xl">
            <h3 className="font-black text-green-800 text-sm mb-2">📱 OTP Method — Ghar Baithe</h3>
            <p className="text-xs text-gray-700 mb-3">Aadhaar se mobile linked hai? Yeh karo — 5 minute mein ho jaata hai.</p>
            <div className="space-y-1 text-xs text-gray-700">
              <p className="flex gap-1"><span className="text-green-600">✓</span> Koi queue nahi</p>
              <p className="flex gap-1"><span className="text-green-600">✓</span> 24/7 kar sakte ho</p>
              <p className="flex gap-1"><span className="text-green-600">✓</span> Bilkul free</p>
              <p className="flex gap-1"><span className="text-red-500">✗</span> Mobile link hona zaroori</p>
            </div>
          </div>
          <div className="p-4 bg-blue-50 border-2 border-blue-400 rounded-xl">
            <h3 className="font-black text-blue-800 text-sm mb-2">🏢 CSC Biometric — Centre Par</h3>
            <p className="text-xs text-gray-700 mb-3">Mobile link nahi? OTP nahi aa raha? CSC center jao — sirf Aadhaar card lao.</p>
            <div className="space-y-1 text-xs text-gray-700">
              <p className="flex gap-1"><span className="text-green-600">✓</span> Mobile zaruri nahi</p>
              <p className="flex gap-1"><span className="text-green-600">✓</span> Fingerprint se hota hai</p>
              <p className="flex gap-1"><span className="text-green-600">✓</span> Officially free</p>
              <p className="flex gap-1"><span className="text-red-500">✗</span> CSC centre jaana padega</p>
            </div>
          </div>
        </div>

        {/* OTP Method */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Method 1 — OTP Se eKYC: Ghar Baithe 5 Minute
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Yeh sabse fast tarika hai. Bas Aadhaar se mobile number linked hona chahiye — aur OTP receive kar sako.
          </p>
          <StepList>
            <SI n={1}>Mobile ya computer mein browser kholo — <strong>pmkisan.gov.in</strong> type karo</SI>
            <SI n={2}>Homepage par upar <strong>"Farmers Corner"</strong> menu dhundho — tap karo</SI>
            <SI n={3}>Dropdown mein <strong>"eKYC"</strong> option select karo</SI>
            <SI n={4}>Apna <strong>12-digit Aadhaar number</strong> carefully enter karo — galti mat karna</SI>
            <SI n={5}><strong>Captcha code</strong> enter karo — jo image mein dikhe wahi likhna hai</SI>
            <SI n={6}><strong>"Get OTP"</strong> button press karo</SI>
            <SI n={7}>Aadhaar-linked mobile par <strong>6-digit OTP</strong> aayega — 30 second ke andar</SI>
            <SI n={8}>OTP box mein number enter karo → <strong>"Submit OTP"</strong> click karo</SI>
            <SI n={9}>Screen par <strong>"eKYC Successfully Done"</strong> message dikhega — screenshot lo</SI>
          </StepList>
          <IB>
            <strong>✅ Confirmation:</strong> Successful eKYC ke baad portal par status <strong>"eKYC Done"</strong> dikhega. Beneficiary Status mein bhi <strong>"Active"</strong> dikhega. Yahi proof hai ki ho gayi.
          </IB>
        </section>

        {/* CSC Method */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Method 2 — CSC Biometric eKYC: Jab OTP Na Aaye
          </h2>
          <div className="my-6 rounded-2xl overflow-hidden border border-green-100 shadow-md">
          <img src="/images/ekyc-otp.jpg" alt="PM Kisan eKYC OTP portal mobile — field mein karo"
            className="w-full object-cover" style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy" width="1200" height="630"/>
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">CSC Center Par Biometric eKYC — Kab Jana Chahiye Aur Kaise</p>
        </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Agar Aadhaar se mobile number linked nahi, ya number band ho gaya, ya OTP consistently fail ho raha hai — CSC center best option hai. Sirf Aadhaar card lekar jao.
          </p>
          <StepList>
            <SI n={1}>Pehle nazdiki CSC center dhundho: <strong>locator.csccloud.in</strong> par ya Google Maps mein <strong>"CSC center near me"</strong> search karo</SI>
            <SI n={2}>CSC center khulne ka time check karo — usually 9 AM to 6 PM, Monday to Saturday</SI>
            <SI n={3}>Saath lao: <strong>Aadhaar card original</strong> (photocopy bhi rakho)</SI>
            <SI n={4}>Counter par bolo: <strong>"PM Kisan eKYC karwani hai"</strong> — operator samajh jaayega</SI>
            <SI n={5}>Operator tumhara Aadhaar number portal mein dalega</SI>
            <SI n={6}><strong>Fingerprint scanner</strong> par apni ungli rakhoge — machine scan karegi</SI>
            <SI n={7}>Match hone par <strong>"Biometric Authentication Successful"</strong> dikhega</SI>
            <SI n={8}>eKYC instant complete — operator acknowledgement print de sakta hai</SI>
          </StepList>
          <WB>
            <strong>⚠️ Charge Maange To Refuse Karo:</strong> PM Kisan eKYC officially free hai. Agar CSC operator ₹50-100 maange to dene ki zaroorat nahi. Complaint: <strong>1800-1214-060</strong> (CSC helpline, toll-free).
          </WB>
        </section>

        {/* eKYC Status Check */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            eKYC Status Check Karo — Ho Gayi Ya Nahi?
          </h2>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholo</SI>
            <SI n={2}>Farmers Corner → <strong>eKYC</strong> par click karo</SI>
            <SI n={3}>Aadhaar number enter karo</SI>
            <SI n={4}>Agar <strong>"eKYC Already Done"</strong> dikhta hai — complete hai, kuch nahi karna</SI>
            <SI n={5}>Agar OTP form khulta hai — abhi pending hai, abhi karo</SI>
          </StepList>

          <div className="overflow-x-auto my-4 rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">Portal Par Jo Dikhega</th>
                  <th className="p-3 text-left">Matlab</th>
                  <th className="p-3 text-left">Kya Karna Hai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['eKYC Already Done ✅',          'Complete hai',               'Kuch nahi — wait karo kist ka'],
                  ['OTP Sent Successfully ⏳',       'OTP aa gaya hoga',           'Mobile check karo — OTP enter karo'],
                  ['Aadhaar Not Found ❌',           'Number galat enter kiya',    'Aadhaar card se dobara check karke enter karo'],
                  ['Mobile Not Linked ⚠️',           'Aadhaar se mobile nahi juda','CSC center jao biometric ke liye'],
                  ['Server Error 🔄',                'Portal temporarily down',    'Subah 6-8 AM ya raat 10 PM mein try karo'],
                ].map(([msg,matlab,karo],i)=>(
                  <tr key={msg} className={i%2===0?'bg-white':'bg-green-50/50'}>
                    <td className="p-3 border-b font-medium text-xs">{msg}</td>
                    <td className="p-3 border-b text-xs text-gray-700">{matlab}</td>
                    <td className="p-3 border-b text-xs text-green-700 font-medium">{karo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Common Errors */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            eKYC Mein Common Problems — Real Solutions
          </h2>
          <div className="space-y-3">
            {[
              {
                err:'OTP Nahi Aaya — 10 Minute Ho Gaye',
                why:'Aadhaar se jo mobile linked hai woh number alag ho sakta hai, ya network slow hai.',
                fix:'Pehle check karo — UIDAI.gov.in par kon sa mobile linked hai. Agar purana band number hai to CSC center jao. Agar active hai to network change karke try karo (WiFi se data ya data se WiFi).',
              },
              {
                err:'eKYC Ki Lekin Kist Phir Bhi Nahi Aayi',
                why:'eKYC aur payment do alag cheezein hain. eKYC ke baad bank Aadhaar seeding bhi check hoti hai.',
                fix:'Beneficiary Status check karo — "Active" dikhna chahiye. Phir bank branch mein puchho "Aadhaar seeding hai meri?" — NPCI link hona chahiye. Dono complete hone ke baad agli kist mein payment aayegi.',
              },
              {
                err:'CSC Mein Fingerprint Nahi Ho Raha',
                why:'Haath mein cuts ya calluses se fingerprint blur hoti hai. Bhari garmi mein bhi sensor struggle karta hai.',
                fix:'Haath saaf pani se dhoo — angli ko thoda geela karo. Chhaya mein jao. Alag ungli try karo. Agar phir bhi nahi — iris scan try karo. Kisi aur CSC center par bhi ja sakte ho.',
              },
              {
                err:'Portal Par "eKYC Done" Lekin Status Pending',
                why:'Portal update hone mein 24-72 hours lagte hain synchronize hone mein.',
                fix:'eKYC success ka screenshot save rakho. 2-3 din baad dobara check karo. Status update mein waqt lagta hai — eKYC genuinely ho gayi hai agar "Successfully Done" dikh aaya tha.',
              },
              {
                err:'Aadhaar Number Correct Hai Phir Bhi "Not Found"',
                why:'Aadhaar card print pe aur UIDAI database mein minor discrepancy ho sakti hai.',
                fix:'Virtual ID (VID) generate karo UIDAI portal se aur woh try karo. Ya directly CSC biometric karo — woh Aadhaar number ke bina bhi fingerprint se authenticate kar sakta hai.',
              },
            ].map(({err,why,fix})=>(
              <div key={err} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-red-50 border-b border-red-100 px-4 py-2.5">
                  <p className="font-black text-red-800 text-sm">❌ {err}</p>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-xs text-gray-600"><span className="font-bold text-gray-800">Kyun hota hai:</span> {why}</p>
                  <div className="flex items-start gap-2 bg-green-50 rounded-lg p-3">
                    <span className="text-green-600 font-black text-xs shrink-0">✅ FIX:</span>
                    <p className="text-xs text-green-800 leading-relaxed">{fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Expert tips */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            eKYC Smart Tips — Jo Koi Nahi Batata
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {icon:'⏰',tip:'Kist se 1 mahine pehle karo',detail:'Last minute par server jam ho jaata hai — lakho log ek saath try karte hain'},
              {icon:'📸',tip:'Screenshot lo turant',detail:'"Successfully Done" message aane par screenshot — proof ke kaam aata hai agar baad mein status mein delay ho'},
              {icon:'🌙',tip:'Raat 10 PM ke baad try karo',detail:'Subah aur dopahar mein server slow — raat ko ya subah 6-8 AM fast hota hai'},
              {icon:'📱',tip:'Aadhaar mobile link check karo pehle',detail:'myAadhaar.uidai.gov.in par login karke verify karo kaunsa number linked hai'},
              {icon:'🔁',tip:'eKYC ek baar permanent hoti hai',detail:'Baar baar karne ki zaroorat nahi — lekin status check karte raho ki active hai'},
              {icon:'🏢',tip:'CSC operator ko directly bolo kya karna hai',detail:'"PM Kisan eKYC" — yeh words bolne par operator samajh jaata hai — form nahi bharna padta'},
            ].map(({icon,tip,detail})=>(
              <div key={tip} className="flex gap-3 p-3 bg-green-50 border border-green-100 rounded-xl">
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <p className="font-black text-gray-900 text-xs">{tip}</p>
                  <p className="text-[11px] text-gray-600 mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            eKYC Ke Baare Mein Asli Sawaal — Seedhe Jawab
          </h2>
          <SvgFAQ caption="PM Kisan eKYC FAQ 2026 — Farmers Ke Real Sawaal"/>
          <div className="space-y-3 mt-4">
            {[
              {
                q:'eKYC ke kitne din baad pehli kist aayegi?',
                a:'eKYC complete hone ke baad next scheduled installment mein kist aayegi. Agar 23vi kist June-July mein hai aur tune May mein eKYC ki — to June-July mein milegi. Jo kistein pehle miss huin woh arrears mein ek saath milegi.',
              },
              {
                q:'Mera Aadhaar aur mobile alag state ka hai — eKYC hogi?',
                a:'Haan — eKYC ke liye Aadhaar-linked mobile number kisi bhi state ka ho sakta hai. Sirf woh number active hona chahiye aur OTP receive ho sake. PM Kisan state PM Aadhaar state se alag hone se problem nahi aati eKYC mein.',
              },
              {
                q:'Ek hi Aadhaar se puri family ki eKYC ho sakti hai?',
                a:'Nahi — PM Kisan mein har registered farmer ka Aadhaar alag hona chahiye. Ek Aadhaar se sirf ek account. Agar pati aur patni dono registered hain to dono ki alag alag eKYC karni hogi — alag alag Aadhaar numbers se.',
              },
              {
                q:'CSC center band tha — koi aur option hai biometric ke liye?',
                a:'Haan — kuch states mein mobile Aadhaar authentication van bhi aate hain gaon mein. Bank Mitra ya Kisan Seva Kendra par bhi kabhi kabhi yeh suvidha milti hai. Ya doosre gaon ke CSC center jaoge to woh bhi help kar sakta hai — usi district mein hona zaroori nahi.',
              },
              {
                q:'eKYC ho gayi lekin naam "Beneficiary" list mein nahi hai?',
                a:'eKYC aur beneficiary list mein naam aana do alag processes hain. eKYC sirf identity verify karta hai. Naam list mein aane ke liye land seeding bhi complete honi chahiye aur state verification bhi. Beneficiary Status check karo — rejection reason dekho.',
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
          href="https://pmkisan.gov.in/eKYC.aspx"
          label="PM Kisan eKYC — Official Portal"
          guide="eKYC Karo Abhi"
          guideHref="/articles/pm-kisan-payment-failed-status-2026"
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