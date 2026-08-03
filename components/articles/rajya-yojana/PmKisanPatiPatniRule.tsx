import Link from 'next/link';
import type { RajyaYojanaArticleMeta } from '@/lib/rajya-yojana-data';

/**
 * STUB — short placeholder body. Expand with verified figures, dates and
 * screenshots from the official portal before treating this as final content.
 */
export default function PmKisanPatiPatniRule({ article }: { article: RajyaYojanaArticleMeta }) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{article.title}</h1>

      <p>PM Kisan mein pati-patni dono ko paisa milta hai ya nahi — poori detail jald.</p>

      <p>
        Status check ka tareeka, eligibility aur kist ki jaankari is page par
        update ki jaayegi.
      </p>

      {article.officialPortal && (
        <p>
          Official portal:{' '}
          <a href={article.officialPortal} rel="nofollow noopener" target="_blank">
            {article.officialPortal.replace('https://', '')}
          </a>
        </p>
      )}

      <p>
        <Link href="/rajya-yojana">← Sabhi rajya ki kisan yojana</Link>
      </p>
    </article>
  );
}
