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

// ✅ Loading skeleton with fixed heights to prevent CLS
function ArticleLoading() {
  return (
    <div className="container-site py-10" style={{ minHeight: '60vh' }}>
      <div className="animate-pulse space-y-6 max-w-4xl mx-auto px-4">
        {/* Title placeholder */}
        <div className="space-y-3">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
        </div>
        
        {/* Meta info placeholder */}
        <div className="flex gap-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32" />
        </div>
        
        {/* Content placeholders */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6" />
        </div>
        
        {/* Image placeholder */}
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl w-full" />
        
        {/* More content */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
        </div>
      </div>
    </div>
  );
}

// ✅ TYPE FIX: `any` use kiya taaki different component types kaam karein
const COMPONENTS: Record<string, React.ComponentType<any>> = {
  // ── EXISTING ARTICLES (18) ───────────────────────────────────
  KisanRinKahaSeLe2026:                       dynamic(() => import('@/components/articles/KisanRinKahaSeLe2026'),                       { loading: ArticleLoading, ssr: true }),
  KisanTractorLoan2026:                       dynamic(() => import('@/components/articles/KisanTractorLoan2026'),                       { loading: ArticleLoading, ssr: true }),
  PmKisanBeneficiaryList2026:                 dynamic(() => import('@/components/articles/PmKisanBeneficiaryList2026'),                 { loading: ArticleLoading, ssr: true }),
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
  PmKusumYojanaSolarSubsidy2026:              dynamic(() => import('@/components/articles/PmKusumYojanaSolarSubsidy2026'),              { loading: ArticleLoading, ssr: true }),

  // ── NEW 10 PM KISAN RELATED ARTICLES ─────────────────────
  PmKisanLandSeedingForm:                     dynamic(() => import('@/components/articles/PmKisanLandSeedingForm'),                     { loading: ArticleLoading, ssr: true }),
  PmKisanFaceAuthenticationEkyc:              dynamic(() => import('@/components/articles/PmKisanFaceAuthenticationEkyc'),              { loading: ArticleLoading, ssr: true }),
  PmKisanVoluntarySurrenderGuide:             dynamic(() => import('@/components/articles/PmKisanVoluntarySurrenderGuide'),             { loading: ArticleLoading, ssr: true }),
  PmKisanStateNodalOfficerList:               dynamic(() => import('@/components/articles/PmKisanStateNodalOfficerList'),               { loading: ArticleLoading, ssr: true }),
  PmKisanBankAccountChangeProcess:            dynamic(() => import('@/components/articles/PmKisanBankAccountChangeProcess'),            { loading: ArticleLoading, ssr: true }),
  PmKisanCscRegistrationCharges:              dynamic(() => import('@/components/articles/PmKisanCscRegistrationCharges'),              { loading: ArticleLoading, ssr: true }),
  PmKisanMaandhanYojanaPension:               dynamic(() => import('@/components/articles/PmKisanMaandhanYojanaPension'),               { loading: ArticleLoading, ssr: true }),
  PmKisanRejectedStatusReApplyGuide:          dynamic(() => import('@/components/articles/PmKisanRejectedStatusReApplyGuide'),          { loading: ArticleLoading, ssr: true }),
  PmKisanVillageWiseListPdfDownload:          dynamic(() => import('@/components/articles/PmKisanVillageWiseListPdfDownload'),          { loading: ArticleLoading, ssr: true }),
  PmKisanMobileNumberChangeUpdate:            dynamic(() => import('@/components/articles/PmKisanMobileNumberChangeUpdate'),            { loading: ArticleLoading, ssr: true }),

  // ── NEW 9 LOW-COMPETITION FARMING ARTICLES (kisanguides) ─────────────────────
  BakriPalanYojana:                           dynamic(() => import('@/components/articles/kisanguides/BakriPalanYojana'),               { loading: ArticleLoading, ssr: true }),
  MushroomKheti:                              dynamic(() => import('@/components/articles/kisanguides/MushroomKheti'),                  { loading: ArticleLoading, ssr: true }),
  MadhumakhiPalan:                            dynamic(() => import('@/components/articles/kisanguides/MadhumakhiPalan'),                { loading: ArticleLoading, ssr: true }),
  PMatsyaSampada:                             dynamic(() => import('@/components/articles/kisanguides/PMatsyaSampada'),                 { loading: ArticleLoading, ssr: true }),
  SilageMaking:                               dynamic(() => import('@/components/articles/kisanguides/SilageMaking'),                   { loading: ArticleLoading, ssr: true }),
  PMFMEYojana:                                dynamic(() => import('@/components/articles/kisanguides/PMFMEYojana'),                    { loading: ArticleLoading, ssr: true }),
  CHCPortal:                                  dynamic(() => import('@/components/articles/kisanguides/CHCPortal'),                      { loading: ArticleLoading, ssr: true }),
  VerminCompost:                              dynamic(() => import('@/components/articles/kisanguides/VerminCompost'),                  { loading: ArticleLoading, ssr: true }),
  DripSprinkler:                              dynamic(() => import('@/components/articles/kisanguides/DripSprinkler'),                  { loading: ArticleLoading, ssr: true }),
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
  
  // ✅ REDIRECT: Purana village wise URL → naya merged article
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
    title: displayTitle, // ✅ Layout.tsx ka template ('%s | KisanStatus') automatically apply hoga
    description: article.desc,
    keywords: article.keywords, // ✅ DYNAMIC KEYWORDS ADDED
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    alternates: { 
      canonical: url,
      languages: {
        'hi-IN': url,
        'x-default': url,
      }
    },
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
      section: category ? category.name : 'Agriculture & Welfare', // ✅ DYNAMIC SECTION
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
  
  // ✅ REDIRECT: Purana village wise URL → naya merged article
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
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {rawCat && (
        <div className="container-site pt-6 px-4">
          <Link
            href={`/articles/category/${article.category}`}
            className="inline-flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50 text-sm font-bold px-4 py-2 rounded-full transition-colors focus:ring-2 focus:ring-green-500 focus:outline-none"
            aria-label={`View all ${catName} articles`}
          >
            <span aria-hidden="true">📂</span> {/* ✅ UX FIX: Icon wapas add kiya */}
            <span>{catName}</span>
            <span className="text-green-600 dark:text-green-400" aria-hidden="true">→</span>
          </Link>
        </div>
      )}

      <ArticleComponent article={article} />
    </>
  );
}