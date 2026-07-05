'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-07-06T08:00:00+05:30';
const MODIFIED = '2026-07-06T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Generated Meaning', emoji: '💳' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status', emoji: '📅' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List', emoji: '📋' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Guide', emoji: '🔐' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Loan Guide', emoji: '💰' },
];

const FAQS_DATA = [
  {
    q: 'Payment failed dikh raha hai par status approved hai — kyun?',
    a: 'Bank account mein Aadhaar seed nahi hua ya NPCI mapping missing hai. Paisa government ne bheja lekin bank ne accept nahi kiya. Branch jao, Aadhaar seeding form bharo.',
  },
  {
    q: 'Kitne din mein payment fix hoti hai?',
    a: 'Aadhaar seeding ke baad 3-7 working days. NPCI remapping mein 7-15 din lag sakte hain. Agar 20 din se zyada ho jaye toh helpline 155261 par call karo.',
  },
  {
    q: 'Kya ruki hui kist ka paisa wapas milega?',
    a: 'Haan bhai, arrears milte hain. Jab problem fix hogi toh pichhli pending kistein ek saath aa jayengi. Koi installment permanently lost nahi hoti.',
  },
  {
    q: 'Wrong IFSC code se payment fail hui — ab kya karein?',
    a: 'Portal par jakar bank details update karo. Farmers Corner → Edit Aadhaar/Bank Details → sahi IFSC daalo. Ya CSC jao, operator fix kar dega.',
  },
  {
    q: 'Account dormant ho gaya hai — payment aayegi?',
    a: 'Nahi aayegi. Pehle account active karwao bank mein. ₹100 deposit karo ya KYC update karo. Phir seeding verify karo.',
  },
  {
    q: 'Joint account mein payment fail ho rahi hai?',
    a: 'PM Kisan sirf individual savings account mein paisa bhejta hai. Joint, current, ya business account accept nahi hote. Naya individual account kholo aur update karo.',
  },
  {
    q: 'Helpline par baat nahi ho rahi — alternative kya hai?',
    a: 'Email karo: pmkisan-ict@gov.in. Ya district agriculture officer se milo. CSC par grievance register karwao — written complaint sabse effective hai.',
  },
];

export default function PmKisanPaymentFailedFix2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Payment Fix Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">💸 Payment Troubleshooting</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Payment Failed 2026: Bank Mein Paisa Kyun Nahi Aaya? 7 Real Reasons + Turant Fix
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

        {/* IMAGE 1: Hero */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/pm-kisan-payment-failed-fix-2026/payment-failed-hero.webp'}
            alt="PM Kisan payment failed fix guide 2026 — bank rejection reasons and solutions"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Payment Failed ≠ Paisa Gaya. Problem Fix Karo, Arrears Milenge.
          </p>
        </div>

        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-red-800 dark:text-red-300 mb-2">Sabse Pehle Yeh Samjho</h2>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed mb-2">
            "Payment Failed" dekh kar ghabrao mat bhai. Iska matlab yeh nahi ki paisa chala gaya. Government ne aapke naam par fund release kiya hai — bas bank tak pahunchne mein rukawat aayi hai.
          </p>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed">
            Jab aap reason fix karoge, toh <strong>pichhli sabhi pending kistein ek saath aa jayengi.</strong> Koi installment permanently lost nahi hoti. Ab neeche padho — kaunsi problem hai aur kaise theek karni hai.
          </p>
        </div>

        <section className="mb-8">
          <SH>Payment Fail Kyun Hoti Hai? Asli Wajah</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Portal par "Approved" dikhta hai lekin bank account khali. Yeh confusion hazaron kisanon ko hoti hai har kist mein. Root cause almost hamesha yahi hoti hai — <strong>bank account properly mapped nahi hai DBT system se.</strong>
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Government PFMS (Public Financial Management System) ke through paisa bhejti hai. PFMS ko aapka sahi bank account, sahi IFSC, aur Aadhaar link chahiye. Inme se ek bhi cheez galat ho toh transaction bounce ho jata hai. Chalo dekhte hain exactly kahan gadbad hai.
          </p>
        </section>

        {/* IMAGE 2: Failure Reasons Infographic */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-payment-failed-fix-2026/failure-reasons-infographic.webp"
            alt="PM Kisan payment failure 7 reasons infographic — visual diagnosis chart"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            7 Common Reasons — Apni Problem Identify Karo
          </p>
        </div>

        <section className="mb-8">
          <SH>Reason #1: Aadhaar Seeding Nahi Hui (Sabse Common)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            70% payment failures ka ek hi karan — bank account mein Aadhaar seed nahi hua. Dhyan rako, <strong>Aadhaar link hona aur Aadhaar seed hona alag cheez hai.</strong> Link ka matlab UIDAI database mein connection. Seed ka matlab NPCI mapper mein aapka Aadhaar us specific bank account se juda hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bank wale aksar bol dete hain "link ho gaya" lekin seeding nahi karte. Aapko specifically bolna padega — <em>"DBT Aadhaar seeding karo."</em>
          </p>
          <StepList>
            <SI n={1}>Apni bank branch jao — passbook aur Aadhaar card leke</SI>
            <SI n={2}>Counter par bolo: <strong>"DBT ke liye Aadhaar seeding karni hai"</strong></SI>
            <SI n={3}>Form milega — bharo, sign karo, submit karo</SI>
            <SI n={4}><strong>Receipt maango</strong> — proof ke liye zaroori hai</SI>
            <SI n={5}>3-7 working days mein seeding complete ho jayegi</SI>
          </StepList>
          <IB>
            <strong>Pro Tip:</strong> Kuch banks net banking ya mobile app se bhi seeding allow karte hain. SBI, PNB, BOB mein yeh option available hai. Branch jaane se pehle app check kar lo.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Reason #2: Galat IFSC Code</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            IFSC code ek digit bhi galat ho toh paisa wrong branch chala jata hai ya bounce ho jata hai. Aksar registration ke waqt operator jaldi mein galat code daal deta hai, ya phir bank merger ke baad purana code portal par reh jata hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Recent mergers mein yeh problem bahut common hai — Punjab National Bank + Oriental Bank + United Bank = naya IFSC. Agar aapka bank merge hua hai toh purana code ab kaam nahi karega.
          </p>
          <StepList>
            <SI n={1}>Apni passbook ya cheque book se <strong>naya IFSC</strong> check karo</SI>
            <SI n={2}>pmkisan.gov.in → Farmers Corner → <strong>Edit Bank Details</strong></SI>
            <SI n={3}>Sahi IFSC daalo → OTP verify karo → Save</SI>
            <SI n={4}>Ya CSC jao — operator update kar dega</SI>
          </StepList>
          <WB>
            <strong>Bank Merger Check:</strong> Agar aapka bank pichhle 2 saal mein merge hua hai (Allahabad Bank, Andhra Bank, Syndicate Bank, etc.) toh IFSC zaroor update karo. RBI website par new IFSC list available hai.
          </WB>
        </section>

        {/* IMAGE 3: Bank Visit Checklist */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-payment-failed-fix-2026/bank-visit-checklist.webp"
            alt="Bank visit checklist for PM Kisan payment fix — documents and steps visual guide"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Bank Jaane Se Pehle Yeh Documents Ready Rakho
          </p>
        </div>

        <section className="mb-8">
          <SH>Reason #3: Dormant / Inoperative Account</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agar 12 mahine se account mein koi transaction nahi hua toh bank use dormant mark kar deta hai. Dormant account mein DBT credit nahi hota — paisa wapas PFMS ko return ho jata hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Yeh un kisanon ke saath hota hai jo PM Kisan ke alawa bank account use nahi karte. Solution simple hai — account reactivate karo.
          </p>
          <StepList>
            <SI n={1}>Branch jao → <strong>KYC update form</strong> maango</SI>
            <SI n={2}>Aadhaar + photo submit karo</SI>
            <SI n={3}><strong>₹100 cash deposit</strong> karo — account active ho jayega same day</SI>
            <SI n={4}>Aadhaar seeding bhi saath mein karwa lo</SI>
          </StepList>
        </section>

        <section className="mb-8">
          <SH>Reason #4: Joint / Current / Business Account</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            PM Kisan sirf <strong>individual savings account</strong> mein paisa bhejta hai. Joint account (husband-wife), current account, ya business account accept nahi hote. Bahut se kisan galti se joint account register karwa lete hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Fix: Naya individual savings account kholo (zero balance wala bhi chalega). Phir portal par bank details update karo. Aadhaar seeding naye account par karwao.
          </p>
          <DB>
            <strong>Important:</strong> Naya account kholne ke baad kam se kam 24-48 ghante wait karo before updating portal. Bank ko NPCI mapper mein entry reflect hone mein time lagta hai.
          </DB>
        </section>

        <section className="mb-8">
          <SH>Reason #5: Name Mismatch</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Portal par naam "RAMESH KUMAR" hai, bank mein "RAMESH KUAMR" — ek spelling difference aur payment reject. PFMS name matching bahut strict hai. Even father's name mismatch bhi reject kar sakta hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Teen jagah naam exactly same hona chahiye: <strong>Aadhaar card = Bank records = PM Kisan portal.</strong>
          </p>
          <StepList>
            <SI n={1}>Teeno documents compare karo — letter by letter</SI>
            <SI n={2}>Agar portal par galat hai → Farmers Corner → <strong>Name Correction</strong></SI>
            <SI n={3}>Agar bank mein galat hai → Branch jao → correction form bharo</SI>
            <SI n={4}>Agar Aadhaar mein galat hai → UIDAI centre jao → correction karwao</SI>
          </StepList>
        </section>

        <section className="mb-8">
          <SH>Reason #6 & #7: Minor Issues Jo Ignore Ho Jate Hain</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-2">❌ Account Number Galat</p>
              <p className="text-xs text-[var(--color-text-muted)] mb-3">
                Registration mein ek digit miss ho gaya ya extra digit aa gayi. Passbook se match karo. Portal par edit karo ya CSC jao.
              </p>
              <p className="text-xs text-green-700 dark:text-green-400 font-bold">Fix: Edit Bank Details → Sahi number daalo</p>
            </div>
            <div className="p-5 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <p className="font-black text-purple-800 dark:text-purple-300 text-sm mb-2">❌ PFMS Server Issue</p>
              <p className="text-xs text-[var(--color-text-muted)] mb-3">
                Kabhi kabhi PFMS server overload hota hai kist release ke din. Transaction stuck rehta hai. Yeh temporary hai — 48-72 ghante mein auto-resolve hota hai.
              </p>
              <p className="text-xs text-green-700 dark:text-green-400 font-bold">Fix: 3 din wait karo, phir status check karo</p>
            </div>
          </div>
        </section>

        {/* IMAGE 4: Success After Fix */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-payment-failed-fix-2026/payment-success-after-fix.webp"
            alt="PM Kisan payment success after bank fix — credited amount in bank account"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Problem Fix Ke Baad — Paisa + Arrears Dono Milte Hain
          </p>
        </div>

        <section className="mb-8">
          <SH>Step-by-Step Action Plan — Aaj Hi Shuru Karo</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Confused ho kahan se start karein? Yeh sequence follow karo — maximum cases mein pehle 3 steps se fix ho jata hai.
          </p>
          <StepList>
            <SI n={1}><strong>Status check karo:</strong> pmkisan.gov.in → Beneficiary Status → exact error message note karo</SI>
            <SI n={2}><strong>Bank jao:</strong> Aadhaar seeding + account active status + IFSC verification — teeno ek visit mein</SI>
            <SI n={3}><strong>Portal verify karo:</strong> Bank details, naam, Aadhaar number — sab cross-check karo</SI>
            <SI n={4}><strong>3-7 din wait karo:</strong> Seeding/remapping mein time lagta hai</SI>
            <SI n={5}><strong>Phir status check:</strong> Agar abhi bhi fail hai → 155261 par call karo ya email karo</SI>
            <SI n={6}><strong>CSC visit (last resort):</strong> Grievance register karwao — written complaint sabse effective</SI>
          </StepList>
        </section>

        <section className="mb-8">
          <SH>Arrears Ka Sach — Ruki Hui Kistein Wapas Milengi?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Haan bhai, <strong>100% milengi.</strong> PM Kisan mein koi installment expire nahi hoti. Jab aapki problem resolve hogi, system automatically pichhli sabhi pending kistein process karega.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Example: Agar 22vi, 23vi, aur 24vi teeno fail hui hain, toh fix hone par ₹6,000 ek saath aayenge. Kabhi kabhi arrears alag transaction mein aate hain — toh agar ek kist aayi aur baaki nahi, toh 7-10 din aur wait karo.
          </p>
          <IB>
            <strong>Real Case:</strong> Bihar ke ek kisan ka account dormant tha. 4 kistein fail hui thi (₹8,000). Account activate + seeding karwayi. 12 din mein poore ₹8,000 ek saath credit hue.
          </IB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Payment Failed FAQ 2026 — Ground-Level Answers" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Seedhi Baat</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Payment failed dekh kar pareshan mat ho bhai. Yeh fixable hai. 90% cases mein bank visit + Aadhaar seeding se solve ho jata hai. Bas aaj hi shuru karo — kal ka wait mat karo. Jitni jaldi fix karoge, utni jaldi arrears aayenge. Aur haan — kisi ko paisa mat do is kaam ke liye. Sab free hai.
          </p>
        </div>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="PM Kisan Beneficiary Status — Check Payment"
          guide="Abhi Status Dekho"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="💸"
          title="Kitne Arrears Milenge?"
          desc="Missed kistein count karo — total pending amount jaano"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calc' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-fto-generated-ka-matlab-kya-hai', l: '💳 FTO Guide' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
          { href: '/articles/PmKisanEkycOnline2026', l: '🔐 eKYC' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}