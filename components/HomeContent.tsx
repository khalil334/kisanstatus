import Link from 'next/link';
import Image from 'next/image';
import { ARTICLES, getArticlesByFreshness, CATEGORIES } from '@/lib/articles-data';
import { getHindiArticlesByFreshness } from '@/lib/hindi-articles-data';
import { SITE_URL, AUTHOR_NAME } from '@/lib/site-config';
import SearchBar from './SearchBar';
import FaqItem from './FaqItem';

import { TOOLS, FAQS, IconArrowRight, IconBookOpen, IconCheck } from './home-data';

const TOP_ARTICLES_LIMIT = 6;

function ArticleImage({ image, emoji, title }: { image: string; emoji?: string; title: string }) {
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
          {emoji ? <span className="text-6xl" aria-hidden="true">{emoji}</span> : null}
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 pointer-events-none" aria-hidden="true" />
      {emoji ? <span className="absolute bottom-3 left-4 text-2xl drop-shadow-lg z-20" aria-hidden="true">{emoji}</span> : null}
    </div>
  );
}

function ArticleCard({ article, showNewBadge = false }: { article: typeof ARTICLES[0]; showNewBadge?: boolean }) {
  const categoryInfo = CATEGORIES[article.category] as { name: string; nameHi: string; icon?: string } | undefined;
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
              </span>
              NEW
            </span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 w-fit mb-4 border border-green-200/50 dark:border-green-700/50">
          {emoji ? <span className="text-base" aria-hidden="true">{emoji}</span> : null}
          <span>{categoryName}</span>
        </span>
        <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-snug group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300 mb-3 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 flex-1 mb-5">
          {article.desc}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700/50">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{AUTHOR_NAME}</span>
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
  const latestArticles = getArticlesByFreshness().slice(0, TOP_ARTICLES_LIMIT);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900" itemScope itemType="https://schema.org/WebPage">

      <Breadcrumb />

      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-emerald-800 dark:from-green-950 dark:via-green-900 dark:to-emerald-950 py-12 md:py-24 overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" aria-hidden="true" />

        <div className="container-site mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full mb-6 border border-white/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
              Independent PM Kisan Guide Portal
            </div>

            <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              <span itemProp="headline">PM Kisan Status Check 2026</span>{' '}
              <span className="block text-green-200 text-2xl md:text-4xl lg:text-5xl mt-2">Samman Nidhi Yojana Online</span>
            </h1>

            <p className="text-lg md:text-xl text-green-100 leading-relaxed mb-8 max-w-2xl mx-auto" itemProp="description">
              PM Kisan Samman Nidhi ki <strong className="text-white">24vi kist October 2026</strong> mein
              expected hai — ₹2,000 seedha bank account mein (DBT). Yahan se apna beneficiary status
              check karein, eKYC poori karein, aur agar status mein{' '}
              <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="underline font-semibold text-white hover:text-green-200">
                FTO generated
              </Link>{' '}
              dikh raha hai to uska matlab samjhein. Sab tools free hain.
            </p>

            <SearchBar />

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 px-2">
              <Link href="/articles/PmKisan24viKist2026" className="group inline-flex items-center justify-center gap-2.5 bg-white text-green-700 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl w-full sm:w-auto">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <span>24vi Kist Status</span>
                <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/articles" className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 border-2 border-white/30 w-full sm:w-auto">
                <IconBookOpen className="w-6 h-6" />
                <span>All PM Kisan Guides</span>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-3 text-xs text-green-200">
              <span className="px-3 py-1.5 bg-white/10 rounded-full flex items-center gap-1">
                <IconCheck className="w-3 h-3" />
                11 Cr+ Yojana Beneficiaries (Govt Data)
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {[
              { value: '11 Cr+', label: 'Yojana Beneficiaries (Govt Data)' },
              { value: '₹6,000', label: 'Annual Benefit' },
              { value: '100%', label: 'Free Tools' },
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

      <section className="py-16 bg-gray-50 dark:bg-gray-800/50" aria-labelledby="hubs-heading">
        <div className="container-site mx-auto px-4">
          <div className="text-center mb-10">
            <h2 id="hubs-heading" className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
              Sabhi Sections Ek Nazar Mein
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base max-w-xl mx-auto">
              Calculators, pension yojana, state schemes aur Hindi guides — seedha sahi jagah pahunchein
            </p>
          </div>
          <nav aria-label="Site sections">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-8">
              {[
                { href: '/calculator', title: 'Free Kisan Tools', desc: 'EMI, MSP, status — 7 free calculators' },
                { href: '/maandhan', title: 'PM Kisan Maandhan', desc: '₹3000 pension — registration se exit tak har guide' },
                { href: '/rajya-yojana/odisha-cm-kisan-status-check-2026', title: 'CM Kisan Odisha Status Check', desc: 'Odisha CM Kisan status, village wise list aur e-KYC guide' },
                { href: '/rajya-yojana', title: 'Rajya Yojana', desc: 'State-wise kisan schemes aur status check' },
                { href: '/articles/hi', title: 'हिंदी गाइड', desc: 'पीएम किसान, कर्ज माफी और मंडी भाव — आसान हिंदी में' },
              ].map((hub) => (
                <Link key={hub.href} href={hub.href} className="group bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-green-400 dark:hover:border-green-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{hub.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{hub.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-green-600 dark:text-green-400">
                    Dekho <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto" aria-label="Calculators">
              {[
                { href: '/calculator/quick-status-check', label: 'PM Kisan Status Check' },
                { href: '/calculator/installment-tracker', label: 'Kist Tracker' },
                { href: '/calculator/pm-kisan-benefit', label: 'Benefit Calculator' },
                { href: '/calculator/kcc-loan-emi', label: 'KCC Loan EMI' },
                { href: '/calculator/msp-income', label: 'MSP Income' },
                { href: '/calculator/crop-profit', label: 'Crop Profit' },
                { href: '/calculator/pmfby-premium', label: 'PMFBY Premium' },
                { href: '/articles/PmKisanBeneficiaryList2026', label: 'Beneficiary List' },
                { href: '/articles/KisanCreditCardOnlineApply2026', label: 'KCC Apply' },
                { href: '/articles/soil-health-card-complete-guide-2026', label: 'Soil Health Card' },
              ].map((c) => (
                <Link key={c.href} href={c.href} className="inline-flex items-center gap-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-green-400 hover:text-green-700 dark:hover:text-green-400 transition-colors">
                  {c.label}
                </Link>
              ))}
            </div>
          </nav>
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
              </span>
              {latestArticles.length} latest
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} showNewBadge />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/articles" className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-green-600/30 hover:shadow-2xl hover:shadow-green-600/40">
              <IconBookOpen className="w-5 h-5" />
              <span>Sabhi Articles Dekho</span>
              <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-50/60 dark:bg-amber-900/10" aria-labelledby="hindi-articles-heading" lang="hi">
        <div className="container-site mx-auto px-4">
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 text-amber-800 dark:text-amber-300 text-sm font-bold px-5 py-2.5 rounded-full mb-5 shadow-sm border border-amber-200/50 dark:border-amber-700/50">
              <span aria-hidden="true">अ</span>
              <span>हिंदी गाइड</span>
            </div>
            <h2 id="hindi-articles-heading" className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              हिंदी में योजना गाइड
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">पीएम किसान, कर्ज माफी, सब्सिडी और मंडी भाव — आसान हिंदी में</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getHindiArticlesByFreshness().slice(0, TOP_ARTICLES_LIMIT).map((a) => {
              const categoryInfo = CATEGORIES[a.category] as { name: string; nameHi: string; icon?: string } | undefined;
              const emoji = categoryInfo?.icon || '';
              const categoryName = categoryInfo?.nameHi || categoryInfo?.name || 'Guide';
              return (
                <article
                  key={a.slug}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden flex flex-col no-underline h-full border border-amber-200/60 dark:border-gray-700 shadow-lg hover:shadow-2xl hover:shadow-amber-900/10 dark:hover:shadow-black/30 hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-500 ease-out hover:-translate-y-2"
                >
                  <Link href={`/articles/${a.slug}`} className="sr-only" aria-label={`पढ़ें: ${a.titleHi}`}>
                    {a.titleHi}
                  </Link>
                  <div className="relative overflow-hidden">
                    <ArticleImage image={a.ogImage || ''} emoji={emoji} title={a.titleHi} />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 text-amber-700 dark:text-amber-300 w-fit mb-4 border border-amber-200/50 dark:border-amber-700/50">
                      {emoji ? <span className="text-base" aria-hidden="true">{emoji}</span> : null}
                      <span>{categoryName}</span>
                    </span>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-300 mb-3 line-clamp-2">
                      {a.titleHi}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 flex-1 mb-5">{a.desc}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700/50">
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{AUTHOR_NAME}</span>
                      <Link href={`/articles/${a.slug}`} className="text-sm font-bold text-amber-700 dark:text-amber-400 group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-1.5" aria-label={`पढ़ें: ${a.titleHi}`}>
                        पढ़ें
                        <IconArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="text-center mt-14">
            <Link href="/articles/hi" className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-amber-600/30 hover:shadow-2xl hover:shadow-amber-600/40">
              <IconBookOpen className="w-5 h-5" />
              <span>सभी हिंदी गाइड देखें</span>
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

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: FAQS.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: { '@type': 'Answer', text: faq.answer },
                })),
              }),
            }}
          />
        </div>
      </section>

    </div>
  );
}
