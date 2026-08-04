import { notFound } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import {
  LIVE_RAJYA_YOJANA_ARTICLES,
  getRajyaYojanaArticle,
  type RajyaYojanaArticleMeta,
} from '@/lib/rajya-yojana-data';
import { getArticleBySlug } from '@/lib/articles-data';
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  AUTHOR_NAME,
  AUTHOR_URL,
  AUTHOR_BIO,
  LOGO_URL,
  LOGO_WIDTH,
  LOGO_HEIGHT,
} from '@/lib/site-config';
import RajasthanKisanSammanNidhi9000 from '@/components/articles/rajya-yojana/RajasthanKisanSammanNidhi9000';
import AnnadataSukhibhavaStatusCheck from '@/components/articles/rajya-yojana/AnnadataSukhibhavaStatusCheck';
import MpKisanKalyanYojanaKist from '@/components/articles/rajya-yojana/MpKisanKalyanYojanaKist';
import NamoShetkariYojanaStatus from '@/components/articles/rajya-yojana/NamoShetkariYojanaStatus';
import RythuBharosaStatusCheck from '@/components/articles/rajya-yojana/RythuBharosaStatusCheck';
import KrishakBandhuStatusCheck from '@/components/articles/rajya-yojana/KrishakBandhuStatusCheck';
import OdishaCmKisanStatusCheck from '@/components/articles/rajya-yojana/OdishaCmKisanStatusCheck';
import PmKisanPatiPatniRule from '@/components/articles/rajya-yojana/PmKisanPatiPatniRule';
import StateKisanYojanaHub from '@/components/articles/rajya-yojana/StateKisanYojanaHub';

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
const COMPONENTS: Record<string, React.ComponentType<{ article: RajyaYojanaArticleMeta }>> = {
  RajasthanKisanSammanNidhi9000,
  AnnadataSukhibhavaStatusCheck,
  MpKisanKalyanYojanaKist,
  NamoShetkariYojanaStatus,
  RythuBharosaStatusCheck,
  KrishakBandhuStatusCheck,
  OdishaCmKisanStatusCheck,
  PmKisanPatiPatniRule,
  StateKisanYojanaHub,
};

/**
 * Same 3-node graph the /articles/[slug] route emits (Article + BreadcrumbList +
 * WebPage), mapped onto the rajya-yojana field names (`published`/`modified`/
 * `ogImage`, `mainKeyword`/`secondaryKeywords`, `state`). Every value comes from
 * lib/rajya-yojana-data.ts — nothing is invented here.
 */
function buildSchemas(
  article: RajyaYojanaArticleMeta,
  url: string,
  ogImage: string,
  related: readonly RajyaYojanaArticleMeta[]
) {
  const headline = article.ogTitle || article.title;
  const datePublished = article.published || undefined;
  const dateModified = article.modified || article.published || undefined;

  const publisher = {
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}#logo`,
      url: LOGO_URL,
      width: LOGO_WIDTH,
      height: LOGO_HEIGHT,
    },
  };

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${url}#article`,
      headline,
      description: article.description,
      image: {
        '@type': 'ImageObject',
        url: ogImage,
        width: 1200,
        height: 630,
        caption: headline,
      },
      datePublished,
      dateModified,
      author: {
        '@type': 'Organization',
        '@id': `${SITE_URL}#founder`,
        name: AUTHOR_NAME,
        url: AUTHOR_URL,
        description: AUTHOR_BIO,
      },
      creator: {
        '@type': 'Organization',
        name: AUTHOR_NAME,
        url: AUTHOR_URL,
      },
      publisher,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
      inLanguage: 'hi-IN',
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${SITE_URL}#website`,
        name: SITE_NAME,
        url: SITE_URL,
      },
      about:
        article.state && article.state !== 'ALL'
          ? [
              { '@type': 'Thing', name: article.mainKeyword },
              { '@type': 'AdministrativeArea', name: article.state },
            ]
          : [{ '@type': 'Thing', name: article.mainKeyword }],
      mentions: related.slice(0, 3).map((r) => ({
        '@type': 'Article',
        name: r.title,
        url: `${SITE_URL}/rajya-yojana/${r.slug}`,
      })),
      keywords: [article.mainKeyword, ...article.secondaryKeywords].join(', '),
      articleSection: 'Rajya Yojana',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['article h1', 'article h2', 'article p'],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Rajya Yojana',
          item: `${SITE_URL}/rajya-yojana`,
        },
        { '@type': 'ListItem', position: 3, name: headline, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: headline,
      description: article.description,
      inLanguage: 'hi-IN',
      isPartOf: { '@id': `${SITE_URL}#website` },
      about: { '@id': `${SITE_URL}#organization` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: ogImage,
      },
      breadcrumb: { '@id': `${url}#breadcrumb` },
      mainEntity: { '@id': `${url}#article` },
    },
  ];
}

export async function generateStaticParams() {
  return LIVE_RAJYA_YOJANA_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getRajyaYojanaArticle(slug);

  // Unknown or not-yet-live slug: the body calls notFound(), but this metadata overrides
  // app/not-found.tsx's noindex, leaving the soft-404 shell indexable.
  if (!article || article.status !== 'live') {
    return { title: 'Not Found', robots: { index: false, follow: true } };
  }

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

  const url = `${SITE_URL}/rajya-yojana/${slug}`;
  const ogImage = article.ogImage ? `${SITE_URL}${article.ogImage}` : DEFAULT_OG_IMAGE;
  const schemas = buildSchemas(article, url, ogImage, related);

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

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
              {article.relatedPaths.map((path) => {
                // Anchor text must be the real article title, not the raw slug
                // (`/articles/PmKisanMasterGuide2026` -> "PM Kisan Master Guide 2026 ...").
                const slug = path.split('/').pop() ?? '';
                const label = getArticleBySlug(slug)?.title ?? slug;
                return (
                  <Link
                    key={path}
                    href={path}
                    className="flex items-center gap-3 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors text-sm font-medium text-[var(--color-text)] no-underline"
                  >
                    <span>{label}</span>
                  </Link>
                );
              })}
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
