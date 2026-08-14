import { AUTHOR_NAME } from '@/lib/site-config';
export type LangCode = 'hi' | 'en' | 'bn' | 'ta' | 'te' | 'mr' | 'pa' | 'gu';

export interface LangMeta {
  code: LangCode;
  label: string;
  labelEn: string;
  flag: string;
  dir: 'ltr' | 'rtl';
  enabled: boolean;
}

export interface Translations {
  nav_home: string;
  nav_status: string;
  nav_registration: string;
  nav_beneficiary: string;
  nav_articles: string;
  nav_calculator: string;
  nav_about: string;
  nav_contact: string;
  announcement_bar: string;

  hero_badge: string;
  hero_h1_line1: string;
  hero_h1_line2: string;
  hero_subtitle: string;
  hero_cta_primary: string;
  hero_cta_secondary: string;
  hero_cta_calculator: string;

  stat_farmers: string;
  stat_farmers_sub: string;
  stat_amount: string;
  stat_amount_sub: string;
  stat_kist: string;
  stat_kist_sub: string;
  stat_free: string;
  stat_free_sub: string;

  steps_heading: string;
  steps_sub: string;
  step1_title: string;
  step1_desc: string;
  step2_title: string;
  step2_desc: string;
  step3_title: string;
  step3_desc: string;

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

  articles_heading: string;
  articles_sub: string;
  articles_view_all: string;

  helpline_heading: string;
  helpline_sub: string;
  helpline_call: string;
  helpline_email: string;
  helpline_hours: string;

  read_more: string;
  check_status: string;
  download_list: string;
  register_now: string;
  learn_more: string;
  back_to_home: string;
  loading: string;
  error: string;
  success: string;

  footer_disclaimer: string;
  footer_quick_links: string;
  footer_official_links: string;
  footer_contact: string;
  footer_copyright: string;

  seo_title: string;
  seo_description: string;
}

export const LANGUAGES: LangMeta[] = [
  { code: 'hi', label: 'हिंदी',      labelEn: 'Hindi',    flag: '', dir: 'ltr', enabled: true },
  { code: 'en', label: 'English',    labelEn: 'English',  flag: '', dir: 'ltr', enabled: true },
  { code: 'bn', label: 'বাংলা',      labelEn: 'Bengali',  flag: '', dir: 'ltr', enabled: true },
  { code: 'ta', label: 'தமிழ்',     labelEn: 'Tamil',    flag: '', dir: 'ltr', enabled: true },
  { code: 'te', label: 'తెలుగు',    labelEn: 'Telugu',   flag: '', dir: 'ltr', enabled: true },
  { code: 'mr', label: 'मराठी',     labelEn: 'Marathi',  flag: '', dir: 'ltr', enabled: true },
  { code: 'pa', label: 'ਪੰਜਾਬੀ',   labelEn: 'Punjabi',  flag: '', dir: 'ltr', enabled: true },
  { code: 'gu', label: 'ગુજરાતી',   labelEn: 'Gujarati', flag: '', dir: 'ltr', enabled: true },
];

const t: Record<'hi' | 'en', Translations> = {
  hi: {
    nav_home: 'Home',
    nav_status: 'Status Check',
    nav_registration: 'Naya Registration',
    nav_beneficiary: 'Beneficiary List',
    nav_articles: 'Articles',
    nav_calculator: 'Calculator',
    nav_about: 'About',
    nav_contact: 'Contact',
    announcement_bar: 'PM Kisan 23vi Kist: 20 June 2026 ko release ho chuki hai — ₹2,000 seedha bank mein | 24vi kist October 2026 expected',

    hero_badge: 'PM Kisan Samman Nidhi 2026',
    hero_h1_line1: 'PM Kisan Status Check Karo',
    hero_h1_line2: '23vi Kist 2026',
    hero_subtitle: 'Apna PM Kisan payment status check karo, state beneficiary list dekho, aur 23vi kist ki latest jankari yahan milegi. 24vi kist October 2026 mein aayegi.',
    hero_cta_primary: 'Status Check Karo',
    hero_cta_secondary: 'Beneficiary List',
    hero_cta_calculator: 'Kisan Calculator',

    stat_farmers: '11 Crore+',
    stat_farmers_sub: 'Registered kisaan poore India mein',
    stat_amount: '₹6,000',
    stat_amount_sub: 'Saalana labh — 3 kiston mein',
    stat_kist: '23vi Kist',
    stat_kist_sub: '20 June 2026 ko release',
    stat_free: '100% Free',
    stat_free_sub: 'Koi hidden charge nahi',

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
    articles_view_all: 'Saare Articles Dekho →',

    helpline_heading: 'Koi Problem Hai? PM Kisan Helpline Pe Call Karo',
    helpline_sub: 'Registration, payment ya eKYC mein koi bhi problem — seedha helpline par call karo',
    helpline_call: '155261 (Toll-Free)',
    helpline_email: 'pmkisan-ict@gov.in',
    helpline_hours: 'Mon-Sat: 9:30 AM - 6:00 PM',

    read_more: 'Aur Padho →',
    check_status: 'Status Check Karo',
    download_list: 'List Download Karo',
    register_now: 'Abhi Register Karo',
    learn_more: 'Aur Jaano →',
    back_to_home: '← Homepage Par Wapas Jao',
    loading: 'Loading...',
    error: 'Error aa gayi',
    success: 'Success!',

    footer_disclaimer: 'Yaad rakhein — KisanStatus.com sarkari website nahi hai. Yeh ek kisan ki banayi jaankari wali site hai; asli kaam hamesha official portal par karein.',
    footer_quick_links: 'Quick Links',
    footer_official_links: 'Official Government Links',
    footer_contact: 'Contact Us',
    footer_copyright: `© 2026 KisanStatus.com by ${AUTHOR_NAME} — Informational purposes only`,

    seo_title: 'PM Kisan Status Check 2026 — 23vi Kist Released | KisanStatus.com',
    seo_description: 'PM Kisan 23vi kist status check 2026 — ₹2000 seedha bank mein. eKYC guide, beneficiary list, payment fail solution — sab free.',
  },
  en: {
    nav_home: 'Home',
    nav_status: 'Check Status',
    nav_registration: 'New Registration',
    nav_beneficiary: 'Beneficiary List',
    nav_articles: 'Articles',
    nav_calculator: 'Calculator',
    nav_about: 'About',
    nav_contact: 'Contact',
    announcement_bar: 'PM Kisan 23rd Installment: Released on 20 June 2026 — ₹2,000 directly in bank | 24th installment expected October 2026',

    hero_badge: 'PM Kisan Samman Nidhi 2026',
    hero_h1_line1: 'PM Kisan Status Check 2026',
    hero_h1_line2: '23rd Installment',
    hero_subtitle: 'Check your PM Kisan payment status, view state beneficiary list, and get latest 23rd installment updates here. 24th installment expected in October 2026.',
    hero_cta_primary: 'Check Status',
    hero_cta_secondary: 'Beneficiary List',
    hero_cta_calculator: 'Kisan Calculator',

    stat_farmers: '11 Crore+',
    stat_farmers_sub: 'Registered farmers across India',
    stat_amount: '₹6,000',
    stat_amount_sub: 'Annual benefit (3 installments)',
    stat_kist: '23rd Installment',
    stat_kist_sub: 'Released on 20 June 2026',
    stat_free: '100% Free',
    stat_free_sub: 'No hidden charges',

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
    articles_view_all: 'View All Articles →',

    helpline_heading: 'Need Help? Call PM Kisan Helpline',
    helpline_sub: 'For registration, payment, eKYC issues — call directly',
    helpline_call: '155261 (Toll-Free)',
    helpline_email: 'pmkisan-ict@gov.in',
    helpline_hours: 'Mon-Sat: 9:30 AM - 6:00 PM',

    read_more: 'Read More →',
    check_status: 'Check Status',
    download_list: 'Download List',
    register_now: 'Register Now',
    learn_more: 'Learn More →',
    back_to_home: '← Back to Home',
    loading: 'Loading...',
    error: 'Error occurred',
    success: 'Success!',

    footer_disclaimer: 'A quick word — KisanStatus.com is not a government website. It is a farmer-run info site; for any real work, always use the official portal.',
    footer_quick_links: 'Quick Links',
    footer_official_links: 'Official Government Links',
    footer_contact: 'Contact Us',
    footer_copyright: `© 2026 KisanStatus.com by ${AUTHOR_NAME} — Informational purposes only`,

    seo_title: 'PM Kisan Status Check 2026 — 23rd Installment Released | KisanStatus.com',
    seo_description: 'PM Kisan 23rd installment status check 2026 — ₹2000 directly in bank. eKYC guide, beneficiary list, payment fail solution — all free.',
  },
};


export default t;
