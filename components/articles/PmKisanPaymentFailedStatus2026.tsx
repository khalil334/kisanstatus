'use client';

import Link from 'next/link';
import { SvgFAQ } from '@/components/ArticleSVGs';
import { SI, StepList, IB, WB, DB, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, fmtDate } from '@/components/ArticleShared';

const PUBLISHED = '2026-03-20T08:00:00+05:30';
const MODIFIED  = '2026-06-22T08:00:00+05:30';
const DOMAIN = 'https://kisanstatus.com';
const URL    = `${DOMAIN}/articles/pm-kisan-payment-failed-status-2026`;

const schemas = [
  {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Beneficiary Credit Declined 2026 — Reasons & Solutions',
    description: 'Scheme payout unsuccessful 2026 — error codes, identity mismatch, financial verification problems aur step-by-step solutions.',
    image: `${DOMAIN}/images/payment-success.webp`,
    datePublished: PUBLISHED, dateModified: MODIFIED,
    author: { '@type': 'Organization', name: 'KisanStatus Team', url: `${DOMAIN}/about` },
    publisher: { '@type': 'Organization', name: 'KisanStatus.com', url: DOMAIN },
    mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
    inLanguage: 'hi-IN',
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: `${DOMAIN}/articles` },
      { '@type': 'ListItem', position: 3, name: 'Credit Transfer Declined Fix 2026', item: URL },
    ],
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Beneficiary credit declined kyun hota hai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Common reasons: Aadhaar-bank name mismatch, galat account number/IFSC, incomplete digital verification, inactive financial account, land record pending, ya NPCI mapping issue. pmkisan.gov.in par exact reason check karo.' } },
      { '@type': 'Question', name: 'Credit transfer verification online kaise check karein?',
        acceptedAnswer: { '@type': 'Answer', text: 'pmkisan.gov.in → Farmers Corner → Beneficiary Status → Aadhaar number dalo → OTP verify karo → Status + failure reason dikhega.' } },
      { '@type': 'Question', name: 'Aadhaar name mismatch kaise fix karein?',
        acceptedAnswer: { '@type': 'Answer', text: 'Bank branch jao Aadhaar card + passbook lekar. Request karo naam exactly Aadhaar jaisa karein. 2-5 working days mein update hota hai.' } },
      { '@type': 'Question', name: 'NPCI mapping kya hai?',
        acceptedAnswer: { '@type': 'Answer', text: 'NPCI Aadhaar ko bank account se DBT ke liye map karta hai. Bank mein Aadhaar link hona alag hai, NPCI mapping alag. Bank se specifically NPCI Aadhaar mapping karwao.' } },
      { '@type': 'Question', name: 'Payout fix hone mein kitna time lagta hai?',
        acceptedAnswer: { '@type': 'Answer', text: 'Bank update: 24-48 hours. Aadhaar linking: 2-5 din. Digital verification: same day. NPCI mapping: 3-7 din. Land record: 1-3 mahine. Payout agli cycle mein aati hai.' } },
    ],
  },
];

const RELATED = [
  { slug: 'pm-kisan-23vi-kist-2026-status-check', title: '23vi Installment Verification', emoji: '📅' },
  { slug: 'pm-kisan-ekyc-online-2026', title: 'Digital Verification Guide', emoji: '🔐' },
  { slug: 'pm-kisan-name-correction-online-2026', title: 'Name Correction Guide', emoji: '✏️' },
  { slug: 'pm-kisan-rejected-list-2026', title: 'Application Declined Fix', emoji: '❌' },
  { slug: 'pm-kisan-land-seeding-status-check', title: 'Land Record Linking', emoji: '🌾' },
  { slug: 'pm-kisan-registration-online-2026', title: 'New Enrollment', emoji: '📝' },
];

export default function PmKisanPaymentFailedStatus2026() {
  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      {/* Header */}
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link><span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link><span>/</span>
            <span className="text-white font-bold">Credit Transfer Fix Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">💸 Payout Fix Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Beneficiary Credit Declined 2026 — Reasons & Step-by-Step Solutions
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
          <img
            src="/images/payment-success.webp"
            alt="Beneficiary credit transfer declined 2026 — Reasons and Solutions Guide"
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            loading="lazy" width="1200" height="630"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">Credit Transfer Declined? Har Problem Ka Solution Hai — Step-by-Step Guide</p>
        </div>

        {/* Problem statement — no fake story */}
        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-800 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-red-800 dark:text-red-300 mb-2">🚨 Common Problem — Credit Ruk Gaya?</h2>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed mb-2">
            Bahut se farmers ko yeh experience hota hai. Installment cycle aata hai, padosi ko ₹2000 aa jaate hain — <strong>lekin aapke account mein kuch nahi.</strong>
          </p>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed">
            Portal check karte hain toh pata chalta hai — <strong>Aadhaar bank se properly link nahi tha.</strong> CSC center gaye, Aadhaar seeding karaya, agle hafte paisa aa gaya. Yeh experience lakhon farmers ka hai. Tension mat lo — reason samjho, fix karo, paisa zarur aayega.
          </p>
        </div>

        {/* What is Payment Failed */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            1. Credit Transfer Declined — Kya Matlab Hota Hai?
          </h2>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Administration ne paisa bheja jarur hai. Lekin kisi technical reason se woh ruk gaya hai. Iska matlab yeh nahi ki paisa chala gaya ya sarkar ne band kar diya.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">Bas thodi si problem hai jo fix ho sakti hai.</p>
          <IB>
            <strong>✅ Good News:</strong> Jab problem fix hoti hai, toh kabhi-kabhi saare pending payouts ek saath aa jate hain. Aur agli installment pakko aayegi.
          </IB>
        </section>

        {/* Top 8 Reasons */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            2. 8 Common Reasons — Payout Kyun Fail Hoti Hai?
          </h2>
          <div className="space-y-3">
            {[
              { no: 1, title: 'Aadhaar Name Mismatch', desc: 'Aadhaar mein "Ram Prasad Sharma" aur bank mein "R. P. Sharma" — chhoti si difference bhi payout rok sakti hai.', fix: 'Bank branch jao, Aadhaar + passbook leke jao. Naam exactly same karwao. 2-5 din mein fix.' },
              { no: 2, title: 'Bank Account Number Galat', desc: 'Account change kiya lekin portal pe purana number hai. Ya likhte waqt ek digit galat ho gaya.', fix: 'Portal pe login → Edit Aadhaar Details → Naya account number + IFSC dalo → OTP verify. 24-48 ghante.' },
              { no: 3, title: 'Wrong IFSC Code', desc: 'Branch ka IFSC change ho gaya, lekin purana daal rakha hai. Paisa galat branch mein jayega ya wapas aayega.', fix: 'Latest passbook lo bank se. Sahi IFSC portal pe update karo.' },
              { no: 4, title: 'Digital Verification Incomplete', desc: '2022 se digital verification mandatory hai. Bina verification ke koi installment nahi aayegi — chahe baaki sab sahi ho.', fix: 'CSC center ya bank jao. Aadhaar card leke jao. Same day complete.' },
              { no: 5, title: 'Land Record Verification Pending', desc: 'Aadhaar, bank, digital verification sab sahi — lekin zameen ka record tehsil mein verify nahi hua.', fix: 'Tehsil/revenue office jao. Pucho "Mera land record verify hua hai kya?" Correction karwao.' },
              { no: 6, title: 'NPCI Mapping Issue', desc: 'Bank mein Aadhaar link hai, lekin NPCI system mein nahi. DBT ke liye NPCI mapping zaroori hai.', fix: 'Bank jao, specifically bolo — "NPCI Aadhaar mapping karna hai." Normal seeding alag hai.' },
              { no: 7, title: 'Inactive Bank Account', desc: 'Kafi dinon se transaction nahi kiya toh bank account inactive kar deta hai. Inactive mein paisa nahi aata.', fix: 'Bank jao, ₹100 deposit/withdraw karo. Account active ho jayega same day.' },
              { no: 8, title: 'Duplicate Beneficiary', desc: 'Ek hi family mein do naam registered hain. Administration ek family ko ek hi quota deti hai.', fix: 'Ek ko voluntarily band karwao. Ek family = one beneficiary.' },
            ].map(({ no, title, desc, fix }) => (
              <div key={no} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
                <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5 flex items-center gap-2">
                  <span className="bg-red-600 text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center shrink-0">{no}</span>
                  <p className="font-black text-red-800 dark:text-red-300 text-sm">{title}</p>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-xs text-[var(--color-text-muted)]">{desc}</p>
                  <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0">✅ FIX:</span>
                    <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">{fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Check Status */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            3. Payout Verification Online Kaise Check Karein?
          </h2>
          <StepList>
            <SI n={1}>Browser mein <strong>pmkisan.gov.in</strong> kholo</SI>
            <SI n={2}>Homepage par <strong>"Farmers Corner"</strong> click karo</SI>
            <SI n={3}><strong>"Beneficiary Status"</strong> select karo</SI>
            <SI n={4}>Apna <strong>12-digit Aadhaar number</strong> dalo + captcha bharo</SI>
            <SI n={5}><strong>"Get OTP"</strong> click karo — mobile par verification code aayega</SI>
            <SI n={6}>Verification code enter karo → <strong>Submit</strong></SI>
            <SI n={7}>Status dikhega — Success / Declined / Pending + <strong>exact reason</strong></SI>
          </StepList>
          <IB>
            <strong>💡 Tip:</strong> Verification code ke liye Aadhaar-linked active mobile zaroori hai. Agar code nahi aa raha toh pehle myAadhaar.uidai.gov.in par check karo kaunsa number linked hai.
          </IB>
        </section>

        {/* Correction Time Table */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            4. Kitna Time Lagta Hai Fix Hone Mein?
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Problem</th>
                  <th className="p-3 text-left">Fix Time</th>
                  <th className="p-3 text-left">Payout Kab Aayegi</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Aadhaar Linking', '2-5 din', 'Agli installment mein'],
                  ['Bank Account Update', '24-48 ghante', 'Agli installment mein'],
                  ['Digital Verification Complete', 'Same day', '15-30 din'],
                  ['IFSC Code Fix', '2-3 din', 'Agli installment mein'],
                  ['NPCI Mapping', '3-7 din', 'Agli installment mein'],
                  ['Account Activation', 'Same day', 'Agli installment mein'],
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
            <strong>⚠️ Dhyan Rahe:</strong> Purane declined payouts kabhi-kabhi ek saath aa jate hain jab problem fix hoti hai. Lekin guarantee nahi hai. Agli installment pakko aayegi.
          </WB>
        </section>

        {/* Common Mistakes */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            5. Ye Galtiyan Mat Karna
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: '❌', tip: 'Verification check nahi karna', detail: 'Bas intezar mat karo — portal pe reason dekho' },
              { icon: '❌', tip: 'Fake websites pe jaana', detail: 'Sirf pmkisan.gov.in use karo' },
              { icon: '❌', tip: 'Digital verification ignore karna', detail: '"Ho jayega" sochoge toh installment ruk jayegi' },
              { icon: '❌', tip: 'Agent ko paisa dena', detail: 'Administration free mein karti hai — fraud se bacho' },
              { icon: '❌', tip: 'Account band karke bhool jaana', detail: 'Naya account turant portal pe update karo' },
              { icon: '❌', tip: 'Mobile number band rakhna', detail: 'Verification code aur updates usi par aate hain' },
            ].map(({ icon, tip, detail }) => (
              <div key={tip} className="flex gap-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-xl">
                <span className="text-xl shrink-0">{icon}</span>
                <div>
                  <p className="font-black text-red-800 dark:text-red-300 text-xs">{tip}</p>
                  <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* If Not Resolved */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            6. Sab Kuch Kiya Phir Bhi Paisa Nahi Aaya?
          </h2>
          <StepList>
            <SI n={1}><strong>Toll-Free Call Karo:</strong> 155261 ya 1800-180-1551 (9 AM - 6 PM)</SI>
            <SI n={2}><strong>Email Karo:</strong> pmkisan-ict@gov.in — Aadhaar + bank detail + screenshot bhejo</SI>
            <SI n={3}><strong>District Agriculture Office Jao:</strong> ADO se milo</SI>
            <SI n={4}><strong>Online Grievance Daalo:</strong> Portal pe Grievance section mein shikayat darj karo — 15 din mein jawab</SI>
            <SI n={5}><strong>MP/MLA Ko Application Do:</strong> Agar sab fail ho jaye</SI>
          </StepList>
        </section>

        {/* Practical Tips */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            7. Practical Advice — Future Mein Problem Se Bacho
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: '📋', tip: 'Har 3 mahine mein verification check karo', detail: 'Installment announce hone ke 7-10 din baad check karo' },
              { icon: '📒', tip: 'Updated passbook photocopy rakho', detail: 'Emergency mein kaam aata hai' },
              { icon: '🔤', tip: 'Aadhaar-bank naam same rakho', detail: 'Abhi theek karwa lo agar alag hai' },
              { icon: '📱', tip: 'Mobile number active rakho', detail: 'Band hua toh turant update karo' },
              { icon: '🏢', tip: 'CSC se achcha rishta rakho', detail: 'Administration kaam mein madad karte hain' },
              { icon: '🌾', tip: 'Land record yearly check karo', detail: 'Har saal tehsil mein pucho — record sahi hai?' },
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
            8. FAQ — Real Questions, Direct Answers
          </h2>
          <SvgFAQ caption="Credit Transfer Declined FAQ 2026 — Real Solutions" />
          <div className="space-y-3 mt-4">
            {[
              { q: 'Beneficiary credit kab aata hai?', a: 'Har saal 3 installments — har 4 mahine mein ek baar. Exact date administration announce karti hai. Official portal par nazar rakhein.' },
              { q: 'Kya purane declined payouts baad mein milte hain?', a: 'Haan, bahut baar milte hain. Problem fix hone par administration saare pending payouts ek saath bhej deti hai. Lekin guarantee nahi hai.' },
              { q: 'Kya Aadhaar seeding aur NPCI mapping same hai?', a: 'Nahi! Aadhaar seeding = bank ne link kiya. NPCI mapping = disbursement system mein connection ready. Dono hona zaroori hai.' },
              { q: 'Inactive account mein payout aa sakti hai?', a: 'Nahi. Bank account active hona chahiye. ₹100 deposit/withdraw karo — same day active ho jayega.' },
              { q: 'Payout declined dikha raha hai lekin reason nahi dikh raha?', a: 'Direct 155261 par call karo. Ya bank jao — pucho "Account active hai kya? NPCI mapping hai kya?"' },
            ].map(({ q, a }) => (
              <details key={q} className="border border-[var(--color-border)] rounded-xl overflow-hidden group">
                <summary className="p-4 font-semibold text-[var(--color-text)] cursor-pointer bg-[var(--color-bg-alt)] hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                  <span>{q}</span>
                  <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="p-4 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]">{a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Helpline */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/10 rounded-2xl border border-green-200 dark:border-green-800 p-5 mb-8">
          <h3 className="font-black text-[var(--color-text)] mb-3 text-base">📞 Official Helpline</h3>
          <div className="text-sm text-[var(--color-text-muted)] space-y-1">
            <p>📞 Toll Free: <a href="tel:155261" className="font-bold text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">155261</a></p>
            <p>📞 Helpline: <a href="tel:01124300606" className="font-bold text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">011-24300606</a></p>
            <p>📧 Email: <a href="mailto:pmkisan-ict@gov.in" className="font-bold text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">pmkisan-ict@gov.in</a></p>
            <p>🌐 Portal: <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="font-bold text-[var(--color-primary)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">pmkisan.gov.in ↗</a></p>
          </div>
        </div>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="Beneficiary Verification — Official Portal"
          guide="Abhi Verification Check Karo"
          guideHref="/articles/pm-kisan-ekyc-online-2026"
        />

        <CalcBanner />
        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav />
        <Disclaimer />
      </div>
    </>
  );
}