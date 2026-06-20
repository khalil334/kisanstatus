/**
 * Dynamic Sitemap — KisanStatus.com
 * Generated at build time by Next.js
 */
import { MetadataRoute } from 'next';

const BASE_URL = 'https://kisanstatus.com';

const STATES = [
  'andhra-pradesh','arunachal-pradesh','assam','bihar','chhattisgarh','goa',
  'gujarat','haryana','himachal-pradesh','jharkhand','karnataka','kerala',
  'madhya-pradesh','maharashtra','manipur','meghalaya','mizoram','nagaland',
  'odisha','punjab','rajasthan','sikkim','tamil-nadu','telangana','tripura',
  'uttar-pradesh','uttarakhand','west-bengal','delhi','jammu-kashmir',
  'ladakh','puducherry','andaman-nicobar','chandigarh','dadra-nagar-haveli','lakshadweep',
];

// Use real last-modified dates — do NOT use new Date() for static pages
// Google ignores lastModified if it always changes on every build
const STATIC_DATE = new Date('2026-06-10');
const ARTICLE_DATE = new Date('2026-06-10');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                                       lastModified: STATIC_DATE, changeFrequency: 'daily',   priority: 1.0  },
    { url: `${BASE_URL}/calculator`,                              lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.8  },
    { url: `${BASE_URL}/calculator/pm-kisan-benefit`,             lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.8  },
    { url: `${BASE_URL}/calculator/kcc-loan-emi`,                 lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.8  },
    { url: `${BASE_URL}/calculator/pmfby-premium`,                lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.8  },
    { url: `${BASE_URL}/calculator/msp-income`,                   lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.8  },
    { url: `${BASE_URL}/calculator/crop-profit`,                  lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.8  },
    { url: `${BASE_URL}/pm-kisan-status`,                  lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.9  },
    { url: `${BASE_URL}/new-registration`,                 lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.9  },
    { url: `${BASE_URL}/search`,                           lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.7  },
    { url: `${BASE_URL}/privacy-policy`,                   lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.4  },
    { url: `${BASE_URL}/disclaimer`,                       lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.4  },
    { url: `${BASE_URL}/about`,                            lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.6  },
    { url: `${BASE_URL}/articles/pm-kisan-installment-history-check-online`,     lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.9  },
    { url: `${BASE_URL}/articles/pm-kisan-land-seeding-status-check`,              lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.9  },
    { url: `${BASE_URL}/articles/pm-kisan-beneficiary-list-village-wise-2026`,     lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.9  },
    { url: `${BASE_URL}/articles/kisan-rin-kaha-se-le-2026`,                       lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${BASE_URL}/articles/pmfby-crop-insurance-2026`,                       lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${BASE_URL}/articles/kisan-tractor-loan-2026`,                         lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${BASE_URL}/articles/pm-kisan-ekyc-online-2026`,                          lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.9  },
    { url: `${BASE_URL}/articles/pm-kisan-payment-failed-status-2026`,               lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.9  },
    { url: `${BASE_URL}/articles/pm-kisan-rejected-list-2026`,                       lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.9  },
    { url: `${BASE_URL}/articles/pm-kisan-beneficiary-list-2026`,                    lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.9  },
    { url: `${BASE_URL}/articles/pm-kisan-name-correction-online-2026`,              lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.9  },
    { url: `${BASE_URL}/articles/pm-kisan-registration-online-2026`,                 lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.9  },
    { url: `${BASE_URL}/articles/pm-kisan-21vi-installment-status-check`,           lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.9  },
    { url: `${BASE_URL}/articles/pm-kisan-correction-deactivate-block-guide-2026`,  lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.9  },
    { url: `${BASE_URL}/articles/pm-kisan-problems-solution-guide-2026`,            lastModified: STATIC_DATE, changeFrequency: 'weekly',  priority: 0.9  },
    { url: `${BASE_URL}/contact`,                          lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.5  },
    { url: `${BASE_URL}/author`,                           lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.6  },
    { url: `${BASE_URL}/official-links`,                   lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.7  },
    { url: `${BASE_URL}/terms-of-service`,                 lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.4  },
  ];

  const statePages: MetadataRoute.Sitemap = STATES.map((slug) => ({
    url:              `${BASE_URL}/beneficiary-list/${slug}`,
    lastModified:     new Date(),
    changeFrequency:  'weekly' as const,
    priority:         0.8,
  }));

  return [...staticPages, ...statePages];
}
