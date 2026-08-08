import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, DB, StepList, SI, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: 'क्या यह message आने का मतलब है कि मैं योजना से बाहर हो गया?',
    a: 'नहीं। इसका मतलब है कि आपकी उस किस्त का भुगतान राज्य स्तर पर verification में रोका गया है — record से नाम कटना अलग बात है। गड़बड़ी सुधरते ही रुका हुआ पैसा आने की व्यवस्था है।',
  },
  {
    q: 'रुकी हुई किस्त का पैसा वापस मिलेगा या डूब गया?',
    a: 'सुधार के बाद रुकी किस्तें आमतौर पर अगली release के साथ जुड़कर आती हैं। कई किसानों को एक साथ ₹4,000 (दो किस्तें) आई हैं। शर्त यही है कि जिस वजह से रुका था, वह वजह पूरी तरह ठीक हो।',
  },
  {
    q: 'यह और "Rft Signed by State" — एक ही चीज हैं?',
    a: 'नहीं, बल्कि उल्टी दिशा के message हैं। "Rft Signed by State Government" अच्छा संकेत है — राज्य ने आपकी request आगे बढ़ा दी। "Payment stopped by state" रुकावट है — राज्य ने भुगतान रोका है।',
  },
  {
    q: 'गड़बड़ी कहां है, यह पक्का कैसे पता चलेगा?',
    a: 'खुद अंदाज़ा लगाने से बेहतर है दो जगह पूछना — portal की online grievance (Help Desk) में आधार से query डालें, और अपने ब्लॉक के कृषि अधिकारी/पटवारी से record दिखवाएं। जिला स्तर पर ही पता चलता है कि किस जांच में आवेदन अटका।',
  },
  {
    q: 'कितने दिन में ठीक हो जाता है?',
    a: 'कोई तय समय-सीमा नहीं है — यह इस पर निर्भर है कि गड़बड़ी क्या है और सुधार कितनी जल्दी दर्ज होता है। नाम की spelling जैसा सुधार हफ्तों में हो जाता है; जमीन के record वाला मामला महीनों खींच सकता है।',
  },
  {
    q: 'क्या CSC वाला यह ठीक कर सकता है?',
    a: 'आंशिक रूप से — eKYC, correction form, नाम सुधार जैसे काम CSC से हो जाते हैं। लेकिन land verification और राज्य स्तर की approval CSC के हाथ में नहीं है; उसके लिए कृषि विभाग/तहसील ही रास्ता है।',
  },
];

const RELATED = [
  { slug: 'PmKisanCorrectionForm2026', title: 'Correction Form Guide', emoji: '📝' },
  { slug: 'hindi/helpline-shikayat', title: 'हेल्पलाइन और शिकायत', emoji: '📞' },
  { slug: 'hindi/npci-aadhaar-seeding', title: 'NPCI आधार सीडिंग', emoji: '🏦' },
  { slug: 'PmKisanStateNodalOfficerList', title: 'State Nodal Officer List', emoji: '🏛️' },
];

export default function PmKisanPaymentStoppedByStateFix({ article }: { article: HindiArticle }) {
  return (
    <>
      <p>
        Status check किया, और screen पर लिखा आया — <strong>"Installment payment stopped by
        state"</strong>। पढ़कर पहला खयाल यही आता है कि पैसा गया। रुकिए। यह message जितना डरावना दिखता है,
        उतना है नहीं — लेकिन इसे अनदेखा करने की चीज भी नहीं है। आइए बिना घुमाए समझते हैं कि system के अंदर
        हुआ क्या है, और आपको करना क्या है।
      </p>

      <SH>इस line का असली मतलब</SH>
      <p>
        योजना में पैसा केंद्र सरकार भेजती है, पर लाभार्थियों की जांच-पड़ताल राज्य सरकार के जिम्मे है। हर किस्त
        से पहले राज्य अपने record से मिलान करता है। इस मिलान में आपके आवेदन में कोई खटका मिला — तो राज्य
        ने आपकी उस किस्त का भुगतान रोक दिया। यानी: <em>पैसा release हुआ था, पर आपके नाम की मंजूरी राज्य
        स्तर पर अटक गई</em>। यह अस्थायी रोक है, स्थायी निष्कासन नहीं।
      </p>

      <IB>
        अच्छी खबर यह है कि जिस वजह से रोक लगी, वह सुधर जाए तो रुकी हुई राशि आगे की release के साथ मिलने
        की व्यवस्था है। इसलिए असली काम एक ही है — वजह पकड़ना और सुधारना।
      </IB>

      <SH>रोक की आम वजहें — मोटे तौर पर पांच</SH>
      <StepList>
        <SI n={1}>
          <strong>नाम का mismatch</strong> — आधार, बैंक खाते और आवेदन में नाम की spelling अलग-अलग है। एक
          अक्षर का फर्क भी जांच में पकड़ा जाता है।
        </SI>
        <SI n={2}>
          <strong>जमीन के record की जांच अधूरी</strong> — खतौनी में नाम नहीं, वरासत दर्ज नहीं, या land
          seeding pending है।
        </SI>
        <SI n={3}>
          <strong>अपात्रता का संदेह</strong> — record में आप income tax payer, सरकारी कर्मचारी या pension
          पाने वाले के रूप में flag हुए हैं।
        </SI>
        <SI n={4}>
          <strong>Documents अधूरे</strong> — eKYC बाकी है, या बैंक खाते की आधार seeding inactive है।
        </SI>
        <SI n={5}>
          <strong>दोहरा आवेदन</strong> — एक ही परिवार से एक से ज्यादा नाम, या एक ही जमीन पर दो आवेदन।
        </SI>
      </StepList>

      <SH>अब इलाज — इस क्रम में चलिए</SH>
      <p>
        <strong>पहला:</strong> घर बैठे जो जांचा जा सकता है, वह जांच लें। Status page पर eKYC का column
        देखें (NO है तो <Link href="/articles/hindi/ekyc-mobile-se">phone से eKYC</Link> कर लें), और
        myAadhaar पर bank seeding status देखें (
        <Link href="/articles/hindi/npci-aadhaar-seeding">तरीका यहां</Link>)। आधार और passbook आमने-सामने
        रखकर नाम मिलाएं — फर्क दिखे तो{' '}
        <Link href="/articles/PmKisanCorrectionForm2026">correction form</Link> से सुधार डालें।
      </p>
      <p>
        <strong>दूसरा:</strong> portal पर शिकायत दर्ज करें —{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> के
        Farmers Corner में Help Desk/Grievance का विकल्प है, आधार number से query register होती है। साथ
        में helpline <strong>155261</strong> पर भी बात कर लें। पूरा तरीका{' '}
        <Link href="/articles/hindi/helpline-shikayat">शिकायत guide</Link> में लिखा है।
      </p>
      <p>
        <strong>तीसरा — और अक्सर निर्णायक:</strong> रोक <em>राज्य</em> ने लगाई है, इसलिए ताला भी वहीं
        खुलेगा। अपने ब्लॉक के कृषि अधिकारी या तहसील में पटवारी से मिलिए और साफ पूछिए — मेरा आवेदन किस
        जांच में रुका है? जमीन का मामला हो तो खतौनी की नकल साथ ले जाएं। जिले से बात न बने तो{' '}
        <Link href="/articles/PmKisanStateNodalOfficerList">State Nodal Officer</Link> अगली सीढ़ी है।
      </p>

      <DB>
        एक जमीनी अनुभव: UP के एक किसान का भुगतान दो किस्तों से इसी message पर अटका था। वजह निकली —
        पिता के निधन के बाद वरासत खतौनी में दर्ज नहीं थी। तहसील में वरासत दर्ज होते ही अगली release में
        दोनों रुकी किस्तें एक साथ आ गईं। सबक: message portal पर दिखता है, पर जड़ अक्सर कागज में होती है।
      </DB>

      <WB>
        "Payment stopped हटवाने" के नाम पर पैसे मांगने वाले बिचौलियों से सावधान। न शिकायत दर्ज करने का
        कोई शुल्क है, न राज्य की जांच किसी को पैसे देकर तेज होती है। जो व्यक्ति OTP या बैंक details मांगे,
        समझ जाइए मामला ठगी का है।
      </WB>

      <SH>अक्सर पूछे जाने वाले सवाल</SH>
      <FAQBlock faqs={FAQS} />

      <p className="text-xs text-[var(--color-text-muted)] italic">
        Source: भुगतान/status की प्रक्रिया{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> (कृषि
        एवं किसान कल्याण मंत्रालय) पर आधारित; DBT भुगतान का ढांचा{' '}
        <a href="https://dbtbharat.gov.in" target="_blank" rel="noopener noreferrer">dbtbharat.gov.in</a>।
        राज्य-स्तरीय verification की प्रक्रिया राज्य-दर-राज्य थोड़ी अलग होती है। Last verified:{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')}.
      </p>

      <RelatedArticles articles={RELATED} />
    </>
  );
}
