// Fix: OpenGraph se authors line remove karo
openGraph: {
  title: displayTitle,
  description: article.desc,
  type: 'article',
  url,
  siteName: 'KisanStatus',
  locale: 'hi_IN',
  images: [{ url: ogImage, width: 1200, height: 630, alt: displayTitle }],
  publishedTime: article.publishedTime,
  modifiedTime: article.modifiedTime,
  // ❌ authors: [`${DOMAIN}/about`],  // Remove this line
  section: 'PM Kisan Guide',
},