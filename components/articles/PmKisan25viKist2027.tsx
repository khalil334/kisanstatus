import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-02-09T08:58:39+05:30';
const MODIFIED = '2026-08-14T18:05:00+05:30';

const RELATED = [
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Generated Ka Matlab' },
  { slug: 'pm-kisan-self-registered-status-check', title: 'Self-Registered Status Check' },
  { slug: 'PmKisanVillageWiseListPdfDownload', title: 'Gaon Ki List PDF Mein Dekhein' },
];

const FAQS_DATA = [
  {
    q: '25vi kist ki exact date kya hai?',
    a: 'Bhai, koi exact date nahi hai abhi. Jo bhi internet par dates chal rahi hain — February 2027, March 2027 — woh sab andaza hain. Sarkar jab announce karegi, tabhi pata chalega. Hum guess nahi karte.',
  },
  {
    q: 'Kya 25vi mein paisa badhega?',
    a: '₹2,000 hi chal raha hai 2019 se. Har budget ke time afwah aati hai ki ₹2,500 ya ₹3,000 ho jayega — kabhi hua nahi. Iss baar bhi shayad nahi hoga. Agar hua toh hum update karenge.',
  },
  {
    q: 'Kist na aaye toh kahan phone karein?',
    a: 'PM Kisan helpline 155261 hai, toll free. Dusra number 011-24300606. Call karne se pehle apna registration number nikaal kar rakhna, bina uske woh log kuch nahi bata paate. Subah ke time line jaldi lagti hai.',
  },
  {
    q: 'Har kist ke liye naya registration karna padta hai?',
    a: 'Nahi bhai. Ek baar ho gaya toh ho gaya. Bas eKYC aur bank details sahi rakho. Automatic aata rehta hai har kist.',
  },
  {
    q: '24vi nahi mili, toh 25vi milegi?',
    a: 'Haan, milni chahiye. Missed kist alag se aati hai kabhi kabhi. Pehle apni eligibility check karo — eKYC, bank seeding sab theek hai ya nahi.',
  },
  {
    q: 'Naya farmer registration ki last date kya hai?',
    a: 'Koi last date nahi hai. Jab chaho karo. Bas verification mein time lagta hai, toh jaldi karoge toh agli kist mein naam aane ke chances zyada honge.',
  },
  {
    q: 'Koi naya rule aa raha hai 2027 mein?',
    a: 'Farmer ID (AgriStack) kai states mein mandatory ho raha hai. Baaki amount badhna ya eligibility change — inka koi official confirmation nahi hai abhi tak.',
  },
  {
    q: 'Status kab se check karna shuru karoon?',
    a: 'Jaldi kya hai? Jab news mein date aane lage, tab hafte mein ek baar dekh lena kaafi hai. Roz roz check karne se jaldi nahi aayegi.',
  },
  {
    q: 'YouTube wale bol rahe hain date confirm ho gayi — sach hai?',
    a: 'Nahi. Views ke liye "confirm date" wali thumbnail lagate hain. PM Kisan ki date sirf pmkisan.gov.in ya PIB press release se confirm hoti hai. Wahan nahi hai matlab kahin nahi hai. Itna simple.',
  },
];

export default function PmKisan25viKist2027({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">25vi Kist Guide</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan 25vi Kist 2027: Kab Aayegi, Kitni Milegi — Sach Yeh Hai Ki Abhi Kisi Ko Pata Nahi
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>8 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/pm-kisan-25vi-kist-2027/hero-25vi-kist.webp'}
            alt="Farmer checking PM Kisan 25vi kist status on mobile phone 2027"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            25vi Kist — Abhi Sirf Intezaar Hai, Koi Pakki Date Nahi
          </p>
        </div>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Internet pe bahut saare articles 25vi kist ki "exact date" bata rahe hain. February 2027, March 2027 — jo mann mein aaya likh diya. Kisi ne source tak nahi diya.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Sach ye hai ki koi nahi jaanta. Sarkar advance mein date announce nahi karti — kabhi ki hi nahi. Aur <Link href="/articles/PmKisan24viKist2026" className="text-[var(--color-primary)] underline font-medium">24vi kist</Link> khud abhi tak nahi aayi hai, toh 25vi ki date ka sawal hi kahan uthta hai.
        </p>

        <WB>
          <strong>Pehle hi bata dein:</strong> Yeh article predictions de raha hai, promises nahi. Jo hum definitely jaante hain woh likhenge. Baaki sab andaza hai.
        </WB>

        <section className="mb-8 mt-8">
          <SH>Ab tak ka record — teen confirmed kisten</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            21vi, 22vi, 23vi — ye teen ho chuki hain. Dates confirm hain, records mein hain. 24vi ka intezaar chal raha hai — uska pura update <Link href="/articles/PmKisan24viKist2026" className="text-[var(--color-primary)] underline">yahan alag article</Link> mein rakha hai jo hum regularly update karte hain.
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Kist</th>
                  <th className="p-3 text-left">Kab Aayi</th>
                  <th className="p-3 text-left">Kitna Paisa</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['21vi', '19 Nov 2025', '₹2,000', 'Aa chuki ✓'],
                  ['22vi', '13 Mar 2026', '₹2,000', 'Aa chuki ✓'],
                  ['23vi', '20 Jun 2026', '₹2,000', 'Aa chuki ✓'],
                  ['24vi', 'Oct–Nov 2026 expected', '₹2,000 (hi rahega)', 'Intezaar'],
                  ['25vi', 'Uske 3-4 mahine baad', '₹2,000 (andaza)', 'Door ki baat'],
                ].map(([kist, date, amount, status], i) => (
                  <tr key={kist} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{kist}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{date}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-bold">{amount}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Gap dekho — November se March tak chaar mahine lage. March se June tak teen mahine. Scheme ka official rule bhi yehi hai — saal mein teen kisten, har chaar mahine mein ek, total ₹6,000. Lekin zameen par release date aage peeche hoti rehti hai.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Matlab koi fix pattern nahi hai. Jo log confidently "February 2027" bol rahe hain, wo bas guess maar rahe hain. Agar 24vi October–November 2026 ke aas paas aati hai, toh 25vi uske teen-chaar mahine baad banti hai — lekin ye bhi hisaab hai, date nahi.
          </p>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-25vi-kist-2027/installment-timeline-chart.webp"
            alt="PM Kisan installment release timeline gap chart 2025-2027"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            PM Kisan Installment Timeline — Koi Fix Pattern Nahi Hai
          </p>
        </div>

        <section className="mb-8">
          <SH>Paisa badhega ya wahi ₹2,000 rahega?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            2019 se ₹2,000 chal raha hai. Kabhi nahi badla.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Har saal budget ke aas paas afwah udti hai ki ₹2,500 ya ₹3,000 ho jayega. Kabhi hua nahi.
          </p>

          <IB>
            <strong>Real baat:</strong> Iss baar bhi shayad nahi hoga. Agar ho gaya toh hum yahan update kar denge. Lekin abhi ke liye ₹2,000 hi dhyan mein rakho.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Karne wala kaam — date ka wait mat karo</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Iske baare mein zyada sochne se accha, yeh cheezein abhi kar lo. Yeh wahi wajah hain jo bahut se logon ki kist atak jaati hai:
          </p>

          <StepList>
            <SI n={1}><strong>eKYC dekh lo:</strong> Portal par status "YES" nahi dikha toh abhi kar lo. Do minute ka kaam hai — poora tarika <Link href="/articles/PmKisanEkycOnline2026" className="text-[var(--color-primary)] underline">eKYC guide</Link> mein likha hai.</SI>
            <SI n={2}><strong>Bank account check karo:</strong> IFSC code sahi hai? Aadhaar seeding hui hai? Bank badla ho toh yeh miss ho jata hai.</SI>
            <SI n={3}><strong>Zameen ka record dekho:</strong> Kharidi-bechi hai toh patwari se Khatauni update karwa lo.</SI>
            <SI n={4}><strong>Mobile number active rakho:</strong> SIM band hui toh OTP nahi aayega. Phir dikkat hogi.</SI>
            <SI n={5}><strong>Naam ki spelling match karo:</strong> Aadhaar aur bank mein chota sa farak bhi problem create karta hai. Correction form se theek ho jata hai.</SI>
          </StepList>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Ek aur baat — agar pichli koi kist ruki hui hai toh <Link href="/articles/PmKisanBeneficiaryList2026" className="text-[var(--color-primary)] underline">beneficiary list</Link> mein apna naam zaroor check karo. Naam hi nahi hai list mein toh 25vi bhi nahi aayegi, simple si baat hai.
          </p>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-25vi-kist-2027/ekyc-checklist.webp"
            alt="PM Kisan eKYC checklist complete karna mobile par"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            eKYC Checklist — Yeh Sab Check Kar Lo
          </p>
        </div>

        <section className="mb-8">
          <SH>Naye farmers — registration kab karein?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Registration kabhi bhi ho sakta hai. Koi deadline nahi hai.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Bas itna samjho — verification, eKYC, zameen seeding, sab process hone mein hafton ka time lagta hai.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-3">
            Jaldi karoge toh utna jaldi kisi kist mein naam aayega. Der se karoge toh bas ek cycle miss ho jayega. Kuch aur nuksan nahi hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Rules badalne ki baat — kya sach hai?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ek cheez sach mein ho rahi hai — Farmer ID (AgriStack) kai states mein naye registration ke liye zaroori kar diya gaya hai.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Yeh dheere dheere sabke liye mandatory ho sakta hai. Toh jinke paas nahi hai woh bana lein. Nuksan nahi hoga.
          </p>

          <DB>
            <strong>Hoshiyar Raho:</strong> Baaki jo suna hai — amount badhna, eligibility rules change hona — inka koi official confirmation nahi hai. Jab tak sarkar na bole, inpar bharosa mat karo.
          </DB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            25vi Kist Ke Common Doubts, Ek Jagah
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan 25vi Kist 2027 — FAQ" />
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-25vi-kist-2027/payment-credited-notification.webp"
            alt="Farmer receiving PM Kisan payment credited SMS notification on mobile"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Jab Payment Aayega — Aisa SMS Milega
          </p>
        </div>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">25vi Kist Ka Sahi Hisaab</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            23vi ho chuki hai, 24vi ka intezaar hai — matlab 25vi tak kam se kam do release cycles baki hain, yani 2027 ki pehli chhamahi se pehle iski umeed rakhna bekaar hai.
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Is beech jo aapke haath mein hai — eKYC, NPCI seeding, land record — wahi 25vi aane par payment atakne se bachayega. Date ka andaza lagane se zyada kaam ka yehi hai. Aur koi dikkat ho toh helpline <strong>155261</strong> par seedha baat karo, idhar udhar ke WhatsApp forward par nahi.
          </p>
        </div>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="Apna Status Yahan Check Karo"
          guide="Status Check Complete Guide"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          title="Ab Tak Ka Total Nikaalo"
          desc="21vi se ab tak kitna mila, kitna baaki — sab calculate karo"
          primaryCta={{ href: '/calculator/installment-tracker', label: 'Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: 'Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} bioKey="PmKisan25viKist2027" />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisan24viKist2026', l: '24vi Kist Status' },
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
          { href: '/articles/PmKisanEkycOnline2026', l: 'eKYC Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
