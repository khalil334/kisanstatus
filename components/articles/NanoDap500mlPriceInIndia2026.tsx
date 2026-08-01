'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-06-21T08:00:00+05:30';
const MODIFIED = '2026-08-02T08:00:00+05:30';

const RELATED = [
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Apply Guide', emoji: '💳' },
  { slug: 'soil-health-card-complete-guide-2026', title: 'Soil Health Card', emoji: '🌱' },
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status', emoji: '📅' },
  { slug: 'AgriStackKyaHai2026', title: 'Digital Kisan ID', emoji: '🆔' },
];

const FAQS_DATA = [
  { 
    q: 'Nano DAP 500ml ka asli price India mein 2026 kya hai?', 
    a: 'Market mein iski MRP ₹280 se ₹350 ke beech chalti hai. Lekin agar aapke state mein subsidy scheme active hai, toh ye rate gir kar ₹200-280 tak aa sakta hai. Exact figure ke liye apne nazdeeki authorized IFFCO dealer se puchna sabse behtar rahega.' 
  },
  { 
    q: 'Kya main ise traditional DAP ki jagah poora use kar sakta hoon?', 
    a: 'Bilkul nahi. IFFCO aur agriculture experts dono ise traditional DAP ka 'replacement' nahi, balki ek 'supplement' maante hain. Base dose mitti mein traditional DAP se hi dena chahiye, aur Nano DAP ko sirf foliar spray ke taur par extra boost ke liye use karna chahiye.' 
  },
  { 
    q: '1 acre ke liye spray ka sahi dosage kitna hai?', 
    a: 'Standard recommendation 500ml per acre hai, jise 100 se 150 litre paani mein mix kiya jata hai. Fasal ki growth stage ke hisaab se KVK experts isme thoda bahut change kar sakte hain, isliye label zaroor padhein.' 
  },
  { 
    q: 'Kya ise pesticide ya urea ke saath mix kar sakte hain?', 
    a: 'Haan, lekin shart ye hai ki pehle ek chhote se patch par 'jar test' (compatibility test) kar lein. Bina check kiye direct tank mein mix karne se chemical reaction ho sakta hai jo fasal ko nuksan pahuncha sakta hai.' 
  },
  { 
    q: 'Spray karne ke baad result kitne din mein dikhta hai?', 
    a: 'Aam taur par 7 se 10 din mein pattiyo ka rang hara aur taazagī mein farak nazar aane lagta hai. Lekin yaad rahe, ye soil health, mausam aur paani ki uplabdhta par bhi poora depend karta hai.' 
  },
  { 
    q: 'Online kahan se kharidna safe hai?', 
    a: 'IFFCO ki official website ya unke authorized e-commerce partners sabse safe hain. Agar local market se le rahe hain, toh bottle ke peeche lage QR code ko scan karke authenticity zaroor verify karein.' 
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Apply IFFCO Liquid Nano DAP Correctly',
  description: 'Step-by-step practical guide to mixing and spraying Nano DAP 500ml on crops for maximum absorption and yield.',
  totalTime: 'PT20M',
  step: [
    { '@type': 'HowToStep', name: 'Paani mein sahi ratio mein mix karein', text: '500ml liquid Nano DAP ko 100-150 litre saaf paani mein achhe se mix karein.' },
    { '@type': 'HowToStep', name: 'Bottle ko achhe se shake karein', text: 'Spray karne se pehle bottle ko hilayein taaki nano particles evenly suspend rahein.' },
    { '@type': 'HowToStep', name: 'Sahi samay chunein', text: 'Subah 10 baje se pehle ya shaam 4 baje ke baad spray karein. Dopahar ki tez dhoop mein avoid karein.' },
    { '@type': 'HowToStep', name: 'Pattiyo ke dono taraf spray karein', text: 'Nozzle ko aise set karein ki liquid pattiyo ke upri aur neeche dono surfaces par pahunche.' },
    { '@type': 'HowToStep', name: 'Mausam ka dhyan rakhein', text: 'Spray ke baad kam se kam 4-6 ghante tak baarish nahi honi chahiye taaki absorption poora ho sake.' },
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
            Nano DAP 500ml Price 2026: Rate, Dosage Chart & Dealer Secrets
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
            IFFCO Liquid DAP 500ml — Approximate Price Range 2026
          </p>
        </div>

        {/* Quick Answer */}
        <div className="my-6 p-5 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-xl">
          <h2 className="text-base font-black text-green-800 dark:text-green-300 mb-2">Seedha Jawab (Quick Answer)</h2>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Agar aap seedha point par aana chahte hain: <strong>Nano DAP 500 ml price</strong> lagbhag ₹250-350 ke beech hai. State subsidy milne par ye ₹200-280 tak gir jaata hai. <strong>Dosage:</strong> 500ml per acre, 100-150L paani mein, 2-3 baar spray. Lekin dhyan rahe, exact rate aur dosage apne local KVK ya authorized dealer se confirm karna hi samajhdari hai.
          </p>
        </div>

        {/* Section 1: What Is It */}
        <section className="mb-8">
          <SH>Nano DAP Kya Hai? Simple Bhasha Mein Samjhein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            IFFCO ka Nano DAP koi jaadu ki chhadi nahi hai, lekin kheti ke tareeke mein ye ek solid upgrade zaroor hai. Iska basic science kaafi simple hai: normal DAP ke dane (granules) mitti mein ghulne mein waqt lete hain, jabki Nano DAP ke particles itne chhote (nano-scale) hote hain ki wo foliar spray ke zariye seedhe pattiyo (leaves) se absorb ho jaate hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ek baat bilkul clear kar lein: ye traditional DAP ka <strong>replacement nahi, balki ek saathi (supplement)</strong> hai. Khud IFFCO aur krishi vigyan experts dono ye combination hi recommend karte hain. Har khet ka result soil type, paani ki quality aur spray karne ke tareeke par nirbhar karta hai.
          </p>
          <IB>
            <strong>Saaf baat:</strong> Koi bhi company fixed yield ka wada nahi kar sakti. Ye guide estimated prices aur general dosage ka reference deti hai — final decision apne local KVK scientist se salah lekar hi lein.
          </IB>
        </section>

        {/* Section 2: Price 2026 */}
        <section className="mb-8">
          <SH>Nano DAP Price 500 ml — 2026 Ka Estimated Range</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Rate roz nahi badalta, lekin season aur state ke hisaab se thoda upar-neeche zaroor hota hai. Neeche diya gaya chart ek general idea deta hai:
          </p>
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
            <strong>Note:</strong> Ye 2026 ki estimated values hain. Actual price state policies, dealer margin aur season ke hisaab se ghatta-badhta rehta hai.
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
            Har state ki demand aur supply chain alag hoti hai. Punjab, Haryana ya UP mein stock jaldi aa jata hai, jabki kuch eastern states mein supply chain thoda dheera chalta hai, jisse rate aur stock dono mein farak dikh sakta hai.
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
            State-wise Price Comparison — 2026 Reference
          </p>
        </div>

        {/* Section 4: Price Factors */}
        <section className="mb-8">
          <SH>Price Kyun Badalti Rehti Hai?</SH>
          <div className="space-y-3">
            {[
              { title: 'State Subsidy Policies', desc: 'Har rajya ka apna structure hai — kuch seedha discount dete hain, kuch nahi.' },
              { title: 'Dealer Margin', desc: 'Retailer apna commission jodta hai, isliye wholesale rate hamesha behtar hota hai.' },
              { title: 'Season Demand', desc: 'Sowing season shuru hote hi demand ek dum badh jaati hai aur rate bhi.' },
              { title: 'Online vs Offline', desc: 'E-commerce par kabhi kabhi discount mil jaata hai, local dukaan par usually fixed rate.' },
              { title: 'Original vs Duplicate', desc: 'IFFCO ka asli product thoda mehnga zaroor hai, par quality guaranteed hai. Bohot sasta mila toh saavdhan rahein.' },
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
            <strong>Reminder:</strong> Har khet ka mizaaj alag hota hai. Soil type, paani ki availability aur spray karne ka tareeka — teeno mil kar result decide karte hain. Isliye ek jaisa outcome sabko milega, aisa maan kar mat chaliye.
          </DB>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {[
              { title: 'Kam Quantity, Zyada Asar', desc: '500ml vs 50kg traditional DAP per acre — transport ka bojh bhi kam.' },
              { title: 'Tezi Se Absorption', desc: 'Nano particles hone ki wajah se foliar spray jaldi soak ho jaati hai.' },
              { title: 'Yield Mein Sambhavit Sudhar', desc: 'Kuch kisanon ne improvement report ki hai, par ye guaranteed nahi hai.' },
              { title: 'Soil Health Par Kam Asar', desc: 'Chhoti quantity ka matlab soil pH par kam farak padta hai.' },
              { title: 'Cost Effective Ho Sakta Hai', desc: '₹300 ki bottle vs ₹1,500 ka DAP bag — per acre comparison mein.' },
              { title: 'Lower Environmental Risk', desc: 'Kam quantity use hone se groundwater runoff ka risk bhi dusron ke muqable kam rehta hai.' },
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
            <strong>Important:</strong> Ye general reference hai. Exact dosage IFFCO label aur local KVK se hi confirm karein — overdose se crop damage bhi ho sakta hai.
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
          <SH>Nano DAP Spray Karne Ka Sahi Tarika — Step by Step</SH>
          <StepList>
            <SI n={1}>500ml product ko 100-150L paani mein mix karein. 15L pump ke hisaab se 50-75ml lein.</SI>
            <SI n={2}>Bottle ko achhe se shake karein taaki nano particles evenly ghul jaayein.</SI>
            <SI n={3}>Subah 10 baje se pehle ya shaam 4 baje ke baad spray karein. Dopahar ki tez dhoop mein avoid karein.</SI>
            <SI n={4}>Pattiyo ke dono taraf spray karein — upar aur neeche dono, taaki absorption maximum ho.</SI>
            <SI n={5}>Spray ke baad 4-6 ghante tak mausam dry rehna zaroori hai.</SI>
            <SI n={6}>Kisi bhi pesticide ke saath mix karne se pehle chhote patch par 'jar test' kar lein.</SI>
          </StepList>
          <IB>
            <strong>Pro Tip:</strong> Fine spray nozzle use karein — absorption behtar hoti hai. Coarse droplets zyadatar waste ho jaate hain.
          </IB>
        </section>

        {/* Section 8: Comparison */}
        <section className="mb-8">
          <SH>Liquid Vs Traditional DAP — Asliyat</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Factor</th>
                  <th className="p-3 text-left">Liquid Nano DAP</th>
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
            <strong>Asliyat ye hai:</strong> Liquid DAP traditional DAP ki jagah nahi le sakta. Dono ka sahi combination hi best result deta hai — sirf liquid par bharosa mat karein.
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
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Kai kisan bhai poochte hain ki <strong>nano dap kahan milega</strong> ya <strong>iffco nano dap online kaise kharidein</strong>. Neeche diye sources mein se koi bhi try kar sakte hain:
          </p>
          <div className="space-y-3">
            {[
              { src: 'IFFCO Official Website', note: 'Sabse trustworthy source — original product ki guarantee milti hai.' },
              { src: 'Amazon / Flipkart', note: 'Sirf official seller se lein, ratings aur reviews zaroor padhein.' },
              { src: 'Krishi Kendra / State Portals', note: 'Government authorized hai, subsidy milne ke chances rehte hain.' },
              { src: 'Local Authorized Dealer', note: 'Zyadatar kisan offline lena prefer karte hain — bill/receipt zaroor le lein.' },
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

          {/* Visual Card Style Internal Links */}
          <div className="grid sm:grid-cols-2 gap-4 my-6 not-prose">
            <Link href="/articles/KisanCreditCardOnlineApply2026" className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 hover:shadow-md transition-all">
              <span className="text-2xl">💳</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm">Kisan Credit Card (KCC) Guide</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Fertilizer aur kheti ke liye low-interest loan kaise lein.</p>
              </div>
            </Link>
            <Link href="/articles/soil-health-card-complete-guide-2026" className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 hover:shadow-md transition-all">
              <span className="text-2xl">🌱</span>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm">Soil Health Card Complete Guide</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Apni mitti ki jaanch karein aur sahi fertilizer chunein.</p>
              </div>
            </Link>
          </div>

          <WB>
            <strong>Fraud Alert:</strong> Original packaging ka QR code hamesha scan karein. Bohot sasta rate dikhe toh saavdhan rahein.
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
          <SH>6 Galtiyan Jo Kisan Aksar Karte Hain</SH>
          <div className="space-y-2">
            {[
              'Zyada quantity daalna — crop jal sakta hai, label ka ratio follow karein.',
              'Dopahar mein spray karna — pattiyan jal sakti hain, subah ya shaam best rehta hai.',
              'Sirf ek baar spray karna — 2-3 sprays ke bina result adhoora rehta hai.',
              'Expired product use karna — manufacturing date check karna na bhoolein.',
              'Paani ka ratio andaaze se lena — measure karke hi dilute karein.',
              'Baarish se theek pehle spray karna — 4-6 ghante ka dry window zaroori hai, warna wash-off ho jaata hai.',
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
          <FAQBlock faqs={FAQS_DATA} caption="Nano DAP FAQ 2026 — Verified Answers" />
        </section>

        {/* Conclusion */}
        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Bottom Line</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Nano DAP ek convenient option hai — kam quantity, aasan application. Par ye akela sab kuch nahi kar sakta. Sahi beej, samay par paani aur balanced nutrition — inke bina koi bhi fertilizer poora asar nahi dikhayega.
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>Pehle chhote area par test karein.</li>
            <li>KVK se dosage confirm karein.</li>
            <li>Authorized dealer se hi kharidein.</li>
            <li>Traditional DAP band na karein — combine karein.</li>
            <li>Har purchase par QR code verify karein.</li>
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