import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-06-21T08:00:00+05:30';
const MODIFIED = '2026-08-02T08:00:00+05:30';

const RELATED = [
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Apply Guide', emoji: '💳' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary Roster 2026', emoji: '📋' },
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status', emoji: '📅' },
  { slug: 'soil-health-card-complete-guide-2026', title: 'Soil Health Card', emoji: '🌱' },
  { slug: 'KisanRinKahaSeLe2026', title: 'Kisan Loan Guide', emoji: '🏦' },
  { slug: 'AgriStackKyaHai2026', title: 'Digital Kisan ID', emoji: '🆔' },
];

const FAQS_DATA = [
  { q: 'Nano DAP 500ml price India mein 2026 kya hai?', a: 'Lagbhag ₹250-350 ke beech. Subsidy mil jaaye toh ₹200-280 tak bhi aa sakta hai. Exact price ke liye authorized dealer ya IFFCO website confirm karna behtar rahega — state aur season se rate badalta hai.' },
  { q: 'IFFCO liquid DAP ka aaj ka rate kya chal raha hai?', a: 'Authorized dealers ₹280-320 charge kar rahe hain. Kuch states mein subsidized rate ₹220-270 tak mil jaata hai. Rate roz nahi badalta, par season shuru hote hi update lena samajhdari hai.' },
  { q: '1 acre ke liye foliar spray ka dosage kitna hota hai?', a: 'Label ke mutabik 500ml per acre — 100-150 litre paani mein ghol kar 2-3 baar spray. Crop ke hisaab se KVK dosage thoda change bhi karwa sakta hai.' },
  { q: 'Traditional DAP se ye kaise alag hai?', a: 'Liquid DAP ek foliar spray hai — nano particles seedhe pattiyon se absorb hote hain. Traditional DAP zameen mein daala jaata hai. Dono ko ek doosre ka replacement nahi, saathi samjhein — kai experts inka combination hi suggest karte hain.' },
  { q: 'Urea ya pesticide ke saath mix karna theek hai?', a: 'Pehle compatibility test kar lena zaroori hai — chhote patch par try karke dekhein. Kisi bhi mix se pehle KVK ya IFFCO guideline padh lena safe rahega, warna crop damage ka risk rehta hai.' },
  { q: 'Result kitne din mein dikhna shuru hota hai?', a: '7-10 din mein kuch farak nazar aa sakta hai. Do-teen sprays ke baad tasveer clearer hoti hai. Soil, mausam aur crop type par bhi kaafi kuch depend karta hai, isliye fixed timeline nahi de sakte.' },
  { q: 'Online kahan se kharidna safe hai?', a: 'IFFCO ki official website sabse reliable option hai. Amazon-Flipkart par sirf verified seller se lein. Local Krishi Kendra mein subsidy milne ke chances bhi rehte hain — original packaging ka QR code zaroor check karein.' },
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
            Nano DAP 500ml Price 2026: Rate, Dosage Chart, Aur Woh Baatein Jo Dealer Nahi Batata
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

        <div className="my-6 p-5 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-xl">
          <h2 className="text-base font-black text-green-800 dark:text-green-300 mb-2">Quick Answer</h2>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            <strong>Nano DAP 500 ml price:</strong> ₹250-350 (subsidy ke saath ₹200-280) — dukaan par lein ya online, rate isi range mein milega. <strong>Dosage:</strong> 500ml per acre, 100-150L paani mein, 2-3 sprays. Exact price aur dosage authorized dealer ya KVK se hi confirm karein — yahan diye figures ek estimated reference hain.
          </p>
        </div>

        <section className="mb-8">
          <SH>Nano DAP Kya Hai — Simple Bhasha Mein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            IFFCO ne jo ye liquid fertilizer banaya hai, uska poora naam hi keh raha hai ki iska size normal DAP se bahut chhota hai. Nano-scale particles hone ki wajah se ye foliar spray ke through seedhe pattiyon se absorb ho jaate hain. Simple DAP mitti mein daala jaata hai, ye hawa ke raaste patti tak pahunchta hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ek baat clear kar dein: ye traditional DAP ka <strong>replacement nahi, saathi</strong> hai. Khud IFFCO aur agriculture experts dono ye combination hi recommend karte hain, akela nahi. Har khet ka result soil, paani, fasal aur usage ke tareeke par nirbhar karta hai.
          </p>
          <IB>
            <strong>Saaf baat:</strong> Fixed yield ka koi wada nahi kiya ja sakta. Ye guide estimated prices aur general dosage ka reference deti hai — final decision apne local KVK se salah lekar hi lein.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Nano DAP Price 500 ml — 2026 Ka Estimated Range</SH>
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
            <strong>Note:</strong> Ye 2026 ki estimated values hain. Actual price state, dealer, subsidy policy aur season ke hisaab se ghatta-badhta rehta hai.
          </WB>
        </section>

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

        <section className="mb-8">
          <SH>State-wise Price Reference</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Haryana, Punjab, UP, Maharashtra aur Gujarat mein demand zyada hai, isliye availability bhi wahan behtar rehti hai. Eastern states mein supply chain thoda dheera chalta hai, toh rate aur stock dono mein farak dikh sakta hai.
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

        <section className="mb-8">
          <SH>Price Kyun Badalti Rehti Hai?</SH>
          <div className="space-y-3">
            {[
              { title: 'State Subsidies', desc: 'Har state ka apna structure hai — kuch seedha subsidy dete hain, kuch nahi.' },
              { title: 'Dealer Commission', desc: 'Retailer apna margin jodta hai, isliye wholesale rate hamesha sasta padta hai.' },
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

        <section className="mb-8">
          <SH>Foliar Spray Ke Sambhavit Fayde</SH>
          <DB>
            <strong>Reminder:</strong> Har khet ka mizaaj alag hota hai — soil type, paani ki availability aur spray karne ka tareeka, teeno mil kar result decide karte hain. Isliye ek jaisa outcome sabko milega, aisa maan kar mat chaliye.
          </DB>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {[
              { title: 'Kam Quantity, Zyada Kaam', desc: '500ml vs 50kg traditional DAP per acre — transport ka bojh bhi kam.' },
              { title: 'Tezi Se Absorption', desc: 'Nano particles hone ki wajah se foliar spray jaldi absorb hoti hai.' },
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

        <section className="mb-8">
          <SH>Nano DAP Spray Karne Ka Sahi Tarika — Step by Step</SH>
          <StepList>
            <SI n={1}>500ml product ko 100-150L paani mein mix karein. 15L pump ke hisaab se 50-75ml lein</SI>
            <SI n={2}>Bottle ko achhe se shake karein taaki nano particles evenly ghul jaayein</SI>
            <SI n={3}>Subah ya shaam spray karein, dopahar ki garmi mein avoid karein</SI>
            <SI n={4}>Pattiyon ke dono taraf spray karein — upar aur neeche dono</SI>
            <SI n={5}>Spray ke baad 4-6 ghante tak mausam dry rehna zaroori hai</SI>
            <SI n={6}>Kisi bhi pesticide ke saath mix karne se pehle chhote patch par test kar lein</SI>
          </StepList>
          <IB>
            <strong>Tip:</strong> Fine spray nozzle use karein — absorption behtar hoti hai. Coarse droplets zyadatar waste ho jaate hain.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Liquid Vs Traditional DAP — Asliyat</SH>
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
            <strong>Asliyat ye hai:</strong> Liquid DAP traditional DAP ki jagah nahi le sakta. Dono ka sahi combination hi best result deta hai — sirf liquid par bharosa mat karein.
          </DB>
        </section>

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

        <section className="mb-8">
          <SH>Kahan Se Kharidein — Trusted Sources</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Kai kisan bhai poochte hain ki <strong>nano dap kahan milega</strong> ya <strong>iffco nano dap online kaise kharidein</strong>. Neeche diye sources mein se koi bhi try kar sakte hain:
          </p>
          <div className="space-y-3">
            {[
              { src: 'IFFCO Official Website', note: 'Sabse trustworthy source — original product ki guarantee milti hai.' },
              { src: 'Amazon / Flipkart', note: 'Sirf official seller se lein, ratings zaroor padhein.' },
              { src: 'Krishi Kendra / State Portals', note: 'Government authorized hai, subsidy milne ke chances rehte hain.' },
              { src: 'Local Authorized Dealer', note: 'Zyadatar kisan offline lena prefer karte hain — receipt zaroor le lein.' },
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
            <strong>Fraud Alert:</strong> Original packaging ka QR code hamesha scan karein. Bohot sasta rate dikhe toh saavdhan rahein. Fertilizer ke liye loan chahiye toh <Link href="/articles/KisanCreditCardOnlineApply2026" className="underline font-bold">KCC guide</Link> padh lein.
          </WB>
        </section>

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

        <section className="mb-8">
          <SH>6 Galtiyan Jo Avoid Karni Chahiye</SH>
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

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Nano DAP FAQ 2026 — Verified Answers" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Bottom Line</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Nano DAP ek convenient option hai — kam quantity, aasan application. Par ye akela sab kuch nahi kar sakta. Sahi beej, samay par paani aur balanced nutrition — inke bina koi bhi fertilizer poora asar nahi dikhayega.
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>Pehle chhote area par test karein</li>
            <li>KVK se dosage confirm karein</li>
            <li>Authorized dealer se hi kharidein</li>
            <li>Traditional DAP band na karein — combine karein</li>
            <li>Har purchase par QR code verify karein</li>
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
