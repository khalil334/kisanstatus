'use client';

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import type { ArticleMeta, CategorySlug } from '@/lib/articles-data';
import { CATEGORIES } from '@/lib/articles-data';

const NEW_ARTICLES_LIMIT = 3;
const SITE_URL = 'https://kisanstatus.com';

type CombinedArticleMeta = {
  slug: string;
  title: string;
  desc?: string;
  description?: string;
  category: string;
  ogImage?: string;
  published?: string;
  publishedTime?: string;
  keywords?: readonly string[];
  /**
   * Explicit URL for clusters that do NOT live under /articles/<slug>
   * (e.g. the rajya-yojana cluster at /rajya-yojana/<slug>). When absent the
   * legacy /articles vs /maandhan inference below is used.
   */
  href?: string;
  /** Badge label for categories that are not in CATEGORIES (no category page). */
  categoryLabel?: string;
};

/* ─── SVG Icons (Replace Emojis) ─── */
function IconBookOpen({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function IconSparkles({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

function IconClipboard({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  );
}

function IconBuilding({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
  );
}

function IconHome({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}

function IconArrowLeft({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
  );
}

function IconArrowRight({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function IconSearch({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}

function IconExternalLink({ className = 'w-3 h-3' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}

function IconNoResults({ className = 'w-16 h-16' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9l6 6m0-6l-6 6" />
    </svg>
  );
}

/* ─── Category Icons Map ─── */
const CATEGORY_ICONS: Record<string, React.FC<{ className?: string }>> = {
  'status-check': IconClipboard,
  'loan': ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9.75A2.25 2.25 0 0018.75 7.5H5.25A2.25 2.25 0 003 9.75V12m18 0h-6" />
    </svg>
  ),
  'farming': ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
  'mandi': ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
    </svg>
  ),
  'pashupalan': ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21c-3.314 0-6-2.239-6-5 0-1.657.895-3.132 2.29-4.062C7.49 11.16 7 10.135 7 9V5.5L9.5 7h5L17 5.5V9c0 1.135-.49 2.16-1.29 2.938C17.105 12.868 18 14.343 18 16c0 2.761-2.686 5-6 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 16h.01M14 16h.01" />
    </svg>
  ),
  'agri-business': ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21V9l6 3V9l6 3V8.25A1.25 1.25 0 0116.25 7h1.5A1.25 1.25 0 0119 8.25V21M3 21h18M7 21v-3.5h3V21" />
    </svg>
  ),
};

/* ─── Article Image Component ─── */
function ArticleImage({ image, emoji, title, priority = false }: { image: string; emoji: string; title: string; priority?: boolean }) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-green-50 dark:from-green-900/30 to-emerald-100 dark:to-emerald-900/20 shrink-0">
      {!error && image ? (
        <>
          {!loaded && <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse z-10" />}
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
            loading={priority ? 'eager' : 'lazy'}
            priority={priority}
            className={`object-cover group-hover:scale-105 transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
          />
        </>
      ) : (
        <div className="h-full w-full flex items-center justify-center" role="img" aria-label={title}>
          <span className="text-5xl select-none" aria-hidden="true">{emoji}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 pointer-events-none" aria-hidden="true" />
      <span className="absolute bottom-2 left-3 text-xl drop-shadow-md z-20 select-none" aria-hidden="true">{emoji}</span>
    </div>
  );
}

/* ─── Article Card ─── */
function ArticleCard({ article, showNewBadge = false, priority = false }: { article: CombinedArticleMeta; showNewBadge?: boolean; priority?: boolean }) {
  const categoryInfo = CATEGORIES[article.category as keyof typeof CATEGORIES] as { name: string; nameHi: string; icon: string } | undefined;
  const emoji = categoryInfo?.icon || '📄';
  const categoryName = categoryInfo?.nameHi || categoryInfo?.name || article.categoryLabel || 'Guide';
  const showCategoryBadge = Boolean(categoryInfo || article.categoryLabel);

  const isMaandhan = article.category === 'pension-scheme' || article.slug.includes('maandhan');
  const articleHref =
    article.href ?? (isMaandhan ? `/maandhan/${article.slug}` : `/articles/${article.slug}`);
  const displayDesc = article.desc || article.description || '';

  return (
    <Link
      href={articleHref}
      className={`bg-[var(--color-card)] rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline group h-full focus:ring-2 focus:ring-green-500 focus:outline-none ${
        showNewBadge
          ? 'border-2 border-green-200 dark:border-green-700 hover:border-green-400 dark:hover:border-green-600'
          : 'border border-[var(--color-border)] hover:border-green-300 dark:hover:border-green-700'
      }`}
      aria-label={`Padhein: ${article.title}`}
    >
      <div className="relative">
        <ArticleImage image={article.ogImage || ''} emoji={emoji} title={article.title} priority={priority} />
        {showNewBadge && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-md z-20">
            NEW
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        {showCategoryBadge && (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full self-start bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 uppercase tracking-wide">
            {categoryName}
          </span>
        )}
        <h3 className="font-black text-[var(--color-text)] text-sm leading-snug group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors mt-2 mb-1 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-xs text-[var(--color-text-muted)] leading-relaxed line-clamp-2 flex-1">{displayDesc}</p>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-[var(--color-border)]">
          <span className="text-[11px] text-[var(--color-text-muted)] font-medium">KisanStatus Team</span>
          <span className="text-xs font-bold text-green-700 dark:text-green-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Poora Padhein <IconArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ─── Articles Content ─── */
function ArticlesContent({ articles }: { articles: readonly CombinedArticleMeta[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCategory = searchParams.get('category') || 'all';
  const searchQuery = searchParams.get('search') || '';
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const { latestArticles, remainingArticles, categoryCounts, activeCategoryName } = useMemo(() => {
    let filtered = activeCategory === 'all'
      ? [...articles]
      : articles.filter(a => a.category === activeCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(a =>
        (a.title || '').toLowerCase().includes(query) ||
        (a.desc || a.description || '').toLowerCase().includes(query) ||
        (a.keywords || []).some((k: string) => k.toLowerCase().includes(query))
      );
    }

    const sorted = filtered.sort((a, b) =>
      new Date(b.publishedTime || b.published || 0).getTime() - new Date(a.publishedTime || a.published || 0).getTime()
    );

    const latest = sorted.slice(0, NEW_ARTICLES_LIMIT);
    const latestSlugs = new Set(latest.map(a => a.slug));
    const remaining = sorted.filter(a => !latestSlugs.has(a.slug));

    const counts: Record<string, number> = {};
    articles.forEach(a => { counts[a.category] = (counts[a.category] || 0) + 1; });

    const catInfo = activeCategory !== 'all' ? (CATEGORIES[activeCategory as CategorySlug] as { name: string; nameHi: string } | undefined) : null;
    const activeName = catInfo
      ? catInfo.nameHi
      : activeCategory === 'rajya-yojana'
        ? 'Rajya (State) Kisan Yojana Guides'
        : 'Sabhi Verified Guides';

    return { latestArticles: latest, remainingArticles: remaining, categoryCounts: counts, activeCategoryName: activeName };
  }, [articles, activeCategory, searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (localSearch.trim()) {
      params.set('search', localSearch.trim());
    } else {
      params.delete('search');
    }
    router.push(`/articles?${params.toString()}`);
  };

  return (
    <>
      <div className="container-site mb-6">
        <form onSubmit={handleSearch} className="max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Search articles: PM Kisan, KCC Loan, Tractor..."
              className="w-full px-4 py-3 pl-11 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] placeholder-[var(--color-text-muted)] text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              aria-label="Search articles"
            />
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
              <IconSearch className="w-4 h-4" />
            </span>
            {localSearch && (
              <button
                type="button"
                onClick={() => { setLocalSearch(''); router.push('/articles'); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                aria-label="Clear search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="container-site mb-8">
        <div className="flex flex-wrap justify-center gap-2" role="navigation" aria-label="Article categories">
          <Link
            href="/articles"
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
              activeCategory === 'all' && !searchQuery
                ? 'bg-[var(--color-primary)] text-white shadow-lg scale-105'
                : 'bg-[var(--color-card)] text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] border border-[var(--color-border)]'
            }`}
            aria-current={activeCategory === 'all' && !searchQuery ? 'page' : undefined}
          >
            <IconBookOpen className="w-4 h-4" />
            Sabhi Guides ({articles.length})
          </Link>
          {Object.entries(CATEGORIES).map(([slug, cat]) => {
            const count = categoryCounts[slug] || 0;
            if (count === 0) return null;
            const catInfo = cat as { name: string; nameHi: string; icon: string };
            const CatIcon = CATEGORY_ICONS[slug] || IconClipboard;
            return (
              <Link
                key={slug}
                href={`/articles?category=${slug}`}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  activeCategory === slug
                    ? 'bg-[var(--color-primary)] text-white shadow-lg scale-105'
                    : 'bg-[var(--color-card)] text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] border border-[var(--color-border)]'
                }`}
                aria-current={activeCategory === slug ? 'page' : undefined}
              >
                <CatIcon className="w-4 h-4" />
                {catInfo.name} ({count})
              </Link>
            );
          })}
          {/* rajya-yojana has no entry in CATEGORIES (no /articles/category page),
              so its chip is rendered explicitly. */}
          {(categoryCounts['rajya-yojana'] || 0) > 0 && (
            <Link
              href="/articles?category=rajya-yojana"
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                activeCategory === 'rajya-yojana'
                  ? 'bg-[var(--color-primary)] text-white shadow-lg scale-105'
                  : 'bg-[var(--color-card)] text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] border border-[var(--color-border)]'
              }`}
              aria-current={activeCategory === 'rajya-yojana' ? 'page' : undefined}
            >
              <IconBuilding className="w-4 h-4" />
              Rajya Yojana ({categoryCounts['rajya-yojana']})
            </Link>
          )}
        </div>
      </div>

      {searchQuery && (
        <div className="container-site mb-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[var(--color-text-muted)]">
              Search results for: <span className="font-bold text-[var(--color-text)]">"{searchQuery}"</span>
            </p>
            <button
              onClick={() => router.push('/articles')}
              className="text-sm text-green-700 dark:text-green-400 font-bold hover:underline inline-flex items-center gap-1"
            >
              Clear search
            </button>
          </div>
        </div>
      )}

      {latestArticles.length === 0 && remainingArticles.length === 0 && (
        <div className="container-site text-center py-12">
          <div className="text-[var(--color-text-muted)] mb-4" aria-hidden="true">
            <IconNoResults className="w-16 h-16 mx-auto" />
          </div>
          <p className="text-[var(--color-text-muted)] text-lg mb-4">
            {searchQuery ? `No results found for "${searchQuery}"` : 'Is category mein abhi koi guide available nahi hai.'}
          </p>
          <Link href="/articles" className="text-green-700 dark:text-green-400 font-bold hover:underline inline-flex items-center gap-2">
            <IconArrowLeft className="w-4 h-4" /> Sabhi Guides Dekhein
          </Link>
        </div>
      )}

      {latestArticles.length > 0 && activeCategory === 'all' && !searchQuery && (
        <section className="mb-12" aria-labelledby="new-heading">
          <div className="flex items-center gap-3 mb-5">
            <IconSparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
            <h2 id="new-heading" className="text-lg font-black text-[var(--color-text)]">Naye aur Latest Updates</h2>
            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold px-2 py-0.5 rounded-full">
              {latestArticles.length} latest
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestArticles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} showNewBadge priority={index === 0} />
            ))}
          </div>
        </section>
      )}

      {remainingArticles.length > 0 && (
        <section aria-labelledby="all-heading">
          <div className="flex items-center gap-3 mb-5">
            <IconClipboard className="w-5 h-5 text-green-600 dark:text-green-400" />
            <h2 id="all-heading" className="text-lg font-black text-[var(--color-text)]">
              {searchQuery ? 'Search Results' : activeCategoryName}
            </h2>
            <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-bold px-2 py-0.5 rounded-full">
              {remainingArticles.length} guides
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
  );
}

/* ─── Loading Skeleton ─── */
function ArticlesLoading() {
  return (
    <div className="container-site py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-[var(--color-card)] rounded-2xl overflow-hidden border border-[var(--color-border)] animate-pulse">
            <div className="h-40 bg-gray-200 dark:bg-gray-700" />
            <div className="p-4 space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function ArticlesClient({ articles, showHero = true }: { articles: readonly CombinedArticleMeta[]; showHero?: boolean }) {
  // ItemList structured data — tells Google this page is a collection of articles,
  // improves eligibility for rich results (sitelinks, carousel) in search.
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'PM Kisan aur Krishi Yojanaon ki Verified Guides',
    description: `${articles.length}+ free aur verified guides on PM Kisan status, loans, crop insurance, aur mandi bhav.`,
    numberOfItems: articles.length,
    itemListElement: articles.slice(0, 50).map((article, index) => {
      const isMaandhan = article.category === 'pension-scheme' || article.slug.includes('maandhan');
      const path =
        article.href ?? (isMaandhan ? `/maandhan/${article.slug}` : `/articles/${article.slug}`);
      return {
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}${path}`,
        name: article.title,
      };
    }),
  };

  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      <Script id="articles-itemlist-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(itemListSchema)}
      </Script>

      {showHero && (
      <section className="py-10 md:py-14 bg-[var(--color-primary)]" aria-labelledby="hero-heading">
        <div className="container-site text-center px-4">
          <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-green-300 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider backdrop-blur-sm">
            <IconBookOpen className="w-4 h-4" />
            Kisan Resources Hub
          </span>
          <h1 id="hero-heading" className="text-2xl md:text-4xl font-black text-white mb-3 leading-tight">
            PM Kisan aur Krishi Yojanaon ki Verified Guides (2026)
          </h1>
          <p className="text-green-200 text-sm md:text-base max-w-xl mx-auto mb-5 leading-relaxed">
            {articles.length}+ free aur verified guides — jaise status check, payment fix, crop insurance, soil health, aur mandi bhav. Sabhi jankari bilkul saral Hinglish mein, step-by-step.
          </p>
          <a
            href="https://pmkisan.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors backdrop-blur-sm focus:ring-2 focus:ring-white focus:outline-none"
          >
            <IconBuilding className="w-4 h-4" />
            Official PM Kisan Portal <IconExternalLink className="w-3 h-3" />
          </a>
          <div className="mt-4">
            <Link href="/" className="inline-flex items-center gap-2 text-green-300 hover:text-white text-sm font-bold transition-colors focus:ring-2 focus:ring-green-300 focus:outline-none rounded px-2 py-1">
              <IconArrowLeft className="w-4 h-4" /> Home Page
            </Link>
          </div>
        </div>
      </section>
      )}

      <div className="container-site py-10 px-4">
        <Suspense fallback={<ArticlesLoading />}>
          <ArticlesContent articles={articles} />
        </Suspense>
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-black px-8 py-3.5 rounded-xl text-sm transition-all hover:scale-105 shadow-lg focus:ring-2 focus:ring-green-300 focus:outline-none"
          >
            <IconHome className="w-5 h-5" /> Home Page
          </Link>
        </div>
      </div>
    </main>
  );
}
