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
    body: `Puri kahani Bulandshahr zile ki Syana tehsil ke Narsena gaon se nikalti hai. Wahan ek FPO — kisano ka apna sangathan — ye kaam sambhal raha hai, aur aagwaai Dr. Praveen kar rahe hain.

Shuruat mein sirf apna gaon tha. Dheere-dheere aaspaas ke karib pandrah gaon jud gaye, aur aaj rozana kareeb paanch sau litre ikattha ho raha hai. Paanch sau litre sun kar bada lagta hai, par pandrah gaon mein baant dein to har gaon se ek-do can. Yani koi badi machinary nahi, bas roz ka thoda thoda.

Mahilaon ke samooh bhi is kaam mein seedhe jud gaye hain, aur unhe do rupaye prati litre alag se commission mil raha hai. Yani samooh ke zariye maal aaya to bechne wale ko barah rupaye tak ban jate hain. Ye choti si baat gaon mein bahut kaam karti hai, kyuki jama karne ka kaam ghar ki aurton ke haath mein hi rehta hai.`,
    img: {
      src: '/images/mahila-samooh-gau-mutra-commission.webp',
      alt: 'Gaon ki mahilaon ka samooh register mein rozana sangrahan ki entry karta hua',
    },
  },
  {
    tag: 'Maqsad',
    heading: 'Aakhir sarkaar karegi kya isse',
    body: `Jawaab jaivik kheti se juda hai, aur seedha hai. Jo tarl ikattha ho raha hai, usse jaivik keetnashak aur jeevamrit jaisi khaad banayi jaayegi. Maqsad ye ki mehengi rasayanik khaad par nirbharta thodi kam ho — DAP aur urea ke daam har saal chubhte hain, aur chote kisan ka pura hisab wahin bigadta hai.

Kendra sarkar ka National Mission on Natural Farming bhi isi disha me chal raha hai. Iske tehet gaon-gaon Bio-Input Resource Centre khole ja rahe hain — chhote kendra, jahan jeevamrit aur neemastra jaisi cheezein banti hain aur aaspaas ke kisano ko di jaati hain. In kendro ka kachcha maal wahi hai jo aapke baade mein roz nali mein beh jaata hai.

To dono taraf se baat milti hai. Sarkaar ko kache maal ki zarurat hai; kisan ke paas wo cheez roz banti hai aur muft behti hai. Bich mein ek sangrah kendra khada kar dein, aur ek nayi kadi ban jati hai.`,
    img: {
      src: '/images/jaivik-keetnashak-jeevamrit-nirman.webp',
      alt: 'Jeevamrit banane ke liye drum mein ghol taiyaar karta kisan',
    },
  },
  {
    tag: 'Wajah',
    heading: 'Yogi sarkaar ki soch ke peeche kya tark hai',
    body: `Soch yeh hai ki gaay jab doodh dena band kar de, tab bhi use paalna ghaate ka sauda na lage.

Iske peeche jo asli samasya hai, wo har gaon jaanta hai. Boodhi gaay ka chara-pani mahine bhar me thik-thak kharcha khada karta hai, aur badle mein doodh sifar. Isliye log use bech dete hain, ya sadak par chod dete hain. Awara pashu, fasal ka nuksan, raat bhar khet ki pehradaari — ye poori chain wahin se shuru hoti hai.

Ab agar wahi gaay khadi-khadi mahine ke kuch hazaar kama de, to samikaran badal jata hai. Aadmi use rakhega. Mera maanna hai ki is soch ka asli maqsad kamai se zyada yahi hai — gaay ko baade mein rokna.

Chhattisgarh mein bhi aisi ek scheme pehle chal chuki hai, wahan rate kam tha — chaar rupaye litre. To vichaar naya nahi hai, par das rupaye ka rate pehli baar sunai de raha hai.`,
    img: {
      src: '/images/desi-gaay-gaushala-bulandshahr.webp',
      alt: 'Gaushala mein boodhi desi gaay ko chara khilata hua kisan',
    },
  },
  {
    tag: 'Fayda',
    heading: 'Gaon walon ke liye asal mein matlab kya hai',
    body: `Teen baatein hain jo asal mein farq daalti hain.

Pehli — boodhi ya ghair-dudharu gaay bhi kamai ka zariya ban jaati hai. Pehle wo sirf kharcha thi. Ab roz chaar-paanch litre bhi bike to mahine bhar mein thik thak jod ban jaata hai, khaskar un gharon ke liye jinke paas doosra koi zariya nahi tha.

Dusri — paisa usi din. Doodh ka hisab mahine ke baad aata hai, dairy ki parchi ke sath. Isme raqam haath mein aa jaati hai, aur chhote ghar mein ye farq bada hota hai: bacche ki kitaab, dawa, ration, sab isi rozana ke paise se nikal jaata hai.

Tisri — jo chiz ab tak bekar thi, uski kimat lag gayi. Isse gaay ko dekhne ka nazariya badalta hai, aur mere hisaab se lambe samay mein iska asar rate se zyada hoga.`,
    img: {
      src: '/images/kisan-ko-turant-bhugtan-gau-mutra.webp',
      alt: 'Sangrah kendra par kisan ko nakad bhugtaan milta hua',
    },
  },
  {
    tag: 'Aage',
    heading: 'Pilot kaamyaab raha toh aage kya',
    body: `Filhal baat sirf Bulandshahr tak simit hai. Safal raha toh pure Uttar Pradesh mein failaya jayega, aur rate bees rupaye litre tak badhne ke sanket hain. Lekin yahi wo hissa hai jispar koi sarkari kaagaz ab tak nahi aaya — isliye ise ummeed maaniye, tay baat nahi.`,
  },
  {
    tag: 'Siyasat',
    heading: 'Siyasi galiyaron mein mili-juli pratikriya',
    body: `Samajwadi Party ne ise dikhawa bataya; BJP ka jawab tha ki vipaksh ko har vikas kaam mein kami nazar aati hai. Ye behas chalti rahegi. Zameen par itna hai ki Narsena ke gaanvon mein log iska fayda uthaate saaf dikh rahe hain — aur kisan ke liye bahas se zyada matlab isi baat ka hai.`,
  },
] as const;

/* ── Sangrahan: kaise ikattha karna hai ── */
const collectSteps = [
  {
    n: '1',
    h: 'Bartan sahi ho, aur sabun bilkul na bache',
    p: `Steel ki balti ya khaadya-star ka plastic drum — dono chalte hain. Loha aur tamba nahi, kyunki inke saath tarl kirya kar jaata hai. Aur ek baat jo log bhool jaate hain: sabun ki jhaag bilkul na bache. Do bar saaf pani se khangal lein, phir ulta rakh kar sukha lein. Sabun ki halki si parat bhi kendra ki jaanch mein pakdi jaati hai.`,
  },
  {
    n: '2',
    h: 'Waqt subah ka rakhein',
    p: `Jaivik kheti ke jaankaar subah uthte hi pehla mutra sabse achha maante hain — raat bhar rukne se woh gaadha rehta hai. Baade mein dhalaan wali jagah par ek chaudi thaali ya pipe laga dein, aur gaay ke uthte waqt paas khade rahein. Do-teen din mein aadat ban jaati hai, phir mushkil nahi lagta.`,
  },
  {
    n: '3',
    h: 'Chhaan kar aur dhakan lagakar rakhein',
    p: `Ghas-phus, mitti aur gobar ke tukde motta kapda ya jali se nikal dein. Iske baad bartan dhak dein, warna makkhi-machhar wahin ghar bana lete hain aur badbu pure baade me failti hai. Sach kahoon to ghar ke log pehle isi baat par naaraz hote hain, kaam se nahi.`,
  },
  {
    n: '4',
    h: 'Dhoop se dur, thandi jagah',
    p: `Sidhi dhup me rakha bartan garam hokar bhap chhodta hai aur halat badal jati hai. Chhaya wala kona, ya bori se dhaka drum — yahi behtar hai. Aur jitni jaldi kendra pahuncha dein, utna acha daam milne ki gunjaish rehti hai. Sham tak rakh chodne ka koi fayda nahi.`,
  },
  {
    n: '5',
    h: 'Paani milane ki galti kabhi na karein',
    p: `Matra badhane ka lalach aata hai, mai janta hu. Par kendra par har can ki jaanch hoti hai, aur ek baar milawat pakdi gayi to pure gaon ka bharosa jata hai — kai jagah aage lena hi band kar dete hain. Ye apni kamai ka rasta khud band karne wali baat hai.`,
  },
] as const;

/* ── Kahan bech sakte hain ── */
const channels = [
  {
    k: 'FPO ka sangrah kendra',
    v: `Sabse seedha rasta, aur Bulandshahr mein yahi model chal raha hai. Kisan can lekar aata hai, matra napi jaati hai, jaanch hoti hai, wahin bhugtaan. Apne zile ka FPO khojne ke liye block ke BDO daftar ya Krishi Vibhag se poochein.`,
  },
  {
    k: 'Gaushala aur pashu ashray sthal',
    v: `Badi gaushalayein khud jaivik khaad banati hain aur kachcha maal bahar se lena pasand karti hain, kyunki unki apni matra kaafi nahi padti. Nagar palika ya zila panchayat se judi gaushala ka pata asani se mil jaata hai.`,
  },
  {
    k: 'Bio-Input Resource Centre (BRC)',
    v: `Prakritik kheti mission ke tehet gaon star par khule ye kendra jeevamrit aur neemastra jaisi cheezein bana kar aage bechte hain, isliye inhe roz kachcha maal chahiye hota hai. Kendra sarkaar in kendron ko National Mission on Natural Farming ke tehet khada kar rahi hai — desh bhar mein das hazaar BRC ka lakshya hai. Zile ke Krishi Vigyan Kendra (KVK) se poochh lein ki aaspaas koi BRC hai ya nahi.`,
  },
  {
    k: 'Panchgavya aur ayurvedic units',
    v: `Kuch private units ise saaf kar ke, distil kar ke arq banati hain. Ye achhe daam de sakti hai, lekin matra aur safaai ke unke apne paimane hote hain. Pehle jaakar baat kar lein, phir jama karna shuru karein — warna maal tayar rahega aur kharidar nahi.`,
  },
  {
    k: 'Aaspaas ke jaivik kisan',
    v: `Jo padosi rasayan chhod kar prakritik tareeke par aa gaye hain, unhe har pandrah din drum bharne ke liye maal chahiye hota hai. Bina kisi bicholiye ka, sabse saral sauda — aur gadi ka kiraya bhi bach jata hai.`,
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
    p: `Koi kahe ki "registration ke paanch sau lagenge, phir roz uthwa lenge" — wahin ruk jaaiye. Kharidne wala paisa deta hai leta nahi. Yeh purana tareeka hai jo har nayi yojana ke saath gaon mein ghoomne lagta hai, sirf naam badal jaata hai.`,
  },
  {
    h: 'Bina tolai bhugtaan',
    p: `"Do can ka itna de deta hoon" — aisa sauda kabhi na karein. Matra napi jani chahiye, aapke samne, aur parchi milni chahiye. Bina naap ke nuksan hamesha bechne wale ka hota hai.`,
  },
  {
    h: 'Whatsapp par aane wale "form" aur link',
    p: `Is tarah ke kaam mein aadhaar-bank ki detail bharne wala koi online form nahi hota. Jo link OTP ya bank detail maange, use kholiye hi na. Sangrah kendra par baat aamne-saamne hoti hai. Ghar ke bacchon ko bhi ye baat bata dein, kyuki link unke phone par pehle pohanchta hai.`,
  },
  {
    h: 'Rate ka jhoota vaada',
    p: `Kisi ne bees ya pachaas rupaye litre ka laalach diya to pehle poochhein — kaun kharid raha hai, kahan le jaayega, aur pichhle mahine kisko paisa diya. Do teen gaon walo se pushti kar lein, phir haan bolein.`,
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
    a: 'Bulandshahr mein rate ₹10 litre hai. Ek gaay roz ka chaar litre de de to mahine ke barah sau ke aas-paas banta hai — bada paisa nahi, par ye doodh ke upar ki kamai hai, uski jagah nahi. Chaar gaay hain to hisaab chaar guna kar lijiye. Haan, mahila samooh se jude ghar ko ₹2 litre upar se milta hai.',
  },
  {
    q: 'Kya yeh poore UP mein shuru ho chuka hai?',
    a: 'Nahi. Abhi sirf Bulandshahr ke kuch gaanv. Baki zilon ke liye na koi aadesh aya hai, na tarikh. Koi kahe ki aapke zile mein bhi sarkari kharid chalu ho gayi — to pehle block daftar se pushti karein.',
  },
  {
    q: 'Kya kisi rajya mein sarkaar sach mein gau mutra kharidti hai?',
    a: 'Chhattisgarh mein kharidti rahi hai — Godhan Nyay Yojana, ₹4 litre, Gauthan kendron par. Scheme ka apna sarkari portal hai: godhannyay.cgstate.gov.in. Yani baat hawa-hawai nahi hai; bas UP mein abhi wo star ki vyavastha nahi bani.',
  },
  {
    q: 'Jama kahan karna padta hai, aur registration ka kya chakkar hai?',
    a: 'Sthaniya FPO ke sangrah kendra par. FPO apna register khud rakhta hai — koi online form, koi portal, koi fees nahi. Aapke ilaake mein kaun le raha hai, ye block ka BDO daftar ya KVK bata dega. Fees maangne wala aadmi galat hai, seedhi baat.',
  },
  {
    q: 'Paisa kab aur kaise milta hai?',
    a: 'Pilot mein usi din bhugtaan ki baat hai — nakad ya khaate mein, kharidne wale par nirbhar. Bas parchi zaroor lein, aur bina tolai ke sauda kabhi na karein.',
  },
  {
    q: 'Bhains ka bhi chalega ya sirf gaay ka?',
    a: 'Prakritik kheti ke paramparik nuskhe desi gaay ki baat karte hain — Sahiwal, Gir, Hariana jaisi naslein. Bhains par har kendra ki apni policy hai. Gadi bhar kar le jaane se pehle phone par hi poochh lein.',
  },
  {
    q: 'Gaay bimar ho ya dawa chal rahi ho to?',
    a: 'Tab jama na karein. Antibiotic ya koi ilaaj chal raha ho to pashu chikitsak se poochh lein ki kitne din rukna hai — ye maal khaad aur keetnashak mein jaata hai, isliye ye savdhani zaroori hai.',
  },
  {
    q: 'Kharidar hi na mile to jama karna bekar gaya?',
    a: 'Bilkul nahi. Jeevamrit khud bana lijiye — ek drum karib ek ekad ke liye kaafi maana jaata hai, aur khaad ki dukaan ka bill seedha ghat jaata hai. Upar poora tareeka diya hai. Kai ghar aadha bechte hain, aadha apne khet mein daalte hain.',
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
            Subha doodh ki can ke sath ab ek aur bartan bhi nikal raha hai — puri kahani niche ↓
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
            Niche do tarah ki baatein aayengi, aur main chahta hoon ki aap dono ka farq samajh lein.
          </p>
          <p className="mt-2 text-[14px] leading-7 text-[#D8C9DE]">
            Ek — Bulandshahr ke pilot ke ankde. Rate, gaon ki ginti, rozana kitna jama ho raha hai,
            mahilaon ka commission. Ye sab media reports aur zamini jankari se aya hai. Iska koi
            rajya-star ka sarkari aadesh, koi GO number, aaj tak samne nahi aya. Isliye jab tak wo
            kagaz na aye, ise ek chalta hua prayog maaniye — poore UP ki yojana nahi.
          </p>
          <p className="mt-2 text-[14px] leading-7 text-[#D8C9DE]">
            Do — khaad banane ka tareeka, sangrahan ke niyam, prakritik kheti wale mission ki baatein.
            Ye purani, jaanchi parkhi jankari hai. Isme kuch naya nahi hai, sirf wahi jo dashkon se
            kisan karte aaye hain.
          </p>
          <p className="mt-2 text-[14px] leading-7 text-[#D8C9DE]">
            Isliye rate aur vistaar par aakhri faisla apne block ke daftar se pushti karke hi lein.
            Main wahi likhta hoon jo pata hai; jo nahi pata, uska bhi zikr kar deta hoon — chhupata
            nahi.
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
            Yeh hissa dhyan se padhiye, kyuki daam yahin banta ya bigadta hai. Jo log pehle se kar
            rahe hain, unka tareeka lagbhag ek jaisa hai. Kendra par jaanch hoti hai aur ganda maal
            wapas bhi kiya jata hai, isliye paanch cheezein yaad rakhne layak hain.
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
            Bulandshahr ke bahar bhi maang hai. Bas woh ek yojana ki shakal mein nahi hai, isliye
            dikhti nahi. Paanch jagah hain jahan baat banne ki puri gunjaish rehti hai.
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
            Ek chhoti salaah jo main har kisi ko deta hoon: pehli baar pandrah bees litre le jakar
            dekh lein — jaanch kaise hoti hai, tolai kaise hoti hai, paisa kab milta hai. Bharosa
            ban ne ke baad hi rozana ka silsila banaye.
          </p>
        </div>

        {/* Bikta hai ya nahi — seedha jawab + kaise pakka karein */}
        <div className="mt-3 rounded-2xl bg-[#2A1830] p-5">
          <SectionLabel>Seedha sawaal, seedha jawab</SectionLabel>
          <h2 className="mt-2 text-lg font-bold text-[#F5EDE3]">
            Kya gau mutra sach mein bikta hai? Aur kaise pakka karein?
          </h2>
          <p className="mt-2 text-[15px] leading-7 text-[#D8C9DE]">
            Haan, bikta hai — lekin har jagah nahi, aur har jagah sarkari daam par nahi. Yeh baat
            saaf samajh lein, kyuki isi par sara faisla tikta hai.
          </p>
          <p className="mt-2 text-[15px] leading-7 text-[#D8C9DE]">
            Desh mein sarkari kharid ka sabse pakka udaharan Chhattisgarh ka hai. Wahan{' '}
            <a
              href="https://godhannyay.cgstate.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#FFB238] hover:text-[#F5EDE3]"
            >
              Godhan Nyay Yojana
            </a>{' '}
            ke tehet sarkaar Gauthan kendron par gau mutra chaar rupaye litre kharidti rahi hai —
            yeh scheme ka apna sarkari portal hai, koi sunee-sunayi baat nahi. Usi mutra se wahan
            Brahmastra keetnashak aur Jeevamrit banaya jaata hai.
          </p>
          <p className="mt-2 text-[15px] leading-7 text-[#D8C9DE]">
            UP mein abhi aisi rajya-vyapi sarkari kharid nahi hai — sirf Bulandshahr ka pilot hai,
            jiska zikr upar ho chuka. Baki zilon mein bikri private raston se hoti hai: gaushala,
            BRC, ayurvedic unit, ya jaivik kisan. Wahan daam aapas ki baat-cheet se tay hota hai —
            kahin paanch rupaye, kahin das, kahin usse zyada bhi, agar maal saaf aur bharosemand ho.
          </p>
          <p className="mt-3 text-[15px] leading-7 text-[#D8C9DE]">
            Jama karna shuru karne se <strong className="text-[#F5EDE3]">pehle</strong> yeh chaar
            kaam kar lein:
          </p>
          <ol className="mt-3 space-y-2">
            <li className="flex gap-3 rounded-xl bg-[#1B1023] px-4 py-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7FD1AE] text-[12px] font-black text-[#1B1023]">1</span>
              <p className="text-[14px] leading-6 text-[#D8C9DE]">
                <strong className="text-[#F5EDE3]">Kharidar khud dhundhein, intezaar na karein.</strong>{' '}
                Block ke BDO daftar ya zila Krishi Vibhag se poochein ki aaspaas koi FPO ya BRC
                gau mutra le raha hai ya nahi. KVK ko phone karna sabse tez raasta hai.
              </p>
            </li>
            <li className="flex gap-3 rounded-xl bg-[#1B1023] px-4 py-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7FD1AE] text-[12px] font-black text-[#1B1023]">2</span>
              <p className="text-[14px] leading-6 text-[#D8C9DE]">
                <strong className="text-[#F5EDE3]">Aamne-saamne teen sawaal poochein:</strong>{' '}
                rate kya hai, jaanch kaise hoti hai, aur paisa kab milta hai. Jo in teeno ka saaf
                jawab na de, uske bharose bartan mat bhariye.
              </p>
            </li>
            <li className="flex gap-3 rounded-xl bg-[#1B1023] px-4 py-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7FD1AE] text-[12px] font-black text-[#1B1023]">3</span>
              <p className="text-[14px] leading-6 text-[#D8C9DE]">
                <strong className="text-[#F5EDE3]">Pehla sauda chhota rakhein.</strong> Dus-pandrah
                litre le jaakar poora chakkar khud dekh lein — tolai, parchi, bhugtaan. Bharosa bane
                to hi rozana ka silsila shuru karein.
              </p>
            </li>
            <li className="flex gap-3 rounded-xl bg-[#1B1023] px-4 py-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7FD1AE] text-[12px] font-black text-[#1B1023]">4</span>
              <p className="text-[14px] leading-6 text-[#D8C9DE]">
                <strong className="text-[#F5EDE3]">Kharidar na mile to bhi mutra bekar nahi.</strong>{' '}
                Neeche jeevamrit ka poora tareeka diya hai — khud khaad banaiye, khaad ki dukaan ka
                bill ghataiye. Bechna aur banana, dono saath chal sakte hain.
              </p>
            </li>
          </ol>
        </div>

        {/* Jeevamrit table */}
        <div className="mt-3 rounded-2xl bg-[#2A1830] p-5">
          <SectionLabel>Khud banaiye</SectionLabel>
          <h2 className="mt-2 text-lg font-bold text-[#F5EDE3]">
            Ek drum jeevamrit — ghar ki cheezon se
          </h2>
          <p className="mt-2 text-[15px] leading-7 text-[#D8C9DE]">
            Ye raasta kisi aadesh ka intezaar nahi maangta, aur mere hisaab se aadhe kisano ke liye
            behtar hai. Prakritik kheti ka sabse purana nuskha jeevamrit hai: do sau litre ka ek drum
            karib ek ekad ke liye kaafi maana jaata hai, aur khaad ki dukan ka bill sidha girta hai.
            Matra ke ankdon mein jaankaaron ke beech thoda farq milta hai — isliye niche range di gayi
            hai, ek pakka aankda nahi.
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
            Sab drum mein daal kar lakdi se ghol lein. Upar bori dhak dein taaki hawa nikalti rahe —
            dhakan band mat kariye. Roz ek baar hilate rahein. Garmi mein do-teen din, sardi mein
            zyada waqt lagta hai. Taiyaar hone par upar jhaag aa jaata hai aur ek khatti gandh aati
            hai; yahi pehchaan hai. Banne ke baad hafte bhar ke andar khet mein de dein — paani ke
            saath, ya seedha jad ke paas.
          </p>
          <p className="mt-2 text-[15px] leading-7 text-[#D8C9DE]">
            Ek imaandaar baat: gud aur besan bazar se kharidne padte hain, to yeh bilkul muft nahi
            hai. Phir bhi utni zameen par rasayanik khaad ke bill se saamna karein to farq apne aap
            dikh jaata hai. Neem ki patti wale nuskhe — neemastra jaisi cheezein — bhi isi tarl se
            bante hain, aur sundi-keede ke liye kisan unhe kaam ka bataate hain.
          </p>
          <p className="mt-2 text-[15px] leading-7 text-[#D8C9DE]">
            Aur ye ek ya doosra chunne ka maamla nahi hai. Kai ghar aadha bech dete hain, aadha khud
            ke khet mein laga dete hain. Dono saath chal sakta hai. Waise gobar se bhi ek alag kamai
            ka rasta hai — humne{' '}
            <Link href="/articles/vermi-compost-business-guide" className="underline hover:text-[#F5EDE3]">
              vermi compost ke business
            </Link>{' '}
            par pehle likha tha, wo bhi padh lena, dono kaam ek hi baade se chalte hain.
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
            farq padta hai. Sabse imaandaar tareeka ye hai ki apne ghar ka aankda do-teen din khud
            naap lein, phir dus se guna kar lein. Kisi ke bataye aankde par ghar ka hisaab na
            banaiye.
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
            hai. Iske liye alag se aadmi rakhna pade, to hisaab dobara karna padega — kyunki phir
            majoori is kamai se bahut kam nahi bachegi.
          </p>
          <p className="mt-2 text-[15px] leading-7 text-[#D8C9DE]">
            Aur haan, agar gaay hi nahi hai aur kharidne ki soch rahe hain to karza lene se pehle{' '}
            <Link href="/articles/dairy-farm-loan-without-collateral" className="underline hover:text-[#F5EDE3]">
              bina zamanat wale dairy loan
            </Link>{' '}
            ke baare mein padh lein — sirf is das rupaye wali kamai ke bharose gaay lena samajhdari
            nahi hogi.
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
            nikal padte hain. Waise hi jaise{' '}
            <Link href="/articles/KisanCreditCardOnlineApply2026" className="underline hover:text-[#F5EDE3]">
              KCC banwane
            </Link>{' '}
            ke naam par dalal ghoomte hain. Chaar nishaniyan yaad rakh lein, aur ghar ke logon ko
            bhi bata dein.
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
                <a
                  href="https://nlm.udyamimitra.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#C9A8D6] hover:text-[#F5EDE3]"
                >
                  nlm.udyamimitra.in
                </a>{' '}
                par hota hai. Bakri palan
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
                Jaivik khaad ka asar tab samajh aata hai jab mitti ki haalat pehle se pata ho.
                Mera suggestion hai ki ye sabse pehle karwa lein, warna do saal baad pata nahi
                chalta ki farq aaya ya nahi. Soil Health Card muft banta hai —{' '}
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
          <div className="mt-3 rounded-xl bg-[#1B1023] px-4 py-3">
            <p className="text-[12px] font-bold uppercase tracking-wide text-[#7FD1AE]">
              Sarkari website — seedha link
            </p>
            <ul className="mt-2 space-y-1.5 text-[13px] leading-6 text-[#D8C9DE]">
              <li>
                · Godhan Nyay Yojana (Chhattisgarh — gau mutra kharid):{' '}
                <a
                  href="https://godhannyay.cgstate.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#FFB238] hover:text-[#F5EDE3]"
                >
                  godhannyay.cgstate.gov.in
                </a>
              </li>
              <li>
                · National Mission on Natural Farming (BRC / jeevamrit):{' '}
                <a
                  href="https://naturalfarming.dac.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#FFB238] hover:text-[#F5EDE3]"
                >
                  naturalfarming.dac.gov.in
                </a>
              </li>
              <li>
                · UP Pashupalan Vibhag:{' '}
                <a
                  href="http://animalhusb.upsdc.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#FFB238] hover:text-[#F5EDE3]"
                >
                  animalhusb.upsdc.gov.in
                </a>
              </li>
              <li>
                · Sarkari yojnaon ki ek jagah jaankari:{' '}
                <a
                  href="https://www.myscheme.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#FFB238] hover:text-[#F5EDE3]"
                >
                  myscheme.gov.in
                </a>
              </li>
            </ul>
          </div>
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
            Aur agar aapke zile tak yeh baat na bhi pahunche, tab bhi ek raasta khula hai. Drum
            bhariye, khaad khud banaiye, apne khet par lagaiye — isme kisi aadesh ka intezaar nahi
            karna padta.
          </p>
          <p className="mt-2 text-[15px] leading-7 text-[#D8C9DE]">
            Jo cheez ab tak nali mein beh rahi thi, woh khet ke kaam aa jaaye. Itni shuruat kaafi
            hai.
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
