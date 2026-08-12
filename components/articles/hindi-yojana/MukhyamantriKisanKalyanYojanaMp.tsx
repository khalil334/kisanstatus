import Link from 'next/link';
import Image from 'next/image';
import type { HindiArticle } from '@/lib/hindi-articles-data';

const FAQS_PAISA = [
  {
    q: 'MP में किसान को कुल कितना पैसा मिलता है?',
    a: 'सालाना ₹12,000 — केंद्र की PM Kisan से ₹6,000 और राज्य की मुख्यमंत्री किसान कल्याण योजना से ₹6,000। दोनों DBT से सीधे बैंक account में आते हैं।',
  },
  {
    q: 'योजना की किस्तें कब-कब आती हैं?',
    a: 'राज्य सरकार साल में किस्तें अपने कार्यक्रम के हिसाब से release करती है — इसकी कोई PM Kisan वाली fix rhythm नहीं है। कई बार किस्तें इकट्ठी भी आती हैं। Exact dates की official घोषणा का ही भरोसा करें।',
  },
  {
    q: 'किस्त आई पर SMS नहीं आया — कैसे पता करूं?',
    a: 'SMS न आना आम बात है — कई बार बैंक का alert service बंद होता है या नंबर पुराना होता है। Passbook update कराएं या बैंक के mini-statement से देखें। Entry में DBT/PFMS लिखा आएगा — ₹2,000 की entry PM Kisan भी हो सकती है और राज्य योजना भी, तारीख से मिलान करें।',
  },
  {
    q: 'PM Kisan आ रही है लेकिन राज्य वाली नहीं — क्यों?',
    a: 'दो आम कारण: पटवारी verification pending है, या राज्य की किस्त release ही नहीं हुई (राज्य की किस्तें अपने schedule से आती हैं, PM Kisan के साथ नहीं)। पहले saara portal पर status देखें, फिर पटवारी/तहसील से मिलें।',
  },
  {
    q: 'Status कहां check करें?',
    a: 'राज्य की किस्त का status saara.mp.gov.in portal पर दिखता है (CM Kisan section में)। PM Kisan वाली किस्तों के लिए pmkisan.gov.in का Know Your Status ही रास्ता है।',
  },
];

const FAQS_HAQDARI = [
  {
    q: 'क्या अलग से आवेदन करना पड़ता है?',
    a: 'नहीं। जो किसान PM Kisan का verified beneficiary है, वह किसान कल्याण योजना का हकदार है। PM Kisan में नाम है और पटवारी verification हो गया, तो राज्य की किस्त अपने आप जुड़ जाती है। अलग form सिर्फ तब जब नया registration हो रहा हो।',
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
    q: 'क्या यह पैसा वापस मांगा जा सकता है?',
    a: 'हां — अगर बाद में पता चले कि आप exclusion के दायरे में थे (परिवार में income tax payer या सरकारी नौकरी होने पर) तो ली गई रकम की वसूली हो सकती है। Eligibility पर शक हो तो पहले साफ करें, पैसा लेते न रहें।',
  },
  {
    q: 'गांव बदल गया / जमीन बेच दी — अब क्या होगा?',
    a: 'जमीन पूरी बिक गई तो eligibility खत्म — लाभ लेते रहे तो आगे वसूली का जोखिम। जमीन दूसरी तहसील/जिले में खरीदी तो नया land record PM Kisan में update कराना जरूरी है — पुराना record हटते ही किस्त रुक जाती है। दोनों काम पटवारी/तहसील से होते हैं।',
  },
];

const ALL_FAQS = [...FAQS_PAISA, ...FAQS_HAQDARI];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ALL_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const RELEASES = [
  {
    when: '22 सितंबर 2020',
    what: 'तत्कालीन CM शिवराज सिंह चौहान ने योजना शुरू की — तब ₹4,000 सालाना, दो किस्तों में।',
  },
  {
    when: '5 जुलाई 2024',
    what: 'टीकमगढ़ से FY 2024-25 की पहली किस्त — करीब ₹1,630 करोड़, 81 लाख किसानों को।',
  },
  {
    when: 'फरवरी 2025',
    what: 'देवास जिले के सोनकच्छ से तीसरी किस्त — ₹1,624 करोड़।',
  },
  {
    when: 'अगस्त 2025',
    what: 'मंडला में बलराम जयंती के मौके पर FY 2025-26 की दूसरी किस्त DBT से भेजी गई।',
  },
  {
    when: '27 जुलाई 2026',
    what: 'खंडवा के बलराम कृषि महोत्सव में CM मोहन यादव ने single click से ₹3,308 करोड़ की दो किस्तें एक साथ 82.7 लाख किसानों के खातों में भेजीं।',
  },
];

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

function Hd({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-black text-[var(--color-text)] mt-8 mb-4 pb-2 border-b-2 border-[var(--color-border)]">
      {children}
    </h2>
  );
}

function Tip({ warn, children }: { warn?: boolean; children: React.ReactNode }) {
  return (
    <div
      className={`my-4 p-4 border-l-4 rounded-r-xl text-sm text-[var(--color-text)] leading-relaxed ${
        warn
          ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-500'
          : 'bg-green-50 dark:bg-green-900/20 border-green-600 dark:border-green-500'
      }`}
    >
      {children}
    </div>
  );
}

function QA({ q, a }: { q: string; a: string }) {
  return (
    <div className="text-sm leading-relaxed">
      <p className="font-semibold text-[var(--color-text)] mb-1">{q}</p>
      <p className="text-[var(--color-text-muted)]">{a}</p>
    </div>
  );
}

export default function MukhyamantriKisanKalyanYojanaMp({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>
        मध्य प्रदेश का किसान देश में अलग ही स्थिति में है — उसे PM Kisan की ₹6,000 के ऊपर राज्य सरकार से{' '}
        <strong>₹6,000 और</strong> मिलते हैं। कुल ₹12,000 सालाना। यह दूसरी वाली रकम जिस योजना से आती है,
        उसका नाम है <strong>मुख्यमंत्री किसान कल्याण योजना</strong>। और मजेदार बात — बहुत से किसानों को
        ठीक-ठीक पता ही नहीं कि यह अलग योजना है, कैसे मिलती है, और जब नहीं आती तो किससे पूछना है। आज यही सब
        साफ करते हैं।
      </p>

      <Tip>
        <strong>एक line में:</strong> PM Kisan के verified beneficiary को MP सरकार अपनी तरफ से ₹6,000/साल और
        देती है — अलग आवेदन की जरूरत नहीं, अलग किस्तों में आता है, status{' '}
        <a href="https://saara.mp.gov.in" target="_blank" rel="noopener noreferrer">saara.mp.gov.in</a> पर
        दिखता है।
      </Tip>

      <Figure
        src="/images/articles/hindi-yojna/mp-kisan-kalyan/mp-farmer-field.webp"
        alt="खेत में खड़ा MP का किसान"
        caption="MP के किसान को केंद्र + राज्य मिलाकर कुल ₹12,000 सालाना मिलते हैं"
      />

      <Hd>योजना की कहानी — ₹4,000 से ₹6,000 तक</Hd>
      <p>
        योजना 2020 में शुरू हुई थी, तब राज्य ₹4,000 सालाना देता था। बाद में सरकार ने रकम बढ़ाकर{' '}
        <strong>₹6,000</strong> कर दी — अर्थात् अब केंद्र + राज्य मिलाकर पूरे ₹12,000। मौजूदा सरकार भी साफ कह
        चुकी है कि योजना जारी रहेगी। पैसा किस्तों में आता है (₹2,000 की किस्तें), DBT से सीधे उसी बैंक
        account में जो PM Kisan के record में है।
      </p>
      <p>
        Design समझने लायक है — राज्य ने अपनी अलग beneficiary list नहीं बनाई। योजना PM Kisan के ढांचे पर ही
        सवार है। इसका फायदा: कागजी काम आधा। नुकसान: PM Kisan में कोई भी दिक्कत (eKYC pending, bank seeding
        fail) राज्य वाली किस्त भी रोक देती है। एक तीर से दो शिकार — उल्टी दिशा में भी।
      </p>

      <Hd>किस्तें सच में आती हैं? — release का timeline</Hd>
      <p>
        योजनाओं के वादे बहुत होते हैं, तो कागज पर नहीं, record पर बात करते हैं। मार्च 2025 तक राज्य
        सरकार इस योजना में <strong>₹17,500 करोड़ से ज्यादा</strong> बांट चुकी थी और beneficiary गिनती 83 लाख
        किसानों के पार थी — यह आंकड़ा सरकारी बयान के हवाले से IANS की report में दर्ज है। बड़ी releases
        की पटरी यह रही:
      </p>
      <div className="my-5 border-l-2 border-green-600 dark:border-green-500 pl-5 space-y-5">
        {RELEASES.map((r) => (
          <div key={r.when} className="relative">
            <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-green-600 dark:bg-green-500" />
            <p className="text-xs font-black text-green-700 dark:text-green-400 uppercase tracking-wide">
              {r.when}
            </p>
            <p className="text-sm text-[var(--color-text)] leading-relaxed mt-0.5">{r.what}</p>
          </div>
        ))}
      </div>
      <p>
        खंडवा वाली release की पूरी खबर ANI की{' '}
        <a
          href="https://news.webindia123.com/news/Articles/India/20260727/4479910.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          इस report
        </a>{' '}
        में पढ़ सकते हैं — उसी मंच से सरकार ने 2026 को &quot;कृषक कल्याण वर्ष&quot; के तौर पर मनाने की बात भी
        दोहराई।
      </p>
      <p>
        इस timeline से दो काम की बातें निकलती हैं। पहली — किस्तें आती जरूर हैं, पर उनकी तारीखें किसी fixed
        calendar से नहीं, सरकारी कार्यक्रमों (कृषि महोत्सव, जयंती वाले मौकों) से जुड़ी होती हैं। पड़ोसी को
        आ गई और आपको नहीं आई — यह घबराने की बात तभी है जब release हो चुकी हो और आपकी entry में दिक्कत हो।
        दूसरी — कभी-कभी दो किस्तें इकट्ठी आती हैं (खंडवा वाली release इसका उदाहरण है), तो passbook में ₹4,000
        की एक साथ entry देखकर उलझिए मत।
      </p>

      <Hd>कौन eligible है?</Hd>
      <p>
        Checklist छोटी है — चार शर्तें। किसान <strong>मध्य प्रदेश का निवासी</strong> हो और खेती की जमीन
        हो। <strong>PM Kisan Samman Nidhi का verified beneficiary</strong> हो — यही मुख्य शर्त है। PM Kisan
        के exclusion rules यहां भी लागू — income tax payer, सरकारी कर्मचारी, ₹10,000+ pension वाले बाहर।
        और <strong>eKYC पूरी</strong> हो — बिना इसके दोनों योजनाओं का पैसा रुकता है।
      </p>
      <p>
        सीधे शब्दों में: PM Kisan में नाम + पटवारी verification + eKYC = राज्य की किस्त का रास्ता साफ। PM Kisan की
        eligibility का पूरा नक्शा{' '}
        <Link href="/articles/PmKisanMasterGuide2026">Master Guide पर खुलेगा</Link>।
      </p>

      <Hd>आवेदन कैसे होता है?</Hd>
      <p>
        ज्यादातर किसानों के लिए जवाब है — <strong>करना ही नहीं पड़ता</strong>। जो पहले से PM Kisan beneficiary
        हैं, वो अपने आप योजना में शामिल हैं। नए किसान के लिए क्रम यह है: पहले PM Kisan में registration —
        अब Farmer ID (AgriStack) के साथ process चलती है, MP का portal इसमें राज्य के record से जुड़ा है।
        फिर पटवारी आपके land record और details verify करता है। साथ-साथ eKYC और बैंक की NPCI आधार seeding
        पूरी करें। PM Kisan में beneficiary status active होते ही किसान कल्याण योजना की अगली किस्त में नाम
        जुड़ जाता है।
      </p>
      <Tip warn>
        जहां ज्यादातर cases अटकते हैं — <strong>पटवारी verification</strong>। Form भर गया, महीनों से
        &quot;verification pending&quot;। ऐसे में portal refresh करते रहने से कुछ नहीं होगा; अपने हल्का के
        पटवारी या तहसील कार्यालय जाकर मिलिए। Records की physical जांच वहां पर ही होती है।
      </Tip>

      <Hd>Status check — दो portal, दो काम</Hd>
      <Figure
        src="/images/articles/hindi-yojna/mp-kisan-kalyan/saara-portal.webp"
        alt="मुख्यमंत्री किसान कल्याण योजना का status check portal"
        caption="राज्य की किस्त का status saara.mp.gov.in पर दिखता है"
      />
      <p>यहां लोग बार-बार उलझते हैं, तो सीधा बंटवारा समझ लीजिए:</p>
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

      <div className="my-5 border-2 border-[var(--color-border)] rounded-2xl overflow-hidden bg-[var(--color-card)] shadow-sm">
        <div className="bg-green-50 dark:bg-green-900/20 border-b border-[var(--color-border)] px-4 py-2.5">
          <span className="text-green-700 dark:text-green-300 text-xs font-bold">
             Pehle guide padhi? Ab official site par jao:
          </span>
        </div>
        <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
          <div>
            <p className="font-bold text-[var(--color-text)] text-sm">
              SAARA Portal — CM Kisan Kalyan Yojana (MP)
            </p>
            <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
              Government of Madhya Pradesh — saara.mp.gov.in
            </p>
          </div>
          <a
            href="https://saara.mp.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg font-bold hover:bg-[var(--color-primary-dark)] transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          >
            saara.mp.gov.in खोलें ↗
          </a>
        </div>
      </div>

      <Hd>पटवारी verification — असली दरवाजा, असली रुकावट</Hd>
      <Figure
        src="/images/articles/hindi-yojna/mp-kisan-kalyan/patwari-check.webp"
        alt="पटवारी गांव में किसान के land record का मिलान करते हुए"
        caption="पटवारी का verification ही इस योजना का असली दरवाजा है"
      />
      <p>
        इस योजना में जो काम online form नहीं कर सकता, वह पटवारी की कलम करती है। पटवारी के पास
        जाते समय तीन चीजें साथ रखें — <strong>खसरा/खतौनी की नकल</strong> (जिसमें आपका नाम और रकबा
        दिखे), <strong>आधार card</strong>, और <strong>बैंक passbook</strong>। ज्यादातर मामले तीन
        गड़बड़ियों पर अटकते हैं: आधार और खतौनी में नाम की spelling अलग (रामसिंह vs राम सिंह वाला
        फर्क भी काफी है), जमीन का रकबा record से न मिलना, और विरासत के बाद नामांतरण न होना।
        तीनों का इलाज पटवारी-तहसील के स्तर पर ही है — कोई helpline या portal यह आपके लिए नहीं कर
        सकता।
      </p>
      <p>
        एक व्यावहारिक सलाह — पटवारी से मिलने का सही समय वह है जब वह आपके हल्के में बैठता है
        (हर पटवारी के पास कई गांव होते हैं)। गांव के कोटवार या पंचायत सचिव से उसका दिन पूछ लें —
        तहसील के चक्कर बच जाएंगे। और जो भी कागज दें, उसकी एक copy अपने पास रखें — &quot;कागज खो गया,
        दोबारा लाओ&quot; सरकारी काम की पुरानी-से-पुरानी देरी है।
      </p>

      <Hd>Exclusion नियम — कौन बाहर है, और क्यों जानना जरूरी है</Hd>
      <p>
        यह section ध्यान से पढ़िए क्योंकि गलती से लिया गया पैसा बाद में वापस मांगा जाता है।
        परिवार में कोई income tax भरता हो, कोई सरकारी नौकरी में हो (चतुर्थ श्रेणी को छोड़कर),
        ₹10,000 से ज्यादा pension पाता हो, या कोई डॉक्टर-वकील-CA के पेशे में registered हो — तो
        परिवार दोनों योजनाओं से बाहर है। गांव में कई बार बेटे की नौकरी लगने के बाद भी पिता की किस्त
        चलती रहती है — बेटा अलग परिवार (अलग राशन card, अलग घर) है तो दिक्कत नहीं; एक ही परिवार
        इकाई में है तो जोखिम है। शक हो तो स्वयं समर्पण (voluntary surrender) का विकल्प pmkisan portal
        पर है — यह वसूली notice से हमेशा सस्ता पड़ता है।
      </p>

      <Hd>बजट की तरफ से भरोसा कितना पक्का है?</Hd>
      <p>
        किसान का एक जायज सवाल — कहीं योजना बंद तो नहीं हो जाएगी? इसका जवाब बजट में है। राज्य के 2024-25
        के बजट में इस योजना के लिए करीब <strong>₹4,900 करोड़</strong> का प्रावधान रखा गया था — सीधा हिसाब: 80+ लाख
        किसानों को ₹6,000 देने का पूरा इंतजाम कागज पर पहले से बुक है। जो योजना हर साल बजट line-item बन
        चुकी हो और जिसमें ₹17,500 करोड़ से ज्यादा जा चुका हो, उसे रातोंरात बंद करना किसी भी सरकार के लिए
        राजनीतिक रूप से लगभग नामुमकिन है। हां, रकम और किस्तों का pattern बदल सकता है — ₹4,000 से
        ₹6,000 हुआ ही था, आगे भी घोषणाएं आ सकती हैं। Rule यह रखिए: रकम की कोई भी नई खबर official
        घोषणा या बड़े media house की report से confirm करके ही मानें, WhatsApp forward से नहीं।
      </p>

      <Hd>₹12,000 का सही इस्तेमाल — एक किसान का हिसाब</Hd>
      <p>
        ₹12,000 से खेती नहीं चलती — यह सच है। पर इसका समझदारी से इस्तेमाल फर्क जरूर डालता है।
        अच्छे-से-अच्छा इस्तेमाल वह है जो खर्च को कर्ज बनने से रोक दे — बुवाई के समय बीज-खाद की नकद
        खरीद (उधार की दुकान से महंगा पड़ता है), KCC की किस्त समय पर भरना (ताकि 4% वाली सस्ती
        दर बनी रहे), या बच्चों की school fees जैसा तय खर्च। किस्त आते ही खर्च हो जाने वाली रकम नहीं,
        योजना से आई रकम को खेती के एक तय काम से जोड़ देना — यही छोटी आदत साल भर में बड़ा फर्क
        लाती है।
      </p>

      <Hd>आम गलतियां जो महीनों की देरी करा देती हैं</Hd>
      <p>
        <strong>गलती 1 — दो बैंक खातों का घालमेल।</strong> Form में एक खाता लिखा, NPCI seeding दूसरे खाते
        में है — पैसा seeded खाते में ही जाएगा। किसान पहले खाते की passbook देखकर कहता रहता है &quot;आया ही
        नहीं&quot; — जबकि रकम दूसरे खाते में पड़ी है।
      </p>
      <p>
        <strong>गलती 2 — पुराना mobile number।</strong> आधार से linked नंबर बंद हो गया तो OTP नहीं आएगा —
        न status दिखेगा, न eKYC होगी। पहले आधार केंद्र जाकर नया नंबर link कराएं, फिर बाकी सब।
      </p>
      <p>
        <strong>गलती 3 — &quot;एक बार हो गया, अब हमेशा चलेगा&quot; वाला भरोसा।</strong> Land record में कोई भी बदलाव
        (बंटवारा, बिक्री, नामांतरण) किस्त रोक सकता है। रिकॉर्ड बदले तो उसी महीने PM Kisan में update
        कराना आपकी जिम्मेदारी है — system खुद नहीं पकड़ता, सिर्फ किस्त रोकता है।
      </p>
      <p>
        <strong>गलती 4 — agent को &quot;किस्त निकलवाने&quot; के पैसे देना।</strong> राज्य योजना में ऐसी कोई &quot;फीस&quot; नहीं
        है — न registration की, न verification की। जो भी पैसे मांगे, समझ जाइए कि वह आपकी जानकारी की कमी
        बेच रहा है। और OTP तो किसी को भी नहीं — पटवारी को भी आपके phone का OTP नहीं चाहिए होता।
      </p>

      <Hd>पैसा नहीं आया — किस order में जांच करें?</Hd>
      <Figure
        src="/images/articles/hindi-yojna/mp-kisan-kalyan/passbook-dbt.webp"
        alt="बैंक passbook में DBT की entry जांचता किसान"
        caption="SMS न आए तो passbook की entry सबसे पक्का सबूत है"
      />
      <p>
        एक MP के किसान का किस्सा सुनिए — PM Kisan की किस्तें time से आ रही थीं, लेकिन राज्य वाली एक साल से
        गायब। सबको लगा portal की गड़बड़ है। तहसील में पता चला कि पटवारी verification में जमीन का रकबा
        mismatch था — PM Kisan केंद्र से चल रही थी, राज्य की entry अटकी थी। रकबा ठीक कराया, अगली release में
        पैसा आ गया। सीख: <strong>दोनों योजनाओं की जांच अलग-अलग होती है</strong>।
      </p>
      <p>
        क्रम यह रखिए — पहले pmkisan.gov.in पर देखें कि eKYC, land seeding, bank seeding तीनों YES हैं।
        तीनों YES और PM Kisan आ रही है? तो मामला राज्य की तरफ है — saara portal पर status देखें। वहां
        pending/reject दिखे तो पटवारी या तहसील कार्यालय — यही असली desk है। और PM Kisan भी नहीं आ रही
        हो तो पहले उसे ठीक करें —{' '}
        <Link href="/articles/PmKisanPaymentFailedFix2026">payment failed guide</Link> से शुरुआत करें;
        केंद्र वाली ठीक हुए बिना राज्य वाली नहीं आएगी।
      </p>
      <p>
        और एक honest बात — राज्य की किस्तें कभी-कभी schedule से late होती हैं, बजट release के हिसाब से।
        ऐसे में आपकी तरफ से कोई गलती नहीं होती; इंतजार ही इलाज है। घबराकर बिचौलियों के पास मत जाइए।
      </p>

      <Hd>नए किसान के लिए document checklist — एक ही बार में सब तैयार</Hd>
      <p>
        चक्कर इसी वजह से लगते हैं कि कागज एक-एक करके निकाले जाते हैं। पहली बार registration से
        पहले ये सब एक folder में रख लीजिए — <strong>आधार card</strong>, उस mobile नंबर के साथ जो आज चालू
        है (नंबर बंद है तो पहला काम आधार केंद्र पर नया नंबर link कराना है — बाकी सब इसी पर टिका है)।{' '}
        <strong>खसरा/खतौनी की ताजा नकल</strong> — MP में यह mpbhulekh.gov.in से online भी निकलती है; नाम की
        spelling आधार से मिलाकर देख लें, फर्क है तो पहले सुधार कराएं। <strong>बैंक passbook</strong> — उसी
        खाते की जिसमें NPCI आधार seeding है या करानी है; कई बार पुराने dormant खाते में पैसा जाकर फंसा
        रहता है। और <strong>Farmer ID (AgriStack)</strong> — नए registration अब इसी से जुड़े हैं; CSC या
        पटवारी के माध्यम से बनती है, पूरा तरीका{' '}
        <Link href="/articles/hi/farmer-id-kaise-banaye">इस page पर अलग से</Link> है।
      </p>
      <p>
        यह folder बनाने में एक दिन लगता है, और यही एक दिन आगे के छह महीने के चक्कर बचाता है। CSC पर
        जाएं तो सब कागज original + photocopy दोनों लेकर जाएं — आधे center scan खुद करते हैं, आधे copy मांगते हैं।
      </p>

      <Hd>पैसे और किस्तों के सवाल</Hd>
      <div className="my-4 space-y-4">
        {FAQS_PAISA.map((f) => (
          <QA key={f.q} q={f.q} a={f.a} />
        ))}
      </div>

      <Hd>हकदारी और record के सवाल</Hd>
      <div className="my-4 space-y-4">
        {FAQS_HAQDARI.map((f) => (
          <QA key={f.q} q={f.q} a={f.a} />
        ))}
      </div>

      <Hd>सब मिलाकर बात इतनी सी है</Hd>
      <p>
        मध्य प्रदेश का गणित समझना मुश्किल नहीं है — केंद्र की PM Kisan से ₹6,000 और राज्य की किसान
        कल्याण योजना से ₹6,000, कुल ₹12,000 सालाना, और राज्य वाले हिस्से के लिए कोई अलग आवेदन
        नहीं। लेकिन इसी सरलता में एक शर्त छिपी है जो हर साल हजारों किसानों को खटकती है — राज्य की किस्त
        केंद्र के verified database से निकलती है। तात्पर्य, PM Kisan में eKYC अधूरी, बैंक seeding नहीं, या
        पटवारी verification अटका — तो दोनों किस्तें रुकेंगी, सिर्फ एक नहीं। इसी तरह, देरी का अर्थ नाम
        कटना नहीं — राज्य अपनी किस्तें अपने कार्यक्रम से भेजता है, PM Kisan के साथ नहीं।
      </p>
      <p>
        साल में दो बार — बुवाई से पहले और कटाई के बाद — saara portal और pmkisan.gov.in दोनों
        पर अपना status देख लेना सस्ते-से-सस्ता बीमा है। कोई flag दिखे तो उसी हफ्ते पटवारी या बैंक branch का
        एक चक्कर लगा लें — किस्त की खबर आने के बाद लाइन में लगने से यह कहीं आसान पड़ता है। और जो
        &quot;किस्त दिलवा दूंगा&quot; कहकर पैसे मांगे — उससे साफ कह दें कि इस योजना में ना कोई अलग form है,
        ना कोई बिचौलिया। ₹12,000 हक है — सिर्फ अपना record साबुत रखना आपका काम है।
      </p>

      <p className="text-xs text-[var(--color-text-muted)] italic">
        यह सब कहां से पता चला — योजना की जानकारी MP शासन की घोषणाओं (राशि ₹4,000 से बढ़ाकर ₹6,000 —
        CM का सार्वजनिक बयान, IANS coverage) से ली गई है, और process{' '}
        <a href="https://saara.mp.gov.in" target="_blank" rel="noopener noreferrer">saara.mp.gov.in</a> तथा{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> से मिलाया
        गया है ({new Date(article.modifiedTime).toLocaleDateString('hi-IN')} तक)। किस्तों का schedule सरकार के
        हाथ में है — exact dates official घोषणा से ही confirm करें।
      </p>

      <div className="mt-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
        <h3 className="font-black text-[var(--color-text)] mb-3 text-base">आगे किस page पर क्या मिलेगा</h3>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>
            <Link href="/articles/hi/namo-shetkari-yojana">🌾 नमो शेतकरी योजना Maharashtra</Link>
          </li>
          <li>
            <Link href="/articles/PmKisanMasterGuide2026">योजना की master guide (केंद्र)</Link>
          </li>
          <li>
            <Link href="/articles/PmKisanEkycOnline2026">eKYC online करने की विधि</Link>
          </li>
          <li>
            <Link href="/articles/PmKisanBeneficiaryList2026">Beneficiary List Guide</Link>
          </li>
          <li>
            <Link href="/articles/PmKisanPaymentFailedFix2026">Payment Failed Fix</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
