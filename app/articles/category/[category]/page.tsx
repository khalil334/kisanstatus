import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CATEGORIES, getArticlesByCategory, type CategorySlug } from '@/lib/articles-data';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_URL, DEFAULT_OG_IMAGE } from '@/lib/site-config';
import ArticlesClient from '../../ArticlesClient';

function CategoryIntro({ category }: { category: CategorySlug }) {
  if (category === 'loan') {
    return (
      <section className="container-site mx-auto px-4 pt-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Kisan loan — kahan se shuru karein?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            “Loan chahiye” ek sawal nahi, teen alag sawal hote hain — aur teeno ka rasta alag hai:
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-3">
            <li>
              <strong>Kheti ke seasonal kharche</strong> (beej, khaad, diesel) ke liye sabse sasta
              rasta{' '}
              <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-green-700 dark:text-green-400 underline font-semibold">
                Kisan Credit Card (KCC)
              </Link>{' '}
              hai — interest subvention ke saath short-term credit.
            </li>
            <li>
              <strong>Machinery kharidni hai</strong> (tractor, implements) to wo alag term-loan
              category hai — process aur margin{' '}
              <Link href="/articles/KisanTractorLoan2026" className="text-green-700 dark:text-green-400 underline font-semibold">
                tractor loan guide
              </Link>{' '}
              me hai.
            </li>
            <li>
              <strong>Pata nahi kaunsa loan fit hai?</strong> Pehle{' '}
              <Link href="/articles/KisanRinKahaSeLe2026" className="text-green-700 dark:text-green-400 underline font-semibold">
                kisan rin kahan se lein
              </Link>{' '}
              wala overview padhein — usme bank, cooperative aur Jansamarth portal ke raaste
              compare kiye gaye hain.
            </li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Ek hi cheez har jagah lagti hai: zameen ke kaagaz + KYC pehle taiyar rakhein — zyada
            applications isi par atakti hain.
          </p>
        </div>
      </section>
    );
  }

  if (category === 'pashupalan') {
    return (
      <section className="container-site mx-auto px-4 pt-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Pashupalan me kaunsa business, kaunsi scheme?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Yahan ki guides alag-alag livestock business cover karti hain, aur har ek ke peeche
            alag government scheme hai — isliye pehle apna business chunein, phir scheme:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <p className="font-semibold text-gray-900 dark:text-white mb-1">Kam zameen, kam investment</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <Link href="/articles/bakri-palan-yojana-nlm-subsidy" className="text-green-700 dark:text-green-400 underline">Bakri palan (NLM subsidy)</Link>{' '}
                ya{' '}
                <Link href="/articles/madhumakhi-palan-kvic-subsidy" className="text-green-700 dark:text-green-400 underline">madhumakhi palan (KVIC)</Link>{' '}
                se shuru karein.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <p className="font-semibold text-gray-900 dark:text-white mb-1">Paani ka source hai</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <Link href="/articles/pm-matsya-sampada-yojana-fish-farming" className="text-green-700 dark:text-green-400 underline">Machli palan (PMMSY)</Link>{' '}
                dekhein — pond-based unit ki subsidy structure alag hai.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 sm:col-span-2">
              <p className="font-semibold text-gray-900 dark:text-white mb-1">Pehle se dairy/pashu hain</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Chara business ka rasta{' '}
                <Link href="/articles/silage-making-business-guide" className="text-green-700 dark:text-green-400 underline">silage making guide</Link>{' '}
                me hai — existing dairy belt me demand ready milti hai.
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Subsidy percentages scheme aur state ke hisaab se badalti hain — exact figures har
            guide me official source ke saath diye gaye hain.
          </p>
        </div>
      </section>
    );
  }

  if (category === 'agri-business') {
    return (
      <section className="container-site mx-auto px-4 pt-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Kheti se aage — agri business ka naksha
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            In guides me teen tarah ke raaste hain, aur teeno ka support ecosystem alag hai:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-3">
            <li>
              <strong>Production business:</strong>{' '}
              <Link href="/articles/mushroom-kheti-nhb-subsidy" className="text-green-700 dark:text-green-400 underline">mushroom kheti (NHB)</Link>{' '}
              aur{' '}
              <Link href="/articles/vermi-compost-business-guide" className="text-green-700 dark:text-green-400 underline">vermi compost</Link>{' '}
              — kam zameen par unit lagakar produce bechna.
            </li>
            <li>
              <strong>Processing business:</strong>{' '}
              <Link href="/articles/pm-fme-yojana-food-processing" className="text-green-700 dark:text-green-400 underline">PM-FME food processing</Link>{' '}
              — apni ya doosron ki upaj ko process karke value add karna.
            </li>
            <li>
              <strong>Service business:</strong>{' '}
              <Link href="/articles/custom-hiring-centre-chc-portal" className="text-green-700 dark:text-green-400 underline">Custom Hiring Centre (CHC)</Link>{' '}
              — machinery rent par dena; aur khet ke paani ka kharcha ghatane ke liye{' '}
              <Link href="/articles/drip-sprinkler-irrigation-subsidy" className="text-green-700 dark:text-green-400 underline">drip/sprinkler subsidy</Link>.
            </li>
          </ol>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Har guide me investment ka scale aur subsidy ka structure us scheme ke official portal
            se diya gaya hai — andaaze ke numbers par plan mat banaiye.
          </p>
        </div>
      </section>
    );
  }

  if (category === 'status-check') {
    return (
      <section className="container-site mx-auto px-4 pt-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            PM Kisan status — pehle problem pehchaniye, phir guide chuniye
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Status check karne wale zyada tar kisan teen situations me hote hain — aur teeno ka
            fix alag guide me hai:
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-3">
            <li>
              <strong>Kist aayi nahi:</strong> pehle{' '}
              <Link href="/articles/PmKisanBeneficiaryList2026" className="text-green-700 dark:text-green-400 underline font-semibold">
                beneficiary list
              </Link>{' '}
              me naam check karein; status me “FTO Generated” dikhe to uska matlab{' '}
              <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="text-green-700 dark:text-green-400 underline font-semibold">
                FTO guide
              </Link>{' '}
              me samjha hai — payment pipeline me hai, ruki nahi.
            </li>
            <li>
              <strong>Payment failed / rejected:</strong> 7 common reasons aur unke fixes{' '}
              <Link href="/articles/PmKisanPaymentFailedFix2026" className="text-green-700 dark:text-green-400 underline font-semibold">
                payment failed guide
              </Link>{' '}
              me step-by-step hain.
            </li>
            <li>
              <strong>eKYC pending:</strong> sabse common block yehi hai — 2 minute ka process{' '}
              <Link href="/articles/PmKisanEkycOnline2026" className="text-green-700 dark:text-green-400 underline font-semibold">
                eKYC online guide
              </Link>{' '}
              me hai (OTP na aaye to face authentication wala rasta bhi covered hai).
            </li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Naye ho ya sab kuch ek jagah chahiye — to{' '}
            <Link href="/articles/PmKisanMasterGuide2026" className="text-green-700 dark:text-green-400 underline">
              PM Kisan complete guide
            </Link>{' '}
            se shuru karein; usme registration se lekar har error ka index hai.
          </p>
        </div>
      </section>
    );
  }

  if (category === 'farming') {
    return (
      <section className="container-site mx-auto px-4 pt-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Kheti ki schemes — kab kaunsi kaam aati hai?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Ye guides season ke hisaab se sochne par aasan ho jaati hain:
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-3">
            <li>
              <strong>Buwai se pehle:</strong>{' '}
              <Link href="/articles/soil-health-card-complete-guide-2026" className="text-green-700 dark:text-green-400 underline font-semibold">
                Soil Health Card
              </Link>{' '}
              se mitti test karwayein — khaad ka kharcha isi report se tay hota hai, aur{' '}
              <Link href="/articles/NanoDap500mlPriceInIndia2026" className="text-green-700 dark:text-green-400 underline font-semibold">
                Nano DAP
              </Link>{' '}
              jaise naye options ka rate/asar bhi dekh lein.
            </li>
            <li>
              <strong>Buwai ke saath:</strong> fasal ka bima{' '}
              <Link href="/articles/PmfbyCropInsurance2026" className="text-green-700 dark:text-green-400 underline font-semibold">
                PMFBY guide
              </Link>{' '}
              me — 2% premium wali window buwai season ke saath hi khulti-bandh hoti hai.
            </li>
            <li>
              <strong>Lambi bachat:</strong> diesel pump ka kharcha{' '}
              <Link href="/articles/PmKusumYojanaSolarSubsidy2026" className="text-green-700 dark:text-green-400 underline font-semibold">
                PM Kusum solar subsidy
              </Link>{' '}
              se ghatta hai.
            </li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Aage har scheme ka access{' '}
            <Link href="/articles/AgriStackKyaHai2026" className="text-green-700 dark:text-green-400 underline">
              AgriStack ki digital kisan ID
            </Link>{' '}
            se judne wala hai — ek baar registry samajh lena aage kaam aayega.
          </p>
        </div>
      </section>
    );
  }

  if (category === 'mandi') {
    return (
      <section className="container-site mx-auto px-4 pt-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Mandi bhav — sirf rate dekhna kaafi nahi
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Sahi daam pane ke liye teen cheezein saath dekhni padti hain:
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-3">
            <li>
              <strong>Aaj ka rate:</strong>{' '}
              <Link href="/articles/mandi-bhav-today" className="text-green-700 dark:text-green-400 underline font-semibold">
                daily mandi bhav
              </Link>{' '}
              yahan update hota hai; sabzi bechne walon ke liye pyaz-aloo-tamatar ka seasonal
              pattern{' '}
              <Link href="/articles/sabzi-bhav-guide-pyaz-aloo-tamatar" className="text-green-700 dark:text-green-400 underline font-semibold">
                alag guide
              </Link>{' '}
              me hai.
            </li>
            <li>
              <strong>MSP se compare:</strong> mandi ka rate MSP se neeche hai ya upar — ye jaane
              bina bechna ghate ka sauda hai.{' '}
              <Link href="/articles/msp-list-2026-27" className="text-green-700 dark:text-green-400 underline font-semibold">
                MSP list 2026-27
              </Link>{' '}
              aur{' '}
              <Link href="/articles/gehu-ka-bhav-msp-vs-mandi" className="text-green-700 dark:text-green-400 underline font-semibold">
                gehu MSP vs mandi
              </Link>{' '}
              ka comparison dekhein.
            </li>
            <li>
              <strong>Behtar mandi tak pahunch:</strong> apni local mandi ke bahar bhi bech sakte
              hain —{' '}
              <Link href="/articles/enam-registration-kaise-kare" className="text-green-700 dark:text-green-400 underline font-semibold">
                eNAM registration
              </Link>{' '}
              se online bidding ka rasta khulta hai.
            </li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Rates roz badalte hain — bechne se pehle wale din ka trend zaroor dekh lein, sirf ek
            din ka rate nahi.
          </p>
        </div>
      </section>
    );
  }

  return null;
}

const CATEGORY_DATA: Record<CategorySlug, {
  title: string;
  description: string;
  emoji?: string;
  keywords: string[];
}> = {
  'status-check': {
    title: 'PM Kisan Status Check & Verification 2026',
    description: 'PM Kisan status check, beneficiary list verification, aur FTO generated ka matlab jaanein. 2026 ki latest, verified step-by-step guides.',
    
    keywords: ['pm kisan status check', 'beneficiary verification', 'installment status 2026', 'FTO generated', 'kist status'],
  },
  'loan': {
    title: 'Kisan Credit & Loan Guides 2026 — KCC',
    description: 'Kisan Credit Card (KCC), tractor loan, aur 4% interest par personal loan kaise lein. 2026 ki complete application process aur eligibility guides.',
    
    keywords: ['kisan credit card', 'KCC loan 2026', 'tractor loan', 'kisan personal loan', '4% interest loan'],
  },
  'farming': {
    title: 'Modern Farming & Schemes Guides 2026',
    description: 'Soil Health Card, Nano DAP, PMFBY crop insurance aur AgriStack ki puri jankari. Modern kheti aur sarkari yojanaon ke liye verified Hindi guides.',
    emoji: '',
    keywords: ['soil health card', 'nano DAP 2026', 'PMFBY crop insurance', 'AgriStack', 'modern farming'],
  },
  'mandi': {
    title: 'Mandi Bhav & Market Rates 2026',
    description: 'Aaj ka mandi bhav aur daily updated wholesale rates. Apne shehar ke sabzi, anaj aur fruit ke aaj ke bhav aur market trends yahan check karein.',
    
    keywords: ['mandi bhav today', 'sabzi bhav', 'fruit rates 2026', 'wholesale prices', 'aaj ka bhav'],
  },
  'pashupalan': {
    title: 'Pashupalan & Matsya Palan Subsidy Guides 2026',
    description: 'Bakri palan, madhumakhi palan, machli palan aur silage ki subsidy, loan aur profit ki puri jankari. NLM, KVIC aur PM Matsya Sampada Yojana ki guides.',
    emoji: '',
    keywords: ['bakri palan yojana', 'madhumakhi palan subsidy', 'machli palan loan', 'PM Matsya Sampada Yojana', 'silage business'],
  },
  'agri-business': {
    title: 'Agri Business Subsidy Guides 2026 — Mushroom',
    description: 'Mushroom kheti, vermi compost, food processing aur drip irrigation subsidy kaise milegi. NHB, PM-FME aur CHC portal ki step-by-step guides.',
    emoji: '',
    keywords: ['mushroom kheti subsidy', 'vermi compost business', 'PM FME yojana', 'custom hiring centre', 'drip irrigation subsidy'],
  },
};

export const revalidate = 86400;

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({ category }));
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

  const url = `${SITE_URL}/articles/category/${category}`;
  const displayTitle = categoryData.title;
  const displayDescription = categoryData.description;

  return {
    title: displayTitle,
    description: displayDescription,
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    alternates: { canonical: url },
    keywords: categoryData.keywords,
    openGraph: {
      title: displayTitle,
      description: displayDescription,
      type: 'website',
      url,
      siteName: SITE_NAME,
      locale: 'hi_IN',
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: displayTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: displayTitle,
      description: displayDescription,
      site: '@kisanstatus',
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function CategoryPage({
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

  const categoryArticles = getArticlesByCategory(category as CategorySlug);
  const url = `${SITE_URL}/articles/category/${category}`;

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: categoryData.title,
    description: categoryData.description,
    url: url,
    inLanguage: 'hi-IN',
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: categoryArticles.length,
      itemListElement: categoryArticles.map((a, i) => {
        const articleUrl = `${SITE_URL}/articles/${a.slug}`;
        return {
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Article',
            '@id': articleUrl,
            url: articleUrl,
            name: a.title,
            headline: a.title,
            description: a.desc,
            inLanguage: 'hi-IN',
            ...(a.ogImage ? { image: `${SITE_URL}${a.ogImage}` } : {}),
            ...(a.publishedTime ? { datePublished: a.publishedTime } : {}),
            ...(a.modifiedTime ? { dateModified: a.modifiedTime } : {}),
            author: {
              '@type': 'Person',
              name: a.author || AUTHOR_NAME,
              url: AUTHOR_URL,
            },
            publisher: {
              '@type': 'Organization',
              name: SITE_NAME,
              url: SITE_URL,
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': articleUrl,
            },
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
      { '@type': 'ListItem', position: 2, name: 'Articles', item: `${SITE_URL}/articles` },
      { '@type': 'ListItem', position: 3, name: categoryData.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-r from-green-800 to-green-600 py-12 md:py-16">
        <div className="container-site mx-auto px-4 text-center">
          <div className="text-5xl md:text-6xl mb-4" aria-hidden="true">
            {categoryData.emoji}
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-white mb-3 leading-tight">
            {categoryData.title}
          </h1>
          <p className="text-green-100 text-base md:text-lg max-w-2xl mx-auto mb-6">
            {categoryData.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-white/20 border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
               {categoryArticles.length} Verified Guides
            </span>
            <Link
              href="/articles"
              className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm transition-colors"
            >
              ← Sabhi Kisan Guides Dekhein
            </Link>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container-site mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(CATEGORIES).map(([slug, cat]) => {
              const isActive = slug === category;
              const catInfo = cat as { name: string; nameHi: string; icon?: string };
              return (
                <Link
                  key={slug}
                  href={`/articles/category/${slug}`}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-green-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/30'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {catInfo.icon} {catInfo.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CategoryIntro category={category as CategorySlug} />

      <div className="container-site mx-auto py-10">
        {categoryArticles.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Is category mein abhi koi guide available nahi hai
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              Hum jaldi hi yahan naye updates aur helpful articles add karenge. Tab tak aap hamare anya verified guides check kar sakte hain.
            </p>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-all"
            >
              ← Sabhi Articles Dekhein
            </Link>
          </div>
        ) : (
          <ArticlesClient articles={categoryArticles} showHero={false} />
        )}
      </div>
    </>
  );
}
