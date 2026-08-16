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
    a: 'नहीं। यही सबसे बड़ी गलतफहमी है जो internet पर फैली हुई है। कोई portal, कोई form — कुछ नहीं है। चयन DAY-NRLM के तहत registered महिला SHG में से होता है, और यह काम राज्य का livelihood mission, कृषि विभाग और fertilizer कंपनियां मिलकर करती हैं। आपको बस अपने block के mission office में अपने समूह की रुचि दर्ज करानी है।',
  },
  {
    q: 'Training कितने दिन की है और कौन कराता है?',
    a: 'कुल 15 दिन। पहले 5 दिन DGCA से मान्यता प्राप्त संस्थान (RPTO) में pilot training होती है, जिसके बाद Remote Pilot Certificate मिलता है। बाकी 10 दिन खेती से जुड़ा practical — spray की ऊंचाई, दवा का घोल, हवा देखकर उड़ान की योजना। समूह की एक और सदस्य (या उसके परिवार से कोई) को assistant/technician की अलग training मिलती है।',
  },
  {
    q: 'पढ़ाई कितनी चाहिए? उम्र की क्या शर्त है?',
    a: 'दसवीं पास और उम्र 18 से 65 के बीच। Remote Pilot Certificate के लिए DGCA की यही शर्तें हैं। Graduate होना जरूरी नहीं — दसवीं पास महिला भी ड्रोन pilot बन सकती है।',
  },
  {
    q: 'कमाई कितनी हो सकती है?',
    a: 'सरकार का लक्ष्य है कि हर समूह को साल में कम से कम ₹1 लाख की अतिरिक्त आमदनी हो। जमीनी हिसाब यह है — spray का rate ₹300 से ₹500 प्रति acre चलता है, ड्रोन एक acre 7-8 minute में निपटा देता है, और अच्छे दिन में 20-25 acre का काम हो जाता है। पर याद रहे, यह मौसमी काम है — खरीफ और रबी के spray के दिनों में ही मांग रहती है।',
  },
  {
    q: 'क्या खुद किसान होना या जमीन होना जरूरी है?',
    a: 'बिल्कुल नहीं। यह योजना खेती करने की नहीं, सेवा देने की है। आपके समूह के पास जमीन हो या न हो, फर्क नहीं पड़ता — ड्रोन किराए पर दूसरे किसानों के खेतों में spray के लिए जाएगा। हां, इलाके में खेती अच्छी-खासी होनी चाहिए, वरना काम ही नहीं मिलेगा।',
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
    q: 'ड्रोन खराब हो जाए तो कौन ठीक करेगा?',
    a: 'छोटी-मोटी मरम्मत के लिए ही समूह की एक सदस्य को technician की training दी जाती है। बड़ी खराबी के लिए ड्रोन कंपनी की warranty और service network है, और fertilizer कंपनियां भी field support में साथ रहती हैं। Package में एक साल का support पहले से शामिल है।',
  },
  {
    q: 'किसान को ड्रोन से spray कराने में क्या फायदा है?',
    a: 'Rate लगभग उतना ही पड़ता है जितना मजदूर से — ₹300-500 प्रति acre — लेकिन पानी 90% तक कम लगता है, दवा 30-40% तक बचती है, और एक acre का काम 7-8 minute में हो जाता है। सबसे बड़ी बात: दवा का छिड़काव करने वाले के शरीर पर नहीं गिरती, क्योंकि आदमी खेत से दूर खड़ा रहता है।',
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
        WhatsApp पर हफ्ते में तीन-चार बार यही सवाल आता है — दीदी को ड्रोन दिलवाना है, form कहां भरे? और
        जवाब सुनकर लोग मानते ही नहीं। form है ही नहीं भाई। न कोई portal, न application की कोई window। जो
        websites &ldquo;यहां apply करें&rdquo; वाला button दिखा रही हैं, वो या तो खुद confuse हैं या जानबूझ
        कर गुमराह कर रही हैं।
      </p>
      <p>तो फिर ड्रोन मिलता कैसे है?</p>
      <p>
        मिलता है, पर रास्ता ऊपर से नीचे आता है — नीचे से ऊपर नहीं जाता। इस लेख में वही असली रास्ता लिखा
        है। चयन किस क्रम में होता है, 15 दिन की training में क्या सिखाते हैं, पैसे का पूरा हिसाब, और कमाई
        का वो अंदाजा जो हवा हवाई नहीं है। किसानों के लिए भी अलग से एक हिस्सा है — जो ड्रोन लेना नहीं,
        सिर्फ अपने खेत मे spray करवाना चाहते हैं।
      </p>

      <Figure
        src="/images/articles/namo-drone-didi-yojana-shg-selection/drone-didi-spray-hero.webp"
        alt="नमो ड्रोन दीदी योजना — खेत के ऊपर छिड़काव करता कृषि ड्रोन"
        caption="महिला SHG को ड्रोन, training और support का पूरा package — किराए पर spray सेवा के लिए"
      />

      <T2>पहले यह समझिए कि योजना है क्या</T2>
      <p>
        Union Cabinet ने 28 November 2023 को मंजूरी दी थी, और 30 November को प्रधानमंत्री ने शुरुआत कर
        दी। सोच एकदम सीधी है। देश में लाखों महिला स्वयं सहायता समूह पहले से DAY-NRLM (दीनदयाल अंत्योदय
        योजना — राष्ट्रीय ग्रामीण आजीविका मिशन) में registered हैं। इनमे से चुने हुए समूहों को कृषि ड्रोन
        का पूरा package थमा दो — मशीन, training, support सब — और वे अपने इलाके के किसानों को किराए पर
        छिड़काव की सेवा दें।
      </p>
      <p>
        किसान को फायदा — हाथ के मुकाबले तेज spray, कम पानी, दवा की कम बर्बादी। महिला को फायदा — एक नया,
        इज्जत वाला तकनीकी रोजगार। और सरकार को? यह लखपति दीदी अभियान का हिस्सा है, वही मिशन जो 2 करोड़
        ग्रामीण महिलाओं की सालाना घरेलू आमदनी ₹1 लाख के पार पहुंचाना चाहता है।
      </p>
      <p>
        योजना कितनी गंभीर है, इसके दो इशारे काफी हैं। इसी साल Republic Day parade में इस programme की
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

      <Figure
        src="/images/articles/namo-drone-didi-yojana-shg-selection/shg-mahila-group.webp"
        alt="ग्रामीण महिला स्वयं सहायता समूह — नमो ड्रोन दीदी का चयन DAY-NRLM नेटवर्क से"
        caption="चयन DAY-NRLM में registered महिला SHG में से होता है — व्यक्तिगत आवेदन का कोई रास्ता नहीं"
      />

      <T2>चयन कैसे होता है — असली प्रकिया</T2>
      <p>
        यहीं पर सब उलझते हैं, तो जरा आराम से समझिए। पूरी प्रक्रिया ऊपर से नीचे चलती है:
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
        <Link href="/articles/state-kisan-yojana-list-all-states-2026" className="underline font-bold">
          हर राज्य की किसान योजना list
        </Link>.
      </p>

      <T2>Training के 15 दिन — अंदर होता क्या है</T2>
      <p>
        पहले 5 दिन DGCA से मान्यता प्राप्त Remote Pilot Training Organisation (RPTO) में बीतते हैं। उड़ान
        के नियम, safety, no-fly zone, simulator पर अभ्यास, फिर असली उड़ान। पास हुए तो Remote Pilot
        Certificate हाथ में। अगले 10 दिन खेती का practical — किस ऊंचाई से छिड़काव, किस दवा का कितना घोल,
        हवा का रुख देखकर उड़ान की योजना, nano urea और कीटनाशक के अलग अलग तरीके, और battery का प्रबंधन जो
        खेत में सबसे ज्यादा काम आता है।
      </p>
      <p>
        एक बात training से पहले सोच लेने लायक है। ड्रोन उड़ाना मुश्किल नहीं है, मुश्किल है दवा का हिसाब।
        घोल गलत बना तो किसान की फसल का नुकसान और आपकी साख — दोनो गए। इसीलिए 10 दिन वाला खेती का हिस्सा
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
        अब दूसरी तरफ से देखिए — आप किसान हैं और गांव में ड्रोन दीदी आ गई है। सेवा लेनी चाहिए या नहीं? एक
        acre धान के छिड़काव का सीधा हिसाब:
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
        यानी प्रति acre का rate लगभग बराबर बैठता है, पर पानी, दवा और समय — तीनों बचते हैं। और सबसे बड़ी
        चीज: कीटनाशक से सीधा संपर्क खत्म। जो किसान लगातार खुद spray करते हैं, उनके लिए सेहत वाली यह बात
        मजदूरी से बड़ी है — बस इसे कोई गिनता नहीं।
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
        अब हिसाब लगाइए। ₹400 के औसत rate पर 20 acre का दिन यानी ₹8,000 gross। इसमे से diesel, battery
        charging, assistant का हिस्सा और maintenance निकालिए — तो भी season के महीनों में अच्छी खासी कमाई
        बनती है।
      </p>
      <p>
        पर पूरा साल ऐसा नहीं चलता। छिड़काव की मांग खरीफ और रबी की खास खिड़कियों में ही रहती है, इसलिए
        समझदार समूह off-season के लिए भी सोचते हैं — fertilizer कंपनियों के demo contract, survey का काम,
        या आसपास के जिलों तक सेवा बढ़ाना। यह वैसा ही model है जैसे मशीन किराए पर देने का धंधा —{' '}
        <Link href="/articles/custom-hiring-centre-chc-portal" className="underline font-bold">
          CHC portal से tractor-मशीन किराए पर
        </Link>{' '}
        — बस यहां मशीन हवा में उड़ती है।
      </p>

      <T2>अपने राज्य में कहां पूछें — मिशन का नाम हर जगह अलग है</T2>
      <p>
        यह छोटी सी बात बहुतों को अटका देती है। Block office में जाकर &ldquo;NRLM&rdquo; बोलिए तो कई बार
        सामने वाला भी नहीं समझता, क्योंकि हर राज्य ने अपने आजीविका मिशन का अपना नाम रखा है। काम सबका वही
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

      <T2>अब तक का report card</T2>
      <p>
        March 2026 में सरकार ने लोकसभा में बताया कि अब तक <strong>1,094 ड्रोन</strong> बांटे जा चुके हैं,
        और trained pilots में कर्नाटक सबसे आगे चल रहा है। लक्ष्य के मुकाबले यह संख्या अभी छोटी है — और
        सच पूछिए तो यही आपके लिए मौका है। जब अगला चरण नए इलाके जोड़ेगा, तो आगे वही समूह रहेंगे जिन्होने
        पहले से अपने block mission office में रुचि दिखा रखी होगी।
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
