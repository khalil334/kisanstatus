'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-04-01T00:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-ekyc-online-2026', title: 'Digital Verification Guide', emoji: '🔐' },
  { slug: 'pm-kisan-payment-failed-status-2026', title: 'Payment Failed Fix', emoji: '💸' },
  { slug: 'pm-kisan-beneficiary-list-2026', title: 'Beneficiary Roster Check', emoji: '📋' },
  { slug: 'pm-kisan-mobile-number-change', title: 'Mobile Number Update', emoji: '📱' },
  { slug: 'agristack-kya-hai', title: 'Digital Cultivator Identity', emoji: '🆔' },
  { slug: 'pm-kisan-registration-online-2026', title: 'New Enrollment Guide', emoji: '📝' },
];

const FAQS_DATA = [
  { q: '23वीं किस्त कब जारी हुई?', a: '20 जून 2026 को प्रधानमंत्री ने हुगली, पश्चिम बंगाल से डिजिटल माध्यम से राशि जारी की। 9.44 करोड़ से अधिक लाभार्थियों को ₹2,000 — कुल ₹18,880 करोड़ DBT द्वारा स्थानांतरित किए गए।' },
  { q: '24वीं किस्त कब आएगी?', a: 'पिछले पैटर्न के अनुसार अगस्त-नवंबर 2026 में अपेक्षित है। सटीक तिथि आधिकारिक घोषणा पर निर्भर करेगी। तब तक डिजिटल सत्यापन पूरा रखें।' },
  { q: 'स्टेटस चेक करने पर कुछ नहीं दिख रहा?', a: 'पंजीकरण संख्या सही दर्ज करें। याद नहीं तो "Know your registration no." विकल्प से मोबाइल/आधार से पहले नंबर खोजें। फिर दोबारा जांचें।' },
  { q: 'डिजिटल सत्यापन अनिवार्य है क्या?', a: 'हाँ, पूरी तरह अनिवार्य है। बिना सत्यापन के कोई भी किस्त नहीं मिलेगी। pmkisan.gov.in पर OTP से या CSC बायोमेट्रिक से तुरंत करें।' },
  { q: 'FTO Processed का मतलब क्या है?', a: 'Fund Transfer Order सफलतापूर्वक जनरेट हो चुका है। राशि 24-48 घंटों में बैंक खाते में जमा होगी। 3 दिन बाद भी नहीं आई तो बैंक से संपर्क करें।' },
  { q: 'राशि वापस क्यों चली गई (Reversed)?', a: 'खाता निष्क्रिय, नाम मेल नहीं खाता, या NPCI मैपिंग नहीं हुई। बैंक जाकर खाता सक्रिय करवाएं और पोर्टल पर अपडेटेड विवरण दर्ज करें।' },
  { q: 'नया पंजीकरण कैसे करें?', a: 'pmkisan.gov.in → New Farmer Registration → आधार + भूमि दस्तावेज़ + बैंक विवरण भरें। या नज़दीकी CSC केंद्र जाएं — पूरी प्रक्रिया निःशुल्क है।' },
];

export default function PmKisan23viKistStatusCheck2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">23rd Installment Status</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Disbursement Status Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Agrarian Welfare 23rd Installment 2026: Released! Status Check, Eligibility & Payment Tracker
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

        {/* Released Banner */}
        <div className="mb-6 inline-block rounded-full bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 px-5 py-2 text-sm font-black text-green-800 dark:text-green-300">
          ✅ 23rd Installment Released — 20 June 2026 — ₹2,000 per beneficiary
        </div>

        {/* Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/pm-kisan-23vi-kist-status-check-2026.webp'}
            alt="Agrarian welfare 23rd installment payment successful — cultivator bank account credit notification 2026"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            23rd Disbursement — 9.44 Crore Cultivators Received ₹2,000 via Direct Benefit Transfer
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Agrarian welfare scheme ki 23rd installment release ho chuki hai.</strong> Pradhan Mantri Narendra Modi ne Hooghly, West Bengal se yeh disbursement digitally release ki, jisse <strong>9.44 crore se zyada registered cultivators</strong> ko ₹2,000 mila — total <strong>₹18,880 crore</strong> Direct Benefit Transfer (DBT) ke zariye bank accounts mein transfer hue.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar aapke account mein abhi tak amount credit nahi hua ya payment confirmation lena hai, toh neeche diye gaye step-by-step verification guide ko follow karo. Status check process, eligibility criteria, common rejection reasons, FTO tracking, aur next tranche timeline — sab ek jagah.
          </p>
          <IB>
            <strong>Fraud Alert:</strong> Amount seedha Aadhaar-seeded bank account mein aata hai. Kisi bichauliye ya agent ki zaroorat nahi. Koi phone karke paisa maange ya personal details mange toh fraud hai — turant 155261 par report karo.
          </IB>
        </section>

        {/* What Is This Scheme */}
        <section className="mb-8">
          <SH>Yeh Cash Transfer Program Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Central government dwara shuru kiya gaya direct income support initiative un sabhi small aur marginal landholders ke liye hai jinke paas cultivable zameen 2 hectare (lagbhag 5 acre) ya usse kam hai. Har financial year mein <strong>3 equal installments</strong> — har ek <strong>₹2,000</strong> ki, har 4 mahine mein DBT se seedha bank account mein. Saalana kul benefit <strong>₹6,000</strong>.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Eligibility maintain rakhne ke liye <strong>digital authentication (eKYC)</strong>, <strong>NPCI bank seeding</strong>, aur <strong>land record integration</strong> teeno conditions puri honi chahiye. Inme se koi bhi ek pending ho toh disbursement ruk jaata hai.
          </p>
          <WB>
            <strong>Scale:</strong> 11 crore+ cultivators registered. Har installment mein ₹18,000-20,000 crore DBT transfer. Duniya ka sabse bada direct cash transfer program.
          </WB>
        </section>

        {/* Installment History Table */}
        <section className="mb-8">
          <SH>Recent Disbursement History & Upcoming Schedule</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
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
                  { label: '24th Installment', date: 'Expected: Aug–Nov 2026', amount: '₹2,000', status: '⏳ Upcoming', upcoming: true },
                ].map((row) => (
                  <tr key={row.label} className={row.highlight ? 'bg-green-50 dark:bg-green-900/20 font-medium' : row.upcoming ? 'bg-amber-50 dark:bg-amber-900/20' : 'bg-[var(--color-card)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-semibold text-xs text-[var(--color-text)]">{row.label}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{row.date}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs font-medium text-[var(--color-text)]">{row.amount}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        row.highlight ? 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300' :
                        row.upcoming ? 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300' :
                        'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--color-text-muted)]">Note: 24th disbursement ki exact date abhi officially announce nahi hui. Digital authentication complete rakhein.</p>
        </section>

        {/* Online Verification Process */}
        <section className="mb-8">
          <SH>Online Payment Verification — Mobile Se</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ghar baithe mobile ya computer se status verify karna simple hai. Kisi third-party app ya agent ki zaroorat nahi:
          </p>
          <StepList>
            <SI n={1}>Official portal <strong>pmkisan.gov.in</strong> par browser se jao</SI>
            <SI n={2}>Homepage par <strong>"Farmers Corner"</strong> → <strong>"Know Your Status"</strong> click karo</SI>
            <SI n={3}><strong>Registration Number</strong> enter karo (yaad nahi toh "Know your registration no." se retrieve karo)</SI>
            <SI n={4}><strong>Captcha code</strong> sahi se bharo → <strong>"Get Data"</strong> press karo</SI>
            <SI n={5}>Complete payment history dikh jayegi — har installment ka status, FTO date, bank credit confirmation</SI>
          </StepList>
          <IB>
            <strong>FTO Generated / Processed?</strong> Fund Transfer Order successfully create ho chuka hai — amount 24-48 ghante mein reflect hoga. 3 din baad bhi na aaye toh bank branch visit karo.
          </IB>
          <WB>
            <strong>PM Kisan Mobile App:</strong> Play Store se official app download karo. Status check, digital authentication, profile update sab ho sakta hai. Website slow ho toh app zyada reliable.
          </WB>
        </section>

        {/* Status Messages Explained */}
        <section className="mb-8">
          <SH>Portal Par Dikhne Wale Status Messages Ka Matlab</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har message ka specific technical meaning hota hai. Samajhna zaroori hai taaki sahi action le sako:
          </p>
          <div className="space-y-3">
            {[
              { msg: 'FTO Generated', meaning: 'State government ne approve kar diya. Bank processing karega.', action: '24-48 ghante wait karo.' },
              { msg: 'FTO Processed', meaning: 'Bank ne amount process kar liya. Credit hone wala hai.', action: '1-2 din mein account check karo.' },
              { msg: 'Payment Success', meaning: 'Amount successfully bank account mein jama.', action: 'Bank statement verify karo.' },
              { msg: 'Awaiting SFTP', meaning: 'State level par approval pending. File central server par upload nahi hui.', action: 'State agriculture department se sampark karo.' },
              { msg: 'RFT Signed', meaning: 'Request For Transfer sign ho chuki state dwara. Pipeline mein hai.', action: 'Normal wait time 7-15 din.' },
              { msg: 'Rejected / Suspicious', meaning: 'Verification mein discrepancy. Document mismatch ya duplicate entry.', action: 'BAO se milo, correction application do.' },
            ].map(({ msg, meaning, action }) => (
              <div key={msg} className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <p className="font-black text-[var(--color-primary)] text-sm mb-1">📌 "{msg}"</p>
                <p className="text-xs text-[var(--color-text-muted)] mb-2"><strong>Matlab:</strong> {meaning}</p>
                <p className="text-xs text-green-700 dark:text-green-400 font-semibold">➡️ Action: {action}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="mb-8">
          <SH>Eligibility — Kaun Qualify Karta Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Family definition:</strong> Husband + Wife + Minor Children. Family ka koi bhi member ineligible category mein aata hai toh poora parivar disqualify.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
              <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-2">✅ Eligible</h3>
              <ul className="space-y-1.5 text-xs text-[var(--color-text-muted)]">
                <li>✓ Small & marginal landholders (≤2 hectare)</li>
                <li>✓ Land records mein naam registered</li>
                <li>✓ Valid Aadhaar with biometric auth</li>
                <li>✓ Active bank account + NPCI seeded</li>
                <li>✓ Women landowners</li>
                <li>✓ Tenant cultivators (state-specific)</li>
                <li>✓ Tribal & forest rights holders (FRA patta)</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <h3 className="font-black text-red-800 dark:text-red-300 text-sm mb-2">❌ Excluded</h3>
              <ul className="space-y-1.5 text-xs text-[var(--color-text-muted)]">
                <li>✗ Income tax filers (last assessment year)</li>
                <li>✗ Government employees (Group D excepted)</li>
                <li>✗ Monthly pension ≥ ₹10,000</li>
                <li>✗ Doctors, Engineers, CA, Lawyers</li>
                <li>✗ Institutional landholders (trusts/companies)</li>
                <li>✗ MPs, MLAs, Ministers</li>
                <li>✗ Mayors, Municipal Chairpersons</li>
              </ul>
            </div>
          </div>
          <DB>
            <strong>Important:</strong> Adult children alag family maane jaate hain agar unki zameen alag hai. Sirf minor children parents ke saath count hote hain.
          </DB>
        </section>

        {/* 3 Mandatory Conditions */}
        <section className="mb-8">
          <SH>3 Zaroori Shartein — Inke Bina Payment Ruk Jaayegi</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Eligible hone ke baad bhi yeh teen technical conditions puri na hon toh disbursement hold. 90% pending cases inhi wajah se:
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl p-4">
              <h3 className="font-black text-blue-900 dark:text-blue-300 text-sm mb-2">1. Digital Authentication (eKYC)</h3>
              <p className="text-xs text-[var(--color-text-muted)] mb-2">Aadhaar-based biometric ya OTP verification. One-time process lekin Aadhaar update hone par re-verification required.</p>
              <p className="text-xs text-blue-700 dark:text-blue-400 font-semibold">Fix: pmkisan.gov.in → eKYC → OTP. Ya CSC par fingerprint scan.</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded-r-xl p-4">
              <h3 className="font-black text-purple-900 dark:text-purple-300 text-sm mb-2">2. NPCI Bank Account Mapping</h3>
              <p className="text-xs text-[var(--color-text-muted)] mb-2">Bank account Aadhaar se link + NPCI mapper mein registered. Sirf Aadhaar linking kaafi nahi — NPCI seeding alag process.</p>
              <p className="text-xs text-purple-700 dark:text-purple-400 font-semibold">Fix: Bank branch → "Aadhaar NPCI seeding form" → 7-10 din activate.</p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl p-4">
              <h3 className="font-black text-amber-900 dark:text-amber-300 text-sm mb-2">3. Land Record Integration</h3>
              <p className="text-xs text-[var(--color-text-muted)] mb-2">Zameen ka record state database se central portal par sync. "Land Seeding: No" = payment generate nahi hogi.</p>
              <p className="text-xs text-amber-700 dark:text-amber-400 font-semibold">Fix: Patwari se Khasra-Khatauni update → BAO application → 15-30 din sync.</p>
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="mb-8">
          <SH>Common Rejection Reasons & Fixes</SH>
          <div className="space-y-3">
            {[
              { err: 'Amount Credit Nahi Hua', fix: 'Status check karo. FTO Generated? → 48h wait. Pending? → eKYC check. Land Seeding No? → Patwari. NPCI not mapped? → Bank. Sab theek phir bhi nahi? → Helpline 155261.' },
              { err: 'Digital Authentication Pending', fix: 'pmkisan.gov.in → eKYC → Aadhaar → OTP verify. OTP na aaye toh 10 min baad retry. Biometric option se CSC bhi ja sakte ho. Bina auth future disbursement nahi.' },
              { err: 'Name Mismatch / Auth Failed', fix: 'Aadhaar aur portal par naam exactly match hona chahiye. Middle name, spelling, surname — sab count. BAO se written application + Aadhaar copy. 15-20 din correction.' },
              { err: 'Payment Reversed', fix: 'Bank account inactive/closed/name mismatch. Bank visit → account active → "DBT enable" confirmation → updated IFSC + account number portal par. Next cycle auto-retry.' },
              { err: 'Duplicate Entry', fix: 'Ek Aadhaar = ek registration. Do baar register = dono reject. District Agriculture Officer → de-duplication request → sahi retain, galat delete.' },
            ].map(({ err, fix }) => (
              <div key={err} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
                <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5">
                  <p className="font-black text-red-800 dark:text-red-300 text-sm">❌ {err}</p>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0 mt-0.5">FIX:</span>
                    <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">{fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* State-wise Timeline */}
        <section className="mb-8">
          <SH>State-Wise Release Timeline</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Central funds release karti hai, actual credit timing state verification speed par depend karti hai:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">States</th>
                  <th className="p-3 text-left">Timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50 dark:bg-green-900/20">
                  <td className="p-3 border-b border-[var(--color-border)] font-semibold text-xs text-[var(--color-text)]">Fast</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">UP, MP, Maharashtra, Gujarat, Haryana</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">1-3 din</td>
                </tr>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-3 border-b border-[var(--color-border)] font-semibold text-xs text-[var(--color-text)]">Normal</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Bihar, Rajasthan, Karnataka, Telangana, TN</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">3-7 din</td>
                </tr>
                <tr className="bg-amber-50 dark:bg-amber-900/20">
                  <td className="p-3 border-b border-[var(--color-border)] font-semibold text-xs text-[var(--color-text)]">Delayed</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">Jharkhand, Odisha, Chhattisgarh, NE States</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">7-15 din</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--color-text-muted)]">General estimate. 15 din baad bhi na aaye toh helpline contact karo.</p>
        </section>

        {/* Helpline */}
        <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200 dark:border-green-800 p-5 mb-8">
          <h3 className="font-black text-green-800 dark:text-green-300 mb-3 text-base">Official Helpline & Support</h3>
          <p className="text-xs text-[var(--color-text-muted)] mb-3">Free help. Kisi private agent ko paise mat do:</p>
          <div className="text-sm text-[var(--color-text)] space-y-1.5">
            <p>📞 Toll Free: <a href="tel:155261" className="font-bold text-green-700 dark:text-green-400 hover:underline">155261</a> (24×7)</p>
            <p>📞 Delhi Office: <a href="tel:01124300606" className="font-bold text-green-700 dark:text-green-400 hover:underline">011-24300606</a> (Mon-Sat, 10AM-6PM)</p>
            <p>📧 Email: <a href="mailto:pmkisan-ict@gov.in" className="font-bold text-green-700 dark:text-green-400 hover:underline">pmkisan-ict@gov.in</a></p>
            <p>🌐 Portal: <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="font-bold text-green-700 dark:text-green-400 hover:underline">pmkisan.gov.in ↗</a></p>
            <p>📱 Grievance: <a href="https://pgportal.gov.in" target="_blank" rel="noopener noreferrer" className="font-bold text-green-700 dark:text-green-400 hover:underline">pgportal.gov.in ↗</a></p>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="23rd Installment FAQ 2026 — Verified Answers" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="Official Beneficiary Status Portal"
          guide="Abhi Status Verify Karo"
          guideHref="/articles/pm-kisan-ekyc-online-2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="📅"
          title="Apni Installment Track Karo"
          desc="Kitni kist aayi, kitni pending, arrears calculation — sab free"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-ekyc-online-2026', l: '🔐 eKYC Guide' },
          { href: '/articles/pm-kisan-payment-failed-status-2026', l: '💸 Payment Fix' },
          { href: '/calculator/installment-tracker', l: '📅 Tracker' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}