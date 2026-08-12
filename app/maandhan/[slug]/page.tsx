import { notFound } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data';
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

import PmKisanMaandhanRegistration2026 from '@/components/articles/maandhan/PmKisanMaandhanRegistration2026';
import PmKisanMaandhanEligibilityDocuments from '@/components/articles/maandhan/PmKisanMaandhanEligibilityDocuments';
import PmKisanMaandhanPensionCalculator from '@/components/articles/maandhan/PmKisanMaandhanPensionCalculator';
import PmKisanMaandhanWithdrawalRefund from '@/components/articles/maandhan/PmKisanMaandhanWithdrawalRefund';
import PmKisanMaandhanAutoDebitPooraSach from '@/components/articles/maandhan/PmKisanMaandhanAutoDebitPooraSach';
import PmKisanMaandhanStatusCheckOnline from '@/components/articles/maandhan/PmKisanMaandhanStatusCheckOnline';
import KisanPensionCardDownload from '@/components/articles/maandhan/kisan-pension-card-download';
import FamilyPensionRules from '@/components/articles/maandhan/family-pension-rules';
import PmkmyBankAccountChange from '@/components/articles/maandhan/pmkmy-bank-account-change';
import PmkmyGrievanceComplaintHelpline from '@/components/articles/maandhan/pmkmy-grievance-complaint-helpline';
import AutoDebitFailRegularization from '@/components/articles/maandhan/AutoDebitFailRegularization';
import MaandhanContributionGuide from '@/components/articles/maandhan/MaandhanContributionGuide';
import PmkmyVsApyComparison2026 from '@/components/articles/maandhan/PmkmyVsApyComparison2026';

export async function generateStaticParams() {
  return MAANDHAN_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = MAANDHAN_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const url = `${SITE_URL}/maandhan/${slug}`;
  const ogImage = article.ogImage ? `${SITE_URL}${article.ogImage}` : DEFAULT_OG_IMAGE;

  return {
    title: article.title,
    description: article.description,
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    creator: AUTHOR_NAME,
    alternates: {
      canonical: url,
      languages: {
        'hi-IN': url,
        'x-default': url,
      },
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      url,
      siteName: SITE_NAME,
      locale: 'hi_IN',
      images: [{
        url: ogImage,
        width: 1200,
        height: 630,
        alt: article.title,
        type: 'image/webp',
      }],
    },
  };
}

export default async function MaandhanArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = MAANDHAN_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const COMPONENTS: Record<string, React.ComponentType<{ article: typeof article }>> = {
    'pm-kisan-maandhan-registration-2026': PmKisanMaandhanRegistration2026,
    'pm-kisan-maandhan-eligibility-documents': PmKisanMaandhanEligibilityDocuments,
    'pm-kisan-maandhan-pension-calculator': PmKisanMaandhanPensionCalculator,
    'pm-kisan-maandhan-withdrawal-refund-rules': PmKisanMaandhanWithdrawalRefund,
    'pm-kisan-maandhan-auto-debit-poora-sach': PmKisanMaandhanAutoDebitPooraSach,
    'pm-kisan-maandhan-status-check-online': PmKisanMaandhanStatusCheckOnline,
    'pm-kisan-maandhan-pension-card-download': KisanPensionCardDownload,
    'family-pension-rules': FamilyPensionRules,
    'pmkmy-bank-account-change': PmkmyBankAccountChange,
    'pmkmy-grievance-complaint-helpline': PmkmyGrievanceComplaintHelpline,
    'auto-debit-fail-hone-par-regularization-kaise-karein': AutoDebitFailRegularization,
    'pm-kisan-maandhan-age-wise-contribution-chart-2026': MaandhanContributionGuide,
    'pm-kisan-maandhan-vs-atal-pension-yojana': PmkmyVsApyComparison2026,
  };

  const ArticleComponent = COMPONENTS[slug];
  if (!ArticleComponent) notFound();

  const idx = MAANDHAN_ARTICLES.findIndex((a) => a.slug === slug);
  const siblings = MAANDHAN_ARTICLES.filter((a) => a.slug !== slug);
  const related = Array.from({ length: Math.min(6, siblings.length) }, (_, i) => siblings[(idx + i) % siblings.length]);

  const url = `${SITE_URL}/maandhan/${slug}`;
  const ogImage = article.ogImage ? `${SITE_URL}${article.ogImage}` : DEFAULT_OG_IMAGE;
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Maandhan Yojana', item: `${SITE_URL}/maandhan` },
      { '@type': 'ListItem', position: 3, name: article.title, item: url },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.description,
    image: {
      '@type': 'ImageObject',
      url: ogImage,
      width: 1200,
      height: 630,
      caption: article.title,
    },
    datePublished: article.published,
    dateModified: article.modified || article.published,
    inLanguage: 'hi-IN',
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}#founder`,
      name: AUTHOR_NAME,
      url: AUTHOR_URL,
      description: AUTHOR_BIO,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
        width: LOGO_WIDTH,
        height: LOGO_HEIGHT,
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    breadcrumb: { '@id': `${url}#breadcrumb` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ArticleComponent article={article} />
      <section aria-label="Related maandhan articles" className="container-site max-w-3xl mx-auto px-4 pb-10">
        <div className="mt-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
          <h2 className="font-black text-[var(--color-text)] mb-4 text-base flex items-center gap-2">
            Related Articles — Yeh Bhi Padho
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {related.map((a) => (
              <Link
                key={a.slug}
                href={`/maandhan/${a.slug}`}
                className="flex items-center gap-3 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors text-sm font-medium text-[var(--color-text)] no-underline"
              >
                <span>{a.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
