import { AUTHOR_NAME } from '@/lib/site-config';
import type { HindiArticle } from '@/lib/hindi-articles-data';

// Kisan guides (subsidy / training schemes) — Hindi (Devanagari) versions.
// Components live in components/articles/hindi-kisanguides/.
// URL structure unchanged: /articles/hi/<slug> (see lib/hindi-hreflang.ts for mapping).
export const HINDI_KISANGUIDES_ARTICLES: readonly HindiArticle[] = [
  {
    slug: 'hi/tractor-subsidy',
    titleHi: 'ट्रैक्टर सब्सिडी 2027 — किस राज्य में कितनी छूट? पूरी लिस्ट',
    seoTitleHi: 'ट्रैक्टर सब्सिडी 2027 — राज्यवार लिस्ट',
    desc: 'ट्रैक्टर सब्सिडी 2027 में 50% तक छूट पाएं — UP, बिहार, MP, राजस्थान और हरियाणा की राज्यवार subsidy list, पात्रता शर्तें और online आवेदन का पूरा तरीका जानिए।',
    keywords: ['ट्रैक्टर सब्सिडी 2027', 'tractor subsidy state wise'],
    category: 'agri-business',
    publishedTime: '2026-03-31T08:31:21+05:30',
    modifiedTime: '2026-04-14T19:32:34+05:30',
    author: AUTHOR_NAME,
    component: 'TractorSubsidy2027StateWiseList',
    ogImage: '/images/articles/hindi-yojna/tractor-subsidy/tractor-kisan-khet.webp',
  },
  {
    slug: 'hi/namo-drone-didi-yojana',
    titleHi: 'नमो ड्रोन दीदी योजना — कोई form नहीं, रास्ता SHG से जाता है',
    seoTitleHi: 'नमो ड्रोन दीदी योजना — SHG चयन और ₹8 लाख की मदद',
    desc: 'नमो ड्रोन दीदी में online form नहीं है — चयन SHG से होता है। 80% subsidy (₹8 लाख तक), 15 दिन की training और कमाई का सच्चा हिसाब — पूरा रास्ता यहां पढ़िए।',
    keywords: [
      'नमो ड्रोन दीदी योजना',
      'namo drone didi yojana in hindi',
      'ड्रोन दीदी योजना form',
      'ड्रोन दीदी कैसे बने',
      'महिला स्वयं सहायता समूह ड्रोन',
      'drone didi training kitne din ki hai',
      'ड्रोन से spray का rate per acre',
      'namo drone didi subsidy 8 lakh',
    ],
    category: 'agri-business',
    publishedTime: '2026-08-15T20:30:00+05:30',
    modifiedTime: '2026-08-16T09:00:00+05:30',
    author: AUTHOR_NAME,
    component: 'NamoDroneDidiYojanaHindi',
    ogImage: '/images/articles/namo-drone-didi-yojana-shg-selection/drone-didi-spray-hero.webp',
  },
] as const;
