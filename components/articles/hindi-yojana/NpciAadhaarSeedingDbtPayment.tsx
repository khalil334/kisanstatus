import Link from 'next/link';
import Image from 'next/image';
import type { HindiArticle } from '@/lib/hindi-articles-data';

const FAQS = [
  {
    q: 'आधार बैंक से link है, फिर भी पैसा क्यों नहीं आया?',
    a: 'Link होना और NPCI mapper में seeded होना — दो अलग चीजें हैं। Link सिर्फ KYC है; DBT का पैसा NPCI mapper देखकर जाता है। बैंक जाकर साफ शब्दों में कहें: "आधार seeding NPCI mapper में करनी है, DBT के लिए" — सिर्फ "link कर दो" कहने पर कई बार आधा काम होता है।',
  },
  {
    q: 'मेरे दो बैंक खाते हैं — पैसा किसमें आएगा?',
    a: 'उसी में जो NPCI mapper में आखिर में (last seeded) दर्ज हुआ है। आधार कई खातों से link हो सकता है, पर DBT के लिए active mapping एक ही खाते की होती है। कौन सा खाता active है, यह myAadhaar के Bank Seeding Status से दिख जाता है।',
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
    a: 'नए बैंक में seeding consent form भरकर NPCI mapper में नया खाता seed करवा दें — आखिरी seeded खाता ही active हो जाता है, पुराना अपने आप हट जाता है। Portal के record में खाता बदलने की अलग प्रक्रिया है — उसका पूरा ब्योरा bank account change वाले page पर है।',
  },
  {
    q: 'Post Office / India Post Payments Bank का खाता चलेगा?',
    a: 'चलेगा — IPPB खाते भी NPCI mapper से जुड़ते हैं और कई किसान उसी में किस्त पाते हैं। शर्त एक ही है: उस खाते की आधार seeding active होनी चाहिए।',
  },
  {
    q: 'Seeding form जमा कर दिया — कितने दिन में active होगा?',
    a: 'बैंक-दर-बैंक अलग है। शाखा से request NPCI तक पहुंचने और mapper में दर्ज होने में आम तौर पर कुछ कार्यदिवस लगते हैं। पक्का जवाब वह है जो screen पर दिखे — form जमा करने के हफ्ते भर बाद myAadhaar पर Bank Seeding Status खोलकर खुद देख लें। Active दिखे और बैंक का नाम सही हो, तो काम हो गया।',
  },
  {
    q: 'बैंक वाले कह रहे हैं "हमारी तरफ से हो गया", पर status अब भी Inactive है?',
    a: 'ऐसा होता है — शाखा अपने system में entry कर देती है, पर NPCI तक request pending रह जाती है या reject हो जाती है। Acknowledgement number लेकर दोबारा शाखा जाएं और कहें कि NPCI mapper में status Inactive दिख रहा है, request का हाल बताएं। बात न बने तो बैंक की customer care या शिकायत portal पर उसी reference number से complaint डालें।',
  },
  {
    q: 'जिस खाते में seeding है, वह बंद हो गया — अब पैसा कहां जाएगा?',
    a: 'बंद खाते में transfer fail हो जाता है और किस्त अटक जाती है। जल्दी से किसी चालू खाते में seeding करवाएं — नया खाता seed होते ही mapper में उसी की entry active हो जाएगी। Fail हुई किस्त सुधार के बाद के भुगतान-चक्र में process होती है, देर न करें।',
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

function T2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-black text-[var(--color-text)] mt-8 mb-4 pb-2 border-b-2 border-[var(--color-border)]">
      {children}
    </h2>
  );
}

function Alert({ tone, children }: { tone: 'good' | 'care' | 'grave'; children: React.ReactNode }) {
  const cls =
    tone === 'good'
      ? 'bg-green-50 dark:bg-green-900/20 border-green-600 dark:border-green-500'
      : tone === 'care'
        ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-500'
        : 'bg-red-50 dark:bg-red-900/20 border-red-500';
  return (
    <div className={`my-4 p-4 border-l-4 rounded-r-xl text-sm text-[var(--color-text)] leading-relaxed ${cls}`}>
      {children}
    </div>
  );
}

export default function NpciAadhaarSeedingDbtPayment({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>
        हमारे एक पाठक की कहानी सुनिए। eKYC पूरी, जमीन का record सही, beneficiary list में नाम — फिर भी दो
        किस्तें नहीं आईं। बैंक गए तो बोले "आधार तो linked है।" Portal पर शिकायत की तो जवाब आया — Aadhaar
        not seeded with NPCI। यहीं पर ज्यादातर किसान उलझते हैं, क्योंकि <em>link</em> और <em>seeding</em>{' '}
        सुनने में एक समान लगते हैं, होते अलग हैं।
      </p>
      <p>
        इस लेख में हम यही गांठ खोलेंगे — link और seeding का फर्क, अपना mapping status घर बैठे देखने के दो
        तरीके (एक बिना internet वाला भी), बैंक में जाकर ठीक-ठीक क्या बोलना है, और वे गलतियां जिनकी वजह से
        form भरने के बाद भी status Inactive रह जाता है। पूरा पढ़ लेंगे तो बैंक के तीन चक्कर बचेंगे, यह हमारा
        अनुभव कहता है।
      </p>

      <T2>पहले यह फर्क समझ लीजिए — बाकी सब आसान है</T2>
      <p>
        बैंक में आधार link होना KYC की जरूरत है — इससे खाता चलता रहता है। लेकिन सरकारी पैसा (DBT) भेजने वाला
        system — NPCI का Aadhaar Payment Bridge — बैंक का record नहीं देखता। वह NPCI mapper देखता है: एक
        central सूची, जिसमें दर्ज होता है कि आपके आधार का DBT-पैसा किस बैंक में जाएगा। आपका आधार चाहे तीन
        खातों से linked हो, mapper में active entry एक ही होती है — जो खाता <strong>आखिर में seed</strong>{' '}
        हुआ, बस।
      </p>
      <p>
        एक छोटी सी तुलना से बात और साफ हो जाएगी। गांव में आपके नाम के तीन घर हो सकते हैं, पर सरकारी चिट्ठी
        उसी पते पर आती है जो सरकारी register में लिखा है। बैंक-link तीन घरों की तरह है; NPCI mapper वह
        register है। चिट्ठी (किस्त) कहां पहुंचेगी, यह register तय करता है — घरों की गिनती नहीं।
      </p>

      <Figure
        src="/images/articles/hindi-yojna/npci-seeding/seeding-diagram.webp"
        alt="आधार → NPCI mapper → बैंक खाता — seeding का सीधा diagram"
        caption="DBT का पैसा उसी खाते में जाता है जो NPCI mapper में आधार से जुड़ा है"
      />

      <T2>Link vs Seeding — एक नजर में</T2>
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
              <td className="border border-[var(--color-border)] px-3 py-2">सीधा — Inactive होते ही भुगतान fail</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Alert tone="good">
        Portal पर payment failure के record में आम कारणों में एक यही लिखा मिलता है — Aadhaar seeding
        inactive या खाता बंद। किस्त release होने से पहले यह जांच 5 मिनट की है, और बाद में शिकायत महीनों की।
      </Alert>

      <T2>मामला कितना बड़ा है — आंकड़ों की गवाही</T2>
      <p>
        यह समस्या कोई इक्का-दुक्का मामला नहीं है। 20 जून 2026 को PM Kisan की 23वीं किस्त में{' '}
        <strong>9.44 करोड़+ किसान परिवारों</strong> को करीब ₹18,880 करोड़ गए — पर खबरों के मुताबिक लाखों
        किसान फिर भी खाली हाथ रहे, और कृषि मंत्रालय के आंकड़ों पर आधारित reports बताती हैं कि कारण बजट नहीं,
        किसानों के digital records का mismatch होता है — जिसमें NPCI seeding ऊपर के कारणों में है। सरकार
        खुद मानती है कि fail हुए transaction के आम कारणों में बैंक द्वारा आधार का mapper से हटाया जाना
        (de-seeding), mapping न होना, या खाता बंद होना शामिल है — और सुधार के बाद रुका पैसा अगले
        भुगतान-चक्र में release होता है। आप अकेले नहीं हैं — पर रास्ता आपको खुद ही पकड़ना होगा, क्योंकि
        system सिर्फ किस्त रोकता है, घर आकर बताता नहीं।
      </p>

      <T2>Step 1 — अभी कौन सा खाता mapped है, यह देखें</T2>
      <Figure
        src="/images/articles/hindi-yojna/npci-seeding/status-active.webp"
        alt="Mobile पर आधार seeding का Active status"
        caption="Status Active दिखे तो समझिए DBT का रास्ता साफ है"
      />
      <p>
        <strong>पहला तरीका (internet वाला):</strong>{' '}
        <a href="https://myaadhaar.uidai.gov.in" target="_blank" rel="noopener noreferrer">
          myaadhaar.uidai.gov.in
        </a>{' '}
        खोलें और login करें — आधार number + OTP; OTP आधार-registered mobile पर आएगा। अंदर{' '}
        <strong>Bank Seeding Status</strong> का विकल्प चुनें। Screen पर दिखेगा — कौन सा बैंक mapped है,
        seeding active है या inactive, और किस तारीख से।
      </p>
      <p>
        <strong>दूसरा तरीका (बिना internet):</strong> आधार-registered mobile से <strong>*99*99*1#</strong>{' '}
        dial करके भी यही जानकारी मिल जाती है — keypad phone पर भी।
      </p>
      <p>
        Screen पर जो दिखे, उसे पढ़ने का तरीका सीधा है। बैंक का नाम <strong>उसी खाते का</strong> है जिसमें
        पैसा चाहिए और status <strong>Active</strong> है — तो seeding की तरफ से रास्ता साफ है; किस्त फिर भी
        न आए तो वजह कहीं और है (eKYC, जमीन record, या राज्य की जांच)। बैंक का नाम <strong>दूसरा</strong> है
        — तो पैसा उसी दूसरे बैंक में जा रहा है, अपनी पुरानी passbook निकालकर देखिए। Status{' '}
        <strong>Inactive</strong> है या कोई record ही नहीं — तो नीचे Step 2 आपके लिए है।
      </p>

      <Alert tone="grave">
        NPCI का BASE portal (Bharat Aadhaar Seeding Enabler) mapping history भी दिखाता है — आपका आधार पहले
        किन-किन बैंकों से mapped रहा। खाता बदलने के बाद पैसा पुराने बैंक में चला जाए, तो यह history गुत्थी
        सुलझा देती है।
      </Alert>

      <T2>Step 2 — seeding करानी है या ठीक करानी है, तो यह तरीका</T2>
      <p>
        Seeding की request आपका <strong>बैंक</strong> ही NPCI तक पहुंचाता है — मुख्य रास्ता शाखा से होकर
        जाता है। उस बैंक की शाखा जाएं जिस खाते में पैसा चाहिए; साथ में आधार card, passbook और
        आधार-registered mobile। वहां <strong>Aadhaar Seeding / DBT Consent Form</strong> मांगें (कुछ बैंक
        इसे mandate form कहते हैं) — इसमें लिखित सहमति होती है, बिना consent के बैंक seeding कर ही नहीं
        सकता। Form भरकर जमा करें और <strong>acknowledgement/reference number जरूर लें</strong>। फिर 3-7
        कार्यदिवस बाद Step 1 वाला तरीका दोहराकर पक्का करें कि status <strong>Active</strong> हो गया और बैंक
        का नाम सही है।
      </p>
      <p>
        कई बैंकों में यह काम net-banking या NPCI के BASE portal से online भी हो जाता है — पर हर बैंक में
        नहीं। शाखा वाला रास्ता हर जगह चलता है, उसी को मुख्य बताया है।
      </p>

      <T2>Counter पर ठीक-ठीक क्या बोलें — शब्द तैयार रखिए</T2>
      <Figure
        src="/images/articles/hindi-yojna/npci-seeding/bank-counter.webp"
        alt="बैंक counter पर seeding consent form जमा करता किसान"
        caption="लिखित consent form से ही seeding होती है — मौखिक कहने से नहीं"
      />
      <p>
        शाखा में आधी लड़ाई शब्दों की है। "आधार link कर दो" कहने पर staff अक्सर KYC-link करके भेज देता है —
        और mapper में entry हुए बिना किस्त जहां की तहां अटकी रहती है। Counter पर यह कहिए:
      </p>
      <Alert tone="good">
        "मुझे इस खाते में <strong>NPCI mapper में आधार seeding</strong> करवानी है, <strong>DBT भुगतान</strong>{' '}
        के लिए। Consent form दे दीजिए, और जमा होने पर acknowledgement number भी।"
      </Alert>
      <p>
        इतना कहते ही staff समझ जाता है कि काम KYC का नहीं, mapper का है। Form भरते समय आधार number, खाता
        number और नाम की spelling तीनों दो बार मिलाइए — form में एक अंक की चूक पूरी request reject करवा
        देती है। और acknowledgement number की अहमियत यह है कि हफ्ते बाद status न बदले तो आपके पास पूछताछ का
        ठोस सहारा हो — "मैंने कहा था" से बात नहीं बनती, reference number से बनती है।
      </p>

      <Alert tone="care">
        ध्यान रहे — seeding के नाम पर OTP मांगने वाले phone call ठगी होते हैं। यह काम या तो आप खुद
        myAadhaar/बैंक की app पर करते हैं, या बैंक शाखा में। कोई अनजान व्यक्ति call करके seeding "करवा"
        नहीं सकता। न कोई fees लगती है, न किसी दलाल की जरूरत है।
      </Alert>

      <T2>Form भरने के बाद भी Inactive? — ये 4 अड़चनें देखिए</T2>
      <p>
        यह हिस्सा उन किसानों के लिए है जो कह रहे हैं — "seeding तो करवा ली थी, फिर भी कुछ नहीं बदला।" अनुभव
        में चार अड़चनें बार-बार मिलती हैं:
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
        है, और ऐसे खाते पर seeding टिकती नहीं। इलाज — पहले शाखा जाकर खाता re-activate करवाएं (KYC दस्तावेज
        साथ रखें), फिर consent form भरें।
      </p>
      <p>
        <strong>4. Seeding दूसरे खाते ने "छीन" ली।</strong> आपने खाता A में seeding करवाई, बाद में किसी काम
        से (या CSC/बैंक की चूक से) खाता B seed हो गया — mapper में B active हो गया और A अपने आप हट गया।
        इलाज — Step 1 से देखें कि अभी कौन सा बैंक mapped है, और जिस खाते में पैसा चाहिए उसी में ताजा
        seeding करवाएं। BASE की mapping history यहां बड़े काम की है।
      </p>

      <T2>Status की भाषा पढ़ना सीखिए — आम message</T2>
      <p>
        Portal के Know Your Status में अंग्रेजी के जो message आते हैं, उनकी व्याख्या पहले से पता हो तो आधी
        घबराहट खत्म। <strong>&quot;Aadhaar not seeded in NPCI&quot;</strong> — यही इस पूरे लेख का विषय है;
        सीधे Step 2 पर जाइए। <strong>&quot;Account closed&quot;</strong> — seeded खाता बंद हो चुका है; किसी
        चालू खाते में नई seeding करानी होगी। <strong>&quot;Name mismatch&quot;</strong> — आधार और बैंक
        record के नाम अलग हैं; पहले नाम सुधरवाइए, फिर seeding। और{' '}
        <strong>&quot;Payment Initiated&quot;</strong> दिखे तो कुछ मत कीजिए — पैसा रास्ते में है, FTO
        process होने के बाद भी खाते तक पहुंचने में कुछ कार्यदिवस लगते हैं। 24-48 घंटे बाद status दोबारा
        देखना और बैंक/NPCI के SMS संभालकर रखना — दो आदतें जो शिकायत के वक्त सबूत बनती हैं।
      </p>

      <T2>किस्त के मौसम से पहले की 3-मिनट जांच</T2>
      <p>
        Status देखने का सस्ता समय वह है जब किस्त <em>आने वाली</em> हो, आ चुकने के बाद नहीं। तीन चीजें मिला
        लीजिए: myAadhaar पर Bank Seeding Status <strong>Active</strong> हो; mapped बैंक{' '}
        <strong>उसी passbook वाला</strong> हो जो आपके पास है; और वह खाता <strong>चालू</strong> हो — छह महीने
        में एक बार भी लेन-देन कर लेने से खाता dormant नहीं होता। यह जांच घर बैठे हो जाती है और ज्यादातर
        payment-failure यहीं पकड़ में आ जाते हैं।
      </p>
      <p>
        और एक मौसमी बात — बैंक merge का दौर चल रहा है। जिन किसानों के खाते ऐसे बैंकों में थे जो किसी बड़े
        बैंक में मिल गए (कई ग्रामीण बैंकों का विलय इसका उदाहरण है), उनका IFSC और कभी-कभी खाता नंबर तक बदल
        जाता है। खाता न बदले तो भी mapper की entry पुराने बैंक code पर अटकी रह सकती है। आपके बैंक का merge
        हुआ हो, तो बिना इंतजार किए एक बार myAadhaar पर seeding status देख लें — नए बैंक का नाम दिखे तो सब
        ठीक, पुराना दिखे तो नई शाखा में consent form भरकर ताजा seeding करा लें।
      </p>

      <div className="my-8 p-6 bg-gradient-to-r from-green-800 to-green-600 rounded-2xl text-white text-center">
        <p className="font-black text-lg mb-1">पैसा अटका है? वजह यहीं मिलेगी</p>
        <p className="text-green-100 text-sm mb-4">
          Seeding, eKYC और land record — तीन जांच, एक ही tracker में।
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          <Link
            href="/calculator/installment-tracker"
            className="inline-flex items-center gap-2 bg-white text-green-800 font-black px-6 py-3 rounded-xl text-sm hover:bg-green-50 transition-colors"
          >
             किस्त Tracker से जांच करें →
          </Link>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-white/25 transition-colors"
          >
             Utilities का पूरा panel
          </Link>
        </div>
      </div>

      <T2>CSC जाएं या बैंक? — सही चुनाव का गणित</T2>
      <Figure
        src="/images/articles/hindi-yojna/npci-seeding/csc-biometric.webp"
        alt="CSC पर biometric से आधार verification कराता किसान"
        caption="CSC पर biometric रास्ता — आधार में mobile link न होने पर भी काम बनता है"
      />
      <p>
        गांव में आदत CSC जाने की होती है, पर seeding के मामले में यह समझ लीजिए — CSC आपके लिए status देख
        सकता है, form भरने में मदद कर सकता है, पर mapper में entry आखिरकार आपका <strong>बैंक</strong> ही
        भेजता है। Seeding करानी हो तो सीधे उस बैंक की शाखा जाना एक कदम बचाता है। CSC तब काम का है जब आपको
        सिर्फ जांचना हो कि गड़बड़ कहां है — या जब बैंक दूर हो और पहले यह पक्का करना हो कि चक्कर लगाना बनता
        भी है या नहीं। एक और बारीकी — बैंक mitra/BC point पर भी कई जगह seeding consent लिया जाता है, पर
        वहां से acknowledgement नंबर मिलना मुश्किल होता है — और बिना रसीद के follow-up कमजोर पड़ता है। जहां
        से रसीद मिले, उसी से काम कराइए।
      </p>

      <T2>Seeding हो गई — अब आगे क्या?</T2>
      <p>
        Mapper में खाता active हो जाने के बाद बची हुई कड़ियां जांच लें। योजना के record में eKYC पूरी हो (
        <Link href="/articles/hi/ekyc-mobile-se">phone से करने का तरीका</Link>), और अगर पिछला भुगतान
        fail हुआ था तो उसका status देखें — कई राज्यों में सुधार के बाद रुका पैसा अगली किस्त के साथ आ जाता
        है। भुगतान अटकने की बाकी वजहों का पूरा नक्शा{' '}
        <Link href="/articles/PmKisanPaymentFailedFix2026">इस page पर एक जगह मिलेगा</Link>। और अगर status
        में "Payment Stopped by State" वाला message है, तो वह अलग मामला है —{' '}
        <Link href="/articles/hi/payment-stopped-by-state">उसकी guide यहां</Link> है।
      </p>
      <p>
        अनुभव से निकला सबसे बड़ा सबक — seeding एक बार की चीज नहीं, एक <em>स्थिति</em> है। खाता बदला,
        बैंक merge हुआ, खाता dormant हुआ — किसी भी घटना से mapping बदल या टूट सकती है। तो साल में दो बार,
        बुवाई और कटाई की तरह, myAadhaar खोलकर 2 मिनट का status-check कर लेने की आदत बना लीजिए। जितनी मेहनत
        खेत के दस्तावेज़ संभालने में लगाते हैं, उसका सौवां हिस्सा इस digital कागज पर भी लगा दें — किस्त अटकने की
        प्रमुख वजह से हमेशा के लिए छुट्टी।
      </p>

      <T2>Seeding पर उठने वाले सवाल — और सीधे जवाब</T2>
      <dl className="mb-8 divide-y divide-[var(--color-border)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
        {FAQS.map(({ q, a }) => (
          <div key={q} className="p-4 bg-[var(--color-card)]">
            <dt className="font-semibold text-[var(--color-text)] text-sm mb-1.5">{q}</dt>
            <dd className="text-sm text-[var(--color-text-muted)] leading-relaxed m-0">{a}</dd>
          </div>
        ))}
      </dl>

      <p className="text-xs text-[var(--color-text-muted)] italic">
        कहां से क्या लिया — Bank Seeding Status की प्रक्रिया{' '}
        <a href="https://uidai.gov.in" target="_blank" rel="noopener noreferrer">uidai.gov.in</a> /
        myAadhaar portal से; NPCI mapper और BASE की जानकारी{' '}
        <a href="https://www.npci.org.in" target="_blank" rel="noopener noreferrer">npci.org.in</a> से; DBT
        व्यवस्था{' '}
        <a href="https://dbtbharat.gov.in" target="_blank" rel="noopener noreferrer">dbtbharat.gov.in</a>{' '}
        से; 23वीं किस्त (20 जून 2026, ₹18,880 करोड़ / 9.44 करोड़ परिवार) और record-mismatch वाले आंकड़े
        कृषि मंत्रालय के हवाले से छपी खबरों (
        <a
          href="https://www.bhaskarenglish.in/local/uttar-pradesh/news/pm-kisan-24th-installment-benefit-mistakes-delay-farmers-yojana-138397214.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dainik Bhaskar की यह report
        </a>
        ) से। बैंक-दर-बैंक form का नाम और online सुविधा अलग हो सकती है — आखिरी बार हमने यह सब{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')} को मिलाया था।
      </p>

      <div className="mt-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
        <h3 className="font-black text-[var(--color-text)] mb-3 text-base">इसी विषय की बाकी कड़ियां</h3>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>
            <Link href="/articles/PmKisanBankAccountChangeProcess">Bank Account Change Process</Link>
          </li>
          <li>
            <Link href="/articles/PmKisanPaymentFailedFix2026">Payment Failed — Fix Guide</Link>
          </li>
          <li>
            <Link href="/articles/hi/payment-stopped-by-state">Payment Stopped by State</Link>
          </li>
          <li>
            <Link href="/articles/hi/status-check-mobile-se">सिर्फ mobile number से status</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
