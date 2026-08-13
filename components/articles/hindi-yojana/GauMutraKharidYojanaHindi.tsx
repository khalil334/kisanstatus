import React from 'react';
import Link from 'next/link';
import type { HindiArticle } from '@/lib/hindi-articles-data';

const sections = [
  {
    eyebrow: 'शुरुआत',
    heading: 'शुरुआत कहां से हुई',
    body: `पूरी बात बुलंदशहर जिले की स्याना तहसील के नरसेना गांव से शुरू होती है। यहां एक किसान उत्पादक संगठन, यानी FPO, काम संभाल रहा है और इसकी अगुवाई डॉ. प्रवीण कर रहे हैं। अकेले नरसेना तक बात सीमित नहीं रही, आसपास के करीब पंद्रह गांव इससे जुड़ चुके हैं। हर जगह छोटे-छोटे संग्रह केंद्र बना दिए गए हैं जहां लोग अपने बर्तन लेकर पहुंचते हैं, वहीं मात्रा नाप ली जाती है और उसी वक्त भुगतान हो जाता है।

अब तक की रिपोर्ट बताती है कि रोजाना करीब पांच सौ लीटर इकट्ठा हो रहा है। एक दिलचस्प बात यह भी है कि इस पूरे संग्रहण के काम में महिलाओं के समूह भी सीधे जुड़ गए हैं, और उन्हें अलग से दो रुपये प्रति लीटर का कमीशन मिल रहा है।`,
  },
  {
    eyebrow: 'मकसद',
    heading: 'आखिर इसे खरीदकर सरकार करेगी क्या',
    body: `जवाब सीधा जैविक खेती से जुड़ा है। जो तरल इकट्ठा हो रहा है, उससे आगे चलकर कृषि से जुड़े उत्पाद तैयार होंगे, जैसे प्राकृतिक कीटनाशक और जीवामृत जैसी खाद। सोच यह है कि खेतों में महंगे रासायनिक खाद और कीटनाशक पर किसान की निर्भरता कम हो, और इसकी जगह सस्ते, देसी विकल्प मिल सकें।

तैयार माल आगे सहकारी समितियों और स्थानीय कमेटियों के जरिए बाजार तक पहुंचेगा, ताकि एक छोटा-मोटा स्थानीय बाजार भी खड़ा हो जाए।`,
  },
  {
    eyebrow: 'तर्क',
    heading: 'योगी सरकार की सोच के पीछे क्या तर्क है',
    body: `यह पहल मुख्यमंत्री योगी आदित्यनाथ की उस सोच से निकली बताई जा रही है, जिसमें गोवंश की रक्षा को गांव की अर्थव्यवस्था से सीधे जोड़ने की बात कही गई थी। तर्क कुछ ऐसा है, अगर गाय दूध देना बंद कर दे तब भी उसे पालना घाटे का सौदा न लगे, तो लोग उसे सड़क पर छोड़ने के बजाय घर में ही रखेंगे।

इससे पहले छत्तीसगढ़ में भी गोबर और मूत्र खरीदने की स्कीम चल चुकी है, हालांकि वहां शुरुआती रेट उत्तर प्रदेश से कम था, महज चार रुपये प्रति लीटर।`,
  },
  {
    eyebrow: 'असर',
    heading: 'गांव वालों के लिए यह असल में क्या मायने रखता है',
    body: `गांव में मवेशी रखना अक्सर सिर्फ दूध की कमाई तक सिमट जाता है। जैसे ही कोई गाय या भैंस उम्र या बीमारी की वजह से दूध कम देने लगती है, उसका चारा-पानी परिवार पर बोझ जैसा महसूस होने लगता है। इस पहल से एक उम्मीद यह जगी है कि अगर बूढ़ी या गैर-दुधारू गाय से भी थोड़ी नियमित कमाई हो जाए, तो परिवार उसे घर में रखने के लिए राजी होंगे।

दस रुपये लीटर सुनने में मामूली रकम लग सकती है, लेकिन रोज चार-पांच लीटर बेचने पर महीने भर में यह एक ठीक-ठाक जोड़ बन जाता है।`,
  },
  {
    eyebrow: 'भविष्य',
    heading: 'अगर पायलट कामयाब रहा तो आगे क्या होगा',
    body: `फिलहाल यह सिर्फ बुलंदशहर तक सीमित है, पूरे उत्तर प्रदेश में लागू नहीं हुई। सरकार का कहना है कि अगर यह प्रयोग सफल साबित हुआ तो इसे बाकायदा नीति का रूप देकर पूरे राज्य में फैलाया जाएगा। कुछ खबरों में यह भी संकेत मिला है कि आगे चलकर रेट बढ़ाकर बीस रुपये प्रति लीटर तक किया जा सकता है, हालांकि इस पर अभी अंतिम मुहर नहीं लगी है।`,
  },
  {
    eyebrow: 'सियासत',
    heading: 'सियासी गलियारों में मिली-जुली प्रतिक्रिया',
    body: `समाजवादी पार्टी की तरफ से इसे लेकर तंज कसा गया, इसे दिखावा तक बता दिया गया। जवाब में भाजपा प्रवक्ता ने कहा कि विपक्ष को हर विकास कार्य में कमी ही नजर आती है। जमीन पर देखें तो नरसेना और उसके आसपास के गांवों में लोग इस मौके का फायदा उठाते साफ नजर आ रहे हैं।`,
  },
  {
    eyebrow: 'तरीका',
    heading: 'बेचना कहां और कैसे है, इसे लेकर उलझन',
    body: `आम तौर पर स्थानीय FPO के जरिए तय जगह पर एक संग्रह केंद्र बना दिया जाता है। लोग साफ बर्तन में लेकर वहां पहुंचते हैं, वहां मात्रा नापी जाती है, कई बार यह भी जांचा जाता है कि उसमें पानी या कोई मिलावट तो नहीं है, और फिर तय दर पर भुगतान हो जाता है।`,
  },
  {
    eyebrow: 'दिशा',
    heading: 'जैविक खेती की तरफ एक और छोटा कदम',
    body: `रासायनिक खाद की बढ़ती कीमत और मिट्टी पर उसके बुरे असर को देखते हुए, किसानों को देसी विकल्पों की तरफ मोड़ने की कोशिश काफी समय से चल रही है। यह मॉडल अगर चल निकला तो सबसे ज्यादा फायदा उन छोटे-मझोले किसानों को होगा जो महंगी रासायनिक खाद खरीदने की हालत में नहीं होते।`,
  },
] as const;

const summary: readonly (readonly [string, string])[] = [
  ['जगह', 'बुलंदशहर जिला, स्याना तहसील, नरसेना गांव'],
  ['रेट', '10 रुपये प्रति लीटर'],
  ['शामिल गांव', 'करीब 15'],
  ['रोजाना जमा', 'लगभग 500 लीटर'],
  ['देखरेख', 'स्थानीय FPO, डॉ. प्रवीण की अगुवाई में'],
  ['अतिरिक्त फायदा', 'महिलाओं को 2 रुपये प्रति लीटर कमीशन'],
  ['इस्तेमाल', 'जैविक कीटनाशक और जीवामृत खाद'],
  ['आगे की राह', 'सफल रहा तो पूरे राज्य में विस्तार'],
];

const faqs = [
  {
    q: 'इससे कितनी कमाई हो सकती है?',
    a: 'यह इस पर टिका है कि घर में कितने मवेशी हैं और रोज कितना जमा हो पाता है। मौजूदा रेट दस रुपये प्रति लीटर है।',
  },
  {
    q: 'क्या यह पूरे उत्तर प्रदेश में शुरू हो चुका है?',
    a: 'नहीं, अभी सिर्फ बुलंदशहर के गिने-चुने गांवों में प्रयोग के तौर पर चल रहा है।',
  },
  {
    q: 'बेचने के लिए कहां जमा करना पड़ता है?',
    a: 'स्थानीय FPO ने जो संग्रह केंद्र बनाए हैं, वहां जमा करना होता है।',
  },
  {
    q: 'महिलाओं को अलग से कोई फायदा मिल रहा है?',
    a: 'हां, संग्रहण में मदद करने वाली महिलाओं को दो रुपये प्रति लीटर का अतिरिक्त कमीशन मिलता है।',
  },
  {
    q: 'आगे इसका इस्तेमाल किस काम में होगा?',
    a: 'जैविक कीटनाशक और जीवामृत जैसी प्राकृतिक खेती की सामग्री बनाने में।',
  },
  {
    q: 'दूसरे जिलों के लोगों को यह सुविधा कब मिलेगी?',
    a: 'अभी कोई तारीख तय नहीं है, यह प्रयोग के नतीजों पर निर्भर करेगा।',
  },
] as const;

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

function FurrowDivider() {
  return (
    <div
      aria-hidden="true"
      className="my-8 h-3 w-full opacity-70"
      style={{
        backgroundImage:
          'repeating-linear-gradient(115deg, #C98A3B 0px, #C98A3B 2px, transparent 2px, transparent 16px)',
      }}
    />
  );
}

export default function GauMutraKharidYojanaHindi({ article }: { article: HindiArticle }) {
  void article;

  return (
    <div className="not-prose">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* masthead */}
      <div className="flex items-center justify-between border-b-2 border-[#C98A3B] pb-3">
        <span className="font-serif text-lg tracking-widest text-[#8B5A20]">खेत पत्रिका</span>
        <span className="text-[11px] tracking-[0.25em] text-[#5C7A5E]">
          अंक · बुलंदशहर संस्करण
        </span>
      </div>

      {/* paper card */}
      <div className="relative mt-6 rounded-sm bg-[#EDE6D3] px-5 py-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] sm:px-10 sm:py-12">
        {/* stamp */}
        <div className="absolute -top-4 right-2 grid h-20 w-20 rotate-6 place-items-center rounded-full border-[3px] border-[#C98A3B] bg-[#EDE6D3] text-center text-[10px] font-bold leading-tight text-[#8B5A20]">
          पायलट
          <br />
          प्रोजेक्ट
        </div>

        <p className="text-sm font-semibold tracking-wide text-[#8B5A20]">कृषि रिपोर्ट</p>

        <p className="mt-3 border-l-4 border-[#5C7A5E] pl-3 text-[15px] italic text-[#4A4436]">
          पूरी कहानी, जगह-जगह की तस्दीक के साथ, यहां जानिए
        </p>

        <p className="mt-6 text-[17px] leading-8 text-[#3A342C] first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-[#8B5A20]">
          बुलंदशहर के कुछ गांवों में सुबह का नजारा अब थोड़ा बदल गया है। लोग दूध की कैन के साथ-साथ एक
          और बर्तन लेकर निकलते हैं, जिसमें भरा होता है मवेशियों का मूत्र। पास के संग्रह केंद्र पर उसे
          तौला जाता है और हाथों-हाथ नकद मिल जाता है। सुनने में अजीब लग सकता है, मगर यह सच है। उत्तर
          प्रदेश सरकार ने एक पायलट प्रोजेक्ट शुरू किया है जिसके तहत 10 रुपये प्रति लीटर की दर से यह
          तरल खरीदा जा रहा है।
        </p>

        <p className="mt-4 text-[15px] leading-7 text-[#4A4436]">
          Hinglish में यही रिपोर्ट पढ़नी है?{' '}
          <Link
            href="/articles/gau-mutra-kharid-yojana-up-2026"
            className="font-semibold text-[#8B5A20] underline"
          >
            Gau Mutra Kharid Yojana — Kisan Bulletin
          </Link>
        </p>

        {sections.map((s) => (
          <React.Fragment key={s.heading}>
            <FurrowDivider />
            <div className="grid grid-cols-[auto,1fr] gap-4 sm:grid-cols-[110px,1fr] sm:gap-6">
              <div className="pt-1 text-xs font-bold uppercase tracking-widest text-[#5C7A5E]">
                {s.eyebrow}
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#2B2620]">{s.heading}</h2>
                {s.body.split('\n\n').map((para, j) => (
                  <p key={j} className="mt-3 text-[16px] leading-8 text-[#3A342C]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}

        <FurrowDivider />

        {/* ledger summary */}
        <div className="border border-[#C98A3B]/50 bg-[#E4DBBF] p-5">
          <h2 className="font-serif text-lg font-bold uppercase tracking-wide text-[#2B2620]">
            पूरी बात एक नजर में
          </h2>
          <table className="mt-4 w-full border-collapse text-[15px]">
            <tbody>
              {summary.map(([label, value], i) => (
                <tr key={label} className={i % 2 === 0 ? '' : 'bg-[#DCD1AE]/60'}>
                  <td className="w-40 border-t border-[#C9BB8E] py-2 pr-3 align-top font-semibold text-[#7A5A24]">
                    {label}
                  </td>
                  <td className="border-t border-[#C9BB8E] py-2 text-[#3A342C]">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <FurrowDivider />

        {/* FAQ as ledger Q/A */}
        <h2 className="font-serif text-2xl font-bold text-[#2B2620]">
          अक्सर पूछे जाने वाले सवाल
        </h2>
        <div className="mt-5 space-y-5">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-[#C9BB8E] pb-4">
              <p className="font-serif text-[17px] font-bold text-[#2B2620]">{f.q}</p>
              <p className="mt-1 text-[15px] leading-7 text-[#4A4436]">{f.a}</p>
            </div>
          ))}
        </div>

        <FurrowDivider />

        <h2 className="font-serif text-2xl font-bold text-[#2B2620]">अंत में</h2>
        <p className="mt-4 text-[17px] leading-8 text-[#3A342C]">
          बुलंदशहर से शुरू हुआ यह छोटा सा प्रयोग भले अभी सीमित दायरे में हो, लेकिन इसके पीछे की सोच
          व्यावहारिक लगती है। आने वाले महीनों में अगर यह मॉडल कामयाब साबित हुआ, तो इसका सीधा फायदा उन
          लाखों परिवारों को मिल सकता है जो सालों से मवेशी पालते तो आए हैं, मगर उनसे मिलने वाला पूरा
          लाभ अब तक नहीं उठा पाए।
        </p>
      </div>

      <p className="mt-5 text-center text-xs tracking-wide text-[#5C6B63]">
        खेत पत्रिका · किसान स्टेटस डेस्क
      </p>
    </div>
  );
}
