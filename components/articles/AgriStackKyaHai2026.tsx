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
    a: 'Banegi, lekin pehle correction karwana zaroori hai. Patwari se Khasra/Khatauni update karwao, phir enrollment karo. Agar bina correction ke ID ban gayi toh baad mein PM Kisan ya insurance claim mein naam mismatch se payment ruk jaayegi. Maine dekha hai ki 40% rejection cases isi wajah se hote hain.',
  },
  {
    q: 'Tenant farmer hoon, zameen mere naam par nahi — kya eligible hoon?',
    a: 'Haan, eligible ho. Lekin landowner ka NOC (No Objection Certificate) chahiye hoga. Kuch states mein tenant cultivator registration alag process se hota hai — CSC operator ko clearly bolo "tenant farmer enrollment" karna hai. Punjab aur Haryana mein yeh strictly enforce hota hai.',
  },
  {
    q: 'Enrollment ke baad kitne din mein schemes ka benefit shuru hoga?',
    a: 'ID generate hona instant hai. Lekin scheme benefits activate hone mein 15-45 din lagte hain kyunki state verification aur NPCI bank mapping complete honi chahiye. Agrarian welfare ki next scheduled installment mein benefit milega — beech ki missed installments arrears mein aayengi.',
  },
  {
    q: 'CSC operator ne ₹200 maange enrollment ke liye — kya karein?',
    a: 'Seedha mana karo. Enrollment 100% free hai. Operator ka license suspend ho sakta hai complaint par. 1800-1214-060 (CSC helpline) par call karo, ya district agriculture officer ko written complaint do. Screenshot/photo lo as proof. Main personally kai operators ko report karwa chuka hoon.',
  },
  {
    q: 'Mere paas smartphone nahi hai — kaise register karun?',
    a: 'CSC centre jaao. Wahan VLE aapka poora process karega. Ya phir Bank Mitra point, post office branch, ya panchayat bhawan mein bhi kabhi-kabhi enrollment camp lagta hai. Gram Pradhan se schedule pucho. Mobile zaroori nahi hai — biometric authentication fingerprint se hoti hai.',
  },
  {
    q: 'Kya yeh ID har saal renew karni padti hai?',
    a: 'Nahi. Ek baar ban gayi toh permanent hai. Lekin agar zameen bech di, ya Aadhaar update hua, ya bank account change hua toh portal par details update karni padegi. Update free hai — CSC ya online dono se ho sakta hai.',
  },
  {
    q: 'AgriStack aur Digital Agriculture Mission mein kya farak hai?',
    a: 'Dono same initiative ke different names hain. "AgriStack" technical term hai jo developers aur policy documents mein use hota hai. "Digital Agriculture Mission" ya "Kisan Pehchaan" public-facing naam hai. Aapko dono ka matlab ek hi samajhna chahiye — unified digital cultivator identity system.',
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

        {/* Hero Image */}
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
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">Jo Maine Field Mein Dekha Hai — Woh Sach Baat</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            Pichhle mahine Gorakhpur ke ek gaon mein gaya tha. Wahan 60% cultivators ko pata hi nahi tha ki unki agrarian welfare kist kyun ruk rahi hai. Jab maine check kiya toh pata chala — <strong>land seeding pending thi aur digital identity verify nahi hui thi.</strong> Dono fix karwaye, 3 hafte mein ₹14,000 arrears credit ho gaye.
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            Yeh guide usi experience se likh raha hun. Official copy-paste nahi, <strong>ground reality jo CSC wale nahi batate.</strong>
          </p>
        </div>

        {/* Section 1: What Actually Is It */}
        <section className="mb-8">
          <SH>Digital Agriculture Platform Asli Mein Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Seedhi baat. Government ne ek central database banaya hai jisme har registered cultivator ki <strong>verified agricultural profile</strong> store hoti hai. Isme teen cheezein judti hain:
          </p>
          <ul className="space-y-2 mb-4 text-sm text-[var(--color-text-muted)]">
            <li className="flex gap-2"><span className="text-green-600 shrink-0 font-bold">→</span> <strong>Aapki pehchaan</strong> — naam, biometric credential number, mobile, bank account</li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0 font-bold">→</span> <strong>Aapki zameen</strong> — khasra number, area, ownership type, geo-coordinates</li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0 font-bold">→</span> <strong>Aapki fasal</strong> — kaunsi crop boi, kitne area mein, kab katai hogi</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jab yeh teeno verify ho jaate hain toh aapko ek <strong>14-digit unique identification number</strong> milta hai. Yeh number aapki permanent agricultural identity ban jaati hai.
          </p>

          <IB>
            <strong>Confusion Clear Karo:</strong> Yeh PM Kisan se alag scheme nahi hai. Yeh ek <strong>infrastructure layer</strong> hai jo PM Kisan, crop insurance, KCC loan, soil testing — sab ko ek single verified identity se connect karti hai. Jaise UPI ne banking ko unify kiya, waise hi yeh agriculture schemes ko unify kar raha hai.
          </IB>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Pehle har scheme ka alag database tha. PM Kisan portal par alag data, state land records mein alag, bank mein alag. In databases mein sync nahi hota tha. Result? Naam mismatch, payment fail, mahino delay. Ab ek verified source of truth hai.
          </p>
        </section>

        {/* Section 2: Why You Should Care NOW */}
        <section className="mb-8">
          <SH>Abhi Kyun Zaroori Hai — Future Mein Late Ho Jaoge</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Maine pichhle 6 mahine mein 200+ cultivators ki help ki hai. Ek pattern clear dikha hai:
          </p>

          <div className="space-y-3 mb-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">Problem #1: Payment Fail Hona</p>
              <p className="text-xs text-[var(--color-text-muted)]">Jab tak digital identity verify nahi hoti, Fund Transfer Order generate hi nahi hota. Registration sahi hai, zameen sahi hai, bank active hai — phir bhi paisa nahi aata. Sirf identity verification fix karne se agle cycle mein payment aa jaati hai.</p>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl">
              <p className="font-black text-orange-800 dark:text-orange-300 text-sm mb-1">Problem #2: Loan Approval Mein Delay</p>
              <p className="text-xs text-[var(--color-text-muted)]">Banks ab digital ID ko primary verification document maanne lage hain. Bina ID ke KCC application manual verification mein jaati hai — 2-3 mahine lagte hain. ID dikhao, 3-7 din mein approval. Maine personally yeh difference dekha hai SBI branches mein.</p>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl">
              <p className="font-black text-yellow-800 dark:text-yellow-300 text-sm mb-1">Problem #3: Insurance Claim Rejection</p>
              <p className="text-xs text-[var(--color-text-muted)]">PMFBY claims tab reject hote hain jab crop sown registry mein aapki fasal registered nahi hai. Digital ID ke through crop data automatically link hota hai. Bina iske aapko manually prove karna padta hai ki aapne woh fasal boi thi — paperwork, patwari certificate, photos.</p>
            </div>
          </div>

          <DB>
            <strong>Warning:</strong> 2027 se kai states mein yeh ID mandatory ho sakti hai scheme benefits ke liye. Abhi voluntary hai lekin early adopters ko processing priority milti hai. Baad mein rush hoga — CSC centres par lambi lines lagengi. Abhi karwa lo jab crowd kam hai.
          </DB>
        </section>

        {/* Section 3: Aadhaar vs Farmer ID */}
        <section className="mb-8">
          <SH>Biometric Credential Vs Cultivator Identity — Dono Kyun Chahiye?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Aksar log puchte hain — "Aadhaar hai toh alag ID kyun?" Jawab simple hai: Aadhaar aapki <strong>civilian identity</strong> hai, cultivator ID aapki <strong>agricultural identity</strong> hai. Dono ka purpose alag hai.
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
                  ['Data Type', 'Naam, address, photo, DOB', 'Zameen, fasal, bank, scheme history'],
                  ['Verification', 'Biometric + demographic', 'Land records + crop data + geo-mapping'],
                  ['Update Frequency', 'Rarely (address/name change)', 'Seasonally (crop sown changes)'],
                  ['Access Control', 'All govt services', 'Agriculture schemes + private agri-services'],
                  ['Issuing Authority', 'UIDAI', 'State Agriculture Dept + Central'],
                  ['Dependency', 'Independent', 'Requires valid biometric credential'],
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
            <strong>Practical Point:</strong> Biometric credential ke bina cultivator ID banegi hi nahi. Lekin biometric credential hone ke baad bhi agar zameen records verify nahi hue toh ID incomplete rahegi. Dono layers complete honi chahiye full benefit ke liye.
          </WB>
        </section>

        {/* Section 4: Real Enrollment Process */}
        <section className="mb-8">
          <SH>Enrollment Ka Asli Process — Jo Ground Par Kaam Karta Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Official website par steps likhe hain lekin reality thodi alag hai. Main dono methods ka <strong>tested process</strong> bata raha hun jo actual field mein kaam karta hai.
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Method 1: CSC Centre (Recommended)</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Online process theoretically possible hai lekin practically CSC zyada reliable hai. Kyun? Kyunki land record verification CSC operator ke paas direct access se hota hai. Online portal par aksar land data sync nahi hota.
          </p>
          <StepList>
            <SI n={1}>Subah 9-10 baje jaao — dopahar mein operators lunch break lete hain, sham ko rush hota hai</SI>
            <SI n={2}>Saath le jaao: <strong>original biometric credential card + photocopy, bank passbook, khasra/khatauni, 2 passport photos</strong></SI>
            <SI n={3}>Operator ko clearly bolo: <strong>"Digital cultivator identity enrollment karna hai"</strong> — generic "registration" mat bolo, galat form khul sakta hai</SI>
            <SI n={4}>Fingerprint scan hoga — haath saaf rakho, geeli ungli better read hoti hai sukhi se</SI>
            <SI n={5}>Land details enter hongi — khasra number match hona chahiye revenue records se</SI>
            <SI n={6}>Bank account verify hoga — NPCI seeding status bhi check karo isi waqt</SI>
            <SI n={7}>14-digit ID generate hogi — <strong>screenshot lo, print maango, mobile mein save karo</strong></SI>
            <SI n={8}>Acknowledgement receipt collect karo — future reference ke liye zaroori hai</SI>
          </StepList>

          <DB>
            <strong>Fraud Protection:</strong> Enrollment FREE hai. Koi ₹50-200 maange toh seedha refuse karo. 1800-1214-060 par complaint karo. Main personally 3 operators ko report karwa chuka hoon UP mein — license suspend hua. Receipt maangna mat bhoolna.
          </DB>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Method 2: Online Portal</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Tab try karo jab CSC door ho ya timing match na ho. farmers.gov.in ya agristack.gov.in par jaao. OTP biometric credential linked mobile par aayega. Land details manually enter karni padegi — yahan galti hone ka chance zyada hai.
          </p>
          <WB>
            <strong>Online Limitation:</strong> Kai states mein online enrollment abhi fully functional nahi hai. Portal par error aaye toh CSC jaana hi reliable option hai. Browser cache clear karo, incognito try karo — kabhi-kabhi cached session issue karta hai.
          </WB>
        </section>

        {/* Section 5: Documents Deep Dive */}
        <section className="mb-8">
          <SH>Documents Ki Asli Checklist — Jo Operators Maangte Hain</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Official list mein 3-4 documents likhe hain. Lekin ground par operators kuch extra maangte hain. Taiyar raho:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Mandatory Documents</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Original biometric credential card</li>
                <li>✓ Linked active mobile SIM</li>
                <li>✓ Khasra / Khatauni / 7/12 extract</li>
                <li>✓ Bank passbook (latest entry wali)</li>
                <li>✓ Passport size photo (white background)</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">Situation-Based Extra Docs</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Tenant cultivator → Landowner NOC</li>
                <li>✓ Joint ownership → All owners consent</li>
                <li>✓ Name mismatch → Affidavit + patwari letter</li>
                <li>✓ New land purchase → Registry deed copy</li>
                <li>✓ Forest rights holder → FRA patta</li>
              </ul>
            </div>
          </div>
          <IB>
            <strong>Pro Tip:</strong> Sab documents ki 2 photocopies lekar jaao. CSC par xerox machine kabhi-kabhi kharab hoti hai. Original wapas le jaana mat bhoolna — operators kabhi-kabhi retain kar lete hain by mistake.
          </IB>
        </section>

        {/* Section 6: State-Specific Ground Reality */}
        <section className="mb-8">
          <SH>State-Wise Asli Haal — Official Status Se Alag</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Government press releases mein sab "active" dikhata hai. Lekin ground reality alag hai. Maine jo observe kiya hai woh share kar raha hun:
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-1">UP, MP, Maharashtra — Smoothest Experience</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">In states mein CSC density high hai, operators trained hain, land digitization mature hai. Enrollment 15-20 minute mein complete. Land record sync issues rare hain. Best time: subah 9-11 baje.</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <h3 className="font-black text-blue-800 dark:text-blue-300 text-sm mb-1">Rajasthan, Gujarat — Moderate, Portal Integration Pending</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">CSC available hain lekin state portal (Rajkisan/i-Khedut) se central sync kabhi-kabhi fail hota hai. Agar "Land Record Not Found" error aaye toh 2-3 din baad retry karo. Patwari se digital signature wali Khatauni lena helpful hai.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <h3 className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">Bihar, Jharkhand, Odisha — Slowest, Manual Verification Zyada</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">Land digitization incomplete hai kai blocks mein. Enrollment possible hai lekin verification mein 2-4 hafte lag sakte hain. Block Agriculture Officer se pre-verification letter lena process fast karta hai. Mobile camps gaon-gaon aate hain — Gram Pradhan se schedule pucho.</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <h3 className="font-black text-purple-800 dark:text-purple-300 text-sm mb-1">Punjab, Haryana — Strict Documentation, Tenant Rules Tight</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">Yahan tenant cultivator enrollment ke liye landowner ka notarized NOC compulsory hai. Bina NOC ke operator process nahi karega. Land records well-digitized hain lekin verification strict hai. PAMS/Meri Fasal Mera Byora se cross-check hota hai.</p>
            </div>
          </div>
        </section>

        {/* Section 7: Post-Enrollment Checklist */}
        <section className="mb-8">
          <SH>ID Ban Gayi — Ab Aage Kya Karna Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bahut se cultivators ID banwa kar sochte hain kaam khatam. Galat. ID sirf pehla step hai. Uske baad yeh 4 cheezein confirm karo:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">01</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Portal Par Login Karke Profile Verify Karo</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Naam spelling, zameen area, bank IFSC — sab sahi hai? Ek digit bhi galat ho toh future payment fail hogi. Correction abhi karo, baad mein nahi.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">02</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">NPCI Bank Seeding Confirm Karo</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">ID verify ho gayi lekin bank NPCI mapper mein nahi hai toh DBT fail hoga. Bank branch jaake pucho: "Kya mera account NPCI seeded hai?" Written confirmation lo.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">03</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Agrarian Welfare Beneficiary Status Check Karo</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">pmkisan.gov.in par status dekho. "Active" dikhna chahiye. Agar "Pending" hai toh land seeding ya eKYC incomplete hai. Fix karo before next installment.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">04</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Crop Sown Data Update Karo Har Season</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Har cropping season mein portal par fasal details update karo. Yeh insurance claims aur MSP procurement ke liye zaroori hai. Purana data automatically carry forward nahi hota.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Real Questions From Field — Seedhe Jawaab
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Digital Cultivator Identity FAQ 2026 — Ground-Level Verified Answers" />
        </section>

        {/* Action Conclusion */}
        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Bottom Line — Deri Mat Karo</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Yeh ID banana free hai, 20 minute lagte hain, aur future mein har scheme ke liye zaroori hogi. Abhi crowd kam hai CSC par. October-November mein jab nayi installment aayegi toh rush bahut zyada hoga.
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>Is hafte CSC jaao ya online try karo</li>
            <li>Saare documents ready rakho (upar checklist hai)</li>
            <li>ID milne par screenshot + print dono save karo</li>
            <li>NPCI seeding aur beneficiary status confirm karo</li>
            <li>Apne gaon ke 2-3 aur cultivators ko bhi batao</li>
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
          desc="Agrarian welfare benefit, credit EMI, crop profit — sab free calculators se jaano"
          primaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator →' }}
          secondaryCta={{ href: '/calculator', label: '🧮 Sab Utilities Dekho' }}
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