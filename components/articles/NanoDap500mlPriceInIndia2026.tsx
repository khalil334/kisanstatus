'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-06-21T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Apply Guide', emoji: '💳' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary Roster 2026', emoji: '📋' },
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status', emoji: '📅' },
  { slug: 'soil-health-card-complete-guide-2026', title: 'Soil Health Card', emoji: '🌱' },
  { slug: 'KisanRinKahaSeLe2026', title: 'Kisan Loan Guide', emoji: '🏦' },
  { slug: 'AgriStackKyaHai2026', title: 'Digital Kisan ID', emoji: '🆔' },
];

const FAQS_DATA = [
  { q: '500ml bottle ki price India mein 2026 kya hai?', a: 'Dekho bhai, lagbhag ₹250-350. Subsidy ke saath ₹200-280 tak mil sakta hai. Exact price authorized dealer ya IFFCO website se confirm karein — state aur season ke hisaab se vary hota hai.' },
  { q: 'IFFCO liquid DAP aaj ka rate kya hai?', a: 'Authorized dealers par ₹280-320 ke beech hai bhai. Subsidized rate kuch states mein ₹220-270. Latest price IFFCO official website ya nazdeeki Krishi Kendra se check karein.' },
  { q: '1 acre ke liye foliar dosage kitna hai?', a: 'Label ke anusaar 500ml per acre bhai, 100-150 litre paani mein mila kar 2-3 baar spray. Exact dosage crop type aur KVK recommendations ke hisaab se alag ho sakta hai.' },
  { q: 'Traditional DAP se kya farak hai?', a: 'Liquid DAP foliar spray hai bhai — nano particles seedha pattiyon se absorb hote hain. Traditional DAP granular soil application hai. Kai experts dono ka combination recommend karte hain — substitute nahi, supplement hai.' },
  { q: 'Urea ya pesticide ke saath mix kar sakte hain?', a: 'Compatibility test zaroori hai bhai. Chhote area par pehle test karo. Kisi bhi mix ke liye KVK ya IFFCO guidelines follow karna safest hai. Galat mix se effectiveness kam hoti hai ya crop damage ho sakta hai.' },
  { q: 'Result kitne din mein dikhta hai?', a: 'Spray ke 7-10 din mein initial farak dikhna shuru ho sakta hai bhai. 2-3 sprays ke baad clearer result. Soil condition, mausam, crop type, aur sahi usage par depend karta hai — fixed guarantee nahi.' },
  { q: 'Online kahan se kharidein?', a: 'IFFCO official website sabse trustworthy hai bhai. Amazon/Flipkart par official sellers check karein. Local Krishi Kendra mein subsidy milne ki sambhavna. Hamesha original packaging QR code scan karke verify karein.' },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Apply Liquid DAP Correctly – Step by Step',
  description: 'Step-by-step guide to mixing and spraying IFFCO liquid DAP 500ml on crops for best results.',
  totalTime: 'PT20M',
  step: [
    { '@type': 'HowToStep', name: 'Paani mein mix karein', text: '500ml liquid DAP ko 100-150 litre paani mein mix karein.' },
    { '@type': 'HowToStep', name: 'Achhe se hilayein', text: 'Bottle ko achhe se hilayein taaki nano particles evenly mix ho jayein.' },
    { '@type': 'HowToStep', name: 'Sahi time par spray karein', text: 'Morning ya evening mein spray karein — dopahar mein avoid karein.' },
    { '@type': 'HowToStep', name: 'Dono taraf spray karein', text: 'Pattiyon ke upri aur neeche dono taraf spray karein.' },
    { '@type': 'HowToStep', name: 'Mausam check karein', text: 'Spray ke 4-6 ghante baad baarish nahi honi chahiye.' },
  ],
};

export default function NanoDap500mlPriceInIndia2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* Header */}
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Modern Kheti Inputs</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Fertilizer Price Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            IFFCO Liquid DAP 500ml Price 2026: Rate, Dosage Chart, Aur Woh Baatein Jo Dealer Nahi Batata
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 13 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* IMAGE 1: Hero — PATH UNCHANGED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/nano-dap-500ml-bottle-hero.webp'}
            alt="IFFCO liquid DAP 500ml bottle — nano fertilizer for Indian kisans 2026"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            IFFCO Liquid DAP 500ml — Approximate Price Range June 2026
          </p>
        </div>

        {/* Quick Answer */}
        <div className="my-6 p-5 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-xl">
          <h2 className="text-base font-black text-green-800 dark:text-green-300 mb-2">Quick Answer</h2>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            <strong>Price:</strong> ₹250-350 (subsidy ke saath ₹200-280). <strong>Dosage:</strong> 500ml per acre, 100-150L paani mein, 2-3 sprays. <strong>Note:</strong> Exact price aur dosage authorized dealer ya KVK se confirm karein bhai — yeh estimated reference hai.
          </p>
        </div>

        {/* Section 1: What Is It */}
        <section className="mb-8">
          <SH>Yeh Product Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Dekho bhai, IFFCO ka advanced liquid fertilizer hai. Nano-scale particles jo foliar spray se seedha pattiyon se absorb hote hain. Traditional DAP mitti mein jaata hai, yeh hawa se patti tak.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Important: Yeh traditional DAP ka <strong>substitute nahi, supplement hai.</strong> IFFCO aur agriculture experts dono ka combination recommend karte hain. Results har khet mein alag hote hain — soil, paani, fasal type, aur sahi usage par depend karta hai.
          </p>
          <IB>
            <strong>Honest Disclaimer:</strong> Koi fixed yield guarantee nahi hai bhai. Yeh guide estimated prices aur general dosage batati hai. Apne local KVK ki advice hamesha priority rakhein.
          </IB>
        </section>

        {/* Section 2: Price 2026 */}
        <section className="mb-8">
          <SH>500ml Bottle Price — 2026 Estimated Range</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Source</th>
                  <th className="p-3 text-left">Price Range</th>
                  <th className="p-3 text-left">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['IFFCO (MRP)', '₹280-350', '500ml'],
                  ['IFFCO (Subsidized)', '₹200-280', '500ml'],
                  ['1 Litre Bottle', '₹500-650', '1L'],
                  ['Traditional DAP (Granular)', '₹1,350-1,650', '50kg bag'],
                ].map(([source, price, qty], i) => (
                  <tr key={source} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{source}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-green-700 dark:text-green-400 font-bold">{price}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <WB>
            <strong>Note:</strong> Yeh June 2026 ki estimated values hain bhai. Actual price state, dealer, subsidy policy, aur season ke hisaab se badalta rehta hai.
          </WB>
        </section>

        {/* IMAGE 2: Price Banner — PATH UNCHANGED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/nano-dap-price-banner-2026.webp"
            alt="Nano DAP 500ml price banner 2026 — IFFCO liquid fertilizer rate comparison"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Nano DAP Price Banner 2026 — MRP vs Subsidized Rate
          </p>
        </div>

        {/* Section 3: State-wise Pricing */}
        <section className="mb-8">
          <SH>State-wise Price Reference</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Haryana, Punjab, UP, Maharashtra, Gujarat mein demand zyada hai bhai = better availability. Eastern states mein supply chain slower hai.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">State</th>
                  <th className="p-3 text-left">MRP Range</th>
                  <th className="p-3 text-left">Subsidized</th>
                  <th className="p-3 text-left">Availability</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['UP', '₹260-330', '₹210-260', 'High'],
                  ['Punjab', '₹270-340', '₹220-270', 'High'],
                  ['Haryana', '₹270-340', '₹220-270', 'High'],
                  ['Maharashtra', '₹280-350', '₹230-280', 'High'],
                  ['Gujarat', '₹270-340', '₹220-270', 'High'],
                  ['Rajasthan', '₹280-350', '₹230-280', 'Medium'],
                  ['MP', '₹260-330', '₹210-260', 'Medium'],
                  ['Bihar', '₹260-330', '₹210-260', 'Medium'],
                  ['West Bengal', '₹280-350', '₹230-280', 'Medium'],
                  ['Karnataka', '₹290-360', '₹240-290', 'Medium'],
                  ['TN / Telangana / AP', '₹280-360', '₹230-290', 'Medium'],
                  ['Odisha / Assam', '₹270-360', '₹220-290', 'Low'],
                ].map(([state, mrp, sub, avail], i) => (
                  <tr key={state} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{state}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{mrp}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-green-700 dark:text-green-400">{sub}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{avail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* IMAGE 3: Price India 2026 — PATH UNCHANGED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/nano-dap-500ml-price-india-2026.webp"
            alt="Nano DAP 500ml price India 2026 — state-wise rate comparison for kisans"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            State-wise Price Comparison — June 2026 Reference
          </p>
        </div>

        {/* Section 4: Price Factors */}
        <section className="mb-8">
          <SH>Price Kyun Badalti Hai?</SH>
          <div className="space-y-3">
            {[
              { title: 'State Subsidies', desc: 'Har state ka structure alag hai bhai. Kuch direct subsidy dete hain.' },
              { title: 'Dealer Commission', desc: 'Retailer apna margin add karta hai. Wholesale mein sasta.' },
              { title: 'Season Demand', desc: 'Sowing season mein demand spike = price up.' },
              { title: 'Online vs Offline', desc: 'E-commerce par kabhi discount, local shop fixed price.' },
              { title: 'Original vs Duplicate', desc: 'IFFCO original thoda mehnga hai bhai — quality verified. Sasta = risk.' },
            ].map(({ title, desc }) => (
              <div key={title} className="border-l-4 border-green-400 dark:border-green-600 pl-4 py-1">
                <p className="font-bold text-[var(--color-text)] text-sm">{title}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Benefits */}
        <section className="mb-8">
          <SH>Foliar Spray Ke Sambhavit Fayde</SH>
          <DB>
            <strong>Reminder:</strong> In benefits ka asar fasal, soil, paani, aur sahi usage par depend karta hai bhai. Har khet mein result alag. Fixed guarantee nahi.
          </DB>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {[
              { title: 'Kam Quantity, Zyada Kaam', desc: '500ml vs 50kg traditional DAP per acre. Transport cost kam.' },
              { title: 'Tezi Se Absorption', desc: 'Nano particles foliar spray se jaldi absorb.' },
              { title: 'Yield Mein Sambhavit Sudhar', desc: 'Kuch kisanon ne improvement report ki — guaranteed nahi.' },
              { title: 'Soil Health Par Kam Asar', desc: 'Kam quantity = pH par comparatively less impact.' },
              { title: 'Cost Effective Ho Sakta Hai', desc: '₹300 bottle vs ₹1,500 DAP bag per acre comparison.' },
              { title: 'Lower Environmental Risk', desc: 'Kam quantity = groundwater runoff risk comparatively low.' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <p className="font-bold text-[var(--color-text)] text-sm mb-1">{title}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IMAGE 4: Benefits for Farmers — PATH UNCHANGED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/nano-dap-benefits-farmers.webp"
            alt="Nano DAP benefits for Indian kisans — foliar spray advantages comparison"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Nano DAP Ke Fayde — Kisanon Ke Liye Real Benefits
          </p>
        </div>

        {/* Section 6: Dosage Chart */}
        <section className="mb-8">
          <SH>Crop-wise Dosage Chart — Per Acre</SH>
          <WB>
            <strong>Important:</strong> General reference only bhai. Exact dosage IFFCO label aur local KVK se confirm karein. Overdose se crop damage ho sakta hai.
          </WB>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Crop</th>
                  <th className="p-3 text-left">Dosage/Acre</th>
                  <th className="p-3 text-left">Sprays</th>
                  <th className="p-3 text-left">Best Timing</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Gehu (Wheat)', '400-500ml', '2-3', '15-20 din + flowering'],
                  ['Dhan (Paddy)', '500ml', '2-3', 'Tillering + flowering'],
                  ['Makka (Maize)', '500ml', '2', '15 din + 40 din'],
                  ['Soybean', '400-500ml', '2', 'Pre-flowering + pod filling'],
                  ['Sarson (Mustard)', '400ml', '2', 'Rosette + flowering'],
                  ['Cotton', '500ml', '2-3', 'Square formation + boll'],
                  ['Sugarcane', '500-600ml', '3', '30, 60, 90 din'],
                  ['Sabziyan', '300-400ml', '2-3', '15 din + flowering'],
                ].map(([crop, dose, sprays, timing], i) => (
                  <tr key={crop} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{crop}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-green-700 dark:text-green-400 font-bold">{dose}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{sprays}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* IMAGE 5: Before After Comparison — PATH UNCHANGED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/nano-dap-before-after-comparison.webp"
            alt="Nano DAP before and after comparison — crop growth difference after foliar spray"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Before vs After — Nano DAP Spray Ka Asar
          </p>
        </div>

        {/* Section 7: How To Apply */}
        <section className="mb-8">
          <SH>Apply Kaise Karein — Step by Step</SH>
          <StepList>
            <SI n={1}>500ml product ko 100-150L paani mein mix karo bhai. 15L pump mein 50-75ml</SI>
            <SI n={2}>Bottle achhe se shake karo — nano particles evenly mix hone chahiye</SI>
            <SI n={3}>Subah ya shaam spray karo — dopahar ki garmi mein avoid karo</SI>
            <SI n={4}>Pattiyon ke dono taraf spray — upar + neeche</SI>
            <SI n={5}>4-6 ghante dry weather chahiye spray ke baad</SI>
            <SI n={6}>Pesticide mix se pehle compatibility test karo chhote area par</SI>
          </StepList>
          <IB>
            <strong>Tip:</strong> Fine spray nozzle use karo bhai — absorption behtar hoti hai. Coarse droplets waste hote hain.
          </IB>
        </section>

        {/* Section 8: Comparison */}
        <section className="mb-8">
          <SH>Liquid Vs Traditional DAP — Sachai</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Factor</th>
                  <th className="p-3 text-left">Liquid DAP</th>
                  <th className="p-3 text-left">Traditional DAP</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Form', 'Liquid spray', 'Granular dana'],
                  ['Per Acre Qty', '500ml', '50kg bag'],
                  ['Cost/Acre', '₹250-350', '₹1,350-1,650'],
                  ['Application', 'Foliar spray', 'Soil broadcast'],
                  ['Absorption Speed', 'Comparatively fast', 'Slower (needs water)'],
                  ['Transport Cost', 'Low', 'High (heavy bags)'],
                  ['Runoff Risk', 'Lower', 'Higher if overused'],
                ].map(([factor, liquid, trad], i) => (
                  <tr key={factor} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{factor}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-green-700 dark:text-green-400">{liquid}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{trad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <DB>
            <strong>Sachai:</strong> Liquid DAP traditional DAP ka replacement nahi hai bhai. Dono ka sahi combination best results deta hai. Sirf liquid par depend mat karo.
          </DB>
        </section>

        {/* IMAGE 6: Vs Traditional DAP Comparison — PATH UNCHANGED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/nano-dap-vs-traditional-dap-comparison.webp"
            alt="Nano DAP vs traditional DAP comparison — liquid foliar spray vs granular soil application"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Nano DAP vs Traditional DAP — Detailed Comparison
          </p>
        </div>

        {/* Section 9: Where To Buy */}
        <section className="mb-8">
          <SH>Kahan Se Kharidein — Trusted Sources</SH>
          <div className="space-y-3">
            {[
              { src: 'IFFCO Official Website', note: 'Sabse trustworthy hai bhai. Original product guarantee.' },
              { src: 'Amazon / Flipkart', note: 'Official seller check karo. Ratings padho.' },
              { src: 'Krishi Kendra / State Portals', note: 'Govt authorized. Subsidy possible.' },
              { src: 'Local Authorized Dealer', note: 'Most kisan prefer offline. Receipt lo.' },
            ].map(({ src, note }) => (
              <div key={src} className="flex gap-3 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <span className="text-green-600 dark:text-green-400 font-bold shrink-0">✓</span>
                <div>
                  <p className="font-bold text-[var(--color-text)] text-sm">{src}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{note}</p>
                </div>
              </div>
            ))}
          </div>
          <WB>
            <strong>Fraud Alert:</strong> Original packaging par QR code scan karo bhai. Bohot sasta = suspicious. Fertilizer ke liye loan chahiye toh <Link href="/articles/KisanCreditCardOnlineApply2026" className="underline font-bold">KCC guide</Link> padho.
          </WB>
        </section>

        {/* IMAGE 7: Buy Online — PATH UNCHANGED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/nano-dap-buy-online-fertilizer.webp"
            alt="Buy Nano DAP online fertilizer — trusted sources for Indian kisans IFFCO authorized"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Trusted Sources — Online Aur Offline Kahan Se Kharidein
          </p>
        </div>

        {/* Section 10: Common Mistakes */}
        <section className="mb-8">
          <SH>6 Galtiyan Jo Avoid Karni Chahiye</SH>
          <div className="space-y-2">
            {[
              'Zyada quantity = crop jal sakta hai bhai. Label follow karo.',
              'Dopahar mein spray = pattiyan jal sakti hain. Subah/shaam best.',
              'Sirf 1 spray = insufficient. 2-3 sprays recommended.',
              'Expired product = effectiveness zero. Manufacturing date check.',
              'Galat paani ratio = dilution issue. Measure karo, andaza mat.',
              'Baarish se pehle spray = wash-off. 4-6h dry window zaroori.',
            ].map((mistake) => (
              <div key={mistake} className="flex gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <span className="text-red-600 dark:text-red-400 font-bold shrink-0">✗</span>
                <span className="text-xs text-[var(--color-text-muted)]">{mistake}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Liquid DAP FAQ 2026 — Verified Answers" />
        </section>

        {/* Conclusion */}
        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Bottom Line</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Liquid DAP convenient option hai bhai — kam quantity, easy application. Lekin akela kaam nahi karta. Sahi beej, samay par paani, aur balanced nutrition zaroori hai.
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>Pehle chhote area par test karo</li>
            <li>KVK se dosage confirm karo</li>
            <li>Authorized dealer se hi kharido</li>
            <li>Traditional DAP band mat karo — combine karo</li>
            <li>QR code verify karo har purchase par</li>
          </ol>
        </div>

        <GovLink
          href="https://www.iffco.in"
          label="IFFCO Official — Product Verification"
          guide="Original Check Karo"
          guideHref="/articles/soil-health-card-complete-guide-2026"
          portalName="iffco.in"
        />

        <CalcBanner
          icon="🌾"
          title="Apni Fasal Ki Income Calculate Karo"
          desc="MSP income, crop profit, KCC EMI — sab free calculators se"
          primaryCta={{ href: '/calculator/msp-income', label: '📊 MSP Calculator →' }}
          secondaryCta={{ href: '/calculator', label: '🧮 Sab Utilities' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/soil-health-card-complete-guide-2026', l: '🌱 Soil Card' },
          { href: '/articles/KisanCreditCardOnlineApply2026', l: '💳 KCC Guide' },
          { href: '/calculator/crop-profit', l: '📊 Crop Profit' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}