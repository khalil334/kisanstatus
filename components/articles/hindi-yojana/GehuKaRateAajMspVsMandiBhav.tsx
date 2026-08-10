import Link from 'next/link';
import Image from 'next/image';
import type { HindiArticle } from '@/lib/hindi-articles-data';

const FAQS = [
  {
    q: 'इस season गेहूं का MSP कितना है?',
    a: 'Rabi Marketing Season 2026-27 के लिए केंद्र ने गेहूं का MSP ₹2,585 प्रति क्विंटल तय किया है। कुछ राज्य ऊपर से bonus देते हैं — MP में ₹40 bonus मिलाकर किसानों को ₹2,625 प्रति क्विंटल मिला। आपके राज्य की खरीद-अधिसूचना में bonus का जिक्र होता है।',
  },
  {
    q: 'मंडी में दाम MSP से नीचे मिल रहा है — बेचूं या नहीं?',
    a: 'अगर आपने सरकारी खरीद के लिए registration किया है तो MSP केंद्र पर बेचना सीधा फायदा है। नहीं किया, और मंडी भाव MSP से काफी नीचे है, तो या तो registration की अगली window पकड़ें या भंडारण की सोचें। घाटे में जल्दबाजी की बिक्री तभी करें जब पैसे की मजबूरी हो।',
  },
  {
    q: 'MSP पर बेचने के लिए क्या करना पड़ता है?',
    a: 'हर राज्य में खरीद से पहले online registration होता है — आधार, बैंक details, जमीन का record और बुवाई का प्रमाण लगता है। Registration window और slot booking की तारीखें राज्य ही घोषित करता है, जिला खाद्य/कृषि विभाग या अपनी मंडी से पूछ लें।',
  },
  {
    q: 'आज का सही मंडी भाव कहां देखें?',
    a: 'भरोसे के लायक जगह Agmarknet (agmarknet.gov.in) है — देश भर की मंडियों के दैनिक भाव वहां दर्ज होते हैं। eNAM पर भी registered मंडियों के rate दिखते हैं। WhatsApp पर घूमते rate की पुष्टि किए बिना उस पर सौदा न करें।',
  },
  {
    q: 'MSP और मंडी भाव में फर्क क्यों रहता है?',
    a: 'MSP सरकारी खरीद की गारंटी-दर है; मंडी भाव मांग-आपूर्ति से बनता है। अच्छी quality और कम आवक के समय मंडी भाव MSP से ऊपर भी चला जाता है; बंपर पैदावार के समय नीचे। इस कारण बेचने से पहले दोनों देखना जरूरी है।',
  },
  {
    q: 'Modal price क्या होता है — minimum या maximum से कैसे अलग?',
    a: 'Agmarknet पर हर मंडी के तीन आंकड़े दिखते हैं। Minimum उस दिन के कमजोर-से-कमजोर lot का भाव है, maximum बढ़िया-से-बढ़िया lot का। Modal price वह है जिस पर उस दिन ज्यादातर सौदे हुए — औसत किसान को यही मिलने की संभावना रहती है, तो हिसाब हमेशा modal से लगाएं।',
  },
  {
    q: 'मंडी में quality के नाम पर कटौती कब जायज है?',
    a: 'सरकारी खरीद FAQ (Fair Average Quality) मानकों पर होती है — नमी, टूटा दाना, मिट्टी-कचरा और सिकुड़ा दाना तय सीमा में होना चाहिए। सीमा से ऊपर होने पर खरीद मना हो सकती है या कटौती लगती है। खुली मंडी में कटौती मोलभाव का हिस्सा है — लेकिन उसका लिखित कारण मांगना आपका हक है।',
  },
  {
    q: 'गेहूं में नमी कितनी होनी चाहिए?',
    a: 'सरकारी खरीद के FAQ मानक में नमी की सीमा आम तौर पर 12% के आसपास रखी जाती है। ज्यादा नमी वाला माल या तो लौटा दिया जाता है या भाव काटकर लिया जाता है। बेचने से 2-3 दिन पहले फसल को अच्छी धूप दिखा देना बिना खर्च का उपाय है।',
  },
  {
    q: 'तुरंत पैसा नहीं चाहिए तो क्या गेहूं रोक कर रखना फायदेमंद है?',
    a: 'कटाई के तुरंत बाद आवक चरम पर होती है, और भाव अक्सर दबा रहता है। भंडारण की सुविधा हो और पैसे की तुरंत जरूरत न हो, तो कुछ महीने रुकने पर बेहतर भाव मिल सकता है — पर यह गारंटी नहीं है। WDRA-registered गोदाम में रखने पर warehouse receipt बनती है, जिस पर बैंक से loan भी मिल सकता है।',
  },
  {
    q: 'eNAM से बेचने का क्या फायदा है?',
    a: 'eNAM (enam.gov.in) पर registered मंडियों में online नीलामी होती है — दूसरी मंडियों के खरीदार भी बोली लगा सकते हैं, जिससे प्रतिस्पर्धा बढ़ती है और भाव सुधरने की गुंजाइश रहती है। अपनी मंडी eNAM से जुड़ी है या नहीं, मंडी समिति से पूछें।',
  },
  {
    q: 'सरकारी खरीद का भुगतान कितने दिन में आता है?',
    a: 'भुगतान आधार-linked बैंक खाते में DBT से आता है — राज्य आमतौर पर कुछ ही दिनों का लक्ष्य रखते हैं। खाते की NPCI seeding active न हो तो यही भुगतान अटकता है, तो बेचने से पहले वह जांच लें।',
  },
  {
    q: 'बिना registration के MSP केंद्र पर गेहूं बेच सकते हैं?',
    a: 'नहीं — सरकारी खरीद में walk-in नहीं चलता। खरीद registered किसानों से, biometric सत्यापन के बाद होती है। Registration window चूक गए तो उस season खुला बाजार ही विकल्प बचता है — window की तारीखें पहले से पता रखें।',
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

const cell = 'border border-[var(--color-border)] px-3 py-2';
const cellHead = 'border border-[var(--color-border)] px-3 py-2 text-left';

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
    <h2 className="text-xl font-black text-[var(--color-text)] mt-8 mb-4 pb-2 border-b-2 border-[var(--color-border)]">
      {children}
    </h2>
  );
}

function Box({ tone, children }: { tone: 'tip' | 'warn' | 'risk'; children: React.ReactNode }) {
  const cls =
    tone === 'tip'
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

export default function GehuKaRateAajMspVsMandiBhav({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>
        मंडी के गेट पर बार-बार दोहराया जाने वाला सवाल एक ही है — भाव क्या चल रहा है? और उसका ईमानदार
        जवाब भी एक ही है: मंडी-दर-मंडी अलग। तो यह लेख आपको कोई एक &quot;आज का रेट&quot; नहीं थमाएगा — बल्कि
        वह तरीका देगा जिससे आप अपनी मंडी का आज का सही भाव खुद निकालें, और यह तय कर पाएं कि बेचना
        MSP केंद्र पर है, खुले बाजार में, या फिलहाल रोककर रखना ही समझदारी है।
      </p>

      <Figure
        src="/images/articles/hindi-yojna/gehu-ka-rate/mandi-wheat.webp"
        alt="मंडी में गेहूं की आवक — ढेर और बोरियां"
        caption="आवक बढ़ते ही भाव दबता है — मंडी का पुराना नियम"
      />

      <H2>MSP आखिर तय कैसे होता है — दो मिनट की समझ</H2>
      <p>
        न्यूनतम समर्थन मूल्य कोई हवा में उछाला हुआ आंकड़ा नहीं है। कृषि लागत एवं मूल्य आयोग (CACP) हर
        साल खेती की लागत — बीज, खाद, सिंचाई, मजदूरी, परिवार का श्रम — का हिसाब लगाकर सिफारिश भेजता
        है, और केंद्र सरकार उस पर MSP घोषित करती है। नीति यह रही है कि MSP उत्पादन लागत के ऊपर
        margin जोड़कर रखा जाए, ताकि लागत निकलने की गारंटी रहे। यह समझना जरूरी है क्योंकि MSP आपकी{' '}
        <em>सुरक्षा-रेखा</em> है — बाजार इससे नीचे गिरे तो सरकारी खरीद का दरवाजा खुला है।
      </p>

      <H2>पहले पक्का आंकड़ा — इस season का MSP</H2>
      <p>
        Rabi Marketing Season 2026-27 के लिए गेहूं का न्यूनतम समर्थन मूल्य केंद्र सरकार ने{' '}
        <strong>₹2,585 प्रति क्विंटल</strong> तय किया है। यह वह दर है जिस पर सरकारी एजेंसियां registered
        किसानों से खरीद करती हैं। कुछ राज्य अपनी ओर से bonus जोड़ते हैं — MP ने इस season ₹40 प्रति
        क्विंटल का bonus दिया, यानी वहां के किसान को ₹2,625 मिले। आपके राज्य में bonus है या नहीं, यह
        राज्य की खरीद-घोषणा में लिखा होता है — मंडी की अफवाह पर नहीं, अधिसूचना पर भरोसा करें।
      </p>

      <Box tone="tip">
        MSP गारंटी है, छत नहीं — मंडी में इससे ऊंचा दाम मिले तो खुले बाजार में बेचना बेहतर। MSP का असली
        काम तब है जब बाजार नीचे गिर जाए।
      </Box>

      <H2>तीन रास्ते, तीन हिसाब — MSP केंद्र, खुली मंडी, गांव का व्यापारी</H2>
      <Figure
        src="/images/articles/hindi-yojna/gehu-ka-rate/teen-raste.webp"
        alt="MSP केंद्र, खुली मंडी और गांव के व्यापारी — तीन विकल्पों का diagram"
        caption="तीनों रास्तों का हिसाब अलग है — तुलना करके ही फैसला लें"
      />
      <p>
        गेहूं बेचने के व्यवहार में तीन ही रास्ते हैं, और तीनों का गणित अलग है। नीचे की तुलना पढ़कर अपनी
        स्थिति पर लगाइए:
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className={cellHead}>सवाल</th>
              <th className={cellHead}>MSP केंद्र</th>
              <th className={cellHead}>खुली मंडी</th>
              <th className={cellHead}>गांव का व्यापारी</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${cell} font-medium`}>भाव कैसा?</td>
              <td className={cell}>तय — ₹2,585 (+ राज्य bonus)</td>
              <td className={cell}>रोज बदलता — MSP से ऊपर भी, नीचे भी</td>
              <td className={cell}>आम तौर पर मंडी से नीचे</td>
            </tr>
            <tr>
              <td className={`${cell} font-medium`}>पहले क्या चाहिए?</td>
              <td className={cell}>Online registration + slot</td>
              <td className={cell}>कुछ नहीं — सीधे जा सकते हैं</td>
              <td className={cell}>कुछ नहीं</td>
            </tr>
            <tr>
              <td className={`${cell} font-medium`}>Quality की जांच</td>
              <td className={cell}>FAQ मानक — सख्त, पर लिखित</td>
              <td className={cell}>आढ़ती की नजर — मोलभाव</td>
              <td className={cell}>अंदाजे से — पारदर्शिता कम</td>
            </tr>
            <tr>
              <td className={`${cell} font-medium`}>भुगतान</td>
              <td className={cell}>बैंक खाते में DBT से</td>
              <td className={cell}>पर्ची से — नकद/खाता</td>
              <td className={cell}>अक्सर उधारी का जोखिम</td>
            </tr>
            <tr>
              <td className={`${cell} font-medium`}>किसके लिए सही?</td>
              <td className={cell}>बाजार MSP से नीचे हो तब</td>
              <td className={cell}>अच्छी quality, ऊंचा बाजार</td>
              <td className={cell}>बहुत छोटी मात्रा, मजबूरी</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        गांव के व्यापारी को माल देना आसान-से-आसान रास्ता है — गाड़ी का भाड़ा नहीं, लाइन नहीं। लेकिन यही
        आसानी उसकी कीमत है: भाव की तुलना करने का मौका आप छोड़ देते हैं। कम से कम एक बार phone से
        मंडी का modal price जरूर देख लें, तभी पता चलेगा कि व्यापारी का &quot;अच्छा भाव&quot; वास्तव में कितना
        अच्छा है।
      </p>

      <H2>अपनी मंडी का आज का भाव — 5 मिनट में</H2>
      <Figure
        src="/images/articles/hindi-yojna/gehu-ka-rate/rate-on-phone.webp"
        alt="खेत में mobile पर मंडी भाव देखता किसान"
        caption="भाव बेचने से 4-5 दिन पहले से देखना शुरू करें — रुझान हफ्ते भर की चाल से दिखता है"
      />
      <p>
        <strong>पहला काम:</strong>{' '}
        <a href="https://agmarknet.gov.in" target="_blank" rel="noopener noreferrer">agmarknet.gov.in</a>{' '}
        खोलें — यह कृषि मंत्रालय का portal है जिस पर देश भर की मंडियों की दैनिक आवक और भाव दर्ज होते
        हैं। <strong>दूसरा:</strong> Commodity में Wheat, फिर अपना राज्य और मंडी चुनें, तारीख आज की रखें।{' '}
        <strong>तीसरा:</strong> तीन आंकड़े दिखेंगे — minimum, maximum और modal price। सौदे की असली तस्वीर{' '}
        <strong>modal price</strong> (जिस भाव पर ज्यादातर सौदे हुए) से मिलती है।
      </p>
      <p>
        <strong>चौथा:</strong> अपनी उपज की quality ईमानदारी से आंकें — चमकदार, सूखा (12% से कम नमी), साफ
        दाना ऊपरी छोर पाता है; नमी और मिट्टी वाला माल नीचे। <strong>पांचवां:</strong> आस-पास की 2-3
        मंडियों के भाव मिलाएं — कई बार 30-40 km दूर की मंडी में ₹50-100 प्रति क्विंटल का फर्क भाड़ा
        निकालकर भी फायदा दे जाता है।
      </p>
      <p>
        एक आदत और बना लें — भाव सिर्फ बेचने वाले दिन नहीं, उसके 4-5 दिन पहले से देखना शुरू करें। रुझान
        (भाव चढ़ रहा है या उतर रहा) एक दिन के आंकड़े से नहीं, हफ्ते भर की चाल से दिखता है। आवक बढ़ते
        ही भाव दबता है — यह मंडी का पुराना नियम है, और कटाई के हफ्तों में साफ-साफ दिखता है।
      </p>

      <H2>सरकारी खरीद कितनी बड़ी मशीन है — पिछले season के असली आंकड़े</H2>
      <p>
        &quot;सरकारी खरीद में कौन बेचता है भाई&quot; — यह ताना सुना हो तो आंकड़े देख लीजिए। RMS 2025-26
        में 30 April तक ही देश भर में <strong>256 लाख मीट्रिक टन से ज्यादा</strong> गेहूं MSP पर खरीदा
        जा चुका था — 21 लाख से ज्यादा किसानों को करीब ₹62,155 करोड़ का भुगतान हुआ, ज्यादातर
        24-48 घंटे में (
        <a href="https://www.cmv360.com/tractors/news/wheat-buying-crosses-250-lakh-tonnes-21-lakh-farmers-get-rs-62-155-crore" target="_blank" rel="noopener noreferrer">
          खाद्य मंत्रालय के आंकड़ों पर आधारित report
        </a>
        )। Punjab अकेले ने 100 लाख टन से ज्यादा दिया, MP और Haryana भी 65 लाख टन के ऊपर।
      </p>
      <p>
        इन आंकड़ों से आपके काम की दो बातें निकलती हैं। पहली — सरकारी खरीद कोई कागजी वादा नहीं,
        लाखों किसान हर साल इससे पैसा पाते हैं — तंत्र चलता है, बस उसमें घुसने की शर्त registration
        है। दूसरी — उसी season Punjab में private व्यापारियों ने कई जिलों में MSP से ऊंचे भाव पर खरीदा।
        तात्पर्य यही जो इस लेख की रीढ़ है — MSP आखिरी सहारा है, पर आंख मूंदकर नहीं; जिस दिन बाजार
        ऊपर हो, बाजार में बेचो।
      </p>

      <H2>Quality कटौती का गणित — कहां कटता है आपका पैसा</H2>
      <p>
        मंडी में भाव से ज्यादा झगड़ा कटौती पर होता है। सरकारी खरीद FAQ (Fair Average Quality) मानकों
        पर चलती है — नमी, टूटा-सिकुड़ा दाना, और मिट्टी-कचरे की तय सीमाएं हैं; सीमा पार माल या लौटता है
        या कटकर बिकता है। खुली मंडी में यही काम आढ़ती की नजर करती है। तीन चीजें आपके हाथ में हैं:
        बेचने से पहले फसल को धूप में सुखाना (नमी की कटौती बाकी सबसे भारी पड़ती है), पंखे/छलनी से कचरा
        निकालना, और बोरियों में ऊपर-नीचे एक जैसा माल रखना — ऊपर बढ़िया, नीचे हल्का माल रखने की चालाकी
        पकड़ी जाए तो पूरे lot का भरोसा टूटता है और भाव उसी हिसाब से लगता है।
      </p>

      <Box tone="risk">
        अनुभव की बात: जो किसान tractor-trolley मंडी में खड़ी करके भाव पूछते हैं, वे मोलभाव की ताकत गंवा
        देते हैं — बिना बिके लौटने का भाड़ा उन्हीं पर है, और आढ़ती यह जानता है। बेहतर क्रम यह है: पहले
        phone/portal से भाव, फिर बेचने का फैसला, तब गाड़ी।
      </Box>

      <H2>बेचूं या रोकूं — तीन सवाल खुद से पूछें</H2>
      <p>
        हर किसान की स्थिति अलग है, और &quot;अभी बेचो&quot; या &quot;रोक लो&quot; जैसी एक-लाइन सलाह
        बेईमानी है। ये तीन सवाल ईमानदारी से खुद से पूछें।
      </p>
      <p>
        <strong>पहला — पैसे की जरूरत कितनी तुरंत है?</strong> अगली बुवाई, कर्ज की किस्त या घर का खर्च सिर
        पर है तो रोकने का जोखिम आपके लिए नहीं — जो रास्ता आज ऊंचा दे (MSP या मंडी), वहां बेचें।
      </p>
      <p>
        <strong>दूसरा — भंडारण की जगह कैसी है?</strong> नमी और घुन से बचाव के बिना रोका गया गेहूं भाव
        बढ़ने से ज्यादा तेजी से quality खोता है। पक्का, हवादार भंडारण या WDRA-registered गोदाम हो तभी
        रोकने की सोचें — गोदाम की receipt पर बैंक से loan भी मिल सकता है, जिससे तुरंत की जरूरत बिना बेचे
        पूरी हो जाती है।
      </p>
      <p>
        <strong>तीसरा — मंडी भाव MSP के मुकाबले कहां है?</strong> भाव MSP से नीचे और registration हो
        चुका — MSP केंद्र सीधा जवाब है। भाव MSP से ऊपर — मंडी में बेचें। भाव नीचे और registration छूट
        गया — तब भंडारण बनाम मजबूरी-बिक्री का फैसला ऊपर के दो सवालों से करें।
      </p>

      <H2>MSP पर बेचना है तो — registration पहली शर्त</H2>
      <p>
        सरकारी खरीद में walk-in नहीं चलता। हर राज्य खरीद season से पहले online registration खोलता है —
        आधार, बैंक passbook, जमीन का record (खतौनी/7-12) और बुवाई का प्रमाण लगता है; खरीद biometric
        सत्यापन के बाद होती है। उदाहरण के लिए इस season गुजरात में registration फरवरी में खुला और खरीद
        मार्च से मई के बीच चली; MP में slot booking की व्यवस्था रही। हर राज्य की तारीखें अलग हैं — अपने
        जिले के खाद्य/कृषि विभाग या मंडी समिति से window की पुष्टि करें, क्योंकि registration चूकने का
        अर्थ है पूरी season खुले बाजार के भरोसे।
      </p>
      <p>
        Registration करते समय दो गलतियां बार-बार दिखती हैं। पहली — बैंक खाता वह डाल देना जो चालू नहीं है
        या जिसकी NPCI seeding दूसरे खाते में है; भुगतान वहां ही अटकता है। दूसरी — जमीन के record में नाम की
        spelling आधार से अलग होना; सत्यापन में यही फंसता है। दोनों की जांच registration से पहले 10 मिनट
        का काम है, बाद में सुधारना हफ्तों का।
      </p>

      <H2>बिक्री के दिन साथ क्या ले जाएं</H2>
      <Figure
        src="/images/articles/hindi-yojna/gehu-ka-rate/tol-kanta.webp"
        alt="खरीद केंद्र पर इलेक्ट्रॉनिक कांटे पर गेहूं की तौल"
        caption="तौल-पर्ची और लिखित सौदा — दोनों आपका हक हैं"
      />
      <p>
        MSP केंद्र पर जा रहे हैं तो — registration की पर्ची/SMS और slot का प्रमाण, आधार card,
        बैंक passbook की copy, और जमीन के record की copy। खुली मंडी जा रहे हैं तो कागज कम लगते हैं,
        पर अपना हिसाब रखने के लिए एक copy-pen जरूर — कितनी बोरियां, किस भाव, कितनी कटौती, यह अपने
        हाथ से लिखा हुआ बाद के किसी भी विवाद में आपका पहला सबूत है।
      </p>

      <Box tone="warn">
        बिना तौल-पर्ची और बिना लिखित सौदे के माल कभी न छोड़ें। इलेक्ट्रॉनिक कांटे की पर्ची, quality कटौती
        का लिखित कारण, और भुगतान की समय-सीमा — ये तीनों आपका हक हैं। नकद में &quot;आज नहीं, हफ्ते बाद&quot; वाले
        मौखिक वादों से ही ज्यादातर विवाद निकलते हैं।
      </Box>

      <H2>eNAM — अपनी मंडी से बाहर के खरीदार तक</H2>
      <p>
        अगर आपकी मंडी eNAM (National Agriculture Market) से जुड़ी है, तो आपकी उपज पर online नीलामी में
        दूसरी मंडियों के व्यापारी भी बोली लगा सकते हैं। खरीदार जितने ज्यादा, प्रतिस्पर्धा उतनी — और भाव
        सुधरने की गुंजाइश उतनी ही। इसके लिए अलग से कहीं जाना नहीं है; मंडी समिति से पूछें कि eNAM की
        सुविधा चालू है या नहीं, और quality-testing lab (assaying) कहां होती है — eNAM पर बोली उसी
        जांच-रिपोर्ट के भरोसे लगती है, तो साफ-सूखा माल यहां सीधा पैसे में बदलता है।
      </p>

      <H2>UP का mobile procurement — खरीद केंद्र खुद गांव आया</H2>
      <p>
        एक नया प्रयोग जानने लायक है। RMS 2025-26 में UP ने पहली बार <strong>mobile procurement
        centers</strong> चलाए — खरीद की गाड़ी खुद गांवों तक गई। परिणाम: करीब दो लाख किसानों ने
        10.27 लाख टन से ज्यादा गेहूं सरकारी एजेंसियों को बेचा — पिछले साल से ज्यादा — और करीब
        ₹2,508 करोड़ सीधे खातों में गया। खरीद केंद्र सुबह 8 से रात 8 बजे तक, छुट्टियों में भी चले (
        <a href="https://www.nationpress.com/national/wheat-procurement-in-up-surpasses-1027-lakh-tonnes" target="_blank" rel="noopener noreferrer">
          NationPress की report, June 2025
        </a>
        )।
      </p>
      <p>
        सबक यह है कि व्यवस्था साल-दर-साल किसान के करीब आ रही है — पर उसका फायदा उसी को मिलता
        है जिसका registration और कागज पहले से तैयार हैं। गांव में खरीद की गाड़ी आकर लौट गई और
        आपका registration नहीं था — तो गाड़ी आने का कोई फायदा नहीं। अपने राज्य में ऐसी सुविधा है
        या नहीं, यह जिला खाद्य विभाग से पूछने में कुछ नहीं जाता।
      </p>

      <H2>बेचने के बाद — पैसा अटके नहीं, इसके लिए</H2>
      <p>
        सरकारी खरीद का भुगतान आधार-linked खाते में DBT से आता है। खाता dormant हो या NPCI mapper में
        seeding active न हो, तो तौल हो जाने के बाद भी पैसा लटक जाता है — यह जांच बेचने से{' '}
        <em>पहले</em> कर लें; seeding का पूरा तरीका{' '}
        <Link href="/articles/hi/npci-aadhaar-seeding">यहां लिखा है</Link>। रोज के भाव
        की नब्ज पकड़नी हो तो{' '}
        <Link href="/articles/mandi-bhav-today">mandi bhav page</Link> देखते रहें। और अगर बिक्री का पैसा
        अगली फसल की तैयारी में लगना है, तो{' '}
        <Link href="/articles/hi/kcc-limit-kaise-badhaye">KCC limit</Link> की समीक्षा भी इसी समय करवा
        लें — बिक्री की रसीदें आमदनी का पक्का सबूत हैं।
      </p>

      <H2>एक मौसम का पूरा कैलेंडर — कब क्या करना है</H2>
      <div className="my-4 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className={cellHead}>समय</th>
              <th className={cellHead}>काम</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${cell} font-medium`}>जनवरी-फरवरी</td>
              <td className={cell}>
                राज्य की खरीद-अधिसूचना और registration window पर नजर; आधार-बैंक-खतौनी का मिलान अभी कर लें।
              </td>
            </tr>
            <tr>
              <td className={`${cell} font-medium`}>मार्च</td>
              <td className={cell}>Registration/slot पक्का करें; कटाई के बाद फसल को धूप दिखाना शुरू।</td>
            </tr>
            <tr>
              <td className={`${cell} font-medium`}>अप्रैल-मई</td>
              <td className={cell}>
                बिक्री का मुख्य समय; आवक चरम पर होती है — भाव रोज देखें और MSP-बनाम-मंडी का फैसला
                हफ्ते-दर-हफ्ते करें, एक बार में नहीं।
              </td>
            </tr>
            <tr>
              <td className={`${cell} font-medium`}>जून के बाद</td>
              <td className={cell}>
                रोका हुआ माल है तो घुन-नमी की जांच हर हफ्ते; भाव चढ़े तो बेचने का फैसला लालच के बजाय अपनी
                जरूरत से करें — चोटी का भाव पकड़ने वाला कोई नहीं होता, अच्छा भाव पकड़ने वाले बहुत होते हैं।
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-8 p-6 bg-gradient-to-r from-green-800 to-green-600 rounded-2xl text-white text-center">
        <p className="text-2xl mb-2">🌾</p>
        <p className="font-black text-lg mb-1">Mandi Bhav Roz Dekho</p>
        <p className="text-green-100 text-sm mb-4">
          Apni mandi ka taaza bhav aur rujhaan — bechne ka sahi din pakdo.
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          <Link
            href="/articles/mandi-bhav-today"
            className="inline-flex items-center gap-2 bg-white text-green-800 font-black px-6 py-3 rounded-xl text-sm hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          >
            📈 Mandi Bhav Dekho →
          </Link>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-white/25 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          >
            🧮 Sab Utilities Dekho
          </Link>
        </div>
      </div>

      <H2>भाड़े का गणित — दूर की मंडी कब फायदे में है</H2>
      <p>
        ऊपर कहा था कि आस-पास की मंडियों के भाव मिलाओ — अब उसका हिसाब भी समझ लीजिए। मान
        लीजिए आपके पास 50 क्विंटल गेहूं है और 40 km दूर की मंडी में modal price ₹80 प्रति क्विंटल
        ऊंचा है। मोटा फायदा: 50 × 80 = ₹4,000। अब खर्च घटाइए — trolley का भाड़ा आना-जाना (इलाके
        के हिसाब से ₹1,500-2,500), रास्ते का समय, और दूर की मंडी में उस दिन भाव गिर जाने का
        जोखिम। बचा क्या? करीब ₹1,500-2,500 — अर्थात् फायदा है, पर उतना चमकदार नहीं जितना पहली
        नजर में लगा था।
      </p>
      <p>
        नियम यह बनाइए — दूर की मंडी तभी चुनिए जब भाव का फर्क प्रति क्विंटल भाड़े के
        प्रति-क्विंटल खर्च का कम से कम दोगुना हो, और मात्रा इतनी हो कि फर्क हजारों में बने। पांच-दस
        बोरी के लिए लंबा सफर घाटे का सौदा है — उतने में गांव के पास की मंडी या आस-पास के किसानों
        के साथ मिलकर एक trolley भरना ज्यादा समझदारी है — भाड़ा बंट जाता है, और बड़े lot पर
        मोलभाव की ताकत भी बढ़ती है।
      </p>

      <Box tone="tip">
        एक छोटी पर काम की चालाकी और — मंडी में सुबह की पहली नीलामी और दोपहर के बाद के सौदों में
        अक्सर फर्क रहता है। जिस दिन आवक ज्यादा हो, देर से पहुंचने वाले का माल अक्सर दबे भाव में
        निपटता है क्योंकि खरीदार अपनी जरूरत पूरी कर चुके होते हैं। अपने आढ़ती से पूछकर नीलामी के
        समय से पहले पहुंचना मुफ्त का फायदा है।
      </Box>

      <H2>सवाल-जवाब: भाव, खरीद और भुगतान</H2>
      <div className="my-4 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className={cellHead}>सवाल</th>
              <th className={cellHead}>जवाब</th>
            </tr>
          </thead>
          <tbody>
            {FAQS.map(({ q, a }, i) => (
              <tr key={q} className={i % 2 === 1 ? 'bg-[var(--color-bg-alt)]' : ''}>
                <td className={`${cell} font-medium align-top w-1/3`}>{q}</td>
                <td className={`${cell} text-[var(--color-text-muted)]`}>{a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[var(--color-text-muted)] italic">
        आंकड़ों का हिसाब: गेहूं MSP ₹2,585/क्विंटल (RMS 2026-27) केंद्र सरकार की घोषणा से है, जो राज्य
        खरीद-अधिसूचनाओं (गुजरात राज्य नागरिक आपूर्ति निगम, जनवरी 2026 समेत) में भी दर्ज है; MP का ₹40
        bonus राज्य सरकार की खरीद व्यवस्था से। दैनिक भाव के लिए{' '}
        <a href="https://agmarknet.gov.in" target="_blank" rel="noopener noreferrer">agmarknet.gov.in</a>{' '}
        और <a href="https://enam.gov.in" target="_blank" rel="noopener noreferrer">enam.gov.in</a> ही देखें —
        यह लेख कोई live rate नहीं बताता। इस लेख की जानकारी आखिरी बार{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')} को जांची गई थी।
      </p>

      <div className="mt-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
        <h3 className="font-black text-[var(--color-text)] mb-3 text-base">आगे पढ़ने लायक</h3>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>
            <Link href="/articles/mandi-bhav-today">📈 Mandi Bhav Today</Link>
          </li>
          <li>
            <Link href="/articles/hi/npci-aadhaar-seeding">🏦 NPCI आधार सीडिंग</Link>
          </li>
          <li>
            <Link href="/articles/hi/kcc-limit-kaise-badhaye">💳 KCC लिमिट कैसे बढ़ाएं</Link>
          </li>
          <li>
            <Link href="/articles/KisanRinKahaSeLe2026">🏦 Kisan Rin — कहां से लें</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
