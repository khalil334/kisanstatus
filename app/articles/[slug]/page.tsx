export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  // ✅ REDIRECT: Purana village wise URL → naya merged article
  if (slug === 'PmKisanBeneficiaryListVillageWise2026') {
    redirect('/articles/PmKisanBeneficiaryList2026');
  }
  
  const article = ARTICLES_MAP[slug];
  if (!article) return { title: 'Article Not Found' };

  const url = `${SITE_URL}/articles/${slug}`;
  const ogImage = article.ogImage ? `${SITE_URL}${article.ogImage}` : DEFAULT_OG_IMAGE;
  const displayTitle = article.ogTitle || article.title;
  const category = CATEGORIES[article.category];

  return {
    title: displayTitle, 
    description: article.desc,
    
    // ✅ FIX: Spread operator (...) use karke readonly array ko mutable array mein convert kiya
    keywords: [...article.keywords], 
    
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    alternates: { 
      canonical: url,
      languages: {
        'hi-IN': url,
        'x-default': url,
      }
    },
    openGraph: {
      title: displayTitle,
      description: article.desc,
      type: 'article',
      url,
      siteName: SITE_NAME,
      locale: 'hi_IN',
      images: [{ url: ogImage, width: 1200, height: 630, alt: displayTitle }],
      publishedTime: article.publishedTime,
      modifiedTime: article.modifiedTime,
      section: category ? category.name : 'Agriculture & Welfare',
    },
    twitter: {
      card: 'summary_large_image',
      title: displayTitle,
      description: article.desc,
      site: TWITTER_HANDLE,
      images: [ogImage],
    },
  };
}