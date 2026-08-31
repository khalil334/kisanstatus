import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getHindiArticlesByCategory, HINDI_ARTICLES } from '@/lib/hindi-articles-data';
import { CATEGORIES, type CategorySlug } from '@/lib/categories';
import {
  SITE_URL,
  SITE_NAME,
  AUTHOR_NAME,
  AUTHOR_URL,
  DEFAULT_OG_IMAGE,
  LOGO_URL,
  LOGO_WIDTH,
  LOGO_HEIGHT,
} from '@/lib/site-config';

function CategoryIntroHi({ category }: { category: CategorySlug }) {
  if (category === 'status-check') {
    return (
      <section className="max-w-3xl mb-12">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          किस्त अटकी है? पहले वजह पहचानिए
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          स्टेटस चेक करने वाले ज्यादातर किसान एक ही सवाल लेकर आते हैं पैसा क्यों नहीं आया।
          जवाब हर बार अलग होता है, इसलिए गाइड भी अलग-अलग हैं:
        </p>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-3">
          <li>
            <strong>किस्त की तारीख जाननी है:</strong>{' '}
            <Link href="/articles/hi/pm-kisan-25vi-kist" className="text-amber-800 dark:text-amber-300 underline font-semibold">25वीं किस्त कब आएगी</Link>{' '}
            वाली गाइड में लेटेस्ट अपडेट है।
          </li>
          <li>
            <strong>eKYC पेंडिंग दिख रहा है:</strong> सबसे आम रुकावट यही है —{' '}
            <Link href="/articles/hi/ekyc-mobile-se" className="text-amber-800 dark:text-amber-300 underline font-semibold">मोबाइल से eKYC</Link>{' '}
            OTP या Face Auth दोनों तरीकों से हो जाती है।
          </li>
          <li>
            <strong>eKYC हो चुकी, फिर भी पैसा नहीं:</strong> अक्सर बैंक खाता आधार से DBT के लिए लिंक नहीं होता —{' '}
            <Link href="/articles/hi/npci-aadhaar-seeding" className="text-amber-800 dark:text-amber-300 underline font-semibold">NPCI आधार सीडिंग</Link>{' '}
            की गाइड देखिए।
          </li>
          <li>
            <strong>स्टेटस में अजीब मैसेज:</strong>{' '}
            <Link href="/articles/hi/payment-stopped-by-state" className="text-amber-800 dark:text-amber-300 underline font-semibold">Payment Stopped by State</Link>{' '}
            और{' '}
            <Link href="/articles/hi/recovery-notice" className="text-amber-800 dark:text-amber-300 underline font-semibold">Recovery Notice</Link>{' '}
            — दोनों का मतलब और इलाज अलग है।
          </li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          सिर्फ PM Kisan ही नहीं राज्य योजनाओं (रायथु भरोसा, कृषक बंधु, अन्नदाता सुखीभव,
          ओडिशा CM Kisan) के स्टेटस की गाइड भी नीचे मिलेंगी। किस राज्य में कितना पैसा मिलता है,
          इसकी तुलना{' '}
          <Link href="/articles/hi/state-kisan-yojana-list" className="text-amber-800 dark:text-amber-300 underline">राज्य किसान योजना लिस्ट</Link>{' '}
          में एक जगह है।
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          कहीं भी बात न बने तो PM Kisan की सरकारी हेल्पलाइन <strong>155261</strong> है — शिकायत
          कैसे दर्ज करें, ये{' '}
          <Link href="/articles/hi/pm-kisan-helpline-155261" className="text-amber-800 dark:text-amber-300 underline">हेल्पलाइन गाइड</Link>{' '}
          में बताया है।
        </p>
      </section>
    );
  }

  if (category === 'loan') {
    return (
      <section className="max-w-3xl mb-12">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          KCC पहले से है तो अगला कदम लिमिट बढ़ाना है
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          किसान क्रेडिट कार्ड बन जाना आधा काम है। असली फायदा तब है जब लिमिट आपकी खेती के
          खर्च के हिसाब से हो और renewal समय पर होता रहे — वरना ब्याज छूट (interest subvention)
          हाथ से निकल जाती है।{' '}
          <Link href="/articles/hi/kcc-limit-kaise-badhaye" className="text-amber-800 dark:text-amber-300 underline font-semibold">KCC लिमिट ₹3 से ₹5 लाख कैसे बढ़ाएं</Link>{' '}
          वाली गाइड में renewal का पूरा तरीका है कौन से कागज लगेंगे और बैंक किस आधार पर
          लिमिट तय करता है।
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          अभी KCC बना ही नहीं है? आवेदन की step-by-step गाइड{' '}
          <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-amber-800 dark:text-amber-300 underline">KCC online apply</Link>{' '}
          में है। ट्रैक्टर या मशीनरी के लिए लोन अलग रास्ता है — वो{' '}
          <Link href="/articles/KisanTractorLoan2026" className="text-amber-800 dark:text-amber-300 underline">ट्रैक्टर लोन गाइड</Link>{' '}
          में समझाया है। और अगर उलझन ये है कि कर्ज लें तो कहां से बैंक, सहकारी समिति या
          Jansamarth पोर्टल — तो पहले{' '}
          <Link href="/articles/KisanRinKahaSeLe2026" className="text-amber-800 dark:text-amber-300 underline">किसान ऋण कहां से लें</Link>{' '}
          वाली तुलना पढ़ लीजिए।
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          कर्ज माफी की खबरों पर भरोसा करने से पहले{' '}
          <Link href="/articles/hi/kisan-karj-mafi-list" className="text-amber-800 dark:text-amber-300 underline">कर्ज माफी की असलियत</Link>{' '}
          देख लें हर वायरल लिस्ट सच नहीं होती।
        </p>
      </section>
    );
  }

  if (category === 'farming') {
    return (
      <section className="max-w-3xl mb-12">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          खेती की योजनाएं — केंद्र की एक, राज्यों की अपनी-अपनी
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          PM Kisan के ₹6,000 सालाना के ऊपर कई राज्य अपनी रकम अलग से देते हैं MP और महाराष्ट्र
          (नमो शेतकरी) में ₹12,000 तक सालाना, राजस्थान में ₹9,000। आपके राज्य में क्या चल रहा है,
          ये नीचे की गाइड्स में राज्य-वार देखिए:{' '}
          <Link href="/articles/hi/mp-kisan-kalyan-yojana" className="text-amber-800 dark:text-amber-300 underline">MP किसान कल्याण</Link>,{' '}
          <Link href="/articles/hi/namo-shetkari-yojana" className="text-amber-800 dark:text-amber-300 underline">नमो शेतकरी</Link>,{' '}
          <Link href="/articles/hi/rajasthan-kisan-samman-nidhi" className="text-amber-800 dark:text-amber-300 underline">राजस्थान किसान सम्मान निधि</Link>।
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          इन सब योजनाओं का दरवाजा अब एक ही चीज से खुलता है — <strong>Farmer ID</strong>। अगर अभी
          तक नहीं बनी, तो{' '}
          <Link href="/articles/hi/farmer-id-kaise-banaye" className="text-amber-800 dark:text-amber-300 underline font-semibold">किसान आईडी कैसे बनाएं</Link>{' '}
          से शुरू कीजिए, मोबाइल से, मुफ्त में बन जाती है।
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          फसल खराब हुई है तो दो अलग रास्ते हैं: बीमा वाला क्लेम{' '}
          <Link href="/articles/hi/fasal-bima-claim-status" className="text-amber-800 dark:text-amber-300 underline">फसल बीमा क्लेम स्टेटस</Link>{' '}
          में ट्रैक होता है, और सरकारी मुआवजे की प्रक्रिया अलग होती है। वायरल खबरों से सावधान —{' '}
          <Link href="/articles/hi/pm-kisan-khad-yojana-sach" className="text-amber-800 dark:text-amber-300 underline">₹11,000 की खाद योजना</Link>{' '}
          जैसे दावों की पड़ताल भी यहीं मिलेगी।
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          पशु पालने वालों के लिए{' '}
          <Link href="/articles/hi/mgnrega-pashu-shed-yojana" className="text-amber-800 dark:text-amber-300 underline">मनरेगा पशु शेड (₹1.6 लाख तक)</Link>{' '}
          और{' '}
          <Link href="/articles/hi/pashu-kisan-credit-card" className="text-amber-800 dark:text-amber-300 underline">पशु KCC (₹3 लाख तक)</Link>{' '}
          की गाइड भी इसी सेक्शन में हैं।
        </p>
      </section>
    );
  }

  if (category === 'mandi') {
    return (
      <section className="max-w-3xl mb-12">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          फसल बेचने से पहले दो रेट मिलाइए — मंडी का और MSP का
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          सिर्फ अपनी मंडी का भाव देखकर बेच देना अक्सर घाटे का सौदा होता है। गेहूं बेचने वाले
          किसान के लिए असली सवाल ये है आज का मंडी भाव MSP से ऊपर है या नीचे?{' '}
          <Link href="/articles/hi/gehu-ka-rate-aaj" className="text-amber-800 dark:text-amber-300 underline font-semibold">गेहूं का रेट आज — MSP vs मंडी भाव</Link>{' '}
          वाली गाइड यही तुलना करना सिखाती है।
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          बाकी फसलों और सब्जियों के लिए भी यही तरीका काम करता है रोज का भाव{' '}
          <Link href="/articles/mandi-bhav-today" className="text-amber-800 dark:text-amber-300 underline">daily mandi bhav</Link>{' '}
          पर, सभी फसलों की सरकारी MSP{' '}
          <Link href="/articles/msp-list-2026-27" className="text-amber-800 dark:text-amber-300 underline">MSP लिस्ट 2026-27</Link>{' '}
          में। और अगर आपकी लोकल मंडी में दाम नहीं मिल रहा, तो{' '}
          <Link href="/articles/enam-registration-kaise-kare" className="text-amber-800 dark:text-amber-300 underline">eNAM रजिस्ट्रेशन</Link>{' '}
          से दूसरी मंडियों में online बोली का रास्ता खुलता है।
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          एक दिन का रेट देखकर फैसला मत कीजिए — बेचने से पहले 2-3 दिन का रुझान देखना हमेशा
          बेहतर रहता है।
        </p>
      </section>
    );
  }

  if (category === 'pashupalan') {
    return (
      <section className="max-w-3xl mb-12">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          पशुपालन में पैसा तीन जगह से आता है बिक्री, सब्सिडी और लोन
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          गाय-भैंस से सिर्फ दूध ही आमदनी नहीं है। बुलंदशहर जैसी जगहों पर{' '}
          <Link href="/articles/hi/gau-mutra-kharid-yojana" className="text-amber-800 dark:text-amber-300 underline font-semibold">गौ मूत्र की खरीद ₹10 प्रति लीटर</Link>{' '}
          तक हो रही है — किन शर्तों पर और कहां, ये गाइड में है।
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          खर्च की तरफ देखें तो दो बड़े सहारे हैं। शेड बनाने का पैसा{' '}
          <Link href="/articles/hi/mgnrega-pashu-shed-yojana" className="text-amber-800 dark:text-amber-300 underline">मनरेगा पशु शेड योजना</Link>{' '}
          से ₹1.6 लाख तक मिल सकता है, और चारे-दवा जैसे चालू खर्च के लिए{' '}
          <Link href="/articles/hi/pashu-kisan-credit-card" className="text-amber-800 dark:text-amber-300 underline">पशु किसान क्रेडिट कार्ड</Link>{' '}
          से ₹3 लाख तक का लोन, बिना जमीन गिरवी रखे भी रास्ता है।
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          नया business शुरू करना चाहते हैं? बकरी पालन (NLM सब्सिडी), मधुमक्खी पालन (KVIC) और
          मछली पालन (PMMSY) की विस्तृत गाइड Hinglish सेक्शन में हैं —{' '}
          <Link href="/articles/bakri-palan-yojana-nlm-subsidy" className="text-amber-800 dark:text-amber-300 underline">बकरी पालन</Link>,{' '}
          <Link href="/articles/madhumakhi-palan-kvic-subsidy" className="text-amber-800 dark:text-amber-300 underline">मधुमक्खी पालन</Link>,{' '}
          <Link href="/articles/pm-matsya-sampada-yojana-fish-farming" className="text-amber-800 dark:text-amber-300 underline">मछली पालन</Link>।
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          सब्सिडी की दरें योजना और राज्य के हिसाब से बदलती हैं — हर गाइड में आंकड़े official
          source के साथ दिए गए हैं, अंदाजे के नंबरों पर योजना मत बनाइए।
        </p>
      </section>
    );
  }

  if (category === 'agri-business') {
    return (
      <section className="max-w-3xl mb-12">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          सब्सिडी से business, पर हर स्कीम का रास्ता अलग है
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          इस सेक्शन की दो गाइड दो बिल्कुल अलग तरह की स्कीमें दिखाती हैं।{' '}
          <Link href="/articles/hi/tractor-subsidy" className="text-amber-800 dark:text-amber-300 underline font-semibold">ट्रैक्टर सब्सिडी</Link>{' '}
          राज्य-वार चलती है — किस राज्य में कितनी छूट है, इसकी पूरी लिस्ट गाइड में है। वहीं{' '}
          <Link href="/articles/hi/namo-drone-didi-yojana" className="text-amber-800 dark:text-amber-300 underline font-semibold">नमो ड्रोन दीदी योजना</Link>{' '}
          में कोई सीधा आवेदन form ही नहीं है रास्ता SHG (स्वयं सहायता समूह) से जाता है। यही
          फर्क समझना जरूरी है, वरना गलत खिड़की पर लाइन लगती रहती है।
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          production या processing वाला business सोच रहे हैं तो Hinglish सेक्शन में और गाइड हैं:{' '}
          <Link href="/articles/mushroom-kheti-nhb-subsidy" className="text-amber-800 dark:text-amber-300 underline">mushroom kheti (NHB)</Link>,{' '}
          <Link href="/articles/vermi-compost-business-guide" className="text-amber-800 dark:text-amber-300 underline">vermi compost</Link>,{' '}
          <Link href="/articles/pm-fme-yojana-food-processing" className="text-amber-800 dark:text-amber-300 underline">PM-FME food processing</Link>{' '}
          और मशीनरी किराए पर देने वाला{' '}
          <Link href="/articles/custom-hiring-centre-chc-portal" className="text-amber-800 dark:text-amber-300 underline">Custom Hiring Centre</Link>।
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          किसी भी स्कीम में पैसा लगाने से पहले उसका official portal जरूर देखें — सब्सिडी के
          प्रतिशत और पात्रता हर गाइड में source के साथ दिए हैं।
        </p>
      </section>
    );
  }

  return null;
}

const CATEGORY_DATA: Record<CategorySlug, {
  title: string;
  description: string;
  keywords: string[];
}> = {
  'status-check': {
    title: 'पीएम किसान स्टेटस चेक और सत्यापन — हिंदी गाइड',
    description:
      'पीएम किसान किस्त, बेनिफिशियरी लिस्ट, eKYC, NPCI आधार सीडिंग और रिकवरी नोटिस — स्टेटस से जुड़ी हर समस्या की step-by-step हिंदी गाइड।',
    keywords: ['पीएम किसान स्टेटस', 'pm kisan status hindi', 'किस्त कब आएगी', 'ekyc kaise kare', 'बेनिफिशियरी लिस्ट'],
  },
  'loan': {
    title: 'किसान लोन और क्रेडिट — हिंदी गाइड',
    description:
      'KCC लिमिट कैसे बढ़ाएं, कर्ज माफी लिस्ट में नाम कैसे देखें और किसान क्रेडिट कार्ड के नियम — किसान लोन की हर समस्या की आसान हिंदी गाइड।',
    keywords: ['किसान लोन', 'kcc limit', 'कर्ज माफी लिस्ट', 'किसान क्रेडिट कार्ड हिंदी'],
  },
  'farming': {
    title: 'खेती और योजनाएं — हिंदी गाइड',
    description:
      'Farmer ID कार्ड, फसल बीमा और खेती से जुड़ी सरकारी योजनाओं की आसान हिंदी गाइड — step-by-step, बिना मुश्किल शब्दों के।',
    keywords: ['farmer id card hindi', 'खेती योजना', 'किसान योजना हिंदी'],
  },
  'mandi': {
    title: 'मंडी भाव और बाजार दरें — हिंदी गाइड',
    description:
      'गेहूं का आज का रेट, MSP vs मंडी भाव और अपनी मंडी की ताज़ा दरें — फसल बेचने से पहले सही भाव जानने का आसान तरीका, सब सरल हिंदी में एक जगह।',
    keywords: ['गेहूं का रेट आज', 'मंडी भाव हिंदी', 'msp रेट'],
  },
  'pashupalan': {
    title: 'पशुपालन और मत्स्य पालन — हिंदी गाइड',
    description:
      'गौ मूत्र खरीद योजना, डेयरी लोन और मत्स्य पालन — पशुपालन से जुड़ी हर सरकारी योजना की पात्रता, सब्सिडी और आवेदन का तरीका, आसान हिंदी में।',
    keywords: ['पशुपालन योजना', 'गौ मूत्र खरीद योजना', 'pashupalan yojana hindi'],
  },
  'agri-business': {
    title: 'कृषि व्यवसाय और सब्सिडी — हिंदी गाइड',
    description:
      'ट्रैक्टर सब्सिडी, नमो ड्रोन दीदी योजना और कृषि व्यवसाय की सरकारी स्कीमें — पात्रता, सब्सिडी की रकम और आवेदन का पूरा तरीका, आसान हिंदी में।',
    keywords: ['ट्रैक्टर सब्सिडी', 'नमो ड्रोन दीदी योजना', 'कृषि सब्सिडी हिंदी'],
  },
};

export const revalidate = 86400;

export async function generateStaticParams() {
  const withArticles = new Set(HINDI_ARTICLES.map((a) => a.category));
  return [...withArticles].map((category) => ({ category }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const categoryData = CATEGORY_DATA[category as CategorySlug];
  const categoryInfo = CATEGORIES[category as CategorySlug];

  if (!categoryData || !categoryInfo) {
    notFound();
  }

  const url = `${SITE_URL}/articles/hi/category/${category}`;

  return {
    title: categoryData.title,
    description: categoryData.description,
    keywords: categoryData.keywords,
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    alternates: {
      canonical: url,
      languages: { 'hi-IN': url, 'x-default': url },
    },
    openGraph: {
      title: categoryData.title,
      description: categoryData.description,
      type: 'website',
      url,
      siteName: SITE_NAME,
      locale: 'hi_IN',
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: categoryData.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: categoryData.title,
      description: categoryData.description,
      site: '@kisanstatus',
      images: [DEFAULT_OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}

export default async function HindiCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryData = CATEGORY_DATA[category as CategorySlug];
  const categoryInfo = CATEGORIES[category as CategorySlug];

  if (!categoryData || !categoryInfo) {
    notFound();
  }

  const articles = getHindiArticlesByCategory(category as CategorySlug);
  const url = `${SITE_URL}/articles/hi/category/${category}`;

  const orgPublisher = {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: LOGO_URL, width: LOGO_WIDTH, height: LOGO_HEIGHT },
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: categoryData.title,
    description: categoryData.description,
    url,
    inLanguage: 'hi-IN',
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    publisher: orgPublisher,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: articles.length,
      itemListElement: articles.map((a, i) => {
        const articleUrl = `${SITE_URL}/articles/${a.slug}`;
        return {
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Article',
            '@id': articleUrl,
            url: articleUrl,
            name: a.titleHi,
            headline: a.titleHi,
            description: a.desc,
            image: a.ogImage.startsWith('http') ? a.ogImage : `${SITE_URL}${a.ogImage}`,
            inLanguage: 'hi-IN',
            datePublished: a.publishedTime,
            dateModified: a.modifiedTime,
            author: { '@type': 'Person', name: a.author, url: AUTHOR_URL },
            publisher: orgPublisher,
            mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
          },
        };
      }),
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'हिंदी गाइड', item: `${SITE_URL}/articles/hi` },
      { '@type': 'ListItem', position: 3, name: categoryInfo.nameHi, item: url },
    ],
  };

  const otherCategories = (Object.keys(CATEGORIES) as CategorySlug[]).filter(
    (c) => c !== category && HINDI_ARTICLES.some((a) => a.category === c),
  );

  return (
    <main lang="hi" className="min-h-screen bg-amber-50/40 dark:bg-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="py-16 md:py-20">
        <div className="container-site mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500 dark:text-gray-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-amber-700 dark:hover:text-amber-400">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/articles/hi" className="hover:text-amber-700 dark:hover:text-amber-400">हिंदी गाइड</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-gray-900 dark:text-white">
                {categoryInfo.nameHi}
              </li>
            </ol>
          </nav>

          <div className="mb-14">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 text-amber-800 dark:text-amber-300 text-sm font-bold px-5 py-2.5 rounded-full mb-5 shadow-sm border border-amber-200/50 dark:border-amber-700/50">
              <span aria-hidden="true">अ</span>
              <span>हिंदी गाइड</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              {categoryInfo.nameHi}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg max-w-2xl">
              {categoryInfo.descriptionHi} {articles.length} गाइड आसान हिंदी में।
            </p>
          </div>

          <CategoryIntroHi category={category as CategorySlug} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a) => (
              <article
                key={a.slug}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden flex flex-col no-underline h-full border border-amber-200/60 dark:border-gray-700 shadow-lg hover:shadow-2xl hover:shadow-amber-900/10 dark:hover:shadow-black/30 hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-500 ease-out hover:-translate-y-2"
              >
                <Link href={`/articles/${a.slug}`} className="sr-only" aria-label={`पढ़ें: ${a.titleHi}`}>
                  {a.titleHi}
                </Link>
                <div className="relative overflow-hidden">
                  <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0" style={{ aspectRatio: '16/9' }}>
                    <Image
                      src={a.ogImage}
                      alt={a.titleHi}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={80}
                      loading="lazy"
                      decoding="async"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 pointer-events-none" aria-hidden="true" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-bold text-gray-900 dark:text-white text-lg leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-300 mb-3 line-clamp-2">
                    {a.titleHi}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 flex-1 mb-5">{a.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700/50">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{AUTHOR_NAME}</span>
                    <Link
                      href={`/articles/${a.slug}`}
                      className="text-sm font-bold text-amber-700 dark:text-amber-400 group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-1.5"
                      aria-label={`पढ़ें: ${a.titleHi}`}
                    >
                      पढ़ें
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {otherCategories.length > 0 ? (
            <div className="mt-16">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">दूसरी श्रेणियां</h2>
              <div className="flex flex-wrap gap-3">
                {otherCategories.map((c) => (
                  <Link
                    key={c}
                    href={`/articles/hi/category/${c}`}
                    className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-gray-700 hover:border-amber-400 dark:hover:border-amber-500 shadow-sm transition-colors"
                  >
                    {CATEGORIES[c].nameHi}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          <div className="text-center mt-14">
            <Link
              href="/articles/hi"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-800 dark:text-amber-300 hover:underline"
            >
              सभी हिंदी गाइड देखें →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
