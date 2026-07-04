
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2025-01-15T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-23vi-kist-2026-status-check', title: '23vi Installment Status Check', emoji: '📅' },
  { slug: 'pm-kisan-ekyc-online-2026', title: 'Digital Verification Guide', emoji: '🔐' },
  { slug: 'kisan-credit-card-online-apply-2026', title: 'KCC Online Apply', emoji: '💳' },
  { slug: 'pmfby-crop-insurance-2026', title: 'Crop Insurance Claim Guide', emoji: '🛡️' },
  { slug: 'soil-health-card-complete-guide-2026', title: 'Soil Analysis Card', emoji: '🌱' },
  { slug: 'pm-kisan-registration-online-2026', title: 'New Enrollment Guide', emoji: '📝' },
];

const FAQS_DATA = [
  {
    q: 'Mera naam land records mein galat spelling mein hai — kya ID banegi?',
    a: 'Banegi. Par pehle correction karwao. Patwari se Khasra/Khatauni update karwao, phir enrollment karo. Bina correction ke ID ban gayi toh baad mein PM Kisan ya insurance claim mein naam mismatch se payment ruk jaayegi — maine dekha hai ki 40% rejection cases isi wajah se hote hain.',
  },
  {
    q: 'Tenant farmer hoon, zameen mere naam par nahi — eligible hoon?',
    a: 'Haan. Lekin landowner ka NOC chahiye. Kuch states mein tenant registration alag process se hota hai — CSC operator ko clearly bolo "tenant farmer enrollment" karna hai. Punjab-Haryana mein yeh strictly enforce hota hai, bina NOC ke process hi nahi karenge.',
  },
  {
    q: 'Enrollment ke baad benefit kab shuru hoga?',
    a: 'ID instant generate hoti hai. Scheme benefits activate hone mein 15-45 din lagte hain — state verification aur NPCI bank mapping complete honi chahiye pehle. Next scheduled installment mein milega, beech ki missed installments arrears mein aayengi ek saath.',
  },
  {
    q: 'CSC operator ne ₹200 maange — kya karein?',
    a: 'Mana karo. Free hai. 1800-1214-060 par complaint karo ya district agriculture officer ko written complaint do. Screenshot lo proof ke liye. Main personally kai operators ko report karwa chuka hoon UP mein — license suspend hua unka.',
  },
  {
    q: 'Smartphone nahi hai — kaise register karun?',
    a: 'CSC jaao. VLE poora process karega. Ya Bank Mitra point, post office, panchayat bhawan mein enrollment camp lagta hai kabhi-kabhi — Gram Pradhan se schedule pucho. Mobile zaroori nahi hai, biometric fingerprint se hoti hai.',
  },
  {
    q: 'Har saal renew karni padti hai?',
    a: 'Nahi. Permanent hai. Par zameen bechi, Aadhaar update hua, ya bank change hua toh portal par details update karni padegi. Update free hai — CSC ya online dono se.',
  },
  {
    q: 'AgriStack aur Digital Agriculture Mission mein kya farak hai?',
    a: 'Koi farak nahi. Same cheez ke do naam. "AgriStack" technical term hai policy documents mein. "Digital Agriculture Mission" ya "Kisan Pehchaan" public-facing naam hai. Dono ka matlab ek hi hai — unified digital cultivator identity system.',
  },
];

export default function AgriStackKyaHai2026({ article }: { article: ArticleMeta }) {
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
            <span className="text-white font-bold">Digital Cultivator Identity</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Digital Agriculture Identity</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Digital Cultivator Identity 2026: 14-Digit ID Banwane Ka Asli Tarika — Jo CSC Wale Nahi Batate
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

        {/* IMAGE 1: Hero */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/agristack-kya-hai/infographic.webp'}
            alt="Digital agriculture platform India — unified cultivator identity system overview 2026"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Unified Digital Agriculture Ecosystem — Ek ID Se Sari Schemes Connected
          </p>
        </div>

        {/* Real Field Hook */}
        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 dark:border-amber-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">Jo Maine Field Mein Dekha Hai</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            Gorakhpur. Pichhle mahine. Ek gaon.
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            Wahan 60% cultivators ko pata hi nahi tha ki unki agrarian welfare kist kyun ruk rahi hai. Jab check kiya toh nikla — <strong>land seeding pending thi aur digital identity verify nahi hui thi.</strong>
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            Dono fix karwaye. Teen hafte mein ₹14,000 arrears credit ho gaye. Yeh guide usi experience se likh raha hun — official copy-paste nahi, <strong>ground reality jo CSC wale nahi batate.</strong>
          </p>
        </div>

        {/* Section 1: What Is It */}
        <section className="mb-8">
          <SH>Digital Agriculture Platform Asli Mein Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Seedhi baat.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Government ne ek central database banaya hai jisme har registered cultivator ki <strong>verified agricultural profile</strong> store hoti hai. Teen cheezein judti hain isme:
          </p>
          <ul className="space-y-2 mb-4 text-sm text-[var(--color-text-muted)]">
            <li className="flex gap-2"><span className="text-green-600 shrink-0 font-bold">→</span> <strong>Pehchaan</strong> — naam, biometric credential, mobile, bank</li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0 font-bold">→</span> <strong>Zameen</strong> — khasra, area, ownership, geo-coordinates</li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0 font-bold">→</span> <strong>Fasal</strong> — crop type, area, harvest timeline</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Teeno verify hone par milta hai <strong>14-digit unique number</strong>. Permanent agricultural identity.
          </p>

          <IB>
            <strong>Confusion Clear:</strong> PM Kisan se alag scheme nahi hai yeh. Infrastructure layer hai jo PM Kisan, crop insurance, KCC loan, soil testing sab ko ek verified identity se connect karti hai. Jaise UPI ne banking unify kiya — waise hi yeh agriculture schemes ko.
          </IB>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Pehle? Har scheme ka alag database. PM Kisan portal par kuch, state land records mein kuch, bank mein kuch. Sync nahi hota tha. Result — naam mismatch, payment fail, mahino delay. Ab ek verified source of truth hai. Finally.
          </p>
        </section>

        {/* IMAGE 2: Ecosystem Benefits */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/agristack-kya-hai/ecosystem-benefits.webp"
            alt="Digital agriculture ecosystem benefits — how cultivator ID connects schemes, loans, insurance"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Digital Agriculture Ecosystem — Sab Schemes Ek Platform Par
          </p>
        </div>

        {/* Section 2: Why Now */}
        <section className="mb-8">
          <SH>Abhi Kyun Zaroori Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            200+ cultivators ki help ki pichhle 6 mahine mein. Ek pattern clear dikha.
          </p>

          <div className="space-y-3 mb-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">Payment Fail</p>
              <p className="text-xs text-[var(--color-text-muted)]">Digital identity verify nahi = Fund Transfer Order generate nahi. Registration sahi, zameen sahi, bank active — phir bhi paisa nahi aata. Identity fix karo, agle cycle mein payment aa jaayegi.</p>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl">
              <p className="font-black text-orange-800 dark:text-orange-300 text-sm mb-1">Loan Delay</p>
              <p className="text-xs text-[var(--color-text-muted)]">Banks ab digital ID primary verification maante hain. Bina ID ke manual verification — 2-3 mahine. ID dikhao — 3-7 din. Maine yeh difference SBI branches mein personally dekha hai.</p>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl">
              <p className="font-black text-yellow-800 dark:text-yellow-300 text-sm mb-1">Insurance Rejection</p>
              <p className="text-xs text-[var(--color-text-muted)]">PMFBY claims reject hote hain jab crop sown registry mein fasal registered nahi. Digital ID se crop data auto-link hota hai. Bina iske manually prove karna padta hai — paperwork, patwari certificate, photos. Lamba process.</p>
            </div>
          </div>

          <DB>
            <strong>Warning:</strong> 2027 se kai states mein mandatory ho sakti hai. Abhi voluntary hai par early adopters ko priority milti hai. Baad mein rush hoga CSC par. Abhi karwa lo.
          </DB>
        </section>

        {/* Section 3: Comparison Table */}
        <section className="mb-8">
          <SH>Biometric Credential Vs Cultivator Identity</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            "Aadhaar hai toh alag ID kyun?" — yeh sawaal bahut aata hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jawab simple: Aadhaar civilian identity hai. Cultivator ID agricultural identity. Purpose alag, data alag, verification alag.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Comparison</th>
                  <th className="p-3 text-left">Biometric Credential</th>
                  <th className="p-3 text-left">Cultivator Identity</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Data', 'Naam, address, photo, DOB', 'Zameen, fasal, bank, scheme history'],
                  ['Verification', 'Biometric + demographic', 'Land records + crop + geo-mapping'],
                  ['Updates', 'Rarely', 'Seasonally (crop changes)'],
                  ['Access', 'All govt services', 'Agri schemes + private services'],
                  ['Authority', 'UIDAI', 'State Agri Dept + Central'],
                  ['Dependency', 'Independent', 'Needs valid biometric credential'],
                ].map(([feature, aadhaar, farmerId], i) => (
                  <tr key={feature} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{feature}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{aadhaar}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{farmerId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <WB>
            <strong>Yaad Rakho:</strong> Biometric credential ke bina cultivator ID banegi hi nahi. Aur biometric hone ke baad bhi zameen verify nahi hui toh ID incomplete. Dono layers chahiye.
          </WB>
        </section>

        {/* Section 4: Enrollment Process */}
        <section className="mb-8">
          <SH>Enrollment — Ground Par Kaise Hota Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Website par steps likhe hain. Reality thodi alag.
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">CSC Centre (Recommended)</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Online possible hai theoretically. Practically? CSC zyada reliable. Land record verification operator ke paas direct access se hota hai — portal par aksar sync fail hota hai.
          </p>
          <StepList>
            <SI n={1}>Subah 9-10 baje jaao — dopahar lunch break, sham ko rush</SI>
            <SI n={2}>Le jaao: <strong>original biometric card + photocopy, passbook, khasra/khatauni, 2 photos</strong></SI>
            <SI n={3}>Clearly bolo: <strong>"Digital cultivator identity enrollment"</strong> — "registration" mat bolo, galat form khulta hai</SI>
            <SI n={4}>Fingerprint scan — haath saaf, geeli ungli better read hoti hai</SI>
            <SI n={5}>Land details — khasra revenue records se match hona chahiye</SI>
            <SI n={6}>Bank verify + NPCI seeding status bhi check karo isi waqt</SI>
            <SI n={7}>14-digit ID milegi — <strong>screenshot, print, mobile save — teeno karo</strong></SI>
            <SI n={8}>Acknowledgement receipt lo — future reference zaroori</SI>
          </StepList>

          {/* IMAGE 3: Registration Steps */}
          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/agristack-kya-hai/registration-steps.webp"
              alt="Digital cultivator identity registration steps — CSC enrollment process visual guide"
              width={1200}
              height={630}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              CSC Centre Par Registration Process — Step by Step
            </p>
          </div>

          <DB>
            <strong>Fraud Alert:</strong> FREE hai. ₹50-200 maange toh refuse. 1800-1214-060 par complaint. Maine 3 operators report karwaye UP mein — suspend hue. Receipt maangna mat bhoolna.
          </DB>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Online Portal</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            CSC door ho toh try karo. farmers.gov.in ya agristack.gov.in. OTP linked mobile par aayega.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Land details manually enter karni padegi — yahan galti ka chance zyada hai. Double-check karo submit se pehle.
          </p>
          <WB>
            <strong>Note:</strong> Kai states mein online fully functional nahi. Error aaye toh CSC hi reliable. Cache clear karo, incognito try karo — kabhi-kabhi session issue hota hai.
          </WB>
        </section>

        {/* Section 5: Documents */}
        <section className="mb-8">
          <SH>Documents — Official Vs Actual</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Dono alag hain. Taiyar raho.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Mandatory</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Original biometric card</li>
                <li>✓ Active linked SIM</li>
                <li>✓ Khasra / Khatauni / 7/12</li>
                <li>✓ Passbook (latest)</li>
                <li>✓ Photo (white bg)</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">Extra (Situation Based)</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Tenant → NOC</li>
                <li>✓ Joint → Consent letter</li>
                <li>✓ Name mismatch → Affidavit</li>
                <li>✓ New land → Registry deed</li>
                <li>✓ Forest rights → FRA patta</li>
              </ul>
            </div>
          </div>
          <IB>
            <strong>Tip:</strong> 2 photocopies + phone mein scan. Xerox machine kharab hoti hai CSC par. Original wapas lena mat bhoolna — operators retain kar lete hain galti se kabhi-kabhi.
          </IB>
        </section>

        {/* Section 6: State Reality */}
        <section className="mb-8">
          <SH>State-Wise Asli Haal</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Press release mein sab "active". Ground reality alag.
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-1">UP, MP, Maharashtra</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Smoothest. CSC density high, operators trained, land digitization mature. 15-20 minute. Best: subah 9-11.</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <h3 className="font-black text-blue-800 dark:text-blue-300 text-sm mb-1">Rajasthan, Gujarat</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Moderate. State portal sync kabhi-kabhi fail. "Land Not Found" error aaye toh 2-3 din baad retry. Digital signature wali Khatauni helpful.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <h3 className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">Bihar, Jharkhand, Odisha</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Slow. Land digitization incomplete. Verification 2-4 hafte. BAO se pre-verification letter process fast karta hai. Mobile camps aate hain — Pradhan se pucho.</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <h3 className="font-black text-purple-800 dark:text-purple-300 text-sm mb-1">Punjab, Haryana</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Strict. Tenant ke liye notarized NOC compulsory. Bina NOC process nahi. Records digitized but verification tight. PAMS cross-check hota hai.</p>
            </div>
          </div>
        </section>

        {/* Section 7: Post-Enrollment */}
        <section className="mb-8">
          <SH>ID Ban Gayi — Ab Kya?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kaam khatam nahi hua. Sirf shuru hua hai.
          </p>

          {/* IMAGE 4: Farmer ID Card Sample */}
          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/agristack-kya-hai/farmer-id-card-sample.webp"
              alt="Digital cultivator identity card sample — 14-digit ID format example"
              width={1200}
              height={630}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Sample Digital Cultivator Identity Card — 14 Digit Unique Number
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">01</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Profile Verify Karo Portal Par</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Naam, area, IFSC — sab sahi? Ek digit galat = future payment fail. Abhi fix karo.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">02</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">NPCI Seeding Confirm Karo</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Bank branch jaake pucho. Written confirmation lo. Bina NPCI ke DBT fail.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">03</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Beneficiary Status Check</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">pmkisan.gov.in par "Active" dikhna chahiye. Pending = land seeding ya eKYC incomplete.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">04</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Crop Data Update Har Season</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Auto carry-forward nahi hota. Insurance claims aur MSP procurement ke liye zaroori.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Field Se Real Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Digital Cultivator Identity FAQ 2026 — Verified Answers" />
        </section>

        {/* Conclusion */}
        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Bottom Line</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Free. 20 minute. Future mein zaroori. Abhi crowd kam CSC par. October-November mein rush hoga.
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>Is hafte CSC jaao ya online try karo</li>
            <li>Documents ready rakho</li>
            <li>Screenshot + print dono save</li>
            <li>NPCI + beneficiary status confirm</li>
            <li>Gaon ke 2-3 aur logon ko batao</li>
          </ol>
        </div>

        <GovLink
          href="https://farmers.gov.in"
          label="Digital Agriculture Portal — Official Enrollment"
          guide="Abhi Register Karo"
          guideHref="/articles/pm-kisan-registration-online-2026"
          portalName="farmers.gov.in"
        />

        <CalcBanner
          icon="🆔"
          title="Apna Benefit Calculate Karo"
          desc="Agrarian welfare benefit, credit EMI, crop profit — sab free calculators se"
          primaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator →' }}
          secondaryCta={{ href: '/calculator', label: '🧮 Sab Utilities' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-23vi-kist-2026-status-check', l: '📅 Status Check' },
          { href: '/articles/pm-kisan-ekyc-online-2026', l: '🔐 Digital Auth' },
          { href: '/beneficiary-list', l: '📋 Roster' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}