import Link from 'next/link';
import Image from 'next/image';
import {
  SI, StepList, IB, SH, GovLink, RelatedArticles,
  AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate
} from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const KIST = {
  number: '24',
  label: '24vi',
  expectedDate: 'October 2026',
  confirmedDate: null as string | null,
  amount: '₹2,000',
  status: 'Expected' as 'Expected' | 'Confirmed' | 'Released',
  recipients: '9.4 Crore+',
};

const PUBLISHED = '2026-01-01T10:21:39+05:30';
const MODIFIED = '2026-08-12T11:30:00+05:30';

const RELATED = [
  { slug: 'PmKisan25viKist2027', title: '25vi Kist Date & Amount' },
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Generated Meaning' },
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed — 7 Fixes' },
];

const FAQS_DATA = [
  {
    q: '24vi kist ki official date announce hui hai kya?',
    a: 'Nahi, ab tak nahi. Aam taur par sarkar release se sirf 2-4 din pehle date batati hai — 23vi kist ki date bhi June ke teesre hafte mein hi confirm hui thi. Isliye jo bhi website aaj pakki date bata rahi hai, woh andaza hi hai. Official baat sirf pmkisan.gov.in ke notice ya Agriculture Ministry ke announcement se hi maano.',
  },
  {
    q: 'October 2026 wali baat kahan se aayi phir?',
    a: 'Ye pichhli kiston ke gap se nikala gaya hisaab hai. 22vi kist 13 March 2026 ko aayi, 23vi 20 June 2026 ko — matlab lagbhag 3 se 4 mahine ka antar. Isi pattern se agli kist October ke aas-paas banti hai. Lekin gap kabhi kabhi lamba bhi ho jata hai (20vi aur 21vi ke beech saade teen mahine se zyada tha), toh November tak bhi khich sakti hai.',
  },
  {
    q: 'Paise kitne milenge is baar?',
    a: '₹2,000 — jitne har kist mein milte hain. Scheme ka structure fix hai: saal ke ₹6,000, teen barabar hisson mein. Amount badhne ki afwahein har kist se pehle udti hain, lekin sarkar ne aisa koi official announcement nahi kiya hai.',
  },
  {
    q: 'eKYC pehle karwai thi, dobara karni padegi kya?',
    a: 'Nahi. eKYC ek baar complete ho gayi toh bar-bar nahi karni padti. Portal par "Know Your Status" mein jaake dekh lo — agar eKYC "Yes" dikha raha hai toh tum set ho. Haan, agar Aadhaar mein koi detail badli hai (naam, mobile number) toh dobara verify karna pad sakta hai.',
  },
  {
    q: 'Status mein "Payment Success" hai par bank mein paisa nahi dikha — ghabrau?',
    a: 'Nahi, pehle 48 ghante ruk jao. FTO process hone ke baad bank credit mein waqt lagta hai, khaas kar gramin bank ho toh. pfms.nic.in par bhi check kar sakte ho. Teen din baad bhi kuch na dikhe tab helpline 155261 par baat karo — registration number saath rakhna.',
  },
  {
    q: 'Naya registration abhi karun toh 24vi kist mil jayegi?',
    a: 'Mil sakti hai, par guarantee nahi. Registration ke baad state government verification hota hai, phir eKYC aur bank seeding — is poore process mein 1 se 3 mahine lagte hain. Jitni jaldi shuru karoge, utne chances behtar. October door nahi hai, isliye der karna nuksaan ka sauda hai.',
  },
  {
    q: 'Meri 2-3 purani kist bhi nahi aayi thi — woh milengi kya?',
    a: 'Haan, agar rukne ki wajah tumhari taraf se thi (eKYC pending, land seeding, naam mismatch) aur ab woh theek ho gayi hai, toh ruki hui kistein arrears ke roop mein ek saath aa jaati hain. Ministry khud keh chuki hai ki mandatory requirements poori hote hi due installments release ho jaati hain.',
  },
  {
    q: 'Kist aane ki sabse bharosemand khabar kahan milegi?',
    a: 'Teen jagah: pmkisan.gov.in ka homepage (release se pehle wahan banner lagta hai), PIB ki press release, aur Agriculture Ministry ke official social media handles. Hum bhi date confirm hote hi isi page ko update kar dete hain — isliye bookmark kaam aayega.',
  },
];

export default function PmKisan24viKist2026({ article }: { article: ArticleMeta }) {
  const isReleased = KIST.status === 'Released';
  const isConfirmed = KIST.status === 'Confirmed';

  return (
    <>

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white font-bold">24vi Kist Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Upcoming Kist</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan 24vi Kist Kab Aayegi? Release Date Ka Sach, Status Check Aur Tayyari
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>11 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className={`mb-6 border-2 rounded-xl p-4 ${
          isReleased ? 'bg-green-50 dark:bg-green-900/20 border-green-400 dark:border-green-700' :
          isConfirmed ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-400 dark:border-blue-700' :
          'bg-orange-50 dark:bg-orange-900/20 border-orange-400 dark:border-orange-700'
        }`}>
          <div className="flex items-start gap-3">
            <div>
              <p className={`font-black text-base sm:text-lg leading-snug ${
                isReleased ? 'text-green-800 dark:text-green-300' :
                isConfirmed ? 'text-blue-800 dark:text-blue-300' :
                'text-orange-800 dark:text-orange-300'
              }`}>
                {isReleased && KIST.confirmedDate
                  ? `24vi Kist Release Ho Gayi! – ${KIST.confirmedDate}`
                  : isConfirmed && KIST.confirmedDate
                  ? `24vi Kist Confirm: ${KIST.confirmedDate}`
                  : `24vi Kist – Expected: ${KIST.expectedDate}`}
              </p>
              <p className={`text-xs sm:text-sm mt-1 ${
                isReleased ? 'text-green-700 dark:text-green-400' :
                isConfirmed ? 'text-blue-700 dark:text-blue-400' :
                'text-orange-700 dark:text-orange-400'
              }`}>
                {isReleased
                  ? 'Kist nahi aayi? Neeche verification guide padhein.'
                  : isConfirmed
                  ? 'Date confirm ho gayi hai. Release hote hi update hoga.'
                  : 'Official date abhi announce nahi hui — jo neeche likha hai woh pichhli kiston ke pattern par based hai.'}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1.5">
                Last Updated: {fmtDate(MODIFIED)}
              </p>
            </div>
          </div>
        </div>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/pm-kisan-24vi-kist-og.webp'}
            alt="PM Kisan 24vi kist October 2026 — expected date, eligibility, status check guide"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            24vi Kist — ₹2,000 seedha bank account mein, DBT ke zariye
          </p>
        </div>

        <section className="mb-8">
          <SH>Pehle Woh Sun Lo Jo Koi Nahi Batata</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Date announce nahi hui hai. Bas.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Jo bhi video ya website aaj tumhe pakki tareekh bata rahi hai, woh andaza bech rahi hai. Ab andaza bura nahi hota — agar imandari se lagaya jaye. Toh chalo saath mein lagate hain. 23vi baar paisa 20 June 2026 ko aaya tha, Tarakeswar (Hooghly, West Bengal) se — 9.44 crore parivaron ko kul ₹18,880 crore. Usse pehle wala transfer 13 March ko Guwahati se hua tha. Dono ke beech ka fasla? Lagbhag saade teen mahine.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Isi ginti se agla number <strong>October 2026 ke aas-paas</strong> baithta hai. Par yaad rakhna — 2025 mein bhi aisa hi hisaab sab laga rahe the, aur 20vi-21vi ke beech ka gap khich kar November tak chala gaya tha. Ganit dhokha de sakta hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Toh phir karna kya hai? Intezaar nahi — <strong>taiyari.</strong> Jis din sarkar button dabaye, us din tumhara paisa bina atke aana chahiye. Wahi is poore page ka maqsad hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Scheme Ka Basic — 30 Second Mein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Naye readers ke liye chhota sa recap — baaki log aage badh jao.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            PM Kisan Samman Nidhi February 2019 se chal rahi hai. Har eligible parivar ko saal ke ₹6,000 — teen baar mein, ₹2,000 karke, seedha bank account mein. Beech mein na agent, na dalal, na form-wala babu. Scale kitni badi hai? 22vi baar tak sarkar ₹4.27 lakh crore se zyada baant chuki thi, aur har round mein 9 crore se upar parivar. Isliye jis din paisa nikalta hai, portal par itni bheed hoti hai ki apna record dekhna bhi jung ban jata hai. Us jung se kaise nipatna hai — aage bataya hai.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
            {[
              { label: 'Kist', value: KIST.label },
              { label: 'Amount', value: KIST.amount },
              { label: 'Expected', value: 'Oct 2026' },
              { label: 'Recipients', value: KIST.recipients },
            ].map(({ label, value }) => (
              <div key={label} className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 text-center">
                <p className="text-[10px] text-[var(--color-text-muted)] mb-0.5">{label}</p>
                <p className="font-black text-green-800 dark:text-green-300 text-sm">{value}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--color-text-muted)]">
            Recipients ka figure pichhli (23vi) kist ke official aankde par based hai — 24vi ka final number release ke din pata chalega.
          </p>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/pm-kisan-24vi-kist-banner.webp"
            alt="PM Kisan 24vi kist banner — October 2026 release timeline and preparation checklist"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Release se pehle ki taiyari hi asli kaam hai
          </p>
        </div>

        <section className="mb-8">
          <SH>Pichhli Paanch Kistein — Verified Record</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Afwahon ki kaat ek hi hai — record. Neeche har tareekh sarkari release ke hisaab se hai, humne khud milaan kiya hai:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Kist</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Kahan Se Release Hui</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { kist: '24vi', date: 'Oct 2026 (andaza)', venue: '—', status: 'Expected', upcoming: true },
                  { kist: '23vi', date: '20 Jun 2026', venue: 'Tarakeswar, West Bengal', status: 'Released', highlight: true },
                  { kist: '22vi', date: '13 Mar 2026', venue: 'Guwahati, Assam', status: 'Released' },
                  { kist: '21vi', date: '19 Nov 2025', venue: 'Coimbatore, Tamil Nadu', status: 'Released' },
                  { kist: '20vi', date: '2 Aug 2025', venue: 'Varanasi, Uttar Pradesh', status: 'Released' },
                  { kist: '19vi', date: '24 Feb 2025', venue: 'Bhagalpur, Bihar', status: 'Released' },
                ].map((row) => (
                  <tr key={row.kist} className={
                    row.highlight ? 'bg-green-50 dark:bg-green-900/20 font-medium' :
                    row.upcoming ? 'bg-orange-50 dark:bg-orange-900/20' :
                    'bg-[var(--color-card)]'
                  }>
                    <td className="p-3 border-b border-[var(--color-border)] font-semibold text-xs text-[var(--color-text)]">{row.kist}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{row.date}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{row.venue}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        row.status === 'Released'
                          ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300'
                          : 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300'
                      }`}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Table mein ek cheez aur chhupi hai. Har baar venue alag state mein hai — Bihar, UP, Tamil Nadu, Assam, Bengal. Sarkar transfer ko kisi bade event ke saath jodti hai, aur event PM ke schedule par tikta hai. Nateeja? Tareekh aakhri hafte tak hawa mein latki rehti hai. 23vi ki confirm bhi June ke teesre hafte mein hi hui thi — release se bas chaar din pehle.
          </p>
          <IB>
            <strong>Dhyan rahe:</strong> October pichhle gaps se nikla anumaan hai, sarkari notification nahi. pmkisan.gov.in par notice aaye — tabhi pakka maano. Channel chahe kitna bhi bada ho.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Kya Tumhe 24vi Kist Milegi? Khud Check Karo</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Har baar paisa batne ke baad hazaron log wahi ek sawal poochte hain — &quot;mera kyun nahi aaya?&quot; Aur jawab lagbhag hamesha inhi 4-5 cheezon mein milta hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Paisa Aayega, Agar:</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Kheti ki zameen tumhare naam par registered hai</li>
                <li>✓ Portal par land seeding complete hai</li>
                <li>✓ eKYC ho chuki hai (status mein &quot;Yes&quot; dikhta hai)</li>
                <li>✓ Bank account Aadhaar se NPCI par mapped hai</li>
                <li>✓ Naam ki spelling Aadhaar aur portal par same hai</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-2">Paisa Rukega, Agar:</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✗ Income tax bharte ho (parivar mein koi bhi)</li>
                <li>✗ Government job hai (central ya state)</li>
                <li>✗ Doctor, CA, lawyer, engineer jaisa registered professional ho</li>
                <li>✗ eKYC ya land seeding pending hai</li>
                <li>✗ Bank account band ya dormant pada hai</li>
              </ul>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Sabse pehla kaam? Naam list mein dhundo. <Link href="/articles/PmKisanBeneficiaryList2026" className="underline font-bold text-[var(--color-primary)]">Gaon ke hisaab se beneficiary list dekhne ka tareeka</Link> humne alag article mein step-by-step likha hai. Naam nahi mila toh registration pehla kadam hai — aur jitna jaldi, utna achha.
          </p>
          <div className="bg-[var(--color-bg-alt)] border-l-4 border-[var(--color-primary)] rounded-r-xl p-4 mb-4">
            <p className="font-black text-[var(--color-text)] text-sm mb-2">Ek asli case samjho:</p>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-2">
              23vi ke baad humein ek pathak ka message aaya tha (naam nahi likh rahe) — UP ke ek gaon se. Registration usne January mein karwaya tha, form CSC se bhara, receipt bhi rakhi. June mein paisa nahi aaya toh pareshan. Humne uska status dekhne ko kaha — nikla ki eKYC “Yes” thi, land seeding bhi ho gayi thi, lekin bank wale column mein NPCI mapping ka nishaan nahi tha. Uska account Aadhaar se “linked” toh tha, par DBT ke liye map nahi hua tha — ye do alag cheezein hain.
            </p>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Branch gaya, seeding form bhara, das din mein map ho gaya. Ab agli baar uska paisa seedha aayega — aur ruki hui rakam arrears mein. Seekh yeh hai: <strong>form bhar ke bhool jaana sabse mehngi galti hai.</strong> Registration ke baad teen taale khulne chahiye — verification, eKYC, bank mapping. Teeno khule tabhi paisa nikalta hai.
            </p>
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/pm-kisan-24vi-kist-october-2026.webp"
            alt="PM Kisan 24vi kist October 2026 calendar — expected release date and countdown"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Pattern ke hisaab se October 2026 — confirm hote hi yahan update hoga
          </p>
        </div>

        <section className="mb-8">
          <SH>Beneficiary Status Check Karne Ka Sahi Tareeka</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Portal ka layout pichhle saal badla tha — purane screenshots wale videos se confuse mat hona. Aaj ka raasta yeh hai:
          </p>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholo — sirf yahi official site hai, milte-julte naam wali fake sites se bacho</SI>
            <SI n={2}>Farmers Corner mein <strong>Know Your Status</strong> par click karo</SI>
            <SI n={3}>Registration number daalo. Yaad nahi? <strong>Know your registration no.</strong> se Aadhaar ya mobile number se nikal lo</SI>
            <SI n={4}>Captcha bharo, OTP registered mobile par aayega — use daalo</SI>
            <SI n={5}>Poori payment history, eKYC status aur land seeding status ek hi screen par dikh jayega</SI>
          </StepList>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4 mb-3">
            Screen par jo likha aayega, uske matlab yeh hain — padh lo, aadhi tension yahin khatam ho jayegi:
          </p>

          <div className="mt-4 space-y-2">
            {[
              { status: 'FTO Generated', meaning: 'Sarkar ne payment order bana diya hai, bank process kar raha hai. 24-48 ghante ka khel hai. Detail mein samajhna ho toh humara FTO wala article padho.' },
              { status: 'Payment Success', meaning: 'Paisa account mein bhej diya gaya. Bank statement ya passbook entry se confirm karo.' },
              { status: 'Payment Failed / Reversed', meaning: 'Bank ya NPCI level par dikkat hai — account band, naam mismatch, ya seeding ka issue. Fix karna padega, khud se theek nahi hota.' },
              { status: 'eKYC Pending', meaning: 'Sabse aam rukavat. Jab tak eKYC nahi hogi, kist release list mein tumhara naam nahi jayega.' },
            ].map(({ status, meaning }) => (
              <div key={status} className="flex gap-3 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg">
                <span className="font-black text-[var(--color-primary)] text-xs shrink-0 w-28">{status}</span>
                <span className="text-xs text-[var(--color-text-muted)]">{meaning}</span>
              </div>
            ))}
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            &quot;FTO Generated&quot; dikha? Ghabrao mat — yeh achhi khabar hai. Iske andar ka technical khel <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="underline font-bold text-[var(--color-primary)]">FTO wale article</Link> mein khol kar rakha hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>eKYC — Isi Par Sabse Zyada Paisa Atakta Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Har baar se pehle Agriculture Ministry khud yaad dilati hai: verification zaroori hai. Aur har baar ke baad lakhon ka paisa isi par ruka milta hai. Tumhari pehle se ho chuki hai? Yeh section chhod do. Nahi hui — toh teen raaste hain:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-1">OTP Se (Ghar Baithe)</p>
              <p className="text-xs text-[var(--color-text-muted)]">Portal ya PM Kisan app par Aadhaar number daalo, linked mobile par OTP aayega. 2 minute ka kaam — bas Aadhaar se mobile linked hona chahiye.</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-1">Biometric (CSC Par)</p>
              <p className="text-xs text-[var(--color-text-muted)]">Mobile Aadhaar se linked nahi? Nazdeeki CSC ya State Seva Kendra jao, fingerprint se ho jayegi. Mamuli service charge lag sakta hai.</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <p className="font-black text-purple-800 dark:text-purple-300 text-sm mb-1">Face Authentication</p>
              <p className="text-xs text-[var(--color-text-muted)]">PM Kisan mobile app se face scan karke bhi ho jaati hai. Bujurg kisano ke liye sabse aasaan — na OTP ka jhanjhat, na center ke chakkar.</p>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Doosri badi rukavat — NPCI mapping. Upar wale case mein yehi nikli thi. Aadhaar ka account mein &quot;linked&quot; hona alag baat hai, DBT ke liye map hona alag. Branch jaake &quot;Aadhaar seeding for DBT&quot; likhwa kar confirmation lo. Screenshots ke saath pura process <Link href="/articles/PmKisanMasterGuide2026" className="underline font-bold text-[var(--color-primary)]">master guide</Link> mein hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Paanch Aam Problems Aur Unke Asli Solutions</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ye wahi sawal hain jo har baar comments aur helpline par sabse zyada aate hain. Generic gyaan nahi — exact agla kadam likha hai:
          </p>
          <div className="space-y-3">
            {[
              { err: 'Status "Success" lekin paisa account mein nahi', fix: 'Pehle 48 ghante ka wait normal hai. pfms.nic.in par bhi payment track kar sakte ho. Bank se mini-statement lo — kabhi kabhi SMS nahi aata par entry hoti hai. Teen din baad bhi kuch nahi toh 155261 par registration number ke saath call karo.' },
              { err: 'Aadhaar Authentication Failed dikh raha hai', fix: 'Iska matlab portal aur Aadhaar mein naam ki spelling alag hai. Ek bhi akshar ka fark chalega nahi. Ya toh portal par naam correction karwao (agriculture office se) ya Aadhaar update karo — jo bhi galat ho.' },
              { err: 'Paisa aaya aur wapas chala gaya (Reversed)', fix: 'Account dormant hai ya DBT-enabled nahi. Bank branch jao, account activate karwao aur "Aadhaar seeding for DBT" karwa kar written confirmation lo. Phir agli cycle mein arrears ke saath aa jayega.' },
              { err: 'Kist release ke din portal khul hi nahi raha', fix: 'Release ke din crores log ek saath check karte hain — server slow hona aam baat hai. Sham ke baad ya agle din try karo. Paisa isse rukta nahi, sirf status dikhna late hota hai.' },
              { err: 'Naam beneficiary list se gayab ho gaya', fix: 'Sarkar samay-samay par verification drive chalati hai jisme ineligible naam hataye jaate hain. Agar tum eligible ho aur naam kat gaya, toh apne block ke agriculture officer se grievance file karo — online complaint bhi portal ke Help Desk section se ho jaati hai.' },
            ].map(({ err, fix }) => (
              <div key={err} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden">
                <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5">
                  <p className="font-black text-red-800 dark:text-red-300 text-sm">{err}</p>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <span className="text-green-600 dark:text-green-400 font-black text-xs shrink-0 mt-0.5">FIX:</span>
                    <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">{fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-xl">
            <p className="font-black text-[var(--color-text)] text-sm mb-2">Official Helpline (Yahi Numbers Sahi Hain):</p>
            <div className="text-xs text-[var(--color-text-muted)] space-y-1">
              <p><strong>155261</strong> (Toll Free)</p>
              <p><strong>1800-115-526</strong> (Toll Free)</p>
              <p><strong>pmkisan-ict@gov.in</strong></p>
              <p className="mt-2 text-[10px] italic">Kist release ke hafte mein lines busy rehti hain — subah jaldi call lagane par jaldi baat hoti hai. Email mein apna registration number aur problem ek line mein likho, jawab aata hai.</p>
            </div>
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/payment-success.webp"
            alt="PM Kisan payment success notification — ₹2000 credited to bank account"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Taiyari poori ho toh paisa bina atke aata hai
          </p>
        </div>

        <section className="mb-8">
          <SH>Afwahon Se Kaise Bachein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Do tarah ke jaal bichhte hain har baar.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Pehla — badhe hue paise ki afwah. &quot;Is baar ₹4,000 milenge&quot;, &quot;rakam ₹10,000 ho gayi.&quot; Nahi hui. ₹2,000 hi hai, aur jab bhi badhegi, Budget ya Cabinet se badhegi — WhatsApp forward se nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Doosra jaal zyada khatarnak hai — fake links. Message aata hai &quot;yahan se apna paisa check karo&quot;, click karte hi Aadhaar, OTP ya bank details maang li jaati hain. Ek baat gaanth baandh lo: <strong>OTP kisi ko batane se sarkari kaam nahi hota, account khali hota hai.</strong> Na sarkar phone karke OTP maangti hai, na paisa dene ke liye koi fees leti hai. Jo maange, woh thag hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Bharose ki jagah sirf teen — pmkisan.gov.in ka homepage, PIB press release, aur Agriculture Ministry ke verified handles. In teeno mein se kahin tareekh aaye, tabhi maano.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            24vi Kist Par Kisano Ke Asli Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="24vi Kist FAQ — Seedhe Jawab" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Release Se Pehle Ki Checklist</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Tareekh aaye ya na aaye, yeh 4 kaam abhi nipta lo — atka hua paisa zyada tar inhi chaar mein se kisi ek par atka hota hai:
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>Portal par &quot;Know Your Status&quot; se eKYC aur land seeding — dono &quot;Yes&quot; hone chahiye</li>
            <li>Bank branch se Aadhaar-NPCI seeding (DBT enable) confirm karwao</li>
            <li>Beneficiary list mein apna naam verify karo</li>
            <li>Aadhaar aur portal par naam ki spelling milao — mismatch ho toh abhi correction karwao</li>
          </ol>
          <p className="text-xs text-green-700 dark:text-green-400 mt-4 italic">
            Koi bhi adhura raha, toh paisa hold par — aur phir agli cycle tak intezaar.
          </p>
        </div>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="PM Kisan Beneficiary Status — Official Portal"
          guide="Abhi Status Check Karo"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          title="Apni Kist Track Karo"
          desc="Kitni kist aayi, kitni pending — complete history jaano"
          primaryCta={{ href: '/calculator/installment-tracker', label: ' Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: 'Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} bioKey="PmKisan24viKist2026" />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
          { href: '/articles/pm-kisan-fto-generated-ka-matlab-kya-hai', l: ' FTO Guide' },
          { href: '/articles/PmKisanBeneficiaryList2026', l: 'Beneficiary List' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
