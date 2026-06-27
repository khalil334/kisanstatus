/**
 * Beneficiary List by State — /beneficiary-list/[state]
 * ✅ Next.js 15 compatible + Dynamic kist info + All 36 states/UTs
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// ✅ DYNAMIC KIST INFO — Current date ke hisaab se auto-update
const getCurrentKistInfo = () => {
  const now = new Date();
  const month = now.getMonth() + 1;

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

// ✅ ALL 37 STATES/UTs
const stateData: Record<string, {
  name: string; slug: string; crop: string; article: string; keywords: string[];
}> = {
  // ── ORIGINAL 29 STATES ──────────────────────────────────────────────────
  'andhra-pradesh': { name: 'Andhra Pradesh', slug: 'andhra-pradesh', crop: 'rice, tobacco & aquaculture', article: `Andhra Pradesh is one of India's leading agricultural states, known for its rice cultivation in the fertile Krishna and Godavari river delta regions. Rice farmers in AP are among the primary PM Kisan Samman Nidhi Yojana beneficiaries with over 50 lakh registered farmers. To check PM Kisan status in Andhra Pradesh 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx and enter your Aadhaar number. The AP state government processes beneficiary verification through the AP Land Records system. For Andhra Pradesh PM Kisan village list download, visit the official portal and select your district, mandal, and village. The YSR Rythu Bharosa scheme works alongside PM Kisan to provide additional support to AP farmers. Tobacco and sugarcane farmers with cultivable land are also eligible. PM Kisan ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai; ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai. eKYC mandatory — complete at pmkisan.gov.in or nearest CSC centre.`, keywords: ['pm kisan status andhra pradesh 2026', 'andhra pradesh pm kisan beneficiary list', 'ap pm kisan installment 2026', 'pm kisan andhra pradesh village list', 'pm kisan ap farmer list download'] },
  'arunachal-pradesh': { name: 'Arunachal Pradesh', slug: 'arunachal-pradesh', crop: 'rice, maize & horticulture', article: `Arunachal Pradesh has a predominantly tribal farming community practicing traditional rice cultivation on terraced hillside fields. PM Kisan Samman Nidhi has been significant support for farmers in remote districts like Tawang, West Siang, and Papum Pare. To check PM Kisan status Arunachal Pradesh 2026, visit pmkisan.gov.in and enter your Aadhaar number. Tribal farmers with land rights under community ownership may need special documentation for PM Kisan registration. The state Agriculture Department in Itanagar assists with registration for farmers in remote areas without internet. For Arunachal Pradesh PM Kisan beneficiary list, select your district and block. Many Arunachal farmers also grow maize, millet, and horticulture crops like apple and kiwi. eKYC for Arunachal Pradesh farmers can be done at CSC centres in district headquarters. PM Kisan helpline 155261 provides regional language support.`, keywords: ['pm kisan arunachal pradesh 2026', 'arunachal pradesh kisan samman nidhi list', 'pm kisan status check arunachal 2026', 'arunachal pradesh farmer list pm kisan', 'pm kisan beneficiary arunachal pradesh'] },
  'assam': { name: 'Assam', slug: 'assam', crop: 'rice, tea & jute', article: `Assam is famous for its tea gardens and the fertile Brahmaputra river valley that supports extensive rice cultivation. Small and marginal rice farmers in Assam's flood plains are key PM Kisan Samman Nidhi beneficiaries. PM Kisan ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai — over 30 lakh Assam PM Kisan beneficiaries ko fayda hua. To check PM Kisan status Assam 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx with your Aadhaar number. Assam farmers face unique challenges due to annual flooding affecting land records. Assam government maintains digital land records through the Dharitree portal linked to PM Kisan. For Assam PM Kisan village beneficiary list, select your district and revenue circle. Jute farmers in the Brahmaputra plains are eligible if land is in their name. Contact Assam Agriculture helpline for registration assistance.`, keywords: ['pm kisan status assam 2026', 'assam pm kisan beneficiary list 2026', 'pm kisan assam farmer list download', 'assam kisan samman nidhi village list', 'pm kisan installment assam 2026'] },
  'bihar': { name: 'Bihar', slug: 'bihar', crop: 'wheat, rice & maize', article: `Bihar is one of India's most agriculture-dependent states with millions of small and marginal farmers cultivating wheat, rice, and maize in the fertile Gangetic plains. PM Kisan Samman Nidhi is extremely important for Bihar farmers — over 80 lakh registered beneficiaries, one of India's highest. To check PM Kisan status Bihar 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Bihar farmers can check their village-wise beneficiary list by selecting district, block, and panchayat on the official portal. Common issues include land records fragmentation and joint family ownership disputes. Bihar government maintains BHUMIJANKARI land record portal for verification. For PM Kisan new registration in Bihar, visit your Block Agriculture Officer or CSC centre. eKYC can be done at any CSC in Bihar. PM Kisan ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai; ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai. Contact Bihar Agriculture Department Patna for payment disputes.`, keywords: ['pm kisan status bihar 2026', 'bihar pm kisan beneficiary list', 'pm kisan bihar village list download', 'bihar kisan samman nidhi 2026', 'pm kisan installment status bihar'] },
  'chhattisgarh': { name: 'Chhattisgarh', slug: 'chhattisgarh', crop: 'rice & pulses', article: `Chhattisgarh is known as the "Rice Bowl of India" with vast paddy cultivation across the Chhattisgarh plain. Small farmers growing rice, pulses, and oilseeds in Chhattisgarh are significant PM Kisan beneficiaries with over 40 lakh registered farmers. To check PM Kisan status Chhattisgarh 2026, visit pmkisan.gov.in with your Aadhaar. Chhattisgarh maintains Bhuiya land records portal linked to PM Kisan for land verification. For Chhattisgarh PM Kisan village beneficiary list, visit the official portal and select district, tehsil, and village. Tribal farmers in Bastar, Surguja, and other scheduled areas have special provisions for land ownership. The Rajiv Gandhi Kisan Nyay Yojana works alongside PM Kisan for additional income support. PM Kisan ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai; ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai. eKYC at CSC centres available state-wide.`, keywords: ['pm kisan chhattisgarh 2026', 'chhattisgarh pm kisan beneficiary list', 'pm kisan status chhattisgarh', 'chhattisgarh kisan samman nidhi village list', 'pm kisan cg farmer list'] },
  'goa': { name: 'Goa', slug: 'goa', crop: 'rice, coconut & cashew', article: `Goa's agricultural landscape includes unique khazan (coastal paddy fields), cashew plantations, and coconut groves. Small farmers here are eligible for PM Kisan Samman Nidhi if they own cultivable agricultural land. To check PM Kisan status Goa 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx with your Aadhaar. Goa maintains Form I and XIV land records for agricultural land verification. For PM Kisan beneficiary list Goa, select your taluka and village on the official portal. Rice farmers growing traditional varieties and coconut farmers with own land are eligible. The Goa Agriculture Department assists with PM Kisan registration at block-level offices. Cashew and coconut farmers with land holdings under 2 hectares are typical PM Kisan beneficiaries. eKYC at CSC centres in Panaji and major towns. Contact Goa Agriculture Department for registration issues.`, keywords: ['pm kisan goa 2026', 'goa pm kisan beneficiary list', 'pm kisan status goa farmer', 'goa kisan samman nidhi 2026', 'pm kisan goa village list'] },
  'gujarat': { name: 'Gujarat', slug: 'gujarat', crop: 'cotton, groundnut & wheat', article: `Gujarat is a leading agricultural state with significant production of cotton, groundnut, wheat, and castor. Cotton farmers in Saurashtra and groundnut farmers in South Gujarat are major PM Kisan Samman Nidhi beneficiaries — over 50 lakh registered farmers. To check PM Kisan status Gujarat 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Gujarat maintains AnyRor (Any Records of Rights) system for land record verification linked to PM Kisan. For Gujarat PM Kisan village beneficiary list, select district, taluka, and village. The Gujarat government integrated PM Kisan with the IKHEDUT portal for easier registration. eKYC at CSC centres is available across Gujarat including remote Kutch region. PM Kisan ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai; ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai. Saurashtra cotton and castor farmers depend heavily on the ₹6000 annual income support.`, keywords: ['pm kisan gujarat 2026', 'gujarat pm kisan beneficiary list', 'pm kisan status gujarat', 'gujarat kisan samman nidhi village list', 'pm kisan gj farmer list download'] },
  'haryana': { name: 'Haryana', slug: 'haryana', crop: 'wheat, rice & sugarcane', article: `Haryana is part of India's Green Revolution belt with highly productive wheat and rice cultivation. Small and marginal farmers in Haryana with less than 2 hectares of land are eligible for PM Kisan Samman Nidhi. To check PM Kisan status Haryana 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Haryana maintains Jamabandi land records portal linked to PM Kisan verification. For Haryana PM Kisan village beneficiary list, select district, tehsil, and village. Small farmers in Mewat (Nuh), Sirsa, and Mahendragarh are significant PM Kisan recipients. The Haryana Meri Fasal Mera Byora scheme works alongside PM Kisan. Note: Haryana farmers who are government employees or income tax payers are ineligible. eKYC is mandatory — complete at pmkisan.gov.in or nearest CSC centre in Haryana.`, keywords: ['pm kisan haryana 2026', 'haryana pm kisan beneficiary list', 'pm kisan status haryana', 'haryana kisan samman nidhi village list', 'pm kisan hr farmer list'] },
  'himachal-pradesh': { name: 'Himachal Pradesh', slug: 'himachal-pradesh', crop: 'apple, wheat & maize', article: `Himachal Pradesh's agriculture is dominated by apple orchards in Shimla, Kullu, and Kinnaur, along with wheat and maize cultivation on terraced mountain fields. Small apple and fruit farmers in HP who own land are eligible for PM Kisan Samman Nidhi. To check PM Kisan status Himachal Pradesh 2026, visit pmkisan.gov.in with Aadhaar. HP maintains Himris land records portal for verification. For HP PM Kisan village beneficiary list, select district, tehsil, and village. Farmers in remote tribal areas like Lahaul-Spiti and Kinnaur may need to visit district Agriculture offices for PM Kisan registration. The ₹2000 per installment helps hill farmers cover input costs for apple cultivation. eKYC available at CSC centres in major HP towns. Contact HP Agriculture Department Shimla for registration support.`, keywords: ['pm kisan himachal pradesh 2026', 'hp pm kisan beneficiary list', 'pm kisan status himachal pradesh', 'himachal pradesh kisan samman nidhi 2026', 'pm kisan hp farmer list'] },
  'jharkhand': { name: 'Jharkhand', slug: 'jharkhand', crop: 'rice, pulses & vegetables', article: `Jharkhand has a large tribal farming population practicing rain-fed upland rice cultivation along with pulses and vegetables. Tribal farmers in Ranchi, Hazaribagh, Dumka, and other districts are significant PM Kisan beneficiaries. To check PM Kisan status Jharkhand 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Jharkhand tribal farmers with land rights under Chotanagpur Tenancy Act have special land documentation provisions. For Jharkhand PM Kisan village beneficiary list, select district, block, and panchayat. Jharkhand uses Jharbhoomi land records portal for PM Kisan land verification — over 30 lakh registered beneficiaries. Women farmers in Jharkhand with land in their name have increased PM Kisan registrations. eKYC centres available at CSC and Pragya Kendra offices across the state. PM Kisan helpline 155261 available.`, keywords: ['pm kisan jharkhand 2026', 'jharkhand pm kisan beneficiary list', 'pm kisan status jharkhand', 'jharkhand kisan samman nidhi village list', 'pm kisan jh farmer list'] },
  'karnataka': { name: 'Karnataka', slug: 'karnataka', crop: 'sugarcane, cotton & ragi', article: `Karnataka has a diverse agricultural sector with sugarcane in Belagavi, cotton in Dharwad, and ragi on the Deccan plateau. Small and marginal farmers across all 31 districts are eligible for PM Kisan Samman Nidhi — over 50 lakh registered. To check PM Kisan status Karnataka 2026, visit pmkisan.gov.in with Aadhaar or mobile number. Karnataka uses Bhoomi RTC (Record of Rights, Tenancy and Crops) for land verification in PM Kisan. For Karnataka PM Kisan village beneficiary list, select district, taluk, and hobli. The Raitha Siri state scheme provides additional support alongside PM Kisan. Farmers in North Karnataka's drought-prone regions particularly depend on ₹6000 annual PM Kisan benefit. eKYC available online or at CSC centres across Karnataka. PM Kisan ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai; ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai.`, keywords: ['pm kisan karnataka 2026', 'karnataka pm kisan beneficiary list', 'pm kisan status karnataka', 'karnataka kisan samman nidhi village list', 'pm kisan ka farmer list download'] },
  'kerala': { name: 'Kerala', slug: 'kerala', crop: 'rice, coconut & rubber', article: `Kerala's agricultural landscape includes rice cultivation in Kuttanad (the "Rice Bowl of Kerala"), coconut groves, rubber plantations, and spice gardens. Small landholding farmers in Kerala are eligible for PM Kisan Samman Nidhi if they own agricultural land. To check PM Kisan status Kerala 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Kerala uses land tax receipts and possession certificates for PM Kisan verification. For Kerala PM Kisan village beneficiary list, select district, taluk, and village. Note: Many Kerala farmers have land less than 0.5 hectares due to fragmentation — all are eligible regardless of size. Kuttanad rice farmers, small coconut farmers, and pepper/cardamom growers with land are typical beneficiaries. eKYC at Akshaya CSC centres is available across all 14 districts. PM Kisan helpline: 155261.`, keywords: ['pm kisan kerala 2026', 'kerala pm kisan beneficiary list', 'pm kisan status kerala', 'kerala kisan samman nidhi 2026', 'pm kisan kl farmer list'] },
  'madhya-pradesh': { name: 'Madhya Pradesh', slug: 'madhya-pradesh', crop: 'soybean, wheat & pulses', article: `Madhya Pradesh is India's largest state by area with one of the largest farming populations. Soybean farmers on the Malwa plateau, wheat growers in Chambal and Bundelkhand, and pulse growers are major PM Kisan beneficiaries — over 70 lakh registered, one of India's highest. To check PM Kisan status Madhya Pradesh 2026, visit pmkisan.gov.in with Aadhaar. MP uses Bhu-Abhilekh Naksha land records portal for PM Kisan verification. For MP PM Kisan village beneficiary list, select district, tehsil, and village. The state government runs Mukhyamantri Kisan Kalyan Yojana to provide ₹4000 additional per year separately. Tribal farmers in Jhabua, Alirajpur, and Balaghat need tribal land documentation. eKYC widely available at MP Online Kiosks and CSC centres across all 52 districts.`, keywords: ['pm kisan madhya pradesh 2026', 'mp pm kisan beneficiary list', 'pm kisan status mp 2026', 'madhya pradesh kisan samman nidhi village list', 'pm kisan mp farmer list download'] },
  'maharashtra': { name: 'Maharashtra', slug: 'maharashtra', crop: 'sugarcane, cotton & onion', article: `Maharashtra is India's second-largest agricultural producer with cotton farms in Vidarbha, onion cultivation in Nashik, sugarcane in Western Maharashtra, and rice in Konkan. Over 1 crore registered PM Kisan farmers in Maharashtra — one of India's highest. To check PM Kisan status Maharashtra 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Maharashtra uses Mahabhumi land records portal (mahabhumi.gov.in) — farmers can check 7/12 (Satbara Utara) extract online for PM Kisan land seeding. For Maharashtra PM Kisan village beneficiary list, select district, taluka, and village. Vidarbha cotton farmers facing crop failures particularly benefit from ₹6000 annual support. The state Namo Shetkari Mahasanman Nidhi scheme provides additional ₹6000 alongside PM Kisan. eKYC available at Maha-e-Seva Kendra across Maharashtra.`, keywords: ['pm kisan maharashtra 2026', 'maharashtra pm kisan beneficiary list', 'pm kisan status maharashtra', 'maharashtra kisan samman nidhi village list', 'pm kisan mh farmer list download'] },
  'manipur': { name: 'Manipur', slug: 'manipur', crop: 'rice, vegetables & horticulture', article: `Manipur's farming is centered in the Imphal Valley where rice is the dominant crop, supplemented by vegetables, fruits, and flowers. Small rice farmers in Imphal East, Imphal West, Thoubal, and Bishnupur are PM Kisan Samman Nidhi beneficiaries. To check PM Kisan status Manipur 2026, visit pmkisan.gov.in with your Aadhaar. Manipur uses state land revenue records (Patta documents) for PM Kisan verification. For Manipur PM Kisan beneficiary list, select your district and gram panchayat. Hill district farmers in Churachandpur and Ukhrul face additional registration challenges due to customary land ownership. Black rice (Chakhao) and organic vegetable farmers with own land are eligible. eKYC at CSC centres available in major Manipur towns. Contact Manipur Agriculture Department Imphal for assistance.`, keywords: ['pm kisan manipur 2026', 'manipur pm kisan beneficiary list', 'pm kisan status manipur', 'manipur kisan samman nidhi 2026', 'pm kisan mn farmer list'] },
  'meghalaya': { name: 'Meghalaya', slug: 'meghalaya', crop: 'rice, ginger & turmeric', article: `Meghalaya's tribal farming communities grow rice, ginger, turmeric, and black pepper on hilly terrain using traditional agroforestry methods. Small farmers in East Khasi Hills, West Khasi Hills, and Jaintia Hills are PM Kisan beneficiaries. To check PM Kisan status Meghalaya 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Meghalaya has unique matrilineal land ownership customs — women farmers here have relatively better land documentation for PM Kisan. For Meghalaya PM Kisan beneficiary list, select your district and community block. Ginger and turmeric spice farmers with recorded land are eligible for PM Kisan. eKYC for Meghalaya farmers at CSC centres in Shillong and district headquarters. PM Kisan helpline: 155261 for registration support.`, keywords: ['pm kisan meghalaya 2026', 'meghalaya pm kisan beneficiary list', 'pm kisan status meghalaya', 'meghalaya kisan samman nidhi 2026', 'pm kisan ml farmer list'] },
  'mizoram': { name: 'Mizoram', slug: 'mizoram', crop: 'rice, ginger & vegetables', article: `Mizoram's farmers are transitioning from traditional jhum (shifting) cultivation to settled terrace farming for rice, ginger, and vegetables. Small farmers with settled land ownership in Aizawl, Lunglei, and Champhai are eligible for PM Kisan Samman Nidhi. To check PM Kisan status Mizoram 2026, visit pmkisan.gov.in with Aadhaar. Village land passes (LPC) serve as primary land ownership proof for PM Kisan in Mizoram. For Mizoram PM Kisan beneficiary list, select district and RD block on the official portal. Ginger cultivation in Champhai and passion fruit farming are key activities eligible for PM Kisan. Farmers with community-assigned land for permanent cultivation qualify. eKYC at CSC centres in Aizawl and district towns. Contact Mizoram Agriculture Department for registration help.`, keywords: ['pm kisan mizoram 2026', 'mizoram pm kisan beneficiary list', 'pm kisan status mizoram', 'mizoram kisan samman nidhi 2026', 'pm kisan mz farmer list'] },
  'nagaland': { name: 'Nagaland', slug: 'nagaland', crop: 'rice, maize & horticulture', article: `Nagaland's tribal farming communities grow rice, maize, and horticulture crops including pineapple and kiwi on terraced hill slopes. Small farmers with settled land rights in Kohima, Dimapur, Wokha, and Mokokchung are eligible for PM Kisan Samman Nidhi. To check PM Kisan status Nagaland 2026, visit pmkisan.gov.in with Aadhaar. Nagaland tribal land ownership is governed by customary law — Land Commission certificates help in PM Kisan registration. For Nagaland PM Kisan beneficiary list, select district and block. Pineapple, kiwi, and large cardamom farmers with registered land are eligible. eKYC at CSC centres in Kohima and Dimapur. PM Kisan helpline 155261 for Nagaland farmers.`, keywords: ['pm kisan nagaland 2026', 'nagaland pm kisan beneficiary list', 'pm kisan status nagaland', 'nagaland kisan samman nidhi 2026', 'pm kisan nl farmer list'] },
  'odisha': { name: 'Odisha', slug: 'odisha', crop: 'rice, pulses & oilseeds', article: `Odisha is a major rice-producing state with farmers in the fertile coastal plains and inland river valleys. Over 40 lakh PM Kisan registered farmers in Odisha benefit from the ₹6000 annual scheme. To check PM Kisan status Odisha 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx with Aadhaar. Odisha uses Bhulekh land records portal for PM Kisan land seeding verification. For Odisha PM Kisan village beneficiary list, select district, tehsil, and village. Tribal farmers in Koraput, Malkangiri, and Rayagada with patta land are eligible. The KALIA (Krushak Assistance for Livelihood and Income Augmentation) scheme works alongside PM Kisan. Farmers can do eKYC at CSC centres available across all 30 districts. PM Kisan ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai; ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai.`, keywords: ['pm kisan odisha 2026', 'odisha pm kisan beneficiary list', 'pm kisan status odisha', 'odisha kisan samman nidhi village list', 'pm kisan od farmer list download'] },
  'punjab': { name: 'Punjab', slug: 'punjab', crop: 'wheat, rice & maize', article: `Punjab is India's agricultural powerhouse — the "Granary of India" — with highly productive wheat and rice cultivation. Small and marginal farmers with less than 2 hectares are eligible for PM Kisan Samman Nidhi despite Punjab's large farm size average. To check PM Kisan status Punjab 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Punjab uses Jamabandi land records for PM Kisan verification. For Punjab PM Kisan village beneficiary list, select district, tehsil, and village. Note: Many Punjab farmers are excluded due to income tax payment or government employment — check eligibility carefully. Punjab government's Ghar Ghar Rozgar portal may have integration with PM Kisan. eKYC at any CSC in Punjab. PM Kisan helpline: 155261 / 011-24300606.`, keywords: ['pm kisan punjab 2026', 'punjab pm kisan beneficiary list', 'pm kisan status punjab', 'punjab kisan samman nidhi village list', 'pm kisan pb farmer list'] },
  'rajasthan': { name: 'Rajasthan', slug: 'rajasthan', crop: 'bajra, wheat & mustard', article: `Rajasthan is India's largest state with vast arid and semi-arid agricultural zones growing bajra, wheat, mustard, and pulses. Small farmers in Rajasthan's drought-prone districts like Barmer, Jaisalmer, and Bikaner depend heavily on PM Kisan Samman Nidhi — over 65 lakh registered beneficiaries. To check PM Kisan status Rajasthan 2026, visit pmkisan.gov.in with Aadhaar. Rajasthan uses Apna Khata (E-Dharti) land records portal for PM Kisan verification. For Rajasthan PM Kisan village beneficiary list, select district, tehsil, and village. Bajra and mustard farmers in the Thar desert belt are primary beneficiaries. eKYC available at e-Mitra CSC centres across all 50 districts. PM Kisan ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai; ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai.`, keywords: ['pm kisan rajasthan 2026', 'rajasthan pm kisan beneficiary list', 'pm kisan status rajasthan', 'rajasthan kisan samman nidhi village list', 'pm kisan rj farmer list download'] },
  'sikkim': { name: 'Sikkim', slug: 'sikkim', crop: 'cardamom, ginger & rice', article: `Sikkim is India's first fully organic state, known for large cardamom cultivation and high-altitude rice farming. Small farmers with land holdings in East, West, North, and South Sikkim districts are eligible for PM Kisan Samman Nidhi. To check PM Kisan status Sikkim 2026, visit pmkisan.gov.in with Aadhaar. Sikkim uses LPC (Land Possession Certificate) for PM Kisan land verification. For Sikkim PM Kisan beneficiary list, select district and gram panchayat unit. Organic cardamom and ginger farmers with own land are eligible. The Sikkim Organic Mission works alongside PM Kisan to support organic transition costs. eKYC at CSC centres in Gangtok and district towns. PM Kisan helpline: 155261.`, keywords: ['pm kisan sikkim 2026', 'sikkim pm kisan beneficiary list', 'pm kisan status sikkim', 'sikkim kisan samman nidhi 2026', 'pm kisan sk farmer list'] },
  'tamil-nadu': { name: 'Tamil Nadu', slug: 'tamil-nadu', crop: 'rice, banana & sugarcane', article: `Tamil Nadu has a diverse agricultural sector with rice cultivation in the Cauvery delta, banana plantations in Trichy and Erode, and sugarcane in Coimbatore. Over 40 lakh PM Kisan registered farmers in Tamil Nadu. To check PM Kisan status Tamil Nadu 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Tamil Nadu uses Patta (land ownership certificate) for PM Kisan verification — available at Village Administrative Officer offices. For Tamil Nadu PM Kisan village beneficiary list, select district, taluk, and village. Note: Tamil Nadu farmers also receive CM Uzhavar Pathukappu Thittam additional support. Banana and mango farmers with own land in the Vaigai and Cauvery belt are eligible. eKYC at CSC and Common Service Centres statewide. PM Kisan ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai.`, keywords: ['pm kisan tamil nadu 2026', 'tamil nadu pm kisan beneficiary list', 'pm kisan status tamil nadu', 'tamil nadu kisan samman nidhi village list', 'pm kisan tn farmer list download'] },
  'telangana': { name: 'Telangana', slug: 'telangana', crop: 'rice, cotton & turmeric', article: `Telangana is a major rice and cotton producing state with the Godavari and Krishna river systems supporting irrigation. Over 35 lakh PM Kisan registered farmers in Telangana. To check PM Kisan status Telangana 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Telangana uses Dharani portal (dharani.telangana.gov.in) for land records linked to PM Kisan verification. For Telangana PM Kisan village beneficiary list, select district, mandal, and village. The Rythu Bandhu state scheme (₹10,000 per acre per year) works alongside PM Kisan — Telangana farmers can receive both benefits. Turmeric farmers in Nizamabad and cotton farmers in Warangal are key PM Kisan recipients. eKYC at Mee Seva centres available across all 33 districts.`, keywords: ['pm kisan telangana 2026', 'telangana pm kisan beneficiary list', 'pm kisan status telangana', 'telangana kisan samman nidhi village list', 'pm kisan ts farmer list download'] },
  'tripura': { name: 'Tripura', slug: 'tripura', crop: 'rice, rubber & pineapple', article: `Tripura's agriculture includes rice cultivation in river valleys, rubber plantations in Gomati and Khowai districts, and pineapple farming. Small farmers in Tripura's eight districts are eligible for PM Kisan Samman Nidhi. To check PM Kisan status Tripura 2026, visit pmkisan.gov.in with Aadhaar. Tripura uses Bhu-Sanjog land records system for PM Kisan verification. For Tripura PM Kisan beneficiary list, select district and block. Rubber smallholders with less than 2 hectares of plantation land are eligible for PM Kisan. Pineapple farmers and bamboo cultivators with registered land also qualify. eKYC at CSC centres available across all 8 districts. Contact Tripura Agriculture Department Agartala for registration support.`, keywords: ['pm kisan tripura 2026', 'tripura pm kisan beneficiary list', 'pm kisan status tripura', 'tripura kisan samman nidhi 2026', 'pm kisan tr farmer list'] },
  'uttar-pradesh': { name: 'Uttar Pradesh', slug: 'uttar-pradesh', crop: 'wheat, sugarcane & rice', article: `Uttar Pradesh is India's most populous state and has the highest number of PM Kisan Samman Nidhi beneficiaries — over 2.5 crore registered farmers. Wheat farmers in the western plains, sugarcane growers in the Terai belt, and rice cultivators in eastern UP are all major beneficiaries. To check PM Kisan status UP 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx and enter your Aadhaar number. UP uses Bhulekh (upbhulekh.gov.in) land records portal for PM Kisan land seeding verification — farmers can check Khatauni online. For UP PM Kisan village beneficiary list, select your district, tehsil, and gram panchayat. Small sugarcane farmers in Muzaffarnagar, Meerut, and Lakhimpur Kheri heavily rely on ₹6000 annual PM Kisan benefit. PM Kisan ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai; ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai. eKYC mandatory — complete at pmkisan.gov.in or nearest Jan Seva Kendra in UP.`, keywords: ['pm kisan up 2026', 'uttar pradesh pm kisan beneficiary list', 'pm kisan status uttar pradesh 2026', 'up pm kisan village list download', 'pm kisan up farmer list 2026'] },
  'uttarakhand': { name: 'Uttarakhand', slug: 'uttarakhand', crop: 'rice, wheat & horticulture', article: `Uttarakhand's farmers cultivate rice and wheat on terraced mountain fields alongside horticulture including apple, pear, and citrus fruits. Small hill farmers in Pauri, Tehri, Almora, Pithoragarh, and other districts are eligible for PM Kisan Samman Nidhi. To check PM Kisan status Uttarakhand 2026, visit pmkisan.gov.in with Aadhaar. Uttarakhand uses Bhulekh UK land records for PM Kisan verification. For Uttarakhand PM Kisan village beneficiary list, select district, tehsil, and village. Hill farmers with small landholdings (sometimes less than 0.1 hectare) are eligible. eKYC available at CSC Lok Seva Kendras across all 13 districts. Contact Uttarakhand Agriculture Department Dehradun for support.`, keywords: ['pm kisan uttarakhand 2026', 'uttarakhand pm kisan beneficiary list', 'pm kisan status uttarakhand', 'uttarakhand kisan samman nidhi 2026', 'pm kisan uk farmer list'] },
  'west-bengal': { name: 'West Bengal', slug: 'west-bengal', crop: 'rice, jute & potato', article: `West Bengal is a leading producer of rice, jute, potato, and vegetables with millions of small and marginal farmers in the Gangetic delta and Rarh regions. To check PM Kisan status West Bengal 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. West Bengal uses Banglarbhumi land records portal for verification. Note: West Bengal initially had delays in PM Kisan implementation but most farmers are now registered. For WB PM Kisan village beneficiary list, select district, block, and gram panchayat. Jute farmers in Murshidabad and Nadia, potato growers in Hooghly and Burdwan, and rice farmers across the state are key beneficiaries — over 70 lakh registered. eKYC at Tathya Mitra Kendra CSC centres available statewide. PM Kisan helpline: 155261.`, keywords: ['pm kisan west bengal 2026', 'wb pm kisan beneficiary list', 'pm kisan status west bengal', 'west bengal kisan samman nidhi village list', 'pm kisan wb farmer list download'] },

  // ── NEWLY ADDED 8 UTs ───────────────────────────────────────────────────
  'delhi': { name: 'Delhi', slug: 'delhi', crop: 'vegetables, dairy & horticulture', article: `Delhi has a significant urban and peri-urban farming community growing vegetables, dairy farming, and horticulture on the city's outskirts. Small farmers in Delhi's rural districts like Najafgarh, Alipur, and Bawana are eligible for PM Kisan Samman Nidhi. To check PM Kisan status Delhi 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx with your Aadhaar number. Delhi government maintains land records through the Revenue Department portal linked to PM Kisan verification. For Delhi PM Kisan beneficiary list, select your district and village. Dairy farmers with agricultural land and vegetable growers in peri-urban areas are typical beneficiaries. eKYC available at CSC centres across all Delhi districts. PM Kisan ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai; ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai.`, keywords: ['pm kisan delhi 2026', 'delhi pm kisan beneficiary list', 'pm kisan status delhi', 'delhi kisan samman nidhi 2026', 'pm kisan dl farmer list'] },
  'jammu-kashmir': { name: 'Jammu & Kashmir', slug: 'jammu-kashmir', crop: 'apple, saffron & rice', article: `Jammu & Kashmir is known for apple orchards in Kashmir Valley, saffron cultivation in Pampore, and rice farming in Jammu region. Small farmers including apple growers, saffron cultivators, and paddy farmers are eligible for PM Kisan Samman Nidhi. To check PM Kisan status J&K 2026, visit pmkisan.gov.in with Aadhaar. J&K uses land revenue records for PM Kisan verification. For J&K PM Kisan beneficiary list, select your district and tehsil. Apple farmers in Shopian, Kulgam, and Baramulla are major beneficiaries. Saffron farmers in Pulwama with registered land qualify. eKYC at CSC centres available across J&K. PM Kisan helpline: 155261.`, keywords: ['pm kisan jammu kashmir 2026', 'jk pm kisan beneficiary list', 'pm kisan status jk', 'jammu kashmir kisan samman nidhi 2026', 'pm kisan jk farmer list'] },
  'ladakh': { name: 'Ladakh', slug: 'ladakh', crop: 'barley, apricot & peas', article: `Ladakh's unique high-altitude agriculture includes barley, apricot, and green pea cultivation in Leh and Kargil districts. Small farmers in this cold desert region are eligible for PM Kisan Samman Nidhi. To check PM Kisan status Ladakh 2026, visit pmkisan.gov.in with Aadhaar. Ladakh uses UT land records system for PM Kisan verification. For Ladakh PM Kisan beneficiary list, select your district and block. Apricot farmers in Kargil and barley growers in Leh are key beneficiaries. The ₹6000 annual support helps cover high input costs in extreme climate. eKYC at CSC centres in Leh and Kargil. PM Kisan helpline: 155261.`, keywords: ['pm kisan ladakh 2026', 'ladakh pm kisan beneficiary list', 'pm kisan status ladakh', 'ladakh kisan samman nidhi 2026', 'pm kisan la farmer list'] },
  'puducherry': { name: 'Puducherry', slug: 'puducherry', crop: 'rice, sugarcane & coconut', article: `Puducherry's agricultural landscape includes rice cultivation, sugarcane, and coconut groves across its four regions. Small farmers in Puducherry, Karaikal, Mahe, and Yanam are eligible for PM Kisan Samman Nidhi. To check PM Kisan status Puducherry 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx with Aadhaar. Puducherry uses e-District land records for PM Kisan verification. For Puducherry PM Kisan beneficiary list, select your region and commune. Rice farmers in Karaikal and coconut growers in Puducherry region are typical beneficiaries. eKYC at CSC centres available across all regions. PM Kisan helpline: 155261.`, keywords: ['pm kisan puducherry 2026', 'puducherry pm kisan beneficiary list', 'pm kisan status puducherry', 'puducherry kisan samman nidhi 2026', 'pm kisan py farmer list'] },
  'andaman-nicobar': { name: 'Andaman & Nicobar Islands', slug: 'andaman-nicobar', crop: 'coconut, arecanut & spices', article: `Andaman & Nicobar Islands have unique tropical agriculture with coconut, arecanut, banana, and spice cultivation. Small farmers in South Andaman, North Andaman, and Nicobar districts are eligible for PM Kisan Samman Nidhi. To check PM Kisan status A&N 2026, visit pmkisan.gov.in with Aadhaar. A&N uses UT land records for PM Kisan verification. For A&N PM Kisan beneficiary list, select your district and tehsil. Coconut and arecanut farmers with own land are primary beneficiaries. Tribal farmers in Nicobar with customary land rights may need special documentation. eKYC at CSC centres in Port Blair and major islands. PM Kisan helpline: 155261.`, keywords: ['pm kisan andaman nicobar 2026', 'andaman pm kisan beneficiary list', 'pm kisan status andaman', 'andaman kisan samman nidhi 2026', 'pm kisan an farmer list'] },
  'chandigarh': { name: 'Chandigarh', slug: 'chandigarh', crop: 'wheat, vegetables & dairy', article: `Chandigarh has limited but productive peri-urban agriculture with wheat, vegetable farming, and dairy units on the city's outskirts. Small farmers in Chandigarh's rural sectors are eligible for PM Kisan Samman Nidhi. To check PM Kisan status Chandigarh 2026, visit pmkisan.gov.in with Aadhaar. Chandigarh uses UT Administration land records for PM Kisan verification. For Chandigarh PM Kisan beneficiary list, select your sector/village. Vegetable farmers supplying to city markets and dairy farmers with agricultural land are typical beneficiaries. eKYC at CSC centres in Chandigarh. PM Kisan helpline: 155261.`, keywords: ['pm kisan chandigarh 2026', 'chandigarh pm kisan beneficiary list', 'pm kisan status chandigarh', 'chandigarh kisan samman nidhi 2026', 'pm kisan ch farmer list'] },
  'dadra-nagar-haveli': { name: 'Dadra & Nagar Haveli and Daman & Diu', slug: 'dadra-nagar-haveli', crop: 'rice, ragi & mango', article: `Dadra & Nagar Haveli and Daman & Diu have tribal-dominated agriculture with rice, ragi, and mango cultivation. Small tribal farmers in Silvassa, Daman, and Diu are eligible for PM Kisan Samman Nidhi. To check PM Kisan status DNDD 2026, visit pmkisan.gov.in with Aadhaar. DNDD uses UT land records for PM Kisan verification. For DNDD PM Kisan beneficiary list, select your taluka and village. Tribal farmers with forest land rights and mango orchard owners are key beneficiaries. eKYC at CSC centres in Silvassa and Daman. PM Kisan helpline: 155261.`, keywords: ['pm kisan dadra nagar haveli 2026', 'dnh pm kisan beneficiary list', 'pm kisan status dnh', 'dnhd kisan samman nidhi 2026', 'pm kisan dn farmer list'] },
  'lakshadweep': { name: 'Lakshadweep', slug: 'lakshadweep', crop: 'coconut, tuna fish & coir', article: `Lakshadweep's economy is based on coconut cultivation, tuna fishing, and coir production. Coconut farmers with own land in Lakshadweep islands are eligible for PM Kisan Samman Nidhi. To check PM Kisan status Lakshadweep 2026, visit pmkisan.gov.in with Aadhaar. Lakshadweep uses UT Administration land records for PM Kisan verification. For Lakshadweep PM Kisan beneficiary list, select your island. Coconut farmers across all 10 inhabited islands are primary beneficiaries. The ₹6000 annual support helps island farmers cope with high transportation costs. eKYC at CSC centres in Kavaratti and major islands. PM Kisan helpline: 155261.`, keywords: ['pm kisan lakshadweep 2026', 'lakshadweep pm kisan beneficiary list', 'pm kisan status lakshadweep', 'lakshadweep kisan samman nidhi 2026', 'pm kisan ld farmer list'] },
};

// ✅ Next.js 15 compatible - params as Promise
export async function generateMetadata(
  { params }: { params: Promise<{ state: string }> }
): Promise<Metadata> {
  const { state } = await params;
  const s = stateData[state];
  if (!s) return { title: 'State Not Found' };

  const title = `PM Kisan Beneficiary List ${s.name} 2026 — Village List, Status Check & eKYC`;
  const description = `${s.name} mein PM Kisan Samman Nidhi beneficiary list 2026 check karo. ${s.name} ke ${s.crop} farmers ke liye installment status, village list download, aur eKYC guide. ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai.`;
  const url = `https://kisanstatus.com/beneficiary-list/${s.slug}`;

  return {
    title,
    description,
    keywords: s.keywords.join(', '),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'KisanStatus.com',
      type: 'article',
      locale: 'hi_IN',
      images: [{
        url: `https://kisanstatus.com/images/pm-kisan-beneficiary-list-2026.webp`,
        width: 1200,
        height: 630,
        alt: `PM Kisan ${s.name} Beneficiary List 2026`
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://kisanstatus.com/images/pm-kisan-beneficiary-list-2026.webp`],
    },
  };
}

// ✅ Next.js 15 compatible - params as Promise
export default async function BeneficiaryStatePage({
  params
}: {
  params: Promise<{ state: string }>
}) {
  const { state } = await params;
  const s = stateData[state];
  if (!s) notFound();

  const url = `https://kisanstatus.com/beneficiary-list/${s.slug}`;
  const publishDate = '2026-01-01T00:00:00+05:30';
  const modifiedDate = new Date().toISOString();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `PM Kisan Beneficiary List ${s.name} 2026 — Village List & Status Check`,
    description: `${s.name} mein PM Kisan Samman Nidhi beneficiary list 2026, village list download, installment status check, aur eKYC guide.`,
    url,
    datePublished: publishDate,
    dateModified: modifiedDate,
    author: { '@type': 'Person', name: 'Sidhu Singh', url: 'https://kisanstatus.com/about' },
    publisher: {
      '@type': 'Organization',
      name: 'KisanStatus.com',
      url: 'https://kisanstatus.com',
      logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.webp' },
    },
    image: { '@type': 'ImageObject', url: 'https://kisanstatus.com/images/pm-kisan-beneficiary-list-2026.webp', width: 1200, height: 630 },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: s.keywords.join(', '),
    articleSection: 'PM Kisan Yojana',
    inLanguage: 'hi-IN',
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kisanstatus.com' },
      { '@type': 'ListItem', position: 2, name: 'Beneficiary List', item: 'https://kisanstatus.com/beneficiary-list' },
      { '@type': 'ListItem', position: 3, name: s.name, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Hero */}
      <div className="bg-primary-600 py-10">
        <div className="container-site text-center max-w-3xl">
          <span className="inline-block bg-white/15 text-green-200 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            🌾 PM Kisan Beneficiary List
          </span>
          <h1 className="text-2xl md:text-4xl font-black text-white mb-3">
            PM Kisan Beneficiary List {s.name} 2026
          </h1>
          <p className="text-green-200 text-sm md:text-base max-w-2xl mx-auto">
            {s.name} ke {s.crop} farmers ke liye PM Kisan Samman Nidhi status check, village list download aur eKYC guide — {KIST_INFO.current} {KIST_INFO.currentDate} ko release ho chuki hai.
          </p>
        </div>
      </div>

      <div className="container-site py-10 max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500 mb-6 flex gap-1 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-700">Home</Link>
          <span>/</span>
          <Link href="/beneficiary-list" className="hover:text-green-700">Beneficiary List</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">{s.name}</span>
        </nav>

        {/* Quick Status Check CTA */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex-1">
            <p className="font-black text-green-900 text-base">⚡ {s.name} PM Kisan Status Check करें</p>
            <p className="text-xs text-green-700 mt-1">Aadhaar number se turant apna beneficiary status check karo</p>
          </div>
          <a
            href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-green-700 hover:bg-green-600 text-white font-black px-5 py-3 rounded-xl text-sm transition-colors"
          >
            Official Portal →
          </a>
        </div>

        {/* Main Article Content */}
        <article className="prose prose-sm max-w-none text-gray-700 leading-relaxed mb-8">
          <h2 className="text-lg font-black text-gray-900 mb-3">
            {s.name} Mein PM Kisan Status Kaise Check Karein?
          </h2>
          <p>{s.article}</p>
        </article>

        {/* Step-by-step box */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
          <h2 className="font-black text-gray-900 text-base mb-4">
            📋 {s.name} PM Kisan Village List — Step-by-Step
          </h2>
          <ol className="space-y-3">
            {[
              { step: '1', text: 'pmkisan.gov.in par jao → "Farmers Corner" section mein jao' },
              { step: '2', text: '"Beneficiary List" option click karo' },
              { step: '3', text: `State mein "${s.name}" select karo` },
              { step: '4', text: 'Apna District, Sub-District, Block aur Village select karo' },
              { step: '5', text: '"Get Report" click karo — aapke village ki poori list aayegi' },
            ].map(({ step, text }) => (
              <li key={step} className="flex gap-3 items-start">
                <span className="shrink-0 w-7 h-7 rounded-full bg-green-700 text-white text-xs font-black flex items-center justify-center">{step}</span>
                <span className="text-sm text-gray-700 pt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* eKYC Alert */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
          <p className="font-black text-amber-900 text-sm mb-1">⚠️ eKYC Mandatory Hai — Nahi Karaya To Kist Ruk Jayegi!</p>
          <p className="text-xs text-amber-800">
            {s.name} ke sabhi PM Kisan farmers ke liye eKYC zaroori hai. pmkisan.gov.in par OTP se ghar baithe karo, ya nearest CSC centre par jakar biometric eKYC karwao. PM Kisan helpline: <strong>155261</strong> / <strong>011-24300606</strong>
          </p>
        </div>

        {/* FAQ */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
          <h2 className="font-black text-gray-900 text-base mb-4">❓ {s.name} PM Kisan — Aksar Puche Jane Wale Sawal</h2>
          <div className="space-y-4">
            {[
              {
                q: `${s.name} mein PM Kisan ${KIST_INFO.current} kab aayi?`,
                a: `${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai. ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai.`,
              },
              {
                q: `${s.name} PM Kisan beneficiary list mein naam kaise check karein?`,
                a: `pmkisan.gov.in → Beneficiary List → ${s.name} → Apna District, Block, Village select karo → Get Report.`,
              },
              {
                q: 'Paisa nahi aaya to kya karein?',
                a: 'Bank account, Aadhaar seeding, NPCI mapping aur eKYC status check karo. PM Kisan helpline 155261 par call karo.',
              },
              {
                q: `${s.name} mein PM Kisan registration kahan hoga?`,
                a: 'Nearest CSC centre, Block Agriculture Officer, ya pmkisan.gov.in par self-registration kar sakte ho.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <p className="font-bold text-gray-900 text-sm mb-1">Q: {q}</p>
                <p className="text-xs text-gray-600">A: {a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Links */}
        <div className="p-5 bg-green-50 border border-green-200 rounded-2xl">
          <p className="font-black text-green-900 text-sm mb-3">📖 Related PM Kisan Guides</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { href: '/articles/pm-kisan-ekyc-online-2026', l: '🔐 eKYC Guide' },
              { href: '/articles/pm-kisan-23vi-kist-2026-status-check', l: '📅 23vi Kist Status' },
              { href: '/articles/pm-kisan-payment-failed-status-2026', l: '💸 Payment Fix' },
              { href: '/calculator/installment-tracker', l: '📆 Installment Tracker' },
              { href: '/articles/pm-kisan-registration-online-2026', l: '📝 Registration' },
              { href: '/calculator/pm-kisan-benefit', l: '🌾 Benefit Calculator' },
            ].map(({ href, l }) => (
              <Link
                key={href}
                href={href}
                className="text-xs px-3 py-2 bg-white border border-green-200 text-green-800 rounded-xl hover:bg-green-700 hover:text-white transition-colors font-medium text-center"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(stateData).map((state) => ({ state }));
}