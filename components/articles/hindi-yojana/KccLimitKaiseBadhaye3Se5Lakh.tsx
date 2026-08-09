import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';

// Self-contained article — कोई shared component import नहीं (Rule 2)।
// Structure variant: bullet-point-heavy sections + interview-style (प्र./उ.) FAQ (Rule 3)।

const FAQS = [
  {
    q: 'क्या ₹5 लाख की सुविधा अपने आप मिल जाएगी?',
    a: 'नहीं। बजट 2025-26 में ब्याज सहायता (Modified Interest Subvention Scheme) की सीमा ₹3 लाख से ₹5 लाख हुई है — अब ₹5 लाख तक के crop loan पर सस्ती दर मिल सकती है। लेकिन आपके card की sanctioned limit बैंक ही बढ़ाता है, वह भी आपकी जमीन, फसल और repayment record देखकर। Branch जाकर enhancement की request करनी पड़ती है।',
  },
  {
    q: 'ब्याज दर असल में कितनी बैठती है?',
    a: 'Subvention के दायरे वाले crop loan पर बैंक करीब 7% सालाना लेता है; समय पर चुकाने पर 3% की छूट (Prompt Repayment Incentive) मिलाकर असरदार दर लगभग 4% रह जाती है। सीमा से ऊपर की रकम पर बैंक अपनी सामान्य दर लगाता है।',
  },
  {
    q: 'बिना जमीन गिरवी रखे कितनी रकम मिलती है?',
    a: 'RBI के निर्देश के तहत collateral-free सीमा तय होती है — उसके ऊपर की रकम पर बैंक जमीन/जमानत मांग सकता है। आपकी branch में मौजूदा collateral-free सीमा कितनी चल रही है, यह वहीं से लिखित में पूछ लें, क्योंकि यह समय-समय पर संशोधित होती है।',
  },
  {
    q: 'Renewal और enhancement में क्या फर्क है?',
    a: 'Card 5 साल के लिए बनता है, पर हर साल review/renewal होता है। Renewal में बैंक चालू limit जारी रखता है (अच्छे record पर करीब 10% सालाना बढ़ोतरी का प्रावधान भी है)। Enhancement अलग request है — जब आपकी जरूरत scale of finance के हिसाब से बढ़ी हो: नई जमीन या नई फसल।',
  },
  {
    q: 'पशुपालन/मछलीपालन के लिए भी बढ़ी सीमा का फायदा है?',
    a: 'Allied activities (dairy, poultry, fisheries) के लिए KCC पहले से है और उन पर subvention के अलग cap चलते हैं। दोनों काम करते हैं तो combined card बनवाना बेहतर है — working capital एक ही जगह से चलती है।',
  },
  {
    q: 'बैंक टाल रहा है — enhancement की request आगे कैसे बढ़ाएं?',
    a: 'पहले लिखित आवेदन दें और acknowledgement लें। फिर भी बात न बने तो उसी बैंक के grievance cell में शिकायत करें, और वहां से भी हल न निकले तो RBI के Banking Ombudsman (cms.rbi.org.in) का रास्ता खुला है। लिखित record हर स्तर पर आपका पक्ष मजबूत करता है।',
  },
  {
    q: 'बटाई (lease) पर खेती करता हूं — मेरी limit भी बढ़ सकती है?',
    a: 'हां — KCC बटाईदार, मौखिक पट्टेदार और SHG/JLG समूहों के लिए भी खुला है। दिक्कत कागज की होती है: बटाई का जो भी प्रमाण आपके राज्य में मान्य है (लिखित करार, स्व-घोषणा, ग्राम-स्तरीय प्रमाणन), वह बैंक को चाहिए। जितना पक्का कागज, उतनी आसान बढ़ोतरी।',
  },
  {
    q: 'KCC की limit बढ़ी तो क्या हर साल पूरा पैसा निकालना जरूरी है?',
    a: 'बिल्कुल नहीं — KCC एक revolving सुविधा है, credit card की तरह। ब्याज सिर्फ उतनी रकम पर लगता है जितनी आपने निकाली और जितने दिन रखी। Limit बड़ी होने का मतलब गुंजाइश है, खर्च की मजबूरी नहीं।',
  },
  {
    q: 'दो बैंकों से दो KCC ले सकते हैं?',
    a: 'नियम की मंशा एक किसान-एक card की है — दो बैंकों से एक ही जमीन पर कर्ज लेना जांच में पकड़ा जाता है और दोनों जगह record खराब करता है। जरूरत बड़ी है तो एक ही बैंक में enhancement करवाना सही रास्ता है, दूसरा card नहीं।',
  },
  {
    q: 'PM Kisan की किस्त और KCC का आपस में कोई रिश्ता है?',
    a: 'सीधा नहीं — PM Kisan अनुदान है, KCC कर्ज। पर बैंक KCC review में आपकी कुल आमदनी-स्थिति देखता है, और कई बैंक PM Kisan लाभार्थियों के लिए KCC saturation drive भी चलाते हैं। दोनों का record साफ रखना दोनों जगह काम आता है।',
  },
  {
    q: 'Overdue हो गया था, अब चुका दिया — limit कब बढ़ेगी?',
    a: 'चुकाने के बाद अगले review चक्र से आपका पक्ष फिर बनने लगता है। बैंक ताजा 1-2 चक्रों का व्यवहार देखता है — एक-दो सीजन समय पर जमा-निकासी का record बनाइए, फिर enhancement मांगिए। बीच में छोटी रकम की जरूरत हो तो renewal पर मिलने वाली सामान्य बढ़ोतरी ही सहारा है।',
  },
  {
    q: 'Digital/online enhancement का कोई तरीका है?',
    a: 'कुछ बैंक net-banking या app से KCC review की request लेने लगे हैं, और कई राज्यों में camp-mode drive भी चलते हैं। पर enhancement की जड़ — जमीन और फसल का assessment — आज भी branch स्तर पर ही होता है। Online request डालें तो भी कागज branch में ही लगेंगे।',
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

function Head2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-black text-[var(--color-text)] mt-8 mb-4 pb-2 border-b-2 border-[var(--color-border)]">
      {children}
    </h2>
  );
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="my-4 space-y-2.5 text-sm list-disc pl-5 leading-relaxed">{children}</ul>;
}

function Callout({ kind, children }: { kind: 'info' | 'warn' | 'field'; children: React.ReactNode }) {
  const cls =
    kind === 'info'
      ? 'bg-green-50 dark:bg-green-900/20 border-green-600 dark:border-green-500'
      : kind === 'warn'
        ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-500'
        : 'bg-red-50 dark:bg-red-900/20 border-red-500';
  return (
    <div className={`my-4 p-4 border-l-4 rounded-r-xl text-sm text-[var(--color-text)] leading-relaxed ${cls}`}>
      {children}
    </div>
  );
}

export default function KccLimitKaiseBadhaye3Se5Lakh({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>
        बजट 2025-26 की एक घोषणा ने करोड़ों KCC धारकों के लिए दरवाजा खोला — ब्याज सहायता योजना की सीमा{' '}
        <strong>₹3 लाख से बढ़ाकर ₹5 लाख</strong>। मतलब यह कि अब ₹5 लाख तक का फसली कर्ज भी उसी रियायती
        दर पर मिल सकता है जिस पर पहले सिर्फ ₹3 लाख तक मिलता था। लेकिन — और यह &quot;लेकिन&quot; बड़ा है — घोषणा
        से आपके card की limit अपने आप नहीं बढ़ती। वह काम आपको और आपके बैंक को मिलकर करना है। कैसे,
        यही इस लेख में।
      </p>
      <p>
        आगे बढ़ने से पहले एक शब्द-भेद, जिस पर branch की आधी बातचीत टिकी है:
      </p>
      <UL>
        <li>
          <strong>Subvention cap</strong> — सरकार तय करती है: किस रकम तक ब्याज पर रियायत मिलेगी (अब ₹5
          लाख)। घोषणा में बढ़ा यह वाला है।
        </li>
        <li>
          <strong>Sanctioned limit</strong> — बैंक तय करता है: आपको कितना मिलेगा, आपकी जमीन-फसल के हिसाब
          से। आपको बढ़वाना यह वाला है।
        </li>
      </UL>
      <p>
        जो किसान यह फर्क समझकर बात करता है, उसकी request counter पर ही आधी मंजूर हो जाती है।
      </p>

      <Head2>पहले गणित समझिए — सीमा बढ़ने से बचत कितनी?</Head2>
      <UL>
        <li>
          Subvention वाले दायरे में बैंक करीब <strong>7% सालाना</strong> पर कर्ज देता है; समय पर चुकता
          करने वालों को 3% की अतिरिक्त छूट — असरदार दर करीब <strong>4%</strong>। बाजार में इतना सस्ता
          कार्यशील पैसा किसान के लिए और कहीं नहीं है।
        </li>
        <li>
          पहले ₹3 लाख से ऊपर की रकम पर बैंक की सामान्य दर (अक्सर 9-11%) लगती थी; अब रियायत ₹5 लाख तक
          फैल गई है। ₹2 लाख के अतिरिक्त कर्ज पर मोटा-मोटा हिसाब लगाएं तो हर साल हजारों रुपये के ब्याज की
          बचत बनती है।
        </li>
        <li>
          साहूकार से तुलना भी जोड़ लीजिए — गांव में निजी उधार आज भी 24-36% सालाना पर चलता है। ₹1 लाख
          साल भर के लिए साहूकार से लेने पर ब्याज ही ₹24,000-36,000 बैठता है; वही रकम KCC से समय पर
          चुकाने वाले किसान को करीब ₹4,000 में पड़ती है।
        </li>
      </UL>
      <p>
        कहने का अर्थ — limit बढ़वाने की असली कीमत वह कागजी दौड़ नहीं है जो आपको branch तक ले जाएगी;
        असली कीमत वह है जो limit <em>न</em> बढ़वाने पर हर सीजन चुपचाप कट रही है।
      </p>

      <Callout kind="info">
        Scale of finance याद रखिए — हर जिले की technical committee फसल-वार प्रति-एकड़ खर्च तय करती है,
        और आपकी limit उसी से निकलती है। एक जैसी जमीन पर दो जिलों में अलग limit बनना सामान्य है।
        ₹5 लाख &quot;हक&quot; नहीं है — वह अधिकतम दायरा है जिस तक रियायती दर मिल सकती है।
      </Callout>

      <Head2>यह बदलाव कितना बड़ा है — आंकड़ों की जुबानी</Head2>
      <p>
        पहले यह समझ लीजिए कि KCC कोई हाशिये की scheme नहीं है — यह देश की खेती का बड़े-से-बड़ा credit
        pipeline है:
      </p>
      <UL>
        <li>
          दिसंबर 2024 तक KCC के operative loans का आंकड़ा <strong>₹10.05 लाख करोड़</strong> पार कर चुका
          था; card holders करीब <strong>7.72 करोड़</strong> — लगभग हर दूसरा किसान परिवार।
        </li>
        <li>मार्च 2014 में यही रकम ₹4.26 लाख करोड़ थी — दस साल में दोगुने से ज्यादा।</li>
        <li>
          Budget 2025-26 में subvention की सीमा ₹3 लाख से ₹5 लाख हुई (
          <a href="https://timesofindia.indiatimes.com/business/india-business/union-budget-2025-kisan-credit-card-loan-limit-increased-to-rs-5-lakh-from-rs-2-lakh/articleshow/117821241.cms" target="_blank" rel="noopener noreferrer">Times of India की budget coverage</a>
          ) — घोषणा में साफ कहा गया कि फायदा <strong>7.7 करोड़ किसानों, मछुआरों और dairy किसानों</strong>{' '}
          तक पहुंचेगा।
        </li>
      </UL>
      <p>
        इन आंकड़ों से आपके लिए एक सीधी बात निकलती है — बैंक की तरफ से KCC देना कोई एहसान नहीं, एक चालू
        धंधा है, जिसके target हर branch को मिलते हैं। PM Kisan लाभार्थियों के लिए KCC saturation drive भी
        इसी वजह से चलते हैं। Enhancement मांगते समय आप कोई असामान्य demand नहीं कर रहे — आप उस
        व्यवस्था का इस्तेमाल कर रहे हैं जो आपके लिए ही खड़ी की गई है। बात सिर्फ अपने कागज मजबूत रखने की है।
      </p>

      <Head2>Scale of Finance — limit का गणित एक उदाहरण से</Head2>
      <p>
        Limit कैसे बनती है, यह एक काल्पनिक (पर तरीके में बिल्कुल असली) हिसाब से देखिए। मान लीजिए किसी किसान
        के पास 3 एकड़ सिंचित जमीन है और वह साल में गेहूं + धान लेता है:
      </p>
      <UL>
        <li>
          <strong>फसली हिस्सा</strong> — रकबा × scale of finance। जिले में दोनों फसलों का जोड़ प्रति एकड़
          ₹35,000 बैठा तो 3 × ₹35,000 = <strong>₹1,05,000</strong>।
        </li>
        <li>
          <strong>Post-harvest / घरेलू खपत</strong> — फसली हिस्से पर 10% ऊपर से जुड़ता है।
        </li>
        <li>
          <strong>संपत्ति का रख-रखाव</strong> — फसली हिस्से पर 20% — खेती की मशीन/सिंचाई के नाम पर।
        </li>
        <li>
          <strong>हर renewal पर बढ़ोतरी</strong> — अच्छे record पर करीब 10% सालाना का प्रावधान, अगले साल
          से लागू।
        </li>
      </UL>
      <p>
        अब इस गणित को उल्टा पढ़िए — आपकी limit तभी बढ़ेगी जब इस formula में कोई अंक बढ़े। रकबा बढ़ा
        (नई जमीन, बटाई का पक्का करार), फसल बदली (कम लागत वाली से ज्यादा scale of finance वाली —
        सब्जी/गन्ना), या allied activity जुड़ी (dairy, poultry)। सिर्फ &quot;जरूरत है&quot; कहने से अंक नहीं बढ़ते —
        कागज से बढ़ते हैं। Branch जाने से पहले खुद हिसाब लगाकर जाइए कि आपके मामले में कौन सा अंक
        बढ़ा है; manager से बातचीत तब मिनटों में पटरी पर आ जाती है।
      </p>
      <p>
        ध्यान रहे — बड़े-से-बड़ा खाना पहला ही है। बाकी दोनों उसी का प्रतिशत हैं; रकबा या SOF बढ़े बिना बाकी
        सब ज्यों का त्यों रहेगा। Enhancement की बात हमेशा पहले खाने पर होनी चाहिए, ना कि &quot;कुल रकम कम लग
        रही है&quot; पर।
      </p>
      <p>
        एक बारीकी और — अपने जिले का scale of finance पूछना आपका हक है। यह कोई गुप्त दस्तावेज नहीं;
        District Level Technical Committee इसे हर साल तय करती है और branch के पास इसकी सूची होती है।
        जिस फसल का SOF ज्यादा है और आप वह उगा भी रहे हैं, पर आपकी limit पुरानी फसल के हिसाब से बनी है —
        यह enhancement का साफ, बिना-बहस वाला आधार है।
      </p>

      <Head2>आपकी limit किन तीन चीजों से बनती है</Head2>
      <UL>
        <li>
          <strong>रकबा × scale of finance</strong> — कितनी जमीन पर कौन सी फसल, और जिले में उस फसल का
          प्रति-एकड़ तय खर्च कितना।
        </li>
        <li>
          <strong>घरेलू-रखरखाव और संपत्ति-देखभाल का हिस्सा</strong> — नियम में फसली खर्च के ऊपर एक तय
          प्रतिशत जुड़ता है।
        </li>
        <li>
          <strong>आपका व्यवहार</strong> — पिछले चक्रों की जमा-निकासी।
        </li>
      </UL>
      <p>
        इन तीनों में से आप सीधे बदल सकते हैं पहला और तीसरा — फसल का सही-सही record दिखाना, और repayment
        साफ रखना। पूरा लेख इन्हीं दो पर है।
      </p>

      <Head2>Limit बढ़वाने का तरीका — branch में यह लेकर जाइए</Head2>
      <UL>
        <li>
          <strong>Updated land record</strong> — खतौनी/खसरा की ताजी नकल। नई जमीन खरीदी/बटाई पर ली है तो
          उसके कागज भी।
        </li>
        <li>
          <strong>फसल का ब्योरा</strong> — कौन सी फसलें, कितने रकबे में। Cropping pattern बदला है
          (गेहूं-धान से सब्जी/बागवानी) तो बताइए — scale of finance वहीं से बढ़ता है।
        </li>
        <li>
          <strong>Repayment का साफ record</strong> — पिछले चक्रों में समय पर जमा-निकासी। यही आपकी बड़ी
          पूंजी है; इसी पर बैंक बिना मांगे भी सालाना बढ़ोतरी देता है।
        </li>
        <li>
          <strong>लिखित enhancement आवेदन</strong> — मौखिक बात हवा हो जाती है। आवेदन दीजिए, received
          copy लीजिए।
        </li>
        <li>Annual review के समय जाना कारगर है — बैंक वैसे भी उस समय limit re-assess करता है।</li>
      </UL>

      <Callout kind="field">
        खेत से निकली सीख: एक किसान ने सिर्फ इतना किया कि review के समय branch manager को सब्जी की
        खेती वाले नए रकबे का record दिखा दिया — limit उसी चक्र में बढ़ गई, क्योंकि सब्जी का प्रति-एकड़
        scale of finance अनाज से ऊपर होता है। बैंक वही बढ़ाता है जो कागज पर दिखता है।
      </Callout>

      <Head2>Branch manager की नजर से देखिए — तो बात जल्दी बनेगी</Head2>
      <p>
        Manager की मेज पर आपका आवेदन एक सवाल में बदल जाता है — &quot;यह पैसा डूबेगा तो नहीं?&quot; उसके पास आपके
        जवाब के तीन सबूत हो सकते हैं — जमीन का कागज (खेती सचमुच इतनी है), फसल का ब्योरा (खर्च सचमुच
        इतना बनता है), और पुराना लेन-देन (यह आदमी चुकाता है)। तीनों मिल जाएं तो enhancement उसके लिए
        भी आसान फैसला है — बैंक को भी अच्छा कर्जदार चाहिए। जाने से पहले खुद से यही तीन सवाल
        पूछ लीजिए। कोई एक कमजोर है — पहले उसे ठीक करिए, फिर आवेदन दीजिए। उलटा क्रम समय भी खाता है
        और record में एक reject हुई request भी छोड़ जाता है।
      </p>
      <p>
        समय का चुनाव भी रणनीति है। बुवाई के ऐन पहले branch पर भीड़ और दबाव दोनों चरम पर होते हैं — उस
        समय enhancement के काम टलते हैं। कटाई के बाद का खाली महीना — जब आपकी वसूली भी खाते में
        ताजा जमा दिख रही हो — आवेदन का अच्छा मौसम है। तब manager के सामने आपका ताकतवर
        कागज — भरा हुआ खाता — खुद बोलता है।
      </p>

      <Head2>कब जाएं branch — timing भी एक हथियार है</Head2>
      <UL>
        <li>
          <strong>बढ़िया समय:</strong> आपके card के annual review/renewal के आसपास — तब आपकी file वैसे भी
          manager की मेज पर खुलती है, और उसी बैठक में enhancement की बात जोड़ना कम-से-कम घर्षण वाला
          रास्ता है।
        </li>
        <li>
          <strong>दूसरा अच्छा मौका:</strong> फसली सीजन शुरू होने से एक-डेढ़ महीना पहले — बैंक तब crop loan
          के target पूरे करने की मुद्रा में होते हैं।
        </li>
        <li>
          <strong>खराब समय:</strong> किस्त-वसूली और closing (जनवरी-मार्च) का दबाव वाला दौर — तब नई
          assessment की फुर्सत मुश्किल से मिलती है।
        </li>
      </UL>
      <p>
        और हां — request हमेशा लिखित में, दो प्रतियों में। एक जमा, एक पर received की मुहर लेकर वापस।
        मौखिक &quot;देख लेंगे&quot; का कोई follow-up नहीं होता; received-मुहर वाले कागज का होता है। तीस दिन में
        कोई जवाब न आए तो उसी कागज के हवाले से branch manager से लिखित स्थिति पूछिए — यह क्रम बनाए
        रखने वाले किसानों के काम पहले निपटते हैं।
      </p>

      <Head2>4% वाली दर बचाए रखने का एक ही नियम</Head2>
      <p>
        बढ़ी limit का मजा तभी है जब 3% की Prompt Repayment छूट बची रहे — और वह छूट सिर्फ एक शर्त
        मांगती है: निकाली रकम <strong>तय समय के भीतर</strong> (आम तौर पर निकासी से एक साल या फसल की
        due date, जो पहले हो) वापस जमा हो। तरीका पुराना और आजमाया हुआ है — फसल बिकते ही पूरी वसूली KCC
        खाते में डाल दीजिए, अगली बुवाई पर फिर निकाल लीजिए। खाता revolving है; जमा किए पैसे पर ब्याज
        रुक जाता है और record भी बनता जाता है। जो किसान बिक्री का पैसा घर रखकर KCC को &quot;बाद में&quot;
        चुकाते हैं, वे दोहरा घाटा उठाते हैं — ब्याज भी ज्यादा, और अगले enhancement का दावा भी कमजोर।
      </p>

      <Head2>यह भी जान लीजिए — कहां अटकते हैं मामले</Head2>
      <UL>
        <li>
          <strong>Overdue</strong> — पुरानी निकासी समय से जमा नहीं हुई तो enhancement की बात ही नहीं
          उठेगी, और 3% वाली छूट भी हाथ से जाएगी।
        </li>
        <li>
          <strong>Collateral</strong> — तय सीमा से ऊपर की रकम पर बैंक जमीन गिरवी/जमानत मांग सकता है; यह
          मांग नियम-सम्मत है, branch से लिखित में समझ लें।
        </li>
        <li>
          <strong>अधूरा record</strong> — वरासत दर्ज नहीं, खतौनी पुरानी, बटाई का कोई कागज नहीं — इनमें से
          कुछ भी हो तो पहले वह सुधरवाइए, फिर बैंक जाइए।
        </li>
      </UL>
      <p>
        KCC नया बनवाना हो तो पूरा आवेदन-तरीका{' '}
        <Link href="/articles/KisanCreditCardOnlineApply2026">इस page पर कदम-दर-कदम लिखा है</Link>, और
        कर्ज के बाकी विकल्प आपस में कैसे तुलते हैं, यह{' '}
        <Link href="/articles/KisanRinKahaSeLe2026">यहां देख लें</Link>।
      </p>

      <Callout kind="warn">
        &quot;₹5 लाख की limit approve करवा देंगे, processing fee पहले भेजो&quot; — ऐसे agent/call ठगी हैं। Limit
        enhancement की कोई अलग सरकारी fee नहीं है; जो भी charges हैं, बैंक खाते से लेता है और receipt
        देता है। OTP या passbook details phone पर किसी को न दें।
      </Callout>

      <Head2>पशुपालन जोड़ना — limit बढ़ाने का अनदेखा रास्ता</Head2>
      <p>
        जिन किसानों के घर दुधारू पशु, मुर्गीपालन या तालाब है, वे अक्सर सिर्फ फसली limit पर अटके रहते हैं,
        जबकि allied activity का working capital भी KCC के दायरे में आता है। दूध का चारा-दाना, मुर्गी
        का feed, तालाब का seed-खाद — इनका सालाना खर्च जोड़कर बताइए तो कुल assessment ऊपर जाता
        है। शर्त पुरानी — कागज पर दिखना चाहिए: पशुओं की गिनती/insurance का record, दूध की
        society की passbook, या मत्स्य-पालन का पट्टा। Subvention के cap इन गतिविधियों पर अलग चलते
        हैं, दर का बंटवारा branch से लिखित में समझ लें — पर कुल मिलाकर घर की पूरी कमाई-इकाई
        एक card पर आ जाना आपके पक्ष में है।
      </p>

      <Head2>जो सवाल branch के बाहर खड़े-खड़े पूछे जाते हैं</Head2>
      <div className="my-4 space-y-5">
        {FAQS.map(({ q, a }) => (
          <div key={q} className="text-sm leading-relaxed">
            <p className="text-[var(--color-text)]">
              <span className="font-black text-green-700 dark:text-green-400">प्र.</span>{' '}
              <span className="font-semibold">{q}</span>
            </p>
            <p className="text-[var(--color-text-muted)] mt-1">
              <span className="font-black text-[var(--color-text)]">उ.</span> {a}
            </p>
          </div>
        ))}
      </div>

      <Head2>Branch जाने से पहले की छोटी सी तैयारी</Head2>
      <p>
        पूरा लेख एक लाइन में समेटें तो — सरकार ने रियायती दर का दायरा ₹5 लाख तक खोल दिया है; अब
        उस दायरे में अपनी जगह बनाना आपका काम है। और वह काम खाली हाथ branch पहुंचने से नहीं होता।
        जाने से पहले ये चार खाने भर लीजिए — मामला एक बैठक में बनने की संभावना कई गुना बढ़ जाती है:
      </p>
      <UL>
        <li>
          <strong>मौजूदा sanctioned limit और आखिरी renewal की तारीख</strong> — दोनों KCC passbook पर लिखी
          होती हैं। Renewal खुद से एक साल से ज्यादा पुराना हो, तो बात वहीं से शुरू करिए।
        </li>
        <li>
          <strong>रकबा और मौजूदा फसल</strong> — खतौनी की ताजी नकल साथ हो। जमीन बढ़ी हो या बटाई का
          करार हो, तो यह आपकी मजबूत-से-मजबूत दलील है।
        </li>
        <li>
          <strong>अपने जिले का scale of finance</strong> — branch में पूछकर नोट कर लीजिए। आपकी फसल का SOF
          ज्यादा है पर limit पुरानी फसल पर बनी है — यह साफ-से-साफ आधार है।
        </li>
        <li>
          <strong>Allied activity का सबूत</strong> — dairy/poultry जोड़ना हो तो पशुओं की संख्या और दूध बिक्री
          की पर्ची का रिकॉर्ड साथ रखिए — जुबानी बात पर यह हिस्सा नहीं जुड़ता।
        </li>
      </UL>
      <p>
        चारों खाने भरे हुए हों, तो आप manager के सामने &quot;लिमिट बढ़ा दीजिए&quot; नहीं, बल्कि &quot;मेरा SOF × रकबा इतना
        बनता है, मेरी limit इससे कम है&quot; कह रहे होंगे — और यही दो बातों में फर्क है।
      </p>

      <p className="text-xs text-[var(--color-text-muted)] italic">
        यह लेख किन चीजों पर टिका है — ब्याज सहायता सीमा ₹3→₹5 लाख की घोषणा Union Budget 2025-26
        (वित्त मंत्री का बजट भाषण, 1 फरवरी 2025;{' '}
        <a href="https://timesofindia.indiatimes.com/business/india-business/union-budget-2025-kisan-credit-card-loan-limit-increased-to-rs-5-lakh-from-rs-2-lakh/articleshow/117821241.cms" target="_blank" rel="noopener noreferrer">TOI report</a>) से है; KCC के operative loan (₹10.05 लाख करोड़, दिसंबर 2024) और 7.72 करोड़
        card holders का आंकड़ा सरकारी release पर आधारित coverage से; और KCC योजना का ढांचा RBI/नाबार्ड के
        दिशा-निर्देशों व{' '}
        <a href="https://www.myscheme.gov.in" target="_blank" rel="noopener noreferrer">myscheme.gov.in</a>{' '}
        से। दरें और collateral-free सीमा बैंक-दर-बैंक बदल सकती हैं, अंतिम पुष्टि अपनी branch से
        करें। साहूकारी दरों का जिक्र सामान्य ग्रामीण अनुभव पर है, कोई सरकारी आंकड़ा नहीं। (जानकारी
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')} तक जांची हुई है।)
      </p>

      <div className="mt-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
        <h3 className="font-black text-[var(--color-text)] mb-3 text-base">कर्ज से जुड़े बाकी लेख</h3>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>
            <Link href="/articles/KisanCreditCardOnlineApply2026">💳 KCC Online Apply Guide</Link>
          </li>
          <li>
            <Link href="/articles/KisanRinKahaSeLe2026">🏦 Kisan Rin — कहां से लें</Link>
          </li>
          <li>
            <Link href="/articles/KisanTractorLoan2026">🚜 Tractor Loan Guide</Link>
          </li>
          <li>
            <Link href="/articles/hindi/karj-mafi-list">📋 कर्ज माफी लिस्ट 2027</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
