'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-07-10T08:00:00+05:30';
const MODIFIED = '2026-07-11T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List Guide', emoji: '' },
  { slug: 'PmKisanRejectedStatusReApplyGuide', title: 'Rejected Status Fix', emoji: '❌' },
  { slug: 'PmKisanMasterGuide2026', title: 'Master Guide', emoji: '' },
  { slug: 'PmKisanStateNodalOfficerList', title: 'Nodal Officer List', emoji: '📞' },
];

const FAQS_DATA = [
  {
    q: 'Mere gaon mein karib 500 kisan hain, sabka data download karne mein kitna time lagega?',
    a: 'Server load par depend karta hai. Dopahar 12-2 baje avoid karo—lunch break mein traffic zyada hota hai, slow chalta hai. Subah 9-10 baje ya shaam 7 ke baad try karo, fast khulega. Bade gaon ka information 3-4 minute mein aa jata hai.',
  },
  {
    q: 'File save ho gayi par phone mein open nahi ho rahi, kya karun?',
    a: 'Reader app install karo—Adobe Acrobat ya koi bhi free viewer. Ek simple jugaad: WhatsApp par kisi ko forward kar do, wahi khul jayegi. Ya fir Google Drive mein upload karo, wahan se dekh lo.',
  },
  {
    q: 'Sabke naam dikh rahe hain par mera nahi, bahut pareshani ho rahi hai. Paisa milega ya nahi?',
    a: 'Pehle individual status check karo pmkisan.gov.in par. Zyadatar cases mein eKYC pending hoti hai, ya phir Patwari ne land verification nahi kiya. Bank account ka IFSC code bhi galat ho sakta hai. CSC jakar 10 minute mein eKYC ho jati hai—wo sabse common issue hai.',
  },
  {
    q: 'Gram Pradhan keh rahe hain unke paas information hai, kya unse le lun ya khud download karun?',
    a: 'Unke paas jo hai wo purani ho sakti hai—2-3 mahine pehle ki. Naye naam add hote rehte hain. Central website se hi nikalna best hai, latest milega. Agar Pradhan ji ko dikhana hai toh unhe bolo ki aaj ki date wali nikal ke dein.',
  },
  {
    q: 'Mere padosi ke khet ka number same hai par uska naam list mein hai mera nahi, aisa kaise?',
    a: 'Ye serious mamla hai. Ho sakta hai aapne application hi na kiya ho, ya form reject ho gaya aur pata na chala. Zameen ka record alag-alag naam par bhi ho sakta hai. Apna Khasra number Bhulekh par check karo. Same hai toh Patwari se milna padega—wo record dekh kar bata dega.',
  },
  {
    q: 'Document download kar li, ab isme se apna naam kaise dhoondhun? Tech zyada nahi aata',
    a: 'File kholo, upar right corner mein 🔍 (magnifying glass) ka icon hoga. Us par tap karke apna naam type karo—pehle letter se hi suggestions dikhne lagenge. Agar phone mein nahi mil raha toh kisi bacche se karwa lo, 10 second ka kaam hai.',
  },
  {
    q: 'Information mein sirf 10-12 naam hain, mere gaon mein toh 200 se zyada log hain?',
    a: 'Galat gaon select kar liya hoga. Dobara check karo: State sahi hai? District? Block? Gaon ka naam exactly wahi hai? Occasionally same naam ke 2 gaon hote hain—ek "Rampur Khurd" aur ek "Rampur Kalan". Dropdown mein dhyan se dekho.',
  },
  {
    q: 'Apne marne wale baap ki jagah apna naam is list mein dekh sakta hoon?',
    a: 'Agar succession transfer karwaya hai toh haan. Lekin agar abhi tak baap ka naam hai, toh CSC jakar "Succession Transfer" karwao. Death certificate, Khatauni, aur Aadhaar chahiye. Bina transfer ke paisa nahi milega—account freeze ho jata hai.',
  },
];

function CountdownButton({ 
  title,
  description,
  url,
  buttonText,
  variant = 'green'
}: { 
  title: string;
  description: string;
  url: string;
  buttonText: string;
  variant?: 'green' | 'blue';
}) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (count === null) return;
    
    if (count === 0) {
      window.open(url, '_blank', 'noopener,noreferrer');
      setCount(null);
      return;
    }
    
    const timer = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, url]);

  const handleClick = () => {
    setCount(10);
  };

  const bgColor = variant === 'green' 
    ? 'bg-green-600 hover:bg-green-700' 
    : 'bg-blue-600 hover:bg-blue-700';

  return (
    <div className="my-6 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 shadow-lg">
      <h4 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">
        {title}
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
        {description}
      </p>
      
      {count === null ? (
        <button
          onClick={handleClick}
          className={`w-full px-6 py-4 ${bgColor} text-white text-sm font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]`}
        >
          {buttonText}
        </button>
      ) : (
        <div className="text-center py-4">
          <div className={`text-6xl font-black ${variant === 'green' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'} mb-3 animate-pulse`}>
            {count}
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-1 font-semibold">
            Official portal khulne wala hai...
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Thoda wait karo
          </p>
          <button
            onClick={() => setCount(null)}
            className="px-6 py-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-bold rounded-lg transition-colors"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default function PmKisanVillageWiseListPdfDownload({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Village Wise List PDF</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Gaon Ki List Download Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Village Wise List PDF Download 2026: Gaon Ki Puri List Kaise Nikalein?
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>️ <Link href="/about" className="underline hover:text-white">KisanStatus Team</Link></span>
            <span> {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>️ 15 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-village-wise-list-pdf-download/village-list-hero.webp"
            alt="Gram Panchayat members checking PM Kisan village wise list on computer"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
            priority
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)]">
            Gram Roster PDF — Gaon Ka Pura Data Ek Click Mein
          </p>
        </div>

        <section className="mb-8">
          <SH>Sirf Apna Naam Nahi, Pura Gaon Dekho Ek Saath</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Zyadatar kisan bas apna status check karte hain—ki 2000 rupaye aaye ya nahi. Lekin kabhi socha hai ki aapke gaon mein total kitne logon ko PM Kisan mil raha hai? Ya fir aapke chacha-chaacha, padosi ka naam is roster mein hai ya nahi?
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Gram Pradhan, Patwari, aur Kisan Samuh ke log frequently ye list maangte rehte hain. Kyun? Kyunki isse transparency banti hai. Pata chalta hai ki gaon ka kitna paisa aa raha hai, kiska naam reh gaya, aur kiska galat hai.
          </p>
          
          <Image
            src="/images/articles/pm-kisan-village-wise-list-pdf-download/village-roster-screen.webp"
            alt="PM Kisan village wise roster PDF showing multiple farmer names"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />

          <DB>
            <strong>Field Observation:</strong>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              Azamgarh aur surrounding areas mein kai baar aisa dekha hai—Gram Pradhan ne ye roster nikali toh pata chala ki kuch logon ke naam hain jinki zameen nahi hai. Unhone BAO office mein complaint ki. Kuch mahino baad galat naam kate aur naye asli kisanon ke naam jude. Gaon walon ka bharosa badha.
            </p>
          </DB>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Aaj aapko bataunga ki aap bhi apne mobile ya computer se apne gaon ka ye data PDF format mein kaise save kar sakte ho. Steps follow karo, kaam ho jayega.
          </p>
        </section>

        <section className="mb-8">
          <SH>Village Roster Aakhir Hai Kya?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Dekho, PM Kisan portal par do tarah ki lists hoti hain. Ek hoti hai <strong>Individual Status</strong>, jisme sirf aapka naam aur aapki kist ka haal dikhta hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Dusri hoti hai <strong>Village Roster</strong>. Isme aapke pure gaon ke sabhi registered kisanon ka naam, unka registration number, aur bank account ka last few digits dikhai dete hain. Gram panchayat records bhi isi ko kehte hain.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl p-5 mb-6">
            <p className="text-sm font-black text-green-800 dark:text-green-300 mb-3">
              Is List Ka Asli Fayda:
            </p>
            <ul className="list-disc list-inside text-xs text-green-800 dark:text-green-300 space-y-2">
              <li>Gaon mein total kitne beneficiaries hain, exact pata chalta hai.</li>
              <li>Agar aapka naam nahi hai, toh immediately pata lag jata hai—koi bahana nahi.</li>
              <li>Gram Panchayat audit aur transparency ke liye kaam aati hai.</li>
              <li>Naye kisan dekh sakte hain ki unke area mein kaun-kaun juda hai.</li>
              <li>Agar kisi ka naam galat hai toh pakda ja sakta hai.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <SH>Official Portal Se PDF Kaise Download Karein? (PC/Laptop)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Computer ya laptop par ye kaam sabse aasan hai. Agar aapke paas laptop hai toh 5 minute ka kaam hai. Neeche diye steps carefully follow karo:
          </p>
          <StepList>
            <SI n={1}>
              <strong>Portal Kholo:</strong> Browser (Chrome, Firefox, Edge) mein <strong>pmkisan.gov.in</strong> type karo.
            </SI>
            <SI n={2}>
              <strong>Beneficiary List Chuno:</strong> Home page par upar menu mein "Beneficiary List" ka option hoga. Us par click karo.
            </SI>
            <SI n={3}>
              <strong>State Select Karo:</strong> Dropdown se apna State chuno (Jaise Uttar Pradesh, Bihar, MP).
            </SI>
            <SI n={4}>
              <strong>District Chuno:</strong> State select karte hi district ka dropdown khul jayega. Apna district chuno.
            </SI>
            <SI n={5}>
              <strong>Block / Sub-District:</strong> Ab block ya sub-district select karo.
            </SI>
            <SI n={6}>
              <strong>Village Select Karo:</strong> Last mein apne gaon ka naam dhundo aur select karo.
            </SI>
            <SI n={7}>
              <strong>Get Report:</strong> Niche "Get Report" ya "Search" button dabao.
            </SI>
          </StepList>

          <Image
            src="/images/articles/pm-kisan-village-wise-list-pdf-download/portal-selection-steps.webp"
            alt="Selecting State, District, Block and Village on PM Kisan portal"
            width={800}
            height={600}
            className="w-full rounded-xl my-6"
          />

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Jaise hi aap button dabayenge, screen par ye list aa jayegi. Ab isko PDF mein save karna hai.
          </p>

          <CountdownButton
            title="🔍 PM Kisan Portal Par Beneficiary Data Dekho"
            description="Government website par jakar apne area ka complete information view karo. 10 second baad portal khulega."
            url="https://pmkisan.gov.in/BeneficiaryList.aspx"
            buttonText="📥 Click Here to Open Official Portal"
            variant="green"
          />

          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 rounded-xl p-5 mt-4">
            <p className="text-sm font-black text-blue-800 dark:text-blue-300 mb-3">
              PDF Save Karne Ka Tarika (PC):
            </p>
            <ol className="list-decimal list-inside text-xs text-blue-800 dark:text-blue-300 space-y-2">
              <li>Keyboard par <strong>Ctrl + P</strong> dabao (Print command).</li>
              <li>Printer ki list khulegi. Wahan <strong>"Save as PDF"</strong> select karo.</li>
              <li>File ka naam do (jaise "MeraGaon_PMKisan_List").</li>
              <li>Save button dabao. PDF aapke computer mein save ho jayegi.</li>
            </ol>
          </div>
        </section>

        <section className="mb-8">
          <SH>Mobile Par PDF Kaise Save Karein? (Android & iPhone)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Gaon mein zyada tar logon ke paas laptop nahi hota, sab kaam mobile se karte hain. Mobile par PDF save karna thoda tricky hai, lekin namumkin nahi. Dono tarah ke phone ke liye bata raha hoon:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm text-[var(--color-text)] mb-2">📱 Android Phone (Chrome Browser)</p>
              <ol className="list-decimal list-inside text-xs text-[var(--color-text-muted)] space-y-1">
                <li>List khulne ke baad upar right corner mein <strong>3 dots (⋮)</strong> par tap karo.</li>
                <li>"Share" option par click karo.</li>
                <li>Niche scroll karo aur <strong>"Print"</strong> chuno.</li>
                <li>Printer ki jagah <strong>"Save as PDF"</strong> select karo.</li>
                <li>PDF icon par tap karo, file save ho jayegi.</li>
              </ol>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm text-[var(--color-text)] mb-2"> iPhone (Safari Browser)</p>
              <ol className="list-decimal list-inside text-xs text-[var(--color-text-muted)] space-y-1">
                <li>Roster khulne ke baad niche <strong>Share button</strong> (box with arrow) par tap karo.</li>
                <li>Niche scroll karke <strong>"Print"</strong> par tap karo.</li>
                <li>Preview image par do ungliyon se pinch-out (zoom) karo.</li>
                <li>Ab upar right corner mein share icon dabao aur <strong>"Save to Files"</strong> chun lo.</li>
              </ol>
            </div>
          </div>
          <IB>
            <strong>Jugaad Tip:</strong> Agar PDF save nahi ho rahi, toh is list ka screenshot le lo. Chhote gaon ka data ek screenshot mein aa jata hai. Bade gaon ke liye 2-3 screenshot le lo aur CSC wale ko dikha do.
          </IB>
        </section>

        <section className="mb-8">
          <SH>State Ke Apne Portals Se Bhi Panchayat Wise Roster Mil Jata Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            PM Kisan ka central portal kabhi kabhi slow ho jata hai ya server down rehta hai. Aise mein aap apne state ke land record portal par bhi koshish kar sakte ho. Wahan bhi ye roster mil jata hai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { state: 'Andhra Pradesh', portal: 'landrecords.ap.gov.in', url: 'https://landrecords.ap.gov.in', note: 'Mee Bhoomi portal par beneficiary details.' },
              { state: 'Arunachal Pradesh', portal: 'dipp.gov.in', url: 'https://dipp.gov.in', note: 'State land records department.' },
              { state: 'Assam', portal: 'landrecords.assam.gov.in', url: 'https://landrecords.assam.gov.in', note: 'Assam land record portal.' },
              { state: 'Bihar', portal: 'biharbhumi.bihar.gov.in', url: 'https://biharbhumi.bihar.gov.in', note: 'Bhumi Jankari portal par roster milta hai.' },
              { state: 'Chhattisgarh', portal: 'bhuiyan.cg.nic.in', url: 'https://bhuiyan.cg.nic.in', note: 'Bhuiyan portal se village data.' },
              { state: 'Delhi', portal: 'delhilandrecords.gov.in', url: 'https://delhilandrecords.gov.in', note: 'Delhi land records portal.' },
              { state: 'Goa', portal: 'dlss.goa.gov.in', url: 'https://dlss.goa.gov.in', note: 'Goa land survey system.' },
              { state: 'Gujarat', portal: 'anyror.gujarat.gov.in', url: 'https://anyror.gujarat.gov.in', note: 'Any ROR Gujarat portal.' },
              { state: 'Haryana', portal: 'jamabandi.nic.in', url: 'https://jamabandi.nic.in', note: 'Jamabandi Haryana portal.' },
              { state: 'Himachal Pradesh', portal: 'himbhulekh.hp.nic.in', url: 'https://himbhulekh.hp.nic.in', note: 'HP Bhulekh portal.' },
              { state: 'Jharkhand', portal: 'jharbhoomi.jharkhand.gov.in', url: 'https://jharbhoomi.jharkhand.gov.in', note: 'Jharbhoomi portal se details.' },
              { state: 'Karnataka', portal: 'landrecords.karnataka.gov.in', url: 'https://bhoomi.karnataka.gov.in', note: 'Bhoomi RTC se details check karo.' },
              { state: 'Kerala', portal: 'erekha.kerala.gov.in', url: 'https://erekha.kerala.gov.in', note: 'E-Rekha Kerala portal.' },
              { state: 'Madhya Pradesh', portal: 'mpbhulekh.gov.in', url: 'https://bhu-abhilekh.nic.in', note: 'Bhu-Abhilekh se village report nikalo.' },
              { state: 'Maharashtra', portal: 'mahabhulekh.maharashtra.gov.in', url: 'https://bhulekh.mahabhumi.gov.in', note: '7/12 Utara par PM Kisan status link hai.' },
              { state: 'Manipur', portal: 'manipur.gov.in', url: 'https://manipur.gov.in', note: 'State land records.' },
              { state: 'Meghalaya', portal: 'meghalaya.gov.in', url: 'https://meghalaya.gov.in', note: 'Meghalaya land records.' },
              { state: 'Odisha', portal: 'bhulekh.ori.nic.in', url: 'https://bhulekh.ori.nic.in', note: 'Odisha Bhulekh portal.' },
              { state: 'Punjab', portal: 'jamabandi.punjab.gov.in', url: 'https://jamabandi.punjab.gov.in', note: 'Punjab Jamabandi portal.' },
              { state: 'Rajasthan', portal: 'apnakhata.raj.nic.in', url: 'https://apnakhata.raj.nic.in', note: 'E-Dharti par gaon wise report aati hai.' },
              { state: 'Sikkim', portal: 'sikkim.gov.in', url: 'https://sikkim.gov.in', note: 'Sikkim land records.' },
              { state: 'Tamil Nadu', portal: 'eservices.tnreg.gov.in', url: 'https://eservices.tnreg.gov.in', note: 'Tamil Nadu land records.' },
              { state: 'Telangana', portal: 'dharani.telangana.gov.in', url: 'https://dharani.telangana.gov.in', note: 'Dharani portal Telangana.' },
              { state: 'Tripura', portal: 'landrecords.tripura.gov.in', url: 'https://landrecords.tripura.gov.in', note: 'Tripura land records.' },
              { state: 'Uttar Pradesh', portal: 'upbhulekh.gov.in', url: 'https://upbhulekh.gov.in', note: 'Khatauni mein beneficiary status dikhta hai.' },
              { state: 'Uttarakhand', portal: 'bhulekh.uk.gov.in', url: 'https://bhulekh.uk.gov.in', note: 'UK Bhulekh portal.' },
              { state: 'West Bengal', portal: 'banglarbhumi.gov.in', url: 'https://banglarbhumi.gov.in', note: 'Banglar Bhumi WB portal.' },
              { state: 'Jammu & Kashmir', portal: 'jklandrecords.nic.in', url: 'https://jklandrecords.nic.in', note: 'JK land records portal.' },
            ].map(({ state, portal, url, note }) => (
              <div key={state} className="p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <p className="font-black text-sm text-[var(--color-text)] mb-1">🏛️ {state}</p>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-1">{portal}</p>
                <p className="text-xs text-[var(--color-text-muted)] mb-2">{note}</p>
                <CountdownButton
                  title={`${state} Bhulekh Portal`}
                  description={`${state} ke official bhulekh portal par redirect ho raha hai. Thoda wait karo...`}
                  url={url}
                  buttonText={`🔗 ${state} Portal Kholo`}
                  variant="blue"
                />
              </div>
            ))}
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Apne state ke portal ki puri jankari aur wahan ka process janne ke liye hamare <Link href="/beneficiary-list" className="underline text-green-700 dark:text-green-400">State Wise Pages</Link> par zaroor jao.
          </p>
        </section>

        <section className="mb-8">
          <SH>PDF Ko Excel Mein Kaise Badlein? (Patwari/Pradhan Ke Liye)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Gram Pradhan ya Patwari log chahte hain ki PDF ki jagah Excel sheet mile, taaki wo filter laga sakein ya print nikal sakein.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Iska ek chhota sa jugaad hai:
          </p>
          <StepList>
            <SI n={1}>Google Chrome browser mein PDF kholo.</SI>
            <SI n={2}>Mouse se pura data select karo (Ctrl + A).</SI>
            <SI n={3}>Copy karo (Ctrl + C).</SI>
            <SI n={4}>MS Excel ya Google Sheets kholo aur paste kar do (Ctrl + V).</SI>
            <SI n={5}>Data columns mein set karne ke liye "Text to Columns" ka use karo.</SI>
          </StepList>
          <Image
            src="/images/articles/pm-kisan-village-wise-list-pdf-download/pdf-to-excel-trick.webp"
            alt="Converting PM Kisan PDF list to Excel sheet"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />
          <WB>
            <strong>Online Tools:</strong>
            <p className="text-xs text-[var(--color-text-muted)] mt-2">
              Agar manual copy-paste mein dikkat aa rahi hai, toh <strong>ilovepdf.com</strong> par jao. Wahan "PDF to Excel" ka free tool hai. PDF upload karo, Excel download ho jayega. Bas dhyan rahe ki aapki PDF mein personal data (Aadhaar number) na ho, warna privacy ka masla ho sakta hai.
            </p>
          </WB>
        </section>

        <section className="mb-8">
          <SH>List Mein Naam Nahi Hai? Ab Kya Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ye roster nikala, sabke naam hain, lekin aapka naam nahi hai. Dil chhota mat karo. Kai reasons ho sakte hain:
          </p>
          <div className="space-y-3">
            {[
              { 
                reason: 'Application Reject Ho Gayi', 
                fix: 'Portal par individual status check karo. Agar "Rejected" dikh raha hai, toh rejected status guide padho aur correction karwao.' 
              },
              { 
                reason: 'Land Seeding Pending Hai', 
                fix: 'Aapka form sarkar tak pahuncha hai, lekin patwari ne zameen verify nahi ki. Patwari ke paas jao aur Khasra-Khatauni link karwao.' 
              },
              { 
                reason: 'eKYC Adhuri Hai', 
                fix: 'Aajkal bina eKYC ke naam is list mein nahi aata. Ghar baithe OTP se ya CSC jakar biometric eKYC karwa lo.' 
              },
            ].map(({ reason, fix }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">❌ {reason}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>✅ Fix:</strong> {fix}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>PDF Download Karte Time Aane Wali Problems</SH>
          <div className="space-y-3">
            {[
              { 
                issue: 'Server Down / Website Khul Nahi Rahi', 
                solution: 'PM Kisan portal par shaam ko 6 baje ke baad load kam hota hai. Subah 10 baje ya dopahar 2 baje try karo.' 
              },
              { 
                issue: 'Gaon Ka Naam Dropdown Mein Nahi Hai', 
                solution: 'Rarely naye gaon ya chhote hamlet ka naam portal par update nahi hota. Aise mein apne Block ya District ke agriculture officer ko email karo.' 
              },
              { 
                issue: 'PDF Blank Aa Rahi Hai', 
                solution: 'Browser ka cache clear karo. Ya Firefox/Edge browser use karke dekho. Chrome mein kuch cases mein glitch aata hai.' 
              },
              { 
                issue: 'List Bahut Purani Dikh Rahi Hai', 
                solution: 'Portal par mostly current financial year ka data hota hai. Purane records ke liye BAO office mein RTI ya application deni padti hai.' 
              },
            ].map(({ issue, solution }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-amber-600 dark:text-amber-400 mb-2">⚠️ {issue}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>✅ Solution:</strong> {solution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>⚠️ Zaroori Chetawani (Privacy & Fraud)</SH>
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-xl">
            <p className="text-sm text-red-800 dark:text-red-300 mb-2">
              <strong>Fraud Se Bacho:</strong>
            </p>
            <p className="text-xs text-red-700 dark:text-red-400">
              Is roster mein kisanon ke bank account ke last 4 digits aur mobile number dikhai de sakte hain. Is data ka galat istemal karne se bacho. Koi bhi unknown link par click mat karo jo kahe ki "Yahan se complete data download karo". Hamesha sirf <strong>pmkisan.gov.in</strong> ka use karo.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Frequently Asked Questions
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Beneficiary Roster PDF Download FAQ 2026" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Seedhi Baat</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            PM Kisan ka ye roster ek powerful tool hai. Isse aap apne gaon ka audit khud kar sakte ho. Transparency badhti hai, fraud pakde jaate hain, aur asli kisanon ko unka haq milta hai.
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Aaj hi apne gaon ki ye list save karo. Apne Gram Pradhan ya Patwari ko bhi bhejo. Milke kaam karenge toh gaon ka vikas hoga.
          </p>
        </div>

        <CountdownButton
          title="🔗 PM Kisan Official Portal"
          description="Beneficiary data access karne ke liye, ya saari jaankari ke liye government website par jaayein. 10 second baad portal khulega."
          url="https://pmkisan.gov.in/BeneficiaryList.aspx"
          buttonText="📥 Yahan Click Karo → PM Kisan Portal Khulega"
          variant="blue"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanBeneficiaryList2026', l: '📋 Beneficiary List' },
          { href: '/articles/PmKisanRejectedStatusReApplyGuide', l: '❌ Rejected Status Fix' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}