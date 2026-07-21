// app/maandhan/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data';
import { fmtDate } from '@/components/ArticleShared'; 

// Ye function Next.js ko batata hai ki kaunse pages pehle se banane hain (SEO ke liye zaroori)
export async function generateStaticParams() {
  return MAANDHAN_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

// Ye function page ka Title aur Description set karta hai (SEO Metadata)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = MAANDHAN_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Not Found' };

  return {
    title: article.title,
    description: article.description,
  };
}

// Yahan hum slug ke hisaab se sahi article component render karenge
export default function MaandhanArticlePage({ params }: { params: { slug: string } }) {
  const article = MAANDHAN_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound(); // Agar slug match nahi karta to 404 page dikhayega
  }

  return (
    <div className="container-site max-w-3xl py-12">
      <h1 className="text-3xl font-black mb-4">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-8">
        Published: {fmtDate(article.published)} | Read Time: {article.readTime}
      </p>
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl text-center">
        <p className="text-lg font-bold">Article Content Loading...</p>
        <p className="text-sm text-gray-500 mt-2">(Bhai, bas mujhe bolo "next", main Article 1 ka poora 2000+ words ka code yahan laga dunga!)</p>
      </div>
    </div>
  );
}