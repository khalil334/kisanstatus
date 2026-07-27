import { notFound } from 'next/navigation';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/site-config';

import PmKisanMaandhanRegistration2026 from '@/components/articles/maandhan/PmKisanMaandhanRegistration2026';
import PmKisanMaandhanEligibilityDocuments from '@/components/articles/maandhan/PmKisanMaandhanEligibilityDocuments';
import PmKisanMaandhanPensionCalculator from '@/components/articles/maandhan/PmKisanMaandhanPensionCalculator';
import PmKisanMaandhanWithdrawalRefund from '@/components/articles/maandhan/PmKisanMaandhanWithdrawalRefund';
import PmKisanMaandhanAutoDebitPooraSach from '@/components/articles/maandhan/PmKisanMaandhanAutoDebitPooraSach';
import PmKisanMaandhanStatusCheckOnline from '@/components/articles/maandhan/PmKisanMaandhanStatusCheckOnline';

// 7 naye articles
import FamilyPensionRules from '@/components/articles/maandhan/family-pension-rules';
import BankAccountChange from '@/components/articles/maandhan/bank-account-change';
import KisanPensionCardDownload from '@/components/articles/maandhan/kisan-pension-card-download';
import GrievanceComplaintHelpline from '@/components/articles/maandhan/grievance-complaint-helpline';
import ContributionChartAgeWise2026 from '@/components/articles/maandhan/contribution-chart-age-wise-2026';
import AutoDebitFailRegularization from '@/components/articles/maandhan/auto-debit-fail-regularization';
import VsAtalPensionYojana from '@/components/articles/maandhan/vs-atal-pension-yojana';

export async function generateStaticParams() {
  return MAANDHAN_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = MAANDHAN_ARTICLES.find((a) => a.slug === slug);
  
  if (!article) return { title: 'Not Found' };

  const url = `${SITE_URL}/maandhan/${slug}`;
  const ogImage = article.ogImage ? `${SITE_URL}${article.ogImage}` : DEFAULT_OG_IMAGE;

  return {
    title: article.title,
    description: article.description,
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

  switch (slug) {
    case 'pm-kisan-maandhan-registration-2026':
      return <PmKisanMaandhanRegistration2026 article={article} />;
    case 'pm-kisan-maandhan-eligibility-documents':
      return <PmKisanMaandhanEligibilityDocuments article={article} />;
    case 'pm-kisan-maandhan-pension-calculator':
      return <PmKisanMaandhanPensionCalculator article={article} />;
    case 'pm-kisan-maandhan-withdrawal-refund-rules':
      return <PmKisanMaandhanWithdrawalRefund article={article} />;
    case 'pm-kisan-maandhan-auto-debit-poora-sach':
      return <PmKisanMaandhanAutoDebitPooraSach article={article} />;
    case 'pm-kisan-maandhan-status-check-online':
      return <PmKisanMaandhanStatusCheckOnline article={article} />;

    // 7 naye articles
    case 'family-pension-rules':
      return <FamilyPensionRules article={article} />;
    case 'bank-account-change':
      return <BankAccountChange article={article} />;
    case 'kisan-pension-card-download':
      return <KisanPensionCardDownload article={article} />;
    case 'grievance-complaint-helpline':
      return <GrievanceComplaintHelpline article={article} />;
    case 'contribution-chart-age-wise-2026':
      return <ContributionChartAgeWise2026 article={article} />;
    case 'auto-debit-fail-regularization':
      return <AutoDebitFailRegularization article={article} />;
    case 'vs-atal-pension-yojana':
      return <VsAtalPensionYojana article={article} />;

    default:
      notFound();
  }
}