import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2025-12-19T13:12:12+05:30';
const MODIFIED = '2026-08-20T23:00:00+05:30';

const RELATED = [
  { slug: 'KisanRinKahaSeLe2026', title: 'Kisan Loan Kahan Se Le' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Apply' },
  { slug: 'custom-hiring-centre-chc-portal', title: 'CHC Machine Rental Guide' },
];

const FAQS_DATA = [
{
 q: 'Bina zameen ke tractor loan mil sakta hai?',
 a: 'Zyadatar banks ke liye zameen zaroori hai. Lekin kuch NBFCs income proof aur guarantor par loan de deti hain. Contract farming karte ho ya FPO member ho toh bhi options hain. NABARD FPO scheme mein group guarantee se individual collateral nahi chahiye.',
},
{
 q: 'Second-hand tractor ke liye loan milta hai?',
 a: 'Haan. Kuch banks aur finance companies used tractors finance karti hain — current market value ka 70-80% tak. Interest slightly zyada hota hai (1-2% extra). Tractor ki age 7 saal se kam honi chahiye zyadatar lenders ke liye.',
},
{
 q: 'EMI nahi bhar paye toh kya hoga?',
 a: 'Pehle bank se baat karo. Restructuring ya moratorium maango — crop loss par 6-12 mahine EMI pause hoti hai NABARD guidelines mein. Communication todna = NPA declaration = 90 din mein seizure notice. Hamesha written record rakho.',
},
{
 q: 'Kitni zameen chahiye tractor loan ke liye?',
 a: 'Bank dependent. SBI generally 2 hectare (5 bigha). Chhote banks/NBFCs mein 1 bigha bhi kaafi. Government subsidy schemes mein requirements kam. Zameen kam hai toh FPO group loan ya NBFC try karo.',
},
{
 q: 'Joint application possible hai?',
 a: 'Haan. Husband-wife ya family members co-applicant ho sakte hain. Combined income consider hoti hai = higher loan amount. Mahila co-applicant par 0.25% interest concession milta hai kuch banks mein.',
},
{
 q: 'NBFC se loan liya, ab bank mein shift kar sakta hun?',
 a: 'Haan. Refinancing possible hai. Existing loan pre-close karo (2-4% foreclosure charges), bank se naya loan lo lower rate par. Ek cultivator ne Mahindra Finance 12.5% se SBI 8.9% par shift karke ₹22,400 bachaye 3 saal mein. RC transfer process 15-20 din leta hai.',
},
{
 q: 'EMI nikalne ke liye tractor kiraye par dena samajhdari hai?',
 a: 'Haan, aur yahi cheez pehle 2-3 saal EMI sambhalti hai. Ek tractor peak season me lagbhag 120 ghante chalta hai to gross ₹1 lakh ke aas-paas ban jaata hai; diesel, driver salary aur maintenance kaat kar bhi EMI nikal aati hai. Par lean season ka hisaab pehle se karo — garmiyon me agricultural demand 60-70% gir jaati hai, isliye us waqt goods transport jaisa koi plan chahiye. Naye customers se 50% advance lo, gaon me udhaari phailne se cash flow ruk jaata hai.',
},
{
 q: 'Loan poora chuka diya — RC se bank ka naam hatana zaroori hai?',
 a: 'Bilkul zaroori hai. Loan chalu hone par RC par lender ki hypothecation entry chadh jaati hai; wo hatane tak kagaz par tractor poora aapka nahi hota — bechne, exchange karne ya nayi file lagane me wahi entry atakti hai. Aakhri EMI ke baad bank se NOC aur loan closure statement lo, phir RTO me hypothecation hatane ki application do. Do-teen hafte ka kaam hai, par saalon baad karne se purani branch dhoondhne me zyada pareshani hoti hai.',
},
{
 q: 'Electric tractor par loan milta hai?',
 a: 'Haan. Mahindra, Sonalika, Swaraj ne electric models launch kiye hain. Banks 2026 se flat 7.5% interest offer kar rahe hain electric tractors par. Running cost diesel se 70% kam. Battery warranty 5 saal = loan tenure bhi 5 saal tak.',
},
];

export default function KisanTractorLoan2026({ article }: { article: ArticleMeta }) {
return (
 <>
   <div className="bg-[var(--color-primary)] py-8">
     <div className="container-site max-w-3xl">
       <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
         <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
         <span>/</span>
         <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
         <span>/</span>
         <span className="text-white font-bold">Tractor Finance Guide</span>
       </nav>
       <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Equipment Finance</span>
       <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
         Tractor Loan Bina Down Payment 2026: Hidden Costs, Subsidy Workflow, Aur Woh Baatein Jo Dealer Nahi Batata
       </h1>
       <div className="flex flex-wrap gap-3 text-xs text-green-200">
         <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
         <span>{fmtDate(PUBLISHED)}</span>
         <span>Updated: {fmtDate(MODIFIED)}</span>
         <span>17 min read</span>
       </div>
     </div>
   </div>

   <div className="container-site max-w-3xl py-8">

     <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
       <Image
         src={article.ogImage || '/images/articles/kisan-tractor-loan-2026/hero-banner.webp'}
         alt="Tractor loan financing India 2026 — subsidized rates, zero down payment options, government subsidy workflow"
         width={1200}
         height={630}
         className="w-full object-cover"
         style={{ maxHeight: '420px', objectPosition: 'center' }}
         priority
         sizes="(max-width: 768px) 100vw, 768px"
       />
       <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
         Tractor Finance 2026 — Bank, NBFC, Subsidy, Hidden Costs Sab Ek Jagah
       </p>
     </div>

     <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 dark:border-amber-700 border-l-[6px] rounded-xl">
       <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">Dealer Showroom Mein Jo Hua</h2>
       <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
         MP ke Sehore district mein. Ek cultivator tractor lene gaya. Dealer ne kaha — ₹6.5 lakh on-road, ₹1.3 lakh down payment.
       </p>
       <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
         Uske paas ₹1.3 lakh nahi the. Wapas aane hi wala tha ki maine usse bataya — SMAM subsidy 35% milti hai MP mein, aur Mahindra Finance 95% financing de raha hai us month. Dono combine karke down payment ₹32,000 reh gayi. <strong className="text-amber-900 dark:text-amber-100">Yeh information dealer ne nahi di thi.</strong>
       </p>
       <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
         Isliye yeh guide likh raha hun. Sirf loan process nahi — hidden costs, subsidy workflow, refinancing tricks, crop failure protocol. Woh sab jo showroom mein nahi bataya jaata.
       </p>
     </div>

     <section className="mb-8">
       <SH>Bina Down Payment — Sach Kya Hai?</SH>
       <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
         Seedha jawab. Haan, kuch cases mein possible hai.
       </p>
       <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
         Lekin "zero down payment" marketing term hai. Reality: zyadatar lenders 85-100% finance karte hain on-road price ka. Matlab 0-15% aapki jeb se. KCC holder + good CIBIL + subsidy scheme = minimum out-of-pocket.
       </p>

       <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
         <table className="w-full text-sm border-collapse">
           <thead>
             <tr className="bg-[var(--color-primary)] text-white">
               <th className="p-3 text-left">Lender</th>
               <th className="p-3 text-left">Max Finance</th>
               <th className="p-3 text-left">Min Down</th>
               <th className="p-3 text-left">Best For</th>
             </tr>
           </thead>
           <tbody>
             {[
               ['SBI / PNB / BOB', '85-90%', '10-15%', 'KCC holders'],
               ['HDFC / ICICI / Axis', '80-85%', '15-20%', 'Good CIBIL (700+)'],
               ['Mahindra Finance', '90-100%', '0-10%', 'Brand offers'],
               ['John Deere Financial', '90-95%', '5-10%', 'JD buyers'],
               ['NBFC (Shriram/Muthoot)', '85-90%', '10-15%', 'Low docs'],
               ['Govt Subsidy (SMAM)', 'Up to 100%', '0%', 'SC/ST, small farmers'],
             ].map(([lender, max, down, best], i) => (
               <tr key={lender} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                 <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{lender}</td>
                 <td className="p-3 border-b border-[var(--color-border)] text-green-700 dark:text-green-400 font-bold">{max}</td>
                 <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{down}</td>
                 <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{best}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>

       <IB>
         <strong>Real Example:</strong> ₹5.5 lakh tractor. KCC holder + Mahindra festive offer = 95% finance. Down payment sirf ₹27,500. Yeh mushkil nahi hai agar planning sahi ho.
       </IB>
     </section>

     <section className="mb-8">
       <SH>Loan Kaise Kaam Karta Hai — Numbers Samjho</SH>
       <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
         Tractor loan secured loan hai. Tractor khud collateral. RC hypothecation ke saath register hoti hai lender ke naam par. Jab tak loan poora nahi bhara, technically tractor lender ki property.
       </p>

       <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
         <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
           <p className="font-black text-green-800 dark:text-green-300 text-xl mb-1">₹3-20L</p>
           <p className="text-xs text-[var(--color-text-muted)]">Loan Range</p>
         </div>
         <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-center">
           <p className="font-black text-blue-800 dark:text-blue-300 text-xl mb-1">3-7 Yr</p>
           <p className="text-xs text-[var(--color-text-muted)]">Tenure</p>
         </div>
         <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-center">
           <p className="font-black text-amber-800 dark:text-amber-300 text-xl mb-1">9-14%</p>
           <p className="text-xs text-[var(--color-text-muted)]">Interest p.a.</p>
         </div>
       </div>

       <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">2026 Mein Rate Ka Scene — Lender Type Se Samjho</h3>
       <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
         "Kitna interest lagega" ka jawab is baat pe hai ki aap kis type ke lender ke paas ja rahe ho.
         2026 ke published rate bands kuch aise chal rahe hain:
       </p>
       <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
         <table className="w-full text-sm border-collapse">
           <thead>
             <tr className="bg-[var(--color-primary)] text-white">
               <th className="p-3 text-left">Lender Type</th>
               <th className="p-3 text-left">Rate Band (p.a.)</th>
               <th className="p-3 text-left">Kab Sahi Hai</th>
             </tr>
           </thead>
           <tbody>
             {[
               ['Cooperative banks', '9-10.5%', 'Sabse sasta, par process dheema'],
               ['Public sector banks (SBI/PNB/BOB)', '9.5-11.5%', 'KCC holder + achha CIBIL'],
               ['Private banks', '10-12.5%', 'Jaldi chahiye + CIBIL 700+'],
               ['NBFC (Mahindra/TATA Capital/Shriram)', '11-14%', 'Kam documents, jaldi approval'],
             ].map(([type, band, when], i) => (
               <tr key={type} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                 <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{type}</td>
                 <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{band}</td>
                 <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{when}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
       <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
         Do baatein aur. Pehli — tractor loan <strong>priority sector lending</strong> me aata hai, isliye banks
         ise normal consumer loan se sasta dete hain; yeh line bank manager ke saamne bolo, kaam aati hai.
         Doosri — 2026 me RBI ke rate hike ke aasaar ban rahe hain (mehngai badhi hai), matlab aage rates
         upar ja sakte hain. Agar loan lena tay hai, toh rate lock karne me der karna is saal mehnga pad sakta hai.
       </p>

       <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">EMI Reality Check</h3>
       <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
         <table className="w-full text-sm border-collapse">
           <thead>
             <tr className="bg-[var(--color-primary)] text-white">
               <th className="p-3 text-left">Amount</th>
               <th className="p-3 text-left">Rate</th>
               <th className="p-3 text-right">3 Yr EMI</th>
               <th className="p-3 text-right">5 Yr EMI</th>
               <th className="p-3 text-right">7 Yr EMI</th>
             </tr>
           </thead>
           <tbody>
             {[
               ['₹3,00,000', '9%', '₹9,540', '₹6,228', '₹4,797'],
               ['₹5,00,000', '9.5%', '₹16,040', '₹10,516', '₹8,134'],
               ['₹8,00,000', '10%', '₹25,820', '₹17,003', '₹13,208'],
               ['₹12,00,000', '11%', '₹39,280', '₹26,100', '₹20,436'],
             ].map(([amt, rate, e3, e5, e7], i) => (
               <tr key={amt} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                 <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{amt}</td>
                 <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{rate}</td>
                 <td className="p-3 border-b border-[var(--color-border)] text-right text-[var(--color-text-muted)]">{e3}</td>
                 <td className="p-3 border-b border-[var(--color-border)] text-right text-[var(--color-text-muted)]">{e5}</td>
                 <td className="p-3 border-b border-[var(--color-border)] text-right text-[var(--color-text-muted)]">{e7}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
       <p className="text-xs text-[var(--color-text-muted)]">* Approximate. Actual EMI processing fees aur bank rate par depend karti hai.</p>
     </section>

     <section className="mb-8">
       <SH>Apply Kaise Karein — Ground Process</SH>
       <StepList>
         <SI n={1}>Tractor choose karo — HP, brand, authorized dealer se quotation lo. On-road price confirm karo</SI>
         <SI n={2}>Bank branch jaao ya online apply karo — SBI/PNB/BOB mein agricultural loan section dhundo</SI>
         <SI n={3}>Application form bharo — personal, land, income, tractor details</SI>
         <SI n={4}>Documents submit karo — complete set, koi missing nahi</SI>
         <SI n={5}>Field verification — bank officer zameen check karega, khasra/khatauni verify hoga</SI>
         <SI n={6}>Sanction letter — 7-15 din mein. Amount, rate, tenure sab likha hoga</SI>
         <SI n={7}>Dealer ko direct payment — bank seedha dealer account mein bhejta hai. RC process hoti hai</SI>
         <SI n={8}>EMI shuru — ek mahine baad auto-debit. Time par bharo, CIBIL maintain rahega</SI>
       </StepList>
       <WB>
         <strong>Timing Tip:</strong> Rabi/Kharif season se 1-2 mahine pehle apply karo. Peak season mein banks overloaded hote hain, processing slow. Off-season mein fast approval.
       </WB>
     </section>

     <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
       <Image
         src="/images/articles/kisan-tractor-loan-2026/bank-loan-process.webp"
         alt="Bank tractor loan application process flowchart — step by step guide from application to approval"
         width={1200}
         height={630}
         className="w-full object-cover"
         loading="lazy"
         sizes="(max-width: 768px) 100vw, 768px"
       />
       <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
         Bank Loan Process — Application Se Lekar Disbursement Tak
       </p>
     </div>

     <section className="mb-8">
       <SH>Hidden Costs — Jo Dealer Aur Bank Dono Chupate Hain</SH>
       <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
         Loan amount sirf shuruwat hai. Asli cost RC registration, insurance, aur prepayment mein chhipi hoti hai. 80% cultivators yeh ignore karte hain.
       </p>
       <div className="space-y-3 mb-4">
         <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
           <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">Processing + Stamp Duty</p>
           <p className="text-xs text-[var(--color-text-muted)]">0.5-1% of loan + ₹500-2,000 flat. SBI/PNB flat charge, private banks percentage.</p>
         </div>
         <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
           <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">RTO Hypothecation</p>
           <p className="text-xs text-[var(--color-text-muted)]">₹2,000-5,000. RC par lender stamp. Bina iske disbursement nahi.</p>
         </div>
         <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
           <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">Mandatory Insurance Bundle</p>
           <p className="text-xs text-[var(--color-text-muted)]">₹15,000-25,000/year. Comprehensive + borrower life insurance compulsory.</p>
         </div>
         <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
           <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">Pre-Closure Penalty</p>
           <p className="text-xs text-[var(--color-text-muted)]">2-4% if paid within 12 months. Early repayment par bhi cost.</p>
         </div>
         <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
           <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">EMI Bounce Fee</p>
           <p className="text-xs text-[var(--color-text-muted)]">₹500-1,000 per miss. 2 misses = CIBIL drop. 3rd = notice.</p>
         </div>
       </div>
       <DB>
         <strong>Critical:</strong> Dealer se "on-road cost breakup" maango. Registration, insurance, hypothecation alag se likhwao. Inko loan amount mein include mat karo — warna interest par interest dena padega.
       </DB>
     </section>

     <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
       <Image
         src="/images/articles/kisan-tractor-loan-2026/tractor-approved.webp"
         alt="Tractor loan approval success — farmer with new tractor after bank approval"
         width={1200}
         height={630}
         className="w-full object-cover"
         loading="lazy"
         sizes="(max-width: 768px) 100vw, 768px"
       />
       <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
         Loan Approval Success — Tractor Delivery Day
       </p>
     </div>

     <section className="mb-8">
       <SH>4 Real Scenarios — Jo Field Mein Hote Hain</SH>

       <div className="space-y-4">
         <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl">
           <h3 className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">Existing Loan + Top-Up for Higher HP</h3>
           <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
             Pehle se tractor hai, custom hiring ke liye higher HP chahiye. Land already mortgaged = bank initially 60% finance. KCC top-up facility se 30% extra limit. Hypothecation RTO transfer 12 din. Custom hiring se ₹35,000-45,000/month extra income possible.
           </p>
         </div>

         <div className="p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-xl">
           <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-2">First-Time Woman Farmer</h3>
           <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
             Zameen pita/pati ke naam. Bank reject initially — no legal heir certificate. Panchayat joint liability affidavit + SC category SMAM subsidy = 50% down payment adjust. Mahila kisan = additional 0.25% interest concession. 45 din subsidy approval.
           </p>
         </div>

         <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl">
           <h3 className="font-black text-amber-800 dark:text-amber-300 text-sm mb-2">NBFC Emergency → Bank Refinance</h3>
           <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
             Rabi urgent. Mahindra Finance 12.5% par 95% loan (zero down). 8 mahine baad NABARD portal check — SBI 8.9%. Pre-close (2% charges) + new bank loan. Saving: ₹22,400 over 3 years. Emergency = NBFC. Long-term = bank.
           </p>
         </div>

         <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded-r-xl">
           <h3 className="font-black text-purple-800 dark:text-purple-300 text-sm mb-2">FPO Group Purchase</h3>
           <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
             10-15 farmers ne FPO register kiya. NABARD FPO scheme = 3 tractors, group guarantee, no individual collateral. Flat 8.2%. Challenge: seasonal EMI alignment. Solution: Oct-Nov double EMI, baaki months half. Model replicate ho raha hai kai districts mein.
           </p>
         </div>
       </div>
     </section>

     <section className="mb-8">
       <SH>State Subsidy — Portal Se Bank Tak Ka Exact Workflow</SH>
       <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
         Subsidy = loan amount kam. Par process technical hai. Yeh exact 2026 workflow hai:
       </p>
       <StepList>
         <SI n={1}><strong>SMAM Portal Registration:</strong> smam.gov.in par farmer ID. Aadhaar + land link. 7-14 din verification</SI>
         <SI n={2}><strong>Quotation Upload:</strong> Authorized dealer se proforma invoice. Portal par upload. Dealer empaneled status check</SI>
         <SI n={3}><strong>Bank NOC:</strong> Branch manager se "No Objection Certificate" — loan pending confirmation</SI>
         <SI n={4}><strong>DAC Meeting:</strong> District Approval Committee monthly meeting. Priority: SC/ST → Women → Marginal → General</SI>
         <SI n={5}><strong>DBT Transfer:</strong> Approval ke 30-45 din baad subsidy seedha account mein. Bank principal auto-adjust</SI>
       </StepList>

       <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
         <table className="w-full text-sm border-collapse">
           <thead>
             <tr className="bg-[var(--color-primary)] text-white">
               <th className="p-3 text-left">State</th>
               <th className="p-3 text-left">Subsidy %</th>
               <th className="p-3 text-left">Max Limit</th>
               <th className="p-3 text-left">Time</th>
             </tr>
           </thead>
           <tbody>
             {[
               ['Punjab', '40-50%', '₹2.5L', '60 days'],
               ['Haryana', '25-50%', '₹2L', '45 days'],
               ['UP', '30-40%', '₹1.8L', '75 days'],
               ['MP', '35%', '₹2L', '50 days'],
               ['Rajasthan', '25-30%', '₹1.5L', '90 days'],
               ['Maharashtra', '20-35%', '₹1.2L', '65 days'],
             ].map(([state, pct, limit, time], i) => (
               <tr key={state} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                 <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{state}</td>
                 <td className="p-3 border-b border-[var(--color-border)] text-green-700 dark:text-green-400 font-bold">{pct}</td>
                 <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{limit}</td>
                 <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{time}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     </section>

     <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
       <Image
         src="/images/articles/kisan-tractor-loan-2026/tractor-finance-guide.webp"
         alt="Complete tractor finance guide comparison — banks vs NBFC vs government subsidy options"
         width={1200}
         height={630}
         className="w-full object-cover"
         loading="lazy"
         sizes="(max-width: 768px) 100vw, 768px"
       />
       <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
         Finance Options Comparison — Bank, NBFC, Subsidy
       </p>
     </div>

     <section className="mb-8">
       <SH>Fasal Kharab Ho Gayi — EMI Kaise Manage Karein</SH>
       <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
         Mausam, keede, baarish — koi bharosa nahi. Crop fail ≠ loan default. Protocol follow karo:
       </p>
       <div className="space-y-3 mb-4">
         <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
           <span className="text-red-600 dark:text-red-400 font-black text-lg shrink-0">48h</span>
           <div>
             <p className="font-bold text-[var(--color-text)] text-sm">Bank Inform Karo Immediately</p>
             <p className="text-xs text-[var(--color-text-muted)] mt-1">Crop damage certificate tehsildar/KVK se lo. Written application do. Phone call ka record rakho.</p>
           </div>
         </div>
         <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
           <span className="text-blue-600 dark:text-blue-400 font-black text-lg shrink-0">6-12m</span>
           <div>
             <p className="font-bold text-[var(--color-text)] text-sm">Moratorium Request Karo</p>
             <p className="text-xs text-[var(--color-text-muted)] mt-1">NABARD guidelines: crop loss par EMI pause. Interest accrue hoga, penalty nahi. Written approval lo.</p>
           </div>
         </div>
         <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
           <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">PMFBY</span>
           <div>
             <p className="font-bold text-[var(--color-text)] text-sm">Insurance Claim Link Karo</p>
             <p className="text-xs text-[var(--color-text-muted)] mt-1">Claim amount directly loan account adjust. Form 6 (Crop Loss) submit karo through bank.</p>
           </div>
         </div>
         <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
           <span className="text-amber-600 dark:text-amber-400 font-black text-lg shrink-0">Rent</span>
           <div>
             <p className="font-bold text-[var(--color-text)] text-sm">Custom Hiring Se Income</p>
             <p className="text-xs text-[var(--color-text-muted)] mt-1">Tractor padosi kisanon ko rent par do. ₹2,500-4,000/day. 10 din = 1 month EMI cover.</p>
           </div>
         </div>
       </div>
       <DB>
         <strong>Savdhan:</strong> EMI miss karke phone uthana band mat karo. Communication break = NPA declaration. 90 din mein seizure notice. Hamesha written record maintain karo.
       </DB>
     </section>

     <section className="mb-8">
       <SH>Loan Reject Kyun Hota Hai — 7 Reasons + Fix</SH>
       <div className="space-y-3">
         {[
           { err: 'CIBIL Below 600', fix: '6 mahine pehle existing loans time par bharo. Credit card bills clear. Free check: cibil.com ya Paytm.' },
           { err: 'Incomplete Documents', fix: 'Checklist se sab ready rakho. 2 photocopies + digital scan. Missing document = instant delay.' },
           { err: 'Land Dispute / Undocumented', fix: 'Naam clear hona chahiye. Dispute wali zameen = rejection. Revenue court se pehle settle karo.' },
           { err: 'Too Many Existing Loans', fix: 'FOIR (Fixed Obligation to Income Ratio) high. Kuch loans close karo pehle. KCC top-up better option.' },
           { err: 'Name Mismatch', fix: 'Aadhaar = bank = land records = form. Same spelling. Chhoti difference = bada delay.' },
           { err: 'Land Too Small (<2 bigha)', fix: 'NBFC try karo. Govt subsidy scheme mein requirements kam. FPO group loan option.' },
           { err: 'Previous Default', fix: 'Settlement certificate lo pehle. One-time settlement possible. Written proof bank ko do.' },
         ].map(({ err, fix }) => (
           <div key={err} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden">
             <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5">
               <p className="font-black text-red-800 dark:text-red-300 text-sm">{err}</p>
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

     <section className="mb-8">
       <SH>EMI Kahan Se Aayegi — Tractor Ko Kamane Par Lagao</SH>
       <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
         Loan mil gaya, tractor aa gaya. Ab asli sawaal shuru hota hai — EMI kahan se aayegi. Sirf apne khet se nahi.
       </p>
       <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
         Desh me 85% se zyada kisaanon ke paas 2 hectare se kam zameen hai — unke liye apna tractor lena mumkin nahi hai,
         par kiraye par lena zaroori hai. Yahi aapka customer base hai, aur wo aapke gaon me pehle se maujood hai.
         Kiraya ghante ya acre ke hisaab se chalta hai, aur implement badalne se rate badalta hai — rotavator wala kaam
         alag rate par jaata hai, laser leveler wala alag.
       </p>
       <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
         <table className="w-full text-sm border-collapse">
           <thead>
             <tr className="bg-[var(--color-primary)] text-white">
               <th className="p-3 text-left">Peak season ka mahina</th>
               <th className="p-3 text-left">Kitna</th>
             </tr>
           </thead>
           <tbody>
             {[
               ['Tractor — lagbhag 120 ghante ka kaam', '₹1,08,000 gross'],
               ['Diesel + lubricants', '₹50,000–70,000'],
               ['Driver salary', '₹25,000–35,000'],
               ['Repair + maintenance', '₹10,000–15,000'],
             ].map(([k, v], i) => (
               <tr key={k} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                 <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text)]">{k}</td>
                 <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)] font-medium">{v}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
       <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
         Ginti saaf hai — peak season me kharche kaat kar bhi EMI nikal aati hai, aur upar kuch bachta hai. Par yahi
         table lean season me ulta ho jaata hai: garmiyon me agricultural demand 60–70% gir jaati hai, kaam nahi rehta,
         aur EMI apni tareekh par aati hai. Isliye do cheezein pehle se socho — off-season me tractor ka doosra kaam
         (goods transport sabse aam hai), aur EMI ka size aisa ki lean mahine me bhi bhar sake.
       </p>
       <WB>
         <strong>Udhaari ka chakkar sabse bada risk hai.</strong> Gaon me &ldquo;fasal bikte hi de dunga&rdquo; wali baat
         se cash flow ruk jaata hai, aur diesel ka paisa aapki jeb se lagta rehta hai. Naye customers se hamesha 50%
         advance lo. Aur peak season me belts, blades aur nuts-bolts ka stock rakho — ek din ka breakdown bhi aapki
         booking doosre ke paas bhej deta hai.
       </WB>
       <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
         Ye kaam thoda systematic karna ho to iska poora structure banaya jaa sakta hai — SMAM ke tahat implements par
         40–50% subsidy milti hai, aur Custom Hiring Centre (group ya FPO) ke roop me wahi percentage ₹10 lakh tak ki
         limit par jaata hai, jabki individual kisan ke case me ₹5 lakh par rukta hai. Poora budget, rental rate aur DPR
         wala hisaab{' '}
         <Link href="/articles/custom-hiring-centre-chc-portal" className="underline font-bold">CHC guide</Link> me hai.
       </p>
       <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
         Aur mahine ke chalte-firte kharche — diesel, driver, spare parts — ke liye term loan mat todo. Uske liye KCC
         hai: jitna nikala utne din ka byaj, aur time par chukane par effective rate 4% ke aas-paas.{' '}
         <Link href="/articles/KisanRinKahaSeLe2026" className="underline">Rin kahan se le</Link> wale page par dono ka
         farak table me hai.
       </p>
     </section>

     <section className="mb-8">
       <SH>Aakhri EMI Ke Baad Ka Kaam — RC Se Bank Ka Naam Hatao</SH>
       <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
         Loan khatam hone par log sabse zyada yahi galti karte hain — mithai baant kar kagaz bhool jaate hain.
       </p>
       <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
         Loan chalu hote waqt aapki RC par lender ki <strong>hypothecation</strong> entry chadhti hai — isi ke liye
         shuru me ₹2,000–5,000 lagte hain, aur iske bina disbursement hi nahi hota. Matlab kagaz par tractor par bank ka
         bhi haq darj hai. Aakhri EMI ke baad ye entry khud se nahi hatti; hatane tak tractor bechna, exchange karna, ya
         usi tractor par nayi file lagana — sab me dikkat aati hai.
       </p>
       <StepList>
         <SI n={1}>Aakhri EMI ke baad bank se <strong>NOC</strong> aur loan closure statement lo — zubani &ldquo;ho gaya&rdquo; kaafi nahi hai</SI>
         <SI n={2}>Original documents (jo bank ke paas jama the) wapas lo aur list se milaao</SI>
         <SI n={3}>RTO me hypothecation hatane ki application do — NOC, RC aur insurance copy ke saath</SI>
         <SI n={4}>Nayi RC aane par check karo ki lender ka naam hat gaya hai; usi ke baad insurance me bhi update karwao</SI>
       </StepList>
       <DB>
         <strong>Der karne ka nuksan asli hai.</strong> Kuch saal baad wahi branch manager nahi rehta, file archive me
         chali jaati hai, aur NOC nikalwane me hafte lag jaate hain — jabki loan closure ke waqt wahi kaam ek visit ka
         hota hai. Aur ek baat: pre-closure karne ja rahe ho to pehle penalty pooch lo — 12 mahine ke andar poora chukane
         par 2–4% tak lag sakti hai.
       </DB>
     </section>

     <section className="mb-8">
       <SH>2026-27 Trends — Tayyar Raho</SH>
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
         <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
           <p className="font-black text-green-800 dark:text-green-300 text-sm mb-1">Electric Tractors</p>
           <p className="text-xs text-[var(--color-text-muted)]">Mahindra, Sonalika, Swaraj launched. Running cost 70% kam. Banks flat 7.5% interest. Battery warranty 5 saal.</p>
         </div>
         <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
           <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-1">AI Agri Credit Scoring</p>
           <p className="text-xs text-[var(--color-text-muted)]">Satellite crop health + soil moisture data = auto credit score. Digital farm data generate karo = higher limit without manual verification.</p>
         </div>
       </div>
       <IB>
         <strong>2027 Prediction:</strong> RBI "Pay-As-You-Farm" model launch karne wala hai. EMI sirf harvest season mein deduct. Baaki months zero outflow. Sensor-based usage tracking se interest dynamically adjust.
       </IB>
     </section>

     <section className="mb-8">
       <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
         Tractor Loan — Aapke Asli Sawal
       </h2>
       <FAQBlock faqs={FAQS_DATA} caption="Tractor Loan FAQ 2026 — Ground-Level Verified Answers" />
     </section>

     <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
       <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Ex-Showroom Nahi, On-Road Breakup Par Mol-Bhav Karo</h3>
       <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
         Down payment 10-15% dikhta hai, par woh hisaab ex-showroom par hota hai — insurance, registration,
         accessories aur processing fee jud kar aapki jeb se jaane wali rakam upar chali jaati hai. Isliye
         dealer se likhit on-road breakup lo, phir usi number par loan aur subsidy set karo:
       </p>
       <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
         <li>CIBIL check karo (700+ target)</li>
         <li>KCC banwao agar nahi hai</li>
         <li>State subsidy portal par register karo</li>
         <li>Dealer se on-road breakup likhwao</li>
         <li>Bank + subsidy combine karo = minimum down payment</li>
       </ol>
     </div>

     <GovLink
       href="https://smam.gov.in"
       label="SMAM Portal — Tractor Subsidy Application"
       guide="Subsidy Check Karo"
       guideHref="/articles/KisanRinKahaSeLe2026"
       portalName="smam.gov.in"
     />

     <CalcBanner
       icon=""
       title="Apni Tractor EMI Calculate Karo"
       desc="Loan amount, interest rate, tenure daalo — monthly payment ek click mein jaano"
       primaryCta={{ href: '/calculator/kcc-loan-emi', label: 'EMI Calculator →' }}
       secondaryCta={{ href: '/calculator', label: 'Sab Utilities' }}
     />

     <RelatedArticles articles={RELATED} />
     <AuthorBox modified={MODIFIED} bioKey="KisanTractorLoan2026" />
     <BottomNav extraLinks={[
       { href: '/articles/KisanCreditCardOnlineApply2026', l: 'KCC Guide' },
       { href: '/articles/KisanRinKahaSeLe2026', l: 'Credit Sources' },
       { href: '/calculator/kcc-loan-emi', l: 'EMI Calculator' },
     ]} />
     <Disclaimer k="KisanTractorLoan2026" />
   </div>
 </>
);
}
