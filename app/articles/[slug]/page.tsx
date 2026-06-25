/**
 * app/articles/[slug]/page.tsx — v2
 * ✅ FIXES:
 *  - JSON-LD schemas server-side inject ho rahe hain (Google crawl ke liye)
 *  - Per-article OG image map kept
 *  - generateStaticParams unchanged (SSG kept)
 *  - revalidate 86400 kept
 */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { ARTICLES_MAP, ARTICLES, type ArticleMeta } from '@/lib/articles-data';

const DOMAIN = 'https://kisanstatus.com';

// ── Per-article OG image map ───────────────────────────────────────────────
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
  'agristack-kya-hai':                               '/images/agristack-kya-hai-infographic.webp',
  'pm-kisan-mobile-number-change':                   '/images/pm-kisan-mobile-bank-aadhaar-update-banner-website.webp',
  'nano-dap-500ml-price-in-india-2026':              '/images/nano-dap-500ml-price-india-2026.webp',
};

// ── JSON-LD schema generator (server-side) ─────────────────────────────────
function buildSchemas(article: ArticleMeta, url: string, ogImage: string) {
  return [
    // Article Schema
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.desc,
      image: [ogImage],
      datePublished: article.publishedTime ?? '2026-01-01T00:00:00+05:30',
      dateModified:  article.modifiedTime  ?? new Date().toISOString(),
      author: {
        '@type': 'Person',
        name: 'Sidhu Singh',
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
      isPartOf: { '@type': 'WebSite', name: 'KisanStatus.com', url: DOMAIN },
    },
    // BreadcrumbList Schema
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',     item: DOMAIN },
        { '@type': 'ListItem', position: 2, name: 'Articles', item: `${DOMAIN}/articles` },
        { '@type': 'ListItem', position: 3, name: article.title, item: url },
      ],
    },
    // WebPage Schema
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': url,
      url,
      name: article.title,
      description: article.desc,
      inLanguage: 'hi-IN',
      isPartOf: { '@type': 'WebSite', url: DOMAIN, name: 'KisanStatus.com' },
      author: { '@type': 'Person', name: 'Sidhu Singh' },
      datePublished: article.publishedTime ?? '2026-01-01T00:00:00+05:30',
      dateModified:  article.modifiedTime  ?? new Date().toISOString(),
    },
  ];
}

// ── Loading skeleton ───────────────────────────────────────────────────────
function ArticleLoading() {
  return (
    <div className="container-site py-10 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-2/3 mb-4" />
      <div className="h-4 bg-gray-100 rounded w-full mb-2" />
      <div className="h-4 bg-gray-100 rounded w-5/6 mb-2" />
      <div className="h-4 bg-gray-100 rounded w-4/6" />
    </div>
  );
}

// ── Dynamic imports ────────────────────────────────────────────────────────
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
};

export const revalidate = 86400;

export async function generateStaticParams() {
  return ARTICLES.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES_MAP[slug];
  if (!article) return { title: 'Article Not Found' };

  const url = `${DOMAIN}/articles/${slug}`;
  const ogImage = ARTICLE_OG_IMAGES[slug]
    ? `${DOMAIN}${ARTICLE_OG_IMAGES[slug]}`
    : `${DOMAIN}/og-image.webp`;

  return {
    title:       article.title,
    description: article.desc,
    keywords:    article.keywords,
    authors:     [{ name: 'Sidhu Singh', url: `${DOMAIN}/about` }],
    alternates:  { canonical: url },
    openGraph: {
      title:         article.ogTitle,
      description:   article.desc,
      type:          'article',
      url,
      siteName:      'KisanStatus.com',
      locale:        'hi_IN',
      images:        [{ url: ogImage, width: 1200, height: 630, alt: article.ogTitle }],
      publishedTime: article.publishedTime ?? '2026-01-01T00:00:00+05:30',
      modifiedTime:  article.modifiedTime  ?? new Date().toISOString(),
      authors:       [`${DOMAIN}/about`],
      section:       'PM Kisan Guide',
    },
    twitter: {
      card:        'summary_large_image',
      title:       article.ogTitle,
      description: article.desc,
      site:        '@kisanstatus',
      images:      [ogImage],
    },
  };
}

// ── Server Component — schemas inject server-side ──────────────────────────
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES_MAP[slug];
  if (!article) notFound();

  const ArticleComponent = COMPONENTS[article.component];
  if (!ArticleComponent) notFound();

  const url = `${DOMAIN}/articles/${slug}`;
  const ogImage = ARTICLE_OG_IMAGES[slug]
    ? `${DOMAIN}${ARTICLE_OG_IMAGES[slug]}`
    : `${DOMAIN}/og-image.webp`;

  const schemas = buildSchemas(article, url, ogImage);

  return (
    <>
      {/* ✅ JSON-LD schemas — server-side render, Google crawls perfectly */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Article UI — dynamic client component */}
      <ArticleComponent article={article} />
    </>
  );
}
