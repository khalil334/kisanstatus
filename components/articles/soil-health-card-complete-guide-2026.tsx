'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SvgFAQ } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-06-27T08:00:00+05:30';
const MODIFIED  = '2026-07-02T18:30:00+05:30';
const DOMAIN = 'https://kisanstatus.com';
const URL    = `${DOMAIN}/articles/soil-health-card-complete-guide-2026`;

const schemas = [
  {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Mitti Swasthya Parcha 2026 — Complete Registration Guide with Official Process',
    description: 'Mitti Swasthya Parcha 2026 — Registration process, required documents, status check, PDF download, aur common problems ka solution. Official portal ke mutabik jaankari.',
    image: `${DOMAIN}/images/articles/soil-health-card-complete-guide-2026/hero.webp`,
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
      { '@type': 'ListItem', position: 3, name: 'Mitti Swasthya Parcha Guide', item: URL },
    ],
  },
];

const RELATED = [
  { slug: 'pm-kisan-23vi-kist-2026-status-check', title: '23vi Kist Status', emoji: '📅' },
  { slug: 'nano-dap-500ml-price-in-india-2026', title: 'Nano DAP Price', emoji: '🌱' },
  { slug: 'pmfby-crop-insurance-2026', title: 'PMFBY Insurance', emoji: '🛡️' },
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
            <span className="text-white font-bold">Mitti Swasthya Parcha Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">📋 Official Process Guide — 2026</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Mitti Swasthya Parcha 2026 — Registration Se lekar PDF Download Tak Ka Complete Guide
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated {fmtDate(MODIFIED)}</span>
            <span>⏱️ 15 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* IMAGE 1: Hero */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/soil-health-card-complete-guide-2026/hero.webp"
            alt="Mitti Swasthya Parcha registration process — CSC centre par form bharte hue kisan"
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
            style={{ maxHeight: '400px' }}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            📸 Mitti Swasthya Parcha — CSC centre ya online portal ke zariye registration ka process
          </p>
        </div>

        {/* OPENING */}
        <section className="mb-8">
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Mitti ki jaanch karwana aaj ke kheti ke liye zaroori ho gaya hai. Kai saalon se ek hi tarah ki fasal ugane se, ya galat matra mein khaad dalne se zameen ki quality gir jaati hai. Is problem ko samajhte hue Bharat sarkar ne 2015 mein Mitti Swasthya Parcha Yojana shuru ki thi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Is yojana ke tahat har kisan apni zameen ki mitti ka test karwa sakta hai — bilkul muft ya bahut kam kharch mein. Test ke baad jo report milti hai, usme likha hota hai ki aapki mitti mein kaunse nutrients hain, kaunse kam hain, aur kaunsi fasal ke liye kitni khaad dalni chahiye.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Is guide mein hum aapko registration se lekar PDF download tak ka poora process batayenge — official portal ke mutabik. Saath hi common problems aur unke solutions bhi.
          </p>
        </section>

        {/* WHAT IS SOIL HEALTH CARD */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Mitti Swasthya Parcha Kya Hai?
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ye ek report card hai jo aapki zameen ki health batata hai. Jaise doctor aapke blood test ke baad report deta hai, waise hi krishi vibhag mitti ka test karke report deta hai. Is report mein 12 parameters check kiye jaate hain.
          </p>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-4">
            <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Report Mein Ye Cheezein Hoti Hain:</h3>
            <ul className="space-y-1 text-xs text-[var(--color-text-muted)]">
              <li>✓ pH maan — mitti khatti hai ya khari</li>
              <li>✓ Nitrogen (N), Phosphorus (P), Potassium (K) ki matra</li>
              <li>✓ Organic Carbon — zameen ki urvarakta</li>
              <li>✓ Sukshma poshak tatva — Zinc, Iron, Copper, Manganese, Boron</li>
              <li>✓ Fasal ke anusar khaad ki salah</li>
              <li>✓ Mitti ka prakar — balui, domat, chikni mitti</li>
            </ul>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Official portal ke mutabik, ye report 2-3 saal tak valid rehti hai. Uske baad dobara test karwana chahiye kyunki mitti ki composition samay ke saath badal jaati hai.
          </p>
        </section>

        {/* WHY IMPORTANT */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Test Karwana Kyun Zaroori Hai?
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bahut se kisan saalon se ek hi tarah ki khaad daal rahe hain — bina ye jaane ki unki mitti ko actually kya chahiye. Iska nuksan ye hota hai:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-center">
              <span className="text-3xl block mb-2">💸</span>
              <p className="font-black text-red-800 dark:text-red-300 text-sm">Faltu Kharch</p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-1">Jis nutrient ki zaroorat nahi, us par paisa barbaad</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 text-center">
              <span className="text-3xl block mb-2">📉</span>
              <p className="font-black text-yellow-800 dark:text-yellow-300 text-sm">Kam Utpadan</p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-1">Galat khaad se fasal ki quality gir sakti hai</p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4 text-center">
              <span className="text-3xl block mb-2">🌱</span>
              <p className="font-black text-orange-800 dark:text-orange-300 text-sm">Mitti Kharab</p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-1">Lambi avadhi mein zameen banjar ho sakti hai</p>
            </div>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Krishi Vigyan Kendra (KVK) ke scientists ke mutabik, Bharat ki kaafi zameenon mein zinc ki kami hai. Kai ilaqon mein phosphorus bahut kam hai, aur kuch jagah nitrogen zaroorat se zyada ho gaya hai. Ye sab bina test kiye pata nahi chalta.
          </p>

          <IB>
            <strong>💡 Practical Tip:</strong> Agar aapne pichhle 3 saal se mitti test nahi karwayi, to ek baar zaroor karwayein. Khaas kar agar monsoon mein bahut zyada barish hui ho, ya aapne fasal ka pattern badla ho.
          </IB>
        </section>

        {/* REGISTRATION PROCESS */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Registration Kaise Karein? (Dono Tarike)
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Official portal par do tarike diye gaye hain — offline CSC centre ke zariye, ya online ghar baithe. Dono tarike valid hain aur dono se same report milti hai.
          </p>

          <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-700 rounded-xl">
            <h3 className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">Tarika 1: CSC Centre Se (Offline)</h3>
            <StepList>
              <SI n={1}>Nazdiki Common Service Centre (CSC) ya Krishi Seva Kendra dhundhein</SI>
              <SI n={2}>Saath leke jaayein — Aadhaar card, mobile number, khasra/khatauni number</SI>
              <SI n={3}>Operator form bharega — aapki details verify karega</SI>
              <SI n={4}>Form submit hone par ek registration number milega — ise sambhal ke rakhein</SI>
              <SI n={5}>Mitti ka sample lene ka time fix hoga — ya to aap khud denge, ya krishi vibhag ka staff aayega</SI>
            </StepList>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
            <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Tarika 2: Online (Ghar Baithe)</h3>
            <StepList>
              <SI n={1}><strong>soilhealth.dac.gov.in</strong> par jaayein</SI>
              <SI n={2}>"Farmer Login" ya "New Registration" par click karein</SI>
              <SI n={3}>Apna state select karein — har state ka portal alag ho sakta hai</SI>
              <SI n={4}>Form bharein — personal details, land details, contact number</SI>
              <SI n={5}>Documents upload karein — Aadhaar, land records</SI>
              <SI n={6}>Submit karein — registration number note kar lein</SI>
            </StepList>
          </div>

          <WB>
            <strong>⚠️ Zaroori Baat:</strong> Jo mobile number aap denge, wahi active rakhna. Baad mein OTP, status updates, aur PDF link sab usi par aata hai. Number change ho gaya to CSC centre jaakar update karwana padega.
          </WB>
        </section>

        {/* REQUIRED DOCUMENTS */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Kaunse Documents Chahiye?
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Registration ke liye ye documents zaroori hain. Dhyan rahe ki documents clear aur readable hone chahiye:
          </p>

          <div className="overflow-x-auto mb-4 rounded-xl border border-[var(--color-border)]">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-2 text-left">Document</th>
                  <th className="p-2 text-left">Kyun Chahiye</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-2 border-b border-[var(--color-border)] font-medium">Aadhaar Card</td>
                  <td className="p-2 border-b border-[var(--color-border)]">Identity verification ke liye</td>
                </tr>
                <tr className="bg-[var(--color-bg-alt)]">
                  <td className="p-2 border-b border-[var(--color-border)] font-medium">Mobile Number</td>
                  <td className="p-2 border-b border-[var(--color-border)]">OTP aur updates ke liye — active hona chahiye</td>
                </tr>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-2 border-b border-[var(--color-border)] font-medium">Khasra/Khatauni Number</td>
                  <td className="p-2 border-b border-[var(--color-border)]">Zameen ki details verify karne ke liye</td>
                </tr>
                <tr className="bg-[var(--color-bg-alt)]">
                  <td className="p-2 border-b border-[var(--color-border)] font-medium">Land Records (7/12, Jamabandi)</td>
                  <td className="p-2 border-b border-[var(--color-border)]">Ownership proof — state ke hisaab se format alag</td>
                </tr>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-2 font-medium">Passport Size Photo</td>
                  <td className="p-2">Recent photo — kuch states mein mandatory</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Agar aap kirayedar kisan hain (batai par kheti karte hain), to aapko patta agreement ya land possession proof dikhana hoga. Zameen ka maalik hona zaroori nahi — jo kheti karta hai woh eligible hai.
          </p>
        </section>

        {/* STATUS TRACKING */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Status Kaise Check Karein?
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Registration ke baad aap portal par apna status check kar sakte hain. Official portal ke mutabik processing time state aur season ke hisaab se alag-alag ho sakta hai.
          </p>

          <StepList>
            <SI n={1}><strong>soilhealth.dac.gov.in</strong> kholo</SI>
            <SI n={2}>"Track Application Status" par click karein</SI>
            <SI n={3}>Registration number ya mobile number daalein</SI>
            <SI n={4}>OTP verify karein</SI>
            <SI n={5}>Status dikh jayega — Application Received / Sample Testing / Report Generated</SI>
          </StepList>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)]">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left">Matlab</th>
                  <th className="p-2 text-left">Kya Karein</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-2 border-b border-[var(--color-border)] font-medium">Application Received ⏳</td>
                  <td className="p-2 border-b border-[var(--color-border)]">Form prapt ho gaya</td>
                  <td className="p-2 border-b border-[var(--color-border)]">Intezaar karein — processing shuru hogi</td>
                </tr>
                <tr className="bg-[var(--color-bg-alt)]">
                  <td className="p-2 border-b border-[var(--color-border)] font-medium">Sample Under Testing 🔬</td>
                  <td className="p-2 border-b border-[var(--color-border)]">Lab mein test ho raha hai</td>
                  <td className="p-2 border-b border-[var(--color-border)]">7-10 din ka wait — normal hai</td>
                </tr>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-2 border-b border-[var(--color-border)] font-medium">Report Generated 📋</td>
                  <td className="p-2 border-b border-[var(--color-border)]">Test complete ho gaya</td>
                  <td className="p-2 border-b border-[var(--color-border)]">Download ka wait karein</td>
                </tr>
                <tr className="bg-[var(--color-bg-alt)]">
                  <td className="p-2 font-medium">Card Ready for Download ✅</td>
                  <td className="p-2">PDF taiyar hai</td>
                  <td className="p-2">Login karke download karein</td>
                </tr>
              </tbody>
            </table>
          </div>

          <IB>
            <strong>📌 Processing Time:</strong> Official portal 15 din ka time batata hai, lekin actual time state aur season par depend karta hai. Kuch states mein 10-12 din lagte hain, kuch mein 20-25 din. 30 din se zyada ho jaye to helpline par sampark karein.
          </IB>
        </section>

        {/* IMAGE 2: Dashboard */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/soil-health-card-complete-guide-2026/dashboard.webp"
            alt="Soil Health Card portal dashboard — Card Ready message aur Download PDF button"
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
            style={{ maxHeight: '400px' }}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            📸 Portal dashboard — jab card download ke liye taiyar ho jata hai
          </p>
        </div>

        {/* PDF DOWNLOAD */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            PDF Download Kaise Karein?
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Jab card ready ho jata hai, to portal par ek notification aata hai. Download process simple hai:
          </p>

          <StepList>
            <SI n={1}><strong>soilhealth.dac.gov.in</strong> par jaayein</SI>
            <SI n={2}>"Farmer Login" par click karein — registration number aur password daalein</SI>
            <SI n={3}>Dashboard par "Download Soil Health Card" button dikhega</SI>
            <SI n={4}>Click karein — new tab mein PDF khulegi</SI>
            <SI n={5}>PDF ko save kar lein ya print nikal lein</SI>
          </StepList>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ek baar download ho gayi to PDF aapke phone ya computer mein save ho jaati hai. Baad mein bhi portal par login karke dobara download kar sakte hain.
          </p>

          <WB>
            <strong>⚠️ PDF Open Nahi Ho Rahi?</strong> Browser mein pop-up blocker disable karein. Ya alag browser try karein (Chrome, Firefox). Mobile par PDF viewer app install karein. Phir bhi problem ho to CSC centre se print nikalwa lein.
          </WB>
        </section>

        {/* COMMON PROBLEMS */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Common Problems Aur Solutions
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Registration ya download ke dauran kai baar problems aa jaati hain. Ye kuch sabse common issues hain jo farmers face karte hain:
          </p>

          <div className="space-y-3">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
              <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5">
                <p className="font-black text-red-800 dark:text-red-300 text-sm">Problem 1: Naam Mein Spelling Galat</p>
              </div>
              <div className="p-4">
                <p className="text-xs text-[var(--color-text-muted)] mb-2">Card print hone par naam galat aa gaya — Aadhaar se match nahi kar raha.</p>
                <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0">✅ SOLUTION:</span>
                  <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">CSC centre jaayein, Aadhaar dikhayein, correction form bharein. Kuch din mein sahi card aa jayega. Correction ke liye koi extra charge nahi lagta.</p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
              <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5">
                <p className="font-black text-red-800 dark:text-red-300 text-sm">Problem 2: Website Khul Nahi Rahi</p>
              </div>
              <div className="p-4">
                <p className="text-xs text-[var(--color-text-muted)] mb-2">Portal open nahi ho raha ya bahut slow hai.</p>
                <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0">✅ SOLUTION:</span>
                  <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">Subah jaldi (6-8 AM) try karein — server load kam hota hai. Mobile data ki jagah WiFi use karein. Phir bhi nahi to CSC centre chale jaayein.</p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
              <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5">
                <p className="font-black text-red-800 dark:text-red-300 text-sm">Problem 3: OTP Nahi Aa Raha</p>
              </div>
              <div className="p-4">
                <p className="text-xs text-[var(--color-text-muted)] mb-2">OTP late aa raha hai ya bilkul nahi aa raha.</p>
                <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0">✅ SOLUTION:</span>
                  <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">Network coverage check karein. SMS inbox full to nahi? Spam folder bhi dekhein. 5 minute wait karke resend karein. Phir bhi nahi to CSC se mobile number update karwayein.</p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
              <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5">
                <p className="font-black text-red-800 dark:text-red-300 text-sm">Problem 4: Password Bhool Gaye</p>
              </div>
              <div className="p-4">
                <p className="text-xs text-[var(--color-text-muted)] mb-2">Login nahi ho raha — password yaad nahi.</p>
                <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0">✅ SOLUTION:</span>
                  <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">"Forgot Password" link par click karein. Registered mobile number daalein. OTP se naya password set karein. Password ko kahin likh ke rakhein.</p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
              <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5">
                <p className="font-black text-red-800 dark:text-red-300 text-sm">Problem 5: Card Kho Gaya</p>
              </div>
              <div className="p-4">
                <p className="text-xs text-[var(--color-text-muted)] mb-2">PDF delete ho gayi ya print kho gayi.</p>
                <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0">✅ SOLUTION:</span>
                  <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">Portal par login karke dobara download karein. Ya CSC centre se duplicate print nikalwa lein — ₹10-15 lagte hain.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW TO READ REPORT */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Report Ko Kaise Samjhein?
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Report milne ke baad use samajhna zaroori hai. Har parameter ka ek normal range hota hai — uske andar hona chahiye.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-4">
            <h3 className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">Important Parameters:</h3>
            <ul className="space-y-2 text-xs text-[var(--color-text-muted)]">
              <li><strong>pH:</strong> 6.0-7.5 normal hai. Isse kam ya zyada hone par fasal ki growth ruk sakti hai.</li>
              <li><strong>Nitrogen:</strong> Fasal ki growth ke liye zaroori. Kam hone par patte peele pad jaate hain.</li>
              <li><strong>Phosphorus:</strong> Jad aur phool ke liye. Kam hone par fasal der se pakta hai.</li>
              <li><strong>Potassium:</strong> Fasal ki quality aur bimari se ladne ki shamta. Zyada hona bhi nuksan deh hai.</li>
              <li><strong>Organic Carbon:</strong> Mitti ki urvarakta. 0.5% se zyada hona chahiye.</li>
              <li><strong>Zinc:</strong> Bahut si zameenon mein kami hoti hai. Chhoti matra mein zaroori hai.</li>
            </ul>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Report ke aakhri page par fasal-wise khaad ki salah likhi hoti hai — kitni urea, DAP, MOP, ya organic khaad dalni chahiye. Is salah ko follow karna chahiye — na kam, na zyada.
          </p>

          <IB>
            <strong>💡 Expert Advice:</strong> Report sirf nitrogen-phosphorus-potassium tak seemit mat rakhein. Micronutrients section bhi padhein — zinc, iron, copper — ye bhi utne hi zaroori hain. Agar samajh na aaye to nazdiki KVK ya krishi vibhag se salah lein.
          </IB>
        </section>

        {/* COST AND CHARGES */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Kitna Kharch Aata Hai?
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Official portal par test muft hai, lekin CSC centre apna service charge le sakta hai. Ye charge state aur centre ke hisaab se alag-alag ho sakta hai.
          </p>

          <div className="overflow-x-auto mb-4 rounded-xl border border-[var(--color-border)]">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-2 text-left">Service</th>
                  <th className="p-2 text-left">Approximate Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-2 border-b border-[var(--color-border)] font-medium">Soil Test (Official Portal)</td>
                  <td className="p-2 border-b border-[var(--color-border)]">Muft</td>
                </tr>
                <tr className="bg-[var(--color-bg-alt)]">
                  <td className="p-2 border-b border-[var(--color-border)] font-medium">CSC Service Charge</td>
                  <td className="p-2 border-b border-[var(--color-border)]">₹20-50 (state-wise alag)</td>
                </tr>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-2 border-b border-[var(--color-border)] font-medium">Sample Collection (agar staff aaye)</td>
                  <td className="p-2 border-b border-[var(--color-border)]">Muft ya nominal</td>
                </tr>
                <tr className="bg-[var(--color-bg-alt)]">
                  <td className="p-2 border-b border-[var(--color-border)] font-medium">Print/Photocopy</td>
                  <td className="p-2 border-b border-[var(--color-border)]">₹10-20</td>
                </tr>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-2 font-medium">Correction (naam galat hone par)</td>
                  <td className="p-2">Muft</td>
                </tr>
              </tbody>
            </table>
          </div>

          <WB>
            <strong>⚠️ Dhyan Dein:</strong> Agar koi ₹100 se zyada charge maange to wo galat hai. Aise mein helpline par complaint karein ya doosre CSC centre jaayein.
          </WB>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jaane Wale Sawaal
          </h2>
          <SvgFAQ caption="Mitti Swasthya Parcha — Common Questions" />
          <div className="space-y-3 mt-4">
            <details className="border border-[var(--color-border)] rounded-xl overflow-hidden group">
              <summary className="p-4 font-semibold text-[var(--color-text)] cursor-pointer bg-[var(--color-bg-alt)] hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                <span>Kitne time baad dobara test karwana chahiye?</span>
                <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="p-4 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]">
                Official recommendation har 2-3 saal mein test karwane ki hai. Agar monsoon mein bahut zyada barish hui ho, ya aapne fasal ka pattern badla ho (jaise gehun se chawal), to turant test karwa lein. Mitti ki chemical composition badal jaati hai — chahe aapko dikhe na.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl overflow-hidden group">
              <summary className="p-4 font-semibold text-[var(--color-text)] cursor-pointer bg-[var(--color-bg-alt)] hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                <span>Kirayedar kisan (batai dar) bhi test karwa sakte hain?</span>
                <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="p-4 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]">
                Haan, bilkul. Zameen ka maalik hona zaroori nahi. Aapke paas patta agreement ya land possession proof hona chahiye. Jo kheti karta hai woh eligible hai — chahe zameen uski ho ya kiraye ki.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl overflow-hidden group">
              <summary className="p-4 font-semibold text-[var(--color-text)] cursor-pointer bg-[var(--color-bg-alt)] hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                <span>Report mein likhi salah ko follow karna zaroori hai?</span>
                <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="p-4 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]">
                Salah follow karna strongly recommended hai, lekin zaroori nahi. Report ek guideline hai — aapki mitti ki specific condition ke hisaab se. Agar aapko samajh na aaye to nazdiki KVK ya krishi vibhag se consult karein. Woh aapke ilaqe aur fasal ke hisaab se aur detailed advice de sakte hain.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl overflow-hidden group">
              <summary className="p-4 font-semibold text-[var(--color-text)] cursor-pointer bg-[var(--color-bg-alt)] hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                <span>Agar 30 din se zyada ho gaye aur card nahi aaya?</span>
                <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="p-4 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]">
                Pehle portal par status check karein. Agar "Sample Under Testing" dikh raha hai to thoda aur wait karein. Agar koi update nahi to helpline par call karein ya CSC centre jaayein. Kabhi-kabhi sample lab tak nahi pahunchta ya technical issue hota hai.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl overflow-hidden group">
              <summary className="p-4 font-semibold text-[var(--color-text)] cursor-pointer bg-[var(--color-bg-alt)] hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                <span>Kya ye report kisi aur kaam aati hai?</span>
                <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="p-4 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]">
                Haan. KCC loan lete waqt, crop insurance claim karte waqt, ya organic certification ke liye ye report useful ho sakti hai. Kuch states mein fertilizer subsidy ke liye bhi ye document maanga ja sakta hai.
              </div>
            </details>
          </div>
        </section>

        {/* HELPLINE */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/10 rounded-2xl border border-green-200 dark:border-green-800 p-5 mb-8">
          <h3 className="font-black text-[var(--color-text)] mb-3 text-base">📞 Sahayata Ke Liye Sampark Karein</h3>
          <div className="text-sm text-[var(--color-text-muted)] space-y-2">
            <p>📞 <strong>Helpline:</strong> <a href="tel:18001801551" className="font-bold text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">1800-180-1551</a> — Toll-free, Mon-Sat, 9 AM - 6 PM</p>
            <p>📧 <strong>Email:</strong> <a href="mailto:soilhealth-dac@nic.in" className="font-bold text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">soilhealth-dac@nic.in</a> — 24-48 ghante mein jawab</p>
            <p>🌐 <strong>Website:</strong> <a href="https://soilhealth.dac.gov.in" target="_blank" rel="noopener noreferrer" className="font-bold text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">soilhealth.dac.gov.in</a></p>
            <p>🏢 <strong>Local Office:</strong> Apne district ka Krishi Vigyan Kendra (KVK) ya Agriculture Department office se bhi sampark kar sakte hain.</p>
          </div>
        </div>

        <GovLink
          href="https://soilhealth.dac.gov.in"
          label="Mitti Swasthya Parcha — Official Portal"
          guide="Registration Ke Liye Yahaan Click Karein"
          guideHref="/articles/pm-kisan-registration-online-2026"
        />

        <CalcBanner />
        <RelatedArticles articles={RELATED} />

        {/* IMPORTANT NOTE */}
        <div className="my-8 p-5 border-2 border-[var(--color-border)] rounded-2xl bg-[var(--color-bg-alt)]">
          <h3 className="font-black text-[var(--color-text)] mb-2">Zaroori Suchna</h3>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-2">
            Ye article official portal aur krishi vibhag ki jaankari par based hai. Lekin rules aur process state ke hisaab se thoda alag ho sakta hai. Apne local KVK ya agriculture office se confirm karna na bhoolen.
          </p>
          <p className="text-xs text-[var(--color-text-muted)] leading-relaxed italic">
            ⚠️ KisanStatus.com sarkari department ka hissa nahi hai. Hum sirf jaankari provide karte hain. Official process ke liye hamesha government portal ya authorized centre ka hi istemaal karein.
          </p>
        </div>

        <AuthorBox modified={MODIFIED} />
        <BottomNav />
        <Disclaimer />

        {/* FINAL CTA */}
        <div className="my-8 p-5 bg-green-100 dark:bg-green-900/30 border-2 border-green-400 dark:border-green-600 rounded-2xl text-center">
          <h3 className="font-black text-green-900 dark:text-green-200 text-lg mb-2">Kya Aapne Mitti Test Karwaya Hai?</h3>
          <p className="text-sm text-green-800 dark:text-green-300 mb-3">
            Agar haan, to report ki salah zaroor follow karein. Agar nahi, to aaj hi registration karwayein — aapki fasal aur mitti dono ka fayda hoga.
          </p>
          <p className="text-xs text-green-700 dark:text-green-400">
            🌱 Sahi khaad, sahi matra — yahi safalta ka raaz hai
          </p>
        </div>
      </div>
    </>
  );
}