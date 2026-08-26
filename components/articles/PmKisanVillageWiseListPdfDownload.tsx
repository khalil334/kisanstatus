import Link from 'next/link';
import Image from 'next/image';
import CountdownPortalCard from '@/components/CountdownPortalCard';
import StatePortalFinder from '@/components/StatePortalFinder';
import { SI, StepList, IB, WB, SH, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-07-09T06:54:59+05:30';
const MODIFIED = '2026-08-12T17:59:16+05:30';

const RELATED = [
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List' },
  { slug: 'PmKisanRejectedStatusReApplyGuide', title: 'Rejected Status. Dobara Apply' },
  { slug: 'PmKisanStateNodalOfficerList', title: 'Nodal Officer Contacts' },
];

const FAQS_DATA = [
  {
    q: 'Sabke naam dikh rahe hain par mera nahi. Paisa milega ya nahi?',
    a: 'Pehle individual status check karein pmkisan.gov.in par. Zyadatar cases mein eKYC pending hoti hai, ya Patwari ne land verification nahi kiya. CSC jakar jaldi eKYC karwa lein.',
  },
  {
    q: 'Naam list mein hai par paisa nahi aaya, iska kya matlab?',
    a: 'List mein naam hona sirf pehla step hai. Iska matlab aap eligible beneficiary ho. Paisa tabhi aata hai jab us kist ka FTO (Fund Transfer Order) generate ho kar process ho jaye. Apne status mein FTO ka stage dekhen. FTO generated ka matlab payment pipeline mein hai. Detail hamari FTO guide mein hai.',
  },
  {
    q: 'Gram Pradhan keh rahe hain unke paas purani list hai, kya unse le lun?',
    a: 'Nahi. Central website se hi latest list nikalna best hai, kyunki naye naam regularly add hote rehte hain aur purane galat naam hataaye jaate hain.',
  },
  {
    q: 'List mein sirf 10-12 naam hain, mere gaon mein toh 200 se zyada log hain?',
    a: 'Galat gaon select kar liya hoga. Dobara check karein: State, District, Block, aur Gaon ka naam exactly match hona chahiye. Kabhi-kabhi "Rampur Khurd" aur "Rampur Kalan" mein confusion ho jati hai.',
  },
  {
    q: 'Pitaji ka dehant ho gaya, unki jagah apna naam list mein aa sakta hai?',
    a: 'Haan, lekin sirf tab jab aapne CSC jakar "Succession Transfer" karwa liya ho. Death certificate, Khatauni, aur Aadhaar ke sath transfer karwayein, warna account freeze rehta hai.',
  },
];


export default function PmKisanVillageWiseListPdfDownload() {
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
            PM Kisan Village Wise List 2026: Gaon Ki Puri List Kaise Nikalein?
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>12 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-village-wise-list-pdf-download/village-list-hero.webp"
            alt="PM Kisan village wise beneficiary list display on official portal"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px' }}
            priority
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Gram Roster PDF. Gaon Ka Pura Data Ek Click Mein
          </p>
        </div>

        <section className="mb-8">
          <SH>Sirf Apna Naam Nahi, Pura Gaon Dekho Ek Saath</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Zyadatar kisan bas apna individual status check karte hain. Lekin kabhi socha hai ki aapke gaon mein total kitne logon ko PM Kisan mil raha hai?
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Gram Pradhan aur Patwari frequently ye list maangte hain kyunki isse transparency banti hai. Pata chalta hai ki gaon ka kitna paisa aa raha hai, kiska naam reh gaya, aur kiska record galat hai.
          </p>

          <Image
            src="/images/articles/pm-kisan-village-wise-list-pdf-download/village-roster-screen.webp"
            alt="PM Kisan village wise roster PDF showing multiple farmer names and account details"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
            loading="lazy"
          />

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-4">
            Neeche diye steps follow karke aap apne mobile ya computer se apne gaon ka ye data PDF format mein save kar sakte hain.
          </p>
        </section>

        <section className="mb-8">
          <SH>Pehle Confusion Clear Karein: List vs Status vs Village Dashboard</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            pmkisan.gov.in par teen alag-alag tools hain aur log inhe aapas mein mila dete hain. Galat tool kholne par lagta hai "mera data nahi mil raha", jabki aap galat jagah dekh rahe hote hain:
          </p>
          <div className="space-y-3">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
              <p className="font-black text-sm text-[var(--color-text)] mb-1">1. Beneficiary List (ye page isi ke baare mein hai)</p>
              <p className="text-xs text-[var(--color-text-muted)]">State → District → Block → Village chun kar poore gaon ke beneficiaries ki list. Kaam: dekhna ki gaon mein kaun-kaun scheme mein hai. Ye ye NAHI batati ki kis kist ka paisa kab aaya.</p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
              <p className="font-black text-sm text-[var(--color-text)] mb-1">2. Beneficiary Status / Know Your Status (individual)</p>
              <p className="text-xs text-[var(--color-text-muted)]">Registration number se sirf APNA record — eKYC status, land seeding, bank seeding, aur har kist ka payment stage (FTO). "Mera paisa kyun nahi aaya" ka jawab yahan milta hai, list mein nahi.</p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
              <p className="font-black text-sm text-[var(--color-text)] mb-1">3. Village Dashboard</p>
              <p className="text-xs text-[var(--color-text-muted)]">Gaon-level ka summary view, kitne farmers registered, kitne eKYC-complete, kitne paid. Numbers/aggregate ke liye hai; naam-wise poori list chahiye toh Beneficiary List hi use karein.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Official Portal Se PDF Kaise Download Karein? (PC/Laptop)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Computer ya laptop par ye kaam sabse aasan hai. Neeche diye steps carefully follow karein:
          </p>
          <StepList>
            <SI n={1}>Browser (Chrome, Firefox, Edge) mein <strong>pmkisan.gov.in</strong> kholo.</SI>
            <SI n={2}>Home page par upar menu mein <strong>"Beneficiary List"</strong> par click karo.</SI>
            <SI n={3}>Dropdown se apna <strong>State</strong> chuno.</SI>
            <SI n={4}>State select karte hi <strong>District</strong> ka dropdown khul jayega, use chuno.</SI>
            <SI n={5}>Ab <strong>Block</strong> ya Sub-District select karo.</SI>
            <SI n={6}>Last mein apne <strong>Gaon</strong> ka naam dhundh kar select karo.</SI>
            <SI n={7}>Niche <strong>"Get Report"</strong> button dabao.</SI>
          </StepList>

          <Image
            src="/images/articles/pm-kisan-village-wise-list-pdf-download/portal-selection-steps.webp"
            alt="Selecting State, District, Block and Village on PM Kisan portal dropdowns"
            width={800}
            height={600}
            className="w-full rounded-xl my-6"
            loading="lazy"
          />

          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Jaise hi aap button dabayenge, screen par ye list aa jayegi. Ab isko PDF mein save karna hai.
          </p>

          <div className="my-6 p-6 rounded-2xl border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 shadow-sm">
            <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">
               PM Kisan Portal Par Beneficiary Data Dekho
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Government website par jakar apne area ka complete information view karein.
            </p>
            <Link
              href="https://pmkisan.gov.in/BeneficiaryList.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-4 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
            >
               Click Here to Open Official Portal
            </Link>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 rounded-xl p-5 mt-4">
            <p className="text-sm font-black text-blue-800 dark:text-blue-300 mb-3">
              PDF Save Karne Ka Tarika (PC):
            </p>
            <ol className="list-decimal list-inside text-xs text-blue-800 dark:text-blue-300 space-y-2">
              <li>Keyboard par <strong>Ctrl + P</strong> dabao (Print command).</li>
              <li>Printer ki list mein <strong>"Save as PDF"</strong> select karo.</li>
              <li>File ka naam do (jaise "MeraGaon_PMKisan_List.pdf").</li>
              <li>Save button dabao.</li>
            </ol>
          </div>
        </section>

        <section className="mb-8">
          <SH>Mobile Par PDF Kaise Save Karein? (Android & iPhone)</SH>
          <div className="space-y-4">
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm text-[var(--color-text)] mb-2">Android Phone (Chrome)</p>
              <ol className="list-decimal list-inside text-xs text-[var(--color-text-muted)] space-y-1">
                <li>List khulne ke baad upar right corner mein <strong>3 dots (⋮)</strong> par tap karo.</li>
                <li>"Share" option par click karo.</li>
                <li>Niche scroll karke <strong>"Print"</strong> chuno.</li>
                <li>Printer ki jagah <strong>"Save as PDF"</strong> select karo aur PDF icon par tap karo.</li>
              </ol>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <p className="font-black text-sm text-[var(--color-text)] mb-2">iPhone (Safari)</p>
              <ol className="list-decimal list-inside text-xs text-[var(--color-text-muted)] space-y-1">
                <li>Niche <strong>Share button</strong> (box with arrow) par tap karo.</li>
                <li>Niche scroll karke <strong>"Print"</strong> par tap karo.</li>
                <li>Preview image par do ungliyon se pinch-out (zoom) karo.</li>
                <li>Ab upar right corner mein share icon dabakar <strong>"Save to Files"</strong> chun lo.</li>
              </ol>
            </div>
          </div>
          <IB>
            <strong>Jugaad Tip:</strong> Agar PDF save nahi ho rahi, toh is list ka screenshot le lo. Chhote gaon ka data ek screenshot mein aa jata hai.
          </IB>
        </section>

        <section className="mb-8">
          <SH>State Ke Apne Portals Se Bhi Details Mil Sakti Hain</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            PM Kisan ka central portal kabhi kabhi slow ho jata hai. Aise mein aap apne state ke land record portal par bhi koshish kar sakte hain.
          </p>

          <StatePortalFinder />
        </section>

        <section className="mb-8">
          <SH>PDF Ko Excel Mein Kaise Badlein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Gram Pradhan ya Patwari log chahte hain ki PDF ki jagah Excel sheet mile, taaki wo filter laga sakein.
          </p>
          <StepList>
            <SI n={1}>Google Chrome browser mein PDF kholo.</SI>
            <SI n={2}>Mouse se pura data select karo (Ctrl + A) aur Copy karo (Ctrl + C).</SI>
            <SI n={3}>MS Excel ya Google Sheets kholo aur paste kar do (Ctrl + V).</SI>
            <SI n={4}>Data columns mein set karne ke liye "Text to Columns" ka use karo.</SI>
          </StepList>
          <Image
            src="/images/articles/pm-kisan-village-wise-list-pdf-download/pdf-to-excel-trick.webp"
            alt="Converting PM Kisan PDF list to Excel sheet step by step"
            width={800}
            height={450}
            className="w-full rounded-xl my-4"
            loading="lazy"
          />
          <WB>
            <strong>Online Tools:</strong>
            <p className="text-xs text-[var(--color-text-muted)] mt-2">
              Agar manual copy-paste mein dikkat aa rahi hai, toh ilovepdf.com par "PDF to Excel" tool use karein. Ek baat dhyan rahe: agar PDF scan ki hui image hai (text select nahi ho raha), to pehle OCR karna padega, tabhi Excel banega. Aur file kisi ko bhejne se pehle dekh lo ki usme personal data (jaise poora Aadhaar number) na ho.
            </p>
          </WB>
        </section>

        <section className="mb-8">
          <SH>Naam List Mein Hai, Par Paisa Nahi Aaya?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ye sabse common confusion hai. List mein naam hona = aap beneficiary ho. Paisa aana = us kist ka <strong>FTO (Fund Transfer Order)</strong> generate aur process hona. Ye do alag cheezein hain. Kist ka paisa states/banks ke through FTO ke zariye hi transfer hota hai, isliye naam hone ke bawajood payment ruk sakti hai agar:
          </p>
          <ul className="list-disc list-inside text-xs text-[var(--color-text-muted)] leading-relaxed mb-3 space-y-1">
            <li>eKYC ya bank/NPCI seeding pending hai (FTO bana hi nahi)</li>
            <li>FTO generate hua par bank level par payment fail ho gayi (account band, IFSC change, naam mismatch)</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Apna exact stage individual status mein dekhein, aur FTO statuses ka matlab + payment fail hone par kya karna hai. In dono ke liye alag guides hain: <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="underline text-blue-600 dark:text-blue-400 font-medium">FTO Generated Ka Matlab</Link> aur <Link href="/articles/PmKisanPaymentFailedFix2026" className="underline text-blue-600 dark:text-blue-400 font-medium">Payment Failed Fix Guide</Link>.
          </p>
        </section>

        <section className="mb-8">
          <SH>List Mein Naam Nahi Hai? Ab Kya Karein?</SH>
          <div className="space-y-3">
            {[
              {
                reason: 'Application Reject Ho Gayi',
                fix: <span>Portal par individual status check karo. Agar "Rejected" dikh raha hai, toh <Link href="/articles/PmKisanRejectedStatusReApplyGuide" className="underline font-bold">rejected status guide</Link> padho aur correction karwao.</span>
              },
              {
                reason: 'Land Seeding Pending Hai',
                fix: 'Aapka form sarkar tak pahuncha hai, lekin patwari ne zameen verify nahi ki. Patwari ke paas jakar Khasra-Khatauni link karwayein.'
              },
              {
                reason: 'eKYC Adhuri Hai',
                fix: 'Bina eKYC ke naam is list mein nahi aata. Ghar baithe OTP se ya CSC jakar biometric eKYC karwa lein.'
              },
            ].map(({ reason, fix }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">{reason}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>Solution Ye Hai:</strong> {fix}</p>
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
                solution: 'PM Kisan portal par shaam ko 6 baje ke baad load kam hota hai. Subah 10 baje ya dopahar 2 baje try karein.'
              },
              {
                issue: 'Gaon Ka Naam Dropdown Mein Nahi Hai',
                solution: 'Naye gaon ya chhote hamlet ka naam portal par update nahi hota. Aise mein apne Block agriculture office ko email karein.'
              },
              {
                issue: 'PDF Blank Aa Rahi Hai',
                solution: 'Browser ka cache clear karein ya incognito mode mein try karein.'
              },
            ].map(({ issue, solution }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-amber-600 dark:text-amber-400 mb-2">{issue}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>Solution:</strong> {solution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <SH>Ghar Ke Bade-Buzurg Ka Naam List Mein Hai. Unke Baad Kya?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ye sawal list check karte waqt sabse zyada takleef ke saath aata hai: pitaji ka naam
            list mein chal raha hai, unka dehant ho gaya, ab kist ka kya hoga? Seedha jawab:
            paisa apne aap bete ke naam transfer <strong>nahi</strong> hota. Iske liye CSC par
            jakar <strong>Succession Transfer</strong> karwana padta hai. Death certificate,
            Khatauni (jisme zameen ab aapke naam ho) aur aapka Aadhaar lekar. Jab tak ye nahi
            hota, purana account effectively freeze rehta hai aur kist rukti hai. Transfer poora hone
            ke baad agli list update mein naya naam khud dikhne lagta hai. Alag se koi naya
            registration nahi karna padta.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Yahan ek galti bahut mehngi padti hai — dehant ke baad bhi purane naam par kist lete
            rehna. Har kist se pehle list ka verification hota hai, ineligible naam hataye jaate
            hain, aur galat li hui kist ki recovery bhi hoti hai. Isliye zameen ka mutation
            (naam-transfer) pehle karwao, phir PM Kisan ka record. Dono ek hi chain ke kaam hain.
            Bank account badalna ho toh uska process{' '}
            <Link href="/articles/PmKisanBankAccountChangeProcess" className="underline text-blue-600 dark:text-blue-400 font-medium">bank account change guide</Link> mein hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>List Se Shikayat Tak. Gaon Ke Level Par Escalation Ka Rasta</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Village list ka asli power tab dikhta hai jab usse shikayat judti hai. Maan lo list
            nikaali aur dikha ki aapke gaon ke 200 mein se 40 logon ka naam pichhli list se gayab
            hai. Ye individual problem nahi, block-level data ki problem hai. Aise case mein
            akele helpline par call karne se zyada asar hota hai jab Gram Pradhan ke through
            block agriculture office mein likhit shikayat jaye, saath mein list ki PDF ka print.
            Kagaz ka saboot hamesha zubaani shikayat se bhari padta hai. Aur haan, shikayat se
            pehle ek baar taaza list dobara nikaal lena; kai baar naam agli update mein khud wapas
            aa jata hai, aur tab bina wajah ka chakkar bach jata hai. List har kist cycle se pehle
            refresh hoti hai, isliye mahine-do-mahine purani PDF ko aakhri sach mat maano.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Apni individual problem ke liye seedhi chain ye hai: pehle <strong>155261</strong>{' '}
            (national helpline) par call. Aadhaar, registration number aur bank details saamne
            rakh kar. Wahan se hal na nikle toh pmkisan.gov.in ke Help Desk par ticket, aur uske
            baad apne state ke <strong>Nodal Officer</strong> ko email, unke paas district
            administration ko order dene ki power hoti hai. Har state ke nodal officer ka contact{' '}
            <Link href="/articles/PmKisanStateNodalOfficerList" className="underline text-blue-600 dark:text-blue-400 font-medium">nodal officer list</Link> mein hai. List ki PDF, status ka screenshot aur complaint
            number. Teeno sambhal kar rakho, har agla step inhi par chalta hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Zaroori Chetawani (Privacy & Fraud)</SH>
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-xl">
            <p className="text-sm text-red-800 dark:text-red-300 mb-2">
              <strong>Fraud Se Bacho:</strong>
            </p>
            <p className="text-xs text-red-700 dark:text-red-400">
              Official list mein naam aur partially masked account details dikh sakti hain — itna hi data public hota hai. Koi bhi unknown link par click mat karein jo kahe ki "Yahan se complete data download karo", poora Aadhaar ya account number dikhane ka dawa karne wali har site fraud hai. Hamesha sirf <strong>pmkisan.gov.in</strong> ka use karein.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Village List Se Jude Common Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Beneficiary Roster PDF Download FAQ 2026" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">List Download Karke Kya Karein</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Gaon ki list sirf apna naam dekhne ke liye nahi hai. Isi se pata chalta hai ki kaun ineligible hote hue paisa le raha hai aur kaun eligible hote hue chhut gaya hai. Har kist se pehle list update hoti hai, isliye purani save ki hui PDF par bharosa na karein.
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Naam list mein hai par payment nahi aayi, toh problem list mein nahi, bank seeding mein hai; woh alag check karni padegi.
          </p>
        </div>

        <CountdownPortalCard
          title="PM Kisan Official Portal"
          description="Beneficiary data access karne ke liye, ya saari jaankari ke liye government website par jaayein, countdown poora hote hi portal khulega."
          url="https://pmkisan.gov.in/BeneficiaryList.aspx"
          buttonText="Yahan Click Karo → PM Kisan Portal Khulega"
          variant="blue"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} bioKey="PmKisanVillageWiseListPdfDownload" />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanBeneficiaryList2026', l: 'Beneficiary List' },
          { href: '/articles/PmKisanRejectedStatusReApplyGuide', l: 'Rejected Status Fix' },
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
        ]} />
        <Disclaimer k="PmKisanVillageWiseListPdfDownload" />
      </div>
    </>
  );
}
