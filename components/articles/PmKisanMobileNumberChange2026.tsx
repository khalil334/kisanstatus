'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2025-01-20T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-ekyc-online-2026', title: 'Digital Verification Guide', emoji: '🔐' },
  { slug: 'pm-kisan-name-correction-online-2026', title: 'Name Correction Guide', emoji: '✏️' },
  { slug: 'pm-kisan-payment-failed-status-2026', title: 'Payment Failed Fix', emoji: '💸' },
  { slug: 'pm-kisan-correction-deactivate-block-guide-2026', title: 'Profile Reactivation', emoji: '🛠️' },
  { slug: 'pm-kisan-23vi-kist-2026-status-check', title: '23vi Installment Status', emoji: '📅' },
  { slug: 'pm-kisan-beneficiary-list-2026', title: 'Beneficiary Roster Check', emoji: '📋' },
];

const FAQS_DATA = [
  {
    q: 'Purana number band hai — online update hoga?',
    a: 'Nahi. Online update ke liye purane number par OTP chahiye. Band number = CSC jaao. Biometric se naya number register ho jaayega. locator.csccloud.in par nearest centre dhundo.',
  },
  {
    q: 'Bank account change karne ke baad kitne din mein update hota hai?',
    a: '3-7 working days. Next installment naye account mein aayegi. 7 din baad bhi reflect na ho toh helpline 155261 par call karo. Bank mein NPCI seeding confirm karna mat bhoolna.',
  },
  {
    q: 'Naam galat hai portal par — online fix hoga?',
    a: 'Nahi. Naam correction sirf Block Agriculture Officer (BAO) ya District Agriculture Office se hota hai. Aadhaar copy + written application le jaao. 15-20 din mein correction.',
  },
  {
    q: '"Aadhaar Authentication Failed" kyun aa raha hai?',
    a: 'Portal par naam aur Aadhaar par naam exactly match nahi karta. Middle name, spelling, surname — sab same hona chahiye. BAO se correction karwao.',
  },
  {
    q: 'Kya har update ke liye CSC jaana padta hai?',
    a: 'Nahi. Mobile number (agar purana active hai) aur bank details online update ho sakte hain. Aadhaar biometric verification aur naam correction ke liye CSC/BAO zaroori hai.',
  },
  {
    q: 'Update free hai ya charge lagta hai?',
    a: 'Bilkul free. Portal par zero cost. CSC par nominal ₹20-30 lag sakta hai. Koi ₹100+ maange toh fraud — 155261 par complaint karo.',
  },
];

export default function PmKisanMobileNumberChange2026({ article }: { article: ArticleMeta }) {
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
            <span className="text-white font-bold">Profile Update Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Details Update</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Mobile Number, Bank Account Ya Aadhaar Badalna Hai? Teeno Update Ka Seedha Tarika
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 8 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/pm-kisan-mobile-bank-aadhaar-update-banner-website.webp'}
            alt="PM Kisan mobile number bank account Aadhaar update guide 2026 — portal and CSC process"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Mobile, Bank, Aadhaar — Teeno Update Kaise Karein
          </p>
        </div>

        {/* Hook */}
        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 dark:border-amber-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">Galat Details = Ruki Hui Kist</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            Number band ho gaya. Bank account badal liya. Aadhaar link nahi hai. Yeh teeno cheezein kist rok deti hain. Fix simple hai — bas sahi process pata hona chahiye. Neeche teeno ka step-by-step tarika hai.
          </p>
        </div>

        {/* Quick Navigator */}
        <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a href="#mobile" className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-center hover:shadow-md transition-shadow">
            <span className="text-2xl block mb-1">📱</span>
            <p className="font-black text-blue-800 dark:text-blue-300 text-sm">Mobile Number</p>
          </a>
          <a href="#bank" className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center hover:shadow-md transition-shadow">
            <span className="text-2xl block mb-1">🏦</span>
            <p className="font-black text-green-800 dark:text-green-300 text-sm">Bank Account</p>
          </a>
          <a href="#aadhaar" className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl text-center hover:shadow-md transition-shadow">
            <span className="text-2xl block mb-1">🪪</span>
            <p className="font-black text-purple-800 dark:text-purple-300 text-sm">Aadhaar Link</p>
          </a>
        </div>

        {/* Section 1: Mobile Number */}
        <section id="mobile" className="mb-8">
          <SH>1. Mobile Number Change</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            OTP aur notifications registered mobile par aate hain. Number band = kist ki information nahi milegi.
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-4">Method A: Online (Purana Number Active Ho)</h3>
          <StepList>
            <SI n={1}>pmkisan.gov.in → Farmers Corner → <strong>Update Mobile Number</strong></SI>
            <SI n={2}>Aadhaar number enter karo</SI>
            <SI n={3}>Purane number par OTP aayega → verify karo</SI>
            <SI n={4}>Naya mobile number enter → confirm → submit</SI>
            <SI n={5}>24-48 ghante mein update</SI>
          </StepList>

          <DB>
            <strong>Purana Number Band?</strong> Online method kaam nahi karega. CSC jaao — biometric se naya number register hoga. Aadhaar card + naya active SIM le jaao.
          </DB>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Method B: CSC (Biometric Se)</h3>
          <StepList>
            <SI n={1}>Nazdiki CSC dhundo — <strong>locator.csccloud.in</strong></SI>
            <SI n={2}>Aadhaar card + naya mobile le jaao</SI>
            <SI n={3}>Operator fingerprint se verify karega</SI>
            <SI n={4}>Naya number register → confirmation SMS milega</SI>
          </StepList>
          <IB>
            <strong>Charge:</strong> Nominal ₹20-30. Zyada maange toh 155261 par complaint.
          </IB>
        </section>

        {/* Section 2: Bank Account */}
        <section id="bank" className="mb-8">
          <SH>2. Bank Account Update</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Galat account = kist wapas chali jaati hai. Reversed payment ka sabse common reason yahi hai.
          </p>
          <WB>
            <strong>Pehle Yeh Karo:</strong> Naya account Aadhaar se NPCI linked hona chahiye. Bank branch jaake "Aadhaar NPCI seeding form" bharo pehle. Bina iske update bekaar hai.
          </WB>
          <StepList>
            <SI n={1}>pmkisan.gov.in → Farmers Corner → <strong>Edit Bank Details</strong></SI>
            <SI n={2}>Aadhaar + registered mobile OTP se verify</SI>
            <SI n={3}>Naya account number + IFSC carefully enter karo (passbook se copy)</SI>
            <SI n={4}>Account holder name = bank mein jo registered hai exactly wahi</SI>
            <SI n={5}>Submit → 3-7 working days mein update</SI>
          </StepList>
          <div className="mt-4 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
            <p className="font-black text-[var(--color-text)] text-sm mb-2">Documents Ready Rakho:</p>
            <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
              <li>✓ Bank passbook (front page)</li>
              <li>✓ Cancelled cheque (helpful)</li>
              <li>✓ Aadhaar card</li>
              <li>✓ Registered mobile (OTP ke liye)</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Aadhaar Linking */}
        <section id="aadhaar" className="mb-8">
          <SH>3. Aadhaar Integration</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bina Aadhaar link ke kist ruk jaati hai. Mandatory hai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Online OTP</p>
              <p className="text-xs text-[var(--color-text-muted)]">pmkisan.gov.in → Aadhaar Linking → Number enter → OTP verify → Done. Agar mobile Aadhaar se linked hai toh yeh best hai.</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">CSC Biometric</p>
              <p className="text-xs text-[var(--color-text-muted)]">Mobile linked nahi ya OTP nahi aa raha? CSC jaao. Fingerprint se verify → link ho jaayega. Dono methods free.</p>
            </div>
          </div>
          <DB>
            <strong>Warning:</strong> Aadhaar linking + eKYC dono alag hain. Dono complete hone chahiye. Sirf linking se kaam nahi chalega — eKYC bhi karo. <Link href="/articles/pm-kisan-ekyc-online-2026" className="underline font-bold">eKYC Guide yahan hai</Link>.
          </DB>
        </section>

        {/* Common Errors */}
        <section className="mb-8">
          <SH>Common Errors + Fix</SH>
          <div className="space-y-3">
            {[
              { err: 'Aadhaar Authentication Failed', fix: 'Naam mismatch. Portal aur Aadhaar mein exactly same naam hona chahiye. BAO se correction karwao.' },
              { err: 'Payment Reversed', fix: 'Account inactive ya naam galat. Bank activate karwao → portal par updated details daalo.' },
              { err: 'eKYC Pending', fix: 'Portal par OTP ya CSC biometric se turant complete karo. Bina eKYC kist nahi.' },
              { err: 'Invalid Land Details', fix: 'Patwari se updated Khasra/Khatauni lo → agriculture office submit karo.' },
              { err: 'FTO Generated Par Paisa Nahi Aaya', fix: '5-7 din wait normal. Uske baad bhi nahi = bank contact + helpline 155261.' },
            ].map(({ err, fix }) => (
              <div key={err} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden">
                <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5">
                  <p className="font-black text-red-800 dark:text-red-300 text-sm">❌ {err}</p>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0 mt-0.5">FIX:</span>
                    <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">{fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documents Summary Table */}
        <section className="mb-8">
          <SH>Sab Updates Ke Liye Kya Chahiye</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Update Type</th>
                  <th className="p-3 text-left">Documents</th>
                  <th className="p-3 text-left">Kahan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mobile Number', 'Aadhaar, old + new SIM', 'Portal / CSC'],
                  ['Bank Account', 'Aadhaar, passbook, cancelled cheque', 'Portal / CSC'],
                  ['Aadhaar Link', 'Aadhaar, registered mobile', 'Portal / CSC'],
                  ['Name Correction', 'Aadhaar, application, land records', 'BAO Office'],
                  ['Land Records', 'Khasra/Khatauni, Aadhaar', 'Patwari / BAO'],
                ].map(([type, docs, where], i) => (
                  <tr key={type} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{type}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{docs}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <IB>
            <strong>Tip:</strong> Office jaane se pehle 2-3 photocopies banwa lo. Original verification ke liye dikhao, photocopy submit karo.
          </IB>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Profile Update FAQ 2026 — Verified Answers" />
        </section>

        {/* Action Conclusion */}
        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Yaad Rakho</h3>
          <ul className="space-y-2 text-sm text-green-800 dark:text-green-300">
            <li className="flex gap-2"><span className="font-bold">→</span> Sab updates free hain — kisi ko paise mat do</li>
            <li className="flex gap-2"><span className="font-bold">→</span> Online na ho toh CSC jaao</li>
            <li className="flex gap-2"><span className="font-bold">→</span> Naam mismatch = BAO office</li>
            <li className="flex gap-2"><span className="font-bold">→</span> Har update 3-7 din mein reflect hota hai</li>
            <li className="flex gap-2"><span className="font-bold">→</span> Update ke baad Beneficiary Status check karo</li>
          </ul>
        </div>

        <GovLink
          href="https://pmkisan.gov.in/FarmerCornerEditAadhaar.aspx"
          label="PM Kisan Portal — Edit Profile"
          guide="Abhi Update Karo"
          guideHref="/articles/pm-kisan-ekyc-online-2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="📋"
          title="Apna Status Check Karo"
          desc="Update ke baad beneficiary status verify karo — active hai ya nahi"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Status Tracker →' }}
          secondaryCta={{ href: '/calculator', label: '🧮 Sab Utilities' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-ekyc-online-2026', l: '🔐 eKYC Guide' },
          { href: '/articles/pm-kisan-name-correction-online-2026', l: '✏️ Name Fix' },
          { href: '/articles/pm-kisan-correction-deactivate-block-guide-2026', l: '🛠️ Reactivation' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}