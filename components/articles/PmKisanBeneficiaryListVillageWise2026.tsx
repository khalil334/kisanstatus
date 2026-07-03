'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-beneficiary-list-2026', title: 'Approved Recipients Roster', emoji: '📋' },
  { slug: 'pm-kisan-ekyc-online-2026', title: 'Digital Verification Guide', emoji: '🔐' },
  { slug: 'pm-kisan-rejected-list-2026', title: 'Rejected List Fix', emoji: '❌' },
  { slug: 'pm-kisan-registration-online-2026', title: 'New Enrollment Guide', emoji: '📝' },
  { slug: 'pm-kisan-land-seeding-status-check', title: 'Land Seeding Fix', emoji: '🌾' },
  { slug: 'pm-kisan-name-correction-online-2026', title: 'Name Correction Guide', emoji: '✏️' },
];

const FAQS_DATA = [
  {
    q: 'Gram panchayat roster mein sabhi farmers hote hain ya sirf kuch?',
    a: 'Sirf ACTIVE beneficiaries dikhte hain — jo registered, eligible, aur currently payment receive kar rahe hain. Rejected, deactivated ya pending farmers nahi dikhte. Naam nahi hona = rejected nahi. Individually Beneficiary Status check karo.',
  },
  {
    q: 'Naye farmers ko roster mein aane mein kitna time lagta hai?',
    a: 'Registration ke baad: state verification 2-4 hafte, eKYC instant, land seeding 15-30 din. Sab complete hone ke baad next installment release mein naam aata hai. Total 30-60 din typical.',
  },
  {
    q: 'Kya dusre state ya district ki roster dekh sakte hain?',
    a: 'Haan. PM Kisan dashboard public hai. Koi bhi kisi bhi state, district, block, village ki roster dekh sakta hai. Government transparency ke liye yeh open rakhti hai.',
  },
  {
    q: 'Roster mein naam hai lekin payment nahi aayi?',
    a: 'Naam hona aur payment aana alag cheezein hain. Payment ke liye bank NPCI seeding, sahi IFSC code, aur eKYC complete chahiye. Payment failed guide padho — 8 reasons explain hain.',
  },
  {
    q: 'Gaon ka naam English mein nahi mil raha dashboard par?',
    a: 'Portal par village names English transliteration mein hote hain. Apne gaon ka naam Hindi se English mein convert karke search karo. Ya partial naam type karo — suggestions aa jaayenge.',
  },
  {
    q: 'PDF download ka option nahi dikh raha?',
    a: 'Direct PDF button nahi hai portal par. Workaround: Ctrl+P (PC) ya browser Print → Save as PDF. Mobile par Share → Print → Save as PDF. Ya full page screenshots lo.',
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
      {/* Header */}
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Village Wise Roster</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Gram Panchayat List</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Village Wise Beneficiary List 2026: Apne Gaon Ki Poori Roster Dekho + PDF Download
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 10 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/pm-kisan-beneficiary-list-village-wise-2026.webp'}
            alt="PM Kisan village wise beneficiary list gram panchayat roster 2026 — online check and PDF download"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Gram Panchayat Roster 2026 — Gaon Ki Poori List Online Check Karo
          </p>
        </div>

        {/* Field Hook */}
        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-blue-800 dark:text-blue-300 mb-2">Sarpanch Ne Jo Kiya — Woh Aap Bhi Kar Sakte Ho</h2>
          <p className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
            Bihar ke ek sarpanch ne apne gaon ki gram panchayat roster check ki toh pata chala ki <strong>23 eligible cultivators registered hi nahi the.</strong> Unhone drive karwaya, sab register hue, agli installment mein sabko paisa mila. Yeh roster sirf apna naam check karne ke liye nahi — <strong>poore gaon ki help karne ke liye bhi hai.</strong>
          </p>
        </div>

        {/* Section: 5 Steps */}
        <section className="mb-8">
          <SH>Gram Panchayat Roster Dekhne Ka Tarika</SH>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholo → upar <strong>Dashboard</strong> click karo</SI>
            <SI n={2}>Left side dropdown se <strong>State</strong> select karo</SI>
            <SI n={3}><strong>District</strong> → phir <strong>Sub-District/Tehsil/Block</strong></SI>
            <SI n={4}><strong>Village</strong> select karo — naam English mein hoga</SI>
            <SI n={5}>Poori roster screen par aa jaayegi — <strong>Ctrl+F</strong> se naam dhundho</SI>
          </StepList>
          <IB>
            <strong>Mobile Par PDF:</strong> Browser menu (3 dots) → Share → Print → Save as PDF. Ya 2-3 full page screenshots lo.
          </IB>
        </section>

        {/* Section: Search Tips */}
        <section className="mb-8">
          <SH>Naam Dhundhne Ke Tarike — Computer Vs Mobile</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-3">💻 Computer Par</h3>
              <ul className="space-y-2 text-xs text-[var(--color-text-muted)]">
                <li className="flex gap-2"><span className="text-green-600 dark:text-green-400">✓</span> Ctrl+F dabao — search box khulega</li>
                <li className="flex gap-2"><span className="text-green-600 dark:text-green-400">✓</span> Naam type karo — matches highlight honge</li>
                <li className="flex gap-2"><span className="text-green-600 dark:text-green-400">✓</span> Father ka naam ya partial naam bhi chalega</li>
                <li className="flex gap-2"><span className="text-green-600 dark:text-green-400">✓</span> Ctrl+P → Save as PDF for full roster</li>
              </ul>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <h3 className="font-black text-[var(--color-text)] text-sm mb-3">📱 Mobile Par</h3>
              <ul className="space-y-2 text-xs text-[var(--color-text-muted)]">
                <li className="flex gap-2"><span className="text-blue-600 dark:text-blue-400">✓</span> Chrome: 3 dots → Find in page</li>
                <li className="flex gap-2"><span className="text-blue-600 dark:text-blue-400">✓</span> Naam type karo — yellow highlight</li>
                <li className="flex gap-2"><span className="text-blue-600 dark:text-blue-400">✓</span> Screenshot lo — WhatsApp se share karo</li>
                <li className="flex gap-2"><span className="text-blue-600 dark:text-blue-400">✓</span> Desktop mode on agar roster na dikhe</li>
              </ul>
            </div>
          </div>
          <WB>
            <strong>Tip:</strong> Gaon ka naam Hindi mein yaad hai lekin portal par English mein hai? Partial naam type karo — suggestions aa jaayenge. Ya parent article mein state link se directly dashboard jaao.
          </WB>
        </section>

        {/* Section: State Links */}
        <section className="mb-8">
          <SH>State Wise Direct Links — 36 States & UTs</SH>
          <p className="text-[var(--color-text-muted)] text-sm mb-4">Apna state select karo — dashboard directly khulega:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {STATES_LIST.map(([icon, name, slug]) => (
              <Link
                key={slug}
                href={`/beneficiary-list/${slug}`}
                className="flex items-center gap-2 p-3 bg-[var(--color-card)] border border-green-200 dark:border-green-800 rounded-xl text-xs font-semibold text-green-800 dark:text-green-300 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              >
                <span>{icon}</span>{name}
              </Link>
            ))}
          </div>
        </section>

        {/* Section: 5 Reasons Not In Roster */}
        <section className="mb-8">
          <SH>Roster Mein Naam Nahi — 5 Reasons + Fix</SH>
          <div className="space-y-3">
            {[
              { reason: 'Naam galat spelling se register hua', fix: 'Naam Correction karo — Aadhaar jaisi exact spelling daalo.', href: '/articles/pm-kisan-name-correction-online-2026' },
              { reason: 'eKYC nahi hui', fix: 'OTP verify karo — 24-48 ghante mein roster mein naam aayega.', href: '/articles/pm-kisan-ekyc-online-2026' },
              { reason: 'Land seeding pending', fix: 'Patwari se Khasra update → Block office form bharo.', href: '/articles/pm-kisan-land-seeding-status-check' },
              { reason: 'State verification pending', fix: '2-4 hafte wait. 60 din baad bhi nahi toh Block Office jaao.', href: '/articles/pm-kisan-registration-online-2026' },
              { reason: 'Account deactivated', fix: 'Block Agriculture Officer se reactivation form bharo.', href: '/articles/pm-kisan-correction-deactivate-block-guide-2026' },
            ].map(({ reason, fix, href }) => (
              <div key={reason} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4 shadow-sm">
                <p className="font-bold text-[var(--color-text)] text-sm mb-2">❓ {reason}</p>
                <p className="text-xs text-green-800 dark:text-green-300 mb-2"><strong>FIX:</strong> {fix}</p>
                <Link href={href} className="text-xs font-bold text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">Detailed Guide →</Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Village Wise Roster FAQ 2026 — Verified Answers" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in/Dashboard.aspx"
          label="PM Kisan Dashboard — Gram Panchayat Roster"
          guide="Abhi Roster Dekho"
          guideHref="/articles/pm-kisan-beneficiary-list-2026"
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
          { href: '/articles/pm-kisan-beneficiary-list-2026', l: '📋 Full Roster' },
          { href: '/articles/pm-kisan-rejected-list-2026', l: '❌ Rejected Fix' },
          { href: '/beneficiary-list', l: '🗺️ All States' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}