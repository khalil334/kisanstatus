import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-03-15T08:00:00+05:30';
const MODIFIED = '2026-07-19T08:00:00+05:30';

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
    q: 'PM Kisan eKYC karna zaroori hai kya?',
    a: 'Haan, yeh puri tarah mandatory hai. 2023 se government ne ise compulsory kar diya hai. Bina eKYC verification ke aane wali kist rok di jaati hai.',
  },
  {
    q: 'Mobile se PM Kisan eKYC kaise karein?',
    a: 'pmkisan.gov.in par jao → Farmers Corner → eKYC option chuno → Apna Aadhaar number daalo → Registered mobile par aaya OTP enter karo. Process 2 minute se kam leta hai.',
  },
  {
    q: 'OTP nahi aa raha toh kya karein?',
    a: 'Sabse pehle check karo ki aapka mobile number Aadhaar se link hai ya nahi. Agar linked nahi hai, toh nazdeeki CSC center jakar biometric (fingerprint) ke through eKYC pura kar sakte ho.',
  },
  {
    q: 'CSC center par PM Kisan eKYC ka kitna charge lagta hai?',
    a: 'Yeh service puri tarah free hai. Agar koi operator ₹50 ya usse zyada maange, toh turant 1800-1214-060 par complaint karo.',
  },
  {
    q: 'eKYC karne ke baad status update hone mein kitna time lagta hai?',
    a: 'Aamtaur par 24 se 48 ghante. Kabhi-kabhi server load ke karan 3-5 din bhi lag sakte hain.',
  },
  {
    q: 'Kya Face Authentication se bhi eKYC ho sakti hai?',
    a: 'Haan, PM Kisan mobile app par Face Auth ka option available hai. Camera ke samne face scan karke aap ghar baithe verification pura kar sakte ho.',
  },
  {
    q: 'eKYC baar-baar fail kyun ho rahi hai?',
    a: 'Sabse common reason naam ka mismatch hona hai. Aadhaar card aur PM Kisan portal par naam bilkul same (exact spelling) hona chahiye.',
  },
];

export default function PmKisanEkycOnline2026({ article }: { article: ArticleMeta }) {
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

        {/* Field Hook */}
        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-red-800 dark:text-red-300 mb-2">⚠️ Bina eKYC Ke Kist Ruk Jayegi</h2>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed">
            PM Kisan eKYC ab har beneficiary ke liye zaroori (mandatory) ho chuki hai. Agar aapne abhi tak apna PM Kisan Samman Nidhi eKYC update nahi kiya hai, toh aane wali kist ruk sakti hai. Chinta na karein — ghar baithe mobile se OTP ke through ya nazdeeki CSC center par biometric se yeh verification aasani se pura kiya ja sakta hai.
          </p>
        </div>

        {/* Section 1: Plain Paragraph (No Box) */}
        <section className="mb-8">
          <SH>eKYC Kya Hai aur Yeh Kyon Zaroori Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Simple bhasha mein, yeh ek digital identity process hai jisse government confirm karti hai ki scheme ka benefit lene wala kisan wahi hai jiska naam database mein darj hai. Pichle kuch saalon mein fake naam se paisa nikalne ki ghatnayein badhne ke karan, UIDAI aur Agriculture Ministry ne Aadhaar se identity match karna mandatory kar diya hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Ek baar yeh process successfully complete ho jaane par baar-baar karne ki zaroorat nahi hoti. Haan, agar aapke Aadhaar card mein koi change (jaise mobile number ya naam) hua hai, toh dobara verify karna pad sakta hai.
          </p>
        </section>

        {/* Section 2: StepList + Warning Box */}
        <section className="mb-8">
          <SH>Tarika 1: OTP Ke Zariye (Sabse Tez)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar aapka mobile number pehle se Aadhaar card se link hai, toh ghar baithe yeh tarika sabse best option hai.
          </p>
          <StepList>
            <SI n={1}>Official portal pmkisan.gov.in open karo.</SI>
            <SI n={2}>Right side mein "Farmers Corner" ke under "eKYC" option par click karo.</SI>
            <SI n={3}>Apna 12-digit Aadhaar number daalo aur "Search" dabao.</SI>
            <SI n={4}>Registered mobile par aaya 6-digit OTP enter karo.</SI>
            <SI n={5}>"Submit" par click karte hi screen par success message dikh jayega.</SI>
          </StepList>
          <WB>
            <strong>Tip:</strong> OTP sirf 5 minute tak valid rehta hai. Agar message nahi aata, toh "Resend OTP" use karo.
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

        {/* Section 3: StepList + Info Box */}
        <section className="mb-8">
          <SH>Tarika 2: CSC Center Par Biometric Ke Zariye</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            OTP nahi aa raha ya mobile number link nahi hai? Koi tension ki baat nahi hai. Aap apne nazdeeki Common Service Center (CSC) ja sakte ho.
          </p>
          <StepList>
            <SI n={1}>Apne original Aadhaar card ke saath nazdeeki CSC centre jao.</SI>
            <SI n={2}>Operator ko bolo ki "PM Kisan eKYC" karna hai.</SI>
            <SI n={3}>Biometric machine par apna fingerprint scan karao.</SI>
            <SI n={4}>Successful verification ke baad confirmation message aur receipt zaroor le lo.</SI>
          </StepList>
          <DB>
            <strong>Rule:</strong> Yeh service puri tarah free hai. Agar koi operator CSC eKYC ke naam par paisa maange, toh turant 1800-1214-060 par complaint karo.
          </DB>
        </section>

        {/* Section 4: Plain List (No Colored Boxes to reduce density) */}
        <section className="mb-8">
          <SH>Common Problems aur Unke Solutions</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Verification karte time kai baar technical issues aa sakte hain. Neeche di gayi problems ke solutions dhyan se padho:
          </p>
          <ul className="space-y-4 text-sm text-[var(--color-text-muted)]">
            <li className="flex gap-3">
              <span className="text-red-600 dark:text-red-400 font-black shrink-0">❌</span>
              <span><strong>OTP Hi Nahi Aata:</strong> UIDAI ki official website par check karo ki mobile number linked hai ya nahi. Nahi hai toh biometric alternative hi best rasta hai.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 dark:text-red-400 font-black shrink-0">❌</span>
              <span><strong>Name Mismatch Error:</strong> Aadhaar aur PM Kisan portal par naam bilkul EXACT same hona chahiye. Ek letter ka farak bhi system reject kar deta hai.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 dark:text-red-400 font-black shrink-0">❌</span>
              <span><strong>Server Down / Page Nahi Khulta:</strong> Dopahar ke time server par load zyada hota hai. Subah 6 baje se 8 baje ke beech try karna sabse best time hai.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-600 dark:text-red-400 font-black shrink-0">❌</span>
              <span><strong>Baar-baar Fail Ho Raha Hai:</strong> Turant helpline 155261 par call karo ya apne district agriculture office mein complaint darj karo.</span>
            </li>
          </ul>
        </section>

        {/* Section 5: Status Check (Minimal Grid) */}
        <section className="mb-8">
          <SH>Verification Status Kaise Check Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Aapki eKYC ho gayi hai ya abhi baki hai, yeh janna bahut easy hai. Neeche diye gaye steps follow karo:
          </p>
          <StepList>
            <SI n={1}>pmkisan.gov.in par "Beneficiary Status" option chuno.</SI>
            <SI n={2}>Apna Aadhaar number daalke "Get Data" par click karo.</SI>
            <SI n={3}>Table mein "eKYC" column ke samne "YES" likha dikhna chahiye.</SI>
          </StepList>
          
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <p className="font-black text-green-800 dark:text-green-300 text-sm">✅ eKYC: YES</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Kist aane ke chances hain</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-center">
              <p className="font-black text-red-800 dark:text-red-300 text-sm">❌ eKYC: NO</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Turant pura karo</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan eKYC FAQ 2026" />
        </section>

        {/* Conclusion */}
        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Final Baat</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Yeh chhota sa step aapki aane wali kist ko secure rakhta hai, bhai. Ismein sirf 2 minute lagte hain. Agar phone se nahi ho pa raha, toh CSC center ka darwaza khula hai jo bilkul free service deta hai. Kisi bhi bahane se ise talna na keval aapke paise rokega, balki future mein process ko aur complicated bhi bana dega.
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