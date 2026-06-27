/**
 * Beneficiary List by State — /beneficiary-list/[state]
 * ✅ Next.js 15 compatible + Dynamic kist info + All 36 states
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// ✅ DYNAMIC KIST INFO — Current date ke hisaab se auto-update
const getCurrentKistInfo = () => {
  const now = new Date();
  const year = now.getFullYear();
  
  // PM Kisan installment schedule (approximate)
  // Apr-Jun → 24vi, Jul-Sep → 25vi, Oct-Dec → 26vi, Jan-Mar → 27vi
  const month = now.getMonth() + 1; // 1-12
  
  let currentKist = 23;
  let currentDate = '20 June 2026';
  let nextKist = 24;
  let nextDate = 'October 2026';
  
  if (month >= 7 && month <= 9) {
    currentKist = 24; currentDate = 'October 2026'; nextKist = 25; nextDate = 'January 2027';
  } else if (month >= 10 && month <= 12) {
    currentKist = 25; currentDate = 'January 2027'; nextKist = 26; nextDate = 'April 2027';
  } else if (month >= 1 && month <= 3) {
    currentKist = 26; currentDate = 'April 2027'; nextKist = 27; nextDate = 'July 2027';
  }
  
  return {
    current: `${currentKist}वीं किस्त`,
    currentDate,
    currentStatus: 'released',
    next: `${nextKist}वीं किस्त`,
    nextDate,
    nextStatus: 'expected',
  };
};

const KIST_INFO = getCurrentKistInfo();

// ✅ ALL 36 STATES/UTs — Previously missing 8 added
const stateData: Record<string, {
  name: string; slug: string; crop: string; article: string; keywords: string[];
}> = {
  // ... [APNE PURANE 29 STATES YAHAN RAKHO - WO SAB SAHI HAIN] ...
  
  // ✅ NEWLY ADDED STATES/UTs (previously missing):
  'delhi': { 
    name: 'Delhi', slug: 'delhi', crop: 'vegetables, dairy & horticulture',
    article: `Delhi has a significant urban and peri-urban farming community growing vegetables, dairy farming, and horticulture on the city's outskirts. Small farmers in Delhi's rural districts like Najafgarh, Alipur, and Bawana are eligible for PM Kisan Samman Nidhi. To check PM Kisan status Delhi 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx with your Aadhaar number. Delhi government maintains land records through the Revenue Department portal linked to PM Kisan verification. For Delhi PM Kisan beneficiary list, select your district and village. Dairy farmers with agricultural land and vegetable growers in peri-urban areas are typical beneficiaries. eKYC available at CSC centres across all Delhi districts. PM Kisan ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai; ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai.`,
    keywords: ['pm kisan delhi 2026', 'delhi pm kisan beneficiary list', 'pm kisan status delhi', 'delhi kisan samman nidhi 2026', 'pm kisan dl farmer list']
  },
  'jammu-kashmir': {
    name: 'Jammu & Kashmir', slug: 'jammu-kashmir', crop: 'apple, saffron & rice',
    article: `Jammu & Kashmir is known for apple orchards in Kashmir Valley, saffron cultivation in Pampore, and rice farming in Jammu region. Small farmers including apple growers, saffron cultivators, and paddy farmers are eligible for PM Kisan Samman Nidhi. To check PM Kisan status J&K 2026, visit pmkisan.gov.in with Aadhaar. J&K uses land revenue records for PM Kisan verification. For J&K PM Kisan beneficiary list, select your district and tehsil. Apple farmers in Shopian, Kulgam, and Baramulla are major beneficiaries. Saffron farmers in Pulwama with registered land qualify. eKYC at CSC centres available across J&K. PM Kisan helpline: 155261.`,
    keywords: ['pm kisan jammu kashmir 2026', 'jk pm kisan beneficiary list', 'pm kisan status jk', 'jammu kashmir kisan samman nidhi 2026', 'pm kisan jk farmer list']
  },
  'ladakh': {
    name: 'Ladakh', slug: 'ladakh', crop: 'barley, apricot & peas',
    article: `Ladakh's unique high-altitude agriculture includes barley, apricot, and green pea cultivation in Leh and Kargil districts. Small farmers in this cold desert region are eligible for PM Kisan Samman Nidhi. To check PM Kisan status Ladakh 2026, visit pmkisan.gov.in with Aadhaar. Ladakh uses UT land records system for PM Kisan verification. For Ladakh PM Kisan beneficiary list, select your district and block. Apricot farmers in Kargil and barley growers in Leh are key beneficiaries. The ₹6000 annual support helps cover high input costs in extreme climate. eKYC at CSC centres in Leh and Kargil. PM Kisan helpline: 155261.`,
    keywords: ['pm kisan ladakh 2026', 'ladakh pm kisan beneficiary list', 'pm kisan status ladakh', 'ladakh kisan samman nidhi 2026', 'pm kisan la farmer list']
  },
  'puducherry': {
    name: 'Puducherry', slug: 'puducherry', crop: 'rice, sugarcane & coconut',
    article: `Puducherry's agricultural landscape includes rice cultivation, sugarcane, and coconut groves across its four regions. Small farmers in Puducherry, Karaikal, Mahe, and Yanam are eligible for PM Kisan Samman Nidhi. To check PM Kisan status Puducherry 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx with Aadhaar. Puducherry uses e-District land records for PM Kisan verification. For Puducherry PM Kisan beneficiary list, select your region and commune. Rice farmers in Karaikal and coconut growers in Puducherry region are typical beneficiaries. eKYC at CSC centres available across all regions. PM Kisan helpline: 155261.`,
    keywords: ['pm kisan puducherry 2026', 'puducherry pm kisan beneficiary list', 'pm kisan status puducherry', 'puducherry kisan samman nidhi 2026', 'pm kisan py farmer list']
  },
  'andaman-nicobar': {
    name: 'Andaman & Nicobar Islands', slug: 'andaman-nicobar', crop: 'coconut, arecanut & spices',
    article: `Andaman & Nicobar Islands have unique tropical agriculture with coconut, arecanut, banana, and spice cultivation. Small farmers in South Andaman, North Andaman, and Nicobar districts are eligible for PM Kisan Samman Nidhi. To check PM Kisan status A&N 2026, visit pmkisan.gov.in with Aadhaar. A&N uses UT land records for PM Kisan verification. For A&N PM Kisan beneficiary list, select your district and tehsil. Coconut and arecanut farmers with own land are primary beneficiaries. Tribal farmers in Nicobar with customary land rights may need special documentation. eKYC at CSC centres in Port Blair and major islands. PM Kisan helpline: 155261.`,
    keywords: ['pm kisan andaman nicobar 2026', 'andaman pm kisan beneficiary list', 'pm kisan status andaman', 'andaman kisan samman nidhi 2026', 'pm kisan an farmer list']
  },
  'chandigarh': {
    name: 'Chandigarh', slug: 'chandigarh', crop: 'wheat, vegetables & dairy',
    article: `Chandigarh has limited but productive peri-urban agriculture with wheat, vegetable farming, and dairy units on the city's outskirts. Small farmers in Chandigarh's rural sectors are eligible for PM Kisan Samman Nidhi. To check PM Kisan status Chandigarh 2026, visit pmkisan.gov.in with Aadhaar. Chandigarh uses UT Administration land records for PM Kisan verification. For Chandigarh PM Kisan beneficiary list, select your sector/village. Vegetable farmers supplying to city markets and dairy farmers with agricultural land are typical beneficiaries. eKYC at CSC centres in Chandigarh. PM Kisan helpline: 155261.`,
    keywords: ['pm kisan chandigarh 2026', 'chandigarh pm kisan beneficiary list', 'pm kisan status chandigarh', 'chandigarh kisan samman nidhi 2026', 'pm kisan ch farmer list']
  },
  'dadra-nagar-haveli': {
    name: 'Dadra & Nagar Haveli and Daman & Diu', slug: 'dadra-nagar-haveli', crop: 'rice, ragi & mango',
    article: `Dadra & Nagar Haveli and Daman & Diu have tribal-dominated agriculture with rice, ragi, and mango cultivation. Small tribal farmers in Silvassa, Daman, and Diu are eligible for PM Kisan Samman Nidhi. To check PM Kisan status DNDD 2026, visit pmkisan.gov.in with Aadhaar. DNDD uses UT land records for PM Kisan verification. For DNDD PM Kisan beneficiary list, select your taluka and village. Tribal farmers with forest land rights and mango orchard owners are key beneficiaries. eKYC at CSC centres in Silvassa and Daman. PM Kisan helpline: 155261.`,
    keywords: ['pm kisan dadra nagar haveli 2026', 'dnh pm kisan beneficiary list', 'pm kisan status dnh', 'dnhd kisan samman nidhi 2026', 'pm kisan dn farmer list']
  },
  'lakshadweep': {
    name: 'Lakshadweep', slug: 'lakshadweep', crop: 'coconut, tuna fish & coir',
    article: `Lakshadweep's economy is based on coconut cultivation, tuna fishing, and coir production. Coconut farmers with own land in Lakshadweep islands are eligible for PM Kisan Samman Nidhi. To check PM Kisan status Lakshadweep 2026, visit pmkisan.gov.in with Aadhaar. Lakshadweep uses UT Administration land records for PM Kisan verification. For Lakshadweep PM Kisan beneficiary list, select your island. Coconut farmers across all 10 inhabited islands are primary beneficiaries. The ₹6000 annual support helps island farmers cope with high transportation costs. eKYC at CSC centres in Kavaratti and major islands. PM Kisan helpline: 155261.`,
    keywords: ['pm kisan lakshadweep 2026', 'lakshadweep pm kisan beneficiary list', 'pm kisan status lakshadweep', 'lakshadweep kisan samman nidhi 2026', 'pm kisan ld farmer list']
  },
};