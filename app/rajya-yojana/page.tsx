import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LIVE_RAJYA_YOJANA_ARTICLES } from '@/lib/rajya-yojana-data';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/site-config';

const TITLE = 'Rajya Kisan Yojana — State Schemes Guide';
const DESCRIPTION =
  'Har rajya ki kisan yojana ek jagah — status check, eligibility aur official portal links. PM Kisan ke saath state ka paisa kaise milta hai.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/rajya-yojana`,
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/rajya-yojana`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RajyaYojanaListingPage() {
  if (LIVE_RAJYA_YOJANA_ARTICLES.length === 0) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Rajya Kisan Yojana — State Schemes</h1>
      <p className="text-gray-600 mb-6">{DESCRIPTION}</p>
      <div className="grid gap-6">
        {LIVE_RAJYA_YOJANA_ARTICLES.map((article) => (
          <Link
            key={article.slug}
            href={`/rajya-yojana/${article.slug}`}
            className="block p-6 border rounded-lg hover:shadow-lg bg-white"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              {article.state}
            </span>
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-600">{article.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
