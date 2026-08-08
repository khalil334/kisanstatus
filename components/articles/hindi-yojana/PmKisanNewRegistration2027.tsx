import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, DB, StepList, SI, GovLink, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: 'क्या Farmer ID के बिना नई registration हो जाएगी?',
    a: 'कई राज्यों में अब नहीं — Andhra Pradesh, Bihar, MP, Maharashtra, UP समेत कई राज्यों में नए आवेदन के लिए Farmer ID जरूरी की जा चुकी है। इसलिए क्रम यही रखें: पहले Farmer ID, फिर PM Kisan registration।',
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
    q: 'Status में "Pending for approval at State/District" का मतलब?',
    a: 'आपका आवेदन राज्य/जिला स्तर पर verification queue में है। यह normal है। बहुत लंबा खिंचे तो अपने कृषि अधिकारी या पटवारी से मिलकर पूछें — अक्सर land record के मिलान पर अटका होता है।',
  },
  {
    q: 'CSC से कराना बेहतर है या खुद online?',
    a: 'दोनों का result एक ही है। खुद करेंगे तो free है; CSC पर छोटा सा service charge लगता है लेकिन biometric eKYC साथ में हो जाती है। जिनके आधार में mobile link नहीं है, उनके लिए CSC ही व्यावहारिक रास्ता है।',
  },
  {
    q: 'गलत जानकारी भर दी तो?',
    a: 'Portal पर correction का option है — नाम, बैंक details वगैरह सुधारे जा सकते हैं। हमारी correction form guide में पूरा तरीका है। बेहतर यही है कि submit से पहले आधार और खतौनी से मिलाकर ही भरें।',
  },
];

const RELATED = [
  { slug: 'PmKisanCorrectionForm2026', title: 'Correction Form Guide', emoji: '📝' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Online Guide', emoji: '🔐' },
  { slug: 'PmKisanSelfRegisteredStatusCheck', title: 'Self-Registered Status Check', emoji: '🔎' },
  { slug: 'PmKisanCscRegistrationCharges', title: 'CSC Registration Charges', emoji: '💰' },
];

export default function PmKisanNewRegistration2027({ article }: { article: HindiArticle }) {
  return (
    <>
      <p>
        सवाल: 2027 में PM Kisan की नई registration पुराने तरीके से हो जाएगी?
      </p>
      <p>
        जवाब: नहीं — और यही इस article की वजह है। पिछले दो सालों में registration का process बदल गया है।
        सबसे बड़ा बदलाव: कई राज्यों में अब <strong>Farmer ID (AgriStack)</strong> के बिना नया आवेदन आगे ही
        नहीं बढ़ता। पुराने YouTube videos वाला तरीका follow करेंगे तो आधे रास्ते अटक जाएंगे। तो चलिए, 2027
        वाला सही क्रम शुरू से समझते हैं।
      </p>

      <IB>
        याद दिला दें — योजना में क्या मिलता है: ₹6,000 सालाना, ₹2,000 की तीन किस्तों में, सीधे बैंक account
        में (DBT)। Landholding किसान परिवार eligible हैं; income tax payer, सरकारी कर्मचारी और
        constitutional post वाले बाहर। पूरी eligibility{' '}
        <Link href="/articles/PmKisanMasterGuide2026">Master Guide</Link> में।
      </IB>

      <SH>Step 0 — पहले Farmer ID बनवाइए</SH>
      <p>
        यह नया अनिवार्य पड़ाव है। Andhra Pradesh, Assam, Bihar, Chhattisgarh, Gujarat, Karnataka, Kerala,
        MP, Maharashtra, Odisha, Rajasthan, Tamil Nadu, Telangana, UP — इन राज्यों में Farmer ID नए
        beneficiaries के लिए जरूरी हो चुकी है, और बाकी जगह भी यही दिशा है। अपनी राज्य की Farmer Registry
        (agristack.gov.in से) पर आधार + land record + बैंक details से यह आईडी बनती है। पूरा process हमने{' '}
        <Link href="/articles/hindi/farmer-id-kaise-banaye">फार्मर आईडी कैसे बनाएं</Link> में step-by-step
        लिखा है — पहले वो काम निपटाइए, फिर यहां लौटिए।
      </p>

      <SH>Step 1 — Documents की तैयारी</SH>
      <StepList>
        <SI n={1}><strong>आधार कार्ड</strong> — नाम की spelling खतौनी से मिला लें।</SI>
        <SI n={2}><strong>जमीन के कागज</strong> — खसरा/खतौनी, जमीन आपके नाम registered हो।</SI>
        <SI n={3}><strong>बैंक पासबुक</strong> — account आधार से linked और NPCI seeding active।</SI>
        <SI n={4}><strong>आधार-linked mobile</strong> — OTP के बिना गाड़ी नहीं चलेगी।</SI>
        <SI n={5}><strong>Farmer ID</strong> — ऊपर वाला Step 0।</SI>
      </StepList>
      <WB>
        Registration reject होने की सबसे बड़ी वजह कोई सरकारी साजिश नहीं — <strong>records का आपसी
        mismatch</strong> है। आधार में &quot;Mohd. Aslam&quot;, खतौनी में &quot;Mohammad Aslam&quot;, बैंक
        में तीसरी spelling। तीनों जगह एक जैसा नाम कराइए, उसके बाद apply कीजिए। यही एक काम आधे rejections
        बचा लेता है।
      </WB>

      <SH>Step 2 — Online आवेदन, screen-by-screen</SH>
      <StepList>
        <SI n={1}>
          <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> खोलें
          → <strong>Farmers Corner</strong> → <strong>New Farmer Registration</strong>।
        </SI>
        <SI n={2}>
          <strong>Rural</strong> या <strong>Urban</strong> registration चुनें — गांव की जमीन है तो Rural।
        </SI>
        <SI n={3}>आधार नंबर, mobile number, राज्य चुनकर captcha भरें → OTP verify करें।</SI>
        <SI n={4}>
          खुलने वाले form में personal details आधार से आ जाती हैं। बाकी भरें — जिला, तहसील, गांव, category।
        </SI>
        <SI n={5}>
          <strong>Land details</strong> — खसरा/survey number, रकबा। यहीं Farmer ID/registry से मिलान होता
          है। कागज सामने रखकर भरिए, याददाश्त से नहीं।
        </SI>
        <SI n={6}>बैंक details (account number, IFSC) डालें, documents upload करें, <strong>Submit</strong>।</SI>
        <SI n={7}>
          Screen पर आया <strong>registration/reference number लिखकर रखें</strong> — status इसी से देखेंगे।
        </SI>
      </StepList>

      <GovLink
        href="https://pmkisan.gov.in"
        label="PM Kisan Portal — New Farmer Registration"
        guide="pmkisan.gov.in खोलें"
        portalName="pmkisan.gov.in"
      />

      <SH>Step 3 — आवेदन के बाद का खेल: verification</SH>
      <p>
        Submit दबाते ही पैसा नहीं आने लगता — यह बात शुरू में ही समझ लें तो निराशा नहीं होगी। आपका आवेदन
        राज्य सरकार के पास जाता है, जहां पटवारी/राजस्व विभाग land record से मिलान करता है। फिर district और
        state level की approval। इस दौरान status &quot;Pending for approval&quot; दिखेगा — यह सामान्य है।
      </p>
      <p>
        Status check करने के लिए portal पर <strong>Status of Self Registered Farmer</strong> का option है —
        आधार नंबर डालिए और देखिए आवेदन किस table पर पड़ा है। इसका पूरा breakdown{' '}
        <Link href="/articles/PmKisanSelfRegisteredStatusCheck">self-registered status guide</Link> में है।
      </p>
      <p>
        UP के एक किसान का experience बताते हैं — आवेदन May में किया, approval September में आया, पहला पैसा
        उसके बाद वाली किस्त में। बीच में दो बार तहसील के चक्कर लगे क्योंकि खतौनी में रकबा update नहीं था।
        धैर्य + अपने record की खुद पैरवी — यही combination काम करता है। Approve होने के बाद{' '}
        <Link href="/articles/PmKisanEkycOnline2026">eKYC</Link> भी पूरी कर लें, वरना नाम list में आकर भी
        किस्त रुक जाएगी।
      </p>

      <DB>
        &quot;₹500 में registration पक्की&quot; बोलने वाले agents से दूर रहें। Portal पर आवेदन free है; CSC
        का official charge मामूली है (details{' '}
        <Link href="/articles/PmKisanCscRegistrationCharges">यहां</Link>)। कोई approval की &quot;guarantee&quot;
        नहीं बेच सकता — approval सिर्फ record मिलान से होती है।
      </DB>

      <SH>Registration के 4 सबसे आम सवालों के छोटे जवाब</SH>
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

      <SH>अक्सर पूछे जाने वाले सवाल</SH>
      <FAQBlock faqs={FAQS} />

      <p className="text-xs text-[var(--color-text-muted)] italic">
        Sources: registration flow{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> (Ministry
        of Agriculture &amp; Farmers Welfare) पर आधारित; Farmer ID अनिवार्यता वाले राज्यों की जानकारी सरकारी
        घोषणाओं की news coverage से। राज्य-स्तरीय rules बदलते रहते हैं — आवेदन से पहले अपने राज्य का ताजा
        निर्देश देख लें। Last verified: {new Date(article.modifiedTime).toLocaleDateString('hi-IN')}.
      </p>

      <RelatedArticles articles={RELATED} />
    </>
  );
}
