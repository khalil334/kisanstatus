import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { MaandhanArticleMeta } from '@/lib/maandhan-data';
import { AUTHOR_NAME, AUTHOR_URL } from '@/lib/site-config';

const PUBLISHED = '2026-04-02T20:27:48+05:30';
const MODIFIED = '2026-05-02T08:42:07+05:30';

const RELATED_CARDS = [
  {
    slug: 'auto-debit-fail-hone-par-regularization-kaise-karein',
    title: 'Auto Debit Fail Ho Gaya — Ab Kya',
    desc: 'Chhooti hui kist ko regularize karne ka step-by-step rasta aur late charge ka hisaab.',
    
  },
  {
    slug: 'pmkmy-bank-account-change',
    title: 'Auto Debit Wala Bank Badalna',
    desc: 'Mandate naye account par shift karne ka process — purana account band hone se pehle.',
    
  },
  {
    slug: 'pm-kisan-maandhan-age-wise-contribution-chart-2026',
    title: 'Umar Ke Hisaab Se Contribution Chart',
    desc: 'Aapke account se har mahine kitna kategi — poori age-wise list ek jagah.',
    
  },
];

const FAQS_DATA = [
  {
    q: 'PM Kisan ke ₹2000 mein se ₹55 kyun kat gaye?',
    a: 'Jab aap PM Kisan Maandhan Yojana mein register karte hain, toh aapka bank account NACH auto-debit mandate ke liye link ho jata hai. Har baar jab PM Kisan ki kist aati hai, toh usme se aapka monthly share (₹55 se ₹200 tak) automatically kat jata hai.',
  },
  {
    q: 'Auto-debit band kaise karein PM Kisan Maandhan se?',
    a: 'Apni bank branch jakar NACH mandate cancellation form submit karein, ya net banking/mobile banking ke "Mandates" section se cancel karein. 5-7 din mein process complete ho jata hai. Cancellation ka acknowledgement receipt maang kar lein.',
  },
  {
    q: 'Kya PM Kisan aur PM Kisan Maandhan alag scheme hain?',
    a: 'Haan, dono bilkul alag hain. PM Kisan Samman Nidhi mein government aapko ₹6000 saal deti hai. PM Kisan Maandhan mein aap khud share dete hain taaki 60 saal ke baad ₹3000 pension mile. Dono ka koi direct link nahi hai, bas ek optional facility hai ke PM Kisan ki kist se aapka Maandhan share kat jaye.',
  },
  {
    q: '3 mahine contribution nahi diya toh kya hoga?',
    a: 'Aapka account default status mein chala jayega. Pehle mahine mein koi late fee nahi. Uske baad savings bank interest rate ki late fee lagti hai. 6 mahine tak payment nahi hui toh account dormant ho jayega. 3 saal tak regularize karne ka option rehta hai — poora outstanding + interest jama karke.',
  },
];

export default function PmKisanMaandhanAutoDebitPooraSach({ article }: { article: MaandhanArticleMeta }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: 'PM Kisan Se Maandhan Ka Paisa Kyun Kat Raha Hai? Auto Debit Ka Poora Sach',
              description:
                'PM Kisan ke ₹2000 mein se ₹55-200 kyun kat rahe hain? NACH auto-debit mandate, CSC pe sign kiya gaya form, aur contribution pay karne ka asli process samjhiye.',
              image: 'https://kisanstatus.com/images/articles/maandhan/auto-debit-confusion-hero.webp',
              inLanguage: 'hi-IN',
              keywords: 'PM Kisan Maandhan Auto Debit, PM Kisan se paisa kat raha hai, NACH mandate, PM-KMY contribution, CSC auto debit form',
              articleSection: 'Agriculture & Pension Schemes',
              wordCount: 1800,
              author: {
                '@type': 'Person',
                name: AUTHOR_NAME,
                url: AUTHOR_URL,
              },
              publisher: {
                '@type': 'Organization',
                name: 'KisanStatus',
                logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.png' },
              },
              datePublished: PUBLISHED,
              dateModified: MODIFIED,
              mainEntityOfPage: { '@type': 'WebPage', '@id': `https://kisanstatus.com/maandhan/${article.slug}` },
            },
            {
              '@type': 'FAQPage',
              mainEntity: FAQS_DATA.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            },
          ],
        }) }}
      />

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/maandhan" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Maandhan Yojana</Link>
            <span>/</span>
            <span className="text-white font-bold">Auto Debit Ka Sach</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Kisan Pension Scheme</span>

          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Se Maandhan Ka Paisa Kyun Kat Raha Hai? Auto Debit Ka Poora Sach
          </h1>

          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>12 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/auto-debit-confusion-hero.webp"
            alt="Farmer checking bank passbook confused about PM Kisan Maandhan auto debit deduction"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Bank passbook mein NACH debit entry dhyan se padhein
          </p>
        </div>

        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-xl">
          <p className="text-sm md:text-base text-red-900 dark:text-red-100 leading-relaxed font-medium">
            <strong>Sach Pehle Jaan Lijiye:</strong> Agar aapke PM Kisan ke ₹2000 mein se ₹55, ₹100, ya ₹200 kat rahe hain aur aapko samajh nahi aa raha ke yeh kahan jaa raha hai — toh ghabraiye mat. Aapne hi CSC center pe ek form sign kiya tha jismein likha tha ke PM Kisan ki kist se aapka Maandhan share kat jaye. Yeh chori nahi hai, yeh aapki khud ki pension ka hissa hai.
          </p>
        </div>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          PM Kisan Maandhan Yojana (PM-KMY) mein register karne ke baad kai farmers ke bank account se har kist ke saath ek fixed amount kat ta hai. Iska reason yeh hai ke enrollment ke waqt aapne ek NACH (National Automated Clearing House) auto-debit mandate sign kiya tha. Is mandate ke zariye aapne apne bank ko permission di thi ke jab bhi PM Kisan Samman Nidhi ki kist aaye, toh usme se aapka monthly share directly pension fund mein transfer kar diya jaye. Yeh process government ke official operational guidelines ke hisaab se chalta hai, jise LIC of India manage karti hai aur IDBI Bank sponsor bank ke taur par kaam karta hai.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Aaj main aapko yahan bataunga ke yeh katauti kaise kaam karti hai, kyun kat ta hai, kitna kat ta hai, aur agar aap chahein toh is process ko kaise control kar sakte hain. Saath hi yeh bhi samjhaunga ke agar kisi mahine payment miss ho jaye toh kya hota hai, aur default hone se kaise bacha jaye. Sab kuch official sources — PIB release, DAC&amp;FW operational guidelines, aur maandhan.in portal — se verify karke.
        </p>

        <section className="mb-8">
          <SH>PM Kisan aur PM Kisan Maandhan — Dono Alag Alag Hain</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sabse pehle ek basic confusion door karte hain. Bahut se kisan sochte hain ke PM Kisan aur PM Kisan Maandhan ek hi scheme hai. Nahi. Dono bilkul alag hain, alag ministry handle karti hai, aur alag purpose serve karte hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            PM Kisan Samman Nidhi ek direct benefit transfer scheme hai jismein government har saal ₹6000 aapke account mein bhejti hai — ₹2000 har 4 mahine mein. Ismein aapko kuch bhi pay nahi karna padta. Bas eligible hona chahiye.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            PM Kisan Maandhan Yojana ek contributory pension scheme hai. Ismein aap 18-40 saal ki umar ke beech join kar sakte hain. 60 saal ke baad aapko ₹3000 monthly pension milti hai. Lekin iske liye aapko har mahine ek fixed amount pay karna padta hai — jo aapki entry age ke hisaab se ₹55 se ₹200 tak hota hai. Government bhi utna hi amount match karti hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ab dono ka connection kya hai? Bas itna ke government ne ek optional facility di hai ke agar aap PM Kisan ke beneficiary hain, toh aap apna Maandhan share PM Kisan ki kist se katwa sakte hain. Isse aapko alag se cash jama karne ki tension nahi hoti. Lekin yeh optional tha — aapne enrollment ke waqt chuna tha. Agar aapne nahi chuna tha, toh aapke PM Kisan ke paise se kuch nahi katega.
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-xs border border-[var(--color-border)] rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[var(--color-bg-alt)] text-left">
                  <th className="p-2 font-black">Cheez</th>
                  <th className="p-2 font-black">PM Kisan Samman Nidhi</th>
                  <th className="p-2 font-black">PM Kisan Maandhan Yojana</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[var(--color-border)]"><td className="p-2 font-bold">Nature</td><td className="p-2">Direct income support — government gives money</td><td className="p-2">Contributory pension — you save for old age</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]"><td className="p-2 font-bold">Your role</td><td className="p-2">Nothing — just be eligible</td><td className="p-2">Pay monthly share till age 60</td></tr>
                <tr className="border-t border-[var(--color-border)]"><td className="p-2 font-bold">Money flow</td><td className="p-2">Govt → Your account</td><td className="p-2">Your account → Pension fund (managed by LIC)</td></tr>
                <tr className="border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]"><td className="p-2 font-bold">Link between both</td><td className="p-2" colSpan={2}>Optional: You can choose to deduct Maandhan share from PM Kisan benefit</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/csc-center-registration-form.webp"
            alt="CSC center pe farmer auto-debit mandate form sign kar raha hai with CSC operator"
            width={1000}
            height={560}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            CSC pe sign karte waqt form ke har section ko dhyan se padhein
          </p>
        </div>

        <section className="mb-8">
          <SH>NACH Auto-Debit Mandate: CSC Pe Aapne Kya Sign Kiya Tha?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jab aap CSC center pe gaye the PM-KMY ke liye enroll karne, toh operator ne aapko ek "enrolment-cum-auto-debit mandate form" diya tha. Is form ke last section mein ek declaration hota hai jismein likha hota hai ke aap authorize kar rahe hain ke aapke bank account se monthly contribution automatically debit ho jaye.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar aap PM Kisan ke beneficiary hain, toh alag se ek form aur hota hai — "enrolment-cum-auto-debit-mandate form for PM-Kisan benefits." Ismein aap specifically allow karte hain ke jis account mein PM Kisan ki kist aati hai, usi se aapka Maandhan share kat jaye.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Yeh form sign karne ke baad CSC operator uska scanned copy upload karta hai CSC-SPV system mein. Uske baad yeh data LIC ko transfer hota hai T+1 basis pe. LIC sponsor bank (IDBI) ke through NPCI portal pe mandate register karwati hai. Jab tak bank mandate confirm nahi karta, tab tak auto-debit start nahi hota.
          </p>
          <IB>
            Kai baar CSC operator jaldi jaldi mein form bharte hain aur farmer ko theek se nahi batate ke exactly kya sign ho raha hai. Kuch operators keh dete hain ke "Bas yeh PM Kisan ka form hai, sign kar do." Farmer samajhta hai ke sirf PM Kisan ki kist ke liye sign kar raha hai, jabki asal mein woh auto-debit mandate sign kar raha hota hai. Isliye hamesha form ke har section ko dhyan se padhein, aur agar kuch samajh nahi aaye toh operator se poochhein.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Kitna Katna Chahiye — Verify Karein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Aapke account se jo amount kat raha hai wo aapki entry age par fix hua tha — ₹55 (18 saal) se ₹200 (40 saal) tak. Har ek umar ka exact figure, government match ke saath, reference chart mein dekhein aur apni passbook entry se milayein:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/pm-kisan-maandhan-age-wise-contribution-chart-2026" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">Age-Wise Contribution Chart (18–40) →</Link>
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/bank-passbook-deduction-entry.webp"
            alt="Bank passbook showing PM Kisan credit and Maandhan auto debit deduction entries"
            width={1000}
            height={560}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Passbook mein "NACH Debit" ya "LIC-PMKMY" jaisa description dikhega
          </p>
        </div>

        <section className="mb-8">
          <SH>Agar Bank Account Mein Balance Nahi Hai Toh Kya Hota Hai? Default Ka Exact Process</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Yeh sabse important section hai. Kai kisan sochte hain ke "Maine toh mandate band kar diya tha apne man se, ab kuch nahi hoga." Lekin aisa nahi chalta. NACH mandate aapke bank mein tab tak active rehta hai jab tak aap officially cancel nahi karwate.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jab aapka monthly share due hota hai, toh LIC demand generate karti hai. Sponsor bank IDBI usse NPCI ke through aapke bank ko bhejta hai. Aapke bank try karta hai amount debit karne ka. Agar balance nahi hai, toh debit fail ho jata hai. Isko "bounced debit" kehte hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ab yahan official guidelines ka exact process samajhna zaroori hai. DAC&amp;FW ke operational guidelines ke hisaab se, agar debit fail hota hai, toh account "default" mein chala jata hai. Lekin usi waqt khatra nahi hai. LIC demand ko agle payment cycle mein dobara raise karti hai. Payment cycles har mahine 1st, 11th, aur 21st ko hote hain. Agar yeh dates public holiday hain, toh agla working day hota hai.
          </p>

          <div className="space-y-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-sm text-green-800 dark:text-green-300 mb-1">Pehle Mahine (First Unpaid)</p>
              <p className="text-xs text-[var(--color-text-muted)]">Koi late fee nahi lagti. Aap sirf due amount pay karke account regular karwa sakte hain. Teen payment cycles tak demand raise hoti hai bina kisi interest ke.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-sm text-amber-800 dark:text-amber-300 mb-1">1 Mahine Ke Baad</p>
              <p className="text-xs text-[var(--color-text-muted)]">Late fee lagti hai jo savings bank interest rate ke barabar hoti hai. Agar default 12 mahine se kam hai, toh simple interest calculate hota hai. Agar 12 mahine se zyada ho gaya, toh completed years ke liye compounding interest aur bache hue months ke liye simple interest lagta hai.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-sm text-red-800 dark:text-red-300 mb-1">6 Mahine Tak Payment Nahi Hui</p>
              <p className="text-xs text-[var(--color-text-muted)]">Account status "dormant" ho jata hai. Ab further demand raise nahi hoti, lekin 3 saal tak SMS alerts aate rehte hain. Is dauran bhi aap entire outstanding amount + interest jama karke account regular karwa sakte hain.</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl">
              <p className="font-black text-sm text-gray-800 dark:text-gray-300 mb-1">3 Saal Ke Baad</p>
              <p className="text-xs text-[var(--color-text-muted)]">SMS alerts band ho jate hain, lekin aap phir bhi call center ya online inquiry karke status check kar sakte hain. Account regularize karne ka option ab bhi available hai — poora due amount + applicable interest jama karke.</p>
            </div>
          </div>

          <WB>
            <strong>Default hone se bachne ke liye:</strong> Har hafte apne bank account ka balance check karein. Agar debit fail ho, toh us hafte hi CSC center jakar manual payment karein. 3 mahine se zyada gap mat dein. Agar kisi mahine PM Kisan ki kist late aayi, toh manual payment ka option use karein.
          </WB>
        </section>

        <section className="mb-8">
          <SH>Auto-Debit Band Kaise Karein? NACH Mandate Cancellation Ka Exact Process</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar aap chahte hain ke PM Kisan ke paise se share na kata jaye, balki aap khud alag se jama karein, toh aap ye mandate band karwa sakte hain. Lekin band karne se aapka monthly payment band nahi hota — aapko khud se jama karna padta hai, warna default ho jayega.
          </p>

          <StepList>
            <SI n={1}><strong>Net Banking / Mobile Banking Se:</strong> Apne bank ke net banking ya mobile banking app mein login karein. "Mandates" ya "Standing Instructions" section mein jayein. Active mandates ki list mein PM-KMY ya LIC wala mandate dhundein. Uspe "Cancel" ya "Delete" karein. Confirmation ke baad ek reference number milega — usse save kar lein. NPCI guidelines ke hisaab se cancellation 5 working days mein complete ho jata hai.</SI>
            <SI n={2}><strong>Bank Branch Ja Kar:</strong> Apni bank branch mein jayein aur NACH mandate cancellation form maangein. Form mein account number, mandate reference number (agar pata ho), scheme name (PM Kisan Maandhan Yojana), aur cancellation reason likhein. Saath mein Aadhaar card aur bank passbook le jayein. Form submit karne ke baad bank se acknowledgement receipt le lein. RBI aur NPCI guidelines ke hisaab se koi cancellation charge nahi lagti.</SI>
            <SI n={3}><strong>Confirmation:</strong> Aapko confirmation SMS aayega jismein UMR number, entity name, account ke last 4 digits, aur cancellation date likhi hogi. Process 5-7 working days mein complete hota hai.</SI>
          </StepList>

          <IB>
            Mandate cancel karne se aapka PM-KMY account band nahi hota. Sirf katauti rukti hai. Aapko ab har mahine khud se payment karni hogi — chahe CSC center ja kar cash dein, ya maandhan.in pe online pay karein, ya bank branch mein jama karwayein. Agar payment miss hui, toh wohi default process shuru ho jayega.
          </IB>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/bank-mandate-cancellation-form.webp"
            alt="Bank NACH mandate cancellation form being filled by farmer with bank officer"
            width={1000}
            height={560}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Bank se cancellation ka acknowledgement receipt leke aaiye
          </p>
        </div>

        <section className="mb-8">
          <SH>Manual Payment Ke Tareeke: Jab Auto-Debit Band Ho Gaya</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Mandate band karne ke baad aapke paas 3 tareeke hain apna share jama karne ke.
          </p>

          <div className="space-y-3 mb-4">
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5"></span>
                <div>
                  <p className="font-black text-sm text-[var(--color-text)] mb-1">CSC Center</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Yeh sabse aasan tareeqa hai gaon mein rehne wale farmers ke liye. Apne nazdeeki CSC center jayein. VLE (Village Level Entrepreneur) ke paas PM-KMY portal ka access hota hai. Aap cash dekar apna due amount jama karwa sakte hain. CSC wala aapko ek receipt dega — usse sambhal kar rakhein.</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <div className="flex items-start gap-3">
                <div>
                  <p className="font-black text-sm text-[var(--color-text)] mb-1">Online (maandhan.in)</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Agar aapke paas smartphone hai aur thodi internet samajh hai, toh aap official portal pe login karke payment kar sakte hain. Debit card, UPI, ya net banking se transaction ho jata hai. Login ke liye aapka registered mobile number aur OTP chahiye hoga.</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5"></span>
                <div>
                  <p className="font-black text-sm text-[var(--color-text)] mb-1">Bank Branch</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Kuch banks direct contribution accept karti hain pension schemes ke liye. Apni bank branch mein poochhiye ke kya woh PM-KMY ka payment accept karti hain. Agar haan, toh aap wahan cash ya cheque se jama karwa sakte hain. Lekin yeh facility har bank mein available nahi hoti, isliye pehle confirm kar lein.</p>
                </div>
              </div>
            </div>
          </div>

          <IB>
            Agar aap gaon mein hain aur CSC center aasani se available hai, toh ise band mat karo. Kyunki har mahine CSC jana ya online payment karna ek extra responsibility hai. Auto-debit mein aapka share time par chala jata hai aur account active rehta hai. Sirf tab band karo jab aapko sach mein problem ho rahi ho — jaise account change karna hai ya PM Kisan ki kist irregular aati hai.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Aksar Confusions Jo Kisanon Ke Mann Mein Rehti Hain</SH>
          <div className="space-y-3 mb-4">
            {[
              { title: '"Kya government ne meri marzi ke bagair paisa kat liya?"', desc: 'Nahi. Aapne hi enrollment form mein consent di thi. Form mein clearly likha hota hai ke aap authorize kar rahe hain automatic debit ke liye. Agar aapko yaad nahi, toh shayad CSC operator ne theek se explain nahi kiya tha. Lekin legally aapne sign kiya hai, isliye bank debit karne ka haq rakhta hai.' },
              { title: '"Kya main Maandhan se nikal kar PM Kisan ka pura paisa le sakta hoon?"', desc: 'Dono schemes ka koi direct link nahi hai. PM Kisan ka paisa aapko milta hi rahega chahe aap Maandhan mein ho ya na ho. Maandhan se exit karne ke rules aapke joining ke saalon par depend karte hain: 10 saal se pehle exit karne par sirf aapka deposited amount + savings bank interest wapas milta hai. 10 saal ke baad (lekin 60 saal se pehle) exit karne par contribution + accumulated interest milta hai.' },
              { title: '"Mera share zyada kyun kat raha hai? Maine toh ₹55 bola tha."', desc: 'Share aapki entry age ke hisaab se fix hota hai. 18 saal pe ₹55, 25 pe ₹80, 30 pe ₹105, 40 pe ₹200. Agar zyada kat raha hai, toh ho sakta hai enrollment ke waqt aapki date of birth galat enter hui ho. Date of birth kabhi change nahi hoti, lekin agar genuine mistake hai toh CSC pe correction request daal sakte hain.' },
              { title: '"Kya main apna share amount baad mein badal sakta hoon?"', desc: 'Nahi. Entry age ke hisaab se jo amount fix hua hai, woh poori scheme duration ke liye wahi rehta hai. Isliye enrollment se pehle apni financial situation thok-bajaa kar dekh lein.' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <p className="font-black text-sm text-[var(--color-text)] mb-1">{title}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/farmer-discussing-auto-debit-village.webp"
            alt="Group of farmers in village discussing PM Kisan Maandhan auto debit and pension scheme"
            width={1000}
            height={560}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Gaon mein ek-doosre se baat karke bhi clarity aa sakti hai
          </p>
        </div>

        <section className="mb-8">
          <SH>Aapka Paisa Safe Hai Ya Nahi? LIC Aur Pension Fund Ka Mechanism</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kai kisanon ke man mein yeh sawal rehta hai ke "Mera paisa kahan jaa raha hai? Koi bank mein jama ho raha hai ya kisi ne kha liya?"
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Aapka paisa bilkul safe hai. PM-KMY ek Central Sector Scheme hai jise Ministry of Agriculture &amp; Farmers Welfare administer karta hai. Pension fund manager LIC of India hai — jo Life Insurance Corporation Act, 1956 ke under established statutory corporation hai. Matlab yeh government ki hi company hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Aapka share aur government ka matching share dono alag alag track hote hain. Government ka co-contribution separately maintain hota hai LIC ke paas. Yeh amount pension payout ke liye use hota hai. Agar aap premature exit lete hain, toh sirf aapka deposited amount + interest wapas milta hai. Government ka share pension fund mein transfer ho jata hai wapas.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har contribution jama hone par aapke registered mobile number par SMS confirmation aata hai. Apna balance ya status verify karne ke liye maandhan.in ya pmkmy.gov.in portal par apna KPAN number ya mobile number daal kar login kar sakte hain, ya nazdeeki CSC center se bhi pata kar sakte hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            60 saal ke baad jo ₹3000 monthly pension milti hai, woh bhi LIC hi disburse karti hai. Pension aapke registered bank account mein credit hoti hai. Family pension ka provision bhi hai — agar subscriber ki death 60 saal ke baad hoti hai, toh spouse ko 50% pension (₹1500/month) milti hai.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Auto-Debit Ko Lekar Kisan Kya Poochhte Hain
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM-KMY Auto Debit Aur Contribution — Sawal Jawab" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Band Karwane Se Pehle SMS Trail Set Kar Lein</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Ye consent aapne enrollment par diya tha aur kabhi bhi wapas le sakte hain — lekin band karwane ke baad har mahine khud jama karne ki zimmedari aap par aa jaati hai, aur wahi woh mod hai jahan zyada tar accounts dormant hote hain. Isliye band karwane se pehle registered mobile number active karwa lein: har jama contribution ka SMS aata hai, aur jis mahine SMS na aaye, usi hafte KPAN se maandhan.in par balance check kar lein. Ye chhota sa trail 60 saal wali ₹3000 pension ko default se bachaata hai.
          </p>
        </div>

        <GovLink
          href="https://pmkmy.gov.in"
          label="PM Kisan Maandhan Official Portal"
          guide="Check Eligibility &amp; Status"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkmy.gov.in"
        />

        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Aur Jaankari Ke Liye</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RELATED_CARDS.map((card) => (
              <Link
                key={card.slug}
                href={`/maandhan/${card.slug}`}
                className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg hover:border-green-500 transition-all duration-300"
              >
                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-green-600 transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                  {card.desc}
                </p>
                <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                  Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <AuthorBox modified={MODIFIED} bioKey="PmKisanMaandhanAutoDebitPooraSach" />
        <BottomNav extraLinks={[
          { href: '/maandhan/pm-kisan-maandhan-registration-2026', l: 'Registration Guide' },
          { href: '/maandhan/pm-kisan-maandhan-pension-calculator', l: 'Calculator' },
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
