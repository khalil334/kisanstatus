'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-06-27T08:00:00+05:30';
const MODIFIED = '2026-07-04T08:00:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-23vi-kist-2026-status-check', title: '23vi Installment Status', emoji: '📅' },
  { slug: 'pm-kisan-ekyc-online-2026', title: 'Digital Verification Guide', emoji: '🔐' },
  { slug: 'pm-kisan-payment-failed-status-2026', title: 'Payment Failed Fix', emoji: '💸' },
  { slug: 'pm-kisan-rejected-list-2026', title: 'Rejected List Fix', emoji: '❌' },
  { slug: 'pm-kisan-beneficiary-list-2026', title: 'Beneficiary Roster Check', emoji: '📋' },
  { slug: 'pm-kisan-registration-online-2026', title: 'New Enrollment Guide', emoji: '📝' },
];

const FAQS_DATA = [
  { q: 'Saal mein kitni installments aati hain?', a: '₹6,000 annually, 3 equal installments — ₹2,000 each. Har 4 mahine mein (Apr-Jul, Aug-Nov, Dec-Mar).' },
  { q: 'Land documents nahi hain toh apply kar sakte hain?', a: 'Nahi, land ownership mandatory. Tenant farmers kuch states mein lease agreement + landowner NOC se apply kar sakte hain.' },
  { q: 'Enrollment ke baad zameen bech di toh?', a: 'Agriculture department ko turant inform karo. Land sale ke baad benefit lena illegal hai — legal action ho sakta hai.' },
  { q: 'Approval mein kitna time lagta hai?', a: '30-60 days document verification ke baad. Status portal ya helpline 155261 par track karo.' },
  { q: 'Kisi bhi bank account mein payment le sakte hain?', a: 'Account Aadhaar-linked (NPCI mapped) hona chahiye. Zyaadatar public sector + major private banks enabled hain.' },
  { q: 'Kya yeh taxable hai?', a: 'Nahi. Benefit amount completely tax-free. ITR mein show karne ki zaroorat nahi.' },
  { q: 'Digital verification ke baad pehli payment kab?', a: 'Verification + land seeding + state approval complete hone ke baad agli scheduled cycle mein. Typically 30-60 din total.' },
];

export default function PmKisanCompleteGuide({ article }: { article: ArticleMeta }) {
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
            <span className="text-white font-bold">Master Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Complete Problem-Solving Hub</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Complete Guide 2026: Verification, eKYC, Payment Fix, Rejection — Sab Ek Jagah
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 12 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* IMAGE 1: Hero */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md relative">
          <Image
            src={article.ogImage || '/images/articles/pm-kisan-complete-guide/hero.webp'}
            alt="Indian farmer checking PM Kisan scheme status on mobile phone in field 2026"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
            <p className="text-sm font-semibold opacity-90">PM Kisan Complete Guide 2026</p>
            <p className="text-xl md:text-2xl font-black">Har Problem Ka Solution Ek Jagah</p>
          </div>
        </div>

        {/* Intro */}
        <section className="mb-8">
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            PM Kisan ne bahut si kisan families ki life badli hai. Lekin verification, eKYC, payment delays — kai farmers ko problems aati hain. Yeh guide sab solve karegi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Chahe pehli baar apply kar rahe ho ya payment delay face kar rahe ho — <Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="text-[var(--color-primary)] underline font-bold">verification check</Link> se lekar <Link href="/beneficiary-list" className="text-[var(--color-primary)] underline font-bold">state-wise roster</Link> tak, sab cover hai.
          </p>
        </section>

        {/* Problem 1: Status Check */}
        <section className="mb-8">
          <SH>1. Verification Check Online Nahi Ho Raha?</SH>
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-4 rounded-r-xl">
            <p className="font-bold text-red-800 dark:text-red-300 text-sm mb-2">Common Issues:</p>
            <ul className="text-xs text-red-700 dark:text-red-400 space-y-1 list-disc ml-4">
              <li>"Invalid Mobile Number" error</li>
              <li>OTP not received</li>
              <li>"No Record Found" despite enrollment</li>
              <li>Portal slow / down</li>
            </ul>
          </div>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3">Method 1: Official Portal</h3>
          <StepList>
            <SI n={1}><Link href="https://pmkisan.gov.in" className="underline font-bold">pmkisan.gov.in</Link> kholo → Farmers Corner → Beneficiary Status</SI>
            <SI n={2}>Registered mobile number enter karo</SI>
            <SI n={3}>Get OTP → 6-digit code enter karo</SI>
            <SI n={4}>Complete payment history + status dikh jayega</SI>
          </StepList>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Method 2: Bina OTP (Alternative)</h3>
          <StepList>
            <SI n={1}>Beneficiary List section jaao</SI>
            <SI n={2}>State → District → Block → Village select karo</SI>
            <SI n={3}>Get Report → Apna naam search karo</SI>
          </StepList>

          <IB>
            <strong>Pro Tip:</strong> Mobile registered nahi ya change ho gaya? CSC ya agriculture office jaao update karne. Aadhaar + land documents saath le jaao.
          </IB>
        </section>

        {/* IMAGE 2: eKYC Process */}
        <section className="mb-8">
          <SH>2. Digital Verification Pending — Payment Blocked</SH>

          <div className="my-4 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/pm-kisan-complete-guide/ekyc-process.webp"
              alt="Farmer completing biometric eKYC authentication at CSC center fingerprint scanner"
              width={1200}
              height={630}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kai farmers ne abhi tak eKYC nahi ki — is wajah se payment blocked. 2023 se mandatory hai.
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3">3 Tarike Se eKYC Karo:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <span className="text-2xl block mb-2">📱</span>
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-1">Online OTP</p>
              <p className="text-xs text-[var(--color-text-muted)]">pmkisan.gov.in → e-KYC → Aadhaar → OTP verify. Free.</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <span className="text-2xl block mb-2">🖐️</span>
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-1">CSC Biometric</p>
              <p className="text-xs text-[var(--color-text-muted)]">Nearest CSC → Fingerprint scan → ₹20-30 charge → 24h confirm.</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <span className="text-2xl block mb-2">📲</span>
              <p className="font-black text-purple-800 dark:text-purple-300 text-sm mb-1">PM Kisan App</p>
              <p className="text-xs text-[var(--color-text-muted)]">Play Store → PM Kisan app → Login → eKYC → OTP.</p>
            </div>
          </div>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-red-50 dark:bg-red-900/20">
                  <th className="p-3 text-left text-red-800 dark:text-red-300 font-bold">Error</th>
                  <th className="p-3 text-left text-red-800 dark:text-red-300 font-bold">Solution</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Aadhaar not linked with mobile', 'Aadhaar Seva Kendra jaake link karwao'],
                  ['Name mismatch with bank', 'Bank mein naam Aadhaar jaisa karwao'],
                  ['Biometric failed', 'CSC par iris scan try karo'],
                ].map(([err, sol]) => (
                  <tr key={err} className="border-b border-[var(--color-border)]">
                    <td className="p-3 text-xs text-[var(--color-text-muted)]">{err}</td>
                    <td className="p-3 text-xs text-green-700 dark:text-green-400 font-medium">{sol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* IMAGE 3: Payment Success */}
        <section className="mb-8">
          <SH>3. Payment Bank Mein Nahi Aaya?</SH>

          <div className="my-4 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/pm-kisan-complete-guide/payment-success.webp"
              alt="Farmer receiving PM Kisan payment notification on mobile — credit success"
              width={1200}
              height={630}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            ₹2,000 miss ho gaya? Akele nahi ho. Hazaron farmers payment delays face karte hain. Pehle <Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="text-[var(--color-primary)] underline font-bold">status check</Link> karo.
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3">Top 5 Payment Failure Reasons:</h3>
          <div className="space-y-3 mb-4">
            {[
              { title: 'NPCI Mapping Missing', fix: 'Bank branch → Aadhaar seeding form submit karo' },
              { title: 'Galat Bank Details', fix: 'Portal → Edit Bank Details → Passbook se copy karo' },
              { title: 'Land Records Not Updated', fix: 'Tehsil office → Records update → Re-apply' },
              { title: 'eKYC Pending', fix: 'Upar diye gaye eKYC steps follow karo' },
              { title: 'Ineligible Category', fix: 'Wrongly rejected? Grievance file karo proof ke saath' },
            ].map(({ title, fix }) => (
              <div key={title} className="flex gap-3 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <span className="text-blue-600 dark:text-blue-400 font-black text-sm shrink-0 mt-0.5">→</span>
                <div>
                  <p className="font-bold text-[var(--color-text)] text-sm">{title}</p>
                  <p className="text-xs text-green-700 dark:text-green-400 mt-0.5"><strong>Fix:</strong> {fix}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
            <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Grievance Kaise File Karein:</p>
            <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
              <li>📞 Helpline: <strong>155261</strong> ya <strong>011-24300606</strong></li>
              <li>📧 Email: <strong>pmkisan-ict@gov.in</strong></li>
              <li>🌐 Portal: Farmers Corner → Grievance</li>
              <li>🏢 District Agriculture Officer visit</li>
            </ul>
          </div>
        </section>

        {/* IMAGE 4: Rejection Fix */}
        <section className="mb-8">
          <SH>4. Application Reject Ho Gayi?</SH>

          <div className="my-4 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/pm-kisan-complete-guide/rejection-fix.webp"
              alt="Farmer reviewing documents to fix PM Kisan application rejection"
              width={1200}
              height={630}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Zyaadatar rejections correctable errors se hoti hain. Identify karo, fix karo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-2">❌ Land Issues</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>• Land applicant ke naam nahi</li>
                <li>• Disputed ownership</li>
                <li>• Area state minimum se kam</li>
                <li>• Institutional/forest land</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-2">❌ Document Issues</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>• Blurry/unclear documents</li>
                <li>• Expired land records</li>
                <li>• Name mismatch across docs</li>
                <li>• Missing signature/stamp</li>
              </ul>
            </div>
          </div>

          <WB>
            <strong>Re-Application:</strong> Rejection letter download karo → Reason identify karo → Corrected documents collect karo → CSC/Agri office fresh application → Receipt + tracking number lo → Har 15 din status check.
          </WB>
        </section>

        {/* IMAGE 5: State Map */}
        <section className="mb-8">
          <SH>5. State-Wise Roster Check</SH>

          <div className="my-4 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/pm-kisan-complete-guide/state-map.webp"
              alt="India map showing PM Kisan beneficiaries across all states 2026"
              width={1200}
              height={630}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har state ka alag land record system hai. Apni state check karo:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
            {[
              ['Uttar Pradesh', 'uttar-pradesh'],
              ['Maharashtra', 'maharashtra'],
              ['Karnataka', 'karnataka'],
              ['Rajasthan', 'rajasthan'],
              ['Gujarat', 'gujarat'],
              ['Madhya Pradesh', 'madhya-pradesh'],
            ].map(([name, slug]) => (
              <Link
                key={slug}
                href={`/beneficiary-list/${slug}`}
                className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              >
                <p className="font-bold text-blue-800 dark:text-blue-300 text-sm">{name}</p>
              </Link>
            ))}
          </div>
          <Link href="/beneficiary-list" className="text-[var(--color-primary)] underline font-bold text-sm">
            Saare 36 States & UTs Dekho →
          </Link>
        </section>

        {/* IMAGE 6: Documents Checklist */}
        <section className="mb-8">
          <SH>6. Zaroori Documents Checklist</SH>

          <div className="my-4 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/pm-kisan-complete-guide/documents-checklist.webp"
              alt="Required documents for PM Kisan — Aadhaar card, land papers, bank passbook"
              width={1200}
              height={630}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">📄 Mandatory</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Aadhaar Card (self-attested)</li>
                <li>✓ Land Papers (Khatauni)</li>
                <li>✓ Bank Passbook (first page)</li>
                <li>✓ Mobile (Aadhaar-linked)</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">📋 Additional</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Land Verification Certificate</li>
                <li>✓ Caste Certificate (if applicable)</li>
                <li>✓ Passport-size Photo</li>
                <li>✓ Self-declaration Form</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Complete Guide FAQ 2026 — Verified Answers" />
        </section>

        {/* Quick Resource Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <Link href="/articles/pm-kisan-23vi-kist-2026-status-check" className="p-5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl hover:shadow-md transition-shadow">
            <p className="font-black text-green-800 dark:text-green-300 text-sm mb-1">✅ Verification Check</p>
            <p className="text-xs text-[var(--color-text-muted)]">Status + payment history instantly verify karo</p>
          </Link>
          <Link href="/calculator" className="p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl hover:shadow-md transition-shadow">
            <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-1">🧮 Benefit Calculator</p>
            <p className="text-xs text-[var(--color-text-muted)]">Total benefits + upcoming installments calculate</p>
          </Link>
          <Link href="/beneficiary-list" className="p-5 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl hover:shadow-md transition-shadow">
            <p className="font-black text-purple-800 dark:text-purple-300 text-sm mb-1">📋 State Rosters</p>
            <p className="text-xs text-[var(--color-text-muted)]">Naam search karo state-wise databases mein</p>
          </Link>
          <Link href="/articles" className="p-5 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl hover:shadow-md transition-shadow">
            <p className="font-black text-orange-800 dark:text-orange-300 text-sm mb-1">📚 More Guides</p>
            <p className="text-xs text-[var(--color-text-muted)]">Schemes, subsidies, best practices articles</p>
          </Link>
        </div>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Official Portal"
          guide="Abhi Visit Karo"
          guideHref="/articles/pm-kisan-ekyc-online-2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="📊"
          title="Apna Benefit Calculate Karo"
          desc="Kitni kist aayi, kitni pending, arrears — sab free calculators se"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/pm-kisan-23vi-kist-2026-status-check', l: '📅 Status Check' },
          { href: '/articles/pm-kisan-ekyc-online-2026', l: '🔐 eKYC Guide' },
          { href: '/beneficiary-list', l: '📋 All States' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}