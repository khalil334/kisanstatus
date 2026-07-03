'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-01-10T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'kisan-credit-card-online-apply-2026', title: 'KCC Online Apply Guide', emoji: '💳' },
  { slug: 'pm-kisan-ekyc-online-2026', title: 'Digital Verification', emoji: '🔐' },
  { slug: 'pmfby-crop-insurance-2026', title: 'Crop Insurance Claim', emoji: '🛡️' },
  { slug: 'agristack-kya-hai', title: 'Digital Cultivator Identity', emoji: '🆔' },
  { slug: 'pm-kisan-payment-failed-status-2026', title: 'Payment Failed Fix', emoji: '💸' },
  { slug: 'nano-dap-500ml-price-in-india-2026', title: 'Nano DAP Price Guide', emoji: '🌱' },
];

const FAQS_DATA = [
  {
    q: 'KCC aur normal agricultural loan mein kya farak hai?',
    a: 'KCC revolving credit hai — limit set hoti hai ek baar, jab chaaho withdraw karo, jab chaaho wapas karo. Normal term loan ek baar milta hai fixed tenure mein. KCC flexible hai seasonal expenses ke liye, term loan bade investments (tractor, irrigation) ke liye.',
  },
  {
    q: 'Bina zameen ke loan mil sakta hai?',
    a: 'Haan. Tenant farmers lease agreement ya landowner certificate ke saath apply kar sakte hain. Sharecroppers bhi eligible hain kuch schemes mein. Landless farmers ke liye NABARD microfinance aur SHG loans available hain — ₹50,000-2 lakh tak.',
  },
  {
    q: 'Cooperative bank se loan lu ya SBI/PNB se — kya behtar hai?',
    a: 'Depends. Cooperative banks faster hain (5-7 din) kyunki local land records se familiar hote hain. National banks better digital services dete hain — app tracking, online repayment. Interest rate same hai dono jagah. Speed chahiye toh cooperative, tech chahiye toh national.',
  },
  {
    q: 'CSC center par loan apply karne ka charge kitna hai?',
    a: 'Nominal service charge ₹20-50 ho sakta hai form filing ke liye. Loan amount par koi commission nahi dena. Agar operator ₹500+ maange toh fraud hai — 1800-1214-060 par complaint karo.',
  },
  {
    q: 'Pichle saal KCC tha lekin renew nahi hua — ab fresh apply karna padega?',
    a: 'Haan, fresh application. Lekin agar pichla repayment clean tha toh new approval fast-track hota hai. Old KCC number dikhao bank manager ko — positive credit history system mein dikhti hai.',
  },
  {
    q: 'Tractor loan ke liye KCC pehle lena zaroori hai?',
    a: 'Zaroori nahi lekin helpful hai. Banks prefer karte hain ki borrower ka 1 saal ka repayment track record ho. KCC lekar time par repay karo, phir term loan easily approve hota hai. Direct term loan bhi possible hai agar income proof strong ho.',
  },
  {
    q: 'Loan reject ho gaya — dobara kab apply kar sakte hain?',
    a: 'Rejection reason samjho pehle. Name mismatch tha toh fix karke turant reapply. CIBIL issue tha toh 3-6 mahine wait karo score improve hone tak. Documents incomplete the toh complete set lekar jaao. Bank se written rejection letter maango — specific reason likha hota hai.',
  },
];

export default function KisanRinKahaSeLe2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Agricultural Credit Sources</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Credit Source Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Kisan Rin Kaha Se Le 2026: KCC, Bank, CSC, Cooperative — Sahukar Se Bachne Ka Rasta
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

        {/* Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/kisan-rin-kaha-se-le-2026.webp'}
            alt="Agricultural credit sources India 2026 — KCC, bank loan, CSC, cooperative society comparison"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            KCC, Bank Loan, CSC, Cooperative — Kaunsa Option Aapke Liye Sahi Hai?
          </p>
        </div>

        {/* Field Hook */}
        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 dark:border-amber-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">Gaon Mein Jo Dekha Hai</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            Bihar ke ek gaon mein. Subah 5 baje. Ek cultivator khet jaane se pehle sahukar ke ghar ruk raha tha.
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            ₹50,000 udhaar chahiye beej ke liye. Sahukar ne kaha — 3% monthly byaj. Saal ka 36%. Jab maine usse bataya ki KCC par 4% saalana mil sakta hai toh usse vishwas hi nahi hua. <strong>"Bank wale humein loan thodi dete hain"</strong> — yeh soch bahut common hai.
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            Sach yeh hai ki dete hain. Process pata hona chahiye. Yeh guide usi gap ko fill karti hai.
          </p>
        </div>

        {/* Section 1: What Is Agricultural Credit */}
        <section className="mb-8">
          <SH>Kisan Rin Kya Hota Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Specifically agriculture ke liye diya jaane wala loan. Personal loan nahi, business loan nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Beej, khaad, dawai, labour, equipment, irrigation — sab cover hota hai. Government subsidized rates par milta hai kyunki agriculture priority sector hai RBI guidelines mein. Banks ko quota fulfill karna hota hai — isliye eligible cultivators ko deny nahi kar sakte bina valid reason ke.
          </p>

          <IB>
            <strong>Eligibility Simple Hai:</strong> Zameen malik, tenant farmer, sharecropper, SHG member — sab eligible hain. 2 bigha se lekar 50 bigha tak. Size matter nahi karta, verified cultivation matter karta hai.
          </IB>
        </section>

        {/* Section 2: Four Sources Compared */}
        <section className="mb-8">
          <SH>4 Jagah Se Rin Mil Sakta Hai — Comparison</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ek hi option nahi hai. Char sources hain — har ek ka apna advantage hai.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Source</th>
                  <th className="p-3 text-left">Best For</th>
                  <th className="p-3 text-left">Rate</th>
                  <th className="p-3 text-left">Speed</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['KCC (Any Bank)', 'Seasonal crop expenses', '4% effective', '7-15 din'],
                  ['Term Loan (SBI/PNB/BOB)', 'Tractor, irrigation, infrastructure', '7-11%', '15-30 din'],
                  ['CSC Center', 'Remote areas, no bank nearby', 'Same as bank', '10-20 din'],
                  ['Cooperative / PACS', 'Small amounts, quick local access', '8-12%', '3-7 din'],
                ].map(([source, best, rate, speed], i) => (
                  <tr key={source} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-green-50/40 dark:bg-green-900/10'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{source}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{best}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-green-700 dark:text-green-400 font-bold">{rate}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: KCC Deep Dive */}
        <section className="mb-8">
          <SH>Kisan Credit Card — Sabse Pehla Option</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bank manager se pehla sawaal yehi aayega — <em>"KCC hai?"</em>
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Nahi hai toh yeh sabse pehle banwao. Revolving credit facility hai — ek baar limit set, jab chaaho use karo. Fasal becho, wapas karo, phir nikalo. Seasonal farming ke liye perfect.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-1">4% Effective Rate</p>
              <p className="text-xs text-[var(--color-text-muted)]">Base 7% + 3% subvention on prompt repayment</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-1">₹2 Lakh Collateral-Free</p>
              <p className="text-xs text-[var(--color-text-muted)]">CGTMSE se ₹5 lakh tak possible</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">ATM Card Included</p>
              <p className="text-xs text-[var(--color-text-muted)]">Direct cash withdrawal from ATM</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <p className="font-black text-purple-800 dark:text-purple-300 text-sm mb-1">₹50K Accident Cover</p>
              <p className="text-xs text-[var(--color-text-muted)]">Free insurance bundled with card</p>
            </div>
          </div>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Apply Kaise Karein</h3>
          <StepList>
            <SI n={1}>Nazdeeki bank branch jaao — SBI, PNB, BOB, Gramin Bank koi bhi</SI>
            <SI n={2}>Loan officer se milo, KCC form maango</SI>
            <SI n={3}>Documents submit karo — Aadhaar, PAN, Khatauni, photos, passbook</SI>
            <SI n={4}>Land verification hoga — 7-15 din</SI>
            <SI n={5}>Approval par passbook + ATM card milega</SI>
          </StepList>

          <WB>
            <strong>PM Kisan Beneficiary Ho?</strong> Approval fast-track hota hai kyunki data already verified hai. eKYC complete hai toh aur bhi tez. Pehle <Link href="/articles/pm-kisan-ekyc-online-2026" className="underline font-bold">digital verification</Link> karwa lo agar pending hai.
          </WB>
        </section>

        {/* Section 4: Term Loans */}
        <section className="mb-8">
          <SH>Bade Kaam Ke Liye — Term Loan</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Tractor, drip irrigation, greenhouse, warehouse — yeh sab KCC se nahi hoga. Term loan chahiye.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Amount zyada, tenure lambi (3-7 saal), collateral required above ₹2 lakh. Process bhi lamba hai — 15-30 din. Par mumkin hai. Maine kai cultivators ko SBI se ₹3-5 lakh drip irrigation ke liye approve hote dekha hai.
          </p>

          <div className="space-y-3 mb-4">
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-bold text-[var(--color-text)] text-sm mb-1">Crop Loan (Short Term)</p>
              <p className="text-xs text-[var(--color-text-muted)]">Beej, khaad, pesticide. 6-12 mahine tenure. KCC ke through milta hai.</p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-bold text-[var(--color-text)] text-sm mb-1">Equipment / Infrastructure Loan</p>
              <p className="text-xs text-[var(--color-text-muted)]">Tractor, pump, irrigation system. 3-7 saal. Collateral above ₹2L.</p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-bold text-[var(--color-text)] text-sm mb-1">Allied Activities Loan</p>
              <p className="text-xs text-[var(--color-text-muted)]">Dairy, poultry, fishery, beekeeping. Unit size based limit.</p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-bold text-[var(--color-text)] text-sm mb-1">Warehouse Receipt Loan</p>
              <p className="text-xs text-[var(--color-text-muted)]">Fasal godown mein rakhkar loan. MSP price ka 75% tak milta hai.</p>
            </div>
          </div>

          <IB>
            <strong>Tip:</strong> Banks pehle KCC lene ki salah dete hain. Ek saal clean repayment = track record. Phir term loan easily approve. Dono options available ho jaate hain.
          </IB>
        </section>

        {/* Section 5: CSC & Cooperative */}
        <section className="mb-8">
          <SH>CSC Aur Cooperative — Jab Bank Door Ho</SH>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-4">CSC Center</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Gaon mein bank nahi? CSC hai. Operator trained hota hai, online form submit karta hai. locator.csc.gov.in par nearest center dhundo.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Service charge ₹20-50 nominal. Zyada maange toh fraud. Same documents chahiye jo bank mein lagte hain.
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Cooperative Society / PACS</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Local level par kaam karti hain. Officers kisanon ko personally jaante hain. Process fast — 3-7 din. Small amounts ke liye best.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Member banna padta hai pehle. Thoda paperwork hai lekin ek baar member ban gaye toh credit access smooth. Rate competitive — 8-12%.
          </p>
        </section>

        {/* Section 6: Interest Comparison */}
        <section className="mb-8">
          <SH>Sahukar Vs Sarkari Scheme — Asli Farak</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Source</th>
                  <th className="p-3 text-center">Rate</th>
                  <th className="p-3 text-center">₹2L Par Saal Ka Byaj</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-red-50 dark:bg-red-900/20">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-red-800 dark:text-red-300">Sahukar / Moneylender</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-center text-red-700 dark:text-red-400 font-bold">24-60%</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-center text-red-700 dark:text-red-400 font-bold">₹48,000-1,20,000</td>
                </tr>
                <tr className="bg-green-50 dark:bg-green-900/20">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-green-800 dark:text-green-300">KCC (Prompt Repayment)</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-center text-green-700 dark:text-green-400 font-bold">4%</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-center text-green-700 dark:text-green-400 font-bold">₹8,000</td>
                </tr>
                <tr className="bg-amber-50 dark:bg-amber-900/20">
                  <td className="p-3 border-b border-[var(--color-border)] font-medium text-amber-800 dark:text-amber-300">Bank Term Loan</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-center text-amber-700 dark:text-amber-400 font-bold">7-12%</td>
                  <td className="p-3 border-b border-[var(--color-border)] text-center text-amber-700 dark:text-amber-400 font-bold">₹14,000-24,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <DB>
            <strong>Fark Dekho:</strong> Sahukar se KCC switch karne par ₹2 lakh par saal mein ₹40,000-1,12,000 bachat. 5 saal mein ₹2-5.6 lakh. Yeh koi chhoti rakam nahi hai — tractor down payment jitni.
          </DB>
        </section>

        {/* Section 7: Documents */}
        <section className="mb-8">
          <SH>Documents — Sab Ready Rakho</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Har Case Mein Chahiye</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Aadhaar (bank-linked)</li>
                <li>✓ PAN card</li>
                <li>✓ Khatauni / Khasra / 7/12</li>
                <li>✓ Bank passbook (latest)</li>
                <li>✓ Passport photos (2-3)</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">Situation Based</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Tenant → Lease deed / NOC</li>
                <li>✓ Joint ownership → Consent letter</li>
                <li>✓ Allied activity → Vet/fishery cert</li>
                <li>✓ Equipment → Quotation / invoice</li>
                <li>✓ SHG → Group resolution letter</li>
              </ul>
            </div>
          </div>
          <WB>
            <strong>Sabse Common Rejection:</strong> Naam mismatch. Aadhaar mein "Rajesh Kumar Singh", bank mein "R.K. Singh". Chhoti difference, bada delay. Apply se pehle teeno jagah naam exactly match karwao.
          </WB>
        </section>

        {/* Section 8: Approval Tips */}
        <section className="mb-8">
          <SH>Fast Approval Ke 6 Tarike</SH>
          <div className="space-y-3">
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">01</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">PM Kisan Registration Karwao</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Verified data = fast-track processing. Banks ko cross-check nahi karna padta.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">02</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">eKYC Complete Karo</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Digital verification done = identity pre-approved. <Link href="/articles/pm-kisan-ekyc-online-2026" className="underline">Guide yahan hai</Link>.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">03</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Khatauni Latest Rakho</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Revenue department se updated copy. Purani khatauni reject hoti hai aksar.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">04</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Bank Account Active Rakho</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Transaction history achhi honi chahiye. Dormant account = red flag.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">05</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Planting Season Se Pehle Apply</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Peak season mein banks overloaded. May-June best time for Kharif prep.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <span className="text-green-600 dark:text-green-400 font-black text-lg shrink-0">06</span>
              <div>
                <p className="font-bold text-[var(--color-text)] text-sm">Subah 10-11 Baje Branch Jaao</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Officers fresh. Dopahar rush. Sham ko closing pressure. Timing matters.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Real Sawal — Seedhe Jawaab
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Agricultural Credit FAQ 2026 — Ground-Level Verified Answers" />
        </section>

        {/* Conclusion */}
        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Bottom Line</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Sahukar last resort hai. First resort government-backed credit hona chahiye. Process thoda lamba hai shuru mein — par ek baar KCC mil gaya toh zindagi badal jaati hai.
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>Khatauni update karwao</li>
            <li>Aadhaar-bank name match karwao</li>
            <li>Nazdeeki bank ya CSC jaao</li>
            <li>KCC apply karo pehle</li>
            <li>Time par repay karo — limit badhegi</li>
          </ol>
        </div>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Portal — Beneficiary Verification"
          guide="Apna Status Check Karo"
          guideHref="/articles/pm-kisan-ekyc-online-2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="🏦"
          title="Apni EMI Calculate Karo"
          desc="KCC ya term loan ki monthly payment jaano — bank jaane se pehle prepared raho"
          primaryCta={{ href: '/calculator/kcc-loan-emi', label: '🏦 EMI Calculator →' }}
          secondaryCta={{ href: '/calculator', label: '🧮 Sab Utilities' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/kisan-credit-card-online-apply-2026', l: '💳 KCC Guide' },
          { href: '/articles/pmfby-crop-insurance-2026', l: '🛡️ Crop Insurance' },
          { href: '/calculator/kcc-loan-emi', l: '🧮 EMI Calculator' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}