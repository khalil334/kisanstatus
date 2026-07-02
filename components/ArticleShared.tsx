'use client';
import Link from 'next/link';
import React from 'react';

export function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function SI({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-3 items-stretch list-none mb-2">
      <div className="flex flex-col items-center shrink-0 w-9">
        <div className="w-9 h-9 rounded-full bg-[var(--color-primary)] text-white text-sm font-black flex items-center justify-center shadow-md shrink-0">
          {n}
        </div>
        <div className="w-0.5 flex-1 bg-gradient-to-b from-green-300 to-transparent mt-1 min-h-[12px]" />
      </div>
      <div className="flex-1 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-text)] leading-relaxed shadow-sm mb-1 hover:border-[var(--color-primary)] transition-colors">
        {children}
      </div>
    </li>
  );
}

export function StepList({ children }: { children: React.ReactNode }) {
  return <ol className="space-y-0 my-4">{children}</ol>;
}

export function IB({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 dark:border-green-500 rounded-r-xl text-sm text-[var(--color-text)] leading-relaxed">
      {children}
    </div>
  );
}

export function WB({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl text-sm text-[var(--color-text)] leading-relaxed">
      {children}
    </div>
  );
}

export function DB({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-xl text-sm text-[var(--color-text)] leading-relaxed">
      {children}
    </div>
  );
}

export function SH({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)] flex items-center gap-2">
      {children}
    </h2>
  );
}

export function GovLink({
  href, label, guide, guideHref,
}: { href: string; label: string; guide: string; guideHref?: string }) {
  return (
    <div className="my-5 border-2 border-[var(--color-border)] rounded-2xl overflow-hidden bg-[var(--color-card)] shadow-sm">
      <div className="bg-green-50 dark:bg-green-900/20 border-b border-[var(--color-border)] px-4 py-2.5 flex items-center gap-2">
        <span className="text-green-700 dark:text-green-300 text-xs font-bold">📖 Pehle guide padhi? Ab official site par jao:</span>
      </div>
      <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
        <div>
          <p className="font-bold text-[var(--color-text)] text-sm">{label}</p>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Government of India — pmkisan.gov.in</p>
        </div>
        <div className="flex gap-2 shrink-0">
          {guideHref && (
            <Link href={guideHref}
              className="text-xs px-3 py-2 bg-[var(--color-bg-alt)] text-[var(--color-text)] rounded-lg font-medium hover:bg-[var(--color-border)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
              📖 Guide Padho
            </Link>
          )}
          <a href={href} target="_blank" rel="noopener noreferrer"
            className="text-xs px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg font-bold hover:bg-[var(--color-primary-dark)] transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
            {guide} ↗
          </a>
        </div>
      </div>
      <div className="px-4 py-2 bg-amber-50 dark:bg-amber-900/20 border-t border-amber-100 dark:border-amber-800">
        <p className="text-[10px] text-amber-700 dark:text-amber-300">⚠️ KisanStatus.com government se affiliated nahi hai — official portal hai: pmkisan.gov.in</p>
      </div>
    </div>
  );
}

export function RelatedArticles({ articles }: { articles: { slug: string; title: string; emoji: string }[] }) {
  return (
    <div className="mt-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
      <h3 className="font-black text-[var(--color-text)] mb-4 text-base flex items-center gap-2">
        <span>🔗</span> Related Articles — Yeh Bhi Padho
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {articles.map(a => (
          <Link key={a.slug} href={`/articles/${a.slug}`}
            className="flex items-center gap-3 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] hover:bg-[var(--color-bg-alt)] transition-colors text-sm font-medium text-[var(--color-text)] no-underline group focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
            <span className="text-xl shrink-0 group-hover:scale-110 transition-transform">{a.emoji}</span>
            <span className="group-hover:text-[var(--color-primary)] transition-colors">{a.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ✅ FIXED: Sidhu Singh → KisanStatus Team
export function AuthorBox({ modified }: { modified: string }) {
  return (
    <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 border border-[var(--color-border)] rounded-2xl my-8">
      <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-2xl shrink-0 shadow-md">🌾</div>
      <div>
        <Link href="/about" className="font-black text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded">KisanStatus Team</Link>
        <p className="text-xs text-green-700 dark:text-green-400 font-semibold mt-0.5">Agricultural Expert & Farmer Advocate</p>
        <p className="text-xs text-[var(--color-text-muted)] mt-1">Pichhle 5 saal se Indian farmers ko government schemes navigate karne mein help kar rahe hain.</p>
        <p className="text-xs text-[var(--color-text-muted)] mt-1">🔄 Last Updated: {fmtDate(modified)}</p>
      </div>
    </div>
  );
}

// ✅ FIXED: Broken link /pm-kisan-status → /articles/pm-kisan-23vi-kist-2026-status-check
export function BottomNav() {
  const links = [
    { href:'/',                                                   l:'🏠 Home'         },
    { href:'/articles/pm-kisan-23vi-kist-2026-status-check',     l:'✅ Status'        },
    { href:'/articles/pm-kisan-ekyc-online-2026',                 l:'🔐 eKYC'         },
    { href:'/articles/pm-kisan-payment-failed-status-2026',       l:'💸 Payment'      },
    { href:'/articles/pm-kisan-name-correction-online-2026',      l:'✏️ Correction'   },
    { href:'/articles/pm-kisan-beneficiary-list-2026',            l:'📋 Beneficiary'  },
    { href:'/articles/pm-kisan-registration-online-2026',         l:'📝 Registration' },
    { href:'/calculator',                                         l:'🧮 Calculator'   },
    { href:'/about',                                              l:'👤 About'        },
  ];
  return (
    <div className="pt-6 border-t border-[var(--color-border)] mt-8">
      <p className="text-xs text-[var(--color-text-muted)] uppercase font-bold tracking-wide mb-3">KisanStatus.com — Quick Links</p>
      <div className="flex flex-wrap gap-2">
        {links.map(({ href, l }) => (
          <Link key={href} href={href}
            className="text-xs px-3 py-1.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 rounded-full hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
            {l}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Disclaimer() {
  return (
    <div className="mt-6 p-4 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl text-xs text-[var(--color-text-muted)] leading-relaxed">
      <strong>⚠️ Disclaimer:</strong> KisanStatus.com ek independent information portal hai — Government of India ya pmkisan.gov.in ka official platform nahi hai.
      Yahan di gayi jankari educational purpose ke liye hai. Kisi bhi sarkari kaam ke liye <strong>pmkisan.gov.in</strong> ya helpline <strong>155261</strong> use karein.
    </div>
  );
}

export function CalcBanner() {
  return (
    <div className="my-8 p-6 bg-gradient-to-r from-green-800 to-green-600 rounded-2xl text-white text-center">
      <p className="text-2xl mb-2">📆</p>
      <p className="font-black text-lg mb-1">23vi Kist Ruki Hai? Pata Karo Kyun</p>
      <p className="text-green-100 text-sm mb-4">eKYC, bank seeding, land seeding check karo — 4 sawaal mein exact reason. Plus PM Kisan benefit, KCC EMI, PMFBY premium calculators — sab free</p>
      <div className="flex flex-wrap justify-center gap-2.5">
        <Link href="/calculator/installment-tracker"
          className="inline-flex items-center gap-2 bg-white text-green-800 font-black px-6 py-3 rounded-xl text-sm hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white">
          📆 Installment Tracker Kholo →
        </Link>
        <Link href="/calculator"
          className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-white/25 transition-colors focus:outline-none focus:ring-2 focus:ring-white">
          🧮 Sab Calculators Dekho
        </Link>
      </div>
    </div>
  );
}