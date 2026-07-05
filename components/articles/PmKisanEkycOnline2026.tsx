'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-03-15T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status', emoji: '📅' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List', emoji: '📋' },
  { slug: 'AgriStackKyaHai2026', title: 'Digital Kisan ID', emoji: '🆔' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Loan Guide', emoji: '💳' },
  { slug: 'mandi-bhav-today', title: 'Aaj Ka Mandi Bhav', emoji: '📈' },
];

const FAQS_DATA = [
  {
    q: 'eKYC karna zaroori hai kya?',
    a: 'Haan bhai, bilkul. 2023 se mandatory hai. Bina eKYC ke ek rupaya bhi nahi milega ab.',
  },
  {
    q: 'Mobile se eKYC kaise karein?',
    a: 'pmkisan.gov.in → Farmers Corner → eKYC → Aadhaar daalo → OTP enter karo. Bas 2 minute lagte hain.',
  },
  {
    q: 'OTP nahi aa raha toh?',
    a: 'Check karo mobile Aadhaar se linked hai ya nahi. Nahi hai toh CSC jao — fingerprint se ho jayega. Free hai.',
  },
  {
    q: 'CSC par kitna charge lagta hai?',
    a: 'Zero. Bilkul free hai. ₹50+ maange toh 1800-1214-060 par complaint karo.',
  },
  {
    q: 'Kitne din mein status update hota hai?',
    a: '24-48 ghante normally. Kabhi 3-5 din bhi lag sakte hain server load ki wajah se.',
  },
  {
    q: 'Face auth se ho sakti hai?',
    a: 'Haan. PM Kisan app par option hai. Camera se face scan karo — done.',
  },
  {
    q: 'Baar baar fail ho rahi hai?',
    a: 'Naam check karo — Aadhaar aur portal par exactly same hona chahiye. Ek letter ka farak bhi reject karta hai.',
  },
];

export default function PmKisanEkycOnline2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">eKYC Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">🔐 eKYC Verification</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan eKYC Online 2026: Ghar Baithe 2 Minute Mein Complete Karo
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

        {/* IMAGE 1: OTP vs Biometric Comparison */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/pm-kisan-ekyc-online-2026/otp-vs-biometric.webp'}
            alt="PM Kisan eKYC OTP vs biometric comparison — dono tarike samjho"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            OTP Ya Biometric — Kaunsa Tarika Aapke Liye Sahi Hai?
          </p>
        </div>

        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-red-800 dark:text-red-300 mb-2">⚠️ Bina eKYC Ke Kist Ruk Jayegi!</h2>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed">
            Suno bhai, yeh koi optional cheez nahi hai. Government ne 2023 se compulsory kar diya hai. Ab bina verify kiye paisa hi nahi aayega. Par tension mat lo — ghar baithe phone se ho jata hai. Ya phir nazdeeki CSC chale jao. Dono free hain.
          </p>
        </div>

        <section className="mb-8">
          <SH>eKYC Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Simple shabdon mein — government confirm karti hai ki aap wahi ho jo bol rahe ho. Aadhaar se identity match hoti hai. Pehle bahut logon ne fake naam se paisa liya tha, isliye ab yeh step zaroori hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Ek baar kar li toh baar baar nahi karni padti. Haan, agar Aadhaar mein kuch change hua hai toh dobara verify karna pad sakta hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Tarika 1: OTP Se (Sabse Fast)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Mobile Aadhaar se linked hai? Toh yeh try karo pehle.
          </p>
          <StepList>
            <SI n={1}>pmkisan.gov.in kholo</SI>
            <SI n={2}>Farmers Corner → eKYC click karo</SI>
            <SI n={3}>Aadhaar number daalo</SI>
            <SI n={4}>Phone par OTP aayega — enter karo</SI>
            <SI n={5}>Submit dabao — Done! ✅</SI>
          </StepList>
          <WB>
            <strong>Tip:</strong> OTP 5 minute mein expire hota hai. Jaldi dalo. Na aaye toh Resend karo.
          </WB>
        </section>

        {/* IMAGE 2: CSC Biometric Process */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-ekyc-online-2026/csc-biometric-process.webp"
            alt="CSC par PM Kisan eKYC biometric fingerprint process — step by step"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            CSC Par Fingerprint Se eKYC — Jab OTP Na Aaye
          </p>
        </div>

        <section className="mb-8">
          <SH>Tarika 2: CSC Par Biometric Se</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            OTP nahi aa raha? Phone linked nahi hai? Koi baat nahi bhai. CSC chale jao.
          </p>
          <StepList>
            <SI n={1}>Nazdeeki CSC centre jao</SI>
            <SI n={2}>Aadhaar card original le jao</SI>
            <SI n={3}>Operator ko bolo — "PM Kisan eKYC"</SI>
            <SI n={4}>Fingerprint scan hoga</SI>
            <SI n={5}>Confirmation mil jayega — receipt le lo</SI>
          </StepList>
          <DB>
            <strong>Yaad Rakho:</strong> Yeh bilkul FREE hai. Koi operator paisa maange toh seedha 1800-1214-060 par call karo. Maine personally UP mein 3 operators suspend karwaye hain.
          </DB>
        </section>

        <section className="mb-8">
          <SH>Problems Jo Logon Ko Aati Hain</SH>
          <div className="space-y-3">
            {[
              { err: 'OTP Hi Nahi Aata', fix: 'UIDAI website par check karo mobile linked hai ya nahi. Nahi hai toh CSC jao.' },
              { err: 'Name Mismatch Error', fix: 'Aadhaar aur portal par naam EXACT same hona chahiye. Spelling bhi.' },
              { err: 'Server Down / Page Nahi Khulta', fix: 'Subah 6-8 AM best time hai. Kam load hota hai server par.' },
              { err: 'Baar Baar Fail Ho Raha Hai', fix: 'Helpline 155261 par call karo. Ya district agriculture office jao.' },
            ].map(({ err, fix }) => (
              <div key={err} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
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

        <section className="mb-8">
          <SH>Status Kaise Check Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            eKYC ho gayi ya nahi — yeh check karna easy hai.
          </p>
          <StepList>
            <SI n={1}>pmkisan.gov.in → Beneficiary Status</SI>
            <SI n={2}>Aadhaar daalo → Get Data</SI>
            <SI n={3}>Table mein dekho — "eKYC: YES" dikha toh sab theek ✅</SI>
          </StepList>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <p className="font-black text-green-800 dark:text-green-300 text-sm">✅ eKYC: YES</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Kist aayegi</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-center">
              <p className="font-black text-red-800 dark:text-red-300 text-sm">❌ eKYC: NO</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Abhi karo</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan eKYC FAQ 2026" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Seedhi Baat</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Aaj hi kar lo bhai. Kal ka wait mat karo. 2 minute lagte hain phone se. Phone na ho toh CSC free hai. Bahana mat banao — paisa aapka hai, bas verify karna hai.
          </p>
        </div>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Portal — eKYC Karein"
          guide="Abhi Start Karo"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="🔐"
          title="Apna Benefit Calculate Karo"
          desc="Kitni kist mili, kitni pending"
          primaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Calculator →' }}
          secondaryCta={{ href: '/calculator', label: '🧮 Sab Utilities' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
          { href: '/articles/PmKisan24viKist2026', l: '📅 24vi Kist' },
          { href: '/articles/PmKisanBeneficiaryList2026', l: '📋 List' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}