'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-02-10T08:00:00+05:30';
const MODIFIED = '2026-07-09T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status', emoji: '📅' },
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Generated Meaning', emoji: '💳' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Credit Card Guide', emoji: '💰' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Guide', emoji: '🔐' },
  { slug: 'mandi-bhav-today', title: 'Aaj Ka Mandi Bhav', emoji: '📈' },
];

const FAQS_DATA = [
  {
    q: 'Mobile number se pm kisan beneficiary list mein naam kaise check karein?',
    a: 'Seedha pmkisan.gov.in par jao. Farmers Corner mein "Beneficiary Status" hoga. Wahan Aadhaar ki jagah apna registered mobile number daal do. OTP aayega, verify karo, aur status dikh jayega.',
  },
  {
    q: 'Gaon ki poori list kaise dekhen?',
    a: 'Dashboard option use karo portal par. State, District, Block, aur phir Village select kar lo. Poori list khul jayegi.',
  },
  {
    q: 'PM Kisan list PDF download kaise karein?',
    a: 'Official portal par village list kholne ke baad browser ka Print option use karo (Ctrl+P) aur "Save as PDF" select karo. Ya neeche diye gaye direct download button use karo.',
  },
  {
    q: 'PM Kisan list mein naam nahi aaya — ab kya karun bhai?',
    a: 'Arre ghabrao mat. Pehle check karo ki eKYC hui hai ya nahi. 60% cases mein yahi dikkat hota hai. Agar eKYC done hai, toh land seeding pending ho sakta hai. Patwari se baat karo. 15-30 din mein naam aa jayega.',
  },
  {
    q: 'Naam aane mein kitna time lagta hai?',
    a: '15 se 30 din. Bas.',
  },
];

const STATES_LIST = [
  ['🏔️', 'Uttar Pradesh', 'uttar-pradesh'],
  ['🌊', 'Bihar', 'bihar'],
  ['🌿', 'Madhya Pradesh', 'madhya-pradesh'],
  ['☀️', 'Rajasthan', 'rajasthan'],
  ['🌾', 'Maharashtra', 'maharashtra'],
  ['🐟', 'West Bengal', 'west-bengal'],
  ['🌴', 'Karnataka', 'karnataka'],
  ['🌊', 'Odisha', 'odisha'],
  ['🌞', 'Tamil Nadu', 'tamil-nadu'],
  ['🌾', 'Punjab', 'punjab'],
  ['🚜', 'Haryana', 'haryana'],
  ['🌶️', 'Andhra Pradesh', 'andhra-pradesh'],
  ['🌊', 'Kerala', 'kerala'],
  ['🌴', 'Telangana', 'telangana'],
  ['🌿', 'Gujarat', 'gujarat'],
  ['🌾', 'Assam', 'assam'],
  ['🌊', 'Jharkhand', 'jharkhand'],
  ['🏔️', 'Uttarakhand', 'uttarakhand'],
  ['🌾', 'Chhattisgarh', 'chhattisgarh'],
  ['🌊', 'Himachal Pradesh', 'himachal-pradesh'],
  ['🏔️', 'Jammu & Kashmir', 'jammu-and-kashmir'],
  ['🌿', 'Goa', 'goa'],
  ['🏔️', 'Sikkim', 'sikkim'],
  ['🌊', 'Tripura', 'tripura'],
  ['🌾', 'Meghalaya', 'meghalaya'],
  ['🌿', 'Manipur', 'manipur'],
  ['🌊', 'Nagaland', 'nagaland'],
  ['🏔️', 'Arunachal Pradesh', 'arunachal-pradesh'],
  ['🌾', 'Mizoram', 'mizoram'],
  ['🏛️', 'Delhi', 'delhi'],
  ['🌊', 'Puducherry', 'puducherry'],
  ['🏝️', 'Andaman & Nicobar', 'andaman-nicobar'],
  ['🏔️', 'Ladakh', 'ladakh'],
  ['🌊', 'Lakshadweep', 'lakshadweep'],
  ['🏛️', 'Chandigarh', 'chandigarh'],
  ['🌾', 'Dadra & Nagar Haveli', 'dadra-nagar-haveli'],
  ['🏝️', 'Daman & Diu', 'daman-diu'],
] as const;

export default function PmKisanBeneficiaryList2026({ article }: { article: ArticleMeta }) {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Beneficiary List</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Complete Beneficiary Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Beneficiary List 2026: Naam Check Karo, Village Wise List Dekho, PDF Download
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 15 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* IMAGE: Hero */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/pm-kisan-beneficiary-status-kisanstatus.webp'}
            alt="PM Kisan beneficiary list 2026 — individual status check aur village wise list"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            PM Kisan Beneficiary List 2026 — Apna Naam Check Karo + Village Wise List
          </p>
        </div>

        {/* PDF Download Buttons */}
        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={handleDownloadPDF}
            className="flex items-center justify-center gap-2 p-4 bg-green-600 hover:bg-green-700 text-white font-black rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <span className="text-xl">📥</span>
            <div className="text-left">
              <p className="text-sm">Is Page Ko PDF Mein Save Karo</p>
              <p className="text-xs opacity-90">Print → Save as PDF</p>
            </div>
          </button>
          <a
            href="https://pmkisan.gov.in/BeneficiaryList.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <span className="text-xl">📋</span>
            <div className="text-left">
              <p className="text-sm">Official List PDF Download</p>
              <p className="text-xs opacity-90">pmkisan.gov.in se download karo</p>
            </div>
          </a>
        </div>

        {/* Quick Individual Check */}
        <div className="my-6 p-5 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-green-800 dark:text-green-300 mb-3">2 Minute Mein Apna Naam Check Karo</h2>
          <StepList>
            <SI n={1}>Mobile ya computer par <strong>pmkisan.gov.in</strong> kholo</SI>
            <SI n={2}><strong>Farmers Corner</strong> menu tap karo</SI>
            <SI n={3}><strong>Beneficiary Status</strong> select karo</SI>
            <SI n={4}>Aadhaar Number ya Mobile Number enter karo</SI>
            <SI n={5}><strong>Get Data</strong> dabao — naam aur status dikh jaayega</SI>
          </StepList>
          <IB>
            <strong>"Active"</strong> = list mein ho, kist aayegi. <strong>"Rejected"</strong> = problem hai, neeche wali guide padho.
          </IB>
        </div>

        {/* SECTION 1: What is Beneficiary List */}
        <section className="mb-8">
          <SH>PM Kisan Beneficiary List Kya Hoti Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, seedhi baat karte hain. Sirf wahi kisan is list mein aate hain jinka verification pura ho gaya hai. Government har kist release karne se pehle isko update karti hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Naam hona matlab paisa aayega. Nahi hona matlab koi na koi adchkan hai. Registration ke baad <strong>state verification + land seeding + eKYC</strong> — ye teeno kaam hone ke baad hi naam aata hai. Isme 15-30 din lagte hain.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <span className="text-3xl block mb-2">✅</span>
              <p className="font-black text-sm text-green-800 dark:text-green-300">Active</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Naam hai, kist aayegi</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-center">
              <span className="text-3xl block mb-2">❌</span>
              <p className="font-black text-sm text-red-800 dark:text-red-300">Rejected</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Problem hai — fix karo</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-center">
              <span className="text-3xl block mb-2">⏳</span>
              <p className="font-black text-sm text-amber-800 dark:text-amber-300">Pending</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Verification chal rahi hai</p>
            </div>
          </div>
        </section>

        {/* SECTION 2: Village Wise List */}
        <section className="mb-8">
          <SH>🏘️ Village Wise List Kaise Dekhen? (Poore Gaon Ki List)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Apne poore gaon ki list dekhni hai? Portal par yeh feature available hai — transparency ke liye government ne diya hai.
          </p>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> → upar menu mein <strong>Dashboard</strong> click karo</SI>
            <SI n={2}>Left side mein <strong>State</strong> select karo</SI>
            <SI n={3}><strong>District</strong> → phir <strong>Sub-District/Block</strong></SI>
            <SI n={4}><strong>Village</strong> select karo — apna gaon dhundho</SI>
            <SI n={5}>Poori list screen par aa jayegi — <strong>Ctrl+F</strong> se naam search karo</SI>
            <SI n={6}>PDF save: Browser Print → <strong>Save as PDF</strong></SI>
          </StepList>
          <WB>
            <strong>📥 PDF Download Kaise Karein:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
              <li><strong>PC/Laptop:</strong> List kholne ke baad <strong>Ctrl+P</strong> dabao → "Save as PDF" select karo → Save button</li>
              <li><strong>Mobile:</strong> Share button → Print → "Save as PDF" → Download</li>
              <li>Ya upar wala <strong>green button</strong> dabao — turant PDF ban jayegi!</li>
            </ul>
          </WB>
          <IB>
            <strong>Pro Tip:</strong> Kisi bhi state/district/block/village ki list publicly accessible hai. Padosi gaon ki list bhi dekh sakte ho — comparison ke liye achha hai.
          </IB>
        </section>

        {/* SECTION 3: 7 Rejection Reasons */}
        <section className="mb-8">
          <SH>❌ Naam Nahi Hai — 7 Common Reasons + Fix</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Rejected dikh raha hai? Ek ek reason check karo — 90% cases mein yehi problems hoti hain:
          </p>
          <div className="space-y-3">
            {[
              { n: 1, reason: 'eKYC Complete Nahi Hui', desc: '60% cases mein yahi hota hai. Aadhaar OTP verification nahi hui.', fix: 'pmkisan.gov.in → eKYC → Aadhaar → OTP verify. Free hai, 5 minute ka kaam.' },
              { n: 2, reason: 'Land Seeding Nahi Hui', desc: '"Land Seeding No" dikhta hai. Zameen portal se link nahi hui.', fix: 'Patwari se Khasra-Khatauni update karwao → BAO ko application do.' },
              { n: 3, reason: 'Naam Mismatch', desc: 'Aadhaar mein naam alag, bank mein alag. System reject kar deta hai.', fix: 'Farmers Corner → Name Correction → Aadhaar jaisa naam daalo.' },
              { n: 4, reason: 'NPCI Seeding Missing', desc: 'Bank account mein Aadhaar link nahi hai. NPCI seeding missing.', fix: 'Bank branch jao → Aadhaar seeding form bharo → 3-7 din mein fix ho jayega.' },
              { n: 5, reason: 'Duplicate Registration', desc: 'Same Aadhaar se do baar registration ho gaya.', fix: 'Helpline 155261 par call karo → duplicate entry remove karwao.' },
              { n: 6, reason: 'Eligible Nahi Ho', desc: 'Government employee, income tax filer, MP/MLA — eligible nahi hote.', fix: 'Eligibility dobara check karo. Galat reject hua hai toh Agriculture office mein appeal karo.' },
              { n: 7, reason: 'State Verification Pending', desc: 'Registration hua lekin state ne abhi verify nahi kiya.', fix: '2-4 hafte wait karo. Phir bhi nahi hua toh Block Agriculture Officer se contact karo.' },
            ].map(({ n, reason, desc, fix }) => (
              <div key={n} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4 shadow-sm">
                <div className="flex items-start gap-3 mb-2">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-black w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">{n}</span>
                  <p className="font-black text-[var(--color-text)] text-sm">{reason}</p>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mb-2 pl-9">{desc}</p>
                <div className="pl-9 flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold text-xs shrink-0">FIX:</span>
                  <p className="text-xs text-green-800 dark:text-green-300 font-medium">{fix}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Status Table */}
        <section className="mb-8">
          <SH>📊 Har Status Ka Matlab</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Matlab</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['✅ Active', 'List mein hai — kist aayegi', 'Wait karo'],
                  ['❌ Rejected', 'Application fail — reason check karo', 'Fix karo'],
                  ['⏳ Under Verification', 'State review chal rahi hai', '2-4 hafte wait karo'],
                  ['💳 Payment Failed', 'Approved hai, payment nahi pahunchi', 'Bank/NPCI fix karo'],
                  ['🔄 Pending', 'Registration hua, verification baaki', 'Wait karo'],
                  ['🚫 Deactivated', 'Pehle active tha, issue aaya', 'Block office contact karo'],
                ].map(([status, meaning, action], i) => (
                  <tr key={status} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{status}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{meaning}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-medium">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ✅ SECTION 5: State Wise Links - FIXED (Ab tumhari site par khulega) */}
        <section className="mb-8">
          <SH>🗺️ State Wise List — Apna State Chunein (36 States & UTs)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Apna state select karo — state-specific page khulega jahan se aap beneficiaries count, districts aur official portal link dekh sakte ho:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {STATES_LIST.map(([icon, name, slug]) => (
              <Link
                key={slug}
                href={`/beneficiary-list/${slug}`}
                className="flex items-center gap-2 p-3 bg-[var(--color-card)] border border-green-200 dark:border-green-800 rounded-xl text-green-800 dark:text-green-300 text-xs font-semibold hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              >
                <span>{icon}</span>{name}
              </Link>
            ))}
          </div>
        </section>

        {/* SECTION 6: 24vi Kist Preparation */}
        <section className="mb-8">
          <SH>🎯 24vi Kist Ke Liye Tayyar Ho</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
              <p className="text-sm font-black text-green-800 dark:text-green-300 mb-1">✅ 23vi Kist — Released</p>
              <p className="text-xs text-green-700 dark:text-green-400">9.44 Crore+ ko ₹2,000 mil chuke hain.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 dark:border-amber-700 rounded-xl">
              <p className="text-sm font-black text-amber-800 dark:text-amber-300 mb-1">⏳ 24vi Kist — October 2026 Expected</p>
              <p className="text-xs text-amber-700 dark:text-amber-400">List mein naam hona chahiye. Checklist follow karo.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: '📚', title: 'Complete Guide', desc: 'Sab problems ka ek jagah hal', href: '/articles/PmKisanMasterGuide2026', cta: 'Master Guide →' },
              { icon: '💳', title: 'FTO Status', desc: 'Paisa kab aayega samjho', href: '/articles/pm-kisan-fto-generated-ka-matlab-kya-hai', cta: 'FTO Guide →' },
              { icon: '📅', title: '24vi Kist Status', desc: 'Expected date + eligibility', href: '/articles/PmKisan24viKist2026', cta: '24vi Guide →' },
              { icon: '🔐', title: 'eKYC Complete Karo', desc: 'Bina eKYC kist nahi milegi', href: '/articles/PmKisanEkycOnline2026', cta: 'eKYC Guide →' },
            ].map(({ icon, title, desc, href, cta }) => (
              <Link
                key={href}
                href={href}
                className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-green-300 dark:hover:border-green-700 hover:shadow-sm transition-all no-underline group focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              >
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <p className="font-black text-[var(--color-text)] text-sm group-hover:text-[var(--color-primary)] transition-colors">{title}</p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{desc}</p>
                  <p className="text-xs text-green-700 dark:text-green-400 font-bold mt-1.5">{cta}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Beneficiary List FAQ 2026 — Verified Answers" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="PM Kisan Beneficiary Status — Official Portal"
          guide="Abhi Naam Check Karo"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="📋"
          title="Apni Kist Track Karo"
          desc="Kitni kist aayi, kitni pending — complete history jaano"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
          { href: '/articles/PmKisan24viKist2026', l: '📅 24vi Kist' },
          { href: '/articles/PmKisanEkycOnline2026', l: '🔐 eKYC' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}