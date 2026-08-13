import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME, AUTHOR_IMAGE, AUTHOR_LINKEDIN } from '@/lib/site-config';
import { getAuthorBio } from '@/lib/author-bios';

const HERO_IMAGE = {
  src: '/images/gau-mutra-kharid-yojana-bulandshahr-hero.webp',
  alt: 'Bulandshahr ke gaon mein kisan subah steel ke bartan mein tarl ikattha karta hua',
} as const;

const bullets = [
  {
    tag: 'Shuruat',
    heading: 'Shuruat kahan se hui',
    body: `Poori baat Bulandshahr zile ki Syana tehsil ke Narsena gaon se shuru hoti hai. Yahan ek FPO kaam sambhal raha hai, agua'i Dr. Praveen kar rahe hain. Aaspaas ke karib pandrah gaon isse jud chuke hain, aur rozana karib paanch sau litre ikattha ho raha hai.

Mahilaon ke samooh bhi seedhe jud gaye hain, unhe alag se do rupaye prati litre ka commission mil raha hai.`,
    img: {
      src: '/images/mahila-samooh-gau-mutra-commission.webp',
      alt: 'Gaon ki mahilaon ka samooh register mein rozana sangrahan ki entry karta hua',
    },
  },
  {
    tag: 'Maqsad',
    heading: 'Aakhir sarkaar karegi kya isse',
    body: `Jawaab seedha jaivik kheti se juda hai. Jo tarl ikattha ho raha hai, usse jaivik keetnashak aur jeevamrit jaisi khaad taiyaar hogi, taaki mehngi rasayanik khaad par nirbharta kam ho.

Kendra sarkaar ka National Mission on Natural Farming bhi isi disha mein chal raha hai — gaon-gaon Bio-Input Resource Centre khole ja rahe hain, jahan yahi cheezein bana kar aaspaas ke kisano ko di jaati hain. Kachcha maal wahan bhi wahi hai jo aapke gaay ke baade mein roz beh jaata hai.`,
    img: {
      src: '/images/jaivik-keetnashak-jeevamrit-nirman.webp',
      alt: 'Jeevamrit banane ke liye drum mein ghol taiyaar karta kisan',
    },
  },
  {
    tag: 'Wajah',
    heading: 'Yogi sarkaar ki soch ke peeche kya tark hai',
    body: `Soch yeh hai ki gaay doodh dena band kar de tab bhi use paalna ghaate ka sauda na lage, taaki log use sadak par na chhode. Chhattisgarh mein bhi pehle aisi scheme chal chuki hai, wahan rate kam tha — chaar rupaye litre.

Ek boodhi gaay ka chara-paani mahine ka theek-thaak kharcha khada karta hai, aur badle mein doodh sifar. Yahi wajah hai ki kisan use bech dete hain ya chhod dete hain. Agar wahi gaay khadi-khadi kuch kama de, to sameekaran badal jaata hai.`,
    img: {
      src: '/images/desi-gaay-gaushala-bulandshahr.webp',
      alt: 'Gaushala mein boodhi desi gaay ko chara khilata hua kisan',
    },
  },
  {
    tag: 'Fayda',
    heading: 'Gaon walon ke liye asal mein matlab kya hai',
    body: `Boodhi ya ghair-dudharu gaay bhi ab kamai ka zariya ban sakti hai. Roz chaar-paanch litre bechne par mahine bhar mein ek theek-thaak jod ban jaata hai, khaaskar un gharon ke liye jinke paas doosra zariya nahi tha.

Doodh ke paise mahine ke hisaab se aate hain, is kaam mein raqam usi din haath mein aa jaati hai. Chhote ghar mein yeh farq bada hota hai — dawa, kitaab, ration ka kharcha isi se nikal jaata hai.`,
    img: {
      src: '/images/kisan-ko-turant-bhugtan-gau-mutra.webp',
      alt: 'Sangrah kendra par kisan ko nakad bhugtaan milta hua',
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
] as const;

/* ── Sangrahan: kaise ikattha karna hai ── */
const collectSteps = [
  {
    n: '1',
    h: 'Bartan pehle se taiyaar rakhein',
    p: `Steel ki balti ya khaadya-star ka plastic drum — dono chalte hain. Loha aur tamba nahi, kyunki inke saath tarl kirya kar jaata hai. Bartan mein pehle sabun ya detergent na rehne dein; sirf paani se do baar khangal lein aur ulta rakh kar sukha lein.`,
  },
  {
    n: '2',
    h: 'Waqt subah ka rakhein',
    p: `Jaivik kheti ke jaankaar subah uthte hi pehla mutra sabse achha maante hain — raat bhar rukne se woh gaadha rehta hai. Baade mein dhalaan wali jagah par ek chaudi thaali ya pipe laga dein, aur gaay ke uthte waqt paas khade rahein.`,
  },
  {
    n: '3',
    h: 'Chhaan kar aur dhakan lagakar rakhein',
    p: `Ghaas-phoos, mitti aur gobar ke tukde motta kapda ya jaali se nikal dein. Iske baad bartan dhak dein, warna makkhi-machchar apna ghar bana lete hain aur badbu poore baade mein failti hai.`,
  },
  {
    n: '4',
    h: 'Dhoop se dur, thandi jagah',
    p: `Sidhi dhoop mein rakha bartan garam ho kar bhaap chhodta hai aur haalat badal jaati hai. Chhaya wala kona, ya bori se dhaka drum — yahi behtar hai. Ikattha karne ke baad jitni jaldi kendra pahuncha dein, utna achha daam milne ki gunjaish rehti hai.`,
  },
  {
    n: '5',
    h: 'Paani milane ki galti kabhi na karein',
    p: `Matra badhane ke liye paani milane ka lalach aata hai. Kendra par har can ki jaanch hoti hai, aur ek baar milawat pakdi gayi to poore gaon ka bharosa jaata hai — kai jagah aage lena hi band kar dete hain. Kamai ka rasta khud band karne wali baat hai yeh.`,
  },
] as const;

/* ── Kahan bech sakte hain ── */
const channels = [
  {
    k: 'FPO ka sangrah kendra',
    v: `Sabse seedha rasta. Bulandshahr mein yahi model chal raha hai — kisan can lekar aata hai, matra napi jaati hai, jaanch hoti hai, wahin bhugtaan. Apne zile ka FPO khojne ke liye block ke BDO daftar ya Krishi Vibhag se poochhein.`,
  },
  {
    k: 'Gaushala aur pashu ashray sthal',
    v: `Badi gaushalayein khud jaivik khaad banati hain aur kachcha maal bahar se bhi lena pasand karti hain. Nagar palika ya zila panchayat se judi gaushala ka pata aasani se mil jaata hai.`,
  },
  {
    k: 'Bio-Input Resource Centre (BRC)',
    v: `Prakritik kheti mission ke tehet gaon star par khule ye kendra jeevamrit, neemastra jaisi cheezein bana kar aage bechte hain. Inhe roz kachcha maal chahiye hota hai. Zile ke Krishi Vigyan Kendra (KVK) se poochhein ki aaspaas koi BRC hai ya nahi.`,
  },
  {
    k: 'Panchgavya aur ayurvedic units',
    v: `Kuch private units ise saaf kar ke, distil kar ke arq banati hain. Ye ache daam de sakti hain, lekin maatra aur safaai ke unke apne paimane hote hain — pehle jaakar baat kar lein, phir jama karna shuru karein.`,
  },
  {
    k: 'Aaspaas ke jaivik kisan',
    v: `Jo padosi rasayan chhod kar prakritik tareeke par aa gaye hain, unhe har pandrah din drum bharne ke liye maal chahiye. Bina kisi bichauliye ka, sabse saral sauda — aur gaadi ka kiraya bhi bach jaata hai.`,
  },
] as const;

/* ── Jeevamrit: ghar par banane ka tareeka ── */
const jeevamritRows: readonly (readonly [string, string, string])[] = [
  ['Paani', '200 litre', 'Drum bharne ke liye; klorin wala nal ka paani ho to ek raat khula rakh dein'],
  ['Desi gaay ka gobar', '10 kilo', 'Taaza ho, sookha nahi'],
  ['Desi gaay ka mutra', '5–10 litre', 'Alag-alag jaankaar alag matra bataate hain'],
  ['Gud', '1–2 kilo', 'Purana, kaala gud bhi chal jaata hai'],
  ['Besan ya dal ka aata', '1–2 kilo', 'Chana, moong ya urad — jo ghar mein ho'],
  ['Khet ki mitti', 'ek mutthi', 'Us khet se, jahan rasayan na pada ho'],
];

/* ── Paisa: hisaab kitaab ── */
const moneyRows: readonly (readonly [string, string, string])[] = [
  ['1 gaay', '~4 litre roz', 'Sabse aam sthiti — ghar ki ek gaay'],
  ['2 gaay', '~8 litre roz', 'Chhota pashupalak ghar'],
  ['4 gaay', '~15 litre roz', 'Doodh ke saath yeh doosri aamdani'],
  ['Mahila samooh ke zariye', 'wahi matra, upar +₹2/litre', 'Bulandshahr pilot mein samooh se jude gharon ko'],
];

/* ── Dhoke se bachav ── */
const warnings = [
  {
    h: 'Advance paisa maangne wala agent',
    p: `Koi kahe ki "registration ke paanch sau lagenge, phir roz uthwa lenge" — wahin ruk jaayein. Kharidne wala paisa deta hai, leta nahi. Yeh purana tareeka hai jo har nayi yojana ke saath gaon mein ghoomne lagta hai.`,
  },
  {
    h: 'Bina tolai bhugtaan',
    p: `"Do can ka itna de deta hoon" — aisa sauda kabhi na karein. Matra napi jaani chahiye, aapke saamne, aur parchi milni chahiye. Bina naap ke nuksan hamesha bechne wale ka hota hai.`,
  },
  {
    h: 'Whatsapp par aane wale "form" aur link',
    p: `Is tarah ke kaam mein aadhaar-bank ki detail bharne wala koi online form nahi hota. Jo link OTP ya bank detail maange, use kholiye hi na. Sangrah kendra par baat aamne-saamne hoti hai.`,
  },
  {
    h: 'Rate ka jhoota vaada',
    p: `Kisi ne bees ya pachaas rupaye litre ka laalach diya to pehle poochhein — kaun kharid raha hai, kahan le jaayega, aur pichhle mahine kisko paisa diya. Do-teen gaon walon se pushti kar lein, phir haan bolein.`,
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
  {
    q: 'Kaunsi nasl ki gaay chalegi?',
    a: 'Prakritik kheti ke nuskhon mein desi nasl bataayi jaati hai — Sahiwal, Gir, Hariana, Tharparkar jaisi. Kharidne wala kendra apni shart khud batata hai, isliye pehle jaakar poochh lena behtar hai.',
  },
  {
    q: 'Bimar gaay ya dawa chal rahi ho to?',
    a: 'Us dauran jama karna theek nahi. Antibiotic ya koi ilaaj chal raha ho to pashu chikitsak se poochh lein ki kab tak rukna hai.',
  },
  {
    q: 'Bartan kaisa hona chahiye?',
    a: 'Steel ya khaadya-star ka plastic, saaf aur dhakan wala. Loha-tamba nahi. Sabun ki jhaag bilkul na bache.',
  },
  {
    q: 'Kitne din tak rakh sakte hain?',
    a: 'Jitna taaza, utna achha. Do-teen din se zyada rakhne par gandh aur haalat badalti hai, aur kendra par jaanch mein dikkat aa sakti hai.',
  },
  {
    q: 'Bechne ke bajaye khud khaad banaun to?',
    a: 'Kai kisan yahi karte hain. Ek drum jeevamrit karib ek ekad ke liye kaafi maana jaata hai, aur khaad ka kharcha seedha ghat jaata hai. Bechna aur khud banana — dono ek saath bhi chal sakte hain.',
  },
  {
    q: 'Buffalo ka bhi liya jaata hai?',
    a: 'Prakritik kheti ke paramparik nuskhe desi gaay ki baat karte hain. Bhains ke maamle mein kendra ki apni policy hoti hai — jama karne se pehle saaf poochh lein, warna gaadi bhar kar wapas laani padegi.',
  },
  {
    q: 'Registration jaisa kuch karana padta hai?',
    a: 'Bulandshahr wale model mein FPO apne saath jude gharon ka register rakhta hai. Koi online portal ya fees ki baat samne nahi aayi hai. Fees maangne wale se door rahein.',
  },
  {
    q: 'Paisa nakad milta hai ya khaate mein?',
    a: 'Pilot mein turant bhugtaan ki baat kahi gayi hai. Aapke gaon mein kaun kharid raha hai, uske hisaab se nakad ya khaate — dono ho sakta hai. Parchi zaroor lein.',
  },
  {
    q: 'Kis sarkari daftar se jaankari milegi?',
    a: 'Zila Krishi Vibhag, block ka BDO daftar, ya Krishi Vigyan Kendra. Prakritik kheti aur BRC se judi baat KVK behtar bataata hai.',
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

function SectionLabel({ children, tone = 'amber' }: { children: React.ReactNode; tone?: 'amber' | 'mint' }) {
  const color = tone === 'mint' ? 'text-[#7FD1AE]' : 'text-[#FFB238]';
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${color}`}>{children}</p>
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
          <SectionLabel>🐄 Kheti News</SectionLabel>
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

        {/* Verification status — kya pukhta hai, kya nahi */}
        <div className="mt-3 rounded-2xl border border-[#4A2E52] bg-[#241430] p-5">
          <SectionLabel tone="mint">Pehle yeh saaf kar dein</SectionLabel>
          <p className="mt-2 text-[14px] leading-7 text-[#D8C9DE]">
            Niche do tarah ki baatein hain, aur dono ka darja alag hai. Bulandshahr ke pilot se judi
            sankhyayein — rate, gaon, rozana matra, commission — mediya reports aur zameeni jaankari
            se aayi hain; iska koi rajya-star ka sarkari aadesh ab tak samne nahi aaya. Doosri taraf
            khaad banane ka tareeka, sangrahan ke niyam aur kendra sarkaar ki prakritik kheti se judi
            baatein purani, jaanchi-parkhi jaankari hain.
          </p>
          <p className="mt-2 text-[14px] leading-7 text-[#D8C9DE]">
            Isliye rate aur vistaar par aakhri faisla apne block ke daftar se pushti karke hi lein.
            Hum yahan wahi likhte hain jo pata hai — jo nahi pata, uska bhi zikr karte hain.
          </p>
        </div>

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

        {/* Sangrahan — numbered steps, alag layout */}
        <div className="mt-3 rounded-2xl bg-[#2A1830] p-5">
          <SectionLabel>Kaam ki baat · ikattha kaise karein</SectionLabel>
          <h2 className="mt-2 text-lg font-bold text-[#F5EDE3]">
            Subah ke pandrah minute, aur baaki din ka kaam ho gaya
          </h2>
          <p className="mt-2 text-[15px] leading-7 text-[#D8C9DE]">
            Jo log pehle se kar rahe hain, unka tareeka lagbhag ek jaisa hai. Kuch cheezein aisi hain
            jinme galti hui to poori mehnat bekaar chali jaati hai — woh yahan hain.
          </p>
          <ol className="mt-4 space-y-3">
            {collectSteps.map((s) => (
              <li key={s.n} className="flex gap-3 rounded-xl bg-[#1B1023] px-4 py-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFB238] text-[12px] font-black text-[#1B1023]">
                  {s.n}
                </span>
                <div>
                  <p className="text-[14px] font-bold text-[#F5EDE3]">{s.h}</p>
                  <p className="mt-1 text-[14px] leading-6 text-[#D8C9DE]">{s.p}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-3 overflow-hidden rounded-xl">
            <Image
              src="/images/fpo-sangrah-kendra-gau-mutra.webp"
              alt="Sangrah kendra par bartan mein laaya gaya tarl naapa jaata hua"
              width={1200}
              height={669}
              loading="lazy"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Kahan bech sakte hain — definition-list layout */}
        <div className="mt-3 rounded-2xl bg-[#241430] p-5">
          <SectionLabel tone="mint">Bikri ke raste</SectionLabel>
          <h2 className="mt-2 text-lg font-bold text-[#F5EDE3]">
            Aapke zile mein kharidne wala kaun ho sakta hai
          </h2>
          <p className="mt-2 text-[15px] leading-7 text-[#D8C9DE]">
            Bulandshahr ke bahar bhi maang hai, bas woh ek yojana ki shakal mein nahi hai. Paanch
            jagah hain jahan baat banne ki poori gunjaish rehti hai.
          </p>
          <dl className="mt-4 space-y-3">
            {channels.map((c) => (
              <div key={c.k} className="rounded-xl bg-[#1B1023] px-4 py-3">
                <dt className="text-[14px] font-bold text-[#FFB238]">{c.k}</dt>
                <dd className="mt-1 text-[14px] leading-6 text-[#D8C9DE]">{c.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-[13px] leading-6 text-[#9C86A6]">
            Ek chhoti salaah: pehli baar pandrah-bees litre le jaakar dekh lein ki jaanch kaise hoti
            hai aur paisa kab milta hai. Bharosa banne ke baad hi rozana ka silsila banayein.
          </p>
        </div>

        {/* Jeevamrit table */}
        <div className="mt-3 rounded-2xl bg-[#2A1830] p-5">
          <SectionLabel>Khud banaiye</SectionLabel>
          <h2 className="mt-2 text-lg font-bold text-[#F5EDE3]">
            Ek drum jeevamrit — ghar ki cheezon se
          </h2>
          <p className="mt-2 text-[15px] leading-7 text-[#D8C9DE]">
            Prakritik kheti ka sabse purana nuskha yahi hai. Do sau litre ka ek drum karib ek ekad ke
            liye kaafi maana jaata hai, aur khaad ki dukaan ka bill seedha girta hai. Matra ke
            aankdon mein jaankaaron ke beech thoda farq milta hai — isliye niche range di gayi hai,
            ek pakka aankda nahi.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-[#3A2440]">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#1B1023]">
                  <th className="px-3 py-2 text-[11px] uppercase tracking-wide text-[#9C86A6]">
                    Cheez
                  </th>
                  <th className="px-3 py-2 text-[11px] uppercase tracking-wide text-[#9C86A6]">
                    Matra
                  </th>
                  <th className="px-3 py-2 text-[11px] uppercase tracking-wide text-[#9C86A6]">
                    Note
                  </th>
                </tr>
              </thead>
              <tbody>
                {jeevamritRows.map(([a, b, c]) => (
                  <tr key={a} className="border-t border-[#3A2440]">
                    <td className="px-3 py-2 text-[13px] font-semibold text-[#F5EDE3]">{a}</td>
                    <td className="px-3 py-2 text-[13px] text-[#FFB238]">{b}</td>
                    <td className="px-3 py-2 text-[12px] leading-5 text-[#9C86A6]">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[15px] leading-7 text-[#D8C9DE]">
            Sab drum mein daal kar lakdi se ghol lein. Upar bori dhak dein, hawa nikalti rahe. Roz
            ek baar hilaate rahein. Garmi mein do-teen din, sardi mein zyada waqt lagta hai; taiyaar
            hone par jhaag aur ek khatti gandh aati hai. Banne ke baad haftay bhar ke andar khet
            mein de dein — paani ke saath, ya seedha jad ke paas.
          </p>
          <p className="mt-2 text-[15px] leading-7 text-[#D8C9DE]">
            Gud aur besan bazaar se kharidne padte hain, to yeh muft nahi hai. Phir bhi utni zameen
            par rasayanik khaad ke bill se saamna karein to farq apne aap dikh jaata hai. Neem ki
            patti wale nuskhe — neemastra jaisi cheezein — bhi isi tarl se bante hain, aur sundi-keede
            ke liye kisan unhe kaam ka bataate hain.
          </p>
          <div className="mt-3 overflow-hidden rounded-xl">
            <Image
              src="/images/jaivik-kheti-keetnashak-spray.webp"
              alt="Kisan gehun ke khet mein jaivik ghol ka chhidkaav karta hua"
              width={1200}
              height={669}
              loading="lazy"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Paisa hisaab */}
        <div className="mt-3 rounded-2xl bg-[#241430] p-5">
          <SectionLabel tone="mint">Hisaab</SectionLabel>
          <h2 className="mt-2 text-lg font-bold text-[#F5EDE3]">
            Roz ka jod mahine mein kitna banta hai
          </h2>
          <p className="mt-2 text-[15px] leading-7 text-[#D8C9DE]">
            Neeche wali matra andaaza hai, waada nahi — gaay ki nasl, umar, chara aur mausam sab se
            farq padta hai. Apne ghar ka aankda do-teen din khud naap kar nikal lein, phir dus se
            guna kar lein. Yahi sabse imaandaar tareeka hai.
          </p>
          <div className="mt-4 space-y-2">
            {moneyRows.map(([a, b, c]) => (
              <div key={a} className="rounded-xl bg-[#1B1023] px-4 py-3">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-[14px] font-bold text-[#F5EDE3]">{a}</p>
                  <p className="text-[13px] font-semibold text-[#FFB238]">{b}</p>
                </div>
                <p className="mt-1 text-[12px] leading-5 text-[#9C86A6]">{c}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[15px] leading-7 text-[#D8C9DE]">
            Ek baat jo koi nahi batata: mehnat aur waqt bhi kharcha hai. Subah ka pandrah-bees minute,
            bartan dhona, kendra tak pahunchana. Chalte-firte kaam ke saath ho jaaye to fayda saaf
            hai; iske liye alag se aadmi rakhna pade to hisaab dobara karna padega.
          </p>
        </div>

        {/* Warnings */}
        <div className="mt-3 rounded-2xl border border-[#5A2A2A] bg-[#2A1830] p-5">
          <SectionLabel>Savdhaan</SectionLabel>
          <h2 className="mt-2 text-lg font-bold text-[#F5EDE3]">
            Nayi baat aate hi thag bhi aa jaate hain
          </h2>
          <p className="mt-2 text-[15px] leading-7 text-[#D8C9DE]">
            Jab bhi gaon mein kamai ki koi nayi baat chalti hai, do-chaar log usi hafte fayda uthane
            nikal padte hain. Chaar nishaniyan yaad rakh lein.
          </p>
          <div className="mt-4 space-y-3">
            {warnings.map((w) => (
              <div key={w.h} className="rounded-xl bg-[#1B1023] px-4 py-3">
                <p className="text-[14px] font-bold text-[#E8836F]">⚠ {w.h}</p>
                <p className="mt-1 text-[14px] leading-6 text-[#D8C9DE]">{w.p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sarkari raste */}
        <div className="mt-3 rounded-2xl bg-[#241430] p-5">
          <SectionLabel tone="mint">Sarkari madad</SectionLabel>
          <h2 className="mt-2 text-lg font-bold text-[#F5EDE3]">
            Pashupalan par paisa lagana ho to kahan jaayein
          </h2>
          <p className="mt-2 text-[15px] leading-7 text-[#D8C9DE]">
            Yeh kaam apne aap mein badi aamdani nahi hai — sahara hai. Lekin agar aap desi nasl
            badhane ya shed banane ki soch rahe hain, to kendra sarkaar ki do yojnayein isi kaam ki
            hain, aur dono ka apna portal hai.
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl bg-[#1B1023] px-4 py-3">
              <p className="text-[14px] font-bold text-[#FFB238]">Rashtriya Gokul Mission</p>
              <p className="mt-1 text-[14px] leading-6 text-[#D8C9DE]">
                Desi nasl ke sudhaar aur sanrakshan par kaam karti hai — nasl badhane wale farm,
                behtar saand, kritrim garbhadhan. Hamare paas iski alag guide hai:{' '}
                <Link
                  href="/articles/rashtriya-gokul-mission-subsidy"
                  className="underline hover:text-[#F5EDE3]"
                >
                  Gokul Mission subsidy ki poori jaankari
                </Link>
                .
              </p>
            </div>
            <div className="rounded-xl bg-[#1B1023] px-4 py-3">
              <p className="text-[14px] font-bold text-[#FFB238]">
                Rashtriya Pashudhan Mission (NLM)
              </p>
              <p className="mt-1 text-[14px] leading-6 text-[#D8C9DE]">
                Bakri, murgi, sooar aur chara ikaiyon par poonji sahayta deti hai. Aavedan{' '}
                <span className="text-[#C9A8D6]">nlm.udyamimitra.in</span> par hota hai. Bakri palan
                ka hisaab dekhna ho to{' '}
                <Link
                  href="/articles/bakri-palan-yojana-nlm-subsidy"
                  className="underline hover:text-[#F5EDE3]"
                >
                  bakri palan subsidy wali guide
                </Link>{' '}
                padh lein.
              </p>
            </div>
            <div className="rounded-xl bg-[#1B1023] px-4 py-3">
              <p className="text-[14px] font-bold text-[#FFB238]">Zameen ki jaanch pehle</p>
              <p className="mt-1 text-[14px] leading-6 text-[#D8C9DE]">
                Jaivik khaad ka asar tab samajh aata hai jab mitti ki haalat pata ho. Soil Health
                Card muft banta hai —{' '}
                <Link
                  href="/articles/soil-health-card-complete-guide-2026"
                  className="underline hover:text-[#F5EDE3]"
                >
                  card banwane ka tareeka yahan hai
                </Link>
                .
              </p>
            </div>
          </div>
          <p className="mt-3 text-[13px] leading-6 text-[#9C86A6]">
            Subsidy ke aankde saal-dar-saal badalte hain. Jo bhi raqam kahin padhein, aavedan se
            pehle usi yojana ke sarkari portal par ya zila pashupalan adhikari se pushti kar lein.
          </p>
        </div>

        {/* summary grid — like a shared-status card */}
        <div className="mt-3 rounded-2xl bg-[#241430] p-5">
          <SectionLabel tone="mint">📌 Poori baat ek nazar mein</SectionLabel>
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
          <SectionLabel>❓ Aksar poochhe gaye sawaal</SectionLabel>
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
          <SectionLabel tone="mint">Ant mein</SectionLabel>
          <p className="mt-2 text-[15px] leading-7 text-[#D8C9DE]">
            Bulandshahr ka yeh chhota sa prayog agar aage chalkar poore rajya mein failaya gaya, toh
            un lakhon parivaron ko seedha fayda mil sakta hai jo saalon se maveshi paalte aaye hain,
            magar poora laabh ab tak nahi utha paaye.
          </p>
          <p className="mt-2 text-[15px] leading-7 text-[#D8C9DE]">
            Aur agar aapke zile tak yeh baat na bhi pahunche, tab bhi ek raasta khula hai — drum
            bharo, khaad khud banao, apne khet par lagao. Isme kisi aadesh ka intezaar nahi karna
            padta. Jo cheez ab tak naali mein beh rahi thi, woh khet ke kaam aa jaaye, itna hi kaafi
            shuruat hai.
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
