import Link from 'next/link';
import { IB, AuthorBox, BottomNav, Disclaimer, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { CATEGORIES } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

export default function ArticleStub({ article }: { article: ArticleMeta }) {
  const category = CATEGORIES[article.category];

  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">{article.title}</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            {article.title}
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(article.publishedTime)}</span>
            <span>Updated: {fmtDate(article.modifiedTime)}</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          {article.desc}
        </p>

        <IB>
          Yeh guide abhi update ho rahi hai — puri step-by-step jankari, tables aur FAQ jald hi
          yahan milenge. Tab tak {category ? (
            <Link href={`/articles/category/${article.category}`} className="underline font-bold">
              {category.name}
            </Link>
          ) : (
            <Link href="/articles" className="underline font-bold">Articles</Link>
          )}{' '}
          ke baaki articles dekh sakte hain.
        </IB>

        <AuthorBox modified={article.modifiedTime} bioKey={article.slug} />
        <BottomNav extraLinks={[
          { href: '/articles', l: 'Sabhi Articles' },
          { href: `/articles/category/${article.category}`, l: `${category?.name ?? 'Category'}` },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
