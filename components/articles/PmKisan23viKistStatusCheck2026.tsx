'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SvgFAQ } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, DB, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-04-01T00:00:00+05:30';
const MODIFIED  = '2026-07-03T08:00:00+05:30';
const DOMAIN = 'https://kisanstatus.com';
const URL    = `${DOMAIN}/articles/pm-kisan-23vi-kist-2026-status-check`;

const RELATED = [
  { slug: 'pm-kisan-ekyc-online-2026', title: 'eKYC Complete Guide', emoji: '🔐' },
  { slug: 'pm-kisan-payment-failed-status-2026', title: 'Payment Failed Fix', emoji: '💸' },
  { slug: 'pm-kisan-beneficiary-list-2026', title: 'Beneficiary List Check', emoji: '📋' },
  { slug: 'pm-kisan-mobile-number-change', title: 'Mobile Number Update', emoji: '📱' },
  { slug: 'agristack-kya-hai', title: 'AgriStack Farmer ID', emoji: '🌐' },
  { slug: 'pm-kisan-registration-online-2026', title: 'New Registration', emoji: '📝' },
];

// FAQ structured data for Google rich snippets
const FAQS_DATA = [
  { q: '23वीं किस्त कब जारी हुई?', a: '20 जून 2026 को प्रधानमंत्री ने हुगली, पश्चिम बंगाल से डिजिटल माध्यम से राशि जारी की। 9.44 करोड़ से अधिक लाभार्थियों को ₹2,000 — कुल ₹18,880 करोड़ DBT द्वारा स्थानांतरित किए गए।' },
  { q: '24वीं किस्त कब आएगी?', a: 'पिछले पैटर्न के अनुसार अगस्त-नवंबर 2026 में अपेक्षित है। सटीक तिथि आधिकारिक घोषणा पर निर्भर करेगी। तब तक डिजिटल सत्यापन पूरा रखें।' },
  { q: 'स्टेटस चेक करने पर कुछ नहीं दिख रहा?', a: 'पंजीकरण संख्या सही दर्ज करें। याद नहीं तो "Know your registration no." विकल्प से मोबाइल/आधार से पहले नंबर खोजें। फिर दोबारा जांचें।' },
  { q: 'डिजिटल सत्यापन अनिवार्य है क्या?', a: 'हाँ, पूरी तरह अनिवार्य है। बिना सत्यापन के कोई भी किस्त नहीं मिलेगी। pmkisan.gov.in पर OTP से या CSC बायोमेट्रिक से तुरंत करें।' },
  { q: 'नया पंजीकरण कैसे करें?', a: 'pmkisan.gov.in → New Farmer Registration → आधार + भूमि दस्तावेज़ + बैंक विवरण भरें। या नज़दीकी CSC केंद्र जाएं — पूरी प्रक्रिया निःशुल्क है।' },
  { q: 'FTO Processed का मतलब क्या है?', a: 'Fund Transfer Order सफलतापूर्वक जनरेट हो चुका है। इसका अर्थ है कि राशि 24-48 घंटों में आपके बैंक खाते में जमा हो जाएगी। यदि 3 दिन बाद भी नहीं आई तो बैंक से संपर्क करें।' },
  { q: 'राशि वापस क्यों चली गई (Reversed)?', a: 'खाता निष्क्रिय, नाम मेल नहीं खाता, या NPCI मैपिंग नहीं हुई। बैंक जाकर खाता सक्रिय करवाएं और पोर्टल पर अपडेटेड विवरण दर्ज करें।' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS_DATA.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function PmKisan23viKistStatusCheck2026() {
  return (
    <>
      {/* FAQ Schema for Google Rich Snippets */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <div className="bg-primary-600 py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/articles" className="hover:text-white">Articles</Link><span>/</span>
            <span className="text-white">23rd Installment Status Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">📆 Disbursement Status Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Agrarian Welfare 23rd Installment 2026: Released! Status Check, Eligibility & Payment Tracker
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 12 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Released Banner */}
        <div className="mb-6 inline-block rounded-full bg-green-100 border border-green-300 px-5 py-2 text-sm font-black text-green-800">
          ✅ 23rd Installment Released — 20 June 2026 — ₹2,000 per beneficiary
        </div>

        {/* Hero Image — Next.js Image for auto optimization */}
        <div className="my-6 rounded-2xl overflow-hidden border border-green-100 shadow-md">
          <Image
            src="/images/payment-success.webp"
            alt="Agrarian welfare 23rd installment payment successful — cultivator bank account credit notification"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-gray-500 py-2 bg-green-50 border-t border-green-100">23rd Disbursement — 9.44 Crore Cultivators Received ₹2,000 via Direct Benefit Transfer</p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            <strong>Agrarian welfare scheme ki 23rd installment release ho chuki hai.</strong> Pradhan Mantri Narendra Modi ne Hooghly, West Bengal se yeh disbursement digitally release ki, jisse <strong>9.44 crore se zyada registered cultivators</strong> ko ₹2,000 mila — total <strong>₹18,880 crore</strong> Direct Benefit Transfer (DBT) ke zariye bank accounts mein transfer hue. Yeh central government ka sabse bada cash transfer program hai jo small aur marginal landholders ko financial support provide karta hai.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Agar aapke account mein abhi tak amount credit nahi hua ya payment confirmation lena hai, toh neeche diye gaye step-by-step verification guide ko follow karo. Is article mein hum cover karenge — online status check process, eligibility criteria, common rejection reasons, FTO tracking, aur next tranche ki expected timeline. Sab kuch ek jagah par clear ho jayega.
          </p>
          <IB>
            <strong>✅ Yaad Rakho:</strong> Amount seedha Aadhaar-seeded bank account mein aata hai. Kisi bichauliye, agent ya middleman ki zaroorat nahi. Koi agar phone karke paisa maange ya personal details mange toh woh fraud hai — turant 155261 par report karo.
          </IB>
        </section>

        {/* What is This Scheme — Low Competition Keyword Section */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Yeh Cash Transfer Program Kya Hai?
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Central government dwara shuru kiya gaya yeh direct income support initiative un sabhi small aur marginal landholders ke liye hai jinke paas cultivable zameen 2 hectare (lagbhag 5 acre) ya usse kam hai. Har financial year mein <strong>3 equal installments</strong> milti hain — har ek <strong>₹2,000</strong> ki, jo har 4 mahine mein DBT ke through seedha beneficiary ke bank account mein jama hoti hai. Saalana kul benefit <strong>₹6,000</strong> hota hai.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Is program ka primary objective hai ki rural households ko agricultural inputs, seeds, fertilizers aur equipment khareedne mein madad mile. Yeh amount kisi bhi purpose ke liye use ho sakta hai — koi restriction nahi hai. Lekin eligibility maintain rakhne ke liye <strong>digital authentication (eKYC)</strong>, <strong>NPCI bank seeding</strong>, aur <strong>land record integration</strong> teeno conditions puri honi chahiye. Inme se koi bhi ek pending ho toh disbursement ruk jaata hai.
          </p>
          <WB>
            <strong>📊 Scale:</strong> Ab tak 11 crore+ cultivators register ho chuke hain. Har installment mein ₹18,000-20,000 crore DBT se transfer hote hain. Yeh duniya ka sabse bada direct cash transfer program hai.
          </WB>
        </section>

        {/* Installment Details Table */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Recent Disbursement History & Upcoming Schedule
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Neeche pichle kuch installments ka complete record diya gaya hai taaki aap apna payment history track kar sakein. Pattern ke hisaab se <strong>24th installment August-November 2026</strong> mein expected hai.
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">Installment</th>
                  <th className="p-3 text-left">Release Date</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: '23rd Installment', date: '20 June 2026', amount: '₹2,000', status: '✅ Released', highlight: true },
                  { label: '22nd Installment', date: '13 March 2026', amount: '₹2,000', status: 'Released', highlight: false },
                  { label: '21st Installment', date: 'November 2025', amount: '₹2,000', status: 'Released', highlight: false },
                  { label: '20th Installment', date: 'August 2025', amount: '₹2,000', status: 'Released', highlight: false },
                  { label: '24th Installment', date: 'Expected: Aug–Nov 2026', amount: '₹2,000', status: '⏳ Upcoming', highlight: false, upcoming: true },
                ].map((row) => (
                  <tr key={row.label} className={row.highlight ? 'bg-green-50 font-medium' : row.upcoming ? 'bg-yellow-50' : 'bg-white'}>
                    <td className="p-3 border-b font-semibold text-xs">{row.label}</td>
                    <td className="p-3 border-b text-xs text-gray-700">{row.date}</td>
                    <td className="p-3 border-b text-xs font-medium">{row.amount}</td>
                    <td className="p-3 border-b text-xs">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        row.highlight ? 'bg-green-100 text-green-800' :
                        row.upcoming ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">Note: 24th disbursement ki exact date abhi officially announce nahi hui. Digital authentication complete rakhein taaki delay na ho.</p>
        </section>

        {/* Online Verification Process */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Online Payment Verification — Mobile Se Kaise Karein
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Ghar baithe mobile ya computer se apna disbursement status verify karna bahut simple hai. Neeche diye gaye steps follow karo — kisi third-party app ya agent ki zaroorat nahi:
          </p>
          <StepList>
            <SI n={1}>Official portal <strong>pmkisan.gov.in</strong> par browser se jao (sirf yehi authentic source hai)</SI>
            <SI n={2}>Homepage par <strong>"Farmers Corner"</strong> section dhundo → <strong>"Know Your Status"</strong> click karo</SI>
            <SI n={3}>Apna <strong>Registration Number</strong> enter karo (agar yaad nahi toh "Know your registration no." link se mobile/Aadhaar se retrieve karo)</SI>
            <SI n={4}><strong>Captcha code</strong> sahi se bharo → <strong>"Get Data"</strong> button press karo</SI>
            <SI n={5}>Screen par complete payment history dikh jayegi — har installment ka status, FTO date, aur bank credit confirmation</SI>
          </StepList>
          <IB>
            <strong>💡 FTO Generated / Processed?</strong> Agar status mein "FTO Generated" ya "FTO Processed" likha hai toh Fund Transfer Order successfully create ho chuka hai — amount 24-48 ghante mein account mein reflect hoga. Agar 3 din baad bhi na aaye toh bank branch visit karo.
          </IB>
          <WB>
            <strong>📱 PM Kisan Mobile App:</strong> Play Store se official app download karo. App mein status check, digital authentication, aur profile update sab ho sakta hai. Jab website slow ho ya server busy ho toh app zyada reliable hai.
          </WB>
        </section>

        {/* Understanding Status Messages — NEW LOW COMPETITION SECTION */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Portal Par Dikhne Wale Status Messages Ka Matlab
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Jab aap portal par verification karte hain toh alag-alag messages dikhte hain. Har message ka specific meaning hota hai. Samajhna zaroori hai taaki sahi action le sako:
          </p>
          <div className="space-y-3">
            {[
              { msg: 'FTO Generated', meaning: 'Fund Transfer Order ban gaya hai. State government ne approve kar diya hai. Ab bank processing karega.', action: '24-48 ghante wait karo.' },
              { msg: 'FTO Processed', meaning: 'Bank ne amount process kar liya hai. Credit hone wala hai.', action: '1-2 din mein account check karo.' },
              { msg: 'Payment Success', meaning: 'Amount successfully bank account mein jama ho chuka hai.', action: 'Bank statement verify karo.' },
              { msg: 'Awaiting SFTP', meaning: 'State level par approval pending hai. File abhi central server par upload nahi hui.', action: 'State agriculture department se sampark karo.' },
              { msg: 'RFT Signed', meaning: 'Request For Transfer sign ho chuki hai state dwara. Processing pipeline mein hai.', action: 'Normal wait time 7-15 din.' },
              { msg: 'Rejected / Suspicious', meaning: 'Verification mein discrepancy mili hai. Document mismatch ya duplicate entry.', action: 'BAO se milo, correction application do.' },
            ].map(({ msg, meaning, action }) => (
              <div key={msg} className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="font-black text-primary-700 text-sm mb-1">📌 "{msg}"</p>
                <p className="text-xs text-gray-700 mb-2"><strong>Matlab:</strong> {meaning}</p>
                <p className="text-xs text-green-700 font-semibold">➡️ Action: {action}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Eligibility Criteria — Kaun Qualify Karta Hai?
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Yeh scheme sirf specific categories ke liye hai. Neeche dono eligible aur ineligible categories clearly listed hain. Dhyan rahe ki <strong>family definition</strong> mein husband, wife aur minor children shamil hain — agar family ka koi bhi member ineligible category mein aata hai toh poora parivar disqualify ho jaata hai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <h3 className="font-black text-green-800 text-sm mb-2">✅ Eligible Beneficiaries</h3>
              <ul className="space-y-1.5 text-xs text-gray-700">
                <li>✓ Small & marginal landholders (≤2 hectare cultivable land)</li>
                <li>✓ Land records mein naam officially registered ho</li>
                <li>✓ Valid Aadhaar card with biometric authentication</li>
                <li>✓ Active bank account seeded with Aadhaar + NPCI</li>
                <li>✓ Women landowners (zameen apne naam par)</li>
                <li>✓ Tenant cultivators (state-specific rules apply)</li>
                <li>✓ Tribal & forest rights holders (FRA patta)</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h3 className="font-black text-red-800 text-sm mb-2">❌ Excluded Categories</h3>
              <ul className="space-y-1.5 text-xs text-gray-700">
                <li>✗ Income tax filers (last assessment year)</li>
                <li>✗ Government employees (Group D excepted)</li>
                <li>✗ Monthly pension ≥ ₹10,000 recipients</li>
                <li>✗ Professionals: Doctors, Engineers, CA, Lawyers</li>
                <li>✗ Institutional landholders (trusts, companies, societies)</li>
                <li>✗ Constitutional post holders: MPs, MLAs, Ministers</li>
                <li>✗ Mayors, Municipal Chairpersons, Zila Parishad members</li>
              </ul>
            </div>
          </div>
          <DB>
            <strong>⚠️ Important:</strong> Family mein se ek bhi member excluded category mein aata hai toh poora parivar ineligible. "Family" = Husband + Wife + Minor Children. Adult children alag family maane jaate hain agar unki zameen alag hai.
          </DB>
        </section>

        {/* Three Mandatory Conditions — NEW LOW COMPETITION SECTION */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            3 Zaroori Shartein — Inke Bina Payment Ruk Jaayegi
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Eligible hone ke baad bhi agar yeh teen technical conditions puri nahi hain toh disbursement hold par rehta hai. 90% pending cases inhi teen wajah se hote hain:
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-4">
              <h3 className="font-black text-blue-900 text-sm mb-2">🔐 1. Digital Authentication (eKYC)</h3>
              <p className="text-xs text-gray-700 mb-2">Aadhaar-based biometric ya OTP verification complete hona zaroori hai. Yeh one-time process hai lekin agar kabhi Aadhaar update hua toh re-verification required ho sakta hai.</p>
              <p className="text-xs text-blue-700 font-semibold">Fix: pmkisan.gov.in → eKYC → OTP verify. Ya CSC center par fingerprint scan karwao.</p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-4">
              <h3 className="font-black text-purple-900 text-sm mb-2">🏦 2. NPCI Bank Account Mapping</h3>
              <p className="text-xs text-gray-700 mb-2">Aapka bank account Aadhaar se link hona chahiye AUR National Payments Corporation of India (NPCI) mapper mein registered hona chahiye. Sirf Aadhaar linking kaafi nahi — NPCI seeding alag process hai.</p>
              <p className="text-xs text-purple-700 font-semibold">Fix: Bank branch jao → "Aadhaar NPCI seeding form" bharo → 7-10 din mein activate hoga.</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4">
              <h3 className="font-black text-amber-900 text-sm mb-2">🌾 3. Land Record Integration</h3>
              <p className="text-xs text-gray-700 mb-2">Aapki zameen ka record state land database se central portal par sync hona chahiye. Agar "Land Seeding: No" dikh raha hai toh payment generate nahi hogi.</p>
              <p className="text-xs text-amber-700 font-semibold">Fix: Patwari/Lekhpal se Khasra-Khatauni update karwao → Block Agriculture Officer ko application do → 15-30 din mein sync hoga.</p>
            </div>
          </div>
        </section>

        {/* Common Problems & Solutions */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Common Rejection Reasons & Practical Fixes
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Agar payment fail ho gayi hai ya reversed ho gayi hai toh ghabrao mat. Neeche har problem ka tested solution diya gaya hai jo hazaron beneficiaries ne successfully use kiya hai:
          </p>
          <div className="space-y-3">
            {[
              { err: 'Amount Credit Nahi Hua', fix: 'Portal par status check karo. FTO Generated? → 48 ghante wait. Pending? → eKYC check karo. Land Seeding No? → Patwari se milo. NPCI not mapped? → Bank jao. Sab theek phir bhi nahi aaya? → Helpline 155261 par call karo.' },
              { err: 'Digital Authentication Pending', fix: 'pmkisan.gov.in → Farmers Corner → eKYC → Aadhaar number dalo → OTP verify karo. OTP na aaye toh 10 minute baad retry karo. Biometric option choose karke CSC center bhi ja sakte ho. Bina authentication ke koi bhi future disbursement nahi hoga.' },
              { err: 'Name Mismatch / Authentication Failed', fix: 'Aadhaar card par naam aur portal par naam exactly match hona chahiye. Middle name, spelling difference, ya surname missing — sab count hota hai. BAO (Block Agriculture Officer) se written application do saath mein Aadhaar copy lagakar. 15-20 din mein correction ho jaata hai.' },
              { err: 'Payment Reversed / Wapas Chali Gayi', fix: 'Yeh tab hota hai jab bank account inactive ho, closed ho, ya naam mismatch ho. Bank branch visit karo → Account active karwao → Branch manager se "DBT enable" confirmation lo → Portal par updated IFSC + account number daalo. Next cycle mein automatic retry hoga.' },
              { err: 'Duplicate Entry / Multiple Registrations', fix: 'Ek Aadhaar par sirf ek registration allowed hai. Agar galti se do baar register ho gaya toh dono reject ho sakte hain. District Agriculture Officer se milo → De-duplication request submit karo → Sahi wala retain hoga, galat delete hoga.' },
            ].map(({ err, fix }) => (
              <div key={err} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-red-50 border-b border-red-100 px-4 py-2.5">
                  <p className="font-black text-red-800 text-sm">❌ {err}</p>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2 bg-green-50 rounded-lg p-3">
                    <span className="text-green-600 font-black text-xs shrink-0 mt-0.5">✅ FIX:</span>
                    <p className="text-xs text-green-800 leading-relaxed">{fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* State-wise Disbursement Timeline — NEW LOW COMPETITION SECTION */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            State-Wise Release Timeline — Kab Tak Paisa Aata Hai?
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Central government funds release karti hai, lekin actual bank credit timing state government ki verification speed par depend karti hai. Kuch states fast hain, kuch slow. General pattern yeh hai:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">States</th>
                  <th className="p-3 text-left">Typical Timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50">
                  <td className="p-3 border-b font-semibold text-xs">Fast Processing</td>
                  <td className="p-3 border-b text-xs">UP, MP, Maharashtra, Gujarat, Haryana</td>
                  <td className="p-3 border-b text-xs">Release date se 1-3 din mein</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border-b font-semibold text-xs">Normal Processing</td>
                  <td className="p-3 border-b text-xs">Bihar, Rajasthan, Karnataka, Telangana, TN</td>
                  <td className="p-3 border-b text-xs">Release date se 3-7 din mein</td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="p-3 border-b font-semibold text-xs">Delayed Processing</td>
                  <td className="p-3 border-b text-xs">Jharkhand, Odisha, Chhattisgarh, NE States</td>
                  <td className="p-3 border-b text-xs">Release date se 7-15 din mein</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">Note: Yeh general estimate hai. Individual case verification status par depend karta hai. Agar 15 din baad bhi na aaye toh helpline par contact karo.</p>
        </section>

        {/* Helpline & Support */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200 p-5 mb-8">
          <h3 className="font-black text-[#14532d] mb-3 text-base">📞 Official Helpline & Support Channels</h3>
          <p className="text-xs text-gray-700 mb-3">Koi bhi issue ho — in channels se free help milegi. Kisi private agent ko paise mat do:</p>
          <div className="text-sm text-gray-800 space-y-1.5">
            <p>📞 Toll Free Helpline: <a href="tel:155261" className="font-bold text-[#14532d] hover:underline">155261</a> (24×7 available)</p>
            <p>📞 Delhi Office: <a href="tel:01124300606" className="font-bold text-[#14532d] hover:underline">011-24300606</a> (Mon-Sat, 10AM-6PM)</p>
            <p>📧 Email Support: <a href="mailto:pmkisan-ict@gov.in" className="font-bold text-[#14532d] hover:underline">pmkisan-ict@gov.in</a></p>
            <p>🌐 Official Portal: <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="font-bold text-[#14532d] hover:underline">pmkisan.gov.in ↗</a></p>
            <p>📱 Grievance Portal: <a href="https://pgportal.gov.in" target="_blank" rel="noopener noreferrer" className="font-bold text-[#14532d] hover:underline">pgportal.gov.in ↗</a> (escalation ke liye)</p>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100">
            Aksar Puche Jane Wale Sawal (FAQ)
          </h2>
          <SvgFAQ caption="23rd Installment FAQ 2026 — Verified Answers" />
          <div className="space-y-3 mt-4">
            {FAQS_DATA.map(({ q, a }) => (
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
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="Official Beneficiary Status Portal"
          guide="Abhi Apna Status Verify Karo"
          guideHref="/articles/pm-kisan-ekyc-online-2026"
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