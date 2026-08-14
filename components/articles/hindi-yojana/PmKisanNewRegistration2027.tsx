import Link from 'next/link';
import Image from 'next/image';
import type { HindiArticle } from '@/lib/hindi-articles-data';

const FAQS = [
  {
    q: 'क्या Farmer ID के बिना नई registration हो जाएगी?',
    a: 'कई राज्यों में अब नहीं — Andhra Pradesh, Bihar, MP, Maharashtra, UP समेत कई राज्यों में नए आवेदन के लिए Farmer ID जरूरी की जा चुकी है। क्रम यही रखें: पहले Farmer ID, फिर PM Kisan registration।',
  },
  {
    q: 'Registration की कोई last date है?',
    a: 'नहीं, registration साल भर खुली रहती है। लेकिन verification में समय लगता है — जितनी जल्दी आवेदन, अगली किस्त में नाम आने के उतने ज्यादा chances।',
  },
  {
    q: 'जमीन पिता/दादा के नाम है, मैं apply कर सकता हूं?',
    a: 'नहीं। योजना का पैसा landholding किसान परिवार को मिलता है — जमीन जिसके नाम, आवेदन उसी का। वरासत/नामांतरण के बाद जमीन आपके नाम आए, तब आप apply कर सकते हैं।',
  },
  {
    q: 'आवेदन के कितने दिन बाद पैसा आता है?',
    a: 'Fix नहीं है। आवेदन → राज्य सरकार का verification → approval → अगली किस्त की list में नाम। इसमें कुछ हफ्तों से कुछ महीने लग सकते हैं। Status "Approved" होने के बाद वाली किस्त से पैसा शुरू होता है।',
  },
  {
    q: 'Status में "Pending for approval at State/District" का क्या अर्थ है?',
    a: 'आपका आवेदन राज्य/जिला स्तर पर verification queue में है। यह normal है। बहुत लंबा खिंचे तो अपने कृषि अधिकारी या पटवारी से मिलकर पूछें — अक्सर land record के मिलान पर अटका होता है।',
  },
  {
    q: 'CSC से कराना बेहतर है या खुद online?',
    a: 'दोनों का result एक ही है। खुद करेंगे तो free है; CSC पर छोटा सा service charge लगता है लेकिन biometric eKYC साथ में हो जाती है। जिनके आधार में mobile link नहीं है, उनके लिए CSC ही व्यावहारिक रास्ता है।',
  },
  {
    q: 'गलत जानकारी भर दी तो?',
    a: 'Portal पर correction का option है — नाम, बैंक details वगैरह सुधारे जा सकते हैं। पूरा तरीका correction form वाले page पर detail में है। बेहतर यही है कि submit से पहले आधार और खतौनी से मिलाकर ही भरें।',
  },
  {
    q: 'महिला के नाम जमीन है — आवेदन उसी के नाम से होगा?',
    a: 'हां, और यही सही है। जमीन जिसके नाम, आवेदन उसी का — चाहे वह घर की महिला हों। आधार, बैंक खाता और mobile OTP भी उन्हीं का चाहिए। पति अपने नाम से आवेदन नहीं कर सकता जब तक खतौनी में उसका नाम न हो।',
  },
  {
    q: 'आधार में mobile number link नहीं है — क्या करूं?',
    a: 'दो रास्ते। पहला — Aadhaar Seva Kendra जाकर आधार में नया नंबर जुड़वाएं (मामूली शुल्क), फिर खुद online आवेदन करें। दूसरा — सीधे CSC जाएं, वहां biometric से काम हो जाता है। लेकिन आगे eKYC और status के लिए आधार-linked नंबर बार-बार चाहिए — लम्बे में पहला रास्ता ही सही है।',
  },
  {
    q: 'Urban registration किसके लिए है?',
    a: 'जिनकी खेती की जमीन नगर निगम/नगर पालिका की सीमा के अंदर आती है। जमीन kheti-yogya होनी चाहिए — plot या मकान की जमीन पर लाभ नहीं मिलता। गांव की जमीन है तो Rural ही चुनें, गलत category से आवेदन जांच में अटकता है।',
  },
  {
    q: 'Reference number खो गया — अब status कैसे देखूं?',
    a: 'घबराएं नहीं — portal पर Status of Self Registered Farmer में आधार नंबर से भी आवेदन खुल जाता है। आगे के लिए number का screenshot लेकर परिवार के किसी दूसरे phone पर भी भेज दें।',
  },
  {
    q: 'आवेदन approve हो गया — क्या अब कुछ और करना है?',
    a: 'हां, दो काम — eKYC पूरी करें (portal/app से) और बैंक खाते की NPCI आधार seeding active कराएं। ये दोनों अधूरे हों तो नाम list में आकर भी किस्त रुक जाती है।',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

function Milestone({ tag, title, children }: { tag: string; title: string; children: React.ReactNode }) {
  return (
    <section className="my-7">
      <p className="text-[11px] font-black uppercase tracking-widest text-[var(--color-primary)] mb-1">
        {tag}
      </p>
      <h2 className="text-xl font-black text-[var(--color-text)] mb-3 pb-2 border-b-2 border-[var(--color-border)]">
        {title}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed text-[var(--color-text)]">{children}</div>
    </section>
  );
}

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="w-full object-cover"
        sizes="(max-width: 768px) 100vw, 768px"
      />
      <figcaption className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
        {caption}
      </figcaption>
    </figure>
  );
}

function H2x({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-black text-[var(--color-text)] mt-8 mb-4 pb-2 border-b-2 border-[var(--color-border)]">
      {children}
    </h2>
  );
}

function H3x({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold mt-6 mb-2 text-[var(--color-text)]">{children}</h3>;
}

function Callout({ tone, children }: { tone: 'info' | 'warn' | 'danger'; children: React.ReactNode }) {
  const cls =
    tone === 'info'
      ? 'bg-green-50 dark:bg-green-900/20 border-green-600 dark:border-green-500'
      : tone === 'warn'
        ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-500'
        : 'bg-red-50 dark:bg-red-900/20 border-red-500';
  return (
    <div className={`my-4 p-4 border-l-4 rounded-r-xl text-sm text-[var(--color-text)] leading-relaxed ${cls}`}>
      {children}
    </div>
  );
}

export default function PmKisanNewRegistration2027({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>सवाल: 2027 में PM Kisan की नई registration पुराने तरीके से हो जाएगी?</p>
      <p>
        जवाब: नहीं — और यही इस article की वजह है। पिछले दो सालों में registration का process बदल गया है।
        बड़ा बदलाव यह: कई राज्यों में अब <strong>Farmer ID (AgriStack)</strong> के बिना नया आवेदन आगे ही
        नहीं बढ़ता। पुराने YouTube videos वाला तरीका follow करेंगे तो आधे रास्ते अटक जाएंगे। तो चलिए, 2027
        वाला सही क्रम शुरू से समझते हैं — पड़ाव-दर-पड़ाव।
      </p>

      <Callout tone="info">
        याद दिला दें — योजना में क्या मिलता है: ₹6,000 सालाना, ₹2,000 की तीन किस्तों में, सीधे बैंक account
        में (DBT)। Landholding किसान परिवार eligible हैं; income tax payer, सरकारी कर्मचारी और
        constitutional post वाले बाहर। पूरी eligibility{' '}
        <Link href="/articles/PmKisanMasterGuide2026">eligibility के पूरे ब्योरे वाली guide</Link> में।
      </Callout>

      <H2x>आवेदन से पहले — खुद से पांच सवाल</H2x>
      <p>
        Form खोलने से पहले ये पांच सवाल खुद से पूछ लीजिए। सबका जवाब “हां” है तभी आगे बढ़िए — वरना पहले वह
        कमी दूर कीजिए, क्योंकि अधूरी तैयारी पर डाला आवेदन महीनों लटकता है:
      </p>
      <ul className="list-none pl-0 my-4 space-y-2 text-sm leading-relaxed">
        <li>खेती की जमीन खतौनी में <strong>मेरे नाम</strong> दर्ज है?</li>
        <li>परिवार (पति/पत्नी) में कोई और यह लाभ <strong>नहीं</strong> ले रहा?</li>
        <li>मैं income tax नहीं भरता, सरकारी सेवा/बड़ी pension में नहीं हूं?</li>
        <li>आधार में mobile number जुड़ा है (या CSC जाने को तैयार हूं)?</li>
        <li>बैंक खाता चालू हालत में है और आधार से seeded है?</li>
      </ul>
      <p>
        सवाल 1 पर अटके हैं तो पहले तहसील से वरासत/नामांतरण का काम कराइए — यह PM Kisan का नहीं, राजस्व विभाग
        का काम है और इसके बिना आगे कुछ नहीं होगा। सवाल 2-3 पर जवाब “ना” है तो आवेदन करना बेकार है — जांच में
        पकड़ा जाएगा, और गलत तरीके से लिया पैसा बाद में recovery notice बनकर लौटता है। सवाल 4-5 छोटे काम हैं
        पर इन्हीं दो पर आगे चलकर बहुतायत किस्तें रुकती हैं।
      </p>

      <Milestone tag="पड़ाव 0" title="पहले Farmer ID बनवाइए">
        <p>
          यह नया अनिवार्य पड़ाव है। Andhra Pradesh, Assam, Bihar, Chhattisgarh, Gujarat, Karnataka, Kerala,
          MP, Maharashtra, Odisha, Rajasthan, Tamil Nadu, Telangana, UP — इन राज्यों में Farmer ID नए
          beneficiaries के लिए जरूरी हो चुकी है, और बाकी जगह भी यही दिशा है। अपनी राज्य की Farmer Registry
          (agristack.gov.in से) पर आधार + land record + बैंक details से यह आईडी बनती है। पूरा process हमने{' '}
          <Link href="/articles/hi/farmer-id-kaise-banaye">फार्मर आईडी कैसे बनाएं</Link> में step-by-step
          लिखा है — पहले वो काम निपटाइए, फिर यहां लौटिए।
        </p>
        <H3x>Farmer ID और PM Kisan registration — दो अलग चीजें हैं</H3x>
        <p>
          यह उलझन बहुत किसानों की है, तो साफ कर दें। Farmer ID (AgriStack) आपकी खेती की सरकारी पहचान है — यह
          बनने से पैसा नहीं आता। PM Kisan registration अलग आवेदन है जिससे ₹6,000 वाली योजना में नाम जुड़ता
          है। क्रम यह है: पहले Farmer ID, फिर उसी के सहारे PM Kisan का आवेदन। जो लोग सिर्फ Farmer ID बनवाकर
          बैठ गए और सोचते रहे कि किस्त आएगी — उनका इंतजार कभी खत्म नहीं होगा। दोनों काम चाहिए।
        </p>
      </Milestone>

      <Milestone tag="पड़ाव 1" title="Documents की तैयारी">
        <Figure
          src="/images/articles/hindi-yojna/new-registration/docs-ready.webp"
          alt="आधार कार्ड, बैंक passbook और खतौनी — registration से पहले की तैयारी"
          caption="आवेदन से पहले मेज पर यही चार चीजें — आधार, passbook, खतौनी, phone"
        />
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>आधार कार्ड</strong> — नाम की spelling खतौनी से मिला लें।</li>
          <li><strong>जमीन के कागज</strong> — खसरा/खतौनी, जमीन आपके नाम registered हो।</li>
          <li><strong>बैंक पासबुक</strong> — account आधार से linked और NPCI seeding active।</li>
          <li><strong>आधार-linked mobile</strong> — OTP के बिना गाड़ी नहीं चलेगी।</li>
          <li><strong>Farmer ID</strong> — ऊपर वाला पड़ाव 0।</li>
        </ul>
        <Callout tone="warn">
          Registration reject होने की प्रमुख वजह कोई सरकारी साजिश नहीं — <strong>records का आपसी
          mismatch</strong> है। आधार में &quot;Mohd. Aslam&quot;, खतौनी में &quot;Mohammad Aslam&quot;, बैंक
          में तीसरी spelling। तीनों जगह एक जैसा नाम कराइए, उसके बाद apply कीजिए। यही एक काम आधे rejections
          बचा लेता है।
        </Callout>
        <H3x>नाम का मिलान कैसे करें — घर पर पांच मिनट का काम</H3x>
        <p>
          मेज पर तीन चीजें रखिए — आधार कार्ड, बैंक passbook का पहला पन्ना, और खतौनी की नकल। अब तीनों पर
          अपना नाम अक्षर-दर-अक्षर पढ़िए — जोर से, बोलकर। तीन चीजें पकड़नी हैं: spelling का फर्क
          (Kumar/Kumaar), अधूरा-पूरा नाम (कहीं Devi लगा है, कहीं नहीं), और पिता के नाम का अंतर। कोई फर्क
          मिले तो नियम याद रखिए — <strong>आधार को मानक मानिए</strong>, क्योंकि eKYC और DBT दोनों आधार से
          चलते हैं। बैंक में नाम सुधरवाना आसान है (branch में आधार लेकर form), खतौनी का सुधार तहसील से होता
          है। यह काम पहले किए बिना आवेदन डालना टेढ़ी नींव पर दीवार उठाने के बराबर है।
        </p>
      </Milestone>

      <Milestone tag="पड़ाव 2" title="Online आवेदन, screen-by-screen">
        <Figure
          src="/images/articles/hindi-yojna/new-registration/reg-form.webp"
          alt="pmkisan.gov.in पर New Farmer Registration का form"
          caption="New Farmer Registration form — आधार, mobile और राज्य से शुरुआत"
        />
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a>{' '}
            खोलें → <strong>Farmers Corner</strong> → <strong>New Farmer Registration</strong>।
          </li>
          <li>
            <strong>Rural</strong> या <strong>Urban</strong> registration चुनें — गांव की जमीन है तो Rural।
          </li>
          <li>आधार नंबर, mobile number, राज्य चुनकर captcha भरें → OTP verify करें।</li>
          <li>
            खुलने वाले form में personal details आधार से आ जाती हैं। बाकी भरें — जिला, तहसील, गांव,
            category।
          </li>
          <li>
            <strong>Land details</strong> — खसरा/survey number, रकबा। यहीं Farmer ID/registry से मिलान होता
            है। कागज सामने रखकर भरिए, याददाश्त से नहीं।
          </li>
          <li>बैंक details (account number, IFSC) डालें, documents upload करें, <strong>Submit</strong>।</li>
          <li>
            Screen पर आया <strong>registration/reference number लिखकर रखें</strong> — status इसी से देखेंगे।
          </li>
        </ol>
      </Milestone>

      <div className="my-5 p-4 border-2 border-[var(--color-border)] rounded-2xl bg-[var(--color-card)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <p className="font-bold text-[var(--color-text)] text-sm m-0">
            PM Kisan Portal — New Farmer Registration
          </p>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5 mb-0">
            Official website — pmkisan.gov.in
          </p>
        </div>
        <a
          href="https://pmkisan.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg font-bold hover:bg-[var(--color-primary-dark)] transition-colors shrink-0"
        >
          pmkisan.gov.in खोलें ↗
        </a>
      </div>

      <H2x>खुद करें या CSC से — सीधा मुकाबला</H2x>
      <Figure
        src="/images/articles/hindi-yojna/new-registration/csc-center.webp"
        alt="CSC केंद्र पर operator किसान की registration करते हुए"
        caption="CSC का रास्ता — biometric से eKYC साथ में निपट जाती है"
      />
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] p-2 text-left">बात</th>
              <th className="border border-[var(--color-border)] p-2 text-left">खुद online</th>
              <th className="border border-[var(--color-border)] p-2 text-left">CSC से</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">खर्च</td>
              <td className="border border-[var(--color-border)] p-2">बिल्कुल free</td>
              <td className="border border-[var(--color-border)] p-2">मामूली तय service charge</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">क्या चाहिए</td>
              <td className="border border-[var(--color-border)] p-2">Smartphone/computer + आधार-linked नंबर</td>
              <td className="border border-[var(--color-border)] p-2">सिर्फ आधार + कागज, OTP नहीं भी हो तो चलेगा</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">eKYC</td>
              <td className="border border-[var(--color-border)] p-2">अलग से करनी होगी</td>
              <td className="border border-[var(--color-border)] p-2">Biometric से साथ में हो जाती है</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">गलती का risk</td>
              <td className="border border-[var(--color-border)] p-2">आपके हाथ में — कागज सामने रखेंगे तो कम</td>
              <td className="border border-[var(--color-border)] p-2">Operator की typing पर निर्भर — submit से पहले screen पढ़वा लें</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">किसके लिए सही</td>
              <td className="border border-[var(--color-border)] p-2">जिन्हें phone चलाना आता है</td>
              <td className="border border-[var(--color-border)] p-2">बुजुर्ग, keypad phone वाले, आधार में नंबर नहीं</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        परिणाम दोनों का एक है — आवेदन उसी system में जाता है। CSC जाएं तो एक आदत बना लें: submit से पहले
        operator से कहिए कि भरा हुआ form एक बार पूरा पढ़कर सुना दे — खासकर नाम की spelling, खाता नंबर और
        खसरा नंबर। ये तीन चीजें गलत गईं तो महीनों का correction चक्कर लगेगा।
      </p>

      <div className="my-8 p-6 bg-gradient-to-r from-green-800 to-green-600 rounded-2xl text-white text-center">
        <p className="font-black text-lg mb-1">Registration के बाद किस्त का इंतजार?</p>
        <p className="text-green-100 text-sm mb-4">
          Tracker बताएगा कि आपकी application किस stage पर है।
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          <Link
            href="/calculator/installment-tracker"
            className="inline-flex items-center gap-2 bg-white text-green-800 font-black px-6 py-3 rounded-xl text-sm hover:bg-green-50 transition-colors"
          >
             किस्त का हिसाब यहां देखें →
          </Link>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-white/25 transition-colors"
          >
             किसान utilities खोलें
          </Link>
        </div>
      </div>

      <Milestone tag="पड़ाव 3" title="आवेदन के बाद का खेल: verification">
        <Figure
          src="/images/articles/hindi-yojna/new-registration/status-pending.webp"
          alt="PM Kisan portal पर self registered farmer का pending status"
          caption="Pending for approval — verification के दौरान यही दिखता है, घबराएं नहीं"
        />
        <p>
          Submit दबाते ही पैसा नहीं आने लगता — यह बात शुरू में ही समझ लें तो निराशा नहीं होगी। आपका आवेदन
          राज्य सरकार के पास जाता है, जहां पटवारी/राजस्व विभाग land record से मिलान करता है। फिर district और
          state level की approval। इस दौरान status &quot;Pending for approval&quot; दिखेगा — यह सामान्य है।
        </p>
        <p>
          Status check करने के लिए portal पर <strong>Status of Self Registered Farmer</strong> का option है
          — आधार नंबर डालिए और देखिए आवेदन किस table पर पड़ा है। Table-दर-table उसकी व्याख्या{' '}
          <Link href="/articles/pm-kisan-self-registered-status-check">अलग लेख में खोलकर समझाई है</Link>।
        </p>
        <p>
          UP के एक किसान का experience बताते हैं — आवेदन May में किया, approval September में आया, पहला पैसा
          उसके बाद वाली किस्त में। बीच में दो बार तहसील के चक्कर लगे क्योंकि खतौनी में रकबा update नहीं था।
          धैर्य + अपने record की खुद पैरवी — यही combination काम करता है। Approve होने के बाद{' '}
          <Link href="/articles/PmKisanEkycOnline2026">eKYC</Link> भी पूरी कर लें, वरना नाम list में आकर भी
          किस्त रुक जाएगी।
        </p>
      </Milestone>

      <Callout tone="danger">
        &quot;₹500 में registration पक्की&quot; बोलने वाले agents से दूर रहें। Portal पर आवेदन free है; CSC
        का official charge मामूली है (details{' '}
        <Link href="/articles/PmKisanCscRegistrationCharges">यहां</Link>)। कोई approval की
        &quot;guarantee&quot; नहीं बेच सकता — approval सिर्फ record मिलान से होती है।
      </Callout>

      <H2x>Approval के बाद पहला पैसा कब और कैसे</H2x>
      <p>
        Status में Approved दिखना आधी जीत है, पूरी नहीं। पैसा आने के लिए तीन चीजें एक साथ हरी होनी चाहिए —
        आवेदन approved, eKYC: YES, और बैंक खाते की आधार seeding active। तीनों हरी हैं तो आपका नाम अगली
        release की beneficiary list में जुड़ता है और उसी किस्त से पैसा शुरू होता है। एक बात और — पुरानी
        किस्तों का arrear नए लाभार्थी को नहीं मिलता; पैसा आपके शामिल होने के बाद वाली किस्तों से गिना जाता
        है। आवेदन टालना = सीधा नुकसान।
      </p>
      <p>
        SMS का इंतजार मत कीजिए — कई बार पैसा आ जाता है और SMS नहीं आता। पक्के तरीके दो हैं: passbook entry
        कराना, या portal पर Know Your Status में payment का record देखना। किस्त कब आती है और उससे पहले
        क्या-क्या निपटा लेना चाहिए — पूरी कहानी के लिए{' '}
        <Link href="/articles/hi/pm-kisan-25vi-kist">अगली किस्त वाला लेख</Link> पढ़ लें।
      </p>

      <H2x>Verification लंबा खिंच जाए तो क्या करें</H2x>
      <p>
        कितना इंतजार सामान्य है और कब पैरवी शुरू करनी चाहिए — यह समझना जरूरी है। मोटा नियम: आवेदन के बाद
        एक-दो महीने तक status का Pending दिखना आम बात है, घबराने की जरूरत नहीं। लेकिन अगर दो महीने बाद भी
        आवेदन उसी जगह खड़ा है, तो समझिए कहीं मिलान अटका है और अब आपकी पैरवी के बिना वह आगे नहीं बढ़ेगा।
      </p>
      <p>
        पैरवी का तरीका भी सीधा है। पहले status में देखिए आवेदन किस स्तर पर अटका है — District लिखा है तो
        जिला कृषि कार्यालय, State लिखा है तो पहले ब्लॉक स्तर से ही पूछताछ शुरू कीजिए। साथ ले जाने का सामान
        पुराना ही — आधार, passbook, खतौनी, और reference number। पटवारी से यह जरूर पूछिए कि आपकी land
        seeding हुई या नहीं — नए आवेदनों में ज्यादातर देर इसी एक काम में लगती है, क्योंकि यह आपके नहीं,
        राजस्व विभाग के हाथ में है। Online शिकायत भी साथ चलाइए — portal के Help Desk में query डालिए और
        मिला query number संभालकर रखिए। हेल्पलाइन <strong>155261</strong> पर भी आवेदन की स्थिति पूछी जा
        सकती है।
      </p>

      <H2x>आवेदन reject क्यों होता है — छह असली वजहें</H2x>
      <p>
        Reject हुए आवेदनों की कहानियां सुनें तो एक pattern दिखता है — गलती आवेदन के दिन ही हो चुकी थी, पता
        महीनों बाद चला। इन छह पर नजर डाल लीजिए, इनमें से कोई आपके आवेदन में न हो:
      </p>
      <ol className="list-decimal pl-6 space-y-2 my-4 text-sm leading-relaxed">
        <li>
          <strong>नाम की spelling तीन जगह तीन तरह</strong> — पहला और बड़ा कारण। आधार की spelling को मानक
          मानिए और बाकी दोनों जगह उसी के मुताबिक कराइए।
        </li>
        <li>
          <strong>खतौनी में नाम नहीं</strong> — जमीन दादा/पिता के नाम, वरासत नहीं चढ़ी। पहले तहसील से
          नामांतरण, फिर आवेदन।
        </li>
        <li>
          <strong>खसरा नंबर गलत</strong> — याददाश्त से भरा गया number record से नहीं मिला। ताजी नकल सामने
          रखकर भरने से यह गलती होती ही नहीं।
        </li>
        <li>
          <strong>परिवार में पहले से लाभार्थी</strong> — पिता या पत्नी पहले से ले रहे हैं तो नया आवेदन नियम
          से reject होगा।
        </li>
        <li>
          <strong>अपात्रता</strong> — income tax record, सरकारी नौकरी या बड़ी pension — जांच में ये flag
          लगते हैं और आवेदन आगे नहीं बढ़ता।
        </li>
        <li>
          <strong>खेती की जमीन नहीं</strong> — record में जमीन आवासीय/commercial दर्ज है। योजना kheti-yogya
          जमीन वालों के लिए है।
        </li>
      </ol>
      <p>
        इनमें से पहली तीन आपके हाथ में हैं — आधे से ज्यादा rejection सिर्फ तैयारी से बच जाते हैं। इसलिए ही इस
        लेख में पड़ाव 1 (documents का मिलान) को इतना लंबा लिखा गया है — असली मेहनत उसी में है, form भरना तो
        दस मिनट का काम है।
      </p>

      <H2x>Registration के 4 आम सवालों के छोटे जवाब</H2x>
      <p>
        <strong>पति-पत्नी दोनों apply कर सकते हैं?</strong> नहीं — योजना परिवार (पति+पत्नी+नाबालिग बच्चे)
        के हिसाब से है, एक परिवार = एक लाभ।
      </p>
      <p>
        <strong>किरायेदार किसान?</strong> PM Kisan में नहीं — जमीन के मालिक वाला rule है। (Farmer Registry
        में tenant के लिए अलग प्रावधान वाले राज्य हैं, लेकिन PM Kisan का पैसा landholder को ही जाता है।)
      </p>
      <p>
        <strong>जमीन दो जिलों में है?</strong> आवेदन एक ही जगह से होगा — जहां मुख्य record है। सारी होल्डिंग
        एक ही registration में दर्ज कराएं।
      </p>
      <p>
        <strong>पहले reject हो चुका है?</strong> दोबारा apply हो सकता है — पहले rejection का कारण ठीक करें।
        Reject cases की अलग guide <Link href="/articles/PmKisanRejectedStatusReApplyGuide">यहां</Link> है।
      </p>

      <H2x>Documents upload करते समय की तीन बारीकियां</H2x>
      <p>
        ये छोटी बातें हैं पर इन्हीं पर आवेदन लौटते हैं। पहली — खतौनी की photo साफ रोशनी में सीधी खींचिए;
        तिरछी, कटी या धुंधली photo पर सत्यापन अटकता है। दूसरी — file size की limit का ध्यान रखिए; बड़ी file
        हो तो phone के किसी भी free compressor से छोटी कर लीजिए, पर इतनी भी नहीं कि लिखा पढ़ा न जाए। तीसरी
        — खसरा नंबर वाला पन्ना ही upload करना है, पूरी खतौनी का पहला पन्ना नहीं। Upload के बाद preview
        खोलकर एक बार देख लीजिए कि सही file गई है — गलत file चढ़ जाना उतना ही आम है जितना सुनने में मजाक
        लगता है।
      </p>

      <H2x>पूरा रास्ता — शुरू से आखिर तक, छोटे में</H2x>
      <p>
        2027 में नई registration का सही क्रम: पहले तीनों record (आधार, खतौनी, बैंक) में नाम एक जैसा कराइए →
        अपने राज्य की registry से Farmer ID बनवाइए → pmkisan.gov.in पर New Farmer Registration से आवेदन
        कीजिए (या CSC से) → reference number संभालिए → verification के दौरान status पर नजर और जरूरत पड़े तो
        तहसील/ब्लॉक में पैरवी → approval के बाद eKYC + NPCI seeding पूरी → अगली किस्त से ₹2,000 शुरू। न कोई
        shortcut है, न किसी agent के पास जादू — बस कागज सही और क्रम सही।
      </p>
      <p>
        एक आखिरी सलाह — आवेदन के दिन से एक छोटी diary या phone note बना लीजिए: आवेदन की तारीख, reference
        number, CSC की रसीद, grievance का query number, और जिस-जिस अधिकारी से बात हुई उसका नाम-तारीख।
        सरकारी काम में याददाश्त नहीं, कागज बोलता है — और जिस किसान के पास पूरा record होता है, उसका काम हर
        खिड़की पर तेज चलता है।
      </p>

      <H2x>Registration के सवाल, सीधे जवाब</H2x>
      <div className="space-y-3 mb-8">
        {FAQS.map(({ q, a }) => (
          <details
            key={q}
            className="border border-[var(--color-border)] rounded-xl overflow-hidden group"
          >
            <summary className="p-4 font-semibold text-[var(--color-text)] cursor-pointer bg-[var(--color-bg-alt)] hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3">
              <span>{q}</span>
              <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">
                +
              </span>
            </summary>
            <div className="p-4 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]">
              {a}
            </div>
          </details>
        ))}
      </div>

      <p className="text-xs text-[var(--color-text-muted)] italic">
        Registration flow की जानकारी{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a>{' '}
        (Ministry of Agriculture &amp; Farmers Welfare) के आवेदन-ढांचे से ली गई है; Farmer ID अनिवार्यता
        वाले राज्यों की जानकारी सरकारी घोषणाओं की news coverage से। राज्य-स्तरीय rules बदलते रहते हैं, आवेदन
        से पहले अपने राज्य का ताजा निर्देश जरूर देख लें — यह लेख{' '}
        {new Date(article.modifiedTime).toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' })} तक की स्थिति पर खरा है।
      </p>

      <div className="mt-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
        <h3 className="font-black text-[var(--color-text)] mb-3 text-base">Related Articles — Yeh Bhi Padho</h3>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>
            <Link href="/articles/PmKisanCorrectionForm2026">Record सुधारने वाला form</Link>
          </li>
          <li>
            <Link href="/articles/PmKisanEkycOnline2026">eKYC online — पूरा process</Link>
          </li>
          <li>
            <Link href="/articles/pm-kisan-self-registered-status-check">Self-Registered Status Check</Link>
          </li>
          <li>
            <Link href="/articles/PmKisanCscRegistrationCharges">CSC Registration Charges</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
