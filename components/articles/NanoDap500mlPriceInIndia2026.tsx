import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';
import SourcesSection from '@/components/ui/SourcesSection';

const PUBLISHED = '2026-06-24T04:22:58+05:30';
const MODIFIED = '2026-07-31T19:12:48+05:30';

const RELATED = [
  { slug: 'soil-health-card-complete-guide-2026', title: 'Soil Health Card Guide' },
  { slug: 'vermi-compost-business-guide', title: 'Vermi Compost Business' },
  { slug: 'drip-sprinkler-irrigation-subsidy', title: 'Drip & Sprinkler Subsidy' },
];

const FAQS_DATA = [
  { q: 'Nano DAP 500ml price India mein 2026 kya hai?', a: 'IFFCO ka official rate ₹600 per 500ml bottle hai — yahi MRP IFFCO ne khud release ki hai aur cooperative societies se bhi bottle isi rate par milti hai. Isse sasta bechne wale online seller aksar unauthorized hote hain, IFFCO unke khilaf legal action bhi le chuka hai. Authorized dealer se hi lein.' },
  { q: 'Normal DAP (50kg bori) ka rate kitna hai?', a: 'Subsidized rate lagbhag ₹1,350 per bori chal raha hai — yahi rate POS machine se kharidne par milta hai. Dealer isse zyada maange to wo overcharging hai; receipt maango aur zila krishi adhikari se shikayat kar sakte ho. Bina subsidy DAP ki asli laagat ₹3,000+ hai, farak sarkar deti hai.' },
  { q: 'IFFCO liquid DAP ki 500ml bottle ka dealer price kitna hai?', a: 'IFFCO ke official price ke mutabik dealer price ₹547.50 aur kisan ke liye maximum retail price ₹600 per 500ml bottle hai. Dealer ₹600 se zyada maange to wo overcharging hai — receipt maango. Nano DAP par bori wali DAP jaisi alag sarkari subsidy nahi hoti, isliye rate poore desh me ek hi hai.' },
  { q: '1 acre ke liye foliar spray ka dosage kitna hota hai?', a: 'Label ke mutabik 500ml per acre — 100-150 litre paani mein ghol kar 2-3 baar spray. Crop ke hisaab se KVK dosage thoda change bhi karwa sakta hai.' },
  { q: 'Traditional DAP se ye kaise alag hai?', a: 'Liquid DAP ek foliar spray hai — nano particles seedhe pattiyon se absorb hote hain. Traditional DAP zameen mein daala jaata hai. Dono ko ek doosre ka replacement nahi, saathi samjhein — kai experts inka combination hi suggest karte hain.' },
  { q: 'Urea ya pesticide ke saath mix karna theek hai?', a: 'Pehle compatibility test kar lena zaroori hai — chhote patch par try karke dekhein. Kisi bhi mix se pehle KVK ya IFFCO guideline padh lena safe rahega, warna crop damage ka risk rehta hai.' },
  { q: 'Result kitne din mein dikhna shuru hota hai?', a: '7-10 din mein kuch farak nazar aa sakta hai. Do-teen sprays ke baad tasveer clearer hoti hai. Soil, mausam aur crop type par bhi kaafi kuch depend karta hai, isliye fixed timeline nahi de sakte.' },
  { q: 'Online kahan se kharidna safe hai?', a: 'IFFCO ki official website sabse reliable option hai. Amazon-Flipkart par sirf verified seller se lein aur rate ₹600 ke aas-paas hi hona chahiye — kaafi sasta offer unauthorized seller ki nishani hai. Original packaging ka QR code scan kar ke check karein.' },
  { q: 'Kya kharidne se pehle soil test karwana zaroori hai?', a: 'Zaroori nahi, par samajhdari hai. Soil Health Card ka test free hai (soilhealth.dac.gov.in) aur usse pata chalta hai ki mitti ko phosphorus chahiye bhi ya nahi. Card ke hisaab se khaad lene par nano DAP aur granular dono ka kharcha kam ho sakta hai.' },
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
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>13 min read</span>
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
            <strong>Nano DAP 500 ml price: ₹600 (IFFCO ka official MRP)</strong> — dealer price ₹547.50. Rate poore desh me ek hi hai; isse kaafi sasta offer dikhe to shak karo, unauthorized seller ho sakta hai. <strong>Dosage:</strong> 500ml per acre, 100-150L paani mein, 2-3 sprays. Dosage apne crop ke hisaab se KVK se confirm karein.
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
                  ['IFFCO Nano DAP (MRP)', '₹600', '500ml'],
                  ['IFFCO Nano DAP (Dealer price)', '₹547.50', '500ml'],
                  ['IFFCO Nano Urea (comparison)', '₹225 MRP', '500ml'],
                  ['Traditional DAP (Granular, subsidized)', '₹1,350', '50kg bag'],
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
            <strong>Note:</strong> Ye IFFCO ke official released prices hain — Nano DAP ka rate state ke hisaab se nahi badalta. ₹600 se zyada maange to overcharging hai; kaafi sasta mile to unauthorized seller ka shak karo, IFFCO aise sellers ke khilaf legal action le chuka hai.
          </WB>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Bahut kisan yahan sirf <strong>normal DAP bori ka rate</strong> dekhne aate hain, isliye wo baat alag se saaf kar dein — IFFCO ki 50kg granular DAP bori ka subsidized rate lagbhag <strong>₹1,350</strong> chal raha hai (bina subsidy iski asli laagat ₹3,000+ baithti hai, farak sarkar bharti hai). Dukaan par isse zyada maange to receipt zaroor lein — subsidized khaad ka rate poore desh me lagbhag ek jaisa hota hai. POS machine se hi kharidein, tabhi subsidy wala rate milta hai.
          </p>
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
          <SH>Kya State Ke Hisaab Se Rate Alag Hota Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Nahi — aur ye baat saaf samajh lo, kyunki internet par state-wise price ki fancy tables ghoomti hain jo kisi official source se nahi aati. <strong>Nano DAP ka MRP poore desh me ek hi hai: ₹600 per 500ml bottle.</strong> Bori wali DAP ki tarah iska rate subsidy se ghata-badha nahi hota, kyunki nano fertilizers par wo wali subsidy lagti hi nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Haan, <strong>availability</strong> state-dar-state alag hai — Haryana, Punjab, UP, Maharashtra, Gujarat me demand zyada hai to stock bhi behtar milta hai; kuch eastern states me supply chain dheemi hai. Chhattisgarh jaise states ne to kharif season ke liye lakhon bottles pehle se cooperative societies me stock karwa di hain — wahan bhi rate wahi ₹600 hai. Bottle kahin bhi lo, receipt par ₹600 se zyada nahi hona chahiye.
          </p>
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
          <SH>Receipt Par Rate Alag Kyun Dikh Sakta Hai?</SH>
          <div className="space-y-3">
            {[
              { title: 'Official MRP Fixed Hai', desc: '₹600 per bottle — IFFCO ne khud release kiya hai. Isse upar ka har rupaya overcharging hai.' },
              { title: 'Dealer Overcharging', desc: 'Season me demand badhne par kuch dealer upar se paisa maang lete hain — receipt maango, shikayat zila krishi adhikari se karo.' },
              { title: 'Unauthorized Online Sellers', desc: 'MRP se kaafi sasta offer = red flag. IFFCO bina ‘O’ certificate wale sellers ke khilaf legal action le chuka hai.' },
              { title: 'State Schemes Alag Cheez Hain', desc: 'Kuch states apni scheme se kisano ko alag rahat dete hain — wo bottle ke MRP ka hissa nahi, alag benefit hai.' },
              { title: 'Original vs Duplicate', desc: 'QR code scan karke asli product verify karo. Bohot sasta mila toh saavdhan rahein.' },
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
              { title: 'Cost Effective Ho Sakta Hai', desc: '₹600 ki bottle vs ₹1,350 ka DAP bag — per acre kharcha kam baith sakta hai.' },
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
            <strong>Dhyan Dein:</strong> Fine spray nozzle use karein — absorption behtar hoti hai. Coarse droplets zyadatar waste ho jaate hain.
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
                  ['Cost/Acre', '₹600 (1 bottle)', '₹1,350 (1 bag, subsidized)'],
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
              { src: 'Amazon / Flipkart', note: 'Sirf official seller se lein, ratings padh kar order karein.' },
              { src: 'Krishi Kendra / Cooperative Society', note: 'Government authorized hai — rate wahi ₹600, aur original product ki guarantee.' },
              { src: 'Local Authorized Dealer', note: 'Zyadatar kisan offline lena prefer karte hain — receipt maang kar le lein.' },
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
            <strong>Nakli Se Bacho:</strong> Original packaging ka QR code hamesha scan karein. Bohot sasta rate dikhe toh saavdhan rahein. Fertilizer ke liye loan chahiye toh <Link href="/articles/KisanCreditCardOnlineApply2026" className="underline font-bold">KCC guide</Link> padh lein.
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
          <SH>Bottle Kharidne Se Pehle Mitti Ka Hisaab Kar Lo</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ek sawaal jo bahut kam kisan poochte hain: mere khet ko phosphorus chahiye bhi ya nahi? DAP ka &lsquo;P&rsquo; phosphorus hi hai — aur agar mitti mein wo pehle se kaafi hai, to ₹600 ki bottle ho ya ₹1,350 ki bori, dono ka paisa aadha barbaad ja raha hai. Ye andaaze se nahi, test se pata chalta hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Aur test <strong>free hai</strong>. Soil Health Card scheme ke under sarkar aapki mitti ke 12 parameters test karti hai — N, P, K sab isme aate hain — aur 3-4 hafte mein card ban jaata hai jisme likha hota hai ki kis khaad ki kitni zaroorat hai. Portal <strong>soilhealth.dac.gov.in</strong> hai, aur July 2026 tak desh mein 25.89 crore se zyada cards ban chuke hain — matlab ye koi nayi-navéli cheez nahi, system chal raha hai. Sample kaise dena hai aur card ka report kaise padhna hai, iska poora tarika humne{' '}
            <Link href="/articles/soil-health-card-complete-guide-2026" className="underline font-bold text-green-700 dark:text-green-400">Soil Health Card guide</Link> mein likha hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Seedha faayda samjho: card ke hisaab se khaad daaloge to ho sakta hai nano DAP ki 2 bottle ki jagah 1 hi kaafi ho, ya granular DAP ki matra kam ho jaye. Test free, bachat asli. Pehle card, phir kharidari — ye order ulta mat karo.
          </p>
        </section>

        <section className="mb-8">
          <SH>&ldquo;Khad Yojana Ka Paisa&rdquo; Wale Message Se Bach Ke</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Khaad ke rate search karne wale kisano ko WhatsApp par ek aur cheez milti hai — &ldquo;PM Kisan Khad Yojana ke ₹11,000 aapke khaate me aane wale hain, link par click karke OTP daalo.&rdquo; Saaf baat: <strong>is naam ki koi alag scheme hai hi nahi.</strong> Ye figure blogs ne PM Kisan ke ₹6,000 aur ek kalpanik fertilizer subsidy ko jod kar bana diya. Khaad par subsidy asli hai, par wo aapke khaate me nahi aati — wo dukaan ke rate me hi ghuli hoti hai. Isliye DAP ki bori ₹1,350 me milti hai jabki uski asli laagat ₹3,000+ hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Aur OTP? Kisi bhi sarkari subsidy ke liye kisi ko OTP batane ki zaroorat kabhi nahi padti. OTP diya to khaate se paisa gaya. Agar galti ho chuki hai to der mat karo — <strong>1930</strong> par call karo ya <strong>cybercrime.gov.in</strong> par shikayat darj karo, aur apne bank ko turant batao. Is poore ₹11,000 wale jhooth ki tafseel humne{' '}
            <Link href="/yojana/pm-kisan-khad-yojana-11000-sach" className="underline font-bold text-green-700 dark:text-green-400">alag article</Link> mein kholi hai — ghar me koi PM Kisan wala ho to unhe bhi padhwa dena.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Nano DAP Par Aapke Sawaal, Seedhe Jawab
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Nano DAP FAQ 2026 — Verified Answers" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Nano DAP Replacement Nahi, Top-Up Hai</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Sabse mehengi galti yahi hoti hai ki 500 ml ki bottle ko bori wale DAP ka badal maan liya jaye.
            Foliar spray patti se absorb hota hai, mitti ka phosphorus stock nahi bharta — isliye ise basal dose
            ke saath chalayein, uski jagah nahi. Kharidne se pehle itna karein:
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
          icon=""
          title="Apni Fasal Ki Income Calculate Karo"
          desc="MSP income, crop profit, KCC EMI — sab free calculators se"
          primaryCta={{ href: '/calculator/msp-income', label: 'MSP Calculator →' }}
          secondaryCta={{ href: '/calculator', label: 'Sab Utilities' }}
        />

        <SourcesSection
          checkedOn={MODIFIED}
          sources={[
            { label: 'IFFCO (iffco.in)', href: 'https://www.iffco.in', note: 'Nano DAP ka official MRP, product specification aur dealer network' },
            { label: 'IFFCO Bazar / apna nazdeeki sahakari samiti kendra', note: 'asli bottle wahi milti hai — price table isi ke rates par aadharit hai' },
          ]}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} bioKey="NanoDap500mlPriceInIndia2026" />
        <BottomNav extraLinks={[
          { href: '/articles/soil-health-card-complete-guide-2026', l: 'Soil Card' },
          { href: '/articles/KisanCreditCardOnlineApply2026', l: 'KCC Guide' },
          { href: '/calculator/crop-profit', l: 'Crop Profit' },
        ]} />
        <Disclaimer k="NanoDap500mlPriceInIndia2026" />
      </div>
    </>
  );
}
