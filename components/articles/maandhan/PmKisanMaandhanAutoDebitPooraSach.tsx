'use client';

import Image from 'next/image';
import Link from 'next/link';
import ExternalLinkButton from '@/components/ExternalLinkButton';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://kisanstatus.com/articles/pm-kisan-maandhan-auto-debit-poora-sach/#article',
      headline: 'PM Kisan Se Maandhan Ka Paisa Kyun Kat Raha Hai? Auto Debit Ka Poora Sach',
      description: 'PM Kisan ke ₹2000 mein se ₹55-200 kyun kat rahe hain? NACH auto-debit mandate, CSC pe sign kiya gaya form, aur contribution pay karne ka asli process samjhiye.',
      author: { '@type': 'Organization', name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' },
      publisher: { '@type': 'Organization', name: 'KisanStatus.com', logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.webp' } },
      datePublished: '2026-07-24',
      dateModified: '2026-07-24',
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kisanstatus.com/articles/pm-kisan-maandhan-auto-debit-poora-sach/' }
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://kisanstatus.com/articles/pm-kisan-maandhan-auto-debit-poora-sach/#faq',
      mainEntity: [
        { '@type': 'Question', name: 'PM Kisan ke ₹2000 mein se ₹55 kyun kat gaye?', acceptedAnswer: { '@type': 'Answer', text: 'Jab aap PM Kisan Maandhan Yojana mein register karte hain, toh aapka bank account NACH auto-debit mandate ke liye link ho jata hai. Har baar jab PM Kisan ki kist aati hai, toh usme se aapka monthly share (₹55 se ₹200 tak) automatically kat jata hai.' } },
        { '@type': 'Question', name: 'Auto-debit band kaise karein PM Kisan Maandhan se?', acceptedAnswer: { '@type': 'Answer', text: 'Apni bank branch jakar NACH mandate cancellation form submit karein, ya net banking/mobile banking ke "Mandates" section se cancel karein. 5-7 din mein process complete ho jata hai. Cancellation ka acknowledgement receipt zaroor lein.' } },
        { '@type': 'Question', name: 'Kya PM Kisan aur PM Kisan Maandhan alag scheme hain?', acceptedAnswer: { '@type': 'Answer', text: 'Haan, dono bilkul alag hain. PM Kisan Samman Nidhi mein government aapko ₹6000 saal deti hai. PM Kisan Maandhan mein aap khud share dete hain taaki 60 saal ke baad ₹3000 pension mile. Dono ka koi direct link nahi hai, bas ek optional facility hai ke PM Kisan ki kist se aapka Maandhan share kat jaye.' } }
      ]
    }
  ]
};

export default function PmKisanMaandhanAutoDebitPooraSach() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 text-gray-800 dark:text-gray-200 leading-relaxed prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-sm text-gray-500 mb-4 not-prose">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/articles/maandhan" className="hover:text-blue-600">Maandhan Yojana</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">Auto Debit Ka Sach</span>
      </nav>

      <Image
        src="/images/articles/maandhan/auto-debit-confusion-hero.webp"
        alt="Farmer checking bank passbook confused about PM Kisan Maandhan auto debit deduction"
        width={1200}
        height={630}
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
        PM Kisan Se Maandhan Ka Paisa Kyun Kat Raha Hai? Auto Debit Ka Poora Sach
      </h1>

      <p className="text-sm text-gray-500 mb-6 not-prose">
        <em>Written by KisanStatus Research Team | Last verified: July 24, 2026 | Sources: PIB Official Release (Sep 2024), PM-KMY Operational Guidelines (DAC&FW, Ministry of Agriculture &amp; Farmers Welfare), maandhan.in</em>
      </p>

      <div className="mb-8 p-5 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-600 not-prose shadow-sm">
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
          <strong>Seedhi baat:</strong> Agar aapke PM Kisan ke ₹2000 mein se ₹55, ₹100, ya ₹200 kat rahe hain aur aapko samajh nahi aa raha ke yeh kahan jaa raha hai — toh ghabraiye mat. Aapne hi CSC center pe ek form sign kiya tha jismein likha tha ke PM Kisan ki kist se aapka Maandhan share kat jaye. Yeh chori nahi hai, yeh aapki khud ki pension ka hissa hai.
        </p>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        PM Kisan Maandhan Yojana (PM-KMY) mein register karne ke baad kai farmers ke bank account se har kist ke saath ek fixed amount kat ta hai. Iska reason yeh hai ke enrollment ke waqt aapne ek NACH (National Automated Clearing House) auto-debit mandate sign kiya tha. Is mandate ke zariye aapne apne bank ko permission di thi ke jab bhi PM Kisan Samman Nidhi ki kist aaye, toh usme se aapka monthly share directly pension fund mein transfer kar diya jaye. Yeh process government ke official operational guidelines ke hisaab se chalta hai, jise LIC of India manage karti hai aur IDBI Bank sponsor bank ke taur par kaam karta hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Aaj ke is guide mein main aapko bataunga ke yeh auto-debit kaise kaam karta hai, kyun kat ta hai, kitna kat ta hai, aur agar aap chahein toh is process ko kaise control kar sakte hain. Saath hi yeh bhi samjhaunga ke agar kisi mahine payment miss ho jaye toh kya hota hai, aur default hone se kaise bacha jaye. Sab kuch official sources — PIB release, DAC&FW operational guidelines, aur maandhan.in portal — se verify karke.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        PM Kisan aur PM Kisan Maandhan — Dono Alag Alag Hain, Link Sirf Ek Optional Facility Hai
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Sabse pehle ek basic confusion door karte hain. Bahut se kisan sochte hain ke PM Kisan aur PM Kisan Maandhan ek hi scheme hai. Nahi. Dono bilkul alag hain, alag ministry handle karti hai, aur alag purpose serve karte hain.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        PM Kisan Samman Nidhi ek direct benefit transfer scheme hai jismein government har saal ₹6000 aapke account mein bhejti hai — ₹2000 har 4 mahine mein. Ismein aapko kuch bhi pay nahi karna padta. Bas eligible hona chahiye.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        PM Kisan Maandhan Yojana ek contributory pension scheme hai. Ismein aap 18-40 saal ki umar ke beech join kar sakte hain. 60 saal ke baad aapko ₹3000 monthly pension milti hai. Lekin iske liye aapko har mahine ek fixed amount pay karna padta hai — jo aapki entry age ke hisaab se ₹55 se ₹200 tak hota hai. Government bhi utna hi amount match karti hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Ab dono ka connection kya hai? Bas itna ke government ne ek optional facility di hai ke agar aap PM Kisan ke beneficiary hain, toh aap apna Maandhan share PM Kisan ki kist se katwa sakte hain. Isse aapko alag se cash jama karne ki tension nahi hoti. Lekin yeh optional tha — aapne enrollment ke waqt chuna tha. Agar aapne nahi chuna tha, toh aapke PM Kisan ke paise se kuch nahi katega.
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm shadow-sm">
          <thead className="bg-green-100 dark:bg-green-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">Cheez</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">PM Kisan Samman Nidhi</th>
              <th className="py-3 px-4 border-b text-left text-green-900 dark:text-green-200">PM Kisan Maandhan Yojana</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Nature</td>
              <td className="py-3 px-4">Direct income support — government gives money</td>
              <td className="py-3 px-4">Contributory pension — you save for old age</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Your role</td>
              <td className="py-3 px-4">Nothing — just be eligible</td>
              <td className="py-3 px-4">Pay monthly share till age 60</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-3 px-4 font-medium">Money flow</td>
              <td className="py-3 px-4">Govt → Your account</td>
              <td className="py-3 px-4">Your account → Pension fund (managed by LIC)</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800/50">
              <td className="py-3 px-4 font-medium">Link between both</td>
              <td className="py-3 px-4" colSpan={2}>Optional: You can choose to deduct Maandhan share from PM Kisan benefit</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Image
        src="/images/articles/maandhan/csc-center-registration-form.webp"
        alt="CSC center pe farmer auto-debit mandate form sign kar raha hai with CSC operator"
        width={800}
        height={450}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        NACH Auto-Debit Mandate: CSC Pe Aapne Kya Sign Kiya Tha?
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Jab aap CSC center pe gaye the PM-KMY ke liye enroll karne, toh operator ne aapko ek "enrolment-cum-auto-debit mandate form" diya tha. Is form ke last section mein ek declaration hota hai jismein likha hota hai ke aap authorize kar rahe hain ke aapke bank account se monthly contribution automatically debit ho jaye.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Agar aap PM Kisan ke beneficiary hain, toh alag se ek form aur hota hai — "enrolment-cum-auto-debit-mandate form for PM-Kisan benefits." Ismein aap specifically allow karte hain ke jis account mein PM Kisan ki kist aati hai, usi se aapka Maandhan share kat jaye.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Yeh form sign karne ke baad CSC operator uska scanned copy upload karta hai CSC-SPV system mein. Uske baad yeh data LIC ko transfer hota hai T+1 basis pe. LIC sponsor bank (IDBI) ke through NPCI portal pe mandate register karwati hai. Jab tak bank mandate confirm nahi karta, tab tak auto-debit start nahi hota.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Kai baar CSC operator jaldi jaldi mein form bharte hain aur farmer ko theek se nahi batate ke exactly kya sign ho raha hai. Kuch operators keh dete hain ke "Bas yeh PM Kisan ka form hai, sign kar do." Farmer samajhta hai ke sirf PM Kisan ki kist ke liye sign kar raha hai, jabki asal mein woh auto-debit mandate sign kar raha hota hai. Isliye hamesha form ke har section ko dhyan se padhein, aur agar kuch samajh nahi aaye toh operator se poochhein.
      </p>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg mb-8 border border-yellow-200 dark:border-yellow-800 not-prose">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong>Important:</strong> Agar aapko yaad nahi ke auto-debit ka option select kiya tha ya nahi, toh apna bank passbook check karein. Agar PM Kisan ki kist ke saath hi ₹55, ₹100, ya ₹200 kat rahe hain, toh iska matlab aapne woh option chuna tha. Passbook mein "NACH Debit" ya "LIC-PMKMY" jaisa description dikhega.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Kitna Paisa Kat Ta Hai? Official Age-Wise Contribution Chart (PIB Verified)
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Har kisan ka monthly share alag hota hai. Yeh aapki entry age par depend karta hai. Jitni kam umar pe join karenge, utna kam dena hoga. Government bhi utna hi match karegi. Yeh table PIB ke official release (September 2024) aur DAC&FW operational guidelines se li gayi hai.
      </p>

      <div className="overflow-x-auto mb-8 not-prose">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden text-sm shadow-sm">
          <thead className="bg-blue-100 dark:bg-blue-900/40">
            <tr>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Entry Age</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Aapka Share (₹/month)</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Govt Match (₹/month)</th>
              <th className="py-3 px-4 border-b text-left text-blue-900 dark:text-blue-200">Total Fund Mein (₹/month)</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="border-b border-gray-100 dark:border-gray-700"><td className="py-3 px-4">18</td><td className="py-3 px-4 font-semibold">₹55</td><td className="py-3 px-4">₹55</td><td className="py-3 px-4">₹110</td></tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"><td className="py-3 px-4">20</td><td className="py-3 px-4 font-semibold">₹61</td><td className="py-3 px-4">₹61</td><td className="py-3 px-4">₹122</td></tr>
            <tr className="border-b border-gray-100 dark:border-gray-700"><td className="py-3 px-4">22</td><td className="py-3 px-4 font-semibold">₹68</td><td className="py-3 px-4">₹68</td><td className="py-3 px-4">₹136</td></tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"><td className="py-3 px-4">25</td><td className="py-3 px-4 font-semibold">₹80</td><td className="py-3 px-4">₹80</td><td className="py-3 px-4">₹160</td></tr>
            <tr className="border-b border-gray-100 dark:border-gray-700"><td className="py-3 px-4">28</td><td className="py-3 px-4 font-semibold">₹95</td><td className="py-3 px-4">₹95</td><td className="py-3 px-4">₹190</td></tr>
            <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"><td className="py-3 px-4">30</td><td className="py-3 px-4 font-semibold">₹105</td><td className="py-3 px-4">₹105</td><td className="py-3 px-4">₹210</td></tr>
            <tr className="border-b border-gray-100 dark:border-gray-700"><td className="py-3 px-4">35</td><td className="py-3 px-4 font-semibold">₹150</td><td className="py-3 px-4">₹150</td><td className="py-3 px-4">₹300</td></tr>
            <tr className="bg-green-50 dark:bg-green-900/20"><td className="py-3 px-4 font-bold">40</td><td className="py-3 px-4 font-bold">₹200</td><td className="py-3 px-4 font-bold">₹200</td><td className="py-3 px-4 font-bold">₹400</td></tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">Source: PM-KMY Operational Guidelines (DAC&FW) — Entry Age-Specific Monthly Contribution Chart; PIB Official Release, Pradhan Mantri Kisan Maan-Dhan Yojana — Five Successful Years (Sep 2024)</p>
      </div>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Toh agar aap 25 saal ke hain aur aapka share ₹80 hai, toh PM Kisan ki ₹2000 ki kist mein se sirf ₹80 katenge. Baaki ₹1920 aapke account mein rahenge.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Lekin kai baar unhe lagta hai ke pura ₹2000 khatam ho gaya, jabki asal mein sirf ₹80 kata hai. Isliye passbook dhyan se padhein. Agar aapko lagta hai ke zyada kat raha hai, toh ho sakta hai aapki umar galt enter hui ho CSC pe. Date of birth kabhi change nahi hoti, lekin agar galti se galat daal di gayi ho toh aapka share alag calculate hoga. Iske liye CSC pe correction request daalni padti hai.
      </p>

      <Image
        src="/images/articles/maandhan/bank-passbook-deduction-entry.webp"
        alt="Bank passbook showing PM Kisan credit and Maandhan auto debit deduction entries"
        width={800}
        height={450}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Agar Bank Account Mein Balance Nahi Hai Toh Kya Hota Hai? Default Ka Exact Process
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Yeh sabse important section hai. Kai kisan sochte hain ke "Maine toh auto-debit band kar diya tha apne man se, ab kuch nahi hoga." Lekin aisa nahi chalta. NACH mandate aapke bank mein tab tak active rehta hai jab tak aap officially cancel nahi karwate.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Jab aapka monthly share due hota hai, toh LIC demand generate karti hai. Sponsor bank IDBI usse NPCI ke through aapke bank ko bhejta hai. Aapke bank try karta hai amount debit karne ka. Agar balance nahi hai, toh debit fail ho jata hai. Isko "bounced debit" kehte hain.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Ab yahan official guidelines ka exact process samajhna zaroori hai. DAC&FW ke operational guidelines ke hisaab se, agar auto-debit fail hota hai, toh account "default" mein chala jata hai. Lekin turant khatra nahi hai. LIC demand ko agle payment cycle mein dobara raise karti hai. Payment cycles har mahine 1st, 11th, aur 21st ko hote hain. Agar yeh dates public holiday hain, toh agla working day hota hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        <strong>Default regularization ka process:</strong>
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Pehle mahine (first unpaid contribution se 1 mahine tak): Koi late fee nahi lagti. Aap sirf due amount pay karke account regular karwa sakte hain. Teen payment cycles tak demand raise hoti hai bina kisi interest ke.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        1 mahine ke baad: Late fee lagti hai jo savings bank interest rate ke barabar hoti hai. Agar default 12 mahine se kam hai, toh simple interest calculate hota hai. Agar 12 mahine se zyada ho gaya, toh completed years ke liye compounding interest aur bache hue months ke liye simple interest lagta hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        6 mahine tak payment nahi hui: Account status "dormant" ho jata hai. Ab further demand raise nahi hoti, lekin 3 saal tak SMS alerts aate rehte hain. Is dauran bhi aap entire outstanding amount + interest jama karke account regular karwa sakte hain.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        3 saal ke baad: SMS alerts band ho jate hain, lekin aap phir bhi call center ya online inquiry karke status check kar sakte hain. Account regularize karne ka option ab bhi available hai — poora due amount + applicable interest jama karke. Yeh sab official operational guidelines mein clearly mentioned hai.
      </p>

      <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg mb-8 border border-red-200 dark:border-red-800 not-prose">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong>Default hone se bachne ke liye:</strong> Har hafte apne bank account ka balance check karein. Agar auto-debit fail ho, toh turant CSC center jakar manual payment karein. 3 mahine se zyada gap mat dein. Agar kisi mahine PM Kisan ki kist late aayi, toh manual payment ka option use karein. Status ya sahayata ke liye maandhan.in par diya gaya official helpline number ya nazdeeki CSC center check karein.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Auto-Debit Band Kaise Karein? Bank Mein NACH Mandate Cancellation Ka Exact Process
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Agar aap chahte hain ke PM Kisan ke paise se share na kata jaye, balki aap khud alag se jama karein, toh aap auto-debit band karwa sakte hain. Lekin band karne se aapka monthly payment band nahi hota — aapko khud se jama karna padta hai, warna default ho jayega.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        NACH mandate cancel karne ke do tareeke hain. Pehla online: apne bank ke net banking ya mobile banking app mein login karein. "Mandates" ya "Standing Instructions" section mein jayein. Active mandates ki list mein PM-KMY ya LIC wala mandate dhundein. Uspe "Cancel" ya "Delete" karein. Confirmation ke baad ek reference number milega — usse save kar lein. NPCI guidelines ke hisaab se cancellation 5 working days mein complete ho jata hai. Aapko confirmation SMS aayega jismein UMR number, entity name, account ke last 4 digits, aur cancellation date likhi hogi.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Dusra tareeqa bank branch ja kar: Apni bank branch mein jayein aur NACH mandate cancellation form maangein. Form mein account number, mandate reference number (agar pata ho), scheme name (PM Kisan Maandhan Yojana), aur cancellation reason likhein. Saath mein Aadhaar card aur bank passbook le jayein. Form submit karne ke baad bank se acknowledgement receipt zaroor lein. RBI aur NPCI guidelines ke hisaab se koi cancellation charge nahi lagti. Process 5-7 working days mein complete hota hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Ek important baat: Mandate cancel karne se aapka PM-KMY account band nahi hota. Sirf auto-debit band hota hai. Aapko ab har mahine khud se payment karni hogi — chahe CSC center ja kar cash dein, ya maandhan.in pe online pay karein, ya bank branch mein jama karwayein. Agar payment miss hui, toh wohi default process shuru ho jayega jo upar explain kiya gaya hai.
      </p>

      <Image
        src="/images/articles/maandhan/bank-mandate-cancellation-form.webp"
        alt="Bank NACH mandate cancellation form being filled by farmer with bank officer"
        width={800}
        height={450}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Manual Payment Ke Tareeke: Jab Auto-Debit Band Ho Gaya
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Auto-debit band karne ke baad aapke paas 3 tareeke hain apna share jama karne ke.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        <strong>CSC Center:</strong> Yeh sabse aasan tareeqa hai gaon mein rehne wale farmers ke liye. Apne nazdeeki CSC center jayein. VLE (Village Level Entrepreneur) ke paas PM-KMY portal ka access hota hai. Aap cash dekar apna due amount jama karwa sakte hain. CSC wala aapko ek receipt dega — usse sambhal kar rakhein. Enrollment ke waqt CSC ₹30 charge leta hai jo state government bharegi, lekin regular contribution jama karne ka charge alag se poochh lein.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        <strong>Online (maandhan.in):</strong> Agar aapke paas smartphone hai aur thodi internet samajh hai, toh aap official portal pe login karke payment kar sakte hain. Debit card, UPI, ya net banking se transaction ho jata hai. Login ke liye aapka registered mobile number aur OTP chahiye hoga.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        <strong>Bank Branch:</strong> Kuch banks direct contribution accept karti hain pension schemes ke liye. Apni bank branch mein poochhiye ke kya woh PM-KMY ka payment accept karti hain. Agar haan, toh aap wahan cash ya cheque se jama karwa sakte hain. Lekin yeh facility har bank mein available nahi hoti, isliye pehle confirm kar lein.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg mb-8 border border-blue-200 dark:border-blue-800 not-prose">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
          <strong>Salah:</strong> Agar aap gaon mein hain aur CSC center aasani se available hai, toh auto-debit band mat karo. Kyunki har mahine CSC jana ya online payment karna ek extra responsibility hai. Auto-debit mein aapka share time par chala jata hai aur account active rehta hai. Sirf tab band karo jab aapko sach mein problem ho rahi ho — jaise account change karna hai ya PM Kisan ki kist irregular aati hai.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Aksar Confusions Jo Kisanon Ke Mann Mein Rehti Hain
      </h2>

      <div className="space-y-4 mb-8 not-prose">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">"Kya government ne meri marzi ke bagair paisa kat liya?"</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">Nahi. Aapne hi enrollment form mein consent di thi. Form mein clearly likha hota hai ke aap authorize kar rahe hain automatic debit ke liye. Agar aapko yaad nahi, toh shayad CSC operator ne theek se explain nahi kiya tha. Lekin legally aapne sign kiya hai, isliye bank debit karne ka haq rakhta hai.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">"Kya main Maandhan se nikal kar PM Kisan ka pura paisa le sakta hoon?"</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">Dono schemes ka koi direct link nahi hai. PM Kisan ka paisa aapko milta hi rahega chahe aap Maandhan mein ho ya na ho. Maandhan se exit karne ke rules aapke joining ke saalon par depend karte hain: 10 saal se pehle exit karne par sirf aapka deposited amount + savings bank interest wapas milta hai. 10 saal ke baad (lekin 60 saal se pehle) exit karne par contribution + accumulated interest milta hai — fund earnings ya savings bank rate, jo bhi zyada ho. Dono cases mein government ka matching share wapas nahi milta — woh pension fund mein hi reh jata hai.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">"Mera share zyada kyun kat raha hai? Maine toh ₹55 bola tha."</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">Share aapki entry age ke hisaab se fix hota hai. 18 saal pe ₹55, 25 pe ₹80, 30 pe ₹105, 40 pe ₹200. Agar zyada kat raha hai, toh ho sakta hai enrollment ke waqt aapki date of birth galat enter hui ho. Date of birth kabhi change nahi hoti, lekin agar genuine mistake hai toh CSC pe correction request daal sakte hain.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">"Kya main apna share amount baad mein badal sakta hoon?"</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">Nahi. Entry age ke hisaab se jo amount fix hua hai, woh poori scheme duration ke liye wahi rehta hai. Isliye enrollment se pehle apni financial situation zaroor dekh lein.</p>
        </div>
      </div>

      <Image
        src="/images/articles/maandhan/farmer-discussing-auto-debit-village.webp"
        alt="Group of farmers in village discussing PM Kisan Maandhan auto debit and pension scheme"
        width={800}
        height={450}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl mb-8 shadow-md w-full h-auto object-cover not-prose"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Aapka Paisa Safe Hai Ya Nahi? LIC Aur Pension Fund Ka Mechanism
      </h2>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Kai kisanon ke man mein yeh sawal rehta hai ke "Mera paisa kahan jaa raha hai? Koi bank mein jama ho raha hai ya kisi ne kha liya?"
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Aapka paisa bilkul safe hai. PM-KMY ek Central Sector Scheme hai jise Ministry of Agriculture & Farmers Welfare administer karta hai. Pension fund manager LIC of India hai — jo Life Insurance Corporation Act, 1956 ke under established statutory corporation hai. Matlab yeh government ki hi company hai.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Aapka share aur government ka matching share dono alag alag track hote hain. Government ka co-contribution separately maintain hota hai LIC ke paas. Yeh amount pension payout ke liye use hota hai. Agar aap premature exit lete hain, toh sirf aapka deposited amount + interest wapas milta hai. Government ka share pension fund mein transfer ho jata hai wapas.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Har contribution jama hone par aapke registered mobile number par SMS confirmation aata hai. Apna balance ya status verify karne ke liye maandhan.in ya pmkmy.gov.in portal par apna KPAN number ya mobile number daal kar login kar sakte hain, ya nazdeeki CSC center se bhi pata kar sakte hain.
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        60 saal ke baad jo ₹3000 monthly pension milti hai, woh bhi LIC hi disburse karti hai. Pension aapke registered bank account mein credit hoti hai. Family pension ka provision bhi hai — agar subscriber ki death 60 saal ke baad hoti hai, toh spouse ko 50% pension (₹1500/month) milti hai.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Related Guides
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mb-10 not-prose">
        <Link href="/articles/maandhan/pm-kisan-maandhan-registration-2026" className="group block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-sm">
          <div className="text-blue-600 dark:text-blue-400 font-bold mb-1 group-hover:underline">Registration 2026</div>
          <p className="text-xs text-gray-600 dark:text-gray-400">CSC center, bank branch ya online — 3 tareeke se kaise apply karein. Documents ki puri list.</p>
        </Link>
        <Link href="/articles/maandhan/pm-kisan-maandhan-withdrawal-refund-rules" className="group block p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-sm">
          <div className="text-blue-600 dark:text-blue-400 font-bold mb-1 group-hover:underline">Withdrawal & Refund Rules</div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Scheme chhodne par kitna paisa wapas milega? Family pension ke niyam aur common mistakes.</p>
        </Link>
      </div>

      <ExternalLinkButton
        url="https://pmkmy.gov.in/"
        label="PM Kisan Maandhan Official Portal"
      />

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-gray-200">
        Aksar Puche Jane Wale Sawal
      </h2>

      <div className="space-y-4 mb-8 not-prose">
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">PM Kisan ke ₹2000 mein se ₹55 kyun kat gaye?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Kyunki aapne PM Kisan Maandhan Yojana mein register karte waqt NACH auto-debit option chuna tha. Aapka monthly share (aapki umar ke hisaab se ₹55 se ₹200 tak) PM Kisan ki kist se automatically kat jata hai. Yeh aapki pension fund mein jata hai.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">Auto-debit band kaise karein?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Apni bank branch jakar NACH mandate cancellation form submit karein, ya net banking/mobile banking ke "Mandates" section se cancel karein. 5-7 working days mein process complete ho jata hai. Cancellation ka acknowledgement receipt zaroor lein. Band karne ke baad khud se payment karni hogi.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">Kya PM Kisan aur PM Kisan Maandhan alag scheme hain?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Haan, bilkul alag. PM Kisan mein government aapko ₹6000 saal deti hai. Maandhan mein aap government ko share dete hain taaki 60 saal ke baad ₹3000 monthly pension mile. Dono ka koi direct link nahi hai, bas ek optional facility hai ke PM Kisan ki kist se aapka Maandhan share kat jaye.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-base">3 mahine contribution nahi diya toh kya hoga?</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">Aapka account default status mein chala jayega. Pehle mahine mein koi late fee nahi. Uske baad savings bank interest rate ki late fee lagti hai. 6 mahine tak payment nahi hui toh account dormant ho jayega. 3 saal tak regularize karne ka option rehta hai — poora outstanding + interest jama karke.</p>
        </div>
      </div>

      <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong className="text-orange-600 dark:text-orange-400 block mb-2">Sources & Disclaimer:</strong>
          Yeh article PM Kisan Maandhan Yojana ke official operational guidelines (DAC&FW, Ministry of Agriculture & Farmers Welfare), PIB official release (September 2024), aur maandhan.in portal ke data par based hai. Contribution amounts, default/dormant rules, aur NACH process official documents se verify kiye gaye hain. Actual processes aur rules aapke bank, location, aur current government policies ke hisaab se vary kar sakte hain. Koi bhi financial decision lene se pehle official maandhan.in / pmkmy.gov.in portal ya apni bank branch se confirm karein. Last verified: July 24, 2026.
        </p>
      </div>
    </article>
  );
}
