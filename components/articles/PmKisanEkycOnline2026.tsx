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
    headline:'PM Kisan Digital Verification 2026 — OTP Method, Biometric Authentication, Status Check & Error Fix Guide',
    description:'PM Kisan identity validation 2026 — ghar baithe OTP se karo ya CSC center par biometric se. Status check karo, common errors fix karo — bilkul free, step-by-step Hinglish guide.',
    image:`${DOMAIN}/og-image.jpg`, datePublished:PUBLISHED, dateModified:MODIFIED,
    author:{'@type':'Organization',name:'KisanStatus Team',url:`${DOMAIN}/about`},
    publisher:{'@type':'Organization',name:'KisanStatus.com',url:DOMAIN},
    mainEntityOfPage:{'@type':'WebPage','@id':URL},
    inLanguage:'hi-IN', wordCount:4200,
  },
  {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'Home',item:DOMAIN},
      {'@type':'ListItem',position:2,name:'Articles',item:`${DOMAIN}/articles`},
      {'@type':'ListItem',position:3,name:'PM Kisan Digital Verification 2026',item:URL},
    ],
  },
  {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:[
      {'@type':'Question',name:'PM Kisan identity verification online kaise kare?',
        acceptedAnswer:{'@type':'Answer',text:'pmkisan.gov.in → Farmers Corner → Digital Verification → 12-digit UID daalo → Get OTP → verification code enter karo → Submit. 5 minute mein complete. Free hai.'}},
      {'@type':'Question',name:'Biometric authentication ke liye kya chahiye?',
        acceptedAnswer:{'@type':'Answer',text:'OTP method ke liye: identity document + linked active mobile number. CSC method ke liye: sirf identity card + fingerprint/iris scan.'}},
      {'@type':'Question',name:'Digital verification free hai?',
        acceptedAnswer:{'@type':'Answer',text:'Haan — bilkul free. Portal se bhi aur service center se bhi. Koi charge kare to 155261 par complaint karo.'}},
      {'@type':'Question',name:'Verification nahi ki to kya hoga?',
        acceptedAnswer:{'@type':'Answer',text:'Bina authentication ke koi bhi installment nahi aayegi — chahe registration kitna bhi sahi ho. Mandatory hai 2022 se.'}},
    ],
  },
];

const RELATED = [
  {slug:'pm-kisan-payment-failed-status-2026',          title:'DBT Transfer Failed Fix',        emoji:'💸'},
  {slug:'pm-kisan-rejected-list-2026',                  title:'Application Rejected — Fix',     emoji:'❌'},
  {slug:'pm-kisan-name-correction-online-2026',         title:'Name Correction Guide',          emoji:'✏️'},
  {slug:'pm-kisan-beneficiary-list-2026',               title:'Beneficiary List Check',         emoji:'📋'},
  {slug:'pm-kisan-23vi-kist-2026-status-check',         title:'23vi Installment Status',        emoji:'📅'},
  {slug:'pm-kisan-registration-online-2026',            title:'New Enrollment Guide',           emoji:'📝'},
];

export default function PmKisanEkycOnline2026() {
  return (
    <>
      {schemas.map((s,i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}

      {/* Header */}
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link><span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link><span>/</span>
            <span className="text-white font-bold">Digital Verification 2026</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">🔐 Identity Validation Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Digital Verification 2026 — OTP Se Ghar Baithe Karo Ya Biometric Se Centre Par — Dono Free
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 12 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <img
            src="/images/ekyc-otp.jpg"
            alt="PM Kisan digital verification OTP portal — mobile se ghar baithe karo 2026"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            width="1200"
            height="630"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">Digital Verification 2026 — OTP Method vs Biometric — Kaun Sa Sahi Hai?</p>
        </div>

        {/* Problem-based hook — no fake story */}
        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-800 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-red-800 dark:text-red-300 mb-2">🚨 Common Mistake — Yeh Galti Mat Karna</h2>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed mb-2">
            Bahut se farmers <strong>4 saal se scheme mein registered hain, lekin ek bhi installment nahi aayi.</strong> Enrollment sahi tha, zameen sahi thi, bank account sahi tha. Problem kya thi? <strong>Digital verification kabhi ki hi nahi thi.</strong>
          </p>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed">
            ₹48,000 (24 installments × ₹2,000) — sab arrears mein padi rahi. Authentication karne ke <strong>ek mahine baad</strong> sab credit hua. Yeh galti mat karo — abhi 5 minute mein karo.
          </p>
        </div>

        {/* Quick method chooser */}
        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
            <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-2">📱 OTP Method — Ghar Baithe</h3>
            <p className="text-xs text-[var(--color-text-muted)] mb-3">Identity document se mobile linked hai? Yeh karo — 5 minute mein ho jaata hai.</p>
            <div className="space-y-1 text-xs text-[var(--color-text-muted)]">
              <p className="flex gap-1"><span className="text-green-600 dark:text-green-400">✓</span> Koi queue nahi</p>
              <p className="flex gap-1"><span className="text-green-600 dark:text-green-400">✓</span> 24/7 kar sakte ho</p>
              <p className="flex gap-1"><span className="text-green-600 dark:text-green-400">✓</span> Bilkul free</p>
              <p className="flex gap-1"><span className="text-red-500 dark:text-red-400">✗</span> Mobile link hona zaroori</p>
            </div>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-700 rounded-xl">
            <h3 className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">🏢 Biometric — Centre Par</h3>
            <p className="text-xs text-[var(--color-text-muted)] mb-3">Mobile link nahi? Verification code nahi aa raha? Service center jao — sirf identity card lao.</p>
            <div className="space-y-1 text-xs text-[var(--color-text-muted)]">
              <p className="flex gap-1"><span className="text-green-600 dark:text-green-400">✓</span> Mobile zaruri nahi</p>
              <p className="flex gap-1"><span className="text-green-600 dark:text-green-400">✓</span> Fingerprint se hota hai</p>
              <p className="flex gap-1"><span className="text-green-600 dark:text-green-400">✓</span> Officially free</p>
              <p className="flex gap-1"><span className="text-red-500 dark:text-red-400">✗</span> Centre jaana padega</p>
            </div>
          </div>
        </div>

        {/* OTP Method */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            1. OTP Method — Ghar Baithe 5 Minute Mein
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Yeh sabse fast tarika hai. Bas UID se mobile number linked hona chahiye — aur verification code receive kar sako.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">Easy hai.</p>
          <StepList>
            <SI n={1}>Mobile ya computer mein browser kholo — <strong>pmkisan.gov.in</strong> type karo</SI>
            <SI n={2}>Homepage par upar <strong>"Farmers Corner"</strong> menu dhundho — tap karo</SI>
            <SI n={3}>Dropdown mein <strong>"Digital Verification"</strong> option select karo</SI>
            <SI n={4}>Apna <strong>12-digit UID number</strong> carefully enter karo — galti mat karna</SI>
            <SI n={5}><strong>Captcha code</strong> enter karo — jo image mein dikhe wahi likhna hai</SI>
            <SI n={6}><strong>"Get OTP"</strong> button press karo</SI>
            <SI n={7}>Linked mobile par <strong>6-digit verification code</strong> aayega — 30 second ke andar</SI>
            <SI n={8}>Code box mein number enter karo → <strong>"Submit"</strong> click karo</SI>
            <SI n={9}>Screen par <strong>"Verification Successfully Done"</strong> message dikhega — screenshot lo</SI>
          </StepList>
          <IB>
            <strong>✅ Confirmation:</strong> Successful authentication ke baad portal par status <strong>"Verified"</strong> dikhega. Beneficiary Status mein bhi <strong>"Active"</strong> dikhega. Yahi proof hai ki ho gayi.
          </IB>
        </section>

        {/* Biometric Method */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            2. Biometric Method — Jab OTP Na Aaye
          </h2>
          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <img src="/images/ekyc-otp.jpg" alt="Biometric authentication at rural service centre — field mein karo"
              className="w-full object-cover" style={{ maxHeight: '420px', objectPosition: 'center' }}
              loading="lazy" width="1200" height="630"/>
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">Rural Service Centre Par Biometric Authentication — Kab Jana Chahiye Aur Kaise</p>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar UID se mobile number linked nahi, ya number band ho gaya, ya OTP consistently fail ho raha hai — service centre best option hai. Sirf identity card lekar jao.
          </p>
          <StepList>
            <SI n={1}>Pehle nazdiki service centre dhundho: <strong>locator.csccloud.in</strong> par ya Google Maps mein <strong>"service centre near me"</strong> search karo</SI>
            <SI n={2}>Centre khulne ka time check karo — usually 9 AM to 6 PM, Monday to Saturday</SI>
            <SI n={3}>Saath lao: <strong>Identity card original</strong> (photocopy bhi rakho)</SI>
            <SI n={4}>Counter par bolo: <strong>"Digital verification karwani hai"</strong> — operator samajh jaayega</SI>
            <SI n={5}>Operator tumhara UID number portal mein dalega</SI>
            <SI n={6}><strong>Fingerprint scanner</strong> par apni ungli rakhoge — machine scan karegi</SI>
            <SI n={7}>Match hone par <strong>"Authentication Successful"</strong> dikhega</SI>
            <SI n={8}>Process instant complete — operator acknowledgement print de sakta hai</SI>
          </StepList>
          <WB>
            <strong>⚠️ Charge Maange To Refuse Karo:</strong> Digital verification officially free hai. Agar operator ₹50-100 maange to dene ki zaroorat nahi. Complaint: <strong>1800-1214-060</strong> (service network helpline, toll-free).
          </WB>
        </section>

        {/* Status Check */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            3. Status Check — Ho Gayi Ya Nahi?
          </h2>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholo</SI>
            <SI n={2}>Farmers Corner → <strong>"Digital Verification"</strong> par click karo</SI>
            <SI n={3}>UID number enter karo</SI>
            <SI n={4}>Agar <strong>"Already Verified"</strong> dikhta hai — complete hai, kuch nahi karna</SI>
            <SI n={5}>Agar OTP form khulta hai — abhi pending hai, abhi karo</SI>
          </StepList>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Portal Par Jo Dikhega</th>
                  <th className="p-3 text-left">Matlab</th>
                  <th className="p-3 text-left">Kya Karna Hai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Already Verified ✅',          'Complete hai',               'Kuch nahi — wait karo installment ka'],
                  ['Code Sent Successfully ⏳',       'Verification code aa gaya hoga',           'Mobile check karo — code enter karo'],
                  ['UID Not Found ❌',           'Number galat enter kiya',    'Identity card se dobara check karke enter karo'],
                  ['Mobile Not Linked ⚠️',           'UID se mobile nahi juda','Service centre jao biometric ke liye'],
                  ['Server Error 🔄',                'Portal temporarily down',    'Subah 6-8 AM ya raat 10 PM mein try karo'],
                ].map(([msg,matlab,karo],i)=>(
                  <tr key={msg} className={i%2===0?'bg-[var(--color-card)]':'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{msg}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{matlab}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-medium">{karo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Common Errors */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            4. Common Errors — Real Solutions
          </h2>
          <div className="space-y-3">
            {[
              {
                err:'Verification Code Nahi Aaya — 10 Minute Ho Gaye',
                why:'UID se jo mobile linked hai woh number alag ho sakta hai, ya network slow hai.',
                fix:'Pehle check karo — UIDAI.gov.in par kon sa mobile linked hai. Agar purana band number hai to service centre jao. Agar active hai to network change karke try karo (WiFi se data ya data se WiFi).',
              },
              {
                err:'Authentication Ki Lekin Installment Phir Bhi Nahi Aayi',
                why:'Verification aur payment do alag cheezein hain. Authentication ke baad bank NPCI seeding bhi check hoti hai.',
                fix:'Beneficiary Status check karo — "Active" dikhna chahiye. Phir bank branch mein puchho "NPCI mapper link hai mera?" — DBT link hona chahiye. Dono complete hone ke baad agli tranche mein payment aayegi.',
              },
              {
                err:'Centre Mein Fingerprint Nahi Ho Raha',
                why:'Haath mein cuts ya calluses se fingerprint blur hoti hai. Bhari garmi mein bhi sensor struggle karta hai.',
                fix:'Haath saaf pani se dhoo — angli ko thoda geela karo. Chhaya mein jao. Alag ungli try karo. Agar phir bhi nahi — iris scan try karo. Kisi aur centre par bhi ja sakte ho.',
              },
              {
                err:'Portal Par "Verified" Lekin Status Pending',
                why:'Portal update hone mein 24-72 hours lagte hain synchronize hone mein.',
                fix:'Success ka screenshot save rakho. 2-3 din baad dobara check karo. Status update mein waqt lagta hai — genuinely ho gayi hai agar "Successfully Done" dikh aaya tha.',
              },
              {
                err:'UID Number Correct Hai Phir Bhi "Not Found"',
                why:'Identity card print pe aur UIDAI database mein minor discrepancy ho sakti hai.',
                fix:'Virtual ID (VID) generate karo UIDAI portal se aur woh try karo. Ya directly biometric karo — woh UID number ke bina bhi fingerprint se authenticate kar sakta hai.',
              },
            ].map(({err,why,fix})=>(
              <div key={err} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
                <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5">
                  <p className="font-black text-red-800 dark:text-red-300 text-sm">❌ {err}</p>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-xs text-[var(--color-text-muted)]"><span className="font-bold text-[var(--color-text)]">Kyun hota hai:</span> {why}</p>
                  <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0">✅ FIX:</span>
                    <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">{fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical tips */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            5. Practical Tips — Jo Useful Hain
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {icon:'⏰',tip:'Installment se 1 mahine pehle karo',detail:'Last minute par server jam ho jaata hai — lakho log ek saath try karte hain'},
              {icon:'📸',tip:'Screenshot lo turant',detail:'"Successfully Done" message aane par screenshot — proof ke kaam aata hai agar baad mein status mein delay ho'},
              {icon:'🌙',tip:'Raat 10 PM ke baad try karo',detail:'Subah aur dopahar mein server slow — raat ko ya subah 6-8 AM fast hota hai'},
              {icon:'📱',tip:'Mobile link check karo pehle',detail:'myAadhaar.uidai.gov.in par login karke verify karo kaunsa number linked hai'},
              {icon:'🔁',tip:'Authentication ek baar permanent hoti hai',detail:'Baar baar karne ki zaroorat nahi — lekin status check karte raho ki active hai'},
              {icon:'🏢',tip:'Operator ko directly bolo kya karna hai',detail:'"Digital verification" — yeh words bolne par operator samajh jaata hai — form nahi bharna padta'},
            ].map(({icon,tip,detail})=>(
              <div key={tip} className="flex gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl">
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <p className="font-black text-[var(--color-text)] text-xs">{tip}</p>
                  <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            6. FAQ — Real Questions, Direct Answers
          </h2>
          <SvgFAQ caption="Digital Verification FAQ 2026 — Farmers Ke Real Sawaal"/>
          <div className="space-y-3 mt-4">
            {[
              {
                q:'Authentication ke kitne din baad pehli tranche aayegi?',
                a:'Verification complete hone ke baad next scheduled installment mein payment aayegi. Agar 23vi installment June-July mein hai aur tune May mein authentication ki — to June-July mein milegi. Jo installments pehle miss huin woh arrears mein ek saath milegi.',
              },
              {
                q:'Mera UID aur mobile alag state ka hai — verification hogi?',
                a:'Haan — verification ke liye linked mobile number kisi bhi state ka ho sakta hai. Sirf woh number active hona chahiye aur verification code receive ho sake. State mismatch se problem nahi aati authentication mein.',
              },
              {
                q:'Ek hi UID se puri family ki verification ho sakti hai?',
                a:'Nahi — scheme mein har registered farmer ka UID alag hona chahiye. Ek UID se sirf ek account. Agar pati aur patni dono registered hain to dono ki alag alag verification karni hogi — alag alag UID numbers se.',
              },
              {
                q:'Service centre band tha — koi aur option hai biometric ke liye?',
                a:'Haan — kuch states mein mobile authentication van bhi aate hain gaon mein. Bank Mitra ya Kisan Seva Kendra par bhi kabhi kabhi yeh suvidha milti hai. Ya doosre gaon ke centre jaoge to woh bhi help kar sakta hai — usi district mein hona zaroori nahi.',
              },
              {
                q:'Authentication ho gayi lekin naam "Beneficiary" list mein nahi hai?',
                a:'Verification aur beneficiary list mein naam aana do alag processes hain. Verification sirf identity verify karta hai. Naam list mein aane ke liye land seeding bhi complete honi chahiye aur state verification bhi. Beneficiary Status check karo — rejection reason dekho.',
              },
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
          href="https://pmkisan.gov.in/eKYC.aspx"
          label="PM Kisan Digital Verification — Official Portal"
          guide="Verify Abhi"
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