import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, StepList, SI, GovLink, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: 'MP में किसान को कुल कितना पैसा मिलता है?',
    a: 'सालाना ₹12,000 — केंद्र की PM Kisan से ₹6,000 और राज्य की मुख्यमंत्री किसान कल्याण योजना से ₹6,000। दोनों DBT से सीधे बैंक account में आते हैं।',
  },
  {
    q: 'क्या अलग से आवेदन करना पड़ता है?',
    a: 'नहीं। जो किसान PM Kisan का verified beneficiary है, वही किसान कल्याण योजना का हकदार है। PM Kisan में नाम है और पटवारी verification हो गया, तो राज्य की किस्त अपने आप जुड़ जाती है। अलग form सिर्फ तब जब नया registration हो रहा हो।',
  },
  {
    q: 'Status कहां check करें?',
    a: 'राज्य की किस्त का status saara.mp.gov.in portal पर दिखता है (CM Kisan section में)। PM Kisan वाली किस्तों के लिए pmkisan.gov.in का Know Your Status ही रास्ता है।',
  },
  {
    q: 'PM Kisan आ रही है लेकिन राज्य वाली नहीं — क्यों?',
    a: 'दो आम कारण: पटवारी verification pending है, या राज्य की किस्त release ही नहीं हुई (राज्य की किस्तें अपने schedule से आती हैं, PM Kisan के साथ नहीं)। पहले saara portal पर status देखें, फिर पटवारी/तहसील से मिलें।',
  },
  {
    q: 'योजना की किस्तें कब-कब आती हैं?',
    a: 'राज्य सरकार साल में किस्तें अपने कार्यक्रम के हिसाब से release करती है — इसकी कोई PM Kisan जैसी fix rhythm नहीं है। कई बार किस्तें इकट्ठी भी आती हैं। Exact dates की official घोषणा का ही भरोसा करें।',
  },
  {
    q: 'नए किसान को क्या करना चाहिए?',
    a: 'पहले PM Kisan में registration कराएं (Farmer ID के साथ), eKYC और bank seeding पूरी करें। PM Kisan में beneficiary बनते ही राज्य योजना का रास्ता भी खुल जाता है।',
  },
  {
    q: 'पति-पत्नी दोनों के नाम जमीन है — क्या दोनों को ₹12,000-12,000 मिलेंगे?',
    a: 'नहीं। PM Kisan परिवार-आधारित है — पति, पत्नी और नाबालिग बच्चे एक इकाई गिने जाते हैं — और किसान कल्याण योजना उसी ढांचे पर चलती है। परिवार में एक को ही लाभ मिलेगा। दोनों ने ले लिया तो बाद में recovery notice आ सकता है।',
  },
  {
    q: 'जमीन पिताजी के नाम है, खेती मैं करता हूं — क्या मुझे पैसा मिलेगा?',
    a: 'नहीं — लाभ उसी को मिलता है जिसके नाम जमीन का record है। पिताजी जीवित हैं तो उनके नाम से लाभ चलेगा। उनके बाद नामांतरण (mutation) कराकर जमीन अपने नाम कराएं, फिर नए सिरे से registration होगा।',
  },
  {
    q: 'किस्त आई पर SMS नहीं आया — कैसे पता करूं?',
    a: 'SMS न आना आम बात है — कई बार बैंक का alert service बंद होता है या नंबर पुराना होता है। Passbook update कराएं या बैंक के mini-statement से देखें। Entry में DBT/PFMS लिखा आएगा — ₹2,000 की entry PM Kisan भी हो सकती है और राज्य योजना भी, इसलिए तारीख से मिलान करें।',
  },
  {
    q: 'क्या यह पैसा वापस मांगा जा सकता है?',
    a: 'हां — अगर बाद में पता चले कि आप exclusion के दायरे में थे (जैसे परिवार में income tax payer या सरकारी नौकरी) तो ली गई रकम की वसूली हो सकती है। इसलिए eligibility पर शक हो तो पहले साफ करें, पैसा लेते न रहें।',
  },
  {
    q: 'गांव बदल गया / जमीन बेच दी — अब क्या होगा?',
    a: 'जमीन पूरी बिक गई तो eligibility खत्म — लाभ लेते रहे तो आगे वसूली का जोखिम। जमीन दूसरी तहसील/जिले में खरीदी तो नया land record PM Kisan में update कराना जरूरी है — पुराना record हटते ही किस्त रुक जाती है। दोनों काम पटवारी/तहसील से होते हैं।',
  },
];

const RELATED = [
  { slug: 'hindi/namo-shetkari-yojana', title: 'नमो शेतकरी योजना Maharashtra', emoji: '🌾' },
  { slug: 'PmKisanMasterGuide2026', title: 'PM Kisan Master Guide', emoji: '📚' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Online Guide', emoji: '🔐' },
  { slug: 'PmKisanBeneficiaryList2026', title: 'Beneficiary List Guide', emoji: '📋' },
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed Fix', emoji: '💸' },
];

export default function MukhyamantriKisanKalyanYojanaMp({ article }: { article: HindiArticle }) {
  return (
    <>
      <p>
        मध्य प्रदेश का किसान देश में सबसे अलग स्थिति में है — उसे PM Kisan की ₹6,000 के ऊपर राज्य सरकार से{' '}
        <strong>₹6,000 और</strong> मिलते हैं। कुल ₹12,000 सालाना। यह दूसरी वाली रकम जिस योजना से आती है,
        उसका नाम है <strong>मुख्यमंत्री किसान कल्याण योजना</strong>। और मजेदार बात — बहुत से किसानों को
        ठीक-ठीक पता ही नहीं कि यह अलग योजना है, कैसे मिलती है, और जब नहीं आती तो किससे पूछना है। आज वही सब
        साफ करते हैं।
      </p>

      <IB>
        <strong>एक line में:</strong> PM Kisan के verified beneficiary को MP सरकार अपनी तरफ से ₹6,000/साल और
        देती है — अलग आवेदन की जरूरत नहीं, अलग किस्तों में आता है, status{' '}
        <a href="https://saara.mp.gov.in" target="_blank" rel="noopener noreferrer">saara.mp.gov.in</a> पर
        दिखता है।
      </IB>

      <SH>योजना की कहानी — ₹4,000 से ₹6,000 तक</SH>
      <p>
        योजना 2020 में शुरू हुई थी, तब राज्य ₹4,000 सालाना देता था। बाद में सरकार ने रकम बढ़ाकर{' '}
        <strong>₹6,000</strong> कर दी — यानी अब केंद्र + राज्य मिलाकर पूरे ₹12,000। मौजूदा सरकार भी साफ कह
        चुकी है कि योजना जारी रहेगी। पैसा किस्तों में आता है (₹2,000 की किस्तें), DBT से सीधे उसी बैंक
        account में जो PM Kisan के record में है।
      </p>
      <p>
        Design समझने लायक है — राज्य ने अपनी अलग beneficiary list नहीं बनाई। योजना PM Kisan के ढांचे पर ही
        सवार है। इसका फायदा: कागजी काम आधा। नुकसान: PM Kisan में कोई भी दिक्कत (eKYC pending, bank seeding
        fail) राज्य वाली किस्त भी रोक देती है। एक तीर से दो शिकार — उल्टी दिशा में भी।
      </p>

      <SH>किस्तें सच में आती हैं? — असली release का record</SH>
      <p>
        योजनाओं के वादे बहुत होते हैं, इसलिए कागज पर नहीं, record पर बात करते हैं। 22 सितंबर 2020 को
        तत्कालीन CM शिवराज सिंह चौहान ने योजना शुरू की थी — तब ₹4,000 सालाना, दो किस्तों में। बाद में रकम
        ₹6,000 हुई और किस्तें तीन। मार्च 2025 तक राज्य सरकार इस योजना में{' '}
        <strong>₹17,500 करोड़ से ज्यादा</strong> बांट चुकी थी और beneficiary गिनती 83 लाख किसानों के पार थी —
        यह आंकड़ा सरकारी बयान के हवाले से IANS की report में दर्ज है।
      </p>
      <p>
        हाल की releases का सिलसिला भी देख लीजिए। 5 जुलाई 2024 को टीकमगढ़ से FY 2024-25 की पहली किस्त निकली —
        करीब ₹1,630 करोड़, 81 लाख किसानों को। फरवरी 2025 में देवास जिले के सोनकच्छ से तीसरी किस्त गई — ₹1,624
        करोड़। अगस्त 2025 में मंडला में बलराम जयंती के मौके पर FY 2025-26 की दूसरी किस्त DBT से भेजी गई। और
        सबसे ताजा — <strong>27 जुलाई 2026 को खंडवा के बलराम कृषि महोत्सव</strong> में CM मोहन यादव ने single
        click से <strong>₹3,308 करोड़ की दो किस्तें एक साथ 82.7 लाख किसानों</strong> के खातों में भेजीं (ANI की{' '}
        <a
          href="https://news.webindia123.com/news/Articles/India/20260727/4479910.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          यह report
        </a>{' '}
        पढ़ सकते हैं)। उसी मंच से सरकार ने 2026 को &quot;कृषक कल्याण वर्ष&quot; के तौर पर मनाने की बात भी दोहराई।
      </p>
      <p>
        इस record से दो काम की बातें निकलती हैं। पहली — किस्तें आती जरूर हैं, पर उनकी तारीखें किसी fixed
        calendar से नहीं, सरकारी कार्यक्रमों (कृषि महोत्सव, जयंती जैसे मौकों) से जुड़ी होती हैं। इसलिए पड़ोसी को
        आ गई और आपको नहीं आई — यह घबराने की बात तभी है जब release हो चुकी हो और आपकी entry में दिक्कत हो।
        दूसरी — कभी-कभी दो किस्तें इकट्ठी आती हैं (खंडवा वाली release इसका उदाहरण है), तो passbook में ₹4,000
        की एक साथ entry देखकर उलझिए मत।
      </p>

      <SH>कौन eligible है?</SH>
      <StepList>
        <SI n={1}>किसान <strong>मध्य प्रदेश का निवासी</strong> हो और खेती की जमीन हो।</SI>
        <SI n={2}><strong>PM Kisan Samman Nidhi का verified beneficiary</strong> हो — यही मुख्य शर्त है।</SI>
        <SI n={3}>PM Kisan के exclusion rules यहां भी लागू — income tax payer, सरकारी कर्मचारी, ₹10,000+ pension वाले बाहर।</SI>
        <SI n={4}><strong>eKYC पूरी</strong> हो — बिना इसके दोनों योजनाओं का पैसा रुकता है।</SI>
      </StepList>
      <p>
        यानी checklist छोटी है। PM Kisan में नाम + पटवारी verification + eKYC = राज्य की किस्त का रास्ता
        साफ। PM Kisan की eligibility का पूरा नक्शा{' '}
        <Link href="/articles/PmKisanMasterGuide2026">Master Guide पर खुलेगा</Link>।
      </p>

      <SH>आवेदन कैसे होता है?</SH>
      <p>
        ज्यादातर किसानों के लिए जवाब है — <strong>करना ही नहीं पड़ता</strong>। जो पहले से PM Kisan beneficiary
        हैं, वो अपने आप योजना में शामिल हैं। नए किसान के लिए क्रम यह है:
      </p>
      <StepList>
        <SI n={1}>
          पहले PM Kisan में registration — अब Farmer ID (AgriStack) के साथ process चलती है। MP का portal
          इसमें राज्य के record से जुड़ा है।
        </SI>
        <SI n={2}>पटवारी आपके land record और details verify करता है।</SI>
        <SI n={3}>eKYC और बैंक की NPCI आधार seeding पूरी करें।</SI>
        <SI n={4}>
          PM Kisan में beneficiary status active होते ही किसान कल्याण योजना की अगली किस्त में नाम जुड़ जाता
          है।
        </SI>
      </StepList>
      <WB>
        जहां ज्यादातर cases अटकते हैं — <strong>पटवारी verification</strong>। Form भर गया, महीनों से
        &quot;verification pending&quot;। ऐसे में portal refresh करते रहने से कुछ नहीं होगा; अपने हल्का के
        पटवारी या तहसील कार्यालय जाकर मिलिए। Records की physical जांच वहीं होती है।
      </WB>

      <SH>Status check — दो portal, दो काम</SH>
      <p>यहां लोग सबसे ज्यादा उलझते हैं, तो सीधा बंटवारा समझ लीजिए:</p>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] p-2 text-left">क्या देखना है</th>
              <th className="border border-[var(--color-border)] p-2 text-left">कहां देखना है</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] p-2">केंद्र की किस्तें (PM Kisan ₹2,000)</td>
              <td className="border border-[var(--color-border)] p-2">pmkisan.gov.in → Know Your Status</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2">राज्य की किस्तें (किसान कल्याण)</td>
              <td className="border border-[var(--color-border)] p-2">saara.mp.gov.in → CM Kisan Kalyan section</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2">गांव की पूरी beneficiary list</td>
              <td className="border border-[var(--color-border)] p-2">pmkisan.gov.in → Beneficiary List (राज्य→जिला→गांव)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Saara portal पर आधार नंबर या PM Kisan ID से अपनी entry ढूंढ सकते हैं। Village-wise list कैसे निकालते हैं, यह{' '}
        <Link href="/articles/PmKisanBeneficiaryList2026">अलग से समझाया है</Link>।
      </p>

      <GovLink
        href="https://saara.mp.gov.in"
        label="SAARA Portal — CM Kisan Kalyan Yojana (MP)"
        guide="saara.mp.gov.in खोलें"
        portalName="saara.mp.gov.in"
      />

      <SH>पटवारी verification — असली दरवाजा, असली रुकावट</SH>
      <p>
        इस योजना में जो काम online form नहीं कर सकता, वह पटवारी की कलम करती है। पटवारी के पास
        जाते समय तीन चीजें साथ रखें — <strong>खसरा/खतौनी की नकल</strong> (जिसमें आपका नाम और रकबा
        दिखे), <strong>आधार card</strong>, और <strong>बैंक passbook</strong>। सबसे ज्यादा मामले तीन
        गड़बड़ियों पर अटकते हैं: आधार और खतौनी में नाम की spelling अलग (रामसिंह vs राम सिंह जैसा
        फर्क भी काफी है), जमीन का रकबा record से न मिलना, और विरासत के बाद नामांतरण न होना।
        तीनों का इलाज पटवारी-तहसील के स्तर पर ही है — कोई helpline या portal यह आपके लिए नहीं कर
        सकता।
      </p>
      <p>
        एक व्यावहारिक सलाह — पटवारी से मिलने का सबसे सही समय वह है जब वह आपके हल्के में बैठता है
        (हर पटवारी के पास कई गांव होते हैं)। गांव के कोटवार या पंचायत सचिव से उसका दिन पूछ लें —
        तहसील के चक्कर बच जाएंगे। और जो भी कागज दें, उसकी एक copy अपने पास रखें — “कागज खो गया,
        दोबारा लाओ” सरकारी काम की सबसे पुरानी देरी है।
      </p>

      <SH>Exclusion नियम — कौन बाहर है, और क्यों जानना जरूरी है</SH>
      <p>
        यह section इसलिए ध्यान से पढ़िए क्योंकि गलती से लिया गया पैसा बाद में वापस मांगा जाता है।
        परिवार में कोई income tax भरता हो, कोई सरकारी नौकरी में हो (चतुर्थ श्रेणी को छोड़कर),
        ₹10,000 से ज्यादा pension पाता हो, या कोई डॉक्टर-वकील-CA जैसे पेशे में registered हो — तो
        परिवार दोनों योजनाओं से बाहर है। गांव में कई बार बेटे की नौकरी लगने के बाद भी पिता की किस्त
        चलती रहती है — बेटा अलग परिवार (अलग राशन card, अलग घर) है तो दिक्कत नहीं; एक ही परिवार
        इकाई में है तो जोखिम है। शक हो तो खुद समपर्पण (voluntary surrender) का विकल्प pmkisan portal
        पर है — यह वसूली notice से हमेशा सस्ता पड़ता है।
      </p>

      <SH>बजट की तरफ से भरोसा कितना पक्का है?</SH>
      <p>
        किसान का एक जायज सवाल — कहीं योजना बंद तो नहीं हो जाएगी? इसका जवाब बजट में है। राज्य के 2024-25
        के बजट में इस योजना के लिए करीब <strong>₹4,900 करोड़</strong> का प्रावधान रखा गया था — यानी 80+ लाख
        किसानों को ₹6,000 देने का पूरा इंतजाम कागज पर पहले से बुक है। जो योजना हर साल बजट line-item बन
        चुकी हो और जिसमें ₹17,500 करोड़ से ज्यादा जा चुका हो, उसे रातोंरात बंद करना किसी भी सरकार के लिए
        राजनीतिक रूप से लगभग नामुमकिन है। हां, रकम और किस्तों का pattern बदल सकता है — जैसे ₹4,000 से
        ₹6,000 हुआ था, आगे भी घोषणाएं आ सकती हैं। इसलिए rule यह रखिए: रकम की कोई भी नई खबर official
        घोषणा या बड़े media house की report से confirm करके ही मानें, WhatsApp forward से नहीं।
      </p>

      <SH>₹12,000 का सही इस्तेमाल — एक किसान का हिसाब</SH>
      <p>
        ₹12,000 से खेती नहीं चलती — यह सच है। पर इसका समझदारी से इस्तेमाल फर्क जरूर डालता है।
        सबसे अच्छा इस्तेमाल वह है जो खर्च को कर्ज बनने से रोक दे — बुवाई के समय बीज-खाद की नकद
        खरीद (उधार की दुकान से महंगा पड़ता है), KCC की किस्त समय पर भरना (ताकि 4% वाली सस्ती
        दर बनी रहे), या बच्चों की school fees जैसा तय खर्च। किस्त आते ही खर्च हो जाने वाली रकम नहीं,
        योजना से आई रकम को खेती के एक तय काम से जोड़ देना — यही छोटी आदत साल भर में बड़ा फर्क
        लाती है।
      </p>

      <SH>आम गलतियां जो महीनों की देरी करा देती हैं</SH>
      <p>
        <strong>गलती 1 — दो बैंक खातों का घालमेल।</strong> Form में एक खाता लिखा, NPCI seeding दूसरे खाते
        में है — पैसा seeded खाते में ही जाएगा। किसान पहले खाते की passbook देखकर कहता रहता है “आया ही
        नहीं” — जबकि रकम दूसरे खाते में पड़ी है।
      </p>
      <p>
        <strong>गलती 2 — पुराना mobile number।</strong> आधार से linked नंबर बंद हो गया तो OTP नहीं आएगा —
        न status दिखेगा, न eKYC होगी। पहले आधार केंद्र जाकर नया नंबर link कराएं, फिर बाकी सब।
      </p>
      <p>
        <strong>गलती 3 — “एक बार हो गया, अब हमेशा चलेगा” वाला भरोसा।</strong> Land record में कोई भी बदलाव
        (बंटवारा, बिक्री, नामांतरण) किस्त रोक सकता है। रिकॉर्ड बदले तो उसी महीने PM Kisan में update
        कराना आपकी जिम्मेदारी है — system खुद नहीं पकड़ता, सिर्फ किस्त रोकता है।
      </p>
      <p>
        <strong>गलती 4 — agent को “किस्त निकलवाने” के पैसे देना।</strong> राज्य योजना में ऐसी कोई “फीस” नहीं
        है — न registration की, न verification की। जो भी पैसे मांगे, समझ जाइए कि वह आपकी जानकारी की कमी
        बेच रहा है। और OTP तो किसी को भी नहीं — पटवारी को भी आपके phone का OTP नहीं चाहिए होता।
      </p>

      <SH>पैसा नहीं आया — किस order में जांच करें?</SH>
      <p>
        एक MP के किसान का किस्सा सुनिए — PM Kisan की किस्तें time से आ रही थीं, लेकिन राज्य वाली एक साल से
        गायब। सबको लगा portal की गड़बड़ है। तहसील में पता चला कि पटवारी verification में जमीन का रकबा
        mismatch था — PM Kisan केंद्र से चल रही थी, राज्य की entry अटकी थी। रकबा ठीक कराया, अगली release में
        पैसा आ गया। सीख: <strong>दोनों योजनाओं की जांच अलग-अलग होती है</strong>।
      </p>
      <StepList>
        <SI n={1}>पहले pmkisan.gov.in पर देखें — eKYC, land seeding, bank seeding तीनों YES हैं?</SI>
        <SI n={2}>तीनों YES और PM Kisan आ रही है? तो मामला राज्य की तरफ है — saara portal पर status देखें।</SI>
        <SI n={3}>वहां pending/reject दिखे तो पटवारी या तहसील कार्यालय — यही असली desk है।</SI>
        <SI n={4}>
          PM Kisan भी नहीं आ रही? तो पहले उसे ठीक करें —{' '}
          <Link href="/articles/PmKisanPaymentFailedFix2026">payment failed guide</Link> से शुरुआत करें।
          केंद्र वाली ठीक हुए बिना राज्य वाली नहीं आएगी।
        </SI>
      </StepList>
      <p>
        और एक honest बात — राज्य की किस्तें कभी-कभी schedule से late होती हैं, बजट release के हिसाब से।
        ऐसे में आपकी तरफ से कोई गलती नहीं होती; इंतजार ही इलाज है। घबराकर बिचौलियों के पास मत जाइए।
      </p>

      <SH>नए किसान के लिए document checklist — एक ही बार में सब तैयार</SH>
      <p>
        सबसे ज्यादा चक्कर इसीलिए लगते हैं कि कागज एक-एक करके निकाले जाते हैं। पहली बार registration से
        पहले ये सब एक folder में रख लीजिए:
      </p>
      <StepList>
        <SI n={1}>
          <strong>आधार card</strong> — उस mobile नंबर के साथ जो आज चालू है। नंबर बंद है तो पहला काम आधार
          केंद्र पर नया नंबर link कराना है — बाकी सब इसी पर टिका है।
        </SI>
        <SI n={2}>
          <strong>खसरा/खतौनी की ताजा नकल</strong> — MP में यह mpbhulekh.gov.in से online भी निकलती है। नाम की
          spelling आधार से मिलाकर देख लें — फर्क है तो पहले सुधार कराएं, फिर form भरें।
        </SI>
        <SI n={3}>
          <strong>बैंक passbook</strong> — उसी खाते की जिसमें NPCI आधार seeding है या करानी है। जनधन खातों में
          limit का ध्यान रखें — कई बार पुराने dormant खाते में पैसा जाकर फंसा रहता है।
        </SI>
        <SI n={4}>
          <strong>Farmer ID (AgriStack)</strong> — नए registration अब इसी से जुड़े हैं। CSC या पटवारी के माध्यम
          से बनती है; पूरा तरीका <Link href="/articles/hindi/farmer-id-kaise-banaye">इस page पर अलग से</Link> है।
        </SI>
      </StepList>
      <p>
        यह folder बनाने में एक दिन लगता है, और यही एक दिन आगे के छह महीने के चक्कर बचाता है। CSC पर
        जाएं तो सब कागज original + photocopy दोनों लेकर जाएं — आधे center scan खुद करते हैं, आधे copy मांगते हैं।
      </p>

      <SH>जानकारी के काम की बातें — सवालों में</SH>
      <FAQBlock faqs={FAQS} />

      <p className="text-xs text-[var(--color-text-muted)] italic">
        यह सब कहां से पता चला — योजना की जानकारी MP शासन की घोषणाओं (राशि ₹4,000 से बढ़ाकर ₹6,000 —
        CM का सार्वजनिक बयान, IANS coverage) से ली गई है, और process{' '}
        <a href="https://saara.mp.gov.in" target="_blank" rel="noopener noreferrer">saara.mp.gov.in</a> तथा{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> से मिलाया
        गया है ({new Date(article.modifiedTime).toLocaleDateString('hi-IN')} तक)। किस्तों का schedule सरकार के
        हाथ में है — exact dates official घोषणा से ही confirm करें।
      </p>

      <RelatedArticles articles={RELATED} />
    </>
  );
}
