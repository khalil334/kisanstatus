import type { Metadata } from 'next';
import Link from 'next/link';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data';
import { SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'PM Kisan Maandhan Yojana — Complete Guide',
  description:
    'PM Kisan Maandhan Yojana ki poori jaankari Hindi mein — pension scheme eligibility, contribution chart, registration process aur sabhi guides ek jagah.',
  alternates: {
    canonical: `${SITE_URL}/maandhan`,
  },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/maandhan`,
    title: 'PM Kisan Maandhan Yojana — Complete Guide',
    description:
      'PM Kisan Maandhan Yojana ki poori jaankari Hindi mein — pension scheme eligibility, contribution chart, registration process aur sabhi guides ek jagah.',
  },
};

export default function MaandhanListingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">PM Kisan Maandhan Yojana - Complete Guide</h1>
      <div className="grid gap-6">
        {MAANDHAN_ARTICLES.map((article) => (
          <Link 
            key={article.slug} 
            href={`/maandhan/${article.slug}`} 
            className="block p-6 border rounded-lg hover:shadow-lg bg-white"
          >
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-600">{article.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}