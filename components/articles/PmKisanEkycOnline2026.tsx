import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { SI, StepList, WB, DB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-03-15T08:00:00+05:30';
const MODIFIED = '2026-08-08T21:45:00+05:30';

const RELATED_CARDS = [
  { 
    slug: 'PmKisan24viKist2026', 
    title: 'PM Kisan 24vi Kist Status', 
    desc: 'Apna ₹2000 installment status aur eKYC errors abhi check karein.',
    emoji: '📅' 
  },
  { 
    slug: 'PmKisanBeneficiaryList2026', 
    title: 'PM Kisan Beneficiary List', 
    desc: 'Apna naam naye list mein dhundhein aur status verify karein.',
    emoji: '📋' 
  },
  { 
    slug: 'KisanCreditCardOnlineApply2026', 
    title: 'Kisan Credit Card (KCC) Guide', 
    desc: '4% byaj dar par ₹5 lakh tak ka agriculture loan kaise lein.',
    emoji: '💳' 
  },
];

const FAQS_DATA = [
  {
    q: 'PM Kisan eKYC bina mobile number ke kaise karein?',
    a: 'Agar Aadhaar mein mobile number link nahi hai, toh online OTP wala tarika kaam nahi karega. Aapko apne nazdeeki CSC (Common Service Centre) jaana hoga. Wahan fingerprint (biometric) scan karke eKYC ho jayegi. Yeh process bilkul free hai.',
  },
  {
    q: 'PM Kisan Face Authentication kya hai aur kaise karein?',
    a: 'Yeh UIDAI ka naya surakshit tarika hai. PM Kisan mobile app download karein, "Face Auth" option chunein, aur camera ke saamne apna chehra scan karein. Yeh tab kaam karta hai jab aapka mobile number Aadhaar se linked ho.',
  },
  {
    q: 'CSC par PM Kisan eKYC ke liye kitna paisa dena chahiye?',
    a: 'Bilkul ZERO. Government ne ise free service declare kiya hai. Agar koi operator ₹10, ₹20 ya ₹50 maangta hai, toh woh galat hai. Turant 1800-1214-060 par complaint karein.',
  },
  {
    q: 'Mera naam Aadhaar mein "Sunita Devi" hai aur PM Kisan mein "Sunita" — kya eKYC hogi?',
    a: 'Nahi. System exact string match karta hai. "Devi" likha hai ya nahi, ek space ka farak bhi "Demographic Mismatch" error de dega. Pehle PM Kisan portal par ya Aadhaar mein naam correction karwayein, phir eKYC karein.',
  },
  {
    q: 'Kisan bedridden (bimaar) hai, ghar par eKYC kaise hogi?',
    a: 'Aise cases mein, bank ya CSC operator "Doorstep Banking" ya "Home Visit" service provide kar sakta hai. Aapko apne nazdeeki bank branch ya CSC ko call karke special request karni hogi. Family member ke through online nahi ho sakta.',
  },
  {
    q: 'eKYC karne ke baad bhi "eKYC: NO" dikh raha hai, kya karein?',
    a: 'Server sync mein time lag sakta hai — kuch din wait karein. Uske baad bhi "NO" dikhe toh CSC par dobara verify karwayein aur receipt sambhal kar rakhein. Dhyan rahe: eKYC aur bank ki NPCI seeding do alag cheezein hain — eKYC YES hone ke baad bhi paisa tabhi aata hai jab NPCI seeding bhi ho.',
  },
  {
    q: 'eKYC aur NPCI (Aadhaar seeding) mein kya farak hai?',
    a: 'eKYC aapki pehchaan verify karti hai — ki aap wahi kisan hain. NPCI seeding aapke bank account ko Aadhaar se DBT ke liye jodti hai — ki paisa kis account mein jayega. Dono alag jagah hote hain: eKYC PM Kisan portal/CSC par, NPCI seeding aapke bank branch par. Kist ke liye DONO complete hone chahiye.',
  },
  {
    q: 'Error Code 104 ya 108 aa raha hai, iska matlab kya hai?',
    a: 'Error 104 ka matlab hai "Invalid Aadhaar Number" (dobara check karein). Error 108 ka matlab hai "Mobile Number Not Linked with Aadhaar". Iska ek hi hal hai: CSC jaakar biometric se karein.',
  },
  {
    q: 'Kya main apne pitaji ke liye unke phone se eKYC kar sakta hoon?',
    a: 'Haan, agar unka mobile number unke Aadhaar se linked hai, toh aap unke phone par OTP mangwa kar eKYC complete kar sakte hain. Lekin bank account beneficiary ke naam par hi hona chahiye.',
  },
  {
    q: 'OTP based eKYC aur biometric eKYC mein kya farak hai?',
    a: 'OTP based eKYC ghar baithe, phone se hota hai — bas Aadhaar se linked mobile chahiye. Biometric CSC jaakar fingerprint se hota hai, un logon ke liye jinka mobile number Aadhaar se link nahi hai ya unke paas smartphone nahi hai. Dono equally valid hain, result same hota hai.',
  },
  {
    q: 'eKYC ek baar ho gayi, kya har saal dobara karni padegi?',
    a: 'Nahi, ek baar successful ho gayi toh normally dobara nahi karni padti. System sirf tab dobara maangta hai jab aapne mobile number, naam, ya bank account mein koi badlaav kiya ho — routine mein har saal repeat karne ki zaroorat nahi.',
  },
  {
    q: 'CSC par eKYC ke liye internet ya smartphone chahiye kya?',
    a: 'Nahi, ye CSC operator ki responsibility hai. Aapko sirf Aadhaar card le jaana hai — operator apne system aur biometric machine se kaam kar dega. Aapke paas smartphone ya internet na ho, tab bhi ho jaayegi.',
  },
];

export default function PmKisanEkycOnline2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      <Script id="pmkisan-ekyc-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "PM Kisan eKYC 2026: OTP Based eKYC, Biometric aur Face Auth Puri Jankari",
              "description": "PM Kisan eKYC 2026 online karein. OTP based eKYC, CSC biometric ya face authentication se 2 minute mein verify karein. Error codes ka solution aur free process jaane.",
              "author": { "@type": "Organization", "name": "KisanStatus Team", "url": "https://kisanstatus.com/about" },
              "publisher": { "@type": "Organization", "name": "KisanStatus", "logo": { "@type": "ImageObject", "url": "https://kisanstatus.com/logo.png" } },
              "datePublished": PUBLISHED,
              "dateModified": MODIFIED,
              "mainEntityOfPage": { "@type": "WebPage", "@id": `https://kisanstatus.com/articles/${article.slug || 'pm-kisan-ekyc-2026'}` }
            },
            {
              "@type": "FAQPage",
              "mainEntity": FAQS_DATA.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": { "@type": "Answer", "text": faq.a }
              }))
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kisanstatus.com/" },
                { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://kisanstatus.com/articles" },
                { "@type": "ListItem", "position": 3, "name": "PM Kisan eKYC 2026", "item": `https://kisanstatus.com/articles/${article.slug || 'pm-kisan-ekyc-2026'}` }
              ]
            }
          ]
        })}
      </Script>

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">eKYC Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">🔐 eKYC Verification</span>
          
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan eKYC 2026: OTP Based eKYC, Biometric aur Face Auth Puri Jankari
          </h1>
          
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 14 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl">
          <p className="text-sm md:text-base text-blue-900 dark:text-blue-100 leading-relaxed font-medium">
            <strong>Seedha Jawab:</strong> PM Kisan eKYC 2026 ab 100% mandatory hai. Ise aap ghar baithe <strong>pmkisan.gov.in</strong> par OTP based eKYC se, PM Kisan App par Face Authentication se, ya nazdeeki CSC centre par free biometric (fingerprint) se complete kar sakte hain. Bina iske aapka agla ₹2000 ka installment seedha block ho jayega.
          </p>
        </div>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/pm-kisan-ekyc-online-2026/otp-vs-biometric.webp'}
            alt="PM Kisan eKYC OTP vs biometric comparison — dono tarike samjho"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            OTP Ya Biometric — Kaunsa Tarika Aapke Liye Sahi Hai?
          </p>
        </div>

        <div className="my-6 p-5 bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-700 border-l-[6px] rounded-xl">
          <h2 className="text-base font-black text-red-800 dark:text-red-300 mb-2">⚠️ Bina eKYC Ke Kist Ruk Jayegi (Ground Reality)</h2>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed mb-3">
            Suno bhai, yeh koi optional ya "baad mein kar lenge" wali cheez nahi hai. Government ne DBT (Direct Benefit Transfer) rules ke under 2023 se ise sakhti se compulsory kar diya hai. Ab system automatically un accounts ko filter kar deta hai jinki eKYC pending hai.
          </p>
          <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed">
            Par ghabrane ki baat nahi hai. Process itna aasaan hai ki ghar baithe phone se 2 minute mein ho jata hai. Agar phone mein dikkat hai, toh nazdeeki CSC chale jao. Dono tarikon par sarkar ki taraf se koi charge nahi hai.
          </p>
        </div>

        <section className="mb-8">
          <SH>PM Kisan eKYC Asal Mein Kya Hai aur Kyun Zaroori Hai?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Simple shabdon mein samjhein — sarkar yeh confirm karna chahti hai ki jo insaan PM Kisan Samman Nidhi ka paisa le raha hai, woh sach mein wahi kisan hai jiske naam par zameen hai. Pehle ke saalon mein bahut se fake ya duplicate beneficiaries ne system ka faayda uthaya tha.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            eKYC (Electronic Know Your Customer) ka matlab hai aapki Aadhaar details ko PM Kisan database se live match karna. Jab aap OTP dalte hain ya fingerprint scan karte hain, toh UIDAI (Aadhaar wale) sarkar ko turant "Haan" ya "Na" mein jawab dete hain.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            <strong>Ek baar ka kaam:</strong> Ek baar eKYC successful ho gayi, toh aapko baar-baar nahi karni padti. Haan, agar aapne haal hi mein apna mobile number badla hai, naam mein sudhaar karaya hai, ya naya bank account khulwaya hai, toh system dobara verification maang sakta hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>eKYC Shuru Karne Se Pehle Yeh 3 Cheezein Zaroor Check Karein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bina taiyari ke form bharne se sirf "Error" aata hai aur time waste hota hai. Jaane se pehle in 3 cheezon ki guarantee kar lein:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
              <p className="font-black text-green-800 dark:text-green-300 text-sm mb-1">1. Mobile Linking</p>
              <p className="text-xs text-[var(--color-text-muted)]">Aadhaar card mein wahi mobile number registered hona chahiye jo abhi aapke paas hai aur chal raha hai. Number badal gaya ho toh pehle nazdeeki Aadhaar Seva Kendra jaakar update karwa lein, tabhi OTP based tarika kaam karega.</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-1">2. Naam ka Match</p>
              <p className="text-xs text-[var(--color-text-muted)]">Bank passbook, Aadhaar card aur PM Kisan portal par naam ki spelling bilkul exact same honi chahiye.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">3. NPCI Seeding</p>
              <p className="text-xs text-[var(--color-text-muted)]">Aapka bank account Aadhaar se DBT (NPCI) ke liye link hona chahiye, warna eKYC ke baad bhi paisa nahi aayega.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Tarika 1: OTP Based eKYC (Sabse Fast aur Ghar Baithe)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Jab log <strong>"otp based ekyc"</strong> search karte hain, unka matlab yahi tarika hota hai — sirf Aadhaar-linked mobile se ghar baithe verification. Agar aapka mobile number Aadhaar card se pehle se linked hai, toh yeh sabse best, surakshit aur tezi se kaam karne wala option hai. Kahin jaane ki zaroorat nahi.
          </p>
          <StepList>
            <SI n={1}>Apne phone ya computer par official portal <strong>pmkisan.gov.in</strong> kholo.</SI>
            <SI n={2}>Right side mein "Farmers Corner" section mein "eKYC" option par click karo.</SI>
            <SI n={3}>Apna 12-digit Aadhaar number bina kisi galti ke dalo aur "Search" button dabao.</SI>
            <SI n={4}>Aapke registered mobile number par ek 6-digit ka OTP aayega. Use box mein enter karo.</SI>
            <SI n={5}>"Submit" dabao. Screen par hara rang ka "eKYC Successful" message dikhega! ✅</SI>
          </StepList>
          <WB>
            <strong>Pro Tip:</strong> OTP sirf 5 minute ke liye valid hota hai. Jaldi dalo. Agar network ki wajah se na aaye, toh "Resend OTP" par click karo, lekin 2-3 baar se zyada try mat karna warna number temporary block ho sakta hai.
          </WB>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-ekyc-online-2026/csc-biometric-process.webp"
            alt="CSC par PM Kisan eKYC biometric fingerprint process — step by step"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            CSC Par Fingerprint Se eKYC — Jab OTP Na Aaye
          </p>
        </div>

        <section className="mb-8">
          <SH>Tarika 2: CSC Par Biometric (Fingerprint) Se</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            OTP nahi aa raha? Phone linked nahi hai? Ya aapke paas smartphone hi nahi hai? Koi baat nahi bhai. Iska permanent hal aapke nazdeeki CSC (Common Service Centre) par maujood hai.
          </p>
          <StepList>
            <SI n={1}>Apne gaon ya shehar ke nazdeeki CSC centre jao.</SI>
            <SI n={2}>Aadhaar card ki original ya ek clear photocopy saath le jao.</SI>
            <SI n={3}>Operator ko saaf shabdon mein bolo — "Mujhe PM Kisan eKYC karna hai".</SI>
            <SI n={4}>Woh aapse machine par apna fingerprint (anguthe ya ungli ka nishaan) scan karne ko kahenge.</SI>
            <SI n={5}>Scan successful hote hi confirmation message aayega. Transaction ki chhoti si receipt zaroor le lo.</SI>
          </StepList>
          <DB>
            <strong>Chetawani (Warning):</strong> Yeh service sarkar ki taraf se bilkul FREE (shulk mukt) hai. Koi bhi operator ₹10, ₹20 ya ₹50 maange, toh woh galat hai. Seedha 1800-1214-060 (CSC Helpline) par call karke us operator ki complaint karo. Complaint karte waqt CSC centre ka naam/location aur date batayein — tabhi action possible hota hai.
          </DB>
        </section>

        <section className="mb-8">
          <SH>Tarika 3: Face Authentication (PM Kisan Mobile App Se)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Technology ab aur aasaan ho gayi hai. Agar aapke paas smartphone hai, toh aap bina OTP ke bhi "Face Auth" ke zariye eKYC kar sakte hain. Yeh UIDAI ka naya surakshit feature hai.
          </p>
          <StepList>
            <SI n={1}>Play Store ya App Store se official "PM Kisan" mobile app download karo.</SI>
            <SI n={2}>App kholo aur "Face Auth" option ko select karo.</SI>
            <SI n={3}>Apna Aadhaar number dalo. App aapke phone ke camera ko activate karegi.</SI>
            <SI n={4}>Screen par dikhaye gaye instructions ke mutabik apna chehra (face) scan karo (jaise aankhein jhapakna ya sir ghumaana).</SI>
            <SI n={5}>Match successful hote hi eKYC complete ho jayegi.</SI>
          </StepList>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            <strong>Note:</strong> Face authentication ke liye bhi aapka mobile number Aadhaar se linked hona zaroori hai, lekin yeh OTP ke mukable zyada fast aur reliable hai, khaaskar un kisanon ke liye jinke haath kaam karne ki wajah se fingerprint clear nahi aata.
          </p>
        </section>

        <section className="mb-8">
          <SH>eKYC vs NPCI Seeding — Do Alag Cheezein (Sabse Bada Confusion)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bahut se kisan eKYC karwa kar sochte hain ki ab kaam khatam — aur phir bhi kist nahi aati. Wajah: <strong>eKYC aur NPCI/DBT seeding do bilkul alag requirements hain</strong>, aur kist ke liye dono zaroori hain. Farak yaad rakhne ka aasaan tarika:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left"></th>
                  <th className="p-3 text-left">eKYC</th>
                  <th className="p-3 text-left">NPCI / DBT Seeding</th>
                </tr>
              </thead>
              <tbody className="text-xs text-[var(--color-text)]">
                <tr className="bg-[var(--color-card)]">
                  <td className="p-3 border-b border-[var(--color-border)] font-bold">Kya verify hota hai</td>
                  <td className="p-3 border-b border-[var(--color-border)]">Aapki pehchaan — "paisa lene wala wahi kisan hai"</td>
                  <td className="p-3 border-b border-[var(--color-border)]">Aapka bank account — "paisa kis account mein jayega"</td>
                </tr>
                <tr className="bg-[var(--color-bg-alt)]">
                  <td className="p-3 border-b border-[var(--color-border)] font-bold">Kahan hota hai</td>
                  <td className="p-3 border-b border-[var(--color-border)]">pmkisan.gov.in / PM Kisan app / CSC</td>
                  <td className="p-3 border-b border-[var(--color-border)]">Aapki bank branch (ya India Post Payments Bank)</td>
                </tr>
                <tr className="bg-[var(--color-card)]">
                  <td className="p-3 border-b border-[var(--color-border)] font-bold">Fail hone par kya dikhta hai</td>
                  <td className="p-3 border-b border-[var(--color-border)]">Status mein "eKYC: NO"</td>
                  <td className="p-3 border-b border-[var(--color-border)]">eKYC YES, phir bhi payment fail / "Aadhaar not seeded" type reason</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Matlab: eKYC YES ho gayi aur phir bhi paisa nahi aa raha, toh agla checkpoint bank hai — branch jaakar bolein "mera account NPCI/DBT ke liye Aadhaar se seed karwana hai". Ek account hi Aadhaar se DBT-seeded ho sakta hai; naya account khulwaya hai toh seeding wahan shift karwani padti hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>OTP Based Ya Biometric — Konsa Tarika Chunein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
            Teeno tarike government ki nazar mein barabar valid hain — koi ek "asli" ya "behtar" nahi hai, sirf situation ke hisaab se sahi option badalta hai.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[var(--color-border)] shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left">Aapki Sthiti</th>
                  <th className="p-3 text-left">Best Tarika</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mobile Aadhaar se linked hai, smartphone bhi hai', 'OTP Based eKYC (sabse fast)'],
                  ['Mobile linked nahi hai ya number band ho gaya', 'CSC Biometric'],
                  ['Smartphone hai lekin OTP baar-baar fail ho raha hai', 'Face Authentication (App)'],
                  ['Umar zyada hai, fingerprint ghisa hua hai', 'Face Authentication ya CSC operator se madad'],
                ].map(([situation, method], i) => (
                  <tr key={situation} className={i % 2 === 0 ? 'bg-[var(--color-card)]' : 'bg-[var(--color-bg-alt)]'}>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs text-[var(--color-text)]">{situation}</td>
                    <td className="p-3 border-b border-[var(--color-border)] text-xs font-bold text-green-700 dark:text-green-400">{method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <SH>Khaas Paristhitiyan: In Cases Mein Kya Karein?</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Har kisan ki sthiti ek jaisi nahi hoti. Yahan kuch aise sawalon ke jawab hain jo aksar ignore kar diye jaate hain:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <h4 className="font-bold text-[var(--color-text)] text-sm mb-2">👴 Kisan Bedridden (Bimaar) Hai, Ghar Par Kaise Hoga?</h4>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Aise cases mein, family member ke phone se online eKYC nahi ho sakti (kyunki face/fingerprint match nahi hoga). Aapko apne nazdeeki bank branch ya CSC ko call karke "Doorstep Banking" ya "Home Visit" ki special request karni hogi. Bahut se nationalised banks ab yeh suvidha dete hain.
              </p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <h4 className="font-bold text-[var(--color-text)] text-sm mb-2">👰 Shaadi Ke Baad Naam Badal Gaya Hai</h4>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Agar PM Kisan mein purana naam (maike ka) hai aur Aadhaar mein naya naam (sasural ka), toh eKYC fail ho jayegi. Pehle apne patwari/tehsil office jaakar PM Kisan portal par naam update (mutation) karwayein, uske baad hi eKYC ka try karein.
              </p>
            </div>
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <h4 className="font-bold text-[var(--color-text)] text-sm mb-2">👨‍🌾 Beneficiary Ki Mrityu Ho Chuki Hai</h4>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Turant apne nazdeeki Jan Seva Kendra ya Tehsil office jaakar "Beneficiary Death Status" update karein. Iske baad, legal heir (uttaradhikari) ko naye sire se application karni hogi. Purane account par eKYC karne ki koshish na karein, yeh fraud ki shreni mein aa sakta hai.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Top 5 eKYC Error Codes aur Unka Pakka Ilaj (Fix)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Jab bhi system kuch galat paata hai, woh ek error code deta hai. In codes ka matlab samajhna hi samasya ka aadha hal hai.
          </p>
          <div className="space-y-3">
            {[
              { err: 'Error 108: Mobile Not Linked', fix: 'Iska seedha sa matlab hai: Aadhaar mein mobile number register nahi hai. Online kuch nahi hoga. Seedha CSC jao aur biometric se karwao.' },
              { err: 'Demographic Mismatch (Naam ka farak)', fix: 'Aadhaar aur PM Kisan portal par naam EXACT same hona chahiye. "Kumar" likha hai ya nahi, ek space ka farak bhi reject karta hai. Pehle naam sudharo.' },
              { err: 'Server Down / Page Nahi Khulta', fix: 'Yeh aapki galti nahi hai. Din ke 11 baje se 4 baje tak server par load sabse zyada hota hai. Subah 6:00 AM se 8:00 AM best time hai try karne ka.' },
              { err: 'Invalid Aadhaar Number', fix: 'Dobara check karein ki aapne 12 digit sahi dale hain. Kabhi-kabhi space ya typing mistake ho jati hai.' },
              { err: 'eKYC Done, Par Status "NO" Dikha Raha Hai', fix: 'Server sync mein time lagta hai — kuch din wait karein. Phir bhi "NO" ho toh CSC receipt ke saath dobara verify karwayein. Aur yaad rakhein: eKYC YES hone par bhi paisa NPCI seeding ke bina nahi aata — wo bank ka alag kaam hai (upar wala section padhein).' },
            ].map(({ err, fix }) => (
              <div key={err} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
                <div className="bg-red-50 dark:bg-red-900/20 border-b border-red-100 dark:border-red-800 px-4 py-2.5">
                  <p className="font-black text-red-800 dark:text-red-300 text-sm">❌ {err}</p>
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
        </section>

        <section className="mb-8">
          <SH>Status Kaise Check Karein? (100% Confirmation)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            eKYC ho gayi ya nahi — andaze mein na rahein, khud check karein. Yeh bahut easy hai.
          </p>
          <StepList>
            <SI n={1}>pmkisan.gov.in par jao aur "Beneficiary Status" option par click karo.</SI>
            <SI n={2}>Apna Aadhaar number dalo aur "Get Data" button dabao.</SI>
            <SI n={3}>Neeche ek table khulega. Usme "eKYC Status" ka column dhundo.</SI>
          </StepList>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center">
              <p className="font-black text-green-800 dark:text-green-300 text-sm">✅ eKYC: YES</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Sab theek hai, agla paisa aayega.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-center">
              <p className="font-black text-red-800 dark:text-red-300 text-sm">❌ eKYC: NO</p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Ruko mat, upar diye tarike se abhi complete karo.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Sab Try Kar Liya, Phir Bhi Nahi Ho Rahi? (Escalation)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            OTP fail, CSC par bhi issue, error samajh nahi aa raha — toh is order mein aage badhein:
          </p>
          <StepList>
            <SI n={1}>PM Kisan helpline <strong>155261</strong> ya <strong>011-24300606</strong> par call karke apna Aadhaar/registration number dekar issue register karwayein aur complaint/ticket number note karein.</SI>
            <SI n={2}>pmkisan.gov.in ke Grievance section mein online complaint file karein — wahan status bhi track hota hai.</SI>
            <SI n={3}>Phir bhi hal na nikle toh apne state ke nodal officer se contact karein — state-wise list aur process hamari <Link href="/articles/PmKisanStateNodalOfficerList" className="underline text-blue-600 dark:text-blue-400 font-medium">Nodal Officer Guide</Link> mein hai.</SI>
          </StepList>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal (FAQs)
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan eKYC FAQ 2026" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Seedhi Baat (Bottom Line)</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Aaj hi kar lo bhai. Kal ka wait mat karo. Phone se 2 minute lagte hain. Phone na ho toh CSC free hai. Bahana mat banao — yeh ₹6000 saalana aapka haq hai, bas ek baar verify karna hai taake sarkar ka system aapko rok na sake. Agar koi dikkat aaye, toh upar diye gaye error fixes ko dhyan se padhein.
          </p>
        </div>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Portal — eKYC Karein"
          guide="Abhi Start Karo"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          icon="🔐"
          title="Apna Benefit Calculate Karo"
          desc="Kitni kist mili, kitni pending — apna hisaab jaano"
          primaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Calculator →' }}
          secondaryCta={{ href: '/calculator', label: '🧮 Sab Utilities' }}
        />

        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Aapke Liye Zaroori Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RELATED_CARDS.map((card) => (
              <Link 
                key={card.slug} 
                href={`/articles/${card.slug}`}
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
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
          { href: '/articles/PmKisan24viKist2026', l: '📅 24vi Kist' },
          { href: '/articles/PmKisanBeneficiaryList2026', l: '📋 Beneficiary List' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
