import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, SH, GovLink, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';
const PUBLISHED = '2025-12-24T10:29:44+05:30';
const MODIFIED = '2025-12-29T08:11:53+05:30';

function fmtDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

const RELATED_CARDS = [
  {
    slug: 'PmKisan24viKist2026',
    title: 'PM Kisan 24vi Kist Status',
    desc: 'Apna ₹2000 installment status aur eKYC errors abhi fix karein.',
  },
  {
    slug: 'KisanRinKahaSeLe2026',
    title: 'Kisan Loan Kahan Se Milega',
    desc: 'Mudra aur KCC ke beech sahi agriculture loan choice kaise karein.',
    emoji: '🏦'
  },
  {
    slug: 'AgriStackKyaHai2026',
    title: 'Digital Kisan ID (AgriStack)',
    desc: 'Unified ID banakar fast-track loan approval kaise paayein.',
  },
];

const FAQS_DATA = [
  {
    q: 'Mera naam Aadhaar mein "Rajesh Kumar Singh" hai lekin bank passbook mein "R. K. Singh" — kya application reject hogi?',
    a: 'Haan, yeh sabse common rejection reason hai. Bank ka verification system exact string match karta hai. Apply karne se pehle bank branch jaakar Aadhaar copy ke saath naam update karwayein. Isme 7-10 din lagte hain, uske baad hi form bharein.',
  },
  {
    q: 'Tenant farmer hoon, zameen malik NOC nahi de raha — kya option hai?',
    a: 'Kuch states (jaise Bihar aur UP) mein Gram Pradhan ya Patwari ka certificate NOC ki jagah acceptable hota hai. Apne Block Agriculture Officer (BAO) se puchkar written confirmation lein, sirf verbal assurance par depend na karein.',
  },
  {
    q: 'Kisan Credit Card approve ho gaya lekin paisa nikaalne par 7% byaj lag raha hai — 4% kab milega?',
    a: '4% effective rate sirf tab milta hai jab aap due date se pehle poora amount repay karte hain. Prompt Repayment Incentive (3% subvention) repayment ke baad account mein credit hota hai, upfront nahi. Ek bhi installment late hui toh us cycle ka full 7% byaj lagega.',
  },
  {
    q: 'Cooperative bank se apply karun ya SBI/PNB se — kya farak hai?',
    a: 'Interest rate dono jagah same hai (7% base, 4% effective). Lekin cooperative banks mein approval faster hota hai (5-7 din) kyunki woh local land records se familiar hote hain. Agar aapko advanced digital services chahiye, toh SBI/PNB behtar hai.',
  },
  {
    q: '₹2 lakh se zyada limit chahiye lekin collateral (zameen) nahi hai — kya karein?',
    a: 'Do options hain. Pehla: CGTMSE scheme ke under ₹5 lakh tak collateral-free loan maangein (bank officer se specifically puchhein). Doosra: Joint Liability Group (JLG) banakar apply karein, jisme 3-5 farmers milkar cross-guarantee dete hain.',
  },
  {
    q: 'Dairy farming ya poultry ke liye Kisan Credit Card mil sakta hai?',
    a: 'Haan, bilkul. KCC ab allied activities ko cover karta hai — dairy, poultry, fisheries, aur mushroom cultivation sab included hain. Limit alag calculate hoti hai based on unit size aur animal count.',
  },
  {
    q: 'KCC 5 saal ke liye milta hai — beech mein limit badhwa sakte hain kya?',
    a: 'Haan. Card 5 saal valid hota hai lekin har saal annual review hota hai. Clean repayment history par bank khud 10% ke aaspaas enhancement de deta hai. Agar aapne nayi zameen li hai ya crop pattern change kiya hai, toh review ke time updated land record lekar jaao — limit re-assess hoti hai.',
  },
  {
    q: 'Jansamarth portal se KCC apply karna better hai ya seedha bank jaana?',
    a: 'Jansamarth (jansamarth.in) ek single window hai jahan se application aapke chune hue bank tak pahunchti hai. Documents clean hain toh online theek hai. Lekin land record ya naam mismatch jaisa koi bhi issue hai toh branch route lo — wahan galti counter par hi pakdi jaati hai, portal par hafton baad reject hokar aati hai.',
  },
];

export default function KisanCreditCardOnlineApply2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Kisan Credit Card Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">KCC Loan Guide 2026</span>

          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Kisan Credit Card 2026: 4% Byaj, Online Apply & Limits
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

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl">
          <p className="text-sm md:text-base text-blue-900 dark:text-blue-100 leading-relaxed font-medium">
            <strong>Quick Answer:</strong> Kisan Credit Card (KCC) 2026 ek government-backed short-term loan hai jo kisanon ko <strong>4% effective byaj dar</strong> par ₹5 lakh tak ki credit suvidha deta hai. Isme beej, khaad, aur kheti ke kharchon ke liye ₹2 lakh tak collateral-free loan milta hai. Apply karne ke liye Aadhaar, updated land records (Khatauni), aur bank passbook sabse zaroori documents hain.
          </p>
        </div>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/kisan-credit-card-apply-online-hero.webp'}
            alt="Kisan Credit Card application process 2026 — 4% subsidized interest rate facility for kisans"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Kisan Credit Card — 4% Effective Rate, ₹2 Lakh Tak Collateral-Free
          </p>
        </div>

        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 dark:border-amber-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">Approval Ki Speed Documents Par Tikti Hai</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            Complete documents ke saath application seedha process me jaati hai — exact din bank ke internal process par depend karte hain, isliye is guide me koi fixed “itne din me approval” ka vaada nahi hai.
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            Lekin incomplete documents ka matlab pakka delay hai: har visit par koi na koi kami nikalti hai aur chakkar badhte jaate hain. Do sabse common atkav — Aadhaar/bank/land record me naam ka mismatch, aur purana ya un-updated land record. Yeh guide inhi problems ko pehle se solve karne par focus karti hai.
          </p>
        </div>

        <section className="mb-8">
          <SH>Kisan Credit Card (KCC) Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Seedhi baat karo. Yeh koi personal ya business loan nahi hai. RBI aur NABARD ne isse specifically kheti ke cash-flow gaps ko cover karne ke liye design kiya hai. Chahe Kharif ki buwai ho ya Rabi ki katai, KCC aapko local sahukar ke 24-36% byaj se bachata hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Banks ke paas directive hai ki eligible kisanon ko yeh facility deni hi hogi. Agar koi branch arbitrary reason dekar reject karti hai, toh unhe written justification dena padta hai.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <p className="font-black text-green-800 dark:text-green-300 text-2xl mb-1">4%</p>
              <p className="text-xs text-[var(--color-text-muted)]">Effective Interest Rate</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-center">
              <p className="font-black text-blue-800 dark:text-blue-300 text-2xl mb-1">₹5L</p>
              <p className="text-xs text-[var(--color-text-muted)]">Max Subvention Limit</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-center">
              <p className="font-black text-amber-800 dark:text-amber-300 text-2xl mb-1">5 Yr</p>
              <p className="text-xs text-[var(--color-text-muted)]">Validity Period</p>
            </div>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Byaj Ka Asli Hisaab:</strong> Base rate 7% hota hai. Agar aap due date se pehle poora amount chuka dete hain, toh government 3% subvention deti hai. Matlab, ₹3 lakh ke loan par saalana byaj sirf ₹12,000 aata hai. Wahi local moneylender se ₹72,000 se upar lagta. Yeh saalana ₹60,000+ ki bachat hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ek chhota example aur. Maan lijiye aapne ₹1 lakh nikala aur 11 mahine baad poora chuka diya. Bank pehle 7% ke hisaab se byaj calculate karega — lagbhag ₹6,400. Repayment time par hone ki wajah se 3% Prompt Repayment Incentive (PRI) wapas aapke account mein credit hoga — lagbhag ₹2,750. Net kharcha: ₹3,650 ke aaspaas, yaani effectively 4%. Dhyan rahe: PRI <em>baad mein refund</em> hota hai, upfront discount nahi. Isliye statement mein pehle 7% dikhe toh ghabraiye mat. Interest subvention scheme ki official details ke liye{' '}
            <a href="https://www.agriwelfare.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline font-medium">Ministry of Agriculture (agriwelfare.gov.in)</a>{' '}aur RBI ke Modified Interest Subvention Scheme circulars dekhein.
          </p>
        </section>

        <section className="mb-8">
          <SH>Application Se Disbursal Tak — Bank Ke Andar Kya Hota Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            KCC application har bank me lagbhag ek hi process se guzarti hai. Neeche wo stages hain jo application ke baad bank ke andar chalte hain — in stages ka structure banks ke KCC application flow aur government ke KCC saturation drive guidelines par based hai. Har stage me kitne din lagenge, ye aapke bank aur documents ki taiyari par depend karta hai — koi fixed guarantee nahi hoti.
          </p>
          <div className="space-y-3 mb-4">
            <div className="flex gap-3 text-sm">
              <span className="font-black text-green-700 dark:text-green-400 whitespace-nowrap">Stage 1</span>
              <p className="text-[var(--color-text-muted)]"><strong>Document check.</strong> Branch par sabse pehle land record (Khatauni/Khasra ya state ka equivalent) check hota hai. Sabse common atkav yahi hai: record purana hai, ya mutation update nahi hua (zameen abhi bhi pita/dada ke naam par hai). Aisi halat me bank pehle fresh record maangta hai — isliye apply karne se <em>pehle</em> apne state ke bhulekh portal ya tehsil se record update karwa lena sabse zyada time bachata hai.</p>
            </div>
            <div className="flex gap-3 text-sm">
              <span className="font-black text-green-700 dark:text-green-400 whitespace-nowrap">Stage 2</span>
              <p className="text-[var(--color-text-muted)]"><strong>Application + verification.</strong> Form ke saath bank PM Kisan beneficiary status aur KYC verify karta hai — agar aapka PM Kisan eKYC pehle se complete hai to ye step aasaan ho jaata hai. Acknowledgement receipt zaroor lein; follow-up isi se hota hai.</p>
            </div>
            <div className="flex gap-3 text-sm">
              <span className="font-black text-green-700 dark:text-green-400 whitespace-nowrap">Stage 3</span>
              <p className="text-[var(--color-text-muted)]"><strong>Field verification.</strong> Bank ka staff/agent plot ka physical verification karta hai. Ye step normally skip nahi hota, chahe documents kitne bhi complete hon.</p>
            </div>
            <div className="flex gap-3 text-sm">
              <span className="font-black text-green-700 dark:text-green-400 whitespace-nowrap">Stage 4</span>
              <p className="text-[var(--color-text-muted)]"><strong>Limit sanction.</strong> Limit “scale of finance” se nikalti hai — har district ki technical committee crop-wise per-acre limit tay karti hai, isliye same 2 acre par alag district me alag limit ban sakti hai. Sanction ke baad card aur passbook issue hote hain.</p>
            </div>
            <div className="flex gap-3 text-sm">
              <span className="font-black text-green-700 dark:text-green-400 whitespace-nowrap">Stage 5</span>
              <p className="text-[var(--color-text-muted)]"><strong>Disbursal.</strong> Approved limit KCC account me available ho jaati hai — zaroorat ke hisaab se nikaliye, byaj sirf nikale hue amount par lagta hai.</p>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Seedha sabak: total time ka sabse bada hissa aksar Stage 1 me jaata hai. Land record pehle se fresh ho to baaki process bank ke internal SLA par chalta hai — exact din apne branch se poochhein, aur acknowledgement number ke saath follow-up karein.
          </p>
        </section>

        <section className="mb-8">
          <SH>SBI vs PNB vs Gramin Bank vs Cooperative — Kahan Se Lein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Interest rate sab jagah same hai — 7% base, prompt repayment par 4% effective. Farak service, speed aur ground behaviour mein hai.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Bank Type</th>
                  <th className="p-3 text-left">Strength</th>
                  <th className="p-3 text-left">Dhyan Rakhein</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['SBI', 'YONO Krishi se online apply, ATM-cum-KCC card, sabse zyada branches', 'Rush zyada — subah jaayein; documents perfect hone par hi fast'],
                  ['PNB / BOB', 'Digital process theek, processing generally smooth', 'Chhoti branches mein agriculture desk ek hi officer ke paas hota hai'],
                  ['Gramin Bank (RRB)', 'Local land records se familiar, kisan-friendly staff', 'Online portal aksar kaam nahi karta — branch hi jaana padega'],
                  ['Cooperative Bank', 'Society-level pehchaan kaam aati hai — local verification aasaan; processing time apni society/branch se confirm karein', 'Cash withdrawal network chhota; digital services limited'],
                ].map(([bank, plus, minus], i) => (
                  <tr key={bank} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-bold text-[var(--color-text)]">{bank}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{plus}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{minus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ek practical rule: <strong>jahan aapka savings account pehle se hai aur PM Kisan ki kist aati hai, wahin se KCC lo.</strong> Us bank ke paas aapki transaction history hai, NPCI seeding done hai — verification ka aadha kaam pehle se ho chuka hai. Naye bank mein jaane par sab kuch zero se shuru hota hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Doosra rasta hai <a href="https://www.jansamarth.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline font-medium">Jansamarth portal</a> — government ka single-window loan portal jahan KCC samet kai schemes ek jagah hain. Aap eligibility check karke apni pasand ka bank chun sakte hain, application digitally us bank tak jaati hai. Kaam karta hai, lekin yaad rakhein: final verification aur sanction phir bhi branch level par hi hota hai, toh document problem hone par aapko bulaya jaayega hi.
          </p>
        </section>

        <section className="mb-8">
          <SH>Dairy, Machli, Murgi — Pashupalan Wala KCC Alag Kaise Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            2019 se KCC sirf fasal tak seemit nahi raha — Animal Husbandry aur Fisheries walon ke liye bhi khula hai. Lekin teen baatein alag hain, jo log aksar nahi jaante:
          </p>
          <ul className="space-y-2 mb-4 text-sm text-[var(--color-text-muted)] list-disc list-inside">
            <li><strong>Zameen zaroori nahi.</strong> Dairy ke liye janwar hone ka proof (pashu bima, vet certificate, ya society membership) kaafi ho sakta hai. Bhoomiheen pashupalak bhi eligible hain.</li>
            <li><strong>Limit unit ke hisaab se banti hai</strong> — kitni bhains/gaay hain, unka daily kharcha (chara, dawai) per animal calculate hota hai. Machli palan mein pond area basis par.</li>
            <li><strong>Sirf allied activity wale KCC par</strong> subvention wali working-capital limit crop KCC se alag treat hoti hai — dono activities hain toh combined card banwao, alag-alag nahi.</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Branch par "KCC-AH" (Animal Husbandry) bolke baat shuru karein — kai baar counter staff ko lagta hai KCC matlab sirf kheti, aur woh galat form thama dete hain. Scheme details{' '}
            <a href="https://dahd.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline font-medium">Department of Animal Husbandry (dahd.gov.in)</a> par verified hain. Dairy loan ke deeper comparison ke liye hamari{' '}
            <Link href="/articles/sbi-dairy-loan-interest-rate" className="text-green-700 dark:text-green-400 underline font-medium">SBI dairy loan guide</Link> padhein.
          </p>
        </section>

        <section className="mb-8">
          <SH>CIBIL Score Ka Sach — Kitna Matter Karta Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Chhota sawal, lamba jawab.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            KCC priority sector lending hai, isliye banks CIBIL ko personal loan jitni sakhti se nahi dekhte. ₹2 lakh tak ke collateral-free KCC mein zyada tar banks score ko decisive factor nahi banate — land record aur repayment capacity dekhi jaati hai. Lekin teen situations mein CIBIL bite karta hai:
          </p>
          <ol className="space-y-2 mb-4 text-sm text-[var(--color-text-muted)] list-decimal list-inside">
            <li><strong>Active default</strong> kisi bhi loan par — system auto-flag karega, manager ka manual override chahiye hoga.</li>
            <li><strong>Written-off ya settled account</strong> purane record mein — no-dues certificate ke bina aage badhna mushkil.</li>
            <li><strong>₹2 lakh se badi limit</strong> — yahan credit history ka weight badh jaata hai.</li>
          </ol>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Score kharab hai toh bhi raste hain: pehle chhoti limit (₹50,000–₹1 lakh) lekar 2 season clean repayment karo — enhancement ke time wahi history aapka sabse bada document ban jaati hai. Ya Joint Liability Group (JLG) route lo jisme group guarantee individual score ki kami cover karti hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>3 Saal Baad Kya Hota Hai — Renewal Aur Limit Enhancement</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            KCC 5 saal ke liye sanction hota hai, lekin yeh "set and forget" nahi hai. Har saal ek review hota hai, aur standard practice ke hisaab se limit mein saalana lagbhag 10% ki badhotri built-in hoti hai (cost of cultivation badhne ke hisaab se). Practically iska matlab:
          </p>
          <ul className="space-y-2 mb-4 text-sm text-[var(--color-text-muted)] list-disc list-inside">
            <li>Pehle saal ₹1.5 lakh ki limit 5th saal tak ₹2 lakh ke aaspaas pahunch sakti hai — bina naye application ke, bas review clear hota rahe.</li>
            <li>Review miss kiya (bank bulaye aur aap na jaao) toh limit freeze — withdrawal ruk jaata hai.</li>
            <li>5 saal poore hone par renewal hota hai — fresh land record aur ek simple form. Purane card ki repayment history yahan aapki sabse badi taakat hai.</li>
            <li>Crop pattern badla hai (jaise sabzi se ganna) toh review ke time batao — scale of finance alag hai, limit upar ja sakti hai.</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ek aur cheez jo KCC ke saath free aati hai lekin log bhool jaate hain — <strong>PMFBY crop insurance ka aasan access</strong>. KCC holder ka premium bank khud debit kar sakta hai, alag se bhaag-daud nahi. Premium kitna banega, hamare <Link href="/calculator/pmfby-premium" className="text-green-700 dark:text-green-400 underline font-medium">PMFBY premium calculator</Link> se check karein.
          </p>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/kisan-credit-card-eligibility-criteria.webp"
            alt="Kisan credit card eligibility criteria — who can apply, land ownership requirements"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            KCC Eligibility — Kaun Apply Kar Sakta Hai
          </p>
        </div>

        <section className="mb-8">
          <SH>Kisko Priority Milti Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sab applicants ko same treatment nahi milta. Banks generally is priority order ko follow karte hain:
          </p>
          <ol className="space-y-2 mb-4 text-sm text-[var(--color-text-muted)] list-decimal list-inside">
            <li><strong>Existing PM Kisan beneficiaries</strong> (Jinka eKYC complete hai) — Data already verified, fastest approval.</li>
            <li><strong>AgriStack / Digital Kisan ID holders</strong> — Land records pre-verified hote hain.</li>
            <li><strong>Existing account holders</strong> with clean repayment history.</li>
            <li><strong>New applicants</strong> without prior credit history — Full verification, 15-20 din lag sakte hain.</li>
          </ol>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Pro Tip:</strong> Agar aap Category 1 ya 2 mein aate hain, toh bank manager ko sabse pehle yeh bataein. System mein flag hota hai, jisse processing ke steps skip ho jaate hain.
          </p>
        </section>

        <section className="mb-8">
          <SH>2026 Limits Aur Interest Rates</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Parameter</th>
                  <th className="p-3 text-left">2026 Value</th>
                  <th className="p-3 text-left">Note</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Base Interest Rate', '7% p.a.', 'All banks uniform'],
                  ['Effective Rate', '4% p.a.', 'Sirf prompt repayment par'],
                  ['Collateral-Free Limit', '₹2,00,000', 'Koi security nahi chahiye'],
                  ['Subvention Ceiling', '₹5,00,000', 'Budget 2025-26 guidelines'],
                  ['Limit Enhancement', '+10% yearly', 'Clean repayment history par'],
                  ['Late Penalty', '7% full rate', 'Subvention forfeit'],
                ].map(([param, value, note], i) => (
                  <tr key={param} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{param}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text)] font-bold">{value}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Critical Insight:</strong> ₹2 lakh ke upar collateral maanga jaata hai. Lekin <strong>CGTMSE scheme</strong> ke under ₹5 lakh tak collateral-free loan possible hai. Bahut se bank officers yeh nahi batate. Specifically puchiye aur written response maangein.
          </p>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/kisan-credit-card-loan-limits-interest-rates.webp"
            alt="Kisan credit card loan limits and interest rates comparison — 4% effective rate"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            KCC Loan Limits Aur Interest Rates — 2026 Updated
          </p>
        </div>

        <section className="mb-8">
          <SH>Documents — Official List Vs Ground Reality</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Website par jo likha hota hai aur branch par jo maanga jaata hai, dono mein zameen-aasman ka farak hota hai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Official Required</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1.5">
                <li>✓ Aadhaar Card</li>
                <li>✓ PAN card</li>
                <li>✓ Bank passbook (6 months)</li>
                <li>✓ Land records (Khata/Khatauni)</li>
                <li>✓ Passport photos (2-3)</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">Actually Maanga Jaata Hai</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1.5">
                <li>✓ Tenant → NOC / lease deed</li>
                <li>✓ Joint ownership → Consent letter</li>
                <li>✓ Name mismatch → Affidavit</li>
                <li>✓ Allied activity → Vet/fishery cert</li>
                <li>✓ Old borrower → Closure letter</li>
              </ul>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Ek Kaam Ki Baat:</strong> Hamesha 2 photocopies aur 1 digital scan apne phone mein ready rakhein. Branch ke bahar xerox machine aksar kharab hoti hai. Original documents wapas lene ke liye hamesha remind karein.
          </p>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/kisan-credit-card-documents-required.webp"
            alt="Kisan credit card required documents checklist — Aadhaar, PAN, land records, passbook"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Zaroori Documents Checklist — Branch Visit Se Pehle Ready Karo
          </p>
        </div>

        <section className="mb-8">
          <SH>Application Kaise Karein</SH>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Branch Visit (Recommended)</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Online portals exist karte hain, lekin sach bolun? Branch visit zyada reliable hai. Kyun? Kyunki land record verification kai banks (khas kar Cooperative aur RRBs) mein abhi bhi manual hota hai. Online submit karne ke 2-3 hafte baad pata chalta hai ki document reject hua. Branch mein turant feedback milta hai aur galti wahin correct ho jaati hai.
          </p>
          <StepList>
            <SI n={1}>Subah 10:00 - 11:00 baje jaayein (Officers fresh hote hain, dopahar mein rush).</SI>
            <SI n={2}>Direct Loan Officer ya Agriculture desk se miliye.</SI>
            <SI n={3}>Naam spelling triple-check karein: Aadhaar = Bank Passbook = Land Record.</SI>
            <SI n={4}>Acknowledgement receipt with reference number zaroor collect karein.</SI>
            <SI n={5}>7-10 din baad follow-up karein (call ya visit dono chalega).</SI>
          </StepList>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Online Portal</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Jab branch door ho ya timing na mile. Bank ki official website par "Kisan Credit Card" section dhundo. PM Kisan beneficiaries ke liye pmkisan.gov.in par pre-filled option available hai jo data entry errors kam karta hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Warning:</strong> Cooperative banks aur RRBs ka online portal aksar functional nahi hota. SBI, PNB, BOB better digital infra rakhte hain. Error aaye toh branch hi reliable option hai.
          </p>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/kisan-credit-card-online-application-process.webp"
            alt="Kisan credit card online application process flowchart — step by step guide"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            KCC Online Application Process — Step by Step Guide
          </p>
        </div>

        <section className="mb-8">
          <SH>Top 5 Rejection Reasons + Turant Fix</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Yeh 5 reasons sabse zyada common hain jo bank counter par dekhe jaate hain.
          </p>
          <div className="space-y-4 mb-4">
            <div className="p-4 border-l-4 border-red-400 bg-red-50/30 dark:bg-red-900/10 rounded-r-lg">
              <p className="font-bold text-red-800 dark:text-red-300 text-sm mb-1">#1 Name Mismatch</p>
              <p className="text-xs text-[var(--color-text-muted)] mb-2">Aadhaar full name. Bank initials. System exact match chahta hai.</p>
              <p className="text-xs text-green-700 dark:text-green-400 font-semibold">Fix → Bank mein naam update karwao Aadhaar copy ke saath. 7-10 din. Phir apply karo.</p>
            </div>
            <div className="p-4 border-l-4 border-red-400 bg-red-50/30 dark:bg-red-900/10 rounded-r-lg">
              <p className="font-bold text-red-800 dark:text-red-300 text-sm mb-1">#2 Land Record Not Digitized</p>
              <p className="text-xs text-[var(--color-text-muted)] mb-2">Khasra portal par nahi milta. Bihar/Jharkhand mein bahut common.</p>
              <p className="text-xs text-green-700 dark:text-green-400 font-semibold">Fix → Patwari se updated Khatauni lo. Digital signature wali copy.</p>
            </div>
            <div className="p-4 border-l-4 border-red-400 bg-red-50/30 dark:bg-red-900/10 rounded-r-lg">
              <p className="font-bold text-red-800 dark:text-red-300 text-sm mb-1">#3 Aadhaar-Bank Link Missing</p>
              <p className="text-xs text-[var(--color-text-muted)] mb-2">NPCI seeding incomplete. Account active par DBT-enabled nahi.</p>
              <p className="text-xs text-green-700 dark:text-green-400 font-semibold">Fix → "Aadhaar NPCI seeding form" bharo branch mein. Confirmation letter maango.</p>
            </div>
            <div className="p-4 border-l-4 border-red-400 bg-red-50/30 dark:bg-red-900/10 rounded-r-lg">
              <p className="font-bold text-red-800 dark:text-red-300 text-sm mb-1">#4 Past Default / Low CIBIL</p>
              <p className="text-xs text-[var(--color-text-muted)] mb-2">Purana loan default. System auto-flag.</p>
              <p className="text-xs text-green-700 dark:text-green-400 font-semibold">Fix → Old lender se no-dues certificate. Manager ko explain. Manual override possible.</p>
            </div>
            <div className="p-4 border-l-4 border-red-400 bg-red-50/30 dark:bg-red-900/10 rounded-r-lg">
              <p className="font-bold text-red-800 dark:text-red-300 text-sm mb-1">#5 Incomplete Tenant Docs</p>
              <p className="text-xs text-[var(--color-text-muted)] mb-2">Lease expired. Notarized nahi. Landowner unreachable.</p>
              <p className="text-xs text-green-700 dark:text-green-400 font-semibold">Fix → Fresh registered lease deed. Ya Gram Pradhan certificate as alternative.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>KCC Mil Gaya — Ab Kya?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Approval end nahi, beginning hai. 4% rate maintain rakhna hai toh discipline chahiye:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-1">Due Date Se Pehle Repay</p>
              <p className="text-xs text-[var(--color-text-muted)]">Ek din late = subvention gone. Calendar reminder set karo.</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-1">Sirf Kheti Ke Kharche</p>
              <p className="text-xs text-[var(--color-text-muted)]">Personal use = violation. Audit mein pakde gaye toh facility cancel.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">Annual Review Mat Miss Karo</p>
              <p className="text-xs text-[var(--color-text-muted)]">Har saal bank review karta hai. Miss kiya = limit freeze.</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <p className="font-black text-purple-800 dark:text-purple-300 text-sm mb-1">Receipts Save Rakho</p>
              <p className="text-xs text-[var(--color-text-muted)]">Purchase bills, payment proofs. Insurance claim mein chahiye.</p>
            </div>
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/kisan-credit-card-documents-required.webp"
            alt="Kisan credit card documents checklist — complete list for KCC application"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            KCC Documents Checklist — Sab Documents Ready Rakho
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Real Questions From Bank Counters
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Kisan Credit Card FAQ 2026 — Ground-Level Verified Answers" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Bottom Line</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Kharif June-July mein. Kisan Credit Card chahiye toh May-June mein apply karo. Last minute = planting miss.
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>Documents ready karo (checklist upar hai)</li>
            <li>Naam matching confirm karo teeno jagah</li>
            <li>Branch jaao subah 10-11 baje</li>
            <li>Receipt + reference number lo</li>
            <li>7-10 din baad follow-up</li>
          </ol>
        </div>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Portal — Beneficiary Verification"
          guide="Apna Status Check Karo"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="🏦"
          title="Apni EMI Calculate Karo"
          desc="KCC loan ki monthly payment aur total interest jaano — 4% effective rate par"
          primaryCta={{ href: '/calculator/kcc-loan-emi', label: '🏦 EMI Calculator →' }}
          secondaryCta={{ href: '/calculator', label: 'Sab Utilities Dekho' }}
        />

        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Aapke Liye Zaroori Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RELATED_CARDS.map((card) => (
              <Link
                key={card.slug}
                href={`/articles/${card.slug}`}
                className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg hover:border-green-500 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{card.emoji}</div>
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

        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/KisanRinKahaSeLe2026', l: '🏦 Kisan Loan Guide' },
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
          { href: '/calculator/kcc-loan-emi', l: 'EMI Calculator' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
