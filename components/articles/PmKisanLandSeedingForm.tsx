'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-07-10T08:00:00+05:30';
const MODIFIED = '2026-07-10T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanBeneficiaryList2026', title: 'PM Kisan Beneficiary List', emoji: '' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Complete Guide', emoji: '🔐' },
  { slug: 'PmKisanMasterGuide2026', title: 'Master Guide', emoji: '' },
];

const FAQS_DATA = [
  {
    q: 'Land seeding form kahan se download karein?',
    a: 'State ke agriculture department ki website se ya patwari se le sakte ho. UP, Bihar, MP ke alag-alag forms hain.',
  },
  {
    q: 'Land seeding mein kitna time lagta hai?',
    a: '15 se 30 din lagte hain. Patwari verification ke baad BAO approve karta hai.',
  },
  {
    q: 'Khasra number kahan milega?',
    a: 'Khatauni par likha hota hai. Online bhulekh portal par bhi dekh sakte ho.',
  },
  {
    q: 'Land seeding form fees kitni hai?',
    a: 'Form free hai. CSC se karwana ho to ₹20-50 lag sakte hain.',
  },
];

export default function PmKisanLandSeedingFormPdf2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Land Seeding Form</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Complete Form Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Land Seeding Form PDF Download 2026: State Wise Form, Khasra-Khatauni Process
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 12 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-land-seeding-form/land-seeding-form-hero.webp"
            alt="PM Kisan land seeding form PDF download — state wise form with khasra khatauni details"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
            priority
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
            Land Seeding Form 2026 — PDF Download + State Wise Process
          </p>
        </div>

        {/* PDF Download Section */}
        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-blue-800 dark:text-blue-300 mb-3">
            📥 State Wise Land Seeding Form PDF Download
          </h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="text-sm font-bold text-gray-800 dark:text-gray-200">Uttar Pradesh</span>
              <a href="/downloads/UP-Land-Seeding-Form.pdf" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg">
                Download PDF
              </a>
            </div>
            <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="text-sm font-bold text-gray-800 dark:text-gray-200">Bihar</span>
              <a href="/downloads/Bihar-Land-Seeding-Form.pdf" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg">
                Download PDF
              </a>
            </div>
            <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="text-sm font-bold text-gray-800 dark:text-gray-200">Madhya Pradesh</span>
              <a href="/downloads/MP-Land-Seeding-Form.pdf" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg">
                Download PDF
              </a>
            </div>
            <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="text-sm font-bold text-gray-800 dark:text-gray-200">Rajasthan</span>
              <a href="/downloads/Rajasthan-Land-Seeding-Form.pdf" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg">
                Download PDF
              </a>
            </div>
          </div>
          <IB>
            <strong>Form nahi mil raha?</strong> Patwari ya <Link href="/beneficiary-list" className="underline">Block Agriculture Office</Link> se contact karo.
          </IB>
        </div>

        {/* SECTION 1: Real Story */}
        <section className="mb-8">
          <SH>Land Seeding Kya Hai? Real Problem Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, Meerut ke Suresh ji ne PM Kisan ke liye apply kiya. <Link href="/articles/PmKisanEkycOnline2026" className="underline text-green-700 dark:text-green-400">EKYC</Link> ho gaya, bank account link ho gaya. Lekin 3 mahine baad bhi paisa nahi aaya.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="underline text-green-700 dark:text-green-400">Status check</Link> kiya toh likha tha — <strong>"Land Seeding Pending"</strong>.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Suresh ji pareshan ho gaye. Patwari ke paas gaye, BAO ke paas gaye. Har jagah se alag-alag form maanga gaya. Kisi ko samajh nahi aaya ki kaunsa form bharna hai.
          </p>
          
          <Image
            src="/images/articles/pm-kisan-land-seeding-form/land-seeding-problem.webp"
            alt="Farmer confused about land seeding form and process"
            width={800}
            height={450}
            className="w-full rounded-xl mb-4"
          />

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Isi problem ko solve karne ke liye humne ye guide banaya hai. Har state ka form, har step ka process — sab kuch ek jagah. Agar aap bhi <Link href="/articles/PmKisanBeneficiaryList2026" className="underline text-green-700 dark:text-green-400">beneficiary list</Link> mein apna naam check kar rahe hain aur land seeding pending dikh raha hai, toh ye article end tak padho.
          </p>
        </section>

        {/* SECTION 2: What is Land Seeding */}
        <section className="mb-8">
          <SH>Land Seeding Form Kyun Zaroori Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Dekho bhai, PM Kisan ka paisa tabhi milta hai jab tumhari zameen ka record government database mein link ho jaaye.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Is process ko <strong>Land Seeding</strong> kehte hain.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <span className="text-3xl block mb-2"></span>
              <p className="font-black text-sm text-green-800 dark:text-green-300">Form Bharo</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Khasra-Khatauni details</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-center">
              <span className="text-3xl block mb-2">✅</span>
              <p className="font-black text-sm text-blue-800 dark:text-blue-300">Verification</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Patwari check karega</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-center">
              <span className="text-3xl block mb-2">💰</span>
              <p className="font-black text-sm text-amber-800 dark:text-amber-300">Paisa Milega</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">15-30 din mein</p>
            </div>
          </div>
        </section>

        {/* SECTION 3: State Wise Forms */}
        <section className="mb-8">
          <SH>State Wise Land Seeding Form Details</SH>
          
          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">🏔️ Uttar Pradesh</h3>
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl p-5 mb-6">
            <p className="text-sm text-green-800 dark:text-green-300 mb-3">
              <strong>Form Ka Naam:</strong> UP PM Kisan Land Seeding Form 2026
            </p>
            <p className="text-sm text-green-800 dark:text-green-300 mb-3">
              <strong>Kahan Se Milega:</strong>
            </p>
            <ul className="list-disc list-inside text-xs text-green-800 dark:text-green-300 space-y-1 mb-3">
              <li><Link href="https://upbhulekh.gov.in" className="underline">upbhulekh.gov.in</Link> se download</li>
              <li>Patwari se le sakte ho</li>
              <li>CSC center par bhi milta hai</li>
            </ul>
            <p className="text-sm text-green-800 dark:text-green-300 mb-3">
              <strong>Documents Required:</strong>
            </p>
            <ul className="list-disc list-inside text-xs text-green-800 dark:text-green-300 space-y-1">
              <li>Khatauni copy</li>
              <li>Khasra naksha</li>
              <li>Aadhaar card</li>
              <li>Bank passbook</li>
            </ul>
          </div>

          <Image
            src="/images/articles/pm-kisan-land-seeding-form/up-land-seeding-form-sample.webp"
            alt="Uttar Pradesh land seeding form sample with fields"
            width={800}
            height={600}
            className="w-full rounded-xl mb-4"
          />

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">🌊 Bihar</h3>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 rounded-xl p-5 mb-6">
            <p className="text-sm text-blue-800 dark:text-blue-300 mb-3">
              <strong>Form Ka Naam:</strong> Bihar PM Kisan Land Seeding Application
            </p>
            <p className="text-sm text-blue-800 dark:text-blue-300 mb-3">
              <strong>Kahan Se Milega:</strong>
            </p>
            <ul className="list-disc list-inside text-xs text-blue-800 dark:text-blue-300 space-y-1 mb-3">
              <li><Link href="https://biharbhumi.bihar.gov.in" className="underline">biharbhumi.bihar.gov.in</Link></li>
              <li>Circle Officer office</li>
              <li>Block Agriculture Office</li>
            </ul>
            <p className="text-sm text-blue-800 dark:text-blue-300">
              <strong>Processing Time:</strong> 20-30 din (flood area mein zyada)
            </p>
          </div>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">🌿 Madhya Pradesh</h3>
          <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-500 dark:border-purple-700 rounded-xl p-5 mb-6">
            <p className="text-sm text-purple-800 dark:text-purple-300 mb-3">
              <strong>Form Ka Naam:</strong> MP Land Seeding Form (Bhu-Abhilekh)
            </p>
            <p className="text-sm text-purple-800 dark:text-purple-300 mb-3">
              <strong>Online Process:</strong>
            </p>
            <ul className="list-disc list-inside text-xs text-purple-800 dark:text-purple-300 space-y-1">
              <li><Link href="https://bhu-abhilekh.nic.in" className="underline">bhu-abhilekh.nic.in</Link> par jao</li>
              <li>Land Seeding option select karo</li>
              <li>Khasra number daalo</li>
              <li>Form auto-fill ho jayega</li>
            </ul>
          </div>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">☀️ Rajasthan</h3>
          <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 dark:border-amber-700 rounded-xl p-5 mb-6">
            <p className="text-sm text-amber-800 dark:text-amber-300 mb-3">
              <strong>Form Ka Naam:</strong> Rajasthan PM Kisan Land Seeding Form
            </p>
            <p className="text-sm text-amber-800 dark:text-amber-300 mb-3">
              <strong>Kahan Se Milega:</strong>
            </p>
            <ul className="list-disc list-inside text-xs text-amber-800 dark:text-amber-300 space-y-1">
              <li><Link href="https://apnakhata.raj.nic.in" className="underline">apnakhata.raj.nic.in</Link></li>
              <li>E-Mitra center</li>
              <li>Tehsil office</li>
            </ul>
          </div>
        </section>

        {/* SECTION 4: Step by Step Process */}
        <section className="mb-8">
          <SH>Land Seeding Form Kaise Bharein? Step-by-Step</SH>
          <StepList>
            <SI n={1}>Form download karo ya patwari se lo</SI>
            <SI n={2}>Apna naam, Aadhaar number likho</SI>
            <SI n={3}>Khasra number aur khatauni number bharein</SI>
            <SI n={4}>Zameen ka area (hectare/acre) likho</SI>
            <SI n={5}>Bank account number aur IFSC code daalo</SI>
            <SI n={6}>Patwari se sign karwao</SI>
            <SI n={7}>Block Agriculture Office mein submit karo</SI>
            <SI n={8}>15-30 din baad <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="underline text-green-700 dark:text-green-400">status check</Link> karo</SI>
          </StepList>

          <Image
            src="/images/articles/pm-kisan-land-seeding-form/land-seeding-form-filled-sample.webp"
            alt="Filled land seeding form sample with all fields"
            width={800}
            height={600}
            className="w-full rounded-xl my-6"
          />

          <WB>
            <strong> Important Tip:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
              <li>Form hamesha black ya blue pen se bharein</li>
              <li>Khasra number Khatauni se match karein</li>
              <li>Patwari ka sign aur stamp zaroori hai</li>
              <li>Form ki photocopy apne paas rakhein</li>
            </ul>
          </WB>
        </section>

        {/* SECTION 5: Common Problems */}
        <section className="mb-8">
          <SH>Common Problems + Solutions</SH>
          <div className="space-y-3">
            {[
              { problem: 'Khasra number galat hai', solution: 'Khatauni check karo, patwari se correct number lo' },
              { problem: 'Naam mismatch hai', solution: 'Aadhaar aur Khatauni mein naam same karo' },
              { problem: 'Patwari sign nahi kar raha', solution: 'Tehsil office mein complaint karo' },
              { problem: 'Form reject ho gaya', solution: 'BAO se reason pucho, dobara submit karo' },
            ].map(({ problem, solution }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">❌ {problem}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>✅ Fix:</strong> {solution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: Timeline */}
        <section className="mb-8">
          <SH>Land Seeding Mein Kitna Time Lagta Hai?</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Stage</th>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Kya Hota Hai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Form Submission', 'Day 1', 'BAO office mein form jama'],
                  ['Patwari Verification', 'Day 2-7', 'Zameen ka record check'],
                  ['BAO Approval', 'Day 8-15', 'Officer sign karta hai'],
                  ['Database Update', 'Day 16-30', 'PM Kisan portal par update'],
                ].map(([stage, time, desc], i) => (
                  <tr key={stage} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{stage}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{time}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Land Seeding Form FAQ 2026" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Official Portal"
          guide="Apna Status Check Karo"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanBeneficiaryList2026', l: '📋 Beneficiary List' },
          { href: '/articles/PmKisanEkycOnline2026', l: '🔐 eKYC Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
