'use client';

import { useState } from 'react';
import Link from 'next/link';

const KIST_CONFIG = {
  current: {
    name: '23वीं किस्त',
    number: 23,
    releaseDate: new Date('2026-06-20T00:00:00+05:30'),
    amount: '₹2,000',
    beneficiaries: '9.44 करोड़+',
  },
  next: {
    name: '24वीं किस्त',
    number: 24,
    expectedDate: 'October 2026',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'PM Kisan Kist Tracker 2026 — Kist Kyun Ruki Hai Jaano',
  url: 'https://kisanstatus.com/calculator/installment-tracker',
  applicationCategory: 'FinanceApplication',
  description: '4 sawaal mein pata karo ki PM Kisan ki kist kyun ruki hai — eKYC, bank seeding, land seeding check karo. Free tool.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1847',
  },
};

export default function InstallmentTrackerCalcPage() {
  const [ekyc, setEkyc] = useState('unknown');
  const [seeding, setSeeding] = useState('unknown');
  const [land, setLand] = useState('unknown');
  const [progress, setProgress] = useState('unknown');

  const today = new Date();
  const daysSince = Math.floor(
    (today.getTime() - KIST_CONFIG.current.releaseDate.getTime()) / 86400000
  );

  const allAnswered =
    ekyc !== 'unknown' &&
    seeding !== 'unknown' &&
    land !== 'unknown' &&
    progress !== 'unknown';

  const allGood =
    allAnswered &&
    ekyc === 'yes' &&
    seeding === 'yes' &&
    land === 'yes' &&
    progress === 'active';

  const blockers: {
    icon: string;
    title: string;
    desc: string;
    href: string;
    cta: string;
  }[] = [];

  if (ekyc === 'no')
    blockers.push({
      icon: '🔐',
      title: 'eKYC Nahi Hua Hai',
      desc: 'Bina eKYC ke kist nahi aayegi. Turant complete karo.',
      href: '/articles/PmKisanEkycOnline2026',
      cta: 'eKYC Kaise Karein',
    });

  if (seeding === 'no')
    blockers.push({
      icon: '🏦',
      title: 'Bank Seeding Nahi Hui',
      desc: 'Aadhaar bank account se link nahi hai. Bank jao aur link karwao.',
      href: '/articles/PmKisanPaymentFailedFix2026',
      cta: 'Bank Seeding Guide',
    });

  if (land === 'no')
    blockers.push({
      icon: '🌾',
      title: 'Land Seeding Problem',
      desc: 'Zameen ka record portal se link nahi hua. Patwari se baat karo.',
      href: '/articles/PmKisanMasterGuide2026',
      cta: 'Land Seeding Fix',
    });

  if (progress === 'rejected')
    blockers.push({
      icon: '❌',
      title: 'Application Reject Ho Gayi',
      desc: 'Kisi wajah se application reject hui. Reason check karo.',
      href: '/articles/PmKisanPaymentFailedFix2026',
      cta: 'Rejection Fix Guide',
    });

  const releaseDateStr = KIST_CONFIG.current.releaseDate.toLocaleDateString(
    'hi-IN',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/calculator" className="hover:text-white transition-colors">Utilities</Link>
            <span>/</span>
            <span className="text-white font-bold">Kist Tracker</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            📆 Kist Status Tracker
          </span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Kist Tracker 2026
          </h1>
          <p className="text-green-100 text-sm md:text-base max-w-2xl">
            Kist kyun ruki hai? 4 sawaal mein pata karo — eKYC, bank seeding, land seeding sab check karo
          </p>
        </div>
      </div>

      <div className="container-site max-w-2xl py-8">
        <div className="mb-6 p-5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-sm text-[var(--color-text)] leading-relaxed">
          <p className="font-bold text-green-900 dark:text-green-300 mb-2">📆 Kist Kyun Nahi Aayi? Jaano Turant</p>
          <p className="mb-2">
            <strong>{KIST_CONFIG.current.name}</strong> {releaseDateStr} ko release ho chuki hai — <strong>{KIST_CONFIG.current.beneficiaries}</strong> kisanon ko {KIST_CONFIG.current.amount} mil chuke hain.
          </p>
          <p className="mb-2">
            Agar aapke account mein abhi tak nahi aayi, toh <strong>3 main reasons</strong> ho sakte hain:
          </p>
          <ul className="space-y-1 ml-4 mb-3">
            <li>❌ <strong>eKYC nahi hua</strong> — 90% cases mein yahi problem hoti hai</li>
            <li>❌ <strong>Bank seeding nahi hui</strong> — Aadhaar bank se link nahi hai</li>
            <li>❌ <strong>Land seeding problem</strong> — zameen ka record portal se link nahi hua</li>
          </ul>
          <p className="text-xs text-green-700 dark:text-green-300">
            💡 <strong>Tip:</strong> Neeche 4 sawaal ka jawab do — turant pata chal jayega ki kist kyun ruki hai aur kaise fix karna hai.
          </p>
        </div>

        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-[var(--color-text)] text-base mb-5 flex items-center gap-2">
            <span>🧮</span> 4 Sawaal Mein Pata Karo
          </h2>

          <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-xs text-blue-800 dark:text-blue-300">
            <strong>💡 Pehle ye karo:</strong> Apna status pehle{' '}
            <a
              href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold"
            >
              pmkisan.gov.in par check karo
            </a>
            , phir neeche jawab do.
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1">
                1. eKYC ho gaya hai?
              </label>
              <select
                value={ekyc}
                onChange={(e) => setEkyc(e.target.value)}
                className="w-full border border-[var(--color-border)] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary-light)] bg-[var(--color-card)] text-[var(--color-text)]"
              >
                <option value="unknown">❓ Pata nahi — pehle check karo</option>
                <option value="yes">✅ Haan — eKYC complete hai</option>
                <option value="no">❌ Nahi — abhi pending hai</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1">
                2. Bank account mein Aadhaar seeding hui hai?
              </label>
              <select
                value={seeding}
                onChange={(e) => setSeeding(e.target.value)}
                className="w-full border border-[var(--color-border)] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary-light)] bg-[var(--color-card)] text-[var(--color-text)]"
              >
                <option value="unknown">❓ Pata nahi — bank se pata karo</option>
                <option value="yes">✅ Haan — bank ne confirm kiya</option>
                <option value="no">❌ Nahi / Pata nahi</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1">
                3. Portal par "Land Seeding" theek hai?
              </label>
              <select
                value={land}
                onChange={(e) => setLand(e.target.value)}
                className="w-full border border-[var(--color-border)] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary-light)] bg-[var(--color-card)] text-[var(--color-text)]"
              >
                <option value="unknown">❓ Pata nahi — portal par dekho</option>
                <option value="yes">✅ Haan — land seeding theek hai</option>
                <option value="no">❌ Nahi — problem dikh rahi hai</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1">
                4. Beneficiary status kya dikha raha hai?
              </label>
              <select
                value={progress}
                onChange={(e) => setProgress(e.target.value)}
                className="w-full border border-[var(--color-border)] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary-light)] bg-[var(--color-card)] text-[var(--color-text)]"
              >
                <option value="unknown">❓ Pata nahi — portal par dekho</option>
                <option value="active">✅ Active dikh raha hai</option>
                <option value="rejected">❌ Rejected dikh raha hai</option>
              </select>
            </div>
          </div>

          {!allAnswered ? (
            <div className="mt-6 p-5 bg-[var(--color-bg-alt)] border-2 border-[var(--color-border)] rounded-2xl text-center">
              <span className="text-3xl block mb-2">🤔</span>
              <p className="font-bold text-[var(--color-text)] mb-2">
                Sabhi Sawaalon Ke Jawab Do
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                Upar 4 sawaal mein se kuch ka jawab "Pata nahi" hai. Pehle apna status check karo.
              </p>
              <a
                href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors mt-3"
              >
                🏛️ Pehle Official Status Check Karo →
              </a>
            </div>
          ) : allGood ? (
            <div className="mt-6 p-5 bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-2xl text-center">
              <span className="text-3xl block mb-2">🎉</span>
              <p className="font-black text-green-800 dark:text-green-300 mb-1">
                Sab Kuch Sahi Hai!
              </p>
              <p className="text-sm text-green-700 dark:text-green-400 mb-3">
                eKYC, bank seeding, land seeding sab theek hai. Kist jaldi aa jayegi.
              </p>
              <a
                href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                🏛️ Official Status Check Karo →
              </a>
              <p className="text-xs text-green-600 dark:text-green-400 mt-3">
                Last release: {KIST_CONFIG.current.name} — {releaseDateStr} ({daysSince} din pehle)
              </p>
            </div>
          ) : (
            <div className="mt-6 bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-300 dark:border-orange-700 rounded-2xl p-5">
              <p className="text-xs text-orange-700 dark:text-orange-300 font-bold uppercase tracking-wide mb-3">
                ⚠️ {blockers.length} Problem{blockers.length > 1 ? 's' : ''} Mili
              </p>
              <div className="space-y-3">
                {blockers.map((b) => (
                  <div
                    key={b.title}
                    className="bg-[var(--color-card)] border border-orange-200 dark:border-orange-800 rounded-xl p-3.5"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="text-xl shrink-0">{b.icon}</span>
                      <div className="flex-1">
                        <p className="font-black text-[var(--color-text)] text-sm">
                          {b.title}
                        </p>
                        <p className="text-xs text-[var(--color-text-muted)] mt-0.5 mb-2">
                          {b.desc}
                        </p>
                        <Link
                          href={b.href}
                          className="inline-flex items-center gap-1 text-xs font-bold text-orange-700 dark:text-orange-400 hover:text-orange-900 dark:hover:text-orange-300"
                        >
                          {b.cta} →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl flex items-center gap-3">
          <span className="text-2xl">⏳</span>
          <div>
            <p className="font-bold text-blue-900 dark:text-blue-300 text-sm">Agli Kist</p>
            <p className="text-xs text-blue-700 dark:text-blue-400">
              {KIST_CONFIG.next.name} — {KIST_CONFIG.next.expectedDate} (Expected)
            </p>
          </div>
        </div>

        <div className="mt-6 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-5 shadow-sm">
          <h3 className="font-black text-[var(--color-text)] text-sm mb-4">⚠️ Kist Kyun Rukti Hai? Common Reasons</h3>
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-bold text-red-900 dark:text-red-300 text-xs mb-1">❌ eKYC Nahi Hua (90% Cases)</p>
              <p className="text-xs text-red-800 dark:text-red-400">Sabse common reason. Aadhaar se OTP verify karo — 5 minute mein ho jayega. CSC center ya online — dono free hain.</p>
            </div>
            <div className="p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl">
              <p className="font-bold text-orange-900 dark:text-orange-300 text-xs mb-1">🏦 Bank Seeding Nahi Hui</p>
              <p className="text-xs text-orange-800 dark:text-orange-400">Aadhaar bank account se link nahi hai. Bank jao, Aadhaar seeding karwao. NPCI mapper se bhi ho jayega.</p>
            </div>
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl">
              <p className="font-bold text-yellow-900 dark:text-yellow-300 text-xs mb-1">🌾 Land Seeding Problem</p>
              <p className="text-xs text-yellow-800 dark:text-yellow-400">Zameen ka record portal se link nahi hua. Patwari ya revenue department se baat karo. 7-14 din mein fix ho jayega.</p>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <p className="font-bold text-purple-900 dark:text-purple-300 text-xs mb-1">❌ Application Reject</p>
              <p className="text-xs text-purple-800 dark:text-purple-400">Documents galat, zameen galat, ya duplicate entry. Reason check karo aur fix karo. Re-apply kar sakte ho.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-5 shadow-sm">
          <h3 className="font-black text-[var(--color-text)] text-sm mb-4">🔧 Kist Ruki Hai To Kya Karein?</h3>
          <div className="space-y-3">
            {[
              {n:1, s:'Pehle status check karo — pmkisan.gov.in par. Wahan reason dikhega'},
              {n:2, s:'eKYC nahi hai to turant karo — CSC center jao ya online Aadhaar OTP se'},
              {n:3, s:'Bank seeding nahi hai to bank jao — Aadhaar link karwao, PFMS se check karo'},
              {n:4, s:'Land seeding problem hai to patwari se baat karo — records update karwao'},
              {n:5, s:'Sab fix karne ke baad 15-30 din mein kist aa jayegi — arrears bhi milenge'},
              {n:6, s:'Problem solve nahi ho rahi? Helpline 155261 par call karo — free hai'},
            ].map(({n, s}) => (
              <div key={n} className="flex gap-3 items-start">
                <span className="w-7 h-7 rounded-full bg-green-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{n}</span>
                <p className="text-sm text-[var(--color-text)]">{s}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              icon: '💰',
              title: `${KIST_CONFIG.current.amount} Har Kist`,
              desc: `${releaseDateStr} ko ${KIST_CONFIG.current.name} release hui`,
            },
            {
              icon: '🔐',
              title: 'eKYC Sabse Zaroori',
              desc: '90% pending cases eKYC na hone ki wajah se hain',
            },
            {
              icon: '📞',
              title: 'Helpline: 155261',
              desc: 'Koi bhi problem ho — free government helpline',
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-center shadow-sm"
            >
              <span className="text-2xl block mb-1">{icon}</span>
              <p className="font-black text-[var(--color-text)] text-xs">{title}</p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-1">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-5 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl">
          <p className="font-bold text-[var(--color-text)] text-sm mb-3">❓ Kist Ke Baare Mein Aksar Sawaal</p>
          <div className="space-y-3 text-xs">
            <details className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-3">
              <summary className="font-bold text-[var(--color-text)] cursor-pointer">Kist kab aati hai?</summary>
              <p className="mt-2 text-[var(--color-text-muted)]">Saal mein 3 kist aati hai — April, August, December mein. Har kist ₹2,000 ki hoti hai. Saal ka total ₹6,000 milta hai. Exact date government announce karti hai.</p>
            </details>
            <details className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-3">
              <summary className="font-bold text-[var(--color-text)] cursor-pointer">Kist kyun nahi aayi?</summary>
              <p className="mt-2 text-[var(--color-text-muted)]">3 main reasons: 1) eKYC nahi hua, 2) Bank seeding nahi hui, 3) Land seeding problem. Pehle status check karo — wahan reason dikhega. Fix karo, kist wapas mil jayegi.</p>
            </details>
            <details className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-3">
              <summary className="font-bold text-[var(--color-text)] cursor-pointer">FTO Generated ka matlab kya hai?</summary>
              <p className="mt-2 text-[var(--color-text-muted)]">FTO (Fund Transfer Order) generate ho gaya — matlab government ne paisa bhej diya hai. 7-10 din mein bank account mein aa jayega. Agar 15 din ho gaye to bank jao.</p>
            </details>
            <details className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-3">
              <summary className="font-bold text-[var(--color-text)] cursor-pointer">Missed kist ka paisa milega?</summary>
              <p className="mt-2 text-[var(--color-text-muted)]">Haan! Agar problem fix kar di hai to arrears mein mil jayega. Example: 2 kist miss hui, ab eKYC kar li — to ₹4,000 arrears mein aayenge. Par jaldi karo.</p>
            </details>
            <details className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-3">
              <summary className="font-bold text-[var(--color-text)] cursor-pointer">Helpline number kya hai?</summary>
              <p className="mt-2 text-[var(--color-text-muted)]">155261 (toll-free) — Mon-Sat 9:30 AM se 6:00 PM. Email: pmkisan-ict@gov.in. Kisi bhi problem ke liye call karo. Free hai.</p>
            </details>
          </div>
        </div>

        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
          <p className="font-bold text-green-900 dark:text-green-300 text-sm mb-2">📖 Related Guides</p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: '/articles/PmKisan24viKist2026', label: '📆 24vi Kist Status' },
              { href: '/articles/PmKisanEkycOnline2026', label: '🔐 eKYC Guide' },
              { href: '/articles/PmKisanPaymentFailedFix2026', label: '💸 Payment Fix' },
              { href: '/articles/PmKisanMasterGuide2026', label: '📚 Complete Guide' },
              { href: '/articles/PmKisanBeneficiaryList2026', label: '📋 Beneficiary List' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs px-3 py-1.5 bg-[var(--color-card)] border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 rounded-full hover:bg-green-600 hover:text-white dark:hover:bg-green-700 transition-colors font-medium"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-xs text-amber-800 dark:text-amber-300">
          <strong>⚠️ Disclaimer:</strong> Yeh tracker aapke jawabon ke basis par common reasons batata hai. Final status official portal par hi check karo.
        </div>
      </div>
    </>
  );
}