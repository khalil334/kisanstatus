import Link from 'next/link';
import Image from 'next/image';
import type { RajyaYojanaArticleMeta } from '@/lib/rajya-yojana-data';

const IMG_BASE = '/images/articles/rajya-yojna/pm-kisan-pati-patni-dono-ko-milega';

function Fig({
  src,
  alt,
  caption,
  width = 1200,
  height = 675,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <figure className="my-8 not-prose rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
      <Image
        src={`${IMG_BASE}/${src}`}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-cover"
        sizes="(max-width: 768px) 100vw, 768px"
        priority={priority}
      />
      <figcaption className="text-center text-xs text-gray-600 dark:text-gray-400 py-2 px-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        {caption}
      </figcaption>
    </figure>
  );
}

/**
 * STUB — short placeholder body. Expand with verified figures, dates and
 * screenshots from the official portal before treating this as final content.
 */
export default function PmKisanPatiPatniRule({ article }: { article: RajyaYojanaArticleMeta }) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{article.title}</h1>

      <Fig
        src="hero.webp"
        alt="Buzurg kisan pati-patni apne ghar ke bahar ID card aur bank passbook ke saath baithe hain"
        caption="PM Kisan ka family rule — ek parivar mein kis-kis ko paisa milta hai"
        priority
      />

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
