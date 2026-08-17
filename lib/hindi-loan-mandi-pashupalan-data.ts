import { AUTHOR_NAME } from '@/lib/site-config';
import type { HindiArticle } from '@/lib/hindi-articles-data';

// Loan / mandi / pashupalan articles — Hindi (Devanagari) versions.
// Components live in components/articles/hindi-loan-mandi-pashupalan/.
// URL structure unchanged: /articles/hi/<slug> (see lib/hindi-hreflang.ts for mapping).
export const HINDI_LOAN_MANDI_PASHUPALAN_ARTICLES: readonly HindiArticle[] = [
  {
    slug: 'hi/karj-mafi-list',
    titleHi: 'किसान कर्ज माफी लिस्ट 2027 — राज्यवार नाम',
    seoTitleHi: 'कर्ज माफी लिस्ट 2027 — राज्यवार नाम देखें',
    desc: 'किसान कर्ज माफी लिस्ट 2027 में अपना नाम ऐसे चेक करें — UP, MP, महाराष्ट्र, राजस्थान और झारखंड की राज्यवार नई list, पात्रता और आवेदन की पूरी जानकारी यहां।',
    keywords: ['किसान कर्ज माफी लिस्ट 2027', 'karj mafi list', 'kisan karj mafi 2027'],
    category: 'loan',
    publishedTime: '2026-07-29T21:52:43+05:30',
    modifiedTime: '2026-08-01T16:46:46+05:30',
    author: AUTHOR_NAME,
    component: 'KisanKarjMafiList2027',
    ogImage: '/images/articles/hindi-yojna/karj-mafi-list/karj-mafi-hero.webp',
  },
  {
    slug: 'hi/gehu-ka-rate-aaj',
    titleHi: 'गेहूं का रेट आज — MSP vs मंडी भाव तुलना',
    desc: 'गेहूं का आज का रेट और MSP 2027 की राज्यवार तुलना यहां देखें — आपकी मंडी में भाव MSP से ऊपर है या नीचे? Weekly update के साथ बेचने का सही समय भी जानिए।',
    keywords: ['गेहूं का रेट आज', 'gehu ka bhav today', 'गेहूं MSP 2027'],
    category: 'mandi',
    publishedTime: '2026-07-22T07:56:40+05:30',
    modifiedTime: '2026-07-27T14:49:21+05:30',
    author: AUTHOR_NAME,
    component: 'GehuKaRateAajMspVsMandiBhav',
    ogImage: '/images/articles/hindi-yojna/gehu-ka-rate/mandi-wheat.webp',
  },
  {
    slug: 'hi/kcc-limit-kaise-badhaye',
    titleHi: 'KCC लिमिट ₹3 से ₹5 लाख कैसे बढ़ाएं? Renewal का पूरा तरीका',
    seoTitleHi: 'KCC लिमिट ₹3 से ₹5 लाख कैसे बढ़ाएं',
    desc: 'KCC लिमिट अब ₹3 लाख से बढ़कर ₹5 लाख हुई — Kisan Credit Card limit बढ़ाने का आसान तरीका, renewal process और ब्याज सब्सिडी का पूरा फायदा उठाना यहां सीखें।',
    keywords: ['kcc limit kaise badhaye', 'kcc renewal process', 'kcc interest rate'],
    category: 'loan',
    publishedTime: '2026-07-14T10:37:32+05:30',
    modifiedTime: '2026-08-04T21:13:34+05:30',
    author: AUTHOR_NAME,
    component: 'KccLimitKaiseBadhaye3Se5Lakh',
    ogImage: '/images/articles/hindi-yojna/kcc-limit/kcc-card.webp',
  },
  {
    slug: 'hi/gau-mutra-kharid-yojana',
    titleHi: 'गाय के मूत्र की खरीद योजना — बुलंदशहर में 10 रुपये लीटर',
    seoTitleHi: 'गौ मूत्र खरीद योजना UP — 10 रुपये प्रति लीटर',
    desc: 'बुलंदशहर के नरसेना गांव से शुरू योजना — गौमूत्र 10 रूपये प्रति लीटर, FPO संग्रह केंद्र, महिलाओं को 2 रूपये कमीशन, जीवामृत बनाने का नुस्खा और ठगी से बचाव यहां।',
    keywords: [
      'गाय के मूत्र की खरीद योजना',
      'गौ मूत्र 10 रुपये प्रति लीटर',
      'बुलंदशहर पायलट प्रोजेक्ट गौ मूत्र',
      'जीवामूत जैविक कीटनाशक',
      'gau mutra kharid yojana up',
      'narsena gaon fpo sangrah kendra',
    ],
    category: 'pashupalan',
    publishedTime: '2026-08-13T18:30:00+05:30',
    modifiedTime: '2026-08-14T05:45:00+05:30',
    author: AUTHOR_NAME,
    component: 'GauMutraKharidYojanaHindi',
    ogImage: '/images/gau-mutra-yojana-hindi-og.webp',
  },
] as const;
