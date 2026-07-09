'use client';

import { useState, useEffect } from 'react';
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
    a: 'Aap apne state ki agriculture department ya revenue department ki official website se form download kar sakte hain. Iske alawa aap apne local Patwari ya CSC center se bhi form prapt kar sakte hain. Har state ka form alag hota hai.',
  },
  {
    q: 'Land seeding mein kitna time lagta hai?',
    a: 'Form submit karne ke baad, Patwari verification aur BAO approval mein lagbhag 15 se 30 din ka samay lag sakta hai.',
  },
  {
    q: 'Khasra number kahan milega?',
    a: 'Khasra number aapki Khatauni (land record) par likha hota hai. Aap apne state ke online Bhulekh portal par jaakar bhi yeh details aasaani se dekh sakte hain.',
  },
  {
    q: 'Land seeding form fees kitni hai?',
    a: 'Sarkar dwara diya gaya form bilkul free hai. Haan, agar aap kisi CSC center ya kisi agent ke through form fill karwate hain, toh wo apni service charge ke taur par ₹20 se ₹50 le sakte hain.',
  },
];

const STATE_LINKS = [
  { name: 'Uttar Pradesh', url: 'https://upbhulekh.gov.in' },
  { name: 'Bihar', url: 'https://biharbhumi.bihar.gov.in' },
  { name: 'Madhya Pradesh', url: 'https://bhu-abhilekh.nic.in' },
  { name: 'Rajasthan', url: 'https://apnakhata.raj.nic.in' },
];

function CountdownModal({ stateName, url, onClose }: { stateName: string; url: string; onClose: () => void }) {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      window.open(url, '_blank', 'noopener,noreferrer');
      onClose();
      return;
    }
    const timer = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, url, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4" onClick={onClose}>
      <div
        className="w-full max-w-sm rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-2xl border-2 border-blue-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <div className="text-5xl mb-3">⏳</div>
          <h3 className="text-lg font-black text-gray-800 dark:text-white mb-2">
            {stateName} Official Portal
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Aapko <strong>{stateName}</strong> ki official website par redirect kiya ja raha hai.
          </p>
          <div className="mb-4">
            <div className="text-6xl font-black text-blue-600 dark:text-blue-400">
              {count}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {count === 0 ? 'Redirecting...' : 'seconds mein redirect hoga'}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                window.open(url, '_blank', 'noopener,noreferrer');
                onClose();
              }}
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors"
            >
              Abhi Jaayein
            </button>
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-bold rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PmKisanLandSeedingFormPdf2026({ article }: { article: ArticleMeta }) {
  const [modal, setModal] = useState<{ stateName: string; url: string } | null>(null);

  return (
    <>
      {modal && (
        <CountdownModal
          stateName={modal.stateName}
          url={modal.url}
          onClose={() => setModal(null)}
        />
      )}

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
            <span> {fmtDate(PUBLISHED)}</span>
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
            Land Seeding Form 2026 — Official State Portal Links
          </p>
        </div>

        {/* PDF Download Section */}
        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-blue-800 dark:text-blue-300 mb-3">
            📥 State Wise Land Seeding Form - Official Links
          </h2>
          <div className="space-y-2">
            {STATE_LINKS.map((state) => (
              <div key={state.name} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{state.name}</span>
                <button
                  onClick={() => setModal({ stateName: state.name, url: state.url })}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Download PDF
                </button>
              </div>
            ))}
          </div>
          <IB>
            <strong>Form download karne mein dikkat aa rahi hai?</strong> Aap apne local Patwari ya nearest <Link href="/beneficiary-list" className="underline">Block Agriculture Office</Link> se sampark kar sakte hain.
          </IB>
        </div>

        {/* SECTION 1: Real Story */}
        <section className="mb-8">
          <SH>Land Seeding Kya Hai? Real Problem Kya Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Yeh ek aam samasya hai. Maan lijiye (illustrative example), ek kisan ne PM Kisan yojana ke liye apply kiya. Unka <Link href="/articles/PmKisanEkycOnline2026" className="underline text-green-700 dark:text-green-400">eKYC</Link> ho gaya, bank account bhi link ho gaya. Par kai mahine guzarne ke baad bhi kist ki raqam nahi aayi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Jab unhone portal par <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="underline text-green-700 dark:text-green-400">status check</Link> kiya, toh wahan likha tha — <strong>"Land Seeding Pending"</strong>.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Aise mein kisan pareshan ho jaate hain. Patwari ke chakkar kaat-te hain, BAO office jaate hain, par har jagah se alag form maanga jaata hai. Samajh nahi aata ki aakhir kaunsa form bharna hai.
          </p>
          
          <Image
            src="/images/articles/pm-kisan-land-seeding-form/land-seeding-problem.webp"
            alt="Farmer confused about land seeding form and process"
            width={800}
            height={450}
            className="w-full rounded-xl mb-4"
          />

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Isi uljhan ko door karne ke liye humne yeh comprehensive guide taiyaar ki hai. Yahan aapko har state ka form aur step-by-step process mil jayega. Agar aap bhi <Link href="/articles/PmKisanBeneficiaryList2026" className="underline text-green-700 dark:text-green-400">beneficiary list</Link> mein apna naam dhundh rahe hain aur wahan land seeding pending dikh raha hai, toh yeh lekh aapke liye bahut madadgar sabit hoga.
          </p>
        </section>

        {/* SECTION 2: What is Land Seeding */}
        <section className="mb-8">
          <SH>Land Seeding Form Kyun Zaroori Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            PM Kisan samman nidhi ka labh tabhi milta hai jab kisan ki zameen ka record sarkari database ke saath properly link ho jaye.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Is prakriya ko hi <strong>Land Seeding</strong> kaha jaata hai.
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
              <li><Link href="https://upbhulekh.gov.in" className="underline">upbhulekh.gov.in</Link> se download karein</li>
              <li>Apne Patwari se prapt karein</li>
              <li>Nazdiki CSC center par bhi uplabdh hai</li>
            </ul>
            <p className="text-sm text-green-800 dark:text-green-300 mb-3">
              <strong>Documents Required:</strong>
            </p>
            <ul className="list-disc list-inside text-xs text-green-800 dark:text-green-300 space-y-1">
              <li>Khatauni ki copy</li>
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
              <strong>Processing Time:</strong> Aamtaur par 20-30 din (flood-prone ilakon mein samay thoda badh sakta hai)
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
              <li><Link href="https://bhu-abhilekh.nic.in" className="underline">bhu-abhilekh.nic.in</Link> par jaayein</li>
              <li>Land Seeding option chunein</li>
              <li>Apna Khasra number darj karein</li>
              <li>Form ki details apne aap fill ho jayengi</li>
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
            <SI n={1}>Sabse pehle form download karein ya apne Patwari se prapt karein.</SI>
            <SI n={2}>Form mein apna poora naam aur Aadhaar number dhyanpurvak likhein.</SI>
            <SI n={3}>Apne Khasra number aur Khatauni number sahi-sahi bharein.</SI>
            <SI n={4}>Zameen ka kul kshetra (hectare ya acre mein) mention karein.</SI>
            <SI n={5}>Apna Bank account number aur IFSC code darj karein.</SI>
            <SI n={6}>Form ko Patwari se verify karwa kar unka sign aur stamp lagwayein.</SI>
            <SI n={7}>Iske baad form ko Block Agriculture Office mein jama karein.</SI>
            <SI n={8}>Lagbhag 15 se 30 din baad portal par apna <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="underline text-green-700 dark:text-green-400">status check</Link> karein.</SI>
          </StepList>

          <Image
            src="/images/articles/pm-kisan-land-seeding-form/land-seeding-form-filled-sample.webp"
            alt="Filled land seeding form sample with all fields"
            width={800}
            height={600}
            className="w-full rounded-xl my-6"
          />

          <WB>
            <strong> Zaroori Salah:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
              <li>Form ko hamesha black ya blue pen se hi bharein.</li>
              <li>Dhyan rahe ki Khasra number Khatauni se bilkul match kare.</li>
              <li>Patwari ka sign aur stamp hona anivarya hai.</li>
              <li>Submit karne se pehle form ki ek photocopy zaroor apne paas rakh lein.</li>
            </ul>
          </WB>
        </section>

        {/* SECTION 5: Common Problems */}
        <section className="mb-8">
          <SH>Common Problems + Solutions</SH>
          <div className="space-y-3">
            {[
              { problem: 'Khasra number galat likh diya', solution: 'Khatauni ko dhyan se check karein aur Patwari se sahi number verify karwa lein.' },
              { problem: 'Naam mein mismatch hai', solution: 'Aadhaar card aur Khatauni mein naam bilkul ek jaisa hona chahiye, zaroorat padne par correction karwa lein.' },
              { problem: 'Patwari sign karne mein aanaakaani kar rahe hain', solution: 'Aise mein aap Tehsil office ya Revenue Inspector se sampark karke shikayat darj kar sakte hain.' },
              { problem: 'Form reject ho gaya', solution: 'BAO se rejection ka kaaran jaanein, galti sudhaar kar dobara submit karein.' },
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
                  ['Form Submission', 'Day 1', 'Block Agriculture Office mein form jama hota hai.'],
                  ['Patwari Verification', 'Day 2-7', 'Patwari zameen ke record ka verification karta hai.'],
                  ['BAO Approval', 'Day 8-15', 'Block Agriculture Officer form ko approve karke sign karte hain.'],
                  ['Database Update', 'Day 16-30', 'PM Kisan portal par aapka record update ho jata hai.'],
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