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

function ArticleLoading() {
  return (
    <div className="container-site py-10">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6" />
      </div>
    </div>
  );
}

const COMPONENTS: Record<string, React.ComponentType<{ article: ArticleMeta }>> = {
  KisanRinKahaSeLe2026:                       dynamic(() => import('@/components/articles/KisanRinKahaSeLe2026'),                       { loading: ArticleLoading, ssr: true }),
  KisanTractorLoan2026:                       dynamic(() => import('@/components/articles/KisanTractorLoan2026'),                       { loading: ArticleLoading, ssr: true }),
  PmKisanBeneficiaryList2026:                 dynamic(() => import('@/components/articles/PmKisanBeneficiaryList2026'),                 { loading: ArticleLoading, ssr: true }),
  PmKisanBeneficiaryListVillageWise2026:      dynamic(() => import('@/components/articles/PmKisanBeneficiaryListVillageWise2026'),      { loading: ArticleLoading, ssr: true }),
  PmKisanEkycOnline2026:                      dynamic(() => import('@/components/articles/PmKisanEkycOnline2026'),                      { loading: ArticleLoading, ssr: true }),
  KisanCreditCardOnlineApply2026:             dynamic(() => import('@/components/articles/KisanCreditCardOnlineApply2026'),             { loading: ArticleLoading, ssr: true }),
  NanoDap500mlPriceInIndia2026:               dynamic(() => import('@/components/articles/NanoDap500mlPriceInIndia2026'),               { loading: ArticleLoading, ssr: true }),
  PmKisan24viKist2026:                        dynamic(() => import('@/components/articles/PmKisan24viKist2026'),                        { loading: ArticleLoading, ssr: true }),
  AgriStackKyaHai2026:                        dynamic(() => import('@/components/articles/AgriStackKyaHai2026'),                        { loading: ArticleLoading, ssr: true }),
  PmKisanMasterGuide2026:                     dynamic(() => import('@/components/articles/PmKisanMasterGuide2026'),                     { loading: ArticleLoading, ssr: true }),
  'pm-kisan-fto-generated-ka-matlab-kya-hai': dynamic(() => import('@/components/articles/pm-kisan-fto-generated-ka-matlab-kya-hai'), { loading: ArticleLoading, ssr: true }),
  'soil-health-card-complete-guide-2026':     dynamic(() => import('@/components/articles/soil-health-card-complete-guide-2026'),     { loading: ArticleLoading, ssr: true }),
  PmfbyCropInsurance2026:                     dynamic(() => import('@/components/articles/PmfbyCropInsurance2026'),                     { loading: ArticleLoading, ssr: true }),
  'mandi-bhav-today':                         dynamic(() => import('@/components/articles/mandi-bhav-today'),                         { loading: ArticleLoading, ssr: true }),
  PmKisanPaymentFailedFix2026:                dynamic(() => import('@/components/articles/PmKisanPaymentFailedFix2026'),                { loading: ArticleLoading, ssr: true }),
  PmKisan25viKist2027:                        dynamic(() => import('@/components/articles/PmKisan25viKist2027'),                        { loading: ArticleLoading, ssr: true }),
  PmKisanSelfRegisteredStatusCheck:           dynamic(() => import('@/components/articles/PmKisanSelfRegisteredStatusCheck'),           { loading: ArticleLoading, ssr: true }),
  PmKisanCorrectionForm2026:                  dynamic(() => import('@/components/articles/PmKisanCorrectionForm2026'),                  { loading: ArticleLoading, ssr: true }),
  // ✅ NEW ARTICLE COMPONENT ADDED
  PmKusumYojanaSolarSubsidy2026:              dynamic(() => import('@/components/articles/PmKusumYojanaSolarSubsidy2026'),              { loading: ArticleLoading, ssr: true }),
};

export const revalidate = 3600;

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

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
  const rawCat = CATEGORIES[article.category];
  const catName: string = rawCat ? ((rawCat as Record<string, string>).nameHi ?? (rawCat as Record<string, string>).name) : '';

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {rawCat && (
        <div className="container-site pt-6">
          <Link
            href={`/articles/category/${article.category}`}
            className="inline-flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50 text-sm font-bold px-4 py-2 rounded-full transition-colors focus:ring-2 focus:ring-green-500 focus:outline-none"
            aria-label={`View all ${catName} articles`}
          >
            <span aria-hidden="true">📂</span>
            <span>{catName}</span>
            <span className="text-green-600 dark:text-green-400" aria-hidden="true">→</span>
          </Link>
        </div>
      )}

      <ArticleComponent article={article} />
    </>
  );
}