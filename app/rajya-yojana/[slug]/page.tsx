import { notFound } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import {
  LIVE_RAJYA_YOJANA_ARTICLES,
  getRajyaYojanaArticle,
  type RajyaYojanaArticleMeta,
} from '@/lib/rajya-yojana-data';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/site-config';

/**
 * Register a body component here the same moment you set its `status: 'live'`
 * in lib/rajya-yojana-data.ts. A slug that is 'live' without an entry here —
 * or an entry here while still 'planned' — renders a 200 page with no <h1>,
 * which Ahrefs Site Audit reports as a soft-404. Keep the two in sync.
 *
 * Example:
 *   RajasthanKisanSammanNidhi: dynamic(
 *     () => import('@/components/articles/rajya-yojana/RajasthanKisanSammanNidhi'),
 *     { ssr: true }
 *   ),
 */
const COMPONENTS: Record<string, React.ComponentType<{ article: RajyaYojanaArticleMeta }>> = {};

export async function generateStaticParams() {
  return LIVE_RAJYA_YOJANA_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getRajyaYojanaArticle(slug);

  if (!article || article.status !== 'live') return { title: 'Not Found' };

  const url = `${SITE_URL}/rajya-yojana/${slug}`;
  const ogImage = article.ogImage ? `${SITE_URL}${article.ogImage}` : DEFAULT_OG_IMAGE;

  return {
    title: article.title,
    description: article.description,
    keywords: [article.mainKeyword, ...article.secondaryKeywords],
    alternates: {
      canonical: url,
      languages: {
        'hi-IN': url,
        'x-default': url,
      },
    },
    openGraph: {
      title: article.ogTitle || article.title,
      description: article.description,
      type: 'article',
      url,
      siteName: SITE_NAME,
      locale: 'hi_IN',
      publishedTime: article.published || undefined,
      modifiedTime: article.modified || article.published || undefined,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.ogTitle || article.title,
          type: 'image/webp',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.ogTitle || article.title,
      description: article.description,
      images: [ogImage],
    },
  };
}

export default async function RajyaYojanaArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getRajyaYojanaArticle(slug);

  // 'planned' articles must 404 until their component ships.
  if (!article || article.status !== 'live') notFound();

  const ArticleComponent = COMPONENTS[article.component];
  if (!ArticleComponent) notFound();

  const siblings = LIVE_RAJYA_YOJANA_ARTICLES.filter((a) => a.slug !== slug);
  const idx = LIVE_RAJYA_YOJANA_ARTICLES.findIndex((a) => a.slug === slug);
  const related = Array.from(
    { length: Math.min(6, siblings.length) },
    (_, i) => siblings[(idx + i) % siblings.length]
  );

  return (
    <>
      <ArticleComponent article={article} />

      {article.relatedPaths.length > 0 && (
        <section
          aria-label="Related PM Kisan guides"
          className="container-site max-w-3xl mx-auto px-4 pb-4"
        >
          <div className="mt-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
            <h2 className="font-black text-[var(--color-text)] mb-4 text-base flex items-center gap-2">
              <span>📄</span> PM Kisan Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {article.relatedPaths.map((path) => (
                <Link
                  key={path}
                  href={path}
                  className="flex items-center gap-3 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors text-sm font-medium text-[var(--color-text)] no-underline"
                >
                  <span>{path.split('/').pop()}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section
          aria-label="Related state scheme articles"
          className="container-site max-w-3xl mx-auto px-4 pb-10"
        >
          <div className="mt-4 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
            <h2 className="font-black text-[var(--color-text)] mb-4 text-base flex items-center gap-2">
              <span>🔗</span> Doosre Rajya Ki Yojana
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/rajya-yojana/${a.slug}`}
                  className="flex items-center gap-3 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors text-sm font-medium text-[var(--color-text)] no-underline"
                >
                  <span>{a.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
