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

  const breadcrumbItems: any[] = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Articles', item: `${SITE_URL}/articles` },
  ];

  if (category) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 3,
      name: (category as any).nameHi ?? (category as any).name,
      item: `${SITE_URL}/articles/category/${article.category}`,
    });
  }

  breadcrumbItems.push({
    '@type': 'ListItem',
    position: category ? 4 : 3,
    name: article.ogTitle || article.title,
    item: url,
  });

  return [
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
        ? article.schemes.map((s: string) => ({ '@type': 'Thing', name: s }))
        : [{ '@type': 'Thing', name: 'Agriculture' }],
      mentions: related.slice(0, 3).map((r: any) => ({
        '@type': 'Article',
        name: r.title,
        url: `${SITE_URL}/articles/${r.slug}`,
      })),
      keywords: Array.isArray(article.keywords) ? article.keywords.join(', ') : '',
      articleSection: category ? (category as any).name : 'Agriculture',
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
}

const NEEDS_RELATED_BLOCK = new Set<string>([
  'CHCPortal',
  'SilageMaking',
  'DripSprinkler',
  'MushroomKheti',
  'VerminCompost',
  'MadhumakhiPalan',
  'PMatsyaSampada',
  'KisanCreditCardOnlineApply2026',
  'PmKisanEkycOnline2026',
  'PmKisanPaymentFailedFix2026',
  'PmKisanStateNodalOfficerList',
]);

const COMPONENTS: Record<string, React.ComponentType<{ article: ArticleMeta }>> = {
  KisanRinKahaSeLe2026: dynamic(() => import('@/components/articles/KisanRinKahaSeLe2026'), { ssr: true }),
  KisanTractorLoan2026: dynamic(() => import('@/components/articles/KisanTractorLoan2026'), { ssr: true }),
  PmKisanBeneficiaryList2026: dynamic(() => import('@/components/articles/PmKisanBeneficiaryList2026'), { ssr: true }),
  PmKisanEkycOnline2026: dynamic(() => import('@/components/articles/PmKisanEkycOnline2026'), { ssr: true }),
  KisanCreditCardOnlineApply2026: dynamic(() => import('@/components/articles/KisanCreditCardOnlineApply2026'), { ssr: true }),
  NanoDap500mlPriceInIndia2026: dynamic(() => import('@/components/articles/NanoDap500mlPriceInIndia2026'), { ssr: true }),
  PmKisan24viKist2026: dynamic(() => import('@/components/articles/PmKisan24viKist2026'), { ssr: true }),
  AgriStackKyaHai2026: dynamic(() => import('@/components/articles/AgriStackKyaHai2026'), { ssr: true }),
  PmKisanMasterGuide2026: dynamic(() => import('@/components/articles/PmKisanMasterGuide2026'), { ssr: true }),
  'pm-kisan-fto-generated-ka-matlab-kya-hai': dynamic(() => import('@/components/articles/pm-kisan-fto-generated-ka-matlab-kya-hai'), { ssr: true }),
  'soil-health-card-complete-guide-2026': dynamic(() => import('@/components/articles/soil-health-card-complete-guide-2026'), { ssr: true }),
  PmfbyCropInsurance2026: dynamic(() => import('@/components/articles/PmfbyCropInsurance2026'), { ssr: true }),
  'mandi-bhav-today': dynamic(() => import('@/components/articles/mandi-bhav-today'), { ssr: true }),
  PmKisanPaymentFailedFix2026: dynamic(() => import('@/components/articles/PmKisanPaymentFailedFix2026'), { ssr: true }),
  PmKisan25viKist2027: dynamic(() => import('@/components/articles/PmKisan25viKist2027'), { ssr: true }),
  PmKisanSelfRegisteredStatusCheck: dynamic(() => import('@/components/articles/PmKisanSelfRegisteredStatusCheck'), { ssr: true }),
  PmKisanCorrectionForm2026: dynamic(() => import('@/components/articles/PmKisanCorrectionForm2026'), { ssr: true }),
  PmKusumYojanaSolarSubsidy2026: dynamic(() => import('@/components/articles/PmKusumYojanaSolarSubsidy2026'), { ssr: true }),
  PmKisanLandSeedingForm: dynamic(() => import('@/components/articles/PmKisanLandSeedingForm'), { ssr: true }),
  PmKisanFaceAuthenticationEkyc: dynamic(() => import('@/components/articles/PmKisanFaceAuthenticationEkyc'), { ssr: true }),
  PmKisanVoluntarySurrenderGuide: dynamic(() => import('@/components/articles/PmKisanVoluntarySurrenderGuide'), { ssr: true }),
  PmKisanStateNodalOfficerList: dynamic(() => import('@/components/articles/PmKisanStateNodalOfficerList'), { ssr: true }),
  PmKisanBankAccountChangeProcess: dynamic(() => import('@/components/articles/PmKisanBankAccountChangeProcess'), { ssr: true }),
  PmKisanCscRegistrationCharges: dynamic(() => import('@/components/articles/PmKisanCscRegistrationCharges'), { ssr: true }),
  PmKisanMaandhanYojanaPension: dynamic(() => import('@/components/articles/PmKisanMaandhanYojanaPension'), { ssr: true }),
  PmKisanRejectedStatusReApplyGuide: dynamic(() => import('@/components/articles/PmKisanRejectedStatusReApplyGuide'), { ssr: true }),
  PmKisanVillageWiseListPdfDownload: dynamic(() => import('@/components/articles/PmKisanVillageWiseListPdfDownload'), { ssr: true }),
  PmKisanMobileNumberChangeUpdate: dynamic(() => import('@/components/articles/PmKisanMobileNumberChangeUpdate'), { ssr: true }),
  BakriPalanYojana: dynamic(() => import('@/components/articles/kisanguides/BakriPalanYojana'), { ssr: true }),
  MushroomKheti: dynamic(() => import('@/components/articles/kisanguides/MushroomKheti'), { ssr: true }),
  MadhumakhiPalan: dynamic(() => import('@/components/articles/kisanguides/MadhumakhiPalan'), { ssr: true }),
  PMatsyaSampada: dynamic(() => import('@/components/articles/kisanguides/PMatsyaSampada'), { ssr: true }),
  SilageMaking: dynamic(() => import('@/components/articles/kisanguides/SilageMaking'), { ssr: true }),
  PMFMEYojana: dynamic(() => import('@/components/articles/kisanguides/PMFMEYojana'), { ssr: true }),
  CHCPortal: dynamic(() => import('@/components/articles/kisanguides/CHCPortal'), { ssr: true }),
  VerminCompost: dynamic(() => import('@/components/articles/kisanguides/VerminCompost'), { ssr: true }),
  DripSprinkler: dynamic(() => import('@/components/articles/kisanguides/DripSprinkler'), { ssr: true }),
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
  if (!article) {
    return {
      title: 'Article Not Found',
      robots: { index: false, follow: true },
    };
  }

  const url = `${SITE_URL}/articles/${slug}`;
  const ogImage = article.ogImage ? `${SITE_URL}${article.ogImage}` : DEFAULT_OG_IMAGE;
  const displayTitle = article.ogTitle || article.title;
  const category = CATEGORIES[article.category];

  return {
    metadataBase: new URL(SITE_URL),
    title: displayTitle,
    description: article.desc,
    keywords: Array.isArray(article.keywords) ? [...article.keywords] : [],
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    creator: AUTHOR_NAME,
    publisher: SITE_NAME,
    category: category ? (category as any).name : 'Agriculture & Farming',
    alternates: { 
      canonical: url,
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
      section: category ? (category as any).name : 'Agriculture & Welfare',
      authors: [AUTHOR_NAME],
      tags: Array.isArray(article.keywords) ? [...article.keywords].slice(0, 5) : [],
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
      'article:section': category ? (category as any).name : 'Agriculture',
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
  const catName: string = rawCat ? ((rawCat as any).nameHi ?? (rawCat as any).name) : '';
  const related = getRelatedArticles(article.slug, 6);

  return (
    <article itemScope itemType="https://schema.org/Article">
      {schemas.map((schema: any, i: number) => (
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

      {NEEDS_RELATED_BLOCK.has(article.component) && related.length > 0 && (
        <section aria-label="Related articles" className="container-site max-w-3xl mx-auto px-4 pb-10">
          <div className="mt-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
            <h2 className="font-black text-[var(--color-text)] mb-4 text-base flex items-center gap-2">
              <span>🔗</span> Related Articles — Yeh Bhi Padho
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/articles/${r.slug}`}
                  className="flex items-center gap-3 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors text-sm font-medium text-[var(--color-text)] no-underline"
                >
                  <span>{r.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}