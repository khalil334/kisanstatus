import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, WB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import { EXTERNAL_LINK_PROPS, AUTHOR_NAME } from '@/lib/site-config';
import type { MaandhanArticleMeta } from '@/lib/maandhan-data';

const PUBLISHED = '2026-03-15T08:06:28+05:30';
const MODIFIED = '2026-03-24T07:35:29+05:30';

const RELATED_CARDS = [
  {
    slug: 'pm-kisan-maandhan-eligibility-documents',
    title: 'Eligibility & Documents',
    desc: 'Detailed checklist of documents and exact eligibility rules.',
  },
  {
    slug: 'pm-kisan-maandhan-pension-calculator',
    title: 'Pension Calculator',
    desc: 'Calculate exact monthly contribution based on your current age.',
  },
  {
    slug: 'pm-kisan-maandhan-withdrawal-refund-rules',
    title: 'Withdrawal & Refund Rules',
    desc: 'What happens to your money if you exit the scheme early?',
  },
];

const FAQS_DATA = [
  {
    q: 'Maandhan Yojana mein apply karne ke liye umar kitni honi chahiye?',
    a: 'Entry window 18 se 40 saal hai — scheme guidelines (maandhan.in) mein yahi likha hai. 40 paar hone ke baad enrollment nahi hota. Ek aur practical baat: jitni kam umar par judenge, monthly contribution utna kam banta hai — 18 par ₹55, 40 par ₹200.',
  },
  {
    q: 'Beech mein scheme chhod dein toh paisa doob jayega?',
    a: 'Nahi doobta, lekin poora bhi nahi milta. 10 saal se pehle exit par sirf aapka apna contribution savings-bank interest ke saath wapas milta hai. 10 saal ke baad (par 60 se pehle) exit par apna contribution plus fund ka actually earned interest ya savings rate — jo zyada ho. Sarkar ka matching share kisi bhi haal mein wapas nahi milta, wo pension fund mein hi rehta hai. Detail hamari withdrawal rules guide mein hai.',
  },
  {
    q: 'Registration ke liye bank account zaroori hai?',
    a: 'Haan. Account Aadhaar se seeded (NPCI-linked) hona chahiye — contribution isi account se auto-debit hota hai aur 60 ke baad pension bhi isi mein aati hai.',
  },
  {
    q: 'Agar kisan ki mrityu ho jaye toh pension kisko milegi?',
    a: 'Do alag situations hain. Pension shuru hone se pehle (60 se pehle) dehant ho jaye — spouse ke paas do raste hain: bacha hua contribution dekar scheme continue karein, ya jama contribution interest ke saath lekar exit karein. Spouse na ho toh ye paisa nominee ko jaata hai. 60 ke baad dehant ho — spouse ko ₹1,500/mahina (50%) family pension milti hai. Ye family pension sirf spouse ke liye hai. (Source: PIB, Sept 2024 release.)',
  },
  {
    q: 'CSC center par registration karwane mein kitna kharcha aata hai?',
    a: 'Registration free hai — dena sirf pehla monthly contribution hota hai (₹55–₹200, umar ke hisaab se). Alag se "processing fee" maangna galat hai; aisa ho toh CSC helpline 1800-3000-3468 par shikayat karein.',
  },
  {
    q: '₹2,000 wali PM Kisan kist se Maandhan ka contribution kat sakta hai?',
    a: 'Haan, ye official option hai — PM-KISAN beneficiary apni samman nidhi se contribution auto-debit karwane ki consent de sakta hai. Ye poori tarah optional hai; bina aapke likhit consent ke kist se paisa nahi kat sakta.',
  },
  {
    q: 'Kya pension direct bank account mein aati hai?',
    a: '60 poore hote hi ₹3,000 har mahine DBT ke zariye usi Aadhaar-seeded account mein aati hai jo enrollment ke waqt diya tha.',
  },
];

export default function PmKisanMaandhanRegistration2026({ article }: { article: MaandhanArticleMeta }) {
  return (
    <>

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/maandhan" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Maandhan Yojana</Link>
            <span>/</span>
            <span className="text-white font-bold">Registration Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Kisan Pension Scheme</span>

          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Maandhan Registration: ₹3000 Pension Apply Process
          </h1>

          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>12 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/registration-hero.webp"
            alt="Farmer at CSC center filling pension registration form with operator assistance"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Budhape Ki Suraksha — Sirf ₹55 Mahina Se Shuru
          </p>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl">
          <p className="text-sm md:text-base text-blue-900 dark:text-blue-100 leading-relaxed font-medium">
            <strong>Seedha Jawab:</strong> Umar 18–40 saal, kheti ki zameen 2 hectare tak, aur naam state land records mein (01.08.2019 ki cut-off ke hisaab se) — ye teen conditions puri hain toh CSC center ya maandhan.in portal se enroll ho sakte hain. Contribution umar ke hisaab se ₹55–₹200 mahina; 60 ke baad ₹3,000 mahina assured pension. Scheme ka fund LIC manage karti hai aur sarkar aapke har rupaye par utna hi rupaya khud daalti hai.
          </p>
        </div>

        <section className="mb-8">
          <SH>Maandhan Yojana Aakhir Hai Kya?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kheti mein mehnat toh sabko pata hai. Lekin jab umar dhalne lagti hai aur sharir pehle jaisa saath nahi deta, tab income ka zariya bhi kamzor pad jata hai. Isi wajah se sarkar ne chhote aur seemant kisanon ke liye ye pension scheme laayi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Iska official naam Pradhan Mantri Kisan Maandhan Yojana (PM-KMY) hai — 12/09/2019 ko launch hui, voluntary aur contributory pension scheme. Mechanism simple hai: aap har mahine ek fixed amount pension fund mein daalte hain, <strong>Central Government exactly utna hi amount apni taraf se match karti hai</strong>, aur fund ko LIC (Life Insurance Corporation) manage karti hai. 60 ke baad ₹3,000 mahina assured pension. Ye saari baatein <a href="https://pib.gov.in/PressReleasePage.aspx?PRID=2053142" {...EXTERNAL_LINK_PROPS} className="underline text-blue-600 dark:text-blue-400">PIB ke September 2024 release</a> aur <a href="https://maandhan.in" {...EXTERNAL_LINK_PROPS} className="underline text-blue-600 dark:text-blue-400">maandhan.in</a> par documented hain. Eligibility aur documents ki poori detail hamari <Link href="/maandhan/pm-kisan-maandhan-eligibility-documents" className="underline text-blue-600 dark:text-blue-400 font-medium">alag guide</Link> mein mil jayegi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Scale ka andaza: PIB ke usi release ke mutabik August 2024 tak <strong>23.38 lakh kisan</strong> is scheme mein enroll ho chuke the — sabse zyada Bihar (3.4 lakh+) aur Jharkhand (2.5 lakh+) se. Yani scheme chal rahi hai, naye enrollment ho rahe hain.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <p className="font-black text-green-800 dark:text-green-300 text-2xl mb-1">₹3,000</p>
              <p className="text-xs text-[var(--color-text-muted)]">Monthly Pension (60+ Age)</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-center">
              <p className="font-black text-blue-800 dark:text-blue-300 text-2xl mb-1">18-40</p>
              <p className="text-xs text-[var(--color-text-muted)]">Eligible Age Group</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-center">
              <p className="font-black text-amber-800 dark:text-amber-300 text-2xl mb-1">2 Hectare</p>
              <p className="text-xs text-[var(--color-text-muted)]">Max Land Limit</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Pehle 30 Second Ka Self-Check</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            CSC jaane se pehle chaar baatein khud confirm karein: (1) umar 18–40 ke beech hai, (2) kheti ki zameen 2 hectare tak hai, (3) aapka naam state/UT ke land records mein <strong>01.08.2019 ki cut-off date</strong> ke hisaab se darj hai — ye scheme ki official condition hai, sirf zameen hona kaafi nahi, aur (4) aap income tax payer nahi hain aur NPS / EPFO / ESIC jaise kisi statutory pension scheme ke member nahi hain — ye sab exclusion list mein hain aur enrollment ke waqt nahi, verification ke waqt pakde jaate hain. Full checklist, exclusions aur joint-family zameen wale case ki detail alag guide mein hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/pm-kisan-maandhan-eligibility-documents" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">Poora Eligibility Self-Check + Exclusion List →</Link>
          </div>
        </section>

        <section className="mb-8">
          <SH>Bag Mein Kya Rakhna Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sirf chaar cheezein: Aadhaar (mobile linked), Aadhaar-seeded bank passbook, mobile phone aur Khatauni. Kaunsa document kis step pe lagega aur seeding kaise verify karein — wo document-wise guide mein hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/pm-kisan-maandhan-eligibility-documents" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">Document-Wise Taiyari Ki Guide →</Link>
          </div>
        </section>

        <section className="mb-8">
          <SH>Registration Kaise Karein? (2 Tarike)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Do rasta hain is scheme mein judne ka — dono aasan hain, bas thodi savdhani zaroori hai.
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Tarika 1: CSC Center Se (Sabse Aasan)</h3>
          <StepList>
            <SI n={1}>Aadhaar, Bank Passbook aur Mobile lekar nazdiki CSC jayein. Subah 10-11 baje ka time best hai — dopahar tak rush badh jata hai aur server bhi slow ho jata hai.</SI>
            <SI n={2}>Operator ko saaf-saaf kahein: "Maandhan Yojana mein register karna hai."</SI>
            <SI n={3}>Operator Aadhaar number daal kar details verify karega. OTP nahi aa raha toh pehle mobile number Aadhaar se link karwa lein.</SI>
            <SI n={4}>Umar ke hisaab se monthly contribution batayega — jaise 18 saal ke liye ₹55, 30 saal ke liye ₹100.</SI>
            <SI n={5}>Pehla contribution UPI ya cash se pay karein aur receipt sambhal kar rakhein.</SI>
            <SI n={6}>Mobile par confirmation SMS aayega — screenshot lekar save kar lein, yahi aapka proof hai.</SI>
          </StepList>

          <WB>
            <strong>Zara Savdhan Rahein:</strong> Kuch operators "service charge" ya "processing fee" bata kar ₹100-200 extra maang lete hain. Registration free hai — sirf pehla monthly contribution dena hota hai, koi alag fee nahi. Koi zyada maange toh CSC helpline 1800-300-8380 par complaint karein.
          </WB>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/csc-registration-process.webp"
              alt="Farmer submitting documents at CSC counter for pension scheme registration"
              width={800}
              height={450}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              CSC Center Par Registration — Sirf 10 Minute Ka Kaam
            </p>
          </div>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Tarika 2: maandhan.in Se Self-Enrollment</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Official portal <a href="https://maandhan.in" {...EXTERNAL_LINK_PROPS} className="underline text-blue-600 dark:text-blue-400 font-medium">maandhan.in</a> par self-enrollment ka option hai. Ek honest note: portal ka exact screen flow time ke saath update hota rehta hai, isliye neeche ka sequence broad steps hain — button ke naam thode alag dikh sakte hain.
          </p>
          <StepList>
            <SI n={1}>maandhan.in kholein aur Self Enrollment / Login option chunein.</SI>
            <SI n={2}>Aadhaar-linked mobile number daalein aur OTP verify karein. OTP nahi aa raha toh pehle Aadhaar mein mobile update karwana padega — ye portal par nahi hota, Aadhaar Seva Kendra par hota hai.</SI>
            <SI n={3}>Scheme list mein se PM-KMY (Kisan Maandhan) select karein.</SI>
            <SI n={4}>Personal details, zameen ki details (Khasra/Khatauni) aur Aadhaar-seeded bank account ki jankari bharein.</SI>
            <SI n={5}>Auto-debit mandate confirm karein — aage ke saare contribution isi account se har mahine khud katenge.</SI>
            <SI n={6}>Enrollment complete hone par confirmation aata hai — Kisan Pension Account Number (KPAN) note karke save kar lein, aage status check aur card download isi se hoga.</SI>
          </StepList>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/online-app-registration.webp"
              alt="Mobile app interface showing step-by-step online registration process"
              width={800}
              height={450}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Ghar Baithe Mobile App Se Registration
            </p>
          </div>
        </section>

        <section className="mb-8">
          <SH>Kitna Dena Hoga? (Sirf Aapki Umar Par Depend)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Slab entry age se fix hota hai: 18 saal par ₹55/mahina, 40 saal par ₹200/mahina — aur sarkar har mahine utna hi apni taraf se daalti hai. Ek simple hisaab (official slab ke inputs se, khud calculate kiya gaya): 18 saal ki umar mein judne wala kisan 60 tak ₹55 × 12 mahine × 42 saal = <strong>₹27,720</strong> apni jeb se daalta hai — aur 60 ke baad pension ke pehle hi saal mein ₹36,000 milte hain. 40 par judne wala ₹200 × 12 × 20 = ₹48,000 daalta hai. Isi liye jaldi judna sasta padta hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Registration ke waqt operator jo amount bataye, use khud verify kar sakte hain. Har single age ka official figure aur total-till-60 ka hisaab in do pages par hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/pm-kisan-maandhan-age-wise-contribution-chart-2026" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">Age-Wise Chart (Har Umar Ka Figure) →</Link>
            <Link href="/maandhan/pm-kisan-maandhan-pension-calculator" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">Pension Calculator Guide →</Link>
          </div>
        </section>

        <section className="mb-8">
          <SH>PM Kisan Ki Kist Se Auto-Contribution Ka Option</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar aap PM-KISAN (₹6,000 saalana) ke beneficiary hain, toh scheme ek suvidha deti hai: Maandhan ka monthly contribution seedha aapki PM-KISAN samman nidhi se auto-debit ho sakta hai — jeb se alag paisa nikalne ki zaroorat nahi. Do baatein saaf samajh lein:
          </p>
          <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] leading-relaxed mb-4 space-y-2">
            <li>Ye <strong>100% optional</strong> hai — enrollment ke waqt (ya baad mein) iska alag consent form bharna hota hai. Bina aapki likhit sahmati ke PM-KISAN ki kist se ek rupaya nahi kat sakta.</li>
            <li>Consent dene ke baad contribution kist aane par adjust hota hai — beech mein kist ruk jaye (eKYC pending, land seeding issue) toh contribution bhi affect ho sakta hai, isliye kist ka status regular check karte rahein.</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Auto-debit fail hone par kya hota hai aur regularize kaise karein — iska alag detailed guide hai: <Link href="/maandhan/auto-debit-fail-hone-par-regularization-kaise-karein" className="underline text-blue-600 dark:text-blue-400 font-medium">Auto-Debit Fail Regularization Guide</Link>.
          </p>
        </section>

        <section className="mb-8">
          <SH>Beech Mein Chhodna Pade Toh? (Exit &amp; Family Pension Rules)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Register karne se pehle ye jaanna zaroori hai ki paisa nikalne ke rules kya hain — kyunki ye 20–42 saal ka commitment hai. Scheme ke exit provisions (source: <a href="https://pib.gov.in/PressReleasePage.aspx?PRID=2053142" {...EXTERNAL_LINK_PROPS} className="underline text-blue-600 dark:text-blue-400">PIB release</a> + <a href="https://maandhan.in" {...EXTERNAL_LINK_PROPS} className="underline text-blue-600 dark:text-blue-400">maandhan.in</a> scheme details):
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-[var(--color-border)] rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[var(--color-bg-alt)] text-left">
                  <th className="p-3 font-black text-[var(--color-text)]">Situation</th>
                  <th className="p-3 font-black text-[var(--color-text)]">Kya milta hai</th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-text-muted)]">
                <tr className="border-t border-[var(--color-border)]">
                  <td className="p-3 font-semibold">10 saal se pehle exit</td>
                  <td className="p-3">Sirf aapka apna contribution + savings-bank rate ka interest</td>
                </tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]">
                  <td className="p-3 font-semibold">10 saal baad, 60 se pehle exit</td>
                  <td className="p-3">Apna contribution + fund ka actually earned interest ya savings rate (jo zyada ho)</td>
                </tr>
                <tr className="border-t border-[var(--color-border)]">
                  <td className="p-3 font-semibold">60 se pehle dehant</td>
                  <td className="p-3">Spouse scheme continue kar sakta hai (bacha contribution dekar) ya contribution + interest lekar exit. Spouse na ho toh nominee ko</td>
                </tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]">
                  <td className="p-3 font-semibold">60 ke baad dehant</td>
                  <td className="p-3">Spouse ko ₹1,500/mahina (50%) family pension — sirf spouse ke liye. Dono ke baad corpus pension fund mein wapas</td>
                </tr>
              </tbody>
            </table>
          </div>
          <WB>
            <strong>Sabse zaroori line:</strong> Sarkar ka matching contribution kisi bhi exit mein aapko wapas nahi milta — wo pension fund mein hi rehta hai. Wapas sirf aapka apna daala hua paisa (+ interest) aata hai. Poori detail: <Link href="/maandhan/pm-kisan-maandhan-withdrawal-refund-rules" className="underline font-medium">Withdrawal &amp; Refund Rules Guide</Link>.
          </WB>
        </section>

        <section className="mb-8">
          <SH>Register Karne Se Pehle Ek Aakhri Sawal</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar aap soch rahe hain ki Maandhan lein ya Atal Pension Yojana — register karne se PEHLE comparison padh lein, kyunki ek waqt mein ek hi pension scheme active reh sakti hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/pm-kisan-maandhan-vs-atal-pension-yojana" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">PMKMY vs APY: Kaunsi Behtar Hai? →</Link>
          </div>
        </section>

        <section className="mb-8">
          <SH>Registration Mein Dikkat Aaye Toh Kahan Karein Complaint?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Application pending reh jaye ya koi technical dikkat aa jaye, toh ghabrane wali baat nahi. Har state ke liye sarkar ne alag grievance mechanism banaya hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Official PM Kisan portal par apne state ke nodal officer ki updated contact details mil jayengi. Complaint karte waqt Registration Number aur Application Date likh kar mention karein taaki resolution jaldi ho.
          </p>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
            <p className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-2">Official Grievance Links:</p>
            <ul className="list-disc list-inside text-xs text-blue-800 dark:text-blue-300 space-y-1">
              <li><Link href="https://pmkisan.gov.in/Grievance.aspx" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">PM Kisan Grievance Portal</Link></li>
              <li><Link href="https://pmkisan.gov.in/NodalOfficers.aspx" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">State-wise Nodal Officers List</Link></li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <SH>Common Mistakes</SH>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/bank-passbook-seeding.webp"
              alt="Bank passbook showing NPCI seeding stamp for direct benefit transfer"
              width={800}
              height={450}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Bank Account NPCI Seeding Zaroori Hai
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                mistake: 'Mobile Number Aadhaar Se Link Nahi',
                fix: 'Link nahi hoga toh OTP aayega hi nahi. Pehle UIDAI center jakar mobile number update karwa lein.'
              },
              {
                mistake: 'Bank Account NPCI Seeded Nahi',
                fix: 'Branch jakar DBT ke liye Aadhaar link karwayein, warna pension transfer ruk sakta hai.'
              },
              {
                mistake: 'Zameen 2 Hectare Se Zyada',
                fix: 'Khatauni pehle check kar lein — limit cross hone par system apply nahi hone dega.'
              },
            ].map(({ mistake, fix }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">{mistake}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>Fix:</strong> {fix}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            FAQs
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Maandhan Registration FAQ" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Enroll Karne Se Pehle Ka Sequence</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Umar 40 se kam hai, zameen 2 hectare ke andar hai aur naam land records mein hai — toh deri ka seedha nuksan hai: har birthday ke saath monthly slab badh jaata hai (18 par ₹55, 40 par ₹200). Pehle exit rules upar wali table se samajh lein, phir documents lekar CSC jayein ya maandhan.in se khud enroll karein. Aur ek scheme ka niyam yaad rakhein: NPS/EPFO/ESIC member ya income tax payer hain toh ye scheme aapke liye nahi hai — galat enrollment baad mein reject hota hai.
          </p>
        </div>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Official Portal"
          guide="Official Website"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Related Articles — Yeh Bhi Padho</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RELATED_CARDS.map((card) => (
              <Link
                key={card.slug}
                href={`/maandhan/${card.slug}`}
                className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg hover:border-green-500 transition-all duration-300"
              >
                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-green-600 transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                  {card.desc}
                </p>
                <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                  Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <AuthorBox modified={MODIFIED} bioKey="PmKisanMaandhanRegistration2026" />
        <BottomNav extraLinks={[
          { href: '/maandhan/pm-kisan-maandhan-eligibility-documents', l: 'Eligibility' },
          { href: '/maandhan/pm-kisan-maandhan-pension-calculator', l: 'Calculator' },
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
