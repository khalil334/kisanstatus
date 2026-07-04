'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-02-10T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-complete-guide', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'pm-kisan-beneficiary-list-village-wise-2026', title: 'Village Wise Roster Guide', emoji: '🏘️' },
  { slug: 'pm-kisan-24vi-kist', title: '24vi Installment Status', emoji: '📅' },
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Generated Meaning', emoji: '💳' },
  { slug: 'kisan-credit-card-online-apply-2026', title: 'KCC Credit Card Guide', emoji: '💰' },
  { slug: 'mandi-bhav-today', title: 'Aaj Ka Mandi Bhav', emoji: '📈' },
];

const FAQS_DATA = [
  {
    q: 'Approved recipients list mein naam kaise check karein?',
    a: 'pmkisan.gov.in → Farmers Corner → Beneficiary Status → UID ya Mobile number enter karo → Get Data click karo. Status aur roster mein naam dikh jaayega. "Active" = installment aayegi.',
  },
  {
    q: 'Village wise roster kaise dekhen?',
    a: 'pmkisan.gov.in → Dashboard → State select → District → Block → Village. Poori list screen par aa jaayegi. Ctrl+F (PC) ya browser search se naam dhundho. PDF save karna ho toh Print → Save as PDF.',
  },
  {
    q: 'Roster mein naam nahi hai toh kya karein?',
    a: 'Pehle Beneficiary Status check karo decline reason ke liye. Common reasons: digital verification pending, land record linking nahi, naam mismatch, duplicate enrollment. Specific problem fix karo — 15-30 din mein naam aa jaayega.',
  },
  {
    q: 'Naam roster mein hai par payment nahi aayi — kyun?',
    a: 'Naam hona aur payment aana alag cheez hai. Payment ke liye NPCI seeding, sahi IFSC code, aur active bank account chahiye. FTO Generated guide padho ya helpline 155261 par call karo.',
  },
  {
    q: 'Roster mein naam aane mein kitna time lagta hai?',
    a: 'Enrollment ke baad: State verification 2-4 hafte, digital verification instant, land record linking 15-30 din. Sab complete hone ke baad next tranche cycle mein naam aata hai.',
  },
  {
    q: 'Kya dusre gaon ki roster dekh sakte hain?',
    a: 'Haan. Dashboard par kisi bhi state, district, block, village ki roster publicly accessible hai. Koi restriction nahi. Transparency ke liye government ne yeh feature diya hai.',
  },
  {
    q: 'Village roster mein kaafi naam nahi dikh rahe?',
    a: 'Roster sirf active approved recipients dikhati hai. Declined, deactivated, ya pending log nahi dikhte. Iska matlab unka naam permanently hat gaya — application abhi process mein hai ya fix pending hai.',
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
            <span className="text-white font-bold">Approved Recipients Roster</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Eligible Farmers Roster</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Approved Recipients Roster 2026: Naam Check Karo, Village Wise List Dekho, PDF Download
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

        {/* IMAGE: Hero — Only image in this article */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/pm-kisan-beneficiary-list-village-wise-2026.webp'}
            alt="PM Kisan approved recipients roster 2026 — village wise list check, PDF download guide"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Approved Recipients Roster 2026 — Apna Naam Check Karo
          </p>
        </div>

        {/* Quick Check */}
        <div className="my-6 p-5 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-green-800 dark:text-green-300 mb-3">2 Minute Mein Naam Check Karo</h2>
          <StepList>
            <SI n={1}>Mobile ya computer par <strong>pmkisan.gov.in</strong> kholo</SI>
            <SI n={2}><strong>Farmers Corner</strong> menu tap karo</SI>
            <SI n={3}><strong>Beneficiary Status</strong> select karo</SI>
            <SI n={4}>UID Number ya Mobile Number enter karo</SI>
            <SI n={5}><strong>Get Data</strong> dabao — naam aur status dikh jaayega</SI>
          </StepList>
          <IB>
            <strong>"Active"</strong> = roster mein ho, installment aayegi. <strong>"Declined"</strong> = problem hai, neeche wali guide padho.
          </IB>
        </div>

        {/* Section: What Is Roster */}
        <section className="mb-8">
          <SH>Approved Recipients Roster Kya Hoti Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Sirf verified aur eligible cultivators is roster mein aate hain. Government har tranche se pehle update karti hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Naam hona = paisa aayega. Nahi hona = koi na koi problem hai. Enrollment ke baad <strong>state verification + land record linking + digital verification</strong> teeno complete hone ke baad hi naam aata hai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <span className="text-3xl block mb-2">✅</span>
              <p className="font-black text-sm text-green-800 dark:text-green-300">Active</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Naam hai, installment aayegi</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-center">
              <span className="text-3xl block mb-2">❌</span>
              <p className="font-black text-sm text-red-800 dark:text-red-300">Declined</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Problem hai — fix karo</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-center">
              <span className="text-3xl block mb-2">⏳</span>
              <p className="font-black text-sm text-amber-800 dark:text-amber-300">Pending</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Verification chal rahi hai</p>
            </div>
          </div>
        </section>

        {/* Section: Village Wise */}
        <section className="mb-8">
          <SH>Village Wise Roster Kaise Dekhen?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Apne poore gaon ki list dekhni hai? Portal par yeh feature available hai.
          </p>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> → upar menu mein <strong>Dashboard</strong> click karo</SI>
            <SI n={2}>Left side mein <strong>State</strong> select karo</SI>
            <SI n={3}><strong>District</strong> → phir <strong>Sub-District/Block</strong></SI>
            <SI n={4}><strong>Village</strong> select karo — apna gaon dhundho</SI>
            <SI n={5}>Poori roster screen par aa jaayegi — <strong>Ctrl+F</strong> se naam search karo</SI>
            <SI n={6}>PDF save: Browser Print → <strong>Save as PDF</strong></SI>
          </StepList>
          <WB>
            <strong>Mobile Par:</strong> Share button → Print → Save as PDF. Ya screenshot lekar gallery mein save karo.
          </WB>
        </section>

        {/* Section: 7 Rejection Reasons */}
        <section className="mb-8">
          <SH>Naam Nahi Hai — 7 Common Reasons + Fix</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Declined dikh raha hai? Ek ek reason check karo:
          </p>
          <div className="space-y-3">
            {[
              { n: 1, reason: 'Digital Verification Incomplete', desc: '60% cases mein yahi hota hai. UID OTP authentication nahi hui.', fix: 'pmkisan.gov.in → verification → UID → OTP verify. Free, 5 minute.', color: 'red' },
              { n: 2, reason: 'Land Record Linking Nahi', desc: '"Land Seeding No" dikhta hai. Zameen portal se link nahi.', fix: 'Patwari se Khasra-Khatauni update → BAO application.', color: 'orange' },
              { n: 3, reason: 'Naam Mismatch', desc: 'UID mein naam alag, bank mein alag. System decline kar deta hai.', fix: 'Farmers Corner → Name Correction → UID jaisa naam daalo.', color: 'yellow' },
              { n: 4, reason: 'NPCI Mapper Missing', desc: 'Bank account mein UID link nahi. NPCI seeding missing.', fix: 'Bank branch → Aadhaar seeding form → 3-7 din fix.', color: 'blue' },
              { n: 5, reason: 'Duplicate Enrollment', desc: 'Same UID se do baar enrollment ho gaya.', fix: 'Helpline 155261 par call → duplicate entry remove karwao.', color: 'purple' },
              { n: 6, reason: 'Ineligible Category', desc: 'Govt employee, income tax filer, MP/MLA — eligible nahi.', fix: 'Eligibility dobara check. Galat decline = Agriculture office appeal.', color: 'gray' },
              { n: 7, reason: 'State Verification Pending', desc: 'Enrollment hua lekin state ne abhi verify nahi kiya.', fix: '2-4 hafte wait. Phir bhi nahi = Block Agriculture Officer contact.', color: 'teal' },
            ].map(({ n, reason, desc, fix, color }) => (
              <div key={n} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4 shadow-sm">
                <div className="flex items-start gap-3 mb-2">
                  <span className={`bg-${color}-100 dark:bg-${color}-900/30 text-${color}-700 dark:text-${color}-300 text-xs font-black w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5`}>{n}</span>
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

        {/* Section: Status Meanings */}
        <section className="mb-8">
          <SH>Har Status Ka Matlab</SH>
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
                  ['✅ Active / Approved', 'Roster mein hai — installment aayegi', 'Wait karo'],
                  ['❌ Declined', 'Application fail — reason check karo', 'Fix karo'],
                  ['⏳ Under Verification', 'State review chal rahi hai', '2-4 hafte wait'],
                  ['💳 DBT Failed', 'Approved, payment nahi pahunchi', 'Bank/NPCI fix'],
                  ['🔄 Pending', 'Enrollment done, verification baaki', 'Wait karo'],
                  ['🚫 Deactivated', 'Pehle active tha, issue aaya', 'Block office contact'],
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

        {/* Section: State Links Grid */}
        <section className="mb-8">
          <SH>State Wise Roster — Quick Links (36 States & UTs)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Apna state select karo — complete roster page khulega:
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

        {/* Section: Tranche Update + Prep */}
        <section className="mb-8">
          <SH>24vi Ke Liye Tayyar Ho</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
              <p className="text-sm font-black text-green-800 dark:text-green-300 mb-1">✅ 23vi — Released</p>
              <p className="text-xs text-green-700 dark:text-green-400">9.44 Crore+ ko ₹2,000 mil chuke.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 dark:border-amber-700 rounded-xl">
              <p className="text-sm font-black text-amber-800 dark:text-amber-300 mb-1">⏳ 24vi — October 2026 Expected</p>
              <p className="text-xs text-amber-700 dark:text-amber-400">Roster mein naam hona chahiye. Checklist follow karo.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: '📚', title: 'Complete Guide', desc: 'Sab problems ka ek jagah hal', href: '/articles/pm-kisan-complete-guide', cta: 'Master Guide →' },
              { icon: '💳', title: 'FTO Status', desc: 'Paisa kab aayega samjho', href: '/articles/pm-kisan-fto-generated-ka-matlab-kya-hai', cta: 'FTO Guide →' },
              { icon: '📅', title: '24vi Kist Status', desc: 'Expected date + eligibility', href: '/articles/pm-kisan-24vi-kist', cta: '24vi Guide →' },
              { icon: '🏘️', title: 'Village Wise Roster', desc: 'Gaon ki poori list dekho', href: '/articles/pm-kisan-beneficiary-list-village-wise-2026', cta: 'Village List →' },
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
          <FAQBlock faqs={FAQS_DATA} caption="Approved Recipients Roster FAQ 2026 — Verified Answers" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="PM Kisan Beneficiary Status — Official Portal"
          guide="Abhi Naam Check Karo"
          guideHref="/articles/pm-kisan-complete-guide"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="📋"
          title="Apni Installment Track Karo"
          desc="Kitni kist aayi, kitni pending — complete history jaano"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-beneficiary-list-village-wise-2026', l: '🏘️ Village Roster' },
          { href: '/articles/pm-kisan-complete-guide', l: '📚 Master Guide' },
          { href: '/articles/pm-kisan-24vi-kist', l: '📅 24vi Status' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}