import Link from 'next/link';
import Image from 'next/image';
import { ARTICLES, getArticlesByFreshness, CATEGORIES } from '@/lib/articles-data';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';
import SearchBar from './SearchBar';
import FaqItem from './FaqItem';

const TOP_ARTICLES_LIMIT = 3;

function IconWallet({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9.75A2.25 2.25 0 0018.75 7.5H5.25A2.25 2.25 0 003 9.75V12m18 0h-6" />
    </svg>
  );
}

function IconCreditCard({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
  );
}

function IconTractor({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      <circle cx="7.5" cy="17.25" r="1.5" fill="currentColor" />
      <circle cx="16.5" cy="17.25" r="1.5" fill="currentColor" />
    </svg>
  );
}

function IconCalculator({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconSprout({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  );
}

function IconBookOpen({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function IconSmartphone({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  );
}

function IconArrowRight({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function IconCheck({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

const TOOLS = [
  {
    href: '/articles/PmKisan24viKist2026',
    icon: IconWallet,
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-200 dark:border-green-800',
    iconBg: 'bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300',
    title: 'PM Kisan Status',
    desc: '24vi kist kab aayegi? Status check, eKYC, beneficiary list — sab yahan.',
  },
  {
    href: '/articles/KisanCreditCardOnlineApply2026',
    icon: IconCreditCard,
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    iconBg: 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300',
    title: 'KCC Loan',
    desc: '₹5 Lakh tak loan, 4% interest. Online apply process aur document checklist.',
  },
  {
    href: '/articles/KisanTractorLoan2026',
    icon: IconTractor,
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    border: 'border-amber-200 dark:border-amber-800',
    iconBg: 'bg-amber-100 dark:bg-amber-800 text-amber-600 dark:text-amber-300',
    title: 'Tractor Subsidy',
    desc: 'SMAM subsidy 35-50%. Bina down payment ke tractor kaise lein.',
  },
  {
    href: '/calculator/kcc-loan-emi',
    icon: IconCalculator,
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-200 dark:border-purple-800',
    iconBg: 'bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300',
    title: 'EMI Calculator',
    desc: 'Loan amount, interest, tenure daalo — monthly EMI turant calculate karo.',
  },
  {
    href: '/articles/PmfbyCropInsurance2026',
    icon: IconSprout,
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    border: 'border-emerald-200 dark:border-emerald-800',
    iconBg: 'bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-300',
    title: 'Farming Schemes',
    desc: 'PMFBY, Soil Health Card, Nano DAP, AgriStack — sab schemes ki jankari.',
  },
  {
    href: '/articles',
    icon: IconBookOpen,
    bg: 'bg-rose-50 dark:bg-rose-900/20',
    border: 'border-rose-200 dark:border-rose-800',
    iconBg: 'bg-rose-100 dark:bg-rose-800 text-rose-600 dark:text-rose-300',
    title: 'Latest Articles',
    desc: 'PM Kisan updates, farming tips, loan guides — Hindi mein simple bhasha.',
  },
];

const FAQS = [
  {
    question: 'PM Kisan 24vi kist kab aayegi 2026 mein?',
    answer: 'PM Kisan ki 24vi kist October 2026 mein aane ki ummeed hai. Beneficiaries ko ₹2,000 seedha unke registered bank account mein Direct Benefit Transfer (DBT) ke through milenge. Apna status pmkisan.gov.in par check karein.',
  },
  {
    question: 'PM Kisan status check kaise karein online?',
    answer: 'PM Kisan status check karne ke liye: 1) pmkisan.gov.in par jayein, 2) "Beneficiary Status" par click karein, 3) Apna Aadhaar number ya registered mobile number enter karein, 4) OTP verify karein, 5) Apna latest payment status dekhein.',
  },
  {
    question: 'Kisan Credit Card (KCC) ke liye kaise apply karein?',
    answer: 'KCC apply karne ke liye apne nazdiki bank branch jayein, application form bharein, aur land documents, Aadhaar, aur PAN card submit karein. Bank verification ke baad aapko ₹5 lakh tak ka loan 4% ki concessional interest rate par mil jayega.',
  },
  {
    question: 'PM Kisan eKYC kaise complete karein?',
    answer: 'eKYC complete karne ke liye pmkisan.gov.in par jakar "Farmers Corner" mein "eKYC" option select karein. Apna Aadhaar number enter karke OTP ya biometric authentication ke through verify karein. Confirmation SMS aane par eKYC complete ho jati hai.',
  },
  {
    question: 'Tractor subsidy kaise milegi SMAM yojana mein?',
    answer: 'SMAM (Sub-Mission on Agricultural Mechanization) ke tahat tractor subsidy ke liye Kisan portal par register karein. Chhote aur seemant kisanon ko 35-50% tak subsidy milti hai, jo seedha dealer ko transfer ho jati hai, jisse bina down payment ke loan lena aasan ho jata hai.',
  },
];

function ArticleImage({ image, emoji, title }: { image: string; emoji: string; title: string }) {
  return (
    <div className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0" style={{ aspectRatio: '16/9' }}>
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={80}
          loading="lazy"
          decoding="async"
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-700" role="img" aria-label={title}>
          <span className="text-6xl" aria-hidden="true">{emoji}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 pointer-events-none" aria-hidden="true" />
      <span className="absolute bottom-3 left-4 text-2xl drop-shadow-lg z-20" aria-hidden="true">{emoji}</span>
    </div>
  );
}

function ArticleCard({ article, showNewBadge = false }: { article: typeof ARTICLES[0]; showNewBadge?: boolean }) {
  const categoryInfo = CATEGORIES[article.category] as { name: string; nameHi: string; icon: string } | undefined;
  const emoji = categoryInfo?.icon || '';
  const categoryName = categoryInfo?.nameHi || categoryInfo?.name || 'Article';

  return (
    <article className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden flex flex-col no-underline h-full border transition-all duration-500 ease-out ${
      showNewBadge
        ? 'border-green-500/50 dark:border-green-600/50 shadow-xl shadow-green-500/10 hover:shadow-2xl hover:shadow-green-500/20'
        : 'border-gray-200/80 dark:border-gray-700/80 shadow-lg hover:shadow-2xl hover:shadow-gray-900/10 dark:hover:shadow-black/30'
    } hover:-translate-y-2`}>
      <Link href={`/articles/${article.slug}`} className="sr-only" aria-label={`Padhein: ${article.title}`}>
        {article.title}
      </Link>
      <div className="relative overflow-hidden">
        <ArticleImage image={article.ogImage || ''} emoji={emoji} title={article.title} />
        {showNewBadge && (
          <div className="absolute top-4 right-4 z-30">
            <span className="relative inline-flex items-center gap-1.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              NEW
            </span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 w-fit mb-4 border border-green-200/50 dark:border-green-700/50">
          <span className="text-base" aria-hidden="true">{emoji}</span>
          <span>{categoryName}</span>
        </span>
        <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-snug group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300 mb-3 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 flex-1 mb-5">
          {article.desc}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700/50">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">✍️ KisanStatus Team</span>
          <Link href={`/articles/${article.slug}`} className="text-sm font-bold text-green-700 dark:text-green-400 group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-1.5" aria-label={`Padhein: ${article.title}`}>
            Padhein
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="py-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
      <div className="container-site mx-auto px-4">
        <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" className="hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium" itemProp="item">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li aria-hidden="true">/</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="item" content={SITE_URL}>
              <span className="text-gray-700 dark:text-gray-300 font-medium" itemProp="name">PM Kisan Status & Guides</span>
            </span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </div>
    </nav>
  );
}

export default function HomeContent() {
  const sortedArticles = getArticlesByFreshness();
  const latestArticles = sortedArticles.slice(0, TOP_ARTICLES_LIMIT);
  const olderArticles = sortedArticles.slice(TOP_ARTICLES_LIMIT);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900" itemScope itemType="https://schema.org/WebPage">
      
      <Breadcrumb />

      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-700 dark:from-green-900 dark:via-green-800 dark:to-emerald-900 py-16 md:py-24 overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" aria-hidden="true" />

        <div className="container-site mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full mb-6 border border-white/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
              India Ka #1 PM Kisan Portal
            </div>

            <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              <span itemProp="headline">PM Kisan Status Check 2026</span>
              <span className="block text-green-200 text-2xl md:text-4xl lg:text-5xl mt-2">Samman Nidhi Yojana Online</span>
            </h1>

            <p className="text-lg md:text-xl text-green-100 leading-relaxed mb-8 max-w-2xl mx-auto" itemProp="description">
              <strong className="text-white">PM Kisan Samman Nidhi</strong> (Ministry of Agriculture) ki 
              <strong className="text-white"> 24vi kist October 2026</strong> mein expected hai! 
              <strong className="text-white"> ₹2,000</strong> seedha bank account mein via 
              <strong className="text-white"> Direct Benefit Transfer (DBT)</strong>.
              <strong className="text-white"> eKYC</strong> complete karo, 
              <strong className="text-white"> beneficiary status</strong> verify karo — sab kuch bilkul free!
            </p>

            <SearchBar />

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/articles/PmKisan24viKist2026" className="group inline-flex items-center gap-2.5 bg-white text-green-700 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <span>24vi Kist Status</span>
                <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/articles" className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 border-2 border-white/30">
                <IconBookOpen className="w-6 h-6" />
                <span>All PM Kisan Guides</span>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-3 text-xs text-green-200">
              <span className="px-3 py-1.5 bg-white/10 rounded-full flex items-center gap-1">
                <IconCheck className="w-3 h-3" />
                11 Cr+ Registered Kisan
              </span>
              <span className="px-3 py-1.5 bg-white/10 rounded-full flex items-center gap-1">
                <IconCheck className="w-3 h-3" />
                50+ Govt Schemes
              </span>
              <span className="px-3 py-1.5 bg-white/10 rounded-full flex items-center gap-1">
                <IconCheck className="w-3 h-3" />
                100% Free Tools
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700" aria-labelledby="trust-heading">
        <h2 id="trust-heading" className="sr-only">Trust Indicators</h2>
        <div className="container-site mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '11 Cr+', label: 'Registered Kisan' },
              { value: '50+', label: 'Govt Schemes' },
              { value: '₹6,000', label: 'Annual Benefit' },
              { value: '4.8★', label: 'User Rating' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-green-600 dark:text-green-400">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900" aria-labelledby="tools-heading">
        <div className="container-site mx-auto px-4">
          <div className="text-center mb-14">
            <h2 id="tools-heading" className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
              Explore Kisan Tools
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base max-w-xl mx-auto">
              Har kisan ki zaroorat ke tools — PM Kisan status, KCC loan, tractor subsidy, EMI calculator sab ek jagah
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {TOOLS.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <Link 
                  key={i} 
                  href={tool.href}
                  className={`group relative ${tool.bg} border-2 ${tool.border} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className={`w-12 h-12 ${tool.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {tool.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-green-600 dark:text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50 dark:bg-green-900/10" aria-labelledby="rates-heading">
        <div className="container-site mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="rates-heading" className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-3">
              Compare Rates Today
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-lg mx-auto">
              PM Kisan, KCC loan, tractor subsidy — sab rates compare karo aur best deal paao
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { 
                label: 'KCC Loan', 
                rate: '4.0%', 
                sub: 'Interest p.a. · SBI/PNB/BOB',
                badge: '↓ 2% lower than personal loan',
                badgeColor: 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30'
              },
              { 
                label: 'Tractor Loan', 
                rate: '8.5%', 
                sub: 'Interest p.a. · With SMAM Subsidy',
                badge: '↓ 35% subsidy available',
                badgeColor: 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30'
              },
              { 
                label: 'PM Kisan', 
                rate: '₹2,000', 
                sub: 'Per kist · 3 kist yearly',
                badge: '24vi kist Oct 2026 expected',
                badgeColor: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30'
              },
            ].map((card, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  {card.label}
                </div>
                <div className="text-3xl font-black text-green-600 dark:text-green-400 mb-1">
                  {card.rate}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {card.sub}
                </div>
                <div className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full ${card.badgeColor}`}>
                  {card.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900" aria-labelledby="hero-image-heading">
        <div className="container-site mx-auto px-4">
          <h2 id="hero-image-heading" className="sr-only">Kisan Hero Image</h2>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 dark:from-green-600/20 dark:to-emerald-600/20 rounded-3xl blur-2xl" aria-hidden="true" />
            <figure className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
              <div className="relative w-full" style={{ aspectRatio: '2/1' }}>
                <Image
                  src="/hero-wheat-field.webp"
                  alt="Bharatiya kisan gehu ke khet mein kaam karte hue - PM Kisan Samman Nidhi yojana ke labharthi"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiEycf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xVsgH1fZ//2Q=="
                  className="object-cover"
                />
              </div>
              <figcaption className="sr-only">PM Kisan Samman Nidhi ke labharthi kisan gehu ki fasal kaat rahe hain</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900" aria-labelledby="featured-heading">
        <div className="container-site mx-auto px-4">
          <div className="text-center mb-14">
            <h2 id="featured-heading" className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
              Bharat Ki Kheti
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Hamari Pehchaan — Hamari Shaan</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { src: '/annadata-farmers-group.webp', title: 'Hamare Annadata', desc: 'Bharat ki kheti - duniya ki sabse badi kheti', border: 'border-green-400 dark:border-green-600' },
              { src: '/digital-farming-tech.webp', title: 'Aadhunik Kheti', desc: 'Technology se badhti kheti ki kamai', border: 'border-blue-400 dark:border-blue-600' },
            ].map((item, i) => (
              <figure key={i} className={`group relative rounded-3xl overflow-hidden shadow-2xl border-4 ${item.border} hover:shadow-3xl transition-all duration-500 hover:-translate-y-2`} style={{ aspectRatio: '3/2' }}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiEycf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xVsgH1fZ//2Q=="
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" aria-hidden="true" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white font-black text-2xl mb-2 drop-shadow-lg">{item.title}</h3>
                  <p className="text-gray-200 text-base drop-shadow-md">{item.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900" aria-labelledby="articles-heading">
        <div className="container-site mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 text-green-800 dark:text-green-300 text-sm font-bold px-5 py-2.5 rounded-full mb-5 shadow-sm border border-green-200/50 dark:border-green-700/50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
                <span>Latest Updates</span>
              </div>
              <h2 id="articles-heading" className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
                Naye PM Kisan Articles
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">Latest guides aur updates Hindi mein</p>
            </div>
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg self-start md:self-auto">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              {latestArticles.length} latest
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} showNewBadge />
            ))}
          </div>

          {olderArticles.length > 0 && (
            <div className="mt-14">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                Aur Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {olderArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          )}

          <div className="text-center mt-14">
            <Link href="/articles" className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-green-600/30 hover:shadow-2xl hover:shadow-green-600/40">
              <IconBookOpen className="w-5 h-5" />
              <span>Sabhi Articles Dekho</span>
              <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800/50" aria-labelledby="faq-heading">
        <div className="container-site mx-auto px-4 max-w-3xl">
          <div className="text-center mb-14">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
              PM Kisan FAQs
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Sabse zyada puche jaane wale sawal — PM Kisan status, eKYC, loan, subsidy
            </p>
          </div>

          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {FAQS.map((faq, index) => (
              <div key={index} itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
                <FaqItem question={faq.question} answer={faq.answer} index={index} />
                <meta itemProp="name" content={faq.question} />
                <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer" className="hidden">
                  <div itemProp="text">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900" aria-labelledby="howto-heading">
        <div className="container-site mx-auto px-4">
          <div className="text-center mb-14">
            <h2 id="howto-heading" className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
              Step-by-Step Guides
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              PM Kisan status check se lekar loan apply tak — easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'PM Kisan Status Check Kaise Karein',
                steps: ['pmkisan.gov.in par jayein', 'Beneficiary Status par click karein', 'Aadhaar number enter karein', 'OTP verify karein', 'Status dekhein'],
                href: '/articles/PmKisan24viKist2026',
              },
              {
                title: 'KCC Loan Apply Kaise Karein',
                steps: ['Bank branch visit karein', 'Form aur documents submit karein', 'Verification ka intezar karein', 'Approval ke baad loan milega', '₹5 lakh tak, 4% interest'],
                href: '/articles/KisanCreditCardOnlineApply2026',
              },
            ].map((guide, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700" itemScope itemType="https://schema.org/HowTo">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-6" itemProp="name">{guide.title}</h3>
                <ol className="space-y-4">
                  {guide.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-3" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-bold text-sm shrink-0" itemProp="position">
                        {j + 1}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm pt-1.5" itemProp="text">{step}</span>
                    </li>
                  ))}
                </ol>
                <Link href={guide.href} className="mt-6 inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-bold text-sm hover:underline">
                  Full Guide Padhein <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900" aria-labelledby="quicklinks-heading">
        <div className="container-site mx-auto px-4">
          <div className="text-center mb-14">
            <h2 id="quicklinks-heading" className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
              Aapki Problem Kya Hai?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Turant solution paayein — PM Kisan se jude har sawal ka jawab</p>
          </div>
          <nav aria-label="Quick links to popular articles">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {[
                { href: '/articles/PmKisan24viKist2026', icon: '📊', title: 'Status Check', desc: 'Kist aayi ya nahi', color: 'from-blue-500 to-cyan-500' },
                { href: '/articles/KisanCreditCardOnlineApply2026', icon: '💳', title: 'KCC Apply', desc: '₹5 Lakh Loan', color: 'from-green-500 to-emerald-500' },
                { href: '/articles/PmKisanBeneficiaryList2026', icon: '📋', title: 'Beneficiary List', desc: 'Naam check karo', color: 'from-red-500 to-pink-500' },
                { href: '/articles/soil-health-card-complete-guide-2026', icon: '🧪', title: 'Soil Health Card', desc: 'Mitti test karo', color: 'from-purple-500 to-indigo-500' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group relative bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center hover:shadow-2xl hover:border-transparent transition-all duration-500 hover:-translate-y-2 overflow-hidden" aria-label={`${link.title}: ${link.desc}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} aria-hidden="true" />
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${link.color} mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`} aria-hidden="true">
                      <div className="text-4xl">{link.icon}</div>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{link.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </section>

      <section className="py-20 bg-gray-900 dark:bg-black" aria-labelledby="app-heading">
        <div className="container-site mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto">
            <div className="flex-1 text-center md:text-left">
              <h2 id="app-heading" className="text-3xl md:text-4xl font-black text-white mb-4">
                Track Everything in One App
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">
                PM Kisan status, loan EMI calculator, mandi bhav — sab ek app mein. Download karo aur updates paao.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <div className="relative">
                  <button disabled className="px-6 py-3 bg-white/10 text-white/50 font-bold rounded-xl text-sm flex items-center gap-2 border border-white/10 cursor-not-allowed" aria-label="App Store download coming soon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                    App Store
                  </button>
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full">Soon</span>
                </div>
                <div className="relative">
                  <button disabled className="px-6 py-3 bg-white/10 text-white/50 font-bold rounded-xl text-sm flex items-center gap-2 border border-white/10 cursor-not-allowed" aria-label="Play Store download coming soon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
                    Play Store
                  </button>
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full">Soon</span>
                </div>
              </div>
              <div className="mt-6 text-sm text-gray-500 justify-center md:justify-start">
                <span>App jald launch hoga — updates ke liye site visit karte rahein</span>
              </div>
            </div>
            <div className="w-48 h-48 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl flex items-center justify-center border border-green-500/30">
              <IconSmartphone className="w-20 h-20 text-green-500" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}