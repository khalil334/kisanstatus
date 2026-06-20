/**
 * translations.ts — Multi-language support for KisanStatus.com
 * Languages: Hindi (hi), Bengali (bn), Tamil (ta), Telugu (te),
 *            Marathi (mr), Punjabi (pa), Gujarati (gu), English (en)
 */

export type LangCode = 'hi' | 'bn' | 'ta' | 'te' | 'mr' | 'pa' | 'gu' | 'en';

export interface LangMeta {
  code: LangCode;
  label: string;       // native name
  labelEn: string;     // English name
  flag: string;        // emoji flag / symbol
  dir: 'ltr' | 'rtl';
}

export const LANGUAGES: LangMeta[] = [
  { code: 'hi', label: 'Hinglish', labelEn: 'Hinglish', flag: '🇮🇳', dir: 'ltr' },
  { code: 'en', label: 'English',  labelEn: 'English',  flag: '🔤',  dir: 'ltr' },
  { code: 'bn', label: 'বাংলা',    labelEn: 'Bengali',  flag: '🇧🇩', dir: 'ltr' },
  { code: 'ta', label: 'தமிழ்',    labelEn: 'Tamil',    flag: '🌺',  dir: 'ltr' },
  { code: 'te', label: 'తెలుగు',   labelEn: 'Telugu',   flag: '⭐',  dir: 'ltr' },
  { code: 'mr', label: 'Marathi',    labelEn: 'Marathi',  flag: '🟠',  dir: 'ltr' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ',  labelEn: 'Punjabi',  flag: '🌾',  dir: 'ltr' },
  { code: 'gu', label: 'ગુજરાતી', labelEn: 'Gujarati', flag: '🦁',  dir: 'ltr' },
];

export interface Translations {
  // Nav / Header
  nav_home: string;
  nav_status: string;
  nav_registration: string;
  nav_beneficiary: string;
  nav_articles: string;
  announcement_bar: string;

  // Hero
  hero_badge: string;
  hero_h1_line1: string;
  hero_h1_line2: string;
  hero_subtitle: string;
  hero_cta_primary: string;
  hero_cta_secondary: string;

  // Stats
  stat_farmers: string;
  stat_farmers_sub: string;
  stat_amount: string;
  stat_amount_sub: string;
  stat_kist: string;
  stat_kist_sub: string;

  // Steps section
  steps_heading: string;
  steps_sub: string;
  step1_title: string;
  step1_desc: string;
  step2_title: string;
  step2_desc: string;
  step3_title: string;
  step3_desc: string;

  // Feature cards
  features_heading: string;
  features_sub: string;
  feat_status_title: string;
  feat_status_desc: string;
  feat_status_cta: string;
  feat_beneficiary_title: string;
  feat_beneficiary_desc: string;
  feat_beneficiary_cta: string;
  feat_register_title: string;
  feat_register_desc: string;
  feat_register_cta: string;
  feat_ekyc_title: string;
  feat_ekyc_desc: string;
  feat_ekyc_cta: string;

  // Articles section
  articles_heading: string;
  articles_sub: string;

  // Helpline
  helpline_heading: string;
  helpline_sub: string;
  helpline_call: string;
  helpline_email: string;

  // Common
  read_more: string;
  check_status: string;
  download_list: string;
  register_now: string;
}

const t: Record<LangCode, Translations> = {
  hi: {
    nav_home: 'Home',
    nav_status: 'Status Check',
    nav_registration: 'Naya Registration',
    nav_beneficiary: 'Beneficiary List',
    nav_articles: 'Guide',
    announcement_bar: '🌾 PM Kisan 21vi Kist: Date officially announce nahi hui — eKYC zaroor kara lo | ₹2,000 per kist',

    hero_badge: 'PM Kisan Samman Nidhi 2026',
    hero_h1_line1: 'PM Kisan Status Check Karo',
    hero_h1_line2: '21vi Kist 2026',
    hero_subtitle: 'Apna PM Kisan payment status check karo, state beneficiary list dekho, aur 21vi kist ki latest jankari yahan milegi.',
    hero_cta_primary: '✅ Status Check Karo',
    hero_cta_secondary: '📋 Beneficiary List',

    stat_farmers: '11 Crore+',
    stat_farmers_sub: 'Registered kisaan poore India mein',
    stat_amount: '₹6,000',
    stat_amount_sub: 'Saalana labh — 3 kiston mein',
    stat_kist: '20 Kistein',
    stat_kist_sub: '21vi kist date abhi confirm nahi',

    steps_heading: '3 Aasaan Steps Mein Check Karo',
    steps_sub: 'Ghar baithe apna PM Kisan status 3 steps mein check karo',
    step1_title: 'Website Kholo',
    step1_desc: 'pmkisan.gov.in kholo → upar "Farmers Corner" menu pe click karo → "Beneficiary Status" chuniye',
    step2_title: 'Apni Jankari Daalo',
    step2_desc: 'Teen options hain — Aadhaar number, mobile number, ya bank account number. Jo bhi paas ho woh chuniye aur enter karo',
    step3_title: 'Status Dekho',
    step3_desc: 'Sabhi kiston ki list aa jayegi — kab aayi, kitni aayi, aur agar ruki hai to kyun — sab screen pe dikhega',

    features_heading: 'PM Kisan — Seedha Access',
    features_sub: 'PM Kisan ki har zaroorat ka jawab — ek jagah',
    feat_status_title: 'Status Check Karo',
    feat_status_desc: 'Apna PM Kisan status check karo pmkisan.gov.in par — Aadhaar, account ya mobile number se.',
    feat_status_cta: 'Status Dekho →',
    feat_beneficiary_title: 'Beneficiary List',
    feat_beneficiary_desc: 'Apne state ki gaon-wise beneficiary list yahan se dekho. 28 states ki list available hai.',
    feat_beneficiary_cta: 'List Dekho →',
    feat_register_title: 'Naya Registration',
    feat_register_desc: 'Naya registration kaise kare — poora process step by step samjhaya gaya hai.',
    feat_register_cta: 'Register Karo →',
    feat_ekyc_title: 'eKYC Karo',
    feat_ekyc_desc: 'eKYC nahi kiya to kist ruk jayegi. OTP se ghar pe karo ya nazdiki CSC centre mein jao.',
    feat_ekyc_cta: 'eKYC Karo →',

    articles_heading: 'PM Kisan Guide — Padhiye Pehle',
    articles_sub: 'PM Kisan ki aam pareshaniyaan aur unka hal — pehle yahan padho',

    helpline_heading: 'Koi Problem Hai? PM Kisan Helpline Pe Call Karo',
    helpline_sub: 'Registration, payment ya eKYC mein koi bhi problem — seedha helpline par call karo',
    helpline_call: '📞 155261 / 011-24300606',
    helpline_email: '✉️ pmkisan-ict@gov.in',

    read_more: 'Aur Padho →',
    check_status: 'Status Check Karo',
    download_list: 'List Download Karo',
    register_now: 'Abhi Register Karo',
  },

  en: {
    nav_home: 'Home',
    nav_status: 'Check Status',
    nav_registration: 'New Registration',
    nav_beneficiary: 'Beneficiary List',
    nav_articles: 'Guides',
    announcement_bar: '🌾 PM Kisan 21st Installment: Expected Nov–Dec 2026 — Complete eKYC now | ₹2,000 per installment',

    hero_badge: 'PM Kisan Samman Nidhi 2026',
    hero_h1_line1: 'PM Kisan Status Check 2026',
    hero_h1_line2: '21st Installment',
    hero_subtitle: 'Check your PM Kisan payment status, view state beneficiary list, and get latest 21st installment updates here.',
    hero_cta_primary: '✅ Check Status',
    hero_cta_secondary: '📋 Beneficiary List',

    stat_farmers: '11 Crore+',
    stat_farmers_sub: 'Registered farmers across India',
    stat_amount: '₹6,000',
    stat_amount_sub: 'Annual benefit (3 installments)',
    stat_kist: '20 Installments',
    stat_kist_sub: '21st expected Nov–Dec 2026',

    steps_heading: 'Check Status in 3 Easy Steps',
    steps_sub: '3 simple steps to check your PM Kisan payment status',
    step1_title: 'Open Website',
    step1_desc: 'Open pmkisan.gov.in in browser → Click "Farmers Corner" menu at top → Select "Beneficiary Status"',
    step2_title: 'Enter Your Details',
    step2_desc: 'Three options: Aadhaar number, mobile number, or bank account number. Choose whichever you have and enter it.',
    step3_title: 'See Your Status',
    step3_desc: 'All installment details appear — when received, how much, and if held up, why — everything visible on screen.',

    features_heading: 'PM Kisan — Direct Access',
    features_sub: 'Everything you need about PM Kisan — in one place',
    feat_status_title: 'Check Status',
    feat_status_desc: 'Check your PM Kisan status on pmkisan.gov.in using Aadhaar, account or mobile number.',
    feat_status_cta: 'Check Status →',
    feat_beneficiary_title: 'Beneficiary List',
    feat_beneficiary_desc: 'View village-wise beneficiary list for your state. Available for 28 states.',
    feat_beneficiary_cta: 'View List →',
    feat_register_title: 'New Registration',
    feat_register_desc: 'How to register — full process explained step by step with documents needed.',
    feat_register_cta: 'Register →',
    feat_ekyc_title: 'Do eKYC',
    feat_ekyc_desc: 'Without eKYC, your installment will be held. Do it via OTP at home or visit nearest CSC centre.',
    feat_ekyc_cta: 'Do eKYC →',

    articles_heading: 'PM Kisan Guides',
    articles_sub: 'Common PM Kisan problems — solved step by step',

    helpline_heading: 'Need Help? Call PM Kisan Helpline',
    helpline_sub: 'For registration, payment, eKYC issues — call directly',
    helpline_call: '📞 155261 / 011-24300606',
    helpline_email: '✉️ pmkisan-ict@gov.in',

    read_more: 'Read More →',
    check_status: 'Check Status',
    download_list: 'Download List',
    register_now: 'Register Now',
  },

  bn: {
    nav_home: 'হোম',
    nav_status: 'স্ট্যাটাস চেক',
    nav_registration: 'নতুন নিবন্ধন',
    nav_beneficiary: 'সুবিধাভোগী তালিকা',
    nav_articles: 'গাইড',
    announcement_bar: '🌾 PM কিষান ২১তম কিস্তি: নভেম্বর–ডিসেম্বর ২০২৬ — eKYC এখনই করুন | প্রতি কিস্তিতে ₹২,০০০',

    hero_badge: 'PM কিষান সম্মান নিধি ২০২৬',
    hero_h1_line1: 'PM কিষান স্ট্যাটাস চেক ২০২৬',
    hero_h1_line2: '২১তম কিস্তি',
    hero_subtitle: 'আপনার PM কিষান পেমেন্ট স্ট্যাটাস চেক করুন, রাজ্য সুবিধাভোগী তালিকা দেখুন.',
    hero_cta_primary: '✅ স্ট্যাটাস চেক করুন',
    hero_cta_secondary: '📋 সুবিধাভোগী তালিকা',

    stat_farmers: '১১ কোটি+',
    stat_farmers_sub: 'সারা ভারতে নিবন্ধিত কৃষক',
    stat_amount: '₹৬,০০০',
    stat_amount_sub: 'বার্ষিক সুবিধা (৩ কিস্তিতে)',
    stat_kist: '২০টি কিস্তি',
    stat_kist_sub: '২১তম কিস্তি নভ–ডিস ২০২৬',

    steps_heading: '৩টি সহজ ধাপে চেক করুন',
    steps_sub: '৩টি সহজ ধাপে আপনার PM কিষান স্ট্যাটাস চেক করুন',
    step1_title: 'ওয়েবসাইট খুলুন',
    step1_desc: 'ব্রাউজারে pmkisan.gov.in খুলুন → "Farmers Corner" মেনুতে ক্লিক করুন → "Beneficiary Status" বেছে নিন',
    step2_title: 'তথ্য দিন',
    step2_desc: 'তিনটি বিকল্প: আধার নম্বর, মোবাইল নম্বর বা ব্যাংক অ্যাকাউন্ট নম্বর. যেকোনো একটি বেছে দিন.',
    step3_title: 'স্ট্যাটাস দেখুন',
    step3_desc: 'সমস্ত কিস্তির তথ্য দেখা যাবে — কখন এসেছে, কতটা, এবং আটকালে কেন — সব স্ক্রিনে দেখা যাবে.',

    features_heading: 'PM কিষান — সরাসরি প্রবেশ',
    features_sub: 'PM কিষানের সব প্রয়োজন — এক জায়গায়',
    feat_status_title: 'স্ট্যাটাস চেক',
    feat_status_desc: 'Aadhaar, অ্যাকাউন্ট বা মোবাইল নম্বর দিয়ে PM কিষান স্ট্যাটাস চেক করুন.',
    feat_status_cta: 'স্ট্যাটাস দেখুন →',
    feat_beneficiary_title: 'সুবিধাভোগী তালিকা',
    feat_beneficiary_desc: 'আপনার রাজ্যের গ্রামভিত্তিক সুবিধাভোগী তালিকা দেখুন.',
    feat_beneficiary_cta: 'তালিকা দেখুন →',
    feat_register_title: 'নতুন নিবন্ধন',
    feat_register_desc: 'কীভাবে নিবন্ধন করবেন — সম্পূর্ণ প্রক্রিয়া ধাপে ধাপে বোঝানো হয়েছে.',
    feat_register_cta: 'নিবন্ধন করুন →',
    feat_ekyc_title: 'eKYC করুন',
    feat_ekyc_desc: 'eKYC না করলে কিস্তি আটকে যাবে. OTP দিয়ে ঘরে বসে করুন বা নিকটস্থ CSC যান.',
    feat_ekyc_cta: 'eKYC করুন →',

    articles_heading: 'PM কিষান গাইড',
    articles_sub: 'সাধারণ PM কিষান সমস্যা — ধাপে ধাপে সমাধান',

    helpline_heading: 'সাহায্য দরকার? PM কিষান হেল্পলাইনে ফোন করুন',
    helpline_sub: 'নিবন্ধন, পেমেন্ট বা eKYC সমস্যায় — সরাসরি ফোন করুন',
    helpline_call: '📞 ১৫৫২৬১ / ০১১-২৪৩০০৬০৬',
    helpline_email: '✉️ pmkisan-ict@gov.in',

    read_more: 'আরো পড়ুন →',
    check_status: 'স্ট্যাটাস চেক করুন',
    download_list: 'তালিকা ডাউনলোড করুন',
    register_now: 'এখনই নিবন্ধন করুন',
  },

  ta: {
    nav_home: 'முகப்பு',
    nav_status: 'நிலை சரிபார்',
    nav_registration: 'புதிய பதிவு',
    nav_beneficiary: 'பயனாளர் பட்டியல்',
    nav_articles: 'வழிகாட்டி',
    announcement_bar: '🌾 PM கிசான் 21வது தவணை: நவ–டிச 2026 — eKYC இப்போதே செய்யுங்கள் | ₹2,000 தவணைக்கு',

    hero_badge: 'PM கிசான் சம்மான் நிதி 2026',
    hero_h1_line1: 'PM கிசான் நிலை சரிபார்ப்பு 2026',
    hero_h1_line2: '21வது தவணை',
    hero_subtitle: 'உங்கள் PM கிசான் கட்டண நிலையை சரிபார்க்கவும், மாநில பயனாளர் பட்டியலை பார்க்கவும்.',
    hero_cta_primary: '✅ நிலை சரிபார்',
    hero_cta_secondary: '📋 பயனாளர் பட்டியல்',

    stat_farmers: '11 கோடி+',
    stat_farmers_sub: 'இந்தியா முழுவதும் பதிவான விவசாயிகள்',
    stat_amount: '₹6,000',
    stat_amount_sub: 'ஆண்டு நலன் (3 தவணைகளில்)',
    stat_kist: '20 தவணைகள்',
    stat_kist_sub: '21வது தவணை நவ–டிச 2026',

    steps_heading: '3 எளிய படிகளில் சரிபார்க்கவும்',
    steps_sub: '3 எளிய படிகளில் PM கிசான் நிலையை சரிபார்க்கவும்',
    step1_title: 'வலைதளம் திறக்கவும்',
    step1_desc: 'pmkisan.gov.in திறக்கவும் → "Farmers Corner" மெனு கிளிக் → "Beneficiary Status" தேர்வு',
    step2_title: 'தகவல் உள்ளிடவும்',
    step2_desc: 'மூன்று விருப்பங்கள்: ஆதார் எண், மொபைல் எண் அல்லது வங்கி கணக்கு எண். ஒன்றை தேர்வு செய்யுங்கள்.',
    step3_title: 'நிலை பாருங்கள்',
    step3_desc: 'அனைத்து தவணை விவரங்கள் தெரியும் — எப்போது வந்தது, எவ்வளவு, நின்றால் ஏன் என்று.',

    features_heading: 'PM கிசான் — நேரடி அணுகல்',
    features_sub: 'PM கிசான் தேவைகள் அனைத்தும் — ஒரே இடத்தில்',
    feat_status_title: 'நிலை சரிபார்',
    feat_status_desc: 'ஆதார், கணக்கு அல்லது மொபைல் மூலம் PM கிசான் நிலை சரிபார்க்கவும்.',
    feat_status_cta: 'நிலை பாருங்கள் →',
    feat_beneficiary_title: 'பயனாளர் பட்டியல்',
    feat_beneficiary_desc: 'உங்கள் மாநிலத்தின் கிராம அடிப்படையிலான பட்டியல் பாருங்கள்.',
    feat_beneficiary_cta: 'பட்டியல் பாருங்கள் →',
    feat_register_title: 'புதிய பதிவு',
    feat_register_desc: 'பதிவு எப்படி செய்வது — படிப்படியாக விளக்கப்பட்டுள்ளது.',
    feat_register_cta: 'பதிவு செய்யுங்கள் →',
    feat_ekyc_title: 'eKYC செய்யுங்கள்',
    feat_ekyc_desc: 'eKYC இல்லாவிட்டால் தவணை நிறுத்தப்படும். OTP மூலம் வீட்டிலேயே செய்யலாம்.',
    feat_ekyc_cta: 'eKYC செய்யுங்கள் →',

    articles_heading: 'PM கிசான் வழிகாட்டி',
    articles_sub: 'பொதுவான சிக்கல்கள் — படிப்படியாக தீர்வு',

    helpline_heading: 'உதவி வேண்டுமா? PM கிசான் உதவி எண்ணை அழைக்கவும்',
    helpline_sub: 'பதிவு, பணம் அல்லது eKYC சிக்கலுக்கு — நேரடியாக அழைக்கவும்',
    helpline_call: '📞 155261 / 011-24300606',
    helpline_email: '✉️ pmkisan-ict@gov.in',

    read_more: 'மேலும் படிக்கவும் →',
    check_status: 'நிலை சரிபார்',
    download_list: 'பட்டியல் பதிவிறக்கவும்',
    register_now: 'இப்போதே பதிவு செய்யுங்கள்',
  },

  te: {
    nav_home: 'హోమ్',
    nav_status: 'స్టేటస్ చెక్',
    nav_registration: 'కొత్త నమోదు',
    nav_beneficiary: 'లబ్ధిదారుల జాబితా',
    nav_articles: 'గైడ్',
    announcement_bar: '🌾 PM కిసాన్ 21వ వాయిదా: నవ–డిసె 2026 — eKYC ఇప్పుడే చేయండి | ₹2,000 వాయిదాకు',

    hero_badge: 'PM కిసాన్ సమ్మాన్ నిధి 2026',
    hero_h1_line1: 'PM కిసాన్ స్టేటస్ చెక్ 2026',
    hero_h1_line2: '21వ వాయిదా',
    hero_subtitle: 'మీ PM కిసాన్ చెల్లింపు స్థితిని తనిఖీ చేయండి, రాష్ట్ర లబ్ధిదారుల జాబితా చూడండి.',
    hero_cta_primary: '✅ స్టేటస్ చెక్ చేయండి',
    hero_cta_secondary: '📋 లబ్ధిదారుల జాబితా',

    stat_farmers: '11 కోట్లు+',
    stat_farmers_sub: 'భారతదేశంలో నమోదైన రైతులు',
    stat_amount: '₹6,000',
    stat_amount_sub: 'వార్షిక ప్రయోజనం (3 వాయిదాలు)',
    stat_kist: '20 వాయిదాలు',
    stat_kist_sub: '21వ వాయిదా నవ–డిసె 2026',

    steps_heading: '3 సులభ దశలలో చెక్ చేయండి',
    steps_sub: '3 సులభ దశలలో మీ PM కిసాన్ స్టేటస్ చెక్ చేయండి',
    step1_title: 'వెబ్‌సైట్ తెరవండి',
    step1_desc: 'pmkisan.gov.in తెరవండి → "Farmers Corner" మెనూ క్లిక్ → "Beneficiary Status" ఎంచుకోండి',
    step2_title: 'వివరాలు నమోదు చేయండి',
    step2_desc: 'మూడు ఎంపికలు: ఆధార్ నంబర్, మొబైల్ నంబర్ లేదా బ్యాంక్ ఖాతా నంబర్.',
    step3_title: 'స్టేటస్ చూడండి',
    step3_desc: 'అన్ని వాయిదా వివరాలు కనిపిస్తాయి — ఎప్పుడు వచ్చింది, ఎంత, ఆగిందేం అంటే ఎందుకు.',

    features_heading: 'PM కిసాన్ — నేరుగా యాక్సెస్',
    features_sub: 'PM కిసాన్ అవసరాలన్నీ — ఒకే చోట',
    feat_status_title: 'స్టేటస్ చెక్',
    feat_status_desc: 'ఆధార్, ఖాతా లేదా మొబైల్ ద్వారా PM కిసాన్ స్టేటస్ చెక్ చేయండి.',
    feat_status_cta: 'స్టేటస్ చూడండి →',
    feat_beneficiary_title: 'లబ్ధిదారుల జాబితా',
    feat_beneficiary_desc: 'మీ రాష్ట్రం గ్రామ వారీ లబ్ధిదారుల జాబితా చూడండి.',
    feat_beneficiary_cta: 'జాబితా చూడండి →',
    feat_register_title: 'కొత్త నమోదు',
    feat_register_desc: 'నమోదు ఎలా చేయాలో — పూర్తి ప్రక్రియ దశల వారీగా వివరించబడింది.',
    feat_register_cta: 'నమోదు చేయండి →',
    feat_ekyc_title: 'eKYC చేయండి',
    feat_ekyc_desc: 'eKYC లేకపోతే వాయిదా ఆగిపోతుంది. OTP ద్వారా ఇంట్లోనే చేయవచ్చు.',
    feat_ekyc_cta: 'eKYC చేయండి →',

    articles_heading: 'PM కిసాన్ గైడ్',
    articles_sub: 'సాధారణ సమస్యలు — దశల వారీగా పరిష్కారం',

    helpline_heading: 'సహాయం కావాలా? PM కిసాన్ హెల్ప్‌లైన్ కి కాల్ చేయండి',
    helpline_sub: 'నమోదు, చెల్లింపు లేదా eKYC సమస్యకు — నేరుగా కాల్ చేయండి',
    helpline_call: '📞 155261 / 011-24300606',
    helpline_email: '✉️ pmkisan-ict@gov.in',

    read_more: 'మరింత చదవండి →',
    check_status: 'స్టేటస్ చెక్ చేయండి',
    download_list: 'జాబితా డౌన్‌లోడ్ చేయండి',
    register_now: 'ఇప్పుడే నమోదు చేయండి',
  },

  mr: {
    nav_home: 'मुखपृष्ठ',
    nav_status: 'स्थिती तपासा',
    nav_registration: 'नवीन नोंदणी',
    nav_beneficiary: 'लाभार्थी यादी',
    nav_articles: 'मार्गदर्शिका',
    announcement_bar: '🌾 PM किसान 21वा हप्ता: नोव्हे–डिसे 2026 — eKYC आत्ताच करा | प्रति हप्ता ₹2,000',

    hero_badge: 'PM किसान सन्मान निधी 2026',
    hero_h1_line1: 'PM किसान स्थिती तपासा 2026',
    hero_h1_line2: '21वा हप्ता',
    hero_subtitle: 'तुमची PM किसान पेमेंट स्थिती तपासा, राज्य लाभार्थी यादी पहा.',
    hero_cta_primary: '✅ स्थिती तपासा',
    hero_cta_secondary: '📋 लाभार्थी यादी',

    stat_farmers: '11 कोटी+',
    stat_farmers_sub: 'संपूर्ण भारतातील नोंदणीकृत शेतकरी',
    stat_amount: '₹6,000',
    stat_amount_sub: 'वार्षिक लाभ (3 हप्त्यांमध्ये)',
    stat_kist: '20 हप्ते',
    stat_kist_sub: '21वा हप्ता नोव्हे–डिसे 2026',

    steps_heading: '3 सोप्या पायऱ्यांमध्ये तपासा',
    steps_sub: '3 सोप्या पायऱ्यांमध्ये PM किसान स्थिती तपासा',
    step1_title: 'वेबसाइट उघडा',
    step1_desc: 'pmkisan.gov.in उघडा → "Farmers Corner" मेनूवर क्लिक करा → "Beneficiary Status" निवडा',
    step2_title: 'माहिती द्या',
    step2_desc: 'तीन पर्याय: आधार क्रमांक, मोबाइल क्रमांक किंवा बँक खाते क्रमांक. एक निवडा.',
    step3_title: 'स्थिती पहा',
    step3_desc: 'सर्व हप्त्यांची माहिती दिसेल — कधी आला, किती, अडले असल्यास का — सर्व स्क्रीनवर दिसेल.',

    features_heading: 'PM किसान — थेट प्रवेश',
    features_sub: 'PM किसानच्या सर्व गरजा — एकाच ठिकाणी',
    feat_status_title: 'स्थिती तपासा',
    feat_status_desc: 'आधार, खाते किंवा मोबाइलद्वारे PM किसान स्थिती तपासा.',
    feat_status_cta: 'स्थिती पहा →',
    feat_beneficiary_title: 'लाभार्थी यादी',
    feat_beneficiary_desc: 'तुमच्या राज्याची गाव-निहाय लाभार्थी यादी पहा.',
    feat_beneficiary_cta: 'यादी पहा →',
    feat_register_title: 'नवीन नोंदणी',
    feat_register_desc: 'नोंदणी कशी करावी — संपूर्ण प्रक्रिया पायरीपायरीने समजावली आहे.',
    feat_register_cta: 'नोंदणी करा →',
    feat_ekyc_title: 'eKYC करा',
    feat_ekyc_desc: 'eKYC न केल्यास हप्ता अडेल. OTP द्वारे घरूनच करा किंवा जवळच्या CSC ला जा.',
    feat_ekyc_cta: 'eKYC करा →',

    articles_heading: 'PM किसान मार्गदर्शिका',
    articles_sub: 'सामान्य PM किसान समस्या — पायरीपायरी उपाय',

    helpline_heading: 'मदत हवी? PM किसान हेल्पलाइनला कॉल करा',
    helpline_sub: 'नोंदणी, पेमेंट किंवा eKYC समस्यासाठी — थेट कॉल करा',
    helpline_call: '📞 155261 / 011-24300606',
    helpline_email: '✉️ pmkisan-ict@gov.in',

    read_more: 'अधिक वाचा →',
    check_status: 'स्थिती तपासा',
    download_list: 'यादी डाउनलोड करा',
    register_now: 'आत्ता नोंदणी करा',
  },

  pa: {
    nav_home: 'ਘਰ',
    nav_status: 'ਸਥਿਤੀ ਜਾਂਚੋ',
    nav_registration: 'ਨਵੀਂ ਰਜਿਸਟ੍ਰੇਸ਼ਨ',
    nav_beneficiary: 'ਲਾਭਪਾਤਰੀ ਸੂਚੀ',
    nav_articles: 'ਗਾਈਡ',
    announcement_bar: '🌾 PM ਕਿਸਾਨ 21ਵੀਂ ਕਿਸ਼ਤ: ਨਵੰ–ਦਸੰ 2026 — eKYC ਹੁਣੇ ਕਰੋ | ₹2,000 ਪ੍ਰਤੀ ਕਿਸ਼ਤ',

    hero_badge: 'PM ਕਿਸਾਨ ਸਨਮਾਨ ਨਿਧੀ 2026',
    hero_h1_line1: 'PM ਕਿਸਾਨ ਸਥਿਤੀ ਜਾਂਚ 2026',
    hero_h1_line2: '21ਵੀਂ ਕਿਸ਼ਤ',
    hero_subtitle: 'ਆਪਣੀ PM ਕਿਸਾਨ ਭੁਗਤਾਨ ਸਥਿਤੀ ਜਾਂਚੋ, ਰਾਜ ਲਾਭਪਾਤਰੀ ਸੂਚੀ ਵੇਖੋ.',
    hero_cta_primary: '✅ ਸਥਿਤੀ ਜਾਂਚੋ',
    hero_cta_secondary: '📋 ਲਾਭਪਾਤਰੀ ਸੂਚੀ',

    stat_farmers: '11 ਕਰੋੜ+',
    stat_farmers_sub: 'ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ਰਜਿਸਟਰਡ ਕਿਸਾਨ',
    stat_amount: '₹6,000',
    stat_amount_sub: 'ਸਾਲਾਨਾ ਲਾਭ (3 ਕਿਸ਼ਤਾਂ ਵਿੱਚ)',
    stat_kist: '20 ਕਿਸ਼ਤਾਂ',
    stat_kist_sub: '21ਵੀਂ ਕਿਸ਼ਤ ਨਵੰ–ਦਸੰ 2026',

    steps_heading: '3 ਆਸਾਨ ਕਦਮਾਂ ਵਿੱਚ ਜਾਂਚੋ',
    steps_sub: '3 ਆਸਾਨ ਕਦਮਾਂ ਵਿੱਚ PM ਕਿਸਾਨ ਸਥਿਤੀ ਜਾਂਚੋ',
    step1_title: 'ਵੈੱਬਸਾਈਟ ਖੋਲੋ',
    step1_desc: 'pmkisan.gov.in ਖੋਲੋ → "Farmers Corner" ਮੇਨੂ ਕਲਿੱਕ → "Beneficiary Status" ਚੁਣੋ',
    step2_title: 'ਜਾਣਕਾਰੀ ਦਿਓ',
    step2_desc: 'ਤਿੰਨ ਵਿਕਲਪ: ਆਧਾਰ ਨੰਬਰ, ਮੋਬਾਈਲ ਨੰਬਰ ਜਾਂ ਬੈਂਕ ਖਾਤਾ ਨੰਬਰ. ਇੱਕ ਚੁਣੋ.',
    step3_title: 'ਸਥਿਤੀ ਵੇਖੋ',
    step3_desc: 'ਸਾਰੀਆਂ ਕਿਸ਼ਤਾਂ ਦੀ ਜਾਣਕਾਰੀ ਦਿਖੇਗੀ — ਕਦੋਂ ਆਈ, ਕਿੰਨੀ, ਰੁਕੀ ਹੈ ਤਾਂ ਕਿਉਂ.',

    features_heading: 'PM ਕਿਸਾਨ — ਸਿੱਧੀ ਪਹੁੰਚ',
    features_sub: 'PM ਕਿਸਾਨ ਦੀਆਂ ਸਾਰੀਆਂ ਲੋੜਾਂ — ਇੱਕ ਜਗ੍ਹਾ',
    feat_status_title: 'ਸਥਿਤੀ ਜਾਂਚੋ',
    feat_status_desc: 'ਆਧਾਰ, ਖਾਤਾ ਜਾਂ ਮੋਬਾਈਲ ਰਾਹੀਂ PM ਕਿਸਾਨ ਸਥਿਤੀ ਜਾਂਚੋ.',
    feat_status_cta: 'ਸਥਿਤੀ ਵੇਖੋ →',
    feat_beneficiary_title: 'ਲਾਭਪਾਤਰੀ ਸੂਚੀ',
    feat_beneficiary_desc: 'ਆਪਣੇ ਰਾਜ ਦੀ ਪਿੰਡ-ਅਨੁਸਾਰ ਸੂਚੀ ਵੇਖੋ.',
    feat_beneficiary_cta: 'ਸੂਚੀ ਵੇਖੋ →',
    feat_register_title: 'ਨਵੀਂ ਰਜਿਸਟ੍ਰੇਸ਼ਨ',
    feat_register_desc: 'ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਕਿਵੇਂ ਕਰਨੀ — ਪੂਰੀ ਪ੍ਰਕਿਰਿਆ ਕਦਮ ਦਰ ਕਦਮ ਦੱਸੀ ਗਈ ਹੈ.',
    feat_register_cta: 'ਰਜਿਸਟਰ ਕਰੋ →',
    feat_ekyc_title: 'eKYC ਕਰੋ',
    feat_ekyc_desc: 'eKYC ਨਾ ਕੀਤੀ ਤਾਂ ਕਿਸ਼ਤ ਰੁਕੇਗੀ. OTP ਰਾਹੀਂ ਘਰ ਬੈਠੇ ਕਰੋ.',
    feat_ekyc_cta: 'eKYC ਕਰੋ →',

    articles_heading: 'PM ਕਿਸਾਨ ਗਾਈਡ',
    articles_sub: 'ਆਮ ਸਮੱਸਿਆਵਾਂ — ਕਦਮ ਦਰ ਕਦਮ ਹੱਲ',

    helpline_heading: 'ਮਦਦ ਚਾਹੀਦੀ? PM ਕਿਸਾਨ ਹੈਲਪਲਾਈਨ ਤੇ ਕਾਲ ਕਰੋ',
    helpline_sub: 'ਰਜਿਸਟ੍ਰੇਸ਼ਨ, ਭੁਗਤਾਨ ਜਾਂ eKYC ਸਮੱਸਿਆ — ਸਿੱਧਾ ਕਾਲ ਕਰੋ',
    helpline_call: '📞 155261 / 011-24300606',
    helpline_email: '✉️ pmkisan-ict@gov.in',

    read_more: 'ਹੋਰ ਪੜ੍ਹੋ →',
    check_status: 'ਸਥਿਤੀ ਜਾਂਚੋ',
    download_list: 'ਸੂਚੀ ਡਾਊਨਲੋਡ ਕਰੋ',
    register_now: 'ਹੁਣੇ ਰਜਿਸਟਰ ਕਰੋ',
  },

  gu: {
    nav_home: 'હોમ',
    nav_status: 'સ્ટેટસ ચેક',
    nav_registration: 'નવી નોંધણી',
    nav_beneficiary: 'લાભાર્થી યાદી',
    nav_articles: 'ગાઈડ',
    announcement_bar: '🌾 PM કિસાન 21મો હપ્તો: નવે–ડિસે 2026 — eKYC અત્યારે જ કરો | ₹2,000 પ્રતિ હપ્તો',

    hero_badge: 'PM કિસાન સન્માન નિધિ 2026',
    hero_h1_line1: 'PM કિસાન સ્ટેટસ ચેક 2026',
    hero_h1_line2: '21મો હપ્તો',
    hero_subtitle: 'તમારી PM કિસાન ચુકવણી સ્થિતિ ચેક કરો, રાજ્ય લાભાર્થી યાદી જુઓ.',
    hero_cta_primary: '✅ સ્ટેટસ ચેક કરો',
    hero_cta_secondary: '📋 લાભાર્થી યાદી',

    stat_farmers: '11 કરોડ+',
    stat_farmers_sub: 'સમગ્ર ભારતમાં નોંધાયેલ ખેડૂતો',
    stat_amount: '₹6,000',
    stat_amount_sub: 'વાર્ષિક લાભ (3 હપ્તામાં)',
    stat_kist: '20 હપ્તા',
    stat_kist_sub: '21મો હપ્તો નવે–ડિસે 2026',

    steps_heading: '3 સરળ પગલાંમાં ચેક કરો',
    steps_sub: '3 સરળ પગલાંમાં PM કિસાન સ્ટેટસ ચેક કરો',
    step1_title: 'વેબસાઇટ ખોલો',
    step1_desc: 'pmkisan.gov.in ખોલો → "Farmers Corner" મેનૂ ક્લિક → "Beneficiary Status" પસંદ કરો',
    step2_title: 'માહિતી આપો',
    step2_desc: 'ત્રણ વિકલ્પ: આધાર નંબર, મોબાઈલ નંબર અથવા બેન્ક ખાતા નંબર. એક પસંદ કરો.',
    step3_title: 'સ્ટેટસ જુઓ',
    step3_desc: 'બધા હપ્તાની માહિતી દેખાશે — ક્યારે આવ્યો, કેટલો, અટક્યો હોય તો કેમ.',

    features_heading: 'PM કિસાન — સીધો ઍક્સેસ',
    features_sub: 'PM કિસાનની બધી જરૂરિયાતો — એક જ જગ્યાએ',
    feat_status_title: 'સ્ટેટસ ચેક',
    feat_status_desc: 'આધાર, ખાતા અથવા મોબાઈલ દ્વારા PM કિસાન સ્ટેટસ ચેક કરો.',
    feat_status_cta: 'સ્ટેટસ જુઓ →',
    feat_beneficiary_title: 'લાભાર્થી યાદી',
    feat_beneficiary_desc: 'તમારા રાજ્યની ગામ-વાર લાભાર્થી યાદી જુઓ.',
    feat_beneficiary_cta: 'યાદી જુઓ →',
    feat_register_title: 'નવી નોંધણી',
    feat_register_desc: 'નોંધણી કેવી રીતે કરવી — સંપૂર્ણ પ્રક્રિયા પગલે પગલે સમજાવી છે.',
    feat_register_cta: 'નોંધણી કરો →',
    feat_ekyc_title: 'eKYC કરો',
    feat_ekyc_desc: 'eKYC ન કર્યા વિના હપ્તો અટકશે. OTP દ્વારા ઘરેથી જ કરી શકો છો.',
    feat_ekyc_cta: 'eKYC કરો →',

    articles_heading: 'PM કિસાન ગાઈડ',
    articles_sub: 'સામાન્ય સમસ્યાઓ — પગલે પગલે ઉકેલ',

    helpline_heading: 'મદદ જોઈએ? PM કિસાન હેલ્પલાઈન પર ફોન કરો',
    helpline_sub: 'નોંધણી, ચૂકવણી અથવા eKYC સમસ્યા — સીધો ફોન કરો',
    helpline_call: '📞 155261 / 011-24300606',
    helpline_email: '✉️ pmkisan-ict@gov.in',

    read_more: 'વધુ વાંચો →',
    check_status: 'સ્ટેટસ ચેક કરો',
    download_list: 'યાદી ડાઉનલોડ કરો',
    register_now: 'અત્યારે નોંધણી કરો',
  },
};

export default t;
