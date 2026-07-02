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
    headline: 'Mitti Pariksha Swasthya Parcha 2026 — PDF Save, Status Check, Panjikaran & Fayde',
    description: 'Soil testing swasthya parcha complete guide 2026 — PDF save karo, status check online, panjikaran process, pramaan patra number recovery, eligibility.',
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
      { '@type': 'ListItem', position: 3, name: 'Mitti Pariksha Guide 2026', item: URL },
    ],
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Mitti swasthya parcha kaise save kare?',
        acceptedAnswer: { '@type': 'Answer', text: 'soilhealth.dac.gov.in par jao → Krishak Login → Panjikaran number + password → PDF save karo.' } },
      { '@type': 'Question', name: 'Mitti pariksha pramaan patra number kaise nikale?',
        acceptedAnswer: { '@type': 'Answer', text: 'Registered mobile par SMS check karo ya portal par Forgot Number option use karo. UID ya aavedan ID se bhi recover kar sakte ho.' } },
      { '@type': 'Question', name: 'Zameen jaanch status kaise check kare?',
        acceptedAnswer: { '@type': 'Answer', text: 'soilhealth.dac.gov.in par Track Aavedan Status section mein jao, panjikaran number dalo, Submit karo.' } },
      { '@type': 'Question', name: 'Soil parikshan free hai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Haan — bilkul free. Parikshan, pramaan patra banwana, micronutrients check — sab 2026 se free hai.' } },
      { '@type': 'Question', name: 'Mitti swasthya parcha kab update karna chahiye?',
        acceptedAnswer: { '@type': 'Answer', text: 'Har 2-3 saal baad. Mitti ki sthiti badalti rehti hai, isliye niyamit parikshan zaroori hai.' } },
    ],
  },
];

const RELATED = [
  { slug: 'pm-kisan-23vi-kist-2026-status-check', title: '23vi Tranche Status', emoji: '📅' },
  { slug: 'nano-dap-500ml-price-in-india-2026', title: 'Liquid DAP Price Guide', emoji: '🌱' },
  { slug: 'pmfby-crop-insurance-2026', title: 'PMFBY Crop Insurance', emoji: '🛡️' },
  { slug: 'kisan-credit-card-online-apply-2026', title: 'KCC Loan Apply', emoji: '💳' },
  { slug: 'agristack-kya-hai', title: 'AgriStack Krishak ID', emoji: '🌐' },
  { slug: 'pm-kisan-registration-online-2026', title: 'New Panjikaran', emoji: '📝' },
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
            <span className="text-white font-bold">Mitti Pariksha Guide 2026</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">🌱 Complete Kheti Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Mitti Swasthya Parcha Complete Guide 2026 — PDF Save, Status Check, Panjikaran & Fayde
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>⏱️ 20 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/soil-health-card-complete-guide-2026.webp"
            alt="Mitti swasthya parcha 2026 — PDF Save, Status Check, Panjikaran Guide"
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
            style={{ maxHeight: '420px' }}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">Mitti Pariksha Pramaan Patra 2026 — Free PDF, Status Check & Panjikaran Guide</p>
        </div>

        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-800 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-red-800 dark:text-red-300 mb-2">🚨 Bina Mitti Pariksha Ke Fertilizer Dalna = Paisa Barbaad</h2>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed mb-2">
            Haryana ke ek annadata Suresh ji ne bataya — wo har saal 5-6 borri urea apne 5 acre khet mein dal dete the. Mitti pariksha pramaan patra aane ke baad pata chala ki nitrogen to theek hai, lekin phosphorus kam hai.
          </p>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed">
            Kheti salah ke according fertilizer change kiya — <strong>₹8,000 bachat + 15% zyada utpadan!</strong> Tum bhi andaze se fertilizer mat dalo — pehle parikshan karwao. Agar aap <Link href="/articles/nano-dap-500ml-price-in-india-2026" className="underline font-medium">liquid DAP</Link> ya <Link href="/articles/pm-kisan-registration-online-2026" className="underline font-medium">PM Kisan panjikaran</Link> ke baare mein jaanna chahte hain, toh woh guides bhi padh sakte hain.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Parichay: Mitti Swasthya Parcha Kya Hai?
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Saral shabdon mein — <strong>Mitti pariksha swasthya parcha aapki dharti ka Medical Report hai.</strong> Jaise hum apni swasthya jaanch karate hain, waise hi bhumi ki swasthya jaanch karne ka vaigyanik tarika hai. Yeh pramaan patra aapko batata hai ki aapki zameen mein kaunse poshak tatva hain aur kaunsi fasal ke liye kitna khaad dalna chahiye.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bharat sarkar ne 2015 mein <strong>Soil Health Card Yojana</strong> shuru ki thi taaki har krishak ko apni mitti ke bare mein sahi jankari mil sake. Ye pramaan patra aapko batata hai ki aapki mitti mein kaun se poshak tatva hain aur kaun se kam hain. 2026 tak, pure Bharat mein 20 crore se zyada annadataon ne apna parikshan karwa chuke hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Yeh yojana Krishi Mantralaya dwara chalayi ja rahi hai aur har rajya mein uplabdh hai. Chahe aap Punjab ke ho ya Tamil Nadu ke, har jagah yeh seva milti hai.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-4">
            <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Pramaan Patra Mein Kya Hota Hai:</h3>
            <ul className="space-y-1 text-xs text-[var(--color-text-muted)]">
              <li>✓ Mitti ka pH maan (khatta ya khara)</li>
              <li>✓ Nitrogen (N), Phosphorus (P), Potassium (K) ki matra</li>
              <li>✓ Jaivik Carbon</li>
              <li>✓ Sukshma poshak tatva (Zinc, Iron, Copper, etc.)</li>
              <li>✓ Fasal ke anusar khaad salah</li>
              <li>✓ Mitti prakar vargikaran</li>
              <li>✓ Agli pariksha tarikh sujhav</li>
            </ul>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
            <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2 text-sm">Sarkar Ka Uddeshya:</h3>
            <p className="text-[var(--color-text-muted)] text-xs mb-2">Sarkar chahti hai ki har annadata:</p>
            <ul className="list-disc list-inside space-y-1 text-xs text-[var(--color-text-muted)] ml-2">
              <li>Apni mitti ko pehchane</li>
              <li>Faltu khaad par kharch na kare</li>
              <li>Sahi matra mein khaad dale</li>
              <li>Mitti ko swasth rakhe</li>
              <li>Apna utpadan badhaye</li>
              <li>Paryavaran ko bachaye</li>
            </ul>
          </div>
          <IB>
            <strong>✅ 2026 Update:</strong> Ab sukshma poshak tatva jaanch bhi <strong>bilkul muft</strong> hai. Pehle alag shulk lagta tha. Prakriya samay 15 din ho gaya hai.
          </IB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Mitti Pariksha Kyu Zaroori Hai?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 text-center">
              <span className="text-3xl block mb-2">💰</span>
              <p className="font-black text-green-800 dark:text-green-300 text-sm">Dhan Bachao</p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-1">2000-5000/acre bachat</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-center">
              <span className="text-3xl block mb-2">📈</span>
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm">Utpadan Badhao</p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-1">15-20% zyada utpadan</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 text-center">
              <span className="text-3xl block mb-2">🌱</span>
              <p className="font-black text-yellow-800 dark:text-yellow-300 text-sm">Mitti Bachao</p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-1">Deerghkalin urvarakta</p>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Dekhiye, bahut se krishak sochte hain ki "Jyada khaad dalenge to jyada fasal hogi." Ye bilkul galat soch hai! Jaise jyada dawai khane se bimari thik nahi hoti, waise hi jyada khaad dalne se fasal kharab ho sakti hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Vastavik Udaharan:</strong> Haryana ke ek annadata Suresh ji ne bataya ki wo har saal 5-6 borri urea apne 5 acre khet mein dal dete the. Pariksha parinaam aane ke baad pata chala ki unki mitti mein nitrogen to theek hai, lekin phosphorus kam hai. Unhone kheti salah ke according khaad badli aur 30% tak kharch bacha liya!
          </p>
          <WB>
            <strong>⚠️ Dhyan Dein:</strong> Bina mitti pariksha ke khaad dalna andhere mein teer chalane jaisa hai. Galat matra se mitti kharab hoti hai aur dhan barbaad hota hai.
          </WB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Fayde — Pariksha Pramaan Patra Se Kya Milta Hai?
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-800 dark:to-blue-800 text-white">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Fayda</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Bina Pariksha Ke</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Pariksha Ke Saath</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold text-[var(--color-text)]">Khaad Kharch</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-red-600 dark:text-red-400">Jyada (Faltu)</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 dark:text-green-400">Kam (Sahi matra)</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold text-[var(--color-text)]">Fasal Utpadan</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-yellow-600 dark:text-yellow-400">Samanya</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 dark:text-green-400">15-20% Jyada</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold text-[var(--color-text)]">Mitti ki Swasthya</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-red-600 dark:text-red-400">Dheere-dheere kharab</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 dark:text-green-400">Sudharta hai</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold text-[var(--color-text)]">Khaad Chayan</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-yellow-600 dark:text-yellow-400">Andaze se</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 dark:text-green-400">Vaigyanik aadhar par</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold text-[var(--color-text)]">Deerghkalin Labh</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-red-600 dark:text-red-400">Mitti banjar ho sakti hai</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 dark:text-green-400">Mitti upjaau banti hai</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold text-[var(--color-text)]">Dhan Bachat</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-red-600 dark:text-red-400">Nahi hota</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-600 dark:text-green-400">2000-5000/acre</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 dark:text-green-300 mb-2 text-sm">Atirikt Fayde:</h3>
            <ul className="grid md:grid-cols-2 gap-2 text-xs text-[var(--color-text-muted)]">
              <li className="flex items-start"><span className="text-green-600 dark:text-green-400 mr-2">✓</span><span>KCC Rin prakriya mein sahayata milti hai</span></li>
              <li className="flex items-start"><span className="text-green-600 dark:text-green-400 mr-2">✓</span><span>Sarkari yojanaon ka labh milta hai</span></li>
              <li className="flex items-start"><span className="text-green-600 dark:text-green-400 mr-2">✓</span><span>Fasal bima dava mein suvidha</span></li>
              <li className="flex items-start"><span className="text-green-600 dark:text-green-400 mr-2">✓</span><span>Jaivik kheti ke liye margdarshan</span></li>
              <li className="flex items-start"><span className="text-green-600 dark:text-green-400 mr-2">✓</span><span>Pariksha itihas banta rehta hai</span></li>
              <li className="flex items-start"><span className="text-green-600 dark:text-green-400 mr-2">✓</span><span>Bhavishya ki peedhi ke liye mitti bachti hai</span></li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Panjikaran Kaise Kare? (Kadam-dar-Kadam)
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Panjikaran kaise kare</strong> - ye prashn har naye krishak ke man mein aata hai. Chinta mat kijiye, prakriya bahut saral hai. Aap offline ya online dono tarike se aavedan kar sakte hain.
          </p>

          <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-700 rounded-xl">
            <h3 className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">Vidhi 1: CSC Kendra Se (Offline)</h3>
            <StepList>
              <SI n={1}>Nazdiki CSC kendr ya krishi vibhag karyalaya jao</SI>
              <SI n={2}>Prajikaran form bhari — naam, mobile, UID, khasra number</SI>
              <SI n={3}>Dastavej do — UID card, bhumi abhilekh (Khasra/Khatauni), photo</SI>
              <SI n={4}>Namuna do — ya krishi visheshagya khet se lega</SI>
              <SI n={5}><strong>Panjikaran Sankhya</strong> milegi — sambhal kar rakho</SI>
            </StepList>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
            <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Vidhi 2: Online (Ghar Baithe)</h3>
            <StepList>
              <SI n={1}><strong>soilhealth.dac.gov.in</strong> par jao</SI>
              <SI n={2}>"New Krishak Panjikaran" par click karo</SI>
              <SI n={3}>Apna rajya chuno</SI>
              <SI n={4}>Form bhari + dastavej upload karo</SI>
              <SI n={5}>Nazdiki prayogshala kendr chuno</SI>
              <SI n={6}>Submit karo — panjikaran sankhya note karo</SI>
            </StepList>
          </div>

          <IB>
            <strong>💡 Salah:</strong> Panjikaran ke samay mobile number sahi dalo — OTP aur updates usi par aayenge. Agar mobile number galat hua to baad mein <strong>pramaan patra sankhya kaise nikale</strong> ki samasya aa sakti hai. Agar aap <Link href="/articles/pm-kisan-ekyc-online-2026" className="underline font-medium">digital satyapan</Link> ke baare mein jaanna chahte hain, toh woh guide bhi sahayak hogi.
          </IB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aavedan Sthiti Online Kaise Jaane?
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bahut se annadata poochte hain - "<strong>sthiti online</strong> kaise jaane?" To chaliye iska kadam-dar-kadam samadhan dekhte hain.
          </p>
          <StepList>
            <SI n={1}><strong>soilhealth.dac.gov.in</strong> kholo</SI>
            <SI n={2}>"Track Aavedan Sthiti" par click karo</SI>
            <SI n={3}>Prajikaran sankhya ya mobile number dalo</SI>
            <SI n={4}>OTP satyapan karo</SI>
            <SI n={5}>Sthiti dikh jayegi — Aavedan Prapt / Prakriya Adhin / Pramaan Patra Taiyar</SI>
          </StepList>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Sthiti</th>
                  <th className="p-3 text-left">Arth</th>
                  <th className="p-3 text-left">Kya Karein</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">Aavedan Prapt ⏳</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Form prapt ho gaya</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-medium">Prateeksha karo — prakriya shuru hogi</td>
                </tr>
                <tr className="bg-[var(--color-bg-alt)]">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">Satyapan Adhin 🔍</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Dastavej jaanch ho rahe hain</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-medium">2-3 din prateeksha karo</td>
                </tr>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">Namuna Vishleshan 🧪</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Prayogshala mein mitti jaanch ho rahi hai</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-medium">7-10 din prateeksha karo</td>
                </tr>
                <tr className="bg-[var(--color-bg-alt)]">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">Pramaan Patra Nirmit ✅</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Pramaan patra taiyar hai!</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-medium">Login karke PDF save karo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            PDF Kaise Save Kare? (Pramaan Patra Download)
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ye sabse mahatvapurn kadam hai! Jab aapka pramaan patra taiyar ho jaye to <strong>PDF save</strong> kaise kare, iski poori prakriya neeche di gayi hai.
          </p>
          <StepList>
            <SI n={1}><strong>soilhealth.dac.gov.in</strong> par jao</SI>
            <SI n={2}>"Krishak Login" par click karo — panjikaran sankhya + password dalo</SI>
            <SI n={3}>Dashboard par <strong>"Mera Pramaan Patra"</strong> dikhega</SI>
            <SI n={4}><strong>"PDF Save"</strong> ya "Pramaan Patra Dekhein" click karo</SI>
            <SI n={5}>PDF khulegi — save karo + print nikalo</SI>
          </StepList>
          <IB>
            <strong>📱 Mobile Se:</strong> Browser mein soilhealth.dac.gov.in kholo → login karo → PDF Save click karo. WhatsApp par bhi share kar sakte ho.
          </IB>
          <WB>
            <strong>⚠️ PDF Save Nahi Ho Rahi?</strong> Pop-up blocker nishkriya karo. Browser badlo (Chrome try karo). Phir bhi na ho to CSC kendr se print nikalwao.
          </WB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Pramaan Patra Sankhya Bhool Gaye? Kaise Nikalein
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bahut baar aisa hota hai ki annadata apna <strong>pramaan patra sankhya</strong> bhool jate hain. To <strong>sankhya kaise nikale</strong> - iske liye neeche diye gaye tarike try karein:
          </p>
          <div className="space-y-3">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-1">🔑 SMS Jaanch Karo</p>
              <p className="text-xs text-[var(--color-text-muted)]">Prajikrit mobile par khojo — "SHC-2026-XXXXXX" format mein SMS aaya hoga</p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-1">🔑 Portal Par "Sankhya Bhool Gaye"</p>
              <p className="text-xs text-[var(--color-text-muted)]">soilhealth.dac.gov.in → Forgot Number → Mobile/UID dalo → OTP satyapan → Sankhya mil jayegi</p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-1">🔑 Panjikaran Raseed Jaanch Karo</p>
              <p className="text-xs text-[var(--color-text-muted)]">Jab aavedan kiya tha tab jo raseed mili thi usme aavedan sankhya likhi hai</p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-1">🔑 CSC Kendr Se Puchho</p>
              <p className="text-xs text-[var(--color-text-muted)]">UID lekar nazdiki CSC jao — abhilekh jaanch karke sankhya bata denge</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Samanya Samasyaein — Vastavik Samadhan
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Annadataon ko mitti pariksha se sambandhit kai samasyaein aati hain. Yahan humne sabse samanya samasyaein aur unke samadhan diye hain:
          </p>
          <div className="space-y-3">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
              <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5">
                <p className="font-black text-red-800 dark:text-red-300 text-sm">❌ Website Khul Nahi Rahi</p>
              </div>
              <div className="p-4">
                <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0">✅ SAMADHAN:</span>
                  <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">Browser badlo (Chrome/Firefox). Cache saaf karo. Mobile data try karo. Server band ho sakta hai — subah 6-8 AM try karo.</p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
              <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5">
                <p className="font-black text-red-800 dark:text-red-300 text-sm">❌ OTP Nahi Aa Raha</p>
              </div>
              <div className="p-4">
                <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0">✅ SAMADHAN:</span>
                  <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">Network jaanch karo. SMS inbox full to nahi? Spam folder jaanch karo. 5 min prateeksha karke punah bhejo. Phir bhi na aaye to CSC se mobile update karwao.</p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
              <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5">
                <p className="font-black text-red-800 dark:text-red-300 text-sm">❌ "Data Nahi Mila" Aa Raha Hai</p>
              </div>
              <div className="p-4">
                <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0">✅ SAMADHAN:</span>
                  <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">Prajikaran sankhya sahi dalo. Rajya portal sahi chuno. Ho sakta hai data abhi upload na hua ho — kuch din baad try karo.</p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
              <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5">
                <p className="font-black text-red-800 dark:text-red-300 text-sm">❌ Password Bhool Gaye</p>
              </div>
              <div className="p-4">
                <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0">✅ SAMADHAN:</span>
                  <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">"Forgot Password" link use karo → Prajikrit mobile dalo → OTP se naya password set karo.</p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
              <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5">
                <p className="font-black text-red-800 dark:text-red-300 text-sm">❌ Pramaan Patra Mein Truti Hai (Naam/Bhumi Galat)</p>
              </div>
              <div className="p-4">
                <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0">✅ SAMADHAN:</span>
                  <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">Nazdiki krishi vibhag karyalaya ya CSC jao → Sudhar aavedan jama karo → Sahi dastavej dikhao → 7-10 din mein theek hoga.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            2026 Mein Kya Naya Hai?
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Yojana mein 2026 mein kai naye parivartan aur updates aaye hain:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl">
              <span className="text-2xl shrink-0">📱</span>
              <div>
                <p className="font-black text-[var(--color-text)] text-xs">DigiLocker Ekikaran</p>
                <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">Ab pramaan patra DigiLocker mein bhi milega — kahin bhi pahunch karo</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl">
              <span className="text-2xl shrink-0">🤖</span>
              <div>
                <p className="font-black text-[var(--color-text)] text-xs">AI-Aadharit Salah</p>
                <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">Vyaktigat khaad salah — tumhari vishisht mitti ke liye</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl">
              <span className="text-2xl shrink-0">⚡</span>
              <div>
                <p className="font-black text-[var(--color-text)] text-xs">15 Din Mein Pramaan Patra</p>
                <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">Prakriya tej — pehle 45 din lagte the, ab sirf 15</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl">
              <span className="text-2xl shrink-0">💬</span>
              <div>
                <p className="font-black text-[var(--color-text)] text-xs">WhatsApp Seva</p>
                <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">Prajikrit number par PDF sidhe WhatsApp par milegi</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl">
              <span className="text-2xl shrink-0">🆓</span>
              <div>
                <p className="font-black text-[var(--color-text)] text-xs">Sukshma Poshak Tatva Muft</p>
                <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">Zinc, Iron, Copper jaanch ab bilkul muft</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl">
              <span className="text-2xl shrink-0">🔗</span>
              <div>
                <p className="font-black text-[var(--color-text)] text-xs">Yojana + KCC Sambandh</p>
                <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">Pramaan patra dharakon ko rin aur yojanaon mein atirikt labh</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Prashn
          </h2>
          <SvgFAQ caption="Mitti Pariksha FAQ 2026 — Annadataon Ke Vastavik Prashn" />
          <div className="space-y-3 mt-4">
            <details className="border border-[var(--color-border)] rounded-xl overflow-hidden group">
              <summary className="p-4 font-semibold text-[var(--color-text)] cursor-pointer bg-[var(--color-bg-alt)] hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                <span>Mitti pariksha pramaan patra banwane mein kitna paisa lagta hai?</span>
                <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="p-4 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]">Bilkul muft! Parikshan, pramaan patra banwana, sukshma poshak tatva jaanch — sab sarkar muft karti hai. Koi shulk mange to 1800-180-1551 par shikayat karo.</div>
            </details>
            <details className="border border-[var(--color-border)] rounded-xl overflow-hidden group">
              <summary className="p-4 font-semibold text-[var(--color-text)] cursor-pointer bg-[var(--color-bg-alt)] hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                <span>Pramaan patra kitne din mein banta hai?</span>
                <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="p-4 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]">2026 mein prakriya tej ho gayi hai — ab 15 dinon mein pramaan patra taiyar ho jata hai. Namuna dene ke baad SMS aayega jab pramaan patra taiyar ho.</div>
            </details>
            <details className="border border-[var(--color-border)] rounded-xl overflow-hidden group">
              <summary className="p-4 font-semibold text-[var(--color-text)] cursor-pointer bg-[var(--color-bg-alt)] hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                <span>Kab update karna chahiye?</span>
                <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="p-4 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]">Har 2-3 saal baad. Mitti ki sthiti badalti rehti hai. Agar fasal pratiroop badlo to turant update karo.</div>
            </details>
            <details className="border border-[var(--color-border)] rounded-xl overflow-hidden group">
              <summary className="p-4 font-semibold text-[var(--color-text)] cursor-pointer bg-[var(--color-bg-alt)] hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                <span>Kirayedar krishak (batai dar) banwa sakte hain?</span>
                <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="p-4 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]">Haan! Patta anubandh ya bhumi kabja pramaan dikhao. Bhumi swami hone ki aavashyakta nahi — jo kheti karta hai woh arh hai.</div>
            </details>
            <details className="border border-[var(--color-border)] rounded-xl overflow-hidden group">
              <summary className="p-4 font-semibold text-[var(--color-text)] cursor-pointer bg-[var(--color-bg-alt)] hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                <span>Pramaan patra kho jaye to kya karein?</span>
                <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="p-4 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]">Ghabrao mat! Portal par login karke dobara PDF save karo. Ya CSC kendr se pratilipi nikalwao. DigiLocker mein bhi save rehta hai.</div>
            </details>
          </div>
        </section>

        <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/10 rounded-2xl border border-green-200 dark:border-green-800 p-5 mb-8">
          <h3 className="font-black text-[var(--color-text)] mb-3 text-base">📞 Mitti Pariksha Sahayata Rekh</h3>
          <div className="text-sm text-[var(--color-text-muted)] space-y-1">
            <p>📞 Rashtriya Sahayata Rekh: <a href="tel:18001801551" className="font-bold text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">1800-180-1551</a></p>
            <p>📧 Email: <a href="mailto:soilhealth-dac@nic.in" className="font-bold text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">soilhealth-dac@nic.in</a></p>
            <p>🌐 Website: <a href="https://soilhealth.dac.gov.in" target="_blank" rel="noopener noreferrer" className="font-bold text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">soilhealth.dac.gov.in ↗</a></p>
          </div>
        </div>

        <GovLink
          href="https://soilhealth.dac.gov.in"
          label="Mitti Pariksha — Adhikarik Portal"
          guide="Abhi Pramaan Patra Save Karo"
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