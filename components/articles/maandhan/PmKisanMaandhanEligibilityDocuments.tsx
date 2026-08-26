import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, SH, GovLink, AuthorBox, BottomNav, Disclaimer, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { MaandhanArticleMeta } from '@/lib/maandhan-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-03-18T19:44:07+05:30';
const MODIFIED = '2026-08-19T16:58:28+05:30';

const RELATED_CARDS = [
  {
    slug: 'pm-kisan-maandhan-registration-2026',
    title: 'Registration Kaise Karein',
    desc: 'CSC ya online application se apply karne ka poora tarika, screenshot ke saath.',
    
  },
  {
    slug: 'pm-kisan-maandhan-pension-calculator',
    title: 'Apna Contribution Nikalein',
    desc: 'Umar daliye aur saath mein dekhiye har mahine kitna jama karna hoga.',
    
  },
  {
    slug: 'pm-kisan-maandhan-withdrawal-refund-rules',
    title: 'Beech Mein Chhodne Ke Niyam',
    desc: 'Agar 60 saal se pehle scheme chhodni pade toh paisa kaise wapas milta hai.',
    
  },
];

const FAQS_DATA = [
  {
    q: '2.5 hectare zameen wala Maandhan mein apply kar sakta hai?',
    a: 'Nahi hoga. Scheme ki seema 2 hectare (karib 5 acre) tak hi hai. State ke land records ke hisaab se. Isse zyada landholding hui toh aap small/marginal farmer ki category mein hi nahi aate, aur verification mein application ruk jaayegi.',
  },
  {
    q: '6000 wali PM Kisan yojana aur ye Maandhan wali pension yojana same hai kya?',
    a: 'Bilkul alag hain, log aksar confuse ho jate hain. PM Kisan Samman Nidhi mein saal ke 6000 rupaye milte hain, jabki Maandhan ek pension scheme hai jisme aap khud paisa jama karte hain aur 60 saal ke baad 3000 rupaye mahina milta hai. PM Kisan mein hona Maandhan ke liye zaroori nahi. Haan, agar aap beneficiary hain toh apna monthly contribution PM Kisan ki kist se hi katwane ka option mil jaata hai, alag se paisa nahi dena padta.',
  },
  {
    q: 'Maine 4-5 saal pehle ek baar ITR file kiya tha, ab nahi karta, kya ab bhi exclude rahoonga?',
    a: 'Guidelines mein "pichhle assessment year" ka zikr hai, poori history ka nahi. Agar aapne sabse recent assessment year mein ITR file nahi kiya, purani baat is exclusion ko trigger nahi karti.',
  },
  {
    q: 'Bhaiyon mein zameen maukhik taur par baant li hai, kagaz par abhi tak batwara nahi hua, kya karein?',
    a: 'Sirf maukhik samjhauta verification process nahi maanega, kyunki documentary proof chahiye. Patwari ya tehsil office se ek share certificate banwana padega jisme aapke hisse ki zameen likhi ho. Ye process aam taur par ek-do hafte le leta hai, isliye registration se pehle hi shuru kar dein.',
  },
  {
    q: 'Maine pehle Shram Yogi Maandhan (PM-SYM) join kar liya tha, ab kheti hi karta hoon, switch kar sakta hoon?',
    a: 'Ek waqt mein sirf ek scheme active reh sakti hai. PM-SYM enrolled rehte hue Kisan Maandhan mein register nahi hoga. Pehle PM-SYM se exit karna hoga, uske baad hi Kisan Maandhan ke liye apply karein. Exit process ke exact steps CSC ya Maandhan application se hi confirm karein, kyunki ye case-by-case thoda alag ho sakta hai.',
  },
];

export default function PmKisanMaandhanEligibilityDocuments({ article }: { article: MaandhanArticleMeta }) {
  return (
    <>

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
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>10 min read</span>
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
            Jaldi mein hain toh itna samajh lijiye: umar 18-40 saal, land record mein naam ke saath 2 hectare tak cultivable zameen, aur neeche di gayi excluded categories mein se koi lagoo na ho — bas yehi Pradhan Mantri Kisan Maandhan Yojana (PM-KMY) ki asli shartein hain. PM Kisan Samman Nidhi mein hona zaroori nahi hai; wo sirf contribution katwane ka ek aasan raasta deta hai. Neeche har shart ka practical matlab hai, aur Common Service Centre (CSC) par log kahan atakte hain.
          </p>
        </div>

        <section className="mb-8">
          <SH>Documents Le Jaane Se Pehle Ek Baar Ruk Kar Sochein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Gaon ke CSC par roz aise log aate hain jo pehle form bhar dete hain, tab pata chalta hai ki wo fit hi nahi baithte. Scheme ka official portal maandhan.in hai. Wahan eligibility ki shartein saaf likhi hain, aur galat jankari dekar enrolled hone par benefit wapas recover ho sakta hai. Yahan risk sirf time zaya hone ka nahi hai.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Neeche teen sharton ki tafseel hai. Tino ka ek saath poora hona zaroori hai. Sirf zameen kam hone se ya sirf umar sahi hone se kaam nahi chalta.
          </p>
        </section>

        <section className="mb-8">
          <SH>Teen Zaroori Shartein. Inme Se Koi Bhi Miss Nahi Honi Chahiye</SH>
          <div className="space-y-3 mb-6">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex gap-3">
              <div>
                <p className="font-black text-sm text-green-800 dark:text-green-300 mb-1">Pehli Shart. Umar</p>
                <p className="text-xs text-[var(--color-text-muted)]">Registration ke waqt umar poori 18 se 40 saal ke beech honi chahiye. Ye seema isliye rakhi gayi hai taaki 60 tak pahunchte-pahunchte kaafi saal contribution ho sake aur pension fund thik se banta rahe, 41 saal ke baad naya enrolment ruk jaata hai, koi relaxation nahi milti.</p>
              </div>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl flex gap-3">
              <div>
                <p className="font-black text-sm text-blue-800 dark:text-blue-300 mb-1">Doosri Shart. Zameen Ka Size</p>
                <p className="text-xs text-[var(--color-text-muted)]">Kul milakar 2 hectare (lagbhag 5 acre) tak hi cultivable landholding honi chahiye, chahe ek jagah ho ya alag khaton mein bikhri ho, jod isi seema ke andar aana chahiye. Official guidelines ke mutabik scheme ka focus chhote aur seemant kisano par hai, isliye zameen ka total size dekha jaata hai, sirf ek khata nahi.</p>
              </div>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl flex gap-3">
              <div>
                <p className="font-black text-sm text-amber-800 dark:text-amber-300 mb-1">Teesri Shart — Excluded Category Mein Na Hona</p>
                <p className="text-xs text-[var(--color-text-muted)]">Umar aur zameen sahi hone ke baad bhi kuch log scheme se bahar rakhe gaye hain. Income tax bharne wale, sarkari karmchari, doosri Maandhan/pension schemes (NPS, ESIC, EPFO) wale, waghera. Poori list neeche alag section mein di hai. Ek aam galatfehmi yahin door kar dein: <Link href="/articles/PmKisanBeneficiaryList2026" className="underline text-blue-600 dark:text-blue-400 font-medium">PM Kisan Samman Nidhi</Link> ki list mein hona Maandhan ke liye shart NAHI hai. PM Kisan beneficiary ko bas ye suvidha extra milti hai ki wo apna monthly contribution seedha PM Kisan ki kist se katwa sakta hai.</p>
              </div>
            </div>
          </div>

          <IB>
            Joint family wali zameen ka case sabse zyada confusion create karta hai. Agar khet baap-dada ke naam se hai ya bhaiyon ke beech baanti hui hai, toh dekhna sirf aapke hisse ka size hai, poori family ki zameen nahi. Khatauni mein agar aapka naam alag se darj hai toh theek hai, warna Patwari se apne share ka likhit certificate le lena. CSC operator yahi maangega.
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
            Shartein poori hone ke baad aapka monthly contribution sirf aapki aaj ki umar tay karti hai. 18 saal walon ka ₹55 aur 40 saal walon ka ₹200. Har umar ka exact official figure reference chart mein hai:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/maandhan/pm-kisan-maandhan-age-wise-contribution-chart-2026" className="block p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-bold text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors">Age-Wise Contribution Chart Dekhen →</Link>
          </div>
        </section>

        <section className="mb-8">
          <SH>Ye Log Bilkul Apply Nahi Kar Sakte</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Umar, zameen aur PM Kisan list. Teeno match ho jaayein, tab bhi kuch categories scheme se bahar rakhi gayi hain. PM-KMY sirf un kisano ke liye bana hai jinke paas koi aur regular income ya government support pehle se nahi hai. Is karan ye chhe categories exclude hoti hain:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              { title: 'Income Tax Bharne Wale', desc: 'Pichhle assessment year mein ITR file kiya ho, chahe final tax kam ya zero hi kyun na bana ho.' },
              { title: 'Sarkari Naukri Wale', desc: 'Central ya State government ke serving ya retired officer/employee. Sirf MTS aur Group D staff ko chhoot hai.' },
              { title: 'Bade Pension Wale', desc: 'Jinki mahine ki pension ₹10,000 ya usse zyada hai, unhe is scheme mein jagah nahi.' },
              { title: 'Constitutional Post Holders', desc: 'Maujuda ya pehle ke MP, MLA, Mayor, ya Zila Panchayat Chairperson.' },
              { title: 'Professional Body Wale', desc: 'Registered Doctor, Engineer, Lawyer, Architect, ya Chartered Accountant.' },
              { title: 'Doosri Maandhan Scheme Wale', desc: 'Jo pehle se PM Shram Yogi Maandhan (PM-SYM) ya PM Laghu Vyapari Maandhan (PM-LVM) mein enrolled hain.' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                <p className="font-black text-sm text-red-800 dark:text-red-300 mb-1">{title}</p>
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
            Eligibility clear ho gayi toh ab practical sawal. CSC jaate waqt bag mein kya rakhna hai. List chhoti hai, lekin har item ke saath ek chhoti detail hai jo miss hone par kaam rok deti hai.
          </p>

          <div className="space-y-4 mb-6">
            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <div className="flex items-start gap-3">
                <div>
                  <p className="font-black text-sm text-[var(--color-text)] mb-1">Aadhaar Card, Original Aur Ek Copy</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Aadhaar hi wo unique ID hai jisse system aapki PM Kisan entry, bank account aur land record teeno ko jodta hai — isliye copy dhundhli ya purani na ho, warna operator scan karke upload nahi kar payega aur naya print nikalwana padega.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5"></span>
                <div>
                  <p className="font-black text-sm text-[var(--color-text)] mb-1">Bank Passbook, Individual Account Ki</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Contribution aur baad mein pension, dono isi ek account se aana-jaana hai, isliye joint account yahan nahi chalta, malikana haq ka jhagda hone par claim atak sakta hai. Passbook ke pehle page par naam, account number aur IFSC saaf dikhna chahiye.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <div className="flex items-start gap-3">
                <div>
                  <p className="font-black text-sm text-[var(--color-text)] mb-1">Zameen Ka Record. Khatauni Ya Khasra</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Isi se 2 hectare wali seema prove hoti hai. Yad rakhein ki record mein zameen "krishi yogya" (cultivable) darj ho, agar classification banjar ya non-agricultural dikha rahi hai toh eligibility hi nahi banegi, chahe size sahi ho. Lease par li gayi zameen ke liye registered lease deed bhi saath rakhein.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <div className="flex items-start gap-3">
                <div>
                  <p className="font-black text-sm text-[var(--color-text)] mb-1">Chalu Mobile Number</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Registration ke waqt bhi zaroori hai aur baad mein contribution reminders ke liye bhi. Wahi number rakhein jo Aadhaar aur PM Kisan dono mein already registered hai.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl">
              <div className="flex items-start gap-3">
                <div>
                  <p className="font-black text-sm text-[var(--color-text)] mb-1">Do-Teen Passport Size Photo</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Offline form bharte waqt ya CSC record ke liye rakh lein, kaam aa jaata hai. Kai centre digitally hi le lete hain lekin printed copy saath hona nuksaan nahi karta.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <SH>Ghar Baithe 3 Baatein Confirm Kar Lein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Documents ready hone ke baad bhi ek risk bacha rehta hai. Detail mismatch, jo CSC pahunchne ke baad sabse zyada form atkata hai. Ghar se nikalne se pehle ye teen cheez khud verify kar lein, taaki dobara chakkar na lagana pade:
          </p>
          <StepList>
            <SI n={1}><strong>Naam Ka Spelling Milaein:</strong> Aadhaar, bank passbook aur PM Kisan list. Teeno jagah naam letter-by-letter same hona chahiye. "Ramkumar" aur "Ram Kumar" jaisa chhota farak bhi verification process ko confuse kar deta hai.</SI>
            <SI n={2}><strong>NPCI Seeding Status Dekhein:</strong> myaadhaar.uidai.gov.in par jaakar Bank Seeding Status check karein. Agar wahan "Yes" nahi dikh raha, pehle bank branch jaakar ye theek karwayein, phir CSC jayein.</SI>
            <SI n={3}><strong>Zameen Record Update Rakhein:</strong> Recently kharidi ya virasat mein mili zameen ho toh Patwari se Khatauni mein naam update karwana pehla kaam hai. Bina iske land-based eligibility verify hi nahi ho payegi.</SI>
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
                reason: 'Doosri Pension Scheme Pehle Se Chal Rahi Hai',
                solution: (
                  <>
                    NPS, ESIC ya EPFO mein already covered hain toh application aage nahi badhegi. Ye check enrollment ke waqt hi ho jaata hai. Agar aap salaried job chhod kar kheti mein aaye hain toh pehle purani scheme ka status clear karwayein. PM Kisan wale confusion ke liye <Link href="/articles/PmKisanMasterGuide2026" className="underline text-blue-600 dark:text-blue-400 font-medium">Master Guide</Link> dekh lein. Wo scheme alag hai, uska Maandhan ki eligibility se lena-dena nahi.
                  </>
                ),
              },
              {
                reason: 'Umar 40 Saal Paar Kar Chuki Hai',
                solution: 'Iska koi workaround nahi hai. Agar 38-39 saal ke hain toh der na karein, birthday nikal jaane ke baad system entry hi accept nahi karega.',
              },
            ].map(({ reason, solution }, i) => (
              <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4">
                <p className="font-black text-sm text-red-600 dark:text-red-400 mb-2">{reason}</p>
                <p className="text-xs text-green-700 dark:text-green-400"><strong>Solution:</strong> {solution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Eligibility Aur Documents Par Quick Jawab
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM-KMY Eligibility Aur Zaroori Kagazat. Sawal Jawab" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">CSC Jaane Se Ek Din Pehle: Teen Kagaz, Ek Hi Naam</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Reject hone wale applications mein sabse aam wajah documents ka aapas mein na milna hai. Aadhaar par ek naam, bank passbook par doosri spelling, khatauni par teesri. CSC jaane se ek din pehle teeno kagaz saath rakh kar naam, spelling aur date of birth khud milaa lein; jo bhi alag ho, pehle use theek karwayein, phir enrollment karwayein. Confusion ho toh apply karne se pehle hamari <Link href="/maandhan/pm-kisan-maandhan-registration-2026" className="underline text-blue-600 dark:text-blue-400 font-medium">Registration Guide</Link> ek baar padh lein.
          </p>
        </div>

        <GovLink
          href="https://maandhan.in"
          label="PM Kisan Maandhan Official Portal"
          guide="Self Enrollment / Status"
          guideHref="/maandhan/pm-kisan-maandhan-registration-2026"
          portalName="maandhan.in"
        />

        <section className="my-10">
          <h3 className="text-lg font-black text-[var(--color-text)] mb-4">Yeh Guides Bhi Kaam Aayengi</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RELATED_CARDS.map((card) => (
              <Link
                key={card.slug}
                href={`/maandhan/${card.slug}`}
                className="group block p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg hover:border-green-500 transition-all duration-300"
              >
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

        <AuthorBox modified={MODIFIED} bioKey="PmKisanMaandhanEligibilityDocuments" />
        <BottomNav extraLinks={[
          { href: '/maandhan/pm-kisan-maandhan-registration-2026', l: 'Registration Guide' },
          { href: '/maandhan/pm-kisan-maandhan-pension-calculator', l: 'Calculator' },
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
        ]} />
        <Disclaimer k="PmKisanMaandhanEligibilityDocuments" />
      </div>
    </>
  );
}
