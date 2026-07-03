'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-06-29T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-ekyc-online-2026', title: 'Digital Verification Guide', emoji: '🔐' },
  { slug: 'pm-kisan-payment-failed-status-2026', title: 'Credit Transfer Failed Fix', emoji: '💸' },
  { slug: 'pm-kisan-name-correction-online-2026', title: 'Name Correction Guide', emoji: '✏️' },
  { slug: 'pm-kisan-land-seeding-status-check', title: 'Land Seeding Status', emoji: '🌾' },
  { slug: 'pm-kisan-rejected-list-2026', title: 'Rejected List Fix', emoji: '❌' },
  { slug: 'pm-kisan-mobile-number-change', title: 'Mobile Number Change', emoji: '📱' },
];

const FAQS_DATA = [
  {
    q: 'Captcha baar-baar galat ho raha hai — kya karein?',
    a: 'Captcha case-sensitive hota hai. "AbCd" aur "abcd" alag hain. Clear na dikhe toh refresh icon dabao. 3 baar galat = temporary block. 10 minute wait karo, phir try.',
  },
  {
    q: 'Purana mobile number band hai — verification kaise hogi?',
    a: 'Band number se OTP nahi aayega. Naya number link karwao CSC par biometric se. Ya Aadhaar number se verify karo — mobile ki zaroorat nahi padegi.',
  },
  {
    q: '"RFT Signed" dikh raha hai 45 din se — normal hai?',
    a: 'Nahi. RFT = state approved, lekin bank processing mein issue ho sakta hai. NPCI seeding check karo bank mein. 5 din mein fix hota hai seeding ke baad.',
  },
  {
    q: 'Status "Rejected" hai lekin reason nahi dikha raha?',
    a: '155261 par call karo, enrollment ID batao. Woh exact reason batayenge. Ya Beneficiary Status mein dobara check karo — kabhi-kabhi detail load nahi hoti pehli baar.',
  },
  {
    q: 'Fake website se kaise bachein?',
    a: 'Sirf pmkisan.gov.in use karo. URL bar mein .gov.in confirm karo. .com, .org, .in wali sites fake ho sakti hain. Kabhi bhi personal details mat daalo unpar.',
  },
  {
    q: 'Poora payment history kyun check karna chahiye?',
    a: 'Sirf latest installment mat dekho. Upar scroll karke purani payments bhi check karo. Kai baar arrears pending hote hain jo fix hone par ek saath aate hain.',
  },
];

export default function PmKisanStatusCheckOnline2026CompleteGuide({ article }: { article: ArticleMeta }) {
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
            <span className="text-white font-bold">Verification Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Tested Process</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Status Check 2026: Tested Process Jo Kaam Karta Hai — Galat Tarike Se Mat Karo
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

        {/* Hero Image #1 — PRESERVED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/pm-kisan-status-check-tool-interface.webp'}
            alt="PM Kisan beneficiary status check tool interface — official portal verification screen"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Official Portal Par Sahi Tarike Se Verification Kaise Karein
          </p>
        </div>

        {/* Hook — Real Voice Preserved */}
        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 dark:border-amber-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">90% Log Galat Tarike Se Karte Hain</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            Verification process simple hai. Lekin log seedha portal par jaate hain, captcha galat daalte hain, wrong tab select kar lete hain. Phir sochte hain <strong>"mera naam list mein hai hi nahi."</strong>
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            Yahan woh exact process hai jo tested hai. Koi theory nahi — <strong>sirf real steps jo kaam karte hain.</strong>
          </p>
        </div>

        {/* Real Problem Box */}
        <WB>
          <strong>Common Problem: Identity Mismatch.</strong> Kai farmers ko rejected dikhta hai. Check karne par pata chalta hai Aadhaar mein naam alag, bank mein alag. Sirf spelling mismatch se payment ruk jaati hai. Naam rectification ke baad 18 din mein missed installments aa jaati hain. <strong>Yeh sirf verification check karne se pakdi jaati hai.</strong>
        </WB>

        {/* Which Number To Use */}
        <section className="mb-8">
          <SH>Pehle: Sahi Number Ready Rakho</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Portal par 3 options milte hain. <strong>Sabse reliable Aadhaar number hai.</strong> Mobile tabhi use karo jab scheme account se linked ho — kai logon ne enrollment waqt koi aur number diya tha jo ab band hai.
          </p>
          <div className="space-y-2">
            <div className="flex gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <span className="text-green-600 dark:text-green-400 font-bold shrink-0">✅</span>
              <span className="text-sm text-[var(--color-text-muted)]"><strong>Aadhaar Number (12 digits)</strong> — Sabse best option</span>
            </div>
            <div className="flex gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">✅</span>
              <span className="text-sm text-[var(--color-text-muted)]"><strong>Registered Mobile (10 digits)</strong> — Tabhi chalega jab active ho</span>
            </div>
            <div className="flex gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <span className="text-purple-600 dark:text-purple-400 font-bold shrink-0">✅</span>
              <span className="text-sm text-[var(--color-text-muted)]"><strong>Enrollment Number</strong> — Agar pata ho toh</span>
            </div>
          </div>
        </section>

        {/* Step-by-Step */}
        <section className="mb-8">
          <SH>Official Portal Par Verification — 4 Steps</SH>
          <StepList>
            <SI n={1}>Browser mein <strong>pmkisan.gov.in</strong> type karo. <em>.gov.in</em> zaroori hai — fake sites .com/.org use karti hain. Unpar details kabhi mat daalo</SI>
            <SI n={2}>Homepage par <strong>Farmers Corner</strong> → <strong>Beneficiary Status</strong> click karo. Mobile users ko scroll karna pad sakta hai</SI>
            <SI n={3}>Aadhaar/mobile enter karo + <strong>captcha exactly waisa type karo jaisa dikha</strong>. Case-sensitive hai. Clear na dikhe toh refresh karo</SI>
            <SI n={4}><strong>Get Data</strong> click karo — complete payment history table dikh jayega</SI>
          </StepList>
        </section>

        {/* Screenshot Image #2 — PRESERVED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/pm-kisan-status-check-steps-infographic.webp"
            alt="PM Kisan status check step by step infographic — portal verification process visual guide"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Step-by-Step Verification Process — Visual Guide
          </p>
        </div>

        {/* Status Meanings Table */}
        <section className="mb-8">
          <SH>Result Mein Kya Dikhega — Matlab Samjho</SH>
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
                  ['✅ Paid / Success', 'Bank mein aa chuka', 'Statement check karo'],
                  ['⏳ RFT Signed', 'State approved, bank processing', '3-7 din wait'],
                  ['❌ Rejected', 'Error — identity/bank/land', 'Neeche reasons dekho ↓'],
                  ['🔐 Verification Pending', 'Biometric auth incomplete', <Link key="ekyc" href="/articles/pm-kisan-ekyc-online-2026" className="text-green-700 dark:text-green-400 underline font-bold">Verification karo →</Link>],
                  ['🌾 Land Seeding No', 'Zameen link nahi hui', <Link key="land" href="/articles/pm-kisan-land-seeding-status-check" className="text-green-700 dark:text-green-400 underline font-bold">Land fix →</Link>],
                ].map(([status, meaning, action], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-semibold text-xs text-[var(--color-text)]">{status}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{meaning}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Real Problem Box 2 */}
          <DB>
            <strong>RFT Signed ≠ Paisa Aa Gaya.</strong> Kai cases mein 45 din se atka rehta hai. Wajah: bank NPCI seeding nahi hui. Bank manager se Aadhaar seeding karwao — 5 din mein paisa aa jaata hai.
          </DB>
        </section>

        {/* Top 5 Mistakes */}
        <section className="mb-8">
          <SH>5 Galtiyan Jo Verification Mein Hoti Hain</SH>
          <div className="space-y-3">
            {[
              { title: 'Galat Website Par Jaana', fix: 'Sirf pmkisan.gov.in. URL bar mein .gov.in confirm karo. Fake sites .com/.org use karti hain.' },
              { title: 'Purana/Band Mobile Use Karna', fix: 'Band number se OTP nahi aayega. Naya link karwao CSC par. Ya Aadhaar number se verify karo.' },
              { title: 'Captcha Galat Type Karna', fix: 'Case-sensitive hai. Refresh karo agar clear na dikhe. 3 baar galat = temp block. 10 min wait.' },
              { title: 'Sirf Last Installment Dekhna', fix: 'Upar scroll karo — poori history check karo. Purani pending payments arrears mein aati hain.' },
              { title: 'Status Dekh Kar Chhod Dena', fix: 'Rejected/Pending dikhe toh action lo. Verification karo, naam fix karo, bank visit karo. Problem solve tabhi hogi.' },
            ].map(({ title, fix }, i) => (
              <div key={i} className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">❌ Galti #{i + 1}: {title}</p>
                <p className="text-xs text-red-700 dark:text-red-400">{fix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Farmer Photo #3 — PRESERVED */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/indian-farmer-checking-phone-status.webp"
            alt="Indian cultivator checking PM Kisan beneficiary status on mobile phone"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* Quick Tool CTA */}
        <section className="mb-8">
          <SH>Free Quick Verification Tool</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Official portal se pehle apna number validate karna ho ya visual guide chahiye — hamara free tool try karo. Seedha sahi page par le jaayega bina confusion.
          </p>
          <Link
            href="/calculator/quick-status-check"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-green-700 text-white font-black px-6 py-3 rounded-xl transition-all hover:scale-[1.02] shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            🔍 Quick Verification Tool Try Karein →
          </Link>
        </section>

        {/* Helpline */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5 mb-8 space-y-2">
          <p className="font-black text-[var(--color-text)] text-sm mb-2">Jab Kuch Samajh Na Aaye</p>
          <p className="text-sm text-[var(--color-text-muted)]">📞 Helpline: <a href="tel:155261" className="font-bold text-[var(--color-primary)] hover:underline">155261</a> (Toll Free)</p>
          <p className="text-sm text-[var(--color-text-muted)]">📞 Alternate: <a href="tel:1800115526" className="font-bold text-[var(--color-primary)] hover:underline">1800-115-526</a></p>
          <p className="text-sm text-[var(--color-text-muted)]">📧 Email: pmkisan-krishi@gov.in</p>
          <p className="text-xs text-[var(--color-text-muted)] mt-2">⏰ Mon-Sat, 9 AM - 6 PM | Sunday Closed</p>
        </div>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Status Verification FAQ 2026 — Tested Answers" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="PM Kisan Beneficiary Status — Official Portal"
          guide="Abhi Status Check Karo"
          guideHref="/articles/pm-kisan-ekyc-online-2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="🔍"
          title="Quick Verification Tool"
          desc="Number validate karo, step-by-step visual guide dekho — free"
          primaryCta={{ href: '/calculator/quick-status-check', label: '🔍 Tool Try Karo →' }}
          secondaryCta={{ href: '/calculator/installment-tracker', label: '📅 Installment Tracker' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-ekyc-online-2026', l: '🔐 eKYC Guide' },
          { href: '/articles/pm-kisan-payment-failed-status-2026', l: '💸 Payment Fix' },
          { href: '/calculator/quick-status-check', l: '🔍 Quick Tool' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}