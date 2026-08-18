import { AUTHOR_NAME } from '@/lib/site-config';
import type { HindiArticle } from '@/lib/hindi-articles-data';

// Hindi (Devanagari) versions of the new 2026 yojana articles
// (SEO-KEYWORDS-RANK1-PLAN.md). Components live in
// components/articles/hindi-yojana-2026/. URLs: /articles/hi/<slug>.
export const HINDI_YOJANA_2026_ARTICLES: readonly HindiArticle[] = [
  {
    slug: 'hi/fasal-bima-claim-status',
    titleHi: 'फसल बीमा क्लेम स्टेटस — पैसा कब और कैसे मिलेगा',
    seoTitleHi: 'फसल बीमा क्लेम स्टेटस — पैसा कब मिलेगा',
    desc: 'PMFBY क्लेम अटका है? pmfby.gov.in पर status check का तरीका, 72 घंटे का नियम, claim reject होने के असली कारण और 14447 से शिकायत तक — पूरा रास्ता यहां।',
    keywords: [
      'फसल बीमा क्लेम स्टेटस',
      'fasal bima claim status',
      'फसल बीमा का पैसा कब आएगा',
      'pmfby claim status check',
      'फसल बीमा क्लेम रिजेक्ट',
      'फसल बीमा शिकायत नंबर 14447',
      'pmfby 72 hours rule hindi',
      'फसल बीमा क्लेम कितने दिन में आता है',
    ],
    category: 'farming',
    publishedTime: '2026-08-18T07:49:14+05:30',
    modifiedTime: '2026-08-18T07:49:14+05:30',
    author: AUTHOR_NAME,
    component: 'FasalBimaClaimStatusHindi',
    ogImage: '/og-image.webp',
  },
  {
    slug: 'hi/kisan-karj-mafi-list',
    titleHi: 'किसान कर्ज माफी 2026 — किस राज्य में सच में चल रही है',
    seoTitleHi: 'किसान कर्ज माफी 2026 — किस राज्य में चालू',
    desc: 'कोई राष्ट्रीय कर्ज माफी योजना नहीं है। महाराष्ट्र, तेलंगाना, UP और तमिलनाडु की असली स्थिति, official पोर्टल, फर्जी लिस्ट वाली साइटों का pattern और OTS जैसे 4 असली रास्ते।',
    keywords: [
      'किसान कर्ज माफी 2026',
      'कर्ज माफी लिस्ट कैसे देखें',
      'kisan karj mafi 2026 list',
      'महाराष्ट्र कर्जमाफी योजना 2026',
      'किसान ऋण मोचन योजना',
      'तेलंगाना रुणा माफी स्टेटस',
      'कर्ज माफी सच या झूठ',
      'KCC लोन माफ कैसे होता है',
    ],
    category: 'farming',
    publishedTime: '2026-08-18T07:42:14+05:30',
    modifiedTime: '2026-08-18T07:42:14+05:30',
    author: AUTHOR_NAME,
    component: 'KisanKarjMafiAllStatesHindi',
    ogImage: '/og-image.webp',
  },
];
