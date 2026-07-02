'use client';

import { useState } from 'react';
import Link from 'next/link';

const KIST_CONFIG = {
  current: {
    name: '23वीं किस्त',
    number: 23,
    releaseDate: new Date('2026-06-20T00:00:00+05:30'),
    amount: '₹2,000',
    beneficiaries: '9.44 crore+',
  },
  next: {
    name: '24वीं किस्त',
    number: 24,
    expectedDate: 'October 2026',
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
      title: 'Digital Verification Pending',
      desc: 'Bina authentication ke tranche nahi aayegi.',
      href: '/articles/pm-kisan-ekyc-online-2026',
      cta: 'Verification Guide',
    });
  if (seeding === 'no')
    blockers.push({
      icon: '🏦',
      title: 'NPCI Mapping Pending',
      desc: 'Bank mein UID link zaroori hai.',
      href: '/articles/pm-kisan-payment-failed-status-2026',
      cta: 'DBT Guide',
    });
  if (land === 'no')
    blockers.push({
      icon: '🌾',
      title: 'Zameen Record Linking No',
      desc: 'Land record portal se connect nahi hua.',
      href: '/articles/pm-kisan-land-seeding-status-check',
      cta: 'Land Guide',
    });
  if (progress === 'rejected')
    blockers.push({
      icon: '❌',
      title: 'Application Declined',
      desc: 'Decline reason check karo.',
      href: '/articles/pm-kisan-rejected-list-2026',
      cta: 'Decline Guide',
    });

  const releaseDateStr = KIST_CONFIG.current.releaseDate.toLocaleDateString(
    'hi-IN',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/calculator" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Calculator</Link>
            <span>/</span>
            <span className="text-white font-bold">Tranche Tracker</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            📆 Disbursement Tracker
          </span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            Agrarian Welfare Tranche Tracker 2026
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>
              ✍️{' '}
              <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">
                KisanStatus Team
              </Link>
            </span>
            <span>⏱️ 5 min check</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-2xl py-8">
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-sm text-[var(--color-text)]">
          <p>
            <strong>📆 {KIST_CONFIG.current.name}</strong> {releaseDateStr} ko
            release ho chuki hai —{' '}
            <strong>{KIST_CONFIG.current.beneficiaries}</strong> cultivators ko{' '}
            {KIST_CONFIG.current.amount} mil chuke hain. Agar tumhare account
            mein abhi tak nahi aaya, neeche 4 sawaalon ke jawab do.
          </p>
        </div>

        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 shadow-sm">
          <h2 className="font-black text-[var(--color-text)] text-base mb-5 flex items-center gap-2">
            <span>🧮</span> Apna Verification Check Karo
          </h2>

          <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-xs text-blue-800 dark:text-blue-300">
            <strong>💡 Pehle ye karo:</strong> Agar tumhe apna progress nahi pata,
            to pehle{' '}
            <a
              href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              pmkisan.gov.in par check karo
            </a>
            , phir neeche jawab do.
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1">
                Digital verification complete hai?
              </label>
              <select
                value={ekyc}
                onChange={(e) => setEkyc(e.target.value)}
                className="w-full border border-[var(--color-border)] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary-light)] bg-[var(--color-card)] text-[var(--color-text)] transition-colors"
              >
                <option value="unknown">❓ Pata nahi — pehle check karo</option>
                <option value="yes">✅ Haan — Authentication Done hai</option>
                <option value="no">❌ Nahi — pending hai</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1">
                Bank account mein UID seeded (NPCI link) hai?
              </label>
              <select
                value={seeding}
                onChange={(e) => setSeeding(e.target.value)}
                className="w-full border border-[var(--color-border)] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary-light)] bg-[var(--color-card)] text-[var(--color-text)] transition-colors"
              >
                <option value="unknown">
                  ❓ Pata nahi — banking partner se pata karo
                </option>
                <option value="yes">✅ Haan — banking partner ne confirm kiya</option>
                <option value="no">❌ Pata nahi / Nahi hai</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1">
                Portal par &apos;Zameen Record Linking No&apos; to nahi dikh raha?
              </label>
              <select
                value={land}
                onChange={(e) => setLand(e.target.value)}
                className="w-full border border-[var(--color-border)] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary-light)] bg-[var(--color-card)] text-[var(--color-text)] transition-colors"
              >
                <option value="unknown">❓ Pata nahi — portal par dekho</option>
                <option value="yes">✅ Zameen mapping theek hai</option>
                <option value="no">❌ Zameen mapping No dikh raha hai</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1">
                Beneficiary progress kya dikha raha hai?
              </label>
              <select
                value={progress}
                onChange={(e) => setProgress(e.target.value)}
                className="w-full border border-[var(--color-border)] rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary-light)] bg-[var(--color-card)] text-[var(--color-text)] transition-colors"
              >
                <option value="unknown">❓ Pata nahi — portal par dekho</option>
                <option value="active">✅ Active</option>
                <option value="rejected">❌ Declined</option>
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
                Upar 4 sawaalon mein se kuch ka jawab &quot;Pata nahi&quot; hai.
                Pehle apna progress check karo.
              </p>
              <a
                href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                🏛️ Pehle Official Verification Check Karo →
              </a>
            </div>
          ) : allGood ? (
            <div className="mt-6 p-5 bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-2xl text-center">
              <span className="text-3xl block mb-2">🎉</span>
              <p className="font-black text-green-800 dark:text-green-300 mb-1">
                Sab Kuch Sahi Hai!
              </p>
              <p className="text-sm text-green-700 dark:text-green-400 mb-3">
                Digital verification, NPCI mapping, zameen mapping aur progress — sab theek hai.
              </p>
              <a
                href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                🏛️ Official Verification Check Karo →
              </a>
              <p className="text-xs text-green-600 dark:text-green-400 mt-3">
                Last release: {KIST_CONFIG.current.name} — {releaseDateStr} (
                {daysSince} din pehle)
              </p>
            </div>
          ) : (
            <div className="mt-6 bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-300 dark:border-orange-700 rounded-2xl p-5">
              <p className="text-xs text-orange-700 dark:text-orange-300 font-bold uppercase tracking-wide mb-3">
                ⚠️ {blockers.length} Problem{blockers.length > 1 ? 's' : ''}{' '}
                Mili
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
                          className="inline-flex items-center gap-1 text-xs font-bold text-orange-700 dark:text-orange-400 hover:text-orange-900 dark:hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
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
            <p className="font-bold text-blue-900 dark:text-blue-300 text-sm">Agli Tranche</p>
            <p className="text-xs text-blue-700 dark:text-blue-400">
              {KIST_CONFIG.next.name} — {KIST_CONFIG.next.expectedDate}{' '}
              (Expected)
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              icon: '💰',
              title: `${KIST_CONFIG.current.amount} Per Tranche`,
              desc: `${releaseDateStr} ko ${KIST_CONFIG.current.name} mein DBT se seedha bank mein`,
            },
            {
              icon: '🔐',
              title: 'Digital Verification Sabse Zaroori',
              desc: '90% pending cases authentication na hone ki wajah se hote hain',
            },
            {
              icon: '📞',
              title: 'Helpline: 155261',
              desc: 'Koi bhi problem ho — free government helpline available',
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

        <div className="mt-6 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-xs text-amber-800 dark:text-amber-300">
          <strong>⚠️ Disclaimer:</strong> Yeh tracker tumhare diye gaye jawabon
          ke hisaab se common reasons batata hai. Final progress official portal
          par hi check karo.
        </div>

        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
          <p className="font-bold text-green-900 dark:text-green-300 text-sm mb-2">
            🔗 Related Guides
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              {
                href: '/articles/pm-kisan-23vi-kist-2026-status-check',
                label: '📆 23vi Tranche Verification',
              },
              {
                href: '/articles/pm-kisan-ekyc-online-2026',
                label: '🔐 Digital Verification Guide',
              },
              {
                href: '/articles/pm-kisan-payment-failed-status-2026',
                label: '💸 DBT Transfer Failed',
              },
              {
                href: '/articles/pm-kisan-land-seeding-status-check',
                label: '🌾 Zameen Record Linking',
              },
              {
                href: '/articles/pm-kisan-rejected-list-2026',
                label: '❌ Application Declined Fix',
              },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs px-3 py-1.5 bg-[var(--color-card)] border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 rounded-full hover:bg-green-600 hover:text-white dark:hover:bg-green-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}