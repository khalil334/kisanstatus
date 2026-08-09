import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, DB, StepList, SI, CalcBanner, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: 'आधार बैंक से link है, फिर भी पैसा क्यों नहीं आया?',
    a: 'Link होना और NPCI mapper में seeded होना — दो अलग चीजें हैं। Link सिर्फ KYC है; DBT का पैसा NPCI mapper देखकर जाता है। बैंक जाकर साफ शब्दों में कहें: "आधार seeding NPCI mapper में करनी है, DBT के लिए" — सिर्फ "link कर दो" कहने पर कई बार आधा काम होता है।',
  },
  {
    q: 'मेरे दो बैंक खाते हैं — पैसा किसमें आएगा?',
    a: 'उसी में जो NPCI mapper में सबसे बाद में (last seeded) दर्ज हुआ है। आधार कई खातों से link हो सकता है, पर DBT के लिए active mapping एक ही खाते की होती है। कौन सा खाता active है, यह myAadhaar के Bank Seeding Status से दिख जाता है।',
  },
  {
    q: 'Seeding status "Inactive" दिखा रहा है — क्या करूं?',
    a: 'अपने बैंक की शाखा जाकर Aadhaar Seeding Consent Form भरें और DBT enable करने को कहें। खाता बंद/frozen हो तो पहले उसे चालू कराना होगा। Form जमा करने के कुछ दिन बाद status दोबारा जांचें।',
  },
  {
    q: 'SMS से status देखने का कोई तरीका?',
    a: 'हां — आधार-registered mobile से *99*99*1# dial करें, आधार number भरें। यह USSD सेवा बता देती है कि आधार किसी खाते से mapped है या नहीं। बिना internet वाले phone पर भी चलती है।',
  },
  {
    q: 'खाता बदलना है — पुराने की जगह नए खाते में पैसा चाहिए?',
    a: 'नए बैंक में seeding consent form भरकर NPCI mapper में नया खाता seed करवा दें — आखिरी seeded खाता ही active हो जाता है, पुराना अपने आप हट जाता है। Portal के record में खाता बदलने की अलग प्रक्रिया हमारी bank account change guide में है।',
  },
  {
    q: 'Post Office / India Post Payments Bank का खाता चलेगा?',
    a: 'चलेगा — IPPB खाते भी NPCI mapper से जुड़ते हैं और कई किसान उसी में किस्त पाते हैं। शर्त वही है: उस खाते की आधार seeding active होनी चाहिए।',
  },
  {
    q: 'Seeding form जमा कर दिया — कितने दिन में active होगा?',
    a: 'बैंक-दर-बैंक अलग है। शाखा से request NPCI तक पहुंचने और mapper में दर्ज होने में आम तौर पर कुछ कार्यदिवस लगते हैं। पक्का जवाब वही है जो screen पर दिखे — form जमा करने के हफ्ते भर बाद myAadhaar पर Bank Seeding Status खोलकर खुद देख लें। Active दिखे और बैंक का नाम सही हो, तो काम हो गया।',
  },
  {
    q: 'बैंक वाले कह रहे हैं "हमारी तरफ से हो गया", पर status अब भी Inactive है?',
    a: 'ऐसा होता है — शाखा अपने system में entry कर देती है, पर NPCI तक request pending रह जाती है या reject हो जाती है। Acknowledgement number लेकर दोबारा शाखा जाएं और कहें कि NPCI mapper में status Inactive दिख रहा है, request का हाल बताएं। बात न बने तो बैंक की customer care या शिकायत portal पर उसी reference number से complaint डालें।',
  },
  {
    q: 'जिस खाते में seeding है, वह बंद हो गया — अब पैसा कहां जाएगा?',
    a: 'बंद खाते में transfer fail हो जाता है और किस्त अटक जाती है। जल्दी से किसी चालू खाते में seeding करवाएं — नया खाता seed होते ही mapper में वही active हो जाएगा। Fail हुई किस्त सुधार के बाद के भुगतान-चक्र में process होती है, इसलिए देर न करें।',
  },
  {
    q: 'क्या seeding के लिए कोई fees लगती है?',
    a: 'नहीं — बैंक में आधार seeding consent form भरना एक सामान्य बैंकिंग सेवा है। कोई व्यक्ति seeding "करवाने" के पैसे मांगे, OTP पूछे या आधार-बैंक details phone पर मांगे — तो वह ठग है, बैंक नहीं।',
  },
  {
    q: 'Joint account (संयुक्त खाता) में DBT का पैसा आ सकता है?',
    a: 'DBT के लिए बेहतर यही है कि खाता आपके अपने नाम का हो और उसी में आपका आधार seeded हो। Joint खाते में seeding को लेकर बैंकों का व्यवहार अलग-अलग है — अपनी शाखा से पूछकर ही तय करें। उलझन से बचना हो तो single account ही seed करवाएं।',
  },
  {
    q: 'आधार में mobile number registered नहीं है — myAadhaar का OTP कैसे आएगा?',
    a: 'नहीं आएगा — OTP सिर्फ आधार-registered mobile पर जाता है। पहले नजदीकी Aadhaar Seva Kendra जाकर आधार में mobile number update करवाएं, फिर myAadhaar से status देख पाएंगे। तब तक बैंक शाखा से पूछकर भी seeding की स्थिति पता की जा सकती है।',
  },
];

const RELATED = [
  { slug: 'PmKisanBankAccountChangeProcess', title: 'Bank Account Change Process', emoji: '🏦' },
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed — Fix Guide', emoji: '🛠️' },
  { slug: 'hindi/payment-stopped-by-state', title: 'Payment Stopped by State', emoji: '⛔' },
  { slug: 'hindi/status-check-mobile-se', title: 'मोबाइल से स्टेटस चेक', emoji: '📱' },
];

export default function NpciAadhaarSeedingDbtPayment({ article }: { article: HindiArticle }) {
  return (
    <>
      <p>
        हमारे एक पाठक की कहानी सुनिए। eKYC पूरी, जमीन का record सही, beneficiary list में नाम — फिर भी दो
        किस्तें नहीं आईं। बैंक गए तो बोले "आधार तो linked है।" Portal पर शिकायत की तो जवाब आया — Aadhaar
        not seeded with NPCI। यहीं पर ज्यादातर किसान उलझते हैं, क्योंकि <em>link</em> और <em>seeding</em>{' '}
        सुनने में एक जैसे लगते हैं, होते अलग हैं।
      </p>
      <p>
        इस guide में हम यही गांठ खोलेंगे — link और seeding का फर्क, अपना mapping status घर बैठे देखने के
        दो तरीके (एक बिना internet वाला भी), बैंक में जाकर ठीक-ठीक क्या बोलना है, और वे गलतियां जिनकी वजह से
        form भरने के बाद भी status Inactive रह जाता है। पूरा पढ़ लेंगे तो बैंक के तीन चक्कर बचेंगे, यह हमारा
        अनुभव कहता है।
      </p>

      <SH>पहले यह फर्क समझ लीजिए — बाकी सब आसान है</SH>
      <p>
        बैंक में आधार link होना KYC की जरूरत है — इससे खाता चलता रहता है। लेकिन सरकारी पैसा (DBT) भेजने
        वाला system — NPCI का Aadhaar Payment Bridge — बैंक का record नहीं देखता। वह NPCI mapper
        देखता है: एक central सूची, जिसमें दर्ज होता है कि आपके आधार का DBT-पैसा किस बैंक में जाएगा। आपका
        आधार चाहे तीन खातों से linked हो, mapper में active entry एक ही होती है — जो खाता{' '}
        <strong>सबसे बाद में seed</strong> हुआ, वही।
      </p>
      <p>
        एक छोटी सी तुलना से बात और साफ हो जाएगी। गांव में आपके नाम के तीन घर हो सकते हैं, पर सरकारी चिट्ठी
        उसी पते पर आती है जो सरकारी register में लिखा है। बैंक-link तीन घरों जैसा है; NPCI mapper वह
        register है। चिट्ठी (यानी किस्त) कहां पहुंचेगी, यह register तय करता है — घरों की गिनती नहीं।
      </p>

      <SH>Link vs Seeding — एक नजर में</SH>
      <div className="my-4 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] px-3 py-2 text-left">सवाल</th>
              <th className="border border-[var(--color-border)] px-3 py-2 text-left">आधार Link (KYC)</th>
              <th className="border border-[var(--color-border)] px-3 py-2 text-left">NPCI Seeding (DBT)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">किसके लिए जरूरी?</td>
              <td className="border border-[var(--color-border)] px-3 py-2">खाता चालू रखने के लिए</td>
              <td className="border border-[var(--color-border)] px-3 py-2">सरकारी पैसा (DBT) पाने के लिए</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">Record कहां रहता है?</td>
              <td className="border border-[var(--color-border)] px-3 py-2">सिर्फ आपके बैंक के पास</td>
              <td className="border border-[var(--color-border)] px-3 py-2">NPCI के central mapper में</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">कितने खातों में हो सकता है?</td>
              <td className="border border-[var(--color-border)] px-3 py-2">कई खातों में एक साथ</td>
              <td className="border border-[var(--color-border)] px-3 py-2">Active सिर्फ एक — आखिरी seeded खाता</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">कैसे जांचें?</td>
              <td className="border border-[var(--color-border)] px-3 py-2">बैंक passbook / शाखा से</td>
              <td className="border border-[var(--color-border)] px-3 py-2">myAadhaar → Bank Seeding Status, या *99*99*1#</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">किस्त न आने से रिश्ता</td>
              <td className="border border-[var(--color-border)] px-3 py-2">सीधा नहीं</td>
              <td className="border border-[var(--color-border)] px-3 py-2">सीधा — Inactive यानी भुगतान fail</td>
            </tr>
          </tbody>
        </table>
      </div>

      <IB>
        इसीलिए portal पर payment failure के record में सबसे आम कारणों में एक यही लिखा मिलता है — Aadhaar
        seeding inactive या खाता बंद। किस्त release होने से पहले यह जांच 5 मिनट की है, और बाद में शिकायत
        महीनों की।
      </IB>

      <SH>Step 1 — अभी कौन सा खाता mapped है, यह देखें</SH>
      <StepList>
        <SI n={1}>
          <a href="https://myaadhaar.uidai.gov.in" target="_blank" rel="noopener noreferrer">
            myaadhaar.uidai.gov.in
          </a>{' '}
          खोलें और login करें (आधार number + OTP — OTP आधार-registered mobile पर आएगा)।
        </SI>
        <SI n={2}>अंदर <strong>Bank Seeding Status</strong> का विकल्प चुनें।</SI>
        <SI n={3}>
          Screen पर दिखेगा — कौन सा बैंक mapped है, seeding active है या inactive, और किस तारीख से।
        </SI>
        <SI n={4}>
          Internet नहीं है? आधार-registered mobile से <strong>*99*99*1#</strong> dial करके भी यही जानकारी
          मिल जाती है।
        </SI>
      </StepList>
      <p>
        Screen पर जो दिखे, उसे पढ़ने का तरीका सीधा है। बैंक का नाम <strong>वही</strong> है जिस खाते में पैसा
        चाहिए और status <strong>Active</strong> है — तो seeding की तरफ से रास्ता साफ है; किस्त फिर भी न आए
        तो वजह कहीं और है (eKYC, जमीन record, या राज्य की जांच)। बैंक का नाम <strong>दूसरा</strong> है — तो
        पैसा उसी दूसरे बैंक में जा रहा है, अपनी पुरानी passbook निकालकर देखिए। Status{' '}
        <strong>Inactive</strong> है या कोई record ही नहीं — तो नीचे Step 2 आपके लिए है।
      </p>

      <DB>
        NPCI का BASE portal (Bharat Aadhaar Seeding Enabler) mapping history भी दिखाता है — यानी आपका
        आधार पहले किन-किन बैंकों से mapped रहा। खाता बदलने के बाद पैसा पुराने बैंक में चला जाए, तो यह history
        गुत्थी सुलझा देती है।
      </DB>

      <SH>Step 2 — seeding करानी है या ठीक करानी है, तो यह तरीका</SH>
      <p>
        Seeding की request आपका <strong>बैंक</strong> ही NPCI तक पहुंचाता है — इसलिए मुख्य रास्ता शाखा से
        होकर जाता है:
      </p>
      <StepList>
        <SI n={1}>
          उस बैंक की शाखा जाएं जिस खाते में पैसा चाहिए। साथ में आधार card, passbook और आधार-registered
          mobile।
        </SI>
        <SI n={2}>
          <strong>Aadhaar Seeding / DBT Consent Form</strong> मांगें (कुछ बैंक इसे mandate form कहते हैं)।
          इसमें लिखित सहमति होती है — बिना consent के बैंक seeding कर ही नहीं सकता।
        </SI>
        <SI n={3}>Form भरकर जमा करें और <strong>acknowledgement/reference number जरूर लें</strong>।</SI>
        <SI n={4}>
          3-7 कार्यदिवस बाद Step 1 वाला तरीका दोहराकर पक्का करें कि status <strong>Active</strong> हो गया
          और बैंक का नाम वही है।
        </SI>
      </StepList>
      <p>
        कई बैंकों में यह काम net-banking या NPCI के BASE portal से online भी हो जाता है — पर हर बैंक में
        नहीं। शाखा वाला रास्ता हर जगह चलता है, इसलिए वही मुख्य बताया है।
      </p>

      <SH>Counter पर ठीक-ठीक क्या बोलें — शब्द तैयार रखिए</SH>
      <p>
        शाखा में आधी लड़ाई शब्दों की है। "आधार link कर दो" कहने पर staff अक्सर KYC-link करके भेज देता है —
        और mapper में entry हुए बिना किस्त वहीं की वहीं अटकी रहती है। इसलिए counter पर यह कहिए:
      </p>
      <IB>
        "मुझे इस खाते में <strong>NPCI mapper में आधार seeding</strong> करवानी है, <strong>DBT भुगतान</strong> के
        लिए। Consent form दे दीजिए, और जमा होने पर acknowledgement number भी।"
      </IB>
      <p>
        इतना कहते ही staff समझ जाता है कि काम KYC का नहीं, mapper का है। Form भरते समय आधार number,
        खाता number और नाम की spelling तीनों दो बार मिलाइए — form में एक अंक की चूक पूरी request reject
        करवा देती है। और acknowledgement number इसलिए, कि हफ्ते बाद status न बदले तो आपके पास पूछताछ का
        ठोस सहारा हो — "मैंने कहा था" से बात नहीं बनती, reference number से बनती है।
      </p>

      <WB>
        ध्यान रहे — seeding के नाम पर OTP मांगने वाले phone call ठगी होते हैं। यह काम या तो आप खुद
        myAadhaar/बैंक की app पर करते हैं, या बैंक शाखा में। कोई अनजान व्यक्ति call करके seeding "करवा"
        नहीं सकता। न कोई fees लगती है, न किसी दलाल की जरूरत है।
      </WB>

      <SH>Form भरने के बाद भी Inactive? — ये 4 अड़चनें देखिए</SH>
      <p>
        यह हिस्सा उन किसानों के लिए है जो कह रहे हैं — "seeding तो करवा ली थी, फिर भी वही हाल।" अनुभव में
        चार अड़चनें बार-बार मिलती हैं:
      </p>
      <p>
        <strong>1. Request शाखा में ही रह गई।</strong> Staff ने अपने system में entry की, पर NPCI तक
        request गई ही नहीं या रास्ते में reject हो गई। इलाज — acknowledgement number लेकर शाखा से request
        का हाल पूछें, जरूरत हो तो दोबारा भिजवाएं।
      </p>
      <p>
        <strong>2. नाम का मिलान नहीं बैठा।</strong> आधार में नाम कुछ और, बैंक record में कुछ और — बीच में
        request अटक जाती है। इलाज — जो record गलत है उसे सुधरवाएं (बैंक में नाम सुधार आसान है, आधार में
        सुधार Aadhaar Seva Kendra से), फिर seeding दोबारा करवाएं।
      </p>
      <p>
        <strong>3. खाता ही सोया पड़ा है।</strong> लंबे समय से लेन-देन न हो तो खाता dormant/frozen हो जाता
        है, और ऐसे खाते पर seeding टिकती नहीं। इलाज — पहले शाखा जाकर खाता re-activate करवाएं (KYC
        दस्तावेज साथ रखें), फिर consent form भरें।
      </p>
      <p>
        <strong>4. Seeding दूसरे खाते ने "छीन" ली।</strong> आपने खाता A में seeding करवाई, बाद में किसी
        काम से (या CSC/बैंक की चूक से) खाता B seed हो गया — mapper में B active हो गया और A अपने आप
        हट गया। इलाज — Step 1 से देखें कि अभी कौन सा बैंक mapped है, और जिस खाते में पैसा चाहिए उसी में
        ताजा seeding करवाएं। BASE की mapping history यहां बड़े काम की है।
      </p>

      <SH>किस्त के मौसम से पहले की 3-मिनट जांच</SH>
      <p>
        हर बार status देखने का सबसे सस्ता समय वह है जब किस्त <em>आने वाली</em> हो, आ चुकने के बाद नहीं। तीन
        चीजें मिला लीजिए: myAadhaar पर Bank Seeding Status <strong>Active</strong> हो; mapped बैंक{' '}
        <strong>वही</strong> हो जिसकी passbook आपके पास है; और वह खाता <strong>चालू</strong> हो — छह महीने
        में एक बार भी लेन-देन कर लेने से खाता dormant नहीं होता। यह जांच घर बैठे हो जाती है और ज्यादातर
        payment-failure वहीं पकड़ में आ जाते हैं।
      </p>

      <CalcBanner />

      <SH>Seeding हो गई — अब आगे क्या?</SH>
      <p>
        Mapper में खाता active हो जाने के बाद बची हुई कड़ियां जांच लें। योजना के record में eKYC पूरी हो (
        <Link href="/articles/hindi/ekyc-mobile-se">phone से करने का तरीका</Link>), और अगर पिछला भुगतान
        fail हुआ था तो उसका status देखें — कई राज्यों में सुधार के बाद रुका पैसा अगली किस्त के साथ आ जाता
        है। भुगतान अटकने की बाकी वजहें और इलाज{' '}
        <Link href="/articles/PmKisanPaymentFailedFix2026">Payment Failed guide</Link> में एक जगह लिखे हैं।
        और अगर status में "Payment Stopped by State" जैसा message है, तो वह अलग मामला है —{' '}
        <Link href="/articles/hindi/payment-stopped-by-state">उसकी guide यहां</Link> है।
      </p>
      <p>
        एक आखिरी बात, जो अनुभव से कहते हैं — seeding एक बार की चीज नहीं, एक <em>स्थिति</em> है। खाता
        बदला, बैंक merge हुआ, खाता dormant हुआ — किसी भी घटना से mapping बदल या टूट सकती है। इसलिए साल
        में दो बार, बुवाई और कटाई की तरह, myAadhaar खोलकर 2 मिनट का status-check कर लेने की आदत बना
        लीजिए। जितनी मेहनत खेत के कागज संभालने में लगाते हैं, उसका सौवां हिस्सा इस digital कागज पर भी लगा
        दें — किस्त अटकने की सबसे आम वजह से हमेशा के लिए छुट्टी।
      </p>

      <SH>अक्सर पूछे जाने वाले सवाल</SH>
      <FAQBlock faqs={FAQS} />

      <p className="text-xs text-[var(--color-text-muted)] italic">
        Source: Bank Seeding Status की प्रक्रिया{' '}
        <a href="https://uidai.gov.in" target="_blank" rel="noopener noreferrer">uidai.gov.in</a> /
        myAadhaar portal पर आधारित; NPCI mapper और BASE की जानकारी{' '}
        <a href="https://www.npci.org.in" target="_blank" rel="noopener noreferrer">npci.org.in</a> से; DBT
        व्यवस्था{' '}
        <a href="https://dbtbharat.gov.in" target="_blank" rel="noopener noreferrer">dbtbharat.gov.in</a>।
        बैंक-दर-बैंक form का नाम और online सुविधा अलग हो सकती है। Last verified:{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')}.
      </p>

      <RelatedArticles articles={RELATED} />
    </>
  );
}
