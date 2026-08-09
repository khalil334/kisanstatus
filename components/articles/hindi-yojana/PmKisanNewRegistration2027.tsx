import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, DB, StepList, SI, GovLink, CalcBanner, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-bold mt-6 mb-2 text-[var(--color-text)]">{children}</h3>;
}

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
  {
    q: 'महिला के नाम जमीन है — आवेदन उसी के नाम से होगा?',
    a: 'हां, और यही सही है। जमीन जिसके नाम, आवेदन उसी का — चाहे वह घर की महिला हों। आधार, बैंक खाता और mobile OTP भी उन्हीं का चाहिए। पति अपने नाम से आवेदन नहीं कर सकता जब तक खतौनी में उसका नाम न हो।',
  },
  {
    q: 'आधार में mobile number link नहीं है — क्या करूं?',
    a: 'दो रास्ते। पहला — Aadhaar Seva Kendra जाकर आधार में नया नंबर जुड़वाएं (मामूली शुल्क), फिर खुद online आवेदन करें। दूसरा — सीधे CSC जाएं, वहां biometric से काम हो जाता है। लेकिन आगे eKYC और status के लिए आधार-linked नंबर बार-बार चाहिए — इसलिए लम्बे में पहला रास्ता ही सही है।',
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

      <SH>आवेदन से पहले — खुद से पांच सवाल</SH>
      <p>
        Form खोलने से पहले ये पांच सवाल खुद से पूछ लीजिए। सबका जवाब “हां” है तभी आगे बढ़िए —
        वरना पहले वह कमी दूर कीजिए, क्योंकि अधूरी तैयारी पर डाला आवेदन महीनों लटकता है:
      </p>
      <StepList>
        <SI n={1}>खेती की जमीन खतौनी में <strong>मेरे नाम</strong> दर्ज है?</SI>
        <SI n={2}>परिवार (पति/पत्नी) में कोई और यह लाभ <strong>नहीं</strong> ले रहा?</SI>
        <SI n={3}>मैं income tax नहीं भरता, सरकारी सेवा/बड़ी pension में नहीं हूं?</SI>
        <SI n={4}>आधार में mobile number जुड़ा है (या CSC जाने को तैयार हूं)?</SI>
        <SI n={5}>बैंक खाता चालू हालत में है और आधार से seeded है?</SI>
      </StepList>
      <p>
        सवाल 1 पर अटके हैं तो पहले तहसील से वरासत/नामांतरण का काम कराइए — यह PM Kisan का नहीं,
        राजस्व विभाग का काम है और इसके बिना आगे कुछ नहीं होगा। सवाल 2-3 पर जवाब “ना” है तो आवेदन
        करना बेकार है — जांच में पकड़ा जाएगा, और गलत तरीके से लिया पैसा बाद में recovery notice बनकर
        लौटता है। सवाल 4-5 छोटे काम हैं पर इन्हीं दो पर आगे चलकर सबसे ज्यादा किस्तें रुकती हैं।
      </p>

      <SH>Step 0 — पहले Farmer ID बनवाइए</SH>
      <p>
        यह नया अनिवार्य पड़ाव है। Andhra Pradesh, Assam, Bihar, Chhattisgarh, Gujarat, Karnataka, Kerala,
        MP, Maharashtra, Odisha, Rajasthan, Tamil Nadu, Telangana, UP — इन राज्यों में Farmer ID नए
        beneficiaries के लिए जरूरी हो चुकी है, और बाकी जगह भी यही दिशा है। अपनी राज्य की Farmer Registry
        (agristack.gov.in से) पर आधार + land record + बैंक details से यह आईडी बनती है। पूरा process हमने{' '}
        <Link href="/articles/hindi/farmer-id-kaise-banaye">फार्मर आईडी कैसे बनाएं</Link> में step-by-step
        लिखा है — पहले वो काम निपटाइए, फिर यहां लौटिए।
      </p>

      <H3>Farmer ID और PM Kisan registration — दो अलग चीजें हैं</H3>
      <p>
        यह उलझन बहुत किसानों की है, इसलिए साफ कर दें। Farmer ID (AgriStack) आपकी खेती की सरकारी
        पहचान है — यह बनने से पैसा नहीं आता। PM Kisan registration अलग आवेदन है जिससे ₹6,000 वाली
        योजना में नाम जुड़ता है। क्रम यह है: पहले Farmer ID, फिर उसी के सहारे PM Kisan का आवेदन। जो
        लोग सिर्फ Farmer ID बनवाकर बैठ गए और सोचते रहे कि किस्त आएगी — उनका इंतजार कभी खत्म नहीं
        होगा। दोनों काम चाहिए।
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

      <H3>नाम का मिलान कैसे करें — घर पर पांच मिनट का काम</H3>
      <p>
        मेज पर तीन चीजें रखिए — आधार कार्ड, बैंक passbook का पहला पन्ना, और खतौनी की नकल। अब
        तीनों पर अपना नाम अक्षर-दर-अक्षर पढ़िए — जोर से, बोलकर। तीन चीजें पकड़नी हैं: spelling का
        फर्क (Kumar/Kumaar), अधूरा-पूरा नाम (कहीं Devi लगा है, कहीं नहीं), और पिता के नाम का अंतर।
        कोई फर्क मिले तो नियम याद रखिए — <strong>आधार को मानक मानिए</strong>, क्योंकि eKYC और DBT
        दोनों आधार से चलते हैं। बैंक में नाम सुधरवाना आसान है (branch में आधार लेकर form), खतौनी का
        सुधार तहसील से होता है। यह काम पहले किए बिना आवेदन डालना ऐसा है जैसे टेढ़ी नींव पर दीवार
        उठाना।
      </p>

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

      <SH>खुद करें या CSC से — सीधा मुकाबला</SH>
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
        नतीजा दोनों का एक है — आवेदन उसी system में जाता है। CSC जाएं तो एक आदत बना लें: submit से
        पहले operator से कहिए कि भरा हुआ form एक बार पूरा पढ़कर सुना दे — खासकर नाम की spelling, खाता
        नंबर और खसरा नंबर। ये तीन चीजें गलत गईं तो महीनों का correction चक्कर लगेगा।
      </p>

      <CalcBanner />

      <SH>Step 3 — आवेदन के बाद का खेल: verification</SH>
      <p>
        Submit दबाते ही पैसा नहीं आने लगता — यह बात शुरू में ही समझ लें तो निराशा नहीं होगी। आपका आवेदन
        राज्य सरकार के पास जाता है, जहां पटवारी/राजस्व विभाग land record से मिलान करता है। फिर district और
        state level की approval। इस दौरान status &quot;Pending for approval&quot; दिखेगा — यह सामान्य है।
      </p>
      <p>
        Status check करने के लिए portal पर <strong>Status of Self Registered Farmer</strong> का option है —
        आधार नंबर डालिए और देखिए आवेदन किस table पर पड़ा है। Table-दर-table इसका क्या मतलब है, यह{' '}
        <Link href="/articles/PmKisanSelfRegisteredStatusCheck">अलग लेख में खोलकर समझाया है</Link>।
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

      <SH>Approval के बाद पहला पैसा कब और कैसे</SH>
      <p>
        Status में Approved दिखना आधी जीत है, पूरी नहीं। पैसा आने के लिए तीन चीजें एक साथ हरी होनी
        चाहिए — आवेदन approved, eKYC: YES, और बैंक खाते की आधार seeding active। तीनों हरी हैं तो
        आपका नाम अगली release की beneficiary list में जुड़ता है और उसी किस्त से पैसा शुरू होता है।
        एक बात और — पुरानी किस्तों का arrear नए लाभार्थी को नहीं मिलता; पैसा आपके शामिल होने के बाद
        वाली किस्तों से गिना जाता है। इसलिए आवेदन टालना = सीधा नुकसान।
      </p>
      <p>
        SMS का इंतजार मत कीजिए — कई बार पैसा आ जाता है और SMS नहीं आता। पक्का तरीका दो हैं:
        passbook entry कराना, या portal पर Know Your Status में payment का record देखना। किस्त कब
        आती है और उससे पहले क्या-क्या निपटा लेना चाहिए — पूरी कहानी के लिए{' '}
        <Link href="/articles/hindi/pm-kisan-25vi-kist">अगली किस्त वाला लेख</Link> पढ़ लें।
      </p>

      <SH>Verification लंबा खिंच जाए तो क्या करें</SH>
      <p>
        कितना इंतजार सामान्य है और कब पैरवी शुरू करनी चाहिए — यह समझना जरूरी है। मोटा नियम: आवेदन
        के बाद एक-दो महीने तक status का Pending दिखना आम बात है, घबराने की जरूरत नहीं। लेकिन अगर
        दो महीने बाद भी आवेदन उसी जगह खड़ा है, तो समझिए कहीं मिलान अटका है और अब आपकी पैरवी के
        बिना वह आगे नहीं बढ़ेगा।
      </p>
      <p>
        पैरवी का तरीका भी सीधा है। सबसे पहले status में देखिए आवेदन किस स्तर पर अटका है — District
        लिखा है तो जिला कृषि कार्यालय, State लिखा है तो पहले ब्लॉक स्तर से ही पूछताछ शुरू कीजिए।
        साथ में ले जाने का सामान वही पुराना — आधार, passbook, खतौनी, और reference number। पटवारी
        से यह जरूर पूछिए कि आपकी land seeding हुई या नहीं — नए आवेदनों में सबसे ज्यादा देर इसी एक
        काम में लगती है, क्योंकि यह आपके नहीं, राजस्व विभाग के हाथ में है। Online शिकायत भी साथ
        चलाइए — portal के Help Desk में query डालिए और मिला query number संभालकर रखिए। हेल्पलाइन
        <strong> 155261</strong> पर भी आवेदन की स्थिति पूछी जा सकती है।
      </p>

      <SH>आवेदन reject क्यों होता है — छह असली वजहें</SH>
      <p>
        Reject हुए आवेदनों की कहानियां सुनें तो एक pattern दिखता है — गलती आवेदन के दिन ही हो चुकी थी,
        पता महीनों बाद चला। इन छह पर नजर डाल लीजिए, इनमें से कोई आपके आवेदन में न हो:
      </p>
      <StepList>
        <SI n={1}>
          <strong>नाम की spelling तीन जगह तीन तरह</strong> — सबसे बड़ा कारण। आधार की spelling को मानक
          मानिए और बाकी दोनों जगह वही कराइए।
        </SI>
        <SI n={2}>
          <strong>खतौनी में नाम नहीं</strong> — जमीन दादा/पिता के नाम, वरासत नहीं चढ़ी। पहले तहसील से
          नामांतरण, फिर आवेदन।
        </SI>
        <SI n={3}>
          <strong>खसरा नंबर गलत</strong> — याददाश्त से भरा गया number record से नहीं मिला। ताजी नकल
          सामने रखकर भरने से यह गलती होती ही नहीं।
        </SI>
        <SI n={4}>
          <strong>परिवार में पहले से लाभार्थी</strong> — पिता या पत्नी पहले से ले रहे हैं तो नया आवेदन
          नियम से reject होगा।
        </SI>
        <SI n={5}>
          <strong>अपात्रता</strong> — income tax record, सरकारी नौकरी या बड़ी pension — जांच में ये flag
          लगते हैं और आवेदन आगे नहीं बढ़ता।
        </SI>
        <SI n={6}>
          <strong>खेती की जमीन नहीं</strong> — record में जमीन आवासीय/commercial दर्ज है। योजना kheti-yogya
          जमीन वालों के लिए है।
        </SI>
      </StepList>
      <p>
        इनमें से पहली तीन आपके हाथ में हैं — यानी आधे से ज्यादा rejection सिर्फ तैयारी से बच जाते हैं।
        इसीलिए इस guide में Step 1 (documents का मिलान) को इतना लंबा लिखा गया है — वही असली मेहनत है,
        form भरना तो दस मिनट का काम है।
      </p>

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

      <SH>Documents upload करते समय की तीन बारीकियां</SH>
      <p>
        ये छोटी बातें हैं पर इन्हीं पर आवेदन लौटते हैं। पहली — खतौनी की photo साफ रोशनी में सीधी खींचिए;
        तिरछी, कटी या धुंधली photo पर सत्यापन अटकता है। दूसरी — file size की limit का ध्यान रखिए;
        बड़ी file हो तो phone के किसी भी free compressor से छोटी कर लीजिए, पर इतनी भी नहीं कि लिखा
        पढ़ा न जाए। तीसरी — खसरा नंबर वाला पन्ना ही upload करना है, पूरी खतौनी का पहला पन्ना नहीं।
        Upload के बाद preview खोलकर एक बार देख लीजिए कि सही file गई है — गलत file चढ़ जाना
        उतना ही आम है जितना सुनने में मजाक लगता है।
      </p>

      <SH>निचोड़ — पूरा रास्ता एक नजर में</SH>
      <p>
        2027 में नई registration का सही क्रम: पहले तीनों record (आधार, खतौनी, बैंक) में नाम एक जैसा
        कराइए → अपने राज्य की registry से Farmer ID बनवाइए → pmkisan.gov.in पर New Farmer
        Registration से आवेदन कीजिए (या CSC से) → reference number संभालिए → verification के दौरान
        status पर नजर और जरूरत पड़े तो तहसील/ब्लॉक में पैरवी → approval के बाद eKYC + NPCI seeding
        पूरी → अगली किस्त से ₹2,000 शुरू। न कोई shortcut है, न किसी agent के पास जादू — बस कागज सही
        और क्रम सही।
      </p>
      <p>
        एक आखिरी सलाह — आवेदन के दिन से एक छोटी diary या phone note बना लीजिए: आवेदन की तारीख,
        reference number, CSC की रसीद, grievance का query number, और जिस-जिस अधिकारी से बात हुई
        उसका नाम-तारीख। सरकारी काम में याददाश्त नहीं, कागज बोलता है — और जिस किसान के पास पूरा
        record होता है, उसका काम हर खिड़की पर तेज चलता है।
      </p>

      <SH>Registration के सवाल, सीधे जवाब</SH>
      <FAQBlock faqs={FAQS} />

      <p className="text-xs text-[var(--color-text-muted)] italic">
        Registration flow की जानकारी{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> (Ministry
        of Agriculture &amp; Farmers Welfare) के आवेदन-ढांचे से ली गई है; Farmer ID अनिवार्यता वाले राज्यों की
        जानकारी सरकारी घोषणाओं की news coverage से। राज्य-स्तरीय rules बदलते रहते हैं, इसलिए आवेदन से
        पहले अपने राज्य का ताजा निर्देश जरूर देख लें — यह लेख{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')} तक की स्थिति पर खरा है।
      </p>

      <RelatedArticles articles={RELATED} />
    </>
  );
}
