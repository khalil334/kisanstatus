import Link from 'next/link';
import Image from 'next/image';
import type { HindiArticle } from '@/lib/hindi-articles-data';

const FAQS = [
  {
    q: 'स्टेटस चेक करने के लिए क्या चाहिए?',
    a: 'Receipt number या policy number — जो enrollment के समय मिला था। KCC से बीमा हुआ हो और रसीद न मिली हो, तो बैंक branch से policy की copy मांग लें, उसमें application number लिखा होता है।',
  },
  {
    q: 'स्टेटस में approved दिख रहा है पर पैसा नहीं आया — क्यों?',
    a: 'अक्सर वजह बैंक-आधार seeding होती है। क्लेम का पैसा DBT से आधार-linked खाते में जाता है; NPCI seeding active न हो तो transfer वापस लौट जाता है। पहले अपने खाते की seeding चेक करें, फिर बैंक और बीमा कंपनी दोनों को application number के साथ सूचित करें।',
  },
  {
    q: '72 घंटे निकल गए, अब क्लेम मिलेगा या नहीं?',
    a: 'Localized नुकसान (ओलावृष्टि, जलभराव, बिजली गिरना) का individual क्लेम मुश्किल हो जाता है — यह window सख्त है। पर उम्मीद पूरी खत्म नहीं: अगर नुकसान पूरे area में हुआ है, तो widespread रास्ते से (CCE yield data के आधार पर) क्लेम बन सकता है, जिसमें 72 घंटे वाली सूचना की जरूरत नहीं होती। कृषि अधिकारी से अपने block की स्थिति पूछिए।',
  },
  {
    q: 'क्लेम reject हो गया — अब कहां जाएं?',
    a: 'पहले rejection की वजह लिखित में मांगें — यह आपका हक है। फिर तीन सीढ़ियां: बीमा कंपनी के district office में लिखित शिकायत, फिर जिला कृषि अधिकारी के पास grievance, और फिर राज्य स्तर। 14447 पर call करके भी शिकायत दर्ज हो जाती है — ticket number जरूर लें।',
  },
  {
    q: 'Premium कटा था पर policy ही नहीं दिख रही?',
    a: 'तुरंत बैंक जाएं, passbook की premium कटने वाली entry दिखाएं और लिखित में policy number पूछें। बैंक की गलती से policy न बनी हो, तो नियमों के हिसाब से नुकसान की भरपाई बैंक को करनी पड़ती है।',
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
  return <h2 className="text-xl font-bold mt-8 mb-3 leading-snug">{children}</h2>;
}

export default function FasalBimaClaimStatusHindi({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>
        स्टेटस देखने का सीधा रास्ता: <strong>pmfby.gov.in</strong> खोलिए, homepage पर{' '}
        <strong>&ldquo;Application Status&rdquo;</strong> पर click कीजिए, receipt number या policy number
        डालिए, captcha भरिए और <strong>Check Status</strong> दबाइए। Screen पर दिख जाएगा — application किस
        stage पर है: under processing, survey pending, claim approved या amount credited.
      </p>

      <figure className="my-6 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-md">
        <Image
          src="/images/articles/pmfby-crop-insurance-2026/status-check.webp"
          alt="किसान मोबाइल पर फसल बीमा क्लेम का स्टेटस देखता हुआ"
          width={1200}
          height={675}
          className="w-full object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
        <figcaption className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
          Receipt number हाथ में हो तो स्टेटस दो मिनट का काम है
        </figcaption>
      </figure>
      <p>
        Receipt number वही है जो बीमा कराते समय मिला था — CSC से कराया था तो पर्ची पर, खुद portal से किया था
        तो SMS और email में। नंबर खो गया है? KCC वाले किसान अपनी बैंक branch से policy की copy मांग सकते हैं।
        एक किसान policy number के लिए तीन महीने इधर-उधर फोन घुमाता रहा, जबकि उसकी branch के record में वह
        पहले दिन से पड़ा था।
      </p>
      <p>
        दूसरा रास्ता फोन का है — कृषि मंत्रालय का official <strong>Crop Insurance app</strong>। Registered
        mobile से login कीजिए, &ldquo;Check Claim Status&rdquo; खोलिए, policy ID डालिए। वही काम, छोटी screen
        पर। और एक नंबर याद रखिए — <strong>14447</strong> (कृषि रक्षक helpline)। स्टेटस पूछना, नुकसान report
        करना और शिकायत दर्ज करना — तीनों काम इसी से होते हैं।
      </p>

      <Head2>क्लेम का पूरा सफर — नुकसान से खाते तक</Head2>
      <p>
        PMFBY में दो बिल्कुल अलग रास्ते हैं, और आधी confusion इसी से होती है कि किसान को पता नहीं होता उसका
        case किस रास्ते पर है।
      </p>
      <p>
        <strong>पहला रास्ता — बड़े इलाके का नुकसान।</strong> सूखा पड़ा, पूरे क्षेत्र में बाढ़ आई, या सीजन की
        पैदावार ही गिर गई। ऐसे में आपको कुछ report करने की जरूरत नहीं। राज्य का कृषि विभाग Crop Cutting
        Experiments (CCE) करता है — चुने हुए खेतों में असली पैदावार नापी जाती है। अगर area की पैदावार guarantee
        से नीचे निकली, तो उस area के <em>सभी</em> बीमित किसानों को अपने आप क्लेम बनता है। इसमें इंतजार लंबा
        होता है क्योंकि CCE कटाई के बाद ही हो सकते हैं।
      </p>
      <p>
        <strong>दूसरा रास्ता — localized नुकसान।</strong> ओले सिर्फ आपके गांव पर गिरे। खेतों में पानी भर
        गया। या कटाई के बाद खेत में सूख रही फसल 14 दिन के अंदर बेमौसम बारिश में भीग गई। यहां क्लेम तभी बनेगा
        जब <strong>आप खुद 72 घंटे के अंदर</strong> सूचना दें।
      </p>

      <Head2>72 घंटे का नियम — जहां सबसे ज्यादा क्लेम मरते हैं</Head2>
      <p>नुकसान हुआ, घड़ी शुरू। 72 घंटे के अंदर इनमें से किसी एक जगह सूचना दीजिए:</p>
      <ol className="list-decimal pl-6 space-y-2 my-4 text-sm leading-relaxed">
        <li><strong>14447 पर call</strong> — सबसे तेज। नाम, policy number, गांव, फसल और नुकसान की वजह बताइए। Reference number लिख लीजिए।</li>
        <li><strong>Crop Insurance app</strong> — &ldquo;Report Crop Loss&rdquo; section। Photo भी लगा सकते हैं, survey में काम आती है।</li>
        <li><strong>बीमा कंपनी की helpline</strong> — policy document पर नंबर लिखा होता है।</li>
        <li><strong>बैंक branch या कृषि विभाग</strong> — लिखित application, जिसकी एक copy पर receiving लेकर अपने पास रखिए।</li>
      </ol>
      <p>
        सूचना के बाद बीमा कंपनी को 48 घंटे में acknowledge करना होता है, और survey आम तौर पर 10 दिन के अंदर।
        Survey के समय खेत पर मौजूद रहने की कोशिश कीजिए — नुकसान खुद दिखाना हमेशा बेहतर है। 72 घंटे निकलने के
        बाद की सूचना को बीमा कंपनी ठुकरा सकती है — चाहे नुकसान कितना भी असली हो।
      </p>

      <Head2>क्लेम reject क्यों होता है — 5 असली वजहें</Head2>
      <ol className="list-decimal pl-6 space-y-2 my-4 text-sm leading-relaxed">
        <li><strong>देर से सूचना</strong> — localized नुकसान में 72 घंटे की window miss। Rejection की वजह नंबर एक।</li>
        <li><strong>फसल या area notified नहीं</strong> — premium कट गया, पर जो फसल बोई वह उस block की notified list में थी ही नहीं।</li>
        <li><strong>बोई फसल और बीमा वाली फसल अलग</strong> — बैंक ने KCC के साथ गेहूं का बीमा कर दिया, किसान ने सरसों बोई। Survey में पकड़ा जाता है।</li>
        <li><strong>बैंक record की गलती</strong> — आधार mismatch, गलत खसरा नंबर, premium देर से भेजना। ऐसी गलती की भरपाई नियमों के हिसाब से बैंक को करनी पड़ती है — लिखित शिकायत कीजिए।</li>
        <li><strong>पैदावार guarantee से ऊपर</strong> — CCE का yield threshold से ऊपर आया तो क्लेम बनता ही नहीं। यह rejection नहीं, scheme का design है — बीमा नुकसान का है, हर साल मिलने वाला bonus नहीं।</li>
      </ol>

      <Head2>कितने दिन में पैसा आना चाहिए</Head2>
      <p>
        नियमों के हिसाब से yield data final होने के बाद क्लेम करीब <strong>2 महीने में settle</strong> हो
        जाना चाहिए। खरीफ 2024 से लागू revamped guidelines में देरी पर बीमा कंपनी या राज्य पर{' '}
        <strong>12% penalty</strong> का प्रावधान है — इसीलिए पिछले seasons के मुकाबले payment तेज हुई
        है। Localized क्लेम (survey वाले) इससे पहले भी निकल जाते हैं।
      </p>
      <p>
        जमीनी हकीकत थोड़ी अलग है। राज्य अगर CCE data देर से भेजे, तो पूरा settlement वहीं अटका रहता
        है — किसान की कोई गलती न होते हुए भी 3 से 6 महीने लग जाते हैं। इसलिए सीधा उसूल:{' '}
        <strong>कटाई के 2 महीने बाद भी पैसा न आए तो चुप मत बैठिए</strong> — नीचे वाली शिकायत की
        सीढ़ियां चढ़िए।
      </p>

      <figure className="my-5 rounded-2xl overflow-hidden border border-[var(--color-border)]">
        <Image
          src="/images/articles/pmfby-crop-insurance-2026/payment-received.webp"
          alt="बैंक खाते में फसल बीमा क्लेम की रकम आने की पुष्टि"
          width={1200}
          height={675}
          className="w-full object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />
        <figcaption className="text-center text-xs text-[var(--color-text-muted)] py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)]">
          Settlement की मियाद — yield data final होने के बाद करीब 2 महीने
        </figcaption>
      </figure>

      <Head2>WBCIS वाला नोट — अगर आपका बीमा मौसम-आधारित है</Head2>
      <p>
        कुछ राज्य कुछ फसलों पर PMFBY की जगह WBCIS (Weather Based Crop Insurance Scheme) चलाते हैं।
        इसमें क्लेम का हिसाब weather station के data से होता है — बारिश कम हुई, तापमान सीमा से बाहर
        गया, तो formula से payout अपने आप बनता है। न survey, न 72 घंटे की भाग-दौड़। स्टेटस उसी
        National Crop Insurance Portal पर दिखता है। आपकी policy कौनसी है, यह policy document के ऊपर
        ही लिखा होता है — पहले वह देख लीजिए, वरना गलत process के पीछे भागते रहेंगे।
      </p>

      <Head2>पैसा नहीं आ रहा — शिकायत की सीढ़ियां</Head2>
      <p>
        कटाई के 2 महीने बाद भी पैसा न आए तो चुप मत बैठिए। हर सीढ़ी पर application number, policy copy और
        पिछली बातचीत का record साथ रखिए — बिना record के शिकायत सिर्फ शिकायत है, record के साथ वह case है।
      </p>
      <ol className="list-decimal pl-6 space-y-2 my-4 text-sm leading-relaxed">
        <li><strong>बीमा कंपनी</strong> — policy पर लिखे toll-free पर call, फिर district office में लिखित शिकायत। 7-10 दिन का समय दीजिए।</li>
        <li><strong>14447 / कृषि रक्षक portal</strong> — grievance दर्ज कीजिए, ticket number लीजिए।</li>
        <li><strong>जिला स्तर</strong> — जिला कृषि अधिकारी के नाम लिखित application। District Level Monitoring Committee PMFBY की निगरानी करती है।</li>
        <li><strong>राज्य स्तर</strong> — जिले से हल न निकले तो राज्य कृषि विभाग।</li>
      </ol>
      <p>
        और अगर status में &ldquo;approved&rdquo; है पर खाते में कुछ नहीं आया — दिक्कत अक्सर NPCI seeding की
        होती है। यह वही seeding है जो PM Kisan की किस्त रोकती है —{' '}
        <Link href="/articles/hi/npci-aadhaar-seeding">NPCI आधार seeding वाली गाइड</Link> में इसे ठीक करने
        का पूरा तरीका है।
      </p>

      <Head2>एक जरूरी चेतावनी</Head2>
      <p>
        किसी भी &ldquo;क्लेम जल्दी दिलवाने वाले&rdquo; agent को पैसे मत दीजिए। न status check का कोई charge
        है, न शिकायत का। जो site या आदमी &ldquo;फसल बीमा list में नाम देखो, पैसे दो&rdquo; बोले — वह fraud
        है। Official रास्ते सिर्फ तीन हैं: pmfby.gov.in, Crop Insurance app और 14447।
      </p>

      <p className="text-xs text-[var(--color-text-muted)] italic mt-6">
        यहां दी गई जानकारी{' '}
        <a href="https://pmfby.gov.in" target="_blank" rel="noopener noreferrer">pmfby.gov.in</a>{' '}
        (कृषि एवं किसान कल्याण मंत्रालय) की official जानकारी पर आधारित है। नियम समय के साथ बदल सकते हैं —
        बड़ा फैसला लेने से पहले portal पर एक नजर जरूर डालें।
      </p>

      <div className="mt-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
        <h3 className="font-black text-[var(--color-text)] mb-3 text-base">इससे पहले ये पढ़ लो</h3>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>
            <Link href="/articles/PmfbyCropInsurance2026">PMFBY policy कैसे ली जाती है — पूरी गाइड</Link>
          </li>
          <li>
            <Link href="/calculator/pmfby-premium">फसल बीमा premium calculator</Link>
          </li>
          <li>
            <Link href="/articles/PmKisanPaymentFailedFix2026">DBT payment failed — ठीक करने का तरीका</Link>
          </li>
        </ul>
      </div>

      <Head2>सवाल जो हर अटके क्लेम वाला पूछता है</Head2>
      <div className="space-y-4">
        {FAQS.map((f) => (
          <div key={f.q}>
            <p className="font-semibold text-sm mb-1">{f.q}</p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
    </>
  );
}
