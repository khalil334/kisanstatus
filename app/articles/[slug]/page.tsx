/**
 * app/articles/[slug]/page.tsx
 * Dynamic route — serves ALL 16 articles
 * Content lives in components/articles/*.tsx
 * Metadata lives in lib/articles-data.ts
 */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { ARTICLES_MAP, ARTICLES, type ArticleMeta } from '@/lib/articles-data';

const DOMAIN = 'https://kisanstatus.com';

// ── Dynamic imports ────────────────────────────────────────────────────────
const COMPONENTS: Record<string, React.ComponentType<{ article: ArticleMeta }>> = {
  KisanRinKahaSeLe2026:                      dynamic(() => import('@/components/articles/KisanRinKahaSeLe2026')),
  KisanTractorLoan2026:                       dynamic(() => import('@/components/articles/KisanTractorLoan2026')),
  PmKisan21viInstallmentStatusCheck:          dynamic(() => import('@/components/articles/PmKisan21viInstallmentStatusCheck')),
  PmKisan23viKistStatusCheck2026:             dynamic(() => import('@/components/articles/PmKisan23viKistStatusCheck2026')),
  PmKisanBeneficiaryList2026:                 dynamic(() => import('@/components/articles/PmKisanBeneficiaryList2026')),
  PmKisanBeneficiaryListVillageWise2026:      dynamic(() => import('@/components/articles/PmKisanBeneficiaryListVillageWise2026')),
  PmKisanCorrectionDeactivateBlockGuide2026:  dynamic(() => import('@/components/articles/PmKisanCorrectionDeactivateBlockGuide2026')),
  PmKisanEkycOnline2026:                      dynamic(() => import('@/components/articles/PmKisanEkycOnline2026')),
  PmKisanInstallmentHistoryCheckOnline:       dynamic(() => import('@/components/articles/PmKisanInstallmentHistoryCheckOnline')),
  PmKisanLandSeedingStatusCheck:              dynamic(() => import('@/components/articles/PmKisanLandSeedingStatusCheck')),
  PmKisanNameCorrectionOnline2026:            dynamic(() => import('@/components/articles/PmKisanNameCorrectionOnline2026')),
  PmKisanPaymentFailedStatus2026:             dynamic(() => import('@/components/articles/PmKisanPaymentFailedStatus2026')),
  PmKisanProblemsSolutionGuide2026:           dynamic(() => import('@/components/articles/PmKisanProblemsSolutionGuide2026')),
  PmKisanRegistrationOnline2026:              dynamic(() => import('@/components/articles/PmKisanRegistrationOnline2026')),
  PmKisanRejectedList2026:                    dynamic(() => import('@/components/articles/PmKisanRejectedList2026')),
  PmfbyCropInsurance2026:                     dynamic(() => import('@/components/articles/PmfbyCropInsurance2026')),
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
  return {
    title:       article.title,
    description: article.desc,
    keywords:    article.keywords,
    authors:     [{ name: 'Sidhu Singh', url: `${DOMAIN}/about` }],
    alternates:  { canonical: url },
    openGraph: {
      title: article.ogTitle,
      description: article.desc,
      type: 'article',
      url,
      siteName: 'KisanStatus.com',
      locale: 'hi_IN',
      images: [{ url: `${DOMAIN}/og-image.jpg`, width: 1200, height: 630, alt: article.ogTitle }],
      publishedTime: article.publishedTime ?? '2026-01-01T00:00:00+05:30',
      modifiedTime: article.modifiedTime ?? new Date().toISOString(),
      authors: [`${DOMAIN}/about`],
      section: 'PM Kisan Guide',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.ogTitle,
      description: article.desc,
      site: '@KisanStatus',
      images: [`${DOMAIN}/og-image.jpg`],
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
  if (!ArticleComponent) notFound();
  return <ArticleComponent article={article} />;
}