import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { HindiArticle } from '@/lib/hindi-articles-data';

const HERO_IMAGE = {
  src: '/images/gau-mutra-yojana-hindi-hero.webp',
  alt: 'बुलंदशहर के गांव में सुबह गौमूत्र इकट्ठा करता किसान',
} as const;

const sections = [
  {
    eyebrow: 'शुरुआत',
    heading: 'शुरुआत कहां से हुई',
    body: `पूरी बात बुलंदशहर जिले की स्याना तहसील के नरसेना गांव से शुरू होती है। वहां किसानों का अपना एक संगठन है, जिसे FPO कहते हैं, और उसकी अगुवाई डॉ. प्रवीण कर रहे हैं। पहले सिर्फ अपने ही गांव में बात चली, फिर धीरे धीरे आसपास के करीब पंद्रह गांव इसमें जुड़ गए।

आज का हिसाब यह है कि रोजाना करीब पांच सौ लीटर इकट्ठा हो जाता है। पांच सौ सुनने में बहुत लगता है, मगर पंद्रह गांवों में बांट दीजिए तो हर गांव से एक-दो कैन ही बनते हैं। यानी कोई बड़ी मशीन, कोई बड़ा प्लांट नहीं — बस रोज का थोड़ा थोड़ा माल, और वही जुड़कर आंकड़ा बना देता है।

एक बात जो मुझे सबसे व्यवाहरिक लगी, वो यह है कि महिलाओं के स्वयं सहायता समूह इस काम में सीधे जोड़े गए हैं। समूह के जरिये माल आए तो दो रूपये प्रति लीटर अलग से कमीशन मिलता है। गांव में जमा करने का काम अकसर घर की औरतों के ही हाथ में रहता है, तो यह छोटी सी बात असल में बहुत काम करती है।`,
    img: {
      src: '/images/mahila-samooh-register-hindi.webp',
      alt: 'गांव की महिलाओं का समूह गौमूत्र संग्रहण की एंट्री रजिस्टर में करता हुआ',
    },
  },
  {
    eyebrow: 'मकसद',
    heading: 'आखिर इसे खरीदकर सरकार करेगी क्या',
    body: `जवाब सीधा जैविक खेती से जुड़ा है। जो तरल इकट्ठा हो रहा है, उससे आगे जैविक किटनाशक और जीवामृत जैसी खाद बनेगी। सोच यह है कि महंगी रासायनिक खाद पर किसान की निर्भरता थोड़ी कम हो। DAP और यूरिया के दाम हर साल चुभते हैं, और छोटे किसान का पूरा हिसाब वहीं बिगड़ जाता है।

केंद्र सरकार का नैशनल मिशन ऑन नैचुरल फार्मिंग भी इसी दिशा में चल रहा है। इसके तहत गांव गांव में बायो-इनपुट रिसोर्स सेंटर, यानी BRC खोले जा रहे हैं। ये छोटे केंद्र होते हैं जहां जीवामृत और नीमास्त्र जैसी चीजें बनती हैं और आसपास के किसानों को मिलती हैं। इन केंद्रों का कच्चा माल वही है जो आपके बाड़े में रोज नाली में बह जाता है।

तो बात दोनों तरफ से मिल जाती है। केंद्र को कच्चा माल चाहिए, किसान के पास वो चीज रोज बनती है और मुफ्त बहती है। बीच में एक संग्रह केंद्र खड़ा कर दो, और एक नई कड़ी बन गई।`,
    img: {
      src: '/images/jeevamrit-drum-taiyari-hindi.webp',
      alt: 'जीवामृत और जैविक कीटनाशक बनाने के लिए ड्रम में घोल तैयार करता किसान',
    },
  },
  {
    eyebrow: 'तर्क',
    heading: 'योगी सरकार की सोच के पीछे क्या तर्क है',
    body: `सोच यह है कि गाय जब दूध देना बंद कर दे, तब भी उसे पालना घाटे का सौदा न लगे।

इसके पीछे जो असली समस्या है, वो हर गांव जानता है। बूढ़ी गाय का चारा-पानी महीने भर में ठीक ठाक खर्चा खड़ा कर देता है, और बदले में दूध सिफर। इसलिए लोग उसे बेच देते हैं, या रात के अंधेरे में सड़क पर छोड़ आते हैं। आवारा पशु, फसल का नुक्सान, रात भर खेत की पहरेदारी — यह पूरी चेन वहीं से शुरू होती है।

अब अगर वही गाय खड़ी खड़ी महीने के कुछ हजार कमा दे, तो समीकरण बदल जाता है। आदमी उसे घर में रखेगा। मेरा मानना है कि इस पहल का असली मकसद कमाई से ज्यादा यही है — गाय को बाड़े में रोकना।

छत्तीसगढ़ में भी ऐसी एक योजना पहले चल चुकी है, गोधन न्याय योजना, जिसमें रेट चार रूपये लीटर था। यानी विचार नया नहीं है, पर दस रूपये का रेट पहली बार सुनाई दे रहा है।`,
    img: {
      src: '/images/desi-gaay-chara-gaushala-hindi.webp',
      alt: 'गौशाला में बूढ़ी देसी गाय को चारा खिलाता किसान',
    },
  },
  {
    eyebrow: 'असर',
    heading: 'गांव वालों के लिए इसका असल मतलब क्या है',
    body: `तीन बातें हैं जो असल में फरक डालती हैं।

पहली — बूढ़ी या गैर-दुधारू गाय भी कमाई का जरिया बन जाती है। पहले वो सिर्फ खर्चा थी। अब रोज चार-पांच लीटर भी बिक जाए तो महीने भर में ठीक ठाक जोड़ बन जाता है, खासकर उन घरों के लिए जिनके पास दूसरा कोई सहारा नहीं था।

दूसरी — पैसा उसी दिन। दूध का हिसाब महीने के बाद आता है, डेयरी की पर्ची के साथ। इसमें रकम हाथ में आ जाती है, और छोटे घर में यह फरक बहुत बड़ा होता है — बच्चे की किताब, दवा, राशन, सब इसी रोजाना के पैसे से निकल जाता है।

तीसरी — जो चीज अब तक बेकार थी, उसकी कीमत लग गई। इससे गाय को देखने का नजरिया बदलता है, और मेरे हिसाब से लंबे समय में इसका असर रेट से भी ज्यादा होगा।`,
    img: {
      src: '/images/nakad-bhugtan-kendra-hindi.webp',
      alt: 'संग्रह केंद्र पर किसान को गौमूत्र के बदले नकद भुगतान मिलता हुआ',
    },
  },
  {
    eyebrow: 'सच्चाई',
    heading: 'कितना पक्का है और कितना अभी सुनी-सुनाई बात है',
    body: `यह हिस्सा मैं जान बूझकर बीच में रख रहा हूं, क्योंकि आगे पढ़ने से पहले यह साफ होना चाहिये।

बुलंदशहर के पायलट के आंकड़े — रेट, गांवों की गिनती, रोज कितना जमा हो रहा है, महिलाओं का कमीशन — मिडिया रिपोर्ट और जमीनी जानकारी से आए हैं। इसका कोई राज्य स्तर का सरकारी आदेश, कोई GO नंबर आज तक सामने नहीं आया है। इसलिए जब तक वो कागज न आए, इसे एक चलता हुआ प्रयोग मानिये, पूरे उत्तर प्रदेश की योजना नहीं।

दूसरी तरफ जो बातें खाद बनाने, संग्रहण के नियम और प्राकृतिक खेती मिशन की हैं, वो पुरानी और जांची परखी जानकारी है। उसमें नया कुछ नहीं, वही जो किसान दशकों से करते आए हैं।

इसलिए रेट और विस्तार पे आखरी भरोसा अपने ब्लॉक के दफ्तर से पुष्टि करके ही करना। मैं वही लिखता हूं जो पता है; जो नहीं पता, उसका जिक्र भी कर देता हूं।`,
  },
  {
    eyebrow: 'सियासत',
    heading: 'सियासी गलियारों में मिली-जुली प्रतिक्रीया',
    body: `समाजवादी पार्टी की तरफ से इसे दिखावा बताया गया। जवाब में भाजपा प्रवक्ता ने कहा कि विपक्ष को हर विकास कार्य में कमी ही नजर आती है। यह बहस चलती रहेगी।

जमीन पर देखें तो नरसेना और उसके आसपास के गांवों में लोग इस मौके का फायदा उठाते साफ नजर आ रहे हैं। और किसान के लिए बहस से ज्यादा मतलब इसी बात का है — कि पर्ची मिली या नहीं, और पैसा उसी दिन आया या नहीं।`,
  },
  {
    eyebrow: 'भविष्य',
    heading: 'अगर पायलट कामयाब रहा तो आगे क्या होगा',
    body: `फिलहाल बात सिर्फ बुलंदशहर तक सीमित है। सरकार का कहना है कि प्रयोग सफल रहा तो इसे नीति की शक्ल देकर पूरे राज्य में फैलाया जाएगा। कुछ खबरों में यह संकेत भी मिला है कि आगे रेट बढ़ाकर बीस रूपये प्रति लीटर तक किया जा सकता है।

लेकिन यही वो हिस्सा है जिस पर कोई सरकारी कागज अब तक नहीं आया। इसलिए इसे उम्मीद मानिये, तय बात नहीं। अगर कोई आपके गांव में आकर कहे कि बीस रूपये का आदेश आ गया है, तो पहले ब्लॉक दफ्तर से पूछिये, फिर बर्तन भरिये।`,
  },
] as const;

/* संग्रहण का सही तरीका */
const collectionTips = [
  {
    n: '1',
    h: 'बर्तन सही हो, और साबुन बिलकुल न बचे',
    p: `स्टील की बाल्टी या खाद्य-स्तर का प्लास्टिक ड्रम, दोनों चलते हैं। लोहा और तांबा नहीं, क्योंकि इनके साथ तरल क्रिया कर जाता है। और एक बात जो लोग भूल जाते हैं — साबुन की झाग बिलकुल न बचे। दो बार साफ पानी से खंगाल लीजिये, फिर उल्टा रखकर सुखा लीजिये। साबुन की हल्की सी परत भी केंद्र की जांच में पकड़ी जाती है।`,
  },
  {
    n: '2',
    h: 'वक्त सुबह का रखिये',
    p: `जैविक खेती के जानकार सुबह उठते ही पहला मूत्र सबसे अच्छा मानते हैं, क्योंकि रात भर रुकने से वो गाढ़ा रहता है। बाड़े में ढलान वाली जगह पर एक चौड़ी थाली या पाइप लगा दीजिये और गाय के उठते वक्त पास खड़े रहिये। दो तीन दिन में आदत बन जाती है, फिर मुश्किल नहीं लगता।`,
  },
  {
    n: '3',
    h: 'छानकर और ढककर रखिये',
    p: `घास-फूस, मिट्टी और गोबर के टुकड़े मोटे कपड़े या जाली से निकाल दीजिये। इसके बाद बर्तन ढक दीजिये, वरना मक्खी मच्छर वहीं घर बना लेते हैं और बदबू पूरे बाड़े में फैल जाती है। सच कहूं तो घर के लोग पहले इसी बात पे नाराज होते हैं, काम से नहीं।`,
  },
  {
    n: '4',
    h: 'धूप से दूर, ठंडी जगह',
    p: `सीधी धूप में रखा बर्तन गरम होकर भाप छोड़ता है और हालत बदल जाती है। छाया वाला कोना, या बोरी से ढका ड्रम — यही बेहतर है। और जितनी जल्दी केंद्र पहुंचा दीजिये, उतना अच्छा दाम मिलने की गुंजाईश रहती है। शाम तक रख छोड़ने का कोई फायदा नहीं।`,
  },
  {
    n: '5',
    h: 'पानी मिलाने की गलती कभी न कीजिये',
    p: `मात्रा बढ़ाने का लालच आता है, मैं जानता हूं। पर केंद्र पे हर कैन की जांच होती है, और एक बार मिलावट पकड़ी गई तो पूरे गांव का भरोसा चला जाता है — कई जगह आगे लेना ही बंद कर देते हैं। यह अपनी कमाई का रास्ता खुद बंद करने वाली बात है।`,
  },
] as const;

/* बुलंदशहर से बाहर के रास्ते */
const sellingOptions = [
  {
    k: 'FPO का संग्रह केंद्र',
    v: `सबसे सीधा रास्ता, और बुलंदशहर में यही मॉडल चल रहा है। किसान कैन लेकर आता है, मात्रा नापी जाती है, जांच होती है, वहीं भुगतान। अपने जिले का FPO खोजने के लिये ब्लॉक के BDO दफ्तर या कृषि विभाग से पूछ लीजिये।`,
  },
  {
    k: 'गौशाला और पशु आश्रय स्थल',
    v: `बड़ी गौशालाएं खुद जैविक खाद बनाती हैं और कच्चा माल बाहर से लेना पसंद करती हैं, क्योंकि उनकी अपनी मात्रा काफी नहीं पड़ती। नगर पालिका या जिला पंचायत से जुड़ी गौशाला का पता आसानी से मिल जाता है।`,
  },
  {
    k: 'बायो-इनपुट रिसोर्स सेंटर (BRC)',
    v: `प्राकृतिक खेती मिशन के तहत गांव स्तर पे खुले ये केंद्र जीवामृत और नीमास्त्र जैसी चीजें बनाकर आगे बेचते हैं, इसलिये इन्हें रोज कच्चा माल चाहीये होता है। जिले के कृषि विज्ञान केंद्र (KVK) से पूछ लीजिये कि आसपास कोई BRC है या नहीं।`,
  },
  {
    k: 'पंचगव्य और आयुर्वेदिक इकाइयां',
    v: `कुछ निजी इकाइयां इसे साफ करके, डिस्टिल करके अर्क बनाती हैं। ये अच्छे दाम दे सकती हैं, लेकिन मात्रा और सफाई के उनके अपने पैमाने होते हैं। पहले जाकर बात कर लीजिये, फिर जमा करना शुरू कीजिये — वरना माल तैयार रहेगा और खरीदार नहीं।`,
  },
  {
    k: 'आसपास के जैविक किसान',
    v: `जो पड़ोसी रसायन छोड़कर प्राकृतिक तरीके पे आ गए हैं, उन्हें हर पंद्रह दिन ड्रम भरने के लिये माल चाहिये होता है। न कोई बिचोलिया, सबसे सरल सौदा — और गाड़ी का किराया भी बच जाता है।`,
  },
] as const;

/* जीवामृत का नुस्खा */
const jeevamritRows: readonly (readonly [string, string, string])[] = [
  ['पानी', '200 लीटर', 'ड्रम भरने के लिये; क्लोरीन वाला नल का पानी हो तो एक रात खुला रख दें'],
  ['देसी गाय का गोबर', '10 किलो', 'ताजा हो, सूखा नहीं'],
  ['देसी गाय का मूत्र', '5–10 लीटर', 'अलग अलग जानकार अलग मात्रा बताते हैं'],
  ['गुड़', '1–2 किलो', 'पुराना, काला गुड़ भी चल जाता है'],
  ['बेसन या दाल का आटा', '1–2 किलो', 'चना, मूंग या उरद — जो घर में हो'],
  ['खेत की मिट्टी', 'एक मुट्ठी', 'उस खेत से जहां रसायन न पड़ा हो'],
];

/* पैसे का हिसाब */
const moneyRows: readonly (readonly [string, string, string])[] = [
  ['1 गाय', 'करीब 4 लीटर रोज', 'सबसे आम हालत — घर की एक गाय, महीने का जोड़ 1200 के आसपास'],
  ['2 गाय', 'करीब 8 लीटर रोज', 'छोटा पशुपालक घर, महीने का 2400 के आसपास'],
  ['4 गाय', 'करीब 15 लीटर रोज', 'दूध के साथ यह दूसरी आमदनी बन जाती है'],
  ['महिला समूह के जरिये', 'वही मात्रा, ऊपर +₹2/लीटर', 'बुलंदशहर पायलट में समूह से जुड़े घरों को'],
];

/* धोखे से बचाव */
const warnings = [
  {
    h: 'एडवांस पैसा मांगने वाला एजेंट',
    p: `कोई कहे कि "रजिस्ट्रेशन के पांच सौ लगेंगे, फिर रोज उठवा लेंगे" — वहीं रुक जाइये। खरीदने वाला पैसा देता है, लेता नहीं। यह पुराना तरीका है जो हर नई योजना के साथ गांव में घूमने लगता है, बस नाम बदल जाता है।`,
  },
  {
    h: 'बिना तोलाई भुगतान',
    p: `"दो कैन का इतना दे देता हूं" — ऐसा सौदा कभी मत कीजिये। मात्रा आपके सामने नापी जानी चाहिये और पर्ची मिलनी चाहिये। बिना नाप के नुक्सान हमेशा बेचने वाले का होता है।`,
  },
  {
    h: 'व्हाट्सएप पर आने वाले "फॉर्म" और लिंक',
    p: `इस तरह के काम में आधार-बैंक की डिटेल भरने वाला कोई ऑनलाइन फॉर्म नहीं होता। जो लिंक OTP या बैंक डिटेल मांगे, उसे खोलिये ही मत। संग्रह केंद्र पे बात आमने सामने होती है। घर के बच्चों को भी यह बात बता दीजिये, क्योंकि लिंक उनके फोन पे पहले पहुंचता है।`,
  },
  {
    h: 'रेट का झूठा वादा',
    p: `किसी ने बीस या पचास रूपये लीटर का लालच दिया तो पहले पूछिये — कौन खरीद रहा है, कहां ले जाएगा, और पिछले महीने किसको पैसा दिया। दो तीन गांव वालों से पुष्टि कर लीजिये, फिर हां बोलिये।`,
  },
] as const;

const summary: readonly (readonly [string, string])[] = [
  ['जगह', 'बुलंदशहर जिला · स्याना तहसील · नरसेना गांव'],
  ['रेट', '10 रूपये प्रति लीटर'],
  ['शामिल गांव', 'करीब 15'],
  ['रोजाना जमा', 'लगभग 500 लीटर'],
  ['देखरेख', 'स्थानीय FPO, डॉ. प्रवीण की अगुवाई में'],
  ['महिला कमीशन', 'ऊपर से +2 रूपये प्रति लीटर'],
  ['इस्तेमाल', 'जैविक कीटनाशक और जीवामृत खाद'],
  ['सरकारी आदेश', 'राज्य स्तर का कोई GO अब तक नहीं'],
  ['आगे की राह', 'सफल रहा तो राज्यव्यापी विस्तार संभव'],
];

const govLinks: readonly (readonly [string, string, string])[] = [
  ['गोधन न्याय योजना (छत्तीसगढ़ — गौमूत्र खरीद)', 'godhannyay.cgstate.gov.in', 'https://godhannyay.cgstate.gov.in'],
  ['नैशनल मिशन ऑन नैचुरल फार्मिंग (BRC / जीवामृत)', 'naturalfarming.dac.gov.in', 'https://naturalfarming.dac.gov.in'],
  ['यूपी पशुपालन विभाग', 'animalhusb.upsdc.gov.in', 'http://animalhusb.upsdc.gov.in'],
  ['सरकारी योजनाओं की एक जगह जानकारी', 'myscheme.gov.in', 'https://www.myscheme.gov.in'],
];

const faqs = [
  {
    q: 'इससे कितनी कमाई हो सकती है?',
    a: 'बुलंदशहर में रेट दस रूपये लीटर है। एक गाय रोज का चार लीटर दे दे तो महीने के 1200 के आसपास बनता है — बड़ा पैसा नहीं, पर यह दूध के ऊपर की कमाई है, उसकी जगह नहीं। चार गाय हैं तो हिसाब चार गुना कर लीजिये। महिला समूह से जुड़े घर को दो रूपये लीटर ऊपर से मिलता है।',
  },
  {
    q: 'क्या यह पूरे उत्तर प्रदेश में शुरू हो चुका है?',
    a: 'नहीं। अभी सिर्फ बुलंदशहर के कुछ गांवों में प्रयोग के तौर पर चल रहा है। बाकी जिलों के लिये न कोई आदेश आया है, न तारिख। कोई कहे कि आपके जिले में भी सरकारी खरीद चालू हो गई, तो पहले ब्लॉक दफ्तर से पुष्टि कर लीजिये।',
  },
  {
    q: 'क्या किसी राज्य में सरकार सच में गौमूत्र खरीदती है?',
    a: 'छत्तीसगढ़ में खरीदती रही है — गोधन न्याय योजना के तहत चार रूपये लीटर, गौठान केंद्रों पर। उस योजना का अपना सरकारी पोर्टल है, godhannyay.cgstate.gov.in। यानी बात हवा हवाई नहीं है; बस यूपी में अभी उस स्तर की व्यवस्था नहीं बनी।',
  },
  {
    q: 'जमा कहां करना पड़ता है और रजिस्ट्रेशन का क्या चक्कर है?',
    a: 'स्थानीय FPO के संग्रह केंद्र पर। FPO अपना रजिस्टर खुद रखता है — कोई ऑनलाइन फॉर्म, कोई पोर्टल, कोई फीस नहीं। आपके इलाके में कौन ले रहा है, यह ब्लॉक का BDO दफ्तर या KVK बता देगा। फीस मांगने वाला आदमी गलत है, सीधी बात।',
  },
  {
    q: 'पैसा कब और कैसे मिलता है?',
    a: 'पायलट में उसी दिन भुगतान की बात है — नकद या खाते में, खरीदने वाले पर निर्भर। बस पर्ची जरूर लीजिये, और बिना तोलाई का सौदा कभी मत कीजिये।',
  },
  {
    q: 'भैंस का भी चलेगा या सिर्फ गाय का?',
    a: 'प्राकृतिक खेती के पारंपरिक नुस्खे देसी गाय की बात करते हैं — साहीवाल, गिर, हरियाना जैसी नस्लें। भैंस पे हर केंद्र की अपनी पॉलिसी है। गाड़ी भरकर ले जाने से पहले फोन पे ही पूछ लीजिये।',
  },
  {
    q: 'बर्तन कैसा इस्तेमाल करें और कितने दिन रख सकते हैं?',
    a: 'स्टील या फूड-ग्रेड प्लास्टिक, साफ और ढक्कन वाला। लोहा-तांबा नहीं, और साबुन की झाग बिलकुल न बचे। जितना ताजा, उतना अच्छा — दो तीन दिन से ज्यादा रखने पर गुणवत्ता बिगड़ती है और जांच में दिक्कत आती है।',
  },
  {
    q: 'गाय बिमार हो या दवा चल रही हो तो?',
    a: 'तब जमा मत कीजिये। एंटीबायोटिक या कोई इलाज चल रहा हो तो पशु चिकित्सक से पूछ लिजिये कि कितने दिन रुकना है। यह माल खाद और कीटनाशक में जाता है, इसलिये यह सावधानी जरुरी है।',
  },
  {
    q: 'महिलाओं को अलग से कोई फायदा मिल रहा है?',
    a: 'हां। संग्रहण में जुड़े स्वयं सहायता समूहों को दो रूपये प्रति लीटर का अतिरिक्त कमीशन मिलता है, यानी समूह के जरिये आया माल बेचने वाले को बारह रूपये तक बना देता है।',
  },
  {
    q: 'खरीदार ही न मिले तो जमा करना बेकार गया?',
    a: 'बिलकुल नहीं। जीवामृत खुद बना लीजिये — दो सौ लीटर का एक ड्रम करीब एक एकड़ के लिये काफी माना जाता है, और खाद की दुकान का बिल सीधा घट जाता है। ऊपर पूरा नुस्खा दिया है। कई घर आधा बेचते हैं, आधा अपने खेत में डालते हैं।',
  },
  {
    q: 'दूसरे जिलों के लोगों को यह सुविधा कब मिलेगी?',
    a: 'कोई तारिख तय नहीं है, यह प्रयोग के नतीजों पर निर्भर करेगा। तब तक गौशाला, BRC, आयुर्वेदिक इकाई या पड़ोसी जैविक किसान — यही चार रास्ते खुले हैं।',
  },
  {
    q: 'क्या इस कमाई के भरोसे नई गाय खरीदना समझदारी है?',
    a: 'नहीं। यह सहारा है, मुख्य आमदनी नहीं। गाय दूध, गोबर और खाद — तीनों के हिसाब से खरीदी जाती है। कर्ज लेकर पशु लेने से पहले पूरा हिसाब कागज पे लिखिये, और ब्याज जोड़कर देखिये।',
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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-1 text-xs font-bold uppercase tracking-widest text-[#5C7A5E]">{children}</div>
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
          रेट, संग्रह केंद्र, खाद बनाने का नुस्खा और ठगी से बचाव — पूरी बात एक जगह
        </p>

        <p className="mt-6 text-[17px] leading-8 text-[#3A342C] first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-[#8B5A20]">
          बुलंदशहर के कुछ गांवों में सुबह का नजारा अब थोड़ा बदल गया है। लोग दूध की कैन के साथ साथ एक
          और बर्तन लेकर निकलते हैं, जिसमें भरा होता है मवेशीयों का मूत्र। पास के संग्रह केंद्र पर उसे
          नापा जाता है और हाथों हाथ नकद मिल जाता है। सुनने में अजीब लगता है, मगर सच है। उत्तर प्रदेश
          में एक पायलट प्रोजेक्ट चल रहा है जिसके तहत यह तरल 10 रूपये प्रति लीटर की दर से खरीदा जा
          रहा है।
        </p>

        <figure className="mt-6">
          <Image
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            width={1200}
            height={669}
            priority
            className="h-auto w-full rounded-sm border border-[#C9BB8E] object-cover"
          />
          <figcaption className="mt-2 text-center text-[12px] italic text-[#5C6B63]">
            बुलंदशहर के गांवों में सुबह का बदला हुआ नजारा
          </figcaption>
        </figure>

        <p className="mt-5 text-[16px] leading-8 text-[#3A342C]">
          नीचे मैंने वही लिखा है जो अब तक सामने आया है, और साथ में वो काम की बातें भी जोड़ दी हैं जो
          इस खबर में अकसर छूट जाती हैं — बर्तन कैसा हो, केंद्र पे जांच किस चीज की होती है, महीने का
          हिसाब असल में कितना बनता है, और जिले में खरीदार न मिले तो क्या रास्ता है।
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
              <Eyebrow>{s.eyebrow}</Eyebrow>
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#2B2620]">{s.heading}</h2>
                {s.body.split('\n\n').map((para, j) => (
                  <p key={j} className="mt-3 text-[16px] leading-8 text-[#3A342C]">
                    {para}
                  </p>
                ))}
                {'img' in s && s.img && (
                  <figure className="mt-4">
                    <Image
                      src={s.img.src}
                      alt={s.img.alt}
                      width={1200}
                      height={669}
                      loading="lazy"
                      className="h-auto w-full rounded-sm border border-[#C9BB8E] object-cover"
                    />
                  </figure>
                )}
              </div>
            </div>
          </React.Fragment>
        ))}

        <FurrowDivider />

        {/* संग्रहण के नियम */}
        <div className="grid grid-cols-[auto,1fr] gap-4 sm:grid-cols-[110px,1fr] sm:gap-6">
          <Eyebrow>तैयारी</Eyebrow>
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#2B2620]">
              सुबह के पंद्रह मिनट — इकट्ठा करने का सही तरीका
            </h2>
            <p className="mt-3 text-[16px] leading-8 text-[#3A342C]">
              यह हिस्सा ध्यान से पढ़िये, क्योंकि दाम यहीं बनता या बिगड़ता है। संग्रह केंद्र पर
              गुणवत्ता की जांच होती है और गंदा माल लौटा भी दिया जाता है। जो लोग पहले से कर रहे हैं,
              उनका तरीका लगभग एक जैसा है — पांच बातें याद रखने लायक हैं।
            </p>
            <ol className="mt-4 space-y-4">
              {collectionTips.map((t) => (
                <li key={t.h} className="flex gap-3 border-l-2 border-[#C98A3B] pl-4">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#C98A3B] text-[12px] font-black text-[#EDE6D3]">
                    {t.n}
                  </span>
                  <div>
                    <p className="font-serif text-[17px] font-bold text-[#2B2620]">{t.h}</p>
                    <p className="mt-1 text-[15px] leading-7 text-[#4A4436]">{t.p}</p>
                  </div>
                </li>
              ))}
            </ol>
            <figure className="mt-5">
              <Image
                src="/images/sangrah-kendra-napai-hindi.webp"
                alt="FPO संग्रह केंद्र पर बर्तन में लाया गया गौमूत्र नापा जाता हुआ"
                width={1200}
                height={669}
                loading="lazy"
                className="h-auto w-full rounded-sm border border-[#C9BB8E] object-cover"
              />
            </figure>
          </div>
        </div>

        <FurrowDivider />

        {/* बुलंदशहर से बाहर */}
        <div className="grid grid-cols-[auto,1fr] gap-4 sm:grid-cols-[110px,1fr] sm:gap-6">
          <Eyebrow>विकल्प</Eyebrow>
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#2B2620]">
              बुलंदशहर से बाहर के किसान क्या करें
            </h2>
            <p className="mt-3 text-[16px] leading-8 text-[#3A342C]">
              योजना भले अभी एक जिले तक सीमित हो, मांग दूसरी जगहों पर भी मौजूद है — बस वो किसी सरकारी
              योजना की शक्ल में नहीं है, इसलिये दिखती नहीं। पांच जगह हैं जहां बात बन सकती है, और
              दाम आपसी बातचीत से तय होता है: कहीं पांच रूपये, कहीं दस, और माल साफ हो तो उससे ज्यादा
              भी।
            </p>
            <div className="mt-4 space-y-4">
              {sellingOptions.map((o) => (
                <div key={o.k} className="border-l-2 border-[#5C7A5E] pl-4">
                  <p className="font-serif text-[17px] font-bold text-[#2B2620]">{o.k}</p>
                  <p className="mt-1 text-[15px] leading-7 text-[#4A4436]">{o.v}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[15px] leading-7 text-[#4A4436]">
              एक छोटी सलाह जो मैं हर किसी को देता हूं: पहली बार पंद्रह बीस लीटर लेकर जाइये और पूरा
              चक्कर खुद देख लीजिये — जांच कैसे होती है, तोलाई कैसे होती है, पैसा कब मिलता है। भरोसा
              बनने के बाद ही रोजाना का सिलसिला बनाइये।
            </p>
          </div>
        </div>

        <FurrowDivider />

        {/* जीवामृत */}
        <div className="grid grid-cols-[auto,1fr] gap-4 sm:grid-cols-[110px,1fr] sm:gap-6">
          <Eyebrow>खुद बनाइये</Eyebrow>
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#2B2620]">
              एक ड्रम जीवामृत — घर की चीजों से
            </h2>
            <p className="mt-3 text-[16px] leading-8 text-[#3A342C]">
              यह रास्ता किसी आदेश का इंतजार नहीं मांगता, और मेरे हिसाब से आधे किसानों के लिये बेहतर
              है। प्राकृतिक खेती का सबसे पुराना नुस्खा जीवामृत है। दो सौ लीटर का एक ड्रम करीब एक
              एकड़ के लिये काफी माना जाता है। मात्रा के आंकड़ों में जानकारों के बीच थोड़ा फरक मिलता
              है, इसलिये नीचे रेंज दी गई है, कोई पक्का आंकड़ा नहीं।
            </p>
            <div className="mt-4 overflow-x-auto border border-[#C98A3B]/50 bg-[#E4DBBF]">
              <table className="w-full border-collapse text-left text-[15px]">
                <thead>
                  <tr className="bg-[#DCD1AE]">
                    <th className="px-3 py-2 text-[12px] uppercase tracking-wide text-[#7A5A24]">
                      चीज
                    </th>
                    <th className="px-3 py-2 text-[12px] uppercase tracking-wide text-[#7A5A24]">
                      मात्रा
                    </th>
                    <th className="px-3 py-2 text-[12px] uppercase tracking-wide text-[#7A5A24]">
                      नोट
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jeevamritRows.map(([a, b, c]) => (
                    <tr key={a} className="border-t border-[#C9BB8E]">
                      <td className="px-3 py-2 font-semibold text-[#3A342C]">{a}</td>
                      <td className="px-3 py-2 font-semibold text-[#8B5A20]">{b}</td>
                      <td className="px-3 py-2 text-[13px] leading-6 text-[#4A4436]">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[16px] leading-8 text-[#3A342C]">
              सब ड्रम में डालकर लकड़ी से घोल लीजिये। ऊपर बोरी ढक दीजिये ताकि हवा निकलती रहे — ढक्कन
              बंद मत करना। रोज एक बार हिलाते रहिये। गर्मी में दो तीन दिन, सर्दी में जादा वक्त लगता
              है। तैयार होने पे ऊपर झाग आ जाता है और एक खट्टी गंध आती है; यही पहचान है। बनने के बाद
              हफ्ते भर के अंदर खेत में दे दीजिये — पानी के साथ, या सीधा जड़ के पास।
            </p>
            <p className="mt-3 text-[16px] leading-8 text-[#3A342C]">
              एक इमानदार बात: गुड़ और बेसन बाजार से खरीदने पड़ते हैं, तो यह बिलकुल मुफ्त नहीं है।
              फिर भी उतनी जमीन पे रासायनिक खाद के बिल से सामना कीजिये तो फरक अपने आप दिख जाता है।
              नीम की पत्ती वाले नुस्खे, जैसे नीमास्त्र, भी इसी तरल से बनते हैं और सुंडी-कीड़े के लिये
              किसान उन्हें काम का बताते हैं। गोबर से भी अलग कमाई का रास्ता है — हमने{' '}
              <Link
                href="/articles/vermi-compost-business-guide"
                className="font-semibold text-[#8B5A20] underline"
              >
                वर्मी कम्पोस्ट के बिजनेस
              </Link>{' '}
              पे पहले लिखा था, दोनों काम एक ही बाड़े से चलते हैं।
            </p>
            <figure className="mt-4">
              <Image
                src="/images/jaivik-spray-khet-hindi.webp"
                alt="खेत में जैविक कीटनाशक का छिड़काव करता किसान"
                width={1200}
                height={669}
                loading="lazy"
                className="h-auto w-full rounded-sm border border-[#C9BB8E] object-cover"
              />
            </figure>
          </div>
        </div>

        <FurrowDivider />

        {/* पैसे का हिसाब */}
        <div className="grid grid-cols-[auto,1fr] gap-4 sm:grid-cols-[110px,1fr] sm:gap-6">
          <Eyebrow>हिसाब</Eyebrow>
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#2B2620]">
              रोज का जोड़ महीने में कितना बनता है
            </h2>
            <p className="mt-3 text-[16px] leading-8 text-[#3A342C]">
              नीचे वाली मात्रा अंदाजा है, वादा नहीं। गाय की नस्ल, उम्र, चारा और मौसम — सबसे फरक
              पड़ता है। सबसे इमानदार तरीका यह है कि अपने घर का आंकड़ा दो तीन दिन खुद नाप लीजिये, फिर
              तीस से गुणा कर लीजिये। किसी के बताए आंकड़े पे घर का हिसाब मत बनाइये।
            </p>
            <div className="mt-4 overflow-x-auto border border-[#C98A3B]/50 bg-[#E4DBBF]">
              <table className="w-full border-collapse text-left text-[15px]">
                <thead>
                  <tr className="bg-[#DCD1AE]">
                    <th className="px-3 py-2 text-[12px] uppercase tracking-wide text-[#7A5A24]">
                      घर में पशु
                    </th>
                    <th className="px-3 py-2 text-[12px] uppercase tracking-wide text-[#7A5A24]">
                      अंदाजन मात्रा
                    </th>
                    <th className="px-3 py-2 text-[12px] uppercase tracking-wide text-[#7A5A24]">
                      टिप्पणी
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {moneyRows.map(([a, b, c]) => (
                    <tr key={a} className="border-t border-[#C9BB8E]">
                      <td className="px-3 py-2 font-semibold text-[#3A342C]">{a}</td>
                      <td className="px-3 py-2 font-semibold text-[#8B5A20]">{b}</td>
                      <td className="px-3 py-2 text-[13px] leading-6 text-[#4A4436]">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[16px] leading-8 text-[#3A342C]">
              एक बात जो कोई नहीं बताता — मेहनत और वक्त भी खर्चा है। सुबह के पंद्रह बीस मिनट, बर्तन
              धोना, केंद्र तक पहुंचाना। चलते फिरते काम के साथ हो जाए तो फायदा साफ है। इसके लिये अलग
              से आदमी रखना पड़े, तो हिसाब दोबारा करना पड़ेगा, क्योंकि फिर मजूरी इस कमाई से बहुत कम
              नहीं बचेगी।
            </p>
            <p className="mt-3 text-[16px] leading-8 text-[#3A342C]">
              और अगर गाय ही नहीं है और खरीदने की सोच रहे हैं, तो कर्जा लेने से पहले{' '}
              <Link
                href="/articles/dairy-farm-loan-without-collateral"
                className="font-semibold text-[#8B5A20] underline"
              >
                बिना जमानत वाले डेयरी लोन
              </Link>{' '}
              के बारे में पढ़ लीजिये। सिर्फ इस दस रूपये वाली कमाई के भरोसे पशु लेना समझदारी नहीं
              होगी। ब्याज की दर देखनी हो तो{' '}
              <Link
                href="/articles/sbi-dairy-loan-interest-rate"
                className="font-semibold text-[#8B5A20] underline"
              >
                SBI डेयरी लोन की ब्याज दर
              </Link>{' '}
              वाला पेज भी खोल लीजिये।
            </p>
          </div>
        </div>

        <FurrowDivider />

        {/* सावधान */}
        <div className="grid grid-cols-[auto,1fr] gap-4 sm:grid-cols-[110px,1fr] sm:gap-6">
          <Eyebrow>सावधान</Eyebrow>
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#2B2620]">
              नई बात आते ही ठग भी आ जाते हैं
            </h2>
            <p className="mt-3 text-[16px] leading-8 text-[#3A342C]">
              जब भी गांव में कमाई की कोई नई बात चलती है, दो चार लोग उसी हफ्ते फायदा उठाने निकल पड़ते
              हैं। वैसे ही जैसे{' '}
              <Link
                href="/articles/KisanCreditCardOnlineApply2026"
                className="font-semibold text-[#8B5A20] underline"
              >
                KCC बनवाने
              </Link>{' '}
              के नाम पे दलाल घूमते हैं। चार निशानियां याद रख लीजिये, और घर के लोगों को भी बता दीजिये।
            </p>
            <div className="mt-4 space-y-4">
              {warnings.map((w) => (
                <div key={w.h} className="border-l-2 border-[#A0522D] bg-[#E4DBBF]/60 py-2 pl-4">
                  <p className="font-serif text-[17px] font-bold text-[#7A3B1E]">{w.h}</p>
                  <p className="mt-1 text-[15px] leading-7 text-[#4A4436]">{w.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <FurrowDivider />

        {/* सरकारी मदद */}
        <div className="grid grid-cols-[auto,1fr] gap-4 sm:grid-cols-[110px,1fr] sm:gap-6">
          <Eyebrow>सरकारी मदद</Eyebrow>
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#2B2620]">
              पशुपालन पे पैसा लगाना हो तो कहां जाएं
            </h2>
            <p className="mt-3 text-[16px] leading-8 text-[#3A342C]">
              यह काम अपने आप में बड़ी आमदनी नहीं है, सहारा है। लेकिन अगर आप देसी नस्ल बढ़ाने या शेड
              बनाने की सोच रहे हैं, तो केंद्र सरकार की दो योजनाएं इसी काम की हैं और दोनों का अपना
              पोर्टल है।
            </p>
            <div className="mt-4 space-y-4">
              <div className="border-l-2 border-[#5C7A5E] pl-4">
                <p className="font-serif text-[17px] font-bold text-[#2B2620]">
                  राष्ट्रीय गोकुल मिशन
                </p>
                <p className="mt-1 text-[15px] leading-7 text-[#4A4436]">
                  देसी नस्ल के सुधार और संरक्षण पे काम करती है — नस्ल बढ़ाने वाले फार्म, बेहतर सांड,
                  कृतिम गर्भाधान। हमारे पास इसकी अलग गाइड है:{' '}
                  <Link
                    href="/articles/rashtriya-gokul-mission-subsidy"
                    className="font-semibold text-[#8B5A20] underline"
                  >
                    गोकुल मिशन सब्सिडी की पूरी जानकारी
                  </Link>
                  ।
                </p>
              </div>
              <div className="border-l-2 border-[#5C7A5E] pl-4">
                <p className="font-serif text-[17px] font-bold text-[#2B2620]">
                  राष्ट्रीय पशुधन मिशन (NLM)
                </p>
                <p className="mt-1 text-[15px] leading-7 text-[#4A4436]">
                  बकरी, मुर्गी, सूअर और चारा इकाइयों पे पूंजी सहायता देती है। आवेदन{' '}
                  <a
                    href="https://nlm.udyamimitra.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#8B5A20] underline"
                  >
                    nlm.udyamimitra.in
                  </a>{' '}
                  पे होता है। बकरी पालन का हिसाब देखना हो तो{' '}
                  <Link
                    href="/articles/bakri-palan-yojana-nlm-subsidy"
                    className="font-semibold text-[#8B5A20] underline"
                  >
                    बकरी पालन सब्सिडी वाली गाइड
                  </Link>{' '}
                  पढ़ लीजिये।
                </p>
              </div>
              <div className="border-l-2 border-[#5C7A5E] pl-4">
                <p className="font-serif text-[17px] font-bold text-[#2B2620]">
                  जमीन की जांच पहले
                </p>
                <p className="mt-1 text-[15px] leading-7 text-[#4A4436]">
                  जैविक खाद का असर तब समझ आता है जब मिट्टी की हालत पहले से पता हो। मेरा सुझाव यह है कि
                  यह सबसे पहले करवा लीजिये, वरना दो साल बाद पता नहीं चलेगा कि फरक आया या नहीं। सॉयल
                  हेल्थ कार्ड मुफ्त बनता है —{' '}
                  <Link
                    href="/articles/soil-health-card-complete-guide-2026"
                    className="font-semibold text-[#8B5A20] underline"
                  >
                    कार्ड बनवाने का तरीका यहां है
                  </Link>
                  ।
                </p>
              </div>
            </div>

            <div className="mt-5 border border-[#C98A3B]/50 bg-[#E4DBBF] p-4">
              <p className="text-[12px] font-bold uppercase tracking-wide text-[#5C7A5E]">
                सरकारी वेबसाइट — सीधा लिंक
              </p>
              <ul className="mt-2 space-y-2 text-[14px] leading-7 text-[#4A4436]">
                {govLinks.map(([label, text, href]) => (
                  <li key={href}>
                    · {label}:{' '}
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#8B5A20] underline"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[13px] leading-6 text-[#5C6B63]">
                सब्सिडी के आंकड़े साल दर साल बदलते हैं। जो भी रकम कहीं पढ़िये, आवेदन से पहले उसी
                योजना के सरकारी पोर्टल पे या जिला पशुपालन अधिकारी से पुष्टि कर लीजिये।
              </p>
            </div>
          </div>
        </div>

        <FurrowDivider />

        {/* ledger summary */}
        <div className="border border-[#C98A3B]/50 bg-[#E4DBBF] p-5">
          <h2 className="font-serif text-lg font-bold uppercase tracking-wide text-[#2B2620]">
            पूरी बात एक नजर में
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-[15px]">
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
        </div>

        <FurrowDivider />

        {/* FAQ */}
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
          व्यावहारिक लगती है। आने वाले महीनों में अगर यह मॉडल कामयाब साबित हुआ, तो सीधा फायदा उन
          लाखों परिवारों को मिल सकता है जो सालों से मवेशी पालते आए हैं, मगर उनसे मिलने वाला पूरा
          लाभ अब तक नहीं उठा पाए।
        </p>
        <p className="mt-3 text-[17px] leading-8 text-[#3A342C]">
          और अगर आपके जिले तक यह बात न भी पहुंचे, तब भी एक रास्ता खुला है। ड्रम भरिये, खाद खुद
          बनाइये, अपने खेत पे लगाइये — इसमें किसी आदेश का इंतजार नहीं करना पड़ता। जो चीज अब तक नाली
          में बह रही थी, वो खेत के काम आ जाए। इतनी शुरुआत काफी है।
        </p>

        <div className="mt-8 border border-[#C98A3B]/50 bg-[#E4DBBF] p-5">
          <p className="text-[12px] font-bold uppercase tracking-wide text-[#5C7A5E]">
            इसे भी पढ़िये
          </p>
          <ul className="mt-3 space-y-2 text-[15px] leading-7 text-[#4A4436]">
            <li>
              ·{' '}
              <Link
                href="/articles/hi/kcc-limit-kaise-badhaye"
                className="font-semibold text-[#8B5A20] underline"
              >
                KCC लिमिट ₹3 से ₹5 लाख कैसे बढ़ाएं
              </Link>{' '}
              — खेती के खर्चे का इंतेजाम
            </li>
            <li>
              ·{' '}
              <Link
                href="/articles/mandi-bhav-today"
                className="font-semibold text-[#8B5A20] underline"
              >
                आज का मंडी भाव
              </Link>{' '}
              — बेचने का सही वक्त तय करने के लिये
            </li>
            <li>
              ·{' '}
              <Link
                href="/articles/bihar-pashupalan-loan-yojana"
                className="font-semibold text-[#8B5A20] underline"
              >
                बिहार पशुपालन लोन योजना
              </Link>{' '}
              — शेड और पशु खरीद पे मदद
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-5 text-center text-xs tracking-wide text-[#5C6B63]">
        खेत पत्रिका · किसान स्टेटस डेस्क
      </p>
    </div>
  );
}
