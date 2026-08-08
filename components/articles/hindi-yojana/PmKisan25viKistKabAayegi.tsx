import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, StepList, SI, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: '25वीं किस्त की पक्की तारीख क्या है?',
    a: 'अभी तक सरकार ने कोई तारीख घोषित नहीं की है। इंटरनेट पर जो भी तारीखें घूम रही हैं, वे अनुमान हैं। आधिकारिक घोषणा pmkisan.gov.in और PIB की प्रेस रिलीज़ से ही आती है — वहीं भरोसा करें।',
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
    a: 'pmkisan.gov.in के "Know Your Status" में registration number चाहिए, लेकिन वहीं "Know your registration no." का विकल्प भी है — आधार या mobile से निकल जाता है। पूरा तरीका हमारी मोबाइल से status जांचने वाली guide में है।',
  },
  {
    q: 'गांव की पूरी सूची एक साथ कहां दिखती है?',
    a: 'Farmers Corner के "Beneficiary List" में राज्य → जिला → ब्लॉक → गांव चुनकर पूरे गांव के लाभार्थियों की सूची PDF जैसी सूरत में दिख जाती है। अपना नाम वहां जरूर मिला लें।',
  },
  {
    q: 'किस्त आने का SMS नहीं आया, पैसा आया है या नहीं कैसे पता चले?',
    a: 'SMS कई बार देर से आता है या आता ही नहीं। पक्का तरीका दो हैं — बैंक passbook/statement देखना, या portal पर payment status। वहां FTO generated और payment confirmation दोनों दिखते हैं।',
  },
];

const RELATED = [
  { slug: 'hindi/status-check-mobile-se', title: 'मोबाइल नंबर से स्टेटस चेक', emoji: '📱' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Online Guide', emoji: '🔐' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List Guide', emoji: '📋' },
  { slug: 'hindi/npci-aadhaar-seeding', title: 'NPCI आधार सीडिंग', emoji: '🏦' },
];

export default function PmKisan25viKistKabAayegi({ article }: { article: HindiArticle }) {
  return (
    <>
      <p>
        रामलाल जी (नाम बदला हुआ) ने जनवरी में तीन बार CSC के चक्कर काटे। हर बार एक ही सवाल — "अगली किस्त कब
        आएगी?" और हर बार वही जवाब — "अभी तारीख नहीं आई।" तीसरी बार CSC वाले ने उन्हें एक काम की बात कही:
        तारीख का इंतजार छोड़िए, पहले यह देखिए कि आपकी eKYC और बैंक seeding ठीक है या नहीं। वही बात इस लेख
        की जड़ है।
      </p>
      <p>
        सीधी बात। 25वीं किस्त की कोई आधिकारिक तारीख अभी घोषित नहीं हुई है। जो भी website या YouTube channel
        आपको पक्की date बता रहा है, वह अंदाज़ा लगा रहा है — और अंदाज़े पर योजना का पैसा नहीं चलता।
      </p>

      <IB>
        योजना का बुनियादी गणित वही है: पात्र किसान परिवार को साल में ₹6,000, तीन बराबर हिस्सों में, हर हिस्सा
        ₹2,000 — सीधे बैंक खाते में DBT से। यह किस्त उसी सिलसिले की अगली कड़ी होगी।
      </IB>

      <SH>तारीख को लेकर अब तक क्या पता है?</SH>
      <p>
        सरकार किस्त जारी करने की घोषणा आमतौर पर कुछ ही दिन पहले करती है — कई बार प्रधानमंत्री किसी कार्यक्रम
        से बटन दबाकर release करते हैं, और उसी दिन पैसा खातों में जाना शुरू होता है। पिछला पैटर्न देखें तो दो
        किस्तों के बीच करीब चार महीने का फासला रहता आया है। लेकिन यह पैटर्न है, नियम नहीं — फासला कभी थोड़ा
        घटा है, कभी बढ़ा है।
      </p>
      <p>
        इसलिए भरोसे लायक जगहें सिर्फ तीन हैं:{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> का
        होमपेज,{' '}
        <a href="https://pib.gov.in" target="_blank" rel="noopener noreferrer">PIB</a> की प्रेस विज्ञप्तियां,
        और कृषि मंत्रालय (
        <a href="https://agriwelfare.gov.in" target="_blank" rel="noopener noreferrer">agriwelfare.gov.in</a>
        ) की सूचनाएं। बाकी सब सुनी-सुनाई।
      </p>

      <WB>
        "आपकी 25वीं किस्त रोकी गई है, इस link पर click करके activate करें" — ऐसे SMS/WhatsApp message ठगी
        हैं। योजना का पैसा किसी link पर click करने से न आता है, न रुकता है। किसी भी message में आए link पर
        बैंक details कभी न भरें।
      </WB>

      <SH>इंतजार के बजाय ये 4 काम निपटा लें</SH>
      <p>
        किस्त की घोषणा जब भी हो, पैसा उन्हीं खातों में पहुंचता है जिनका record पूरा है। हर किस्त के बाद
        अखबारों में वही खबर छपती है — लाखों किसानों का भुगतान अटका, वजह वही पुरानी: अधूरी eKYC, बंद खाता,
        जमीन के record का mismatch। आप उस सूची में न आएं, इसके लिए:
      </p>
      <StepList>
        <SI n={1}>
          <strong>eKYC की स्थिति देखें</strong> — portal के "Know Your Status" में eKYC का column YES होना
          चाहिए। NO है तो OTP से (आधार-linked mobile जरूरी) या CSC पर biometric से करवा लें। तरीका{' '}
          <Link href="/articles/hindi/ekyc-mobile-se">eKYC मोबाइल से</Link> guide में है।
        </SI>
        <SI n={2}>
          <strong>बैंक खाते की आधार seeding जांचें</strong> — DBT का पैसा उसी खाते में जाता है जो NPCI mapper
          में आधार से जुड़ा हो। खाता बदला है या dormant पड़ा है तो पहले यह ठीक कराएं —{' '}
          <Link href="/articles/hindi/npci-aadhaar-seeding">NPCI सीडिंग guide</Link> देखें।
        </SI>
        <SI n={3}>
          <strong>जमीन का record मिलाएं</strong> — खरीद-बिक्री या वरासत हुई है तो खतौनी में नाम update होना
          जरूरी है। Land seeding pending दिखे तो पटवारी/तहसील से संपर्क करें।
        </SI>
        <SI n={4}>
          <strong>पिछली किस्त का payment status देखें</strong> — अगर पिछली बार FTO generate होकर भी पैसा
          नहीं पहुंचा था, तो वह समस्या अपने आप ठीक नहीं होगी। कारण वहीं लिखा मिलेगा।
        </SI>
      </StepList>

      <SH>घोषणा हो जाए, तो पैसा आया या नहीं — ऐसे देखें</SH>
      <p>
        सबसे आसान रास्ता mobile से है। Portal पर "Know Your Status" खोलिए, registration number (या "Know
        your registration no." से निकालकर) डालिए, OTP से अंदर जाइए — वहां payment की पूरी history दिखती है।
        Screen-by-screen तरीका हमने{' '}
        <Link href="/articles/hindi/status-check-mobile-se">मोबाइल नंबर से स्टेटस चेक</Link> में अलग से लिखा
        है। गांव की पूरी सूची देखनी हो तो Farmers Corner का "Beneficiary List" विकल्प है।
      </p>
      <p>
        एक बारीक बात — status में "FTO is Generated" दिखने का मतलब है कि भुगतान का order बन चुका है, पर
        बैंक तक पैसा पहुंचने में 2-5 दिन और लग सकते हैं। घबराने की बात नहीं। इस शब्द का पूरा मतलब{' '}
        <Link href="/articles/pm-kisan-fto-generated-ka-matlab-kya-hai">FTO वाले लेख</Link> में समझाया है।
      </p>

      <SH>अगर पिछली बार नाम कट गया था तो?</SH>
      <p>
        तो पहले वजह पकड़िए, फिर इलाज कीजिए। मोटे तौर पर तीन ही श्रेणियां होती हैं। पहली — document की कमी
        (eKYC, बैंक, जमीन): ऊपर वाले चार काम कर लेने से अगली सूची में लौटने की गुंजाइश बन जाती है। दूसरी —
        अपात्रता (income tax भरने वाले, सरकारी कर्मचारी, संस्थागत जमीन): यहां कोई शिकायत काम नहीं करेगी,
        नियम ही यही है। तीसरी — राज्य स्तर पर verification में अटका आवेदन: इसके लिए helpline 155261 या
        अपने कृषि अधिकारी से बात करें। शिकायत दर्ज करने का पूरा तरीका{' '}
        <Link href="/articles/hindi/helpline-shikayat">हेल्पलाइन guide</Link> में है।
      </p>

      <SH>अक्सर पूछे जाने वाले सवाल</SH>
      <FAQBlock faqs={FAQS} />

      <p className="text-xs text-[var(--color-text-muted)] italic">
        Source: योजना के नियम और भुगतान प्रक्रिया{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> (कृषि
        एवं किसान कल्याण मंत्रालय) पर आधारित। किस्त की तारीख की आधिकारिक घोषणा{' '}
        <a href="https://pib.gov.in" target="_blank" rel="noopener noreferrer">pib.gov.in</a> पर आती है। इस
        लेख में कोई अनुमानित तारीख जानबूझकर नहीं दी गई है। Last verified:{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')}.
      </p>

      <RelatedArticles articles={RELATED} />
    </>
  );
}
