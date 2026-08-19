import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';

const FAQS = [
  {
    q: 'पशु शेड योजना का online form कहां भरें?',
    a: 'कहीं नहीं — यही इस योजना की सबसे बड़ी गलतफहमी है। MGNREGA के individual beneficiary works का कोई online form नहीं होता। काम ग्राम पंचायत के जरिए होता है: लिखित आवेदन पंचायत में, ग्राम सभा से नाम approve, फिर work sanction। जो site "पशु शेड registration" का form दिखाए, वहां आधार या OTP बिल्कुल मत डालिए।',
  },
  {
    q: 'कितने पशु होने पर शेड मिलेगा?',
    a: 'ज्यादातर राज्यों में कम से कम 2-3 पशु (गाय/भैंस) पर cattle shed का work sanction होता है। बकरी और मुर्गी के shelter के अपने अलग नियम हैं। Exact requirement राज्य की MGNREGA guidelines में होती है — अपने ग्राम रोजगार सेवक से अपने राज्य का नियम पूछिए।',
  },
  {
    q: '₹1.6 लाख सबको मिलता है क्या?',
    a: 'नहीं। ₹1.6 लाख कोई fixed राष्ट्रीय राशि नहीं है — यह ऊपर की range है जो 4 से ज्यादा पशु होने पर कुछ राज्यों में बनती है। कम पशु पर estimate ₹75,000-₹80,000 के आस-पास रहता है। असली राशि आपके work के technical estimate से तय होती है।',
  },
  {
    q: 'पैसा सीधा खाते में आता है क्या?',
    a: 'पूरी राशि एक साथ नहीं। मजदूरी NREGA wage rate से muster roll के हिसाब से आती है (आप खुद अपने शेड पर काम करके मजदूरी ले सकते हैं), और material का भुगतान vendor के against होता है। यह construction work है, cash transfer योजना नहीं।',
  },
  {
    q: 'Job card नहीं है तो क्या करें?',
    a: 'पहले job card बनवाइए — यह free है। ग्राम पंचायत में परिवार के वयस्क सदस्यों के नाम, photo और आधार के साथ आवेदन दीजिए। Job card के बिना MGNREGA का कोई भी individual work sanction नहीं हो सकता।',
  },
  {
    q: 'सरपंच या रोजगार सेवक file आगे नहीं बढ़ा रहा — क्या करें?',
    a: 'पहले लिखित आवेदन की receiving लीजिए (copy पर date और sign)। ग्राम सभा की meeting में अपना नाम individual works की list में जुड़वाने की बात रखिए। फिर भी न हो तो BDO / Programme Officer को लिखित शिकायत दीजिए और शिकायत का नंबर लेकर संभाल कर रखिए।',
  },
  {
    q: 'शेड पहले खुद बनवा लिया, अब पैसा मिल जाएगा?',
    a: 'नहीं मिलेगा। MGNREGA में पहले work sanction होता है, फिर काम शुरू होता है — muster roll, measurement book और geo-tagged photos के साथ। Sanction से पहले बने शेड पर payment का कोई रास्ता नहीं है।',
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

export default function MgnregaPashuShedYojanaHindi({ article }: { article: HindiArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <p>
        यह guide उस किसान के लिए है जिसके पास 2-3 या उससे ज्यादा पशु हैं, MGNREGA job card है (या बन सकता
        है), और पशुओं के लिए पक्का शेड नहीं है। MGNREGA के individual beneficiary works में अपनी निजी जमीन
        पर cattle shed बनवाने का इंतजाम है — इसी को लोग &ldquo;पशु शेड योजना&rdquo; कहते हैं।
      </p>
      <p>
        पर एक बात पहले ही साफ — <strong>इसका कोई online application form नहीं है।</strong> न कोई
        registration portal, न last date, न कोई list जिसमें नाम check होता है। यह MGNREGA की एक work
        category है जो ग्राम पंचायत के जरिए sanction होती है। जो site आपसे form भरवा रही है, वह या तो
        ad-clicks के लिए है या आपका data लेने के लिए।
      </p>

      <Head2>यह योजना असल में है क्या</Head2>
      <p>
        MGNREGA सिर्फ सड़क-तालाब खोदने का program नहीं है। इसकी works list में एक category है —{' '}
        <strong>individual beneficiary works</strong> — जिसमें किसी एक परिवार की निजी जमीन पर asset बनाया जा
        सकता है। इसी में पशुओं के shelter आते हैं: cattle shed (गाय-भैंस), goat shelter, poultry shelter।
      </p>
      <p>
        शेड में बनता क्या है? पक्का floor, हवादार छत, चारा-नांद और urine tank/नाली — ताकि गोबर-मूत्र एक जगह
        इकट्ठा हो और पशु सूखी जगह बैठे। Design का technical estimate पंचायत का junior engineer बनाता है,
        इसलिए size और items पशुओं की संख्या के हिसाब से तय होते हैं।
      </p>
      <p>
        और यह समझना जरूरी है: यह <em>construction work</em> है, cash योजना नहीं। पैसा दो हिस्सों में बंटता
        है — labour (NREGA मजदूरी, muster roll से) और material (cement, सरिया, चादर — vendor payment)। आप
        खुद अपने शेड पर मजदूरी करें तो wage भी आपके खाते में आती है। पर &ldquo;₹1.6 लाख खाते में
        आएंगे&rdquo; वाली सोच लेकर चलेंगे तो निराशा होगी।
      </p>

      <Head2>कौन ले सकता है</Head2>
      <ol className="list-decimal pl-6 space-y-2 my-4 text-sm leading-relaxed">
        <li><strong>MGNREGA job card</strong> — परिवार के नाम active job card होना चाहिए। नहीं है तो पहले वह बनवाइए, free है।</li>
        <li><strong>अपनी जमीन और पशु</strong> — शेड आपकी निजी जमीन पर बनेगा, और पशु सच में होने चाहिए। ज्यादातर राज्यों में 2-3 पशु minimum मांगे जाते हैं। Verification में पशु गिने जाते हैं।</li>
        <li><strong>Priority category में आना मदद करता है</strong> — SC/ST, BPL, छोटे-सीमांत किसान, महिला-मुखिया परिवार। General category का किसान भी ले सकता है, पर आवेदन ज्यादा हों तो priority वाले पहले आते हैं।</li>
      </ol>

      <Head2>कितना पैसा — table से पहले यह पढ़िए</Head2>
      <p>
        Internet पर ₹75,000 / ₹1,16,000 / ₹1,60,000 के आंकड़े घूमते हैं। यह कुछ राज्यों के estimates से निकले
        हैं और अब हर blog इन्हें national rate की तरह छापता है। सच यह है:{' '}
        <strong>कोई fixed राष्ट्रीय राशि notify नहीं है</strong> — राशि आपके राज्य की guidelines और work के
        technical estimate से तय होती है। नीचे की table को अंदाजा समझिए, guarantee नहीं।
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border border-[var(--color-border)]">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] px-3 py-2 text-left font-bold">पशु</th>
              <th className="border border-[var(--color-border)] px-3 py-2 text-left font-bold">अनुमानित range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2">2-3 पशु</td>
              <td className="border border-[var(--color-border)] px-3 py-2">~₹75,000-₹80,000</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2">4 पशु</td>
              <td className="border border-[var(--color-border)] px-3 py-2">~₹1,10,000-₹1,16,000</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2">4 से ज्यादा</td>
              <td className="border border-[var(--color-border)] px-3 py-2">~₹1,60,000 तक</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Head2>आवेदन का असली रास्ता — ग्राम पंचायत से होकर</Head2>
      <ol className="list-decimal pl-6 space-y-2 my-4 text-sm leading-relaxed">
        <li><strong>लिखित आवेदन लिखिए</strong> — सादा कागज पर: नाम, job card नंबर, पशुओं की संख्या, जमीन का विवरण, और यह कि आप MGNREGA individual beneficiary work के तहत cattle shed चाहते हैं। दो copy बनाइए।</li>
        <li><strong>ग्राम पंचायत में जमा कीजिए</strong> — ग्राम रोजगार सेवक या सचिव को। एक copy पर receiving (date + sign) जरूर लीजिए।</li>
        <li><strong>ग्राम सभा में नाम जुड़वाइए</strong> — individual works की list ग्राम सभा से approve होकर पंचायत के annual action plan में जाती है। Meeting में खुद जाइए और अपना नाम list में बुलवाइए। यही असली दरवाजा है — आवेदन देना काफी नहीं।</li>
        <li><strong>Technical sanction का इंतजार</strong> — नाम plan में आने के बाद JE estimate बनाता है, फिर sanction होता है। इसके बाद ही काम शुरू।</li>
        <li><strong>काम के दौरान</strong> — muster roll में नाम, measurement book में entry, geo-tagged photo। आप खुद मजदूरी करें तो wage सीधे बैंक खाते में।</li>
      </ol>

      <Head2>Job card नहीं है? पहले यह काम करिए</Head2>
      <p>
        बिना job card के आगे की कोई बात शुरू ही नहीं होती, इसलिए इसे सबसे पहले निपटाइए। अच्छी
        बात यह है कि job card बनवाना आसान है और पूरी तरह <strong>free</strong> — कोई fee मांगे तो समझ
        जाइए गलत हो रहा है।
      </p>
      <ol className="list-decimal pl-6 space-y-2 my-4 text-sm leading-relaxed">
        <li>ग्राम पंचायत में सादा कागज पर आवेदन — परिवार के सभी वयस्क सदस्यों के नाम, उम्र, आधार और photo के साथ</li>
        <li>Act के हिसाब से पंचायत को <strong>15 दिन के अंदर</strong> card issue करना होता है — verification के बाद</li>
        <li>Card मिलने पर check कर लीजिए कि सब सदस्यों के नाम सही छपे हैं और बैंक खाता/आधार link है — पैसा इसी से आएगा</li>
      </ol>
      <p>
        कई राज्यों में job card का आवेदन UMANG app या राज्य के portal से online भी हो सकता है, पर
        गांव में सबसे भरोसेमंद रास्ता अभी भी पंचायत का ही है — वहीं receiving मिलती है और वहीं से
        card बनकर आता है।
      </p>

      <Head2>बकरी और मुर्गी वालों के लिए क्या है</Head2>
      <p>
        यह सिर्फ गाय-भैंस तक सीमित नहीं है। MGNREGA की इसी works list में{' '}
        <strong>goat shelter</strong> और <strong>poultry shelter</strong> भी आते हैं — ये cattle shed
        से अलग work categories हैं, इनके estimate भी अलग बनते हैं और छोटे होते हैं। आवेदन का रास्ता
        बिलकुल वही है — लिखित आवेदन, ग्राम सभा, sanction।
      </p>
      <p>
        एक बात ध्यान रखिए: अगर आप बकरी पालन को business की तरह बढ़ाना चाहते हैं — यानी shed के
        साथ पशु भी खरीदने हैं — तो MGNREGA अकेला काफी नहीं। MGNREGA सिर्फ shed बनवाता है; पशु
        खरीदने के लिए NLM (National Livestock Mission) की subsidy और bank loan का अलग रास्ता है।
        दोनों को जोड़कर चलना समझदारी है — shed MGNREGA से, पशु NLM/loan से। NLM वाला पूरा हिसाब{' '}
        <Link href="/articles/bakri-palan-yojana-nlm-subsidy">बकरी पालन NLM subsidy वाली guide</Link> में
        लिखा है।
      </p>

      <Head2>मजदूरी का पैसा कब और कैसे आता है</Head2>
      <p>
        Sanction के बाद काम शुरू होता है तो हर मजदूर का नाम muster roll में चढ़ता है — आप खुद भी।
        मजदूरी आपके राज्य की notified NREGA wage rate से बनती है (यह rate हर साल 1 अप्रैल से राज्य-दर-राज्य
        अलग notify होता है — अपने राज्य का current rate ग्राम रोजगार सेवक से या nrega.nic.in पर देखिए)।
        Act के हिसाब से मजदूरी का भुगतान muster roll बंद होने के <strong>15 दिन के अंदर</strong> सीधे बैंक
        खाते में आना चाहिए। देर हो तो delay compensation का प्रावधान भी Act में है — यह बात कम लोग जानते हैं।
      </p>
      <p>
        Material (cement, सरिया, चादर) का payment आपके हाथ में नहीं आता — वह vendor के bill के against
        जाता है। इसीलिए कोई कहे कि “material का पैसा cash दिलवा देंगे, कुछ कमीशन लगेगा” — तो समझ
        जाइए गड़बड़ है।
      </p>

      <Head2>अपनी file का status खुद online कैसे देखें</Head2>
      <p>
        आवेदन का कोई online form नहीं है, पर sanction होने के बाद आपका work और payment record{' '}
        <a href="https://nrega.nic.in" target="_blank" rel="noopener noreferrer">nrega.nic.in</a> के MIS में
        दिखता है — बिलकुल free, बिना login। रास्ता: state → district → block → panchayat चुनिए, फिर job
        card list में अपना job card नंबर खोलिए। वहां दिखेगा कि कौन सा work आपके नाम sanction है, muster
        roll में कितने दिन चढ़े, और payment किस तारीख को गया।
      </p>
      <p>
        इसका बड़ा फायदा यह है कि पंचायत में कोई कुछ भी बोले, record आप खुद verify कर सकते हैं। “आपका
        payment चला गया” सुनकर बैठने की जरूरत नहीं — MIS में entry नहीं है तो payment हुआ ही नहीं।
      </p>

      <Head2>Shed बनने के बाद की जिम्मेदारी</Head2>
      <p>
        काम पूरा होने पर asset की geo-tagged photo record में जाती है और shed आपकी संपत्ति बन जाता है।
        ध्यान रहे — MGNREGA के works का social audit होता है। मतलब shed कागज में बना और जमीन पर नहीं,
        या बना कुछ और estimate कुछ और — तो बाद में recovery आप पर भी आ सकती है। जैसा estimate में है
        वैसा बनवाइए, और हर stage की photo अपने phone में भी रखिए।
      </p>

      <Head2>कागज क्या लगेंगे</Head2>
      <p>
        Job card की copy, आधार, बैंक passbook, जमीन का कागज (खतौनी/खसरा या जमाबंदी), और पशुओं का विवरण। कुछ
        जगह पशु tagging का record भी पूछा जाता है, पर यह हर जगह जरूरी नहीं। सबकी photocopy आवेदन के साथ,
        original अपने पास।
      </p>

      <Head2>कितना time लगता है — ईमानदार जवाब</Head2>
      <p>
        यह process महीनों की है, हफ्तों की नहीं। वजह: individual works ग्राम सभा के annual plan में जुड़ते
        हैं, और ग्राम सभा साल में गिनती की बार बैठती है। आवेदन देते समय ग्राम रोजगार सेवक से सीधा पूछिए —{' '}
        <em>इस साल का labour budget final हुआ या नहीं, और मेरा नाम किस list में जुड़ेगा</em>। इस एक सवाल से
        असली timeline पता चल जाएगी।
      </p>

      <Head2>File अटक जाए तो — BDO वाला रास्ता</Head2>
      <ol className="list-decimal pl-6 space-y-2 my-4 text-sm leading-relaxed">
        <li>ग्राम रोजगार सेवक से लिखित में status पूछिए — receiving दिखाकर।</li>
        <li>अगली ग्राम सभा में खुद जाकर मुद्दा उठाइए — कार्यवाही register में बात record होती है।</li>
        <li>Block स्तर पर <strong>Programme Officer / BDO</strong> को लिखित शिकायत — आवेदन की copy और receiving के साथ।</li>
        <li>फिर भी न हो तो जिला Programme Coordinator (DC/DM) और राज्य के MGNREGA grievance system में शिकायत। हर शिकायत का नंबर लेकर रखिए।</li>
      </ol>
      <p>
        एक किसान की file सिर्फ इसलिए 8 महीने पड़ी रही कि उसने कभी receiving ली ही नहीं थी — पंचायत ने कह
        दिया आवेदन मिला ही नहीं। कागज का एक sign आपको इस पूरी स्थिति से बचा लेता है।
      </p>

      <Head2>एक जरूरी चेतावनी</Head2>
      <p>
        &ldquo;पशु शेड योजना की list में नाम check करो&rdquo; या &ldquo;registration fee ₹99&rdquo; वाली कोई
        भी site fraud है। इस काम में न कोई fee है, न कोई online list। सब कुछ आपकी अपनी ग्राम पंचायत के record
        में होता है — और वह record देखना free है।
      </p>

      <p className="text-xs text-[var(--color-text-muted)] italic mt-6">
        यहां दी गई जानकारी MGNREGA (ग्रामीण विकास मंत्रालय,{' '}
        <a href="https://nrega.nic.in" target="_blank" rel="noopener noreferrer">nrega.nic.in</a>) की
        permissible works guidelines पर आधारित है। राशि राज्य-दर-राज्य अलग है — अपनी पंचायत के technical
        estimate से confirm करें।
      </p>

      <div className="mt-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
        <h3 className="font-black text-[var(--color-text)] mb-3 text-base">ये भी काम आएगा</h3>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>
            <Link href="/articles/bakri-palan-yojana-nlm-subsidy">बकरी पालन योजना — NLM subsidy की पूरी गाइड</Link>
          </li>
          <li>
            <Link href="/articles/murgi-palan-loan-nlm-subsidy">मुर्गी पालन loan और subsidy</Link>
          </li>
          <li>
            <Link href="/articles/dairy-farm-loan-without-collateral">Dairy farm loan बिना collateral</Link>
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
