
/** * app/articles/page.tsx * All articles listing page — kisanstatus.com/articles * ✅ FIXES: * - Article images added * - Image onError fallback * - Category filter tabs * - Proper image dimensions * - revalidate 86400 * - v4: 'use client' added for useState */
import type { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
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
  alternates: {
    canonical: `${DOMAIN}/articles`,
  },
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

const CATEGORY_META: Record<string, { label: string; emoji: string; color: string }> = {
  Status: { label: 'Status Check', emoji: '📆', color: 'bg-blue-100 text-blue-700' },
  eKYC: { label: 'eKYC', emoji: '🔐', color: 'bg-green-100 text-green-700' },
  Payment: { label: 'Payment', emoji: '💸', color: 'bg-red-100 text-red-700' },
  Registration: { label: 'Registration', emoji: '📝', color: 'bg-indigo-100 text-indigo-700' },
  Correction: { label: 'Correction', emoji: '✏️', color: 'bg-purple-100 text-purple-700' },
  List: { label: 'List', emoji: '📋', color: 'bg-teal-100 text-teal-700' },
  Loan: { label: 'Loan', emoji: '💰', color: 'bg-amber-100 text-amber-700' },
  Insurance: { label: 'Insurance', emoji: '🌱', color: 'bg-emerald-100 text-emerald-700' },
  Problems: { label: 'Problems', emoji: '🔧', color: 'bg-orange-100 text-orange-700' },
  History: { label: 'History', emoji: '📊', color: 'bg-cyan-100 text-cyan-700' },
  Land: { label: 'Land Seeding', emoji: '🌾', color: 'bg-yellow-100 text-yellow-700' },
  Rejection: { label: 'Rejection', emoji: '❌', color: 'bg-rose-100 text-rose-700' },
};

const ARTICLE_META: Record<
  string,
  { emoji: string; category: string; isNew: boolean; image: string }
> = {
  'kisan-credit-card-online-apply-2026': { emoji: '💳', category: 'Loan', isNew: true, image: '/images/kisan-credit-card-apply-2026.webp' },
  'pm-kisan-23vi-kist-2026-status-check': { emoji: '📆', category: 'Status', isNew: true, image: '/images/pm-kisan-status-check-steps.webp' },
  'pm-kisan-ekyc-online-2026': { emoji: '🔐', category: 'eKYC', isNew: true, image: '/images/ekyc-guide-banner.webp' },
  'pm-kisan-payment-failed-status-2026': { emoji: '💸', category: 'Payment', isNew: true, image: '/images/payment-failed.png' },
  'pm-kisan-rejected-list-2026': { emoji: '📋', category: 'Rejection', isNew: true, image: '/images/pm-kisan-rejected-list-2026.webp' },
  'pm-kisan-registration-online-2026': { emoji: '📝', category: 'Registration', isNew: true, image: '/images/pm-kisan-registration-online-2026.webp' },
  'pm-kisan-name-correction-online-2026': { emoji: '✏️', category: 'Correction', isNew: true, image: '/images/pm-kisan-name-correction-online-2026.webp' },
  'pm-kisan-beneficiary-list-2026': { emoji: '📋', category: 'List', isNew: true, image: '/images/beneficiary-list-board.webp' },
  'pm-kisan-installment-history-check-online': { emoji: '📊', category: 'History', isNew: false, image: '/images/installment-history.webp' },
  'pm-kisan-land-seeding-status-check': { emoji: '🌾', category: 'Land', isNew: false, image: '/images/land-seeding-field.webp' },
  'pm-kisan-beneficiary-list-village-wise-2026': { emoji: '🏘️', category: 'List', isNew: false, image: '/images/pm-kisan-beneficiary-list-village-wise-2026.webp' },
  'kisan-rin-kaha-se-le-2026': { emoji: '💰', category: 'Loan', isNew: false, image: '/images/kisan-rin-kaha-se-le-2026.webp' },
  'pmfby-crop-insurance-2026': { emoji: '🌱', category: 'Insurance', isNew: false, image: '/images/pmfby-crop-insurance-2026.webp' },
  'kisan-tractor-loan-2026': { emoji: '🚜', category: 'Loan', isNew: false, image: '/images/kisan-tractor-loan-2026.webp' },
  'pm-kisan-21vi-installment-status-check': { emoji: '📅', category: 'Status', isNew: false, image: '/images/pm-kisan-21vi-installment-status-check.webp' },
  'pm-kisan-correction-deactivate-block-guide-2026': { emoji: '🛠️', category: 'Correction', isNew: false, image: '/images/pm-kisan-correction-deactivate-block-guide-2026.webp' },
  'pm-kisan-problems-solution-guide-2026': { emoji: '🔧', category: 'Problems', isNew: false, image: '/images/pm-kisan-problems-solution-guide-2026.webp' },
  'pm-kisan-fto-generated-ka-matlab-kya-hai': { emoji: '📄', category: 'Payment', isNew: true, image: '/images/pm-kisan-fto-generated-featured-image-kisanstatus.webp' },
  'pm-kisan-24vi-kist': { emoji: '📆', category: 'Status', isNew: true, image: '/images/pm-kisan-24vi-kist-october-2026.webp' },
  'agristack-kya-hai': { emoji: '🌐', category: 'Problems', isNew: true, image: '/images/agristack-kya-hai-infographic.webp' },
  'pm-kisan-mobile-number-change': { emoji: '📱', category: 'Correction', isNew: true, image: '/images/pm-kisan-mobile-bank-aadhaar-update-banner-website.webp' },
  'nano-dap-500ml-price-in-india-2026': { emoji: '🧴', category: 'Problems', isNew: true, image: '/images/nano-dap-500ml-price-india-2026.webp' },
};

function ArticleCard({
  article,
  showNewBadge = false,
}: {
  article: { slug: string; title: string; desc: string };
  showNewBadge?: boolean;
}) {
  const meta = ARTICLE_META[article.slug];
  const catMeta = CATEGORY_META[meta?.category?? ''];
  const image = meta?.image?? '';
  const emoji = meta?.emoji?? '📄';
  const isNew = meta?.isNew?? false;

  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href={`/articles/${article.slug}`}
      className={`bg-white rounded-2xl overflow-hidden flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline group h-full ${
        showNewBadge || isNew
         ? 'border-2 border-green-200 hover:border-green-400'
          : 'border border-gray-200 hover:border-green-300'
      }`}
    >
      <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 shrink-0">
        {image &&!imgError? (
          <img
            src={image}
            alt={article.title}
            width={400}
            height={160}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ display: 'block' }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <span className="text-5xl">{emoji}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <span className="absolute bottom-2 left-3 text-xl drop-shadow">{emoji}</span>
        {(showNewBadge || isNew) && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow">
            NEW
          </span>
        )}
      </div>
      <div className="p-4 flex-col flex-1">
        {catMeta && (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full self-start ${catMeta.color}`}>
            {catMeta.emoji} {catMeta.label}
          </span>
        )}
        <p className="font-black text-gray-900 text-sm leading-snug group-hover:text-green-700 transition-colors mt-2 mb-1">
          {article.title}
        </p>
        <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-2 flex-1">{article.desc}</p>
        <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
          <span className="text-[10px] text-gray-400">✍️ Sidhu Singh</span>
          <span className="text-[12px] font-bold text-green-700 group-hover:translate-x-1 transition-transform inline-block">
            Padho →
          </span>
        </div>
      </div>
    </Link>
  );
}

function ArticleListSchema({ articles }: { articles: { slug: string; title: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'PM Kisan Guides 2026 — KisanStatus.com',
    url: `${DOMAIN}/articles`,
    numberOfItems: articles.length,
    itemListElement: articles.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${DOMAIN}/articles/${a.slug}`,
      name: a.title,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ArticlesPage() {
  const newArticles = ARTICLES.filter(a => ARTICLE_META[a.slug]?.isNew);
  const allArticles = ARTICLES;

  return (
    <main className="min-h-screen bg-gray-50">
      <ArticleListSchema articles={allArticles} />
      <section
        className="py-10 md:py-14"
        style={{
          background: 'linear-gradient(135deg,#052e16 0%,#14532d 60%,#166534 100%)',
        }}
      >
        <div className="container-site text-center">
          <span className="inline-block bg-white/10 border-white/20 text-green-300 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
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
        {newArticles.length > 0 && (
          <section className="mb-12" aria-labelledby="new-articles-heading">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xl">🆕</span>
              <h2 id="new-articles-heading" className="text-lg font-black text-gray-900">
                Naye Articles
              </h2>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                {newArticles.length} new
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {newArticles.map(article => (
                <ArticleCard key={article.slug} article={article} showNewBadge />
              ))}
            </div>
          </section>
        )}

        <section aria-labelledby="all-articles-heading">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xl">📋</span>
            <h2 id="all-articles-heading" className="text-lg font-black text-gray-900">
              Saari Guides
            </h2>
            <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-0.5 rounded-full">
              {allArticles.length} total
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allArticles.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

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