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
    q: 'Kya koi ek official PDF hai jo poore desh mein chalta hai?',
    a: 'Nahi hai. Zameen ka mamla state ka vishay hai, isliye har rajya — balki kai jagah har district — apna alag format leta hai. Kai tehsilon mein toh saade kagaz par likhi application bhi chal jaati hai, bas saath mein khatauni ki copy aur Patwari ka verification hona chahiye. Jo websites "all India PDF" download karwane ka dawa karti hain, wo sirf clicks ke liye aisa likhti hain.',
  },
  {
    q: 'Yeh kagaz milega kahan se?',
    a: 'Teen jagah se — apne halke ke Patwari ya Lekhpal se, gaon ke CSC (Jan Seva Kendra) se, ya Block Agriculture Office se. Teeno jagah yeh muft milta hai. Kuch rajyon ke krishi vibhag ki website par bhi format pada hota hai.',
  },
  {
    q: 'Kitne din mein kaam ho jaata hai?',
    a: 'Koi sarkari deadline tay nahi hai. Mere anubhav mein jama karne ke baad verification aur record update mein do se chaar hafte lag jaate hain. Agar 30-40 din baad bhi kuch na badle, toh Block Agriculture Office jaakar poochhein ya helpline 155261 par baat karein.',
  },
  {
    q: 'Khasra number kahan likha hota hai?',
    a: 'Khatauni (Record of Rights) mein. Ghar par copy nahi hai toh apne rajya ke Bhulekh portal par district, tehsil aur gaon chun kar online nikaal lein — zyada tar jagah saadharan copy muft milti hai. Ya Lekhpal se poochh lein, unke paas poora record rehta hai.',
  },
  {
    q: 'Paise kitne lagenge?',
    a: 'Kagaz muft hai. CSC par bharwane ya print ka mamooli service charge lag sakta hai — bas itna. Koi "seeding karwa dene" ke naam par sau-paanch sau maange toh saaf mana kar dein. Yeh kaam sirf Patwari ke verification se hota hai, paisa dene se na jaldi hota hai na pakka.',
  },
  {
    q: 'Status online kahan dikhega?',
    a: 'pmkisan.gov.in par Farmers Corner mein "Know Your Status" kholein, registration number daalein aur OTP se verify karein. Wahan Land Seeding ke saamne Yes ya No likha milega. No ka matlab — record abhi juda nahi, aavedan dena padega.',
  },
  {
    q: 'Apply karne ki koi last date hai kya?',
    a: 'Nahi. Yeh kisi scheme ka registration nahi, record jodne ka kaam hai — kabhi bhi karwa sakte hain. Lekin jab tak yeh adhoora hai, kist rukti rahegi, isliye taalna nuksaan ka sauda hai.',
  },
  {
    q: 'eKYC ho chuka hai, phir bhi No kyun dikha raha hai?',
    a: 'Kyunki dono alag cheezein hain. eKYC aapki pehchaan verify karta hai, seeding aapki zameen ka record jodti hai. Paisa aane ke liye teen cheezein chahiye — eKYC, seeding, aur Aadhaar se juda bank khata (DBT). Ek ho jaane se baaki do apne aap nahi hote.',
  },
  {
    q: 'Zameen pita ji ke naam par hai — mera kya hoga?',
    a: 'Paisa usi ko milta hai jiske naam record hai. Pehle tehsil se virasat (mutation/namantaran) karwayein. Jab tak record aapke naam nahi chadhta, aapke naam par seeding ho hi nahi sakti — yeh kadwa sach hai par yahi niyam hai.',
  },
  {
    q: 'Yes ho gaya, paisa phir bhi nahi aaya — ab?',
    a: 'Matlab gaadi kahin aur atki hai. Status page par eKYC aur bank-Aadhaar linking bhi dekhein. Teeno Yes hain aur kist phir bhi nahi aayi, toh FTO status check karein — humne payment failed par alag se poora guide likha hai.',
  },
];

// Har rajya ka OFFICIAL land-records (Bhulekh) portal — DILRMP (dilrmp.gov.in) ki
// state-wise RoR list se verify kiya gaya. Jin states/UTs ka dedicated portal nahi
// hai, wahan state ka official govt portal diya hai. In portals se khasra-khatauni
// (RoR) ki copy nikalti hai — seeding ka aavedan yahan se download NahI hota, wo
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

// Chaupal-style sawaal-jawaab — gaon mein jo asli sawaal uthte hain
const CHAUPAL = [
  {
    who: 'Ramesh, Sitapur',
    ask: 'Khasra number galat likh gaya tha, ab kya karun?',
    ans: 'Khatauni se milaa kar sahi number ke saath naya aavedan bharo aur Lekhpal se dobara verify karwao. Aur haan — aage se andaze se number kabhi mat likhna, yahi sabse badi galti hai.',
  },
  {
    who: 'Saroj Devi, Ara',
    ask: 'Aadhaar mein naam "Saroj Devi" hai, jamabandi mein sirf "Saroj" — form atkega kya?',
    ans: 'Atak sakta hai. Dono jagah naam ek jaisa hona chahiye. Chhota fark hai toh pehle sudhaar karwa lo — Aadhaar wala sudhaar Aadhaar center se, record wala tehsil se. Iske liye humara correction guide bhi padh lo.',
  },
  {
    who: 'Vikram, Jhunjhunu',
    ask: 'Zameen abhi bhi dada ji ke naam chal rahi hai. Seeding ho jayegi?',
    ans: 'Nahi hogi bhai. Pehle tehsil se virasat (namantaran) karwao. Record jab tak tumhare naam nahi chadhta, tumhare naam par kuch bhi link nahi ho sakta.',
  },
  {
    who: 'Mahesh, Satna',
    ask: 'Patwari sign karne mein tal-matol kar raha hai, mahina ho gaya.',
    ans: 'Vinamrta se likhit application do. Phir bhi na ho toh Tehsildar ya Revenue Inspector se shikayat karo. Kai rajyon mein CM helpline bhi hai — UP mein 1076. Likhit shikayat ka asar zubaani se zyada hota hai.',
  },
  {
    who: 'Iqbal, Moradabad',
    ask: 'Jama kiye mahina ho gaya, status abhi bhi No hai.',
    ans: 'Receiving le kar Block Agriculture Office jao aur seedha poochho ki aavedan kahan atka hai. Helpline 155261 par bhi shikayat darj karwa sakte ho. Receiving isi din ke liye sambhaal kar rakhi thi na.',
  },
  {
    who: 'Gurpreet, Bathinda',
    ask: 'Yes dikha raha hai, par kist phir bhi nahi aayi.',
    ans: 'Toh rukavat kahin aur hai — eKYC ya bank-Aadhaar linking check karo, aur FTO status dekho. Iske liye humara payment failed wala guide step-by-step kaam karega.',
  },
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
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Zameeni Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Land Seeding Form 2026: Kahan Milta Hai, Kaise Bharein — Bina Ghumaye Poora Sach
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
            alt="PM Kisan land seeding ka poora process — khasra khatauni ke saath zameeni guide"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
            priority
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
            Sahi jagah se, sahi tarike se — 2026 ki zameeni guide
          </p>
        </div>

        <section className="mb-8">
          <SH>Seedhi Baat, Shuru Mein Hi</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Kheti-baadi se juda aadmi hoon, aur jab mere gaon mein logon ki kist rukne lagi thi toh yeh poora chakkar maine khud jheel kar samjha. Google par search karoge toh dher saari websites milengi jo kahengi — "yahan se PDF download karo, kaam ho jayega." Pehle hi bata deta hoon:
          </p>
          <WB>
            <strong>Poore Bharat ke liye aisa koi ek official PDF hai hi nahi.</strong> Zameen ka record rajya ka vishay hai — har jagah apna format chalta hai, aur kai tehsilon mein saade kagaz par likhi application bhi chal jaati hai, agar saath mein khatauni ki copy ho aur Patwari ka verification ho.
          </WB>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3 mt-4">
            Isliye main aapka waqt kisi jaali download mein barbaad nahi karunga. Iski jagah wo sab bataunga jo asal mein kaam aata hai — yeh kagaz milta kahan se hai, bharte kaise hain, saath mein kya lagana hota hai, aur har rajya ke <strong>sarkari Bhulekh portal</strong> ke seedhe links, jahan se khatauni ki copy nikalti hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Beneficiary list mein naam hone ke bawajood paisa nahi aa raha? Toh aage padhte jaayein — dus mein se nau baar dikkat yahin se shuru hoti hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Yeh Seeding Hai Kya Cheez?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            PM Kisan mein saal ke ₹6,000 sirf unhi ko milte hain jinke <strong>apne naam par kheti ki zameen</strong> darj hai. Sarkar ko kaise pata chale ki aapke naam kitni zameen hai? Iske liye aapki khatauni/jamabandi ka record yojana ke database se joda jaata hai — bas isi jodne ke kaam ka naam hai <strong>land seeding</strong>.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jab tak yeh linking adhoori hai, portal par <strong>Land Seeding: No</strong> dikhta hai aur kist roki rehti hai — chahe eKYC ho chuka ho, chahe bank khata bilkul durust ho.
          </p>

          <Image
            src="/images/articles/pm-kisan-land-seeding-form/land-seeding-problem.webp"
            alt="Land Seeding No dikhne par kist rukna — sabse aam wajah"
            width={800}
            height={450}
            className="w-full rounded-xl mb-4"
          />

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Yahan ek galatfahmi bahut aam hai, isliye ise <strong>teen checkpost</strong> ki tarah samjhein — kist ki gaadi ko teeno paar karne padte hain, ek bhi band ho toh gaadi wahi ruk jaati hai:
          </p>

          <div className="space-y-2 mb-4">
            {[
              ['1', 'eKYC', 'Aapki pehchaan ki jaanch — Aadhaar OTP, biometric ya face auth se. Yeh pmkisan.gov.in par khud ho jaata hai ya CSC se.'],
              ['2', 'Land Seeding', 'Aapki zameen ke record ka milan — yeh Patwari/revenue mehkame ke through hota hai. Isi par yeh poora article hai.'],
              ['3', 'Bank-Aadhaar Linking (DBT)', 'Jis khaate mein paisa aana hai wo Aadhaar se juda ho. Yeh apne bank ya India Post Payments Bank se hota hai.'],
            ].map(([n, title, desc]) => (
              <div key={n} className="flex gap-3 items-start p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white font-black text-sm flex items-center justify-center">{n}</span>
                <div>
                  <p className="font-black text-sm text-[var(--color-text)]">{title}</p>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <IB>
            Mere gaon mein kai log baar-baar eKYC karwate rahe jabki unki gaadi checkpost number 2 par atki thi. Pehle yeh pata karein ki atka kahan hai — phir wahi kaam karein, mehnat bachegi.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Pehle 2 Minute Ka Kaam: Apna Status Dekhein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kahin aisa na ho ki seeding pehle se ho chuki ho aur aap bewajah daftar ke chakkar kaatein. Isliye sabse pehle:
          </p>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> kholein</SI>
            <SI n={2}>Farmers Corner mein <strong>Know Your Status</strong> par jaayein</SI>
            <SI n={3}>Registration number daalein — nahi pata toh wahi page par "Know your registration no." se Aadhaar ya mobile se nikaal lein</SI>
            <SI n={4}>OTP verify karte hi poora byora khul jayega</SI>
            <SI n={5}><strong>Land Seeding</strong> ke saamne dekhein — <strong>Yes</strong> hai toh aapka is article se kaam khatam, <strong>No</strong> hai toh aage badhein</SI>
          </StepList>
          <IB>
            <strong>Yes</strong> hone par bhi kist na aayi ho toh baaki do checkpost (eKYC, bank linking) dekhein — wahan ki kahani <Link href="/articles/PmKisanPaymentFailedFix2026" className="underline">payment failed guide</Link> mein alag se likhi hai.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Yeh Kagaz Milta Kahan Se Hai? (3 Sahi Jagahein)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ab asli sawaal. Seeding ka aavedan — jise kahin application, kahin ghoshna patra kehte hain — in teen jagahon se milta hai, aur teeno jagah <strong>muft</strong>:
          </p>
          <div className="space-y-3 mb-4">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
              <p className="font-black text-sm text-[var(--color-text)] mb-1">1. Patwari / Lekhpal se</p>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Sabse seedha rasta. Record unhi ke paas hota hai aur verification bhi unhi ka chahiye — toh ek hi mulaqat mein kagaz bhi mil jaata hai aur aapke khasra-khatauni ki jaanch bhi ho jaati hai. Do kaam, ek chakkar.
              </p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
              <p className="font-black text-sm text-[var(--color-text)] mb-1">2. CSC / Jan Seva Kendra se</p>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Gaon-kasbe ke center par bhi mil jaata hai aur bharwane mein madad bhi. Print-bharwai ka mamooli service charge lag sakta hai, bas. Koi "seeding karwa denge" keh kar bada amount maange toh wahan se uth jaayein — yeh kaam paise se nahi, verification se hota hai.
              </p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
              <p className="font-black text-sm text-[var(--color-text)] mb-1">3. Block Agriculture Office (BAO) se</p>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Aavedan yahin jama bhi hota hai, toh yahin se lena bhi samajhdaari hai. Saath mein yeh bhi poochh lein ki aapke block mein kaunsa format chalta hai — district-to-district thoda alag ho sakta hai.
              </p>
            </div>
          </div>
          <IB>
            Format koi bhi ho, aakhir mein teen cheezein honi hi chahiye — sahi khasra-khatauni ka byora, Aadhaar jaisa naam, aur Patwari ka sign-stamp. Baaki format ka fark nahi padta.
          </IB>
        </section>

        <section className="mb-8">
          <SH>Saath Mein Kya-Kya Lagana Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ghar se nikalne se pehle yeh chaar cheezein thaile mein daal lein — koi bhi chhute toh dobara chakkar pakka hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              ['Khatauni / Jamabandi ki copy', 'Sabse zaroori. Bhulekh portal se online nikalti hai ya Lekhpal se milti hai.'],
              ['Aadhaar card ki copy', 'Naam ke milan ke liye. Kho gaya ho toh uidai.gov.in se e-Aadhaar nikaal lein.'],
              ['Bank passbook ki copy', 'Khaate ke byore ke milan ke liye — apne bank se.'],
              ['PM Kisan registration number', 'Aapka record dhoondhne ke liye — pmkisan.gov.in par "Know your registration no." se milta hai.'],
            ].map(([doc, note]) => (
              <div key={doc} className="flex gap-2 items-start p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                <span className="shrink-0 text-green-700 dark:text-green-400 font-black">✓</span>
                <div>
                  <p className="font-bold text-xs text-[var(--color-text)]">{doc}</p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5 leading-relaxed">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-blue-800 dark:text-blue-300 mb-3">
            Apne Rajya Ka Sarkari Bhulekh Portal — Khatauni Yahan Se Nikaalein
          </h2>
          <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
            Yeh sabhi links seedhe <strong>sarkari portals</strong> ke hain — inse khasra-khatauni / jamabandi ki copy nikalti hai jo aavedan ke saath lagti hai. (Aavedan khud Patwari/CSC/BAO se milta hai — upar padh aaye hain.)
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
            <strong>Portal chalane mein dikkat?</strong> Koi baat nahi — Lekhpal ya nazdiki CSC se copy nikalwa lein. Kaam wahi, rasta alag.
          </IB>
        </div>

        <section className="mb-8">
          <SH>Bharne Ka Tarika — Jaise Main Apne Bhai Ko Samjhaata</SH>
          <StepList>
            <SI n={1}>Pehle status dekh lein — <strong>No</strong> ho tabhi aage badhein, warna mehnat bekar.</SI>
            <SI n={2}>Patwari, CSC ya BAO se aavedan lein.</SI>
            <SI n={3}>Naam <strong>bilkul waisa likhein jaisa Aadhaar par chhapa hai</strong> — ek matra ka fark bhi kaam atka sakta hai.</SI>
            <SI n={4}>Aadhaar number aur registration number dhyan se utaarein.</SI>
            <SI n={5}>Khasra aur khata number <strong>khatauni ki copy saamne rakh kar</strong> bharein — yaaddaasht par kabhi bharosa na karein.</SI>
            <SI n={6}>Rakba (hectare/acre/bigha — jo bhi maanga ho) record ke hisaab se likhein.</SI>
            <SI n={7}>Khaata number aur IFSC passbook se dekh kar utaarein.</SI>
            <SI n={8}>Chaaron documents ki copy nathi karein.</SI>
            <SI n={9}>Patwari se milan karwa kar unka <strong>sign aur stamp</strong> lagwayein — iske bina kagaz aage nahi badhta.</SI>
            <SI n={10}>BAO mein jama karein aur <strong>receiving/pawti zaroor lein</strong>.</SI>
            <SI n={11}>Do-chaar hafte baad <Link href="/articles/pm-kisan-self-registered-status-check" className="underline text-green-700 dark:text-green-400">status dobara dekhein</Link>.</SI>
          </StepList>

          <Image
            src="/images/articles/pm-kisan-land-seeding-form/land-seeding-form-filled-sample.webp"
            alt="Aavedan bharne ka namuna — khasra khatauni aur bank byore ke saath"
            width={800}
            height={600}
            className="w-full rounded-xl my-6"
          />

          <WB>
            <strong>Apni galtiyon se seekhi hui salah:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
              <li>Black ya blue pen, overwriting bilkul nahi.</li>
              <li>Khasra number khatauni se milaye bina jama na karein — sabse zyada rejection isi se hote hain.</li>
              <li>Jama karne se pehle bhare hue kagaz ki photo phone mein le lein.</li>
              <li>Receiving lena na bhoolein — baad mein "hume mila hi nahi" wali bahas se yahi bachaati hai.</li>
            </ul>
          </WB>
        </section>

        <section className="mb-8">
          <SH>Rajya Badle Toh Kya Badalta Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Dhaancha har jagah wahi hai — aavedan + khatauni + verification + BAO mein jama. Fark bas naamon aur portals ka:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Rajya</th>
                  <th className="p-3 text-left">Record Rakhta Kaun Hai</th>
                  <th className="p-3 text-left">Khatauni/Jamabandi Kahan Se</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Uttar Pradesh', 'Lekhpal (yahan Patwari ko yahi kehte hain)', 'upbhulekh.gov.in — district, tehsil, gaon chun kar'],
                  ['Bihar', 'Karmchari / Anchal Adhikari (CO)', 'biharbhumi.bihar.gov.in'],
                  ['Madhya Pradesh', 'Patwari', 'mpbhulekh.gov.in — saadharan pratilipi muft'],
                  ['Rajasthan', 'Patwari; E-Mitra bharwane mein madad karta hai', 'apnakhata.rajasthan.gov.in (Apna Khata)'],
                ].map(([st, who, portal], i) => (
                  <tr key={st} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] font-bold text-xs text-[var(--color-text)]">{st}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{who}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">{portal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Baaki rajyon ke liye upar wali portal list mein se apna link kholein — record nikaalne ka tarika sab jagah lagbhag ek jaisa hai: district → tehsil → gaon → khasra ya naam se khoj.
          </p>
        </section>

        <section className="mb-8">
          <SH>Chaupal Ke Sawaal — Jo Asal Mein Pooche Jaate Hain</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Yeh sawaal mujhse gaon mein, phone par aur comments mein baar-baar pooche gaye hain. Naam badal diye hain, sawaal asli hain:
          </p>
          <div className="space-y-4">
            {CHAUPAL.map(({ who, ask, ans }) => (
              <div key={who} className="border-l-4 border-[var(--color-primary)] pl-4 py-1">
                <p className="text-sm text-[var(--color-text)] leading-relaxed">
                  <span className="font-black">{who}:</span> <em>&ldquo;{ask}&rdquo;</em>
                </p>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mt-1.5">{ans}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>Jama Karne Ke Baad Kya Hota Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Aage ka safar kuch aisa chalta hai (samay ka andaza mera anubhav hai, sarkari vaada nahi):
          </p>
          <div className="relative pl-6 space-y-5 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-0.5 before:bg-[var(--color-border)]">
            {[
              ['Aavedan register hua', 'BAO/anchal mein aapka kagaz darj hota hai. Aapka kaam: receiving sambhaal kar rakhna.'],
              ['Patwari ka milan', 'Record se aapke byore ki jaanch hoti hai. Zaroorat pade toh sampark mein rahein.'],
              ['Record update', 'Milan sahi nikla toh database mein seeding Yes ho jaati hai. Har hafte-do hafte status dekhte rahein.'],
              ['Agli kist', 'Teeno checkpost Yes = kist release ke layak. Ab bas kist ki date ka intezaar — beech mein kuch karna nahi hota.'],
            ].map(([stage, desc]) => (
              <div key={stage} className="relative">
                <span className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-[var(--color-bg)]" />
                <p className="font-black text-sm text-[var(--color-text)]">{stage}</p>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mt-0.5">{desc}</p>
              </div>
            ))}
          </div>
          <IB>
            Seeding ho jaane ka matlab yeh nahi ki paisa usi din aa jayega — kist apne schedule par hi aati hai. Seeding bas aapka rasta saaf karti hai.
          </IB>
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Chaar Line Mein Nichod</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            All-India PDF naam ki koi cheez nahi hoti — aavedan Patwari/CSC/BAO se muft milta hai. Pehle status dekhein, "No" ho tabhi bharein. Khasra number khatauni se milaayein, naam Aadhaar jaisa likhein, sign-stamp lein, receiving rakhein. Ek baar record jud gaya toh yeh jhanjhat dobara nahi karni padti.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aur Jo Aksar Poocha Jaata Hai
          </h2>
          <FAQBlock faqs={FAQS_DATA} variant="inline" caption="Land seeding se jude aam sawaal — 2026" />
        </section>

        <section className="mb-8">
          <SH>Aapki Haalat Ke Hisaab Se Agla Kadam</SH>
          <div className="space-y-2">
            {[
              { when: 'eKYC abhi pending hai', slug: '/articles/PmKisanEkycOnline2026', label: 'eKYC online karne ka guide' },
              { when: 'Seeding Yes hai par kist nahi aayi', slug: '/articles/PmKisanPaymentFailedFix2026', label: 'Payment failed — poora ilaaj' },
              { when: 'Aadhaar aur record mein naam alag hai', slug: '/articles/PmKisanCorrectionForm2026', label: 'Naam/byora correction guide' },
              { when: 'Status mein FTO Generated dikh raha hai', slug: '/articles/pm-kisan-fto-generated-ka-matlab-kya-hai', label: 'FTO ka matlab kya hota hai' },
              { when: 'List mein apna naam hi nahi mil raha', slug: '/articles/PmKisanBeneficiaryList2026', label: 'Beneficiary list mein naam kaise dekhein' },
              { when: 'Farmer ID / registry ki baat sunayi de rahi hai', slug: '/articles/AgriStackKyaHai2026', label: 'AgriStack kya hai — aasaan bhasha mein' },
            ].map(({ when, slug, label }) => (
              <div key={slug} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-3 bg-[var(--color-bg-alt)] rounded-xl">
                <span className="text-xs text-[var(--color-text-muted)] sm:w-1/2">Agar {when} →</span>
                <Link href={slug} className="text-sm font-bold text-green-700 dark:text-green-400 underline">
                  {label}
                </Link>
              </div>
            ))}
          </div>
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
        <Disclaimer k="PmKisanLandSeedingForm" />
      </div>
    </>
  );
}
