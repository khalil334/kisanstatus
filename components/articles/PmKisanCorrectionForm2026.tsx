import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';
import { AUTHOR_NAME } from '@/lib/site-config';

const PUBLISHED = '2026-02-25T21:37:17+05:30';
const MODIFIED = '2026-03-18T14:49:39+05:30';

const RELATED = [
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Complete Guide' },
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status Check' },
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed Fix' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Kaise Karein' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List Check' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Loan Apply' },
  { slug: 'PmKisanMobileNumberChangeUpdate', title: 'Mobile Number Change Guide' },
  { slug: 'PmKisanFaceAuthenticationEkyc', title: 'Face Auth eKYC Guide', emoji: '' },
  { slug: 'PmKisanLandSeedingForm', title: 'Land Seeding Form', emoji: '' },
];

const FAQS_DATA = [
  {
    q: 'PM Kisan correction form bharne ke baad kitne din mein details update ho jati hain?',
    a: 'Portal par correction ke baad 7 se 15 din lagte hain. CSC se karwao toh thoda jaldi ho jata hai, lagbhag 5-7 din.',
  },
  {
    q: 'Kya correction ke baad ruki hui kist mil jayegi?',
    a: 'Haan bhai, 100% milegi. Jab details fix ho jayengi, toh pichhli saari pending kistein ek saath aa jayengi.',
  },
  {
    q: 'PM Kisan naam correction online karne ke liye kaunse documents chahiye?',
    a: 'Sirf Aadhaar card aur bank passbook chahiye. Portal par naam exactly wahi likho jo Aadhaar aur bank mein hai. Koi extra document upload nahi karna padta.',
  },
  {
    q: 'Agar mera mobile number band ho gaya hai toh pm kisan mobile number update kaise karun?',
    a: 'Agar purana number band hai toh tum OTP receive nahi kar paoge. Aise mein seedha najdiki CSC center jao. Wo biometric authentication se number update kar denge. Ghar baithe iska koi tarika nahi hai.',
  },
  {
    q: 'PM Kisan application rejected reason kya ho sakta hai?',
    a: 'Zyada tar cases mein rejection ki wajah naam mismatch, galat IFSC code, ya phir Aadhaar seeding na hona hoti hai. Kabhi kabhi land record mismatch bhi rejection ka karan banta hai. Portal par status check karke exact reason dekh sakte ho.',
  },
  {
    q: 'Mera bank account change ho gaya hai, pm kisan bank account update kaise kare aur aadhaar seeding error fix kaise kare?',
    a: 'Dekho bhai, ye thoda lamba process hai. Pehle naye bank account mein Aadhaar seeding karwao (branch jaake "DBT enable" bolna). Phir pmkisan.gov.in par Farmers Corner > Edit Aadhaar Details mein jaake naya account number aur IFSC daalo. Purana account tab tak band mat karna jab tak naye account mein pehli kist na aa jaye. Agar NPCI mapping mein dikkat aaye toh bank manager se "Aadhaar seeding error fix" karne ko bolo, wo backend se NPCI mapper update kar denge.',
  },
  {
    q: 'Kya main pm kisan gender/DOB correction aur land record mismatch solution ghar baithe kar sakta hoon?',
    a: 'Gender aur DOB correction thoda tricky hai. Agar portal par edit option aa raha hai toh kar sakte ho, lekin aksar ye fields locked hoti hain. Aise mein CSC jana padta hai. Land record mismatch ka solution portal par nahi hota — iske liye tumhe apne district ke Agriculture Officer ya Patwari ke paas jaake land records (Khatauni) update karwane honge. Jab sarkari records mein naam aur zameen sahi ho jayegi, tabhi portal par reflect hogi.',
  },
];

export default function PmKisanCorrectionForm2026({ article }: { article: ArticleMeta }) {
  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl">
          <nav className="text-green-200 text-xs mb-3 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded">Articles</Link>
            <span>/</span>
            <span className="text-white font-bold">Correction Guide</span>
          </nav>
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Details Fix Guide</span>
          <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
            PM Kisan Correction Form Kaise Bharein — Naam, Aadhaar, Bank Details Galat Hai To Kya Karein 2026
          </h1>
          <div className="flex flex-wrap gap-3 text-xs text-green-200">
            <span><Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">{AUTHOR_NAME}</Link></span>
            <span>{fmtDate(PUBLISHED)}</span>
            <span>Updated: {fmtDate(MODIFIED)}</span>
            <span>8 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Dekho bhai, PM Kisan ki baat ho rahi hai toh sabse pehli problem jo har kisan ko aati hai — <strong>galat details</strong>.
        </p>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Haan, bilkul wahi. Naam mein spelling mistake, bank account number galat, IFSC code mismatch, Aadhaar seeding error... ye sab chhoti chhoti cheezein lagti hain lekin inki wajah se <strong>poori kist ruk jaati hai</strong>.
        </p>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Sabse aam case naam ki spelling ka hota hai: portal par "RAMESH KUMAR" aur bank mein "RAMESH KUAMR" — bas ek letter ka fark, aur kist atak jaati hai.
        </p>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Ye dikkat hazaron kisanon ke saath hoti hai har saal. Aage ka process yahan diya hai — isme tumhe bataunga ki <strong>PM Kisan correction form kaise bharein</strong> — step-by-step, bilkul simple tarike se. Chahe naam ki spelling online theek karni ho, bank account update karna ho, ya phir Aadhaar seeding error fix karna ho... sab kuch cover karenge.
        </p>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src={article.ogImage || '/images/articles/pm-kisan-correction-form-2026/pm-kisan-correction-hero.webp'}
            alt="PM Kisan correction form 2026 — farmer fixing details on mobile phone in village"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Galat Details? Koi Baat Nahi, Aaj Hi Fix Karo.
          </p>
        </div>

        <section className="mb-8">
          <SH>Sabse Common Errors Jo Payment Rukwa Deti Hain</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Pehle ye samjho ki kaunsi galtiyaan sabse zyada hoti hain. Taki tum check kar sako ki tumhare case mein kya problem hai.
          </p>
          <div className="space-y-3 mb-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">Naam Spelling Mismatch</p>
              <p className="text-xs text-[var(--color-text-muted)]">Portal par ek spelling, bank mein dusri, Aadhaar par teesri. PFMS ko exact match chahiye. "Kumar" aur "Kumaar" mein bhi fark padta hai bhai.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">Wrong IFSC Code / Bank Account Issue</p>
              <p className="text-xs text-[var(--color-text-muted)]">Registration ke waqt jaldi mein ek digit galat daal diya, ya phir bank merge ho gaya toh purana IFSC kaam nahi karta. Ise fix karwana zaroori hai warna paisa bounce ho jayega.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">Aadhaar Seeding Nahi Hui</p>
              <p className="text-xs text-[var(--color-text-muted)]">Aadhaar link toh hai lekin NPCI mapper mein seeding nahi hui. Ye alag cheez hai bhai. Aksar log sochte hain ki Aadhaar link hone ke baad bhi payment kyun fail hua — yahi wajah hoti hai.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">Gender/DOB ya Mobile Number Galat</p>
              <p className="text-xs text-[var(--color-text-muted)]">Kabhi kabhi gender galat select ho jata hai, ya purana mobile number band ho gaya aur naya update nahi hai.</p>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Inme se koi bhi problem ho toh correction form bharna padta hai. Ab dekhte hain kaise bharna hai.
          </p>
        </section>

        <section className="mb-8">
          <SH>Step-by-Step: PM Kisan Portal Se Khud Correction Kaise Karein (Farmer Corner)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar tumhare paas smartphone/laptop hai aur thoda bahut internet chalana aata hai, toh <strong>ghar baithe khud correction kar sakte ho</strong>. CSC jaane ki zaroorat nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ye raha pura process naam online correct karne aur baaki details fix karne ke liye:
          </p>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> par jaao. Homepage par upar right side mein <strong>"Farmers Corner"</strong> ka option dikhega. Us par click karo.</SI>
            <SI n={2}>Farmers Corner ke page par <strong>"Edit Aadhaar Details"</strong> dhundo aur click karo. Ye option specifically un logon ke liye hai jinhone khud registration kiya tha aur ab usmein sudhaar karna chahte hain.</SI>
            <SI n={3}>Ab apna <strong>Registration Number</strong> daalo. Yaad nahi hai? Neeche "Know your registration no." link se Aadhaar ya mobile number se retrieve kar lo.</SI>
            <SI n={4}>Captcha code type karo aur <strong>"Get Data"</strong> button par click karo.</SI>
            <SI n={5}>Tumhari saari details screen par aa jayengi. Ab edit details wale section mein galat cheezon ko sahi karo — naam, bank account, IFSC, ya mobile number.</SI>
            <SI n={6}>Sahi karne ke baad niche <strong>"Update"</strong> button par click kar do. OTP aayega, verify karo. Bas ho gaya!</SI>
          </StepList>
          <IB>
            <strong>Chhota Sa Nuskha:</strong> Naam edit karte waqt dhyan rakhna — spelling bilkul wahi likho jo Aadhaar card aur bank passbook par hai. Ek space ya comma ka bhi fark payment rok sakta hai. Agar OTP nahi aa raha toh iske liye CSC jana padega, online koi doosra rasta nahi hai. Kabhi kabhi bank details update karte waqt server issue ki wajah se page kaam nahi karta — aise mein 2-3 ghante baad try karo.
          </IB>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-correction-form-2026/csc-center-correction.webp"
            alt="Farmer visiting CSC center for PM Kisan correction form filling with operator"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Internet Nahi Hai? CSC Center Se Karwao
          </p>
        </div>

        <section className="mb-8">
          <SH>CSC (Common Service Centre) Se Correction Kaise Karein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bahut se kisan bhaiyon ke paas smartphone nahi hota, ya internet chalana mushkil lagta hai. Koi baat nahi. CSC se correction kaise karte hain, ye dekho:
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Apne najdiki CSC (Common Service Centre) ya Jan Seva Kendra jao. Wahan ek operator baitha hota hai. Usko bolo ki "Bhaiya, PM Kisan ki details theek karni hain."
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Wo apna system khol ke edit details wale section mein jaayega. Tumhara Aadhaar number aur mobile number maangega. Biometric (fingerprint) se verify karega aur details update kar dega.
          </p>
          <WB>
            <strong>Kitna Kharcha?</strong> CSC wale ₹20 se ₹30 lete hain is kaam ke liye. Ye official charge hai. Agar koi ₹100-200 maang raha hai toh usko mat do, dusre center par chale jao. Kuch log form ka PDF khud download karke offline bharne ki koshish karte hain, lekin online submission ke liye CSC ya portal hi zaroori hai.
          </WB>
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
            <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">Self Correction vs CSC Correction — Kaunsa Behtar?</p>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Farq sirf speed ka hai. Online khud karo toh free hai par OTP chahiye. CSC se karo toh ₹30 lagte hain par biometric se instant verify ho jata hai. Agar mobile number active hai toh khud karo, agar band hai toh CSC jao.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <SH>Bank Account Correction Alag Se Kaise Kare (Bank Branch Visit)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ek baat samajh lo bhai — bank account update karna portal se alag process hai. Portal par tum naya number daal sakte ho, lekin agar bank ke system mein Aadhaar seeding nahi hai toh paisa aayega nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Isliye pehle bank jao. Branch manager se milo aur bolo: <em>"Mera PM Kisan ka paisa nahi aa raha, please Aadhaar seeding kar do aur NPCI mapping check kar lo."</em>
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Wo ek form denge (Aadhaar Seeding Form). Bharo, sign karo, submit karo. Jab wo backend se ye seeding error fix kar denge, tab portal par jaake naya account number update karna.
          </p>
          <DB>
            <strong>Zaruri Baat:</strong> Purana bank account tab tak band mat karna jab tak naye account mein pehli kist na aa jaye. Kabhi kabhi transition mein 1-2 mahine lag jate hain. Bank branch visit kiye bina ye kaam online nahi hoga — seeding ke liye jaana hi padega. Status mein agar "seeding pending" dikh raha hai toh iska matlab bank ne abhi NPCI mapper update nahi kiya — 7-10 din wait karo.
          </DB>
        </section>

        <div className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
          <Image
            src="/images/articles/pm-kisan-correction-form-2026/bank-branch-visit.webp"
            alt="Farmer at bank branch submitting Aadhaar seeding form for PM Kisan payment fix"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
            Bank Branch Mein Aadhaar Seeding Zaroori Hai
          </p>
        </div>

        <section className="mb-8">
          <SH>Correction Ke Baad Status Kaise Check Kare Aur Kitna Time Lagta Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Form bhar diya, details update kar diye. Ab sawal ye hai ki kaam kab hoga?
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Dekho, portal par correction ke baad <strong>7 se 15 din</strong> lagte hain details reflect hone mein. CSC se karwao toh thoda jaldi ho jata hai, lagbhag 5-7 din.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar tumhara application isi wajah se rejected hua tha ki details mismatch thi, toh correction ke baad status automatically "Active" ho jayega. Beneficiary Status page par jaake status check karte raho taaki pata chale ki update hua ya nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sabse bada sawal — correction ke baad kitne din mein paisa aayega? Jab details verify ho jayengi, agli scheduled kist mein paisa aa jayega. Agar beech mein kist release hui thi aur tumhari miss ho gayi thi, toh arrears ke roop mein 15-30 din mein extra amount credit hoga.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Aur ruki hui kist ka kya? Jab details fix ho jayengi, toh pichhli saari pending kistein ek saath aa jayengi. Koi paisa nahi dooba.
          </p>
        </section>

        <section className="mb-8">
          <SH>Common Mistakes Jo Dubara Na Kare</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Correction karte waqt kuch logon se aisi galtiyan ho jati hain ki phir se payment ruk jaati hai. Ye dhyan rakhna:
          </p>
          <div className="space-y-3 mb-4">
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">PM Kisan Mobile Number Update Bhool Jana</p>
              <p className="text-xs text-[var(--color-text-muted)]">Agar purana number band hai aur naya portal par update nahi kiya, toh OTP nahi aayega. Hamesha active number rakho. Purana sim na ho toh mobile number sirf CSC par biometric se hi badla ja sakta hai.</p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">Naam Correction Ke Liye Sahi Proof Na Hona</p>
              <p className="text-xs text-[var(--color-text-muted)]">Agar naam badla hai toh Gazette notification ya affidavit jaisa koi valid proof zaroori ho sakta hai. Bina proper proof ke portal par naam change approve nahi hoga.</p>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">PM Kisan Gender/DOB Correction Ignore Karna</p>
              <p className="text-xs text-[var(--color-text-muted)]">Agar Aadhaar par DOB alag hai aur portal par alag, toh verification fail ho jayega. Dono jagah same hona chahiye.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">PM Kisan Land Record Mismatch Solution Na Dhundhna</p>
              <p className="text-xs text-[var(--color-text-muted)]">Agar zameen ka record sarkari database (Bhulekh/Bhoomi) mein galat hai, toh portal par correction kaam nahi karega. Pehle Patwari se land record theek karwao.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">PM Kisan Beneficiary Status Inactive Reason Samjhe Bina Chhod Dena</p>
              <p className="text-xs text-[var(--color-text-muted)]">Agar status "Inactive" dikh raha hai toh samjho koi detail galat hai. Iski asli wajah jaanne ke liye helpline 155261 par call karo ya CSC se check karwao. Ise ignore mat karo.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Correction Form — Puchhe Gaye Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Correction Form FAQ 2026 — Real Answers" />
        </section>

        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Is Kaam Ka Rate ₹30 Hai, ₹500 Nahi</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Correction ka poora kaam portal par khud karne par free hai aur CSC par lagbhag ₹30 ka. Agent ₹500-1000
            isliye maang lete hain kyunki kist rukne ka dabaav aapke paas hota hai, unke paas nahi — rate pata hona
            hi is page ka sabse mehenga hissa hai.
          </p>
          <p className="text-xs text-green-700 dark:text-green-400 italic">
            Correction submit hone ke baad bhi status na badle toh helpline 155261 par call karein, aur uske baad
            district agriculture office mein written complaint dein — likhi hui shikayat par diary number milta hai,
            jisse aap aage follow-up kar sakte hain.
          </p>
        </div>

        <GovLink
          href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
          label="PM Kisan Beneficiary Status — Check After Correction"
          guide="Abhi Status Check Karo"
          guideHref="/articles/PmKisanMasterGuide2026"
          portalName="pmkisan.gov.in"
        />

        <CalcBanner
          title="Apni Kist Track Karo"
          desc="Correction ke baad kitni kist pending hai — jaano"
          primaryCta={{ href: '/calculator/installment-tracker', label: 'Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: 'Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanMasterGuide2026', l: 'Master Guide' },
          { href: '/articles/PmKisanPaymentFailedFix2026', l: 'Payment Fix' },
          { href: '/articles/PmKisanEkycOnline2026', l: 'eKYC' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}
