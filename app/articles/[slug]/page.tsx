import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  ARTICLES_MAP,
  ARTICLES,
  CATEGORIES,
  getRelatedArticles,
  type ArticleMeta,
} from '@/lib/articles-data';
import {
  SITE_URL,
  SITE_NAME,
  AUTHOR_NAME,
  AUTHOR_URL,
  TWITTER_HANDLE,
  DEFAULT_OG_IMAGE,
  LOGO_URL,
} from '@/lib/site-config';

// ═══════════════════════════════════════════════════════════
// SCHEMA BUILDER
// ═══════════════════════════════════════════════════════════

function buildSchemas(article: ArticleMeta, url: string, ogImage: string) {
  const category = CATEGORIES[article.category];
  const related = getRelatedArticles(article.slug, 5);

  const breadcrumbItems = [
    { '@type': 'ListItem' as const, position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem' as const, position: 2, name: 'Articles', item: `${SITE_URL}/articles` },
  ];

  if (category) {
    breadcrumbItems.push({
      '@type': 'ListItem' as const,
      position: 3,
      name: category.name,
      item: `${SITE_URL}/articles/category/${article.category}`,
    });
  }

  breadcrumbItems.push({
    '@type': 'ListItem' as const,
    position: category ? 4 : 3,
    name: article.ogTitle || article.title,
    item: url,
  });

  const schemas: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.ogTitle || article.title,
      description: article.desc,
      image: [ogImage],
      datePublished: article.publishedTime,
      dateModified: article.modifiedTime,
      author: {
        '@type': 'Organization',
        name: AUTHOR_NAME,
        url: AUTHOR_URL,
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: LOGO_URL },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      inLanguage: 'hi-IN',
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
      about: article.schemes?.map((s) => ({
        '@type': 'Thing',
        name: s,
      })),
      mentions: related.slice(0, 3).map((r) => ({
        '@type': 'Article',
        name: r.title,
        url: `${SITE_URL}/articles/${r.slug}`,
      })),
      keywords: article.keywords.join(', '),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    },
  ];

  return schemas;
}

// ═══════════════════════════════════════════════════════════
// SKELETON LOADER
// ═══════════════════════════════════════════════════════════

function ArticleLoading() {
  return (
    <div className="container-site py-10 animate-pulse">
      <div className="h-8 bg-[var(--color-border)] rounded w-2/3 mb-4" />
      <div className="h-4 bg-[var(--color-border)] rounded w-full mb-2" />
      <div className="h-4 bg-[var(--color-border)] rounded w-5/6 mb-2" />
      <div className="h-4 bg-[var(--color-border)] rounded w-4/6" />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// COMPONENT REGISTRY — FIXED IMPORTS (kebab-case for lowercase files)
// ═══════════════════════════════════════════════════════════

const COMPONENTS: Record<string, React.ComponentType<{ article: ArticleMeta }>> = {
  KisanCreditCardOnlineApply2026:             dynamic(() => import('@/components/articles/KisanCreditCardOnlineApply2026'),            { loading: ArticleLoading }),
  KisanRinKahaSeLe2026:                       dynamic(() => import('@/components/articles/KisanRinKahaSeLe2026'),                      { loading: ArticleLoading }),
  KisanTractorLoan2026:                       dynamic(() => import('@/components/articles/KisanTractorLoan2026'),                      { loading: ArticleLoading }),
  NanoDap500mlPriceInIndia2026:               dynamic(() => import('@/components/articles/NanoDap500mlPriceInIndia2026'),              { loading: ArticleLoading }),
  PmKisan23viKistStatusCheck2026:             dynamic(() => import('@/components/articles/PmKisan23viKistStatusCheck2026'),            { loading: ArticleLoading }),
  PmKisanBeneficiaryList2026:                 dynamic(() => import('@/components/articles/PmKisanBeneficiaryList2026'),                { loading: ArticleLoading }),
  PmKisanBeneficiaryListVillageWise2026:      dynamic(() => import('@/components/articles/PmKisanBeneficiaryListVillageWise2026'),     { loading: ArticleLoading }),
  PmKisanCorrectionDeactivateBlockGuide2026:  dynamic(() => import('@/components/articles/PmKisanCorrectionDeactivateBlockGuide2026'), { loading: ArticleLoading }),
  PmKisanEkycOnline2026:                      dynamic(() => import('@/components/articles/PmKisanEkycOnline2026'),                     { loading: ArticleLoading }),
  PmKisanInstallmentHistoryCheckOnline:       dynamic(() => import('@/components/articles/PmKisanInstallmentHistoryCheckOnline'),      { loading: ArticleLoading }),
  PmKisanLandSeedingStatusCheck:              dynamic(() => import('@/components/articles/PmKisanLandSeedingStatusCheck'),             { loading: ArticleLoading }),
  PmKisanNameCorrectionOnline2026:            dynamic(() => import('@/components/articles/PmKisanNameCorrectionOnline2026'),           { loading: ArticleLoading }),
  PmKisanPaymentFailedStatus2026:             dynamic(() => import('@/components/articles/PmKisanPaymentFailedStatus2026'),            { loading: ArticleLoading }),
  PmKisanProblemsSolutionGuide2026:           dynamic(() => import('@/components/articles/PmKisanProblemsSolutionGuide2026'),          { loading: ArticleLoading }),
  PmKisanRegistrationOnline2026:              dynamic(() => import('@/components/articles/PmKisanRegistrationOnline2026'),             { loading: ArticleLoading }),
  PmKisanRejectedList2026:                    dynamic(() => import('@/components/articles/PmKisanRejectedList2026'),                   { loading: ArticleLoading }),
  PmfbyCropInsurance2026:                     dynamic(() => import('@/components/articles/PmfbyCropInsurance2026'),                    { loading: ArticleLoading }),
  PmKisanFtoGeneratedKaMatlabKyaHai:          dynamic(() => import('@/components/articles/pm-kisan-fto-generated-ka-matlab-kya-hai'),  { loading: ArticleLoading }),
  PmKisan24viKist2026:                        dynamic(() => import('@/components/articles/PmKisan24viKist2026'),                       { loading: ArticleLoading }),
  AgriStackKyaHai2026:                        dynamic(() => import('@/components/articles/AgriStackKyaHai2026'),                       { loading: ArticleLoading }),
  PmKisanMobileNumberChange2026:              dynamic(() => import('@/components/articles/PmKisanMobileNumberChange2026'),             { loading: ArticleLoading }),
  PmKisanCompleteGuide:                       dynamic(() => import('@/components/articles/pm-kisan-complete-guide'),                   { loading: ArticleLoading }),
  SoilHealthCardCompleteGuide2026:            dynamic(() => import('@/components/articles/soil-health-card-complete-guide-2026'),      { loading: ArticleLoading }),
  PmKisanSelfRegisteredStatusCheck:           dynamic(() => import('@/components/articles/pm-kisan-self-registered-status-check'),     { loading: ArticleLoading }),
  PmKisanStatusCheckOnline2026CompleteGuide:  dynamic(() => import('@/components/articles/PmKisanStatusCheckOnline2026CompleteGuide'), { loading: ArticleLoading }),
  MandiBhavToday:                             dynamic(() => import('@/components/articles/MandiBhavContent'),                          { loading: ArticleLoading }),
};

// ═══════════════════════════════════════════════════════════
// ISR CONFIG
// ═══════════════════════════════════════════════════════════

export const revalidate = 86400;

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

// ═══════════════════════════════════════════════════════════
// METADATA GENERATOR
// ═══════════════════════════════════════════════════════════

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES_MAP[slug];

  if (!article) return { title: 'Article Not Found' };

  const url = `${SITE_URL}/articles/${slug}`;
  const ogImage = article.ogImage
    ? `${SITE_URL}${article.ogImage}`
    : DEFAULT_OG_IMAGE;
  const displayTitle = article.ogTitle || article.title;

  return {
    title: displayTitle,
    description: article.desc,
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    alternates: { canonical: url },
    openGraph: {
      title: displayTitle,
      description: article.desc,
      type: 'article',
      url,
      siteName: SITE_NAME,
      locale: 'hi_IN',
      images: [{ url: ogImage, width: 1200, height: 630, alt: displayTitle }],
      publishedTime: article.publishedTime,
      modifiedTime: article.modifiedTime,
      section: 'Agriculture & Welfare',
    },
    twitter: {
      card: 'summary_large_image',
      title: displayTitle,
      description: article.desc,
      site: TWITTER_HANDLE,
      images: [ogImage],
    },
  };
}

// ═══════════════════════════════════════════════════════════
// PAGE RENDERER
// ═══════════════════════════════════════════════════════════

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES_MAP[slug];

  if (!article) notFound();

  const ArticleComponent = COMPONENTS[article.component];

  if (!ArticleComponent) {
    console.error(`[ArticlePage] Missing component: ${article.component} for slug: ${slug}`);
    notFound();
  }

  const url = `${SITE_URL}/articles/${slug}`;
  const ogImage = article.ogImage
    ? `${SITE_URL}${article.ogImage}`
    : DEFAULT_OG_IMAGE;
  const schemas = buildSchemas(article, url, ogImage);
  const category = CATEGORIES[article.category];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {category && (
        <div className="container-site pt-6">
          <Link
            href={`/articles/category/${article.category}`}
            className="inline-flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50 text-sm font-bold px-4 py-2 rounded-full transition-colors focus:ring-2 focus:ring-green-500 focus:outline-none"
            aria-label={`View all ${category.name} articles`}
          >
            <span aria-hidden="true">📂</span>
            <span>{category.name}</span>
            <span className="text-green-600 dark:text-green-400" aria-hidden="true">→</span>
          </Link>
        </div>
      )}

      <ArticleComponent article={article} />
    </>
  );
}