'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-07-10T08:00:00+05:30';
const MODIFIED = '2026-07-10T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List Guide', emoji: '📋' },
  { slug: 'PmKisanRejectedStatusReApplyGuide', title: 'Rejected Status Fix', emoji: '❌' },
  { slug: 'PmKisanMasterGuide2026', title: 'Master Guide', emoji: '📚' },
  { slug: 'PmKisanStateNodalOfficerList', title: 'Nodal Officer List', emoji: '📞' },
];

const FAQS_DATA = [
  {
    q: 'Kya main apne gaon ki puri list ek saath download kar sakta hoon?',
    a: 'Haan bhai, PM Kisan portal par "Beneficiary List" option mein State, District, Block aur Village select karke aap pure gaon ki PDF nikal sakte ho.',
  },
  {
    q: 'Mobile par PDF kaise save karein?',
    a: 'Jab list screen par aa jaye, toh browser ke menu (3 dots) mein "Share" ya "Print" par click karo. Printer ki jagah "Save as PDF" select kar lo.',
  },
  {
    q: 'Agar mera naam gaon ki list mein nahi hai toh?',
    a: 'Iska matlab aapki application reject hui hai ya pending hai. <a href="/articles/PmKisanRejectedStatusReApplyGuide" class="underline">Rejected status guide</a> padho aur turant correction karwao.',
  },
  {
    q: 'Kya Gram Pradhan ya Patwari is list ko edit kar sakte hain?',
    a: 'Nahi. Ye list seedha central server se aati hai. Pradhan ya Patwari isme kuch add ya delete nahi kar sakte. Wo sirf verify kar sakte hain.',
  },
  {
    q: 'PDF bahut heavy hai, khul nahi rahi. Kya karein?',
    a: 'Bade gaon ki list mein 500-1000 naam ho sakte hain. PC ya laptop par download karo. Mobile par hang ho sakta hai.',
  },
  {
    q: 'Kya pichle saal ki list bhi download kar sakte hain?',
    a: 'Official portal par mostly current active list dikhti hai. Purani records ke liye apne Block Agriculture Office (BAO) mein application deni padti hai.',
  },
  {
    q: 'List mein kisi aur ke naam se meri zameen dikh rahi hai?',
    a: 'Ye land record ka masla hai. Turant patwari se sampark karo aur Bhulekh/Khatauni mein correction karwao. Phir CSC se PM Kisan update karwao.',
  },
  {
    q: 'Village ka naam dropdown mein nahi aa raha?',
    a: 'Kabhi kabhi naye gaon ya chhote hamlet ka naam portal par update nahi hota. Aise mein apne Block ya District ke agriculture officer ko email karo.',
  },
];

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
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Complete Roster Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Village Wise List PDF Download: Gaon Ki Puri List Kaise Nikalein?
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 15 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Hero Image */}
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
            Village Wise List PDF — Gaon Ka Pura Roster Ek Click Mein
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <SH>Sirf Apna Naam Nahi, Pura Gaon Dekho Ek Saath</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, zyada tar log sirf apna status check karte hain. Lekin kya aapne kabhi socha hai ki aapke gaon mein total kitne kisanon ko PM Kisan ka paisa mil raha hai? Ya aapke padosi ka naam list mein aaya ya nahi?
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Gram Pradhan, Patwari, aur Kisan Samuh ke log aksar <strong>Village Wise List</strong> mangte hain. Isse transparency banti hai. Pata chalta hai ki gaon ka kitna paisa aa raha hai aur kiska naam reh gaya.
          </p>
          
          <Image
            src="/images/articles/pm-kisan-village-wise-list-pdf-download/village-roster-screen.webp"
            alt="PM Kisan village wise roster PDF showing multiple farmer names"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
          />

          <DB>
            <strong>Real Story:</strong>
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              Azamgarh ke ek chhote se gaon mein Gram Pradhan Ramesh Yadav ne pure gaon ki PDF nikali. Unhone dekha ki 12 aise log hain jinki zameen nahi hai lekin naam list mein hai. Unhone turant BAO office mein complaint ki. 2 mahine baad un 12 logon ka naam kata aur 8 naye asli kisanon ka naam juda. Gaon walon ka bharosa sarkar par badha.
            </p>
          </DB>

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Is article mein hum batayenge ki aap bhi apne mobile ya computer se apne gaon ki puri list PDF format mein kaise download kar sakte ho. Step-by-step guide hai, bas follow karo.
          </p>
        </section>

        {/* SECTION 1: What is Village List */}
        <section className="mb-8">
          <SH>Village Wise List Aakhir Hai Kya?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Dekho bhai, PM Kisan portal par do tarah ki lists hoti hain. Ek hoti hai <strong>Individual Status</strong>, jisme sirf aapka naam aur aapki kist ka haal dikhta hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Dusri hoti hai <strong>Village Roster (Gaon ki List)</strong>. Isme aapke pure gaon ke sabhi registered kisanon ka naam, unka registration number, aur bank account ka last few digits dikhai dete hain.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl p-5 mb-6">
            <p className="text-sm font-black text-green-800 dark:text-green-300 mb-3">
              Is List Ka Fayda Kya Hai?
            </p>
            <ul className="list-disc list-inside text-xs text-green-800 dark:text-green-300 space-y-2">
              <li>Gaon mein total kitne beneficiaries hain, pata chalta hai.</li>
              <li>Agar aapka naam nahi hai, toh turant pata lag jata hai ki aap bahar ho.</li>
              <li>Gram Panchayat audit aur transparency ke liye kaam aati hai.</li>
              <li>Naye kisan dekh sakte hain ki unke area mein kaun-kaun juda hai.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 2: Step by Step Download */}
        <section className="mb-8">
          <SH>Official Portal Se PDF Kaise Download Karein? (PC/Laptop)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bhai, computer ya laptop par ye kaam sabse aasan hai. Neeche diye steps dhyan se follow karo:
          </p>
          <StepList>
            <SI n={1}>
              <strong>Portal Kholo:</strong> Browser mein <strong>pmkisan.gov.in</strong> type karo.
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
            Jaise hi aap button dabayenge, screen par gaon ki puri list aa jayegi. Ab isko PDF mein save karna hai.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 rounded-xl p-5">
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

        {/* SECTION 3: Mobile Method */}
        <section className="mb-8">
          <SH>Mobile Par PDF Kaise Save Karein? (Android & iPhone)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, gaon mein zyada tar logon ke paas laptop nahi hota, sab kaam mobile se karte hain. Mobile par PDF save karna thoda tricky hai, lekin namumkin nahi.
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm text-[var(--color-text)] mb-2"> Android Phone (Chrome Browser)</p>
              <ol className="list-decimal list-inside text-xs text-[var(--color-text-muted)] space-y-1">
                <li>List khulne ke baad upar right corner mein <strong>3 dots (⋮)</strong> par tap karo.</li>
                <li>"Share" option par click karo.</li>
                <li>Niche scroll karo aur <strong>"Print"</strong> chuno.</li>
                <li>Printer ki jagah <strong>"Save as PDF"</strong> select karo.</li>
                <li>PDF icon par tap karo, file save ho jayegi.</li>
              </ol>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm text-[var(--color-text)] mb-2">🍏 iPhone (Safari Browser)</p>
              <ol className="list-decimal list-inside text-xs text-[var(--color-text-muted)] space-y-1">
                <li>List khulne ke baad niche <strong>Share button</strong> (box with arrow) par tap karo.</li>
                <li>Niche scroll karke <strong>"Print"</strong> par tap karo.</li>
                <li>Preview image par do ungliyon se pinch-out (zoom) karo.</li>
                <li>Ab upar right corner mein share icon dabao aur <strong>"Save to Files"</strong> chun lo.</li>
              </ol>
            </div>
          </div>
          <IB>
            <strong>Jugaad Tip:</strong> Agar PDF save nahi ho rahi, toh list ka screenshot le lo. Chhote gaon ki list ek screenshot mein aa jati hai. Bade gaon ki list ke liye 2-3 screenshot le lo aur CSC wale ko dikha do.
          </IB>
        </section>

        {/* SECTION 4: State Portals */}
        <section className="mb-8">
          <SH>State Ke Apne Portals Se Bhi List Milti Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, PM Kisan ka central portal kabhi kabhi slow ho jata hai ya server down rehta hai. Aise mein aap apne state ke land record portal par bhi koshish kar sakte ho. Wahan bhi beneficiary list milti hai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { state: 'Uttar Pradesh', portal: 'upbhulekh.gov.in', note: 'Khatauni mein beneficiary status dikhta hai.' },
              { state: 'Bihar', portal: 'biharbhumi.bihar.gov.in', note: 'Bhumi Jankari portal par roster milta hai.' },
              { state: 'Madhya Pradesh', portal: 'mpbhulekh.gov.in', note: 'Bhu-Abhilekh se village report nikalo.' },
              { state: 'Rajasthan', portal: 'apnakhata.raj.nic.in', note: 'E-Dharti par gaon wise report aati hai.' },
              { state: 'Maharashtra', portal: 'mahabhulekh.maharashtra.gov.in', note: '7/12 Utara par PM Kisan status link hai.' },
              { state: 'Karnataka', portal: 'landrecords.karnataka.gov.in', note: 'Bhoomi RTC se details check karo.' },
            ].map(({ state, portal, note }) => (
              <div key={state} className="p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
                <p className="font-black text-sm text-[var(--color-text)] mb-1"> {state}</p>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-1">{portal}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{note}</p>
              </div>
            ))}
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Apne state ke portal ki puri jankari aur wahan ka process janne ke liye hamare <Link href="/beneficiary-list" className="underline text-green-700 dark:text-green-400">State Wise Pages</Link> par zaroor jao.
          </p>
        </section>

        {/* SECTION 5: PDF to Excel */}
        <section className="mb-8">
          <SH>PDF Ko Excel Mein Kaise Badlein? (Patwari/Pradhan Ke Liye)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, aksar Gram Pradhan ya Patwari log chahte hain ki PDF ki jagah Excel sheet mile, taaki wo filter laga sakein ya print nikal sakein.
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

        {/* SECTION 6: What If Name Missing */}
        <section className="mb-8">
          <SH>List Mein Naam Nahi Hai? Ab Kya Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Bhai, pura gaon ki list nikali, sabke naam hain, lekin aapka naam nahi hai. Dil chhota mat karo. Iske 3 main reasons ho sakte hain:
          </p>
          <div className="space-y-3">
            {[
              { 
                reason: 'Application Reject Ho Gayi', 
                fix: 'Portal par individual status check karo. Agar "Rejected" dikh raha hai, toh <a href="/articles/PmKisanRejectedStatusReApplyGuide" class="underline">is guide ko padho</a> aur turant correction karwao.' 
              },
              { 
                reason: 'Land Seeding Pending Hai', 
                fix: 'Aapka form sarkar tak pahuncha hai, lekin patwari ne zameen verify nahi ki. Patwari ke paas jao aur Khasra-Khatauni link karwao.' 
              },
              { 
                reason: 'eKYC Adhuri Hai', 
                fix: 'Aajkal bina eKYC ke naam list mein nahi aata. Ghar baithe OTP se ya CSC jakar biometric eKYC karwa lo.' 
              },
            ].map(({ reason, fix }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">❌ {reason}</p>
                <p className="text-xs text-green-700 dark:text-green-400" dangerouslySetInnerHTML={{ __html: `<strong>✅ Fix:</strong> ${fix}` }} />
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: Common Issues */}
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
                solution: 'Kabhi kabhi naye gaon ya chhote hamlet ka naam portal par update nahi hota. Aise mein apne Block ya District ke agriculture officer ko email karo.' 
              },
              { 
                issue: 'PDF Blank Aa Rahi Hai', 
                solution: 'Browser ka cache clear karo. Ya Firefox/Edge browser use karke dekho. Chrome mein kabhi kabhi glitch aata hai.' 
              },
              { 
                issue: 'List Bahut Purani Dikh Rahi Hai', 
                solution: 'Portal par mostly current financial year ki list hoti hai. Purani list ke liye BAO office mein RTI ya application deni padti hai.' 
              },
            ].map(({ issue, solution }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-amber-600 dark:text-amber-400 mb-2">⚠️ {issue}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>✅ Solution:</strong> {solution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 8: Privacy Warning */}
        <section className="mb-8">
          <SH>⚠️ Zaroori Chetawani (Privacy & Fraud)</SH>
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-xl">
            <p className="text-sm text-red-800 dark:text-red-300 mb-2">
              <strong>Fraud Se Bacho:</strong>
            </p>
            <p className="text-xs text-red-700 dark:text-red-400">
              Village wise list mein kisanon ke bank account ke last 4 digits aur mobile number dikhai de sakte hain. Is data ka galat istemal karne se bacho. Koi bhi unknown link par click mat karo jo kahe ki "Yahan se puri list download karo". Hamesha sirf <strong>pmkisan.gov.in</strong> ka use karo.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Village Wise List PDF FAQ" />
        </section>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Official Portal"
          guide="Village List Nikalein"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
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