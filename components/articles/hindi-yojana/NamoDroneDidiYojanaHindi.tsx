import Link from 'next/link';
import Image from 'next/image';
import type { HindiArticle } from '@/lib/hindi-articles-data';

const FAQS = [
  {
    q: 'नमो ड्रोन दीदी योजना में कितना पैसा मिलता है?',
    a: 'चुने गए महिला स्वयं सहायता समूह (SHG) को ड्रोन package की कीमत का 80% — ज्यादा से ज्यादा ₹8 लाख — केंद्र सरकार देती है। Package में अकेला ड्रोन नहीं आता; spray tank, अतिरिक्त battery, charging का सामान और एक साल का support भी शामिल है। बचा हुआ 20% समूह अपनी बचत से लगा सकता है या AIF से loan ले सकता है, जिस पर 3% ब्याज छूट है।',
  },
  {
    q: 'क्या इसका कोई online form भरा जाता है?',
    a: 'नही। यही सबसे बडी गलतफहमी है जो internet पर फैली हुई है। कोई portal, कोई form — कुछ भी नही है। चयन DAY-NRLM के तहत registered महिला SHG में से होता है, और यह काम राज्य का livelihood mission, कृषि विभाग और fertilizer कंपनियां मिलकर करती हैं। आपको बस अपने block के mission office मे जाके अपने समूह की रुचि दर्ज करानी है।',
  },
  {
    q: 'Training कितने दिन की है और कौन कराता है?',
    a: 'कुल 15 दिन। पहले 5 दिन DGCA से मान्यता प्राप्त संस्थान (RPTO) में pilot training होती है, जिसके बाद Remote Pilot Certificate मिलता है। बाकी 10 दिन खेती से जुड़ा practical — spray की ऊंचाई, दवा का घोल, हवा देखकर उड़ान की योजना। समूह की एक और सदस्य (या उसके परिवार से कोई) को assistant/technician की अलग training मिलती है।',
  },
  {
    q: 'पढ़ाई कितनी चाहिए? उम्र की क्या शर्त है?',
    a: 'दसवीं पास और उम्र 18 से 65 के बीच। Remote Pilot Certificate के लिए DGCA की यही शर्ते हैं। Graduate होना जरुरी नही — दसवी पास महिला भी ड्रोन pilot बन सकती है।',
  },
  {
    q: 'कमाई कितनी हो सकती है?',
    a: 'सरकार का लक्ष्य है कि हर समूह को साल में कम से कम ₹1 लाख की अतिरिक्त आमदनी हो। जमीनी हिसाब यह है — spray का rate ₹300 से ₹500 प्रति acre चलता है, ड्रोन एक acre 7-8 minute में निपटा देता है, और अच्छे दिन मे 20-25 acre का काम निकल जाता है। पर याद रहे, ये मौसमी काम है — खरीफ और रबी के spray के दिनों में ही मांग रहती है।',
  },
  {
    q: 'क्या खुद किसान होना या जमीन होना जरूरी है?',
    a: 'बिलकुल नही। ये योजना खेती करने की नही, सेवा देने की है। आपके समूह के पास जमीन हो या ना हो, कोई फर्क नही पड़ता — ड्रोन किराए पर दूसरे किसानों के खेतों में spray के लिए जाएगा। हां, इलाके में खेती अच्छी-खासी होनी चाहिए, वरना काम ही नहीं मिलेगा।',
  },
  {
    q: 'अब तक कितने ड्रोन बांटे जा चुके हैं?',
    a: 'March 2026 में लोकसभा में दिए गए जवाब के अनुसार 1,094 ड्रोन बांटे जा चुके हैं, और trained pilots के मामले में कर्नाटक सबसे आगे है। लक्ष्य 14,500-15,000 समूहों का है — यानी अभी बहुत जगह खाली है।',
  },
  {
    q: 'SHG में नहीं हूं — फिर भी ड्रोन pilot बन सकती हूं?',
    a: 'इस योजना का पैसा सिर्फ DAY-NRLM वाले महिला SHG को मिलता है, किसी अकेली महिला को नहीं। दो रास्ते हैं — अपने गांव के किसी समूह से जुड़ जाइए (नया समूह बनवाने में block mission office मदद करता है), या अपने खर्च पर DGCA-approved संस्थान से training लेकर किसी private ड्रोन operator के साथ काम कीजिए। पहला रास्ता सस्ता है, बस समय लगता है।',
  },
  {
    q: '20% वाला हिस्सा समूह कैसे जुटाए?',
    a: 'तीन रास्ते हैं — समूह की अपनी बचत, AIF से loan (3% ब्याज छूट के साथ), या SHG federation से आंतरिक loan। मान लीजिए package ₹10 लाख का है तो समूह के हिस्से लगभग ₹2 लाख आएंगे। बिना सोचे समझे कर्जा मत लीजिए — पहले इलाके मे काम का अंदाजा लगाइए, फिर हामी भरिए।',
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

export default function NamoDroneDidiYojanaHindi({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>
        WhatsApp पे हफ्ते में तीन-चार बार यही सवाल आता है — दीदी को ड्रोन दिलवाना है, form कहा भरे? और
        जवाब सुनकर लोग मानते ही नही। अरे भाई, form है ही नही। ना कोई portal, ना application की कोई window। जो
        websites &ldquo;यहां apply करें&rdquo; वाला button दिखा रही हैं, वो या तो खुद confuse है या फिर जानबूझ
        के गुमराह कर रही हैं।
      </p>
      <p>
        और बात समझ भी आती है। जब हर सरकारी योजना का कोई ना कोई portal होता है — PM Kisan का है, KCC का
        है, तकरीबन सबका ही है — तो लोग मान लेते है की इसका भी होगा। पर ये योजना थोड़ा अलग ढंग से बनी है।
        इसमें आवेदन नीचे से नहीं जाता, चयन ऊपर से आता है। यह फर्क जिसने समझ लिया, उसका आधा कन्फ्यूजन
        वहीं खत्म।
      </p>
      <p>तो फिर ड्रोन आखिर मिलता कैसे है?</p>
      <p>
        मिलता है, पर रास्ता ऊपर से नीचे आता है — नीचे से ऊपर नहीं जाता। इस लेख में वही असली रास्ता लिखा
        है। चयन किस क्रम में होता है, 15 दिन की training में क्या सिखाते हैं, पैसे का पूरा हिसाब, और कमाई
        का वो अंदाजा जो हवा हवाई नहीं है। किसानों के लिए भी अलग से एक हिस्सा है — जो ड्रोन लेना नहीं,
        सिर्फ अपने खेत मे spray करवाना चाहते है।
      </p>

      <Figure
        src="/images/articles/namo-drone-didi-yojana-shg-selection/drone-didi-spray-hero.webp"
        alt="नमो ड्रोन दीदी योजना — खेत के ऊपर छिड़काव करता कृषि ड्रोन"
        caption="महिला SHG को ड्रोन, training और support का पूरा package — किराए पर spray सेवा के लिए"
      />

      <T2>पहले यह समझिए कि योजना है क्या</T2>
      <p>
        Union Cabinet ने 28 November 2023 को मंजूरी दी थी, और 30 November को प्रधानमंत्री ने शुरुआत कर
        दी। सोच एकदम सीधी सी है। देश में लाखो महिला स्वयं सहायता समूह पहले से DAY-NRLM (दीनदयाल अंत्योदय
        योजना — राष्ट्रीय ग्रामीण आजीविका मिशन) में registered हैं। इनमे से चुने हुए समूहों को कृषि ड्रोन
        का पूरा package थमा दो — मशीन, training, support सब — और वे अपने इलाके के किसानों को किराए पर
        छिड़काव की सेवा दें।
      </p>
      <p>
        किसान को फायदा — हाथ के मुकाबले तेज spray, कम पानी, दवा की कम बरबादी। महिला को फायदा — एक नया,
        इज्जत वाला technical रोजगार। और सरकार को? ये लखपति दीदी अभियान का हिस्सा है, वही मिशन जो 2 करोड़
        ग्रामीण महिलाओं की सालाना घरेलू आमदनी ₹1 लाख के पार पहुंचाना चाहता है।
      </p>
      <p>
        योजना कितनी गंभीर है, इसके दो इशारे ही काफी है। इसी साल Republic Day parade में इस programme की
        झांकी ने पहला इनाम जीता। और Budget 2026-27 में parent mission का आवंटन 20% बढ़ाकर ₹17,280 करोड़
        कर दिया गया — मतलब योजना कहीं जा नहीं रही, अगला विस्तार आ रहा है।
      </p>

      <T2>पैसे का हिसाब — एक table में</T2>
      <div className="my-4 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] p-3 text-left font-black">बात</th>
              <th className="border border-[var(--color-border)] p-3 text-left font-black">क्या मिलता है</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] p-3 font-semibold">केंद्र की मदद</td>
              <td className="border border-[var(--color-border)] p-3">Package की कीमत का 80% — अधिकतम ₹8 लाख</td>
            </tr>
            <tr className="bg-[var(--color-bg-alt)]">
              <td className="border border-[var(--color-border)] p-3 font-semibold">Package में क्या-क्या</td>
              <td className="border border-[var(--color-border)] p-3">ड्रोन, spray assembly, अतिरिक्त batteries, charging setup, accessories और एक साल का support</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-3 font-semibold">बाकी 20%</td>
              <td className="border border-[var(--color-border)] p-3">समूह की अपनी बचत या AIF से loan — 3% ब्याज छूट के साथ</td>
            </tr>
            <tr className="bg-[var(--color-bg-alt)]">
              <td className="border border-[var(--color-border)] p-3 font-semibold">Training</td>
              <td className="border border-[var(--color-border)] p-3">15 दिन मुफ्त — 5 दिन DGCA pilot course + 10 दिन खेती का practical</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-3 font-semibold">कुल बजट</td>
              <td className="border border-[var(--color-border)] p-3">₹1,261 करोड़ (2023-24 से 2025-26), लक्ष्य 14,500-15,000 SHG</td>
            </tr>
            <tr className="bg-[var(--color-bg-alt)]">
              <td className="border border-[var(--color-border)] p-3 font-semibold">आमदनी का लक्ष्य</td>
              <td className="border border-[var(--color-border)] p-3">हर समूह को कम से कम ₹1 लाख सालाना अतिरिक्त</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Alert tone="grave">
        <strong>एक बात गांठ बांध लीजिए:</strong> पैसा समूह को मिलता है, किसी अकेली महिला को नहीं। ड्रोन SHG
        की संपत्ति होता है — pilot बनने वाली सदस्य को उसमें से मेहनताना मिलता है (कई जगह ₹15,000 महीना +
        incentive का चलन है)। कोई agent कहे कि &ldquo;₹8 लाख आपके खाते में आएंगे, बस इतनी fees दे
        दो&rdquo; — वह ठग है। इस योजना में आवेदन की कोई fees है ही नहीं, क्योंकि आवेदन ही नहीं है।
      </Alert>

      <T2>Package में ड्रोन कैसा मिलता है — थोड़ा मशीन की बात</T2>
      <p>
        जो ड्रोन इस योजना में दिए जाते है, वो खिलौने वाले camera drone नही है — ये खेती के लिए बने
        भारी sprayer drone है, जिनमे आम तौर पे 10 litre के आसपास का tank लगा होता है। भरे tank के
        साथ ये 25 kg तक के हो जाते हैं, इसीलिए इनके लिए DGCA का certificate जरुरी है — छोटे खिलौना
        drone की तरह ऐसे ही नही उड़ा सकते।
      </p>

      <Figure
        src="/images/articles/namo-drone-didi-yojana-shg-selection/sprayer-uav-machine-closeup.webp"
        alt="कृषि sprayer ड्रोन — tank, nozzle और भारी frame के साथ मशीन का नजदीक से दृश्य"
        caption="ये खिलौना drone नहीं — 10 litre tank वाली भारी sprayer मशीन, जिसके लिए DGCA certificate जरूरी है"
      />

      <p>
        पूरे package में ड्रोन के अलावा spray assembly, कई batteries का set, fast charger, generator या
        charging का इंतजाम, और एक साल का maintenance support आता है। कुछ जगहों पर साथ में transport के
        लिए vehicle का प्रावधान भी जोड़ा गया है, क्योंकि ड्रोन और batteries लेकर खेत-खेत घूमना पैदल तो
        होने से रहा। कोनसी company का ड्रोन मिलेगा, ये आप नही चुनते — procurement ऊपर से होती है और
        सभी मान्यता प्राप्त भारतीय निर्माताओं से आते हैं। वैसे यह अच्छा ही है — खराब मशीन थमाने की
        गुंजाइश कम रह जाती है।
      </p>

      <T2>20% वाला हिस्सा — इसका इंतजाम कैसे हो</T2>
      <p>
        ये सवाल अक्सर पूछा जाता है और जायज भी है। मान लीजिए package ₹10 लाख का बना — 80% यानी ₹8 लाख
        सरकार ने दे दिया, बचा ₹2 लाख। इतनी रकम किसी भी गांव के समूह के लिए छोटी नही है, ये मानना
        पड़ेगा। पर रास्ते है।
      </p>
      <p>
        पहला — समूह की अपनी बचत। जो समूह सालों से चल रहे हैं और जिनका लेन-देन साफ है, उनके पास अक्सर
        इतना corpus जमा होता है या थोड़ी कोशिश से हो जाता है। दूसरा — Agriculture Infrastructure Fund
        (AIF) से loan, जिस पर 3% ब्याज छूट मिलती है। तीसरा रास्ता कम लोग जानते हैं — SHG की अपनी
        federation (गांव संगठन/cluster level federation) भी कई बार आंतरिक loan दे देती है, और उसकी शर्तें
        बैंक से नरम होती हैं।
      </p>
      <p>
        ध्यान रखने वाली बात ये है की 20% का इंतजाम सोचे बिना हां मत करिए। कर्जा लेकर मशीन ले ली और इलाके
        में काम नही निकला, तो किस्त समूह की बैठको में झगड़े की जड़ बन जाती है। पहले अंदाजा लगा लीजिए की
        आसपास कितनी खेती है, कितने किसान सचमे spray करवाएंगे — फिर हामी भरिए।
      </p>

      <T2>कागज-पत्तर और पात्रता — छोटी सूची है</T2>
      <p>
        क्योंकि आवेदन individual नही है, इसलिए लंबी-चौडी document list भी नही है। जो चीजे काम आती
        है, वो ये है:
      </p>
      <ul className="list-disc pl-5 space-y-2 my-4 text-sm leading-relaxed">
        <li>समूह का DAY-NRLM में registration — यह सबसे बड़ी शर्त है। बिना इसके बात आगे बढ़ती ही नहीं।</li>
        <li>समूह का record — बैठकों का register, बचत और loan चुकाने का इतिहास। जिन समूहों का हिसाब साफ है, उनका नाम shortlist में पहले आता है।</li>
        <li>Pilot बनने वाली सदस्य के लिए — दसवीं की marksheet, Aadhaar, उम्र 18-65, और training के समय medical fitness का self-declaration।</li>
        <li>Assistant/technician के लिए अलग से कोई पढ़ाई की सख्त शर्त नहीं — सीखने का मन काफी है।</li>
      </ul>
      <p>
        बस। ना कोई जमीन का कागज चाहिए, ना income certificate, ना कोई अलग से बनवाने वाला card। जो आदमी
        इनसे आगे की list थमाए और साथ मे कोई खर्चा बताए, समझ जाइए मामला गडबड है।
      </p>

      <Figure
        src="/images/articles/namo-drone-didi-yojana-shg-selection/shg-mahila-group.webp"
        alt="ग्रामीण महिला स्वयं सहायता समूह — नमो ड्रोन दीदी का चयन DAY-NRLM नेटवर्क से"
        caption="चयन DAY-NRLM में registered महिला SHG में से होता है — व्यक्तिगत आवेदन का कोई रास्ता नहीं"
      />

      <T2>चयन कैसे होता है — असली प्रकिया</T2>
      <p>
        यही पे सब उलझते है, तो जरा आराम से समझिए। पूरी प्रक्रिया ऊपर से नीचे चलती है:
      </p>
      <ol className="list-decimal pl-5 space-y-3 my-4 text-sm leading-relaxed">
        <li>
          <strong>पहले इलाके चुने जाते हैं।</strong> राज्य का कृषि विभाग और Lead Fertilizer Companies (LFC)
          मिलकर ऐसे blocks छांटते हैं जहां ड्रोन spray का काम आर्थिक रूप से चल सकता है — यानी जहां खेती का
          रकबा ठीक-ठाक है।
        </li>
        <li>
          <strong>फिर समूह छांटे जाते हैं।</strong> उन इलाकों में DAY-NRLM के तहत registered, अच्छे record
          वाले महिला समूहों की सूची राज्य का ग्रामीण आजीविका मिशन बनाता है। बिहार में यह काम JEEViKA करती
          है; हर राज्य में मिशन का अपना नाम है (नीचे table है)।
        </li>
        <li>
          <strong>समूह अपनी सदस्य चुनता है।</strong> Pilot training के लिए एक सदस्य — 18 से 65 साल, दसवीं
          पास, और सीखने का असली मन। एक और सदस्य (या उसके परिवार से कोई) assistant/technician training के
          लिए।
        </li>
        <li>
          <strong>15 दिन की training,</strong> जिसके अंत में DGCA का Remote Pilot Certificate मिलता है —
          पूरे देश में मान्य, सिर्फ इस योजना का कागज नहीं।
        </li>
        <li>
          <strong>ड्रोन सौंप दिया जाता है</strong> और सेवा का काम शुरू — अपने इलाके के किसानों के साथ rate
          तय करके।
        </li>
      </ol>
      <p>
        तो आपके हाथ में क्या है? इतना: अगर आप SHG की सदस्य हैं, तो अपने block के NRLM/livelihood mission
        office में जाकर बता दीजिए कि हमारा समूह इच्छुक है। सूची बनती रहती है और अगले चरण में नाम आ सकता
        है। समूह में नहीं हैं, तो पहले जुड़ना होगा। गांव के Common Service Centre या block कृषि कार्यालय से
        भी अपने जिले की स्थिति पता चल जाती है। अपने राज्य की बाकी योजनाओं की सूची यहां है —{' '}
        <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026" className="underline font-bold">
          हर राज्य की किसान योजना list
        </Link>.
      </p>

      <T2>Training के 15 दिन — अंदर होता क्या है</T2>
      <p>
        पहले 5 दिन DGCA से मान्यता प्राप्त Remote Pilot Training Organisation (RPTO) मे बीतते है। उड़ान
        के नियम, safety, no-fly zone, simulator पर अभ्यास, फिर असली उड़ान। पास हुए तो Remote Pilot
        Certificate हाथ में। अगले 10 दिन खेती का practical — किस ऊंचाई से छिड़काव, किस दवा का कितना घोल,
        हवा का रुख देखकर उड़ान की योजना, nano urea और कीटनाशक के अलग अलग तरीके, और battery का प्रबंधन जो
        खेत में सबसे ज्यादा काम आता है।
      </p>
      <p>
        एक बात training से पहले सोच लेने लायक है। ड्रोन उड़ाना मुश्किल नही है, मुश्किल है दवा का हिसाब।
        घोल गलत बन गया तो किसान की फसल का नुकसान और आपकी साख — दोनो गए। इसीलिए 10 दिन वाला खेती का हिस्सा
        ही असली इम्तेहान है। जो दीदियां spray की chemistry को गंभीरता से लेती हैं, उनका काम लौटकर आने
        वाले ग्राहकों से अपने आप चल निकलता है।
      </p>

      <Figure
        src="/images/articles/namo-drone-didi-yojana-shg-selection/drone-spray-training-demo.webp"
        alt="ड्रोन दीदी training — खेत में छिड़काव का practical demo"
        caption="5 दिन DGCA pilot course + 10 दिन खेती का practical — कुल 15 दिन, पूरी तरह मुफ्त"
      />

      <T2>किसान के लिए: ड्रोन से spray सस्ता या महंगा?</T2>
      <p>
        अब जरा दूसरी तरफ से देखिए — आप किसान है और गांव मे ड्रोन दीदी आ गई है। सेवा लेनी चाहिए या नही? एक
        acre धान के छिडकाव का सीधा हिसाब:
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] p-3 text-left font-black">बात</th>
              <th className="border border-[var(--color-border)] p-3 text-left font-black">हाथ से / पीठ वाला pump</th>
              <th className="border border-[var(--color-border)] p-3 text-left font-black">ड्रोन से</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] p-3 font-semibold">समय (1 acre)</td>
              <td className="border border-[var(--color-border)] p-3">2-4 घंटे</td>
              <td className="border border-[var(--color-border)] p-3">7-8 minute</td>
            </tr>
            <tr className="bg-[var(--color-bg-alt)]">
              <td className="border border-[var(--color-border)] p-3 font-semibold">खर्च (लगभग)</td>
              <td className="border border-[var(--color-border)] p-3">₹300-500 मजदूरी + अपना समय</td>
              <td className="border border-[var(--color-border)] p-3">₹300-500 service charge</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-3 font-semibold">पानी</td>
              <td className="border border-[var(--color-border)] p-3">150-200 litre प्रति acre</td>
              <td className="border border-[var(--color-border)] p-3">10-20 litre — 90% तक कम</td>
            </tr>
            <tr className="bg-[var(--color-bg-alt)]">
              <td className="border border-[var(--color-border)] p-3 font-semibold">दवा की बर्बादी</td>
              <td className="border border-[var(--color-border)] p-3">ज्यादा — छिड़काव असमान, पत्तों के नीचे नहीं पहुंचता</td>
              <td className="border border-[var(--color-border)] p-3">30-40% तक कम दवा, spray एक-सा</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-3 font-semibold">सेहत का खतरा</td>
              <td className="border border-[var(--color-border)] p-3">छिड़काव करने वाले पर दवा गिरती है</td>
              <td className="border border-[var(--color-border)] p-3">आदमी खेत से दूर खड़ा रहता है</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        मतलब प्रति acre का rate लगभग बराबर ही बैठता है, पर पानी, दवा और समय — तीनो बचते है। और सबसे बड़ी
        चीज: कीटनाशक से सीधा संपर्क खत्म। जो किसान लगातार खुद spray करते है, उनके लिए सेहत वाली ये बात
        मजदूरी से बडी है — बस इसे कोई गिनता नही। आंख मे जलन, शाम को सिर भारी, कभी उलटी — ये सब
        knapsack pump वाले जानते है, पर इसका हिसाब कोई खर्च में नही जोड़ता।
      </p>
      <p>
        थोड़ा और खोल के बताऊं — ड्रोन से spray एक जैसा गिरता है। हाथ से छिडकाव में कही ज्यादा गिर गया, कही
        छूट गया — नतीजा ये की कहीं फसल झुलस जाती है और कहीं कीड़ा बच जाता है। ड्रोन नियत ऊंचाई और
        नियत रफ्तार से चलता है, इसलिए coverage एक समान रहता है। और nano urea जैसी चीजों के लिए तो ड्रोन
        spray ही सही तरीका माना जाता है — बोतल खरीदकर हाथ से छिड़कने में आधा फायदा वैसे ही निकल जाता
        है।
      </p>
      <Alert tone="care">
        <strong>Booking से पहले चार काम:</strong> nazdiki operator का पता block कृषि कार्यालय, KVK या CSC से
        करें (कई जगह IFFCO/खाद dealer भी booking करा देते हैं)। Rate और आने-जाने का खर्च पहले तय कर लें —
        पड़ोसियों के साथ मिलकर 5-10 acre का slot लें तो rate और गिरता है। दवा का घोल operator के हिसाब से
        बनेगा — ड्रोन में पानी कम लगता है, इसलिए concentration अलग होता है; अपनी मर्जी का घोल न थमाएं।
        और मौसम — तेज हवा या चढ़ी धूप में spray बेकार जाता है, सुबह या शाम का slot लें।
      </Alert>

      <Figure
        src="/images/articles/namo-drone-didi-yojana-shg-selection/drone-spray-paddy-field.webp"
        alt="धान के खेत में कृषि ड्रोन से छिड़काव"
        caption="एक acre का छिड़काव 7-8 minute में — पानी 90% तक कम, दवा 30-40% तक कम"
      />

      <T2>कमाई का गणित — बिना बढ़ा चढ़ाकर</T2>
      <p>
        Service rate इलाके के हिसाब से ₹300 से ₹500 प्रति acre के बीच घूमता है। ड्रोन एक acre 7-8 मिनट
        में निपटा देता है, पर दिन का असली output batteries, खेतों के बीच की दूरी और मौसम पर टिका है।
        व्यवहार में 20-25 acre एक अच्छा दिन है।
      </p>
      <p>
        अब हिसाब लगाइए। ₹400 के average rate पे 20 acre का दिन यानी ₹8,000 gross। इसमे से diesel, battery
        charging, assistant का हिस्सा और maintenance निकाल दीजिए — तो भी season के महीनो मे अच्छी खासी कमाई
        बन जाती है।
      </p>
      <p>
        खर्चे का भी एक सच जान लीजिए जो अक्सर छुपा लिया जाता है — battery। खेत मे बिजली तो होती नही,
        इसलिए charging का इंतजाम साथ लेकर चलना पड़ता है — generator या गाड़ी से charging। एक battery
        से मोटामोटी दो-ढाई acre निकलते है, तो दिन भर काम चाहिए तो 4-6 batteries का set और उनका
        rotation भी चाहिए। यही वो काम है जो assistant संभालती है — और इसीलिए ड्रोन दीदी अकेले का नहीं, दो
        लोगों की team का काम है।
      </p>
      <p>
        और पूरा साल ऐसा नहीं चलता। छिड़काव की मांग खरीफ और रबी की खास खिड़कियों में ही रहती है, इसलिए
        समझदार समूह off-season के लिए भी सोचते हैं — fertilizer कंपनियों के demo contract, survey का काम,
        या आसपास के जिलों तक सेवा बढ़ाना। यह वैसा ही model है जैसे मशीन किराए पर देने का धंधा —{' '}
        <Link href="/articles/custom-hiring-centre-chc-portal" className="underline font-bold">
          CHC portal से tractor-मशीन किराए पर
        </Link>{' '}
        — बस यहां मशीन हवा में उड़ती है।
      </p>

      <T2>अपने राज्य में कहां पूछें — मिशन का नाम हर जगह अलग है</T2>
      <p>
        ये छोटी सी बात बहुतो को अटका देती है। Block office मे जाकर &ldquo;NRLM&rdquo; बोलिए तो कई बार
        सामने वाला भी नही समझता, क्योकि हर राज्य ने अपने आजीविका मिशन का अपना अलग नाम रखा हुआ है। काम सबका वही
        है:
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] p-3 text-left font-black">राज्य</th>
              <th className="border border-[var(--color-border)] p-3 text-left font-black">मिशन का स्थानीय नाम</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] p-3 font-semibold">बिहार</td>
              <td className="border border-[var(--color-border)] p-3">JEEViKA (Bihar Rural Livelihoods Promotion Society)</td>
            </tr>
            <tr className="bg-[var(--color-bg-alt)]">
              <td className="border border-[var(--color-border)] p-3 font-semibold">उत्तर प्रदेश</td>
              <td className="border border-[var(--color-border)] p-3">UPSRLM — प्रेरणा canvas के नाम से SHG network</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-3 font-semibold">महाराष्ट्र</td>
              <td className="border border-[var(--color-border)] p-3">UMED (Maharashtra State Rural Livelihoods Mission)</td>
            </tr>
            <tr className="bg-[var(--color-bg-alt)]">
              <td className="border border-[var(--color-border)] p-3 font-semibold">मध्य प्रदेश</td>
              <td className="border border-[var(--color-border)] p-3">MP DAY-SRLM (आजीविका मिशन)</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-3 font-semibold">राजस्थान</td>
              <td className="border border-[var(--color-border)] p-3">Rajeevika (Rajasthan Grameen Aajeevika Vikas Parishad)</td>
            </tr>
            <tr className="bg-[var(--color-bg-alt)]">
              <td className="border border-[var(--color-border)] p-3 font-semibold">झारखंड</td>
              <td className="border border-[var(--color-border)] p-3">JSLPS (Jharkhand State Livelihood Promotion Society)</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-3 font-semibold">ओडिशा</td>
              <td className="border border-[var(--color-border)] p-3">Mission Shakti / OLM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Block स्तर पर Block Programme Manager (BPM) या Community Coordinator से मिलिए — ये लोग SHG network
        को रोज संभालते हैं और इन्हें पता होता है कि ड्रोन वाले चरण में आपके block का नंबर आया है या नहीं।
        पंचायत भवन या block office में इनका बैठना आम है।
      </p>
      <p>
        एक practical सलाह — जब भी जाएं, समूह की 2-3 सदस्य साथ जाएं और अपने समूह का नाम, गांव,
        registration की जानकारी लिख के ले जाएं। मुंहजुबानी बात हवा मे उड़ जाती है, लिखित नाम कही ना कही
        दर्ज हो ही जाता है। और एक बार जाकर भूल मत जाइए — दो-तीन महीने मे एक बार हाल पूछ लेना समूह को
        याद रखवाता है। सरकारी काम में जो दिखता रहता है, उसी का काम पहले होता है — यह बात किसी guideline
        में नहीं लिखी, पर हर गांव जानता है।
      </p>

      <T2>Training के बाद का पहला महीना — असली शुरुआत यहां होती है</T2>
      <p>
        Certificate मिल गया, ड्रोन आ गया — अब? यहा से आगे कोई सरकारी हाथ पकड़कर नही चलाता। पहला
        महीना सबसे मुश्किल होता है, क्योंकि गांव के किसान एकदम से भरोसा नही करते। नयी चीज है, मेहंगी
        मशीन है, और चला रही है गांव की ही कोई महिला — तो पहले सब दूर से ही देखते है।
      </p>
      <p>
        जिन समूहो ने ये दौर पार किया, उनका तरीका लगभग एक जैसा ही रहा — शुरुआत मे एक-दो demo मुफ्त या
        आधे rate पे। अपने ही समूह की सदस्यों के घर के खेतो से शुरु कीजिए — वहा ना नही होगी। जब
        पड़ोस के खेत वाला देखेगा की फसल को कुछ नही हुआ और काम आधे घंटे में निपट भी गया, तो अगली बार
        खुद आके पूछेगा। गांव में सबसे तेज चलने वाला प्रचार आज भी मुंहजुबानी ही है।
      </p>
      <p>
        दूसरा सहारा fertilizer dealer हैं — IFFCO के केंद्र, किसान सेवा केंद्र। nano urea उन्हें बेचना है और
        उसका spray ड्रोन से ही सबसे सही होता है, इसलिए वे खुद ड्रोन दीदी को किसानों से जोड़ते हैं। अपने
        इलाके के dealer से पहचान बनाकर रखिए — शुरुआती दिनों में आधे से ज्यादा काम वहीं से आता है।
      </p>

      <T2>अफवाहें बनाम सच — जो बातें गलत फैली हुई हैं</T2>
      <p>
        इस योजना के नाम पे इतनी गलत जानकारी घूम रही है की एक बार सीधे-सीधे निपटा देना ही ठीक रहेगा:
      </p>
      <ul className="list-disc pl-5 space-y-2 my-4 text-sm leading-relaxed">
        <li>
          <strong>&ldquo;Portal पर form भरो, ड्रोन घर आ जाएगा&rdquo;</strong> — झूठ। न form है, न portal।
          जो site ऐसा कहे, वहां से निकल लीजिए।
        </li>
        <li>
          <strong>&ldquo;₹8 लाख सीधे खाते में आते हैं&rdquo;</strong> — नहीं। पैसा नहीं आता, ड्रोन का package
          आता है, और वो भी समूह के नाम — किसी के निजी खाते में एक रुपया नहीं जाता।
        </li>
        <li>
          <strong>&ldquo;कोई भी महिला सीधे training ले सकती है&rdquo;</strong> — आधा सच। योजना के तहत training
          सिर्फ चुने गए SHG की सदस्य को मिलती है। अपने खर्च पर RPTO से course करना अलग बात है, वो कोई
          भी कर सकता है — पर उसमें subsidy नहीं है।
        </li>
        <li>
          <strong>&ldquo;यह सिर्फ बड़े राज्यों के लिए है&rdquo;</strong> — नहीं, यह राष्ट्रीय योजना है। हां, जिन
          इलाकों में खेती का रकबा ज्यादा है, वहां cluster पहले बनेंगे — इतना जरूर है।
        </li>
        <li>
          <strong>&ldquo;ड्रोन उड़ाने के लिए license अलग से बनवाना पड़ेगा&rdquo;</strong> — training के अंदर ही
          Remote Pilot Certificate मिल जाता है, अलग से कुछ बनवाने की जरुरत नहीं।
        </li>
      </ul>

      <T2>अब तक का report card</T2>
      <p>
        March 2026 में सरकार ने लोकसभा में बताया कि अब तक <strong>1,094 ड्रोन</strong> बांटे जा चुके हैं,
        और trained pilots मे कर्नाटक सबसे आगे चल रहा है। लक्ष्य के मुकाबले ये संख्या अभी छोटी है — और
        सच पूछिए तो यही आपके लिए मौका है। जब अगला चरण नए इलाके जोड़ेगा, तो आगे वही समूह रहेंगे जिन्होने
        पहले से अपने block mission office मे रुचि दिखा के रखी होगी।
      </p>

      <Alert tone="care">
        योजना के आंकड़े — subsidy की सीमा, लक्षित समूह, training का ढांचा — guidelines बदलने पर बदल सकते
        हैं। कोई बड़ा फैसला लेने से पहले अपने block के NRLM office या{' '}
        <a href="https://www.myscheme.gov.in/schemes/nddy" target="_blank" rel="noopener noreferrer" className="underline">
          myscheme.gov.in
        </a>{' '}
        पर ताजा जानकारी जरूर देख लें। और एक बार फिर: इसमें न कोई fees है, न कोई agent। पैसा मांगने वाला हर
        आदमी ठग है।
      </Alert>

      <T2>किस समूह के लिए सही है — और किसके लिए नहीं</T2>
      <ul className="list-disc pl-5 space-y-2 my-4 text-sm leading-relaxed">
        <li>
          <strong>सही है अगर</strong> समूह active है, record साफ हैं, इलाके में खेती का रकबा अच्छा है, और
          एक सदस्य ऐसी है जो तकनीकी चीज सीखने में सचमुच दिलचस्पी रखती है — सिर्फ नाम के लिए नहीं।
        </li>
        <li>
          <strong>सही है अगर</strong> समूह 20% वाले हिस्से का इंतजाम सोच सकता है — अपनी बचत से या AIF loan
          से। रकम बहुत बड़ी नहीं होती, पर योजना चाहिए।
        </li>
        <li>
          <strong>मत सोचिए अगर</strong> इलाके में खेती कम है या पहले से 2-3 ड्रोन operator काम कर रहे हैं।
          मांग के बिना मशीन सिर्फ धूल खाएगी।
        </li>
        <li>
          <strong>मत सोचिए अगर</strong> समूह के भीतर झगड़ा है कि ड्रोन किसके पास रहेगा। यह SHG की संपत्ति
          है — साफ समझौता पहले, मशीन बाद में।
        </li>
      </ul>
      <p>
        एक आखरी बात, जो शायद सबसे जरुरी है। ये योजना उन गिनी-चुनी योजनाओ मे से है जहा मिलने वाली
        चीज खर्चा नही, कमाई का जरिया है। ₹2,000 की किस्त आती है और खर्च हो जाती है। ड्रोन आता है तो
        साल-दर-साल कमाता है — बशर्ते समूह उसे चलाना जानता हो और इलाके मे काम हो। इसलिए जल्दबाजी मे
        नही, सोच समझकर उतरिए — पर उतरिए जरूर, क्योकि गांव की महिलाओ के लिए इतना सीधा technical
        रोजगार देने वाली योजना दूसरी नही है।
      </p>
      <p>
        और अगर आपकी दिलचस्पी ड्रोन से ज्यादा सिंचाई का खर्च घटाने में है, तो micro-irrigation वाली subsidy
        भी देख लीजिए —{' '}
        <Link href="/articles/drip-sprinkler-irrigation-subsidy" className="underline font-bold">
          drip और sprinkler पर 45-55% की मदद
        </Link>{' '}
        मिलती है, और वहां अकेला किसान भी apply कर सकता है।
      </p>

      <T2>अक्सर पूछे जाने वाले सवाल</T2>
      <div className="space-y-4 my-4">
        {FAQS.map((f) => (
          <details key={f.q} className="rounded-xl border border-[var(--color-border)] p-4 bg-[var(--color-bg-alt)]">
            <summary className="font-bold text-sm cursor-pointer text-[var(--color-text)]">{f.q}</summary>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text)]">{f.a}</p>
          </details>
        ))}
      </div>

      <T2>स्रोत</T2>
      <ul className="text-sm text-[var(--color-text-muted)] space-y-2 mb-6 list-disc pl-5">
        <li>
          PIB — Union Cabinet की मंजूरी और operational guidelines, Namo Drone Didi (28-30 November 2023).{' '}
          <a href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1980577" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">pib.gov.in</a>
        </li>
        <li>
          myScheme (भारत सरकार) — योजना की पात्रता, लाभ और financing.{' '}
          <a href="https://www.myscheme.gov.in/schemes/nddy" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">myscheme.gov.in</a>
        </li>
        <li>
          DAY-NRLM — ग्रामीण विकास मंत्रालय का आजीविका मिशन, जिसके SHG network से चयन होता है.{' '}
          <a href="https://nrlm.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">nrlm.gov.in</a>
        </li>
        <li>
          DGCA — Digital Sky platform: remote pilot certificate और drone rules की आधिकारिक जानकारी.{' '}
          <a href="https://digitalsky.dgca.gov.in" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">digitalsky.dgca.gov.in</a>
        </li>
        <li>
          Photo credits — Wikimedia Commons: drone spray photos by Christopher Hedreyd / PIA 4A CALABARZON (public domain); SHG group photo (CC0);{' '}
          <a href="https://commons.wikimedia.org/wiki/File:Agricultural_drone_spraying_on_paddy_field.jpg" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">paddy field spray</a>{' '}
          by Shreesha Sharma (CC BY-SA 4.0);{' '}
          <a href="https://commons.wikimedia.org/wiki/File:An_Agriculture_Sprayer_UAV_displayed_at_Amaravati_Drone_Summit_by_Aries_Agro_Ltd._(02).jpg" target="_blank" rel="noopener noreferrer" className="text-green-700 dark:text-green-400 underline">sprayer UAV closeup</a>{' '}
          by iMahesh (CC BY-SA 4.0). Images resized और watermarked.
        </li>
      </ul>

      <p className="text-sm text-[var(--color-text-muted)]">
        इस विषय की Hinglish guide (ज्यादा विस्तार से) यहां है —{' '}
        <Link href="/articles/namo-drone-didi-yojana-shg-selection" className="underline font-bold">
          Namo Drone Didi Yojana 2026: SHG Se Selection Aur ₹8 Lakh Tak Ki Madad
        </Link>
      </p>
    </>
  );
}
