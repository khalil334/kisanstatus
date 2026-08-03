import { ARTICLES } from '@/lib/articles-data';
import { MAANDHAN_ARTICLES } from '@/lib/maandhan-data';
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  AUTHOR_NAME,
  SUPPORT_EMAIL,
  LOGO_URL,
  RSS_URL,
} from '@/lib/site-config';

// Revalidate once a day — article metadata only changes on deploy.
export const revalidate = 86400;

type FeedItem = {
  title: string;
  description: string;
  path: string;
  category: string;
  published: string;
  modified: string;
  image?: string;
};

/**
 * Both data files describe articles with DIFFERENT field names:
 *   lib/articles-data.ts  -> desc / publishedTime / modifiedTime / ogImage
 *   lib/maandhan-data.ts  -> description / published / modified / image+ogImage
 * Normalise to one shape, exactly like app/sitemap.ts does.
 */
const FEED_ITEMS: FeedItem[] = [
  ...ARTICLES.map((a) => ({
    title: a.title,
    description: a.desc,
    path: `/articles/${a.slug}`,
    category: a.category,
    published: a.publishedTime,
    modified: a.modifiedTime || a.publishedTime,
    image: a.ogImage,
  })),
  ...MAANDHAN_ARTICLES.map((a) => ({
    title: a.title,
    description: a.description,
    path: `/maandhan/${a.slug}`,
    category: a.category,
    published: a.published,
    modified: a.modified || a.published,
    image: a.ogImage || a.image,
  })),
].sort(
  (a, b) => new Date(b.modified).getTime() - new Date(a.modified).getTime()
);

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRfc822(value: string): string {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? new Date().toUTCString()
    : date.toUTCString();
}

export async function GET(): Promise<Response> {
  const lastBuildDate = FEED_ITEMS.length
    ? toRfc822(FEED_ITEMS[0].modified)
    : new Date().toUTCString();

  const items = FEED_ITEMS.map((item) => {
    const link = `${SITE_URL}${item.path}`;
    const enclosure = item.image
      ? `\n      <enclosure url="${escapeXml(`${SITE_URL}${item.image}`)}" type="${
          item.image.endsWith('.webp') ? 'image/webp' : 'image/jpeg'
        }" length="0"/>`
      : '';

    return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <description>${escapeXml(item.description)}</description>
      <category>${escapeXml(item.category)}</category>
      <pubDate>${toRfc822(item.published)}</pubDate>
      <dc:creator>${escapeXml(AUTHOR_NAME)}</dc:creator>${enclosure}
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(`${SITE_NAME} — ${SITE_TAGLINE}`)}</title>
    <link>${escapeXml(SITE_URL)}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>hi-IN</language>
    <copyright>${escapeXml(SITE_NAME)}</copyright>
    <managingEditor>${escapeXml(`${SUPPORT_EMAIL} (${AUTHOR_NAME})`)}</managingEditor>
    <webMaster>${escapeXml(`${SUPPORT_EMAIL} (${AUTHOR_NAME})`)}</webMaster>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>Next.js</generator>
    <atom:link href="${escapeXml(RSS_URL)}" rel="self" type="application/rss+xml"/>
    <image>
      <url>${escapeXml(LOGO_URL)}</url>
      <title>${escapeXml(SITE_NAME)}</title>
      <link>${escapeXml(SITE_URL)}</link>
    </image>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
      'X-Robots-Tag': 'noindex, follow',
    },
  });
}
