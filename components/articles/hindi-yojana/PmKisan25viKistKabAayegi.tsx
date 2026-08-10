import Link from 'next/link';
import Image from 'next/image';
import type { HindiArticle } from '@/lib/hindi-articles-data';

// यह article जानबूझकर self-contained है — कोई shared component import नहीं।

const FAQS = [
  {
    q: '25वीं किस्त की पक्की तारीख क्या है?',
    a: 'अभी तक सरकार ने कोई तारीख घोषित नहीं की है। इंटरनेट पर जो भी तारीखें घूम रही हैं, वे अनुमान हैं। आधिकारिक घोषणा pmkisan.gov.in और PIB की प्रेस रिलीज़ से ही आती है — उसी पर भरोसा करें।',
  },
  {
    q: 'क्या इस बार रकम ₹2,000 से बढ़ेगी?',
    a: '2019 से हर किस्त ₹2,000 की ही रही है। बजट के आसपास बढ़ोतरी की चर्चा हर साल होती है, पर अब तक कोई आधिकारिक बदलाव नहीं हुआ। जब तक सरकारी घोषणा न हो, ₹2,000 ही मानकर चलें।',
  },
  {
    q: 'पिछली किस्त मिली थी, फिर भी क्या कुछ करना जरूरी है?',
    a: 'हां — eKYC पूरी हो, बैंक खाते की NPCI/आधार सीडिंग active हो, और land seeding में कोई दिक्कत न हो। इनमें से कोई एक भी अधूरा रहा तो नाम अगली beneficiary सूची से कट सकता है।',
  },
  {
    q: 'बिना registration number के status कैसे देखें?',
    a: 'pmkisan.gov.in के "Know Your Status" में registration number चाहिए, लेकिन उसी page पर "Know your registration no." का विकल्प भी है — आधार या mobile से निकल जाता है। पूरा तरीका मोबाइल से status जांचने वाले page पर step-by-step दिया है।',
  },
  {
    q: 'गांव की पूरी सूची एक साथ कहां दिखती है?',
    a: 'Farmers Corner के "Beneficiary List" में राज्य → जिला → ब्लॉक → गांव चुनकर पूरे गांव के लाभार्थियों की सूची PDF जैसी सूरत में दिख जाती है। अपना नाम वहां जरूर मिला लें।',
  },
  {
    q: 'किस्त आने का SMS नहीं आया, पैसा आया है या नहीं कैसे पता चले?',
    a: 'SMS कई बार देर से आता है या आता ही नहीं। पक्के तरीके दो हैं — बैंक passbook/statement देखना, या portal पर payment status। वहां FTO generated और payment confirmation दोनों दिखते हैं।',
  },
  {
    q: 'मेरे गांव में कुछ लोगों को पैसा मिल गया, मुझे नहीं — ऐसा क्यों?',
    a: 'किस्त एक ही दिन में सब खातों तक नहीं पहुंचती। भुगतान batch में जाता है, और जिस batch में आपका जिला या बैंक है, उसका क्रम अलग हो सकता है। कुछ दिन देखिए। पर अगर सूची में आपका नाम ही नहीं है या कोई field NO है, तो देरी नहीं — रुकावट है, और उसे ठीक करना होगा।',
  },
  {
    q: 'खाता बदल लिया है, नया खाता कैसे जुड़वाऊं?',
    a: 'पैसा उस खाते में जाता है जो आधार से जुड़कर DBT के लिए तैयार है। नए खाते वाली शाखा में जाकर NPCI आधार seeding करानी होगी, और record में खाता update कराना होगा। यह घोषणा से पहले निपटा लें — किस्त निकलने के बाद बदलाव का असर उस किस्त पर नहीं पड़ता।',
  },
  {
    q: 'क्या किस्त का पैसा किसी भी खाते में आ सकता है, मसलन पत्नी के खाते में?',
    a: 'नहीं। भुगतान लाभार्थी के अपने, आधार से जुड़े खाते में होता है। परिवार के दूसरे सदस्य के खाते में पैसा नहीं भेजा जाता — इसके चलते नाम और खाते का मिलान इतना मायने रखता है।',
  },
  {
    q: 'YouTube पर किसी ने तारीख बता दी है, उस पर भरोसा करूं?',
    a: 'नहीं। तारीख का एक ही स्रोत है — सरकार की आधिकारिक घोषणा। Views के लिए तारीखें बताई जाती हैं, और गलत निकलने पर video हटा दिया जाता है। जो समय उन videos पर लगेगा, उतने में आप eKYC या seeding check कर सकते हैं — वह काम सचमुच पैसा दिलाता है।',
  },
  {
    q: 'किस्त का इंतजार करते हुए क्या हर दिन portal खोलना चाहिए?',
    a: 'जरूरत नहीं। घोषणा होने पर खबर हर तरफ होती है। हफ्ते में एक बार status देख लेना काफी है — बस यह पक्का रखें कि तीनों जांच (eKYC, बैंक seeding, land record) YES पर हैं।',
  },
];

const RELATED = [
  { slug: 'hi/status-check-mobile-se', title: 'मोबाइल नंबर से स्टेटस चेक', emoji: '📱' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Online Guide', emoji: '🔐' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List Guide', emoji: '📋' },
  { slug: 'hi/npci-aadhaar-seeding', title: 'NPCI आधार सीडिंग', emoji: '🏦' },
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

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-bold text-[var(--color-text)] mt-6 mb-2">{children}</h3>;
}

function Note({ tone, children }: { tone: 'info' | 'warn' | 'danger'; children: React.ReactNode }) {
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

export default function PmKisan25viKistKabAayegi({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <p>
        25वीं किस्त की कोई आधिकारिक तारीख अभी घोषित नहीं हुई है — यह पहली लाइन में इसी कारण लिख रहे हैं
        ताकि आपका समय बचे। जो भी website या YouTube channel आपको पक्की date बता रहा है, वह अंदाज़ा
        लगा रहा है — और अंदाज़े पर योजना का पैसा नहीं चलता।
      </p>
      <p>
        CSC चलाने वाले बताते हैं कि किस्त के महीनों में आधे से ज्यादा लोग एक ही सवाल लेकर आते हैं —
        "अगली किस्त कब आएगी?" — जबकि जिस सवाल का जवाब सचमुच उनके हाथ में है — "मेरी eKYC और बैंक
        seeding ठीक है या नहीं?" — वह पूछा ही नहीं जाता। यह दूसरा सवाल ही इस लेख की जड़ है।
      </p>
      <p>
        तो इस लेख में तारीख का झूठा वादा नहीं मिलेगा। इसकी जगह मिलेगा वह हिस्सा जिस पर आपका बस चलता है:
        घोषणा से पहले कौन सी जांच निपटानी है, पैसा किस रास्ते से खाते तक आता है, कहां-कहां अटकता है, और
        अटक जाए तो किस क्रम में उसे खोलना है। यह कारण है कि पैसे आने वाले दिन कुछ किसान चैन से बैठे रहते हैं और
        कुछ CSC की लाइन में लगे होते हैं।
      </p>

      <Figure
        src="/images/articles/hindi-yojna/pm-kisan-25vi-kist/kisan-mobile-check.webp"
        alt="मोबाइल पर PM Kisan किस्त की जानकारी देखता किसान"
        caption="तारीख का इंतज़ार सबको है — पर असली काम record पूरा रखना है"
      />

      <Note tone="info">
        योजना का बुनियादी गणित बदला नहीं है: पात्र किसान परिवार को साल में ₹6,000, तीन बराबर हिस्सों में, हर हिस्सा
        ₹2,000 — सीधे बैंक खाते में DBT से। यह किस्त उसी सिलसिले की अगली कड़ी होगी।
      </Note>

      <H2>तारीख को लेकर अब तक क्या पता है?</H2>
      <p>
        सरकार किस्त जारी करने की घोषणा आमतौर पर कुछ ही दिन पहले करती है — कई बार प्रधानमंत्री किसी कार्यक्रम
        से बटन दबाकर release करते हैं, और उसी दिन पैसा खातों में जाना शुरू होता है। पिछला पैटर्न देखें तो दो
        किस्तों के बीच करीब चार महीने का फासला रहता आया है। लेकिन यह पैटर्न है, नियम नहीं — फासला कभी थोड़ा
        घटा है, कभी बढ़ा है।
      </p>
      <p>
        लिहाज़ा भरोसे लायक जगहें सिर्फ तीन हैं:{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> का
        होमपेज,{' '}
        <a href="https://pib.gov.in" target="_blank" rel="noopener noreferrer">PIB</a> की प्रेस विज्ञप्तियां,
        और कृषि मंत्रालय (
        <a href="https://agriwelfare.gov.in" target="_blank" rel="noopener noreferrer">agriwelfare.gov.in</a>
        ) की सूचनाएं। बाकी सब सुनी-सुनाई।
      </p>

      <H3>अफवाह और घोषणा में फर्क कैसे पहचानें</H3>
      <p>
        एक आसान कसौटी रखिए। असली घोषणा में तीन चीजें होती हैं — सरकारी वेबसाइट या PIB का लिखित बयान, कार्यक्रम
        का साफ जिक्र, और यह बात कि पैसा किस दिन से खातों में जाना शुरू होगा। अफवाह में इनमें से कुछ नहीं होता;
        बस एक तारीख होती है और "जल्दी चेक करें" वाली हड़बड़ी।
      </p>
      <p>
        दूसरी पहचान — भाषा। सरकारी सूचना आपसे कुछ नहीं मांगती। अफवाह या ठगी हमेशा कुछ मांगती है: link पर
        click, फॉर्म भरना, OTP बताना, या "प्रोसेसिंग फीस"। जहां मांग शुरू हुई, तुरंत समझ जाइए कि यह सूचना
        नहीं, जाल है।
      </p>

      <Note tone="warn">
        "आपकी 25वीं किस्त रोकी गई है, इस link पर click करके activate करें" — ऐसे SMS/WhatsApp message ठगी
        हैं। योजना का पैसा किसी link पर click करने से न आता है, न रुकता है। किसी भी message में आए link पर
        बैंक details कभी न भरें।
      </Note>

      <H2>इंतजार के बजाय ये 4 काम निपटा लें</H2>
      <p>
        किस्त की घोषणा जब भी हो, पैसा उन्हीं खातों में पहुंचता है जिनका record पूरा है। हर किस्त के बाद
        अखबारों में एक ही खबर छपती है — लाखों किसानों का भुगतान अटका, वजह पुरानी: अधूरी eKYC, बंद खाता,
        जमीन के record का mismatch। आप उस सूची में न आएं, इसके लिए:
      </p>
      <Figure
        src="/images/articles/hindi-yojna/pm-kisan-25vi-kist/ekyc-checklist.webp"
        alt="eKYC, NPCI seeding और land record — तीन जरूरी जांच का checklist"
        caption="किस्त से पहले ये तीन जांच YES पर होनी चाहिए"
      />
      <div className="space-y-3 my-4">
        <div className="border border-[var(--color-border)] rounded-xl p-4 bg-[var(--color-card)]">
          <p className="font-bold text-sm mb-1">1. eKYC की स्थिति देखें</p>
          <p className="text-sm leading-relaxed">
            Portal के "Know Your Status" में eKYC का column YES होना चाहिए। NO है तो OTP से (आधार-linked
            mobile जरूरी) या CSC पर biometric से करवा लें। तरीका{' '}
            <Link href="/articles/hi/ekyc-mobile-se">eKYC मोबाइल से</Link> वाले लेख में step-by-step है।
          </p>
        </div>
        <div className="border border-[var(--color-border)] rounded-xl p-4 bg-[var(--color-card)]">
          <p className="font-bold text-sm mb-1">2. बैंक खाते की आधार seeding जांचें</p>
          <p className="text-sm leading-relaxed">
            DBT का पैसा उस खाते में जाता है जो NPCI mapper में आधार से जुड़ा हो। खाता बदला है या dormant
            पड़ा है तो पहले यह ठीक कराएं —{' '}
            <Link href="/articles/hi/npci-aadhaar-seeding">NPCI सीडिंग guide</Link> देखें।
          </p>
        </div>
        <div className="border border-[var(--color-border)] rounded-xl p-4 bg-[var(--color-card)]">
          <p className="font-bold text-sm mb-1">3. जमीन का record मिलाएं</p>
          <p className="text-sm leading-relaxed">
            खरीद-बिक्री या वरासत हुई है तो खतौनी में नाम update होना जरूरी है। Land seeding pending दिखे तो
            पटवारी/तहसील से संपर्क करें।
          </p>
        </div>
        <div className="border border-[var(--color-border)] rounded-xl p-4 bg-[var(--color-card)]">
          <p className="font-bold text-sm mb-1">4. पिछली किस्त का payment status देखें</p>
          <p className="text-sm leading-relaxed">
            अगर पिछली बार FTO generate होकर भी पैसा नहीं पहुंचा था, तो वह समस्या अपने आप ठीक नहीं होगी।
            कारण status में ही लिखा मिलेगा।
          </p>
        </div>
      </div>

      <H3>कौन सा काम कितना समय लेता है — पहले क्या पकड़ें</H3>
      <p>
        चारों काम एक समान नहीं हैं। कुछ आज शाम तक हो जाते हैं, कुछ में दफ्तर के चक्कर लगते हैं। समय के हिसाब
        से क्रम बना लीजिए, वरना मुश्किल काम में उलझकर आसान वाले भी छूट जाते हैं:
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] p-2 text-left">काम</th>
              <th className="border border-[var(--color-border)] p-2 text-left">कहां होता है</th>
              <th className="border border-[var(--color-border)] p-2 text-left">कितना मुश्किल</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">eKYC (OTP वाली)</td>
              <td className="border border-[var(--color-border)] p-2">घर से, phone पर</td>
              <td className="border border-[var(--color-border)] p-2">बेहद आसान — खुद हो जाता है</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">eKYC (biometric)</td>
              <td className="border border-[var(--color-border)] p-2">नजदीकी CSC केंद्र</td>
              <td className="border border-[var(--color-border)] p-2">आसान — एक चक्कर</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">आधार-बैंक seeding</td>
              <td className="border border-[var(--color-border)] p-2">बैंक शाखा</td>
              <td className="border border-[var(--color-border)] p-2">मध्यम — form + verification</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2 font-semibold">जमीन का record / वरासत</td>
              <td className="border border-[var(--color-border)] p-2">तहसील, पटवारी</td>
              <td className="border border-[var(--color-border)] p-2">इनमें धीमा यही — follow-up चाहिए</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        समझदारी इसमें है कि जमीन वाला काम पहले शुरू करें (क्योंकि वह लंबा खिंचता है) और eKYC आज ही निपटा
        लें (क्योंकि वह आपके हाथ में है)। दोनों साथ-साथ चलेंगे तो घोषणा तक record पूरा मिलेगा।
      </p>

      <div className="my-5 border-2 border-[var(--color-border)] rounded-2xl overflow-hidden bg-[var(--color-card)] shadow-sm">
        <div className="bg-green-50 dark:bg-green-900/20 border-b border-[var(--color-border)] px-4 py-2.5">
          <span className="text-green-700 dark:text-green-300 text-xs font-bold">
            📖 Pehle guide padhi? Ab official site par jao:
          </span>
        </div>
        <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
          <div>
            <p className="font-bold text-[var(--color-text)] text-sm">PM Kisan Portal — Farmers Corner</p>
            <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
              Government of India — pmkisan.gov.in
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
      </div>

      <H2>घोषणा हो जाए, तो पैसा आया या नहीं — ऐसे देखें</H2>
      <p>
        आसान रास्ता mobile से ही है। Portal पर "Know Your Status" खोलिए, registration number (या "Know
        your registration no." से निकालकर) डालिए, OTP से अंदर जाइए — वहां payment की पूरी history दिखती है।
        Screen-by-screen तरीका हमने{' '}
        <Link href="/articles/hi/status-check-mobile-se">मोबाइल नंबर से स्टेटस चेक</Link> में अलग से लिखा
        है। गांव की पूरी सूची देखनी हो तो Farmers Corner का "Beneficiary List" विकल्प है।
      </p>
      <Figure
        src="/images/articles/hindi-yojna/pm-kisan-25vi-kist/status-page.webp"
        alt="PM Kisan portal का Know Your Status page"
        caption="Portal के Know Your Status page पर payment history दिखती है"
      />
      <p>
        एक बारीक बात — status में "FTO is Generated" दिखने का अर्थ है कि भुगतान का order बन चुका है, पर
        बैंक तक पैसा पहुंचने में 2-5 दिन और लग सकते हैं। घबराने की बात नहीं। इस शब्द की पूरी व्याख्या{' '}
        <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai">FTO वाले लेख</Link> में की गई है।
      </p>

      <H3>पैसा किस रास्ते से आपके खाते तक आता है</H3>
      <p>
        यह समझ लेने से आधे सवाल अपने आप खत्म हो जाते हैं। क्रम कुछ यूं है — राज्य अपने record से
        पात्र किसानों की सूची भेजता है, केंद्र के स्तर पर भुगतान का आदेश (FTO) बनता है, वह आदेश बैंकिंग
        व्यवस्था तक जाता है, और आखिर में आपके आधार से जुड़े खाते में रकम जमा होती है।
      </p>
      <p>
        चारों पड़ाव अलग-अलग जगह के हैं, और हर पड़ाव अपनी वजह से अटक सकता है — तभी तो किसी का पैसा पहले आता है
        और किसी का दो-चार दिन बाद। जब आप status पढ़ते हैं, दरअसल आप यह देख रहे होते हैं कि आपका मामला किस
        पड़ाव पर खड़ा है। और जिस पड़ाव पर अटका है, इलाज भी उसी जगह का होता है: सूची का मामला हो तो कृषि विभाग,
        खाते का मामला हो तो बैंक।
      </p>
      <Figure
        src="/images/articles/hindi-yojna/pm-kisan-25vi-kist/bank-passbook.webp"
        alt="बैंक passbook में entry जांचता किसान"
        caption="SMS न आए तो passbook या statement सबसे पक्का सबूत है"
      />

      <Note tone="danger">
        भारी नुकसान यहीं होता है — कोई फोन करके कहता है कि "किस्त निकलवा देंगे, थोड़ा खर्चा लगेगा"।
        योजना में किसी बिचौलिये की जरूरत ही नहीं है। न किस्त जल्दी निकलवाई जा सकती है, न किसी शुल्क से रुका
        भुगतान चालू होता है। जो OTP, आधार नंबर या बैंक details मांगे — बात उसी पल खत्म कर दीजिए, और शिकायत
        का रास्ता <Link href="/articles/hi/helpline-shikayat">हेल्पलाइन guide</Link> से चुनिए।
      </Note>

      <H3>बैंक का SMS नहीं आया — तो खुद कैसे पक्का करें</H3>
      <p>
        SMS पर पूरी तरह निर्भर न रहिए। कई बार मोबाइल नंबर बैंक के खाते में दर्ज ही नहीं होता, कभी बदल चुका
        होता है, और कभी message किसी और पुराने नंबर पर जाता रहता है। तीन पक्के रास्ते ये हैं — passbook में
        entry चढ़वाना, बैंक की app या mini statement में देखना, या बैंक मित्र/शाखा से पूछ लेना।
      </p>
      <p>
        और जब भी खाते की entry देखें, रकम के साथ तारीख भी नोट कर लीजिए। आगे कभी सवाल उठा कि पिछली किस्त मिली
        थी या नहीं, तो यही दो जानकारियां काम आएंगी — portal पर मिलान करना आसान हो जाता है। घर में एक
        डायरी बना लेना बिना खर्च का पक्का रिकॉर्ड है।
      </p>

      <H3>भुगतान वाले दिन portal नहीं खुल रहा</H3>
      <p>
        यह आम बात है। जिस दिन घोषणा होती है, करोड़ों लोग एक साथ एक ही page खोलते हैं — site धीमी पड़ती है, OTP
        देर से आता है, या error दिखता है। इसका अर्थ यह नहीं कि आपका नाम कट गया। सुबह जल्दी या रात में दोबारा
        कोशिश कीजिए, तब भीड़ कम रहती है। और याद रखिए — पैसा portal देखने से नहीं आता; portal सिर्फ खबर देता
        है। खाता सही है तो रकम अपने क्रम से आएगी, चाहे आप देखें या नहीं।
      </p>

      <H2>अगर पिछली बार नाम कट गया था तो?</H2>
      <p>
        तो पहले वजह पकड़िए, फिर इलाज कीजिए। कुल मिलाकर तीन ही श्रेणियां होती हैं। पहली — document की कमी
        (eKYC, बैंक, जमीन): ऊपर वाले चार काम कर लेने से अगली सूची में लौटने की गुंजाइश बन जाती है। दूसरी —
        अपात्रता (income tax भरने वाले, सरकारी कर्मचारी, संस्थागत जमीन): यहां कोई शिकायत काम नहीं करेगी,
        नियम ही यही है। तीसरी — राज्य स्तर पर verification में अटका आवेदन: इसके लिए helpline 155261 या
        अपने कृषि अधिकारी से बात करें। शिकायत दर्ज करने का पूरा तरीका{' '}
        <Link href="/articles/hi/helpline-shikayat">हेल्पलाइन guide</Link> में है।
      </p>

      <H3>नया आवेदन करने वालों के लिए</H3>
      <p>
        अगर आप योजना में अभी शामिल ही नहीं हैं, तो किस्त की तारीख आपके लिए दूसरे नंबर की बात है — पहला काम
        आवेदन और उसका verification है। नाम सूची में तभी आएगा जब जमीन का record और आधार-बैंक की कड़ी जुड़ चुकी
        हो, और यह प्रक्रिया एक-दो दिन की नहीं होती। कदम-दर-कदम रास्ता{' '}
        <Link href="/articles/hi/nayi-registration">नई registration guide</Link> में है। जितनी जल्दी
        आवेदन पूरा होगा, उतनी जल्दी आप आगे की किस्तों के दायरे में आएंगे।
      </p>

      <H2>यह पैसा किसे मिलता है, किसे नहीं — साफ-साफ समझिए</H2>
      <p>
        कई लोग महीनों इंतजार करते रहते हैं, जबकि नियम के हिसाब से वे दायरे में ही नहीं होते। मोटे तौर पर
        योजना खेती करने वाले उस किसान परिवार के लिए है जिसके नाम जमीन का record दर्ज है, और लाभ परिवार में
        एक ही सदस्य को मिलता है — पति, पत्नी और नाबालिग बच्चों को एक इकाई माना जाता है।
      </p>
      <p>
        दूसरी तरफ कुछ श्रेणियां योजना से बाहर रखी गई हैं — income tax भरने वाले, संवैधानिक पद पर रहे
        लोग, बड़ी pension पाने वाले, और डॉक्टर-वकील-CA सरीखे पंजीकृत पेशेवर। संस्थागत नाम दर्ज जमीन भी दायरे
        से बाहर रहती है। अगर आप इनमें से किसी में आते हैं, तो तारीख का इंतजार बेकार है — यह रुकावट नहीं,
        नियम है।
      </p>
      <p>
        और यह समझना जरूरी है कि गलती से पैसा ले लेना बाद में बोझ बन जाता है, क्योंकि अपात्र पाई गई रकम वापस
        मांगी जाती है। अगर ऐसा notice आ चुका हो तो घबराने की जगह{' '}
        <Link href="/articles/hi/recovery-notice">recovery notice वाली guide</Link> पढ़िए — वापसी का
        तरीका वहां लिखा है।
      </p>

      <H2>तारीख, रकम, खाता — जो पूछा जाता है, सो जवाब</H2>
      <p className="text-xs text-[var(--color-text-muted)] mb-3 italic">
        किस्त के दिनों में बार-बार दोहराए जाने वाले सवाल।
      </p>
      <div className="space-y-4 mb-8">
        {FAQS.map(({ q, a }) => (
          <div key={q}>
            <p className="font-semibold text-[var(--color-text)] text-sm mb-1">{q}</p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{a}</p>
          </div>
        ))}
      </div>

      <H2>घोषणा से पहले वाले हफ्ते में क्या करें — छोटी checklist</H2>
      <p>
        जब चर्चा तेज हो जाए कि किस्त आने वाली है, तब आखिरी हफ्ते में यह चार चीजें दोहरा लीजिए। ज्यादा समय
        नहीं लगेगा, और जो किसान यह कर लेते हैं उनका पैसा आम तौर पर बिना अड़चन आ जाता है:
      </p>
      <ul className="space-y-2 my-4 list-none pl-0">
        <li className="flex gap-2 text-sm leading-relaxed">
          <span className="shrink-0">✅</span>
          <span>
            <strong>Status के तीनों field एक बार खोलकर देख लें</strong> — eKYC, बैंक seeding, land seeding।
            तीनों YES हैं तो आपका काम पूरा है; कोई NO है तो उसी पर आज लग जाइए।
          </span>
        </li>
        <li className="flex gap-2 text-sm leading-relaxed">
          <span className="shrink-0">✅</span>
          <span>
            <strong>Registered मोबाइल नंबर चालू रखिए</strong> — OTP और बैंक message दोनों उसी पर आते हैं। जिस
            SIM में recharge खत्म हो चुका है, उसे किस्त से पहले ठीक करा लीजिए।
          </span>
        </li>
        <li className="flex gap-2 text-sm leading-relaxed">
          <span className="shrink-0">✅</span>
          <span>
            <strong>खाता चालू है या नहीं, पक्का कर लें</strong> — लंबे समय से लेन-देन न हुआ हो तो खाता निष्क्रिय
            पड़ सकता है। एक छोटी entry या शाखा में जाकर उसे चालू रखवाना बेहतर है।
          </span>
        </li>
        <li className="flex gap-2 text-sm leading-relaxed">
          <span className="shrink-0">✅</span>
          <span>
            <strong>गांव की सूची में अपना नाम मिला लें</strong> — Beneficiary List में नाम है तो निश्चिंत रहिए।
            नहीं है तो इंतजार करने का फायदा नहीं; कृषि अधिकारी से आवेदन की स्थिति पूछिए।
          </span>
        </li>
      </ul>
      <p>
        इस सूची का मकसद एक ही है — पैसे आने वाले दिन आपके पास करने के लिए कुछ न बचे। जो काम पहले निपट जाता है,
        वह किस्त को समय पर खाते तक पहुंचाता है; बाद में दौड़-भाग करने से क्रम नहीं बदलता।
      </p>

      <H2>मुख्य बात — तीन लाइन में</H2>
      <p>
        तारीख का इंतजार कीजिए, पर उसी में समय मत गंवाइए। घोषणा सरकार करेगी और खबर खुद पहुंच जाएगी; उससे पहले
        जो आपके हाथ में है वह कर लीजिए — eKYC पूरी, बैंक खाते की आधार seeding चालू, जमीन का record साफ। इन
        तीनों पर YES है तो किस्त निकलते ही पैसा आपके खाते में अपने क्रम से आ जाएगा, और आपको किसी के पीछे
        भागना नहीं पड़ेगा।
      </p>
      <p>
        और अगर किसी एक field पर NO अटका हुआ है, तो उसे अगली किस्त तक टालिए नहीं। हर बार एक ही रुकावट उसी जगह
        पैसा रोकती है, और महीनों बाद सुधार कराने पर पुरानी किस्तें जोड़ने की प्रक्रिया लंबी हो जाती है। आज
        जो आधा घंटा लगेगा, वह अगली दो-तीन किस्तों की चिंता खत्म कर देगा। बाकी रही तारीख — वह आ जाएगी, और
        तब तक आपका record तैयार मिलेगा।
      </p>

      <p className="text-xs text-[var(--color-text-muted)] italic">
        भरोसे का आधार: योजना के नियम और भुगतान प्रक्रिया{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> (कृषि
        एवं किसान कल्याण मंत्रालय) से; किस्त की तारीख की आधिकारिक घोषणा{' '}
        <a href="https://pib.gov.in" target="_blank" rel="noopener noreferrer">pib.gov.in</a> पर आती है। इस
        लेख में कोई अनुमानित तारीख जानबूझकर नहीं दी गई है — आखिरी जांच-पड़ताल{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')} की है।
      </p>

      <div className="mt-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
        <h3 className="font-black text-[var(--color-text)] mb-4 text-base flex items-center gap-2">
          <span>🔗</span> Related Articles — Yeh Bhi Padho
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {RELATED.map((a) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="flex items-center gap-3 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors text-sm font-medium text-[var(--color-text)] no-underline"
            >
              {a.emoji && <span className="text-xl shrink-0">{a.emoji}</span>}
              <span>{a.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
