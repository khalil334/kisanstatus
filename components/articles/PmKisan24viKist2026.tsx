import Link from 'next/link';
import Image from 'next/image';
import { 
  SI, StepList, IB, WB, SH, GovLink, RelatedArticles, 
  AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate 
} from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_URL } from '@/lib/site-config';

const KIST = {
  number: '24',
  label: '24vi',
  expectedDate: 'October 2026',
  confirmedDate: null as string | null,
  amount: '₹2,000',
  status: 'Expected' as 'Expected' | 'Confirmed' | 'Released',
  recipients: '~9 Crore+',
};

const PUBLISHED = '2026-06-24T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Complete Guide', emoji: '📚' },
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Generated Matlab Kya Hai', emoji: '💳' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List Mein Naam Dekho', emoji: '📋' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Loan Apply Online', emoji: '💰' },
  { slug: 'NanoDap500mlPriceInIndia2026', title: 'Nano DAP Price Guide', emoji: '🌱' },
  { slug: 'mandi-bhav-today', title: 'Aaj Ka Mandi Bhav', emoji: '📈' },
  { slug: 'PmKisan25viKist2027', title: '25vi Kist 2027 Kab Aayegi', emoji: '📅' },
  { slug: 'pm-kisan-self-registered-status-check', title: 'Self Registration Status', emoji: '✅' },
];

const FAQS_DATA = [
  {
    q: 'PM Kisan ki 24vi kist kab tak aayegi?',
    a: 'October 2026 mein aane ke chances hain. 23vi kist 20 June 2026 ko aayi thi — matlab 4 mahine baad October mein 24vi aayegi. Jaise hi official date confirm hogi, yahan update kar denge. Page bookmark kar lo.',
  },
  {
    q: '24vi kist kitne rupaye ki hogi?',
    a: '₹2,000 ki hogi — har kist same amount ki hoti hai. Saal mein 3 kist aati hain, toh total ₹6,000 milte hain saal bhar mein. Amount mein koi change nahi hua hai.',
  },
  {
    q: '24vi kist ke liye eKYC zaroori hai ya nahi?',
    a: 'Haan bilkul — bina eKYC ke koi kist nahi milti. Ye 2024 ke baad se mandatory hai. pmkisan.gov.in par OTP se ghar baithe kar sakte ho, ya CSC center par biometric se. Dono tarike bilkul free hain.',
  },
  {
    q: 'Status check karne par kuch nahi dikh raha hai?',
    a: 'Registration number sahi daalo. Yaad nahi hai toh "Know your registration no." option se Aadhaar ya mobile number se retrieve kar lo. Phir dobara check karo. Agar phir bhi nahi dikha toh nazdeeki CSC jao.',
  },
  {
    q: 'Kist nahi aayi lekin status "Payment Success" dikh raha hai?',
    a: 'Bank mein credit hone mein 24-48 ghante lag sakte hain. PFMS portal (pfms.nic.in) par check karo ya bank se mini-statement le lo. 3 din baad bhi na dikhe toh helpline 155261 par call karo.',
  },
  {
    q: 'Pehli baar registration kiya hai — 24vi kist milegi?',
    a: 'Registration + eKYC + NPCI seeding complete hone ke baad agli kist mein mil jayegi. Processing mein 1-3 mahine lag sakte hain. Abhi kar lo toh 24vi milne ke chances hain. Der mat karo.',
  },
  {
    q: 'Bank account change hua hai — ab kya karun?',
    a: 'Portal par naye bank ki details daalo. Naye account mein Aadhaar seeding + NPCI mapping zaroori hai. Bank branch jaake "DBT enable" confirmation le lo. Purana account tab tak mat band karo jab tak naya verify na ho jaye.',
  },
  {
    q: '24vi kist latest news kahan milegi?',
    a: 'Isi page par sabse pehle update aayega. Bookmark kar lo. Ya PM Kisan ka official Twitter handle @PMKisanOfficial follow karo. Helpline 155261 par bhi puch sakte ho.',
  },
];

export default function PmKisan24viKist2026({ article }: { article: ArticleMeta }) {
  const isReleased = KIST.status === 'Released';
  const isConfirmed = KIST.status === 'Confirmed';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: `${SITE_URL}/articles` },
      { '@type': 'ListItem', position: 3, name: '24vi Kist Guide', item: `${SITE_URL}/articles/${article.slug}` },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `PM Kisan 24vi Kist Kab Aayegi? ${KIST.expectedDate} Release Date, Status Check Aur Tayyari Ka Pura Guide`,
    description: article.desc,
    image: article.ogImage ? `${SITE_URL}${article.ogImage}` : `${SITE_URL}/images/pm-kisan-24vi-kist-og.webp`,
    author: { '@type': 'Organization', name: AUTHOR_NAME, url: AUTHOR_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/articles/${article.slug}` },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS_DATA.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white font-bold">24vi Kist Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Upcoming Kist</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan 24vi Kist Kab Aayegi? {KIST.expectedDate} Release Date, Status Check Aur Tayyari Ka Pura Guide
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

        <div className={`mb-6 border-2 rounded-xl p-4 ${
          isReleased ? 'bg-green-50 dark:bg-green-900/20 border-green-400 dark:border-green-700' :
          isConfirmed ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-400 dark:border-blue-700' :
          'bg-orange-50 dark:bg-orange-900/20 border-orange-400 dark:border-orange-700'
        }`}>
          <div className="flex items-start gap-3">
            <span className="text-2xl shrink-0" aria-hidden="true">
              {isReleased ? '✅' : isConfirmed ? '📅' : '⏳'}
            </span>
            <div>
              <p className={`font-black text-base sm:text-lg leading-snug ${
                isReleased ? 'text-green-800 dark:text-green-300' :
                isConfirmed ? 'text-blue-800 dark:text-blue-300' :
                'text-orange-800 dark:text-orange-300'
              }`}>
                {isReleased && KIST.confirmedDate
                  ? `24vi Kist Release Ho Gayi! – ${KIST.confirmedDate}`
                  : isConfirmed && KIST.confirmedDate
                  ? `24vi Kist Confirm: ${KIST.confirmedDate}`
                  : `24vi Kist – Expected: ${KIST.expectedDate}`}
              </p>
              <p className={`text-xs sm:text-sm mt-1 ${
                isReleased ? 'text-green-700 dark:text-green-400' :
                isConfirmed ? 'text-blue-700 dark:text-blue-400' :
                'text-orange-700 dark:text-orange-400'
              }`}>
                {isReleased
                  ? 'Kist nahi aayi? Neeche verification guide padhein.'
                  : isConfirmed
                  ? 'Date confirm ho gayi hai. Release hote hi update hoga.'
                  : 'Abhi official date announce nahi hui. Page bookmark kar lo.'}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1.5">
                🗓️ Last Updated: {fmtDate(MODIFIED)}
              </p>
            </div>
          </div>
        </div>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/pm-kisan-24vi-kist-og.webp'}
            alt="PM Kisan 24vi kist October 2026 — expected date, eligibility, status check guide"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            24vi Kist — Expected October 2026, ₹2,000 Seedha Bank Account Mein
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {[
            { label: 'Kist', value: KIST.label },
            { label: 'Amount', value: KIST.amount },
            { label: 'Expected', value: 'Oct 2026' },
            { label: 'Recipients', value: KIST.recipients },
          ].map(({ label, value }) => (
            <div key={label} className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 text-center">
              <p className="text-[10px] text-[var(--color-text-muted)] mb-0.5">{label}</p>
              <p className="font-black text-green-800 dark:text-green-300 text-sm">{value}</p>
            </div>
          ))}
        </div>

        <section className="mb-8">
          <SH>24vi Kist Kab Aayegi?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Sach bataun toh official date abhi tak announce nahi hui hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Pichhla pattern itna hai: kist aam taur par 4 mahine ke antar par aati hai, aur 23vi kist 20 June 2026 ko aayi thi. Is hisaab se agli kist October 2026 ke aas-paas pad sakti hai, lekin <strong>⚠️ Proposed — ye sirf pattern se nikala anumaan hai, official notification nahi.</strong> Jab tak pmkisan.gov.in par notification na aaye, koi tareekh pakki na maanein.
          </p>

          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4 mb-4">
            <p className="font-black text-orange-800 dark:text-orange-300 text-sm mb-2">Recent Release Pattern:</p>
            <ul className="text-xs text-orange-700 dark:text-orange-400 space-y-1">
              <li>• 21vi → November 2025 ✅</li>
              <li>• 22vi → 13 March 2026 ✅</li>
              <li>• 23vi → 20 June 2026 ✅</li>
              <li>• <strong>24vi → October 2026 (Expected)</strong></li>
            </ul>
          </div>

          <IB>
            <strong>Meri Salah:</strong> Ye prediction hai, guarantee nahi. Official announcement aate hi yeh page update hoga. Bookmark kar lo taaki miss na ho. Main roz check karta hoon.
          </IB>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/pm-kisan-24vi-kist-banner.webp"
            alt="PM Kisan 24vi kist banner — October 2026 release timeline and preparation checklist"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            24vi Kist Timeline — October Se Pehle Tayyari Karo
          </p>
        </div>

        <section className="mb-8">
          <SH>Pichhli Kiston Ka Record</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Table dekh ke clear ho jayega ki kist kab kab aayi hai. Isse tumhe idea ho jayega ki 24vi kist kab tak aayegi.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Kist</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { kist: '24vi', date: 'Oct 2026', amount: '₹2,000', status: 'Expected', upcoming: true },
                  { kist: '23vi', date: '20 Jun 2026', amount: '₹2,000', status: 'Released', highlight: true },
                  { kist: '22vi', date: '13 Mar 2026', amount: '₹2,000', status: 'Released' },
                  { kist: '21vi', date: 'Nov 2025', amount: '₹2,000', status: 'Released' },
                  { kist: '20vi', date: 'Jul 2025', amount: '₹2,000', status: 'Released' },
                  { kist: '19vi', date: 'Feb 2025', amount: '₹2,000', status: 'Released' },
                ].map((row) => (
                  <tr key={row.kist} className={
                    row.highlight ? 'bg-green-50 dark:bg-green-900/20 font-medium' :
                    row.upcoming ? 'bg-orange-50 dark:bg-orange-900/20' :
                    'bg-[var(--color-card)]'
                  }>
                    <td className="p-3 border-b border-[var(--color-border)] font-semibold text-xs text-[var(--color-text)]">{row.kist}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{row.date}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text)]">{row.amount}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        row.status === 'Released'
                          ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300'
                          : 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300'
                      }`}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--color-text-muted)] mt-2">
             <strong>Tip:</strong> Har kist mein exactly ₹2,000 aate hain. Agar tumhari koi kist fail hui thi toh arrears ke roop mein mil jayenge.
          </p>
        </section>

        <section className="mb-8">
          <SH>24vi Kist Ke Liye Eligibility</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bahut se kisan confuse rehte hain ki unhe kist milegi ya nahi. Ye check karo — tum eligible ho ya nahi.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">✅ Eligible Ho</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Chhota ya marginal kisan ho</li>
                <li>✓ Kheti ki zameen registered hai naam par</li>
                <li>✓ Aadhaar linked + eKYC complete hai</li>
                <li>✓ Bank mein NPCI seeding hui hai</li>
                <li>✓ Portal par details sahi hain</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-2">❌ Eligible Nahi Ho</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✗ Income tax dete ho (kisi bhi saal)</li>
                <li>✗ Government employee ho (central/state)</li>
                <li>✗ Professional ho (Doctor/CA/Lawyer/Engineer)</li>
                <li>✗ Constitutional post par ho</li>
                <li>✗ eKYC abhi tak pending hai</li>
              </ul>
            </div>
          </div>
          <WB>
            <strong>Ek Baat Yaad Rakho:</strong> Apna naam <Link href="/articles/PmKisanBeneficiaryList2026" className="underline font-bold">beneficiary list</Link> mein confirm karo. Naam nahi hai toh pehle registration karo — October se pehle kar lo toh 24vi mil sakti hai.
          </WB>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/pm-kisan-24vi-kist-october-2026.webp"
            alt="PM Kisan 24vi kist October 2026 calendar — expected release date and countdown"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Expected Release — October 2026 Calendar View
          </p>
        </div>

        <section className="mb-8">
          <SH>Status Kaise Check Karein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bahut se kisan status check karna bhool jaate hain. Ye 5 minute ka kaam hai — abhi kar lo.
          </p>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> par jaao</SI>
            <SI n={2}>Farmers Corner → <strong>Beneficiary Status</strong> click karo</SI>
            <SI n={3}>Aadhaar ya registered mobile number enter karo</SI>
            <SI n={4}>Captcha verify karo → <strong>Get Data</strong> dabao</SI>
            <SI n={5}>Complete payment history + current status dikhega</SI>
          </StepList>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4 mb-3">
            Status check karne ke baad tumhe kuch messages dikhenge. Har message ka matlab samjho:
          </p>

          <div className="mt-4 space-y-2">
            {[
              { status: 'FTO Generated', meaning: 'Government ne release kiya. Bank process mein hai. 24-48h wait karo — paisa aa jayega.' },
              { status: 'Payment Success', meaning: 'Account mein aa gaya. Bank statement verify kar lo. Agar nahi dikh raha toh mini-statement le lo.' },
              { status: 'Payment Failed', meaning: 'Bank/NPCI issue hai. Payment failed guide padho — turant fix karo.' },
              { status: 'eKYC Pending', meaning: 'Turant eKYC karo warna kist rukegi. October se pehle complete kar lo.' },
            ].map(({ status, meaning }) => (
              <div key={status} className="flex gap-3 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg">
                <span className="font-black text-[var(--color-primary)] text-xs shrink-0 w-28">{status}</span>
                <span className="text-xs text-[var(--color-text-muted)]">{meaning}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>eKYC — Mandatory Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Seedhi baat — bina eKYC ke koi kist nahi milegi. Period.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ye problem sabse aam hai. Agar abhi tak eKYC nahi ki to agli kist se pehle complete kar lein. Teen tarike hain:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <span className="text-2xl block mb-2" aria-hidden="true">📱</span>
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-1">OTP Based</p>
              <p className="text-xs text-[var(--color-text-muted)]">Portal par Aadhaar daalo, OTP code verify karo. Sabse aasaan tarika — ghar baithe ho jata hai.</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <span className="text-2xl block mb-2" aria-hidden="true">🖐️</span>
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-1">Biometric (CSC)</p>
              <p className="text-xs text-[var(--color-text-muted)]">OTP na aaye toh CSC center jao. Fingerprint se verify ho jayega. ₹20-30 lagte hain.</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <span className="text-2xl block mb-2" aria-hidden="true">🤳</span>
              <p className="font-black text-purple-800 dark:text-purple-300 text-sm mb-1">Face Auth</p>
              <p className="text-xs text-[var(--color-text-muted)]">Mobile app se face scan. Dono fail hon toh ye try karo. Latest option hai.</p>
            </div>
          </div>
          <IB>
            <strong>Detailed Guide:</strong> Step-by-step madad chahiye toh <Link href="/articles/PmKisanMasterGuide2026" className="underline font-bold">PM Kisan Complete Guide</Link> padho. Screenshots ke saath samjhaya hai.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Common Problems + Solutions</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ye sabse aam problems hain, aur har ek ka seedha solution hai.
          </p>
          <div className="space-y-3">
            {[
              { err: 'Status "Success" lekin paisa nahi aaya', fix: 'PFMS (pfms.nic.in) par check karo. 24-48h lag sakte hain bank credit hone mein. Bank se mini-statement le lo. 3 din baad bhi nahi dikha toh 155261 call karo.' },
              { err: 'Aadhaar Authentication Failed', fix: 'Portal aur Aadhaar mein naam exactly same hona chahiye. Spelling, middle name, surname — sab match hona chahiye. Agriculture office mein correction karwao.' },
              { err: 'Portal par error aa raha hai', fix: 'Browser refresh karo ya alag browser try karo. Cache clear karo. Phir bhi na chale toh CSC par biometric karwao. Server busy ho sakta hai kist release ke din.' },
              { err: 'Paise wapas aa gaye (Reversed)', fix: 'Account inactive hai ya naam mismatch. Bank jao → activate karo → "DBT enable" confirmation lo → portal par update karo. 7-10 din mein fix ho jata hai.' },
              { err: 'Naya registration kiya — kab milegi pehli kist?', fix: 'Registration + eKYC + NPCI = 1-3 mahine processing lagti hai. Abhi kar lo toh 24vi mil sakti hai. Der mat karo.' },
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

          <div className="mt-4 p-4 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl">
            <p className="font-black text-[var(--color-text)] text-sm mb-2">Official Helpline:</p>
            <div className="text-xs text-[var(--color-text-muted)] space-y-1">
              <p>📞 <strong>155261</strong> (24×7 Toll Free)</p>
              <p>📞 <strong>1800-115-526</strong> (Toll Free)</p>
              <p>📧 <strong>pmkisan-ict@gov.in</strong></p>
              <p className="mt-2 text-[10px] italic">💡 Tip: Phone par 100 baar try karo — kabhi kabhi line busy hoti hai. Email bhi karo agar phone na lage.</p>
            </div>
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/payment-success.webp"
            alt="PM Kisan payment success notification — ₹2000 credited to bank account"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Payment Success — ₹2,000 Seedha Bank Account Mein
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="24vi Kist FAQ 2026 — Verified Answers" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Agli Kist Se Pehle Yeh Karo</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Kist ki date announce ho ya na ho, yeh 3 cheezein pehle se pakki kar lein — inme kami rehne par kist rukti hai:
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>eKYC complete karo (agar pending hai)</li>
            <li>Bank NPCI seeding confirm karo — branch se "DBT enable" letter le lo</li>
            <li>Beneficiary status "Active" check karo portal par</li>
            <li>Yeh page bookmark karo — date confirm hote hi update hoga</li>
          </ol>
          <p className="text-xs text-green-700 dark:text-green-400 mt-4 italic">
            💡 Meri personal advice: Aaj hi check karo — kal par mat chhodo. Bahut se kisan der kar dete hain aur kist ruk jati hai.
          </p>
        </div>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="PM Kisan Beneficiary Status — Official Portal"
          guide="Abhi Status Check Karo"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="📅"
          title="Apni Kist Track Karo"
          desc="Kitni kist aayi, kitni pending — complete history jaano"
          primaryCta={{ href: '/calculator/installment-tracker', label: ' Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
          { href: '/articles/pm-kisan-fto-generated-ka-matlab-kya-hai', l: ' FTO Guide' },
          { href: '/articles/PmKisanBeneficiaryList2026', l: '📋 Beneficiary List' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}