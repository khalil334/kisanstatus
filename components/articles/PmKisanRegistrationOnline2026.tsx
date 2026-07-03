'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-ekyc-online-2026', title: 'Digital Verification Guide', emoji: '🔐' },
  { slug: 'pm-kisan-beneficiary-list-2026', title: 'Beneficiary Roster Check', emoji: '📋' },
  { slug: 'pm-kisan-land-seeding-status-check', title: 'Land Seeding Fix', emoji: '🌾' },
  { slug: 'pm-kisan-rejected-list-2026', title: 'Rejected List Fix', emoji: '❌' },
  { slug: 'pm-kisan-name-correction-online-2026', title: 'Name Correction Guide', emoji: '✏️' },
  { slug: 'pm-kisan-problems-solution-guide-2026', title: '10 Roadblocks Guide', emoji: '🔧' },
];

const FAQS_DATA = [
  {
    q: 'Enrollment kaise karein?',
    a: 'pmkisan.gov.in → Farmers Corner → New Farmer Registration → Aadhaar → State select → form fill → land details → submit. Free hai, 10-15 minute lagti hai.',
  },
  {
    q: 'Enrollment ke liye kya chahiye?',
    a: 'Aadhaar card, Aadhaar-linked mobile, bank passbook (account + IFSC), Khasra/Khatauni. Sab pehle ready rakho — form bharte waqt dhundhna padega toh galti hogi.',
  },
  {
    q: 'Pehli installment kab aayegi?',
    a: 'State verification + land seeding + digital verification complete hone mein 30-60 din lag sakte hain. Phir agli scheduled payment cycle mein credit aayegi.',
  },
  {
    q: 'Submit karne ke baad confirmation milta hai?',
    a: 'Haan. Screen par enrollment number aata hai. Kuch states mein SMS bhi. Screenshot zaroor lo — status track karne ke kaam aata hai.',
  },
  {
    q: 'Ek zameen par do logon ka enrollment ho sakta hai?',
    a: 'Nahi. Ek khasra/plot par sirf ek enrollment. Pita-putra dono ke naam hai toh jo actual cultivator hai wahi register kare.',
  },
  {
    q: 'Form mein galti ho gayi — edit kar sakte hain?',
    a: 'Kuch details: pmkisan.gov.in → Edit Aadhaar Details. Bank, naam correction wahan. Land details ke liye BAO office ya helpline 155261.',
  },
  {
    q: 'Mobile number change ho gaya — kya karein?',
    a: 'Pehle UIDAI se Aadhaar mein mobile update karwao. Temporary: CSC par biometric verification karo — mobile ki zaroorat nahi.',
  },
];

export default function PmKisanRegistrationOnline2026({ article }: { article: ArticleMeta }) {
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
            <span className="text-white font-bold">New Enrollment Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">First-Time Registration</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Pehli Baar Register Karna Hai? Documents Se Lekar Submit Tak — Seedha Tarika
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 9 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Hero Image — PATH UNCHANGED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/registration-steps.jpg'}
            alt="PM Kisan new farmer enrollment steps 2026 — online registration guide"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            New Enrollment 2026 — Step by Step Guide
          </p>
        </div>

        {/* Pre-enrollment Warning */}
        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-blue-800 dark:text-blue-300 mb-2">Enrollment Se Pehle Yeh Padho</h2>
          <p className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed mb-2">
            Form bharna simple hai. Lekin <strong>galat information = rejection pakki.</strong> Bahut log hurry mein bhar dete hain, phir mahino tak paisa nahi aata.
          </p>
          <p className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
            Pehle documents tayaar karo, phir form bharo. 10 minute do — sahi se karo.
          </p>
        </div>

        {/* Eligibility */}
        <section className="mb-8">
          <SH>Pehle Check Karo — Eligible Ho?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Submit karne se pehle confirm karo. Warna enrollment hoga, baad mein reject.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-3">✅ Eligible</h3>
              <ul className="space-y-1.5 text-xs text-[var(--color-text-muted)]">
                <li className="flex gap-2"><span className="text-green-600 dark:text-green-400 shrink-0">✓</span> Small/marginal farmer (≤2 hectare)</li>
                <li className="flex gap-2"><span className="text-green-600 dark:text-green-400 shrink-0">✓</span> Zameen apne/spouse ke naam registered</li>
                <li className="flex gap-2"><span className="text-green-600 dark:text-green-400 shrink-0">✓</span> Indian citizen</li>
                <li className="flex gap-2"><span className="text-green-600 dark:text-green-400 shrink-0">✓</span> Aadhaar card hai</li>
                <li className="flex gap-2"><span className="text-green-600 dark:text-green-400 shrink-0">✓</span> Active bank account</li>
                <li className="flex gap-2"><span className="text-green-600 dark:text-green-400 shrink-0">✓</span> Tenant farmers (kuch states mein)</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <h3 className="font-black text-red-800 dark:text-red-300 text-sm mb-3">❌ Not Eligible</h3>
              <ul className="space-y-1.5 text-xs text-[var(--color-text-muted)]">
                <li className="flex gap-2"><span className="text-red-500 dark:text-red-400 shrink-0">✗</span> Govt employees (state + central)</li>
                <li className="flex gap-2"><span className="text-red-500 dark:text-red-400 shrink-0">✗</span> Income Tax filers</li>
                <li className="flex gap-2"><span className="text-red-500 dark:text-red-400 shrink-0">✗</span> Ex-MPs, MLAs, Ministers</li>
                <li className="flex gap-2"><span className="text-red-500 dark:text-red-400 shrink-0">✗</span> Doctors, Lawyers, Engineers, CAs</li>
                <li className="flex gap-2"><span className="text-red-500 dark:text-red-400 shrink-0">✗</span> ₹10,000+ monthly pension</li>
                <li className="flex gap-2"><span className="text-red-500 dark:text-red-400 shrink-0">✗</span> 2 hectare se zyada zameen</li>
              </ul>
            </div>
          </div>
          <IB>
            <strong>Confusion?</strong> Bete ne sarkari naukri ki, pitaji ke naam zameen hai — pitaji eligible hain (agar IT filer nahi). Joint family mein sirf restricted member ineligible.
          </IB>
        </section>

        {/* Documents */}
        <section className="mb-8">
          <SH>Documents Pehle Tayaar Karo</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sabse badi galti: form bharte waqt document dhundhna aur galat number type karna. <strong>Pehle sab nikal ke rakho:</strong>
          </p>
          <div className="space-y-3">
            {[
              { doc: 'Aadhaar Card', must: true, detail: 'Original dekhke 12 digits type karo — ek bhi galat nahi', tip: 'Photo lelo mobile mein — form bharte waqt saamne rakho' },
              { doc: 'Mobile Number', must: true, detail: 'Aadhaar-linked active number — OTP is par aayega', tip: 'Linked nahi = pehle UIDAI se link karwao ya CSC jao' },
              { doc: 'Bank Passbook', must: true, detail: 'First page — Account number, IFSC, Branch, Holder name', tip: 'IFSC carefully copy karo — most common error yahi hai' },
              { doc: 'Land Records', must: true, detail: 'Khasra number, Khatauni/Patta — state records se', tip: 'Patwari se latest copy lo — purani reject ho sakti hai' },
              { doc: 'Document Photos', must: false, detail: 'Sabki clear photos — upload karne padenge', tip: '2MB se kam size. Compress kar lo agar zyada hai' },
            ].map(({ doc, must, detail, tip }) => (
              <div key={doc} className="flex gap-3 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl shadow-sm">
                <span className={`text-xl shrink-0 mt-0.5 ${must ? 'text-green-600 dark:text-green-400' : 'text-blue-500 dark:text-blue-400'}`}>{must ? '📋' : '📎'}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-black text-[var(--color-text)] text-sm">{doc}</p>
                    {must && <span className="text-[10px] bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2 py-0.5 rounded-full font-bold">ZARURI</span>}
                  </div>
                  <p className="text-xs text-[var(--color-text-muted)] mb-1">{detail}</p>
                  <p className="text-[11px] text-green-700 dark:text-green-400 font-medium">💡 {tip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Step-by-Step Registration */}
        <section className="mb-8">
          <SH>Registration Process — 12 Steps</SH>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholo — mobile mein desktop mode on karo</SI>
            <SI n={2}>Homepage par <strong>Farmers Corner</strong> tap karo</SI>
            <SI n={3}><strong>New Farmer Registration</strong> select karo</SI>
            <SI n={4}><strong>Rural</strong> ya Urban chuno — gaon mein ho toh Rural</SI>
            <SI n={5}>Aadhaar enter → <strong>State select</strong> → captcha → <strong>Get OTP</strong></SI>
            <SI n={6}>OTP enter → Proceed</SI>
            <SI n={7}><strong>Personal Details</strong> — naam Aadhaar jaisa exactly, category, farmer type</SI>
            <SI n={8}><strong>Bank Details</strong> — Account, IFSC, bank name → passbook se copy</SI>
            <SI n={9}><strong>Land Details</strong> — survey/khasra number, area (hectare), ownership</SI>
            <SI n={10}>Documents upload — Aadhaar, passbook, land records (clear, &lt;2MB)</SI>
            <SI n={11}>Sab dobara check karo — submit ke baad change mushkil</SI>
            <SI n={12}><strong>Submit</strong> → enrollment number milega → <strong>screenshot lo</strong></SI>
          </StepList>
          <DB>
            <strong>Sabse Common Mistake:</strong> IFSC code galat. 11 characters, SBIN0001234 format. Ek letter galat = payment fail. Passbook se carefully copy karo.
          </DB>
        </section>

        {/* Post-Registration Timeline */}
        <section className="mb-8">
          <SH>Enrollment Ke Baad Kya Hota Hai?</SH>
          <div className="space-y-3">
            {[
              { step: 'Application submit', time: 'Day 1', icon: '✅', color: 'bg-green-500' },
              { step: 'Digital verification karo (abhi!)', time: 'Day 1-3', icon: '🔐', color: 'bg-blue-500' },
              { step: 'State agriculture office verification', time: 'Day 7-14', icon: '⏳', color: 'bg-yellow-500' },
              { step: 'Land seeding — patwari records se', time: 'Day 14-30', icon: '🌾', color: 'bg-amber-500' },
              { step: 'Beneficiary list mein naam', time: 'Day 30-45', icon: '📋', color: 'bg-purple-500' },
              { step: 'Pehli installment credit', time: 'Agli Cycle', icon: '💰', color: 'bg-emerald-600' },
            ].map(({ step, time, icon, color }) => (
              <div key={step} className="flex items-center gap-3">
                <span className={`${color} text-white text-[10px] font-black px-2 py-1 rounded-full shrink-0 whitespace-nowrap`}>{time}</span>
                <span className="text-lg shrink-0">{icon}</span>
                <div className="flex-1 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl px-4 py-2.5 text-sm text-[var(--color-text-muted)] shadow-sm">{step}</div>
              </div>
            ))}
          </div>
          <IB>
            <strong>Important:</strong> Enrollment ke turant baad digital verification karo — usi din. Warna delay. pmkisan.gov.in → eKYC → OTP. 5 minute, free.
          </IB>
        </section>

        {/* 5 Mistakes */}
        <section className="mb-8">
          <SH>5 Galtiyan Jo Rejection Karti Hain</SH>
          <div className="space-y-3">
            {[
              { n: 1, mistake: 'IFSC Code Galat', impact: 'Payment fail ya wrong account', fix: 'Passbook first page → IFSC copy → dobara check' },
              { n: 2, mistake: 'Naam Aadhaar Se Alag', impact: 'Verification fail, rejected list', fix: 'Aadhaar saamne rakho → exactly same naam — space, spelling sab' },
              { n: 3, mistake: 'Purane Land Records', impact: 'State verification fail', fix: 'Patwari se latest Khasra-Khatauni — current year wala' },
              { n: 4, mistake: 'Joint Account Se Register', impact: 'Naam mismatch seeding mein', fix: 'Individual account best. Joint mein Aadhaar holder ka naam pehle' },
              { n: 5, mistake: 'Verification Baad Mein Socha', impact: 'Bina auth ke koi payment nahi', fix: 'Usi din karo — enrollment ke turant baad. 5 min, free' },
            ].map(({ n, mistake, impact, fix }) => (
              <div key={n} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 px-4 py-3 bg-orange-50 dark:bg-orange-900/20 border-b border-orange-100 dark:border-orange-800">
                  <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-black flex items-center justify-center shrink-0">{n}</span>
                  <p className="font-black text-orange-900 dark:text-orange-300 text-sm">{mistake}</p>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-xs text-red-700 dark:text-red-400 flex gap-2"><span className="font-bold shrink-0">Impact:</span>{impact}</p>
                  <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-2.5">
                    <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0 mt-0.5">FIX:</span>
                    <p className="text-xs text-green-800 dark:text-green-300">{fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Enrollment FAQ — Jo Sab Poochte Hain
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="New Enrollment FAQ 2026 — Verified Answers" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in/NewFarmerRegistration.aspx"
          label="PM Kisan — New Farmer Registration Portal"
          guide="Abhi Enroll Karo"
          guideHref="/articles/pm-kisan-ekyc-online-2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="📝"
          title="Enrollment Ke Baad Status Track Karo"
          desc="Beneficiary active hai ya nahi, pehli installment kab aayegi — jaano"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-ekyc-online-2026', l: '🔐 eKYC Guide' },
          { href: '/articles/pm-kisan-beneficiary-list-2026', l: '📋 Roster Check' },
          { href: '/articles/pm-kisan-land-seeding-status-check', l: '🌾 Land Fix' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}