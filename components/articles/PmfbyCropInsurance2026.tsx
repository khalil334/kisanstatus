'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import CountdownModal from '@/components/CountdownModal';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-01-05T09:36:58+05:30';
const MODIFIED = '2026-08-14T21:10:00+05:30';

const RELATED = [
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Apply' },
  { slug: 'AgriStackKyaHai2026', title: 'AgriStack Farmer ID Guide' },
  { slug: 'soil-health-card-complete-guide-2026', title: 'Soil Health Card Guide' },
];

const FAQS_DATA = [
  {
    q: 'PMFBY enrollment kaise hota hai?',
    a: 'Agar aapne KCC ya crop loan liya hai toh bank khud enrollment kar deta hai — aapko premium katne ki entry passbook mein dikh jaayegi. Bina loan wale kisan pmfby.gov.in par ya nazdeeki CSC se form bhar sakte hain. Kharif ke liye aam taur par 31 July tak ka time milta hai.',
  },
  {
    q: 'Premium kitna dena padta hai?',
    a: 'Kharif fasal par sum insured ka 2%, Rabi par 1.5%, aur baagwani/commercial crops par 5%. Baaki premium kendra aur rajya sarkar milkar bharti hain. Yani ₹50,000 ki dhaan ki fasal ke liye aapki jeb se sirf ₹1,000 jaayenge.',
  },
  {
    q: 'Claim ka paisa kab tak aata hai?',
    a: 'Niyam ke hisaab se harvest ke 2 mahine ke andar payout ka target hai. Zameen par kabhi-kabhi isse zyada lag jaata hai kyunki state ka yield data late pahunchta hai. Der ho toh pmfby.gov.in ke grievance section mein complaint number le lein.',
  },
  {
    q: 'Kya batai (tenant) par kheti karne wala kisan bhi le sakta hai?',
    a: 'Le sakta hai, lekin kuch states mein tenancy ka proof maanga jaata hai — landowner ka NOC ya lease agreement. Documents pehle taiyar rakhein toh CSC par kaam ek hi visit mein ho jaata hai.',
  },
  {
    q: 'Claim reject kyun ho jaata hai?',
    a: 'Sabse aam wajah — nuksan ki soochna 72 ghante ke andar nahi di. Iske alawa premium ka na bharna, crop ka notified list mein na hona, ya adhure documents. Premium receipt aur policy number hamesha sambhal kar rakhein.',
  },
  {
    q: 'Sirf mere khet ka nuksan hua hai, poore gaon ka nahi — tab bhi claim milega?',
    a: 'Haan. Ola, baadh ya landslide jaise localized nuksan par individual assessment hota hai. Shart yahi hai ki 72 ghante ke andar 14447 par ya Crop Insurance app se report kar dein.',
  },
  {
    q: 'Kya PMFBY lena zaroori hai?',
    a: 'Nahi, ab yeh scheme loanee kisano ke liye bhi voluntary hai — bank ko season ki last date se kam se kam 7 din pehle likh kar dena hota hai ki aap bahar rehna chahte hain. Waise itne kam premium mein itna cover kahin aur nahi milta.',
  },
  {
    q: 'Application status online kahan dikhta hai?',
    a: 'pmfby.gov.in kholiye, "Application Status" mein jaakar receipt/policy number ya Aadhaar daaliye. Policy number, premium paid aur coverage — sab ek hi table mein dikh jaata hai.',
  },
  {
    q: 'Shikayat ke liye kis number par call karein?',
    a: 'Kisan Rakshak helpline 14447 par. WhatsApp se bhi baat ho sakti hai — 7065514447. State-wise alag helpline bhi hoti hai jo portal ke "Contact Us" section mein milti hai.',
  },
  {
    q: 'Survey ya khasra number galat register ho gaya, kya karein?',
    a: 'Enrollment window band hone se pehle CSC ya bank branch jaakar correction karwa lein — sahi Khatauni ki copy saath rakhein. Galat survey number claim ke waqt sabse bada roda banta hai, isliye enrollment ke turant baad status check karke details mila lena samajhdari hai.',
  },
  {
    q: 'Mobile app se enrollment ho sakta hai?',
    a: 'Haan, Play Store par "Crop Insurance" app hai — process portal jaisa hi hai. Network kamzor ho toh CSC ya website behtar rehti hai, kyunki aadhe form par app atakne se dobara shuru karna padta hai.',
  },
];

export default function PmfbyCropInsurance2026({ article }: { article: ArticleMeta }) {
  const [modal, setModal] = useState<{
    title: string;
    message: string;
    url: string;
  } | null>(null);

  const handleOfficialLink = (title: string, message: string, url: string) => {
    setModal({ title, message, url });
  };

  return (
    <>
      {modal && (
        <CountdownModal
          title={modal.title}
          message={modal.message}
          redirectUrl={modal.url}
          onClose={() => setModal(null)}
          infoNote="Thoda wait karo. Official PMFBY portal khulne wala hai."
        />
      )}

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Fasal Bima Yojana</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">PMFBY Guide 2026</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PMFBY Crop Insurance 2026: Status Check, 2% Premium Aur Claim Ka Poora Process
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>10 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/pmfby-crop-insurance-2026/hero-image.webp'}
            alt="PMFBY crop insurance India 2026 — kisan fasal suraksha yojana enrollment"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Chhoti si premium, badi suraksha
          </p>
        </div>

        <div className="my-6 p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 dark:border-amber-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-amber-800 dark:text-amber-300 mb-2">Socho Zara</h2>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed mb-2">
            Poora saal ki mehnat. Beej, khaad, mazdoori par lakho ka kharch. Phir ek raat ka ola ya ek sukha season — aur sab mitti mein.
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            Fasal bima isi dar ka jawab hai. ₹1 lakh ki kharif fasal ka aapka hissa sirf ₹2,000 banta hai — baaki premium sarkar bharti hai.
          </p>
        </div>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pmfby-crop-insurance-2026/infographic.webp"
            alt="PMFBY infographic — premium rates, coverage, claim timeline explained visually"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Premium, coverage aur claim — ek nazar mein
          </p>
        </div>

        <section className="mb-8">
          <SH>PMFBY Kya Hai?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Poora naam — Pradhan Mantri Fasal Bima Yojana. 2016 se chal rahi hai. Soch simple hai: sukha, baadh, toofan, ola ya keede-bimari se fasal barbaad ho jaaye toh muawza seedha kisan ke bank account mein aaye, aur premium itna kam ho ki chhota kisan bhi bhar sake.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ek badi baat jo bahut kisano ko nahi pata — Kharif 2026 se sarkar ne <strong>jangli janwaron se hue nuksan</strong> (nilgai, jangli suar waghera) ko bhi localized risk ke roop mein cover karna approve kiya hai, aur dhaan ki doob (flooding) wali coverage bhi wapas laayi gayi hai. Apne state ki notification zaroor check karein.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <p className="font-black text-green-800 dark:text-green-300 text-xl">2%</p>
              <p className="text-[10px] text-[var(--color-text-muted)]">Kharif</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-center">
              <p className="font-black text-blue-800 dark:text-blue-300 text-xl">1.5%</p>
              <p className="text-[10px] text-[var(--color-text-muted)]">Rabi</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-center">
              <p className="font-black text-amber-800 dark:text-amber-300 text-xl">5%</p>
              <p className="text-[10px] text-[var(--color-text-muted)]">Horticulture</p>
            </div>
          </div>
          <IB>
            <strong>Example:</strong> Gehun (Rabi), Sum Insured ₹50,000. Aapka premium 1.5% = ₹750. Fasal poori kharab ho jaaye toh poora ₹50,000 milega.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Kya Kya Cover Hota Hai?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Coverage kaafi wide hai — bijai na ho paane (prevented sowing) se lekar katayi ke baad khet mein sookh rahi fasal tak. Lekin kuch cheezein saaf bahar hain:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Cover Hai</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Sukha, baadh, toofan</li>
                <li>✓ Ola (hailstorm), landslide</li>
                <li>✓ Keede aur bimari</li>
                <li>✓ Prevented sowing (SI ka 25% tak)</li>
                <li>✓ Post-harvest loss (katayi ke 14 din tak)</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-2">Cover Nahi</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✗ Jaan boojh kar kiya nuksan</li>
                <li>✗ Notified list se bahar ki crop</li>
                <li>✗ Deadline ke baad enrollment</li>
                <li>✗ War / nuclear jaise risks</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Enrollment Kaise Karein? (Online + Offline)</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            <strong>Loan wale kisan:</strong> Agar aapne <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-green-700 dark:text-green-400 underline font-medium">KCC</Link> ya crop loan liya hai toh bank enrollment khud kar deta hai. Na lena ho toh season ki last date se 7 din pehle bank ko likh kar dena hota hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            <strong>Bina loan wale:</strong> Khud karna padega —
          </p>
          <StepList>
            <SI n={1}>pmfby.gov.in kholein ya nazdeeki CSC jaayein</SI>
            <SI n={2}>Form mein zameen aur fasal ki details bharein</SI>
            <SI n={3}>Aadhaar, Khatauni aur bank passbook lagayein</SI>
            <SI n={4}>Apne hisse ka premium jama karein</SI>
            <SI n={5}>Receipt sambhal kar rakhein — claim ke waqt yahi kaam aati hai</SI>
          </StepList>

          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl">
            <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-2">
              Abhi Enroll Karo
            </p>
            <p className="text-xs text-green-700 dark:text-green-400 mb-3">
              Button dabate hi 10-second countdown ke baad official portal khul jaayega.
            </p>
            <button
              onClick={() => handleOfficialLink(
                'PMFBY Official Portal',
                'PMFBY portal khulne wala hai. Thoda wait karo...',
                'https://pmfby.gov.in'
              )}
              className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Yahan Click Karo → PMFBY Portal Khulega
            </button>
          </div>

          <DB>
            <strong>Last Date 2026:</strong> Kharif ke liye aam taur par 31 July, Rabi ke liye 31 December. Kuch states/crops mein tareekh alag ho sakti hai — apne district ki notification dekh lein. Date nikal gayi toh us season ka cover nahi milega.
          </DB>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-3">
            Har season "last date extend ho gayi" wali afwaahein WhatsApp par udti hain. Kabhi-kabhi states sach mein window badhati hain, lekin uski confirmation sirf pmfby.gov.in ya state agriculture department ki notification se hoti hai. Forward par bharosa karke date nikal jaane se accha hai pehle hi enroll kar lena.
          </p>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pmfby-crop-insurance-2026/status-check.webp"
            alt="PMFBY application status check online — enrollment verification portal"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Enrollment status 2 minute mein online check ho jaata hai
          </p>
        </div>

        <section className="mb-8">
          <SH>Enrollment Hua Ya Nahi — Aise Confirm Karein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Premium kat gaya lekin pata nahi system mein registration hua ya nahi? Do minute ka kaam hai:
          </p>
          <StepList>
            <SI n={1}><strong>pmfby.gov.in</strong> par "Application Status" section kholein</SI>
            <SI n={2}>Receipt/policy number ya Aadhaar number daalein</SI>
            <SI n={3}>State, district aur season chunein</SI>
            <SI n={4}>Table mein policy number, premium paid aur coverage amount dikh jaayega</SI>
          </StepList>
          <WB>
            "Not Found" dikhe toh enrollment adhura hai ya bank ne data submit nahi kiya. Deadline nikalne se pehle, usi din branch se confirm karwayein.
          </WB>
        </section>

        <section className="mb-8">
          <SH>Fasal Kharab Ho Gayi — Claim Kaise Milega?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ghabraane ki zaroorat nahi, bas time par ye steps follow karein:
          </p>
          <StepList>
            <SI n={1}><strong>72 ghante ke andar</strong> nuksan report karein — 14447 par call, Crop Insurance app, CSC ya bank branch se</SI>
            <SI n={2}>Damaged fasal ki <strong>photos</strong> le lein (app se geotagged ho toh aur behtar)</SI>
            <SI n={3}>Likhit complaint dein aur Patwari se <strong>loss certificate</strong> banwayein</SI>
            <SI n={4}>Claim form bank ya insurance company mein jama karein</SI>
            <SI n={5}>Survey aur verification ke baad paisa <strong>seedha account mein</strong> aata hai</SI>
          </StepList>
          <DB>
            <strong>Sabse zaroori:</strong> report karne ki window <strong>72 ghante</strong> ki hai. Yahi chook claim rejection ki sabse badi wajah hai. 14447 aur Crop Insurance app dono phone mein pehle se save rakhein.
          </DB>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pmfby-crop-insurance-2026/payment-received.webp"
            alt="PMFBY claim payment received in bank account — successful compensation"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Claim approve hone par paisa seedha bank account mein
          </p>
        </div>

        <section className="mb-8">
          <SH>Premium Ka Hisaab Khud Kaise Lagayein?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Formula seedha hai — sum insured × crop type ka rate:
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Crop Type</th>
                  <th className="p-3 text-left">Premium Rate</th>
                  <th className="p-3 text-left">Example (₹50,000)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Kharif (Dhaan, Maize)', '2%', '₹1,000'],
                  ['Rabi (Gehun, Chana)', '1.5%', '₹750'],
                  ['Horticulture (Sabzi, Phal)', '5%', '₹2,500'],
                  ['Commercial Crops', '5%', '₹2,500'],
                ].map(([crop, rate, example], i) => (
                  <tr key={crop} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{crop}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-600 dark:text-green-400 font-bold">{rate}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Yaad rahe, ye sirf kisan ka hissa hai. Actual (actuarial) rate isse kaafi zyada hota hai — farq kendra aur rajya sarkar milkar bharti hain. North-East states, Jammu & Kashmir aur Himachal jaise ilaakon mein toh kisan ka poora hissa bhi sarkar hi deti hai.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-3">
            Sum Insured kitna hoga, ye aap tay nahi karte — har district mein crop ke hisaab se <strong>scale of finance</strong> notify hoti hai (per hectare value). Isliye padosi district ke kisan ka figure aapse alag ho sakta hai, aur ye koi galti nahi hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Muawze Ki Rakam Ka Formula Kya Hai?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bahut kisano ko lagta hai ki nuksan hua toh poora sum insured milega — aisa nahi hai. Widespread nuksan (sukha, kam baarish) mein hisaab <strong>yield ke aadhar par</strong> hota hai. Har area ke liye ek <strong>threshold yield</strong> tay hoti hai — pichle saalon ki average paidawar ke aadhar par. Us season crop cutting experiments (CCE) se actual yield naapi jaati hai.
          </p>

          <IB>
            <strong>Formula:</strong> Muawza = (Threshold Yield − Actual Yield) ÷ Threshold Yield × Sum Insured. Maan lijiye threshold 20 quintal/hectare hai, is saal sirf 12 quintal nikli, aur SI ₹50,000 hai — toh (20−12)÷20 × 50,000 = <strong>₹20,000</strong> milenge.
          </IB>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ola ya baadh jaise localized nuksan mein aapke khet ka <strong>individual survey</strong> hota hai, aur muawza usi assessment par milta hai. Ab satellite imagery aur YES-TECH (technology-based yield estimation) ka bhi istemaal ho raha hai, jisse manual crop cutting par nirbharta kam ho rahi hai.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Do aur situations mein bhi paisa milta hai jo kam log jaante hain:
          </p>

          <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-2">
            <li><strong>Prevented sowing:</strong> Baarish hi nahi hui aur bijai nahi kar paaye (jabki kharcha ho chuka tha) — sum insured ka <strong>25% tak</strong> milta hai, aur policy wahin band ho jaati hai.</li>
            <li><strong>Mid-season adversity:</strong> Season ke beech mein hi lag jaaye ki paidawar normal ki aadhi bhi nahi hogi — toh sarkar turant relief ke roop mein sambhavit claim ka ek hissa pehle hi dilwa sakti hai.</li>
          </ul>
        </section>

        <section className="mb-8">
          <SH>Report Ke Baad Kya Hota Hai? (Timeline)</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Report karne ke baad ka process aksar kisano ko blackbox lagta hai. Guidelines mein har stage ki time-limit di gayi hai:
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Stage</th>
                  <th className="p-3 text-left">Time Limit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Kisan dwara nuksan ki soochna', 'Nuksan ke 72 ghante ke andar'],
                  ['Insurance company ka acknowledgement', '48 ghante'],
                  ['Khet ka survey / loss assessment', 'Soochna ke ~10 din mein'],
                  ['State se yield data (CCE)', 'Harvest ke 1 mahine mein'],
                  ['Claim calculation', 'Data milne ke ~3 hafte'],
                  ['Account mein payout', 'Harvest ke 2 mahine ka target'],
                ].map(([stage, time], i) => (
                  <tr key={stage} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{stage}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Zameen par payout mein 3-6 mahine bhi lag jaate hain, kyunki state ka yield data late pahunchna aam baat hai. Isliye timeline yaad rakhein — der ho toh chup baithne ki bajaye shikayat register karein, jiska tareeka neeche hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Paisa Atak Jaaye Toh Shikayat Kahan Karein?</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Seedhi si escalation ladder hai — neeche se upar chalein:
          </p>

          <StepList>
            <SI n={1}><strong>Portal par grievance:</strong> pmfby.gov.in ke grievance section mein application number ke saath complaint register karein — tracking number zaroor note karein</SI>
            <SI n={2}><strong>Insurance company ka district office:</strong> apni company ka contact portal ke "Insurance Company Contacts" mein milega — tracking number ke saath likhit follow-up karein</SI>
            <SI n={3}><strong>District Agriculture Officer:</strong> zila star par DLMC (District Level Monitoring Committee) scheme ki nigrani karti hai — yahan likhit shikayat ka jawab dena unki zimmedari hai</SI>
          </StepList>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-3">
            Har stage par kagaz ka record rakhein — call ki date, complaint number, kis afsar se baat hui. Yehi record aage kaam aata hai. Kisan Rakshak helpline <strong>14447</strong> aur WhatsApp <strong>7065514447</strong> se bhi status poocha ja sakta hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Paanch Chooken Jo Claim Dubo Deti Hain</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Field mein claim rejection ke jo case sabse zyada dikhte hain, unmein technical kami kam aur ye aadatein zyada zimmedar hoti hain:
          </p>

          <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-2">
            <li><strong>Report mein deri</strong> — 72 ghante ki window nikal jaana. Sabse badi wajah, aur iska koi ilaj nahi.</li>
            <li><strong>Sirf phone par bata dena</strong> — call ke baad likhit complaint bhi zaroori hai. Bina written record ke baad mein "soochna nahi mili" kehna aasan ho jaata hai.</li>
            <li><strong>Receipt kho dena</strong> — non-loanee kisan ke paas premium receipt hi enrollment ka saboot hai. Photo kheech kar phone mein bhi rakhein.</li>
            <li><strong>Galat khasra/survey number</strong> — enrollment ke waqt jo number register hua, claim usi zameen par milega. Pehle hi mila lein.</li>
            <li><strong>Notified crop ka dhyan na rakhna</strong> — jo crop aapke area mein notified nahi hai, uska premium bhar bhi diya toh cover nahi milega. Bijai se pehle CSC ya agriculture office se notified list poochh lein.</li>
          </ul>
        </section>

        <section className="mb-8">
          <SH>Kagaz-Pattar Jo Pehle Se Taiyar Rakhne Hain</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ye sab pehle se jama rakhein taaki CSC ke chakkar na lagane padein:
          </p>

          <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-2 mb-4">
            <li>Aadhaar Card</li>
            <li>Bank passbook (Aadhaar-linked account)</li>
            <li>Khatauni / land records + Khasra number</li>
            <li>Registered mobile number</li>
            <li>Passport size photo</li>
            <li>Bataidari ho toh landowner ka NOC ya lease agreement</li>
          </ul>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Zameen ke records digital hone ka kaam <Link href="/articles/AgriStackKyaHai2026" className="text-green-700 dark:text-green-400 underline font-medium">AgriStack Farmer ID</Link> se juda hai — jinke records wahan updated hain, unka enrollment aur claim dono smooth rehta hai. Aur agar aapko samajh nahi aa raha ki kheti ke liye paisa kahan se aur kis rate par milega, toh <Link href="/articles/KisanRinKahaSeLe2026" className="text-green-700 dark:text-green-400 underline font-medium">kisan rin ke sabhi options ki guide</Link> pehle padh lein — bima aur loan dono ek hi planning ka hissa hain.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Fasal Bima Se Jude Sawaal-Jawab
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PMFBY FAQ 2026" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Claim 72 Ghante Ki Ghadi Par Tikta Hai</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Premium bhar dena aadha kaam hai. Zyadatar claim isliye atakte hain ki nuksan ki soochna 72 ghante
            ke andar nahi di gayi — der hone par survey tak khet ki haalat badal jaati hai aur saboot kamzor
            pad jaata hai. Isliye premium receipt, 14447 aur Crop Insurance app — teeno pehle se phone mein
            rakhein, taaki barbaadi wale din dhoondhna na pade.
          </p>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h3 className="text-base font-black text-blue-800 dark:text-blue-300 mb-2">
            PMFBY Official Portal
          </h3>
          <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
            Enrollment, status check aur claim — teeno kaam isi ek portal se. 10 second baad khulega.
          </p>
          <button
            onClick={() => handleOfficialLink(
              'PMFBY Official Portal',
              'PMFBY portal khulne wala hai. Thoda wait karo...',
              'https://pmfby.gov.in'
            )}
            className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Yahan Click Karo → PMFBY Portal Khulega
          </button>
        </div>

        <CalcBanner
          title="Premium Calculate Karo"
          desc="Crop value daalo — premium jaano"
          primaryCta={{ href: '/calculator/crop-profit', label: 'Calculator →' }}
          secondaryCta={{ href: '/calculator', label: 'Utilities' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} bioKey="PmfbyCropInsurance2026" />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanMasterGuide2026', l: 'Guide' },
          { href: '/articles/soil-health-card-complete-guide-2026', l: 'Soil' },
          { href: '/articles/KisanCreditCardOnlineApply2026', l: 'KCC' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
