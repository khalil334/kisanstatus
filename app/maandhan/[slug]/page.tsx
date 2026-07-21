// app/maandhan/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data';
import { fmtDate } from '@/components/ArticleShared';

// Dynamic imports for all Maandhan articles
import PmKisanMaandhanRegistration2026 from '@/components/articles/maandhan/PmKisanMaandhanRegistration2026';
import PmKisanMaandhanEligibilityDocuments from '@/components/articles/maandhan/PmKisanMaandhanEligibilityDocuments';
import PmKisanMaandhanPensionCalculator from '@/components/articles/maandhan/PmKisanMaandhanPensionCalculator';
import PmKisanMaandhanWithdrawalRefund from '@/components/articles/maandhan/PmKisanMaandhanWithdrawalRefund';

// Generate static params for all 4 articles
export async function generateStaticParams() {
  return MAANDHAN_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

// SEO Metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = MAANDHAN_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Not Found' };

  return {
    title: article.title,
    description: article.description,
  };
}

// Main Page Component
export default function MaandhanArticlePage({ params }: { params: { slug: string } }) {
  const article = MAANDHAN_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // Render correct article based on slug
  switch (params.slug) {
    case 'pm-kisan-maandhan-registration-2026':
      return <PmKisanMaandhanRegistration2026 article={article} />;
    case 'pm-kisan-maandhan-eligibility-documents':
      return <PmKisanMaandhanEligibilityDocuments article={article} />;
    case 'pm-kisan-maandhan-pension-calculator':
      return <PmKisanMaandhanPensionCalculator article={article} />;
    case 'pm-kisan-maandhan-withdrawal-refund-rules':
      return <PmKisanMaandhanWithdrawalRefund article={article} />;
    default:
      notFound();
  }
}