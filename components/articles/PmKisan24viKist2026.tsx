import Link from 'next/link';
import Image from 'next/image';
import {
  SI, StepList, IB, WB, SH, GovLink, RelatedArticles,
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
const MODIFIED = '2026-08-14T12:00:00+05:30';

const RELATED = [
  { slug: 'PmKisan25viKist2027', title: '25vi Kist Date & Amount' },
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Generated Meaning' },
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed — 7 Fixes' },
];

const FAQS_DATA = [
  {
    q: 'Kya sarkar ne is baar ki date bata di hai?',
    a: 'Nahi. Aur sach poochho toh sarkar mahino pehle batati bhi nahi hai. 23vi ka hi example lo — official confirmation release se bas kuch din pehle aayi thi. Aaj ki tareekh me jo bhi channel pakki date bata raha hai, woh apna andaza bech raha hai. Bharosa sirf pmkisan.gov.in ke notice ya ministry ke announcement par karo.',
  },
  {
    q: 'October 2026 ka andaza kis aadhar par hai?',
    a: 'Pichhle transfers ke gap se. 22vi 13/03/2026 ko aayi, 23vi 20 June ko — beech ka fasla kareeb 3 mahine ka. Wahi fasla aage jodo toh October ke aas paas number baithta hai. Par ye hisaab pehle bhi phisla hai — 2025 me 20vi ke baad wala gap November tak lamba ho gaya tha. Toh October likha zaroor hai, guarantee koi nahi.',
  },
  {
    q: 'Is baar amount badhega kya?',
    a: 'Abhi tak aisi koi official baat nahi hui. ₹2,000 hi milenge — scheme ka structure shuru se yehi chala aa raha hai, saal ke ₹6,000 teen hisson me. "4000 milenge" type ke message har round se pehle ghoomte hain, aur har baar galat nikalte hain. Rakam kabhi badhi toh uski khabar Budget ya Cabinet se aayegi, kisi forward se nahi.',
  },
  {
    q: '"Payment Success" dikh raha hai lekin account me kuch nahi aaya?',
    a: 'Do din ruk jaiye — FTO process hone ke baad credit me 24 se 48 ghante lag jate hain, gramin banks me kabhi thoda jyada. Passbook ya mini statement se bhi dekh lijiye, SMS har baar nahi aata. pfms.nic.in par bhi track ho jata hai. Teen din baad bhi kuch na dikhe toh 155261 par call kijiye, registration number saath rakhiye.',
  },
  {
    q: 'Naya registration abhi karun toh is baar mil jayega?',
    a: 'Mil sakta hai, par pakka nahi. Form ke baad state verification hoti hai, phir eKYC aur bank seeding — poora process aksar 1 se 3 mahine kha jata hai. Jitni jaldi shuru karoge, chances utne behtar. Aur agar ye round chhut bhi gaya, toh ghabrao mat — eligible ho toh chhuta hua paisa agli baar jud kar aa jata hai.',
  },
  {
    q: 'Meri purani 2-3 kistein bhi ruki hui hain — woh milengi?',
    a: 'Agar rukne ki wajah aapki taraf se thi — eKYC pending, land seeding adhuri, spelling mismatch — aur ab woh theek ho gayi hai, toh ruka hua pura amount arrears ke roop me ek saath aata hai. Ministry khud keh chuki hai ki mandatory requirements poori hote hi due installments nikal jaati hain. Alag se koi application nahi lagti.',
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
            <span>12 min read</span>
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
                  : 'Official date abhi announce nahi hui — neeche jo timeline hai woh pichhle transfers ke record par tiki hai.'}
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
            alt="Khet me gehu ki baaliyan haath me liye khadi ek mahila kisan"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Mehnat kheton me hoti hai — ₹2,000 seedha account me DBT se pahunchta hai
          </p>
        </div>

        <section className="mb-8">
          <SH>Seedhi Baat Pehle</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Date abhi announce nahi hui hai. Bas, itni si baat.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Lekin jo pata hai, woh kaafi kuch bata deta hai. Pichhla transfer 20/06/2026 ko hua tha — Tarakeswar (Hooghly, West Bengal) ke event se PM ne button dabaya aur 9.44 crore parivaron ko kul ₹18,880 crore gaye. Usse pehle wala 13 March ko Guwahati se. Beech ka fasla lagbhag sava teen mahine ka — isi hisaab se agla number <strong>October 2026 ke aas-paas</strong> banta hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ek baat imandari se: ye ginti pehle bhi galat ho chuki hai. 2025 me log aise hi calendar par ungli rakh rahe the, aur gap khinchte khinchte November tak pahunch gaya tha. Paisa kisi bade event ke saath nikalta hai, event PM ke schedule par tikta hai — aur schedule kisi ke haath me nahi. Toh is page ka asli maqsad tareekh ka andaza nahi, ye pakka karna hai ki jis din bhi transfer ho, aapka hissa bina atke pahunche.
          </p>
        </section>

        <section className="mb-8">
          <SH>Scheme Naye Ho Toh 30 Second Ka Recap</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            PM Kisan Samman Nidhi February 2019 se chal rahi hai. Har eligible kisan parivar ko saal ke ₹6,000 milte hain — teen baar me, ₹2,000 karke, seedha account me. Na koi agent beech me, na office ka chakkar (agar kagaz durust hon). 22vi tak sarkar ₹4.27 lakh crore se jyada baant chuki thi, har round me 9 crore se upar parivar.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Itne bade scale ka ek side effect bhi hai — jis din amount nikalta hai, site par itni bheed hoti hai ki apna record kholna mushkil ho jata hai. Iska tod bhi aage bataya hai.
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
            Recipients ka figure 23vi ke official aankde par based hai — is baar ka final number release ke din hi pata chalega.
          </p>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/pm-kisan-24vi-kist-banner.webp"
            alt="Sukhe khet me fasal ka jayza lete hue ek kisan"
            width={800}
            height={500}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Kist ka intezaar sab karte hain — kagaz durust rakhna asli taiyari hai
          </p>
        </div>

        <section className="mb-8">
          <SH>Pichhli Paanch Kistein — Record Kya Kehta Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Afwah ka sabse achha jawab record hota hai. Neeche ki har tareekh sarkari aankdon se milaayi gayi hai:
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
                  { kist: '23vi', date: '20/06/2026', venue: 'Tarakeswar, West Bengal', status: 'Released', highlight: true },
                  { kist: '22vi', date: '13/03/2026', venue: 'Guwahati, Assam', status: 'Released' },
                  { kist: '21vi', date: '19/11/2025', venue: 'Coimbatore, Tamil Nadu', status: 'Released' },
                  { kist: '20vi', date: '02/08/2025', venue: 'Varanasi, Uttar Pradesh', status: 'Released' },
                  { kist: '19vi', date: '24/02/2025', venue: 'Bhagalpur, Bihar', status: 'Released' },
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
            Table ko dhyan se dekhiye — venue har baar alag state me hai. Bihar, UP, Tamil Nadu, Assam, Bengal. Matlab ye kisi fixed calendar par nahi chalta, kisi na kisi bade karyakram ke saath hota hai. Isiliye tareekh aakhri hafte tak hawa me latki rehti hai — 23vi ki bhi bas chaar din pehle confirm hui thi.
          </p>
          <IB>
            <strong>Dhyan rahe:</strong> October pichhle gaps se nikla anumaan hai, koi sarkari notification nahi. pmkisan.gov.in par notice aane par hi pakka maaniye — YouTube channel chahe kitna bada ho.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Aapko Paisa Milega Ya Nahi — Khud Jaanch Lijiye</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Har transfer ke baad hazaron log ek hi sawal poochte hain: &quot;mera kyun nahi aaya?&quot; Jawab lagbhag hamesha inhi cheezon me chhupa hota hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Paisa Aayega, Agar:</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Kheti ki zameen aapke naam par registered hai</li>
                <li>✓ Land seeding complete hai</li>
                <li>✓ eKYC ho chuki hai (&quot;Yes&quot; dikhta hai)</li>
                <li>✓ Account Aadhaar se NPCI par mapped hai</li>
                <li>✓ Spelling Aadhaar aur record — dono jagah same hai</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-2">Paisa Rukega, Agar:</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✗ Parivar me koi income tax bharta hai</li>
                <li>✗ Government job hai (central ya state)</li>
                <li>✗ Doctor, CA, lawyer, engineer jaisa registered professional hai</li>
                <li>✗ eKYC ya seeding pending hai</li>
                <li>✗ Account band ya dormant pada hai</li>
              </ul>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Shuruaat yahan se kijiye — beneficiary list me aap hain ya nahi. Gaon ke hisaab se list nikalne ka tarika <Link href="/articles/PmKisanBeneficiaryList2026" className="underline font-bold text-[var(--color-primary)]">is alag guide</Link> me step by step likha hai. Wahan nahi mile toh pehla kadam registration hai, aur woh jitna jaldi ho utna achha.
          </p>
          <div className="bg-[var(--color-bg-alt)] border-l-4 border-[var(--color-primary)] rounded-r-xl p-4 mb-4">
            <p className="font-black text-[var(--color-text)] text-sm mb-2">Ek asli case:</p>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-2">
              23vi ke baad UP ke ek gaon se ek pathak ka message aaya tha (naam nahi likh rahe). January me form bharwaya, CSC se, receipt sambhal ke rakhi. June me kuch nahi aaya. Record khola toh eKYC &quot;Yes&quot;, seeding bhi done — lekin bank wale column me NPCI mapping ka nishaan gayab. Account Aadhaar se &quot;linked&quot; tha, par DBT ke liye map nahi hua tha. Ye do alag cheezein hain, aur jyada tar log isi me ulajhte hain.
            </p>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Branch gaya, form bhara, das din me kaam ho gaya. Agli baar seedha aayega, aur ruki hui rakam arrears me. Seekh? <strong>Form bhar ke bhool jaana sabse mehngi galti hai.</strong> Uske baad teen cheezein complete honi chahiye — verification, eKYC, bank mapping. Teeno hui, tabhi amount niklega.
            </p>
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/pm-kisan-24vi-kist-october-2026.webp"
            alt="Dhaan ke khet me kaam karta hua kisan"
            width={720}
            height={1080}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Khet ka kaam rukta nahi — pattern ke hisaab se agla transfer October 2026 ke aas-paas
          </p>
        </div>

        <section className="mb-8">
          <SH>Beneficiary Status Check Karne Ka Sahi Tareeka</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Site ka layout pichhle saal badla tha, isliye purane screenshots wale videos se confuse mat hoiye. Aaj ka raasta:
          </p>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholiye — sirf yehi official hai; milte julte naam wali sites se bachiye</SI>
            <SI n={2}>Farmers Corner me <strong>Know Your Status</strong> par click kijiye</SI>
            <SI n={3}>Registration number daaliye. Yaad nahi? <strong>Know your registration no.</strong> se Aadhaar ya mobile se nikal lijiye</SI>
            <SI n={4}>Captcha bhariye — OTP registered mobile par aayega, use daaliye</SI>
            <SI n={5}>Payment history, eKYC aur seeding — sab ek hi screen par dikh jayega</SI>
          </StepList>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4 mb-3">
            Screen par jo likha aaye, uska matlab ye hai:
          </p>

          <div className="mt-4 space-y-2">
            {[
              { status: 'FTO Generated', meaning: 'Sarkar ne payment order bana diya, bank process kar raha hai. 24-48 ghante ka mamla hai — ghabrane ki zaroorat nahi.' },
              { status: 'Payment Success', meaning: 'Rakam account mein bhej di gayi. Passbook ya statement se confirm kar lijiye.' },
              { status: 'Payment Failed / Reversed', meaning: 'Bank ya NPCI level par dikkat — account band, spelling mismatch, ya seeding ka issue. Khud theek nahi hoga, fix karna padega (neeche tarika hai).' },
              { status: 'eKYC Pending', meaning: 'Sabse aam rukavat. Jab tak ye complete nahi hoti, transfer list me aap jaoge hi nahi.' },
            ].map(({ status, meaning }) => (
              <div key={status} className="flex gap-3 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg">
                <span className="font-black text-[var(--color-primary)] text-xs shrink-0 w-28">{status}</span>
                <span className="text-xs text-[var(--color-text-muted)]">{meaning}</span>
              </div>
            ))}
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            FTO ke andar ka technical process — order kaise banta hai, kahan atakta hai — alag se samjha hai, <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="underline font-bold text-[var(--color-primary)]">yahan padh lijiye</Link>.
          </p>
        </section>

        <section className="mb-8">
          <SH>eKYC Aur NPCI Mapping — Yahin Sabse Zyada Paisa Atakta Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Agriculture Ministry har release se pehle khud yaad dilati hai ki verification jaruri hai — phir bhi lakhon logon ka amount isi par atka milta hai. Aapki pehle se complete hai? Toh ye section chhod kar aage badh jaiye. Nahi hui, toh teen raaste hain:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-1">OTP Se (Ghar Baithe)</p>
              <p className="text-xs text-[var(--color-text-muted)]">Portal ya PM Kisan app par Aadhaar number daaliye, linked mobile par OTP aayega. Do minute ka kaam — shart bas itni ki Aadhaar se mobile linked ho.</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-1">Biometric (CSC Par)</p>
              <p className="text-xs text-[var(--color-text-muted)]">Mobile linked nahi hai? Nazdeeki CSC ya State Seva Kendra par fingerprint se ho jayegi. Mamuli service charge lag sakta hai.</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <p className="font-black text-purple-800 dark:text-purple-300 text-sm mb-1">Face Authentication</p>
              <p className="text-xs text-[var(--color-text-muted)]">PM Kisan app se face scan karke bhi ho jaati hai. Bujurg kisano ke liye sabse aasaan raasta — na OTP ka jhanjhat, na center ka chakkar.</p>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Doosri badi rukavat NPCI mapping hai — upar wale case me yehi nikli thi. Aadhaar ka account se &quot;linked&quot; hona alag baat hai, DBT ke liye map hona alag. Iske liye branch jaakar &quot;Aadhaar seeding for DBT&quot; karwana padta hai — likhit confirmation jarur lijiye. Screenshots ke saath pura process humne <Link href="/articles/PmKisanMasterGuide2026" className="underline font-bold text-[var(--color-primary)]">master guide</Link> me samjhaya hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Paanch Aam Problems Aur Unke Solutions</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Comments aur helpline par sabse jyada yehi sawal aate hain. Har ek ka exact agla kadam:
          </p>
          <div className="space-y-3">
            {[
              { err: '"Success" likha hai lekin account me kuch nahi', fix: 'Pehle 48 ghante ka intezaar normal hai. pfms.nic.in par track kijiye, bank se mini statement lijiye — kabhi kabhi SMS nahi aata par entry hoti hai. Teen din baad bhi kuch nahi toh 155261 par registration number ke saath call kijiye.' },
              { err: 'Aadhaar Authentication Failed dikh raha hai', fix: 'Record aur Aadhaar me spelling alag hai — ek akshar ka fark bhi nahi chalta. Jo galat hai use theek karwaiye: record ka correction agriculture office se, Aadhaar ka update Aadhaar center se.' },
              { err: 'Amount aaya aur wapas chala gaya (Reversed)', fix: 'Account dormant hai ya DBT enabled nahi. Branch jaakar activate karwaiye aur "Aadhaar seeding for DBT" ka likhit confirmation lijiye. Rakam kahin jaati nahi — agli cycle me pichhle bakaya samet aa jayegi.' },
              { err: 'Transfer ke din site khul hi nahi rahi', fix: 'Us din crores log ek saath check karte hain, server slow hona aam baat hai. Sham ke baad ya agle din try kijiye — isse kuch rukta nahi, sirf dikhna late hota hai.' },
              { err: 'Naam beneficiary list se gayab ho gaya', fix: 'Sarkar samay samay par verification drive chalati hai jisme ineligible naam hataye jate hain. Eligible hote hue bhi kata hai toh block ke agriculture officer ke paas grievance file kijiye — Help Desk section se online complaint bhi ho jati hai.' },
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
            <p className="font-black text-[var(--color-text)] text-sm mb-2">Official Helpline:</p>
            <div className="text-xs text-[var(--color-text-muted)] space-y-1">
              <p><strong>155261</strong> (Toll Free)</p>
              <p><strong>1800-115-526</strong> (Toll Free)</p>
              <p><strong>pmkisan-ict@gov.in</strong></p>
              <p className="mt-2 text-[10px] italic">Transfer wale hafte lines busy rehti hain — subah jaldi call lag jati hai. Email karein toh registration number aur problem ek line me likhiye, jawab aata hai.</p>
            </div>
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/payment-success.webp"
            alt="Kisan ke mobile par bank transfer successful hone ki notification"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Kagaz durust hon toh transfer wale din koi tension nahi
          </p>
        </div>

        <section className="mb-8">
          <SH>Afwahon Se Kaise Bachein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Har release se pehle do tarah ke jaal bichhte hain. Pehla nuksaan kam karta hai, doosra jyada.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Pehla — badhi hui rakam ki afwah. &quot;Is baar 4000 milenge&quot;, &quot;10,000 ho gaya.&quot; Nahi hua. ₹2,000 hi hai. Jab bhi badhega, Budget ya Cabinet ke faisle se badhega — WhatsApp forward se nahi. Doosra jaal khatarnak hai: fake links. Message aata hai &quot;yahan se check karo&quot;, click karte hi Aadhaar, OTP ya bank details maangi jati hain. Yaad rakhiye — <strong>OTP batane se sarkari kaam nahi hota, account khali hota hai.</strong> Na sarkar phone karke OTP maangti hai, na kuch dene ke liye fees leti hai. Jo maange, woh thag hai.
          </p>
          <WB>
            Bharose ki jagah sirf teen: pmkisan.gov.in ka homepage, PIB press release, aur Agriculture Ministry ke verified handles. Date in teeno mein se kahin aaye, tabhi maaniye.
          </WB>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Kisano Ke Asli Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Seedhe sawal, seedhe jawab" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Release Se Pehle Ki Checklist</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Date aaye ya na aaye, ye 4 kaam abhi nipta lijiye — atka hua amount jyada tar inhi me se kisi ek par atka hota hai:
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>&quot;Know Your Status&quot; se eKYC aur seeding — dono &quot;Yes&quot; hone chahiye</li>
            <li>Branch se Aadhaar-NPCI seeding (DBT enable) confirm karwaiye</li>
            <li>Beneficiary list me khud ko verify kijiye</li>
            <li>Aadhaar aur record ki spelling milaiye — mismatch ho toh abhi correction karwaiye</li>
          </ol>
          <p className="text-xs text-green-700 dark:text-green-400 mt-4 italic">
            Koi bhi adhura raha toh amount hold par — aur phir agli cycle tak intzaar.
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
        <Disclaimer k="PmKisan24viKist2026" />
      </div>
    </>
  );
}
