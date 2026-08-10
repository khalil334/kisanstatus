import Link from 'next/link';
import Image from 'next/image';
import type { HindiArticle } from '@/lib/hindi-articles-data';

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'क्या पूरे देश के लिए कोई एक कर्ज माफी योजना है?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'नहीं। कर्ज माफी राज्य सरकारों का फैसला होता है — हर राज्य की अपनी scheme, अपनी शर्तें, अपनी list। केंद्र की तरफ से आखिरी nationwide scheme 2008 (ADWDRS) थी। अभी कोई अखिल भारतीय माफी योजना चालू नहीं है।',
      },
    },
    {
      '@type': 'Question',
      name: 'महाराष्ट्र की नई कर्ज माफी में कितना माफ होगा?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'March 2026 के बजट में सरकार ने ₹2 लाख तक के overdue crop loans (September 2025 तक बकाया) माफ करने की घोषणा की है। साथ में नियमित कर्ज चुकाने वालों को ₹50,000 तक incentive की बात है। लागू होने की details और list सरकारी GR से confirm करें।',
      },
    },
    {
      '@type': 'Question',
      name: 'लिस्ट में नाम कैसे check करें?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'जिस राज्य की scheme है, उसी के official portal पर — आधार नंबर या loan account number से। Portal का link हमेशा राज्य सरकार की site से लें, WhatsApp के forward से नहीं। जब तक official list जारी नहीं होती, कोई भी "list" fake है।',
      },
    },
    {
      '@type': 'Question',
      name: 'KCC का loan भी माफ होता है क्या?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'निर्भर करता है scheme की शर्तों पर। ज्यादातर माफी योजनाएं short-term crop loan cover करती हैं — जिनमें KCC से लिया crop loan भी आ सकता है। Tractor loan और dairy loan — अर्थात् term loans — आम तौर पर बाहर रहते हैं। अपनी scheme का GR पढ़ें।',
      },
    },
    {
      '@type': 'Question',
      name: 'कोई agent बोल रहा है पैसे देकर नाम डलवा देगा — सच है?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'बिल्कुल fraud है। कर्ज माफी की list बैंक record से बनती है — कोई नाम "डलवा" नहीं सकता। पैसे देने से सिर्फ पैसे जाएंगे। ऐसे agent की शिकायत police में करें।',
      },
    },
    {
      '@type': 'Question',
      name: 'माफी के बाद CIBIL score ठीक हो जाता है?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Loan settle होने से default का दाग हल्का जरूर होता है, लेकिन record में waiver का जिक्र रह सकता है। नया loan लेते समय बैंक पूरी history देखता है। इसीलिए हो सके तो नियमित repayment ही best रास्ता है — कई राज्य उसका इनाम भी दे रहे हैं।',
      },
    },
    {
      '@type': 'Question',
      name: 'नाम list में आ गया — अब मुझे क्या करना होगा?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ज्यादातर schemes में आधार से biometric सत्यापन कराना पड़ता है — पिछली फुले कर्जमुक्ती में यह CSC/बैंक पर होता था। सत्यापन के बाद रकम सीधे loan account में jama होती है। आपके हाथ में cash नहीं आता — जो कहे “माफी का पैसा निकालने में मदद करूंगा”, वह ठग है।',
      },
    },
    {
      '@type': 'Question',
      name: 'Loan settle होने के बाद कौन सा कागज लेना जरूरी है?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'बैंक से NOC (No Objection Certificate) या loan closure letter जरूर लें और संभाल कर रखें। जमीन गिरवी रखी थी तो उसके कागज वापस लेना न भूलें। आगे नया loan लेते समय यही कागज सबूत होगा कि पुराना खाता साफ है।',
      },
    },
    {
      '@type': 'Question',
      name: 'मेरा loan दो बैंकों में है — दोनों माफ होंगे?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Scheme की शर्तों पर निर्भर है — ज्यादातर में प्रति किसान/परिवार एक सीमा (मिसाल के तौर पर ₹2 लाख तक) तय होती है, चाहे खाते कितने भी हों। दोनों खातों का मिलाकर बकाया सीमा से ज्यादा है तो बचा हिस्सा आपको खुद चुकाना होगा। GR में family-unit की परिभाषा ध्यान से पढ़ें।',
      },
    },
  ],
};

// Local presentational helpers — self-contained file, no shared imports.
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

function SH({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)]">
      {children}
    </h2>
  );
}

function IB({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 p-4 bg-green-50 dark:bg-green-900/20 border-green-600 dark:border-green-500 border-l-4 rounded-r-xl text-sm text-[var(--color-text)] leading-relaxed">
      {children}
    </div>
  );
}

function WB({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 p-4 bg-amber-50 dark:bg-amber-900/20 border-amber-500 border-l-4 rounded-r-xl text-sm text-[var(--color-text)] leading-relaxed">
      {children}
    </div>
  );
}

function DB({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 p-4 bg-red-50 dark:bg-red-900/20 border-red-500 border-l-4 rounded-r-xl text-sm text-[var(--color-text)] leading-relaxed">
      {children}
    </div>
  );
}

export default function KisanKarjMafiList2027({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <p>
        &quot;कर्ज माफ हो गया, लिस्ट आ गई है, अपना नाम देख लो&quot; — यह message आपको भी WhatsApp पर मिला
        होगा। Link पर click किया तो या तो कोई ad-भरी site खुली, या नाम-आधार मांगने वाला form। रुकिए। इस
        article में हम केवल verified बातें बताएंगे — किस राज्य में कौन सी कर्ज माफी वाकई चल रही
        है, list कहां देखनी है, और किन &quot;lists&quot; से बचना है।
      </p>
      <DB>
        बुनियादी बात पहले: <strong>कर्ज माफी की कोई भी list सिर्फ सरकारी portal या बैंक से confirm
        होती है।</strong> WhatsApp/YouTube वाली &quot;लिस्ट में नाम देखें&quot; sites अक्सर fake होती हैं —
        कई तो आधार details चुराने के लिए बनी हैं। पैसे मांगने वाला हर agent fraud है।
      </DB>

      <Figure
        src="/images/articles/hindi-yojna/karj-mafi-list/karj-mafi-hero.webp"
        alt="लोन के कागज़ देखता किसान"
        caption="कर्ज माफी की खबर पर भरोसा सिर्फ सरकारी स्रोत से करें"
      />

      <SH>पहले basics — कर्ज माफी कैसे काम करती है?</SH>
      <p>
        Loan waiver केंद्र की नहीं, <strong>राज्य सरकार की</strong> scheme होती है। राज्य घोषणा करता है,
        शर्तें तय करता है (कितनी रकम तक, किस तारीख तक का बकाया, कौन सा loan), फिर बैंक अपने records से
        eligible किसानों की list बनाते हैं। पैसा सरकार बैंक को देती है, आपका loan account settle होता है।
        तभी हर राज्य की कहानी अलग है — और तभी &quot;पूरे देश की कर्ज माफी list&quot; नाम की कोई चीज होती
        ही नहीं।
      </p>
      <p>
        Historical context के लिए — देश-स्तर की आखिरी बड़ी माफी 2008 की ADWDRS थी (करीब ₹52,500 करोड़)।
        उसके बाद से सब कुछ राज्यों के हाथ में है। RBI बार-बार कह चुका है कि waivers से credit culture
        बिगड़ता है, फिर भी चुनावों के आसपास घोषणाएं होती रहती हैं। किसान के लिए काम की बात इतनी है:{' '}
        <strong>घोषणा ≠ पैसा</strong>। घोषणा के बाद GR (शासनादेश) आता है, फिर budget, फिर list — इसमें
        महीनों लगते हैं।
      </p>

      <Figure
        src="/images/articles/hindi-yojna/karj-mafi-list/state-list.webp"
        alt="राज्यवार कर्ज माफी की स्थिति का नक्शा"
        caption="कर्ज माफी राज्य सरकार की scheme है — हर राज्य की स्थिति अलग है"
      />

      <SH>राज्यवार स्थिति — जो verified है</SH>
      <p>
        नीचे केवल उतना लिखा है जितना official announcements से confirm है। जहां हमें पक्का नहीं पता, वहां साफ लिखा है
        — अंदाजे की तारीखें और रकमें हम नहीं छापते।
      </p>

      <h3 className="text-lg font-bold mt-6 mb-2">महाराष्ट्र — ताजातरीन और अब तक की भारी-भरकम घोषणा</h3>
      <p>
        March 2026 के राज्य बजट में सरकार ने overdue crop loans की माफी घोषित की — <strong>₹2 लाख तक</strong>,
        उन किसानों के लिए जिनका crop loan September 2025 तक बकाया (overdue) था। साथ में एक समझदार twist:
        जो किसान नियमित कर्ज चुकाते रहे, उन्हें <strong>₹50,000 तक incentive</strong> मिलेगा। कुल अनुमानित
        खर्च करीब ₹35,000 करोड़ बताया गया। पहले की महात्मा ज्योतिराव फुले कर्जमुक्ती योजना (₹2 लाख तक) इसी
        राज्य में चली थी — नई scheme उसी परंपरा में है। List और implementation की timeline राज्य के GR से
        आएगी — district cooperative banks और अपने बैंक branch से पूछते रहें।
      </p>

      <h3 className="text-lg font-bold mt-6 mb-2">तमिलनाडु</h3>
      <p>
        Cooperative banks से लिए गए crop loans पर <strong>₹75,000 तक</strong> की माफी की घोषणा हुई है। ध्यान
        दें — यह cooperative loans के लिए है; commercial बैंकों के loan इसमें नहीं। Details राज्य के
        cooperation department से confirm करें।
      </p>

      <h3 className="text-lg font-bold mt-6 mb-2">झारखंड, MP, UP, राजस्थान — पुरानी schemes का हाल</h3>
      <p>
        इन राज्यों में पिछले सालों में माफी योजनाएं चलीं — झारखंड की ऋण माफी योजना (₹50,000 तक), MP की जय
        किसान फसल ऋण माफी, UP की 2017 वाली माफी, राजस्थान की 2018-19 वाली। इनमें से ज्यादातर की lists जारी
        होकर payments भी हो चुकी हैं। <strong>अभी इन राज्यों में कोई नई माफी की official घोषणा हमें verified
        नहीं मिली।</strong> अगर आपके राज्य में नई scheme की चर्चा है, तो उसका सच सिर्फ दो जगह मिलेगा — राज्य
        के budget documents और कृषि/सहकारिता विभाग की official site। News में &quot;जल्द होगी&quot; type की
        headlines को घोषणा मत समझिए।
      </p>
      <WB>
        Warning दोबारा — Google पर &quot;karj mafi list 2027&quot; search करने पर जो ad-heavy sites आती हैं,
        उनमें से ज्यादातर पुरानी schemes की recycled जानकारी चला रही हैं या fake list दिखा रही हैं। तारीख
        देखिए, source देखिए, तब भरोसा कीजिए।
      </WB>

      <SH>एक सच्ची timeline — महाराष्ट्र की फुले कर्जमुक्ती में क्या-क्या हुआ था</SH>
      <p>
        घोषणा और पैसे के बीच की दूरी समझनी हो तो पिछली बार का record देख लीजिए। दिसंबर 2019 में
        महाराष्ट्र सरकार ने महात्मा ज्योतिराव फुले शेतकरी कर्जमुक्ती योजना घोषित की — ₹2 लाख तक के
        crop loans, cut-off 30 September 2019। इसके लिए एक dedicated portal बना (
        <a href="https://mjpsky.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer">
          mjpsky.maharashtra.gov.in
        </a>
        ), और पहली beneficiary list <strong>24 February 2020</strong> को आई, दूसरी 28 February को।
        गिनें तो घोषणा से पहली list तक ही करीब ढाई महीने। उसके बाद आधार सत्यापन का दौर चला — किसान
        को खुद CSC या बैंक जाकर अंगूठा लगाना पड़ता था, तभी रकम loan account में जाती थी।
      </p>
      <p>
        उस scheme से तीन सबक आज भी काम के हैं। पहला — <strong>list किस्तों में आती है</strong>; पहली
        list में नाम न दिखे तो घबराने की जरूरत नहीं, अगली lists का इंतजार और बैंक से पूछताछ दोनों
        साथ चलाइए। दूसरा — application का कोई लंबा form नहीं था; process paperless थी और आधार ही
        मुख्य पहचान था। जिसका आधार loan account से जुड़ा नहीं था, उसी का मामला बुरी तरह अटका। तीसरा —
        सत्यापन के बिना पैसा नहीं आया, चाहे नाम list में हो। नई scheme का ढांचा भी लगभग यही रहने
        की उम्मीद है, तैयारी के तीन काम नीचे लिखे हैं।
      </p>

      <SH>2008 की देशव्यापी माफी — इतिहास से एक जरूरी page</SH>
      <p>
        जो लोग कहते हैं &quot;केंद्र सरकार सबका कर्ज माफ करेगी&quot;, उन्हें यह जानना चाहिए कि केंद्र ने ऐसा
        सिर्फ एक बार किया है — 2008 की Agricultural Debt Waiver and Debt Relief Scheme (ADWDRS)।
        उसमें छोटे और सीमांत किसानों (2 हेक्टेयर तक) का पूरा eligible बकाया माफ हुआ था और बड़े
        किसानों को one-time settlement पर 25% छूट मिली थी। बाद में CAG की audit report में उस
        scheme की खामियां भी उजागर हुईं — कई eligible किसान छूट गए, कई ineligible को फायदा मिल
        गया। तभी से हर नई माफी में सत्यापन के पेंच बढ़ते गए हैं। आधार-linking, biometric सत्यापन,
        bank-record से मिलान — यह सब उसी सबक का फल है। निष्कर्ष साफ है: प्रक्रिया धीमी इस डर से है
        कि गलत हाथों में पैसा न चला जाए। आपके लिए सीख — कागज जितने साफ,
        रास्ता उतना छोटा।
      </p>

      <SH>घोषणा से पैसे तक — रास्ता कितना लंबा है?</SH>
      <p>
        अनुभव के आधार पर यह क्रम समझ लीजिए — बजट/भाषण में घोषणा, फिर cabinet की मंजूरी और GR
        (शासनादेश), फिर बैंकों से data इकट्ठा करके list बनना, फिर आधार सत्यापन, और आखिर में
        खातों में रकम। पिछली फुले कर्जमुक्ती में घोषणा से पहली किस्त तक कई महीने लगे थे, और आखिरी
        किस्तों तक सालों खिंच गया था। लिहाज़ा घोषणा सुनते ही interest का meter रुका मत समझिए —
        जब तक आपका account settle नहीं हुआ, बकाया बढ़ रहा है। यही एक बात समझ लेने से आधे गलत
        फैसले बच जाते हैं।
      </p>

      <Figure
        src="/images/articles/hindi-yojna/karj-mafi-list/bank-loan-desk.webp"
        alt="बैंक शाखा में अधिकारी से बात करता किसान"
        caption="सबसे पक्की पुष्टि आपकी अपनी बैंक शाखा से मिलती है"
      />

      <SH>अपना नाम check करने का सही तरीका</SH>
      <p>जब आपके राज्य की list official तौर पर जारी हो, तब यह करें:</p>
      <ol className="my-4 pl-5 space-y-2 list-decimal">
        <li className="text-sm text-[var(--color-text)] leading-relaxed pl-1">
          <strong>राज्य के official portal पर जाएं</strong> — link राज्य सरकार की main site या कृषि विभाग से
          लें। महाराष्ट्र में पिछली scheme की तरह dedicated portal बनने की उम्मीद है।
        </li>
        <li className="text-sm text-[var(--color-text)] leading-relaxed pl-1">
          <strong>आधार नंबर या loan account number</strong> डालें — यही दो चीजें record से मिलान के लिए
          इस्तेमाल होती हैं।
        </li>
        <li className="text-sm text-[var(--color-text)] leading-relaxed pl-1">
          नाम मिले तो <strong>बैंक branch जाकर confirm करें</strong> — असली settlement बैंक के record में
          दिखता है, portal सिर्फ आईना है।
        </li>
        <li className="text-sm text-[var(--color-text)] leading-relaxed pl-1">
          नाम न मिले और आप शर्तें पूरी करते हों, तो बैंक से लिखित में कारण पूछें और राज्य की grievance
          व्यवस्था में शिकायत दर्ज करें।
        </li>
      </ol>
      <IB>
        एक field observation — महाराष्ट्र की पिछली फुले कर्जमुक्ती के समय बड़ी तादाद में नाम इस वजह से छूटे थे कि
        loan account आधार से link नहीं था। सीख सीधी है: <strong>अपना आधार बैंक loan account से link करा कर
        रखिए</strong>, scheme आए उससे पहले। List बनती ही bank-record से है।
      </IB>

      <SH>List आने से पहले की तैयारी — आज के 3 काम</SH>
      <p>
        Scheme की घोषणा और list के बीच का समय बर्बाद मत करिए — यही वह window है जब आप अपना
        record ऐसा साफ कर सकते हैं कि नाम छूटने की नौबत ही न आए:
      </p>
      <ol className="my-4 pl-5 space-y-2 list-decimal">
        <li className="text-sm text-[var(--color-text)] leading-relaxed pl-1">
          <strong>Loan account आधार से link कराएं</strong> — branch जाकर पूछें कि आपके crop loan
          account में आधार दर्ज है या नहीं। पिछली schemes में नाम कटने की टॉप वजह यही कमी थी।
        </li>
        <li className="text-sm text-[var(--color-text)] leading-relaxed pl-1">
          <strong>Loan statement निकलवाकर रखें</strong> — कितना principal, कितना interest, कब से
          overdue। List आने पर अपनी रकम का मिलान आप खुद कर पाएंगे — गलत रकम चढ़ी हो तो तुरंत
          आपत्ति कर सकेंगे।
        </li>
        <li className="text-sm text-[var(--color-text)] leading-relaxed pl-1">
          <strong>मोबाइल नंबर बैंक record में update रखें</strong> — सत्यापन का बुलावा SMS से आता है।
          पुराना नंबर दर्ज है तो बुलावा किसी और के phone पर जाएगा।
        </li>
      </ol>

      <Figure
        src="/images/articles/hindi-yojna/karj-mafi-list/biometric-verify.webp"
        alt="Biometric सत्यापन के लिए fingerprint scanner पर अंगूठा लगाता किसान"
        caption="सत्यापन वाले दिन आधार और biometric दोनों लगते हैं"
      />

      <SH>Biometric सत्यापन वाले दिन क्या होता है — पूरा नक्शा</SH>
      <p>
        नाम list में आने के बाद का step ज्यादातर articles छोड़ देते हैं, जबकि असली अटकाव उसी मोड़ पर आता
        है। पिछली schemes के अनुभव से यह क्रम समझ लीजिए। सत्यापन के लिए आपको एक <strong>unique
        ID</strong> मिलती है (फुले कर्जमुक्ती में यह list के साथ छपती थी)। वह ID और आधार लेकर आप CSC
        या बैंक branch जाते हैं। Operator आपका अंगूठा machine पर लगवाता है — आधार के record से
        मिलान होता है। Screen पर आपका loan details दिखता है: कौन सा बैंक, कितना बकाया। आपको
        confirm करना होता है कि details सही हैं।
      </p>
      <p>
        यहीं दो बातें ध्यान की हैं। पहली — अगर screen पर दिखी रकम आपके हिसाब से गलत है, तो
        <strong> confirm मत कीजिए</strong>; आपत्ति दर्ज करने का विकल्प होता है, उसका इस्तेमाल करें और
        बैंक से अपना statement लेकर मिलान करें। एक बार गलत रकम confirm हो गई तो सुधरवाना लंबा
        काम है। दूसरी — बुजुर्ग किसानों में अंगूठे की लकीरें घिस जाने से biometric fail होना आम है।
        ऐसे में iris scan (आंख से पहचान) का विकल्प मांगिए, या आधार केंद्र जाकर biometric update
        करा लीजिए। यह समस्या PM Kisan के eKYC में भी वैसी ही आती है — एक बार सुलझा लेंगे
        तो दो जगह काम आएगा।
      </p>

      <SH>तीन असली सवाल, तीन सीधे जवाब</SH>
      <p>
        <strong>&quot;मैंने loan चुका दिया, अब माफी आ गई — मेरा पैसा वापस मिलेगा?&quot;</strong> — आम तौर पर
        नहीं। माफी बकाया (outstanding) loans पर लागू होती है। हां, महाराष्ट्र model की तरह कुछ राज्य
        नियमित चुकाने वालों को अलग incentive देते हैं — वह माफी नहीं, इनाम है, और उसकी अलग list
        बनती है। अपने राज्य की scheme में ऐसा प्रावधान है या नहीं, GR में देखिए।
      </p>
      <p>
        <strong>&quot;पिता के नाम पर loan था, उनका देहांत हो गया — माफी मिलेगी?&quot;</strong> — मिल सकती है,
        लेकिन process लंबी है। पहले बैंक में मृत्यु प्रमाणपत्र और वारिस के कागज देकर loan account में
        legal heir दर्ज कराना होगा। पिछली schemes में मृतक किसानों के मामले सत्यापन में लंबे समय तक
        अटके रहे, क्योंकि biometric उनका हो नहीं सकता — वारिस का सत्यापन अलग प्रक्रिया से होता है।
        बैंक से लिखित में पूछिए कि आपके मामले में क्या करना है।
      </p>
      <p>
        <strong>&quot;Society का कर्ज है, बैंक का नहीं — गिनती में आएगा?&quot;</strong> — ज्यादातर schemes में
        हां। Cooperative society से लिया crop loan भी district central cooperative bank के record
        में दर्ज होता है, और तमिलनाडु जैसी कुछ schemes तो सिर्फ cooperative loans के लिए ही हैं।
        अपनी society के सचिव से अपने खाते का statement निकलवा कर रखिए — यह statement ही आपका सबूत है।
      </p>

      <SH>ठगी के तीन नए तरीके — पहचान कर रखिए</SH>
      <p>
        हर माफी की घोषणा के साथ ठगों का season भी शुरू होता है। तीन पैंतरे बार-बार दिखते हैं। पहला —
        <strong> fake list site</strong>: हूबहू सरकारी जैसी दिखने वाली site जो आधार, बैंक और OTP
        मांगती है — OTP दिया नहीं कि खाता खाली। सरकारी list कभी OTP नहीं मांगती, सिर्फ देखने के
        लिए। दूसरा — <strong>“processing fee” वाला agent</strong>: “₹2,000 दो, नाम पक्का डलवा दूंगा”।
        List बैंक record से बनती है, किसी के डालने से नहीं। तीसरा — <strong>fake settlement call</strong>:
        बैंक अधिकारी बनकर phone आता है कि “माफी के लिए आपका आधार-OTP चाहिए”। बैंक कभी phone
        पर OTP नहीं मांगता। इन तीनों में से कुछ भी हो तो 1930 (cyber fraud helpline) पर शिकायत करें।
      </p>

      <SH>कौन सा कर्ज माफी में आता है, कौन सा नहीं — मोटा नक्शा</SH>
      <p>
        हर scheme का GR अपनी सीमाएं खुद तय करता है, पर अब तक की लगभग हर माफी में एक pattern रहा
        है। अंदर आता है — <strong>short-term crop loan</strong> (फसल उगाने के लिए लिया साल भर का कर्ज),
        चाहे वह cooperative society से हो या KCC से। बाहर रहते हैं — tractor/machinery सरीखे term
        loans, dairy-poultry के business loans, gold loan (चाहे खेती के नाम पर लिया हो), और साहूकार
        से लिया उधार — क्योंकि उसका कोई बैंक record ही नहीं।
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] px-3 py-2 text-left">कर्ज का प्रकार</th>
              <th className="border border-[var(--color-border)] px-3 py-2 text-left">माफी में?</th>
              <th className="border border-[var(--color-border)] px-3 py-2 text-left">वजह</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">Short-term crop loan (KCC / cooperative society)</td>
              <td className="border border-[var(--color-border)] px-3 py-2">आमतौर पर हां</td>
              <td className="border border-[var(--color-border)] px-3 py-2">फसल के लिए लिया साल भर का कर्ज — हर माफी का मुख्य दायरा</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">Tractor / machinery term loan</td>
              <td className="border border-[var(--color-border)] px-3 py-2">नहीं</td>
              <td className="border border-[var(--color-border)] px-3 py-2">यह crop loan नहीं, term loan है</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">Dairy / poultry business loan</td>
              <td className="border border-[var(--color-border)] px-3 py-2">नहीं</td>
              <td className="border border-[var(--color-border)] px-3 py-2">Allied business की श्रेणी में गिना जाता है</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">Gold loan (खेती के नाम पर भी)</td>
              <td className="border border-[var(--color-border)] px-3 py-2">नहीं</td>
              <td className="border border-[var(--color-border)] px-3 py-2">गिरवी पर आधारित कर्ज, crop loan नहीं</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">साहूकार से लिया उधार</td>
              <td className="border border-[var(--color-border)] px-3 py-2">नहीं</td>
              <td className="border border-[var(--color-border)] px-3 py-2">कोई बैंक record ही नहीं होता</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        दूसरा आम filter — <strong>तारीख।</strong> घोषणा में हमेशा एक cut-off होती है (महाराष्ट्र में
        September 2025 तक का बकाया)। उसके बाद लिया गया या overdue हुआ कर्ज गिनती में नहीं आता।
        यह वजह है कि “अब loan लेकर माफी का इंतजार कर लें” वाली सलाह बेवकूफी है — नई तारीख का कर्ज किसी
        भी माफी में नहीं आएगा। तीसरा filter कई जगह लगा है — <strong>परिवार/रकम की सीमा</strong>: प्रति
        परिवार एक तय रकम तक ही माफी, बाकी खुद चुकाना होगा। अपनी स्थिति इन तीन filters पर परख
        लेंगे तो GR आते ही समझ जाएंगे कि आपका नाम आना चाहिए या नहीं।
      </p>

      <SH>माफी का इंतजार बनाम अपनी planning</SH>
      <p>
        सच कहें तो कर्ज माफी lottery जैसी है — आ गई तो राहत, नहीं आई तो इंतजार में interest बढ़ता जाता है।
        Waiver की उम्मीद में EMI रोक देना महंगी से महंगी गलती है, क्योंकि scheme की cut-off date आपके हाथ में
        नहीं। बेहतर रास्ते:
      </p>
      <ol className="my-4 pl-5 space-y-2 list-decimal">
        <li className="text-sm text-[var(--color-text)] leading-relaxed pl-1">
          कर्ज महंगे साहूकार से है तो पहले उसे <Link href="/articles/KisanCreditCardOnlineApply2026">KCC</Link>{' '}
          की तरह के सस्ते रास्ते में shift करने की सोचें — 4% तक effective interest वाला crop loan हर हाल में
          बेहतर है।
        </li>
        <li className="text-sm text-[var(--color-text)] leading-relaxed pl-1">
          नया कर्ज लेना हो तो कौन सा loan कहां से और किस दर पर मिलता है, इसका पूरा तुलनात्मक हिसाब{' '}
          <Link href="/articles/KisanRinKahaSeLe2026">इस page पर देख लें</Link>।
        </li>
        <li className="text-sm text-[var(--color-text)] leading-relaxed pl-1">
          याद रखिए — महाराष्ट्र model में नियमित चुकाने वालों को ₹50,000 incentive मिल रहा है। अर्थात अब
          discipline का भी इनाम है, सिर्फ default का नहीं।
        </li>
      </ol>

      <SH>सवाल-जवाब — जो उलझनें बार-बार आती हैं</SH>
      <p className="text-xs text-[var(--color-text-muted)] mb-3 italic">
        कर्ज माफी पर बार-बार पूछे जाने वाले सवाल।
      </p>
      <div className="space-y-4 mb-8">
        <div>
          <p className="font-semibold text-[var(--color-text)] text-sm mb-1">क्या पूरे देश के लिए कोई एक कर्ज माफी योजना है?</p>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">नहीं। कर्ज माफी राज्य सरकारों का फैसला होता है — हर राज्य की अपनी scheme, अपनी शर्तें, अपनी list। केंद्र की तरफ से आखिरी nationwide scheme 2008 (ADWDRS) थी। अभी कोई अखिल भारतीय माफी योजना चालू नहीं है।</p>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-text)] text-sm mb-1">महाराष्ट्र की नई कर्ज माफी में कितना माफ होगा?</p>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">March 2026 के बजट में सरकार ने ₹2 लाख तक के overdue crop loans (September 2025 तक बकाया) माफ करने की घोषणा की है। साथ में नियमित कर्ज चुकाने वालों को ₹50,000 तक incentive की बात है। लागू होने की details और list सरकारी GR से confirm करें।</p>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-text)] text-sm mb-1">लिस्ट में नाम कैसे check करें?</p>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">जिस राज्य की scheme है, उसी के official portal पर — आधार नंबर या loan account number से। Portal का link हमेशा राज्य सरकार की site से लें, WhatsApp के forward से नहीं। जब तक official list जारी नहीं होती, कोई भी &quot;list&quot; fake है।</p>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-text)] text-sm mb-1">KCC का loan भी माफ होता है क्या?</p>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">निर्भर करता है scheme की शर्तों पर। ज्यादातर माफी योजनाएं short-term crop loan cover करती हैं — जिनमें KCC से लिया crop loan भी आ सकता है। Tractor loan और dairy loan — अर्थात् term loans — आम तौर पर बाहर रहते हैं। अपनी scheme का GR पढ़ें।</p>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-text)] text-sm mb-1">कोई agent बोल रहा है पैसे देकर नाम डलवा देगा — सच है?</p>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">बिल्कुल fraud है। कर्ज माफी की list बैंक record से बनती है — कोई नाम &quot;डलवा&quot; नहीं सकता। पैसे देने से सिर्फ पैसे जाएंगे। ऐसे agent की शिकायत police में करें।</p>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-text)] text-sm mb-1">माफी के बाद CIBIL score ठीक हो जाता है?</p>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Loan settle होने से default का दाग हल्का जरूर होता है, लेकिन record में waiver का जिक्र रह सकता है। नया loan लेते समय बैंक पूरी history देखता है। इसीलिए हो सके तो नियमित repayment ही best रास्ता है — कई राज्य उसका इनाम भी दे रहे हैं।</p>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-text)] text-sm mb-1">नाम list में आ गया — अब मुझे क्या करना होगा?</p>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">ज्यादातर schemes में आधार से biometric सत्यापन कराना पड़ता है — पिछली फुले कर्जमुक्ती में यह CSC/बैंक पर होता था। सत्यापन के बाद रकम सीधे loan account में jama होती है। आपके हाथ में cash नहीं आता — जो कहे “माफी का पैसा निकालने में मदद करूंगा”, वह ठग है।</p>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-text)] text-sm mb-1">Loan settle होने के बाद कौन सा कागज लेना जरूरी है?</p>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">बैंक से NOC (No Objection Certificate) या loan closure letter जरूर लें और संभाल कर रखें। जमीन गिरवी रखी थी तो उसके कागज वापस लेना न भूलें। आगे नया loan लेते समय यही कागज सबूत होगा कि पुराना खाता साफ है।</p>
        </div>
        <div>
          <p className="font-semibold text-[var(--color-text)] text-sm mb-1">मेरा loan दो बैंकों में है — दोनों माफ होंगे?</p>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">Scheme की शर्तों पर निर्भर है — ज्यादातर में प्रति किसान/परिवार एक सीमा (मिसाल के तौर पर ₹2 लाख तक) तय होती है, चाहे खाते कितने भी हों। दोनों खातों का मिलाकर बकाया सीमा से ज्यादा है तो बचा हिस्सा आपको खुद चुकाना होगा। GR में family-unit की परिभाषा ध्यान से पढ़ें।</p>
        </div>
      </div>

      <SH>चलते-चलते — आज शाम तक का काम</SH>
      <p>
        इतना लंबा लेख पढ़ने के बाद काम सिर्फ तीन हैं। बैंक जाकर पूछिए कि loan account से आधार और
        चालू mobile number दोनों जुड़े हैं या नहीं — नहीं जुड़े तो आज ही जुड़वाइए। अपना ताजा loan
        statement निकलवाकर घर रखिए। और WhatsApp पर आई किसी भी &quot;list&quot; पर अपना आधार मत
        डालिए — सच जानना हो तो सीधे अपनी branch जाकर पूछ लीजिए। बस इतना कर लिया तो जब भी
        आपके राज्य की list आएगी, आप उसमें पूरी तैयारी वाले किसानों में होंगे।
      </p>

      <p className="text-xs text-[var(--color-text-muted)] italic">
        इस लेख की जानकारी कहां से आई — महाराष्ट्र की पिछली फुले कर्जमुक्ती का official portal (
        <a href="https://mjpsky.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer">
          mjpsky.maharashtra.gov.in
        </a>
        ), महाराष्ट्र Budget 2026-27 का विश्लेषण (
        <a href="https://prsindia.org/budgets/states/maharashtra-budget-analysis-2026-27" target="_blank" rel="noopener noreferrer">
          PRS Legislative Research
        </a>
        ), farm loan waivers पर RBI Internal Working Group report (2019) की public reporting, और राज्य
        सरकारों की घोषणाओं की news coverage। योजनाओं की शर्तें GR जारी होने पर बदल सकती हैं, अतः
        अंतिम पुष्टि अपने बैंक और राज्य के कृषि/सहकारिता विभाग से ही करें — हमने ये तथ्य आखिरी बार{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')} को मिलाए थे।
      </p>

      <div className="mt-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
        <h3 className="font-black text-[var(--color-text)] mb-4 text-base flex items-center gap-2">
          <span>🔗</span> Related Articles — Yeh Bhi Padho
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Link
            href="/articles/KisanRinKahaSeLe2026"
            className="flex items-center gap-3 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors text-sm font-medium text-[var(--color-text)] no-underline"
          >
            <span className="text-xl shrink-0">🏦</span>
            <span>Kisan Rin Kahan Se Le</span>
          </Link>
          <Link
            href="/articles/KisanCreditCardOnlineApply2026"
            className="flex items-center gap-3 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors text-sm font-medium text-[var(--color-text)] no-underline"
          >
            <span className="text-xl shrink-0">💳</span>
            <span>KCC Online Apply</span>
          </Link>
          <Link
            href="/articles/KisanTractorLoan2026"
            className="flex items-center gap-3 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors text-sm font-medium text-[var(--color-text)] no-underline"
          >
            <span className="text-xl shrink-0">🚜</span>
            <span>Tractor Loan Guide</span>
          </Link>
          <Link
            href="/articles/PmKisanMasterGuide2026"
            className="flex items-center gap-3 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors text-sm font-medium text-[var(--color-text)] no-underline"
          >
            <span className="text-xl shrink-0">📚</span>
            <span>PM Kisan Master Guide</span>
          </Link>
        </div>
      </div>
    </>
  );
}
