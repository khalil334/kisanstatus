'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-name-correction-online-2026', title: 'Name Update Guide', emoji: '✏️' },
  { slug: 'pm-kisan-ekyc-online-2026', title: 'Digital Verification', emoji: '🔐' },
  { slug: 'pm-kisan-rejected-list-2026', title: 'Application Declined Fix', emoji: '❌' },
  { slug: 'pm-kisan-payment-failed-status-2026', title: 'DBT Transfer Failed', emoji: '💸' },
  { slug: 'pm-kisan-land-seeding-status-check', title: 'Land Seeding Fix', emoji: '🌾' },
  { slug: 'pm-kisan-mobile-number-change', title: 'Mobile Number Update', emoji: '📱' },
];

const FAQS_DATA = [
  {
    q: 'Ek se zyada updates ek saath ho sakti hain?',
    a: 'Naam aur bank record saath update ho sakte hain — portal par dono options hain. Land update alag process hai — office se hota hai. Deactivation reactivation bhi separate process hai BAO ke through.',
  },
  {
    q: 'Update ke baad confirm kaise karein ki ho gayi?',
    a: 'Beneficiary Status mein updated details dikhna chahiye — 15-20 din baad check karo. Update se pehle screenshot lo current details ka — comparison easy hoga. Reference number save rakho tracking ke liye.',
  },
  {
    q: 'Kya updates free hain ya charge lagta hai?',
    a: 'Portal se sabhi updates bilkul free hain. CSC par mobile update pe nominal charge (₹20-30) lag sakta hai. Koi ₹100+ maange toh fraud hai — 155261 par complaint karo.',
  },
  {
    q: 'Naam update kiya lekin bank mein abhi bhi purana naam hai?',
    a: 'Portal update aur bank update alag processes hain. Portal par naam fix hone ke baad bank branch jaake bhi naam update karwao. Dono jagah match hona zaroori hai DBT success ke liye.',
  },
  {
    q: 'Deactivated profile online reactivate ho sakti hai?',
    a: 'Nahi. Deactivation fix sirf Block Agriculture Officer ya helpline 155261 se hoti hai. Portal sirf active profiles ko edit karne deta hai. Written application + eligibility proof submit karna padta hai.',
  },
  {
    q: 'Record block aur deactivate mein kya farak hai?',
    a: 'Deactivation = eligibility issue (govt job, income tax, land transfer). Block = fraud detection, duplicate entry, ya bank KYC expire. Deactivation BAO se fix hota hai, block scheme helpline ya bank se.',
  },
  {
    q: 'Mobile number change karne ke baad OTP nahi aa raha?',
    a: '3-7 din wait karo — new number activate hone mein time lagta hai. Agar 7 din baad bhi na aaye toh CSC jaake dobara verify karwao. Future ke liye naya number UID se bhi link karwa lo.',
  },
];

export default function PmKisanCorrectionDeactivateBlockGuide2026({ article }: { article: ArticleMeta }) {
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
            <span className="text-white font-bold">Profile Update & Reactivation</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Correction Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Profile Update, Deactivation & Block Guide 2026: Naam, Bank, Zameen — Sab Fix Karo
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 14 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/pm-kisan-correction-deactivate-block-guide-2026.webp'}
            alt="PM Kisan profile update correction deactivation reactivation guide 2026 — name bank land fix"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Profile Update, Deactivation & Block — Complete Fix Guide 2026
          </p>
        </div>

        {/* Problem Navigator */}
        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-blue-800 dark:text-blue-300 mb-3">Apni Problem Identify Karo — Direct Fix Par Jao</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { problem: 'Naam galat hai', fix: 'Section 1: Name Update', color: 'purple' },
              { problem: 'Bank record galat hai', fix: 'Section 2: Bank Update', color: 'blue' },
              { problem: 'Profile deactivated ho gayi', fix: 'Section 3: Reactivation', color: 'red' },
              { problem: 'Record block hai', fix: 'Section 4: Unblock Process', color: 'orange' },
              { problem: 'Mobile number change karna hai', fix: 'Section 5: Mobile Update', color: 'green' },
              { problem: 'Zameen ki details galat hain', fix: 'Section 6: Land Update', color: 'amber' },
            ].map(({ problem, fix, color }) => (
              <div key={problem} className={`p-3 bg-${color}-50 dark:bg-${color}-900/20 border border-${color}-200 dark:border-${color}-800 rounded-xl text-xs`}>
                <p className="font-bold text-[var(--color-text)]">❓ {problem}</p>
                <p className={`text-${color}-700 dark:text-${color}-400 font-medium mt-1`}>→ {fix}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 1: Name Mismatch */}
        <section className="mb-8">
          <SH>1. Naam Mismatch — Kaise Theek Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            UID, bank aur portal — teeno jagah alag naam hona sabse common issue hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">Easy fix hai.</p>
          <StepList>
            <SI n={1}>pmkisan.gov.in → Farmers Corner → <strong>Edit UID Details</strong></SI>
            <SI n={2}><strong>Name Modification</strong> select karo</SI>
            <SI n={3}>UID card saamne rakho → EXACTLY wahi naam type karo</SI>
            <SI n={4}>UID scan upload karo (front+back, 2MB se kam)</SI>
            <SI n={5}>Submit karo → Reference number note karo</SI>
            <SI n={6}>15-20 working days mein changes reflect honge</SI>
          </StepList>
          <DB>
            <strong>Order Important:</strong> Agar UID mein bhi naam galat hai — pehle UIDAI se UID fix karo, phir scheme portal. Ulta karne se dobara problem aayegi.
          </DB>
        </section>

        {/* Section 2: Bank Record */}
        <section className="mb-8">
          <SH>2. Bank Record — Galat Details Fix</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Galat account number, galat IFSC, ya purana closed account — yeh sab DBT fail karate hain.
          </p>
          <StepList>
            <SI n={1}>pmkisan.gov.in → Farmers Corner → <strong>Edit UID Details</strong></SI>
            <SI n={2}><strong>Bank Details</strong> select karo</SI>
            <SI n={3}>Passbook kholo — Account Number aur IFSC carefully copy karo</SI>
            <SI n={4}>New details enter karo → Bank name select karo</SI>
            <SI n={5}>Passbook scan upload karo (first page, clear)</SI>
            <SI n={6}>Submit → 7-14 din mein changes aa jaate hain</SI>
          </StepList>
          <IB>
            <strong>NPCI Seeding Check:</strong> New bank account mein UID NPCI seeding honi chahiye — warna payment phir fail hogi. Bank branch mein pehle confirm karo.
          </IB>
        </section>

        {/* Section 3: Deactivation */}
        <section className="mb-8">
          <SH>3. Deactivated Profile — Reactivate Kaise Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Deactivation tab hoti hai jab state team ko ineligibility condition detect hoti hai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <h3 className="font-black text-red-800 dark:text-red-300 text-xs mb-2">Common Reasons</h3>
              <ul className="space-y-1 text-xs text-[var(--color-text-muted)]">
                <li className="flex gap-1"><span className="text-red-500 dark:text-red-400">•</span> Family member govt job mein</li>
                <li className="flex gap-1"><span className="text-red-500 dark:text-red-400">•</span> Zameen transfer ho gayi</li>
                <li className="flex gap-1"><span className="text-red-500 dark:text-red-400">•</span> Income tax filing detect hui</li>
                <li className="flex gap-1"><span className="text-red-500 dark:text-red-400">•</span> Duplicate record found</li>
                <li className="flex gap-1"><span className="text-red-500 dark:text-red-400">•</span> Land area limit exceed</li>
                <li className="flex gap-1"><span className="text-red-500 dark:text-red-400">•</span> State verification fail</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <h3 className="font-black text-green-800 dark:text-green-300 text-xs mb-2">Reactivation Steps</h3>
              <ul className="space-y-1 text-xs text-[var(--color-text-muted)]">
                <li className="flex gap-1"><span className="text-green-600 dark:text-green-400 font-bold">1.</span> Block Agriculture Officer se milo</li>
                <li className="flex gap-1"><span className="text-green-600 dark:text-green-400 font-bold">2.</span> Deactivation reason pata karo</li>
                <li className="flex gap-1"><span className="text-green-600 dark:text-green-400 font-bold">3.</span> Eligibility proof documents lo</li>
                <li className="flex gap-1"><span className="text-green-600 dark:text-green-400 font-bold">4.</span> Written application submit karo</li>
                <li className="flex gap-1"><span className="text-green-600 dark:text-green-400 font-bold">5.</span> 15-30 din review wait</li>
                <li className="flex gap-1"><span className="text-green-600 dark:text-green-400 font-bold">6.</span> Helpline 155261 follow up</li>
              </ul>
            </div>
          </div>
          <WB>
            <strong>Portal Se Nahi Hoga:</strong> Deactivation fix portal se nahi hoti — BAO ya helpline se hi hoti hai. Portal sirf active profiles edit karne deta hai.
          </WB>
        </section>

        {/* Section 4: Block/Freeze */}
        <section className="mb-8">
          <SH>4. Record Block/Freeze — Unblock Process</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Do types hain — Scheme level block aur Bank level block. Dono ka fix alag hai.
          </p>
          <div className="space-y-3">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
              <div className="flex items-center gap-3 px-4 py-3 bg-[var(--color-bg-alt)] border-b border-[var(--color-border)]">
                <span className="text-2xl">🏛️</span>
                <p className="font-black text-[var(--color-text)] text-sm">Scheme Portal Level Block</p>
              </div>
              <div className="p-4 space-y-2">
                <p className="text-xs text-[var(--color-text-muted)]"><strong>Kyun:</strong> Fraud detection, duplicate entry, ya government audit mein flagged.</p>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <p className="text-xs text-green-800 dark:text-green-300"><strong>FIX:</strong> Helpline 155261 → Registration number batao → Officer reason batayega → Documentation submit → 15-30 din review.</p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
              <div className="flex items-center gap-3 px-4 py-3 bg-[var(--color-bg-alt)] border-b border-[var(--color-border)]">
                <span className="text-2xl">🏦</span>
                <p className="font-black text-[var(--color-text)] text-sm">Bank Level Block/Freeze</p>
              </div>
              <div className="p-4 space-y-2">
                <p className="text-xs text-[var(--color-text-muted)]"><strong>Kyun:</strong> KYC expire, suspicious activity, court order, ya minimum balance issue.</p>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <p className="text-xs text-green-800 dark:text-green-300"><strong>FIX:</strong> Bank branch jao → Freeze reason pucho → KYC update karo → Resolve karo → DBT automatically resume.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Mobile Update */}
        <section className="mb-8">
          <SH>5. Mobile Number Change</SH>
          <StepList>
            <SI n={1}>Nazdiki CSC dhundho — <strong>locator.csccloud.in</strong></SI>
            <SI n={2}>Operator ko bolo: "Mobile number update karna hai"</SI>
            <SI n={3}>UID card + naya active mobile lekar jao</SI>
            <SI n={4}>Operator portal par update request dalega</SI>
            <SI n={5}>3-7 din mein naya number active</SI>
          </StepList>
          <IB>
            <strong>Note:</strong> Naya number UID se linked hona zaroori nahi update ke liye. Lekin future OTP verification ke liye UID se bhi link karwa lo.
          </IB>
        </section>

        {/* Section 6: Land Update */}
        <section className="mb-8">
          <SH>6. Zameen/Land Details Update</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Khasra galat, area wrong, ownership change — yeh portal se nahi, office se hota hai.
          </p>
          <StepList>
            <SI n={1}>Patwari/Lekhpal se updated <strong>Khasra-Khatauni</strong> lo</SI>
            <SI n={2}><strong>Block Agriculture Officer</strong> ke paas jao</SI>
            <SI n={3}>Land update application form bharo</SI>
            <SI n={4}>Documents: UID + naya Khasra + passbook</SI>
            <SI n={5}>20-30 din mein portal par reflect hoga</SI>
          </StepList>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Profile Update & Reactivation FAQ 2026 — Verified Answers" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in/FarmerCornerEditAadhaar.aspx"
          label="PM Kisan Portal — Edit/Update Profile"
          guide="Abhi Update Karo"
          guideHref="/articles/pm-kisan-name-correction-online-2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="🛠️"
          title="Apna Status Check Karo"
          desc="Update ke baad beneficiary status verify karo — active hai ya nahi"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Status Tracker →' }}
          secondaryCta={{ href: '/calculator', label: '🧮 Sab Utilities' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-name-correction-online-2026', l: '✏️ Name Fix' },
          { href: '/articles/pm-kisan-ekyc-online-2026', l: '🔐 eKYC Guide' },
          { href: '/articles/pm-kisan-payment-failed-status-2026', l: '💸 Payment Fix' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}