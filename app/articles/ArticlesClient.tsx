'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import type { ArticleMeta } from '@/lib/articles-data';

const CATEGORY_META: Record<string, { label: string; emoji: string; color: string }> = {
  Status:       { label: 'Status Check', emoji: '📊', color: 'bg-blue-100 text-blue-700' },
  eKYC:         { label: 'eKYC',         emoji: '🔐', color: 'bg-green-100 text-green-700' },
  Payment:      { label: 'Payment',      emoji: '💸', color: 'bg-red-100 text-red-700' },
  Registration: { label: 'Registration', emoji: '📝', color: 'bg-indigo-100 text-indigo-700' },
  Correction:   { label: 'Correction',   emoji: '✏️', color: 'bg-purple-100 text-purple-700' },
  List:         { label: 'List',         emoji: '📋', color: 'bg-teal-100 text-teal-700' },
  Loan:         { label: 'Loan',         emoji: '💰', color: 'bg-amber-100 text-amber-700' },
  Insurance:    { label: 'Insurance',    emoji: '🌱', color: 'bg-emerald-100 text-emerald-700' },
  Problems:     { label: 'Problems',     emoji: '🔧', color: 'bg-orange-100 text-orange-700' },
  History:      { label: 'History',      emoji: '📈', color: 'bg-cyan-100 text-cyan-700' },
  Land:         { label: 'Land Seeding', emoji: '🌾', color: 'bg-yellow-100 text-yellow-700' },
  Rejection:    { label: 'Rejection',    emoji: '❌', color: 'bg-rose-100 text-rose-700' },
  Digital:      { label: 'Digital',      emoji: '🌐', color: 'bg-teal-100 text-teal-700' },
  Farming:      { label: 'Farming',      emoji: '🌱', color: 'bg-green-100 text-green-700' },
  Guide:        { label: 'Complete Guide', emoji: '📖', color: 'bg-rose-100 text-rose-700' },
};

const ARTICLE_META: Record<string, { emoji: string; category: string; isNew: boolean; image: string }> = {
  'kisan-credit-card-online-apply-2026':             { emoji: '💳', category: 'Loan',         isNew: true,  image: '/images/kisan-credit-card-apply-online-hero.webp' },
  'pm-kisan-23vi-kist-2026-status-check':            { emoji: '📆', category: 'Status',       isNew: true,  image: '/images/pm-kisan-status-check-steps.webp' },
  'pm-kisan-ekyc-online-2026':                       { emoji: '🔐', category: 'eKYC',         isNew: true,  image: '/images/ekyc-guide-banner.webp' },
  'pm-kisan-payment-failed-status-2026':             { emoji: '💸', category: 'Payment',      isNew: true,  image: '/images/payment-success.webp' },
  'pm-kisan-rejected-list-2026':                     { emoji: '❌', category: 'Rejection',    isNew: true,  image: '/images/pm-kisan-rejected-list-2026.webp' },
  'pm-kisan-registration-online-2026':               { emoji: '📝', category: 'Registration', isNew: true,  image: '/images/pm-kisan-registration-online-2026.webp' },
  'pm-kisan-name-correction-online-2026':            { emoji: '✏️', category: 'Correction',   isNew: true,  image: '/images/name-correction.webp' },
  'pm-kisan-beneficiary-list-2026':                  { emoji: '📋', category: 'List',         isNew: true,  image: '/images/beneficiary-list-board.webp' },
  'pm-kisan-installment-history-check-online':       { emoji: '📊', category: 'History',      isNew: false, image: '/images/installment-history.webp' },
  'pm-kisan-land-seeding-status-check':              { emoji: '🌾', category: 'Land',         isNew: false, image: '/images/land-seeding-field.webp' },
  'pm-kisan-beneficiary-list-village-wise-2026':     { emoji: '🏘️', category: 'List',         isNew: false, image: '/images/pm-kisan-beneficiary-list-village-wise-2026.webp' },
  'kisan-rin-kaha-se-le-2026':                       { emoji: '💰', category: 'Loan',         isNew: false, image: '/images/kisan-loan-kcc.webp' },
  'pmfby-crop-insurance-2026':                       { emoji: '🌱', category: 'Insurance',    isNew: false, image: '/images/pmfby-crop-insurance-2026.webp' },
  'kisan-tractor-loan-2026':                         { emoji: '🚜', category: 'Loan',         isNew: false, image: '/images/kisan-tractor-loan-2026.webp' },
  'pm-kisan-21vi-installment-status-check':          { emoji: '📅', category: 'Status',       isNew: false, image: '/images/pm-kisan-21vi-installment-status-check.webp' },
  'pm-kisan-correction-deactivate-block-guide-2026': { emoji: '✏️', category: 'Correction',   isNew: false, image: '/images/correction-guide.webp' },
  'pm-kisan-problems-solution-guide-2026':           { emoji: '🔧', category: 'Problems',     isNew: false, image: '/images/pm-kisan-beneficiary-status-kisanstatus.webp' },
  'pm-kisan-fto-generated-ka-matlab-kya-hai':        { emoji: '📄', category: 'Payment',      isNew: true,  image: '/images/pm-kisan-fto-generated-featured-image-kisanstatus.webp' },
  'pm-kisan-24vi-kist':                              { emoji: '📆', category: 'Status',       isNew: true,  image: '/images/pm-kisan-24vi-kist-october-2026.webp' },
  'agristack-kya-hai':                               { emoji: '🌐', category: 'Digital',      isNew: true,  image: '/images/agristack-kya-hai-infographic.webp' },
  'pm-kisan-mobile-number-change':                   { emoji: '📱', category: 'Correction',   isNew: true,  image: '/images/pm-kisan-mobile-bank-aadhaar-update-banner-website.webp' },
  'nano-dap-500ml-price-in-india-2026':              { emoji: '🌱', category: 'Farming',      isNew: true,  image: '/images/nano-dap-500ml-price-india-2026.webp' },
  'pm-kisan-complete-guide':                         { emoji: '📖', category: 'Guide',        isNew: true,  image: '/images/pm-kisan-status-check-hero.webp' },
  'soil-health-card-complete-guide-2026':            { emoji: '🌱', category: 'Farming',      isNew: true,  image: '/images/soil-health-card-complete-guide-2026.webp' },
  'pm-kisan-self-registered-status-check':           { emoji: '📋', category: 'Status',       isNew: true,  image: '/images/pm-kisan-self-registered-status/pm-kisan-portal-homepage.webp' },
  'pm-kisan-status-check-online-2026-complete-guide': { emoji: '🔍', category: 'Status',      isNew: true,  image: '/images/pm-kisan-status-check-tool-interface.webp' },
};

const HOMEPAGE_NEW_COUNT = 3;

function ArticleImage({ image, emoji, title }: { image: string; emoji: string; title: string }) {
  const [error, setError] = useState(false);

  return (
    <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 shrink-0">
      {!error && image ? (
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={85}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => setError(true)}
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <span className="text-5xl">{emoji}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
      <span className="absolute bottom-2 left-3 text-xl drop-shadow z-20">{emoji}</span>
    </div>
  );
}

function ArticleCard({ article, showNewBadge = false }: { article: ArticleMeta; showNewBadge?: boolean }) {
  const meta    = ARTICLE_META[article.slug];
  const catMeta = CATEGORY_META[meta?.category ?? ''];
  const image   = meta?.image ?? '';
  const emoji   = meta?.emoji ?? '📄';
  const isNew   = meta?.isNew ?? false;

  return (
    <Link
      href={`/articles/${article.slug}`}
      className={`bg-white rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline group h-full ${
        showNewBadge || isNew
          ? 'border-2 border-green-200 hover:border-green-400'
          : 'border border-gray-200 hover:border-green-300'
      }`}
    >
      <div className="relative">
        <ArticleImage image={image} emoji={emoji} title={article.title} />
        {(showNewBadge || isNew) && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow z-20">
            NEW
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        {catMeta && (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full self-start ${catMeta.color}`}>
            {catMeta.emoji} {catMeta.label}
          </span>
        )}
        <p className="font-black text-gray-900 text-sm leading-snug group-hover:text-green-700 transition-colors mt-2 mb-1">
          {article.title}
        </p>
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">{article.desc}</p>
        <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
          <span className="text-[11px] text-gray-400">✍️ KisanStatus Team</span>
          <span className="text-xs font-bold text-green-700 group-hover:translate-x-1 transition-transform inline-block">
            Padho →
          </span>
        </div>
      </div>
    </Link>
  );
}

function ArticlesContent({ articles }: { articles: ArticleMeta[] }) {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  const filteredArticles = activeCategory === 'all'
    ? articles
    : articles.filter(a => ARTICLE_META[a.slug]?.category === activeCategory);

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    const dateA = new Date(a.publishedTime || 0).getTime();
    const dateB = new Date(b.publishedTime || 0).getTime();
    return dateB - dateA;
  });

  const latestNewArticles = sortedArticles.slice(0, HOMEPAGE_NEW_COUNT);
  const latestNewSlugs = new Set(latestNewArticles.map(a => a.slug));
  const remainingArticles = sortedArticles.filter(a => !latestNewSlugs.has(a.slug));

  return (
    <>
      <div className="container-site mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          <Link
            href="/articles"
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-[#14532d] text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            📚 Saare ({articles.length})
          </Link>

          {Object.entries(CATEGORY_META).map(([slug, cat]) => {
            const count = articles.filter(a => ARTICLE_META[a.slug]?.category === slug).length;
            if (count === 0) return null;

            return (
              <Link
                key={slug}
                href={`/articles?category=${slug}`}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === slug
                    ? 'bg-[#14532d] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.emoji} {cat.label} ({count})
              </Link>
            );
          })}
        </div>
      </div>

      {filteredArticles.length === 0 ? (
        <div className="container-site text-center py-12">
          <p className="text-gray-500 text-lg">Is category mein koi article nahi mila.</p>
          <Link href="/articles" className="text-green-700 font-bold hover:underline mt-4 inline-block">
            ← Saare Articles Dekho
          </Link>
        </div>
      ) : (
        <>
          {latestNewArticles.length > 0 && (
            <section className="mb-12" aria-labelledby="new-articles-heading">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">✨</span>
                <h2 id="new-articles-heading" className="text-lg font-black text-gray-900">Naye Articles</h2>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                  {latestNewArticles.length} latest
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {latestNewArticles.map(article => (
                  <ArticleCard key={article.slug} article={article} showNewBadge />
                ))}
              </div>
            </section>
          )}

          {remainingArticles.length > 0 && (
            <section aria-labelledby="all-articles-heading">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">📋</span>
                <h2 id="all-articles-heading" className="text-lg font-black text-gray-900">
                  {activeCategory === 'all' ? 'Saari Guides' : `${CATEGORY_META[activeCategory]?.label || ''} Articles`}
                </h2>
                <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-0.5 rounded-full">
                  {remainingArticles.length} articles
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {remainingArticles.map(article => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}

export default function ArticlesClient({ articles }: { articles: ArticleMeta[] }) {
  return (
    <main className="min-h-screen bg-gray-50">
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
          <p className="text-green-200 text-sm md:text-base max-w-xl mx-auto mb-5">
            {articles.length} free guides — status check, eKYC, loan, payment fix, registration, Soil Health Card — sab Hindi mein
          </p>
          
          {/* ✅ CHHOTA PM KISAN OFFICIAL BUTTON - Compact pill style */}
          <a
            href="https://pmkisan.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors backdrop-blur-sm"
          >
            🏛️ pmkisan.gov.in
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <div className="mt-4">
            <Link href="/" className="inline-flex items-center gap-2 text-green-300 hover:text-white text-sm font-bold transition-colors">
              ← Homepage Par Wapas Jao
            </Link>
          </div>
        </div>
      </section>

      <div className="container-site py-10">
        <Suspense fallback={<div className="text-center py-8 text-gray-500">Loading articles...</div>}>
          <ArticlesContent articles={articles} />
        </Suspense>

        <div className="text-center mt-12">
          <Link href="/" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-black px-8 py-3.5 rounded-xl text-sm transition-all hover:scale-105 shadow-lg">
            🏠 Homepage Par Wapas Jao
          </Link>
        </div>
      </div>
    </main>
  );
}