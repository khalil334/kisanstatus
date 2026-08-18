import { notFound } from 'next/navigation';
import React from 'react';
import {
  LIVE_YOJANA_2026_ARTICLES,
  getYojana2026Article,
  type Yojana2026ArticleMeta,
} from '@/lib/yojana-2026-data';
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  AUTHOR_NAME,
  AUTHOR_URL,
  AUTHOR_LINKEDIN,
  LOGO_URL,
  LOGO_WIDTH,
  LOGO_HEIGHT,
} from '@/lib/site-config';
import { hinglishAlternates } from '@/lib/hindi-hreflang';
import { getAuthorBio } from '@/lib/author-bios';
import { CrossSectionLinks } from '@/components/CrossSectionLinks';
import FasalBimaClaimStatusCheck from '@/components/articles/yojana-2026/FasalBimaClaimStatusCheck';
import KisanKarjMafiAllStates from '@/components/articles/yojana-2026/KisanKarjMafiAllStates';
import PmKisanKhadYojanaSach from '@/components/articles/yojana-2026/PmKisanKhadYojanaSach';
import PmKisanHelpline155261 from '@/components/articles/yojana-2026/PmKisanHelpline155261';

const COMPONENTS: Record<string, React.ComponentType<{ article: Yojana2026ArticleMeta }>> = {
  FasalBimaClaimStatusCheck,
  KisanKarjMafiAllStates,
  PmKisanKhadYojanaSach,
  PmKisanHelpline155261,
};

function buildSchemas(
  article: Yojana2026ArticleMeta,
  url: string,
  ogImage: string,
  related: readonly Yojana2026ArticleMeta[]
) {
  const headline = article.ogTitle || article.title;

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
      datePublished: article.published || undefined,
      dateModified: article.modified || article.published || undefined,
      author: {
        '@type': 'Person',
        '@id': `${SITE_URL}#founder`,
        name: AUTHOR_NAME,
        url: AUTHOR_URL,
        description: getAuthorBio(article.slug),
        sameAs: [AUTHOR_LINKEDIN],
      },
      creator: {
        '@type': 'Person',
        '@id': `${SITE_URL}#founder`,
        name: AUTHOR_NAME,
        url: AUTHOR_URL,
      },
      publisher,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
      inLanguage: 'hi-IN',
      about: [{ '@type': 'Thing', name: article.mainKeyword }],
      mentions: related.slice(0, 3).map((r) => ({
        '@type': 'Article',
        name: r.title,
        url: `${SITE_URL}/yojana/${r.slug}`,
      })),
      keywords: [article.mainKeyword, ...article.secondaryKeywords].join(', '),
      articleSection: 'Yojana',
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
        { '@type': 'ListItem', position: 2, name: 'Yojana', item: `${SITE_URL}/yojana` },
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
  return LIVE_YOJANA_2026_ARTICLES.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getYojana2026Article(slug);

  if (!article) {
    notFound();
  }

  const url = `${SITE_URL}/yojana/${slug}`;
  const ogImage = article.ogImage ? `${SITE_URL}${article.ogImage}` : DEFAULT_OG_IMAGE;

  return {
    title: article.title,
    description: article.description,
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    creator: AUTHOR_NAME,
    alternates: {
      canonical: url,
      languages: hinglishAlternates(`/yojana/${slug}`, {
        'hi-IN': url,
        'x-default': url,
      }),
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

export default async function Yojana2026ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getYojana2026Article(slug);

  if (!article) notFound();

  const ArticleComponent = COMPONENTS[article.component];
  if (!ArticleComponent) notFound();

  const siblings = LIVE_YOJANA_2026_ARTICLES.filter((a) => a.slug !== slug);
  const idx = LIVE_YOJANA_2026_ARTICLES.findIndex((a) => a.slug === slug);
  const related = Array.from(
    { length: Math.min(6, siblings.length) },
    (_, i) => siblings[(idx + i) % siblings.length]
  );

  const url = `${SITE_URL}/yojana/${slug}`;
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
      <article>
        <ArticleComponent article={article} />
      </article>
      <div className="container-site max-w-3xl pb-10">
        <CrossSectionLinks currentPath={`/yojana/${slug}`} section="articles" />
      </div>
    </>
  );
}
