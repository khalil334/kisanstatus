import Link from 'next/link';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data';

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