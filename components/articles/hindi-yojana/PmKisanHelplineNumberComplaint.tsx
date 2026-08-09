import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, DB, StepList, SI, GovLink, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: 'पीएम किसान का हेल्पलाइन नंबर क्या है?',
    a: 'मुख्य नंबर 155261 है। इसके अलावा दो दिल्ली लैंडलाइन भी हैं — 011-24300606 और 011-23381092। सोमवार से शनिवार, सरकारी कामकाजी घंटों में कॉल करें।',
  },
  {
    q: 'शिकायत करने के लिए क्या-क्या चाहिए?',
    a: 'आधार नंबर, बैंक अकाउंट नंबर या रजिस्टर्ड मोबाइल नंबर — इन तीनों में से कोई एक। साथ में अपनी problem की छोटी सी detail तैयार रखें, जैसे कौन सी किस्त नहीं आई।',
  },
  {
    q: 'क्या ईमेल से भी शिकायत हो सकती है?',
    a: 'हां। pmkisan-ict@gov.in पर मेल भेज सकते हैं। Subject में अपना registration number या आधार के आखिरी 4 अंक जरूर लिखें, ताकि आपका record जल्दी ढूंढा जा सके।',
  },
  {
    q: 'ऑनलाइन शिकायत कहां दर्ज होती है?',
    a: 'pmkisan.gov.in पर Farmers Corner में Help Desk (Grievance) का option है। वहां आधार, अकाउंट नंबर या मोबाइल नंबर डालकर query register कर सकते हैं — 24 घंटे, किसी भी दिन।',
  },
  {
    q: 'शिकायत का जवाब कितने दिन में आता है?',
    a: 'कोई fix समय official तौर पर घोषित नहीं है। आम तौर पर online query का status कुछ हफ्तों में update होता है। अगर लंबा समय हो जाए तो अपने राज्य के Nodal Officer से संपर्क करना बेहतर रहता है।',
  },
  {
    q: 'फोन नहीं लग रहा, अब क्या करूं?',
    a: 'किस्त release होने के आसपास lines busy रहती हैं। ऐसे में online Help Desk सबसे भरोसेमंद रास्ता है — वहां आपकी query record होती है और track भी कर सकते हैं। ईमेल भी एक option है।',
  },
  {
    q: 'क्या शिकायत करने के पैसे लगते हैं?',
    a: 'बिल्कुल नहीं। न फोन शिकायत के, न online के। अगर कोई आपसे शिकायत दर्ज कराने के पैसे मांगे, तो समझ जाइए वो fraud है। सरकारी शिकायत हमेशा free होती है।',
  },
  {
    q: 'क्या CSC से शिकायत दर्ज करा सकते हैं?',
    a: 'हां, अगर खुद online करना मुश्किल लगे तो नजदीकी CSC (जन सेवा केंद्र) से Help Desk query डलवा सकते हैं। बस reference details अपने पास लिखवाकर जरूर रखें, ताकि status खुद track कर सकें।',
  },
  {
    q: 'एक साथ कितनी शिकायतें डाल सकते हैं?',
    a: 'एक problem की एक ही query डालें। एक ही बात की कई queries डालने से record उलझता है और जवाब देर से आता है। हां, अगर दो अलग-अलग दिक्कतें हैं — जैसे eKYC भी और payment भी — तो दोनों की अलग query ठीक है।',
  },
  {
    q: 'शिकायत के लिए registered mobile जरूरी है क्या?',
    a: 'नहीं, आधार नंबर या बैंक अकाउंट नंबर से भी query register हो जाती है। लेकिन registered mobile पास हो तो updates के SMS वहीं आते हैं, इसलिए बेहतर यही है कि वो नंबर चालू रखें।',
  },
  {
    q: 'गांव में network नहीं है, phone भी नहीं लगता — क्या करें?',
    a: 'ऐसे में block के कृषि विभाग का office सबसे practical रास्ता है — वहां लिखित शिकायत दे सकते हैं। या हफ्ते में जब बाजार/तहसील जाना हो, तब CSC से online query डलवा लें।',
  },
];

const RELATED = [
  { slug: 'PmKisanPaymentFailedFix2026', title: 'Payment Failed Fix Guide', emoji: '💸' },
  { slug: 'PmKisanStateNodalOfficerList', title: 'State Nodal Officer List', emoji: '📋' },
  { slug: 'PmKisanRejectedStatusReApplyGuide', title: 'Rejected Status Re-Apply', emoji: '🔄' },
  { slug: 'PmKisanEkycOnline2026', title: 'eKYC Online Guide', emoji: '🔐' },
];

export default function PmKisanHelplineNumberComplaint({ article }: { article: HindiArticle }) {
  return (
    <>
      <p>
        सुबह के दस बजे हैं। गांव के बाकी किसानों के phone पर ₹2,000 आने का message आ चुका है — आपके phone
        पर कुछ नहीं। बैंक जाकर पासबुक entry करवाई, वहां भी खाली। अब? यही वो moment है जब हर किसान Google
        पर हेल्पलाइन नंबर ढूंढता है, और आधे लोगों को गलत नंबर मिलता है।
      </p>
      <p>
        इसलिए यह guide है। यहां सिर्फ official contact details हैं — सीधे सरकारी source से — और साथ में यह भी
        कि कौन सी problem के लिए कौन सा रास्ता सही रहेगा। क्योंकि सच बताएं तो हर दिक्कत phone call से solve
        नहीं होती। कुछ काम online query से जल्दी होते हैं, कुछ के लिए राज्य के अधिकारी तक जाना पड़ता है।
      </p>

      <IB>
        <strong>📞 Official नंबर एक नजर में:</strong> हेल्पलाइन <strong>155261</strong> · लैंडलाइन{' '}
        <strong>011-24300606</strong>, <strong>011-23381092</strong> · ईमेल{' '}
        <strong>pmkisan-ict@gov.in</strong> · Online:{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> →
        Farmers Corner → Help Desk
      </IB>

      <SH>पहले यह तय करें — आपकी दिक्कत क्या है?</SH>
      <p>
        कॉल लगाने से पहले 30 second रुकिए। नीचे वाली table देखिए। बहुत से किसान घंटों line में लगे रहते हैं
        उस काम के लिए जो खुद 5 मिनट में portal पर हो जाता।
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] p-2 text-left">आपकी समस्या</th>
              <th className="border border-[var(--color-border)] p-2 text-left">सही रास्ता</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] p-2">किस्त नहीं आई, status में FTO generated दिख रहा है</td>
              <td className="border border-[var(--color-border)] p-2">2-3 दिन इंतजार करें, फिर online query</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2">eKYC pending दिख रहा है</td>
              <td className="border border-[var(--color-border)] p-2">पहले खुद eKYC करें — शिकायत की जरूरत नहीं</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2">Payment failed / bank account problem</td>
              <td className="border border-[var(--color-border)] p-2">Online Help Desk query + बैंक में आधार seeding चेक</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2">Registration reject हो गया</td>
              <td className="border border-[var(--color-border)] p-2">कारण जानने के लिए helpline call, फिर re-apply</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] p-2">महीनों से कोई solution नहीं मिला</td>
              <td className="border border-[var(--color-border)] p-2">राज्य के Nodal Officer से सीधा संपर्क</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        मोटा-मोटा rule यह है — जो चीज आपके हाथ में है (eKYC, आधार seeding), वो पहले खुद ठीक करें। जो सरकार
        के हाथ में है (payment release, record correction), उसके लिए शिकायत दर्ज करें।
      </p>

      <SH>फोन से शिकायत — नंबर और तरीका</SH>
      <p>
        सबसे सीधा रास्ता। PM Kisan योजना का हेल्पलाइन नंबर <strong>155261</strong> है। यह नहीं लगे तो दिल्ली
        के दो लैंडलाइन नंबर हैं — <strong>011-24300606</strong> और <strong>011-23381092</strong>। सोमवार से
        शनिवार, कामकाजी घंटों में ही staff available रहता है। रविवार और सरकारी छुट्टी वाले दिन रहने दें।
      </p>
      <p>Call करने से पहले यह तीन चीजें हाथ में रखें:</p>
      <StepList>
        <SI n={1}><strong>आधार नंबर</strong> — record ढूंढने का सबसे तेज तरीका यही है।</SI>
        <SI n={2}><strong>बैंक अकाउंट नंबर</strong> — payment वाली शिकायतों में पूछा जाता है।</SI>
        <SI n={3}><strong>रजिस्टर्ड मोबाइल नंबर</strong> — वही जो registration के समय दिया था।</SI>
      </StepList>
      <p>
        एक छोटी सी सलाह अनुभव से — किस्त release होने के हफ्ते में lines बहुत busy रहती हैं। लाखों किसान एक
        साथ call करते हैं। अगर आपका काम urgent नहीं है, तो एक-दो हफ्ते बाद call करें। और अगर urgent है, तो
        सुबह जल्दी try करें।
      </p>
      <WB>
        सावधान — YouTube videos और कुछ websites पर गलत या पुराने नंबर मिलते हैं। कुछ fraud नंबर भी घूम रहे
        हैं जो OTP मांगते हैं। याद रखें: <strong>असली helpline कभी OTP नहीं मांगती</strong>, न ही बैंक का
        password। नंबर हमेशा pmkisan.gov.in से ही confirm करें।
      </WB>

      <SH>Online Help Desk — query register करने का step-by-step तरीका</SH>
      <p>
        मुझे लगता है यह phone से बेहतर option है, और वजह साफ है — आपकी शिकायत लिखित में record होती है, एक
        reference मिलता है, और बाद में status track कर सकते हैं। Phone call का कोई record आपके पास नहीं रहता।
      </p>
      <StepList>
        <SI n={1}>
          <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> खोलें।
          Homepage पर नीचे की तरफ <strong>Farmers Corner</strong> section मिलेगा।
        </SI>
        <SI n={2}>वहां <strong>Help Desk</strong> (Grievance) का option चुनें।</SI>
        <SI n={3}>
          <strong>Register Query</strong> पर जाएं। आधार नंबर, अकाउंट नंबर या मोबाइल नंबर — कोई एक डालें और
          captcha भरकर details निकालें।
        </SI>
        <SI n={4}>
          अपनी problem की category चुनें और छोटा सा description लिखें। साफ लिखें — कौन सी किस्त, कब से
          pending, क्या error दिख रहा है।
        </SI>
        <SI n={5}>Submit करें। यही page बाद में <strong>Know the Query Status</strong> से आपकी शिकायत की स्थिति भी दिखाता है।</SI>
      </StepList>
      <p>
        बस इतना ही। पूरा process मुश्किल से 10 मिनट का है, और CSC जाने की भी जरूरत नहीं — घर बैठे mobile से
        हो जाता है।
      </p>

      <GovLink
        href="https://pmkisan.gov.in"
        label="PM Kisan Official Portal — Help Desk"
        guide="pmkisan.gov.in खोलें"
        portalName="pmkisan.gov.in"
      />

      <SH>ईमेल से शिकायत कैसे लिखें?</SH>
      <p>
        तीसरा रास्ता ईमेल है — <strong>pmkisan-ict@gov.in</strong>। यह उन cases के लिए ठीक है जहां आपको
        documents attach करने हों, जैसे पासबुक की photo या rejection का screenshot।
      </p>
      <p>Format कुछ ऐसा रखें:</p>
      <IB>
        <strong>Subject:</strong> PM Kisan — किस्त नहीं मिली — [आधार के आखिरी 4 अंक]<br /><br />
        महोदय,<br />
        मेरा नाम [नाम], गांव [गांव], जिला [जिला], राज्य [राज्य]।<br />
        Registration mobile number: [नंबर]<br />
        समस्या: [कौन सी किस्त, कब से, status में क्या दिख रहा है]<br />
        कृपया समाधान करें।<br />
        धन्यवाद।
      </IB>
      <p>
        पूरा आधार नंबर ईमेल में लिखने से बचें — आखिरी 4 अंक काफी हैं। और हां, एक ही शिकायत बार-बार अलग-अलग
        ईमेल से मत भेजिए। इससे process तेज नहीं होता, उल्टा records उलझ जाते हैं।
      </p>

      <SH>जवाब नहीं आया तो? State Nodal Officer वाला रास्ता</SH>
      <p>
        अब वो हिस्सा जो ज्यादातर guides नहीं बताते। PM Kisan central scheme जरूर है, लेकिन verification और
        record correction का बड़ा हिस्सा राज्य सरकार के पास होता है। हर राज्य का एक{' '}
        <strong>Nodal Officer</strong> होता है जो योजना का in-charge है।
      </p>
      <p>
        मान लीजिए आपने online query डाली, एक महीना हो गया, कुछ नहीं हुआ। Helpline बोलती है &quot;process में
        है&quot;। ऐसे में सीधे अपने राज्य के Nodal Officer के office से संपर्क करना अक्सर काम कर जाता है —
        क्योंकि आपका record असल में वहीं अटका होता है। पूरी राज्यवार list हमारी{' '}
        <Link href="/articles/PmKisanStateNodalOfficerList">Nodal Officer guide</Link> में है। साथ में अपने
        block के कृषि अधिकारी (Agriculture Officer) से मिलना भी एक रास्ता है — खासकर land record वाली
        दिक्कतों में।
      </p>
      <DB>
        किसी भी हालत में बिचौलिए या &quot;agent&quot; को पैसे देकर शिकायत मत कराइए। शिकायत दर्ज करना हर step
        पर free है। जो लोग &quot;अंदर से काम करा देंगे&quot; बोलते हैं, वो सिर्फ आपकी जेब से काम कराते हैं।
      </DB>

      <SH>असली case — कैसे एक payment failed शिकायत solve हुई</SH>
      <p>
        राजस्थान के एक किसान का case लीजिए, जो हमारे एक reader ने share किया था। तीन किस्तें आईं, चौथी बंद।
        Status में &quot;payment failed&quot; दिखा। पहले उन्होंने helpline call की — बताया गया कि बैंक की
        तरफ से payment reject हुआ है। फिर बैंक गए, पता चला account आधार से link तो था, लेकिन{' '}
        <strong>NPCI seeding</strong> नहीं हुई थी — DBT के लिए वो अलग से जरूरी होती है।
      </p>
      <p>
        बैंक में seeding form भरा। दो हफ्ते बाद online Help Desk पर query डाली कि record update हो गया है।
        अगली किस्त सीधे account में आई — रुकी हुई किस्त भी बाद में process हुई। कुल समय लगा करीब दो महीने।
        सीख यह है कि शिकायत अकेली काफी नहीं — root cause भी ठीक करना पड़ता है। इस पूरे topic पर हमारी{' '}
        <Link href="/articles/PmKisanPaymentFailedFix2026">payment failed fix guide</Link> detail में है।
      </p>

      <SH>शिकायत लिखते समय ये 4 गलतियां मत कीजिए</SH>
      <p>
        Help Desk पर हजारों queries रोज आती हैं। जिनकी शिकायत साफ लिखी होती है, उनका record जल्दी ढूंढा और
        आगे बढ़ाया जाता है। जिनकी उलझी होती है, वो पीछे छूट जाती हैं। चार गलतियां जो बार-बार दिखती हैं:
      </p>
      <StepList>
        <SI n={1}>
          <strong>गुस्से वाली लंबी कहानी लिखना।</strong> पढ़ने वाले को आपकी पूरी आपबीती नहीं, तीन चीजें
          चाहिए — कौन सी किस्त, कब से रुकी, status में क्या लिखा आ रहा है। तीन लाइन काफी हैं।
        </SI>
        <SI n={2}>
          <strong>गलत category चुनना।</strong> Payment की दिक्कत को eKYC category में डाल दिया, तो query
          गलत desk पर जाएगी और वहां से लौटने में हफ्ते लगेंगे। Category दो बार पढ़कर चुनें।
        </SI>
        <SI n={3}>
          <strong>Details बिना confirm किए लिखना।</strong> आधार के अंक गलत लिख दिए तो record मिलेगा ही
          नहीं। Submit से पहले एक बार सब मिला लें।
        </SI>
        <SI n={4}>
          <strong>Status में जो दिख रहा है, वो न बताना।</strong> &quot;पैसा नहीं आया&quot; अधूरी बात है।
          &quot;Status में FTO generated लिखा है लेकिन 3 हफ्ते से payment नहीं&quot; — यह पूरी बात है, और
          इसका जवाब भी सटीक आता है।
        </SI>
      </StepList>

      <SH>सब जगह से जवाब नहीं मिला? CPGRAMS आखिरी रास्ता है</SH>
      <p>
        एक और दरवाजा है जिसके बारे में कम किसान जानते हैं — <strong>CPGRAMS</strong>, यानी केंद्र सरकार का
        अपना grievance portal (<a href="https://pgportal.gov.in" target="_blank" rel="noopener noreferrer">pgportal.gov.in</a>)।
        यहां दर्ज शिकायत सीधे संबंधित मंत्रालय — यानी कृषि मंत्रालय — तक जाती है, और हर शिकायत का एक
        registration number मिलता है जिससे status track होता है।
      </p>
      <p>
        इसे पहला नहीं, आखिरी हथियार समझिए। पहले PM Kisan के अपने Help Desk और Nodal Officer वाले रास्ते
        आजमाएं — वहीं record होता है, वहीं जल्दी solve होता है। लेकिन जब महीनों बाद भी बात न बने, तब CPGRAMS
        पर पुरानी query का reference देते हुए शिकायत डालें। मंत्रालय स्तर से आई query पर नीचे के office
        अक्सर तेजी से हिलते हैं — यह जमीनी सच है।
      </p>

      <SH>Query का status कैसे track करें?</SH>
      <p>
        जिस page से query register की थी, वहीं <strong>Know the Query Status</strong> का option है। अपना वही
        आधार / अकाउंट / मोबाइल नंबर डालिए, शिकायत की current स्थिति दिख जाएगी। हफ्ते में एक बार check करना
        काफी है। रोज देखने से जल्दी solve नहीं होगा — यह बात किस्त के status पर भी लागू होती है।
      </p>
      <p>
        और अगर शिकायत का जवाब आ गया लेकिन समाधान अधूरा है? तो नई query में पुरानी query का reference देकर
        दोबारा लिखें, या ऊपर बताए Nodal Officer वाले रास्ते पर जाएं।
      </p>

      <SH>अक्सर पूछे जाने वाले सवाल</SH>
      <FAQBlock faqs={FAQS} />

      <p className="text-xs text-[var(--color-text-muted)] italic">
        Sources: सभी contact details{' '}
        <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">pmkisan.gov.in</a> (Ministry
        of Agriculture &amp; Farmers Welfare, Govt. of India) पर publish की गई official जानकारी पर आधारित हैं।
        नंबर समय के साथ बदल सकते हैं — call करने से पहले portal पर verify कर लें। Last verified:{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')}.
      </p>

      <RelatedArticles articles={RELATED} />
    </>
  );
}
