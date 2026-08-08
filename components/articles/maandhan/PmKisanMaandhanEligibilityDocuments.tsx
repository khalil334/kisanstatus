import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { MaandhanArticleMeta } from '@/lib/maandhan-data';

const PUBLISHED = '2026-07-22T08:00:00+05:30';
const MODIFIED = '2026-08-08T09:00:00+05:30';

const RELATED_CARDS = [
  {
    slug: 'pm-kisan-maandhan-registration-2026',
    title: 'Registration Kaise Karein',
    desc: 'CSC ya online application se apply karne ka poora tarika, screenshot ke saath.',
    emoji: '📝',
  },
  {
    slug: 'pm-kisan-maandhan-pension-calculator',
    title: 'Apna Contribution Nikalein',
    desc: 'Umar daliye aur turant dekhiye har mahine kitna jama karna hoga.',
    emoji: '🧮',
  },
  {
    slug: 'pm-kisan-maandhan-withdrawal-refund-rules',
    title: 'Beech Mein Chhodne Ke Niyam',
    desc: 'Agar 60 saal se pehle scheme chhodni pade toh paisa kaise wapas milta hai.',
    emoji: '💸',
  },
];

const FAQS_DATA = [
  {
    q: 'Mere paas 2.5 hectare zameen hai, kya main apply kar sakta hoon?',
    a: 'Nahi hoga. Scheme ki seema 2 hectare (karib 5 acre) tak hi hai. Isse ek inch bhi zyada hui toh system mein hi entry nahi kar payega, kyunki ye check land record ke saath automatically ho jata hai.',
  },
  {
    q: 'PM Kisan ki 6000 wali yojana aur ye Maandhan wali pension yojana same hai kya?',
    a: 'Bilkul alag hain, log aksar confuse ho jate hain. PM Kisan Samman Nidhi mein saal ke 6000 rupaye milte hain, jabki Maandhan ek pension scheme hai jisme aap khud paisa jama karte hain aur 60 saal ke baad 3000 rupaye mahina milta hai. Maandhan ke liye eligible hone ka pehla step hi PM Kisan list mein hona hai.',
  },
  {
    q: 'Maine 4-5 saal pehle ek baar ITR file kiya tha, ab nahi karta — kya ab bhi exclude rahoonga?',
    a: 'Guidelines mein "pichhle assessment year" ka zikr hai, poori history ka nahi. Agar aapne sabse recent assessment year mein ITR file nahi kiya, purani baat is exclusion ko trigger nahi karti.',
  },
  {
    q: 'Bhaiyon mein zameen maukhik taur par baant li hai, kagaz par abhi tak batwara nahi hua — kya karein?',
    a: 'Sirf maukhik samjhauta verification process nahi maanega, kyunki documentary proof chahiye. Patwari ya tehsil office se ek share certificate banwana padega jisme aapke hisse ki zameen likhi ho — ye process aam taur par ek-do hafte le leta hai, isliye registration se pehle hi shuru kar dein.',
  },
  {
    q: 'Bank mein seeding request de di hai, status update hone mein kitna time lagta hai?',
    a: 'Har bank alag hota hai, lekin aam taur par branch mein request dene ke ek hafte ke andar NPCI status update ho jaata hai. CSC jaane se pehle ek baar myaadhaar.uidai.gov.in par dobara check kar lein, kyunki kabhi-kabhi update hone mein isse zyada bhi lag jaata hai.',
  },
  {
    q: 'Maine pehle Shram Yogi Maandhan (PM-SYM) join kar liya tha, ab kheti hi karta hoon — switch kar sakta hoon?',
    a: 'Ek waqt mein sirf ek scheme active reh sakti hai — PM-SYM enrolled rehte hue Kisan Maandhan mein register nahi hoga. Pehle PM-SYM se exit karna hoga, uske baad hi Kisan Maandhan ke liye apply karein. Exit process ke exact steps CSC ya Maandhan application se hi confirm karein, kyunki ye case-by-case thoda alag ho sakta hai.',
  },
  {
    q: 'Group D ya MTS post par government job karta hoon, exclude hounga kya?',
    a: 'Nahi, yahan chhoot hai — Group D aur Multi Tasking Staff (MTS) employees is exclusion se bahar hain. CSC par apna latest salary slip ya service certificate dikhayein jisme post/grade saaf likha ho, taaki aapko galti se "government employee" category mein na daal diya jaaye.',
  },
];

export default function PmKisanMaandhanEligibilityDocuments({ article }: { article: MaandhanArticleMeta }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: 'PM Kisan Maandhan Eligibility Aur Documents: Poori Sach Baat',
              description:
                'PM Kisan Maandhan Yojana ke liye kaun eligible hai, kaun exclude hota hai, aur CSC jane se pehle kaunse documents ready rakhne hain — sab kuch official guidelines ke hisab se, real examples ke saath.',
              image: 'https://kisanstatus.com/images/articles/maandhan/eligibility-check-farmer-documents.webp',
              inLanguage: 'hi-IN',
              keywords: 'PM Kisan Maandhan Eligibility, PM Kisan Maandhan Documents, Kisan Pension Yojana, PM-KMY rules, CSC registration documents, Kisan Maandhan 2026',
              articleSection: 'Agriculture & Pension Schemes',
              wordCount: 1200,
              author: {
                '@type': 'Organization',
                name: 'KisanStatus Team',
                url: 'https://kisanstatus.com/about',
              },
              publisher: {
                '@type': 'Organization',
                name: 'KisanStatus',
                logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.png' },
              },
              datePublished: PUBLISHED,
              dateModified: MODIFIED,
              mainEntityOfPage: { '@type': 'WebPage', '@id': `https://kisanstatus.com/maandhan/${article.slug}` },
            },
            {
              '@type': 'FAQPage',
              mainEntity: FAQS_DATA.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            },
          ],
        }) }}
      />

      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/maandhan" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Maandhan Yojana</Link>
            <span>/</span>
            <span className="text-white font-bold">Eligibility & Documents</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Kisan Pension Scheme</span>

          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Maandhan Eligibility Aur Documents: Poori Sach Baat
          </h1>

          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 15 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/eligibility-check-farmer-documents.webp"
            alt="Kisan apne land record aur Aadhaar card check karte hue PM Kisan Maandhan eligibility ke liye"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            CSC jaane se pehle apni eligibility khud check kar lena behtar hai
          </p>
        </div>

        <div className="my-6 p-5 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl">
          <p className="text-sm md:text-base text-blue-900 dark:text-blue-100 leading-relaxed font-medium">
            Jaldi mein hain toh itna samajh lijiye: umar 18-40 saal, khud ya family ke naam 2 hectare tak cultivable zameen, aur PM Kisan Samman Nidhi ki list mein naam pehle se darj — teeno saath honge tabhi Pradhan Mantri Kisan Maandhan Yojana (PM-KMY) ka form aage badhega. Neeche is baat ki tafseel hai ki har shart ka matlab practically kya hai, aur Common Service Centre (CSC) par log kahan atakte hain.
          </p>
        </div>

        <section className="mb-8">
          <SH>Documents Le Jaane Se Pehle Ek Baar Ruk Kar Sochein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Gaon ke CSC par roz aise log aate hain jo pehle form bhar dete hain, tab pata chalta hai ki wo fit hi nahi baithte. Official PM-KMY guidelines (pmkisan.gov.in) mein ye bhi likha hai ki galti se benefit mil jaaye toh sarkar wo raashi wapas recover kar sakti hai — yahan risk sirf time zaya hone ka nahi hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Neeche teen sharton ki tafseel hai. Tino ka ek saath poora hona zaroori hai — sirf zameen kam hone se ya sirf umar sahi hone se kaam nahi chalta.
          </p>
        </section>

        <section className="mb-8">
          <SH>Teen Zaroori Shartein — Inme Se Koi Bhi Miss Nahi Honi Chahiye</SH>
          <div className="space-y-3 mb-6">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex gap-3">
              <span className="text-2xl">🎂</span>
              <div>
                <p className="font-black text-sm text-green-800 dark:text-green-300 mb-1">Pehli Shart — Umar</p>
                <p className="text-xs text-[var(--color-text-muted)]">Registration ke waqt umar poori 18 se 40 saal ke beech honi chahiye. Ye seema isliye rakhi gayi hai taaki 60 tak pahunchte-pahunchte kaafi saal contribution ho sake aur pension fund thik se banta rahe — 41 saal ke baad naya enrolment ruk jaata hai, koi relaxation nahi milti.</p>
              </div>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl flex gap-3">
              <span className="text-2xl">🌾</span>
              <div>
                <p className="font-black text-sm text-blue-800 dark:text-blue-300 mb-1">Doosri Shart — Zameen Ka Size</p>
                <p className="text-xs text-[var(--color-text-muted)]">Kul milakar 2 hectare (lagbhag 5 acre) tak hi cultivable landholding honi chahiye — chahe ek jagah ho ya alag khaton mein bikhri ho, jod isi seema ke andar aana chahiye. Official guidelines ke mutabik scheme ka focus chhote aur seemant kisano par hai, isliye zameen ka total size dekha jaata hai, sirf ek khata nahi.</p>
              </div>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl flex gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <p className="font-black text-sm text-amber-800 dark:text-amber-300 mb-1">Teesri Shart — PM Kisan Ka Beneficiary Hona</p>
                <p className="text-xs text-[var(--color-text-muted)]">Aapka naam <Link href="/articles/PmKisanBeneficiaryList2026" className="underline text-blue-600 dark:text-blue-400 font-medium">PM Kisan Samman Nidhi</Link> ki active list mein pehle se hona chahiye. Wajah simple hai — Maandhan wahi zameen aur bank verification dobara istemal karta hai jo PM Kisan mein already ho chuki hoti hai, isliye naam list mein na hone par application entry hi nahi lene deta.</p>
              </div>
            </div>
          </div>

          <IB>
            Joint family wali zameen ka case sabse zyada confusion create karta hai. Agar khet baap-dada ke naam se hai ya bhaiyon ke beech baanti hui hai, toh dekhna sirf aapke hisse ka size hai, poori family ki zameen nahi. Khatauni mein agar aapka naam alag se darj hai toh theek hai, warna Patwari se apne share ka likhit certificate le lena — CSC operator yahi maangega.
          </IB>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/land-record-khatauni-check.webp"
            alt="Patwari ke paas khatauni aur zameen ke record ki jaanch karta kisan"
            width={1000}
            height={560}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Joint zameen ho toh apne hisse ka record alag se nikalwa lein
          </p>
        </div>

        <section className="mb-8">
          <SH>Eligibility Clear? Ab Kharcha Jaan Lein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Shartein poori hone ke baad aapka monthly contribution sirf aapki aaj ki umar tay karti hai — 18 saal walon ka ₹55 aur 40 saal walon ka ₹200. Har umar ka exact official figure reference chart mein hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/pm-kisan-maandhan-age-wise-contribution-chart-2026" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">📊 Age-Wise Contribution Chart Dekhen →</Link>
          </div>
        </section>

        <section className="mb-8">
          <SH>Ye Log Bilkul Apply Nahi Kar Sakte</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Umar, zameen aur PM Kisan list — teeno match ho jaayein, tab bhi kuch categories scheme se bahar rakhi gayi hain. PM-KMY sirf un kisano ke liye bana hai jinke paas koi aur regular income ya government support pehle se nahi hai — is karan ye chhe categories exclude hoti hain:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              { title: 'Income Tax Bharne Wale', desc: 'Pichhle assessment year mein ITR file kiya ho, chahe final tax kam ya zero hi kyun na bana ho.' },
              { title: 'Sarkari Naukri Wale', desc: 'Central ya State government ke serving ya retired officer/employee — sirf MTS aur Group D staff ko chhoot hai.' },
              { title: 'Bade Pension Wale', desc: 'Jinki mahine ki pension ₹10,000 ya usse zyada hai, unhe is scheme mein jagah nahi.' },
              { title: 'Constitutional Post Holders', desc: 'Maujuda ya pehle ke MP, MLA, Mayor, ya Zila Panchayat Chairperson.' },
              { title: 'Professional Body Wale', desc: 'Registered Doctor, Engineer, Lawyer, Architect, ya Chartered Accountant.' },
              { title: 'Doosri Maandhan Scheme Wale', desc: 'Jo pehle se PM Shram Yogi Maandhan (PM-SYM) ya PM Laghu Vyapari Maandhan (PM-LVM) mein enrolled hain.' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                <p className="font-black text-sm text-red-800 dark:text-red-300 mb-1">❌ {title}</p>
                <p className="text-xs text-red-700 dark:text-red-400">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/csc-center-form-verification.webp"
            alt="Registration counter par kisan ka Aadhaar aur bank passbook milan karte hue"
            width={1000}
            height={560}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Naam ka spelling Aadhaar aur bank passbook mein same hona zaroori hai
          </p>
        </div>

        <section className="mb-8">
          <SH>CSC Jaane Se Pehle Ye Paanch Cheezein Sath Rakhein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Eligibility clear ho gayi toh ab practical sawal — CSC jaate waqt bag mein kya rakhna hai. List chhoti hai, lekin har item ke saath ek chhoti detail hai jo miss hone par kaam rok deti hai.
          </p>

          <div className="space-y-4 mb-6">
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">🪪</span>
                <div>
                  <p className="font-black text-sm text-[var(--color-text)] mb-1">Aadhaar Card, Original Aur Ek Copy</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Aadhaar hi wo unique ID hai jisse system aapki PM Kisan entry, bank account aur land record teeno ko jodta hai — isliye copy dhundhli ya purani na ho, warna operator scan karke upload nahi kar payega aur naya print nikalwana padega.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">🏦</span>
                <div>
                  <p className="font-black text-sm text-[var(--color-text)] mb-1">Bank Passbook, Individual Account Ki</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Contribution aur baad mein pension, dono isi ek account se aana-jaana hai, isliye joint account yahan nahi chalta — malikana haq ka jhagda hone par claim atak sakta hai. Passbook ke pehle page par naam, account number aur IFSC saaf dikhna chahiye.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📜</span>
                <div>
                  <p className="font-black text-sm text-[var(--color-text)] mb-1">Zameen Ka Record — Khatauni Ya Khasra</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Isi se 2 hectare wali seema prove hoti hai. Yad rakhein ki record mein zameen "krishi yogya" (cultivable) darj ho — agar classification banjar ya non-agricultural dikha rahi hai toh eligibility hi nahi banegi, chahe size sahi ho. Lease par li gayi zameen ke liye registered lease deed bhi saath rakhein.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📱</span>
                <div>
                  <p className="font-black text-sm text-[var(--color-text)] mb-1">Chalu Mobile Number</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Registration ke waqt bhi zaroori hai aur baad mein contribution reminders ke liye bhi. Wahi number rakhein jo Aadhaar aur PM Kisan dono mein already registered hai.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">🖼️</span>
                <div>
                  <p className="font-black text-sm text-[var(--color-text)] mb-1">Do-Teen Passport Size Photo</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Offline form bharte waqt ya CSC record ke liye rakh lein, kaam aa jaata hai — kai centre digitally hi le lete hain lekin printed copy saath hona nuksaan nahi karta.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Ghar Baithe 3 Baatein Confirm Kar Lein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Documents ready hone ke baad bhi ek risk bacha rehta hai — detail mismatch, jo CSC pahunchne ke baad sabse zyada form atkata hai. Ghar se nikalne se pehle ye teen cheez khud verify kar lein, taaki dobara chakkar na lagana pade:
          </p>
          <StepList>
            <SI n={1}><strong>Naam Ka Spelling Milaein:</strong> Aadhaar, bank passbook aur PM Kisan list — teeno jagah naam letter-by-letter same hona chahiye. "Ramkumar" aur "Ram Kumar" jaisa chhota farak bhi verification process ko confuse kar deta hai.</SI>
            <SI n={2}><strong>NPCI Seeding Status Dekhein:</strong> myaadhaar.uidai.gov.in par jaakar Bank Seeding Status check karein. Agar wahan "Yes" nahi dikh raha, pehle bank branch jaakar ye theek karwayein, phir CSC jayein.</SI>
            <SI n={3}><strong>Zameen Record Update Rakhein:</strong> Recently kharidi ya virasat mein mili zameen ho toh Patwari se Khatauni mein naam update karwana pehla kaam hai — bina iske land-based eligibility verify hi nahi ho payegi.</SI>
          </StepList>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/maandhan/mobile-otp-aadhaar-verification.webp"
            alt="Mobile par Aadhaar OTP verification karte hue kisan"
            width={1000}
            height={560}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            OTP registered mobile par hi aata hai, dusra number kaam nahi karega
          </p>
        </div>

        <section className="mb-8">
          <SH>Form Reject Hone Ki Sabse Aam Wajahein</SH>
          <div className="space-y-3">
            {[
              {
                reason: 'Mobile Aadhaar Se Link Nahi Hai',
                solution: 'Ye sabse zyada CSC par dikhta hai — operator OTP bhejta hai aur farmer ka phone chup rehta hai kyunki number kabhi link hi nahi hua tha. Nazdiki Aadhaar Seva Kendra se 10-15 minute mein link karwa kar hi dobara try karein.',
              },
              {
                reason: 'Bank Account Joint Ya Minor Ke Naam Hai',
                solution: 'Kai baar operator form to submit kar deta hai, lekin pehla monthly contribution hi bounce ho jaata hai kyunki account individual nahi hai. Isse bachne ke liye pehle hi apna alag savings account khulwa lein.',
              },
              {
                reason: 'Hath Se Likhi Purani Khatauni Le Gaye',
                solution: 'Verification process aksar sirf computerised/digitally-verified record accept karti hai, purani haath se likhi copy reject ho jaati hai. State ke land record application se digital printout nikalwa kar le jayein.',
              },
              {
                reason: 'PM Kisan List Mein Naam Nahi Mila',
                solution: (
                  <>
                    Pehle <Link href="/articles/PmKisanMasterGuide2026" className="underline text-blue-600 dark:text-blue-400 font-medium">PM Kisan mein registration</Link> karwana zaroori hai, uske baad hi Maandhan ke liye eligible banenge.
                  </>
                ),
              },
              {
                reason: 'Umar 40 Saal Paar Kar Chuki Hai',
                solution: 'Iska koi workaround nahi hai. Agar 38-39 saal ke hain toh der na karein — birthday nikal jaane ke baad system entry hi accept nahi karega.',
              },
            ].map(({ reason, solution }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">❌ {reason}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>✅ Solution:</strong> {solution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Poochhe Jaane Wale Sawal (FAQs)
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM-KMY Eligibility Aur Zaroori Kagazat — Sawal Jawab" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Ek Baat Yaad Rakhein</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Eligibility aur documents mein chhoti si chook bhi budhape ki pension rok sakti hai. CSC jane se ek din pehle Aadhaar, Bank aur Khatauni teeno alag-alag check kar lein. Confusion ho toh apply karne se pehle hamari <Link href="/maandhan/pm-kisan-maandhan-registration-2026" className="underline text-blue-600 dark:text-blue-400 font-medium">Registration Guide</Link> ek baar padh lein.
          </p>
        </div>

        <GovLink
          href="https://pmkisan.gov.in"
          label="PM Kisan Official Portal"
          guide="Check Eligibility & Status"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Ye Bhi Padhein</h3>
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
          { href: '/maandhan/pm-kisan-maandhan-registration-2026', l: '📝 Registration Guide' },
          { href: '/maandhan/pm-kisan-maandhan-pension-calculator', l: '🧮 Calculator' },
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}