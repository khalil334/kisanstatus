import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, DB, StepList, SI, FAQBlock, GovLink, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: 'क्या हर किसान को 50% सब्सिडी मिलती है?',
    a: 'नहीं। सब्सिडी आपकी श्रेणी पर निर्भर करती है — सामान्य वर्ग को ज्यादातर राज्यों में करीब 25-40% मिलता है, जबकि SC/ST, महिला और लघु-सीमांत किसानों को ऊंचा स्लैब (करीब 50% तक) मिलता है। ऊपर से हर राज्य की अधिकतम रकम (cap) अलग होती है। डीलर अगर "सबको 50% पक्का" बोले, तो समझ जाइए बात गड़बड़ है।',
  },
  {
    q: 'आवेदन कब खुलता है?',
    a: 'कोई अखिल-भारतीय fixed window नहीं है। हर राज्य साल में एक या दो बार आवेदन खोलता है — ज्यादातर खरीफ/रबी सीजन से पहले। अपने राज्य के कृषि विभाग पोर्टल पर notification section देखते रहिए, या नजदीकी कृषि कार्यालय से पूछ लीजिए।',
  },
  {
    q: 'Token/lottery का क्या मतलब है?',
    a: 'कई राज्यों (जैसे MP, UP) में आवेदन budget से ज्यादा आ जाते हैं, इसलिए beneficiary चुनने के लिए lottery या पहले-आओ-पहले-पाओ token system चलता है। Token मिलने का मतलब सिर्फ यह है कि अब आप तय समय (अक्सर 10-15 दिन) में empanelled डीलर से खरीद कर बिल upload कर सकते हैं।',
  },
  {
    q: 'सब्सिडी पैसा कब और कैसे मिलता है?',
    a: 'पहले आप पूरी कीमत देकर ट्रैक्टर खरीदते हैं, फिर अधिकारी physical verification करता है, और उसके बाद सब्सिडी की रकम DBT से सीधे आपके बैंक खाते में आती है। इसमें कुछ हफ्तों से लेकर कुछ महीने तक लग सकते हैं — राज्य पर निर्भर है।',
  },
  {
    q: 'क्या पुराने/second-hand ट्रैक्टर पर सब्सिडी मिलती है?',
    a: 'नहीं — सब्सिडी सिर्फ नए ट्रैक्टर पर, और वह भी portal पर listed empanelled डीलर से खरीदने पर मिलती है। बाहर से खरीदा तो claim reject हो जाएगा।',
  },
  {
    q: 'एक परिवार में कितनी बार लाभ मिल सकता है?',
    a: 'ज्यादातर राज्यों में एक किसान/परिवार को तय अवधि (अक्सर 5-7 साल) में एक ही बार ट्रैक्टर सब्सिडी मिलती है। पहले ले चुके हैं तो दोबारा आवेदन reject होगा — यह record पोर्टल पर आधार से check होता है।',
  },
  {
    q: 'ट्रैक्टर लोन और सब्सिडी दोनों साथ ले सकते हैं?',
    a: 'हां, और यही समझदारी है। सब्सिडी approve होने के बाद बची रकम के लिए बैंक से ट्रैक्टर लोन ले सकते हैं। हमारी ट्रैक्टर लोन guide में down payment, ब्याज दर और किस बैंक से लेना बेहतर है — सब detail में है।',
  },
  {
    q: 'आवेदन reject हो गया — क्या अगली बार फिर कर सकता हूं?',
    a: 'हां — reject होने का मतलब आम तौर पर उस साल का मौका गया, हमेशा के लिए नहीं। Rejection का कारण portal पर दिखता है — अक्सर कागज अधूरा या नाम-मिलान का फर्क। वह ठीक करके अगली window में दोबारा आवेदन करें। Lottery में नाम न आना rejection नहीं है — अगली बार फिर किस्मत आजमा सकते हैं।',
  },
  {
    q: 'ट्रैक्टर कितने साल तक बेच नहीं सकते?',
    a: 'ज्यादातर राज्यों में सब्सिडी वाला यंत्र एक तय अवधि (अक्सर 5 साल के आसपास) तक बेचने पर रोक होती है — पहले बेचा तो सब्सिडी वसूली का नोटिस आ सकता है। अपने राज्य की scheme guideline में lock-in period जरूर पढ़ लें।',
  },
];

const RELATED = [
  { slug: 'KisanTractorLoan2026', title: 'Kisan Tractor Loan Guide', emoji: '🚜' },
  { slug: 'custom-hiring-centre-chc-portal', title: 'CHC Portal — किराये पर मशीन', emoji: '🔧' },
  { slug: 'KisanRinKahaSeLe2026', title: 'किसान ऋण कहां से लें', emoji: '🏦' },
  { slug: 'hindi/kcc-limit-kaise-badhaye', title: 'KCC लिमिट कैसे बढ़ाएं', emoji: '💳' },
];

export default function TractorSubsidy2027StateWiseList({ article }: { article: HindiArticle }) {
  return (
    <>
      <p>
        <strong>"ट्रैक्टर पर 50% सब्सिडी"</strong> — यह line आपने YouTube thumbnails और डीलर के मुंह से
        सौ बार सुनी होगी। सच क्या है? सब्सिडी असली है, schemes भी असली हैं — लेकिन{' '}
        <em>कितनी मिलेगी, किसे मिलेगी और कब मिलेगी</em>, यह तीनों बातें आपके राज्य और आपकी श्रेणी पर टिकी
        हैं। कोई एक "PM Tractor Yojana" नाम की central scheme नहीं है जो सबको आधे दाम पर ट्रैक्टर दे।
        जो है, वह इससे थोड़ा जटिल — पर काम का — system है। चलिए बिना घुमाए समझते हैं।
      </p>

      <SH>सब्सिडी का असली ढांचा — दो परतें</SH>
      <p>
        ट्रैक्टर सब्सिडी दो जगह से चलती है। पहली परत केंद्र की{' '}
        <strong>SMAM (Sub-Mission on Agricultural Mechanization)</strong> — यह कृषि यंत्रीकरण की
        umbrella scheme है जिसके पैसे से राज्य अपने किसानों को यंत्रों पर अनुदान देते हैं। दूसरी परत{' '}
        <strong>राज्यों की अपनी yantra anudan schemes</strong> — MP की e-कृषि यंत्र अनुदान योजना, बिहार
        की कृषि यांत्रिकीकरण योजना, राजस्थान की कृषि यंत्र अनुदान योजना, वगैरह।
      </p>
      <p>
        मतलब साफ है — आवेदन हमेशा <strong>अपने राज्य के portal</strong> पर होता है, पैसा DBT से खाते
        में आता है, और नियम राज्य तय करता है। इसीलिए UP के किसान और बिहार के किसान को एक ही ट्रैक्टर पर
        अलग-अलग रकम मिलती है।
      </p>

      <IB>
        एक बात पहले ही साफ कर दें — "PM Kisan Tractor Yojana में ₹X भरो और आधे दाम पर ट्रैक्टर लो"
        type के WhatsApp forward और फर्जी website से बचिए। आवेदन सिर्फ सरकारी portal पर होता है, और
        registration के पैसे मांगने वाला हर "agent" शक के दायरे में है।
      </IB>

      <SH>किस श्रेणी को कितना प्रतिशत?</SH>
      <p>
        SMAM guidelines के हिसाब से मोटा गणित यह है — exact स्लैब राज्य और मशीन के हिसाब से घटता-बढ़ता
        है:
      </p>
      <StepList>
        <SI n={1}>
          <strong>सामान्य वर्ग</strong> — ज्यादातर राज्यों में करीब 25% से 40% तक।
        </SI>
        <SI n={2}>
          <strong>SC / ST किसान</strong> — ऊंचा स्लैब, कई राज्यों में 50% तक। जाति प्रमाण-पत्र जरूरी।
        </SI>
        <SI n={3}>
          <strong>महिला किसान</strong> — priority category। जमीन महिला के नाम हो तो उसी के नाम से आवेदन
          करना फायदे का सौदा है।
        </SI>
        <SI n={4}>
          <strong>लघु-सीमांत किसान</strong> — (सीमांत = 1 हेक्टेयर तक, लघु = 2 हेक्टेयर तक) — इन्हें भी
          higher slab मिलता है, खतौनी/land record से साबित होता है।
        </SI>
      </StepList>
      <WB>
        प्रतिशत हमेशा <strong>approved cost</strong> (सरकार की तय benchmark कीमत) पर लगता है, डीलर के
        bill पर नहीं। और हर राज्य में अधिकतम रकम की cap होती है — जैसे कहीं ₹45,000, कहीं ₹1 लाख। यानी
        "50%" सुनकर 8 लाख के ट्रैक्टर पर 4 लाख की उम्मीद मत बांधिए।
      </WB>

      <SH>राज्यवार — कहां, किस portal पर आवेदन?</SH>
      <p>
        नीचे बड़े कृषि राज्यों की स्थिति है। Portal के नाम और रास्ते बदलते रहते हैं, इसलिए हर section में
        सीधा तरीका भी लिखा है — <em>आवेदन window खुली है या नहीं, यह portal पर जाकर ही confirm करें</em>।
      </p>

      <p>
        पूरा विवरण नीचे है, पर पहले यह तालिका — किस राज्य में किस portal पर जाना है और चयन कैसे
        होता है, यह सामने रख लीजिए:
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--color-bg-alt)]">
              <th className="border border-[var(--color-border)] px-3 py-2 text-left">राज्य</th>
              <th className="border border-[var(--color-border)] px-3 py-2 text-left">कहां आवेदन</th>
              <th className="border border-[var(--color-border)] px-3 py-2 text-left">चयन कैसे</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">उत्तर प्रदेश</td>
              <td className="border border-[var(--color-border)] px-3 py-2">upagriculture.com — “यंत्र पर अनुदान”</td>
              <td className="border border-[var(--color-border)] px-3 py-2">Token booking — window जल्दी भरती है</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">बिहार</td>
              <td className="border border-[var(--color-border)] px-3 py-2">farmech.bih.nic.in (OFMAS)</td>
              <td className="border border-[var(--color-border)] px-3 py-2">श्रेणीवार स्लैब; CHC पर अलग रास्ता</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">मध्य प्रदेश</td>
              <td className="border border-[var(--color-border)] px-3 py-2">dbt.mpdage.org — e-कृषि यंत्र अनुदान</td>
              <td className="border border-[var(--color-border)] px-3 py-2">Lottery, फिर करीब 10 दिन की खरीद-window</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">राजस्थान</td>
              <td className="border border-[var(--color-border)] px-3 py-2">rajkisan.rajasthan.gov.in — जन आधार से login</td>
              <td className="border border-[var(--color-border)] px-3 py-2">श्रेणीवार स्लैब, सालाना target</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">महाराष्ट्र</td>
              <td className="border border-[var(--color-border)] px-3 py-2">mahadbt.maharashtra.gov.in</td>
              <td className="border border-[var(--color-border)] px-3 py-2">पहले-आओ-पहले-पाओ / lottery mix</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">हरियाणा</td>
              <td className="border border-[var(--color-border)] px-3 py-2">agriharyana.gov.in — notification/scheme section</td>
              <td className="border border-[var(--color-border)] px-3 py-2">Window-based; MFMB registration जरूरी</td>
            </tr>
            <tr>
              <td className="border border-[var(--color-border)] px-3 py-2 font-medium">छत्तीसगढ़</td>
              <td className="border border-[var(--color-border)] px-3 py-2">CHAMPS system (CG Seed &amp; Agri Dev. Corp.)</td>
              <td className="border border-[var(--color-border)] px-3 py-2">खरीद + bill जमा करने पर DBT</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        तालिका का तीसरा खाना सबसे ज्यादा काम का है। Lottery वाले राज्य में जल्दी आवेदन करने से कोई
        बढ़त नहीं मिलती — वहां मायने यह रखता है कि नाम निकलने के बाद की न्यूनतम window में आपके कागज
        और बजट तैयार हों। Token वाले राज्य में उलटा है — वहां booking खुलने के पहले घंटे ही निर्णायक होते
        हैं। अपने राज्य का तरीका पहले पहचान लीजिए, फिर तैयारी उसी हिसाब से कीजिए।
      </p>

      <h3 className="text-lg font-bold mt-6 mb-2">उत्तर प्रदेश (UP)</h3>
      <p>
        UP में कृषि यंत्रीकरण योजना के तहत यंत्रों पर अनुदान मिलता है — आवेदन कृषि विभाग के DBT portal
        (upagriculture.com — "यंत्र पर अनुदान" section) से होता है। Token system चलता है: booking खुलते
        ही token लो, फिर तय समय में खरीद कर बिल upload करो। UP में ट्रैक्टर/यंत्रों पर अनुदान की cap
        अक्सर ₹1 लाख तक बताई जाती है — item के हिसाब से अलग। Booking window कुछ ही दिनों में भर जाती
        है, इसलिए notification पर नजर रखना जरूरी है।
      </p>

      <h3 className="text-lg font-bold mt-6 mb-2">बिहार</h3>
      <p>
        बिहार की कृषि यांत्रिकीकरण योजना OFMAS portal (farmech.bih.nic.in) से चलती है। यहां का pattern
        साफ documented रहा है — सामान्य वर्ग को ट्रैक्टर-वर्ग की मशीनों पर करीब 25% (cap के साथ), और
        SC/ST को करीब 50% तक। बिहार हर साल 75+ तरह के यंत्रों की सूची निकालता है और Custom Hiring
        Centre खोलने पर तो 80% तक अनुदान देता है — अगर अकेले ट्रैक्टर महंगा पड़ रहा है, तो CHC वाला
        रास्ता भी देखिए।
      </p>

      <h3 className="text-lg font-bold mt-6 mb-2">मध्य प्रदेश (MP)</h3>
      <p>
        MP में e-कृषि यंत्र अनुदान योजना (dbt.mpdage.org) चलती है — आवेदन online, चयन{' '}
        <strong>lottery</strong> से। Lottery में नाम आया तो तय दिनों के अंदर empanelled डीलर से खरीदना
        होता है। MP के किसान बताते हैं कि lottery के बाद करीब 10 दिन की खरीद-window मिलती है — कागज
        पहले से तैयार रखिए।
      </p>

      <h3 className="text-lg font-bold mt-6 mb-2">राजस्थान</h3>
      <p>
        राजस्थान में कृषि यंत्र अनुदान Raj Kisan Sathi portal (rajkisan.rajasthan.gov.in) से होता है —
        जन आधार से login, e-mitra से भी आवेदन हो जाता है। श्रेणी के हिसाब से स्लैब अलग है और हर साल
        target तय होता है।
      </p>

      <h3 className="text-lg font-bold mt-6 mb-2">महाराष्ट्र</h3>
      <p>
        महाराष्ट्र में सारा खेल MahaDBT Farmer portal (mahadbt.maharashtra.gov.in) पर है — कृषि
        यांत्रिकीकरण उप-अभियान के तहत ट्रैक्टर समेत यंत्रों पर अनुदान। आवेदन window अक्सर सीजन से पहले
        खुलती है और पहले-आओ-पहले-पाओ / lottery mix चलता है।
      </p>

      <h3 className="text-lg font-bold mt-6 mb-2">हरियाणा</h3>
      <p>
        हरियाणा में कृषि विभाग (agriharyana.gov.in) समय-समय पर यंत्रों/ट्रैक्टर पर अनुदान की schemes
        निकालता है — पिछले सालों में SC किसानों के लिए और electric tractor पर अलग से schemes आई हैं।
        यहां window-based system है, इसलिए विभाग की website के notification/scheme section पर नजर
        रखिए।
      </p>
      <p>
        Window कितनी छोटी और रकम कितनी बड़ी हो सकती है — इसका ताजा और दर्ज उदाहरण हरियाणा से ही है।
        जनवरी 2026 में किसान कल्याण विभाग ने SC किसानों के लिए 2025-26 की Tractor Subsidy Scheme के
        online आवेदन खोले — 45 HP या उससे ऊपर के ट्रैक्टर पर <strong>₹3 लाख प्रति unit</strong> तक का
        अनुदान, शर्त यह कि किसान Meri Fasal Mera Byora portal पर registered हो और जमीन उसके (या
        Parivar Pehchan Patra में दर्ज परिवार के सदस्य के) नाम हो (स्रोत:{' '}
        <a
          href="https://www.millenniumpost.in/nation/sc-farmers-to-get-tractor-subsidy-643801"
          target="_blank"
          rel="noopener noreferrer"
        >
          Millennium Post की रिपोर्ट
        </a>
        )। आवेदन की आखिरी तारीख 15 जनवरी थी — यानी notification से deadline तक मुश्किल से कुछ हफ्ते।
        जो किसान पहले से MFMB पर registered थे और कागज तैयार रखे थे, उन्हीं के लिए यह खिड़की काम आई —
        बाकियों के लिए अगले साल का इंतजार। सबक सीधा है: इस scheme में तैयारी window खुलने से पहले होती है।
      </p>

      <h3 className="text-lg font-bold mt-6 mb-2">छत्तीसगढ़</h3>
      <p>
        छत्तीसगढ़ में कृषि यांत्रिकीकरण योजना के तहत आवेदन CG State Seed &amp; Agriculture Development
        Corporation के CHAMPS system से होता है — 2025-26 के लिए online आवेदन 9 अक्टूबर 2025 से
        खुले थे (स्रोत:{' '}
        <a
          href="https://www.cmv360.com/news/applications-open-for-tractor-and-agricultural-equipment-subsidy-from-october-9"
          target="_blank"
          rel="noopener noreferrer"
        >
          CMV360 रिपोर्ट
        </a>
        )। शर्तें बाकी राज्यों जैसी ही हैं — राज्य का निवासी, खेती की जमीन अपने नाम, परिवार में एक ही
        लाभार्थी, और पहले यह लाभ न लिया हो। भुगतान यहां भी खरीद और bill जमा करने के बाद सीधे खाते में।
      </p>

      <GovLink
        href="https://agrimachinery.nic.in"
        label="SMAM / Farm Machinery DBT Portal"
        guide="agrimachinery.nic.in खोलो"
        portalName="Direct Benefit Transfer in Agriculture Mechanization"
      />

      <SH>आवेदन की process — लगभग हर राज्य में यही ढर्रा</SH>
      <StepList>
        <SI n={1}>
          अपने राज्य के portal पर <strong>किसान registration</strong> करो — आधार, mobile (आधार से
          linked), बैंक खाता।
        </SI>
        <SI n={2}>
          Scheme window खुलने पर <strong>ट्रैक्टर/यंत्र चुनकर आवेदन</strong> डालो, documents upload
          करो।
        </SI>
        <SI n={3}>
          चयन हुआ (token/lottery/approval) तो <strong>empanelled डीलर</strong> से ही खरीदो — quotation
          पहले ले लो।
        </SI>
        <SI n={4}>
          Bill, ट्रैक्टर के साथ photo और कागज portal पर upload करो — फिर{' '}
          <strong>physical verification</strong> होता है।
        </SI>
        <SI n={5}>
          Verification पास होते ही सब्सिडी <strong>DBT से बैंक खाते</strong> में आती है।
        </SI>
      </StepList>

      <SH>कागज कौन-कौन से लगेंगे?</SH>
      <p>
        आधार कार्ड (mobile linked) · खतौनी/जमीन का record · बैंक passbook · passport photo · जाति
        प्रमाण-पत्र (SC/ST स्लैब के लिए) · डीलर का quotation। कुछ राज्य निवास प्रमाण-पत्र भी मांगते
        हैं। सब PDF/JPG में पहले से scan करके रखिए — window छोटी होती है, कागज ढूंढने में token निकल
        जाता है।
      </p>

      <DB>
        <strong>डीलर से सावधान:</strong> "मैं करवा दूंगा, इतना cash दो" कहने वाले bichauliye से दूर रहिए।
        आवेदन खुद या CSC से करो। और डीलर की बताई कीमत को approved cost मत मान लो — portal पर मशीन की
        सरकारी benchmark कीमत दिखती है, सब्सिडी उसी पर बनती है।
      </DB>

      <SH>Form reject क्यों होते हैं — 4 सबसे आम गलतियां</SH>
      <StepList>
        <SI n={1}>
          <strong>आधार-खतौनी में नाम का फर्क</strong> — spelling तक मिलनी चाहिए। फर्क है तो पहले
          तहसील/आधार केंद्र से सुधार, फिर आवेदन।
        </SI>
        <SI n={2}>
          <strong>गैर-empanelled डीलर से खरीद</strong> — सबसे दर्दनाक गलती: पैसा भी गया, सब्सिडी भी।
          खरीद से पहले portal पर डीलर की listing खुद check करें।
        </SI>
        <SI n={3}>
          <strong>Deadline चूकना</strong> — token/lottery के बाद खरीद और bill upload की समय-सीमा सख्त
          होती है। डीलर से delivery की तारीख लिखवा कर लें।
        </SI>
        <SI n={4}>
          <strong>बैंक खाता आधार से seeded नहीं</strong> — verification पास, पर DBT fail। आवेदन से पहले
          NPCI seeding check कर लें।
        </SI>
      </StepList>

      <SH>मिनी ट्रैक्टर बनाम बड़ा ट्रैक्टर — सब्सिडी का गणित किसमें बैठता है?</SH>
      <p>
        एक बात जो आवेदन से पहले सोच लेनी चाहिए — सब्सिडी के नियम अक्सर छोटी मशीनों के पक्ष में झुके होते
        हैं। कई राज्यों में मिनी ट्रैक्टर (20 HP से नीचे) और power tiller पर प्रतिशत ऊंचा बैठता है —
        महाराष्ट्र के MahaDBT में, मिसाल के तौर पर, मिनी ट्रैक्टर-वर्ग पर 40-50% का दायरा और power tiller
        पर अलग cap चलती रही है। वजह सीधी है — योजना का मकसद छोटे-सीमांत किसान तक मशीन पहुंचाना है,
        showroom का सबसे बड़ा model बिकवाना नहीं।
      </p>
      <p>
        इसलिए खरीद से पहले अपनी जोत से मिलाकर सोचिए। 1-3 एकड़ की खेती में 12-15 HP का मिनी ट्रैक्टर
        अक्सर काम निकाल देता है — दाम आधे से भी कम, diesel खर्च कम, और सब्सिडी का प्रतिशत अक्सर
        बेहतर। 3-5 एकड़ पर 15-20 HP का गणित बैठता है। बाग/अंगूर जैसी कतारों वाली खेती में compact
        tractor देखिए। और अगर जोत इतनी छोटी है कि साल में ट्रैक्टर 30-40 दिन ही चलेगा, तो ईमानदारी से
        हिसाब लगाइए — कई बार खरीदने से सस्ता किराए पर लेना पड़ता है, भले यह बात सुनने में अच्छी न लगे।
      </p>

      <SH>सब्सिडी + लोन का combo — असली बचत यहीं है</SH>
      <p>
        मान लीजिए 6 लाख का ट्रैक्टर है और आपको 1 लाख की सब्सिडी approve हुई। बाकी 5 लाख के लिए बैंक से
        ट्रैक्टर लोन लीजिए — margin money कम लगेगी और EMI संभालने लायक रहेगी। कौन सा बैंक, कितना down
        payment, कितनी ब्याज दर — इस पर हमारी अलग{' '}
        <Link href="/articles/KisanTractorLoan2026">ट्रैक्टर लोन guide</Link> है। और अगर हिसाब लगाकर
        लगे कि ट्रैक्टर खरीदना ही भारी है, तो{' '}
        <Link href="/articles/custom-hiring-centre-chc-portal">CHC portal से किराये पर मशीन</Link> लेना
        भी एक रास्ता है — बहुत से छोटे किसानों के लिए यही सस्ता पड़ता है।
      </p>

      <SH>आवेदन से खाते में पैसा आने तक — पूरा सफर कितना लंबा है?</SH>
      <p>
        एक realistic scenario से समझिए कि इंतजार किस चीज का कितना होता है। Window खुली और आपने
        पहले ही दिन आवेदन डाल दिया — अच्छी शुरुआत। अब चयन (token/lottery) का इंतजार — यह कुछ
        दिनों से कुछ हफ्तों तक खिंच सकता है, राज्य के schedule पर निर्भर। चयन हुआ तो खरीद की सख्त
        खिड़की — अक्सर 10-15 दिन — इसीलिए डीलर और पैसे का इंतज़ाम पहले से सोच कर रखिए। Bill upload
        के बाद physical verification की बारी — अधिकारी के दौरे के हिसाब से कुछ हफ्ते लग सकते हैं।
        और आखिर में DBT — verification के बाद सब्सिडी खाते में आने में कुछ हफ्तों से कुछ महीने तक।
      </p>
      <p>
        कुल मिलाकर — आवेदन से पैसा आने तक का सफर आराम से एक से तीन महीने (कभी ज्यादा) खा जाता
        है। इस दौरान पूरी कीमत आपकी जेब/loan से जा चुकी होती है — यानी cash-flow की planning में
        सब्सिडी को “बाद में आने वाली राहत” मानिए, down payment का हिस्सा नहीं। जो डीलर “सब्सिडी
        काटकर बाकी दे दो” बोले, वह या तो scheme समझा नहीं या आपको घुमा रहा है — सब्सिडी डीलर को
        नहीं, DBT से सीधे आपके खाते में आती है।
      </p>

      <SH>खरीद से पहले डीलर से पूछने वाले 4 सवाल</SH>
      <p>
        Showroom पहुंचने से पहले ये सवाल लिख कर ले जाइए — और जवाब मौखिक नहीं, quotation पर लिखे
        हुए लीजिए। पहला — क्या आप इस scheme के लिए empanelled हैं, और किस portal-listing के नाम से?
        दूसरा — इस model की सरकारी approved cost क्या है, और on-road कीमत उससे कितनी अलग है?
        तीसरा — bill में ट्रैक्टर, accessories और insurance अलग-अलग दिखेंगे या जोड़कर? (सब्सिडी
        सिर्फ मूल मशीन पर बनती है।) चौथा — delivery और bill की तारीख क्या होगी? जो डीलर इन चारों
        का सीधा जवाब न दे, वहां से quotation लेकर आगे बढ़ जाइए — empanelled डीलर एक से ज्यादा होते हैं।
      </p>

      <SH>लोग सबसे ज्यादा कहां ठगे जाते हैं — पैसा देने से पहले पढ़िए</SH>
      <p>
        ठगी का सबसे पुराना नुस्खा आज भी चल रहा है — "PM Kisan Tractor Yojana" नाम से बनी फर्जी
        websites और forms, जो registration fee के नाम पर ₹500-₹5,000 तक मांगती हैं। याद रखिए —
        इस नाम की कोई अलग central scheme है ही नहीं; जो है वह SMAM और राज्यों की योजनाएं हैं, और उनका
        आवेदन सिर्फ सरकारी (.gov.in / .nic.in) portal पर होता है। दूसरा नुस्खा डीलर-लेवल का है —
        "सब्सिडी कटवाकर आधे दाम में दे दूंगा, बस कुछ advance दे दो"। ऊपर पढ़ चुके हैं — सब्सिडी डीलर को
        नहीं मिलती, DBT से आपके खाते में आती है। तीसरा — lottery में "नाम डलवा देने" का दावा करने वाले
        — चयन computer से random होता है, कोई अंदर से नाम नहीं चढ़ा सकता। इन तीनों में से कोई भी बात
        सुनें तो समझ जाइए सामने वाला आपकी जेब देख रहा है, आपका खेत नहीं।
      </p>

      <SH>सीधी सलाह — तीन बातें याद रखिए</SH>
      <p>
        पहली — सब्सिडी मिलती है, पर <strong>window में आवेदन करने वालों को</strong>, इसलिए अपने राज्य
        के portal का notification section महीने में एक बार जरूर देखिए। दूसरी — श्रेणी के हिसाब से जो
        higher slab बनता है, उसके <strong>प्रमाण-पत्र पहले से तैयार</strong> रखिए। तीसरी — जो बात portal
        पर नहीं लिखी, वह किसी की भी जुबान से सुनकर मत मानिए। बस यही तीन आदतें आपको उन हजारों आवेदकों से
        आगे रखेंगी जिनका form हर साल कागज की कमी से reject होता है।
      </p>

      <FAQBlock faqs={FAQS} />

      <RelatedArticles articles={RELATED} />
    </>
  );
}
