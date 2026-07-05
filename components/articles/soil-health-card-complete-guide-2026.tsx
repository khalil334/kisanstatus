'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-06-27T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status', emoji: '📅' },
  { slug: 'NanoDap500mlPriceInIndia2026', title: 'Nano DAP Price Guide', emoji: '🌱' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Credit Card Guide', emoji: '💳' },
  { slug: 'AgriStackKyaHai2026', title: 'Digital Kisan ID', emoji: '🆔' },
  { slug: 'mandi-bhav-today', title: 'Aaj Ka Mandi Bhav', emoji: '📈' },
];

const FAQS_DATA = [
  { q: 'Kitne time baad dobara mitti test karwana chahiye?', a: 'Dekho bhai, official recommendation hai har 2-3 saal mein. Agar monsoon mein zyada barish hui ya fasal pattern badla (gehun se chawal) toh turant test karwao. Mitti ki composition badal jaati hai time ke saath.' },
  { q: 'Kirayedar kisan (batai dar) bhi test karwa sakte hain?', a: 'Haan bilkul karwa sakte hain bhai. Zameen ka maalik hona zaroori nahi. Patta agreement ya land possession proof chahiye bas. Jo kheti karta hai woh eligible hai.' },
  { q: 'Report mein likhi salah follow karna zaroori hai?', a: 'Strongly recommended hai lekin mandatory nahi bhai. Report guideline hai — aapki mitti ki specific condition ke hisaab se. Samajh na aaye toh KVK ya krishi vibhag se consult karo.' },
  { q: '30 din se zyada ho gaye aur card nahi aaya?', a: 'Pehle portal par status check karo bhai. "Sample Under Testing" = thoda wait karo. Koi update nahi = helpline call karo ya CSC jao. Kabhi-kabhi sample lab tak nahi pahunchta.' },
  { q: 'Kya ye report kisi aur kaam aati hai?', a: 'Haan bhai, bahut kaam aati hai. KCC loan, crop insurance claim, organic certification, fertilizer subsidy — kai jagah useful hoti hai ye report.' },
  { q: 'Test kitna mehnga hai?', a: 'Official portal par bilkul muft hai bhai. CSC service charge ₹20-50 (state-wise). Print ₹10-20. Correction muft. ₹100+ maange toh complaint karo turant.' },
  { q: 'Password bhool gaye — kya karein?', a: '"Forgot Password" click karo → registered mobile daalo → OTP se naya password set karo. Password kahin likh ke rakho bhai, yaad nahi rehta kabhi-kabhi.' },
];

export default function SoilHealthCardCompleteGuide2026({ article }: { article: ArticleMeta }) {
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
            <span className="text-white font-bold">Soil Health Card Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Mitti Jaanch Guide 2026</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Soil Health Card 2026: Registration Se Lekar PDF Download + Report Samajhne Tak Ka Complete Guide
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 11 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* IMAGE 1: Hero — PATH UNCHANGED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/soil-health-card-complete-guide-2026/hero.webp'}
            alt="Soil health card registration process — CSC centre par form bharte hue kisan 2026"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            CSC Centre Ya Online Portal Se Registration Ka Process
          </p>
        </div>

        {/* Intro */}
        <section className="mb-8">
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Dekho bhai, kai saalon se ek hi fasal ugane ya galat matra mein khaad dalne se zameen ki quality gir jaati hai. Isliye Bharat sarkar ne 2015 mein Soil Health Card Yojana shuru ki thi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Har kisan apni mitti ka test karwa sakta hai — muft ya bahut kam kharch mein. Report mein likha hota hai: kaunse nutrients hain, kaunse kam hain, aur kaunsi fasal ke liye kitni khaad chahiye.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Is guide mein registration se PDF download tak ka poora process hai — official portal ke mutabik. Seedhi baat, koi ghuma-phira ke nahi.
          </p>
        </section>

        {/* What Is Soil Health Card */}
        <section className="mb-8">
          <SH>Soil Health Card Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jaise doctor blood test ke baad report deta hai, waise hi krishi vibhag mitti ka test karke report deta hai bhai. 12 parameters check hote hain:
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-4">
            <ul className="space-y-1 text-xs text-[var(--color-text-muted)]">
              <li>✓ pH maan — mitti khatti hai ya khari</li>
              <li>✓ Nitrogen (N), Phosphorus (P), Potassium (K)</li>
              <li>✓ Organic Carbon — zameen ki urvarakta</li>
              <li>✓ Micronutrients — Zinc, Iron, Copper, Manganese, Boron</li>
              <li>✓ Fasal-wise khaad ki salah</li>
              <li>✓ Mitti ka prakar — balui, domat, chikni</li>
            </ul>
          </div>
          <IB>
            <strong>Validity:</strong> Report 2-3 saal valid rehti hai bhai. Uske baad dobara test karwao — mitti ki composition samay ke saath badalti hai.
          </IB>
        </section>

        {/* Why Important */}
        <section className="mb-8">
          <SH>Test Karwana Kyun Zaroori Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bahut se kisan bhai bina jaane saalon se ek hi khaad daal rahe hain. Nuksan kya hota hai:
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
              <p className="text-[11px] text-[var(--color-text-muted)] mt-1">Galat khaad se fasal quality girti hai</p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4 text-center">
              <span className="text-3xl block mb-2">🌱</span>
              <p className="font-black text-orange-800 dark:text-orange-300 text-sm">Mitti Kharab</p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-1">Lambi avadhi mein zameen banjar ho sakti hai</p>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            KVK scientists ke mutabik, Bharat ki kaafi zameenon mein zinc ki kami hai bhai. Kai ilaqon mein phosphorus bahut kam, kuch jagah nitrogen zaroorat se zyada. Bina test kiye pata nahi chalta.
          </p>
          <IB>
            <strong>Tip:</strong> Pichhle 3 saal se test nahi karwaya? Ek baar zaroor karwao bhai. Khaas kar agar monsoon mein zyada barish hui ya fasal pattern badla.
          </IB>
        </section>

        {/* Registration Process */}
        <section className="mb-8">
          <SH>Enrollment Kaise Karein? Dono Tarike</SH>

          <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-700 rounded-xl">
            <h3 className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">Tarika 1: CSC Centre (Offline)</h3>
            <StepList>
              <SI n={1}>Nazdiki CSC ya Krishi Seva Kendra dhundo</SI>
              <SI n={2}>Le jaao: Aadhaar card, mobile, khasra/khatauni number</SI>
              <SI n={3}>Operator form bharega, details verify karega</SI>
              <SI n={4}>Enrollment number milega — sambhal ke rakho</SI>
              <SI n={5}>Mitti sample lene ka time fix hoga</SI>
            </StepList>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
            <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Tarika 2: Online (Ghar Baithe)</h3>
            <StepList>
              <SI n={1}><strong>soilhealth.dac.gov.in</strong> par jao</SI>
              <SI n={2}>"Farmer Login" ya "New Registration" click karo</SI>
              <SI n={3}>State select karo — har state ka portal alag ho sakta hai</SI>
              <SI n={4}>Form bharo — personal + land + contact details</SI>
              <SI n={5}>Documents upload — Aadhaar, land records</SI>
              <SI n={6}>Submit karo → enrollment number note kar lo</SI>
            </StepList>
          </div>

          <WB>
            <strong>Zaroori:</strong> Jo mobile number doge, wahi active rako bhai. OTP, status updates, PDF link sab usi par aata hai. Number change = CSC jaa ke update karwao.
          </WB>
        </section>

        {/* Documents */}
        <section className="mb-8">
          <SH>Kaunse Documents Chahiye?</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Document</th>
                  <th className="p-3 text-left">Kyun Chahiye</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Aadhaar Card', 'Identity verification'],
                  ['Mobile Number (Active)', 'OTP aur updates'],
                  ['Khasra/Khatauni Number', 'Zameen verify karne ke liye'],
                  ['Land Records (7/12, Jamabandi)', 'Ownership proof — state-wise format alag'],
                  ['Passport Size Photo', 'Kuch states mein mandatory'],
                ].map(([doc, reason], i) => (
                  <tr key={doc} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{doc}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <IB>
            <strong>Tenant Farmers:</strong> Kirayedar kisan bhi eligible hain bhai. Patta agreement ya land possession proof dikhao. Zameen ka maalik hona zaroori nahi.
          </IB>
        </section>

        {/* Status Check */}
        <section className="mb-8">
          <SH>Status Kaise Check Karein?</SH>
          <StepList>
            <SI n={1}><strong>soilhealth.dac.gov.in</strong> kholo</SI>
            <SI n={2}>"Track Application Status" click karo</SI>
            <SI n={3}>Enrollment number ya mobile number daalo</SI>
            <SI n={4}>OTP verify karo</SI>
            <SI n={5}>Status dikh jayega</SI>
          </StepList>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Matlab</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Application Received ⏳', 'Form prapt ho gaya', 'Wait karo'],
                  ['Sample Under Testing 🔬', 'Lab mein test ho raha', '7-10 din wait'],
                  ['Report Generated 📋', 'Test complete', 'Download ka wait'],
                  ['Card Ready ✅', 'PDF taiyar', 'Login → Download'],
                ].map(([status, meaning, action], i) => (
                  <tr key={status} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{status}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{meaning}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-medium">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <IB>
            <strong>Processing Time:</strong> Official 15 din batata hai bhai. Actual: 10-25 din (state/season dependent). 30+ din = helpline par sampark karo.
          </IB>
        </section>

        {/* IMAGE 2: Dashboard — PATH UNCHANGED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/soil-health-card-complete-guide-2026/dashboard-2.webp"
            alt="Soil health card portal dashboard — Card Ready message and Download PDF button"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Portal Dashboard — Jab Card Download Ke Liye Taiyar Ho
          </p>
        </div>

        {/* PDF Download */}
        <section className="mb-8">
          <SH>PDF Download Kaise Karein?</SH>
          <StepList>
            <SI n={1}><strong>soilhealth.dac.gov.in</strong> → Farmer Login → enrollment + password</SI>
            <SI n={2}>Dashboard par <strong>"Download Soil Health Card"</strong> button dikhega</SI>
            <SI n={3}>Click karo → new tab mein PDF khulegi</SI>
            <SI n={4}>Save karo ya print nikalo</SI>
          </StepList>
          <WB>
            <strong>PDF Open Nahi Ho Rahi?</strong> Pop-up blocker disable karo bhai. Alag browser try karo. Mobile par PDF viewer install karo. Phir bhi na ho toh CSC se print nikalwao.
          </WB>
        </section>

        {/* Common Problems */}
        <section className="mb-8">
          <SH>Common Problems + Solutions</SH>
          <div className="space-y-3">
            {[
              { err: 'Naam Mein Spelling Galat', fix: 'CSC jao → Aadhaar dikhao → correction form bharo. Extra charge nahi lagta bhai.' },
              { err: 'Website Khul Nahi Rahi', fix: 'Subah 6-8 AM try karo (low server load). WiFi use karo. Ya CSC chale jao.' },
              { err: 'OTP Nahi Aa Raha', fix: 'Network check karo. SMS inbox full? Spam folder dekho. 5 min wait → resend. Phir bhi nahi = CSC se mobile update.' },
              { err: 'Password Bhool Gaye', fix: '"Forgot Password" → registered mobile → OTP → naya password set. Kahin likh ke rakho bhai.' },
              { err: 'Card Kho Gaya', fix: 'Portal login → dobara download. Ya CSC se duplicate print (₹10-15).' },
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

        {/* How To Read Report */}
        <section className="mb-8">
          <SH>Report Ko Kaise Samjhein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har parameter ka normal range hota hai bhai. Uske andar hona chahiye:
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-4">
            <ul className="space-y-2 text-xs text-[var(--color-text-muted)]">
              <li><strong>pH:</strong> 6.0-7.5 normal. Kam/zyada = growth ruk sakti hai.</li>
              <li><strong>Nitrogen:</strong> Growth ke liye. Kam = patte peele.</li>
              <li><strong>Phosphorus:</strong> Jad + phool. Kam = fasal der se pakta.</li>
              <li><strong>Potassium:</strong> Quality + disease resistance. Zyada bhi nuksan.</li>
              <li><strong>Organic Carbon:</strong> Urvarakta. 0.5%+ hona chahiye.</li>
              <li><strong>Zinc:</strong> Bahut si zameenon mein kami. Chhoti matra mein zaroori.</li>
            </ul>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Report ke aakhri page par fasal-wise khaad salah hoti hai — kitni urea, DAP, MOP, organic khaad. Follow karo bhai — na kam, na zyada.
          </p>
          <IB>
            <strong>Expert Advice:</strong> Sirf N-P-K tak seemit mat raho bhai. Micronutrients (zinc, iron, copper) bhi utne hi zaroori hain. Samajh na aaye toh KVK se salah lo.
          </IB>
        </section>

        {/* Cost */}
        <section className="mb-8">
          <SH>Kitna Kharch Aata Hai?</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Service</th>
                  <th className="p-3 text-left">Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Soil Test (Official)', 'Muft'],
                  ['CSC Service Charge', '₹20-50'],
                  ['Sample Collection (staff)', 'Muft / Nominal'],
                  ['Print/Photocopy', '₹10-20'],
                  ['Correction', 'Muft'],
                ].map(([service, cost], i) => (
                  <tr key={service} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{service}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-bold">{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <DB>
            <strong>Warning:</strong> ₹100+ charge = galat hai bhai. Helpline par complaint karo ya doosre CSC jao.
          </DB>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Soil Health Card FAQ 2026 — Verified Answers" />
        </section>

        {/* Helpline */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-5 mb-8 space-y-2">
          <p className="font-black text-[var(--color-text)] text-base mb-2">Sahayata Ke Liye Sampark</p>
          <p className="text-sm text-[var(--color-text-muted)]">📞 Helpline: <a href="tel:18001801551" className="font-bold text-[var(--color-primary)] hover:underline">1800-180-1551</a> (Toll-free, Mon-Sat 9AM-6PM)</p>
          <p className="text-sm text-[var(--color-text-muted)]">📧 Email: <a href="mailto:soilhealth-dac@nic.in" className="font-bold text-[var(--color-primary)] hover:underline">soilhealth-dac@nic.in</a></p>
          <p className="text-sm text-[var(--color-text-muted)]">🌐 Portal: <a href="https://soilhealth.dac.gov.in" target="_blank" rel="noopener noreferrer" className="font-bold text-[var(--color-primary)] hover:underline">soilhealth.dac.gov.in ↗</a></p>
          <p className="text-sm text-[var(--color-text-muted)]">🏢 Local: District KVK ya Agriculture Department office</p>
        </div>

        {/* Final CTA */}
        <div className="my-8 p-5 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl text-center">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-2">Kya Aapne Mitti Test Karwaya?</h3>
          <p className="text-sm text-green-700 dark:text-green-400 mb-3">
            Haan = report ki salah follow karo bhai. Nahi = aaj hi enrollment karwao. Sahi khaad, sahi matra — yahi safalta ka raaz hai.
          </p>
        </div>

        <GovLink
          href="https://soilhealth.dac.gov.in"
          label="Soil Health Card — Official Portal"
          guide="Abhi Enrollment Karo"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="soilhealth.dac.gov.in"
        />

        <CalcBanner
          icon="🌾"
          title="Apni Fasal Ki Income Calculate Karo"
          desc="MSP income, crop profit — soil report ke saath milake plan karo"
          primaryCta={{ href: '/calculator/msp-income', label: '📊 MSP Calculator →' }}
          secondaryCta={{ href: '/calculator/crop-profit', label: '🌾 Crop Profit' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/NanoDap500mlPriceInIndia2026', l: '🌱 Nano DAP Price' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
          { href: '/calculator/msp-income', l: '📊 MSP Calculator' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}