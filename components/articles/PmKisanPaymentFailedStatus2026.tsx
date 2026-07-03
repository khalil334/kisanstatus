'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-03-20T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-23vi-kist-2026-status-check', title: '23vi Installment Status', emoji: '📅' },
  { slug: 'pm-kisan-ekyc-online-2026', title: 'Digital Verification Guide', emoji: '🔐' },
  { slug: 'pm-kisan-name-correction-online-2026', title: 'Name Correction Guide', emoji: '✏️' },
  { slug: 'pm-kisan-rejected-list-2026', title: 'Application Declined Fix', emoji: '❌' },
  { slug: 'pm-kisan-land-seeding-status-check', title: 'Land Record Linking', emoji: '🌾' },
  { slug: 'pm-kisan-mobile-number-change', title: 'Mobile/Bank/Aadhaar Update', emoji: '📱' },
];

const FAQS_DATA = [
  {
    q: 'Credit declined kyun hota hai?',
    a: 'Common reasons: Aadhaar-bank name mismatch, galat account/IFSC, incomplete digital verification, inactive account, land record pending, ya NPCI mapping issue. Portal par exact reason check karo.',
  },
  {
    q: 'Kya Aadhaar seeding aur NPCI mapping same hai?',
    a: 'Nahi. Aadhaar seeding = bank ne link kiya. NPCI mapping = DBT system mein connection ready. Dono alag processes hain, dono zaroori hain. Bank se specifically "NPCI Aadhaar mapping" karwao.',
  },
  {
    q: 'Purane declined payouts baad mein milte hain?',
    a: 'Haan, bahut baar milte hain. Problem fix hone par saare pending arrears ek saath aa sakte hain. Lekin guarantee nahi — agli installment pakko aayegi agar status active hai.',
  },
  {
    q: 'Fix hone mein kitna time lagta hai?',
    a: 'Bank update: 24-48h. Aadhaar linking: 2-5 din. Digital verification: same day. NPCI mapping: 3-7 din. Land record: 1-3 mahine. Payout agli cycle mein aati hai.',
  },
  {
    q: 'Inactive account mein payout aa sakti hai?',
    a: 'Nahi. Bank account active hona chahiye. ₹100 deposit/withdraw karo — same day active ho jaayega. Phir portal par status check karo.',
  },
  {
    q: 'Reason nahi dikh raha portal par — kya karein?',
    a: '155261 par call karo. Ya bank jao — pucho "Account active hai? NPCI mapping hai?" Written confirmation lo. Email pmkisan-ict@gov.in par screenshot bhejo.',
  },
  {
    q: 'Naam mismatch kaise fix karein?',
    a: 'Bank branch jao Aadhaar card + passbook lekar. Request karo naam exactly Aadhaar jaisa karein. 2-5 working days mein update. Portal par bhi Edit Details se check karo.',
  },
];

export default function PmKisanPaymentFailedStatus2026({ article }: { article: ArticleMeta }) {
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
            <span className="text-white font-bold">Payment Failed Fix</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">DBT Troubleshooting</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Payment Failed Fix 2026: 8 Reasons Kyun Ruk Jaata Hai Paisa + Har Ek Ka Solution
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
            src={article.ogImage || '/images/articles/pm-kisan-payment-failed-status-2026.webp'}
            alt="PM Kisan payment failed fix guide 2026 — DBT declined reasons and solutions"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Payment Declined? Har Problem Ka Step-by-Step Solution
          </p>
        </div>

        {/* Hook */}
        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-800 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-red-800 dark:text-red-300 mb-2">Padosi Ko Paisa Aaya, Aapko Nahi?</h2>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed mb-2">
            Installment cycle aata hai. Padosi ko ₹2,000 aa jaate hain. <strong>Aapke account mein kuch nahi.</strong>
          </p>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed">
            Portal check kiya — Aadhaar bank se properly link nahi tha. CSC gaye, seeding karayi, agle hafte paisa aa gaya. Yeh experience lakhon farmers ka hai. Tension mat lo — reason samjho, fix karo.
          </p>
        </div>

        {/* What Does Failed Mean */}
        <section className="mb-8">
          <SH>Paisa Fail Hona = Paisa Chala Gaya? Nahi.</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Administration ne paisa bheja hai. Kisi technical reason se ruk gaya. Sarkar ne band nahi kiya — bas ek chhoti problem hai jo fix ho sakti hai.
          </p>
          <IB>
            <strong>Good News:</strong> Jab problem fix hoti hai toh kabhi-kabhi saare pending arrears ek saath aa jaate hain. Agli installment pakko aayegi.
          </IB>
        </section>

        {/* 8 Reasons */}
        <section className="mb-8">
          <SH>8 Common Reasons — Kyun Ruk Jaata Hai?</SH>
          <div className="space-y-3">
            {[
              { no: 1, title: 'Aadhaar Name Mismatch', desc: 'Aadhaar mein "Ram Prasad Sharma", bank mein "R. P. Sharma". Chhoti difference bhi rok deti hai.', fix: 'Bank branch jao, Aadhaar + passbook leke. Naam exactly same karwao. 2-5 din.' },
              { no: 2, title: 'Bank Account Number Galat', desc: 'Account change kiya lekin portal pe purana. Ya ek digit galat likh diya.', fix: 'Portal → Edit Aadhaar Details → Naya account + IFSC → OTP verify. 24-48h.' },
              { no: 3, title: 'Wrong IFSC Code', desc: 'Branch ka IFSC badal gaya, purana daal rakha. Paisa galat branch ya wapas.', fix: 'Latest passbook lo. Sahi IFSC portal pe update karo.' },
              { no: 4, title: 'Digital Verification Incomplete', desc: '2022 se mandatory. Bina verification ke koi installment nahi — chahe baaki sab sahi ho.', fix: 'CSC ya portal par OTP se karo. Same day complete.' },
              { no: 5, title: 'Land Record Pending', desc: 'Sab sahi lekin zameen ka record tehsil mein verify nahi hua.', fix: 'Revenue office jao. Land record correction karwao. 1-3 mahine.' },
              { no: 6, title: 'NPCI Mapping Missing', desc: 'Bank mein Aadhaar link hai lekin NPCI system mein nahi. DBT ke liye alag mapping chahiye.', fix: 'Bank jao, specifically bolo "NPCI Aadhaar mapping." Normal seeding ≠ NPCI.' },
              { no: 7, title: 'Inactive Bank Account', desc: 'Kafi dinon se transaction nahi = account dormant. Dormant mein paisa nahi aata.', fix: '₹100 deposit/withdraw karo. Same day active.' },
              { no: 8, title: 'Duplicate Beneficiary', desc: 'Ek family mein do naam registered. Ek family = ek quota.', fix: 'Ek voluntarily band karwao. District Agriculture Office se resolve.' },
            ].map(({ no, title, desc, fix }) => (
              <div key={no} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
                <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5 flex items-center gap-2">
                  <span className="bg-red-600 text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center shrink-0">{no}</span>
                  <p className="font-black text-red-800 dark:text-red-300 text-sm">{title}</p>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-xs text-[var(--color-text-muted)]">{desc}</p>
                  <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0 mt-0.5">FIX:</span>
                    <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">{fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Status Check Steps */}
        <section className="mb-8">
          <SH>Exact Reason Kaise Pata Karein</SH>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholo</SI>
            <SI n={2}>Farmers Corner → <strong>Beneficiary Status</strong></SI>
            <SI n={3}>12-digit Aadhaar + captcha → <strong>Get OTP</strong></SI>
            <SI n={4}>OTP enter → Submit</SI>
            <SI n={5}>Status dikhega: Success / Declined / Pending + <strong>exact failure reason</strong></SI>
          </StepList>
          <WB>
            <strong>OTP Nahi Aa Raha?</strong> myAadhaar.uidai.gov.in par check karo kaunsa number linked hai. Band number = CSC jaake biometric se status check karo.
          </WB>
        </section>

        {/* Fix Timeline Table */}
        <section className="mb-8">
          <SH>Kitna Time Lagta Hai Fix Hone Mein?</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Problem</th>
                  <th className="p-3 text-left">Fix Time</th>
                  <th className="p-3 text-left">Payout Kab</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Bank Account Update', '24-48 ghante', 'Agli installment'],
                  ['Aadhaar Linking', '2-5 din', 'Agli installment'],
                  ['Digital Verification', 'Same day', '15-30 din'],
                  ['IFSC Code Fix', '2-3 din', 'Agli installment'],
                  ['NPCI Mapping', '3-7 din', 'Agli installment'],
                  ['Account Activation', 'Same day', 'Agli installment'],
                  ['Land Record Fix', '1-3 mahine', 'Verify hone ke baad'],
                  ['Duplicate Resolution', '15-30 din', 'Resolve hone ke baad'],
                ].map(([problem, fixTime, payout], i) => (
                  <tr key={problem} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{problem}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{fixTime}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-medium">{payout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <WB>
            <strong>Note:</strong> Purane arrears kabhi-kabhi ek saath aate hain fix hone par. Guarantee nahi — lekin agli installment pakko agar status active hai.
          </WB>
        </section>

        {/* Mistakes To Avoid */}
        <section className="mb-8">
          <SH>Yeh Galtiyan Mat Karna</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { tip: 'Bas intezar mat karo', detail: 'Portal pe reason dekho — action lo' },
              { tip: 'Fake websites pe mat jaao', detail: 'Sirf pmkisan.gov.in official hai' },
              { tip: 'Digital verification ignore mat karo', detail: '"Ho jayega" sochoge toh ruk jaayegi' },
              { tip: 'Agent ko paisa mat do', detail: 'Sab free hai — fraud se bacho' },
              { tip: 'Naya account update mat bhoolo', detail: 'Turant portal pe daalo' },
              { tip: 'Mobile band mat rakho', detail: 'OTP aur updates usi par aate hain' },
            ].map(({ tip, detail }) => (
              <div key={tip} className="flex gap-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-xl">
                <span className="text-red-600 dark:text-red-400 font-black text-sm shrink-0 mt-0.5">✗</span>
                <div>
                  <p className="font-black text-red-800 dark:text-red-300 text-xs">{tip}</p>
                  <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Escalation Path */}
        <section className="mb-8">
          <SH>Sab Kiya Phir Bhi Nahi Aaya? Escalation Path</SH>
          <StepList>
            <SI n={1}><strong>Helpline Call:</strong> 155261 ya 1800-180-1551 (9 AM - 6 PM)</SI>
            <SI n={2}><strong>Email:</strong> pmkisan-ict@gov.in — Aadhaar + bank detail + screenshot</SI>
            <SI n={3}><strong>District Agriculture Office:</strong> ADO/BAO se milo, written application do</SI>
            <SI n={4}><strong>Online Grievance:</strong> Portal par Grievance section — 15 din mein jawab</SI>
            <SI n={5}><strong>Last Resort:</strong> MP/MLA ko application — agar sab fail</SI>
          </StepList>
        </section>

        {/* Prevention Tips */}
        <section className="mb-8">
          <SH>Future Mein Problem Se Bacho</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: '📋', tip: 'Har 3 mahine status check', detail: 'Installment announce hone ke 7-10 din baad' },
              { icon: '📒', tip: 'Updated passbook copy rakho', detail: 'Emergency mein kaam aata hai' },
              { icon: '🔤', tip: 'Aadhaar-bank naam same', detail: 'Abhi theek karwa lo agar alag hai' },
              { icon: '📱', tip: 'Mobile active rakho', detail: 'Band hua = turant update karo' },
              { icon: '🏢', tip: 'CSC se rishta rakho', detail: 'Kaam mein madad karte hain' },
              { icon: '🌾', tip: 'Land record yearly check', detail: 'Har saal tehsil mein confirm karo' },
            ].map(({ icon, tip, detail }) => (
              <div key={tip} className="flex gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl">
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <p className="font-black text-[var(--color-text)] text-xs">{tip}</p>
                  <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Real Sawal — Seedhe Jawaab
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Payment Failed FAQ 2026 — Verified Solutions" />
        </section>

        {/* Helpline Box */}
        <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200 dark:border-green-800 p-5 mb-8">
          <h3 className="font-black text-[var(--color-text)] mb-3 text-base">Official Helpline</h3>
          <div className="text-sm text-[var(--color-text-muted)] space-y-1">
            <p>📞 Toll Free: <a href="tel:155261" className="font-bold text-[var(--color-primary)] hover:underline">155261</a></p>
            <p>📞 Delhi: <a href="tel:01124300606" className="font-bold text-[var(--color-primary)] hover:underline">011-24300606</a></p>
            <p>📧 Email: <a href="mailto:pmkisan-ict@gov.in" className="font-bold text-[var(--color-primary)] hover:underline">pmkisan-ict@gov.in</a></p>
          </div>
        </div>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="Beneficiary Status — Official Portal"
          guide="Abhi Reason Check Karo"
          guideHref="/articles/pm-kisan-ekyc-online-2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="💸"
          title="Apna Arrears Calculate Karo"
          desc="Kitne installments miss hue, kitna paisa banega — turant jaano"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-ekyc-online-2026', l: '🔐 eKYC Guide' },
          { href: '/articles/pm-kisan-name-correction-online-2026', l: '✏️ Name Fix' },
          { href: '/articles/pm-kisan-land-seeding-status-check', l: '🌾 Land Fix' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}