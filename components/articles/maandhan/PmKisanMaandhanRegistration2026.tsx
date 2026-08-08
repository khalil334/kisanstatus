import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { SI, StepList, IB, WB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { MaandhanArticleMeta } from '@/lib/maandhan-data';

const PUBLISHED = '2024-01-15T08:00:00+05:30';
const MODIFIED = '2026-08-08T09:00:00+05:30';

const RELATED_CARDS = [
  { 
    slug: 'pm-kisan-maandhan-eligibility-documents', 
    title: 'Eligibility & Documents', 
    desc: 'Detailed checklist of documents and exact eligibility rules.',
    emoji: '📄' 
  },
  { 
    slug: 'pm-kisan-maandhan-pension-calculator', 
    title: 'Pension Calculator', 
    desc: 'Calculate exact monthly contribution based on your current age.',
    emoji: '🧮' 
  },
  { 
    slug: 'pm-kisan-maandhan-withdrawal-refund-rules', 
    title: 'Withdrawal & Refund Rules', 
    desc: 'What happens to your money if you exit the scheme early?',
    emoji: '💸' 
  },
];

const FAQS_DATA = [
  {
    q: 'Maandhan Yojana mein apply karne ke liye umar kitni honi chahiye?',
    a: '18 se 40 saal — bas yahi window hai. Ek din bhi 40 cross kar liya toh system application accept nahi karega, isliye deri mat karein.',
  },
  {
    q: 'Kya Maandhan aur Atal Pension Yojana (APY) dono ek saath chal sakti hain?',
    a: 'Nahi, ye possible nahi hai. Niyam saaf hai — ek waqt mein sirf ek hi pension scheme active reh sakti hai, ya toh APY ya Maandhan.',
  },
  {
    q: 'Registration ke liye bank account zaroori hai?',
    a: 'Haan, aur ye sabse important step hai. Bank account Aadhaar se seeded (NPCI link) hona chahiye, tabhi monthly paisa katega aur pension seedha aayegi.',
  },
  {
    q: 'Agar kisan ki mrityu ho jaye toh pension kisko milegi?',
    a: 'Spouse ko option milta hai continue karne ka — chahe pension shuru hone se pehle dehant ho ya baad mein. Wo aage ka contribution dekar apna pension le sakte hain.',
  },
  {
    q: 'CSC center par registration karwane mein kitna kharcha aata hai?',
    a: 'Registration khud free hai. Bas pehla monthly contribution dena hota hai — ₹55 se ₹200 ke beech, umar ke hisaab se. Isse zyada koi maange toh samajh jayein kuch gadbad hai.',
  },
  {
    q: 'Kya pension direct bank account mein aata hai?',
    a: '60 saal poore hote hi ₹3,000 har mahine seedha aapke linked bank account mein DBT ke zariye pahunch jate hain.',
  },
];

export default function PmKisanMaandhanRegistration2026({ article }: { article: MaandhanArticleMeta }) {
  return (
    <>
      <Script id="maandhan-reg-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "PM Kisan Maandhan Registration 2026: ₹3000 Pension Apply Process",
              "description": "PM Kisan Maandhan mein register kaise karein — CSC aur online dono tarike, zaroori documents, umar-wise monthly contribution aur ₹3000 pension ki poori jankari.",
              "image": "https://kisanstatus.com/images/articles/maandhan/registration-hero.webp",
              "inLanguage": "hi-IN",
              "keywords": "PM Kisan Maandhan Registration, Kisan Pension Scheme, Maandhan Yojana, PM-KMY 2026, CSC Registration, Kisan Maandhan Documents, ₹3000 Pension, PM Kisan Maandhan 2026",
              "articleSection": "Agriculture & Pension Schemes",
              "wordCount": 1200,
              "author": { 
                "@type": "Organization", 
                "name": "KisanStatus Team", 
                "url": "https://kisanstatus.com/about" 
              },
              "publisher": { 
                "@type": "Organization", 
                "name": "KisanStatus", 
                "logo": { "@type": "ImageObject", "url": "https://kisanstatus.com/logo.png" } 
              },
              "datePublished": PUBLISHED,
              "dateModified": MODIFIED,
              "mainEntityOfPage": { "@type": "WebPage", "@id": `https://kisanstatus.com/maandhan/${article.slug}` }
            },
            {
              "@type": "FAQPage",
              "mainEntity": FAQS_DATA.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": { "@type": "Answer", "text": faq.a }
              }))
            }
          ]
        })}
      </Script>

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/maandhan" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Maandhan Yojana</Link>
            <span>/</span>
            <span className="text-white font-bold">Registration Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Kisan Pension Scheme</span>
          
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Maandhan Registration: ₹3000 Pension Apply Process
          </h1>
          
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 12 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/registration-hero.webp"
            alt="Farmer at CSC center filling pension registration form with operator assistance"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Budhape Ki Suraksha — Sirf ₹55 Mahina Se Shuru
          </p>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl">
          <p className="text-sm md:text-base text-blue-900 dark:text-blue-100 leading-relaxed font-medium">
            <strong>Seedha Jawab:</strong> Umar 18-40 saal, zameen 2 hectare se kam — bas itni si eligibility chahiye. Nazdiki CSC center jayein ya online portal se apply karein. Shuruwat ₹55 mahina se hoti hai, aur 60 ke baad ₹3,000 mahina pension milti hai.
          </p>
        </div>

        <section className="mb-8">
          <SH>Maandhan Yojana Aakhir Hai Kya?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Kheti mein mehnat toh sabko pata hai. Lekin jab umar dhalne lagti hai aur sharir pehle jaisa saath nahi deta, tab income ka zariya bhi kamzor pad jata hai. Isi wajah se sarkar ne chhote aur seemant kisanon ke liye ye pension scheme laayi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Khaas baat ye hai ki jeb se bohot kam kharch hota hai — baaki hissa central aur state government milkar bharti hai. Natija seedha hai: 60 ke baad har mahine ₹3,000 fixed pension khaate mein. Eligibility aur documents ki poori detail hamari <Link href="/maandhan/pm-kisan-maandhan-eligibility-documents" className="underline text-blue-600 dark:text-blue-400 font-medium">alag guide</Link> mein mil jayegi.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <p className="font-black text-green-800 dark:text-green-300 text-2xl mb-1">₹3,000</p>
              <p className="text-xs text-[var(--color-text-muted)]">Monthly Pension (60+ Age)</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-center">
              <p className="font-black text-blue-800 dark:text-blue-300 text-2xl mb-1">18-40</p>
              <p className="text-xs text-[var(--color-text-muted)]">Eligible Age Group</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl text-center">
              <p className="font-black text-amber-800 dark:text-amber-300 text-2xl mb-1">2 Hectare</p>
              <p className="text-xs text-[var(--color-text-muted)]">Max Land Limit</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Pehle 30 Second Ka Self-Check</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            CSC jaane se pehle teen baatein khud confirm karein: (1) umar 18–40 ke beech hai, (2) zameen 2 hectare se kam hai, (3) naam PM Kisan list mein hai. Teeno haan hain to hi aage badhein — full checklist, exclusions aur joint-family zameen wale case ki detail alag guide mein hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/pm-kisan-maandhan-eligibility-documents" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">✅ Poora Eligibility Self-Check + Exclusion List →</Link>
          </div>
        </section>

        <section className="mb-8">
          <SH>Bag Mein Kya Rakhna Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sirf chaar cheezein: Aadhaar (mobile linked), Aadhaar-seeded bank passbook, mobile phone aur Khatauni. Kaunsa document kis step pe lagega aur seeding kaise verify karein — wo document-wise guide mein hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/pm-kisan-maandhan-eligibility-documents" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">📄 Document-Wise Taiyari Ki Guide →</Link>
          </div>
        </section>

        <section className="mb-8">
          <SH>Registration Kaise Karein? (2 Tarike)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Do rasta hain is scheme mein judne ka — dono aasan hain, bas thodi savdhani zaroori hai.
          </p>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Tarika 1: CSC Center Se (Sabse Aasan)</h3>
          <StepList>
            <SI n={1}>Aadhaar, Bank Passbook aur Mobile lekar nazdiki CSC jayein. Subah 10-11 baje ka time best hai — dopahar tak rush badh jata hai aur server bhi slow ho jata hai.</SI>
            <SI n={2}>Operator ko saaf-saaf kahein: "Maandhan Yojana mein register karna hai."</SI>
            <SI n={3}>Operator Aadhaar number daal kar details verify karega. OTP nahi aa raha toh pehle mobile number Aadhaar se link karwa lein.</SI>
            <SI n={4}>Umar ke hisaab se monthly contribution batayega — jaise 18 saal ke liye ₹55, 30 saal ke liye ₹100.</SI>
            <SI n={5}>Pehla contribution UPI ya cash se pay karein aur receipt zaroor lein.</SI>
            <SI n={6}>Mobile par confirmation SMS aayega — screenshot lekar save kar lein, yahi aapka proof hai.</SI>
          </StepList>

          <WB>
            <strong>Zara Savdhan Rahein:</strong> Kuch operators "service charge" ya "processing fee" bata kar ₹100-200 extra maang lete hain. Registration free hai — sirf pehla monthly contribution dena hota hai, koi alag fee nahi. Koi zyada maange toh CSC helpline 1800-300-8380 par complaint karein.
          </WB>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/csc-registration-process.webp"
              alt="Farmer submitting documents at CSC counter for pension scheme registration"
              width={800}
              height={450}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              CSC Center Par Registration — Sirf 10 Minute Ka Kaam
            </p>
          </div>

          <h3 className="font-black text-[var(--color-text)] text-base mb-3 mt-6">Tarika 2: Online Portal / App Se</h3>
          <StepList>
            <SI n={1}>Google Play Store se "PM Kisan Maandhan App" download karein.</SI>
            <SI n={2}>App khol kar "New Registration" par click karein. App nahi mile toh pmkisan.gov.in par jayein.</SI>
            <SI n={3}>Aadhaar number daalein aur OTP verify karein. OTP nahi aa raha toh mobile number pehle link karein.</SI>
            <SI n={4}>Zameen ki details (Khasra/Khatauni number) aur bank account ki jankari bharein.</SI>
            <SI n={5}>Monthly contribution select karke UPI se payment karein.</SI>
            <SI n={6}>Form submit karein — confirmation SMS aayega, isko save kar lein.</SI>
          </StepList>

          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/online-app-registration.webp"
              alt="Mobile app interface showing step-by-step online registration process"
              width={800}
              height={450}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Ghar Baithe Mobile App Se Registration
            </p>
          </div>
        </section>

        <section className="mb-8">
          <SH>Kitna Dena Hoga? (Sirf Aapki Umar Par Depend)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Registration ke waqt operator jo amount bataye, use khud verify kar sakte hain — 18 saal pe ₹55/mahina se lekar 40 saal pe ₹200/mahina tak. Har single age ka official figure aur total-till-60 ka hisaab in do pages par hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/pm-kisan-maandhan-age-wise-contribution-chart-2026" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">📊 Age-Wise Chart (Har Umar Ka Figure) →</Link>
            <Link href="/maandhan/pm-kisan-maandhan-pension-calculator" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">🧮 Pension Calculator Guide →</Link>
          </div>
        </section>

        <section className="mb-8">
          <SH>Register Karne Se Pehle Ek Aakhri Sawal</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar aap soch rahe hain ki Maandhan lein ya Atal Pension Yojana — register karne se PEHLE comparison padh lein, kyunki ek waqt mein ek hi pension scheme active reh sakti hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/pm-kisan-maandhan-vs-atal-pension-yojana" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">⚖️ PMKMY vs APY: Kaunsi Behtar Hai? →</Link>
          </div>
        </section>

        <section className="mb-8">
          <SH>Registration Mein Dikkat Aaye Toh Kahan Karein Complaint?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Application pending reh jaye ya koi technical dikkat aa jaye, toh ghabrane wali baat nahi. Har state ke liye sarkar ne alag grievance mechanism banaya hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Official PM Kisan portal par apne state ke nodal officer ki updated contact details mil jayengi. Complaint karte waqt Registration Number aur Application Date zaroor mention karein taaki resolution jaldi ho.
          </p>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
            <p className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-2">🔗 Official Grievance Links:</p>
            <ul className="list-disc list-inside text-xs text-blue-800 dark:text-blue-300 space-y-1">
              <li><Link href="https://pmkisan.gov.in/Grievance.aspx" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">PM Kisan Grievance Portal</Link></li>
              <li><Link href="https://pmkisan.gov.in/NodalOfficers.aspx" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">State-wise Nodal Officers List</Link></li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <SH>Common Mistakes</SH>
          
          <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
            <Image
              src="/images/articles/maandhan/bank-passbook-seeding.webp"
              alt="Bank passbook showing NPCI seeding stamp for direct benefit transfer"
              width={800}
              height={450}
              className="w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
              Bank Account NPCI Seeding Zaroori Hai
            </p>
          </div>

          <div className="space-y-3">
            {[
              { 
                mistake: 'Mobile Number Aadhaar Se Link Nahi', 
                fix: 'Link nahi hoga toh OTP aayega hi nahi. Pehle UIDAI center jakar mobile number update karwa lein.' 
              },
              { 
                mistake: 'Bank Account NPCI Seeded Nahi', 
                fix: 'Branch jakar DBT ke liye Aadhaar link karwayein, warna pension transfer ruk sakta hai.' 
              },
              { 
                mistake: 'Zameen 2 Hectare Se Zyada', 
                fix: 'Khatauni pehle check kar lein — limit cross hone par system apply nahi hone dega.' 
              },
            ].map(({ mistake, fix }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">❌ {mistake}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>✅ Fix:</strong> {fix}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            FAQs
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="Maandhan Registration FAQ" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Seedhi Baat</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
            Umar 40 se kam hai aur zameen 2 hectare ke andar hai, toh soch-vichar mein zyada waqt mat lagayein. Jitni deri karenge, umar utni badhegi aur monthly contribution bhi. Documents ready karein aur is hafte hi apply kar lein.
          </p>
        </div>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Official Portal"
          guide="Official Website"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RELATED_CARDS.map((card) => (
              <Link 
                key={card.slug} 
                href={`/maandhan/${card.slug}`}
                className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg hover:border-green-500 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{card.emoji}</div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-green-600 transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                  {card.desc}
                </p>
                <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                  Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/maandhan/pm-kisan-maandhan-eligibility-documents', l: '📄 Eligibility' },
          { href: '/maandhan/pm-kisan-maandhan-pension-calculator', l: '🧮 Calculator' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
