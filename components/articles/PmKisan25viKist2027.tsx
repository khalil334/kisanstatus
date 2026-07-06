'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-07-06T08:00:00+05:30';
const MODIFIED = '2026-07-06T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status', emoji: '📅' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Generated Meaning', emoji: '💳' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List', emoji: '📋' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Guide', emoji: '🔐' },
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed Fix', emoji: '💸' },
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
    q: 'Dobara registration karna padega kya?',
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
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 8 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* IMAGE 1: Hero */}
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
          Internet par bahut se articles 25vi kist ki "exact date" bata rahe hain. February 2027, March 2027 — jo mann mein aaya likh diya.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Sach yeh hai ki koi nahi jaanta. Sarkar advance mein date announce nahi karti. Aur 24vi khud abhi tak nahi aayi hai.
        </p>

        <WB>
          <strong>Seedhi baat:</strong> Yeh article predictions de raha hai, promises nahi. Jo hum definitely jaante hain woh likhenge. Baaki sab andaza hai.
        </WB>

        <section className="mb-8 mt-8">
          <SH>Ab tak ka record — teen confirmed kisten</SH>
          
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            21vi, 22vi, 23vi — yeh teen ho chuki hain. Dates confirm hain, records mein hain.
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Kist</th>
                  <th className="p-3 text-left">Kab Aayi</th>
                  <th className="p-3 text-left">Kitna Paisa</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['21vi', '19 Nov 2025', '₹2,000'],
                  ['22vi', '13 Mar 2026', '₹2,000'],
                  ['23vi', '20 Jun 2026', '₹2,000'],
                  ['24vi', 'Abhi tak nahi aayi', '—'],
                  ['25vi', 'Pata nahi', '—'],
                ].map(([kist, date, amount], i) => (
                  <tr key={kist} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{kist}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{date}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-700 dark:text-green-400 font-bold">{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Gap dekho — November se March tak chaar mahine lage. March se June tak teen mahine.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Koi fix pattern nahi hai. Jo log confidently "February 2027" bol rahe hain, woh bas guess kar rahe hain.
          </p>
        </section>

        {/* IMAGE 2: Timeline Chart */}
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
            <SI n={1}><strong>eKYC dekh lo:</strong> Portal par status "YES" nahi dikha toh abhi kar lo. Do minute ka kaam hai.</SI>
            <SI n={2}><strong>Bank account check karo:</strong> IFSC code sahi hai? Aadhaar seeding hui hai? Bank badla ho toh yeh miss ho jaata hai.</SI>
            <SI n={3}><strong>Zameen ka record dekho:</strong> Kharidi-bechi hai toh patwari se Khatauni update karwa lo.</SI>
            <SI n={4}><strong>Mobile number active rakho:</strong> SIM band hui toh OTP nahi aayega. Phir dikkat hogi.</SI>
            <SI n={5}><strong>Naam ki spelling match karo:</strong> Aadhaar aur bank mein chhota sa farak bhi problem create karta hai.</SI>
          </StepList>
        </section>

        {/* IMAGE 3: eKYC Checklist */}
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
            <strong>Warning:</strong> Baaki jo suna hai — amount badhna, eligibility rules change hona — inka koi official confirmation nahi hai. Jab tak sarkar na bole, inpar bharosa mat karo.
          </DB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal (FAQ)
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan 25vi Kist 2027 — FAQ" />
        </section>

        {/* IMAGE 4: Payment Notification */}
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
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Bottom Line</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            23vi ho chuki hai. 24vi ka intezaar hai. 25vi abhi bahut door ki baat hai.
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Jo control mein hai — eKYC, bank, zameen — woh abhi theek kar lo. Baaki, jab date aayegi, khud pata chal jayega.
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
          icon="📅"
          title="Ab Tak Ka Total Nikaalo"
          desc="21vi se ab tak kitna mila, kitna baaki — sab calculate karo"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisan24viKist2026', l: '📅 24vi Kist Status' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
          { href: '/articles/PmKisanEkycOnline2026', l: '🔐 eKYC Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}