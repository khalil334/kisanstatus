import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, StepList, SI, GovLink, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: 'फार्मर आईडी बनवाने के पैसे लगते हैं?',
    a: 'Online खुद करें तो बिल्कुल free। CSC पर कराएं तो service charge लग सकता है। कोई "जल्दी बनवा दूंगा" कहकर मोटी रकम मांगे तो वो fraud है — process सबके लिए एक जैसी है।',
  },
  {
    q: 'क्या फार्मर आईडी PM Kisan के लिए जरूरी है?',
    a: 'कई राज्यों में नई registration के लिए Farmer ID मांगी जाने लगी है, और पुराने beneficiaries के लिए भी यह धीरे-धीरे जरूरी होती जा रही है। अपने राज्य का ताजा rule कृषि विभाग से confirm करें — लेकिन बनवा लेना हर हाल में समझदारी है।',
  },
  {
    q: 'जमीन पिता के नाम है, मेरी आईडी बनेगी?',
    a: 'Farmer ID land record से link होती है। जमीन जिसके नाम है, आईडी उसी की बनेगी। आप खेती करते हैं लेकिन record पिता के नाम है, तो या तो उनकी आईडी बनवाएं, या record में नाम transfer/वरासत के बाद अपनी।',
  },
  {
    q: 'किरायेदार (tenant) किसान का क्या?',
    a: 'कुछ राज्यों में valid lease agreement के साथ tenant farmer भी register हो सकते हैं। यह राज्य के rules पर निर्भर है — अपने राज्य के portal या कृषि office से पूछें।',
  },
  {
    q: 'Registration के बाद ID कितने दिन में मिलती है?',
    a: 'Aadhaar OTP से verification तुरंत होता है, लेकिन land record की जांच में समय लगता है — कुछ दिनों से कुछ हफ्तों तक। Status portal पर "Check Enrollment Status" से देख सकते हैं।',
  },
  {
    q: 'आधार में mobile number link नहीं है, तो?',
    a: 'तब OTP नहीं आएगा और online registration अटक जाएगी। पहले आधार केंद्र जाकर mobile number link/update कराएं, या CSC पर biometric से registration कराएं।',
  },
  {
    q: 'ID Card कहां से download होगा?',
    a: 'Registration approve होने के बाद अपने राज्य के AgriStack portal पर login करें — profile में Farmer ID दिखेगी और card PDF में download हो जाता है। Print कराकर रखना अच्छा रहता है।',
  },
  {
    q: 'जमीन दो जिलों में है — क्या दो Farmer ID बनेंगी?',
    a: 'नहीं — एक किसान, एक Farmer ID। Registration के समय अपनी सारी जमीनों के खसरा नंबर एक ही profile में जोड़े जाते हैं। अलग-अलग राज्यों में जमीन हो तो मामला थोड़ा पेचीदा है — रजिस्ट्री राज्य-स्तर पर बनती है, इसलिए अपने मुख्य निवास वाले राज्य से शुरू करें और दूसरे राज्य के नियम वहां के कृषि विभाग से पूछें।',
  },
  {
    q: 'महिला किसान के नाम जमीन है — क्या उनकी अलग ID बनेगी?',
    a: 'बिल्कुल — जमीन जिसके नाम, ID उसी की। बल्कि घर की महिला के नाम record है तो उनकी ID जरूर बनवाएं — कई योजनाओं में महिला किसानों के लिए अलग प्रावधान/प्राथमिकता होती है, और ID के बिना वह हक छूट सकता है। Process बिल्कुल वही है — आधार, OTP, land record।',
  },
  {
    q: 'Joint खाते की जमीन (कई हिस्सेदार) में क्या होगा?',
    a: 'खतौनी में जितने नाम दर्ज हैं, हर हिस्सेदार अपने हिस्से के साथ अपनी अलग Farmer ID बनवा सकता है। Registration के समय portal खसरे में आपका नाम और हिस्सा मिलाता है। दिक्कत तब आती है जब विरासत के बाद नाम record में चढ़े ही नहीं — पहले नामांतरण कराएं।',
  },
  {
    q: 'Registration reject हो गई — दोबारा कब apply कर सकता हूं?',
    a: 'Reject होने पर कारण status में दिखता है — ज्यादातर मामलों में नाम-मिलान या land record का फर्क। पहले वह गड़बड़ी ठीक कराएं (आधार update या तहसील से record सुधार), फिर दोबारा apply करें — कोई सीमा नहीं है। बिना कारण सुधारे बार-बार apply करने से वही reject दोहराएगा।',
  },
];

const RELATED = [
  { slug: 'AgriStackKyaHai2026', title: 'AgriStack Kya Hai?', emoji: '🗂️' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Online Guide', emoji: '🔐' },
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Apply', emoji: '💳' },
];

export default function FarmerIdCardKaiseBanaye2027({ article }: { article: HindiArticle }) {
  return (
    <>
      <p>
        देश के करोड़ों किसानों का data अब एक digital registry में जुड़ रहा है — और उसकी चाबी है एक unique
        number, जिसे सरकार <strong>Farmer ID</strong> या किसान पहचान पत्र कह रही है। आधार जैसा ही समझिए,
        बस खेती के लिए। जिस किसान की यह आईडी बन गई, उसका नाम, जमीन का record और बैंक — तीनों एक जगह verified
        हैं। और जिसकी नहीं बनी? आने वाले समय में scheme-दर-scheme दिक्कत बढ़ती जाएगी।
      </p>
      <p>
        यह guide उसी सवाल का जवाब है जो आजकल हर गांव में पूछा जा रहा है — <em>फार्मर आईडी कैसे बनाएं, कहां
        बनाएं, और क्या-क्या लगेगा?</em> बिना घुमाए, seedha process।
      </p>

      <SH>यह आईडी है क्या चीज?</SH>
      <p>
        केंद्र सरकार के <strong>AgriStack</strong> (Digital Agriculture Mission) के तहत हर राज्य अपनी{' '}
        <strong>Farmer Registry</strong> बना रहा है। इसमें किसान की तीन चीजें आपस में जोड़ी जाती हैं:
      </p>
      <StepList>
        <SI n={1}><strong>पहचान</strong> — आधार से verified नाम और details।</SI>
        <SI n={2}><strong>जमीन</strong> — खसरा/खतौनी वाला land record।</SI>
        <SI n={3}><strong>बैंक</strong> — DBT के लिए account details।</SI>
      </StepList>
      <p>
        इन तीनों के मिलान के बाद एक unique <strong>Farmer ID</strong> generate होती है। फायदा साफ है — बार-बार
        कागज जमा करने का झंझट खत्म। Subsidy, बीमा (PMFBY), KCC loan, PM Kisan — हर जगह यही एक आईडी काम
        करेगी। AgriStack आखिर है क्या बला — यह अलग से{' '}
        <Link href="/articles/AgriStackKyaHai2026">इस page पर समझाया है</Link>।
      </p>

      <SH>पहले यह 5 चीजें तैयार रखिए</SH>
      <p>List लंबी नहीं है, पर हर चीज का अपना काम है:</p>
      <ul className="my-4 space-y-2 text-sm">
        <li><strong>आधार कार्ड</strong> — पहचान verify करने के लिए; इसी से OTP आएगा।</li>
        <li><strong>आधार से linked mobile number</strong> — OTP इसी पर आता है। Link नहीं है तो पहले वह काम कराएं।</li>
        <li><strong>जमीन के कागज (खसरा/खतौनी)</strong> — land record मिलान के लिए, ताजा नकल हो तो और अच्छा।</li>
        <li><strong>बैंक पासबुक</strong> — DBT payment के लिए account details।</li>
        <li><strong>Passport size photo</strong> — हर जगह नहीं, पर कुछ राज्यों के portal पर मांगी जाती है।</li>
      </ul>
      <WB>
        सबसे common अड़चन पहले ही बता दें — <strong>land record में नाम की spelling आधार से अलग होना</strong>।
        &quot;राम कुमार&quot; आधार में और &quot;रामकुमार&quot; खतौनी में — बस, verification अटक गया। Registration
        से पहले दोनों record मिला लें; फर्क हो तो पहले तहसील से ठीक कराएं।
      </WB>

      <SH>Online registration — घर बैठे, step-by-step</SH>
      <p>
        हर राज्य का अपना portal है, लेकिन ढांचा एक जैसा — main portal{' '}
        <a href="https://agristack.gov.in" target="_blank" rel="noopener noreferrer">agristack.gov.in</a> से
        अपने राज्य की Farmer Registry चुनिए (जैसे UP के लिए upfr.agristack.gov.in, महाराष्ट्र के लिए
        mhfr.agristack.gov.in)। आगे का process:
      </p>
      <StepList>
        <SI n={1}>
          Portal खोलकर <strong>Farmer</strong> option चुनें, फिर <strong>Create New User Account</strong> पर
          जाएं।
        </SI>
        <SI n={2}>
          12 अंकों का आधार नंबर डालें, consent box tick करें, submit करें। आधार-linked mobile पर OTP आएगा —
          उसे डालकर verify करें।
        </SI>
        <SI n={3}>
          Username-password बनाएं (mobile number ही username रहता है ज्यादातर जगह)। फिर उसी से login करें।
        </SI>
        <SI n={4}>
          Dashboard पर <strong>Register as Farmer</strong> दबाएं। आधार से आपकी basic details अपने आप भर
          जाएंगी — address, category जैसी बची जानकारी खुद भरें।
        </SI>
        <SI n={5}>
          <strong>Land details</strong> डालें — जिला, तहसील, गांव, खसरा नंबर। Portal land record से मिलान
          करेगा।
        </SI>
        <SI n={6}>बैंक details भरें — account number, IFSC।</SI>
        <SI n={7}>
          सब check करके <strong>Submit</strong>। बस। अब verification का इंतजार — approve होते ही Farmer ID
          generate हो जाएगी और card PDF में download कर पाएंगे।
        </SI>
      </StepList>

      <GovLink
        href="https://agristack.gov.in"
        label="AgriStack — Farmer Registry Portal"
        guide="agristack.gov.in खोलें"
        portalName="agristack.gov.in"
      />

      <SH>Online नहीं हो पा रहा? CSC वाला रास्ता</SH>
      <p>
        सच बताएं तो हर किसान के लिए online form भरना आसान नहीं — network की दिक्कत, आधार में mobile link
        नहीं, या बस portal समझ नहीं आ रहा। कोई बात नहीं। नजदीकी <strong>CSC (जन सेवा केंद्र)</strong> पर
        जाइए, ऊपर वाले documents साथ ले जाइए। वहां biometric से आधार verification हो जाता है, mobile-link की
        जरूरत भी नहीं पड़ती। कई राज्यों में गांव-गांव <strong>camp</strong> भी लग रहे हैं जहां पटवारी/कृषि
        विभाग की team मौके पर ही registration करती है — अपने ग्राम पंचायत से पूछते रहिए।
      </p>
      <IB>
        एक अनुभव field से — MP के एक गांव में camp लगा तो जिन किसानों के land record पहले से साफ-सुथरे थे,
        उनकी आईडी उसी हफ्ते बन गई। जिनके record में वरासत दर्ज नहीं थी (जमीन अब भी दादा के नाम), वो महीनों
        अटके रहे। सीख: <strong>record पहले सुधारो, registration बाद में</strong> — उल्टा करोगे तो इंतजार ही
        मिलेगा।
      </IB>

      <SH>Status कैसे check करें?</SH>
      <p>
        अपने राज्य के portal पर <strong>Check Enrollment Status</strong> का option होता है — आधार नंबर या
        registered mobile डालिए, OTP verify कीजिए, स्थिति सामने। Status अगर लंबे समय तक pending दिखे तो
        अपने क्षेत्र के कृषि अधिकारी या पटवारी से मिलिए — अटकने की वजह लगभग हमेशा land record का मिलान होती
        है।
      </p>

      <SH>Registration अटकने की 4 आम वजहें — और हर एक का इलाज</SH>
      <p>
        Portal पर form जमा होना आधी कहानी है; असली परीक्षा verification में होती है। जो मामले अटकते
        हैं, लगभग सब इन चार खानों में गिरते हैं:
      </p>
      <StepList>
        <SI n={1}>
          <strong>नाम का मिलान fail</strong> — आधार और खतौनी में spelling अलग। इलाज: दोनों में से जो
          गलत है उसे सुधारें — आधार केंद्र से आधार, तहसील से खतौनी। सुधार के बाद ही apply करें।
        </SI>
        <SI n={2}>
          <strong>जमीन अब भी पुरखों के नाम</strong> — विरासत के बाद नामांतरण (mutation) नहीं हुआ। इलाज:
          पटवारी/तहसील में वारिसों के नाम दर्ज कराएं — यह काम समय लेता है, इसलिए सबसे पहले शुरू करें।
        </SI>
        <SI n={3}>
          <strong>आधार में mobile link नहीं</strong> — OTP आता ही नहीं। इलाज: आधार केंद्र पर number update
          कराएं, या CSC पर biometric रास्ता पकड़ें।
        </SI>
        <SI n={4}>
          <strong>खसरा नंबर मेल नहीं खाता</strong> — पुराना नंबर भर दिया या चकबंदी/consolidation के बाद
          नंबर बदल गया। इलाज: ताजा खतौनी निकलवाकर उसी में लिखा नंबर भरें — याद्दाश्त से नहीं।
        </SI>
      </StepList>

      <SH>ID बन जाने के बाद क्या बदलेगा — आपके काम की बात</SH>
      <p>
        Farmer ID कोई दीवार पर टांगने वाला certificate नहीं है — यह काम आने वाली चाबी है। जहां-जहां
        यह काम आएगी: PM Kisan की नई registration और record-सुधार, फसल बीमा (PMFBY) का claim —
          जहां जमीन और बुवाई का verified record सीधा काम आता है, KCC loan — बैंक को जमीन का प्रमाण
          अलग से जमा करने का झंझट घटता है, और खाद-बीज subsidy तथा मंडी में सरकारी खरीद का
          registration। सब जगह एक ही verified पहचान — यही इसका असली फायदा है।
      </p>
      <p>
        एक चेतावनी भी — ID बनने के बाद आपका data registry में है, इसलिए जमीन बेचने-खरीदने या विरासत
        के बाद record का update कराना न भूलें। Registry में पुरानी जानकारी पड़ी रही तो आगे उसी से जुड़ी
        योजनाएं अटकेंगी। और अपनी Farmer ID किसी अनजान आदमी को न दें — OTP की तरह यह भी आपकी
        पहचान है; गलत हाथों में जाकर फर्जी claim का जरिया बन सकती है।
      </p>

      <SH>PM Kisan से इसका क्या रिश्ता है?</SH>
      <p>
        सीधा रिश्ता। PM Kisan की नई registration में कई राज्यों में अब Farmer ID मांगी जाने लगी है, और
        आगे यह पूरे DBT system की रीढ़ बनने वाली है। मतलब — जो किसान PM Kisan की{' '}
        <Link href="/articles/PmKisanMasterGuide2026">किस्त लेते हैं</Link> या{' '}
        <Link href="/articles/KisanCreditCardOnlineApply2026">KCC</Link> बनवाना चाहते हैं, उनके लिए यह आईडी
        आज नहीं तो कल जरूरी होगी ही। जल्दी बनवा लेने में ही फायदा है — बाद में भीड़ और server, दोनों का बोझ
        बढ़ेगा।
      </p>

      <SH>Camp में जाने से पहले — 5 मिनट की तैयारी</SH>
      <p>
        गांव में camp लगे तो भीड़ में खाली हाथ मत पहुंचिए — आधे लोग वहीं से लौटाए जाते हैं क्योंकि
        कोई कागज घर छूट गया। जाने से पहले तीन चीजें थैले में डाल लें — आधार card (original), ताजा
        खतौनी की नकल, बैंक passbook — और वह mobile साथ रखें जिसका नंबर आधार से जुड़ा है। घर के
        जिन बड़े-बूढ़ों के नाम जमीन है, उन्हें भी साथ ले जाएं — biometric उन्हीं का लगेगा, आपका नहीं।
      </p>

      <SH>आपके सवाल, सीधे जवाब</SH>
      <FAQBlock faqs={FAQS} />

      <p className="text-xs text-[var(--color-text-muted)] italic">
        जानकारी का स्रोत: पूरी प्रक्रिया{' '}
        <a href="https://agristack.gov.in" target="_blank" rel="noopener noreferrer">agristack.gov.in</a>{' '}
        (Ministry of Agriculture &amp; Farmers Welfare) और राज्य Farmer Registry portals (जैसे
        upfr.agristack.gov.in) के registration flow से मिलाकर लिखी गई है। राज्य-विशेष rules बदलते रहते हैं,
        इसलिए अपने राज्य के portal पर एक बार जरूर मिला लें (आखिरी जांच:{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')})।
      </p>

      <RelatedArticles articles={RELATED} />
    </>
  );
}
