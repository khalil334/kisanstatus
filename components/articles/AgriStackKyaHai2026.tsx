import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, DB, SH, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock } from '@/components/ArticleShared';
import ExternalLinkButton from '@/components/ExternalLinkButton';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

function fmtDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('hi-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const PUBLISHED = '2026-01-08T22:33:23+05:30';
const MODIFIED = '2026-01-17T19:59:30+05:30';

const RELATED = [
  { slug: 'PmKisanEkycOnline2026', title: 'PM Kisan eKYC Online', emoji: '🔐' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List 2026', emoji: '📋' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Apply', emoji: '💳' },
  { slug: 'PmfbyCropInsurance2026', title: 'PMFBY Crop Insurance', emoji: '🌾' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
];

const FAQS_DATA = [
  {
    q: 'Mera naam land records mein galat spelling mein hai — kya register ho paunga?',
    a: 'Profile toh ban jayegi, par risk mat lo. Pehle patwari se Khasra/Khatauni mein spelling thik karwa lo. Agar bina thik kiye aage badhe, toh baad mein samman nidhi ya insurance claim mein naam mismatch ki wajah se payment atak sakti hai. Kai cases mein yahi chhoti si galti badi problem ban jati hai.',
  },
  {
    q: 'Main tenant farmer hoon, zameen mere naam par nahi hai — kya main eligible hoon?',
    a: 'Haan, eligible ho. Par shart yeh hai ki zameen maalik ka NOC chahiye. Kuch states mein kirayedaar registration ka alag process hai. Enrollment center wale ko saaf bolna ki tenant farmer enrollment karna hai, warna woh galat form khol denge.',
  },
  {
    q: 'Register hone ke baad card ya proof kaise milega?',
    a: 'Profile generate hone ke baad, farmers.gov.in ya apne state ke agriculture portal par Download Kisan Pehchaan Patra ka option aa jata hai. Apna Aadhaar number aur mobile OTP daal kar aasani se PDF download kar sakte ho.',
  },
  {
    q: 'Common Service Centre (CSC) operator ne ₹200 maange — kya karein?',
    a: 'Ek rupiya bhi mat dena. Yeh seva 100% free hai. Agar koi paise maange, toh foran mana kar do aur 1800-1214-060 par complaint kar do. Apne phone mein screenshot proof save kar lena.',
  },
  {
    q: 'AgriStack aur Digital Agriculture Mission mein kya farak hai?',
    a: 'Koi farak nahi hai, dono ek hi cheez hain. AgriStack sirf policy documents mein use hone wala technical naam hai, jabki Digital Agriculture Mission ya Kisan Pehchaan aam janta ke liye rakha gaya naam hai.',
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
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">AgriStack / Kisan Pehchaan 2026</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            AgriStack Digital Profile 2026: 14-Digit ID Banwane Ka Asli Tarika — Jo Operator Nahi Batate
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
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
            alt="Unified kisan identity system overview India 2026"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Ek Profile Se Sari Schemes Connected
          </p>
        </div>

        <section className="mb-8">
          <SH>AgriStack Kya Hai? Yeh Digital Profile Asli Mein Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            AgriStack — yaani sarkar ka Digital Agriculture Mission — ek aisa master database hai jisme har registered kisan ki verified agricultural profile save hoti hai. Is system ko samajhna zaroori hai. Kyunki isme teen cheezein aapas mein judti hain.
          </p>
          <ul className="space-y-2 mb-4 text-sm text-[var(--color-text-muted)]">
            <li className="flex gap-2"><span className="text-green-600 shrink-0 font-bold" aria-hidden="true">→</span> <strong>Pehchaan:</strong> Naam, Aadhaar, mobile number, bank account.</li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0 font-bold" aria-hidden="true">→</span> <strong>Zameen:</strong> Khasra number, area, ownership, aur geo-coordinates.</li>
            <li className="flex gap-2"><span className="text-green-600 shrink-0 font-bold" aria-hidden="true">→</span> <strong>Fasal:</strong> Crop type, boya hua area, aur harvest timeline.</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jab yeh teeno cheezein verify ho jati hain, tab milta hai ek 14-digit unique number. Yeh ek permanent agricultural identity hai. Jise aam bhasha mein Kisan Pehchaan Patra bhi kaha jata hai.
          </p>

          <IB>
            <strong>Dhyan dein:</strong> Yeh samman nidhi se alag koi nayi scheme nahi hai. Yeh ek aisa system hai jo <Link href="/articles/PmKisanEkycOnline2026" className="text-blue-600 dark:text-blue-400 underline font-semibold">eKYC process</Link>, crop insurance, <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-blue-600 dark:text-blue-400 underline font-semibold">KCC loan</Link>, aur soil testing — in sabko ek hi verified profile se jod deta hai. Jaise UPI ne banking ko simplify kiya, waise hi yeh agriculture schemes ko jod raha hai.
          </IB>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Pehle har yojana ka database alag-alag tha. Portal par kuch, state land records mein kuch, aur bank mein kuch. Sync nahi hota tha. Jiske chakkar mein naam mismatch, payment fail, aur mahino ki deri hoti thi. Ab ek hi verified source of truth hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Abhi Yeh Kyun Zaroori Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kai kisanon ke saath yeh dekha gaya hai ki unki payment atak jati hai. Wajah pata chalti hai toh hairani hoti hai.
          </p>

          <div className="space-y-3 mb-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">❌ Payment Fail</p>
              <p className="text-xs text-[var(--color-text-muted)]">Digital identity verify nahi = Fund Transfer Order generate nahi hoga. Registration sahi, zameen sahi, bank active — phir bhi paisa account mein nahi aata. <Link href="/articles/PmKisanBeneficiaryList2026" className="underline font-bold text-red-700 dark:text-red-400">Beneficiary list</Link> mein naam check karo aur profile fix karwa lo, agle cycle mein payment aa jayegi.</p>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl">
              <p className="font-black text-orange-800 dark:text-orange-300 text-sm mb-1">⏳ Loan Delay</p>
              <p className="text-xs text-[var(--color-text-muted)]">Banks ab is digital record ko primary verification maante hain. Bina iske manual checking mein 2-3 mahine lag jate hain. Profile dikha di? Kaam 3-7 din mein. Yeh farq branches mein aksar dekha gaya hai.</p>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl">
              <p className="font-black text-yellow-800 dark:text-yellow-300 text-sm mb-1">⚠️ Insurance Rejection</p>
              <p className="text-xs text-[var(--color-text-muted)]"><Link href="/articles/PmfbyCropInsurance2026" className="underline font-bold text-yellow-800 dark:text-yellow-400">PMFBY claims</Link> isliye reject hote hain kyunki crop sown registry mein fasal register nahi hoti. Is unified profile se crop data auto-link ho jata hai. Bina iske manually sabit karna padta hai — paperwork, patwari certificate, photos.</p>
            </div>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>2027 se kai states mein yeh mandatory ho sakti hai.</strong> Abhi voluntary hai, par early adopters ko priority milti hai. Baad mein centers par bheed lagegi, abhi karwa lena behtar hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Aadhaar Vs Digital Kisan Profile</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bahut log puchte hain: Bhai, Aadhaar toh pehle se hai, alag se yeh record kyun chahiye?
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jawab simple hai. Aadhaar ek civilian identity hai, jabki yeh ek agricultural identity hai. Dono ka purpose alag hai, data alag hai, aur verification bhi alag hai.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Comparison</th>
                  <th className="p-3 text-left">Aadhaar Card</th>
                  <th className="p-3 text-left">Kisan Pehchaan Record</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Data', 'Naam, address, photo, DOB', 'Zameen, fasal, bank, scheme history'],
                  ['Verification', 'Biometric + demographic', 'Land records + crop + geo-mapping'],
                  ['Updates', 'Rarely (Kabhi-kabhi)', 'Seasonally (Fasal badalne par)'],
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
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Aadhaar ke bina yeh profile banegi hi nahi.</strong> Aur Aadhaar hone ke baad bhi agar zameen verify nahi hui, toh record adhoora rahega. Dono layers chahiye.
          </p>
        </section>

        <section className="mb-8">
          <SH>Registration Kaise Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Portal par jo steps likhe hain, woh theory mein ache lagte hain. Par ground-level par situation thodi alag hoti hai.
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">1. Common Service Centre (Recommended)</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Online theoretically possible hai, lekin practically center par jaana zyada reliable hai. Land record verification operator ke paas direct access se hoti hai — portal par aksar sync fail ho jata hai.
          </p>
          <StepList>
            <SI n={1}>Subah 9-10 baje ke beech pahuncho. Dopahar mein staff lunch break leta hai, aur shaam ko bheed hoti hai.</SI>
            <SI n={2}>Saath le jao: <strong>original Aadhaar card + photocopy, passbook, khasra/khatauni, 2 photos</strong>.</SI>
            <SI n={3}>Saaf bolna: <strong>"Digital kisan ID enrollment"</strong> karna hai. Sirf "registration" bolne se woh galat form khol sakte hain.</SI>
            <SI n={4}>Fingerprint scan — haath saaf rakho, geeli ungli better read hoti hai.</SI>
            <SI n={5}>Land details — khasra number revenue records se match hona chahiye.</SI>
            <SI n={6}>Bank verify + NPCI seeding status bhi isi waqt check karwa lo.</SI>
            <SI n={7}>14-digit number milega — <strong>screenshot, print, mobile save — teeno zaroor karo</strong>.</SI>
            <SI n={8}>Acknowledgement receipt le lo — future reference ke liye bahut kaam aayega.</SI>
          </StepList>

          <ExternalLinkButton
            url="https://farmers.gov.in"
            label="Official Digital Agriculture Portal Par Jaayein"
          />

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/agristack-kya-hai/registration-steps.webp"
              alt="Enrollment process visual guide at center"
              width={1200}
              height={630}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Center Par Registration Process — Step by Step
            </p>
          </div>

          <DB>
            <strong>Fraud Alert:</strong> Yeh seva 100% FREE hai. ₹50-200 maange toh seedha mana kar do. 1800-1214-060 par complaint karo. Receipt maangna mat bhoolna.
          </DB>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">2. Online Portal</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar center door hai toh try kar sakte ho. farmers.gov.in ya state specific portal par jao. OTP linked mobile par aayega.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Land details manually enter karni padengi — yahan galti ka chance zyada hota hai. Submit karne se pehle double-check zaroor kar lena.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Kai states mein online portal abhi fully functional nahi hai.</strong> Error aaye toh physical center hi reliable option hai. Cache clear karo ya incognito mode try karo — kabhi-kabhi session issue hota hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Documents — Official Vs Actual</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kya le jana chahiye aur kya actually kaam aata hai — dono alag hain. Taiyar rehna behtar hai.
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
                <li>✓ Mobile number OTP ke liye ready</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">📌 Extra (Situation Based)</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Tenant → NOC</li>
                <li>✓ Joint → Consent letter</li>
                <li>✓ Name mismatch → Affidavit</li>
              </ul>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>2 photocopies + phone mein scan rakho.</strong> Xerox machine aksar kharab hoti hai center par. Original wapas lena mat bhoolna — staff galti se retain kar leta hai. Nayi zameen wale registry deed bhi saath le jao, aur forest rights wale FRA patta bhi.
          </p>
        </section>

        <section className="mb-8">
          <SH>State-Wise Asli Haal</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            UP mein 15 minute mein ho jata hai, Bihar mein 2-4 hafte lag sakte hain. Press release mein sab same dikhta hai, lekin asli picture state ke hisaab se badalti hai.
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-1">🟢 UP, MP, Maharashtra</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Smoothest process. Center density high, staff trained, land digitization mature. 15-20 minute. Best time: subah 9-11.</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <h3 className="font-black text-blue-800 dark:text-blue-300 text-sm mb-1">🔵 Rajasthan, Gujarat</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Moderate. State portal sync kabhi-kabhi fail hota hai. Land Not Found error aaye toh 2-3 din baad retry karein. Digital signature wali Khatauni helpful hoti hai.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <h3 className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">🟡 Bihar, Jharkhand, Odisha</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Slow process. Land digitization incomplete. Verification 2-4 hafte lag sakte hain. BAO se pre-verification letter process fast karta hai. Mobile camps aate hain — Pradhan se puch lo.</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <h3 className="font-black text-purple-800 dark:text-purple-300 text-sm mb-1">🟣 Punjab, Haryana</h3>
              <p className="text-xs text-[var(--color-text-muted)]">Strict verification. Tenant ke liye notarized NOC compulsory hai. Bina NOC ke process nahi hota. Records digitized hain lekin checking tight hai, PAMS cross-check hota hai.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Profile Ban Gayi — Ab Kya Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            ID mil gayi? Abhi se relax mat karo. Kaam khatam nahi hua, sirf shuru hua hai.
          </p>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/agristack-kya-hai/farmer-id-card-sample.webp"
              alt="Identity card sample — 14-digit format example"
              width={1200}
              height={630}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Sample Identity Card — 14 Digit Unique Number
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0" aria-hidden="true">01</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Profile Verify Karein Portal Par</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Naam, area, IFSC — sab sahi hai? Ek digit galat = future payment fail. Abhi fix kar lo.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0" aria-hidden="true">02</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">NPCI Seeding Confirm Karein</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Bank branch jaake puch lo. Written confirmation le lo. Bina NPCI ke DBT fail ho jata hai.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0" aria-hidden="true">03</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Beneficiary Status Check Karein</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">pmkisan.gov.in par Active dikhna chahiye. Pending = land seeding ya eKYC incomplete.</p>
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

          <ExternalLinkButton
            url="https://farmers.gov.in"
            label="Apna Status Check Karein (Official)"
          />
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Field Se Aaye Hue Real Sawal (FAQs)
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Digital Kisan Profile FAQ 2026" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Seedhi Baat</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Yeh seva free hai, 20 minute lagte hain, aur future mein zaroori hone wali hai. Abhi centers par crowd kam hai. October-November mein rush shuru ho jayega.
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>Is hafte center jao ya online try karo.</li>
            <li>Documents pehle se ready rakho.</li>
            <li>Screenshot + print dono save kar lo.</li>
            <li>NPCI + beneficiary status confirm kar lo.</li>
            <li>Gaon ke 2-3 aur logon ko bhi bata do.</li>
          </ol>
        </div>

        <CalcBanner
          icon="🆔"
          title="Apna Benefit Calculate Karein"
          desc="Samman nidhi benefit, credit EMI, crop profit — sab free calculators se check karein"
          primaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator →' }}
          secondaryCta={{ href: '/calculator', label: '🧮 Sab Utilities' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanEkycOnline2026', l: '🔐 eKYC Process' },
          { href: '/articles/PmKisanBeneficiaryList2026', l: '📋 Beneficiary List' },
          { href: '/articles/KisanCreditCardOnlineApply2026', l: '💳 KCC Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
