import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ARTICLES_MAP, ARTICLES, CATEGORIES, type ArticleMeta } from '@/lib/articles-data';

// Ye domain har jagah use hota hai - SEO aur schema ke liye zaroori hai
const DOMAIN = 'https://kisanstatus.com';

// Har article ka apna OG image hai - social media sharing ke liye
// Ye wala part thoda tricky hai - agar image missing hai to default use karo
const ARTICLE_OG_IMAGES: Record<string, string> = {
  'kisan-credit-card-online-apply-2026':             '/images/kisan-credit-card-apply-2026.webp',
  'pm-kisan-23vi-kist-2026-status-check':            '/images/pm-kisan-23vi-kist-status-check-2026.webp',
  'pm-kisan-ekyc-online-2026':                       '/images/pm-kisan-ekyc-online-2026.webp',
  'pm-kisan-payment-failed-status-2026':             '/images/pm-kisan-payment-failed-status-2026.webp',
  'pm-kisan-rejected-list-2026':                     '/images/pm-kisan-rejected-list-2026.webp',
  'pm-kisan-registration-online-2026':               '/images/pm-kisan-registration-online-2026.webp',
  'pm-kisan-name-correction-online-2026':            '/images/pm-kisan-name-correction-online-2026.webp',
  'pm-kisan-beneficiary-list-2026':                  '/images/pm-kisan-beneficiary-list-2026.webp',
  'pm-kisan-installment-history-check-online':       '/images/pm-kisan-installment-history-check-online.webp',
  'pm-kisan-land-seeding-status-check':              '/images/pm-kisan-land-seeding-status-check.webp',
  'pm-kisan-beneficiary-list-village-wise-2026':     '/images/pm-kisan-beneficiary-list-village-wise-2026.webp',
  'kisan-rin-kaha-se-le-2026':                       '/images/kisan-rin-kaha-se-le-2026.webp',
  'pmfby-crop-insurance-2026':                       '/images/pmfby-crop-insurance-2026.webp',
  'kisan-tractor-loan-2026':                         '/images/kisan-tractor-loan-2026.webp',
  'pm-kisan-21vi-installment-status-check':          '/images/pm-kisan-21vi-installment-status-check.webp',
  'pm-kisan-correction-deactivate-block-guide-2026': '/images/pm-kisan-correction-deactivate-block-guide-2026.webp',
  'pm-kisan-problems-solution-guide-2026':           '/images/pm-kisan-problems-solution-guide-2026.webp',
  'pm-kisan-fto-generated-ka-matlab-kya-hai':        '/images/pm-kisan-fto-generated-featured-image-kisanstatus.webp',
  'pm-kisan-24vi-kist':                              '/images/pm-kisan-24vi-kist-october-2026.webp',
  'agristack-kya-hai':                               '/images/articles/agristack-kya-hai/infographic.webp',
  'pm-kisan-mobile-number-change':                   '/images/pm-kisan-mobile-bank-aadhaar-update-banner-website.webp',
  'nano-dap-500ml-price-in-india-2026':              '/images/nano-dap-500ml-price-india-2026.webp',
  'pm-kisan-complete-guide':                         '/images/pm-kisan-status-check-hero.webp',
  'soil-health-card-complete-guide-2026':            '/images/soil-health-card-complete-guide-2026.webp',
  'pm-kisan-self-registered-status-check':           '/images/pm-kisan-self-registered-status/pm-kisan-portal-homepage.webp',
  'pm-kisan-status-check-online-2026-complete-guide': '/images/pm-kisan-status-check-tool-interface.webp',
  'mandi-bhav-today':                                '/images/article/mandi-bhav-today.webp',
};

// Schema.org markup banane ka function - Google rich results ke liye zaroori hai
// Ye wala part important hai SEO ke liye - bina iske Google article ko properly index nahi karta
function buildSchemas(article: ArticleMeta, url: string, ogImage: string) {
  return [
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
        name: 'KisanStatus Team',
        url: `${DOMAIN}/about`,
      },
      publisher: {
        '@type': 'Organization',
        name: 'KisanStatus',
        url: DOMAIN,
        logo: {
          '@type': 'ImageObject',
          url: `${DOMAIN}/logo.webp`,
        },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      inLanguage: 'hi-IN',
      isPartOf: { '@type': 'WebSite', name: 'KisanStatus', url: DOMAIN },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
        { '@type': 'ListItem', position: 2, name: 'Articles', item: `${DOMAIN}/articles` },
        { '@type': 'ListItem', position: 3, name: article.ogTitle || article.title, item: url },
      ],
    },
  ];
}

// Loading skeleton - jab article load ho raha hota hai tab ye dikhta hai
// User experience ke liye zaroori hai - blank screen se better hai
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

// Dynamic imports - articles heavy hote hain, isliye lazy loading kiya
// Pehle sab ek saath load hote the - page slow ho jata tha
// Ab sirf wahi article load hota hai jo user dekh raha hai
const COMPONENTS: Record<string, React.ComponentType<{ article: ArticleMeta }>> = {
  KisanCreditCardOnlineApply2026:             dynamic(() => import('@/components/articles/KisanCreditCardOnlineApply2026'),            { loading: ArticleLoading }),
  KisanRinKahaSeLe2026:                       dynamic(() => import('@/components/articles/KisanRinKahaSeLe2026'),                      { loading: ArticleLoading }),
  KisanTractorLoan2026:                       dynamic(() => import('@/components/articles/KisanTractorLoan2026'),                      { loading: ArticleLoading }),
  NanoDap500mlPriceInIndia2026:               dynamic(() => import('@/components/articles/NanoDap500mlPriceInIndia2026'),              { loading: ArticleLoading }),
  PmKisan21viInstallmentStatusCheck:          dynamic(() => import('@/components/articles/PmKisan21viInstallmentStatusCheck'),         { loading: ArticleLoading }),
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
  PmKisanFtoGeneratedKaMatlabKyaHai:          dynamic(() => import('@/components/articles/pm-kisan-fto-generated-ka-matlab-kya-hai'), { loading: ArticleLoading }),
  PmKisan24viKist2026:                        dynamic(() => import('@/components/articles/PmKisan24viKist2026'),                       { loading: ArticleLoading }),
  AgriStackKyaHai2026:                        dynamic(() => import('@/components/articles/AgriStackKyaHai2026'),                       { loading: ArticleLoading }),
  PmKisanMobileNumberChange2026:              dynamic(() => import('@/components/articles/PmKisanMobileNumberChange2026'),             { loading: ArticleLoading }),
  PmKisanCompleteGuide:                       dynamic(() => import('@/components/articles/pm-kisan-complete-guide'),                   { loading: ArticleLoading }),
  SoilHealthCardCompleteGuide2026:            dynamic(() => import('@/components/articles/soil-health-card-complete-guide-2026'),      { loading: ArticleLoading }),
  PmKisanSelfRegisteredStatusCheck:           dynamic(() => import('@/components/articles/pm-kisan-self-registered-status-check'),     { loading: ArticleLoading }),
  PmKisanStatusCheckOnline2026CompleteGuide:  dynamic(() => import('@/components/articles/PmKisanStatusCheckOnline2026CompleteGuide'), { loading: ArticleLoading }),
  MandiBhavToday:                             dynamic(() => import('@/components/articles/MandiBhavContent'),                          { loading: ArticleLoading }),
};

// 24 ghante mein ek baar revalidate karo - daily updates ke liye
export const revalidate = 86400;

// Static pages generate karo - build time par sab articles ke pages ban jayenge
export async function generateStaticParams() {
  return ARTICLES.map(a => ({ slug: a.slug }));
}

// Metadata generate karo - SEO ke liye sabse important part
// Title, description, OG tags - sab yahan set hote hain
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES_MAP[slug];
  
  // Article nahi mila to simple title return karo
  if (!article) return { title: 'Article Not Found' };

  const url = `${DOMAIN}/articles/${slug}`;
  const ogImage = ARTICLE_OG_IMAGES[slug]
    ? `${DOMAIN}${ARTICLE_OG_IMAGES[slug]}`
    : `${DOMAIN}/og-image.webp`;

  const displayTitle = article.ogTitle || article.title;

  return {
    title: displayTitle,
    description: article.desc,
    authors: [{ name: 'KisanStatus Team', url: `${DOMAIN}/about` }],
    alternates: { canonical: url },
    openGraph: {
      title: displayTitle,
      description: article.desc,
      type: 'article',
      url,
      siteName: 'KisanStatus',
      locale: 'hi_IN',
      images: [{ url: ogImage, width: 1200, height: 630, alt: displayTitle }],
      publishedTime: article.publishedTime,
      modifiedTime: article.modifiedTime,
      authors: [`${DOMAIN}/about`],
      section: 'PM Kisan Guide',
    },
    twitter: {
      card: 'summary_large_image',
      title: displayTitle,
      description: article.desc,
      site: '@kisanstatus',
      images: [ogImage],
    },
  };
}

// Main page component - yahan article render hota hai
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES_MAP[slug];
  
  // 404 handle karna zaroori hai warna Google penalty de sakta hai
  if (!article) notFound();

  const ArticleComponent = COMPONENTS[article.component];
  
  // Component nahi mila to bhi 404
  if (!ArticleComponent) notFound();

  const url = `${DOMAIN}/articles/${slug}`;
  const ogImage = ARTICLE_OG_IMAGES[slug]
    ? `${DOMAIN}${ARTICLE_OG_IMAGES[slug]}`
    : `${DOMAIN}/og-image.webp`;

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