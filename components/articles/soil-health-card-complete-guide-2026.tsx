'use client';

import Link from 'next/link';
import { SvgFAQ } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-06-27T08:00:00+05:30';
const MODIFIED  = '2026-06-27T08:00:00+05:30';
const DOMAIN = 'https://kisanstatus.com';
const URL    = `${DOMAIN}/articles/soil-health-card-complete-guide-2026`;

const schemas = [
  {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Soil Health Card Complete Guide 2026 — Download, Status Check, PDF & Registration',
    description: 'Soil Health Card complete guide 2026 — download kaise kare, status check online, PDF download, registration process, card number kaise nikale, mobile se check kare.',
    image: `${DOMAIN}/images/soil-health-card-complete-guide-2026.webp`,
    datePublished: PUBLISHED, dateModified: MODIFIED,
    author: { '@type': 'Person', name: 'Sidhu Singh', url: `${DOMAIN}/about` },
    publisher: { '@type': 'Organization', name: 'KisanStatus.com', url: DOMAIN },
    mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
    inLanguage: 'hi-IN',
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: `${DOMAIN}/articles` },
      { '@type': 'ListItem', position: 3, name: 'Soil Health Card Complete Guide 2026', item: URL },
    ],
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Soil Health Card download kaise kare?',
        acceptedAnswer: { '@type': 'Answer', text: 'soilhealth.dac.gov.in par jao → Farmer Login → Registration number + password dalo → Download Card click karo → PDF save karo. Mobile se bhi kar sakte ho.' } },
      { '@type': 'Question', name: 'Soil Health Card number kaise nikale?',
        acceptedAnswer: { '@type': 'Answer', text: 'Registered mobile par SMS check karo ya portal par Forgot Card Number option use karo. Aadhaar ya registration ID se bhi recover kar sakte ho.' } },
      { '@type': 'Question', name: 'Soil Health Card kitne din me banta hai?',
        acceptedAnswer: { '@type': 'Answer', text: '2026 mein processing fast ho gayi hai — ab 15 dinon mein card taiyar ho jata hai. Pehle 30-45 din lagte the.' } },
      { '@type': 'Question', name: 'Soil Health Card free hai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Haan — bilkul free. Soil testing, card banwana, micronutrients testing — sab 2026 se free hai.' } },
      { '@type': 'Question', name: 'Soil Health Card kab update karna chahiye?',
        acceptedAnswer: { '@type': 'Answer', text: 'Har 2-3 saal baad update karna chahiye. Mitti ki condition badalti rehti hai, isliye regular testing zaroori hai.' } },
    ],
  },
];

const RELATED = [
  { slug: 'pm-kisan-23vi-kist-2026-status-check', title: '23vi Kist Status Check', emoji: '📅' },
  { slug: 'nano-dap-500ml-price-in-india-2026', title: 'Nano DAP Price Guide', emoji: '🌱' },
  { slug: 'pmfby-crop-insurance-2026', title: 'PMFBY Crop Insurance', emoji: '🛡️' },
  { slug: 'kisan-credit-card-online-apply-2026', title: 'KCC Loan Apply', emoji: '💳' },
  { slug: 'agristack-kya-hai', title: 'AgriStack Farmer ID', emoji: '🌐' },
  { slug: 'pm-kisan-registration-online-2026', title: 'New Registration', emoji: '📝' },
];

export default function SoilHealthCardCompleteGuide2026() {
  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      {/* Header */}
      <div className="bg-primary-600 py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/articles" className="hover:text-white">Articles</Link><span>/</span>
            <span className="text-white">Soil Health Card Guide 2026</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">🌱 Farming Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Soil Health Card Complete Guide 2026 — Download, Status Check, PDF & Registration
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">Sidhu Singh</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>⏱️ 15 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-green-100 shadow-md">
          <img
            src="/images/soil-health-card-complete-guide-2026.webp"
            alt="Soil Health Card 2026 — Download, Status Check, Registration Complete Guide"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy" width="1200" height="630"
          />
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">Soil Health Card 2026 — Free Download, Status Check & Registration Guide</p>
        </div>

        {/* Real Story Hook */}
        <div className="my-6 p-5 bg-red-50 border-2 border-red-400 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-red-800 mb-2">🚨 Bina Soil Health Card Ke Fertilizer Dalna = Paisa Barbaad</h2>
          <p className="text-sm text-red-900 leading-relaxed mb-2">
            Haryana ke ek kisan Suresh ji ne bataya — wo har saal 5-6 borri urea apne 5 acre field mein dal dete the. Soil Health Card aane ke baad pata chala ki nitrogen to theek hai, lekin phosphorus kam hai.
          </p>
          <p className="text-sm text-red-900 leading-relaxed">
            Recommendation ke according fertilizer change kiya — <strong>₹8,000 bachat + 15% zyada production!</strong> Tum bhi andaze se fertilizer mat dalo — pehle card banwao.
          </p>
        </div>

        {/* What is Soil Health Card */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Soil Health Card Kya Hai?
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Simple shabdon mein — <strong>Soil Health Card aapki mitti ka Medical Report Card hai.</strong> Jaise hum apni health check karate hain, waise hi mitti ki health check karne ka scientific tarika hai.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
            <h3 className="font-black text-green-800 text-sm mb-2">Card Mein Kya Hota Hai:</h3>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>✓ Mitti ka pH value (khatta ya khara)</li>
              <li>✓ Nitrogen (N), Phosphorus (P), Potassium (K) ki matra</li>
              <li>✓ Organic Carbon</li>
              <li>✓ Micronutrients (Zinc, Iron, Copper, etc.)</li>
              <li>✓ Fasal ke anusar fertilizer recommendation</li>
            </ul>
          </div>
          <IB>
            <strong>✅ 2026 Update:</strong> Ab micronutrients testing bhi <strong>bilkul free</strong> hai. Pehle alag charge lagta tha. Processing time 15 din ho gaya hai.
          </IB>
        </section>

        {/* Why Important */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Soil Health Card Kyu Zaroori Hai?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
              <span className="text-3xl block mb-2">💰</span>
              <p className="font-black text-green-800 text-sm">Paisa Bachao</p>
              <p className="text-[11px] text-gray-600 mt-1">₹2000-5000/acre bachat</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
              <span className="text-3xl block mb-2">📈</span>
              <p className="font-black text-blue-800 text-sm">Paidawar Badhao</p>
              <p className="text-[11px] text-gray-600 mt-1">15-20% zyada production</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
              <span className="text-3xl block mb-2">🌱</span>
              <p className="font-black text-yellow-800 text-sm">Mitti Bachao</p>
              <p className="text-[11px] text-gray-600 mt-1">Long-term fertility</p>
            </div>
          </div>
          <WB>
            <strong>⚠️ Dhyan Dein:</strong> Bina Soil Health Card ke fertilizer dalna andhere mein teer chalane jaisa hai. Galat matra se mitti kharab hoti hai aur paisa barbaad hota hai.
          </WB>
        </section>

        {/* Registration Process */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Soil Health Card Registration Kaise Kare?
          </h2>

          <div className="mb-4 p-4 bg-blue-50 border-2 border-blue-400 rounded-xl">
            <h3 className="font-black text-blue-800 text-sm mb-2">Method 1: CSC Center Se (Offline)</h3>
            <StepList>
              <SI n={1}>Nazdiki CSC center ya agriculture office jao</SI>
              <SI n={2}>Soil Health Card registration form bhari — naam, mobile, Aadhaar, khasra number</SI>
              <SI n={3}>Documents do — Aadhaar card, land records (Khasra/Khatauni), photo</SI>
              <SI n={4}>Soil sample do — ya agriculture expert field se lega</SI>
              <SI n={5}><strong>Registration Number</strong> milega — sambhal kar rakho</SI>
            </StepList>
          </div>

          <div className="p-4 bg-green-50 border-2 border-green-500 rounded-xl">
            <h3 className="font-black text-green-800 text-sm mb-2">Method 2: Online (Ghar Baithe)</h3>
            <StepList>
              <SI n={1}><strong>soilhealth.dac.gov.in</strong> par jao</SI>
              <SI n={2}>"New Farmer Registration" par click karo</SI>
              <SI n={3}>Apna state select karo</SI>
              <SI n={4}>Form bhari + documents upload karo</SI>
              <SI n={5}>Nearest soil testing center select karo</SI>
              <SI n={6}>Submit karo — registration number note karo</SI>
            </StepList>
          </div>

          <IB>
            <strong>💡 Tip:</strong> Registration ke waqt mobile number sahi dalo — OTP aur updates usi par aayenge. Galat number dala to baad mein card number recover karna mushkil hoga.
          </IB>
        </section>

        {/* Status Check */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Soil Health Card Status Check Online
          </h2>
          <StepList>
            <SI n={1}><strong>soilhealth.dac.gov.in</strong> kholo</SI>
            <SI n={2}>"Track Application Status" par click karo</SI>
            <SI n={3}>Registration number ya mobile number dalo</SI>
            <SI n={4}>OTP verify karo</SI>
            <SI n={5}>Status dikh jayega — Application Received / Under Process / Card Ready</SI>
          </StepList>

          <div className="overflow-x-auto my-4 rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Matlab</th>
                  <th className="p-3 text-left">Kya Karein</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Application Received ⏳', 'Form receive ho gaya', 'Wait karo — processing shuru hogi'],
                  ['Under Verification 🔍', 'Documents check ho rahe hain', '2-3 din wait karo'],
                  ['Sample Testing 🧪', 'Lab mein mitti test ho rahi hai', '7-10 din wait karo'],
                  ['Card Generated ✅', 'Card taiyar hai!', 'Login karke PDF download karo'],
                ].map(([msg, matlab, karo], i) => (
                  <tr key={msg} className={i % 2 === 0 ? 'bg-white' : 'bg-green-50/50'}>
                    <td className="p-3 border-b font-medium text-xs">{msg}</td>
                    <td className="p-3 border-b text-xs text-gray-700">{matlab}</td>
                    <td className="p-3 border-b text-xs text-green-700 font-medium">{karo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* PDF Download */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Soil Health Card PDF Download Kaise Kare?
          </h2>
          <StepList>
            <SI n={1}><strong>soilhealth.dac.gov.in</strong> par jao</SI>
            <SI n={2}>"Farmer Login" par click karo — registration number + password dalo</SI>
            <SI n={3}>Dashboard par <strong>"My Soil Health Card"</strong> dikhega</SI>
            <SI n={4}><strong>"Download Card"</strong> ya "View Card" click karo</SI>
            <SI n={5}>PDF open hogi — save karo + print nikalo</SI>
          </StepList>
          <IB>
            <strong>📱 Mobile Se:</strong> Browser mein soilhealth.dac.gov.in kholo → login karo → Download PDF click karo. WhatsApp par bhi share kar sakte ho.
          </IB>
          <WB>
            <strong>⚠️ PDF Download Nahi Ho Rahi?</strong> Pop-up blocker disable karo. Browser change karo (Chrome try karo). Phir bhi na ho to CSC center se print nikalwao.
          </WB>
        </section>

        {/* Card Number Recovery */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Soil Health Card Number Bhool Gaye? Kaise Nikalein
          </h2>
          <div className="space-y-3">
            {[
              { method: 'SMS Check Karo', detail: 'Registered mobile par search karo — "SHC-2026-XXXXXX" format mein SMS aaya hoga' },
              { method: 'Portal Par "Forgot Card Number"', detail: 'soilhealth.dac.gov.in → Forgot Card Number → Mobile/Aadhaar dalo → OTP verify → Number mil jayega' },
              { method: 'Registration Receipt Check Karo', detail: 'Jab register kiya tha tab jo receipt mili thi usme application number likha hai' },
              { method: 'CSC Center Se Puchho', detail: 'Aadhaar lekar nazdiki CSC jao — record check karke number bata denge' },
            ].map(({ method, detail }) => (
              <div key={method} className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="font-black text-green-800 text-sm mb-1">🔑 {method}</p>
                <p className="text-xs text-gray-600">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Problems */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Common Problems — Real Solutions
          </h2>
          <div className="space-y-3">
            {[
              { err: 'Website Open Nahi Ho Rahi', fix: 'Browser change karo (Chrome/Firefox). Cache clear karo. Mobile data try karo. Server down ho sakta hai — subah 6-8 AM try karo.' },
              { err: 'OTP Nahi Aa Raha', fix: 'Network check karo. SMS inbox full to nahi? Spam folder check karo. 5 min wait karke resend karo. Phir bhi na aaye to CSC se mobile update karwao.' },
              { err: '"Data Not Found" Aa Raha Hai', fix: 'Registration number sahi enter karo. State portal sahi select karo. Ho sakta hai data abhi upload na hua ho — kuch din baad try karo.' },
              { err: 'Password Bhool Gaye', fix: '"Forgot Password" link use karo → Registered mobile dalo → OTP se naya password set karo.' },
              { err: 'Card Mein Error Hai (Naam/Land Galat)', fix: 'Nazdiki agriculture office ya CSC jao → Correction request submit karo → Sahi documents dikhao → 7-10 din mein fix hoga.' },
            ].map(({ err, fix }) => (
              <div key={err} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-red-50 border-b border-red-100 px-4 py-2.5">
                  <p className="font-black text-red-800 text-sm">❌ {err}</p>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2 bg-green-50 rounded-lg p-3">
                    <span className="text-green-600 font-black text-xs shrink-0">✅ FIX:</span>
                    <p className="text-xs text-green-800 leading-relaxed">{fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2026 Updates */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            2026 Mein Kya Naya Hai?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: '📱', tip: 'DigiLocker Integration', detail: 'Ab card DigiLocker mein bhi milega — kahin bhi access karo' },
              { icon: '🤖', tip: 'AI-Based Recommendations', detail: 'Personalized fertilizer advice — tumhari specific mitti ke liye' },
              { icon: '⚡', tip: '15 Din Mein Card', detail: 'Processing fast — pehle 45 din lagte the, ab sirf 15' },
              { icon: '💬', tip: 'WhatsApp Service', detail: 'Registered number par PDF directly WhatsApp par milegi' },
              { icon: '🆓', tip: 'Micronutrients Free', detail: 'Zinc, Iron, Copper testing ab bilkul free' },
              { icon: '🔗', tip: 'PM Kisan + KCC Link', detail: 'Card holders ko loan aur schemes mein extra benefits' },
            ].map(({ icon, tip, detail }) => (
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
            Aksar Puche Jane Wale Sawal
          </h2>
          <SvgFAQ caption="Soil Health Card FAQ 2026 — Farmers Ke Real Sawaal" />
          <div className="space-y-3 mt-4">
            {[
              { q: 'Soil Health Card banwane mein kitna paisa lagta hai?', a: 'Bilkul free! Soil testing, card banwana, micronutrients testing — sab government free karti hai. Koi charge maange to 1800-180-1551 par complaint karo.' },
              { q: 'Card kitne din mein banta hai?', a: '2026 mein processing fast ho gayi hai — ab 15 dinon mein card taiyar ho jata hai. Sample dene ke baad SMS aayega jab card ready ho.' },
              { q: 'Kab update karna chahiye?', a: 'Har 2-3 saal baad. Mitti ki condition badalti rehti hai. Agar fasl pattern change karo (jaise gehu se chawal) to turant update karo.' },
              { q: 'Tenant farmer (batai dar) banwa sakte hain?', a: 'Haan! Lease agreement ya land possession proof dikhao. Land owner hone ki zaroorat nahi — jo kheti karta hai woh eligible hai.' },
              { q: 'Card kho jaye to kya karein?', a: 'Ghabrao mat! Portal par login karke dobara PDF download karo. Ya CSC center se duplicate nikalwao. DigiLocker mein bhi save rahta hai.' },
            ].map(({ q, a }) => (
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

        {/* Helpline */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200 p-5 mb-8">
          <h3 className="font-black text-[#14532d] mb-3 text-base">📞 Soil Health Card Helpline</h3>
          <div className="text-sm text-gray-800 space-y-1">
            <p>📞 National Helpline: <a href="tel:18001801551" className="font-bold text-[#14532d] hover:underline">1800-180-1551</a></p>
            <p>📧 Email: <a href="mailto:soilhealth-dac@nic.in" className="font-bold text-[#14532d] hover:underline">soilhealth-dac@nic.in</a></p>
            <p>🌐 Website: <a href="https://soilhealth.dac.gov.in" target="_blank" rel="noopener noreferrer" className="font-bold text-[#14532d] hover:underline">soilhealth.dac.gov.in ↗</a></p>
          </div>
        </div>

        <GovLink
          href="https://soilhealth.dac.gov.in"
          label="Soil Health Card — Official Portal"
          guide="Abhi Card Download Karo"
          guideHref="/articles/nano-dap-500ml-price-in-india-2026"
        />

        <CalcBanner />
        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav />
        <Disclaimer />
      </div>
    </>
  );
}