/**
 * ArticleShared.tsx — Reusable components for all articles
 * Mobile-friendly steps, info boxes, gov link wrapper
 */
'use client';
import Link from 'next/link';
import React from 'react';

// ── Auto date formatter ───────────────────────────────────────────────────────
export function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

// ── Step Item — mobile-first numbered card with connector line ────────────────
export function SI({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-3 items-stretch list-none mb-2">
      <div className="flex flex-col items-center shrink-0 w-9">
        <div className="w-9 h-9 rounded-full bg-green-700 text-white text-sm font-black flex items-center justify-center shadow-md shrink-0">
          {n}
        </div>
        <div className="w-0.5 flex-1 bg-gradient-to-b from-green-300 to-transparent mt-1 min-h-[12px]" />
      </div>
      <div className="flex-1 bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-800 leading-relaxed shadow-sm mb-1 hover:border-green-200 transition-colors">
        {children}
      </div>
    </li>
  );
}

// ── Step list wrapper ─────────────────────────────────────────────────────────
export function StepList({ children }: { children: React.ReactNode }) {
  return <ol className="space-y-0 my-4">{children}</ol>;
}

// ── Info box (green) ─────────────────────────────────────────────────────────
export function IB({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 p-4 bg-green-50 border-l-4 border-green-600 rounded-r-xl text-sm text-gray-800 leading-relaxed">
      {children}
    </div>
  );
}

// ── Warning box (amber) ───────────────────────────────────────────────────────
export function WB({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-sm text-gray-800 leading-relaxed">
      {children}
    </div>
  );
}

// ── Danger box (red) ─────────────────────────────────────────────────────────
export function DB({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl text-sm text-gray-800 leading-relaxed">
      {children}
    </div>
  );
}

// ── Section heading ───────────────────────────────────────────────────────────
export function SH({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-green-100 flex items-center gap-2">
      {children}
    </h2>
  );
}

// ── Gov Link — "guide padho pehle" wrapper ───────────────────────────────────
// Instead of bare gov link, show a proper CTA with warning
export function GovLink({
  href, label, guide, guideHref,
}: { href: string; label: string; guide: string; guideHref?: string }) {
  return (
    <div className="my-5 border-2 border-green-200 rounded-2xl overflow-hidden bg-white shadow-sm">
      <div className="bg-green-50 border-b border-green-100 px-4 py-2.5 flex items-center gap-2">
        <span className="text-green-700 text-xs font-bold">📖 Pehle guide padhi? Ab official site par jao:</span>
      </div>
      <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
        <div>
          <p className="font-bold text-gray-900 text-sm">{label}</p>
          <p className="text-xs text-gray-500 mt-0.5">Government of India — pmkisan.gov.in</p>
        </div>
        <div className="flex gap-2 shrink-0">
          {guideHref && (
            <Link href={guideHref}
              className="text-xs px-3 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              📖 Guide Padho
            </Link>
          )}
          <a href={href} target="_blank" rel="noopener noreferrer"
            className="text-xs px-4 py-2 bg-green-700 text-white rounded-lg font-bold hover:bg-green-600 transition-colors flex items-center gap-1">
            {guide} ↗
          </a>
        </div>
      </div>
      <div className="px-4 py-2 bg-amber-50 border-t border-amber-100">
        <p className="text-[10px] text-amber-700">⚠️ KisanStatus.com government se affiliated nahi hai — official portal hai: pmkisan.gov.in</p>
      </div>
    </div>
  );
}

// ── Related articles ─────────────────────────────────────────────────────────
export function RelatedArticles({ articles }: { articles: { slug: string; title: string; emoji: string }[] }) {
  return (
    <div className="mt-8 p-5 bg-gray-50 border border-gray-200 rounded-2xl">
      <h3 className="font-black text-gray-900 mb-4 text-base flex items-center gap-2">
        <span>🔗</span> Related Articles — Yeh Bhi Padho
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {articles.map(a => (
          <Link key={a.slug} href={`/articles/${a.slug}`}
            className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-colors text-sm font-medium text-gray-800 no-underline group">
            <span className="text-xl shrink-0 group-hover:scale-110 transition-transform">{a.emoji}</span>
            <span className="group-hover:text-green-700 transition-colors">{a.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── Author box ────────────────────────────────────────────────────────────────
export function AuthorBox({ modified }: { modified: string }) {
  return (
    <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl my-8">
      <div className="w-14 h-14 rounded-full bg-green-700 flex items-center justify-center text-2xl shrink-0 shadow-md">🌾</div>
      <div>
        <Link href="/about" className="font-black text-gray-900 hover:text-green-700 transition-colors">Sidhu Singh</Link>
        <p className="text-xs text-green-700 font-semibold mt-0.5">Agricultural Expert & Farmer Advocate</p>
        <p className="text-xs text-gray-500 mt-1">Pichhle 5 saal se Indian farmers ko government schemes navigate karne mein help kar rahe hain.</p>
        <p className="text-xs text-gray-400 mt-1">🔄 Last Updated: {fmtDate(modified)}</p>
      </div>
    </div>
  );
}

// ── Bottom nav ────────────────────────────────────────────────────────────────
export function BottomNav() {
  const links = [
    { href:'/',                                                   l:'🏠 Home'         },
    { href:'/pm-kisan-status',                                    l:'✅ Status'        },
    { href:'/articles/pm-kisan-ekyc-online-2026',                 l:'🔐 eKYC'         },
    { href:'/articles/pm-kisan-payment-failed-status-2026',       l:'💸 Payment'      },
    { href:'/articles/pm-kisan-name-correction-online-2026',      l:'✏️ Correction'   },
    { href:'/articles/pm-kisan-beneficiary-list-2026',            l:'📋 Beneficiary'  },
    { href:'/articles/pm-kisan-registration-online-2026',         l:'📝 Registration' },
    { href:'/calculator',                                         l:'🧮 Calculator'   },
    { href:'/about',                                              l:'👤 About'        },
  ];
  return (
    <div className="pt-6 border-t border-gray-100 mt-8">
      <p className="text-xs text-gray-400 uppercase font-bold tracking-wide mb-3">KisanStatus.com — Quick Links</p>
      <div className="flex flex-wrap gap-2">
        {links.map(({ href, l }) => (
          <Link key={href} href={href}
            className="text-xs px-3 py-1.5 bg-green-50 border border-green-200 text-green-800 rounded-full hover:bg-green-700 hover:text-white hover:border-green-700 transition-colors font-medium">
            {l}
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── Disclaimer ────────────────────────────────────────────────────────────────
export function Disclaimer() {
  return (
    <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-500 leading-relaxed">
      <strong>⚠️ Disclaimer:</strong> KisanStatus.com ek independent information portal hai — Government of India ya pmkisan.gov.in ka official platform nahi hai.
      Yahan di gayi jankari educational purpose ke liye hai. Kisi bhi sarkari kaam ke liye <strong>pmkisan.gov.in</strong> ya helpline <strong>155261</strong> use karein.
    </div>
  );
}

// ── Calculator CTA banner ─────────────────────────────────────────────────────
export function CalcBanner() {
  return (
    <div className="my-8 p-6 bg-gradient-to-r from-green-800 to-green-600 rounded-2xl text-white text-center">
      <p className="text-2xl mb-2">📆</p>
      <p className="font-black text-lg mb-1">23vi Kist Ruki Hai? Pata Karo Kyun</p>
      <p className="text-green-100 text-sm mb-4">eKYC, bank seeding, land seeding check karo — 4 sawaal mein exact reason. Plus PM Kisan benefit, KCC EMI, PMFBY premium calculators — sab free</p>
      <div className="flex flex-wrap justify-center gap-2.5">
        <Link href="/calculator/installment-tracker"
          className="inline-flex items-center gap-2 bg-white text-green-800 font-black px-6 py-3 rounded-xl text-sm hover:bg-green-50 transition-colors">
          📆 Installment Tracker Kholo →
        </Link>
        <Link href="/calculator"
          className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-white/25 transition-colors">
          🧮 Sab Calculators Dekho
        </Link>
      </div>
    </div>
  );
}