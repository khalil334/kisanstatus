'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SI, StepList, IB, WB, DB, SH, GovLink, RelatedArticles, AuthorBox, BottomNav, Disclaimer, CalcBanner, FAQBlock, fmtDate } from '@/components/ArticleShared';
import type { ArticleMeta } from '@/lib/articles-data';

const PUBLISHED = '2026-07-08T08:00:00+05:30';
const MODIFIED = '2026-07-08T08:00:00+05:30';

const RELATED = [
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Complete Guide', emoji: '📚' },
  { slug: 'PmKisan24viKist2026', title: '24vi Kist Status Check', emoji: '📅' },
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed Fix', emoji: '💸' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Kaise Karein', emoji: '🔐' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List Check', emoji: '📋' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Loan Apply', emoji: '💳' },
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
      {/* Header */}
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
            <span>✍️ <Link href="/about" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded">KisanStatus Team</Link></span>
            <span>📅 {fmtDate(PUBLISHED)}</span>
            <span>🔄 Updated: {fmtDate(MODIFIED)}</span>
            <span>⏱️ 8 min read</span>
          </div>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">

        {/* Intro */}
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Dekho bhai, PM Kisan ki baat ho rahi hai toh sabse pehli problem jo har kisan ko aati hai — <strong>galat details</strong>.
        </p>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Haan, bilkul wahi. Naam mein spelling mistake, bank account number galat, IFSC code mismatch, Aadhaar seeding error... ye sab chhoti chhoti cheezein lagti hain lekin inki wajah se <strong>poori kist ruk jaati hai</strong>.
        </p>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
          Mere ek kisan bhai Ramesh (Bihar se) ne bataya tha — unka naam portal par "RAMESH KUMAR" tha lekin bank mein "RAMESH KUAMR" likha tha. Bas ek letter ka difference! Aur unki <strong>3 mahine ki kist atak gayi thi</strong>.
        </p>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
          Aisa sirf Ramesh ke saath nahi, hazaron kisanon ke saath hota hai har saal. Lekin tension mat lo. Aaj main tumhe bataunga ki <strong>PM Kisan correction form kaise bharein</strong> — step-by-step, bilkul simple tarike se. Chahe <strong>pm kisan name spelling mistake fix online</strong> karna ho, bank account update karna ho, ya phir Aadhaar seeding error fix karna ho... sab kuch cover karenge.
        </p>

        {/* IMAGE 1: Hero */}
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

        {/* Section 1: Common Errors */}
        <section className="mb-8">
          <SH>Sabse Common Errors Jo Payment Rukwa Deti Hain</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Pehle ye samjho ki kaunsi galtiyaan sabse zyada hoti hain. Taki tum check kar sako ki tumhare case mein kya problem hai.
          </p>
          <div className="space-y-3 mb-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">❌ Naam Spelling Mismatch</p>
              <p className="text-xs text-[var(--color-text-muted)]">Portal par ek spelling, bank mein dusri, Aadhaar par teesri. PFMS ko exact match chahiye. "Kumar" aur "Kumaar" mein bhi fark padta hai bhai.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">❌ Wrong IFSC Code / Bank Account Issue</p>
              <p className="text-xs text-[var(--color-text-muted)]">Registration ke waqt jaldi mein ek digit galat daal diya, ya phir bank merge ho gaya toh purana IFSC kaam nahi karta. <strong>Pm kisan wrong ifsc code correction</strong> zaroori hai warna paisa bounce ho jayega.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">❌ Aadhaar Seeding Nahi Hui</p>
              <p className="text-xs text-[var(--color-text-muted)]">Aadhaar link toh hai lekin NPCI mapper mein seeding nahi hui. Ye alag cheez hai bhai. Aksar log sochte hain ki <strong>pm kisan aadhaar link but payment failed</strong> kyun hua — yahi wajah hoti hai.</p>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="font-black text-red-800 dark:text-red-300 text-sm mb-1">❌ Gender/DOB ya Mobile Number Galat</p>
              <p className="text-xs text-[var(--color-text-muted)]">Kabhi kabhi gender galat select ho jata hai, ya purana mobile number band ho gaya aur naya update nahi hai.</p>
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            Inme se koi bhi problem ho toh correction form bharna padta hai. Ab dekhte hain kaise bharna hai.
          </p>
        </section>

        {/* Section 2: Portal Correction */}
        <section className="mb-8">
          <SH>Step-by-Step: PM Kisan Portal Se Khud Correction Kaise Karein (Farmer Corner)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar tumhare paas smartphone/laptop hai aur thoda bahut internet chalana aata hai, toh <strong>ghar baithe khud correction kar sakte ho</strong>. CSC jaane ki zaroorat nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ye raha pura process <strong>pm kisan naam correction online</strong> aur baaki details fix karne ke liye:
          </p>
          <StepList>
            <SI n={1}><strong>pmkisan.gov.in</strong> par jaao. Homepage par upar right side mein <strong>"Farmers Corner"</strong> ka option dikhega. Us par click karo.</SI>
            <SI n={2}>Farmers Corner ke page par <strong>"Edit Aadhaar Details"</strong> dhundo aur click karo. Ye option specifically un logon ke liye hai jo <strong>pm kisan self registered farmer correction</strong> karna chahte hain.</SI>
            <SI n={3}>Ab apna <strong>Registration Number</strong> daalo. Yaad nahi hai? Neeche "Know your registration no." link se Aadhaar ya mobile number se retrieve kar lo.</SI>
            <SI n={4}>Captcha code type karo aur <strong>"Get Data"</strong> button par click karo.</SI>
            <SI n={5}>Tumhari saari details screen par aa jayengi. Ab <strong>pm kisan farmer corner edit details</strong> wale section mein galat cheezon ko sahi karo — naam, bank account, IFSC, ya mobile number.</SI>
            <SI n={6}>Sahi karne ke baad niche <strong>"Update"</strong> button par click kar do. OTP aayega, verify karo. Bas ho gaya!</SI>
          </StepList>
          
          {/* ✅ NEW KEYWORD ADDED NATURALLY */}
          <IB>
            <strong>Pro Tip:</strong> Naam edit karte waqt dhyan rakhna — spelling bilkul wahi likho jo Aadhaar card aur bank passbook par hai. Ek space ya comma ka bhi fark payment rok sakta hai. Agar OTP nahi aa raha toh <strong>pm kisan edit aadhaar details otp not coming</strong> problem ke liye CSC jana padega. Kabhi kabhi <strong>pm kisan edit bank details not working</strong> hota hai server issue ki wajah se — aise mein 2-3 ghante baad try karo.
          </IB>
        </section>

        {/* IMAGE 2: CSC Center */}
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

        {/* Section 3: CSC Correction */}
        <section className="mb-8">
          <SH>CSC (Common Service Centre) Se Correction Kaise Karein</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Bahut se kisan bhaiyon ke paas smartphone nahi hota, ya internet chalana mushkil lagta hai. Koi baat nahi. <strong>Pm kisan CSC se correction kaise kare</strong>, ye dekho:
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Apne najdiki CSC (Common Service Centre) ya Jan Seva Kendra jao. Wahan ek operator baitha hota hai. Usko bolo ki "Bhaiya, PM Kisan ki details theek karni hain."
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Wo apna system khol ke <strong>pm kisan farmer corner edit details</strong> wale section mein jaayega. Tumhara Aadhaar number aur mobile number maangega. Biometric (fingerprint) se verify karega aur details update kar dega.
          </p>
          
          {/* ✅ NEW KEYWORD ADDED NATURALLY */}
          <WB>
            <strong>Kitna Kharcha?</strong> CSC wale ₹20 se ₹30 lete hain is kaam ke liye. Ye official charge hai. Agar koi ₹100-200 maang raha hai toh usko mat do, dusre center par chale jao. Kuch log <strong>pm kisan correction form pdf download</strong> ya <strong>pm kisan correction form offline download</strong> karke khud bharne ki koshish karte hain, lekin online submission ke liye CSC ya portal hi zaroori hai.
          </WB>
          
          {/* ✅ SELF VS CSC COMPARISON */}
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
            <p className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">🤔 Self Correction vs CSC Correction — Kaunsa Behtar?</p>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              <strong>Pm kisan self correction vs csc correction</strong> mein farq sirf speed ka hai. Online khud karo toh free hai par OTP chahiye. CSC se karo toh ₹30 lagte hain par biometric se instant verify ho jata hai. Agar mobile number active hai toh khud karo, agar band hai toh CSC jao.
            </p>
          </div>
        </section>

        {/* Section 4: Bank Account Correction */}
        <section className="mb-8">
          <SH>Bank Account Correction Alag Se Kaise Kare (Bank Branch Visit)</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Ek baat samajh lo bhai — <strong>pm kisan bank account update kaise kare</strong>, ye portal se alag process hai. Portal par tum naya number daal sakte ho, lekin agar bank ke system mein Aadhaar seeding nahi hai toh paisa aayega nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Isliye pehle bank jao. Branch manager se milo aur bolo: <em>"Mera PM Kisan ka paisa nahi aa raha, please Aadhaar seeding kar do aur NPCI mapping check kar lo."</em>
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Wo ek form denge (Aadhaar Seeding Form). Bharo, sign karo, submit karo. Jab wo backend se <strong>pm kisan aadhaar seeding error fix</strong> kar denge, tab portal par jaake naya account number update karna.
          </p>
          
          {/* ✅ NEW KEYWORD ADDED NATURALLY */}
          <DB>
            <strong>Zaruri Baat:</strong> Purana bank account tab tak band mat karna jab tak naye account mein pehli kist na aa jaye. Kabhi kabhi transition mein 1-2 mahine lag jate hain. Agar tum soch rahe ho ki <strong>pm kisan bank account change without visiting branch</strong> ho jayega, toh wo possible nahi hai — seeding ke liye branch visit zaroori hai. Status mein agar <strong>pm kisan bank seeding pending meaning</strong> dikh raha hai toh iska matlab bank ne abhi NPCI mapper update nahi kiya — 7-10 din wait karo.
          </DB>
        </section>

        {/* IMAGE 3: Bank Branch */}
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

        {/* Section 5: Status & Time */}
        <section className="mb-8">
          <SH>Correction Ke Baad Status Kaise Check Kare Aur Kitna Time Lagta Hai</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Form bhar diya, details update kar diye. Ab sawal ye hai ki kaam kab hoga?
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Dekho, portal par correction ke baad <strong>7 se 15 din</strong> lagte hain details reflect hone mein. CSC se karwao toh thoda jaldi ho jata hai, lagbhag 5-7 din.
          </p>
          
          {/* ✅ NEW KEYWORD ADDED NATURALLY */}
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Agar tumhara <strong>pm kisan application rejected reason</strong> details mismatch tha, toh correction ke baad status automatically "Active" ho jayega. Beneficiary Status page par jaake <strong>pm kisan correction status check online</strong> karte raho taaki pata chale ki update hua ya nahi.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Sabse bada sawal — <strong>pm kisan correction ke baad kitne din mein paisa aayega</strong>? Jab details verify ho jayengi, agli scheduled kist mein paisa aa jayega. Agar beech mein kist release hui thi aur tumhari miss ho gayi thi, toh arrears ke roop mein 15-30 din mein extra amount credit hoga.
          </p>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Aur haan, ruki hui kist ka kya? Tension mat lo. Jab details fix ho jayengi, toh pichhli saari pending kistein ek saath aa jayengi. Koi paisa nahi dooba.
          </p>
        </section>

        {/* Section 6: Common Mistakes */}
        <section className="mb-8">
          <SH>Common Mistakes Jo Dubara Na Kare</SH>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
            Correction karte waqt kuch logon se aisi galtiyan ho jati hain ki phir se payment ruk jaati hai. Ye dhyan rakhna:
          </p>
          <div className="space-y-3 mb-4">
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">⚠️ PM Kisan Mobile Number Update Bhool Jana</p>
              <p className="text-xs text-[var(--color-text-muted)]">Agar purana number band hai aur naya portal par update nahi kiya, toh OTP nahi aayega. Hamesha active number rakho. <strong>Pm kisan mobile number change without old sim</strong> sirf CSC par biometric se hi possible hai.</p>
            </div>
            
            {/* ✅ NEW KEYWORD ADDED NATURALLY */}
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">⚠️ PM Kisan Name Correction Certificate Format Galat Hona</p>
              <p className="text-xs text-[var(--color-text-muted)]">Agar naam badla hai toh Gazette notification ya <strong>pm kisan name correction certificate format</strong> wali affidavit zaroori ho sakti hai. Bina proper proof ke portal par naam change approve nahi hoga.</p>
            </div>
            
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">⚠️ PM Kisan Gender/DOB Correction Ignore Karna</p>
              <p className="text-xs text-[var(--color-text-muted)]">Agar Aadhaar par DOB alag hai aur portal par alag, toh verification fail ho jayega. Dono jagah same hona chahiye.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">⚠️ PM Kisan Land Record Mismatch Solution Na Dhundhna</p>
              <p className="text-xs text-[var(--color-text-muted)]">Agar zameen ka record sarkari database (Bhulekh/Bhoomi) mein galat hai, toh portal par correction kaam nahi karega. Pehle Patwari se land record theek karwao.</p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <p className="font-black text-amber-800 dark:text-amber-300 text-sm mb-1">⚠️ PM Kisan Beneficiary Status Inactive Reason Samjhe Bina Chhod Dena</p>
              <p className="text-xs text-[var(--color-text-muted)]">Agar status "Inactive" dikh raha hai toh samjho koi detail galat hai. <strong>Pm kisan beneficiary status inactive reason</strong> jaanne ke liye helpline 155261 par call karo ya CSC se check karwao. Ise ignore mat karo.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
            Aksar Puche Jane Wale Sawal
          </h2>
          <FAQBlock faqs={FAQS_DATA} caption="PM Kisan Correction Form FAQ 2026 — Real Answers" />
        </section>

        {/* Action Conclusion */}
        <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-2xl">
          <h3 className="font-black text-green-800 dark:text-green-300 text-lg mb-3">Aaj Hi Correction Kar Do</h3>
          <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed mb-3">
            Bhai, der mat karo. Jitni jaldi details theek karoge, utni jaldi agli kist aa jayegi. Aur haan — CSC wale ya koi agent ko ₹500-1000 mat do. Ye kaam ₹30 mein ho jata hai, ya ghar baithe free mein.
          </p>
          <p className="text-xs text-green-700 dark:text-green-400 italic">
            💡 Agar koi dikkat aaye toh helpline 155261 par call karna ya district agriculture office ka chakkar laga lena. Written complaint sabse tez kaam karti hai.
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
          icon="📅"
          title="Apni Kist Track Karo"
          desc="Correction ke baad kitni kist pending hai — jaano"
          primaryCta={{ href: '/calculator/installment-tracker', label: '📅 Tracker Kholo →' }}
          secondaryCta={{ href: '/calculator/pm-kisan-benefit', label: '💰 Benefit Calculator' }}
        />

        <RelatedArticles articles={RELATED} />
        <AuthorBox modified={MODIFIED} />
        <BottomNav extraLinks={[
          { href: '/articles/PmKisanMasterGuide2026', l: '📚 Master Guide' },
          { href: '/articles/PmKisanPaymentFailedFix2026', l: '💸 Payment Fix' },
          { href: '/articles/PmKisanEkycOnline2026', l: '🔐 eKYC' },
        ]} />
        <Disclaimer />
      </div>
    </>
  );
}