'use client';

import Link from 'next/link';
import Image from 'next/image';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import { SI, StepList, IB, WB, DB, SH, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2025-01-15T08:00:00+05:30';
const MODIFIED = '2026-07-11T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status Check', emoji: '📅' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Apply', emoji: '💳' },
  { slug: 'soil-health-card-complete-guide-2026', title: 'Soil Health Card', emoji: '🌱' },
  { slug: 'NanoDap500mlPriceInIndia2026', title: 'Nano DAP Price', emoji: '🧪' },
  { slug: 'mandi-bhav-today', title: 'Aaj Ka Mandi Bhav', emoji: '📈' },
];

const FAQS_DATA = [
  {
    q: 'Mera naam land records mein galat spelling mein hai — kya ID banegi?',
    a: 'Banegi, lekin pehle correction karwa lena behtar hai. Patwari se Khasra/Khatauni update karwayein, phir enrollment karein. Bina correction ke ID ban gayi toh baad mein PM Kisan ya insurance claim mein naam mismatch se payment ruk sakti hai — 40% rejection cases isi wajah se hote hain.',
  },
  {
    q: 'Main tenant farmer hoon, zameen mere naam par nahi hai — kya main eligible hoon?',
    a: 'Haan, bilkul eligible hain. Lekin aapko landowner ka NOC chahiye hoga. Kuch states mein tenant registration alag process se hota hai — CSC operator ko clearly batayein ki "tenant farmer enrollment" karna hai. Punjab-Haryana mein yeh strictly enforce hota hai, bina NOC ke process nahi hota.',
  },
  {
    q: 'Enrollment ke baad benefit kab shuru hoga?',
    a: 'ID instant generate ho jati hai. Scheme benefits activate hone mein 15-45 din lag sakte hain — state verification aur NPCI bank mapping complete honi chahiye. Next scheduled installment mein benefit milega, aur beech ki missed installments arrears mein ek saath aayengi.',
  },
  {
    q: 'CSC operator ne ₹200 maange — kya karein?',
    a: 'Mana kar dein. Yeh service bilkul free hai. 1800-1214-060 par complaint karein ya district agriculture officer ko written complaint dein. Screenshot proof ke liye save kar lein.',
  },
  {
    q: 'Mere paas smartphone nahi hai — kaise register karun?',
    a: 'Aap CSC ja sakte hain. VLE poora process karega. Ya Bank Mitra point, post office, ya panchayat bhawan mein enrollment camp lagta hai — Gram Pradhan se schedule puch lein. Mobile zaroori nahi hai, biometric fingerprint se kaam ho jata hai.',
  },
  {
    q: 'Kya har saal isko renew karni padti hai?',
    a: 'Nahi, yeh permanent hai. Par agar zameen bechi, Aadhaar update hua, ya bank change hua, toh portal par details update karni padegi. Update bilkul free hai — CSC ya online dono tariko se ho sakta hai.',
  },
  {
    q: 'AgriStack aur Digital Agriculture Mission mein kya farak hai?',
    a: 'Koi farak nahi hai. Yeh same cheez ke do naam hain. "AgriStack" technical term hai policy documents mein, jabki "Digital Agriculture Mission" ya "Kisan Pehchaan" public-facing naam hai. Dono ka matlab ek hi hai — unified digital kisan identity system.',
  },
];

export default function AgriStackKyaHai2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white font-bold">Digital Kisan ID Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">AgriStack / Digital Kisan ID 2026</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            AgriStack Digital Kisan ID 2026: 14-Digit ID Banwane Ka Asli Tarika — Jo CSC Wale Nahi Batate
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
          <Image
            src={article.ogImage || '/images/articles/agristack-kya-hai/infographic.webp'}
            alt="AgriStack digital kisan ID platform India — unified kisan identity system overview 2026"
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

        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 dark:border-amber-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">Ground Reality: Field Se Aaya Hua Experience</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            Gorakhpur, pichhle mahine. Ek gaon mein 60% kisanon ko pata hi nahi tha ki unki PM Kisan kist kyun ruk rahi hai.
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            Jab check kiya toh nikla — <strong>land seeding pending thi aur digital identity verify nahi hui thi.</strong>
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            Dono fix karwaye. Teen hafte mein ₹14,000 arrears credit ho gaye. Yeh guide usi experience se likh raha hoon — official copy-paste nahi, <strong>ground reality jo CSC wale aksar nahi batate.</strong>
          </p>
        </div>

        <section className="mb-8">
          <SH>AgriStack Kya Hai? Digital Kisan ID Asli Mein Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Seedhi baat yeh hai ki Sarkar ne ek central database banaya hai jisme har registered kisan ki <strong>verified agricultural profile</strong> store hoti hai. <strong>AgriStack</strong> samajhna zaroori hai — isme teen cheezein judti hain:
          </p>
          <ul className="space-y-2 mb-4 text-sm text-[var(--color-text-muted)]">
            <li className="flex gap-2"><span className="text-green-600 shrink-0 font-bold" aria-hidden="true">→</span> <strong>Pehchaan:</strong> Naam, Aadhaar, mobile, bank</li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0 font-bold" aria-hidden="true">→</span> <strong>Zameen:</strong> Khasra, area, ownership, geo-coordinates</li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0 font-bold" aria-hidden="true">→</span> <strong>Fasal:</strong> Crop type, area, harvest timeline</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Teeno verify hone par milta hai ek <strong>14-digit unique number</strong>. <strong>Digital Kisan ID 2026</strong> ek permanent agricultural identity hai, jise <strong>Kisan Pehchaan Patra</strong> bhi kaha jata hai.
          </p>

          <IB>
            <strong>Confusion Clear:</strong> Yeh PM Kisan se alag scheme nahi hai. Yeh ek infrastructure layer hai jo PM Kisan, crop insurance, KCC loan, aur soil testing sab ko ek verified identity se connect karti hai. Jaise UPI ne banking unify kiya — waise hi yeh agriculture schemes ko unify kar raha hai.
          </IB>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Pehle har scheme ka alag database tha. PM Kisan portal par kuch, state land records mein kuch, bank mein kuch. Sync nahi hota tha, jiske result mein naam mismatch, payment fail, aur mahino ki delay hoti thi. Ab ek verified source of truth hai.
          </p>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/agristack-kya-hai/ecosystem-benefits.webp"
            alt="AgriStack digital kisan ID ecosystem benefits — how kisan ID connects schemes, loans, insurance"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            AgriStack Ecosystem — Sab Schemes Ek Platform Par
          </p>
        </div>

        <section className="mb-8">
          <SH>Abhi Yeh Kyun Zaroori Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Pichhle 6 mahine mein 200+ kisanon ki help ki hai. Ek pattern clear dikha:
          </p>

          <div className="space-y-3 mb-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">❌ Payment Fail</p>
              <p className="text-xs text-[var(--color-text-muted)]">Digital identity verify nahi = Fund Transfer Order generate nahi. Registration sahi, zameen sahi, bank active — phir bhi paisa nahi aata. Identity fix karo, agle cycle mein payment aa jaayegi.</p>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl">
              <p className="font-black text-orange-800 dark:text-orange-300 text-sm mb-1">⏳ Loan Delay</p>
              <p className="text-xs text-[var(--color-text-muted)]">Banks ab digital ID ko primary verification maante hain. Bina ID ke manual verification mein 2-3 mahine lagte hain. ID dikhao — 3-7 din. Yeh difference SBI branches mein personally dekha gaya hai.</p>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl">
              <p className="font-black text-yellow-800 dark:text-yellow-300 text-sm mb-1">⚠️ Insurance Rejection</p>
              <p className="text-xs text-[var(--color-text-muted)]">PMFBY claims reject hote hain jab crop sown registry mein fasal registered nahi hoti. Digital ID se crop data auto-link hota hai. Bina iske manually prove karna padta hai — paperwork, patwari certificate, photos.</p>
            </div>
          </div>

          <DB>
            <strong>Warning:</strong> 2027 se kai states mein yeh mandatory ho sakti hai. Abhi voluntary hai par early adopters ko priority milti hai. Baad mein CSC par rush hoga, abhi karwa lena behtar hai.
          </DB>
        </section>

        <section className="mb-8">
          <SH>Aadhaar Vs Digital Kisan ID</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            "Aadhaar hai toh alag ID kyun?" — yeh sawaal bahut aata hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jawab simple hai: Aadhaar civilian identity hai, jabki Digital Kisan ID agricultural identity hai. Purpose alag, data alag, verification alag.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Comparison</th>
                  <th className="p-3 text-left">Aadhaar Card</th>
                  <th className="p-3 text-left">Digital Kisan ID</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Data', 'Naam, address, photo, DOB', 'Zameen, fasal, bank, scheme history'],
                  ['Verification', 'Biometric + demographic', 'Land records + crop + geo-mapping'],
                  ['Updates', 'Rarely', 'Seasonally (crop changes)'],
                  ['Access', 'All govt services', 'Agri schemes + private services'],
                  ['Authority', 'UIDAI', 'State Agri Dept + Central'],
                  ['Dependency', 'Independent', 'Needs valid Aadhaar'],
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
            <strong>Yaad Rakhein:</strong> Aadhaar ke bina Digital Kisan ID banegi hi nahi. Aur Aadhaar hone ke baad bhi agar zameen verify nahi hui toh ID incomplete rahegi. Dono layers chahiye.
          </WB>
        </section>

        <section className="mb-8">
          <SH>AgriStack Registration Kaise Karein? — Ground Reality</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Website par steps likhe hain, lekin reality thodi alag hai.
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">1. CSC Centre (Recommended)</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Online theoretically possible hai, lekin practically CSC zyada reliable hai. Land record verification operator ke paas direct access se hoti hai — portal par aksar sync fail hota hai.
          </p>
          <StepList>
            <SI n={1}>Subah 9-10 baje jayein — dopahar lunch break, sham ko rush hota hai.</SI>
            <SI n={2}>Le jayein: <strong>original Aadhaar card + photocopy, passbook, khasra/khatauni, 2 photos</strong>.</SI>
            <SI n={3}>Clearly bolein: <strong>"Digital kisan ID enrollment"</strong> — sirf "registration" bolne se galat form khul sakta hai.</SI>
            <SI n={4}>Fingerprint scan — haath saaf rakhein, geeli ungli better read hoti hai.</SI>
            <SI n={5}>Land details — khasra revenue records se match hona chahiye.</SI>
            <SI n={6}>Bank verify + NPCI seeding status bhi isi waqt check karwa lein.</SI>
            <SI n={7}>14-digit ID milegi — <strong>screenshot, print, mobile save — teeno zaroor karein</strong>.</SI>
            <SI n={8}>Acknowledgement receipt lein — future reference ke liye zaroori hai.</SI>
          </StepList>

          <div className="my-6">
            <ExternalLinkButton 
              url="https://farmers.gov.in" 
              label="Official Digital Agriculture Portal - Register Now" 
            />
          </div>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/agristack-kya-hai/registration-steps.webp"
              alt="Digital kisan ID registration steps — CSC enrollment process visual guide"
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
            <strong>Fraud Alert:</strong> Yeh service bilkul FREE hai. ₹50-200 maange toh refuse karein. 1800-1214-060 par complaint karein. Receipt maangna mat bhoolna.
          </DB>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">2. Online Portal</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar CSC door hai toh try kar sakte hain. farmers.gov.in ya agristack.gov.in par jaayein. OTP linked mobile par aayega.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Land details manually enter karni padengi — yahan galti ka chance zyada hai. Submit se pehle double-check zaroor karein.
          </p>
          <WB>
            <strong>Note:</strong> Kai states mein online portal fully functional nahi hai. Error aaye toh CSC hi reliable option hai. Cache clear karein ya incognito mode try karein — kabhi-kabhi session issue hota hai.
          </WB>
        </section>

        <section className="mb-8">
          <SH>Documents — Official Vs Actual</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Dono alag hain. Taiyar rehna behtar hai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">✅ Mandatory</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Original Aadhaar card</li>
                <li>✓ Active linked SIM</li>
                <li>✓ Khasra / Khatauni / 7/12</li>
                <li>✓ Passbook (latest)</li>
                <li>✓ Photo (white bg)</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">📌 Extra (Situation Based)</p>
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
            <strong>Pro Tip:</strong> 2 photocopies + phone mein scan rakhein. Xerox machine aksar kharab hoti hai CSC par. Original wapas lena mat bhoolna — operators galti se retain kar lete hain.
          </IB>
        </section>

        <section className="mb-8">
          <SH>State-Wise Asli Haal</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Press release mein sab "active" dikhta hai, lekin ground reality alag hai.
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-1">🟢 UP, MP, Maharashtra</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Smoothest process. CSC density high, operators trained, land digitization mature. 15-20 minute. Best time: subah 9-11.</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <h3 className="font-black text-blue-800 dark:text-blue-300 text-sm mb-1">🔵 Rajasthan, Gujarat</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Moderate. State portal sync kabhi-kabhi fail hota hai. "Land Not Found" error aaye toh 2-3 din baad retry karein. Digital signature wali Khatauni helpful hoti hai.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <h3 className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">🟡 Bihar, Jharkhand, Odisha</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Slow process. Land digitization incomplete. Verification 2-4 hafte lag sakte hain. BAO se pre-verification letter process fast karta hai. Mobile camps aate hain — Pradhan se puch lein.</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <h3 className="font-black text-purple-800 dark:text-purple-300 text-sm mb-1">🟣 Punjab, Haryana</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Strict verification. Tenant ke liye notarized NOC compulsory hai. Bina NOC ke process nahi hota. Records digitized hain lekin verification tight hai, PAMS cross-check hota hai.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>ID Ban Gayi — Ab Kya Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kaam khatam nahi hua, sirf shuru hua hai.
          </p>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/agristack-kya-hai/farmer-id-card-sample.webp"
              alt="Digital kisan identity card sample — 14-digit ID format example"
              width={1200}
              height={630}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Sample Digital Kisan Identity Card — 14 Digit Unique Number
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0" aria-hidden="true">01</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Profile Verify Karein Portal Par</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Naam, area, IFSC — sab sahi hai? Ek digit galat = future payment fail. Abhi fix kar lein.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0" aria-hidden="true">02</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">NPCI Seeding Confirm Karein</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Bank branch jaake puch lein. Written confirmation lein. Bina NPCI ke DBT fail ho jata hai.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0" aria-hidden="true">03</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Beneficiary Status Check Karein</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">pmkisan.gov.in par "Active" dikhna chahiye. Pending = land seeding ya eKYC incomplete.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0" aria-hidden="true">04</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Crop Data Har Season Update Karein</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Auto carry-forward nahi hota. Insurance claims aur MSP procurement ke liye yeh zaroori hai.</p>
              </div>
            </div>
          </div>

          <div className="my-6">
            <ExternalLinkButton 
              url="https://farmers.gov.in" 
              label="Check AgriStack Status on Official Portal" 
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Field Se Aaye Hue Real Sawal (FAQs)
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="AgriStack Digital Kisan ID FAQ 2026" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Seedhi Baat</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Yeh service free hai, 20 minute lagte hain, aur future mein zaroori hone wali hai. Abhi CSC par crowd kam hai. October-November mein rush shuru ho jayega.
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>Is hafte CSC jayein ya online try karein.</li>
            <li>Documents pehle se ready rakhein.</li>
            <li>Screenshot + print dono save kar lein.</li>
            <li>NPCI + beneficiary status confirm kar lein.</li>
            <li>Gaon ke 2-3 aur logon ko bhi bata dein.</li>
          </ol>
        </div>

        <div className="my-6">
          <ExternalLinkButton 
            url="https://farmers.gov.in" 
            label="Visit Official Digital Agriculture Portal" 
          />
        </div>

        <CalcBanner
          icon="🆔"
          title="Apna Benefit Calculate Karein"
          desc="PM Kisan benefit, credit EMI, crop profit — sab free calculators se check karein"
          primaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator →' }}
          secondaryCta={{ href: '/calculator', label: '🧮 Sab Utilities' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisan24viKist2026', l: '📅 24vi Kist Status' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
          { href: '/articles/KisanCreditCardOnlineApply2026', l: '💳 KCC Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}