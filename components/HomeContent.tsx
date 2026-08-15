import Link from 'next/link';
import Image from 'next/image';
import { ARTICLES, getArticlesByFreshness, CATEGORIES } from '@/lib/articles-data';
import { getHindiArticlesByFreshness } from '@/lib/hindi-articles-data';
import { SITE_URL, AUTHOR_NAME, WHATSAPP_CHANNEL_URL } from '@/lib/site-config';
import SearchBar from './SearchBar';
import FaqItem from './FaqItem';

import { TOOLS, FAQS, IconArrowRight, IconBookOpen, IconCheck } from './home-data';

const TOP_ARTICLES_LIMIT = 3;

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.174-.297-.019-.458.13-.606.132-.132.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.05-.52-.099-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.896 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function FeaturedImageCard({ src, title, desc, border }: { src: string; title: string; desc: string; border: string }) {
  return (
    <figure className={`group relative rounded-3xl overflow-hidden shadow-2xl border-4 ${border} hover:shadow-3xl transition-all duration-500 hover:-translate-y-2`} style={{ aspectRatio: '3/2' }}>
      <Image
        src={src}
        alt={title}
        fill
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
        quality={80}
        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiEycf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xVsgH1fZ//2Q=="
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" aria-hidden="true" />
      <figcaption className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="text-white font-black text-2xl mb-2 drop-shadow-lg">{title}</h3>
        <p className="text-gray-200 text-base drop-shadow-md">{desc}</p>
      </figcaption>
    </figure>
  );
}

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
              <strong className="text-white">PM Kisan Samman Nidhi</strong> (Ministry of Agriculture) ki
              <strong className="text-white"> 24vi kist October 2026</strong> mein expected hai!
              <strong className="text-white"> ₹2,000</strong> seedha bank account mein via
              <strong className="text-white"> Direct Benefit Transfer (DBT)</strong>.
              <strong className="text-white"> eKYC</strong> complete karo,
              <strong className="text-white"> beneficiary status</strong> verify karo — sab kuch bilkul free!
              {' '}Payment status mein FTO dikh raha hai?{' '}
              <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="underline font-bold text-white hover:text-green-200">
                FTO full form aur FTO generated ka matlab yahan samjhein
              </Link>.
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

      <section className="py-14 bg-white dark:bg-gray-900" aria-labelledby="whatsapp-heading">
        <div className="container-site mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-green-200 dark:border-green-800/60 bg-gradient-to-br from-[#25D366]/10 via-green-50 to-emerald-50 dark:from-[#25D366]/10 dark:via-gray-800/60 dark:to-gray-900 shadow-sm">
            <div className="p-7 md:p-10 flex flex-col md:flex-row md:items-center gap-7">
              <div className="shrink-0 mx-auto md:mx-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30">
                <IconWhatsApp className="w-9 h-9 md:w-11 md:h-11 text-white" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2
                  id="whatsapp-heading"
                  className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2 tracking-tight"
                >
                  WhatsApp Channel Par Judein
                </h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-xl">
                  Kist ki date announce hoti hai ya beneficiary list update hoti hai, to main
                  wahi cheez channel par post kar deta hoon — bina afwaah, bina spam. Roz
                  message nahi aayega, sirf jab kaam ki baat ho.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  — {AUTHOR_NAME}, KisanStatus
                </p>
              </div>

              <div className="shrink-0 text-center">
                <a
                  href={WHATSAPP_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold px-7 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-[#25D366]/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
                  aria-label="KisanStatus WhatsApp Channel join karein (naye tab mein khulega)"
                >
                  <IconWhatsApp className="w-5 h-5" />
                  Channel Join Karein
                </a>
              </div>
            </div>
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

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900" aria-labelledby="featured-heading">
        <div className="container-site mx-auto px-4">
          <div className="text-center mb-14">
            <h2 id="featured-heading" className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
              Bharat Ki Kheti
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Hamari Pehchaan — Hamari Shaan</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <FeaturedImageCard
              src="/annadata-farmers-group.webp"
              title="Hamare Annadata"
              desc="Bharat ki kheti - duniya ki sabse badi kheti"
              border="border-green-400 dark:border-green-600"
            />
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

      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50" aria-labelledby="modern-farming-heading">
        <div className="container-site mx-auto px-4">
          <div className="text-center mb-14">
            <h2 id="modern-farming-heading" className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
              Aadhunik Kheti
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Technology se badhti kheti ki kamai</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <FeaturedImageCard
              src="/digital-farming-tech.webp"
              title="Aadhunik Kheti"
              desc="Technology se badhti kheti ki kamai"
              border="border-blue-400 dark:border-blue-600"
            />
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
                { href: '/articles/PmKisan24viKist2026', title: 'Status Check', desc: 'Kist aayi ya nahi', color: 'from-blue-500 to-cyan-500' },
                { href: '/articles/KisanCreditCardOnlineApply2026', title: 'KCC Apply', desc: '₹5 Lakh Loan', color: 'from-green-500 to-emerald-500' },
                { href: '/articles/PmKisanBeneficiaryList2026', title: 'Beneficiary List', desc: 'Naam check karo', color: 'from-red-500 to-pink-500' },
                { href: '/articles/soil-health-card-complete-guide-2026', title: 'Soil Health Card', desc: 'Mitti test karo', color: 'from-purple-500 to-indigo-500' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group relative bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center hover:shadow-2xl hover:border-transparent transition-all duration-500 hover:-translate-y-2 overflow-hidden" aria-label={`${link.title}: ${link.desc}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} aria-hidden="true" />
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${link.color} mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`} aria-hidden="true">
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

    </div>
  );
}
