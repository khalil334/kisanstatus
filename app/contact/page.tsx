import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, AUTHOR_NAME, AUTHOR_URL, DEFAULT_OG_IMAGE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `Contact & Support`,
  description: `KisanStatus se sampark karein — feedback ya content correction ke liye email, aur PM Kisan helpline 155261 se shikayat darj karne ka sahi rasta.`,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
  alternates: { canonical: `${SITE_URL}/contact` },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Contact Us — ${SITE_NAME} | Sampark Karein`,
    description: `KisanStatus se sampark karein. Website feedback, content correction, ya kisi bhi sawaal ke liye humein email karein.`,
    type: 'website',
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    locale: 'hi_IN',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} - Contact Us`, type: 'image/webp' }],
  },
  twitter: {
    card: 'summary',
    title: `Contact Us — ${SITE_NAME}`,
    description: `KisanStatus se sampark karein. Website feedback, content correction, ya kisi bhi sawaal ke liye humein email karein.`,
  },
};

const OFFICIAL_CONTACTS = [
  { label: 'Helpline 1', value: '155261', href: 'tel:155261' },
  { label: 'Helpline 2', value: '011-24300606', href: 'tel:01124300606' },
  { label: 'Official Email', value: 'pmkisan-ict@gov.in', href: 'mailto:pmkisan-ict@gov.in' },
  { label: 'Official Portal', value: 'pmkisan.gov.in', href: 'https://pmkisan.gov.in' },
];

const HELP_ITEMS = [
  { text: 'Website content mein koi galti ya sudhaar suggest karna ho', canHelp: true },
  { text: 'Naye article ya topic ka suggestion dena ho', canHelp: true },
  { text: 'Website se juda technical feedback ya bug report karna ho', canHelp: true },
  { text: 'Collaboration ya partnership ke liye baat karni ho', canHelp: true },
  { text: 'PM Kisan payment ya account se judi samasyayein (iske liye official helpline par call karein)', canHelp: false },
  { text: 'Aadhaar ya bank account update karna ho (iske liye nazdeeki Agriculture office ya CSC centre jaayein)', canHelp: false },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact & Support', item: `${SITE_URL}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-[var(--color-primary)] py-10">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white font-bold">Contact & Support</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">
            Contact & Support
          </h1>
          <p className="text-green-200 text-sm">Koi sawaal, feedback ya suggestion hai? Hum aapki madad ke liye yahan hain.</p>
        </div>
      </div>

      <div className="container-site max-w-3xl py-10">

        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-700 rounded-xl mb-8 text-sm text-amber-900 dark:text-amber-300">
          <strong>Zaruri Suchna:</strong> Ek baat pehle hi bata doon — {SITE_NAME} koi sarkari daftar nahi hai, yeh meri apni site hai.
          Payment, status ya koi bhi asli kaam ho to seedha{' '}
          <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-amber-700 dark:hover:text-amber-200">pmkisan.gov.in ↗</a>{' '}
          ya helpline <strong>155261</strong> ka hi upyog karein.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-black text-[var(--color-text)] mb-3 flex items-center gap-2">
              Email Karein
            </h2>
            <p className="text-sm text-[var(--color-text-muted)] mb-4 leading-relaxed">
              Koi galti dikhe, koi sujhav ho, ya kisi topic par article chahiye — email kar dein.
              Main khud padhta hoon aur aam taur par 1–2 din mein jawab de deta hoon; kabhi kheti-baadi
              mein busy raha to thoda time lag sakta hai, bura na maanein.
            </p>
            <p className="text-sm text-[var(--color-text-muted)] mb-4 leading-relaxed">
              Waise ho sakta hai aapke sawal ka jawab pehle se likha ho — ek baar mere{' '}
              <Link href="/articles" className="text-[var(--color-primary)] font-bold underline hover:text-green-700 dark:hover:text-green-400">
                Verified Guides Section
              </Link>{' '}
              ko zaroor check karein.
            </p>
            <a
              href="mailto:kisanstatus.support@gmail.com"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-[var(--color-primary)] text-white text-sm font-bold rounded-xl hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
               kisanstatus.support@gmail.com
            </a>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
            <h2 className="text-lg font-black text-[var(--color-text)] mb-3 flex items-center gap-2">
              <span aria-hidden="true"></span> Author
            </h2>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 border-2 border-green-300 dark:border-green-700 flex items-center justify-center text-2xl">
               
              </div>
              <div>
                <p className="font-bold text-[var(--color-text)]">{AUTHOR_NAME}</p>
                <p className="text-xs text-[var(--color-primary)]">Sarkari yojana information — official sources se cross-checked</p>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-text)] text-sm font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Author Profile Dekhen →
            </Link>
          </div>
        </div>

        <section className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-black text-[var(--color-text)] mb-4 flex items-center gap-2">
            <span aria-hidden="true"></span> PM Kisan Official Helpline
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] mb-4">
            Payment, status, enrollment ya kisi bhi sarkari kaam ke liye seedha official sources se hi sampark karein:
          </p>
          <div className="space-y-3">
            {OFFICIAL_CONTACTS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 p-3 bg-[var(--color-card)] rounded-xl border border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <div>
                  <p className="text-xs text-[var(--color-text-muted)]">{item.label}</p>
                  <p className="font-bold text-[var(--color-primary)] text-sm">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Fix 4 (GSC-DISCOVERED-NOT-INDEXED-FIX.md): page ~263 words par tha — pure
            utility. Expand kiya, noindex nahi: sahi jagah pe bhejne wala page kisan
            ke liye asli kaam ka hai. Har fact repo ke already-verified articles se. */}
        <section className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-black text-[var(--color-text)] mb-4">
            Email Likhne Se Pehle — Kaam Ki Baat
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
            Roz aisi email aati hai: “mera paisa nahi aaya, kuch karo.” Sach ye hai ki main aapka
            paisa nahi bhej sakta — wo PM Kisan ke apne system se hi aata hai. Par main ye bata sakta
            hoon ki aapka case kis tarah ka hai, aur us tarah ke case ka rasta kahan se nikalta hai.
            Uske liye mujhe teen cheezein chahiye hoti hain.
          </p>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
            Pehli — portal par aapka status <em>exactly</em> kya likha hai. “Paisa nahi aaya” aur
            “Payment Failed” aur “FTO is Generated” teen bilkul alag halaat hain, aur teeno ka ilaaj
            alag hai. Doosri — kist kaunsi chhooti hai. Teesri — aapne ab tak kya try kiya (branch
            gaye? CSC gaye? 155261 par baat hui?). Itna likha ho to jawab kaam ka hota hai; warna main
            bhi sirf general baat hi likh paunga.
          </p>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            Aur ek guzarish: Aadhaar number, bank account number ya OTP email me mat bhejein. Mujhe
            zaroorat nahi, aur email surakshit jagah nahi hai. Status ka screenshot bhejna ho to usme
            se account number wala hissa dhak dein.
          </p>
        </section>

        <section className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-black text-[var(--color-text)] mb-4">
            Aam Sawaal — Jawab Pehle Se Likha Hai
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
            Jo sawaal sabse zyada aate hain, unke poore guides site par maujood hain. Email ke jawab
            ka intezaar karne se behtar hai seedha wahin se shuru karein:
          </p>
          <ul className="space-y-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
            <li>
              <strong className="text-[var(--color-text)]">Status “Payment Failed” ya “Rejected” dikha raha hai.</strong>{' '}
              Zyadatar cases me wajah Aadhaar ki NPCI seeding na hona, galat IFSC, ya dormant khaata
              hoti hai — paisa release ho chuka hota hai, bank tak pahunchne se pehle atak jata hai.
              Kya karna hai, step by step:{' '}
              <Link href="/articles/PmKisanPaymentFailedFix2026" className="text-[var(--color-primary)] font-bold underline">
                payment failed fix guide
              </Link>.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">“FTO is Generated” likha hai, par khaate me kuch nahi aaya.</strong>{' '}
              Ye achhi khabar hai — aapki payment batch me chali gayi hai. Bank ki processing me kuch
              din lagte hain, isliye ek hi gaon me kisi ko pehle aur kisi ko baad me aana normal hai.
              15 din tak intezaar karein, phir hi shikayat karein:{' '}
              <Link href="/articles/fto-status-check-paisa-kab-aayega" className="text-[var(--color-primary)] font-bold underline">
                FTO status guide
              </Link>.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">eKYC pending hai.</strong> eKYC atki ho to
              aage ka kuch nahi chalega. Aadhaar se linked mobile ho to OTP se ghar baithe ho jati hai;
              OTP na aa raha ho to Face Authentication ka rasta hai — PMKisan app aur AadhaarFaceRD,
              dono free.{' '}
              <Link href="/articles/PmKisanEkycOnline2026" className="text-[var(--color-primary)] font-bold underline">
                eKYC guide
              </Link>{' '}
              aur{' '}
              <Link href="/articles/PmKisanFaceAuthenticationEkyc" className="text-[var(--color-primary)] font-bold underline">
                face authentication guide
              </Link>.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Naam, pita ka naam ya bank badalna hai.</strong>{' '}
              Kuch cheezein portal par khud ho jati hain, kuch ke liye CSC ya krishi adhikari ke paas
              jana padta hai — aur bank badalne ka process alag hai.{' '}
              <Link href="/articles/PmKisanCorrectionForm2026" className="text-[var(--color-primary)] font-bold underline">
                correction form guide
              </Link>{' '}
              aur{' '}
              <Link href="/articles/PmKisanBankAccountChangeProcess" className="text-[var(--color-primary)] font-bold underline">
                bank account change guide
              </Link>.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Gaon ki list me naam hai ya nahi.</strong>{' '}
              Village-wise list portal se khud nikal sakte hain — naya form bharne se pehle yahi dekhna
              chahiye:{' '}
              <Link href="/articles/PmKisanBeneficiaryList2026" className="text-[var(--color-primary)] font-bold underline">
                beneficiary list guide
              </Link>.
            </li>
          </ul>
        </section>

        <section className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-black text-[var(--color-text)] mb-4">
            Helpline Se Kaam Na Bane To Aage Ka Rasta
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
            <strong>155261</strong> par call lagne se pehle registration number, Aadhaar aur agar
            correction karwaya hai to uski tareekh likh kar saamne rakh lein. Operator yahi poochhta
            hai, aur na batane par call bekaar jaati hai. Doosra number <strong>011-24300606</strong>{' '}
            hai.
          </p>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
            Call se baat na bane to pmkisan.gov.in ke Help Desk se online shikayat darj karein — wahan
            se <strong>ticket number</strong> milta hai. Us number ko sambhaal kar rakhein: agli baar
            call karne par seedha usi ticket ka status poochh sakte hain, warna har baar shuru se
            kahani sunani padti hai. Ticket ban jaye to <strong>pmkisan-ict@gov.in</strong> par email
            me wahi ticket number quote karein.
          </p>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            Uske baad bhi hafte nikal jaayein to state nodal officer wala rasta bachta hai — har rajya
            ka apna officer, email aur address hai, aur email me kya likhna chahiye wo bhi{' '}
            <Link href="/articles/PmKisanStateNodalOfficerList" className="text-[var(--color-primary)] font-bold underline">
              nodal officer list
            </Link>{' '}
            me diya hai. Shikayat ka poora silsila{' '}
            <Link href="/yojana/pm-kisan-helpline-155261" className="text-[var(--color-primary)] font-bold underline">
              helpline guide
            </Link>{' '}
            me step-by-step hai.
          </p>
        </section>

        <section className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-black text-[var(--color-text)] mb-3">
            Ek Baat Jo Har Kisan Ko Yaad Rehni Chahiye
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
            PM Kisan ki taraf se koi phone karke OTP nahi maangta. Koi “file charge” ya “correction
            fee” online transfer nahi karwata. Google par milne wali .com sites aur WhatsApp par
            ghoomte “helpline numbers” isi bharose ka fayda uthate hain. Asli kaam sirf
            pmkisan.gov.in, CSC, bank branch ya krishi adhikari ke through hota hai.
          </p>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            Galti ho gayi ho — OTP de diya, paisa kat gaya — to der mat karein. Cyber crime helpline{' '}
            <strong>1930</strong> par call karein, <strong>cybercrime.gov.in</strong> par shikayat
            darj karein, aur usi din apne bank ko batayein. Jitni jaldi report hoti hai, paisa wapas
            aane ke chances utne behtar hote hain. Ghar ke bade-buzurg beneficiary hon to ye baat unhe
            zaroor samjha dein — fraud ka sabse zyada shikaar wahi hote hain.
          </p>
        </section>

        <section className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
          <h2 className="text-lg font-black text-[var(--color-text)] mb-4">Main Kis Mein Madad Kar Sakta Hoon?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {HELP_ITEMS.map((item) => (
              <div key={item.text} className={`flex items-start gap-2 ${item.canHelp ? 'text-[var(--color-text-muted)]' : 'text-red-600 dark:text-red-400'}`}>
                <span className={item.canHelp ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'} aria-hidden="true">
                  {item.canHelp ? "✓" : "✗"}
                </span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
