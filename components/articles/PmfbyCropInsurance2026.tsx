'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import CountdownModal from '@/components/CountdownModal';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-01-05T09:36:58+05:30';
const MODIFIED = '2026-08-14T21:10:00+05:30';

// Inline source citation link (E-E-A-T / transparency)
function Src({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="text-green-700 dark:text-green-400 underline underline-offset-2 decoration-dotted"
    >
      {children}
    </a>
  );
}

const RELATED = [
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Apply' },
  { slug: 'AgriStackKyaHai2026', title: 'AgriStack Farmer ID Guide' },
  { slug: 'soil-health-card-complete-guide-2026', title: 'Soil Health Card Guide' },
];

const FAQS_DATA = [
  {
    q: 'PMFBY enrollment kaise hota hai?',
    a: 'Agar aapne KCC ya crop loan liya hai toh bank khud enrollment kar deta hai — aapko premium katne ki entry passbook mein dikh jaayegi. Bina loan wale kisan pmfby.gov.in par ya nazdeeki CSC se form bhar sakte hain. Har season ki cut-off date state aur crop ke hisaab se alag hoti hai, isliye apne rajya ki notification ya pmfby.gov.in par hi confirm karein.',
  },
  {
    q: 'Premium kitna dena padta hai?',
    a: 'Kharif fasal par sum insured ka 2%, Rabi par 1.5%, aur baagwani/commercial crops par 5%. Baaki premium kendra aur rajya sarkar milkar bharti hain. Yani ₹50,000 ki dhaan ki fasal ke liye aapki jeb se sirf ₹1,000 jaayenge.',
  },
  {
    q: 'Claim ka paisa kab tak aata hai?',
    a: 'Claim settlement ki time-limit scheme ki Operational Guidelines mein tay hai, lekin practice mein yield data (CCE) aur premium subsidy state se aane par nirbhar karta hai — isliye der ho sakti hai. Exact status pmfby.gov.in par dekhein aur der hone par grievance register karke complaint number le lein ya KRPH 14447 par baat karein.',
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
    a: 'Nahi. Kharif 2020 se scheme sabhi kisano — loanee bhi — ke liye voluntary kar di gayi hai. Loan wale kisan ko bahar rehna ho toh enrollment ki cut-off date se saat din pehle apni bank branch mein ek simple declaration dena hota hai.',
  },
  {
    q: 'Application status online kahan dikhta hai?',
    a: 'pmfby.gov.in kholiye, "Application Status" mein jaakar receipt/policy number ya Aadhaar daaliye. Policy number, premium paid aur coverage — sab ek hi table mein dikh jaata hai.',
  },
  {
    q: 'Shikayat ke liye kis number par call karein?',
    a: 'Krishi Rakshak Portal aur Helpline (KRPH) 14447 par — yeh PMFBY ki grievance redressal ke liye kendra sarkar dwara launch ki gayi centralised helpline hai. Iske alawa pmfby.gov.in ke grievance section se online complaint register kar sakte hain. State-wise alag helpline bhi ho sakti hai, jo portal ke "Contact Us" section mein milti hai.',
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
            Ek nayi baat jo bahut kisano ko nahi pata — Krishi Mantralaya ke revised framework ke mutabik <strong>jangli janwaron ke hamle se hue fasal nuksan</strong> ko localized risk category mein <strong>paanchve add-on cover</strong> ke roop mein shaamil kiya gaya hai, aur <strong>dhaan ki doob (paddy inundation)</strong> — jo 2018 mein hata di gayi thi — dobara localized calamity cover ke roop mein laayi gayi hai; ye Kharif 2026 season se lagoo hone ki baat kahi gayi hai. Dhyan rahe, add-on cover <strong>optional</strong> hote hain: kaunse jangli janwar aur kaunse zile/insurance unit cover honge, ye <strong>aapka rajya notify karta hai</strong> — isliye apne state ki season notification zaroor check karein.{' '}
            <span className="text-xs">
              (Source: <Src href="https://www.newindianexpress.com/states/odisha/2025/Nov/19/pmfby-to-cover-crop-loss-by-animal-attack-inundation">New Indian Express, 19/11/2025</Src>)
            </span>
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
            Coverage kaafi wide hai — bijai na ho paane (prevented sowing) se lekar katayi ke baad khet mein sookh rahi fasal tak. Do zaroori sharten samajh lein: <strong>prevented sowing</strong> tab lagta hai jab notified area mein baarish ki bhaari kami ya adverse season ki wajah se bijai ho hi na paaye (SI ka 25% tak), aur <strong>post-harvest loss</strong> sirf un fasalon par lagta hai jo katayi ke baad khet mein “cut and spread” halat mein sukhne ke liye rakhi jaati hain — wo bhi <strong>zyada se zyada 2 hafte</strong> tak, aur cyclone, cyclonic baarish ya besmausam baarish jaise perils ke liye. Lekin kuch cheezein saaf bahar hain:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Cover Hai</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Sukha, baadh, toofan</li>
                <li>✓ Ola (hailstorm), landslide</li>
                <li>✓ Keede aur bimari</li>
                <li>✓ Prevented sowing (SI ka 25% tak)</li>
                <li>✓ Post-harvest loss (katayi ke 2 hafte tak, khet mein sukha rahi fasal)</li>
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
            <strong>Loan wale kisan:</strong> Agar aapne <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-green-700 dark:text-green-400 underline font-medium">KCC</Link> ya crop loan liya hai toh bank enrollment khud kar deta hai. Kharif 2020 se scheme sabke liye <strong>voluntary</strong> hai — na lena ho toh enrollment ki cut-off date se <strong>7 din pehle</strong> bank branch mein ek simple declaration jama karna hota hai.
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
            <strong>Last Date:</strong> PMFBY ki cut-off date har state, season aur crop ke liye alag notify hoti hai — koi ek all-India tareekh nahi hoti. Kharif mein kai states ki window July ke aakhir tak rehti hai, lekin <strong>aapke zile ke liye sahi date sirf apne rajya ki season notification ya pmfby.gov.in par hi confirm hoti hai</strong>. Date nikal gayi toh us season ka cover nahi milega, isliye enrollment aakhri din par mat chhodein.
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
            <strong>Sabse zaroori:</strong> nuksan ki soochna dene ki window <strong>72 ghante</strong> ki hai — yeh scheme ki apni shart hai, aur revised framework mein Crop Insurance App par <strong>geo-tagged photo</strong> ke saath report karna kaha gaya hai. KRPH 14447 aur Crop Insurance app dono phone mein pehle se save rakhein.{' '}
            <span className="text-xs">
              (Source: <Src href="https://newindiasamachar.pib.gov.in/WriteReadData/flipbook/2023/Jan/1st/English/files/basic-html/page31.html">PIB</Src>)
            </span>
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
            Yaad rahe, ye sirf kisan ka hissa hai. Actual (actuarial) rate isse kaafi zyada hota hai — bacha hua premium subsidy ke roop mein kendra aur rajya sarkar milkar bharti hain (aam taur par 50:50). North-Eastern states ke liye 2020 ke revamp ke baad kendra ka subsidy hissa badha kar <strong>90%</strong> kar diya gaya tha (state 10%). Dhyan dein — isse <em>kisan</em> ka apna 2% / 1.5% / 5% hissa maaf nahi hota; ye sirf sarkari subsidy ka batwara hai.{' '}
            <span className="text-xs">
              (Source: <Src href="https://newindiasamachar.pib.gov.in/WriteReadData/flipbook/2023/Jan/1st/English/files/basic-html/page31.html">New India Samachar / PIB</Src>)
            </span>
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
            Ola ya baadh jaise localized nuksan mein aapke khet ka <strong>individual survey</strong> hota hai, aur muawza usi assessment par milta hai. Ab technology ka istemaal bhi badh raha hai — <strong>YES-TECH</strong> (technology-based yield estimation) aur <strong>CROPIC</strong> app, jo geo-tagged photos se fasal ki haalat aur nuksan aankta hai.{' '}
            <span className="text-xs">
              (Source: <Src href="https://agritimes.co.in/crops/fight-against-desert-locusts-will-take-time-says-fao-chief/cropic-app-brings-real-time-crop-loss-assessment-under-pmfby/">CROPIC, Ministry of Agriculture briefing</Src>)
            </span>
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Do aur situations mein bhi paisa milta hai jo kam log jaante hain:
          </p>

          <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-2">
            <li><strong>Prevented sowing:</strong> Baarish hi nahi hui aur bijai nahi kar paaye (jabki kharcha ho chuka tha) — sum insured ka <strong>25% tak</strong> milta hai, aur policy wahin band ho jaati hai.</li>
            <li><strong>Mid-season adversity:</strong> Jab kisi widespread calamity ya kharab season ki wajah se ummeed ho ki paidawar normal yield ke <strong>50% se bhi kam</strong> rahegi — to turant relief ke roop mein sambhavit claim ka ek hissa pehle dilwaya ja sakta hai. Ye add-on cover bhi state ke notify karne par hi lagoo hota hai.</li>
          </ul>
        </section>

        <section className="mb-8">
          <SH>Report Ke Baad Kya Hota Hai? (Timeline)</SH>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Report karne ke baad ka process aksar kisano ko blackbox lagta hai. Mota-moti stage-wise safar aisa hota hai — lekin har stage ki exact time-limit PMFBY Operational Guidelines aur aapke state ki season notification mein tay hoti hai, isliye number yaad rakhne ki bajaye apna reference number rakhein aur portal par status dekhte rahein:
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Stage</th>
                  <th className="p-3 text-left">Kya hota hai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1. Kisan dwara nuksan ki soochna', 'Nuksan ke 72 ghante ke andar — Crop Insurance App (geo-tagged photo), KRPH 14447, CSC ya bank'],
                  ['2. Insurance company ka acknowledgement', 'Complaint/docket number milta hai — ise sambhal kar rakhein'],
                  ['3. Khet ka survey / loss assessment', 'Localized nuksan par company ka surveyor khet par aata hai'],
                  ['4. Yield data (CCE) state se', 'Widespread nuksan par season ke CCE results ka intezaar'],
                  ['5. Claim calculation aur approval', 'Yield data + premium subsidy aane ke baad'],
                  ['6. Account mein payout', 'Seedha Aadhaar-linked bank account mein (DBT)'],
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
            Practice mein payout aane mein kaafi mahine lag sakte hain — CCE data aur state ki premium subsidy time par na aane par process ruk jaata hai. Isliye der ho toh chup baithne ki bajaye shikayat register karein, jiska tareeka neeche hai.
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
            Har stage par kagaz ka record rakhein — call ki date, complaint number, kis afsar se baat hui. Yehi record aage kaam aata hai. Grievance ke liye kendra sarkar ne <strong>Krishi Rakshak Portal aur Helpline (KRPH) — 14447</strong> shuru ki hai, jo insurance companies ke database se juda hai aur multilingual support deta hai.{' '}
            <span className="text-xs">
              (Source: <Src href="https://pwonlyias.com/current-affairs/pradhan-mantri-fasal-bima-yojana/">KRPH launch, Ministry of Agriculture &amp; Farmers Welfare</Src>)
            </span>
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

        <section className="my-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl">
          <h2 className="text-base font-black text-[var(--color-text)] mb-3">Sources / Official References</h2>
          <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3">
            Is guide ke scheme-related tathya neeche diye gaye sarkari portal aur official announcements par aadharit hain. Premium rates, cut-off dates aur add-on covers har season aur har rajya ke liye alag notify hote hain — apna faisla lene se pehle hamesha official portal ya apne agriculture office se confirm karein.
          </p>
          <ul className="text-xs text-[var(--color-text-muted)] space-y-2 list-disc list-inside">
            <li>
              <Src href="https://pmfby.gov.in">PMFBY — National Crop Insurance Portal (pmfby.gov.in)</Src> — enrollment, application status, grievance aur insurance company contacts
            </li>
            <li>
              <Src href="https://agriwelfare.gov.in">Ministry of Agriculture &amp; Farmers Welfare (agriwelfare.gov.in)</Src> — PMFBY Operational Guidelines aur scheme notifications
            </li>
            <li>
              <Src href="https://newindiasamachar.pib.gov.in/WriteReadData/flipbook/2023/Jan/1st/English/files/basic-html/page31.html">PIB / New India Samachar</Src> — 2020 revamp, 72-ghante intimation aur North-East subsidy sharing
            </li>
            <li>
              <Src href="https://www.newindianexpress.com/states/odisha/2025/Nov/19/pmfby-to-cover-crop-loss-by-animal-attack-inundation">Revised framework (Nov 2025)</Src> — wild animal attack add-on cover aur paddy inundation ki wapsi, Kharif 2026 se
            </li>
            <li>
              <Src href="https://agritimes.co.in/crops/fight-against-desert-locusts-will-take-time-says-fao-chief/cropic-app-brings-real-time-crop-loss-assessment-under-pmfby/">CROPIC aur KRPH 14447</Src> — geo-tagged loss assessment aur grievance helpline
            </li>
          </ul>
          <p className="text-[11px] text-[var(--color-text-muted)] leading-relaxed mt-3">
            Last verified: {fmtDate(MODIFIED)}. KisanStatus ek independent information website hai — hum koi sarkari vibhag ya insurance company nahi hain, aur na hi enrollment ya claim process karte hain.
          </p>
        </section>

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
        <Disclaimer k="PmfbyCropInsurance2026" />
      </div>
    </>
  );
}
