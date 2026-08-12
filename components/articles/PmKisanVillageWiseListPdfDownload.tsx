'use client';

import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, SH, RelatedArticles, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-02-17T09:13:27+05:30';
const MODIFIED = '2026-03-19T22:46:55+05:30';

const RELATED = [
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List Guide' },
  { slug: 'PmKisanRejectedStatusReApplyGuide', title: 'Rejected Status Fix' },
  { slug: 'PmKisanMasterGuide2026', title: 'Master Guide' },
  { slug: 'PmKisanStateNodalOfficerList', title: 'Nodal Officer List' },
];

const FAQS_DATA = [
  {
    q: 'Mere gaon mein karib 500 kisan hain, sabka data download karne mein kitna time lagega?',
    a: 'Server load par depend karta hai. Dopahar 12-2 baje avoid karein. Subah 9-10 baje ya shaam 7 ke baad try karein. Bade gaon ka data load hone mein server ki speed ke hisaab se kuch seconds se lekar minute bhi lag sakte hain.',
  },
  {
    q: 'File save ho gayi par phone mein open nahi ho rahi, kya karun?',
    a: 'Koi bhi free PDF reader app (jaise Adobe Acrobat) install karein. Ek simple jugaad: File ko WhatsApp par kisi ko forward kar dein, wahan easily khul jayegi.',
  },
  {
    q: 'Sabke naam dikh rahe hain par mera nahi. Paisa milega ya nahi?',
    a: 'Pehle individual status check karein pmkisan.gov.in par. Zyadatar cases mein eKYC pending hoti hai, ya Patwari ne land verification nahi kiya. CSC jakar jaldi eKYC karwa lein.',
  },
  {
    q: 'Naam list mein hai par paisa nahi aaya — iska kya matlab?',
    a: 'List mein naam hona sirf pehla step hai — iska matlab aap eligible beneficiary ho. Paisa tabhi aata hai jab us kist ka FTO (Fund Transfer Order) generate ho kar process ho jaye. Apne status mein FTO ka stage dekhen — FTO generated ka matlab payment pipeline mein hai. Detail hamari FTO guide mein hai.',
  },
  {
    q: 'Gram Pradhan keh rahe hain unke paas purani list hai, kya unse le lun?',
    a: 'Nahi. Central website se hi latest list nikalna best hai, kyunki naye naam regularly add hote rehte hain aur purane galat naam hataaye jaate hain.',
  },
  {
    q: 'Mere padosi ke khet ka number same hai par uska naam list mein hai mera nahi, aisa kaise?',
    a: 'Zameen ka record alag-alag naam par (jaise pitaji ke naam) ho sakta hai. Apna Khasra number Bhulekh par check karein. Agar record same hai, toh Patwari se milkar record update karwayein.',
  },
  {
    q: 'Document download kar li, ab isme se apna naam kaise dhoondhun?',
    a: 'File khol kar upar right corner mein search () icon par tap karein aur apna naam type karein. Suggestions turant dikhne lagenge.',
  },
  {
    q: 'List mein sirf 10-12 naam hain, mere gaon mein toh 200 se zyada log hain?',
    a: 'Galat gaon select kar liya hoga. Dobara check karein: State, District, Block, aur Gaon ka naam exactly match hona chahiye. Kabhi-kabhi "Rampur Khurd" aur "Rampur Kalan" mein confusion ho jati hai.',
  },
  {
    q: 'Apne marne wale pitaji ki jagah apna naam is list mein dekh sakta hoon?',
    a: 'Haan, lekin sirf tab jab aapne CSC jakar "Succession Transfer" karwa liya ho. Death certificate, Khatauni, aur Aadhaar ke sath transfer karwayein, warna account freeze rehta hai.',
  },
];

const CountdownButton = memo(function CountdownButton({
  title,
  description,
  url,
  buttonText,
  variant = 'blue'
}: {
  title: string;
  description: string;
  url: string;
  buttonText: string;
  variant?: 'green' | 'blue';
}) {
  const [count, setCount] = useState<number | null>(null);
  const ready = count === 0;

  const handleClick = useCallback(() => {
    setCount(10);
  }, []);

  useEffect(() => {
    if (count === null || count === 0) return;

    const timer = setTimeout(() => {
      setCount((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  const handleCancel = useCallback(() => {
    setCount(null);
  }, []);

  const bgColor = variant === 'green'
    ? 'bg-green-600 hover:bg-green-700'
    : 'bg-blue-600 hover:bg-blue-700';

  return (
    <div className="my-6 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 shadow-lg">
      <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
        {description}
      </p>

      {ready ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`block text-center w-full px-6 py-4 ${bgColor} text-white text-sm font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]`}
          aria-label={`${buttonText}. Opens the official portal in a new tab.`}
        >
           Portal taiyar hai — yahan tap karke kholein
        </a>
      ) : count === null ? (
        <button
          onClick={handleClick}
          className={`w-full px-6 py-4 ${bgColor} text-white text-sm font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]`}
          aria-label={`${buttonText}. Link ready in 10 seconds after clicking.`}
        >
          {buttonText}
        </button>
      ) : (
        <div className="text-center py-4" role="status" aria-live="polite">
          <div className={`text-6xl font-black ${variant === 'green' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'} mb-3 animate-pulse`}>
            {count}
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-1 font-semibold">
            Official portal khulne wala hai...
          </p>
          <button
            onClick={handleCancel}
            className="mt-4 px-6 py-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-bold rounded-lg transition-colors"
            aria-label="Cancel countdown and close"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
});

const STATE_PORTALS = [
  { state: 'Andhra Pradesh', portal: 'meebhoomi.ap.gov.in', url: 'https://meebhoomi.ap.gov.in', note: 'Mee Bhoomi portal par land details.' },
  { state: 'Bihar', portal: 'biharbhumi.bihar.gov.in', url: 'https://biharbhumi.bihar.gov.in', note: 'Bhumi Jankari portal.' },
  { state: 'Chhattisgarh', portal: 'bhuiyan.cg.nic.in', url: 'https://bhuiyan.cg.nic.in', note: 'Bhuiyan portal se village data.' },
  { state: 'Gujarat', portal: 'anyror.gujarat.gov.in', url: 'https://anyror.gujarat.gov.in', note: 'Any ROR Gujarat portal.' },
  { state: 'Haryana', portal: 'jamabandi.nic.in', url: 'https://jamabandi.nic.in', note: 'Jamabandi Haryana portal.' },
  { state: 'Himachal Pradesh', portal: 'himbhulekh.hp.nic.in', url: 'https://himbhulekh.hp.nic.in', note: 'HP Bhulekh portal.' },
  { state: 'Jharkhand', portal: 'jharbhoomi.jharkhand.gov.in', url: 'https://jharbhoomi.jharkhand.gov.in', note: 'Jharbhoomi portal.' },
  { state: 'Karnataka', portal: 'bhoomi.karnataka.gov.in', url: 'https://bhoomi.karnataka.gov.in', note: 'Bhoomi RTC details.' },
  { state: 'Madhya Pradesh', portal: 'bhu-abhilekh.nic.in', url: 'https://bhu-abhilekh.nic.in', note: 'Bhu-Abhilekh village report.' },
  { state: 'Maharashtra', portal: 'bhulekh.mahabhumi.gov.in', url: 'https://bhulekh.mahabhumi.gov.in', note: '7/12 Utara par status link.' },
  { state: 'Odisha', portal: 'bhulekh.ori.nic.in', url: 'https://bhulekh.ori.nic.in', note: 'Odisha Bhulekh portal.' },
  { state: 'Punjab', portal: 'jamabandi.punjab.gov.in', url: 'https://jamabandi.punjab.gov.in', note: 'Punjab Jamabandi portal.' },
  { state: 'Rajasthan', portal: 'apnakhata.raj.nic.in', url: 'https://apnakhata.raj.nic.in', note: 'E-Dharti gaon wise report.' },
  { state: 'Tamil Nadu', portal: 'eservices.tnreg.gov.in', url: 'https://eservices.tnreg.gov.in', note: 'Tamil Nadu land records.' },
  { state: 'Telangana', portal: 'dharani.telangana.gov.in', url: 'https://dharani.telangana.gov.in', note: 'Dharani portal.' },
  { state: 'Uttar Pradesh', portal: 'upbhulekh.gov.in', url: 'https://upbhulekh.gov.in', note: 'Khatauni mein beneficiary status.' },
  { state: 'Uttarakhand', portal: 'bhulekh.uk.gov.in', url: 'https://bhulekh.uk.gov.in', note: 'UK Bhulekh portal.' },
  { state: 'West Bengal', portal: 'banglarbhumi.gov.in', url: 'https://banglarbhumi.gov.in', note: 'Banglar Bhumi WB portal.' },
];

export default function PmKisanVillageWiseListPdfDownload() {
  const [portalSearch, setPortalSearch] = useState('');

  const filteredPortals = useMemo(() =>
    STATE_PORTALS.filter(p =>
      p.state.toLowerCase().includes(portalSearch.toLowerCase()) ||
      p.portal.toLowerCase().includes(portalSearch.toLowerCase())
    ), [portalSearch]
  );

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
            Gram Roster PDF — Gaon Ka Pura Data Ek Click Mein
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
            pmkisan.gov.in par teen alag-alag tools hain aur log inhe aapas mein mila dete hain. Galat tool kholne par lagta hai "mera data nahi mil raha" — jabki aap galat jagah dekh rahe hote hain:
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
              <p className="text-xs text-[var(--color-text-muted)]">Gaon-level ka summary view — kitne farmers registered, kitne eKYC-complete, kitne paid. Numbers/aggregate ke liye hai; naam-wise poori list chahiye toh Beneficiary List hi use karein.</p>
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

          <div className="mb-4">
            <input
              type="text"
              placeholder="Search state or portal name..."
              value={portalSearch}
              onChange={(e) => setPortalSearch(e.target.value)}
              className="w-full p-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow"
              aria-label="Search state land record portal"
            />
          </div>

          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">State</th>
                  <th className="p-3 text-left">Portal</th>
                  <th className="p-3 text-left">Note</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPortals.map(({ state, portal, url, note }) => (
                  <tr key={state} className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-alt)] transition-colors">
                    <td className="p-3 font-medium text-xs text-[var(--color-text)]">{state}</td>
                    <td className="p-3 text-xs text-blue-600 dark:text-blue-400 font-bold">{portal}</td>
                    <td className="p-3 text-xs text-[var(--color-text-muted)]">{note}</td>
                    <td className="p-3">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors"
                      >
                        Visit ↗
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredPortals.length === 0 && (
              <p className="p-4 text-center text-sm text-[var(--color-text-muted)]">Koi result nahi mila.</p>
            )}
          </div>
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
              Agar manual copy-paste mein dikkat aa rahi hai, toh ilovepdf.com par "PDF to Excel" tool use karein. Note: If the PDF is scanned instead of text-based, OCR may be required before converting it into Excel. Dhyan rahe ki PDF mein personal data (jaise poora Aadhaar number) na ho.
            </p>
          </WB>
        </section>

        <section className="mb-8">
          <SH>Naam List Mein Hai, Par Paisa Nahi Aaya?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Ye sabse common confusion hai. List mein naam hona = aap beneficiary ho. Paisa aana = us kist ka <strong>FTO (Fund Transfer Order)</strong> generate aur process hona — ye do alag cheezein hain. Kist ka paisa states/banks ke through FTO ke zariye hi transfer hota hai, isliye naam hone ke bawajood payment ruk sakti hai agar:
          </p>
          <ul className="list-disc list-inside text-xs text-[var(--color-text-muted)] leading-relaxed mb-3 space-y-1">
            <li>eKYC ya bank/NPCI seeding pending hai (FTO bana hi nahi)</li>
            <li>FTO generate hua par bank level par payment fail ho gayi (account band, IFSC change, naam mismatch)</li>
          </ul>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Apna exact stage individual status mein dekhein, aur FTO statuses ka matlab + payment fail hone par kya karna hai — in dono ke liye alag guides hain: <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai" className="underline text-blue-600 dark:text-blue-400 font-medium">FTO Generated Ka Matlab</Link> aur <Link href="/articles/PmKisanPaymentFailedFix2026" className="underline text-blue-600 dark:text-blue-400 font-medium">Payment Failed Fix Guide</Link>.
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
          <SH>Zaroori Chetawani (Privacy & Fraud)</SH>
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-xl">
            <p className="text-sm text-red-800 dark:text-red-300 mb-2">
              <strong>Fraud Se Bacho:</strong>
            </p>
            <p className="text-xs text-red-700 dark:text-red-400">
              Some beneficiary information such as name and partially masked account details may be visible depending on the official portal. Koi bhi unknown link par click mat karein jo kahe ki "Yahan se complete data download karo". Hamesha sirf <strong>pmkisan.gov.in</strong> ka use karein.
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
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Seedhi Baat</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            PM Kisan ka ye roster ek powerful tool hai. Isse aap apne gaon ka audit khud kar sakte hain. Transparency badhti hai, fraud pakde jaate hain, aur asli kisanon ko unka haq milta hai.
          </p>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Aaj hi apne gaon ki ye list save karein aur apne Gram Pradhan ya Patwari ko bhi bhejein.
          </p>
        </div>

        <CountdownButton
          title="PM Kisan Official Portal"
          description="Beneficiary data access karne ke liye, ya saari jaankari ke liye government website par jaayein. 10 second baad portal khulega."
          url="https://pmkisan.gov.in/BeneficiaryList.aspx"
          buttonText="Yahan Click Karo → PM Kisan Portal Khulega"
          variant="blue"
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanBeneficiaryList2026', l: 'Beneficiary List' },
          { href: '/articles/PmKisanRejectedStatusReApplyGuide', l: 'Rejected Status Fix' },
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
