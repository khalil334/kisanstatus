'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import type { ArticleMeta, CategorySlug } from '@/lib/articles-data';
import { CATEGORIES } from '@/lib/articles-data';

const NEW_ARTICLES_LIMIT = 3;

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

function ArticleCard({ article, showNewBadge = false, priority = false }: { article: ArticleMeta; showNewBadge?: boolean; priority?: boolean }) {
  const categoryInfo = CATEGORIES[article.category] as { name: string; nameHi: string; icon: string } | undefined;
  const emoji = categoryInfo?.icon || '📄';
  const categoryName = categoryInfo?.nameHi || categoryInfo?.name || 'Guide';

  return (
    <Link
      href={`/articles/${article.slug}`}
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
        {categoryInfo && (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full self-start bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 uppercase tracking-wide">
            {categoryName}
          </span>
        )}
        <h3 className="font-black text-[var(--color-text)] text-sm leading-snug group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors mt-2 mb-1 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-xs text-[var(--color-text-muted)] leading-relaxed line-clamp-2 flex-1">{article.desc}</p>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-[var(--color-border)]">
          <span className="text-[11px] text-[var(--color-text-muted)] font-medium">✍️ KisanStatus Team</span>
          <span className="text-xs font-bold text-green-700 dark:text-green-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Poora Padhein <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

function ArticlesContent({ articles }: { articles: readonly ArticleMeta[] }) {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  const { latestArticles, remainingArticles, categoryCounts, activeCategoryName } = useMemo(() => {
    const filtered = activeCategory === 'all'
      ? [...articles]
      : articles.filter(a => a.category === activeCategory);

    const sorted = filtered.sort((a, b) =>
      new Date(b.publishedTime || 0).getTime() - new Date(a.publishedTime || 0).getTime()
    );

    const latest = sorted.slice(0, NEW_ARTICLES_LIMIT);
    const latestSlugs = new Set(latest.map(a => a.slug));
    const remaining = sorted.filter(a => !latestSlugs.has(a.slug));

    const counts: Record<string, number> = {};
    articles.forEach(a => { counts[a.category] = (counts[a.category] || 0) + 1; });

    const catInfo = activeCategory !== 'all' ? (CATEGORIES[activeCategory as CategorySlug] as { name: string; nameHi: string }) : null;
    const activeName = catInfo ? catInfo.nameHi : 'Sabhi Verified Guides';

    return { latestArticles: latest, remainingArticles: remaining, categoryCounts: counts, activeCategoryName: activeName };
  }, [articles, activeCategory]);

  return (
    <>
      <div className="container-site mb-8">
        <div className="flex flex-wrap justify-center gap-2" role="navigation" aria-label="Article categories">
          <Link
            href="/articles"
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
              activeCategory === 'all'
                ? 'bg-[var(--color-primary)] text-white shadow-lg scale-105'
                : 'bg-[var(--color-card)] text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] border border-[var(--color-border)]'
            }`}
            aria-current={activeCategory === 'all' ? 'page' : undefined}
          >
            📚 Sabhi Guides ({articles.length})
          </Link>
          {Object.entries(CATEGORIES).map(([slug, cat]) => {
            const count = categoryCounts[slug] || 0;
            if (count === 0) return null;
            const catInfo = cat as { name: string; nameHi: string; icon: string };
            return (
              <Link
                key={slug}
                href={`/articles?category=${slug}`}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  activeCategory === slug
                    ? 'bg-[var(--color-primary)] text-white shadow-lg scale-105'
                    : 'bg-[var(--color-card)] text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] border border-[var(--color-border)]'
                }`}
                aria-current={activeCategory === slug ? 'page' : undefined}
              >
                {catInfo.icon} {catInfo.name} ({count})
              </Link>
            );
          })}
        </div>
      </div>

      {latestArticles.length === 0 && remainingArticles.length === 0 && (
        <div className="container-site text-center py-12">
          <div className="text-6xl mb-4" aria-hidden="true">🔍</div>
          <p className="text-[var(--color-text-muted)] text-lg mb-4">Is category mein abhi koi guide available nahi hai.</p>
          <Link href="/articles" className="text-green-700 dark:text-green-400 font-bold hover:underline inline-flex items-center gap-2">
            ← Sabhi Guides Dekhein
          </Link>
        </div>
      )}

      {latestArticles.length > 0 && activeCategory === 'all' && (
        <section className="mb-12" aria-labelledby="new-heading">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xl" aria-hidden="true">✨</span>
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
            <span className="text-xl" aria-hidden="true">📋</span>
            <h2 id="all-heading" className="text-lg font-black text-[var(--color-text)]">
              {activeCategoryName}
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

export default function ArticlesClient({ articles }: { articles: readonly ArticleMeta[] }) {
  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      <section className="py-10 md:py-14 bg-[var(--color-primary)]" aria-labelledby="hero-heading">
        <div className="container-site text-center px-4">
          <span className="inline-block bg-white/10 border border-white/20 text-green-300 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider backdrop-blur-sm">
            📚 Kisan Resources Hub
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
            🏛️ Official PM Kisan Portal <span aria-hidden="true">↗</span>
          </a>
          <div className="mt-4">
            <Link href="/" className="inline-flex items-center gap-2 text-green-300 hover:text-white text-sm font-bold transition-colors focus:ring-2 focus:ring-green-300 focus:outline-none rounded px-2 py-1">
              <span aria-hidden="true">←</span> Home Page
            </Link>
          </div>
        </div>
      </section>

      <div className="container-site py-10 px-4">
        <Suspense fallback={<ArticlesLoading />}>
          <ArticlesContent articles={articles} />
        </Suspense>
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-black px-8 py-3.5 rounded-xl text-sm transition-all hover:scale-105 shadow-lg focus:ring-2 focus:ring-green-300 focus:outline-none"
          >
            <span aria-hidden="true">🏠</span> Home Page
          </Link>
        </div>
      </div>
    </main>
  );
}