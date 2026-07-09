'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-07-10T08:00:00+05:30';
const MODIFIED = '2026-07-10T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Online Guide', emoji: '🔐' },
  { slug: 'PmKisanMasterGuide2026', title: 'Master Guide', emoji: '' },
  { slug: 'PmKisanBankAccountChangeProcess', title: 'Bank Account Change', emoji: '🏦' },
  { slug: 'PmKisanStateNodalOfficerList', title: 'Nodal Officer List', emoji: '📞' },
];

const FAQS_DATA = [
  {
    q: 'CSC wala PM Kisan ke liye kitne paise leta hai?',
    a: 'Sarkari niyam ke mutabiq eKYC aur registration ke liye ₹15 se ₹30 tak. Usse zyada maange toh complaint karo.',
  },
  {
    q: 'Kya main ghar baithe free mein kar sakta hoon?',
    a: 'Haan, agar OTP aa raha hai toh pmkisan.gov.in se khud kar lo, ek rupya nahi lagega. CSC sirf tab jao jab online na ho pa raha ho.',
  },
  {
    q: 'CSC center nahi mil raha, kya karein?',
    a: 'pmkisan.gov.in par "CSC Center Locator" ka option hai. Wahan se nazdiki center ka address mil jayega. Ya Google Maps par "CSC center near me" search karo.',
  },
  {
    q: 'CSC wale ne ₹100 maange hain, dena chahiye?',
    a: 'Nahi dena. Sarkari rate fix hai. Agar wo zid kare, toh uska CSC ID note karo aur online complaint karo. 24 ghante mein action hota hai.',
  },
  {
    q: 'Kya CSC wala biometric eKYC kar sakta hai?',
    a: 'Haan, unke paas official biometric device hota hai. Wo fingerprint ya iris scan se eKYC kar dete hain. Ye sabse reliable tarika hai.',
  },
  {
    q: 'Registration ke baad receipt kaise milegi?',
    a: 'CSC wale ko bolo ki wo "Acknowledgement Slip" print kar ke de. Us par transaction ID aur timestamp likha hota hai. Future mein kaam aata hai.',
  },
  {
    q: 'Agar CSC wale ne galat data daal diya toh?',
    a: 'Turant usi waqt screen par check karo. Agar galti ho gayi hai, toh <Link href="/articles/PmKisanCorrectionForm2026" class="underline">correction form</Link> se fix karo ya naye center par dobara try karo.',
  },
  {
    q: 'Kya PM Kisan ka kaam sarkari office mein free hota hai?',
    a: 'Haan, Block Agriculture Office (BAO) ya Tehsil mein ye kaam bilkul free hai. Lekin wahan bheed zyada hoti hai aur time lagta hai.',
  },
];

export default function PmKisanCscRegistrationCharges({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">CSC Registration Charges</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Fees & Process Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan CSC Registration Charges 2026: Kitne Paise Lagte Hain, Kaise Karein?
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 14 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-csc-registration-charges/csc-registration-hero.webp"
            alt="CSC center operator helping farmer with PM Kisan registration and eKYC process"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
            priority
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
            CSC Registration Charges — Sahi Fees, Sahi Tarika
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <SH>₹500 Maang Rahe Hain? Ruko, Pehle Ye Padho</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, ek baar mere paas ek kisan bhai ka message aaya — "CSC wale ne PM Kisan registration ke ₹500 maange hain, kya doon?" Maine turant bola — ruko, ye galat hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Sarkar ne PM Kisan ke liye CSC charges fix kiye hain. Usse ek rupya bhi zyada lena illegal hai. Lekin gaon mein bahut log anjaan hote hain aur extra paise de dete hain. Aaj main aapko bataunga ki asli rate kya hai, aur agar koi zyada maange toh kaise complaint karein.
          </p>
          
          <Image
            src="/images/articles/pm-kisan-csc-registration-charges/csc-fee-chart.webp"
            alt="Official PM Kisan CSC fee structure chart showing government fixed rates"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />

          <DB>
            <strong>Real Story:</strong>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              Etawah ke Rakesh bhai ko CSC wale ne ₹300 maange. Unhone diye. Baad mein pata chala ki sarkari rate sirf ₹25 hai. Unne CSC portal par complaint ki. 3 din mein paise wapas hue aur us operator ka license suspend ho gaya.
            </p>
          </DB>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Is article mein humne clear kar diya hai ki kaunsa kaam kitne ka hai, kaise free mein ghar baithe karein, aur agar koi zyada paise maange toh kaise complaint karein. End tak padho, paise bachenge aur kaam bhi banega.
          </p>
        </section>

        {/* SECTION 1: Official Rates */}
        <section className="mb-8">
          <SH>Sarkari Rate Kya Hai? (Official Fee Structure)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            CSC (Common Service Center) ek sarkari authorized network hai. Inke rates government fix karti hai. PM Kisan ke liye ye hain asli rates:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Kaam</th>
                  <th className="p-3 text-left">Sarkari Rate</th>
                  <th className="p-3 text-left">Time Lagta Hai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['New Registration', '₹25 - ₹30', '10-15 minute'],
                  ['eKYC (OTP/Biometric)', '₹15 - ₹20', '5 minute'],
                  ['Bank Account Update', '₹20 - ₹25', '10 minute'],
                  ['Name/Mobile Correction', '₹20 - ₹30', '15 minute'],
                  ['Status Printout', '₹10 - ₹15', '2 minute'],
                ].map(([work, rate, time], i) => (
                  <tr key={work} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{work}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-green-600 dark:text-green-400 font-bold">{rate}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <IB>
            <strong>Yaad Rakho:</strong> Ye rates maximum hain. CSC wala isse kam bhi le sakta hai, lekin zyada nahi. Agar ₹50 ya ₹100 maange, toh wo black marketing hai.
          </IB>
        </section>

        {/* SECTION 2: Free Online Method */}
        <section className="mb-8">
          <SH>Ghar Baithe FREE Mein Kaise Karein? (Bina CSC Gaye)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, CSC jane ki zaroorat hi kya hai agar aapke paas smartphone aur internet hai? Aap khud ye kaam ghar baithe, ek rupya kharch kiye bina kar sakte ho.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            <Link href="/articles/PmKisanEkycOnline2026" className="underline text-green-700 dark:text-green-400">Online process</Link> bahut simple hai. Bas ye steps follow karo:
          </p>
          <StepList>
            <SI n={1}>pmkisan.gov.in kholo ya "PMKisan" app download karo.</SI>
            <SI n={2}>"Farmers Corner" mein se "New Registration" ya "eKYC" chuno.</SI>
            <SI n={3}>Aadhaar number daalo, OTP aayega.</SI>
            <SI n={4}>OTP verify karo, form bharo, submit kar do.</SI>
            <SI n={5}>Screen par confirmation number aa jayega. Screenshot le lo.</SI>
          </StepList>

          <Image
            src="/images/articles/pm-kisan-csc-registration-charges/online-vs-csc.webp"
            alt="Comparison between online free PM Kisan process and paid CSC center process"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />

          <WB>
            <strong>CSC Kab Jayein?</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
              <li>Jab OTP mobile par aa hi na raha ho.</li>
              <li>Jab Aadhaar mein photo bahut purani ho aur face authentication fail ho raha ho.</li>
              <li>Jab internet/smartphone na ho.</li>
              <li>Jab biometric eKYC zaroori ho (fingerprint scan).</li>
            </ul>
          </WB>
        </section>

        {/* SECTION 3: CSC Process Steps */}
        <section className="mb-8">
          <SH>CSC Center Par Kya Hota Hai? (Andar Ki Kahani)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar aap CSC ja rahe ho, toh pata hona chahiye ki wahan actually kya process hota hai taaki koi bewakoof na bana sake:
          </p>
          <ol className="space-y-3 mb-6">
            {[
              'CSC wala apne official portal (csc.gov.in) par login karega.',
              'Wo "PM Kisan Samman Nidhi" service select karega.',
              'Aapka Aadhaar number dalega aur biometric device par ungli rakhega.',
              'Server se data verify hoga. Naam, photo, mobile number screen par dikhega.',
              'Aapko screen dikhani chahiye. Check karo ki sab sahi hai.',
              'Submit hone par ek 12 digit ka Transaction ID generate hoga.',
              'Receipt print hogi. Us par timestamp, operator ID, aur amount likha hoga.',
            ].map((step, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[var(--color-primary)] text-white text-xs font-black flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-sm text-[var(--color-text-muted)] pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            <strong>Pro Tip:</strong> Receipt maangna mat bhoolna. Bina receipt ke kaam hua hi nahi maana jata. Agar wo kahe "system mein hai, receipt nahi dega", toh samajh jao kuch gadbad hai.
          </p>
        </section>

        {/* SECTION 4: Fraud Alert */}
        <section className="mb-8">
          <SH>⚠️ CSC Fraud Se Kaise Bachen? (Red Flags)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bhai, kuch log CSC ka fayda utha kar gareeb kisanon ko loot te hain. In signs par dhyan do:
          </p>
          <div className="space-y-3">
            {[
              { 
                sign: '100 se zyada maangna', 
                action: 'Turant mana kar do. Sarkari rate ₹25 hai. Usse zyada dena kanoonan galat hai.',
              },
              { 
                sign: 'Bina receipt ke paise lena', 
                action: 'Receipt ke bina transaction valid nahi hai. Wo paise kha jayega.',
              },
              { 
                sign: 'Aapka phone maangna', 
                action: 'Apna phone kisi ko mat do. OTP aapke phone par aayega, usko operator ko bolo. Phone hath mein rakho.',
              },
              { 
                sign: '"Kal aana, server down hai" bol kar paise lena', 
                action: 'Ye classic scam hai. Paise wapas mango aur dusre center par jao.',
              },
              { 
                sign: 'Aadhaar number ya OTP chupke se note karna', 
                action: 'Ye data theft hai. Turant wahan se nikal jao aur complaint karo.',
              },
            ].map(({ sign, action }, i) => (
              <div key={i} className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-1">🚩 {sign}</p>
                <p className="text-xs text-red-700 dark:text-red-300"><strong>✅ Kya Karein:</strong> {action}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: How to Complaint */}
        <section className="mb-8">
          <SH>Agar Zyada Paise Le Toh Complaint Kaise Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Darrne ki baat nahi hai. CSC operators par strict monitoring hoti hai. Ek complaint se unka license suspend ho sakta hai.
          </p>
          <StepList>
            <SI n={1}>CSC ka ID number ya center ka address note karo.</SI>
            <SI n={2}>Receipt ki photo ya payment proof (agar UPI se diya hai) save karo.</SI>
            <SI n={3}>csc.gov.in par jao aur "Grievance/Complaint" section kholo.</SI>
            <SI n={4}>Form bharo: Operator ID, amount charged, official rate, aur proof upload karo.</SI>
            <SI n={5}>Submit karo. 48-72 ghante mein action hota hai.</SI>
          </StepList>

          <Image
            src="/images/articles/pm-kisan-csc-registration-charges/csc-complaint-portal.webp"
            alt="CSC grievance portal screenshot showing complaint form for PM Kisan fraud"
            width={800}
            height={600}
            className="w-full rounded-xl my-6"
          />

          <IB>
            <strong>Alternative:</strong> Agar online nahi ho pa raha, toh <Link href="/articles/PmKisanStateNodalOfficerList" className="underline text-green-700 dark:text-green-400">State Nodal Officer</Link> ko WhatsApp ya email kar do. Wo CSC company ko directly notice bhejte hain.
          </IB>
        </section>

        {/* SECTION 6: Documents Checklist */}
        <section className="mb-8">
          <SH>CSC Jane Se Pehle Ye Documents Ready Rakho</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Time waste nahi karna hai toh ye sab apne paas rakho:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { doc: 'Aadhaar Card', note: 'Original lao. Copy se kaam nahi chalega biometric ke liye.' },
              { doc: 'Mobile Phone', note: 'SIM usi number ki honi chahiye jo Aadhaar mein hai.' },
              { doc: 'Bank Passbook', note: 'Agar account update ya correction karwana hai.' },
              { doc: 'Old Receipt', note: 'Agar pehle koi kaam karwaya tha toh uski copy.' },
              { doc: '₹30 Cash/UPI', note: 'Sarkari rate ke hisaab se paise ready rakho.' },
              { doc: 'Pen', note: 'Form sign karne ke liye (agar offline form bharna ho).' },
            ].map(({ doc, note }) => (
              <div key={doc} className="p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <p className="font-black text-sm text-[var(--color-text)] mb-1">📄 {doc}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: Timeline */}
        <section className="mb-8">
          <SH>CSC Se Kaam Hone Ke Baad Kya Hota Hai?</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Stage</th>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Kya Check Karein</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['CSC Submission', 'Turant', 'Receipt lo aur photo lo'],
                  ['Server Sync', '2-4 ghante', 'PM Kisan portal par data update'],
                  ['Verification', '24 ghante', 'SMS aayega "Successfully Registered"'],
                  ['Status Active', '48-72 ghante', '<a href="/articles/PmKisanBeneficiaryList2026" class="underline">List mein naam</a> check karo'],
                ].map(([stage, time, check], i) => (
                  <tr key={stage} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-medium text-xs text-[var(--color-text)]">{stage}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{time}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]" dangerouslySetInnerHTML={{ __html: check }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            3 din baad bhi status active na dikhe, toh CSC wale ko wapas jao aur transaction ID dikhao. Wo backend se track kar ke bata dega ki kahan atka hai.
          </p>
        </section>

        {/* SECTION 8: State Variations */}
        <section className="mb-8">
          <SH>Kya Har State Mein Same Rate Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Haan bhai, CSC ke rates pure India mein same hain. Ye central government fix karti hai. Chahe aap UP mein ho, Kerala mein, ya Ladakh mein — rate wahi rahega.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Lekin kuch states mein <strong>State Nodal Officers</strong> ne special camps lagaye hain jahan ye kaam bilkul free ho raha hai. Agar aapke area mein camp chal raha hai, toh wahan jao. Paisa bachega.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl p-5">
            <p className="text-sm text-green-800 dark:text-green-300">
              <strong> Tip:</strong> Apne block ke Krishi Vigyan Kendra (KVK) ya Agriculture Office par puch lo ki koi free camp chal raha hai ya nahi. Gaon ke pradhan ko bhi pata hota hai.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="CSC Registration & Charges FAQ" />
        </section>

        <GovLink
          href="https://csc.gov.in"
          label="CSC Official Portal"
          guide="Complaint/Register Karein"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="csc.gov.in"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanEkycOnline2026', l: '🔐 Free Online eKYC' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
          { href: '/articles/PmKisanBankAccountChangeProcess', l: '🏦 Bank Account Change' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}