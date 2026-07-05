'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-02-10T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List Check', emoji: '📋' },
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status', emoji: '📅' },
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Generated Meaning', emoji: '💳' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Credit Card Guide', emoji: '💰' },
  { slug: 'mandi-bhav-today', title: 'Aaj Ka Mandi Bhav', emoji: '📈' },
];

const FAQS_DATA = [
  {
    q: 'Beneficiary list mein apna naam kaise check karein?',
    a: 'pmkisan.gov.in kholo → Farmers Corner → Beneficiary Status → Aadhaar ya mobile daalo → Get Data. Naam aur status dikh jayega.',
  },
  {
    q: 'Gaon ki poori list kaise dekhen?',
    a: 'Portal par Dashboard → State → District → Block → Village select karo. Poori list aa jayegi. Ctrl+F se naam dhundho.',
  },
  {
    q: 'Naam nahi hai toh kya karun?',
    a: 'Pehle status check karo — kyun reject hua. eKYC, land seeding, naam mismatch — jo bhi problem hai fix karo. 15-30 din mein naam aa jayega.',
  },
  {
    q: 'Naam hai par payment nahi aayi?',
    a: 'Naam aur payment alag cheez hai bhai. NPCI seeding, sahi IFSC, active account — teeno chahiye. FTO guide padho ya 155261 par call karo.',
  },
  {
    q: 'Naam aane mein kitna time lagta hai?',
    a: 'Registration ke baad state verification 2-4 hafte, eKYC instant, land seeding 15-30 din. Sab complete hone par agli kist mein naam aata hai.',
  },
  {
    q: 'Dusre gaon ki list dekh sakte hain?',
    a: 'Haan. Dashboard par kisi bhi state/district/block/village ki list publicly available hai. Transparency ke liye government ne yeh feature diya hai.',
  },
  {
    q: 'List mein kaafi naam nahi dikh rahe?',
    a: 'Sirf active beneficiaries dikhte hain. Rejected, deactivated, pending log nahi dikhte. Unka process chal raha hai ya koi fix pending hai.',
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

export default function PmKisanBeneficiaryListVillageWise2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Village Wise Beneficiary List</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Gaon Ki Poori List</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Village Wise Beneficiary List 2026: Gaon Ki Poori List Dekho, Naam Check Karo, PDF Download
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

        {/* IMAGE: Hero — Only Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/pm-kisan-beneficiary-list-village-wise-2026.webp'}
            alt="PM Kisan village wise beneficiary list 2026 — gaon ki poori list check karo"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Village Wise Beneficiary List 2026 — Apne Gaon Ki List Dekho
          </p>
        </div>

        {/* Quick Check */}
        <div className="my-6 p-5 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-green-800 dark:text-green-300 mb-3">2 Minute Mein Naam Check Karo</h2>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholo</SI>
            <SI n={2}><strong>Farmers Corner</strong> tap karo</SI>
            <SI n={3}><strong>Beneficiary Status</strong> select karo</SI>
            <SI n={4}>Aadhaar ya Mobile Number daalo</SI>
            <SI n={5}><strong>Get Data</strong> dabao — status dikh jayega</SI>
          </StepList>
          <IB>
            <strong>"Active"</strong> = kist aayegi. <strong>"Rejected"</strong> = problem hai, neeche padho.
          </IB>
        </div>

        <section className="mb-8">
          <SH>Beneficiary List Kya Hoti Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Sirf verified kisan is list mein aate hain bhai. Government har kist se pehle update karti hai. Naam hona matlab paisa aayega. Nahi hai matlab koi problem hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Registration ke baad teen cheezein zaroori hain — state verification, land seeding, aur eKYC. Teeno complete hone par hi naam aata hai.
          </p>
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <span className="text-3xl block mb-2">✅</span>
              <p className="font-black text-sm text-green-800 dark:text-green-300">Active</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Kist aayegi</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-center">
              <span className="text-3xl block mb-2">❌</span>
              <p className="font-black text-sm text-red-800 dark:text-red-300">Rejected</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Fix karo</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-center">
              <span className="text-3xl block mb-2">⏳</span>
              <p className="font-black text-sm text-amber-800 dark:text-amber-300">Pending</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Wait karo</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Village Wise List Kaise Dekhen?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Poore gaon ki list dekhni hai? Portal par free mein available hai.
          </p>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> → <strong>Dashboard</strong> click karo</SI>
            <SI n={2}><strong>State</strong> select karo</SI>
            <SI n={3}><strong>District</strong> → <strong>Block</strong> choose karo</SI>
            <SI n={4}><strong>Village</strong> select karo — apna gaon</SI>
            <SI n={5}>List aa jayegi — <strong>Ctrl+F</strong> se naam search karo</SI>
            <SI n={6}>PDF save: Print → <strong>Save as PDF</strong></SI>
          </StepList>
          <WB>
            <strong>Mobile Par:</strong> Share → Print → Save as PDF. Ya screenshot le lo.
          </WB>
        </section>

        <section className="mb-8">
          <SH>Naam Nahi Hai — 7 Reasons + Fix</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Rejected dikh raha hai? Yeh reasons check karo:
          </p>
          <div className="space-y-3">
            {[
              { n: 1, reason: 'eKYC Complete Nahi Hui', desc: '60% cases mein yahi hota hai.', fix: 'pmkisan.gov.in → eKYC → OTP verify. 5 minute ka kaam.' },
              { n: 2, reason: 'Land Seeding Pending', desc: 'Zameen portal se link nahi hui.', fix: 'Patwari se Khatauni update karwao → BAO ko application do.' },
              { n: 3, reason: 'Naam Mismatch', desc: 'Aadhaar aur bank mein alag spelling.', fix: 'Farmers Corner → Name Correction → Aadhaar jaisa naam daalo.' },
              { n: 4, reason: 'NPCI Seeding Missing', desc: 'Bank mein Aadhaar link nahi.', fix: 'Bank jao → seeding form bharo → 3-7 din mein fix.' },
              { n: 5, reason: 'Duplicate Registration', desc: 'Same Aadhaar se do baar register.', fix: '155261 par call karo → duplicate remove karwao.' },
              { n: 6, reason: 'Eligible Nahi Ho', desc: 'Govt employee, IT filer, MP/MLA.', fix: 'Eligibility check karo. Galat reject = Agriculture office mein appeal.' },
              { n: 7, reason: 'State Verification Pending', desc: 'Registration hua, verify nahi hua.', fix: '2-4 hafte wait karo. Phir BAO se contact karo.' },
            ].map(({ n, reason, desc, fix }) => (
              <div key={n} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4 shadow-sm">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[var(--color-primary)] text-xs font-black w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-green-100 dark:bg-green-900/40">{n}</span>
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

        <section className="mb-8">
          <SH>Status Ka Matlab</SH>
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
                  ['✅ Active', 'List mein hai', 'Wait karo'],
                  ['❌ Rejected', 'Fail ho gaya', 'Reason fix karo'],
                  ['⏳ Under Verification', 'Review chal rahi hai', '2-4 hafte wait'],
                  ['💳 Payment Failed', 'Approved, payment nahi aayi', 'Bank/NPCI fix'],
                  ['🔄 Pending', 'Verification baaki', 'Wait karo'],
                  ['🚫 Deactivated', 'Pehle active tha', 'Block office jao'],
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

        <section className="mb-8">
          <SH>State Wise Quick Links (36 States & UTs)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Apna state select karo:
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

        <section className="mb-8">
          <SH>24vi Kist Ke Liye Tayyar Ho</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
              <p className="text-sm font-black text-green-800 dark:text-green-300 mb-1">✅ 23vi Kist — Released</p>
              <p className="text-xs text-green-700 dark:text-green-400">9.44 Crore+ ko ₹2,000 mil chuke.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 dark:border-amber-700 rounded-xl">
              <p className="text-sm font-black text-amber-800 dark:text-amber-300 mb-1">⏳ 24vi Kist — October 2026</p>
              <p className="text-xs text-amber-700 dark:text-amber-400">List mein naam hona chahiye.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: '📚', title: 'Complete Guide', desc: 'Sab problems ka hal', href: '/articles/PmKisanMasterGuide2026', cta: 'Master Guide →' },
              { icon: '💳', title: 'FTO Status', desc: 'Paisa kab aayega', href: '/articles/pm-kisan-fto-generated-ka-matlab-kya-hai', cta: 'FTO Guide →' },
              { icon: '📅', title: '24vi Kist', desc: 'Date + eligibility', href: '/articles/PmKisan24viKist2026', cta: '24vi Guide →' },
              { icon: '📋', title: 'Beneficiary List', desc: 'Naam check karo', href: '/articles/PmKisanBeneficiaryList2026', cta: 'List Check →' },
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

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Beneficiary List FAQ 2026" />
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
          desc="Kitni aayi, kitni pending — history jaano"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calc' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanBeneficiaryList2026', l: '📋 Beneficiary List' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
          { href: '/articles/PmKisan24viKist2026', l: '📅 24vi Kist' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}