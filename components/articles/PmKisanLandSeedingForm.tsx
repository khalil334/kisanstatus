'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-01-15T16:32:11+05:30';
const MODIFIED = '2026-02-05T18:12:48+05:30';

const RELATED = [
  { slug: 'PmKisanCorrectionForm2026', title: 'Correction Form Guide' },
  { slug: 'pm-kisan-fto-generated-ka-matlab-kya-hai', title: 'FTO Generated Meaning' },
  { slug: 'AgriStackKyaHai2026', title: 'AgriStack Farmer ID Guide' },
];

const FAQS_DATA = [
  {
    q: 'Kya land seeding form ka koi ek official PDF hai jo sab states mein chalta hai?',
    a: 'Nahi. Poore desh ke liye koi ek fixed "Land Seeding Form PDF" nahi hai. Har state ka revenue department apne hisaab se saadha application form ya declaration leta hai. Kai jagah toh saade kagaz par likhi application bhi chal jaati hai, bas Patwari ka verification aur khasra-khatauni ki copy saath honi chahiye. Isliye jo websites "all India land seeding form PDF" bech rahi hain ya download karwa rahi hain, unse bachein.',
  },
  {
    q: 'Form kahan se milega?',
    a: 'Teen jagah se: apne Patwari (Lekhpal) se, nazdiki CSC center se, ya Block Agriculture Office (BAO) se. Kuch states ke agriculture department portal par bhi format mil jaata hai. Form free hota hai — iske paise nahi lagte.',
  },
  {
    q: 'Land seeding hone mein kitne din lagte hain?',
    a: 'Koi fixed sarkari deadline nahi hai. Aam taur par form jama karne ke baad Patwari verification aur record update mein 2 se 4 hafte lag jaate hain. Kabhi kabhi zyada bhi lag sakta hai — agar 30-40 din baad bhi status na badle toh Block Agriculture Office mein jaakar poochhein ya PM Kisan helpline 155261 par call karein.',
  },
  {
    q: 'Khasra number kahan se milega?',
    a: 'Khatauni (Record of Rights) mein likha hota hai. Agar Khatauni ghar par nahi hai toh apne state ke Bhulekh portal par jaakar district, tehsil aur village select karke online nikaal sakte hain — zyada tar states mein saadharan copy free milti hai. Ya phir Patwari se poochh lein.',
  },
  {
    q: 'Form bharne ke paise lagte hain kya?',
    a: 'Form khud free hai. CSC center par form bharwane ya print nikalwane ka mamooli service charge lag sakta hai. Agar koi bada amount maange — jaise seeding "karwa dene" ke naam par sau-paanch sau rupaye — toh samajh jaayein ki galat ho raha hai. Seeding sirf Patwari verification se hoti hai, paise dene se jaldi nahi hoti.',
  },
  {
    q: 'Land seeding status online kaise check karein?',
    a: 'pmkisan.gov.in kholein, Farmers Corner mein "Know Your Status" (Beneficiary Status) par jaayein, registration number daal kar OTP verify karein. Wahan Land Seeding ke saamne Yes ya No likha milega. No ka matlab hai record abhi link nahi hua — form bharna padega.',
  },
  {
    q: 'Land seeding online apply karne ki last date kya hai?',
    a: 'Koi last date nahi hoti — yeh koi scheme ka registration nahi, record link karne ka kaam hai. Lekin jab tak seeding pending hai, kist rukti rahegi. Isliye jitni jaldi form jama karein, utna behtar.',
  },
  {
    q: 'eKYC ho gaya hai, phir bhi land seeding No kyun dikha raha hai?',
    a: 'Kyunki dono alag cheezein hain. eKYC aapki pehchaan (Aadhaar) verify karta hai, land seeding aapki zameen ka record PM Kisan se jodta hai. Paisa aane ke liye dono complete hone chahiye — eKYC, land seeding aur Aadhaar-bank linking (DBT enabled account), teeno.',
  },
  {
    q: 'Zameen pita ji ke naam par hai, mere naam par nahi — kya karun?',
    a: 'PM Kisan ka paisa usi ko milta hai jiske naam par zameen ka record hai. Agar zameen abhi bhi pita ji ya dada ji ke naam par hai, toh pehle virasat (mutation/namantaran) karwana hoga — yeh tehsil se hota hai. Mutation ke baad hi aapke naam par land seeding ho paayegi.',
  },
  {
    q: 'Seeding Yes ho gaya par paisa phir bhi nahi aaya — ab kya?',
    a: 'Toh atakne ki wajah kahin aur hai. Status page par eKYC aur Aadhaar-bank linking bhi check karein. Agar teeno Yes hain aur phir bhi kist nahi aayi, toh FTO status dekhein aur payment failed wala process follow karein — humne uspar alag article likha hai.',
  },
];

// Har state ka OFFICIAL land-records (Bhulekh) portal — DILRMP (dilrmp.gov.in) ki
// state-wise RoR list se verify kiya gaya. Jin states/UTs ka dedicated portal nahi
// hai, wahan state ka official govt portal diya hai. In portals se khasra-khatauni
// (RoR) ki copy nikalti hai — land seeding form yahan se download NahI hota, wo
// Patwari/CSC/BAO se milta hai. Isliye buttons ka label imaandaar rakha hai.
const STATE_LINKS = [
  { name: 'Uttar Pradesh', url: 'https://upbhulekh.gov.in' },
  { name: 'Bihar', url: 'https://biharbhumi.bihar.gov.in' },
  { name: 'Madhya Pradesh', url: 'https://mpbhulekh.gov.in' },
  { name: 'Rajasthan', url: 'https://apnakhata.rajasthan.gov.in' },
  { name: 'Maharashtra', url: 'https://bhulekh.mahabhumi.gov.in' },
  { name: 'West Bengal', url: 'https://banglarbhumi.gov.in' },
  { name: 'Gujarat', url: 'https://anyror.gujarat.gov.in' },
  { name: 'Karnataka', url: 'https://landrecords.karnataka.gov.in' },
  { name: 'Tamil Nadu', url: 'https://eservices.tn.gov.in' },
  { name: 'Telangana', url: 'https://dharani.telangana.gov.in' },
  { name: 'Andhra Pradesh', url: 'https://meebhoomi.ap.gov.in' },
  { name: 'Odisha', url: 'https://bhulekh.ori.nic.in' },
  { name: 'Punjab', url: 'https://jamabandi.punjab.gov.in' },
  { name: 'Haryana', url: 'https://jamabandi.nic.in' },
  { name: 'Jharkhand', url: 'https://jharbhoomi.jharkhand.gov.in' },
  { name: 'Chhattisgarh', url: 'https://bhuiyan.cg.nic.in' },
  { name: 'Assam', url: 'https://ilrms.assam.gov.in' },
  { name: 'Uttarakhand', url: 'https://bhulekh.uk.gov.in' },
  { name: 'Himachal Pradesh', url: 'https://lrc.hp.nic.in' },
  { name: 'Jammu & Kashmir', url: 'https://landrecords.jk.gov.in' },
  { name: 'Kerala', url: 'https://erekha.kerala.gov.in' },
  { name: 'Goa', url: 'https://dslr.goa.gov.in' },
  { name: 'Tripura', url: 'https://jami.tripura.gov.in' },
  { name: 'Manipur', url: 'https://louchapathap.nic.in' },
  { name: 'Meghalaya', url: 'https://meghalaya.gov.in' },
  { name: 'Nagaland', url: 'https://nagaland.gov.in' },
  { name: 'Arunachal Pradesh', url: 'https://arunachalpradesh.gov.in' },
  { name: 'Mizoram', url: 'https://landrevenue.mizoram.gov.in' },
  { name: 'Sikkim', url: 'https://sikkim.gov.in' },
  { name: 'Delhi', url: 'https://dlrc.delhi.gov.in' },
  { name: 'Puducherry', url: 'https://revenue.py.gov.in' },
  { name: 'Chandigarh', url: 'https://chandigarh.gov.in' },
  { name: 'Andaman & Nicobar', url: 'https://andaman.gov.in' },
  { name: 'Dadra & Nagar Haveli aur Daman & Diu', url: 'https://ddd.gov.in' },
  { name: 'Lakshadweep', url: 'https://lakshadweep.gov.in' },
  { name: 'Ladakh', url: 'https://ladakh.gov.in' },
];

export default function PmKisanLandSeedingFormPdf2026() {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Land Seeding Form</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Complete Form Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Land Seeding Form 2026: Download Ka Poora Sach, Bharne Ka Tarika, State Wise Guide
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>14 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-land-seeding-form/land-seeding-form-hero.webp"
            alt="PM Kisan land seeding form guide — state wise process with khasra khatauni details"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
            priority
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
            Land Seeding 2026 — sahi process, sahi jagah se
          </p>
        </div>

        <section className="mb-8">
          <SH>Pehle Ek Saaf Baat — Kyunki Yahi Sabse Zaroori Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Main khud kheti-baadi se juda hua aadmi hoon, aur jab mere gaon mein logon ki kist rukne lagi thi toh maine yeh poora process khud jheel kar samjha hai. Internet par "PM Kisan Land Seeding Form PDF Download" search karoge toh dher saari websites milengi jo dawa karti hain ki unke paas har state ka official PDF hai. Sach yeh hai —
          </p>
          <WB>
            <strong>Poore Bharat ke liye koi ek official "Land Seeding Form PDF" exist hi nahi karta.</strong> Land seeding zameen ke record se juda kaam hai, aur zameen ka record state ka vishay hai. Har state — balki kai jagah har district — apne hisaab se saadha application form ya declaration leta hai. Kai tehsilon mein toh saade kagaz par likhi application bhi chal jaati hai, agar saath mein khasra-khatauni ki copy aur Patwari ka verification ho.
          </WB>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3 mt-4">
            Isliye is article mein main aapko koi jaali PDF download nahi karwaunga. Iski jagah wo bataunga jo asal mein kaam aata hai: form asli mein kahan se milta hai, kaise bharte hain, kaunse documents chahiye, status kaise check karte hain, aur har state ke <strong>official sarkari Bhulekh portal</strong> ke links — jahan se aap apni khasra-khatauni nikaal sakte ho, jo is form ke saath lagti hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Agar aap beneficiary list mein naam hone ke bawajood paisa na aane se pareshan hain, toh yeh guide end tak padhein — 90% cases mein dikkat yahin se shuru hoti hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Land Seeding Kya Hai? Aasaan Bhasha Mein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            PM Kisan Samman Nidhi mein saal ke ₹6,000 teen kiston mein milte hain — par sirf un kisano ko jinke <strong>naam par kheti ki zameen ka record</strong> hai. Ab sarkar ko kaise pata chale ki aapke naam par zameen hai? Iske liye aapke zameen ke record (khasra-khatauni / jamabandi) ko PM Kisan ke database se joda jaata hai. Isi jodne ke kaam ko <strong>Land Seeding</strong> kehte hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Jab tak yeh linking nahi hoti, portal par status mein <strong>Land Seeding: No</strong> dikhta hai aur kist rok di jaati hai. eKYC ho chuka ho, bank account bhi sahi ho — phir bhi paisa nahi aayega, kyunki sarkar ki nazar mein aapki zameen ka record abhi verify nahi hua.
          </p>

          <Image
            src="/images/articles/pm-kisan-land-seeding-form/land-seeding-problem.webp"
            alt="PM Kisan land seeding pending status — kist rukne ki sabse badi wajah"
            width={800}
            height={450}
            className="w-full rounded-xl mb-4"
          />

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Yahan ek confusion bahut aam hai, isliye table bana kar samjha raha hoon — <strong>eKYC, land seeding aur Aadhaar-bank linking teen alag cheezein hain</strong>, aur paisa aane ke liye teeno complete honi chahiye:
          </p>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Cheez</th>
                  <th className="p-3 text-left">Kya Verify Hota Hai</th>
                  <th className="p-3 text-left">Kahan Se Hota Hai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['eKYC', 'Aapki pehchaan (Aadhaar OTP / biometric / face auth)', 'pmkisan.gov.in par khud, ya CSC se'],
                  ['Land Seeding', 'Aapke naam par zameen ka record', 'Patwari / revenue department ke through'],
                  ['Aadhaar-Bank Linking (DBT)', 'Paisa aane wala account Aadhaar se juda ho', 'Apne bank / India Post Payments Bank se'],
                ].map(([thing, what, where], i) => (
                  <tr key={thing} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-bold text-xs text-[var(--color-text)]">{thing}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{what}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <IB>
            Mere gaon mein kai log eKYC dobara-dobara karwate rahe jabki unki asli dikkat land seeding thi. Pehle status check karke yeh pata karein ki atka kahan hai — phir wahi kaam karein.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Land Seeding Status Online Kaise Check Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Form bharne se pehle 2 minute ka yeh kaam zaroor karein — kahin aisa na ho ki seeding pehle se ho chuki ho aur aap bewajah Patwari ke chakkar kaatein:
          </p>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholein</SI>
            <SI n={2}>Farmers Corner mein <strong>Know Your Status</strong> par click karein</SI>
            <SI n={3}>Apna registration number daalein (agar nahi pata toh wahi page par "Know your registration no." se Aadhaar ya mobile number se nikaal lein)</SI>
            <SI n={4}>OTP verify karein — poora status khul jayega</SI>
            <SI n={5}><strong>Land Seeding</strong> ke saamne dekhein: <strong>Yes</strong> hai toh sab theek, <strong>No</strong> hai toh neeche ka process follow karein</SI>
          </StepList>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Matlab</th>
                  <th className="p-3 text-left">Kya Karein</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Land Seeding: Yes', 'Zameen ka record link ho chuka hai', 'Kuch nahi — eKYC aur bank linking bhi Yes hai toh kist ka intezaar karein'],
                  ['Land Seeding: No', 'Record abhi link nahi hua', 'Form bhar kar Patwari verification ke saath jama karein'],
                  ['Form jama kiya, abhi bhi No', 'Verification process mein hai', 'Aam taur par 2-4 hafte lagte hain; zyada ho toh BAO office mein poochhein'],
                ].map(([status, meaning, action], i) => (
                  <tr key={status} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-bold text-xs text-[var(--color-text)]">{status}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{meaning}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <SH>Form Asli Mein Kahan Se Milta Hai? (3 Sahi Jagahein)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ab asli sawaal. Land seeding form — jise kai jagah land seeding application ya ghoshna patra bhi kehte hain — in teen jagahon se milta hai, aur teeno par yeh <strong>free</strong> hai:
          </p>
          <div className="space-y-3 mb-4">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
              <p className="font-black text-sm text-[var(--color-text)] mb-1">1. Patwari / Lekhpal se</p>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Sabse seedha rasta. Patwari ke paas hi zameen ka record hota hai aur usi ka verification form par chahiye hota hai — toh form bhi wahin se lena sabse samajhdaari hai. Ek hi visit mein form bhi mil jaata hai aur aapke khasra-khatauni ki jaanch bhi ho jaati hai.
              </p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
              <p className="font-black text-sm text-[var(--color-text)] mb-1">2. CSC (Common Service Center) se</p>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Gaon-kasbe ke Jan Seva Kendra par bhi form mil jaata hai aur wahan bharwane mein madad bhi milti hai. Form free hai; print/bharwane ka mamooli service charge lag sakta hai. Koi seeding "karwa dene" ke naam par bada amount maange toh mana kar dein — seeding sirf Patwari verification se hoti hai.
              </p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
              <p className="font-black text-sm text-[var(--color-text)] mb-1">3. Block Agriculture Office (BAO) se</p>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Form yahin jama bhi hota hai, toh yahan se lena bhi sahi rehta hai. Saath mein yeh bhi poochh lein ki aapke block mein kaunsa format chalta hai — kyunki format district-to-district thoda alag ho sakta hai.
              </p>
            </div>
          </div>
          <IB>
            <strong>Yaad rakhein:</strong> form ka koi bhi format ho, usmein aakhir mein 3 cheezein honi hi chahiye — aapke sahi khasra-khatauni details, aapka Aadhaar-jaisa naam, aur Patwari ka sign-stamp. Baaki format ka fark nahi padta.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Kaunse Documents Chahiye?</SH>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Document</th>
                  <th className="p-3 text-left">Kyun Chahiye</th>
                  <th className="p-3 text-left">Kahan Se Milega</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Khatauni / Jamabandi ki copy', 'Isi se zameen ka record verify hota hai', 'State ke Bhulekh portal se ya Patwari se'],
                  ['Aadhaar card ki copy', 'PM Kisan record se naam match karne ke liye', 'Aapke paas hoga; nahi toh uidai.gov.in se e-Aadhaar'],
                  ['Bank passbook ki copy', 'Account details ke milan ke liye', 'Apne bank se'],
                  ['PM Kisan registration number', 'Aapka record dhoondhne ke liye', 'pmkisan.gov.in par "Know your registration no." se'],
                ].map(([doc, why, where], i) => (
                  <tr key={doc} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-bold text-xs text-[var(--color-text)]">{doc}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{why}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Sabse zaroori document Khatauni hai. Aur yahi wo jagah hai jahan state ke official Bhulekh portal kaam aate hain — ghar baithe khatauni ki saadharan copy nikaal sakte ho, Patwari ke ek chakkar ki bachat.
          </p>
        </section>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-blue-800 dark:text-blue-300 mb-3">
            State Wise Official Bhulekh Portal — Khasra-Khatauni Yahan Se Nikaalein
          </h2>
          <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
            Yeh sabhi links seedhe <strong>sarkari portals</strong> ke hain — inse aap apni khasra-khatauni / jamabandi ki copy nikaal sakte hain jo land seeding form ke saath lagti hai. (Form khud Patwari/CSC/BAO se milta hai — upar padhein.)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-96 overflow-y-auto">
            {STATE_LINKS.map((state) => (
              <div key={state.name} className="flex items-center justify-between gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{state.name}</span>
                <a
                  href={state.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="shrink-0 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Portal Kholein
                </a>
              </div>
            ))}
          </div>
          <IB>
            <strong>Portal chalane mein dikkat aa rahi hai?</strong> Koi baat nahi — Patwari ya nazdiki CSC se khatauni ki copy nikalwa lein. Kaam wahi hai, rasta alag hai.
          </IB>
        </div>

        <section className="mb-8">
          <SH>Land Seeding Form Kaise Bharein? Step-by-Step</SH>
          <StepList>
            <SI n={1}>Pehle pmkisan.gov.in par status check karein — <strong>Land Seeding: No</strong> ho tabhi aage badhein.</SI>
            <SI n={2}>Patwari, CSC ya Block Agriculture Office se form lein.</SI>
            <SI n={3}>Apna naam <strong>bilkul waisa hi likhein jaisa Aadhaar card par hai</strong> — matra ka fark bhi form atka sakta hai.</SI>
            <SI n={4}>Aadhaar number aur PM Kisan registration number dhyan se bharein.</SI>
            <SI n={5}>Khasra number aur Khatauni/khata number Khatauni ki copy se dekh kar bharein — yaaddaasht se kabhi na likhein.</SI>
            <SI n={6}>Zameen ka rakba (hectare/acre/bigha — jo form maange) Khatauni ke hisaab se likhein.</SI>
            <SI n={7}>Bank account number aur IFSC code passbook se dekh kar bharein.</SI>
            <SI n={8}>Khatauni, Aadhaar aur passbook ki copy form ke saath lagayein.</SI>
            <SI n={9}>Patwari se record verify karwa kar unka <strong>sign aur stamp</strong> lagwayein — iske bina form aage nahi badhta.</SI>
            <SI n={10}>Form Block Agriculture Office mein jama karein aur jama karne ki <strong>receiving/pawti zaroor lein</strong>.</SI>
            <SI n={11}>2-4 hafte baad portal par <Link href="/articles/PmKisanSelfRegisteredStatusCheck" className="underline text-green-700 dark:text-green-400">status dobara check karein</Link>.</SI>
          </StepList>

          <Image
            src="/images/articles/pm-kisan-land-seeding-form/land-seeding-form-filled-sample.webp"
            alt="PM Kisan land seeding form bharne ka sample — khasra khatauni aur bank details"
            width={800}
            height={600}
            className="w-full rounded-xl my-6"
          />

          <WB>
            <strong>Zaroori Salah (khud ki galtiyon se seekhi hui):</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
              <li>Form black ya blue pen se bharein, overwriting na karein.</li>
              <li>Khasra number Khatauni se milaye bina form jama na karein — sabse zyada rejections isi se hote hain.</li>
              <li>Patwari ka sign-stamp lena na bhoolen.</li>
              <li>Jama karne se pehle bhare hue form ki photo phone mein le lein aur photocopy apne paas rakhein.</li>
              <li>Receiving lena na bhoolein — baad mein "form mila hi nahi" wali bahas se bachaati hai.</li>
            </ul>
          </WB>
        </section>

        <section className="mb-8">
          <SH>State Wise Process Mein Kya Fark Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Process ka dhaancha har jagah wahi hai — form + khatauni + Patwari verification + BAO mein jama. Fark bas naamon aur portals ka hai:
          </p>

          <h3 id="uttar-pradesh" className="font-black text-[var(--color-text)] text-base mb-2 mt-6 scroll-mt-24">Uttar Pradesh</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Patwari ko yahan <strong>Lekhpal</strong> kehte hain. Khatauni <a href="https://upbhulekh.gov.in" target="_blank" rel="noopener noreferrer nofollow" className="underline">upbhulekh.gov.in</a> se online nikal jaati hai — district, tehsil, gaon select karke khasra ya naam se search karein. Form Lekhpal ya Rajkiya Krishi Beej Bhandar / block ke krishi vibhag se milta hai.
          </p>

          <h3 id="bihar" className="font-black text-[var(--color-text)] text-base mb-2 mt-6 scroll-mt-24">Bihar</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Yahan zameen ke record ka kaam <strong>Karmchari / Circle Officer (Anchal Adhikari)</strong> ke paas hota hai. Jamabandi <a href="https://biharbhumi.bihar.gov.in" target="_blank" rel="noopener noreferrer nofollow" className="underline">biharbhumi.bihar.gov.in</a> se dekhi ja sakti hai. Form anchal karyalaya ya block agriculture office se lein.
          </p>

          <h3 id="madhya-pradesh" className="font-black text-[var(--color-text)] text-base mb-2 mt-6 scroll-mt-24">Madhya Pradesh</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Khasra-khatauni (Bhu-Abhilekh) <a href="https://mpbhulekh.gov.in" target="_blank" rel="noopener noreferrer nofollow" className="underline">mpbhulekh.gov.in</a> se nikalti hai — saadharan pratilipi free milti hai. Verification Patwari ke through hi hota hai.
          </p>

          <h3 id="rajasthan" className="font-black text-[var(--color-text)] text-base mb-2 mt-6 scroll-mt-24">Rajasthan</h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jamabandi ki nakal <a href="https://apnakhata.rajasthan.gov.in" target="_blank" rel="noopener noreferrer nofollow" className="underline">apnakhata.rajasthan.gov.in</a> (Apna Khata) se nikalti hai. Form Patwari ya <strong>E-Mitra center</strong> se mil jaata hai — E-Mitra wale bharwane mein bhi madad kar dete hain.
          </p>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Baaki states ke liye upar wali list mein se apna Bhulekh portal kholein — record nikaalne ka tarika sab jagah lagbhag ek jaisa hai: district → tehsil → village → khasra/naam se search.
          </p>
        </section>

        <section className="mb-8">
          <SH>Common Problems + Unke Asli Solutions</SH>
          <div className="space-y-3">
            {[
              { problem: 'Khasra number galat likh diya', solution: 'Khatauni se milaa kar sahi number ke saath naya form bharein aur Patwari se dobara verify karwayein. Andaze se number kabhi na likhein.' },
              { problem: 'Aadhaar aur Khatauni mein naam alag hai', solution: 'Dono mein naam ek jaisa hona chahiye. Chhota fark hai toh pehle record durust karwayein — Aadhaar correction Aadhaar center se, Khatauni correction tehsil se hoti hai.' },
              { problem: 'Zameen pita ji / dada ji ke naam par hai', solution: 'Pehle virasat (mutation/namantaran) tehsil se karwayein. Jab tak record aapke naam nahi hota, aapke naam par seeding nahi ho sakti.' },
              { problem: 'Patwari sign karne mein tal-matol kar rahe hain', solution: 'Vinamrta se likhit application dein. Phir bhi na ho toh Tehsildar ya Revenue Inspector se shikayat karein, ya CM helpline (jaise UP mein 1076) par darj karayein.' },
              { problem: 'Form jama kiye mahina ho gaya, status abhi bhi No hai', solution: 'Receiving le kar Block Agriculture Office jaayein aur form ka status poochhein. PM Kisan helpline 155261 par bhi shikayat darj kara sakte hain.' },
              { problem: 'Land Seeding Yes hai, par paisa phir bhi nahi aaya', solution: 'Matlab atkaav kahin aur hai — eKYC aur Aadhaar-bank (DBT) linking check karein, aur FTO/payment status dekhein. Iske liye hamara payment failed wala guide padhein.' },
            ].map(({ problem, solution }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">{problem}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>Aise Sudharein:</strong> {solution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>Form Jama Karne Ke Baad Kya Hota Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jama karne ke baad ka process aam taur par aisa chalta hai (samay ka andaza mera anubhav hai, sarkari guarantee nahi):
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Stage</th>
                  <th className="p-3 text-left">Kya Hota Hai</th>
                  <th className="p-3 text-left">Aapko Kya Karna Hai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Form jama', 'BAO/anchal mein aapka form register hota hai', 'Receiving sambhaal kar rakhein'],
                  ['Patwari verification', 'Zameen ke record se aapke details ka milan', 'Zaroorat pade toh Patwari se sampark mein rahein'],
                  ['Record update', 'Verify hone par PM Kisan database mein seeding update hoti hai', 'Har hafte-do hafte mein status check karte rahein'],
                  ['Agli kist', 'Seeding Yes + eKYC Yes + bank linking Yes = kist release ke layak', 'Kist ki date ka intezaar — beech mein kuch karna nahi hota'],
                ].map(([stage, what, you], i) => (
                  <tr key={stage} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-bold text-xs text-[var(--color-text)]">{stage}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{what}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{you}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <IB>
            Ek baat ka dhyan rahe: seeding ho jaane ka matlab yeh nahi ki paisa usi din aa jayega. Kist apne schedule par hi aati hai — seeding bas aapka rasta saaf karti hai.
          </IB>
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Nichod — 4 Line Mein</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Land seeding ka koi all-India PDF nahi hota — form Patwari/CSC/BAO se free milta hai. Pehle status check karein, "No" ho tabhi form bharein. Khasra number Khatauni se milaayein, naam Aadhaar jaisa likhein, Patwari ka sign-stamp lein, receiving rakhein. Ek baar record link ho gaya toh baar-baar yeh jhanjhat nahi karni padti.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Land Seeding Ke Baare Mein Log Kya Puchte Hain
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Land Seeding Form FAQ 2026" />
        </section>

        <section className="mb-8">
          <SH>Yeh Guides Bhi Kaam Aayengi</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Land seeding ke saath-saath aksar yeh dikkatein bhi judti hain — inke alag detailed guides humne likhe hain:
          </p>
          <ul className="list-disc list-inside text-sm text-[var(--color-text-muted)] space-y-2">
            <li><Link href="/articles/PmKisanEkycOnline2026" className="underline text-green-700 dark:text-green-400">eKYC online kaise karein</Link> — seeding ke saath yeh bhi complete hona zaroori hai</li>
            <li><Link href="/articles/PmKisanPaymentFailedFix2026" className="underline text-green-700 dark:text-green-400">Payment failed / kist nahi aayi toh kya karein</Link> — seeding Yes hone ke baad bhi paisa na aaye toh</li>
            <li><Link href="/articles/PmKisanCorrectionForm2026" className="underline text-green-700 dark:text-green-400">Naam / details correction form guide</Link> — Aadhaar-Khatauni naam mismatch waalon ke liye</li>
            <li><Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="underline text-green-700 dark:text-green-400">FTO Generated ka matlab</Link> — status mein FTO dikhe toh ghabrayein nahi</li>
            <li><Link href="/articles/PmKisanBeneficiaryList2026" className="underline text-green-700 dark:text-green-400">Beneficiary list mein naam kaise check karein</Link></li>
            <li><Link href="/articles/AgriStackKyaHai2026" className="underline text-green-700 dark:text-green-400">AgriStack Farmer ID kya hai</Link> — aage yeh bhi zameen ke record se juda hai</li>
          </ul>
        </section>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Official Portal"
          guide="Apna Status Check Karo"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} bioKey="PmKisanLandSeedingForm" />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanBeneficiaryList2026', l: 'Beneficiary List' },
          { href: '/articles/PmKisanEkycOnline2026', l: 'eKYC Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
