/**
 * Beneficiary List by State — /beneficiary-list/[state]
 * Next.js 15 compatible + Dynamic kist info + All 36 states/UTs
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Dynamic kist info — current date ke hisaab se auto-update
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

// All 37 states/UTs ka data
const stateData: Record<string, {
  name: string; slug: string; crop: string; article: string; keywords: string[];
}> = {
  // ── ORIGINAL 29 STATES ──────────────────────────────────────────────────
  'andhra-pradesh': { name: 'Andhra Pradesh', slug: 'andhra-pradesh', crop: 'rice, tobacco & aquaculture', article: `Andhra Pradesh is one of India's leading agricultural states, known for its rice cultivation in the fertile Krishna and Godavari river delta regions. Rice farmers in AP are among the primary agrarian welfare scheme beneficiaries with over 50 lakh registered cultivators. To check cultivator benefit program status in Andhra Pradesh 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx and enter your biometric credential number. The AP state government processes beneficiary verification through the AP Land Records system. For Andhra Pradesh scheme village roster download, visit the official portal and select your district, mandal, and village. The YSR Rythu Bharosa scheme works alongside the central program to provide additional support to AP farmers. Tobacco and sugarcane cultivators with cultivable land are also eligible. Agrarian welfare tranche ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai; ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai. Digital verification mandatory — complete at pmkisan.gov.in or nearest CSC centre.`, keywords: ['agrarian welfare scheme andhra pradesh 2026', 'andhra pradesh cultivator benefit roster', 'ap scheme installment 2026', 'scheme andhra pradesh village roster', 'program ap farmer list download'] },
  'arunachal-pradesh': { name: 'Arunachal Pradesh', slug: 'arunachal-pradesh', crop: 'rice, maize & horticulture', article: `Arunachal Pradesh has a predominantly tribal farming community practicing traditional rice cultivation on terraced hillside fields. Agrarian welfare support has been significant for cultivators in remote districts like Tawang, West Siang, and Papum Pare. To check cultivator benefit status Arunachal Pradesh 2026, visit pmkisan.gov.in and enter your biometric credential number. Tribal farmers with land rights under community ownership may need special documentation for program registration. The state Agriculture Department in Itanagar assists with enrollment for cultivators in remote areas without internet. For Arunachal Pradesh scheme beneficiary roster, select your district and block. Many Arunachal cultivators also grow maize, millet, and horticulture crops like apple and kiwi. Digital verification for Arunachal Pradesh farmers can be done at CSC centres in district headquarters. Program helpline 155261 provides regional language support.`, keywords: ['agrarian welfare arunachal pradesh 2026', 'arunachal pradesh cultivator benefit roster', 'scheme status check arunachal 2026', 'arunachal pradesh farmer roster program', 'program beneficiary arunachal pradesh'] },
  'assam': { name: 'Assam', slug: 'assam', crop: 'rice, tea & jute', article: `Assam is famous for its tea gardens and the fertile Brahmaputra river valley that supports extensive rice cultivation. Small and marginal rice cultivators in Assam's flood plains are key agrarian welfare scheme beneficiaries. Agrarian welfare tranche ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai — over 30 lakh Assam program beneficiaries ko fayda hua. To check cultivator benefit status Assam 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx with your biometric credential number. Assam farmers face unique challenges due to annual flooding affecting land records. Assam government maintains digital land records through the Dharitree portal linked to the central program. For Assam scheme village beneficiary roster, select your district and revenue circle. Jute farmers in the Brahmaputra plains are eligible if land is in their name. Contact Assam Agriculture helpline for enrollment assistance.`, keywords: ['agrarian welfare status assam 2026', 'assam cultivator benefit roster 2026', 'scheme assam farmer roster download', 'assam cultivator support village roster', 'program installment assam 2026'] },
  'bihar': { name: 'Bihar', slug: 'bihar', crop: 'wheat, rice & maize', article: `Bihar is one of India's most agriculture-dependent states with millions of small and marginal cultivators growing wheat, rice, and maize in the fertile Gangetic plains. Agrarian welfare support is extremely important for Bihar farmers — over 80 lakh registered beneficiaries, one of India's highest. To check cultivator benefit status Bihar 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Bihar farmers can check their village-wise beneficiary roster by selecting district, block, and panchayat on the official portal. Common issues include land records fragmentation and joint family ownership disputes. Bihar government maintains BHUMIJANKARI land record portal for verification. For scheme new enrollment in Bihar, visit your Block Agriculture Officer or CSC centre. Digital verification can be done at any CSC in Bihar. Agrarian welfare tranche ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai; ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai. Contact Bihar Agriculture Department Patna for payment disputes.`, keywords: ['agrarian welfare status bihar 2026', 'bihar cultivator benefit roster', 'scheme bihar village roster download', 'bihar cultivator support 2026', 'program installment status bihar'] },
  'chhattisgarh': { name: 'Chhattisgarh', slug: 'chhattisgarh', crop: 'rice & pulses', article: `Chhattisgarh is known as the "Rice Bowl of India" with vast paddy cultivation across the Chhattisgarh plain. Small cultivators growing rice, pulses, and oilseeds in Chhattisgarh are significant agrarian welfare beneficiaries with over 40 lakh registered farmers. To check cultivator benefit status Chhattisgarh 2026, visit pmkisan.gov.in with your biometric credential. Chhattisgarh maintains Bhuiya land records portal linked to the central program for land verification. For Chhattisgarh scheme village beneficiary roster, visit the official portal and select district, tehsil, and village. Tribal farmers in Bastar, Surguja, and other scheduled areas have special provisions for land ownership. The Rajiv Gandhi Kisan Nyay Yojana works alongside the central program for additional income support. Agrarian welfare tranche ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai; ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai. Digital verification at CSC centres available state-wide.`, keywords: ['agrarian welfare chhattisgarh 2026', 'chhattisgarh cultivator benefit roster', 'scheme status chhattisgarh', 'chhattisgarh cultivator support village roster', 'program cg farmer roster'] },
  'goa': { name: 'Goa', slug: 'goa', crop: 'rice, coconut & cashew', article: `Goa's agricultural landscape includes unique khazan (coastal paddy fields), cashew plantations, and coconut groves. Small cultivators here are eligible for agrarian welfare support if they own cultivable agricultural land. To check cultivator benefit status Goa 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx with your biometric credential. Goa maintains Form I and XIV land records for agricultural land verification. For scheme beneficiary roster Goa, select your taluka and village on the official portal. Rice farmers growing traditional varieties and coconut cultivators with own land are eligible. The Goa Agriculture Department assists with program enrollment at block-level offices. Cashew and coconut cultivators with land holdings under 2 hectares are typical program beneficiaries. Digital verification at CSC centres in Panaji and major towns. Contact Goa Agriculture Department for enrollment issues.`, keywords: ['agrarian welfare goa 2026', 'goa cultivator benefit roster', 'scheme status goa farmer', 'goa cultivator support 2026', 'program goa village roster'] },
  'gujarat': { name: 'Gujarat', slug: 'gujarat', crop: 'cotton, groundnut & wheat', article: `Gujarat is a leading agricultural state with significant production of cotton, groundnut, wheat, and castor. Cotton farmers in Saurashtra and groundnut cultivators in South Gujarat are major agrarian welfare beneficiaries — over 50 lakh registered farmers. To check cultivator benefit status Gujarat 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Gujarat maintains AnyRor (Any Records of Rights) system for land record verification linked to the central program. For Gujarat scheme village beneficiary roster, select district, taluka, and village. The Gujarat government integrated the program with the IKHEDUT portal for easier enrollment. Digital verification at CSC centres is available across Gujarat including remote Kutch region. Agrarian welfare tranche ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai; ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai. Saurashtra cotton and castor cultivators depend heavily on the ₹6000 annual income support.`, keywords: ['agrarian welfare gujarat 2026', 'gujarat cultivator benefit roster', 'scheme status gujarat', 'gujarat cultivator support village roster', 'program gj farmer roster download'] },
  'haryana': { name: 'Haryana', slug: 'haryana', crop: 'wheat, rice & sugarcane', article: `Haryana is part of India's Green Revolution belt with highly productive wheat and rice cultivation. Small and marginal cultivators in Haryana with less than 2 hectares of land are eligible for agrarian welfare support. To check cultivator benefit status Haryana 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Haryana maintains Jamabandi land records portal linked to program verification. For Haryana scheme village beneficiary roster, select district, tehsil, and village. Small farmers in Mewat (Nuh), Sirsa, and Mahendragarh are significant program recipients. The Haryana Meri Fasal Mera Byora scheme works alongside the central program. Note: Haryana farmers who are government employees or income tax payers are ineligible. Digital verification is mandatory — complete at pmkisan.gov.in or nearest CSC centre in Haryana.`, keywords: ['agrarian welfare haryana 2026', 'haryana cultivator benefit roster', 'scheme status haryana', 'haryana cultivator support village roster', 'program hr farmer roster'] },
  'himachal-pradesh': { name: 'Himachal Pradesh', slug: 'himachal-pradesh', crop: 'apple, wheat & maize', article: `Himachal Pradesh's agriculture is dominated by apple orchards in Shimla, Kullu, and Kinnaur, along with wheat and maize cultivation on terraced mountain fields. Small apple and fruit cultivators in HP who own land are eligible for agrarian welfare support. To check cultivator benefit status Himachal Pradesh 2026, visit pmkisan.gov.in with biometric credential. HP maintains Himris land records portal for verification. For HP scheme village beneficiary roster, select district, tehsil, and village. Farmers in remote tribal areas like Lahaul-Spiti and Kinnaur may need to visit district Agriculture offices for program enrollment. The ₹2000 per tranche helps hill cultivators cover input costs for apple cultivation. Digital verification available at CSC centres in major HP towns. Contact HP Agriculture Department Shimla for enrollment support.`, keywords: ['agrarian welfare himachal pradesh 2026', 'hp cultivator benefit roster', 'scheme status himachal pradesh', 'himachal pradesh cultivator support 2026', 'program hp farmer roster'] },
  'jharkhand': { name: 'Jharkhand', slug: 'jharkhand', crop: 'rice, pulses & vegetables', article: `Jharkhand has a large tribal farming population practicing rain-fed upland rice cultivation along with pulses and vegetables. Tribal cultivators in Ranchi, Hazaribagh, Dumka, and other districts are significant agrarian welfare beneficiaries. To check cultivator benefit status Jharkhand 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Jharkhand tribal farmers with land rights under Chotanagpur Tenancy Act have special land documentation provisions. For Jharkhand scheme village beneficiary roster, select district, block, and panchayat. Jharkhand uses Jharbhoomi land records portal for program land verification — over 30 lakh registered beneficiaries. Women cultivators in Jharkhand with land in their name have increased program registrations. Digital verification centres available at CSC and Pragya Kendra offices across the state. Program helpline 155261 available.`, keywords: ['agrarian welfare jharkhand 2026', 'jharkhand cultivator benefit roster', 'scheme status jharkhand', 'jharkhand cultivator support village roster', 'program jh farmer roster'] },
  'karnataka': { name: 'Karnataka', slug: 'karnataka', crop: 'sugarcane, cotton & ragi', article: `Karnataka has a diverse agricultural sector with sugarcane in Belagavi, cotton in Dharwad, and ragi on the Deccan plateau. Small and marginal cultivators across all 31 districts are eligible for agrarian welfare support — over 50 lakh registered. To check cultivator benefit status Karnataka 2026, visit pmkisan.gov.in with biometric credential or mobile number. Karnataka uses Bhoomi RTC (Record of Rights, Tenancy and Crops) for land verification in the program. For Karnataka scheme village beneficiary roster, select district, taluk, and hobli. The Raitha Siri state scheme provides additional support alongside the central program. Farmers in North Karnataka's drought-prone regions particularly depend on ₹6000 annual program benefit. Digital verification available online or at CSC centres across Karnataka. Agrarian welfare tranche ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai; ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai.`, keywords: ['agrarian welfare karnataka 2026', 'karnataka cultivator benefit roster', 'scheme status karnataka', 'karnataka cultivator support village roster', 'program ka farmer roster download'] },
  'kerala': { name: 'Kerala', slug: 'kerala', crop: 'rice, coconut & rubber', article: `Kerala's agricultural landscape includes rice cultivation in Kuttanad (the "Rice Bowl of Kerala"), coconut groves, rubber plantations, and spice gardens. Small landholding cultivators in Kerala are eligible for agrarian welfare support if they own agricultural land. To check cultivator benefit status Kerala 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Kerala uses land tax receipts and possession certificates for program verification. For Kerala scheme village beneficiary roster, select district, taluk, and village. Note: Many Kerala farmers have land less than 0.5 hectares due to fragmentation — all are eligible regardless of size. Kuttanad rice cultivators, small coconut farmers, and pepper/cardamom growers with land are typical program beneficiaries. Digital verification at Akshaya CSC centres is available across all 14 districts. Program helpline: 155261.`, keywords: ['agrarian welfare kerala 2026', 'kerala cultivator benefit roster', 'scheme status kerala', 'kerala cultivator support 2026', 'program kl farmer roster'] },
  'madhya-pradesh': { name: 'Madhya Pradesh', slug: 'madhya-pradesh', crop: 'soybean, wheat & pulses', article: `Madhya Pradesh is India's largest state by area with one of the largest farming populations. Soybean cultivators on the Malwa plateau, wheat growers in Chambal and Bundelkhand, and pulse growers are major agrarian welfare beneficiaries — over 70 lakh registered, one of India's highest. To check cultivator benefit status Madhya Pradesh 2026, visit pmkisan.gov.in with biometric credential. MP uses Bhu-Abhilekh Naksha land records portal for program verification. For MP scheme village beneficiary roster, select district, tehsil, and village. The state government runs Mukhyamantri Kisan Kalyan Yojana to provide ₹4000 additional per year separately. Tribal farmers in Jhabua, Alirajpur, and Balaghat need tribal land documentation. Digital verification widely available at MP Online Kiosks and CSC centres across all 52 districts.`, keywords: ['agrarian welfare madhya pradesh 2026', 'mp cultivator benefit roster', 'scheme status mp 2026', 'madhya pradesh cultivator support village roster', 'program mp farmer roster download'] },
  'maharashtra': { name: 'Maharashtra', slug: 'maharashtra', crop: 'sugarcane, cotton & onion', article: `Maharashtra is India's second-largest agricultural producer with cotton farms in Vidarbha, onion cultivation in Nashik, sugarcane in Western Maharashtra, and rice in Konkan. Over 1 crore registered program cultivators in Maharashtra — one of India's highest. To check agrarian welfare status Maharashtra 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Maharashtra uses Mahabhumi land records portal (mahabhumi.gov.in) — farmers can check 7/12 (Satbara Utara) extract online for program land seeding. For Maharashtra scheme village beneficiary roster, select district, taluka, and village. Vidarbha cotton cultivators facing crop failures particularly benefit from ₹6000 annual support. The state Namo Shetkari Mahasanman Nidhi scheme provides additional ₹6000 alongside the central program. Digital verification available at Maha-e-Seva Kendra across Maharashtra.`, keywords: ['agrarian welfare maharashtra 2026', 'maharashtra cultivator benefit roster', 'scheme status maharashtra', 'maharashtra cultivator support village roster', 'program mh farmer roster download'] },
  'manipur': { name: 'Manipur', slug: 'manipur', crop: 'rice, vegetables & horticulture', article: `Manipur's farming is centered in the Imphal Valley where rice is the dominant crop, supplemented by vegetables, fruits, and flowers. Small rice cultivators in Imphal East, Imphal West, Thoubal, and Bishnupur are agrarian welfare beneficiaries. To check cultivator benefit status Manipur 2026, visit pmkisan.gov.in with your biometric credential. Manipur uses state land revenue records (Patta documents) for program verification. For Manipur scheme beneficiary roster, select your district and gram panchayat. Hill district farmers in Churachandpur and Ukhrul face additional enrollment challenges due to customary land ownership. Black rice (Chakhao) and organic vegetable cultivators with own land are eligible. Digital verification at CSC centres available in major Manipur towns. Contact Manipur Agriculture Department Imphal for assistance.`, keywords: ['agrarian welfare manipur 2026', 'manipur cultivator benefit roster', 'scheme status manipur', 'manipur cultivator support 2026', 'program mn farmer roster'] },
  'meghalaya': { name: 'Meghalaya', slug: 'meghalaya', crop: 'rice, ginger & turmeric', article: `Meghalaya's tribal farming communities grow rice, ginger, turmeric, and black pepper on hilly terrain using traditional agroforestry methods. Small cultivators in East Khasi Hills, West Khasi Hills, and Jaintia Hills are agrarian welfare beneficiaries. To check cultivator benefit status Meghalaya 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Meghalaya has unique matrilineal land ownership customs — women cultivators here have relatively better land documentation for the program. For Meghalaya scheme beneficiary roster, select your district and community block. Ginger and turmeric spice cultivators with recorded land are eligible for agrarian welfare support. Digital verification for Meghalaya farmers at CSC centres in Shillong and district headquarters. Program helpline: 155261 for enrollment support.`, keywords: ['agrarian welfare meghalaya 2026', 'meghalaya cultivator benefit roster', 'scheme status meghalaya', 'meghalaya cultivator support 2026', 'program ml farmer roster'] },
  'mizoram': { name: 'Mizoram', slug: 'mizoram', crop: 'rice, ginger & vegetables', article: `Mizoram's farmers are transitioning from traditional jhum (shifting) cultivation to settled terrace farming for rice, ginger, and vegetables. Small cultivators with settled land ownership in Aizawl, Lunglei, and Champhai are eligible for agrarian welfare support. To check cultivator benefit status Mizoram 2026, visit pmkisan.gov.in with biometric credential. Village land passes (LPC) serve as primary land ownership proof for the program in Mizoram. For Mizoram scheme beneficiary roster, select district and RD block on the official portal. Ginger cultivation in Champhai and passion fruit farming are key activities eligible for agrarian welfare. Farmers with community-assigned land for permanent cultivation qualify. Digital verification at CSC centres in Aizawl and district towns. Contact Mizoram Agriculture Department for enrollment help.`, keywords: ['agrarian welfare mizoram 2026', 'mizoram cultivator benefit roster', 'scheme status mizoram', 'mizoram cultivator support 2026', 'program mz farmer roster'] },
  'nagaland': { name: 'Nagaland', slug: 'nagaland', crop: 'rice, maize & horticulture', article: `Nagaland's tribal farming communities grow rice, maize, and horticulture crops including pineapple and kiwi on terraced hill slopes. Small cultivators with settled land rights in Kohima, Dimapur, Wokha, and Mokokchung are eligible for agrarian welfare support. To check cultivator benefit status Nagaland 2026, visit pmkisan.gov.in with biometric credential. Nagaland tribal land ownership is governed by customary law — Land Commission certificates help in program enrollment. For Nagaland scheme beneficiary roster, select district and block. Pineapple, kiwi, and large cardamom cultivators with registered land are eligible. Digital verification at CSC centres in Kohima and Dimapur. Program helpline 155261 for Nagaland farmers.`, keywords: ['agrarian welfare nagaland 2026', 'nagaland cultivator benefit roster', 'scheme status nagaland', 'nagaland cultivator support 2026', 'program nl farmer roster'] },
  'odisha': { name: 'Odisha', slug: 'odisha', crop: 'rice, pulses & oilseeds', article: `Odisha is a major rice-producing state with cultivators in the fertile coastal plains and inland river valleys. Over 40 lakh agrarian welfare registered farmers in Odisha benefit from the ₹6000 annual scheme. To check cultivator benefit status Odisha 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx with biometric credential. Odisha uses Bhulekh land records portal for program land seeding verification. For Odisha scheme village beneficiary roster, select district, tehsil, and village. Tribal cultivators in Koraput, Malkangiri, and Rayagada with patta land are eligible. The KALIA (Krushak Assistance for Livelihood and Income Augmentation) scheme works alongside the central program. Farmers can do digital verification at CSC centres available across all 30 districts. Agrarian welfare tranche ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai; ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai.`, keywords: ['agrarian welfare odisha 2026', 'odisha cultivator benefit roster', 'scheme status odisha', 'odisha cultivator support village roster', 'program od farmer roster download'] },
  'punjab': { name: 'Punjab', slug: 'punjab', crop: 'wheat, rice & maize', article: `Punjab is India's agricultural powerhouse — the "Granary of India" — with highly productive wheat and rice cultivation. Small and marginal cultivators with less than 2 hectares are eligible for agrarian welfare support despite Punjab's large farm size average. To check cultivator benefit status Punjab 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Punjab uses Jamabandi land records for program verification. For Punjab scheme village beneficiary roster, select district, tehsil, and village. Note: Many Punjab farmers are excluded due to income tax payment or government employment — check eligibility carefully. Punjab government's Ghar Ghar Rozgar portal may have integration with the central program. Digital verification at any CSC in Punjab. Program helpline: 155261 / 011-24300606.`, keywords: ['agrarian welfare punjab 2026', 'punjab cultivator benefit roster', 'scheme status punjab', 'punjab cultivator support village roster', 'program pb farmer roster'] },
  'rajasthan': { name: 'Rajasthan', slug: 'rajasthan', crop: 'bajra, wheat & mustard', article: `Rajasthan is India's largest state with vast arid and semi-arid agricultural zones growing bajra, wheat, mustard, and pulses. Small cultivators in Rajasthan's drought-prone districts like Barmer, Jaisalmer, and Bikaner depend heavily on agrarian welfare support — over 65 lakh registered beneficiaries. To check cultivator benefit status Rajasthan 2026, visit pmkisan.gov.in with biometric credential. Rajasthan uses Apna Khata (E-Dharti) land records portal for program verification. For Rajasthan scheme village beneficiary roster, select district, tehsil, and village. Bajra and mustard cultivators in the Thar desert belt are primary beneficiaries. Digital verification available at e-Mitra CSC centres across all 50 districts. Agrarian welfare tranche ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai; ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai.`, keywords: ['agrarian welfare rajasthan 2026', 'rajasthan cultivator benefit roster', 'scheme status rajasthan', 'rajasthan cultivator support village roster', 'program rj farmer roster download'] },
  'sikkim': { name: 'Sikkim', slug: 'sikkim', crop: 'cardamom, ginger & rice', article: `Sikkim is India's first fully organic state, known for large cardamom cultivation and high-altitude rice farming. Small cultivators with land holdings in East, West, North, and South Sikkim districts are eligible for agrarian welfare support. To check cultivator benefit status Sikkim 2026, visit pmkisan.gov.in with biometric credential. Sikkim uses LPC (Land Possession Certificate) for program land verification. For Sikkim scheme beneficiary roster, select district and gram panchayat unit. Organic cardamom and ginger cultivators with own land are eligible. The Sikkim Organic Mission works alongside the central program to support organic transition costs. Digital verification at CSC centres in Gangtok and district towns. Program helpline: 155261.`, keywords: ['agrarian welfare sikkim 2026', 'sikkim cultivator benefit roster', 'scheme status sikkim', 'sikkim cultivator support 2026', 'program sk farmer roster'] },
  'tamil-nadu': { name: 'Tamil Nadu', slug: 'tamil-nadu', crop: 'rice, banana & sugarcane', article: `Tamil Nadu has a diverse agricultural sector with rice cultivation in the Cauvery delta, banana plantations in Trichy and Erode, and sugarcane in Coimbatore. Over 40 lakh agrarian welfare registered cultivators in Tamil Nadu. To check cultivator benefit status Tamil Nadu 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Tamil Nadu uses Patta (land ownership certificate) for program verification — available at Village Administrative Officer offices. For Tamil Nadu scheme village beneficiary roster, select district, taluk, and village. Note: Tamil Nadu farmers also receive CM Uzhavar Pathukappu Thittam additional support. Banana and mango cultivators with own land in the Vaigai and Cauvery belt are eligible. Digital verification at CSC and Common Service Centres statewide. Agrarian welfare tranche ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai.`, keywords: ['agrarian welfare tamil nadu 2026', 'tamil nadu cultivator benefit roster', 'scheme status tamil nadu', 'tamil nadu cultivator support village roster', 'program tn farmer roster download'] },
  'telangana': { name: 'Telangana', slug: 'telangana', crop: 'rice, cotton & turmeric', article: `Telangana is a major rice and cotton producing state with the Godavari and Krishna river systems supporting irrigation. Over 35 lakh agrarian welfare registered cultivators in Telangana. To check cultivator benefit status Telangana 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. Telangana uses Dharani portal (dharani.telangana.gov.in) for land records linked to program verification. For Telangana scheme village beneficiary roster, select district, mandal, and village. The Rythu Bandhu state scheme (₹10,000 per acre per year) works alongside the central program — Telangana cultivators can receive both benefits. Turmeric cultivators in Nizamabad and cotton farmers in Warangal are key program recipients. Digital verification at Mee Seva centres available across all 33 districts.`, keywords: ['agrarian welfare telangana 2026', 'telangana cultivator benefit roster', 'scheme status telangana', 'telangana cultivator support village roster', 'program ts farmer roster download'] },
  'tripura': { name: 'Tripura', slug: 'tripura', crop: 'rice, rubber & pineapple', article: `Tripura's agriculture includes rice cultivation in river valleys, rubber plantations in Gomati and Khowai districts, and pineapple farming. Small cultivators in Tripura's eight districts are eligible for agrarian welfare support. To check cultivator benefit status Tripura 2026, visit pmkisan.gov.in with biometric credential. Tripura uses Bhu-Sanjog land records system for program verification. For Tripura scheme beneficiary roster, select district and block. Rubber smallholders with less than 2 hectares of plantation land are eligible for the central program. Pineapple cultivators and bamboo growers with registered land also qualify. Digital verification at CSC centres available across all 8 districts. Contact Tripura Agriculture Department Agartala for enrollment support.`, keywords: ['agrarian welfare tripura 2026', 'tripura cultivator benefit roster', 'scheme status tripura', 'tripura cultivator support 2026', 'program tr farmer roster'] },
  'uttar-pradesh': { name: 'Uttar Pradesh', slug: 'uttar-pradesh', crop: 'wheat, sugarcane & rice', article: `Uttar Pradesh is India's most populous state and has the highest number of agrarian welfare beneficiaries — over 2.5 crore registered cultivators. Wheat farmers in the western plains, sugarcane growers in the Terai belt, and rice cultivators in eastern UP are all major beneficiaries. To check cultivator benefit status UP 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx and enter your biometric credential number. UP uses Bhulekh (upbhulekh.gov.in) land records portal for program land seeding verification — farmers can check Khatauni online. For UP scheme village beneficiary roster, select your district, tehsil, and gram panchayat. Small sugarcane cultivators in Muzaffarnagar, Meerut, and Lakhimpur Kheri heavily rely on ₹6000 annual program benefit. Agrarian welfare tranche ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai; ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai. Digital verification mandatory — complete at pmkisan.gov.in or nearest Jan Seva Kendra in UP.`, keywords: ['agrarian welfare up 2026', 'uttar pradesh cultivator benefit roster', 'scheme status uttar pradesh 2026', 'up scheme village roster download', 'program up farmer roster 2026'] },
  'uttarakhand': { name: 'Uttarakhand', slug: 'uttarakhand', crop: 'rice, wheat & horticulture', article: `Uttarakhand's cultivators grow rice and wheat on terraced mountain fields alongside horticulture including apple, pear, and citrus fruits. Small hill farmers in Pauri, Tehri, Almora, Pithoragarh, and other districts are eligible for agrarian welfare support. To check cultivator benefit status Uttarakhand 2026, visit pmkisan.gov.in with biometric credential. Uttarakhand uses Bhulekh UK land records for program verification. For Uttarakhand scheme village beneficiary roster, select district, tehsil, and village. Hill cultivators with small landholdings (sometimes less than 0.1 hectare) are eligible. Digital verification available at CSC Lok Seva Kendras across all 13 districts. Contact Uttarakhand Agriculture Department Dehradun for support.`, keywords: ['agrarian welfare uttarakhand 2026', 'uttarakhand cultivator benefit roster', 'scheme status uttarakhand', 'uttarakhand cultivator support 2026', 'program uk farmer roster'] },
  'west-bengal': { name: 'West Bengal', slug: 'west-bengal', crop: 'rice, jute & potato', article: `West Bengal is a leading producer of rice, jute, potato, and vegetables with millions of small and marginal cultivators in the Gangetic delta and Rarh regions. To check agrarian welfare status West Bengal 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx. West Bengal uses Banglarbhumi land records portal for verification. Note: West Bengal initially had delays in program implementation but most cultivators are now registered. For WB scheme village beneficiary roster, select district, block, and gram panchayat. Jute cultivators in Murshidabad and Nadia, potato growers in Hooghly and Burdwan, and rice farmers across the state are key beneficiaries — over 70 lakh registered. Digital verification at Tathya Mitra Kendra CSC centres available statewide. Program helpline: 155261.`, keywords: ['agrarian welfare west bengal 2026', 'wb cultivator benefit roster', 'scheme status west bengal', 'west bengal cultivator support village roster', 'program wb farmer roster download'] },

  // ── NEWLY ADDED 8 UTs ───────────────────────────────────────────────────
  'delhi': { name: 'Delhi', slug: 'delhi', crop: 'vegetables, dairy & horticulture', article: `Delhi has a significant urban and peri-urban farming community growing vegetables, dairy farming, and horticulture on the city's outskirts. Small cultivators in Delhi's rural districts like Najafgarh, Alipur, and Bawana are eligible for agrarian welfare support. To check cultivator benefit status Delhi 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx with your biometric credential number. Delhi government maintains land records through the Revenue Department portal linked to program verification. For Delhi scheme beneficiary roster, select your district and village. Dairy cultivators with agricultural land and vegetable growers in peri-urban areas are typical program beneficiaries. Digital verification available at CSC centres across all Delhi districts. Agrarian welfare tranche ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai; ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai.`, keywords: ['agrarian welfare delhi 2026', 'delhi cultivator benefit roster', 'scheme status delhi', 'delhi cultivator support 2026', 'program dl farmer roster'] },
  'jammu-kashmir': { name: 'Jammu & Kashmir', slug: 'jammu-kashmir', crop: 'apple, saffron & rice', article: `Jammu & Kashmir is known for apple orchards in Kashmir Valley, saffron cultivation in Pampore, and rice farming in Jammu region. Small cultivators including apple growers, saffron cultivators, and paddy farmers are eligible for agrarian welfare support. To check cultivator benefit status J&K 2026, visit pmkisan.gov.in with biometric credential. J&K uses land revenue records for program verification. For J&K scheme beneficiary roster, select your district and tehsil. Apple cultivators in Shopian, Kulgam, and Baramulla are major beneficiaries. Saffron farmers in Pulwama with registered land qualify. Digital verification at CSC centres available across J&K. Program helpline: 155261.`, keywords: ['agrarian welfare jammu kashmir 2026', 'jk cultivator benefit roster', 'scheme status jk', 'jammu kashmir cultivator support 2026', 'program jk farmer roster'] },
  'ladakh': { name: 'Ladakh', slug: 'ladakh', crop: 'barley, apricot & peas', article: `Ladakh's unique high-altitude agriculture includes barley, apricot, and green pea cultivation in Leh and Kargil districts. Small cultivators in this cold desert region are eligible for agrarian welfare support. To check cultivator benefit status Ladakh 2026, visit pmkisan.gov.in with biometric credential. Ladakh uses UT land records system for program verification. For Ladakh scheme beneficiary roster, select your district and block. Apricot cultivators in Kargil and barley growers in Leh are key beneficiaries. The ₹6000 annual support helps cover high input costs in extreme climate. Digital verification at CSC centres in Leh and Kargil. Program helpline: 155261.`, keywords: ['agrarian welfare ladakh 2026', 'ladakh cultivator benefit roster', 'scheme status ladakh', 'ladakh cultivator support 2026', 'program la farmer roster'] },
  'puducherry': { name: 'Puducherry', slug: 'puducherry', crop: 'rice, sugarcane & coconut', article: `Puducherry's agricultural landscape includes rice cultivation, sugarcane, and coconut groves across its four regions. Small cultivators in Puducherry, Karaikal, Mahe, and Yanam are eligible for agrarian welfare support. To check cultivator benefit status Puducherry 2026, visit pmkisan.gov.in/BeneficiaryStatus.aspx with biometric credential. Puducherry uses e-District land records for program verification. For Puducherry scheme beneficiary roster, select your region and commune. Rice cultivators in Karaikal and coconut growers in Puducherry region are typical program beneficiaries. Digital verification at CSC centres available across all regions. Program helpline: 155261.`, keywords: ['agrarian welfare puducherry 2026', 'puducherry cultivator benefit roster', 'scheme status puducherry', 'puducherry cultivator support 2026', 'program py farmer roster'] },
  'andaman-nicobar': { name: 'Andaman & Nicobar Islands', slug: 'andaman-nicobar', crop: 'coconut, arecanut & spices', article: `Andaman & Nicobar Islands have unique tropical agriculture with coconut, arecanut, banana, and spice cultivation. Small cultivators in South Andaman, North Andaman, and Nicobar districts are eligible for agrarian welfare support. To check cultivator benefit status A&N 2026, visit pmkisan.gov.in with biometric credential. A&N uses UT land records for program verification. For A&N scheme beneficiary roster, select your district and tehsil. Coconut and arecanut cultivators with own land are primary beneficiaries. Tribal farmers in Nicobar with customary land rights may need special documentation. Digital verification at CSC centres in Port Blair and major islands. Program helpline: 155261.`, keywords: ['agrarian welfare andaman nicobar 2026', 'andaman cultivator benefit roster', 'scheme status andaman', 'andaman cultivator support 2026', 'program an farmer roster'] },
  'chandigarh': { name: 'Chandigarh', slug: 'chandigarh', crop: 'wheat, vegetables & dairy', article: `Chandigarh has limited but productive peri-urban agriculture with wheat, vegetable farming, and dairy units on the city's outskirts. Small cultivators in Chandigarh's rural sectors are eligible for agrarian welfare support. To check cultivator benefit status Chandigarh 2026, visit pmkisan.gov.in with biometric credential. Chandigarh uses UT Administration land records for program verification. For Chandigarh scheme beneficiary roster, select your sector/village. Vegetable cultivators supplying to city markets and dairy farmers with agricultural land are typical program beneficiaries. Digital verification at CSC centres in Chandigarh. Program helpline: 155261.`, keywords: ['agrarian welfare chandigarh 2026', 'chandigarh cultivator benefit roster', 'scheme status chandigarh', 'chandigarh cultivator support 2026', 'program ch farmer roster'] },
  'dadra-nagar-haveli': { name: 'Dadra & Nagar Haveli and Daman & Diu', slug: 'dadra-nagar-haveli', crop: 'rice, ragi & mango', article: `Dadra & Nagar Haveli and Daman & Diu have tribal-dominated agriculture with rice, ragi, and mango cultivation. Small tribal cultivators in Silvassa, Daman, and Diu are eligible for agrarian welfare support. To check cultivator benefit status DNDD 2026, visit pmkisan.gov.in with biometric credential. DNDD uses UT land records for program verification. For DNDD scheme beneficiary roster, select your taluka and village. Tribal farmers with forest land rights and mango orchard owners are key beneficiaries. Digital verification at CSC centres in Silvassa and Daman. Program helpline: 155261.`, keywords: ['agrarian welfare dadra nagar haveli 2026', 'dnh cultivator benefit roster', 'scheme status dnh', 'dnhd cultivator support 2026', 'program dn farmer roster'] },
  'lakshadweep': { name: 'Lakshadweep', slug: 'lakshadweep', crop: 'coconut, tuna fish & coir', article: `Lakshadweep's economy is based on coconut cultivation, tuna fishing, and coir production. Coconut cultivators with own land in Lakshadweep islands are eligible for agrarian welfare support. To check cultivator benefit status Lakshadweep 2026, visit pmkisan.gov.in with biometric credential. Lakshadweep uses UT Administration land records for program verification. For Lakshadweep scheme beneficiary roster, select your island. Coconut cultivators across all 10 inhabited islands are primary beneficiaries. The ₹6000 annual support helps island farmers cope with high transportation costs. Digital verification at CSC centres in Kavaratti and major islands. Program helpline: 155261.`, keywords: ['agrarian welfare lakshadweep 2026', 'lakshadweep cultivator benefit roster', 'scheme status lakshadweep', 'lakshadweep cultivator support 2026', 'program ld farmer roster'] },
};

// Next.js 15 compatible — params as Promise
export async function generateMetadata(
  { params }: { params: Promise<{ state: string }> }
): Promise<Metadata> {
  const { state } = await params;
  const s = stateData[state];
  if (!s) return { title: 'State Not Found' };

  const title = `Agrarian Welfare Beneficiary Roster ${s.name} 2026 — Village List, Status Check & Digital Verification`;
  const description = `${s.name} mein agrarian welfare scheme beneficiary roster 2026 check karo. ${s.name} ke ${s.crop} cultivators ke liye tranche status, village roster download, aur digital verification guide. ${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai.`;
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
        url: `https://kisanstatus.com/images/agrarian-welfare-beneficiary-roster-2026.webp`,
        width: 1200,
        height: 630,
        alt: `Agrarian Welfare ${s.name} Beneficiary Roster 2026`
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://kisanstatus.com/images/agrarian-welfare-beneficiary-roster-2026.webp`],
    },
  };
}

// Next.js 15 compatible — params as Promise
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
    headline: `Agrarian Welfare Beneficiary Roster ${s.name} 2026 — Village List & Status Check`,
    description: `${s.name} mein agrarian welfare scheme beneficiary roster 2026, village roster download, tranche status check, aur digital verification guide.`,
    url,
    datePublished: publishDate,
    dateModified: modifiedDate,
    author: { '@type': 'Organization', name: 'KisanStatus Team', url: 'https://kisanstatus.com/about' },
    publisher: {
      '@type': 'Organization',
      name: 'KisanStatus.com',
      url: 'https://kisanstatus.com',
      logo: { '@type': 'ImageObject', url: 'https://kisanstatus.com/logo.webp' },
    },
    image: { '@type': 'ImageObject', url: 'https://kisanstatus.com/images/agrarian-welfare-beneficiary-roster-2026.webp', width: 1200, height: 630 },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: s.keywords.join(', '),
    articleSection: 'Agrarian Welfare Scheme',
    inLanguage: 'hi-IN',
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kisanstatus.com' },
      { '@type': 'ListItem', position: 2, name: 'Beneficiary Roster', item: 'https://kisanstatus.com/beneficiary-list' },
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
            🌾 Agrarian Welfare Beneficiary Roster
          </span>
          <h1 className="text-2xl md:text-4xl font-black text-white mb-3">
            Agrarian Welfare Beneficiary Roster {s.name} 2026
          </h1>
          <p className="text-green-200 text-sm md:text-base max-w-2xl mx-auto">
            {s.name} ke {s.crop} cultivators ke liye agrarian welfare scheme status check, village roster download aur digital verification guide — {KIST_INFO.current} {KIST_INFO.currentDate} ko release ho chuki hai.
          </p>
        </div>
      </div>

      <div className="container-site py-10 max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500 mb-6 flex gap-1 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-green-700">Home</Link>
          <span>/</span>
          <Link href="/beneficiary-list" className="hover:text-green-700">Beneficiary Roster</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">{s.name}</span>
        </nav>

        {/* Prominent Disclaimer Card — Top Priority */}
        <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-6 mb-8 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-3xl shrink-0" aria-hidden="true">⚠️</span>
            <div className="flex-1">
              <h2 className="font-black text-amber-900 text-base mb-2">
                Yeh Official Roster Nahi Hai
              </h2>
              <p className="text-sm text-amber-800 leading-relaxed">
                Apna naam sirf <strong>pmkisan.gov.in</strong> par check kar sakte ho. Hum wahan tak pahunchne mein help karte hain — seedha link neeche hai.
              </p>
            </div>
          </div>
          <a
            href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-700 hover:bg-green-600 text-white font-black px-5 py-4 rounded-xl text-sm transition-colors text-center shadow-md hover:shadow-lg"
          >
            ✅ Official Roster Check Karo → pmkisan.gov.in
          </a>
        </div>

        {/* Quick Status Check CTA */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex-1">
            <p className="font-black text-green-900 text-base">⚡ {s.name} Agrarian Welfare Status Check करें</p>
            <p className="text-xs text-green-700 mt-1">Biometric credential number se turant apna beneficiary status check karo</p>
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
            {s.name} Mein Agrarian Welfare Status Kaise Check Karein?
          </h2>
          <p>{s.article}</p>
        </article>

        {/* Step-by-step box */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
          <h2 className="font-black text-gray-900 text-base mb-4">
            📋 {s.name} Agrarian Welfare Village Roster — Step-by-Step
          </h2>
          <ol className="space-y-3">
            {[
              { step: '1', text: 'pmkisan.gov.in par jao → "Farmers Corner" section mein jao' },
              { step: '2', text: '"Beneficiary List" option click karo' },
              { step: '3', text: `State mein "${s.name}" select karo` },
              { step: '4', text: 'Apna District, Sub-District, Block aur Village select karo' },
              { step: '5', text: '"Get Report" click karo — aapke village ki poori roster aayegi' },
            ].map(({ step, text }) => (
              <li key={step} className="flex gap-3 items-start">
                <span className="shrink-0 w-7 h-7 rounded-full bg-green-700 text-white text-xs font-black flex items-center justify-center">{step}</span>
                <span className="text-sm text-gray-700 pt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Digital Verification Alert */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
          <p className="font-black text-amber-900 text-sm mb-1">⚠️ Digital Verification Mandatory Hai — Nahi Karaya To Tranche Ruk Jayegi!</p>
          <p className="text-xs text-amber-800">
            {s.name} ke sabhi agrarian welfare cultivators ke liye digital verification zaroori hai. pmkisan.gov.in par OTP se ghar baithe karo, ya nearest CSC centre par jakar biometric authentication karwao. Program helpline: <strong>155261</strong> / <strong>011-24300606</strong>
          </p>
        </div>

        {/* FAQ */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
          <h2 className="font-black text-gray-900 text-base mb-4">❓ {s.name} Agrarian Welfare — Aksar Puche Jane Wale Sawal</h2>
          <div className="space-y-4">
            {[
              {
                q: `${s.name} mein agrarian welfare ${KIST_INFO.current} kab aayi?`,
                a: `${KIST_INFO.current} ${KIST_INFO.currentDate} ko release ho chuki hai. ${KIST_INFO.next} ${KIST_INFO.nextDate} expected hai.`,
              },
              {
                q: `${s.name} agrarian welfare beneficiary roster mein naam kaise check karein?`,
                a: `pmkisan.gov.in → Beneficiary List → ${s.name} → Apna District, Block, Village select karo → Get Report.`,
              },
              {
                q: 'Paisa nahi aaya to kya karein?',
                a: 'Bank account, biometric credential seeding, NPCI mapping aur digital verification status check karo. Program helpline 155261 par call karo.',
              },
              {
                q: `${s.name} mein agrarian welfare enrollment kahan hoga?`,
                a: 'Nearest CSC centre, Block Agriculture Officer, ya pmkisan.gov.in par self-enrollment kar sakte ho.',
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
          <p className="font-black text-green-900 text-sm mb-3">📖 Related Agrarian Welfare Guides</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { href: '/articles/pm-kisan-ekyc-online-2026', l: '🔐 Digital Verification Guide' },
              { href: '/articles/pm-kisan-23vi-kist-2026-status-check', l: '📅 23vi Tranche Status' },
              { href: '/articles/pm-kisan-payment-failed-status-2026', l: '💸 Payment Fix' },
              { href: '/calculator/installment-tracker', l: '📆 Installment Tracker' },
              { href: '/articles/pm-kisan-registration-online-2026', l: '📝 Enrollment' },
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
