import Link from 'next/link';
import Image from 'next/image';
import ContributionCalculator from '@/components/ContributionCalculator';
import { SH, GovLink, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { MaandhanArticleMeta } from '@/lib/maandhan-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-05-22T17:41:10+05:30';
const MODIFIED = '2026-05-31T07:51:01+05:30';

const RELATED_CARDS = [
  {
    slug: 'pm-kisan-maandhan-registration-2026',
    title: 'Registration Poora Tarika',
    desc: 'CSC center par VLE ke saath step-by-step enrollment kaise hota hai, documents list ke saath.',
    
  },
  {
    slug: 'pm-kisan-maandhan-auto-debit-poora-sach',
    title: 'Auto Debit Ka Sach',
    desc: 'PM Kisan ki kist se paisa kyun kat raha hai? NACH mandate ka matlab samjhiye.',
    
  },
  {
    slug: 'pm-kisan-maandhan-withdrawal-refund-rules',
    title: 'Beech Mein Nikalne Ke Niyam',
    desc: '10 saal se pehle ya baad mein exit karne par kitna paisa wapas milta hai.',
    
  },
];

const FAQS_DATA = [
  {
    q: '18 saal ke ladke ko PMKMY mein kitna monthly dena padega?',
    a: '18 saal ki umar mein join karne par monthly contribution sirf ₹55 hota hai. Government bhi ₹55 match karegi. Total ₹110 har mahine pension fund mein jayega. Yeh sabse kam contribution slab hai.',
  },
  {
    q: '40 saal ki umar mein join karun toh monthly kitna katega?',
    a: '40 saal par monthly contribution ₹200 hota hai (Govt bhi ₹200 degi). Pension amount sabhi ko same ₹3000/month milegi, bas farak itna hai ke 40 saal wale ko sirf 20 saal contribute karna hota hai.',
  },
  {
    q: 'Pre-mature exit par sarkar ka co-contribution wapas milta hai?',
    a: 'Government ka co-contribution pre-mature exit par kabhi wapas nahi milta, woh pension fund mein hi rehta hai. Aapka apna deposited amount + applicable interest wapas mil jata hai. Exact terms apne CSC center ya pmkmy.gov.in se confirm kar lena.',
  },
  {
    q: 'Asli helpline number kaunsa hai PM Kisan Maandhan ka?',
    a: 'Official helpline 1800-3000-3468 hai (Monday se Saturday, 9:30 AM se 6 PM). State-wise numbers ke liye pmkmy.gov.in par "Contact Us" section check karein.',
  },
  {
    q: 'Kaun log is scheme mein join nahi kar sakte?',
    a: '2 hectare se zyada zameen wale, jo pehle se NPS/EPFO/ESIC mein hain, income tax pay karne wale, sarkari naukri wale, PM-SYM/PM-LVM beneficiaries, aur registered professionals (doctor, engineer, CA, lawyer, architect) eligible nahi hain.',
  },
  {
    q: 'KPAN card download kaise karte hain?',
    a: 'pmkmy.gov.in par login karein, registered mobile number aur OTP daaliye. Dashboard par KPAN download ka option mil jayega. Enrollment ke 7-10 din baad SMS bhi aa jata hai KPAN ke saath.',
  },
];

export default function MaandhanContributionGuide({ article }: { article: MaandhanArticleMeta }) {
  return (
    <>

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/maandhan" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Maandhan Yojana</Link>
            <span>/</span>
            <span className="text-white font-bold">Contribution Chart</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Kisan Pension Scheme</span>

          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Maandhan Yojana: Age-Wise Monthly Contribution Chart 2026
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
            src="/images/articles/maandhan/MaandhanContributionGuide/hero.webp"
            alt="PM Kisan Maandhan Yojana contribution chart showing monthly payment by age"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Umar kam hone par monthly contribution bhi kam hota hai
          </p>
        </div>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Chhote aur seemant kisanon ke liye PM Kisan Maandhan (PM-KMY) ek solid backup hai. 18 se 40 saal ki umar ke beech join karo, thoda sa monthly jama karo, aur 60 ke baad ₹3000 har mahine pakka. Sarkar bhi aapke har rupee par ek rupee match karti hai.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Neeche maine exact age-wise contribution, registration ka asli tarika, aur woh chhote-chhote rules likhe hain jo aksar CSC centers par ignore kar diye jate hain. Saari jankari PIB press release (Sept 2024) aur Ministry of Agriculture ki Operational Guidelines se cross-verify ki gayi hai.
        </p>

        <section className="mb-8">
          <SH>Contribution Kitna Hoga? Official Age-Wise Table</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jitni jaldi join karoge, utna hi halka padega monthly bojh. Yeh table official operational guidelines se li gayi hai, kyunki exact amounts har age ke liye LIC ke actuarial calculations se nikalti hain.
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-xs border border-[var(--color-border)] rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[var(--color-bg-alt)] text-left">
                  <th className="p-3 font-black">Entry Age</th>
                  <th className="p-3 font-black">Aapka Share (₹/month)</th>
                  <th className="p-3 font-black">Govt Match (₹/month)</th>
                  <th className="p-3 font-black">Total Fund (₹/month)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[var(--color-border)] bg-green-50 dark:bg-green-900/10"><td className="p-3 font-bold">18</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹55</td><td className="p-3">₹55</td><td className="p-3">₹110</td></tr>
                <tr className="border-t border-[var(--color-border)]"><td className="p-3 font-bold">19</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹58</td><td className="p-3">₹58</td><td className="p-3">₹116</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]"><td className="p-3 font-bold">20</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹61</td><td className="p-3">₹61</td><td className="p-3">₹122</td></tr>
                <tr className="border-t border-[var(--color-border)]"><td className="p-3 font-bold">21</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹64</td><td className="p-3">₹64</td><td className="p-3">₹128</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]"><td className="p-3 font-bold">22</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹68</td><td className="p-3">₹68</td><td className="p-3">₹136</td></tr>
                <tr className="border-t border-[var(--color-border)]"><td className="p-3 font-bold">23</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹72</td><td className="p-3">₹72</td><td className="p-3">₹144</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]"><td className="p-3 font-bold">24</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹76</td><td className="p-3">₹76</td><td className="p-3">₹152</td></tr>
                <tr className="border-t border-[var(--color-border)]"><td className="p-3 font-bold">25</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹80</td><td className="p-3">₹80</td><td className="p-3">₹160</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]"><td className="p-3 font-bold">26</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹85</td><td className="p-3">₹85</td><td className="p-3">₹170</td></tr>
                <tr className="border-t border-[var(--color-border)]"><td className="p-3 font-bold">27</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹90</td><td className="p-3">₹90</td><td className="p-3">₹180</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]"><td className="p-3 font-bold">28</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹95</td><td className="p-3">₹95</td><td className="p-3">₹190</td></tr>
                <tr className="border-t border-[var(--color-border)]"><td className="p-3 font-bold">29</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹100</td><td className="p-3">₹100</td><td className="p-3">₹200</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]"><td className="p-3 font-bold">30</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹105</td><td className="p-3">₹105</td><td className="p-3">₹210</td></tr>
                <tr className="border-t border-[var(--color-border)]"><td className="p-3 font-bold">31</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹110</td><td className="p-3">₹110</td><td className="p-3">₹220</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]"><td className="p-3 font-bold">32</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹120</td><td className="p-3">₹120</td><td className="p-3">₹240</td></tr>
                <tr className="border-t border-[var(--color-border)]"><td className="p-3 font-bold">33</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹130</td><td className="p-3">₹130</td><td className="p-3">₹260</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]"><td className="p-3 font-bold">34</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹140</td><td className="p-3">₹140</td><td className="p-3">₹280</td></tr>
                <tr className="border-t border-[var(--color-border)]"><td className="p-3 font-bold">35</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹150</td><td className="p-3">₹150</td><td className="p-3">₹300</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]"><td className="p-3 font-bold">36</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹160</td><td className="p-3">₹160</td><td className="p-3">₹320</td></tr>
                <tr className="border-t border-[var(--color-border)]"><td className="p-3 font-bold">37</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹170</td><td className="p-3">₹170</td><td className="p-3">₹340</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]"><td className="p-3 font-bold">38</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹180</td><td className="p-3">₹180</td><td className="p-3">₹360</td></tr>
                <tr className="border-t border-[var(--color-border)]"><td className="p-3 font-bold">39</td><td className="p-3 font-bold text-green-700 dark:text-green-400">₹190</td><td className="p-3">₹190</td><td className="p-3">₹380</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-red-50 dark:bg-red-900/10"><td className="p-3 font-bold">40</td><td className="p-3 font-bold text-red-700 dark:text-red-400">₹200</td><td className="p-3 font-bold">₹200</td><td className="p-3 font-bold">₹400</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-[var(--color-text-muted)] mb-4">
            Yeh numbers <a href="https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2053142" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">PIB Press Release (Sept 2024)</a> aur Agriculture Ministry ki <a href="https://pmkisan.gov.in/Documents/PM-KMY%20-%20Operational%20Guidelines.pdf" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Operational Guidelines</a> se match karte hain.
          </p>
        </section>

        <ContributionCalculator />

        <section className="mb-8">
          <SH>20 Saal vs 35 Saal — Numbers Bolte Hain</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kai baar kisan sochte hain, "pension toh same ₹3000 milegi, toh umar se kya farak padta hai?" Farak bada padta hai. Example ke liye, Ramesh (20 saal) aur Suresh (35 saal) dono ko 60 ke baad ₹3000 hi milenge. Lekin Ramesh ka total contribution lagbhag 30 hazar (₹29,280) rahega, jabki Suresh ko lagbhag 45 hazar (₹45,000) dene honge.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Dono ko same pension milegi. Bas itna sa farak hai ke jawan ladke ko zyada saal dena padta hai lekin har mahine kam, aur bade umar wale ko kam saal dena hai lekin har mahine zyada. Meri raay mein, agar ghar mein koi 18-20 saal ka jawan kisan hai, toh uska enrollment abhi karwa dena sabse smart financial move hai.
          </p>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/MaandhanContributionGuide/farmer-plan.webp"
            alt="Kisan apne future aur pension ki planning karte hue"
            width={1000}
            height={560}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Jitni jaldi plan karenge, utna hi halka monthly bojh padega
          </p>
        </div>

        <section className="mb-8">
          <SH>Eligibility Sirf Ek Nazar Mein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ye page sirf numbers ke liye hai — 18–40 saal entry, 2 hectare tak zameen, PM Kisan beneficiary hona zaroori. Shartein detail mein, exclusion list aur documents ke saath, alag guide mein hain:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/pm-kisan-maandhan-eligibility-documents" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">Eligibility & Documents Ki Poori Checklist →</Link>
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/MaandhanContributionGuide/csc-center.webp"
            alt="CSC center par VLE farmer se enrollment form bharte hue"
            width={1000}
            height={560}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Enrollment sirf CSC center ya State Nodal Officer ke through hota hai
          </p>
        </div>

        <section className="mb-8">
          <SH>Register Karna Ho To</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Contribution amount confirm karne ke baad agla kadam registration hai — CSC aur online app dono ke step-by-step screenshots wali guide alag se maujood hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/pm-kisan-maandhan-registration-2026" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">Registration Ka Step-by-Step Process →</Link>
          </div>
        </section>

        <section className="mb-8">
          <SH>PM Kisan Se Auto-Debit — Optional Hai, Mandatory Nahi</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ek bahut common sawal: "Kya PM Kisan ki ₹2000 ki kist se Maandhan ka paisa apne aap kat jayega?" Jawab hai: bilkul nahi, jab tak aapne khud allow na kiya ho. Yeh process 100% optional hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kai kisan yeh samajh kar CSC jate hain ke unka Maandhan automatically PM Kisan se link ho jayega, aur phir unhe surprise hota hai ke iske liye ek alag "enrolment-cum-auto-debit-mandate form" sign karna padta hai. Bina is specific form ke, aapke PM Kisan account se ek rupaya bhi nahi katega. Agar aap chahte hain ke deduction normal bank account se ho, toh koi baat nahi, woh bhi ho jayega.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar baad mein aapko lagta hai ke auto-debit band karna hai, toh aapko apni bank branch ja kar NACH mandate cancellation form submit karna hoga. Ek practical tip: yeh cancellation process kabhi-kabhi thoda time le sakta hai (ek do cycle tak lag sakta hai), isliye ise last-minute par mat chhodiye, warna account mein balance na hone ki wajah se late fee lag sakti hai.
          </p>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/MaandhanContributionGuide/bank-debit.webp"
            alt="Bank account se auto-debit mandate setup"
            width={1000}
            height={560}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Auto-debit optional hai — sirf tabhi lagega jab aap khud form sign karenge
          </p>
        </div>

        <section className="mb-8">
          <SH>Payment Miss Ho Jaye Toh Kya Hoga? Exact Rules</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Maan lijiye aapke account mein balance nahi tha aur 11th ka debit fail ho gaya — aisi situation har kisi ke saath kabhi na kabhi hoti hai. Guidelines ke hisaab se payment cycles har mahine 1st, 11th, aur 21st ko hote hain, aur system thoda flexible hai.
          </p>

          <div className="space-y-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-sm text-green-800 dark:text-green-300 mb-1">Pehle 1 Mahine Tak</p>
              <p className="text-xs text-[var(--color-text-muted)]">Koi late fee nahi. Sirf due amount jama karke account regular karwa sakte hain. Demand teen payment cycles tak dobara uthai jaati hai, aur is par koi interest nahi lagta.</p>
            </div>

            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              <strong>1 mahine ke baad</strong> thoda strict ho jata hai — late fee lagti hai jo savings bank interest rate ke barabar hoti hai. Pehle 12 mahine tak simple interest, uske baad compounding shuru. Yeh woh point hai jahan zyada log confuse hote hain.
            </p>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-sm text-red-800 dark:text-red-300 mb-1">6 Mahine Tak Payment Nahi Hui</p>
              <p className="text-xs text-[var(--color-text-muted)]">Account "dormant" ho jata hai, lekin 3 saal tak SMS alerts aate rehte hain. Is dauran bhi aap entire outstanding amount + interest jama karke account regular karwa sakte hain — account cancel nahi hota.</p>
            </div>
          </div>

          <p className="text-sm text-[var(--color-text-muted)] mb-4">
            Ek cheez clear kar dun — kai websites par "3 mahine ka grace period" likha milta hai, jo technically sahi nahi hai. Official guidelines ke hisaab se <strong>sirf 1 mahine</strong> tak koi late fee nahi hai. Uske baad interest lagna shuru hota hai. Maine khud kai VLEs ko galat information dete hue dekha hai, isliye hamesha official guidelines ya apne CSC se confirm karein.
          </p>
        </section>

        <section className="mb-8">
          <SH>Beech Mein Chhodne Ka Hisaab</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Scheme chhodne par kitna refund milega, ye aapki exit ki timing par depend karta hai — teen alag halaat ke exact rules scenario-wise guide mein diye hain:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/pm-kisan-maandhan-withdrawal-refund-rules" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">Withdrawal & Refund Ke Exact Rules →</Link>
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/MaandhanContributionGuide/kpan-card.webp"
            alt="Kisan Pension Account Number KPAN card sample"
            width={1000}
            height={560}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            KPAN card enrollment ke baad generate hota hai — isse sambhal kar rakhein
          </p>
        </div>

        <section className="mb-8">
          <SH>APY Se Compare Karna Ho To</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Dono schemes ₹3000 pension deti hain lekin contribution aur government match bilkul alag hai — head-to-head scorecard alag article mein hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/pm-kisan-maandhan-vs-atal-pension-yojana" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">PMKMY vs APY: Full Comparison →</Link>
          </div>
        </section>

        <section className="mb-8">
          <SH>Contribution Jama Ho Raha Hai Ya Nahi?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Table se amount confirm karne ke baad ye bhi verify karein ki paisa har mahine sach mein kat raha hai — status, passbook aur contribution history check karne ka process yahan hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/pm-kisan-maandhan-status-check-online" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">Status Check Karne Ka Tarika →</Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Contribution Ko Lekar Poochhe Gaye Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Maandhan — Common Sawal" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">"3 Mahine Grace" Wali Galatfehmi Se Bachein</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Is guide ka sabse kaam ka hissa woh hai jo zyada tar VLE bhi galat batate hain: grace period 3 mahine ka nahi, <strong>sirf 1 mahine</strong> ka hai. Uske baad savings-rate ke barabar late fee lagti hai — pehle 12 mahine simple interest, phir compounding. Contribution miss ho jaye toh ghabraane ki zaroorat nahi (account 3 saal tak regularize ho sakta hai), lekin 1 mahine ke andar bharna sabse sasta rasta hai.
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Slab ka hisaab bhi ek baar upar wali table se milaa lein — 18 par ₹55, 40 par ₹200 — aur enrollment form sign karne se pehle auto-debit wala box khud padhein, kyunki woh 100% optional hai; PM Kisan ki ₹2000 ki kist se apne aap kuch nahi kat-ta jab tak aap likh kar allow na karein.
          </p>
        </div>

        <GovLink
          href="https://pmkmy.gov.in"
          label="PM Kisan Maandhan Official Portal"
          guide="Complete PM Kisan Guide"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkmy.gov.in"
        />

        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Aage Ki Padhai</h3>
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

        <AuthorBox modified={MODIFIED} bioKey="MaandhanContributionGuide" />
        <BottomNav extraLinks={[
          { href: '/maandhan/pm-kisan-maandhan-registration-2026', l: 'Registration Guide' },
          { href: '/maandhan/pm-kisan-maandhan-auto-debit-poora-sach', l: 'Auto Debit' },
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
        ]} />
        <Disclaimer k="MaandhanContributionGuide" />
      </div>
    </>
  );
}
