'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-04-01T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'soil-health-card-complete-guide-2026', title: 'Soil Health Card', emoji: '🌱' },
  { slug: 'NanoDap500mlPriceInIndia2026', title: 'Nano DAP Price', emoji: '🧪' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Loan Guide', emoji: '💳' },
  { slug: 'AgriStackKyaHai2026', title: 'Digital Kisan ID', emoji: '🆔' },
  { slug: 'mandi-bhav-today', title: 'Aaj Ka Mandi Bhav', emoji: '📈' },
];

const FAQS_DATA = [
  {
    q: 'Enrollment kaise karein?',
    a: 'Loanee farmers automatic enroll hote hain bank se. Non-loanee CSC ya pmfby.in par form bharein.',
  },
  {
    q: 'Premium kitna hai?',
    a: 'Kharif: 2%. Rabi: 1.5%. Horticulture: 5%. Baaki government deti hai subsidy mein.',
  },
  {
    q: 'Claim kab milega?',
    a: 'Assessment ke 2 mahine ke andar. State yield data bhejti hai → verify hota hai → paisa account mein.',
  },
  {
    q: 'Tenant farmer eligible hai?',
    a: 'Haan. Landowner ka NOC ya lease agreement chahiye bas.',
  },
  {
    q: 'Claim reject kyun hota hai?',
    a: 'Deadline miss, premium unpaid, crop notified nahi, ya documents incomplete. Receipt sambhalo hamesha.',
  },
  {
    q: 'Individual loss par claim?',
    a: 'Haan. Ola, flood, landslide jaisi localized calamity par 48 ghante mein report karo.',
  },
  {
    q: 'Compulsory hai kya?',
    a: 'Loanee ke liye haan. Non-loanee voluntary hai. Par karna chahiye — risk cover zaroori hai.',
  },
];

export default function PmfbyCropInsurance2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Crop Insurance</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">🛡️ PMFBY Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PMFBY Crop Insurance 2026: Sirf 2% Premium Mein Fasal Suraksha
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

        {/* IMAGE 1: Hero */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/pmfby-crop-insurance-2026/hero-image.webp'}
            alt="PMFBY crop insurance India 2026 — kisan fasal suraksha yojana"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            PMFBY — Chhoti Si Premium, Badi Suraksha
          </p>
        </div>

        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 dark:border-amber-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">Socho Zara</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            Poora saal mehnat. Beej, khaad, mazdoori — lakho kharch. Phir ek toofan, ek sukha — sab khatam.
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            PMFBY isi dar ko khatam karta hai. ₹1 lakh ki fasal ka premium? Sirf ₹2,000. Baaki sarkar deti hai. Miss mat karo yeh deal bhai.
          </p>
        </div>

        {/* IMAGE 2: Infographic */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pmfby-crop-insurance-2026/infographic.webp"
            alt="PMFBY infographic — premium rates, coverage, claim timeline explained visually"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            PMFBY Ek Nazar Mein — Premium, Coverage, Claim Process
          </p>
        </div>

        <section className="mb-8">
          <SH>PMFBY Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Pradhan Mantri Fasal Bima Yojana. 2016 se chal rahi hai. Sukha, baadh, toofan, keede — kisi bhi wajah se fasal kharab ho toh paisa milta hai. Seedha bank account mein.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <p className="font-black text-green-800 dark:text-green-300 text-xl">2%</p>
              <p className="text-[10px] text-[var(--color-text-muted)]">Kharif</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-center">
              <p className="font-black text-blue-800 dark:text-blue-300 text-xl">1.5%</p>
              <p className="text-[10px] text-[var(--color-text-muted)]">Rabi</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-center">
              <p className="font-black text-amber-800 dark:text-amber-300 text-xl">5%</p>
              <p className="text-[10px] text-[var(--color-text-muted)]">Horticulture</p>
            </div>
          </div>
          <IB>
            <strong>Example:</strong> Gehun — Sum Insured ₹50,000. Aapka premium = ₹750 sirf. Baaki sarkar degi. Fasal poori kharab = poora ₹50,000 milega.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Kya Cover Hota Hai?</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">✅ Haan</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Sukha, Baadh, Toofan</li>
                <li>✓ Ola (Hailstorm)</li>
                <li>✓ Keede, Bimari</li>
                <li>✓ Landslide</li>
                <li>✓ Post-harvest loss (14 din)</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-2">❌ Nahi</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✗ War / Nuclear</li>
                <li>✗ Jaan boojh kar nuksan</li>
                <li>✗ Unnotified crops</li>
                <li>✗ Late enrollment</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Enrollment Kaise Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            <strong>Loanee farmers:</strong> Bank automatic karta hai. Aapko kuch nahi karna.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Non-loanee:</strong> Khud karna padega.
          </p>
          <StepList>
            <SI n={1}>pmfby.in ya CSC jao</SI>
            <SI n={2}>Form bharo — land + crop details</SI>
            <SI n={3}>Documents do — Aadhaar, Khatauni, Passbook</SI>
            <SI n={4}>Premium pay karo</SI>
            <SI n={5}>Receipt sambhalo — claim mein chahiye</SI>
          </StepList>
          <DB>
            <strong>Deadline:</strong> Kharif = July 31. Rabi = Dec 31. Miss mat karna bhai!
          </DB>
        </section>

        {/* IMAGE 3: Status Check */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pmfby-crop-insurance-2026/status-check.webp"
            alt="PMFBY application status check online — enrollment verification portal"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Apna Enrollment Status Online Check Karo
          </p>
        </div>

        <section className="mb-8">
          <SH>Claim Kaise Milega?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Fasal kharab ho gayi? Yeh karo turant:
          </p>
          <StepList>
            <SI n={1}><strong>48 ghante mein</strong> insurance company ko batao</SI>
            <SI n={2}>Damaged crop ki <strong>photos lo</strong></SI>
            <SI n={3}>Patwari se <strong>loss certificate</strong> lo</SI>
            <SI n={4}>Claim form submit karo bank mein</SI>
            <SI n={5}>Verification ke baad paisa <strong>seedha account</strong> mein</SI>
          </StepList>
          <DB>
            <strong>Sabse Important:</strong> 48 ghante! Isse zyada delay hua toh claim reject. Photos + certificate + written complaint — teeno ready rakho.
          </DB>
        </section>

        {/* IMAGE 4: Payment Received */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pmfby-crop-insurance-2026/payment-received.webp"
            alt="PMFBY claim payment received in bank account — successful compensation"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Claim Approved — Paisa Seedha Bank Account Mein
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PMFBY FAQ 2026" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Last Word</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Dekho bhai, kheti mein risk toh hai hi. Mausam ka bharosa nahi. PMFBY ek chhoti si premium mein yeh risk hata deta hai. Ignore karne ka koi reason nahi. Deadline se pehle karo, receipt sambhalo, aur agar loss ho toh 48 ghante mein report karo. Itna hi karna hai.
          </p>
        </div>

        <GovLink
          href="https://pmfby.gov.in"
          label="PMFBY Official Portal"
          guide="Abhi Enroll Karo"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmfby.gov.in"
        />

        <CalcBanner
          icon="🛡️"
          title="Premium Calculate Karo"
          desc="Crop value daalo — premium jaano"
          primaryCta={{ href: '/calculator/crop-profit', label: '🌾 Calculator →' }}
          secondaryCta={{ href: '/calculator', label: '🧮 Utilities' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Guide' },
          { href: '/articles/soil-health-card-complete-guide-2026', l: '🌱 Soil' },
          { href: '/articles/KisanCreditCardOnlineApply2026', l: '💳 KCC' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}