import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
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
  AUTHOR_BIO,
  TWITTER_HANDLE,
  DEFAULT_OG_IMAGE,
  LOGO_URL,
  LOGO_WIDTH,
  LOGO_HEIGHT,
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
      name: (category as Record<string, string>).nameHi ?? (category as Record<string, string>).name,
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
      '@id': `${url}#article`,
      headline: article.ogTitle || article.title,
      description: article.desc,
      image: {
        '@type': 'ImageObject',
        url: ogImage,
        width: 1200,
        height: 630,
        caption: article.ogTitle || article.title,
      },
      datePublished: article.publishedTime,
      dateModified: article.modifiedTime,
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
      publisher: {
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
      },
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
      about: article.schemes && article.schemes.length > 0
        ? article.schemes.map((s) => ({ '@type': 'Thing', name: s }))
        : [{ '@type': 'Thing', name: 'Agriculture' }],
      mentions: related.slice(0, 3).map((r) => ({
        '@type': 'Article',
        name: r.title,
        url: `${SITE_URL}/articles/${r.slug}`,
      })),
      keywords: article.keywords.join(', '),
      articleSection: category ? (category as Record<string, string>).name : 'Agriculture',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['article h1', 'article h2', 'article p'],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: breadcrumbItems,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: article.ogTitle || article.title,
      description: article.desc,
      inLanguage: 'hi-IN',
      isPartOf: {
        '@id': `${SITE_URL}#website`,
      },
      about: {
        '@id': `${SITE_URL}#organization`,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: ogImage,
      },
      breadcrumb: {
        '@id': `${url}#breadcrumb`,
      },
      mainEntity: {
        '@id': `${url}#article`,
      },
    },
  ];

  return schemas;
}

function ArticleLoading() {
  return (
    <div className="container-site py-10" style={{ minHeight: '60vh' }} aria-busy="true" aria-label="Article content loading">
      <div className="animate-pulse space-y-6 max-w-4xl mx-auto px-4">
        <div className="space-y-3">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
        </div>
        
        <div className="flex gap-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32" />
        </div>
        
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6" />
        </div>
        
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl w-full" />
        
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
        </div>
      </div>
    </div>
  );
}

const COMPONENTS: Record<string, React.ComponentType<{ article: ArticleMeta }>> = {
  KisanRinKahaSeLe2026:                       dynamic(() => import('@/components/articles/KisanRinKahaSeLe2026'), { ssr: true }),
  KisanTractorLoan2026:                       dynamic(() => import('@/components/articles/KisanTractorLoan2026'), { ssr: true }),
  PmKisanBeneficiaryList2026:                 dynamic(() => import('@/components/articles/PmKisanBeneficiaryList2026'), { ssr: true }),
  PmKisanEkycOnline2026:                      dynamic(() => import('@/components/articles/PmKisanEkycOnline2026'), { ssr: true }),
  KisanCreditCardOnlineApply2026:             dynamic(() => import('@/components/articles/KisanCreditCardOnlineApply2026'), { ssr: true }),
  NanoDap500mlPriceInIndia2026:               dynamic(() => import('@/components/articles/NanoDap500mlPriceInIndia2026'), { ssr: true }),
  PmKisan24viKist2026:                        dynamic(() => import('@/components/articles/PmKisan24viKist2026'), { ssr: true }),
  AgriStackKyaHai2026:                        dynamic(() => import('@/components/articles/AgriStackKyaHai2026'), { ssr: true }),
  PmKisanMasterGuide2026:                     dynamic(() => import('@/components/articles/PmKisanMasterGuide2026'), { ssr: true }),
  'pm-kisan-fto-generated-ka-matlab-kya-hai': dynamic(() => import('@/components/articles/pm-kisan-fto-generated-ka-matlab-kya-hai'), { ssr: true }),
  'soil-health-card-complete-guide-2026':     dynamic(() => import('@/components/articles/soil-health-card-complete-guide-2026'), { ssr: true }),
  PmfbyCropInsurance2026:                     dynamic(() => import('@/components/articles/PmfbyCropInsurance2026'), { ssr: true }),
  'mandi-bhav-today':                         dynamic(() => import('@/components/articles/mandi-bhav-today'), { ssr: true }),
  PmKisanPaymentFailedFix2026:                dynamic(() => import('@/components/articles/PmKisanPaymentFailedFix2026'), { ssr: true }),
  PmKisan25viKist2027:                        dynamic(() => import('@/components/articles/PmKisan25viKist2027'), { ssr: true }),
  PmKisanSelfRegisteredStatusCheck:           dynamic(() => import('@/components/articles/PmKisanSelfRegisteredStatusCheck'), { ssr: true }),
  PmKisanCorrectionForm2026:                  dynamic(() => import('@/components/articles/PmKisanCorrectionForm2026'), { ssr: true }),
  PmKusumYojanaSolarSubsidy2026:              dynamic(() => import('@/components/articles/PmKusumYojanaSolarSubsidy2026'), { ssr: true }),
  PmKisanLandSeedingForm:                     dynamic(() => import('@/components/articles/PmKisanLandSeedingForm'), { ssr: true }),
  PmKisanFaceAuthenticationEkyc:              dynamic(() => import('@/components/articles/PmKisanFaceAuthenticationEkyc'), { ssr: true }),
  PmKisanVoluntarySurrenderGuide:             dynamic(() => import('@/components/articles/PmKisanVoluntarySurrenderGuide'), { ssr: true }),
  PmKisanStateNodalOfficerList:               dynamic(() => import('@/components/articles/PmKisanStateNodalOfficerList'), { ssr: true }),
  PmKisanBankAccountChangeProcess:            dynamic(() => import('@/components/articles/PmKisanBankAccountChangeProcess'), { ssr: true }),
  PmKisanCscRegistrationCharges:              dynamic(() => import('@/components/articles/PmKisanCscRegistrationCharges'), { ssr: true }),
  PmKisanMaandhanYojanaPension:               dynamic(() => import('@/components/articles/PmKisanMaandhanYojanaPension'), { ssr: true }),
  PmKisanRejectedStatusReApplyGuide:          dynamic(() => import('@/components/articles/PmKisanRejectedStatusReApplyGuide'), { ssr: true }),
  PmKisanVillageWiseListPdfDownload:          dynamic(() => import('@/components/articles/PmKisanVillageWiseListPdfDownload'), { ssr: true }),
  PmKisanMobileNumberChangeUpdate:            dynamic(() => import('@/components/articles/PmKisanMobileNumberChangeUpdate'), { ssr: true }),
  
  BakriPalanYojana:         dynamic(() => import('@/components/articles/kisanguides/BakriPalanYojana'), { ssr: true }),
  MushroomKheti:            dynamic(() => import('@/components/articles/kisanguides/MushroomKheti'), { ssr: true }),
  MadhumakhiPalan:          dynamic(() => import('@/components/articles/kisanguides/MadhumakhiPalan'), { ssr: true }),
  PMatsyaSampada:           dynamic(() => import('@/components/articles/kisanguides/PMatsyaSampada'), { ssr: true }),
  SilageMaking:             dynamic(() => import('@/components/articles/kisanguides/SilageMaking'), { ssr: true }),
  PMFMEYojana:              dynamic(() => import('@/components/articles/kisanguides/PMFMEYojana'), { ssr: true }),
  CHCPortal:                dynamic(() => import('@/components/articles/kisanguides/CHCPortal'), { ssr: true }),
  VerminCompost:            dynamic(() => import('@/components/articles/kisanguides/VerminCompost'), { ssr: true }),
  DripSprinkler:            dynamic(() => import('@/components/articles/kisanguides/DripSprinkler'), { ssr: true }),
};

export const revalidate = 86400;

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  if (slug === 'PmKisanBeneficiaryListVillageWise2026') {
    redirect('/articles/PmKisanBeneficiaryList2026');
  }
  
  const article = ARTICLES_MAP[slug];
  if (!article) return { title: 'Article Not Found' };

  const url = `${SITE_URL}/articles/${slug}`;
  const ogImage = article.ogImage ? `${SITE_URL}${article.ogImage}` : DEFAULT_OG_IMAGE;
  const displayTitle = article.ogTitle || article.title;
  const category = CATEGORIES[article.category];

  return {
    metadataBase: new URL(SITE_URL),
    title: displayTitle,
    description: article.desc,
    keywords: [...article.keywords] as string[],
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    creator: AUTHOR_NAME,
    publisher: SITE_NAME,
    category: category ? (category as Record<string, string>).name : 'Agriculture & Farming',
    alternates: { 
      canonical: new URL(url),  // ✅ FIX: URL object
      languages: {
        'hi-IN': url,
        'x-default': url,
      },
    },
    openGraph: {
      title: displayTitle,
      description: article.desc,
      type: 'article',
      url,
      siteName: SITE_NAME,
      locale: 'hi_IN',
      images: [{ 
        url: ogImage, 
        width: 1200, 
        height: 630, 
        alt: displayTitle,
        type: 'image/webp',
      }],
      publishedTime: article.publishedTime,
      modifiedTime: article.modifiedTime,
      section: category ? (category as Record<string, string>).name : 'Agriculture & Welfare',
      authors: [AUTHOR_NAME],
      tags: [...article.keywords].slice(0, 5),
    },
    twitter: {
      card: 'summary_large_image',
      title: displayTitle,
      description: article.desc,
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      // ❌ FIX: nocache: false hata diya
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'article:published_time': article.publishedTime,
      'article:modified_time': article.modifiedTime,
      'article:section': category ? (category as Record<string, string>).name : 'Agriculture',
      // ❌ FIX: 'article:tag' hata diya
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  if (slug === 'PmKisanBeneficiaryListVillageWise2026') {
    redirect('/articles/PmKisanBeneficiaryList2026');
  }
  
  const article = ARTICLES_MAP[slug];
  if (!article) notFound();

  const ArticleComponent = COMPONENTS[article.component];
  if (!ArticleComponent) {
    console.error(`[ArticlePage] Missing component: ${article.component} for slug: ${slug}`);
    notFound();
  }

  const url = `${SITE_URL}/articles/${slug}`;
  const ogImage = article.ogImage ? `${SITE_URL}${article.ogImage}` : DEFAULT_OG_IMAGE;
  const schemas = buildSchemas(article, url, ogImage);
  const rawCat = CATEGORIES[article.category];
  const catName: string = rawCat ? ((rawCat as Record<string, string>).nameHi ?? (rawCat as Record<string, string>).name) : '';

  return (
    <article itemScope itemType="https://schema.org/Article">
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {rawCat && (
        <nav aria-label="Article category breadcrumb" className="container-site pt-6 px-4">
          <Link
            href={`/articles/category/${article.category}`}
            className="inline-flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50 text-sm font-bold px-4 py-2 rounded-full transition-colors focus:ring-2 focus:ring-green-500 focus:outline-none"
            aria-label={`View all ${catName} articles`}
          >
            <span aria-hidden="true">📂</span>
            <span>{catName}</span>
            <span className="text-green-600 dark:text-green-400" aria-hidden="true">→</span>
          </Link>
        </nav>
      )}

      <ArticleComponent article={article} />
    </article>
  );
}
