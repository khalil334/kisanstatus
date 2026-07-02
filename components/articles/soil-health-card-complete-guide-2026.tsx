'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SvgFAQ } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-06-27T08:00:00+05:30';
const MODIFIED  = '2026-06-27T08:00:00+05:30';
const DOMAIN = 'https://kisanstatus.com';
const URL    = `${DOMAIN}/articles/soil-health-card-complete-guide-2026`;

const schemas = [
  {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Mitti Health Report Card Complete Guide 2026 — Download, Verification, PDF & Enrollment',
    description: 'Soil testing card complete guide 2026 — download kaise kare, verification check online, PDF download, enrollment process, card number kaise nikale, mobile se check kare.',
    image: `${DOMAIN}/images/soil-health-card-complete-guide-2026.webp`,
    datePublished: PUBLISHED, dateModified: MODIFIED,
    author: { '@type': 'Organization', name: 'KisanStatus Team', url: `${DOMAIN}/about` },
    publisher: { '@type': 'Organization', name: 'KisanStatus.com', url: DOMAIN },
    mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
    inLanguage: 'hi-IN',
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: `${DOMAIN}/articles` },
      { '@type': 'ListItem', position: 3, name: 'Soil Testing Card Guide 2026', item: URL },
    ],
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Mitti health report download kaise kare?',
        acceptedAnswer: { '@type': 'Answer', text: 'soilhealth.dac.gov.in par jao → Cultivator Login → Enrollment number + password dalo → Download Report click karo → PDF save karo. Mobile se bhi kar sakte ho.' } },
      { '@type': 'Question', name: 'Soil testing card number kaise nikale?',
        acceptedAnswer: { '@type': 'Answer', text: 'Registered mobile par SMS check karo ya portal par Forgot Card Number option use karo. UID ya enrollment ID se bhi recover kar sakte ho.' } },
      { '@type': 'Question', name: 'Mitti analysis report kitne din me banta hai?',
        acceptedAnswer: { '@type': 'Answer', text: '2026 mein processing fast ho gayi hai — ab 15 dinon mein report taiyar ho jata hai. Pehle 30-45 din lagte the.' } },
      { '@type': 'Question', name: 'Soil testing free hai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Haan — bilkul free. Soil testing, report banwana, micronutrients testing — sab 2026 se free hai.' } },
      { '@type': 'Question', name: 'Mitti health report kab update karna chahiye?',
        acceptedAnswer: { '@type': 'Answer', text: 'Har 2-3 saal baad update karna chahiye. Mitti ki condition badalti rehti hai, isliye regular testing zaroori hai.' } },
    ],
  },
];

const RELATED = [
  { slug: 'pm-kisan-23vi-kist-2026-status-check', title: '23vi Tranche Verification', emoji: '📅' },
  { slug: 'nano-dap-500ml-price-in-india-2026', title: 'Liquid DAP Price Guide', emoji: '🌱' },
  { slug: 'pmfby-crop-insurance-2026', title: 'PMFBY Crop Insurance', emoji: '🛡️' },
  { slug: 'kisan-credit-card-online-apply-2026', title: 'KCC Loan Apply', emoji: '💳' },
  { slug: 'agristack-kya-hai', title: 'AgriStack Cultivator ID', emoji: '🌐' },
  { slug: 'pm-kisan-registration-online-2026', title: 'New Enrollment', emoji: '📝' },
];

const STATUS_TABLE = [
  ['Application Received ⏳', 'Form receive ho gaya', 'Wait karo — processing shuru hogi'],
  ['Under Verification 🔍', 'Documents check ho rahe hain', '2-3 din wait karo'],
  ['Sample Testing 🧪', 'Lab mein mitti test ho rahi hai', '7-10 din wait karo'],
  ['Report Generated ✅', 'Report taiyar hai!', 'Login karke PDF download karo'],
];

const RECOVERY_METHODS = [
  { method: 'SMS Check Karo', detail: 'Registered mobile par search karo — "SHC-2026-XXXXXX" format mein SMS aaya hoga' },
  { method: 'Portal Par "Forgot Card Number"', detail: 'soilhealth.dac.gov.in → Forgot Card Number → Mobile/UID dalo → OTP verify → Number mil jayega' },
  { method: 'Enrollment Receipt Check Karo', detail: 'Jab register kiya tha tab jo receipt mili thi usme application number likha hai' },
  { method: 'CSC Center Se Puchho', detail: 'UID lekar nazdiki CSC jao — record check karke number bata denge' },
];

const COMMON_ISSUES = [
  { err: 'Website Open Nahi Ho Rahi', fix: 'Browser change karo (Chrome/Firefox). Cache clear karo. Mobile data try karo. Server down ho sakta hai — subah 6-8 AM try karo.' },
  { err: 'OTP Nahi Aa Raha', fix: 'Network check karo. SMS inbox full to nahi? Spam folder check karo. 5 min wait karke resend karo. Phir bhi na aaye to CSC se mobile update karwao.' },
  { err: '"Data Not Found" Aa Raha Hai', fix: 'Enrollment number sahi enter karo. State portal sahi select karo. Ho sakta hai data abhi upload na hua ho — kuch din baad try karo.' },
  { err: 'Password Bhool Gaye', fix: '"Forgot Password" link use karo → Registered mobile dalo → OTP se naya password set karo.' },
  { err: 'Report Mein Error Hai (Naam/Land Galat)', fix: 'Nazdiki agriculture office ya CSC jao → Correction request submit karo → Sahi documents dikhao → 7-10 din mein fix hoga.' },
];

const UPDATES_2026 = [
  { icon: '📱', tip: 'DigiLocker Integration', detail: 'Ab report DigiLocker mein bhi milega — kahin bhi access karo' },
  { icon: '🤖', tip: 'AI-Based Recommendations', detail: 'Personalized fertilizer advice — tumhari specific mitti ke liye' },
  { icon: '⚡', tip: '15 Din Mein Report', detail: 'Processing fast — pehle 45 din lagte the, ab sirf 15' },
  { icon: '💬', tip: 'WhatsApp Service', detail: 'Registered number par PDF directly WhatsApp par milegi' },
  { icon: '🆓', tip: 'Micronutrients Free', detail: 'Zinc, Iron, Copper testing ab bilkul free' },
  { icon: '🔗', tip: 'Scheme + KCC Link', detail: 'Report holders ko loan aur schemes mein extra benefits' },
];

const FAQS = [
  { q: 'Mitti health report banwane mein kitna paisa lagta hai?', a: 'Bilkul free! Soil testing, report banwana, micronutrients testing — sab government free karti hai. Koi charge maange to 1800-180-1551 par complaint karo.' },
  { q: 'Report kitne din mein banta hai?', a: '2026 mein processing fast ho gayi hai — ab 15 dinon mein report taiyar ho jata hai. Sample dene ke baad SMS aayega jab report ready ho.' },
  { q: 'Kab update karna chahiye?', a: 'Har 2-3 saal baad. Mitti ki condition badalti rehti hai. Agar fasal pattern change karo (jaise gehu se chawal) to turant update karo.' },
  { q: 'Tenant cultivator (batai dar) banwa sakte hain?', a: 'Haan! Lease agreement ya land possession proof dikhao. Land owner hone ki zaroorat nahi — jo kheti karta hai woh eligible hai.' },
  { q: 'Report kho jaye to kya karein?', a: 'Ghabrao mat! Portal par login karke dobara PDF download karo. Ya CSC center se duplicate nikalwao. DigiLocker mein bhi save rahta hai.' },
];

export default function SoilHealthCardCompleteGuide2026() {
  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link><span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link><span>/</span>
            <span className="text-white font-bold">Soil Testing Guide 2026</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">🌱 Farming Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Mitti Health Report Card Complete Guide 2026 — Download, Verification, PDF & Enrollment
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>⏱️ 15 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/soil-health-card-complete-guide-2026.webp"
            alt="Soil testing report 2026 — Download, Verification, Enrollment Complete Guide"
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
            style={{ maxHeight: '420px' }}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">Soil Testing Report 2026 — Free Download, Verification Check & Enrollment Guide</p>
        </div>

        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-800 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-red-800 dark:text-red-300 mb-2">🚨 Bina Soil Analysis Ke Fertilizer Dalna = Paisa Barbaad</h2>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed mb-2">
            Haryana ke ek cultivator Suresh ji ne bataya — wo har saal 5-6 borri urea apne 5 acre field mein dal dete the. Mitti analysis report aane ke baad pata chala ki nitrogen to theek hai, lekin phosphorus kam hai.
          </p>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed">
            Recommendation ke according fertilizer change kiya — <strong>₹8,000 bachat + 15% zyada production!</strong> Tum bhi andaze se fertilizer mat dalo — pehle report banwao.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Mitti Analysis Report Kya Hai?
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Simple shabdon mein — <strong>Soil testing report aapki mitti ka Medical Report Card hai.</strong> Jaise hum apni health check karate hain, waise hi mitti ki health check karne ka scientific tarika hai.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-4">
            <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Report Mein Kya Hota Hai:</h3>
            <ul className="space-y-1 text-xs text-[var(--color-text-muted)]">
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

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Soil Testing Report Kyu Zaroori Hai?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 text-center">
              <span className="text-3xl block mb-2">💰</span>
              <p className="font-black text-green-800 dark:text-green-300 text-sm">Paisa Bachao</p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-1">₹2000-5000/acre bachat</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-center">
              <span className="text-3xl block mb-2">📈</span>
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm">Paidawar Badhao</p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-1">15-20% zyada production</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 text-center">
              <span className="text-3xl block mb-2">🌱</span>
              <p className="font-black text-yellow-800 dark:text-yellow-300 text-sm">Mitti Bachao</p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-1">Long-term fertility</p>
            </div>
          </div>
          <WB>
            <strong>⚠️ Dhyan Dein:</strong> Bina soil analysis ke fertilizer dalna andhere mein teer chalane jaisa hai. Galat matra se mitti kharab hoti hai aur paisa barbaad hota hai.
          </WB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Soil Testing Enrollment Kaise Kare?
          </h2>

          <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-700 rounded-xl">
            <h3 className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">Method 1: CSC Center Se (Offline)</h3>
            <StepList>
              <SI n={1}>Nazdiki CSC center ya agriculture office jao</SI>
              <SI n={2}>Soil testing enrollment form bhari — naam, mobile, UID, khasra number</SI>
              <SI n={3}>Documents do — UID card, land records (Khasra/Khatauni), photo</SI>
              <SI n={4}>Soil sample do — ya agriculture expert field se lega</SI>
              <SI n={5}><strong>Enrollment Number</strong> milega — sambhal kar rakho</SI>
            </StepList>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
            <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Method 2: Online (Ghar Baithe)</h3>
            <StepList>
              <SI n={1}><strong>soilhealth.dac.gov.in</strong> par jao</SI>
              <SI n={2}>"New Cultivator Enrollment" par click karo</SI>
              <SI n={3}>Apna state select karo</SI>
              <SI n={4}>Form bhari + documents upload karo</SI>
              <SI n={5}>Nearest soil testing center select karo</SI>
              <SI n={6}>Submit karo — enrollment number note karo</SI>
            </StepList>
          </div>

          <IB>
            <strong>💡 Tip:</strong> Enrollment ke waqt mobile number sahi dalo — OTP aur updates usi par aayenge. Galat number dala to baad mein report number recover karna mushkil hoga.
          </IB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Soil Testing Verification Check Online
          </h2>
          <StepList>
            <SI n={1}><strong>soilhealth.dac.gov.in</strong> kholo</SI>
            <SI n={2}>"Track Application Status" par click karo</SI>
            <SI n={3}>Enrollment number ya mobile number dalo</SI>
            <SI n={4}>OTP verify karo</SI>
            <SI n={5}>Verification dikh jayega — Application Received / Under Process / Report Ready</SI>
          </StepList>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Verification</th>
                  <th className="p-3 text-left">Matlab</th>
                  <th className="p-3 text-left">Kya Karein</th>
                </tr>
              </thead>
              <tbody>
                {STATUS_TABLE.map(([msg, matlab, karo], i) => (
                  <tr key={msg} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{msg}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{matlab}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-medium">{karo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Soil Testing Report PDF Download Kaise Kare?
          </h2>
          <StepList>
            <SI n={1}><strong>soilhealth.dac.gov.in</strong> par jao</SI>
            <SI n={2}>"Cultivator Login" par click karo — enrollment number + password dalo</SI>
            <SI n={3}>Dashboard par <strong>"My Soil Analysis Report"</strong> dikhega</SI>
            <SI n={4}><strong>"Download Report"</strong> ya "View Report" click karo</SI>
            <SI n={5}>PDF open hogi — save karo + print nikalo</SI>
          </StepList>
          <IB>
            <strong>📱 Mobile Se:</strong> Browser mein soilhealth.dac.gov.in kholo → login karo → Download PDF click karo. WhatsApp par bhi share kar sakte ho.
          </IB>
          <WB>
            <strong>⚠️ PDF Download Nahi Ho Rahi?</strong> Pop-up blocker disable karo. Browser change karo (Chrome try karo). Phir bhi na ho to CSC center se print nikalwao.
          </WB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Soil Testing Report Number Bhool Gaye? Kaise Nikalein
          </h2>
          <div className="space-y-3">
            {RECOVERY_METHODS.map(({ method, detail }) => (
              <div key={method} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-green-800 dark:text-green-300 text-sm mb-1">🔑 {method}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Common Issues — Real Solutions
          </h2>
          <div className="space-y-3">
            {COMMON_ISSUES.map(({ err, fix }) => (
              <div key={err} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
                <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5">
                  <p className="font-black text-red-800 dark:text-red-300 text-sm">❌ {err}</p>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0">✅ FIX:</span>
                    <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">{fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            2026 Mein Kya Naya Hai?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {UPDATES_2026.map(({ icon, tip, detail }) => (
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

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <SvgFAQ caption="Soil Testing Report FAQ 2026 — Cultivators Ke Real Sawaal" />
          <div className="space-y-3 mt-4">
            {FAQS.map(({ q, a }) => (
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

        <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/10 rounded-2xl border border-green-200 dark:border-green-800 p-5 mb-8">
          <h3 className="font-black text-[var(--color-text)] mb-3 text-base">📞 Soil Testing Helpline</h3>
          <div className="text-sm text-[var(--color-text-muted)] space-y-1">
            <p>📞 National Helpline: <a href="tel:18001801551" className="font-bold text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">1800-180-1551</a></p>
            <p>📧 Email: <a href="mailto:soilhealth-dac@nic.in" className="font-bold text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">soilhealth-dac@nic.in</a></p>
            <p>🌐 Website: <a href="https://soilhealth.dac.gov.in" target="_blank" rel="noopener noreferrer" className="font-bold text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">soilhealth.dac.gov.in ↗</a></p>
          </div>
        </div>

        <GovLink
          href="https://soilhealth.dac.gov.in"
          label="Soil Testing Report — Official Portal"
          guide="Abhi Report Download Karo"
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