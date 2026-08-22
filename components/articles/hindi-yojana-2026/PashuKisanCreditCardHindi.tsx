import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { buildFaqSchema } from '@/lib/faq-schema';

const FAQS = [
  {
    q: 'पशु KCC के लिए जमीन जरूरी है क्या?',
    a: 'नहीं — यही इस card की सबसे बड़ी खूबी है। Crop KCC में limit जमीन के हिसाब से बनती है, पर animal husbandry KCC में limit पशु के हिसाब से बनती है। भूमिहीन पशुपालक, किराए की जमीन वाला परिवार, या सिर्फ 2 भैंस रखने वाला मजदूर भी apply कर सकता है। Bank को पशु दिखने चाहिए — tagged और record में — जमीन नहीं।',
  },
  {
    q: 'पहले से crop KCC है — क्या दूसरा card मिलेगा?',
    a: 'दूसरा card नहीं मिलता, और मांगना भी नहीं चाहिए। Bank आपके existing KCC में ही animal husbandry का sub-limit जोड़ता है — यानी limit enhance होती है। Bank जाइए, बोलिए "KCC में AH sub-limit add करवाना है", पशुओं का record दिखाइए।',
  },
  {
    q: 'Interest सच में 4% है या सिर्फ ads में?',
    a: '4% कोई अलग rate नहीं — यह math है। Loan 7% पर मिलता है (सरकारी subvention के बाद)। समय पर पूरा repay करें तो 3% का prompt repayment incentive अलग से मिलता है। 7 घटा 3 = 4% effective। शर्त वही है: due date से पहले repayment। एक दिन भी late हुए तो incentive गया।',
  },
  {
    q: 'कितने तक का loan बिना guarantee के मिलता है?',
    a: 'जनवरी 2025 से RBI ने collateral-free agriculture loan की limit ₹1.6 लाख से बढ़ाकर ₹2 लाख कर दी है। मतलब ₹2 लाख तक न जमीन गिरवी, न FD, न guarantor। इससे ऊपर की राशि पर bank security मांगेगा। पुराने blogs अभी भी ₹1.6 लाख लिख रहे हैं — वह दिसंबर 2024 तक का आंकड़ा है।',
  },
  {
    q: 'Bank वाले कह रहे हैं पशु का बीमा करवाना पड़ेगा — यह सही है?',
    a: 'हां, यह normal requirement है, fraud नहीं। Bank का पैसा पशु पर लग रहा है — पशु मर गया तो loan डूबा। इसलिए ज्यादातर bank tagged और insured पशु पर ही limit बनाते हैं। Premium छोटा होता है और कुछ राज्यों में subsidy भी मिलती है।',
  },
];

const FAQ_SCHEMA = buildFaqSchema(FAQS);

function Head2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold mt-8 mb-3 leading-snug">{children}</h2>;
}

export default function PashuKisanCreditCardHindi({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>
        पहली बात जो कोई साफ नहीं बताता: <strong>पशु किसान क्रेडिट कार्ड कोई नई या अलग योजना नहीं है।</strong>{' '}
        यह वही Kisan Credit Card है जो 2019 में animal husbandry और fisheries तक बढ़ाया गया था। हरियाणा सरकार
        ने इस extension को अपना नाम दिया, camp लगाए — और &ldquo;पशु किसान क्रेडिट कार्ड&rdquo; brand बन गया।
        बाकी राज्यों में भी यही चीज मिलती है, बस वहां इसे KCC-AH या &ldquo;KCC for animal husbandry&rdquo;
        कहते हैं।
      </p>
      <p>
        फर्क समझना इसलिए जरूरी है क्योंकि हरियाणा के बाहर bank में &ldquo;पशु किसान क्रेडिट कार्ड का form
        दो&rdquo; बोलेंगे तो clerk उल्टा-सीधा जवाब दे सकता है। सही शब्द हैं: <em>KCC for animal husbandry /
        dairy के लिए working capital</em>। यह बोलिए, बात तुरंत समझ आ जाएगी।
      </p>

      <Head2>हर पशु पर कितना loan — असली आंकड़े</Head2>
      <p>
        Limit पशु के हिसाब से बनती है — हर पशु की एक scale of finance होती है जो district level committee तय
        करती है। नीचे हरियाणा के आंकड़े हैं, जो इस card के साथ सबसे ज्यादा quote होते हैं। दूसरे राज्यों में
        अपने district के हिसाब से थोड़ा ऊपर-नीचे होगा — इन्हें guarantee नहीं, benchmark समझिए।
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-[var(--color-border)]">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] px-3 py-2 text-left font-bold">पशु</th>
              <th className="border border-[var(--color-border)] px-3 py-2 text-left font-bold">Loan प्रति पशु (हरियाणा scale)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2">भैंस</td>
              <td className="border border-[var(--color-border)] px-3 py-2">₹60,249</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2">गाय</td>
              <td className="border border-[var(--color-border)] px-3 py-2">₹40,783</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2">बकरी / भेड़</td>
              <td className="border border-[var(--color-border)] px-3 py-2">₹4,063</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2">सूअर</td>
              <td className="border border-[var(--color-border)] px-3 py-2">₹16,337</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2">मुर्गी (layer)</td>
              <td className="border border-[var(--color-border)] px-3 py-2">₹720</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2">मुर्गी (broiler)</td>
              <td className="border border-[var(--color-border)] px-3 py-2">₹161</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        दो भैंस हैं? 60,249 × 2 = ₹1,20,498 की limit बन सकती है। तीन भैंस और दो गाय? करीब ₹2.6 लाख। Overall
        cap ₹3 लाख है। ध्यान रहे — यह <em>working capital</em> है: चारा, दाना, दवाई, बिजली, doctor का खर्च।
        पशु खरीदने के लिए अलग term loan होता है, उस पर यह subvention वाला math apply नहीं होता।
      </p>

      <Head2>जमीन नहीं है? यही तो इसका असली काम है</Head2>
      <p>
        Crop KCC का दरवाजा जमीन से खुलता है — जितनी जमीन, उतनी limit। इसी वजह से भूमिहीन पशुपालक सालों तक
        bank credit से बाहर रहे। सूद पर पैसा उठाया, 2-3% महीना दिया, और दूध का मुनाफा ब्याज में चला गया।
      </p>
      <p>Animal husbandry KCC में limit का आधार पशु है, जमीन नहीं। मतलब:</p>
      <ul className="list-disc pl-6 space-y-1.5 my-4 text-sm leading-relaxed">
        <li>भूमिहीन पशुपालक apply कर सकता है</li>
        <li>किराए के shed या पट्टे की जमीन वाला भी</li>
        <li>महिला के नाम पशु हैं तो महिला के नाम card बनेगा</li>
        <li>SHG / joint liability group भी ले सकते हैं</li>
      </ul>
      <p>
        शर्तों में बस इतना है: पशु असली और आपके होने चाहिए (tagged, record में), आधार-bank KYC clean हो, और
        पिछला कोई loan NPA न हो। हरियाणा में पशुओं की 12-digit tagging के बिना file आगे नहीं बढ़ती — दूसरे
        राज्यों में भी tagging अब धीरे-धीरे जरूरी हो रही है।
      </p>

      <Head2>4% वाला math — एक बार में समझ लीजिए</Head2>
      <ol className="list-decimal pl-6 space-y-2 my-4 text-sm leading-relaxed">
        <li>Bank का base rate होता है ~9%। सरकार bank को interest subvention देती है, इसलिए आपको loan <strong>7% पर</strong> मिलता है।</li>
        <li>Due date तक पूरा repay कर दिया तो <strong>3% का prompt repayment incentive</strong> मिलता है।</li>
        <li>7 − 3 = <strong>4% effective</strong>। यानी 4% वाला rate सिर्फ समय पर चुकाने वाले को मिलता है।</li>
      </ol>
      <p>
        ₹1 लाख की limit पूरे साल use की और समय पर लौटा दी — ब्याज करीब ₹4,000। वही पैसा गांव के सूद पर लिया
        होता तो 24-36% के हिसाब से ₹24,000-₹36,000 जाता। फर्क यह है।
      </p>
      <p>
        <strong>एक दिन की चूक भी महंगी है।</strong> Due date निकल गई तो 3% incentive पूरा चला जाता है। दूध का
        payment जिस तारीख को आता है, repayment उसी हिसाब से plan कीजिए।
      </p>
      <p>
        Collateral की बात: जनवरी 2025 से RBI ने बिना security वाले agriculture loan की सीमा <strong>₹2
        लाख</strong> कर दी है (पहले ₹1.6 लाख थी)। ₹2 लाख तक न जमीन गिरवी, न guarantor। उसके ऊपर bank
        security मांगेगा, और यह जायज है।
      </p>

      <Head2>Bank में क्या बोलना है, क्या साथ ले जाना है</Head2>
      <p>
        Application किसी portal पर नहीं, bank branch में होती है — वही branch बेहतर जहां आपका खाता पहले से
        है। Counter पर यह बोलिए: <em>&ldquo;KCC for animal husbandry के लिए apply करना है, working capital
        limit चाहिए — मेरे पास इतने पशु हैं।&rdquo;</em> Form का नाम हर bank में थोड़ा अलग है, पर यह एक line
        काम करा देगी।
      </p>
      <ul className="list-disc pl-6 space-y-1.5 my-4 text-sm leading-relaxed">
        <li>आधार card + PAN (या form 60)</li>
        <li>Bank passbook / खाता detail</li>
        <li>Passport size photo (2)</li>
        <li>पशुओं का record — tagging number, संख्या, बीमा हो तो policy</li>
        <li>जमीन हो तो उसका कागज (जरूरी नहीं, पर limit बढ़ाने में काम आता है)</li>
      </ul>
      <p>
        Bank का field officer पशु देखने आ सकता है — यह normal process है। Application की acknowledgement
        जरूर लीजिए; receiving के बिना आप कुछ prove नहीं कर सकते। Card बनने के बाद यह revolving limit की तरह
        चलता है — use कीजिए, चुकाइए, फिर use कीजिए। पूरा KCC process step-by-step समझना हो तो{' '}
        <Link href="/articles/KisanCreditCardOnlineApply2026">KCC online apply वाली guide</Link> में है।
      </p>

      <Head2>किस bank में जाएं — और camp का रास्ता</Head2>
      <p>
        यह सुविधा सिर्फ बड़े commercial banks तक सीमित नहीं है। <strong>Regional Rural Bank (ग्रामीण
        bank)</strong> और <strong>district cooperative bank</strong> भी KCC-AH बनाते हैं — और गांव के
        पशुपालक के लिए अक्सर वही आसान पड़ते हैं, क्योंकि वहां स्टाफ इस product को रोज handle करता
        है। जिस bank में आपका खाता पहले से चल रहा है और transaction record साफ है, वहां file सबसे
        तेज़ बढ़ती है।
      </p>
      <p>
        दूसरा रास्ता: सरकार समय-समय पर <strong>KCC saturation camp</strong> चलाती है — खासकर dairy
        cooperative से जुड़े पशुपालकों के लिए। आप दूध society/समिति में दूध डालते हैं तो सचिव से
        पूछिए — camp की date आती है तो form वहीं भर जाता है और society का दूध record खुद income proof
        का काम कर देता है। जिनका दूध payment society के जरिए bank खाते में आता है, उनकी approval
        आमतौर पर आसान होती है — bank को आमदनी का सबूत record में दिख जाता है।
      </p>

      <Head2>Card मिलने के बाद — इसे चलाने का सही तरीका</Head2>
      <p>
        KCC एक revolving limit है, एकमुश्त loan नहीं। मतलब: जितना चाहिए उतना निकालिए, जब दूध का
        payment आए तो वापस डाल दीजिए — ब्याज सिर्फ उतने दिन और उतनी राशि पर लगता है जितनी आपने
        सच में use की। पूरी limit निकालकर घर में cash रखना सबसे बड़ी गलती है — ब्याज पूरी राशि पर
        चढ़ता रहेगा।
      </p>
      <ul className="list-disc pl-6 space-y-1.5 my-4 text-sm leading-relaxed">
        <li>चारा-दाना जैसे बड़े खर्च के लिए ही limit से निकालिए; छोटे रोजमर्रा खर्च दूध की आमदनी से चलाइए</li>
        <li>दूध का payment आते ही पहले KCC में डालिए — ब्याज के दिन घटेंगे</li>
        <li>साल में एक बार account को पूरा settle करके renew करवाइए — यही record enhancement के समय काम आता है</li>
        <li>KCC का पैसा शादी, मकान, mobile में मत लगाइए — diversion पकड़ा गया तो subvention भी जाएगा और अगली limit भी</li>
      </ul>
      <p>
        एक प्रैक्टिकल हिसाब समझिए। दो भैंस वाले परिवार का महीने का चारा-दाना खर्च मोटा-मोटी
        ₹8,000-₹12,000 बैठता है। पहले यह खर्च दुकान की उधारी पर चलता था — जहां भाव भी ज्यादा
        और ऊपर से एहसान अलग। KCC से वही खरीद cash में सीधे mandi/dealer से होती है — भाव में ही
        5-7% का फर्क आ जाता है, ब्याज की बचत अलग।
      </p>

      <Head2>Tagging कैसे होती है — जिस पर आधी files अटकती हैं</Head2>
      <p>
        Tagging का मतलब है पशु के कान में 12-digit नंबर वाला पीला tag — यही नंबर सरकारी
        database में पशु की पहचान है, आधार जैसा समझ लीजिए। यह काम सरकारी पशु चिकित्सालय या
        गांव आने वाले पशुधन सहायक / पशु सखी के जरिए होता है — आमतौर पर free या मामूली खर्च में।
        टीकाकरण (vaccination) camp के दिन करवा लें तो एक ही चक्कर में दोनों काम हो जाते हैं।
      </p>
      <p>
        Bank जाने से पहले tag का नंबर किसी कागज पर लिख लीजिए और पशु के साथ एक photo भी रख
        लीजिए जिसमें tag दिखे। Field officer के आने से पहले ये दो चीजें तैयार हों तो verification
        उसी दिन निपट जाता है — वरना दूसरा चक्कर लगता है और file एक-दो हफ्ते और खिंच जाती है।
        बिना tag वाला पशु bank के record में गिना ही नहीं जाता — चाहे आपके पास दस भैंसें खड़ी हों।
      </p>

      <Head2>कितना time लगता है — ईमानदार जवाब</Head2>
      <p>
        कागज पूरे हों, पशु tagged हों और KYC साफ हो — तो काम आमतौर पर 2-4 हफ्ते में हो जाता है:
        application, field visit, बीमा, फिर limit sanction। किसी भी स्टेप पर महीना भर से ज्यादा
        रुके तो चुप मत बैठिए — acknowledgement लेकर branch manager से लिखित में वजह पूछिए। RBI के
        निर्देश हैं कि KCC applications तय समय में निपटाई जाएं — लिखित सवाल का लिखित जवाब देना
        bank की जिम्मेदारी बन जाती है। उससे भी बात न बने तो bank की customer grievance और फिर
        RBI Ombudsman (cms.rbi.org.in) का रास्ता खुला है — यह free है, कोई वकील नहीं चाहिए।
      </p>

      <Head2>Application क्यों अटकती या reject होती है</Head2>
      <ol className="list-decimal pl-6 space-y-2 my-4 text-sm leading-relaxed">
        <li><strong>CIBIL / पुराना default</strong> — कोई loan NPA है या settlement किया है तो file वहीं रुक जाती है।</li>
        <li><strong>पशु tagged नहीं</strong> — tagging पशु चिकित्सक / पशुपालन विभाग से होती है, free या मामूली खर्च में।</li>
        <li><strong>बीमा से इनकार</strong> — bank insured पशु पर ही limit बनाता है। Premium को खर्चा नहीं, loan की शर्त समझिए।</li>
        <li><strong>दूसरे bank में पहले से KCC</strong> — छुपाया तो बाद में पकड़ा जाता है। सच बताइए, sub-limit वाला रास्ता वैसे भी बेहतर है।</li>
        <li><strong>अधूरा KYC</strong> — आधार में नाम की spelling, mobile link नहीं, dormant खाता। छोटी चीजें, पर file इन्हीं पर महीनों लटकती है।</li>
      </ol>
      <p>
        एक बात जो कई बार देखने को मिली: लोग भैंस के लिए ₹60,000 वाली limit सुनकर जाते हैं और ₹25,000-₹30,000
        की approval पर नाराज हो जाते हैं। Bank scale of finance के अंदर अपना assessment भी लगाता है। कम limit
        मिलना reject होना नहीं है — 6 महीने का अच्छा record बनाइए, enhancement मांगिए।
      </p>

      <Head2>Fraud से बचिए — यह चीजें इस card में होती ही नहीं</Head2>
      <p>
        “पशु किसान क्रेडिट कार्ड” सर्च करने पर जो sites और YouTube videos मिलते हैं, उनमें से कई
        गुमराह करते हैं। तीन चीजें पक्की याद रखिए:
      </p>
      <ul className="list-disc pl-6 space-y-1.5 my-4 text-sm leading-relaxed">
        <li><strong>कोई online application portal नहीं है।</strong> जो site “पशु KCC online form” भरवाकर आधार और OTP मांगे, वह आपका data ले रही है। Application सिर्फ bank branch या सरकारी camp में होती है।</li>
        <li><strong>कोई processing fee नहीं है।</strong> ₹3 लाख तक के KCC पर banks processing/documentation charges आमतौर पर waive करते हैं। कोई agent “file आगे बढ़वाने” के ₹2,000-₹5,000 मांगे तो सीधे branch manager से बात कीजिए।</li>
        <li><strong>कोई “list में नाम check” नहीं होता।</strong> यह loan product है, लाभार्थी सूची वाली योजना नहीं। “पशु KCC लिस्ट 2026” जैसी कोई चीज exist नहीं करती।</li>
      </ul>
      <p>
        अगर किसी call या message में “आपका पशु KCC approve हो गया, OTP बताइए” आए — काट दीजिए।
        Bank कभी OTP नहीं मांगता। ऐसी घटना हो जाए तो 1930 (cyber crime helpline) पर तुरंत report
        कीजिए — पहले घंटे में report होने पर पैसा रुकने के chances सबसे ज्यादा होते हैं।
      </p>

      <Head2>KCC पहले से है — तो यह पढ़िए</Head2>
      <p>
        दूसरा card नहीं मिलेगा, और इसकी जरूरत भी नहीं। Rule यह है: crop KCC वाले किसान को animal husbandry के
        लिए <strong>उसी limit में sub-limit</strong> मिलता है। Total (crop + AH) ₹3 लाख के अंदर subvention
        मिलता है; सिर्फ AH/fisheries वाले किसान के लिए subvention की अपनी cap ₹2 लाख है।
      </p>
      <p>
        Limit already ₹3 लाख के पास है और और चाहिए? वह अलग कहानी है —{' '}
        <Link href="/articles/hi/kcc-limit-kaise-badhaye">KCC limit 3 से 5 लाख कैसे बढ़ती है</Link> वाली guide
        में detail से लिखा है। और पशु खरीदने के लिए बड़ा पैसा चाहिए (working capital नहीं, investment) तो{' '}
        <Link href="/articles/dairy-farm-loan-without-collateral">बिना collateral dairy loan वाली guide</Link>{' '}
        का रास्ता देखिए।
      </p>

      <Head2>एक line में पूरी बात</Head2>
      <p>
        पशु हैं, tagged हैं, और आप समय पर चुका सकते हैं — तो यह गांव में मिलने वाला सबसे सस्ता
        working capital है। 4% का रास्ता सिर्फ समय पर repayment से खुलता है, और सबसे बड़ा फायदा
        उन्हें है जिनके पास जमीन नहीं — क्योंकि यहां limit का आधार पशु है। Bank जाने से पहले पशुओं
        की tagging और अपना KYC दुरुस्त कर लीजिए — आधी files इन्हीं दो चीजों पर अटकती हैं।
      </p>

      <p className="text-xs text-[var(--color-text-muted)] italic mt-6">
        यह जानकारी RBI के KCC-AH interest subvention circulars और हरियाणा पशुपालन विभाग (pashudhanharyana.gov.in)
        की scale of finance पर आधारित है। अपने district की exact scale bank से confirm करें।
      </p>

      <div className="mt-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
        <h3 className="font-black text-[var(--color-text)] mb-3 text-base">इससे पहले यह पढ़ लो</h3>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>
            <Link href="/articles/KisanCreditCardOnlineApply2026">Kisan Credit Card online apply — पूरा process</Link>
          </li>
          <li>
            <Link href="/articles/dairy-farm-loan-without-collateral">Dairy farm loan बिना collateral</Link>
          </li>
          <li>
            <Link href="/articles/sbi-dairy-loan-interest-rate">SBI dairy loan — interest और process</Link>
          </li>
        </ul>
      </div>

      <Head2>असली सवाल, सीधे जवाब</Head2>
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
