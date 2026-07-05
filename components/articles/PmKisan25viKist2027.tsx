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
    q: '25vi ki pakki date kya hai?',
    a: 'Pakki koi nahi hai abhi, seedha bol doon. Jo bhi date log bata rahe hain — including yeh wali estimate ~Feb 2027 — woh sab guesswork hai. Sarkar jab bolegi, tabhi sach maanna.',
  },
  {
    q: 'Paisa badhega kya is baar?',
    a: '₹2,000 hi chal raha hai 2019 se, aur abhi tak koi sign nahi hai badhne ka. ₹2,500-3,000 wali baatein har budget se pehle udti hain, kabhi sach nahi niklin ab tak.',
  },
  {
    q: 'Dobara form bharna padega kya?',
    a: 'Nahi bhai, ek baar ho gaya toh ho gaya. Bas eKYC aur bank details sahi rakho, uske baad automatic aata rehta hai.',
  },
  {
    q: '24vi nahi mili toh 25vi milegi?',
    a: 'Milni chahiye agar tumhari eligibility theek hai. Missed wali alag se aati hai kabhi kabhi, jab woh issue fix ho jaye.',
  },
  {
    q: 'Naya register karne ki last date kya hai?',
    a: 'Koi last date nahi hai registration ki, jab chaho karo. Bas itna dhyan rakho — verification mein time lagta hai, toh jaldi karoge toh agli kist mein naam aane ke chances zyada honge.',
  },
  {
    q: 'Koi naya rule aa raha hai kya?',
    a: 'Confirmed toh kuch nahi hai. Farmer ID wala kaam chal raha hai kai jagah, woh dheere dheere sabke liye zaroori ho sakta hai. Baaki sab abhi sirf baatein hain.',
  },
  {
    q: 'Status kab se dekhna shuru karoon?',
    a: 'Jaldi kya hai — jab news mein date aane lage, tab hafte mein ek baar dekh lena kaafi hai.',
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
            25vi Kist Kab Aayegi? Sach Yeh Hai Ki Abhi Kisi Ko Pata Nahi
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/pm-kisan-25vi-kist-2027/hero-25vi-kist.webp'}
            alt="Farmer checking PM Kisan installment status on phone"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Bahut se articles internet par 25vi kist ki "exact date" bata rahe honge — Feb 2027, March 2027, jo bhi. Sach yeh hai ki koi nahi jaanta. Sarkar advance mein date announce nahi karti, aur 24vi khud abhi tak nahi aayi hai. Toh isse pehle ki hum aage badhein, ek cheez clear kar dein: yeh article predictions de raha hai, promises nahi.
        </p>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Jo hum definitely jaante hain — 23vi kist 20 June 2026 ko aa chuki thi. Uske pehle 22vi 13 March ko, aur 21vi 19 November 2025 ko. Yeh teeno confirmed hain, records mein hain. Baaki sab, jo aage likha hai, andaza hai us pattern se nikala hua.
        </p>

        <section className="mb-8">
          <SH>Ab tak ka record</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Kist</th>
                  <th className="p-3 text-left">Kab</th>
                  <th className="p-3 text-left">Kitna</th>
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
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Gap dekho — Nov se March, chaar mahine. March se June, teen mahine. Koi fix pattern nahi hai jisse hum exact date nikal sakein. Jo log confidently "February 2027" bol rahe hain, woh bas guess kar rahe hain jaise hum bhi kar sakte the. Hum nahi kar rahe, isliye nahi bata rahe.
          </p>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-25vi-kist-2027/installment-timeline-chart.webp"
            alt="PM Kisan installment release gap timeline chart"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <section className="mb-8">
          <SH>Paisa badhega ya wahi rahega?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            2019 se ₹2,000 chal raha hai, kabhi nahi badla. Har saal budget ke aas paas afwah udti hai ki ₹2,500 ya ₹3,000 ho jayega — kabhi hua nahi. Iss baar bhi shayad nahi hoga. Agar ho gaya toh hum yahan update kar denge, lekin abhi ke liye ₹2,000 hi dhyan mein rakho.
          </p>
        </section>

        <section className="mb-8">
          <SH>Karne wala kaam — date ka wait mat karo</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Iske baare mein zyada sochne se accha, yeh cheezein abhi kar lo. Yeh wahi wajah hain jo bahut se logon ki kist atak jaati hai:
          </p>
          <StepList>
            <SI n={1}><strong>eKYC dekh lo:</strong> Portal par status "YES" nahi dikha toh abhi kar lo, do minute ka kaam hai.</SI>
            <SI n={2}><strong>Bank account check karo:</strong> IFSC, Aadhaar seeding — bank badla ho toh yeh miss ho jaata hai.</SI>
            <SI n={3}><strong>Zameen ka record dekho:</strong> Kharidi-bechi hai toh patwari se Khatauni update karwa lo.</SI>
            <SI n={4}><strong>Number active rakho:</strong> SIM band hui toh OTP nahi aayega, phir dikkat hogi.</SI>
            <SI n={5}><strong>Naam ki spelling match karo:</strong> Aadhaar aur bank mein chhota sa farak bhi problem create karta hai.</SI>
          </StepList>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-25vi-kist-2027/ekyc-checklist.webp"
            alt="Farmer completing PM Kisan eKYC checklist on mobile"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <section className="mb-8">
          <SH>Naye register karne wale kisan</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Registration kabhi bhi ho sakta hai, koi deadline nahi. Bas itna samjho — verification, eKYC, zameen seeding, sab process hone mein hafton ka time lagta hai. Toh jitni jaldi karoge, utna jaldi kisi kist mein naam aayega. Der se karoge toh bas ek cycle miss ho jayega, kuch aur nuksan nahi hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Rules badalne ki baat</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ek cheez sach mein ho rahi hai — Farmer ID (AgriStack) kai states mein naye registration ke liye zaroori kar diya gaya hai. Yeh dheere dheere sabke liye mandatory ho sakta hai, toh jinke paas nahi hai woh bana lein, nuksan nahi hoga.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Baaki jo suna hai — amount badhna, eligibility rules change hona — inka koi official confirmation nahi hai. Jab tak sarkar na bole, inpar bharosa mat karo.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan 25vi Kist FAQ" />
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-25vi-kist-2027/payment-credited-notification.webp"
            alt="Indian farmer receiving PM Kisan payment credited SMS notification"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Toh short mein — 23vi ho chuki hai, 24vi ka intezaar hai, 25vi abhi bahut door ki baat hai. Jo control mein hai (eKYC, bank, zameen) woh abhi theek kar lo. Baaki, jab date aayegi, khud pata chal jayega.
        </p>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="Apna Status Yahan Dekho"
          guide="Status Check Guide"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="📅"
          title="Ab Tak Ka Total Nikaalo"
          desc="21vi se ab tak kitna mila, kitna baaki"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calc' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisan24viKist2026', l: '📅 24vi Kist' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
          { href: '/articles/PmKisanEkycOnline2026', l: '🔐 eKYC' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
