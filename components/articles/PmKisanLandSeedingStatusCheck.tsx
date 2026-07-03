'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-06-04T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-ekyc-online-2026', title: 'Digital Verification Guide', emoji: '🔐' },
  { slug: 'pm-kisan-rejected-list-2026', title: 'Application Declined Fix', emoji: '❌' },
  { slug: 'pm-kisan-payment-failed-status-2026', title: 'DBT Transfer Failed Fix', emoji: '💸' },
  { slug: 'pm-kisan-beneficiary-list-2026', title: 'Beneficiary Roster Check', emoji: '📋' },
  { slug: 'pm-kisan-registration-online-2026', title: 'New Enrollment Guide', emoji: '📝' },
  { slug: 'pm-kisan-name-correction-online-2026', title: 'Name Correction Guide', emoji: '✏️' },
];

const FAQS_DATA = [
  {
    q: 'Land mapping ek baar hoti hai ya baar baar?',
    a: 'Ek baar permanent. Jab tak zameen details mein change na ho — sale, partition, inheritance. Zameen kisi aur ke naam ho jaaye ya split ho toh dobara linking zaroori.',
  },
  {
    q: 'Tenant farmer / sharecropper ka integration kaise hoga?',
    a: 'Kuch states mein alag process hai. UP, Bihar, MP mein lease agreement accept hota hai. State Agriculture Department se pucho. Standard landowner process tenant par apply nahi hota.',
  },
  {
    q: 'Ek khasra par do naam hain — dono ki mapping hogi?',
    a: 'Generally ek khasra = ek enrollment. Joint zameen par dono register karein toh system conflict detect karta hai. Ek bhai registered kare ya pehle partition karwao revenue records mein.',
  },
  {
    q: 'Fix hone ke baad kitni installments milengi?',
    a: 'Jitni miss huin sab arrears mein ek saath. 3 missed = ₹6,000 arrears + next ₹2,000 = ₹8,000 single credit. Government paisa nahi rakhti — eligible cycle ka payment guaranteed hai.',
  },
  {
    q: '30 din baad bhi "Pending" dikh raha hai — kya karein?',
    a: 'Acknowledgement lekar Block Agriculture Office wapas jaao. Reference number dikhao. State portal par data upload delay ho sakta hai. Tehsil/SDM office escalate karo agar block level par resolve na ho.',
  },
  {
    q: 'Online land seeding check kar sakte hain ya sirf offline?',
    a: 'Check online hota hai (Beneficiary Status mein). Fix mostly offline — patwari + BAO. Kuch states mein online correction portal hai (jaise MP, Maharashtra) — state agriculture website check karo.',
  },
];

export default function PmKisanLandSeedingStatusCheck({ article }: { article: ArticleMeta }) {
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
            <span className="text-white font-bold">Land Record Integration</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Land Mapping Fix</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Land Seeding No Fix 2026: Patwari Se Khasra Update Karo, Portal Par "Yes" Lao
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

        {/* Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/pm-kisan-land-seeding-status-check.webp'}
            alt="PM Kisan land record integration fix 2026 — patwari khasra update process"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Land Seeding Fix — Patwari → BAO → Portal "Yes"
          </p>
        </div>

        {/* Hook */}
        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 dark:border-amber-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">Sab Kuch Sahi Hai Phir Bhi Paisa Nahi?</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            2 saal se registered. eKYC done. Bank linked. Lekin installment nahi aati. Status check kiya — <strong>"Land Seeding: No"</strong>.
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            Yeh sabse common silent blocker hai. Patwari se Khasra update karwao, BAO form bharo — <strong>25 din mein fix, 3 installments arrears mein ek saath credit.</strong>
          </p>
        </div>

        {/* What Is Land Integration */}
        <section className="mb-8">
          <SH>Land Record Integration Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            PM Kisan portal ko tumhari zameen ka record state Revenue Department se lena padta hai. Yeh connection = land seeding.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <span className="text-3xl block mb-2">📋</span>
              <p className="font-black text-green-800 dark:text-green-300 text-sm">State Records</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Patwari ke paas — Khasra, Khatauni</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-center">
              <span className="text-3xl block mb-2">🔗</span>
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm">Link/Integration</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Record portal se UID se connect</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-center">
              <span className="text-3xl block mb-2">✅</span>
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm">Mapping Done</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">"Land Seeding: Yes" = payment eligible</p>
            </div>
          </div>
          <IB>
            <strong>Simple:</strong> Zameen ka government record PM Kisan se connected = payment milegi. Connected nahi = payment rukegi. Beech mein koi shortcut nahi.
          </IB>
        </section>

        {/* Status Check */}
        <section className="mb-8">
          <SH>Status Kaise Check Karein</SH>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholo</SI>
            <SI n={2}>Farmers Corner → <strong>Beneficiary Status</strong></SI>
            <SI n={3}>UID ya Mobile → Get Data</SI>
            <SI n={4}><strong>"Land Seeding"</strong> field dhundho</SI>
          </StepList>
          <div className="mt-4 space-y-2">
            <div className="flex gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <span className="text-green-700 dark:text-green-400 font-black text-sm shrink-0">✅ Yes</span>
              <span className="text-xs text-[var(--color-text-muted)]">Sab theek. Payment eligible.</span>
            </div>
            <div className="flex gap-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <span className="text-red-700 dark:text-red-400 font-black text-sm shrink-0">❌ No</span>
              <span className="text-xs text-[var(--color-text-muted)]">Problem hai. Neeche fix process follow karo.</span>
            </div>
            <div className="flex gap-3 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <span className="text-amber-700 dark:text-amber-400 font-black text-sm shrink-0">⏳ Pending</span>
              <span className="text-xs text-[var(--color-text-muted)]">Process chal rahi. Timeline neeche dekho.</span>
            </div>
          </div>
        </section>

        {/* 5-Step Fix Process */}
        <section className="mb-8">
          <SH>"Land Seeding: No" Fix — 5 Steps</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har state mein slightly alag. Basic flow same hai:
          </p>
          <StepList>
            <SI n={1}>
              <div>
                <p className="font-bold text-[var(--color-text)]">Patwari/Lekhpal se milo</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Village revenue officer. Bolo: "PM Kisan land integration karwani hai." Latest Khasra-Khatauni nikalo.</p>
              </div>
            </SI>
            <SI n={2}>
              <div>
                <p className="font-bold text-[var(--color-text)]">Documents ready karo</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">UID card + updated Khasra-Khatauni + bank passbook. Photocopies bhi rakho.</p>
              </div>
            </SI>
            <SI n={3}>
              <div>
                <p className="font-bold text-[var(--color-text)]">Block Agriculture Office jaao</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Land Integration correction form milega. Officer help karega fill karne mein.</p>
              </div>
            </SI>
            <SI n={4}>
              <div>
                <p className="font-bold text-[var(--color-text)]">Acknowledgement lo</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Reference number ya stamped copy. Follow-up ke liye zaroori. Kabhi mat bhoolna.</p>
              </div>
            </SI>
            <SI n={5}>
              <div>
                <p className="font-bold text-[var(--color-text)]">15-30 din baad status check</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">Portal par "Land Seeding: Yes" dikhna chahiye. Nahi dikha? Acknowledgement lekar wapas jaao.</p>
              </div>
            </SI>
          </StepList>

          {/* Documents Table */}
          <div className="mt-6 overflow-x-auto rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Kahan</th>
                  <th className="p-3 text-left">Documents</th>
                  <th className="p-3 text-left">Milega</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Patwari/Lekhapal', 'UID + previous Khasra', 'Updated Khasra-Khatauni'],
                  ['Block Agri Office', 'UID + Khasra + Passbook', 'Form submission + acknowledgement'],
                  ['Tehsil/SDM (rare)', 'All above + application', 'Legal correction order'],
                ].map(([where, docs, result], i) => (
                  <tr key={where} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-[var(--color-text)]">{where}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-[var(--color-text-muted)]">{docs}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-green-700 dark:text-green-400 font-medium">{result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-8">
          <SH>Pending Timeline — Kitna Wait Karna Hai?</SH>
          <div className="space-y-3">
            {[
              { time: 'Day 1-7', status: 'BAO ne form receive kiya', action: 'Wait karo' },
              { time: 'Day 7-15', status: 'State portal par upload hota hai', action: '"Pending" normal hai' },
              { time: 'Day 15-30', status: 'PM Kisan portal par reflect', action: '"Yes" dikhna chahiye' },
              { time: '30+ din', status: 'Abhi bhi Pending', action: 'Acknowledgement lekar BAO wapas jaao' },
            ].map(({ time, status, action }) => (
              <div key={time} className="flex gap-3 items-start">
                <span className="bg-amber-500 text-white text-[10px] font-black px-2 py-1 rounded-full shrink-0 whitespace-nowrap mt-0.5">{time}</span>
                <div className="flex-1 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl px-4 py-2.5">
                  <p className="text-sm text-[var(--color-text-muted)]">{status}</p>
                  <p className="text-xs text-green-700 dark:text-green-400 font-medium mt-1">→ {action}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Land Seeding FAQ 2026 — Verified Answers" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="PM Kisan — Land Seeding Status Check"
          guide="Abhi Status Dekho"
          guideHref="/articles/pm-kisan-23vi-kist-2026-status-check"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="🌾"
          title="Apna Arrears Calculate Karo"
          desc="Land seeding fix ke baad kitne installments milenge — turant jaano"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-ekyc-online-2026', l: '🔐 eKYC Guide' },
          { href: '/articles/pm-kisan-payment-failed-status-2026', l: '💸 Payment Fix' },
          { href: '/articles/pm-kisan-name-correction-online-2026', l: '✏️ Name Fix' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}