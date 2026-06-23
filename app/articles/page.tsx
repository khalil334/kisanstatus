/**
 * app/articles/page.tsx
 * All articles listing page — kisanstatus.com/articles
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { ARTICLES } from '@/lib/articles-data';

const DOMAIN = 'https://kisanstatus.com';

export const metadata: Metadata = {
  title: 'Saare PM Kisan Guides 2026 — KisanStatus.com',
  description: 'PM Kisan status check, eKYC, payment failed, name correction, beneficiary list, loan guides — saari jankari ek jagah. 21+ free guides Hindi mein.',
  keywords: [
    'PM Kisan guides 2026',
    'PM Kisan jankari Hindi mein',
    'PM Kisan eKYC guide',
    'PM Kisan payment failed solution',
    'kisan loan guide',
  ],
  authors: [{ name: 'Sidhu Singh', url: `${DOMAIN}/about` }],
  alternates: { canonical: `${DOMAIN}/articles` },
  openGraph: {
    title: 'Saare PM Kisan Guides 2026 — KisanStatus.com',
    description: 'PM Kisan se related saari guides — status check, eKYC, loan, insurance — ek jagah.',
    type: 'website',
    url: `${DOMAIN}/articles`,
    siteName: 'KisanStatus.com',
    locale: 'hi_IN',
    images: [{ url: `${DOMAIN}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

export const revalidate = 86400;

// Category config
const CATEGORY_META: Record<string, { label: string; emoji: string; color: string }> = {
  Status:       { label: 'Status Check',  emoji: '📆', color: 'bg-blue-100 text-blue-700'    },
  eKYC:         { label: 'eKYC',          emoji: '🔐', color: 'bg-green-100 text-green-700'  },
  Payment:      { label: 'Payment',       emoji: '💸', color: 'bg-red-100 text-red-700'      },
  Registration: { label: 'Registration',  emoji: '📝', color: 'bg-indigo-100 text-indigo-700'},
  Correction:   { label: 'Correction',    emoji: '✏️', color: 'bg-purple-100 text-purple-700'},
  List:         { label: 'List',          emoji: '📋', color: 'bg-teal-100 text-teal-700'    },
  Loan:         { label: 'Loan',          emoji: '💰', color: 'bg-amber-100 text-amber-700'  },
  Insurance:    { label: 'Insurance',     emoji: '🌱', color: 'bg-emerald-100 text-emerald-700'},
  Problems:     { label: 'Problems',      emoji: '🔧', color: 'bg-orange-100 text-orange-700'},
  History:      { label: 'History',       emoji: '📊', color: 'bg-cyan-100 text-cyan-700'    },
  Land:         { label: 'Land Seeding',  emoji: '🌾', color: 'bg-yellow-100 text-yellow-700'},
  Rejection:    { label: 'Rejection',     emoji: '❌', color: 'bg-rose-100 text-rose-700'    },
};

// Article emoji map (same as HomeContent)
const ARTICLE_META: Record<string, { emoji: string; category: string; isNew: boolean }> = {
  'kisan-credit-card-online-apply-2026':             { emoji: '💳', category: 'Loan',         isNew: true  },
  'pm-kisan-23vi-kist-2026-status-check':            { emoji: '📆', category: 'Status',       isNew: true  },
  'pm-kisan-ekyc-online-2026':                       { emoji: '🔐', category: 'eKYC',         isNew: true  },
  'pm-kisan-payment-failed-status-2026':             { emoji: '💸', category: 'Payment',      isNew: true  },
  'pm-kisan-rejected-list-2026':                     { emoji: '📋', category: 'Rejection',    isNew: true  },
  'pm-kisan-registration-online-2026':               { emoji: '📝', category: 'Registration', isNew: true  },
  'pm-kisan-name-correction-online-2026':            { emoji: '✏️', category: 'Correction',   isNew: true  },
  'pm-kisan-beneficiary-list-2026':                  { emoji: '📋', category: 'List',         isNew: true  },
  'pm-kisan-installment-history-check-online':       { emoji: '📊', category: 'History',      isNew: false },
  'pm-kisan-land-seeding-status-check':              { emoji: '🌾', category: 'Land',         isNew: false },
  'pm-kisan-beneficiary-list-village-wise-2026':     { emoji: '🏘️', category: 'List',         isNew: false },
  'kisan-rin-kaha-se-le-2026':                       { emoji: '💰', category: 'Loan',         isNew: false },
  'pmfby-crop-insurance-2026':                       { emoji: '🌱', category: 'Insurance',    isNew: false },
  'kisan-tractor-loan-2026':                         { emoji: '🚜', category: 'Loan',         isNew: false },
  'pm-kisan-21vi-installment-status-check':          { emoji: '📅', category: 'Status',       isNew: false },
  'pm-kisan-correction-deactivate-block-guide-2026': { emoji: '🛠️', category: 'Correction',   isNew: false },
  'pm-kisan-problems-solution-guide-2026':           { emoji: '🔧', category: 'Problems',     isNew: false },
  'pm-kisan-fto-generated-ka-matlab-kya-hai':        { emoji: '📄', category: 'Payment',      isNew: true  },
  'pm-kisan-24vi-kist':                              { emoji: '📆', category: 'Status',       isNew: true  },
  'agristack-kya-hai':                               { emoji: '🌐', category: 'Problems',     isNew: true  },
  'pm-kisan-mobile-number-change':                   { emoji: '📱', category: 'Correction',   isNew: true  },
};

export default function ArticlesPage() {
  const newArticles = ARTICLES.filter(a => ARTICLE_META[a.slug]?.isNew);
  const allArticles = ARTICLES;

  return (
    <main className="min-h-screen bg-gray-50">

      {/* ── Header ─────────────────────────────────────────── */}
      <section
        className="py-10 md:py-14"
        style={{ background: 'linear-gradient(135deg,#052e16 0%,#14532d 60%,#166534 100%)' }}
      >
        <div className="container-site text-center">
          <span className="inline-block bg-white/10 border border-white/20 text-green-300 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            📚 Saari Guides
          </span>
          <h1 className="text-2xl md:text-4xl font-black text-white mb-3">
            PM Kisan — Saari Guides 2026
          </h1>
          <p className="text-green-200 text-sm md:text-base max-w-xl mx-auto mb-4">
            {allArticles.length} free guides — status check, eKYC, loan, payment fix, registration — sab Hindi mein
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-green-300 hover:text-white text-sm font-bold transition-colors"
          >
            ← Homepage Par Wapas Jao
          </Link>
        </div>
      </section>

      <div className="container-site py-10">

        {/* ── NEW Articles ───────────────────────────────────── */}
        {newArticles.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xl">🆕</span>
              <h2 className="text-lg font-black text-gray-900">Naye Articles</h2>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                {newArticles.length} new
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {newArticles.map(article => {
                const meta = ARTICLE_META[article.slug];
                const catMeta = CATEGORY_META[meta?.category ?? ''];
                return (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="bg-white border-2 border-green-200 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-lg hover:border-green-400 hover:scale-[1.01] transition-all no-underline group"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-3xl">{meta?.emoji ?? '📄'}</span>
                      <span className="text-[10px] font-black bg-green-100 text-green-700 px-2 py-0.5 rounded-full">NEW</span>
                    </div>
                    <div>
                      <p className="font-black text-gray-900 text-sm leading-tight group-hover:text-green-700 transition-colors mb-1">
                        {article.title}
                      </p>
                      <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-2">{article.desc}</p>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                      {catMeta && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${catMeta.color}`}>
                          {catMeta.emoji} {catMeta.label}
                        </span>
                      )}
                      <span className="text-[12px] font-bold text-green-700 group-hover:translate-x-1 transition-transform inline-block ml-auto">
                        Padho →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* ── All Articles ───────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xl">📋</span>
            <h2 className="text-lg font-black text-gray-900">Saari Guides</h2>
            <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-0.5 rounded-full">
              {allArticles.length} total
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allArticles.map(article => {
              const meta = ARTICLE_META[article.slug];
              const catMeta = CATEGORY_META[meta?.category ?? ''];
              return (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-lg hover:border-green-300 hover:scale-[1.01] transition-all no-underline group"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-3xl">{meta?.emoji ?? '📄'}</span>
                    {meta?.isNew && (
                      <span className="text-[10px] font-black bg-green-100 text-green-700 px-2 py-0.5 rounded-full">NEW</span>
                    )}
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-sm leading-tight group-hover:text-green-700 transition-colors mb-1">
                      {article.title}
                    </p>
                    <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-2">{article.desc}</p>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                    {catMeta && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${catMeta.color}`}>
                        {catMeta.emoji} {catMeta.label}
                      </span>
                    )}
                    <span className="text-[12px] font-bold text-green-700 group-hover:translate-x-1 transition-transform inline-block ml-auto">
                      Padho →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Back to Home ───────────────────────────────────── */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-black px-8 py-3.5 rounded-xl text-sm transition-all hover:scale-105 shadow-lg"
          >
            🏠 Homepage Par Wapas Jao
          </Link>
        </div>

      </div>
    </main>
  );
}
