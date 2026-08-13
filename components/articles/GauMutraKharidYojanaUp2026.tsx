import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME, AUTHOR_IMAGE, AUTHOR_LINKEDIN } from '@/lib/site-config';
import { getAuthorBio } from '@/lib/author-bios';

const HERO_IMAGE = {
  src: '/images/gau-mutra-kharid-yojana-bulandshahr-hero.webp',
  alt: 'Bulandshahr ke gaon mein kisan subah gau mutra steel bartan mein ikattha karta hua',
} as const;

const bullets = [
  {
    tag: 'Shuruat',
    heading: 'Shuruat kahan se hui',
    body: `Poori baat Bulandshahr zile ki Syana tehsil ke Narsena gaon se shuru hoti hai. Yahan ek FPO kaam sambhal raha hai, agua'i Dr. Praveen kar rahe hain. Aaspaas ke karib pandrah gaon isse jud chuke hain, aur rozana karib paanch sau litre ikattha ho raha hai.

Mahilaon ke samooh bhi seedhe jud gaye hain, unhe alag se do rupaye prati litre ka commission mil raha hai.`,
    img: {
      src: '/images/mahila-samooh-gau-mutra-commission.webp',
      alt: 'Gaon ki mahilaon ka samooh register mein gau mutra sangrahan ki entry karta hua',
    },
  },
  {
    tag: 'Maqsad',
    heading: 'Aakhir sarkaar karegi kya isse',
    body: `Jawaab seedha jaivik kheti se juda hai. Jo tarl ikattha ho raha hai, usse jaivik keetnashak aur jeevamrit jaisi khaad taiyaar hogi, taaki mehngi rasayanik khaad par nirbharta kam ho.`,
    img: {
      src: '/images/jaivik-keetnashak-jeevamrit-nirman.webp',
      alt: 'Jeevamrit aur jaivik keetnashak banane ke liye drum mein ghol taiyaar karta kisan',
    },
  },
  {
    tag: 'Wajah',
    heading: 'Yogi sarkaar ki soch ke peeche kya tark hai',
    body: `Soch yeh hai ki gaay doodh dena band kar de tab bhi use paalna ghaate ka sauda na lage, taaki log use sadak par na chhode. Chhattisgarh mein bhi pehle aisi scheme chal chuki hai, wahan rate kam tha — chaar rupaye litre.`,
    img: {
      src: '/images/desi-gaay-gaushala-bulandshahr.webp',
      alt: 'Gaushala mein boodhi desi gaay ko chara khilata hua kisan',
    },
  },
  {
    tag: 'Fayda',
    heading: 'Gaon walon ke liye asal mein matlab kya hai',
    body: `Boodhi ya ghair-dudharu gaay bhi ab kamai ka zariya ban sakti hai. Roz chaar-paanch litre bechne par mahine bhar mein ek theek-thaak jod ban jaata hai, khaaskar un gharon ke liye jinke paas doosra zariya nahi tha.`,
    img: {
      src: '/images/kisan-ko-turant-bhugtan-gau-mutra.webp',
      alt: 'Sangrah kendra par kisan ko gau mutra ke badle turant nakad bhugtaan milta hua',
    },
  },
  {
    tag: 'Aage',
    heading: 'Pilot kaamyaab raha toh aage kya',
    body: `Filhaal sirf Bulandshahr tak seemit hai. Safal raha toh poore Uttar Pradesh mein failaya jaayega, aur rate bees rupaye litre tak badhne ke sanket hain.`,
  },
  {
    tag: 'Siyasat',
    heading: 'Siyasi galiyaron mein mili-juli pratikriya',
    body: `Samajwadi Party ne ise dikhawa bataya, BJP ne kaha vipaksh ko har vikas kaam mein kami nazar aati hai. Zameen par Narsena ke gaanvon mein log fayda uthaate saaf dikh rahe hain.`,
  },
  {
    tag: 'Tareeka',
    heading: 'Bechna kahan aur kaise hai',
    body: `Sthaniya FPO ke sangrah kendra par saaf bartan lekar jaana hota hai, matra naapi jaati hai, milawat check hoti hai, aur turant bhugtaan mil jaata hai.`,
    img: {
      src: '/images/fpo-sangrah-kendra-gau-mutra.webp',
      alt: 'FPO sangrah kendra par bartan mein laaya gaya gau mutra naapa jaata hua',
    },
  },
  {
    tag: 'Disha',
    heading: 'Jaivik kheti ki taraf ek aur kadam',
    body: `Rasayanik khaad mehngi hoti ja rahi hai aur mitti ko nuksaan pahunchati hai. Yeh model chala toh sabse zyada fayda chhote-mazhole kisano ko hoga.`,
    img: {
      src: '/images/jaivik-kheti-keetnashak-spray.webp',
      alt: 'Kisan gehun ke khet mein jaivik keetnashak ka chhidkaav karta hua',
    },
  },
] as const;

const summary: readonly (readonly [string, string])[] = [
  ['Jagah', 'Bulandshahr · Syana tehsil · Narsena'],
  ['Rate', '₹10 / litre'],
  ['Gaon shamil', '~15'],
  ['Rozana jama', '~500 litre'],
  ['Dekhrekh', 'FPO, Dr. Praveen'],
  ['Mahila commission', '+₹2 / litre'],
  ['Istemaal', 'Keetnashak · Jeevamrit'],
  ['Aage', 'Rajya-vyapi vistaar ho sakta hai'],
];

const faqs = [
  {
    q: 'Isse kitni kamai ho sakti hai?',
    a: 'Rate ₹10/litre hai — jitna zyada jama, utna zyada fayda. Ghar ke maveshiyon ki sankhya par nirbhar hai.',
  },
  {
    q: 'Kya yeh poore UP mein shuru ho chuka hai?',
    a: 'Nahi, abhi sirf Bulandshahr ke kuch gaanvon mein pilot chal raha hai.',
  },
  { q: 'Jama kahan karna padta hai?', a: 'Sthaniya FPO ke sangrah kendra par.' },
  { q: 'Mahilaon ko alag fayda milta hai?', a: 'Haan, +₹2 prati litre commission.' },
  { q: 'Istemaal kis kaam mein hoga?', a: 'Jaivik keetnashak aur jeevamrit khaad banane mein.' },
  {
    q: 'Doosre zilon mein kab aayega?',
    a: 'Abhi tareekh tay nahi, pilot ke natijon par nirbhar.',
  },
] as const;

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

function ForwardBadge() {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#3A2440] px-3 py-1 text-[11px] font-medium text-[#C9A8D6]">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden="true">
        <path
          d="M4 12h13M11 6l6 6-6 6"
          stroke="#C9A8D6"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Forwarded many times · Kisan Bulletin
    </div>
  );
}

function Bubble({
  tail,
  children,
  className = '',
}: {
  tail?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl bg-[#2A1830] px-5 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] ${className}`}
    >
      {tail && (
        <span
          aria-hidden="true"
          className="absolute -left-[6px] top-6 h-3 w-3 rotate-45 bg-[#2A1830]"
        />
      )}
      {children}
    </div>
  );
}

function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function GauMutraKharidYojanaUp2026({ article }: { article: ArticleMeta }) {
  return (
    <div className="min-h-screen w-full bg-[#1B1023] px-3 py-8 sm:px-0 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="mx-auto max-w-md sm:max-w-lg">
        <nav
          aria-label="Breadcrumb"
          className="mb-3 flex flex-wrap items-center gap-1 text-[11px] text-[#9C86A6]"
        >
          <Link href="/" className="hover:text-[#F5EDE3]">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/articles" className="hover:text-[#F5EDE3]">
            Articles
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#D8C9DE]">Gau Mutra Kharid Yojana</span>
        </nav>

        <ForwardBadge />

        <Bubble tail>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFB238]">
            🐄 Kheti News
          </p>
          <h1 className="mt-2 text-2xl font-extrabold leading-tight text-[#F5EDE3] sm:text-[28px]">
            Gaay ke mutra se bhi ab ghar chalega! Bulandshahr ke kisano ko mil rahe 10 rupaye litre
          </h1>
          <p className="mt-3 text-[15px] leading-7 text-[#D8C9DE]">
            Subah doodh ki can ke saath ab ek aur bartan bhi nikal raha hai — poori kahani niche ↓
          </p>
          <div className="mt-4 overflow-hidden rounded-xl">
            <Image
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              width={1200}
              height={669}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-[11px] text-[#9C86A6]">
            <span>
              <Link href="/about" className="underline hover:text-[#F5EDE3]">
                {AUTHOR_NAME}
              </Link>
            </span>
            <span>{fmtDate(article.publishedTime)}</span>
            <span>Updated: {fmtDate(article.modifiedTime)}</span>
          </div>
          <p className="mt-4 text-[13px] leading-6 text-[#C9A8D6]">
            Hindi mein padhna hai?{' '}
            <Link
              href="/articles/hi/gau-mutra-kharid-yojana"
              className="underline hover:text-[#F5EDE3]"
            >
              गाय के मूत्र खरीद योजना — हिंदी रिपोर्ट
            </Link>
          </p>
        </Bubble>

        <div className="mt-3 space-y-3">
          {bullets.map((b, i) => (
            <Bubble key={b.heading} tail={i === 0}>
              <span className="inline-block rounded-md bg-[#FFB238]/15 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#FFB238]">
                {b.tag}
              </span>
              <h2 className="mt-2 text-lg font-bold text-[#F5EDE3]">{b.heading}</h2>
              {b.body.split('\n\n').map((para, j) => (
                <p key={j} className="mt-2 text-[15px] leading-7 text-[#D8C9DE]">
                  {para}
                </p>
              ))}
              {'img' in b && b.img && (
                <div className="mt-3 overflow-hidden rounded-xl">
                  <Image
                    src={b.img.src}
                    alt={b.img.alt}
                    width={1200}
                    height={669}
                    loading="lazy"
                    className="h-auto w-full object-cover"
                  />
                </div>
              )}
            </Bubble>
          ))}
        </div>

        {/* summary grid — like a shared-status card */}
        <div className="mt-3 rounded-2xl bg-[#241430] p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7FD1AE]">
            📌 Poori baat ek nazar mein
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {summary.map(([label, value]) => (
              <div key={label} className="rounded-xl bg-[#1B1023] px-3 py-2.5">
                <p className="text-[10px] uppercase tracking-wide text-[#9C86A6]">{label}</p>
                <p className="mt-0.5 text-[14px] font-semibold text-[#F5EDE3]">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ as expandable message bubbles */}
        <div className="mt-3 rounded-2xl bg-[#2A1830] p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFB238]">
            ❓ Aksar poochhe gaye sawaal
          </p>
          <div className="mt-3 space-y-2">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl bg-[#1B1023] px-4 py-3 open:pb-3">
                <summary className="flex cursor-pointer list-none items-center justify-between text-[14px] font-semibold text-[#F5EDE3] marker:content-none">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="ml-2 shrink-0 text-[#FFB238] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-2 text-[14px] leading-6 text-[#D8C9DE]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <Bubble className="mt-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7FD1AE]">
            Ant mein
          </p>
          <p className="mt-2 text-[15px] leading-7 text-[#D8C9DE]">
            Bulandshahr ka yeh chhota sa prayog agar aage chalkar poore rajya mein failaya gaya, toh
            un lakhon parivaron ko seedha fayda mil sakta hai jo saalon se maveshi paalte aaye hain,
            magar poora laabh ab tak nahi utha paaye.
          </p>
        </Bubble>

        {/* author box — same info as the standard AuthorBox, styled for the bulletin theme */}
        <div className="mt-3 flex items-start gap-4 rounded-2xl bg-[#241430] p-5">
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-[#7FD1AE]">
            <Image
              src={AUTHOR_IMAGE}
              alt={AUTHOR_NAME}
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2">
              <Link
                href="/about"
                className="text-[14px] font-bold text-[#F5EDE3] underline-offset-2 hover:underline"
              >
                {AUTHOR_NAME}
              </Link>
              <a
                href={AUTHOR_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${AUTHOR_NAME} on LinkedIn`}
                className="text-[#7FD1AE] transition-opacity hover:opacity-80"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </span>
            <p className="mt-0.5 text-[11px] font-semibold text-[#7FD1AE]">
              Sarkari yojana information — official sources se verified
            </p>
            <p className="mt-1 text-[12px] leading-5 text-[#9C86A6]">
              {getAuthorBio(article.slug)}
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-[11px] tracking-wide text-[#6E5A76]">
          🔁 Aage share karein · Kisan Status Bulletin
        </p>
      </div>
    </div>
  );
}
