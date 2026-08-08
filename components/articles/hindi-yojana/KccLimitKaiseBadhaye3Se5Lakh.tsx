import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';
import { SH, IB, WB, DB, StepList, SI, FAQBlock, RelatedArticles } from '@/components/ArticleShared';

const FAQS = [
  {
    q: 'क्या ₹5 लाख की सुविधा अपने आप मिल जाएगी?',
    a: 'नहीं। बजट 2025-26 में ब्याज सहायता (Modified Interest Subvention Scheme) की सीमा ₹3 लाख से ₹5 लाख हुई है — यानी अब ₹5 लाख तक के crop loan पर सस्ती दर मिल सकती है। लेकिन आपके card की sanctioned limit बैंक ही बढ़ाता है, वह भी आपकी जमीन, फसल और repayment record देखकर। Branch जाकर enhancement की request करनी पड़ती है।',
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
    a: 'Card 5 साल के लिए बनता है, पर हर साल review/renewal होता है। Renewal में बैंक चालू limit जारी रखता है (अच्छे record पर करीब 10% सालाना बढ़ोतरी का प्रावधान भी है)। Enhancement अलग request है — जब आपकी जरूरत scale of finance के हिसाब से बढ़ी हो, जैसे नई जमीन या नई फसल।',
  },
  {
    q: 'पशुपालन/मछलीपालन के लिए भी बढ़ी सीमा का फायदा है?',
    a: 'Allied activities (dairy, poultry, fisheries) के लिए KCC पहले से है और उन पर subvention के अलग cap चलते हैं। दोनों काम करते हैं तो combined card बनवाना बेहतर है — working capital एक ही जगह से चलती है।',
  },
  {
    q: 'बैंक टाल रहा है — enhancement की request आगे कैसे बढ़ाएं?',
    a: 'पहले लिखित आवेदन दें और acknowledgement लें। फिर भी बात न बने तो उसी बैंक के grievance cell में शिकायत करें, और वहां से भी हल न निकले तो RBI के Banking Ombudsman (cms.rbi.org.in) का रास्ता खुला है। लिखित record हर स्तर पर आपका पक्ष मजबूत करता है।',
  },
];

const RELATED = [
  { slug: 'KisanCreditCardOnlineApply2026', title: 'KCC Online Apply Guide', emoji: '💳' },
  { slug: 'KisanRinKahaSeLe2026', title: 'Kisan Rin — कहां से लें', emoji: '🏦' },
  { slug: 'KisanTractorLoan2026', title: 'Tractor Loan Guide', emoji: '🚜' },
  { slug: 'hindi/karj-mafi-list', title: 'कर्ज माफी लिस्ट 2027', emoji: '📋' },
];

export default function KccLimitKaiseBadhaye3Se5Lakh({ article }: { article: HindiArticle }) {
  return (
    <>
      <p>
        बजट 2025-26 की एक घोषणा ने करोड़ों KCC धारकों के लिए दरवाजा खोला — ब्याज सहायता योजना की सीमा{' '}
        <strong>₹3 लाख से बढ़ाकर ₹5 लाख</strong>। मतलब यह कि अब ₹5 लाख तक का फसली कर्ज भी उसी रियायती
        दर पर मिल सकता है जिस पर पहले सिर्फ ₹3 लाख तक मिलता था। लेकिन — और यह "लेकिन" बड़ा है — घोषणा
        से आपके card की limit अपने आप नहीं बढ़ती। वह काम आपको और आपके बैंक को मिलकर करना है। कैसे,
        वही इस लेख में।
      </p>

      <SH>पहले गणित समझिए — सीमा बढ़ने से बचत कितनी?</SH>
      <p>
        Subvention वाले दायरे में बैंक करीब 7% सालाना पर कर्ज देता है; समय पर चुकता करने वालों को 3% की
        अतिरिक्त छूट मिलती है — असरदार दर करीब <strong>4%</strong>। बाजार में इतना सस्ता कार्यशील पैसा
        किसान के लिए और कहीं नहीं है। पहले ₹3 लाख से ऊपर की रकम पर बैंक की सामान्य दर (अक्सर 9-11%)
        लगती थी; अब वही रियायत ₹5 लाख तक फैल गई है। ₹2 लाख के अतिरिक्त कर्ज पर मोटा-मोटा हिसाब लगाएं
        तो हर साल हजारों रुपये के ब्याज की बचत बनती है।
      </p>

      <IB>
        Scale of finance याद रखिए — हर जिले की technical committee फसल-वार प्रति-एकड़ खर्च तय करती है,
        और आपकी limit उसी से निकलती है। इसलिए एक जैसी जमीन पर दो जिलों में अलग limit बनना सामान्य है।
        ₹5 लाख "हक" नहीं है — वह अधिकतम दायरा है जिस तक रियायती दर मिल सकती है।
      </IB>

      <SH>Limit बढ़वाने का तरीका — branch में यह लेकर जाइए</SH>
      <StepList>
        <SI n={1}>
          <strong>Updated land record</strong> — खतौनी/खसरा की ताजी नकल। नई जमीन खरीदी/बटाई पर ली है तो
          उसके कागज भी।
        </SI>
        <SI n={2}>
          <strong>फसल का ब्योरा</strong> — कौन सी फसलें, कितने रकबे में। Cropping pattern बदला है (जैसे
          गेहूं-धान से सब्जी/बागवानी) तो बताइए — scale of finance वहीं से बढ़ता है।
        </SI>
        <SI n={3}>
          <strong>Repayment का साफ record</strong> — पिछले चक्रों में समय पर जमा-निकासी। यही आपकी सबसे
          बड़ी पूंजी है; इसी पर बैंक बिना मांगे भी सालाना बढ़ोतरी देता है।
        </SI>
        <SI n={4}>
          <strong>लिखित enhancement आवेदन</strong> — मौखिक बात हवा हो जाती है। आवेदन दीजिए, received
          copy लीजिए।
        </SI>
        <SI n={5}>
          Annual review के समय जाना सबसे कारगर है — बैंक वैसे भी उस समय limit re-assess करता है।
        </SI>
      </StepList>

      <DB>
        खेत से निकली सीख: एक किसान ने सिर्फ इतना किया कि review के समय branch manager को सब्जी की
        खेती वाले नए रकबे का record दिखा दिया — limit उसी चक्र में बढ़ गई, क्योंकि सब्जी का प्रति-एकड़
        scale of finance अनाज से ऊपर होता है। बैंक वही बढ़ाता है जो कागज पर दिखता है।
      </DB>

      <SH>यह भी जान लीजिए — कहां अटकते हैं मामले</SH>
      <p>
        तीन जगह। पहली — <strong>overdue</strong>: पुरानी निकासी समय से जमा नहीं हुई तो enhancement की
        बात ही नहीं उठेगी, और 3% वाली छूट भी हाथ से जाएगी। दूसरी — <strong>collateral</strong>: तय सीमा
        से ऊपर की रकम पर बैंक जमीन गिरवी/जमानत मांग सकता है; यह मांग नियम-सम्मत है, branch से लिखित में
        समझ लें। तीसरी — <strong>अधूरा record</strong>: वरासत दर्ज नहीं, खतौनी पुरानी, बटाई का कोई
        कागज नहीं — इनमें से कुछ भी हो तो पहले वह सुधरवाइए, फिर बैंक जाइए। KCC नया बनवाना हो तो पूरा
        आवेदन-तरीका <Link href="/articles/KisanCreditCardOnlineApply2026">इस guide</Link> में है, और
        कर्ज के बाकी विकल्पों की तुलना{' '}
        <Link href="/articles/KisanRinKahaSeLe2026">Kisan Rin guide</Link> में।
      </p>

      <WB>
        "₹5 लाख की limit approve करवा देंगे, processing fee पहले भेजो" — ऐसे agent/call ठगी हैं। Limit
        enhancement की कोई अलग सरकारी fee नहीं है; जो भी charges हैं, बैंक खाते से लेता है और receipt
        देता है। OTP या passbook details phone पर किसी को न दें।
      </WB>

      <SH>अक्सर पूछे जाने वाले सवाल</SH>
      <FAQBlock faqs={FAQS} />

      <p className="text-xs text-[var(--color-text-muted)] italic">
        Source: ब्याज सहायता सीमा ₹3→₹5 लाख की घोषणा Union Budget 2025-26 (वित्त मंत्री का बजट भाषण,
        1 फरवरी 2025); KCC योजना का ढांचा RBI/नाबार्ड के दिशा-निर्देश व{' '}
        <a href="https://www.myscheme.gov.in" target="_blank" rel="noopener noreferrer">myscheme.gov.in</a>{' '}
        पर आधारित। दरें और collateral-free सीमा बैंक-दर-बैंक लागू निर्देशों से बदल सकती हैं — अंतिम पुष्टि
        अपनी branch से करें। Last verified:{' '}
        {new Date(article.modifiedTime).toLocaleDateString('hi-IN')}.
      </p>

      <RelatedArticles articles={RELATED} />
    </>
  );
}
