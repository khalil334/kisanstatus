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
    q: 'Kya sarkar ne 24vi kist ki date bata di hai?',
    a: 'Nahi. Aur sach kahein toh sarkar kabhi mahino pehle date batati bhi nahi — 23vi ki tareekh release se sirf chaar din pehle confirm hui thi. Isliye aaj jo bhi channel ya website pakki date ka dawa kar rahi hai, woh sirf andaza hai. Bharosa sirf pmkisan.gov.in ke notice ya Agriculture Ministry ke official announcement par karein.',
  },
  {
    q: 'October 2026 ka andaza kis aadhar par hai?',
    a: 'Pichhle transfers ke gap se. 22vi kist 13 March 2026 ko aayi, 23vi 20 June 2026 ko — beech mein lagbhag sava teen mahine. Yehi gap aage badhao toh October ke aas-paas number aata hai. Lekin yeh hisaab pehle bhi phisla hai — 2025 mein 20vi ke baad wala gap khinchte-khinchte November tak chala gaya tha. Toh October likha hai, guarantee nahi.',
  },
  {
    q: 'Is baar amount badhega kya?',
    a: 'Abhi tak aisi koi official baat nahi hui. ₹2,000 hi milenge — scheme ka structure shuru se yehi hai, saal ke ₹6,000 teen hisson mein. "₹4,000 milenge" type ke messages har kist se pehle ghoomte hain; jab bhi rakam badhegi, Budget ya Cabinet ke faisle se badhegi, WhatsApp forward se nahi.',
  },
  {
    q: 'eKYC pehle ho chuki hai — dobara karni padegi?',
    a: 'Aam taur par nahi. Ek baar complete hone ke baad woh bani rehti hai. Portal par "Know Your Status" mein eKYC ke aage "Yes" likha hai toh aap set hain. Haan, Aadhaar mein naam ya mobile number badla ho toh dobara verify karna pad sakta hai.',
  },
  {
    q: 'Status "Payment Success" hai lekin bank mein paisa nahi dikha?',
    a: 'Do din ruk jaiye — FTO process hone ke baad bank credit mein 24 se 48 ghante lag jaate hain, gramin banks mein kabhi thoda zyada. Passbook ya mini-statement se bhi check kar lein, SMS har baar nahi aata. pfms.nic.in par payment track ho jaati hai. Teen din baad bhi kuch na dikhe toh 155261 par call karein, registration number saath rakhein.',
  },
  {
    q: 'Naya registration abhi karun toh yeh kist milegi?',
    a: 'Mil sakti hai, par pakka nahi. Registration ke baad state verification, eKYC aur bank seeding — poore process mein aksar 1 se 3 mahine lagte hain. Jitni jaldi shuru karenge, chances utne behtar. Aur agar yeh kist chhut bhi gayi, toh eligible hone par agli kist ke saath paisa aa jata hai.',
  },
  {
    q: 'Meri purani 2-3 kistein bhi ruki hui hain — woh milengi?',
    a: 'Agar rukne ki wajah aapki taraf se thi — eKYC pending, land seeding adhuri, naam mismatch — aur ab woh theek ho gayi hai, toh ruki hui kistein arrears ke roop mein ek saath aati hain. Ministry khud keh chuki hai ki mandatory requirements poori hote hi due installments release ho jaati hain. Alag se koi application nahi lagti.',
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
            alt="PM Kisan 24vi kist — expected date, eligibility aur status check guide"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            ₹2,000 seedha bank account mein, DBT ke zariye
          </p>
        </div>

        <section className="mb-8">
          <SH>Seedhi Baat Pehle</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Date abhi announce nahi hui hai. Yeh padhne ke baad aap chahein toh page band kar sakte hain — lekin ruk jaiye, kyunki asli kaam date ka intezaar nahi, uski taiyari hai. Aur wahi neeche likha hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Jo hum jaante hain, woh yeh hai. Pichhla transfer 20 June 2026 ko hua — Tarakeswar (Hooghly, West Bengal) mein hue event se PM ne button dabaya, 9.44 crore parivaron ke account mein kul ₹18,880 crore gaye. Usse pehle wala transfer 13 March ko Guwahati se hua tha. Do transfers ke beech ka fasla nikaliye: lagbhag sava teen mahine.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Isi hisaab se agla transfer <strong>October 2026 ke aas-paas</strong> banta hai. Lekin ek baat imandari se — yeh ginti pehle bhi galat ho chuki hai. 2025 mein log aise hi calendar par ungli rakh rahe the, aur woh gap khinchte-khinchte November tak pahunch gaya tha. Sarkar transfer ko kisi bade event ke saath jodti hai, event PM ke schedule par depend karta hai, aur schedule kisi ke haath mein nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Toh is page ka maqsad simple hai: jis din bhi paisa nikle, aapka hissa bina atke pahunche. Uske liye 3-4 cheezein pehle se durust honi chahiye — kaunsi, kaise check karein, aur atak jaye toh kya karein. Sab neeche hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Scheme Naye Ho Toh 30 Second Ka Recap</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            PM Kisan Samman Nidhi February 2019 se chal rahi hai. Har eligible kisan parivar ko saal ke ₹6,000 milte hain — teen baar mein, ₹2,000 karke, seedha bank account mein. Na koi agent beech mein, na koi office ka chakkar (agar documents durust hon). 22vi kist tak sarkar ₹4.27 lakh crore se zyada baant chuki thi, aur har round mein 9 crore se upar parivar shaamil rahe hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Itne bade scale ka ek side-effect bhi hai — release ke din portal par itni bheed hoti hai ki apna record kholna mushkil ho jata hai. Iska tod bhi aage bataya hai.
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
            alt="PM Kisan agli kist — timeline aur taiyari checklist"
            width={800}
            height={500}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Release se pehle ki taiyari hi asli kaam hai
          </p>
        </div>

        <section className="mb-8">
          <SH>Pichhli Paanch Kistein — Record Kya Kehta Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Afwah ka sabse achha jawab record hota hai. Neeche ki har tareekh sarkari release ke hisaab se hai:
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
            Table ko dhyan se dekhiye — venue har baar alag state mein hai. Bihar, UP, Tamil Nadu, Assam, Bengal. Matlab release kisi fixed calendar par nahi, kisi na kisi bade karyakram ke saath hoti hai. Isiliye tareekh aakhri hafte tak hawa mein rehti hai — 23vi ki bhi release se bas chaar din pehle confirm hui thi.
          </p>
          <IB>
            <strong>Dhyan rahe:</strong> October pichhle gaps se nikla anumaan hai, sarkari notification nahi. pmkisan.gov.in par notice aane par hi pakka maaniye — YouTube channel chahe kitna bhi bada ho.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Aapko Paisa Milega Ya Nahi — Khud Jaanch Lijiye</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Har transfer ke baad hazaron log ek hi sawal poochte hain: &quot;mera kyun nahi aaya?&quot; Jawab lagbhag hamesha inhi cheezon mein chhupa hota hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-2">Paisa Aayega, Agar:</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✓ Kheti ki zameen aapke naam par registered hai</li>
                <li>✓ Portal par land seeding complete hai</li>
                <li>✓ eKYC ho chuki hai (status mein &quot;Yes&quot; dikhta hai)</li>
                <li>✓ Bank account Aadhaar se NPCI par mapped hai</li>
                <li>✓ Naam ki spelling Aadhaar aur portal — dono jagah same hai</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-2">Paisa Rukega, Agar:</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>✗ Parivar mein koi income tax bharta hai</li>
                <li>✗ Government job hai (central ya state)</li>
                <li>✗ Doctor, CA, lawyer, engineer jaisa registered professional hai</li>
                <li>✗ eKYC ya land seeding pending hai</li>
                <li>✗ Bank account band ya dormant pada hai</li>
              </ul>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Shuruaat naam se kijiye — beneficiary list mein hai ya nahi. Gaon ke hisaab se list nikalne ka step-by-step tareeka <Link href="/articles/PmKisanBeneficiaryList2026" className="underline font-bold text-[var(--color-primary)]">is alag guide</Link> mein likha hai. Naam nahi mila toh pehla kadam registration hai, aur woh jitna jaldi ho utna achha.
          </p>
          <div className="bg-[var(--color-bg-alt)] border-l-4 border-[var(--color-primary)] rounded-r-xl p-4 mb-4">
            <p className="font-black text-[var(--color-text)] text-sm mb-2">Ek asli case:</p>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-2">
              23vi ke baad UP ke ek gaon se ek pathak ka message aaya tha (naam nahi likh rahe). January mein registration karwaya, CSC se form bhara, receipt sambhal ke rakhi. June mein paisa nahi aaya. Status khola toh eKYC &quot;Yes&quot;, land seeding bhi done — lekin bank wale column mein NPCI mapping ka nishaan gayab. Account Aadhaar se &quot;linked&quot; tha, par DBT ke liye map nahi hua tha. Yeh do alag cheezein hain, aur zyada tar log isi mein ulajhte hain.
            </p>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Branch gaya, seeding form bhara, das din mein kaam ho gaya. Agli kist seedhi aayegi, aur ruki hui rakam arrears mein. Seekh? <strong>Form bhar ke bhool jaana sabse mehngi galti hai.</strong> Registration ke baad teen cheezein complete honi chahiye — verification, eKYC, bank mapping. Teeno hui, tabhi paisa niklega.
            </p>
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/pm-kisan-24vi-kist-october-2026.webp"
            alt="PM Kisan agli kist expected date — October 2026 ka anumaan"
            width={720}
            height={1080}
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
            Portal ka layout pichhle saal badla tha, isliye purane screenshots wale videos se confuse mat hoiye. Aaj ka raasta:
          </p>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholiye — sirf yehi official site hai; milte-julte naam wali sites se bachiye</SI>
            <SI n={2}>Farmers Corner mein <strong>Know Your Status</strong> par click kijiye</SI>
            <SI n={3}>Registration number daaliye. Yaad nahi hai? <strong>Know your registration no.</strong> se Aadhaar ya mobile number se nikal lijiye</SI>
            <SI n={4}>Captcha bhariye — OTP registered mobile par aayega, use daaliye</SI>
            <SI n={5}>Payment history, eKYC status aur land seeding — sab ek hi screen par dikh jayega</SI>
          </StepList>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4 mb-3">
            Screen par jo status dikhe, uska matlab yeh hai:
          </p>

          <div className="mt-4 space-y-2">
            {[
              { status: 'FTO Generated', meaning: 'Sarkar ne payment order bana diya, bank process kar raha hai. 24-48 ghante ka mamla hai — ghabrane ki zaroorat nahi.' },
              { status: 'Payment Success', meaning: 'Rakam account mein bhej di gayi. Passbook ya statement se confirm kar lijiye.' },
              { status: 'Payment Failed / Reversed', meaning: 'Bank ya NPCI level par dikkat — account band, naam mismatch, ya seeding ka issue. Khud theek nahi hoga, fix karna padega (neeche tareeka hai).' },
              { status: 'eKYC Pending', meaning: 'Sabse aam rukavat. Jab tak yeh complete nahi hoti, release list mein aapka naam jayega hi nahi.' },
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
            Har release se pehle Agriculture Ministry khud yaad dilati hai ki verification zaroori hai — aur har release ke baad lakhon logon ka paisa isi par ruka milta hai. Aapki eKYC pehle se complete hai? Toh yeh section chhod kar aage badh jaiye. Nahi hui, toh teen raaste hain:
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
            Doosri badi rukavat NPCI mapping hai — upar wale case mein yehi nikli thi. Aadhaar ka account se &quot;linked&quot; hona alag baat hai, DBT ke liye map hona alag. Iske liye bank branch jaakar &quot;Aadhaar seeding for DBT&quot; karwana padta hai — likhit confirmation zaroor lijiye. Screenshots ke saath poora process <Link href="/articles/PmKisanMasterGuide2026" className="underline font-bold text-[var(--color-primary)]">master guide</Link> mein step-by-step hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Paanch Aam Problems Aur Unke Solutions</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Comments aur helpline par sabse zyada yehi sawal aate hain. Har ek ka exact agla kadam:
          </p>
          <div className="space-y-3">
            {[
              { err: 'Status "Success" lekin account mein kuch nahi', fix: 'Pehle 48 ghante ka intezaar normal hai. pfms.nic.in par payment track kijiye, bank se mini-statement lijiye — kabhi kabhi SMS nahi aata par entry hoti hai. Teen din baad bhi kuch nahi toh 155261 par registration number ke saath call kijiye.' },
              { err: 'Aadhaar Authentication Failed dikh raha hai', fix: 'Portal aur Aadhaar mein naam ki spelling alag hai — ek akshar ka fark bhi nahi chalta. Jo galat hai use theek karwaiye: portal ka naam agriculture office se, Aadhaar ka update Aadhaar center se.' },
              { err: 'Paisa aaya aur wapas chala gaya (Reversed)', fix: 'Account dormant hai ya DBT-enabled nahi. Branch jaakar account activate karwaiye aur "Aadhaar seeding for DBT" ka likhit confirmation lijiye. Rakam agli cycle mein arrears ke saath aa jayegi.' },
              { err: 'Release ke din portal khul hi nahi raha', fix: 'Us din crores log ek saath check karte hain, server slow hona aam baat hai. Sham ke baad ya agle din try kijiye — paisa isse rukta nahi, sirf status dikhna late hota hai.' },
              { err: 'Naam beneficiary list se gayab ho gaya', fix: 'Sarkar samay-samay par verification drive chalati hai jisme ineligible naam hataye jaate hain. Eligible hote hue bhi naam kata hai toh block ke agriculture officer ke paas grievance file kijiye — portal ke Help Desk section se online complaint bhi ho jaati hai.' },
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
              <p className="mt-2 text-[10px] italic">Release ke hafte mein lines busy rehti hain — subah jaldi call lag jaati hai. Email karein toh registration number aur problem ek line mein likhiye, jawab aata hai.</p>
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
            Taiyari poori ho toh paisa bina atke aata hai
          </p>
        </div>

        <section className="mb-8">
          <SH>Afwahon Se Kaise Bachein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Har release se pehle do tarah ke jaal bichhte hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Pehla — badhi hui rakam ki afwah. &quot;Is baar ₹4,000 milenge&quot;, &quot;amount ₹10,000 ho gaya.&quot; Nahi hua. ₹2,000 hi hai. Jab bhi badhega, Budget ya Cabinet ke faisle se badhega — WhatsApp forward se nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Doosra jaal zyada khatarnak hai — fake links. Message aata hai &quot;yahan se apna paisa check karo&quot;, click karte hi Aadhaar, OTP ya bank details maangi jaati hain. Yaad rakhiye: <strong>OTP batane se sarkari kaam nahi hota, account khali hota hai.</strong> Na sarkar phone karke OTP maangti hai, na paisa dene ke liye koi fees leti hai. Jo maange, woh thag hai.
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
            Date aaye ya na aaye, yeh 4 kaam abhi nipta lijiye — ruka hua paisa zyada tar inhi mein se kisi ek par ruka hota hai:
          </p>
          <ol className="space-y-2 text-sm text-green-800 dark:text-green-300 list-decimal list-inside">
            <li>Portal par &quot;Know Your Status&quot; se eKYC aur land seeding — dono &quot;Yes&quot; hone chahiye</li>
            <li>Bank branch se Aadhaar-NPCI seeding (DBT enable) confirm karwaiye</li>
            <li>Beneficiary list mein apna naam verify kijiye</li>
            <li>Aadhaar aur portal par naam ki spelling milaiye — mismatch ho toh abhi correction karwaiye</li>
          </ol>
          <p className="text-xs text-green-700 dark:text-green-400 mt-4 italic">
            Koi bhi adhura raha toh paisa hold par — aur phir agli cycle tak intezaar.
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
