import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { HINDI_ARTICLES, HINDI_ARTICLES_MAP, type HindiArticle } from '@/lib/hindi-articles-data';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/site-config';

const COMPONENTS: Record<string, React.ComponentType<{ article: HindiArticle }>> = {
  PmKisan25viKistKabAayegi: dynamic(() => import('@/components/articles/hindi-yojana/PmKisan25viKistKabAayegi'), { ssr: true }),
  PmKisanStatusCheckMobileNumberSe: dynamic(() => import('@/components/articles/hindi-yojana/PmKisanStatusCheckMobileNumberSe'), { ssr: true }),
  KisanKarjMafiList2027: dynamic(() => import('@/components/articles/hindi-yojana/KisanKarjMafiList2027'), { ssr: true }),
  PmKisanHelplineNumberComplaint: dynamic(() => import('@/components/articles/hindi-yojana/PmKisanHelplineNumberComplaint'), { ssr: true }),
  MukhyamantriKisanKalyanYojanaMp: dynamic(() => import('@/components/articles/hindi-yojana/MukhyamantriKisanKalyanYojanaMp'), { ssr: true }),
  PmKisanNewRegistration2027: dynamic(() => import('@/components/articles/hindi-yojana/PmKisanNewRegistration2027'), { ssr: true }),
  FarmerIdCardKaiseBanaye2027: dynamic(() => import('@/components/articles/hindi-yojana/FarmerIdCardKaiseBanaye2027'), { ssr: true }),
  TractorSubsidy2027StateWiseList: dynamic(() => import('@/components/articles/hindi-yojana/TractorSubsidy2027StateWiseList'), { ssr: true }),
  GehuKaRateAajMspVsMandiBhav: dynamic(() => import('@/components/articles/hindi-yojana/GehuKaRateAajMspVsMandiBhav'), { ssr: true }),
  PmKisanEkycMobileSeKaiseKare: dynamic(() => import('@/components/articles/hindi-yojana/PmKisanEkycMobileSeKaiseKare'), { ssr: true }),
  NpciAadhaarSeedingDbtPayment: dynamic(() => import('@/components/articles/hindi-yojana/NpciAadhaarSeedingDbtPayment'), { ssr: true }),
  PmKisanPaymentStoppedByStateFix: dynamic(() => import('@/components/articles/hindi-yojana/PmKisanPaymentStoppedByStateFix'), { ssr: true }),
  PmKisanRecoveryNoticePaisaWapas: dynamic(() => import('@/components/articles/hindi-yojana/PmKisanRecoveryNoticePaisaWapas'), { ssr: true }),
  KccLimitKaiseBadhaye3Se5Lakh: dynamic(() => import('@/components/articles/hindi-yojana/KccLimitKaiseBadhaye3Se5Lakh'), { ssr: true }),
  NamoShetkariYojanaMaharashtra: dynamic(() => import('@/components/articles/hindi-yojana/NamoShetkariYojanaMaharashtra'), { ssr: true }),
};

export const revalidate = 86400;

export async function generateStaticParams() {
  // Data slugs carry the `hi/` prefix (e.g. 'hi/pm-kisan-25vi-kist'); the
  // route param is just the last segment.
  return HINDI_ARTICLES.map((a) => ({ slug: a.slug.replace(/^hi\//, '') }));
}

// Unknown slugs => real HTTP 404 (same pattern as app/articles/[slug]).
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = HINDI_ARTICLES_MAP[`hi/${slug}`];
  if (!article) notFound();

  const url = `${SITE_URL}/articles/hi/${slug}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: article.titleHi,
    description: article.desc,
    keywords: [...article.keywords],
    alternates: { canonical: url },
    openGraph: {
      title: article.titleHi,
      description: article.desc,
      url,
      siteName: SITE_NAME,
      type: 'article',
      locale: 'hi_IN',
      publishedTime: article.publishedTime,
      modifiedTime: article.modifiedTime,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.titleHi,
      description: article.desc,
    },
  };
}

export default async function HindiArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = HINDI_ARTICLES_MAP[`hi/${slug}`];
  if (!article) notFound();

  const ArticleBody = COMPONENTS[article.component];
  if (!ArticleBody) notFound();

  const url = `${SITE_URL}/articles/hi/${slug}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: article.titleHi,
    description: article.desc,
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime,
    inLanguage: 'hi-IN',
    author: { '@type': 'Organization', name: article.author, url: `${SITE_URL}/about` },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav className="mb-4 text-sm text-gray-500">
        <Link href="/" className="hover:underline">Home</Link>
        {' › '}
        <Link href="/articles" className="hover:underline">Articles</Link>
      </nav>
      <article lang="hi">
        <h1 className="mb-4 text-2xl font-bold leading-snug md:text-3xl">
          {article.titleHi}
        </h1>
        <p className="mb-6 text-sm text-gray-500">
          {article.author} · अपडेटेड: {new Date(article.modifiedTime).toLocaleDateString('hi-IN')}
        </p>
        <div className="prose prose-lg max-w-none">
          <ArticleBody article={article} />
        </div>
      </article>
    </main>
  );
}
