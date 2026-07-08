import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import PdfDownloadButton from './PdfDownloadButton';

const STATE_DATA: Record<string, {
  name: string;
  icon: string;
  beneficiaries: string;
  description: string;
  districts: string[];
  landPortal: string;
  stateScheme?: string;
  helpline?: string;
  specialNote?: string;
  keywords: string[];
}> = {
  'uttar-pradesh': {
    name: 'Uttar Pradesh',
    icon: '🏔️',
    beneficiaries: '2.5 Crore+',
    description: 'Bhai, UP ka scene alag hai. Yahan 2.5 crore se zyada kisan PM Kisan se jude hain — India mein sabse bada number. Muzaffarnagar ke Ramesh ji (sugarcane farmer) ne bataya — "Bhaiya, sugar mills se payment 6-8 mahine late aati hai, PM Kisan ka ₹6000 beech mein kaam aata hai." Western UP (Meerut, Saharanpur, Shamli, Muzaffarnagar) mein sugarcane belt hai, Eastern UP (Varanasi, Gorakhpur, Basti, Azamgarh) mein rice dominant hai. Bundelkhand (Jhansi, Banda, Mahoba, Chitrakoot) toh drought-prone hai — yahan ₹6000 literally jaan bachata hai. Terai belt (Lakhimpur Kheri, Bahraich, Shravasti) mein bhi extensive farming hai. UP Bhulekh portal par Khatauni online check kar sakte ho — upbhulekh.gov.in ya upbhulekh.in se Naksha download karo. Kuch districts mein UP Kisan Sabha registration bhi mandatory hai. 23vi kist June 2026 mein aa chuki hai, 24vi kist October 2026 tak expected hai. Small farmers (2 hectare se kam) ko ₹2000 har 4 mahine mein milta hai.',
    districts: ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Meerut', 'Prayagraj', 'Ghaziabad', 'Moradabad', 'Gorakhpur', 'Aligarh', 'Bareilly', 'Muzaffarnagar', 'Saharanpur', 'Lakhimpur Kheri', 'Bahraich', 'Jhansi', 'Banda'],
    landPortal: 'upbhulekh.gov.in (Khatauni online) + upbhulekh.in (Naksha download) + e-dharti.up.nic.in',
    stateScheme: 'UP Kisan Sabha Registration (mandatory in some districts) + state top-up schemes',
    helpline: '1800-180-1835 (UP Kisan Call Center) + 155261 (National Helpline) + 0522-2280071',
    specialNote: 'Western UP ke sugarcane growers ko mills se payment delay hoti hai — ₹6000 beech mein kaam aata hai',
    keywords: ['pm kisan up list 2026 download', 'pm kisan uttar pradesh village wise roster', 'up bhulekh pm kisan status', 'pm kisan western up sugarcane', 'pm kisan eastern up rice', 'up kisan sabha registration pm kisan', 'pm kisan terai belt list', 'pm kisan bundelkhand status', 'pm kisan up 24vi kist date', 'pm kisan up beneficiary list pdf', 'pm kisan up district wise count', 'pm kisan up rejection reason'],
  },
  'bihar': {
    name: 'Bihar',
    icon: '🌊',
    beneficiaries: '80 Lakh+',
    description: 'Bhaiya, Bihar mein 80 lakh se zyada registered beneficiaries hain — India ke top 3 mein. Gangetic plains mein wheat aur rice primary hai. North Bihar (Muzaffarpur, Darbhanga, Sitamarhi, Madhubani, Supaul) ka scene alag hai — har saal flood aata hai, land records affect hote hain. Patna ke Rajendra Nagar ke kisan Sunil ji kehte hain — "Flood ke baad Circle Officer se milna padta hai, tab jaake Khatauni update hoti hai." South Bihar (Gaya, Nawada, Aurangabad, Rohtas) mein maize prominent hai. Central Bihar (Patna, Vaishali, Samastipur, Begusarai) mein vegetables bhi grow hote hain. Bhumi Jankari portal par land record check kar sakte ho. Joint family ownership common hai Bihar mein — isliye verification mein time lagta hai. Khasra-Khatauni update ke liye Circle Officer se contact karo. Bihar Rajya Fasal Sahayata Yojana additional support deti hai. 1 hectare se kam land wale farmers ko ₹6000 annual milta hai.',
    districts: ['Patna', 'Gaya', 'Muzaffarpur', 'Darbhanga', 'Bhagalpur', 'Purnia', 'Vaishali', 'Nalanda', 'Samastipur', 'Rohtas', 'Aurangabad', 'Nawada', 'Sitamarhi', 'Madhubani', 'Begusarai', 'Saharsa', 'Kishanganj'],
    landPortal: 'biharbhumi.bihar.gov.in (Bhumi Jankari) + land.bihar.gov.in (Khasra-Khatauni) + lrc.bihar.gov.in',
    stateScheme: 'Bihar Rajya Fasal Sahayata Yojana (additional state support for crop loss)',
    helpline: '0612-2215015 (Bihar Agriculture Dept) + 155261 + 1800-345-6789',
    specialNote: 'North Bihar flood-prone areas mein land records regularly update karo — Circle Officer se contact karo',
    keywords: ['pm kisan bihar list 2026', 'pm kisan north bihar flood area', 'pm kisan south bihar status', 'bihar bhumi jankari pm kisan check', 'pm kisan flood area bihar land record', 'bihar rajya fasal sahayata yojana', 'pm kisan gaya bihar roster', 'pm kisan muzaffarpur village wise', 'pm kisan bihar 24vi kist', 'pm kisan bihar rejection reason', 'pm kisan bihar ekyc status', 'pm kisan bihar pdf download'],
  },
  'madhya-pradesh': {
    name: 'Madhya Pradesh',
    icon: '🌿',
    beneficiaries: '70 Lakh+',
    description: 'MP ka apna alag swag hai bhai! 70 lakh se zyada PM Kisan beneficiaries hain. Malwa plateau (Indore, Ujjain, Dewas, Dhar) par soybean cultivation bahut hai — MP India ka largest soybean producer hai. Ujjain ke Maheshwar ji batate hain — "Soybean ke rate gir jaate hain kabhi kabhi, tab PM Kisan ka paisa ghar chalta hai." Chambal region (Morena, Bhind, Gwalior) aur Bundelkhand (Datia, Tikamgarh, Chhatarpur) mein wheat aur pulses grow hote hain. Ab suno — MP government ne Mukhyamantri Kisan Kalyan Yojana launch ki hai jo PM Kisan ke saath ₹4000 extra deti hai per year. Matlab total ₹10,000 annual milta hai MP ke farmers ko! Tribal districts (Jhabua, Alirajpur, Barwani, Dindori) mein khas documentation chahiye — tribal land rights certificates. Bhu-Abhilekh Naksha portal land verification ke liye use hota hai. MP Online Kiosks aur CSC centres statewide digital verification ke liye available hain.',
    districts: ['Indore', 'Bhopal', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Rewa', 'Satna', 'Chhindwara', 'Hoshangabad', 'Dewas', 'Dhar', 'Morena', 'Bhind', 'Jhabua', 'Alirajpur', 'Barwani'],
    landPortal: 'bhu-abhilekh.nic.in (Bhu-Abhilekh Naksha) + mpbhulekh.gov.in + landrecord.mp.nic.in',
    stateScheme: 'Mukhyamantri Kisan Kalyan Yojana (₹4000 extra per year — total ₹10,000 annual)',
    helpline: '1800-233-5500 (MP Kisan Call Center) + 155261 + 0755-2672200',
    specialNote: 'MP mein total ₹10,000 milta hai (₹6000 PM Kisan + ₹4000 state scheme) — India mein sabse zyada benefit',
    keywords: ['pm kisan mp list 2026', 'pm kisan madhya pradesh village wise', 'mukhyamantri kisan kalyan yojana mp 2026', 'pm kisan malwa soybean', 'pm kisan tribal mp jhabua', 'bhu-abhilekh pm kisan mp', 'pm kisan soybean mp status', 'pm kisan indore roster', 'pm kisan mp 10000 rupaye', 'pm kisan mp rejection reason', 'pm kisan mp ekyc online', 'pm kisan mp pdf download'],
  },
  'rajasthan': {
    name: 'Rajasthan',
    icon: '☀️',
    beneficiaries: '65 Lakh+',
    description: 'Marwar ka scene alag hai bhai! 65 lakh se zyada farmers PM Kisan beneficiaries hain Rajasthan mein. Thar desert belt (Barmer, Jaisalmer, Bikaner, Churu) mein bajra cultivation hai — yeh drought-prone areas hain. Barmer ke Kishan Singh ji kehte hain — "Bhai, yahan paani ki kami hai, ₹6000 se irrigation ka kharcha nikalta hai." Eastern Rajasthan (Jaipur, Kota, Alwar, Bharatpur, Sawai Madhopur) mein wheat aur mustard grow hota hai. Southern Rajasthan (Udaipur, Banswara, Dungarpur) tribal belt hai jahan maize aur pulses cultivation hai. Apna Khata (E-Dharti) portal land records ko digital kar raha hai. E-Mitra centres statewide digital verification ke liye available hain — 50 districts mein easily accessible. Bajra aur mustard cultivators Thar desert mein PM Kisan par heavily depend karte hain kyunki rainfall unpredictable hai.',
    districts: ['Jaipur', 'Jodhpur', 'Kota', 'Udaipur', 'Ajmer', 'Bikaner', 'Sikar', 'Alwar', 'Sri Ganganagar', 'Bharatpur', 'Barmer', 'Jaisalmer', 'Churu', 'Pali', 'Nagaur', 'Jhunjhunu', 'Hanumangarh'],
    landPortal: 'apnakhata.raj.nic.in (Apna Khata) + edharti.rajasthan.gov.in + revenue.rajasthan.gov.in',
    stateScheme: 'Rajasthan Kisan Samman Nidhi (state top-up additional support)',
    helpline: '1800-180-6136 (Rajasthan Kisan Helpline) + 155261 + 0141-2741000',
    specialNote: 'Desert districts (Barmer, Jaisalmer) mein water scarcity — ₹6000 irrigation cost cover karta hai',
    keywords: ['pm kisan rajasthan list 2026', 'pm kisan desert rajasthan barmer', 'pm kisan barmer jaisalmer status', 'apna khata pm kisan rajasthan', 'pm kisan bajra rajasthan', 'e-mitra pm kisan verification rajasthan', 'pm kisan jaipur roster', 'pm kisan jodhpur village wise', 'pm kisan rajasthan 24vi kist', 'pm kisan rajasthan rejection', 'pm kisan rajasthan ekyc', 'pm kisan rajasthan pdf download'],
  },
  'maharashtra': {
    name: 'Maharashtra',
    icon: '🌾',
    beneficiaries: '1 Crore+',
    description: 'Maharashtra mein 1 crore se zyada registered PM Kisan beneficiaries hain — India ke top states mein se ek. Vidarbha region (Nagpur, Amravati, Wardha, Yavatmal, Akola) ka scene bahut emotional hai — cotton cultivation hai, crop failure common hai. Yavatmal ke Ramesh bhau kehte hain — "Kapas sookh gaya do baar, PM Kisan ka paisa ghar chal raha hai." Western Maharashtra (Pune, Satara, Kolhapur, Sangli) mein sugarcane farming hai — sugar cooperatives strong hain. Nashik belt onion capital hai — onion growers volatile prices face karte hain. Konkan region (Ratnagiri, Sindhudurg, Raigad) mein rice cultivation hoti hai. Namo Shetkari Mahasanman Nidhi scheme se additional ₹6000 milta hai — total ₹12,000 annual. Mahabhumi portal (7/12 Satbara Utara) online land verification ke liye use hota hai.',
    districts: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur', 'Thane', 'Amravati', 'Kolhapur', 'Satara', 'Wardha', 'Yavatmal', 'Akola', 'Ratnagiri', 'Sangli', 'Buldhana', 'Jalna'],
    landPortal: 'mahabhumi.gov.in (7/12 Satbara Utara) + mahabhulekh.maharashtra.gov.in + maharashtrabhulekh.gov.in',
    stateScheme: 'Namo Shetkari Mahasanman Nidhi (₹6000 additional — total ₹12,000 annual)',
    helpline: '022-26591848 (Maharashtra Agriculture Helpline) + 155261 + 022-26591900',
    specialNote: 'Total ₹12,000 milta hai (₹6000 PM Kisan + ₹6000 Namo Shetkari) — Vidarbha cotton growers ko bahut fayda',
    keywords: ['pm kisan maharashtra list 2026', 'pm kisan vidarbha cotton', 'pm kisan western maharashtra sugarcane', 'namo shetkari mahasanman nidhi 2026', '7/12 satbara pm kisan maharashtra', 'pm kisan nashik onion', 'pm kisan pune roster', 'pm kisan nagpur village wise', 'pm kisan maharashtra 12000', 'pm kisan maharashtra rejection', 'pm kisan maharashtra ekyc', 'pm kisan maharashtra pdf download'],
  },
  'west-bengal': {
    name: 'West Bengal',
    icon: '🐟',
    beneficiaries: '70 Lakh+',
    description: 'Bangla mein kehete hain — "Ma Mati Manush" (Maa, Mitti, Insaan). West Bengal mein 70 lakh se zyada PM Kisan beneficiaries hain. Gangetic delta (Murshidabad, Nadia, Bardhaman, Hooghly) mein rice cultivation primary hai. Hooghly aur Bardhaman mein potato farming prominent hai — Bardhaman ke Subhash da batate hain — "Aloo ka rate kabhi upar kabhi neeche, PM Kisan ka paisa fixed income hai." North Bengal (Darjeeling, Jalpaiguri, Cooch Behar) mein tea gardens aur jute cultivation hai. Initial implementation mein delays the, lekin ab zyada tar cultivators registered hain. Banglarbhumi portal land records ke liye use hota hai.',
    districts: ['Kolkata', 'Howrah', 'North 24 Parganas', 'South 24 Parganas', 'Burdwan', 'Murshidabad', 'Nadia', 'Malda', 'Darjeeling', 'Hooghly', 'Jalpaiguri', 'Cooch Behar', 'Bankura', 'Purulia', 'Birbhum'],
    landPortal: 'banglarbhumi.gov.in (Banglarbhumi portal) + banglarbhumi.in + wblandrecords.gov.in',
    stateScheme: 'Krishak Bandhu (state scheme parallel to PM Kisan)',
    helpline: '1800-345-4565 (WB Kisan Helpline) + 155261 + 033-22144556',
    specialNote: 'Jute aur potato growers specially benefit karte hain — Krishak Bandhu additional support',
    keywords: ['pm kisan west bengal list 2026', 'wb cultivator benefit roster', 'pm kisan banglarbhumi status', 'pm kisan murshidabad jute', 'pm kisan burdwan potato', 'pm kisan north bengal tea', 'pm kisan kolkata roster', 'pm kisan darjeeling village wise', 'krishak bandhu pm kisan', 'pm kisan west bengal rejection', 'pm kisan west bengal ekyc', 'pm kisan west bengal pdf download'],
  },
  'karnataka': {
    name: 'Karnataka',
    icon: '🌴',
    beneficiaries: '50 Lakh+',
    description: 'Karnataka mein 50 lakh se zyada registered PM Kisan beneficiaries hain. North Karnataka (Belagavi, Dharwad, Raichur) drought-prone hai — yahan cotton aur ragi cultivation hai. South Karnataka (Bengaluru, Mysuru, Mandya) mein sugarcane aur coconut prominent hain. Coastal Karnataka (Mangaluru, Udupi) mein arecanut aur cashew farming hai. Bengaluru ke Ravi bhai kehte hain — "Bhai, North Karnataka mein rainfall kam hota hai, PM Kisan ka paisa beech mein kaam aata hai." Bhoomi RTC portal land verification ke liye use hota hai. Raitha Siri state scheme additional support deti hai.',
    districts: ['Bengaluru', 'Mysuru', 'Hubballi', 'Mangaluru', 'Belagavi', 'Dharwad', 'Gulbarga', 'Raichur', 'Shimoga', 'Tumakuru', 'Davangere', 'Bellary', 'Chitradurga'],
    landPortal: 'landrecords.karnataka.gov.in (Bhoomi RTC portal) + karnatakabhulekh.gov.in',
    stateScheme: 'Raitha Siri (state top-up scheme)',
    helpline: '1800-425-3553 (Karnataka Agriculture Helpline) + 155261',
    specialNote: 'North Karnataka drought-prone regions mein ₹6000 bahut crucial hai',
    keywords: ['pm kisan karnataka list 2026', 'pm kisan north karnataka drought', 'pm kisan south karnataka sugarcane', 'bhoomi rtc pm kisan karnataka', 'raitha siri pm kisan', 'pm kisan bengaluru roster', 'pm kisan mysuru village wise', 'pm kisan coastal karnataka', 'pm kisan karnataka 24vi kist', 'pm kisan karnataka rejection', 'pm kisan karnataka ekyc', 'pm kisan karnataka pdf download'],
  },
  'odisha': {
    name: 'Odisha',
    icon: '🌊',
    beneficiaries: '40 Lakh+',
    description: 'Odisha mein 40 lakh se zyada PM Kisan beneficiaries hain. Coastal plains (Cuttack, Puri, Balasore, Kendrapara, Jagatsinghpur) mein rice cultivation primary hai. Cuttack ke Suresh bhai kehte hain — "Bhaiya, chawal ki kheti achhi hoti hai yahan, PM Kisan ka paisa extra support hai." KALIA scheme (Krushak Assistance for Livelihood and Income Augmentation) state government chalati hai jo PM Kisan ke saath additional support deti hai. Tribal districts (Koraput, Malkangiri, Rayagada, Nabarangpur) mein patta land holders eligible hain. Bhulekh Odisha portal land verification ke liye use hota hai.',
    districts: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Puri', 'Balasore', 'Sambalpur', 'Berhampur', 'Angul', 'Koraput', 'Jajpur', 'Kendrapara', 'Jagatsinghpur', 'Malkangiri', 'Rayagada', 'Nabarangpur', 'Dhenkanal'],
    landPortal: 'bhulekh.ori.nic.in (Bhulekh Odisha) + bhulekh.odisha.gov.in + landrecords.odisha.gov.in',
    stateScheme: 'KALIA Scheme (Krushak Assistance for Livelihood — state top-up)',
    helpline: '1800-345-6789 (Odisha Kisan Helpline) + 155261 + 0674-2536789',
    specialNote: 'Tribal farmers in Koraput, Malkangiri with patta land eligible — khas documentation',
    keywords: ['pm kisan odisha list 2026', 'kalia scheme pm kisan odisha', 'pm kisan coastal odisha rice', 'bhulekh odisha pm kisan check', 'pm kisan cuttack roster', 'pm kisan puri village wise', 'pm kisan tribal odisha koraput', 'pm kisan koraput status', 'pm kisan odisha 24vi kist', 'pm kisan odisha rejection', 'pm kisan odisha ekyc', 'pm kisan odisha pdf download'],
  },
  'tamil-nadu': {
    name: 'Tamil Nadu',
    icon: '🌞',
    beneficiaries: '40 Lakh+',
    description: 'Tamil Nadu mein 40 lakh se zyada PM Kisan beneficiaries hain. Cauvery delta (Thanjavur, Tiruvarur, Nagapattinam) rice belt hai — "Rice Bowl of South India" ke naam se jaana jaata hai. Madurai ke Murugan kehte hain — "Bhai, Cauvery ka paani rice ke liye crucial hai, PM Kisan ka paisa beech mein kaam aata hai." Trichy aur Erode mein banana plantations prominent hain. Coimbatore belt mein sugarcane farming hai. Nilgiris mein tea aur vegetables grow hote hain. Patta (land ownership certificate) verification ke liye use hota hai — Village Administrative Officer offices se milta hai.',
    districts: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Thanjavur', 'Tirunelveli', 'Erode', 'Vellore', 'Tiruppur', 'Dindigul', 'Sivaganga'],
    landPortal: 'patta chitta (Tamil Nadu land records) + tnlandrecords.gov.in',
    stateScheme: 'CM Uzhavar Pathukappu Thittam (state top-up)',
    helpline: '1800-425-0999 (TN Agriculture Helpline) + 155261',
    specialNote: 'Cauvery delta rice aur banana growers major beneficiaries',
    keywords: ['pm kisan tamil nadu list 2026', 'pm kisan cauvery delta rice', 'pm kisan tn banana', 'patta chitta pm kisan tamil nadu', 'pm kisan chennai roster', 'pm kisan coimbatore village wise', 'cm ulzhavar pathukappu thittam', 'pm kisan madurai status', 'pm kisan tamil nadu 24vi kist', 'pm kisan tamil nadu rejection', 'pm kisan tamil nadu ekyc', 'pm kisan tamil nadu pdf download'],
  },
  'punjab': {
    name: 'Punjab',
    icon: '🌾',
    beneficiaries: '30 Lakh+',
    description: 'Punjab India ka agricultural powerhouse hai — "Granary of India" ke naam se jaana jaata hai. Bathinda ke Gurpreet Singh ji kehte hain — "Ji, gehu ki cutting ke baad PM Kisan ka paisa aata hai, tabhi kheti ka cycle poora hota hai." Wheat aur rice cultivation highly productive hai. Lekin Punjab mein ek important baat — bahut farmers income tax payers hain ya government employees hain, isliye PM Kisan se ineligible hain. Jo small aur marginal farmers hain (less than 2 hectares) wo beneficiaries hain — 30 lakh se zyada registered. Jamabandi land records portal verification ke liye use hota hai.',
    districts: ['Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Hoshiarpur', 'Sangrur', 'Mansa', 'Faridkot', 'Moga', 'Tarn Taran', 'Gurdaspur', 'Pathankot', 'Firozpur', 'Kapurthala', 'Rupnagar'],
    landPortal: 'jamabandi.punjab.gov.in (Jamabandi portal) + plrs.punjab.gov.in + punjablandrecords.gov.in',
    helpline: '1800-180-2117 (Punjab Kisan Helpline) + 155261 + 0172-2710334',
    specialNote: 'Income tax filers aur govt employees eligible NAHI hain — pehle eligibility check karo',
    keywords: ['pm kisan punjab list 2026', 'pm kisan punjab eligibility check', 'jamabandi pm kisan punjab', 'pm kisan punjab wheat status', 'pm kisan ludhiana roster', 'pm kisan bathinda village wise', 'pm kisan patiala list', 'pm kisan mansa farmers', 'ghar ghar rozgar punjab pm kisan', 'pm kisan punjab rejection', 'pm kisan punjab ekyc', 'pm kisan punjab pdf download'],
  },
  'haryana': {
    name: 'Haryana',
    icon: '🚜',
    beneficiaries: '25 Lakh+',
    description: 'Haryana Green Revolution belt ka part hai — wheat aur rice highly productive hai. Karnal ke Rajinder ji batate hain — "Bhai, Meri Fasal Mera Byora register karwana zaroori hai, bina iske PM Kisan ka paisa nahi aata." 25 lakh se zyada registered PM Kisan beneficiaries hain. Mewat (Nuh), Sirsa, Mahendragarh districts mein small farmers significant beneficiaries hain. Meri Fasal Mera Byora scheme state government chalati hai jo PM Kisan ke saath integrate hai — ye registration mandatory hai.',
    districts: ['Chandigarh', 'Faridabad', 'Gurugram', 'Panipat', 'Ambala', 'Karnal', 'Hisar', 'Rohtak', 'Sirsa', 'Sonipat', 'Kurukshetra', 'Kaithal', 'Fatehabad', 'Jind', 'Nuh', 'Rewari', 'Bhiwani'],
    landPortal: 'jamabandi.nic.in (Jamabandi portal) + bhulekh.haryana.gov.in + harbhulekh.gov.in',
    stateScheme: 'Meri Fasal Mera Byora (mandatory registration for PM Kisan eligibility)',
    helpline: '1800-180-2117 (Haryana Kisan Helpline) + 155261 + 0172-2710334',
    specialNote: 'Meri Fasal Mera Byora registration mandatory hai PM Kisan ke liye — bina iske nahi milega',
    keywords: ['pm kisan haryana list 2026', 'meri fasal mera byora registration', 'pm kisan mewat haryana nuh', 'jamabandi pm kisan haryana', 'pm kisan sirsa roster', 'pm kisan karnal village wise', 'pm kisan gurugram status', 'pm kisan hisar wheat', 'meri fasal mera byora pm kisan', 'pm kisan haryana rejection', 'pm kisan haryana ekyc', 'pm kisan haryana pdf download'],
  },
  'andhra-pradesh': {
    name: 'Andhra Pradesh',
    icon: '🌶️',
    beneficiaries: '50 Lakh+',
    description: 'Andhra Pradesh mein 50 lakh se zyada PM Kisan beneficiaries hain. Krishna aur Godavari delta regions (East Godavari, West Godavari, Krishna, Guntur) mein rice cultivation prominent hai — fertile lands mein high productivity hai. Guntur ke Ramesh babu kehte hain — "Bhai, delta region mein chawal achha hota hai, PM Kisan ka paisa extra income hai." Coastal Andhra (Visakhapatnam, Vizianagaram, Srikakulam) mein aquaculture (shrimp farming) bhi bahut hai. Rayalaseema region (Kurnool, Anantapur, Kadapa, Chittoor) mein groundnut aur sunflower cultivation hai.',
    districts: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Nellore', 'Kurnool', 'Kadapa', 'Anantapur', 'Chittoor', 'East Godavari', 'West Godavari', 'Krishna', 'Prakasam', 'Vizianagaram', 'Srikakulam', 'Eluru'],
    landPortal: 'apmebhumi.gov.in (AP Bhoomi portal) + ap.gov.in + meebhoomi.ap.gov.in',
    stateScheme: 'YSR Rythu Bharosa (state top-up additional support for farmers)',
    helpline: '1800-425-3553 (AP Kisan Helpline) + 155261 + 0866-2345678',
    specialNote: 'Delta region (Krishna, Godavari) rice growers major beneficiaries — high productivity',
    keywords: ['pm kisan andhra pradesh list 2026', 'pm kisan ap delta region', 'ysr rythu bharosa pm kisan', 'pm kisan krishna godavari rice', 'pm kisan rayalaseema status', 'pm kisan guntur roster', 'pm kisan visakhapatnam village wise', 'ap bhoomi pm kisan check', 'pm kisan andhra 24vi kist', 'pm kisan andhra rejection', 'pm kisan andhra ekyc', 'pm kisan andhra pdf download'],
  },
  'kerala': {
    name: 'Kerala',
    icon: '🌊',
    beneficiaries: '20 Lakh+',
    description: 'Kerala mein 20 lakh se zyada PM Kisan beneficiaries hain. Kuttanad region (Alappuzha) "Rice Bowl of Kerala" ke naam se jaana jaata hai — below sea level rice cultivation unique hai. Alappuzha ke Thomas uncle kehte hain — "Bhai, samundar level se neeche chawal ugata hain, PM Kisan ka paisa beech mein kaam aata hai." Coconut groves statewide hain — Kerala India ka largest coconut producer hai. Rubber plantations Kottayam, Pathanamthitta mein prominent hain. Idukki mein cardamom aur spices cultivation hai.',
    districts: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam', 'Kottayam', 'Palakkad', 'Malappuram', 'Alappuzha', 'Idukki', 'Kannur', 'Kasaragod', 'Pathanamthitta', 'Wayanad'],
    landPortal: 'Land tax receipts + possession certificates (Kerala mein khas system) + lrc.kerala.gov.in',
    helpline: '1800-425-0999 (Kerala Agriculture Helpline) + 155261 + 0471-2325678',
    specialNote: 'Small landholdings (0.5 hectare se kam) bhi eligible hain — land fragmentation common hai',
    keywords: ['pm kisan kerala list 2026', 'pm kisan kuttanad rice', 'pm kisan alappuzha below sea level', 'akshaya pm kisan verification', 'pm kisan kottayam rubber', 'pm kisan idukki cardamom', 'pm kisan kochi roster', 'pm kisan thrissur village wise', 'pm kisan kerala small holdings', 'pm kisan kerala rejection', 'pm kisan kerala ekyc', 'pm kisan kerala pdf download'],
  },
  'telangana': {
    name: 'Telangana',
    icon: '🌴',
    beneficiaries: '35 Lakh+',
    description: 'Telangana ka scene alag hai bhai! 35 lakh se zyada PM Kisan beneficiaries hain. Godavari aur Krishna river systems irrigation support karte hain. Nizamabad mein turmeric (haldi) cultivation prominent hai — Nizamabad turmeric market famous hai. Karimnagar ke Venkat Reddy kehte hain — "Bhaiya, haldi ka rate achha milta hai, PM Kisan ka paisa extra income hai." Warangal aur Khammam mein cotton farming hai. Rythu Bandhu state scheme ₹10,000 per acre per year deti hai — total ₹16,000+ annual milta hai! India mein sabse zyada benefit!',
    districts: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Mahbubnagar', 'Nalgonda', 'Adilabad', 'Medak', 'Rangareddy', 'Siddipet', 'Suryapet', 'Mancherial', 'Jagtial', 'Peddapalli', 'Vikarabad'],
    landPortal: 'dharani.telangana.gov.in (Dharani portal) + meeseva.telangana.gov.in + telanganabhulekh.gov.in',
    stateScheme: 'Rythu Bandhu (₹10,000 per acre per year — total ₹16,000+ with PM Kisan)',
    helpline: '1800-425-0999 (Telangana Farmer Helpline) + 155261 + 040-23144567',
    specialNote: 'Total ₹16,000+ milta hai (₹6000 PM Kisan + ₹10,000 Rythu Bandhu) — sabse zyada benefit India mein',
    keywords: ['pm kisan telangana list 2026', 'ryythu bandhu pm kisan telangana', 'pm kisan nizamabad turmeric', 'dharani pm kisan status', 'pm kisan warangal roster', 'pm kisan karimnagar village wise', 'pm kisan hyderabad farmers', 'mee seva pm kisan verification', 'pm kisan telangana 16000', 'pm kisan telangana rejection', 'pm kisan telangana ekyc', 'pm kisan telangana pdf download'],
  },
  'gujarat': {
    name: 'Gujarat',
    icon: '🌿',
    beneficiaries: '50 Lakh+',
    description: 'Gujarat mein 50 lakh se zyada registered PM Kisan beneficiaries hain. Saurashtra region (Rajkot, Junagadh, Bhavnagar, Amreli, Porbandar) mein cotton aur groundnut cultivation prominent hai — yeh rain-fed areas hain. Rajkot ke Bhavesh bhai kehte hain — "Bhai, Saurashtra mein rainfall kam hota hai, PM Kisan ka paisa beech mein kaam aata hai." South Gujarat (Surat, Valsad, Navsari, Bharuch) mein sugarcane aur vegetables grow hote hain. North Gujarat (Banaskantha, Patan, Mehsana) mein castor aur cumin farming hai — India ka largest castor producer hai Gujarat.',
    districts: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Junagadh', 'Jamnagar', 'Gandhinagar', 'Mehsana', 'Banaskantha', 'Valsad', 'Navsari', 'Bharuch', 'Amreli', 'Patan', 'Kutch', 'Anand'],
    landPortal: 'anyror.gujarat.gov.in (AnyRor portal) + ikhedut.gujarat.gov.in + gujaratbhulekh.gov.in',
    stateScheme: 'IKHEDUT portal integration (easy online enrollment for PM Kisan)',
    helpline: '1800-180-1551 (Gujarat Kisan Call Center) + 155261 + 079-23256789',
    specialNote: 'Saurashtra cotton growers heavily depend on PM Kisan — rainfall unpredictable hai',
    keywords: ['pm kisan gujarat list 2026', 'pm kisan saurashtra cotton', 'anyror pm kisan gujarat', 'ikhedut pm kisan registration', 'pm kisan rajkot roster', 'pm kisan surat village wise', 'pm kisan groundnut gujarat', 'pm kisan castor banaskantha', 'pm kisan gujarat 24vi kist', 'pm kisan gujarat rejection', 'pm kisan gujarat ekyc', 'pm kisan gujarat pdf download'],
  },
  'assam': {
    name: 'Assam',
    icon: '🌾',
    beneficiaries: '30 Lakh+',
    description: 'Assam mein 30 lakh se zyada PM Kisan beneficiaries hain. Brahmaputra valley (Guwahati, Nagaon, Jorhat, Dibrugarh, Tinsukia) mein rice cultivation extensive hai. Nagaon ke Rajen da kehte hain — "Bhai, har saal flood aata hai, PM Kisan ka paisa beech mein kaam aata hai." Assam tea gardens world-famous hain — tea workers alag scheme se hain. Annual flooding se farmers ko khas challenges face karni padti hain — land records frequently update karne padte hain. Dharitree portal Assam government ne land records ke liye banaya hai.',
    districts: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tezpur', 'Tinsukia', 'Barpeta', 'Goalpara', 'Karimganj', 'Hailakandi', 'Dhubri', 'Kokrajhar', 'Bongaigaon', 'Sonitpur', 'Lakhimpur'],
    landPortal: 'dharitree.assam.gov.in (Dharitree portal) + landrecords.assam.gov.in + assamlandrecords.gov.in',
    helpline: '1800-345-6789 (Assam Agriculture Helpline) + 155261 + 0361-2536789',
    specialNote: 'Annual flooding se land records affected hote hain — regularly update karo Dharitree par',
    keywords: ['pm kisan assam list 2026', 'pm kisan brahmaputra valley', 'dharitree pm kisan assam', 'pm kisan guwahati roster', 'pm kisan jorhat village wise', 'pm kisan flood area assam', 'pm kisan jute assam status', 'pm kisan nagaon rice', 'pm kisan assam 24vi kist', 'pm kisan assam rejection', 'pm kisan assam ekyc', 'pm kisan assam pdf download'],
  },
  'jharkhand': {
    name: 'Jharkhand',
    icon: '🌊',
    beneficiaries: '30 Lakh+',
    description: 'Jharkhand mein 30 lakh se zyada PM Kisan beneficiaries hain. Large tribal farming population hai — rain-fed upland rice cultivation along with pulses aur vegetables. Ranchi ke Mangal Munda kehte hain — "Bhaiya, hamari zameen Chotanagpur Tenancy Act ke under hai, khas documentation lagta hai." Jharbhoomi portal land verification ke liye use hota hai. Women cultivators jinke naam par land hai unka registration badha hai. Pragya Kendra centres statewide digital verification ke liye available hain.',
    districts: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Dumka', 'Giridih', 'Palamu', 'Chaibasa', 'Ramgarh', 'Medininagar', 'Gumla', 'Simdega', 'Lohardaga', 'Khunti'],
    landPortal: 'jharbhoomi.jharkhand.gov.in (Jharbhoomi portal) + jharkhand.gov.in + jharkhandbhulekh.gov.in',
    helpline: '1800-345-6789 (Jharkhand Kisan Helpline) + 155261 + 0651-2490123',
    specialNote: 'Tribal farmers with Chotanagpur Tenancy Act land rights have special provisions — documentation check karo',
    keywords: ['pm kisan jharkhand list 2026', 'jharbhoomi pm kisan jharkhand', 'pm kisan tribal jharkhand', 'chotanagpur tenancy act pm kisan', 'pm kisan ranchi roster', 'pm kisan jamshedpur village wise', 'pragya kendra pm kisan verification', 'pm kisan dumka status', 'pm kisan jharkhand 24vi kist', 'pm kisan jharkhand rejection', 'pm kisan jharkhand ekyc', 'pm kisan jharkhand pdf download'],
  },
  'uttarakhand': {
    name: 'Uttarakhand',
    icon: '🏔️',
    beneficiaries: '15 Lakh+',
    description: 'Uttarakhand ke 15 lakh se zyada PM Kisan beneficiaries hain. Terraced mountain fields par rice aur wheat cultivation hoti hai. Dehradun ke Rakesh ji batate hain — "Bhai, pahadon mein chhoti zameen hoti hai, PM Kisan ka paisa beech mein kaam aata hai." Horticulture prominent hai — apple, pear, citrus fruits. Hill farmers ke paas chhoti landholdings hoti hain (kabhi kabhi 0.1 hectare se kam) — sab eligible hain. Bhulekh UK portal land verification ke liye use hota hai.',
    districts: ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rishikesh', 'Pauri', 'Almora', 'Nainital', 'Tehri', 'Pithoragarh', 'Uttarkashi', 'Chamoli', 'Rudraprayag', 'Bageshwar', 'Champawat'],
    landPortal: 'bhulekh.uk.gov.in (Bhulekh UK) + uk.gov.in + uklandrecords.gov.in',
    helpline: '0135-2710334 (Uttarakhand Agriculture Department) + 155261 + 1800-233-5500',
    specialNote: 'Small hill holdings (0.1 hectare se kam) bhi eligible hain — mountain farmers ko fayda',
    keywords: ['pm kisan uttarakhand list 2026', 'pm kisan hill uttarakhand', 'bhulekh uk pm kisan check', 'pm kisan dehradun roster', 'pm kisan haridwar village wise', 'pm kisan almora status', 'csc lok seva kendra pm kisan', 'pm kisan nainital farmers', 'pm kisan uttarakhand 24vi kist', 'pm kisan uttarakhand rejection', 'pm kisan uttarakhand ekyc', 'pm kisan uttarakhand pdf download'],
  },
  'chhattisgarh': {
    name: 'Chhattisgarh',
    icon: '🌾',
    beneficiaries: '40 Lakh+',
    description: 'Chhattisgarh "Rice Bowl of India" ke naam se jaana jaata hai. 40 lakh se zyada PM Kisan beneficiaries hain. Raipur ke Suresh kaka kehte hain — "Bhaiya, chawal ki kheti yahan bahut hoti hai, PM Kisan ka paisa beech mein kaam aata hai." Vast paddy cultivation Chhattisgarh plains mein hoti hai. Bastar, Surguja tribal areas mein khas provisions hain land ownership ke liye. Rajiv Gandhi Kisan Nyay Yojana state government chalati hai jo PM Kisan ke saath additional support deti hai.',
    districts: ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Ambikapur', 'Raigarh', 'Mahasamund', 'Surguja', 'Bastar', 'Dhamtari', 'Kanker', 'Jashpur', 'Dantewada'],
    landPortal: 'bhuiya.cgstate.gov.in (Bhuiya portal) + cgstate.gov.in + cgbhulekh.gov.in',
    stateScheme: 'Rajiv Gandhi Kisan Nyay Yojana (state top-up additional support)',
    helpline: '1800-233-5500 (Chhattisgarh Kisan Helpline) + 155261 + 0771-2536789',
    specialNote: 'Tribal farmers in Bastar, Surguja have special land provisions — documentation check karo',
    keywords: ['pm kisan chhattisgarh list 2026', 'pm kisan rice bowl cg', 'rajiv gandhi kisan nyay yojana cg', 'bhuiya pm kisan chhattisgarh', 'pm kisan raipur roster', 'pm kisan bastar tribal', 'pm kisan tribal cg status', 'pm kisan bilaspur village wise', 'pm kisan chhattisgarh 24vi kist', 'pm kisan chhattisgarh rejection', 'pm kisan chhattisgarh ekyc', 'pm kisan chhattisgarh pdf download'],
  },
  'himachal-pradesh': {
    name: 'Himachal Pradesh',
    icon: '🏔️',
    beneficiaries: '10 Lakh+',
    description: 'HP ke 10 lakh se zyada PM Kisan beneficiaries hain. Apple orchards Shimla, Kullu, Kinnaur mein prominent hain — apple growers major beneficiaries hain. Kotgarh (Shimla) ke Ramesh ji batate hain — "Bhai, seb ki kheti mein input cost zyada hai, PM Kisan ka paisa beech mein kaam aata hai." Wheat aur maize terraced mountain fields par grow hota hai. Himris portal land verification ke liye use hota hai. Remote tribal areas (Lahaul-Spiti, Kinnaur) mein farmers ko district Agriculture offices se enrollment mein help milti hai.',
    districts: ['Shimla', 'Mandi', 'Solan', 'Dharamshala', 'Kullu', 'Kangra', 'Hamirpur', 'Bilaspur', 'Una', 'Chamba', 'Sirmaur', 'Kinnaur', 'Lahaul-Spiti'],
    landPortal: 'himris.hp.gov.in (Himris portal) + hp.gov.in + hpbhulekh.gov.in',
    helpline: '0177-2622700 (HP Agriculture Department) + 155261 + 1800-180-6789',
    specialNote: 'Apple growers in Shimla, Kullu, Kinnaur are major beneficiaries — ₹6000 input costs cover karta hai',
    keywords: ['pm kisan himachal pradesh list 2026', 'pm kisan apple hp shimla', 'himris pm kisan himachal', 'pm kisan shimla roster', 'pm kisan kullu village wise', 'pm kisan kinnaur apple', 'pm kisan mandi status', 'pm kisan lahual spiti tribal', 'pm kisan himachal 24vi kist', 'pm kisan himachal rejection', 'pm kisan himachal ekyc', 'pm kisan himachal pdf download'],
  },
  'jammu-kashmir': {
    name: 'Jammu & Kashmir',
    icon: '🏔️',
    beneficiaries: '12 Lakh+',
    description: 'J&K mein 12 lakh se zyada PM Kisan beneficiaries hain. Kashmir Valley (Srinagar, Shopian, Kulgam, Baramulla, Pulwama) mein apple orchards world-famous hain — Shopian, Kulgam, Baramulla major apple belts. Shopian ke Abdul Rashid kehte hain — "Bhai, seb ki kheti hamari jaan hai, PM Kisan ka paisa beech mein kaam aata hai." Pampore (Pulwama) mein saffron cultivation hai — Kashmir saffron duniya bhar mein famous hai. Jammu region (Jammu, Kathua, Samba, Udhampur) mein rice farming prominent hai.',
    districts: ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Kathua', 'Shopian', 'Kulgam', 'Pulwama', 'Udhampur', 'Rajouri', 'Poonch', 'Doda', 'Kishtwar', 'Ramban', 'Reasi', 'Ganderbal'],
    landPortal: 'State land revenue records + jk.gov.in + jklr.gov.in',
    helpline: '1800-425-6789 (J&K Kisan Helpline) + 155261 + 0191-2586789',
    specialNote: 'Apple growers in Shopian, Kulgam aur saffron farmers in Pulwama (Pampore) major beneficiaries',
    keywords: ['pm kisan jammu kashmir list 2026', 'pm kisan kashmir apple shopian', 'pm kisan saffron pulwama pampore', 'pm kisan jammu roster', 'pm kisan baramulla village wise', 'pm kisan kulgam status', 'pm kisan srinagar farmers', 'pm kisan kashmir 24vi kist', 'pm kisan jk rejection', 'pm kisan jk ekyc', 'pm kisan jk pdf download', 'pm kisan kashmir valley'],
  },
  'goa': {
    name: 'Goa',
    icon: '🌿',
    beneficiaries: '1 Lakh+',
    description: 'Goa ke 1 lakh se zyada PM Kisan beneficiaries hain. Unique khazan (coastal paddy fields) mein rice cultivation hoti hai — below sea level farming unique hai. Mapusa ke Ravi uncle kehte hain — "Bhai, khazan mein chawal ugata hain, PM Kisan ka paisa beech mein kaam aata hai." Cashew plantations aur coconut groves Goa ki specialty hain. Form I aur XIV land records agricultural land verification ke liye use hote hain.',
    districts: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda'],
    landPortal: 'Form I and XIV land records (Goa khas system) + goa.gov.in + rdd.goa.gov.in',
    helpline: '0832-2418834 (Goa Agriculture Department) + 155261 + 1800-233-5500',
    specialNote: 'Khazan (coastal paddy fields) unique to Goa — below sea level rice cultivation',
    keywords: ['pm kisan goa list 2026', 'pm kisan khazan goa rice', 'form i xiv pm kisan goa', 'pm kisan panaji roster', 'pm kisan margao village wise', 'pm kisan cashew goa', 'pm kisan coastal goa status', 'pm kisan vasco farmers', 'pm kisan goa 24vi kist', 'pm kisan goa rejection', 'pm kisan goa ekyc', 'pm kisan goa pdf download'],
  },
  'sikkim': {
    name: 'Sikkim',
    icon: '🏔️',
    beneficiaries: '50,000+',
    description: 'Sikkim India ka first fully organic state hai. 50,000 se zyada PM Kisan beneficiaries hain. Large cardamom cultivation Sikkim ki specialty hai — world ka largest producer hai. Gangtok ke Karma bhai kehte hain — "Bhai, elaichi ki kmein bahut hoti hai yahan, PM Kisan ka paisa beech mein kaam aata hai." High-altitude rice farming hoti hai. LPC (Land Possession Certificate) land verification ke liye use hota hai. Sikkim Organic Mission PM Kisan ke saath organic transition costs support karta hai.',
    districts: ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan', 'Pakyong', 'Soreng'],
    landPortal: 'LPC (Land Possession Certificate) + sikkim.gov.in + sikkimlr.gov.in',
    helpline: '03592-206739 (Sikkim Agriculture Department) + 155261 + 1800-345-6789',
    specialNote: 'India ka first fully organic state — large cardamom world-famous, organic farming',
    keywords: ['pm kisan sikkim list 2026', 'pm kisan organic sikkim', 'pm kisan cardamom sikkim gangtok', 'lpc pm kisan sikkim', 'pm kisan gangtok roster', 'sikkim organic mission pm kisan', 'pm kisan namchi village wise', 'pm kisan mangan status', 'pm kisan sikkim 24vi kist', 'pm kisan sikkim rejection', 'pm kisan sikkim ekyc', 'pm kisan sikkim pdf download'],
  },
  'tripura': {
    name: 'Tripura',
    icon: '🌊',
    beneficiaries: '4 Lakh+',
    description: 'Tripura ke 4 lakh se zyada PM Kisan beneficiaries hain. River valleys (Agartala, Udaipur) mein rice cultivation hoti hai. Gomati aur Khowai districts mein rubber plantations prominent hain. Agartala ke Bikash da kehte hain — "Bhai, rubber ki kheti achhi hai yahan, PM Kisan ka paisa extra income hai." Pineapple farming bhi khas hai. Bhu-Sanjog land records system verification ke liye use hota hai.',
    districts: ['Agartala', 'Udaipur', 'Dharmanagar', 'Kailashahar', 'Belonia', 'Ambassa', 'Khowai', 'Teliamura', 'Kumarghat', 'Sabroom'],
    landPortal: 'bhu-sanjog.tripura.gov.in (Bhu-Sanjog portal) + tripura.gov.in + tripuralandrecords.gov.in',
    helpline: '0381-2322102 (Tripura Agriculture Department) + 155261 + 1800-345-6789',
    specialNote: 'Rubber smallholders with less than 2 hectares eligible — Gomati, Khowai major rubber belts',
    keywords: ['pm kisan tripura list 2026', 'pm kisan rubber tripura gomati', 'bhu-sanjog pm kisan tripura', 'pm kisan agartala roster', 'pm kisan gomati village wise', 'pm kisan pineapple tripura', 'pm kisan udaipur status', 'pm kisan khowai rubber', 'pm kisan tripura 24vi kist', 'pm kisan tripura rejection', 'pm kisan tripura ekyc', 'pm kisan tripura pdf download'],
  },
  'meghalaya': {
    name: 'Meghalaya',
    icon: '🌾',
    beneficiaries: '3 Lakh+',
    description: 'Meghalaya ke 3 lakh se zyada PM Kisan beneficiaries hain. Tribal farming communities rice, ginger, turmeric, black pepper hilly terrain par grow karti hain — traditional agroforestry methods. Shillong ke David Sangma kehte hain — "Bhai, adrak ki kmein bahut hoti hai yahan, PM Kisan ka paisa beech mein kaam aata hai." Unique matrilineal land ownership customs hain — women cultivators ka land documentation relatively better hai.',
    districts: ['Shillong', 'Tura', 'Jowai', 'Nongstoin', 'Williamnagar', 'Baghmara', 'Nongpoh', 'Resubelpara', 'Khliehriat'],
    landPortal: 'State land revenue records + meghalaya.gov.in + meghalayalandrecords.gov.in',
    helpline: '0364-2503456 (Meghalaya Agriculture Department) + 155261 + 1800-345-6789',
    specialNote: 'Matrilineal land ownership — women cultivators have better documentation, unique system',
    keywords: ['pm kisan meghalaya list 2026', 'pm kisan matrilineal meghalaya', 'pm kisan ginger meghalaya', 'pm kisan shillong roster', 'pm kisan tura village wise', 'pm kisan women farmers meghalaya', 'pm kisan turmeric meghalaya', 'pm kisan jowai status', 'pm kisan meghalaya 24vi kist', 'pm kisan meghalaya rejection', 'pm kisan meghalaya ekyc', 'pm kisan meghalaya pdf download'],
  },
  'manipur': {
    name: 'Manipur',
    icon: '🌿',
    beneficiaries: '3 Lakh+',
    description: 'Manipur ke 3 lakh se zyada PM Kisan beneficiaries hain. Imphal Valley (Imphal East, Imphal West, Thoubal, Bishnupur) mein rice dominant crop hai. Vegetables, fruits, flowers supplementary hain. Imphal ke Thoiba Singh kehte hain — "Bhai, black rice (Chakhao) hamari specialty hai, PM Kisan ka paisa beech mein kaam aata hai." Black rice (Chakhao) Manipur ki specialty hai — organic cultivation hoti hai, GI tag hai. Patta documents land ownership proof ke liye use hote hain.',
    districts: ['Imphal', 'Thoubal', 'Bishnupur', 'Churachandpur', 'Ukhrul', 'Senapati', 'Tamenglong', 'Jiribam', 'Kakching', 'Nambol'],
    landPortal: 'Patta documents + manipur.gov.in + manipurlandrecords.gov.in',
    helpline: '0385-2445050 (Manipur Agriculture Department) + 155261 + 1800-345-6789',
    specialNote: 'Black rice (Chakhao) organic cultivation unique to Manipur — GI tag, organic farming',
    keywords: ['pm kisan manipur list 2026', 'pm kisan black rice manipur chakhao', 'chakhao pm kisan manipur', 'pm kisan imphal roster', 'pm kisan churachandpur village wise', 'pm kisan ukhrul status', 'patta pm kisan manipur', 'pm kisan organic manipur', 'pm kisan manipur 24vi kist', 'pm kisan manipur rejection', 'pm kisan manipur ekyc', 'pm kisan manipur pdf download'],
  },
  'nagaland': {
    name: 'Nagaland',
    icon: '🌊',
    beneficiaries: '2 Lakh+',
    description: 'Nagaland ke 2 lakh se zyada PM Kisan beneficiaries hain. Tribal farming communities rice, maize, horticulture crops (pineapple, kiwi) terraced hill slopes par grow karti hain. Kohima ke Neikhuo kehte hain — "Bhai, pineapple ki kmein bahut hoti hai yahan, PM Kisan ka paisa beech mein kaam aata hai." Customary law ke under tribal land ownership hai — Land Commission certificates enrollment mein help karte hain. Large cardamom cultivation bhi prominent hai.',
    districts: ['Kohima', 'Dimapur', 'Mokokchung', 'Wokha', 'Tuensang', 'Mon', 'Phek', 'Zunheboto', 'Peren', 'Kiphire'],
    landPortal: 'Land Commission certificates + nagaland.gov.in + nagalandlr.gov.in',
    helpline: '03862-290144 (Nagaland Agriculture Department) + 155261 + 1800-345-6789',
    specialNote: 'Pineapple, kiwi, large cardamom cultivators eligible — customary land ownership',
    keywords: ['pm kisan nagaland list 2026', 'pm kisan tribal nagaland', 'land commission pm kisan nagaland', 'pm kisan kohima roster', 'pm kisan dimapur village wise', 'pm kisan pineapple nagaland', 'pm kisan kiwi nagaland', 'pm kisan wokha status', 'pm kisan nagaland 24vi kist', 'pm kisan nagaland rejection', 'pm kisan nagaland ekyc', 'pm kisan nagaland pdf download'],
  },
  'arunachal-pradesh': {
    name: 'Arunachal Pradesh',
    icon: '🏔️',
    beneficiaries: '2 Lakh+',
    description: 'Arunachal Pradesh ke 2 lakh se zyada PM Kisan beneficiaries hain. Predominantly tribal farming community hai — traditional rice cultivation terraced hillside fields par. Itanagar ke Taku Ringu kehte hain — "Bhai, remote areas mein CSC centres help karte hain, PM Kisan ka paisa beech mein kaam aata hai." Remote districts (Tawang, West Siang, Papum Pare, East Siang) mein farmers ko khas challenges. Community land ownership ke under special documentation requirements hain.',
    districts: ['Itanagar', 'Naharlagun', 'Pasighat', 'Tezpur', 'Tawang', 'West Siang', 'East Siang', 'Papum Pare', 'Lower Subansiri', 'Upper Subansiri', 'Ziro', 'Roing'],
    landPortal: 'Community land ownership documents + arunachal.gov.in + arunachallr.gov.in',
    helpline: '0360-2214567 (AP Agriculture Department) + 155261 + 1800-345-6789',
    specialNote: 'Remote tribal areas mein CSC centres help karte hain — community land ownership',
    keywords: ['pm kisan arunachal pradesh list 2026', 'pm kisan tribal ap', 'pm kisan tawang status', 'community land pm kisan arunachal', 'pm kisan itanagar roster', 'pm kisan pasighat village wise', 'pm kisan remote ap', 'pm kisan west siang', 'pm kisan arunachal 24vi kist', 'pm kisan arunachal rejection', 'pm kisan arunachal ekyc', 'pm kisan arunachal pdf download'],
  },
  'mizoram': {
    name: 'Mizoram',
    icon: '🌾',
    beneficiaries: '1 Lakh+',
    description: 'Mizoram ke 1 lakh se zyada PM Kisan beneficiaries hain. Traditional jhum (shifting) cultivation se settled terrace farming ki taraf transition ho raha hai. Aizawl ke Lalremruata kehte hain — "Bhai, adrak ki kmein bahut hoti hai yahan, PM Kisan ka paisa beech mein kaam aata hai." Rice, ginger, vegetables prominent hain. Village land passes (LPC) primary land ownership proof hain. Ginger cultivation Champhai mein prominent hai — high quality ginger.',
    districts: ['Aizawl', 'Lunglei', 'Champhai', 'Serchhip', 'Kolasib', 'Lawngtlai', 'Mamit', 'Saiha', 'Khawzawl', 'Hnahthial'],
    landPortal: 'Village land passes (LPC) + mizoram.gov.in + mizoramlr.gov.in',
    helpline: '0389-2325678 (Mizoram Agriculture Department) + 155261 + 1800-345-6789',
    specialNote: 'Transition from jhum to settled farming — Village LPC primary proof',
    keywords: ['pm kisan mizoram list 2026', 'pm kisan jhum mizoram', 'village lpc pm kisan mizoram', 'pm kisan champhai ginger', 'pm kisan aizawl roster', 'pm kisan passion fruit mizoram', 'pm kisan lunglei village wise', 'pm kisan terrace mizoram', 'pm kisan mizoram 24vi kist', 'pm kisan mizoram rejection', 'pm kisan mizoram ekyc', 'pm kisan mizoram pdf download'],
  },
  'delhi': {
    name: 'Delhi',
    icon: '🏛️',
    beneficiaries: '50,000+',
    description: 'Delhi ke 50,000 se zyada PM Kisan beneficiaries hain. Urban aur peri-urban farming community hai — vegetables, dairy farming, horticulture city ke outskirts par. Najafgarh ke Ramesh ji kehte hain — "Bhai, sabzi ki kmein hoti hai yahan, PM Kisan ka paisa beech mein kaam aata hai." Najafgarh, Alipur, Bawana rural districts mein small cultivators hain. Revenue Department portal land records maintain karta hai.',
    districts: ['New Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi', 'Central Delhi', 'North West Delhi', 'South West Delhi', 'North East Delhi', 'Shahdara'],
    landPortal: 'Delhi Revenue Department portal + delhi.gov.in + delhilr.gov.in',
    helpline: '1800-180-1835 (Delhi Kisan Helpline) + 155261 + 011-23144567',
    specialNote: 'Peri-urban vegetable growers major beneficiaries — city markets ko supply',
    keywords: ['pm kisan delhi list 2026', 'pm kisan peri-urban delhi', 'pm kisan najafgarh roster', 'pm kisan alipur village wise', 'pm kisan bawana status', 'pm kisan vegetable delhi', 'pm kisan dairy delhi', 'revenue department delhi pm kisan', 'pm kisan delhi 24vi kist', 'pm kisan delhi rejection', 'pm kisan delhi ekyc', 'pm kisan delhi pdf download'],
  },
  'puducherry': {
    name: 'Puducherry',
    icon: '🌊',
    beneficiaries: '30,000+',
    description: 'Puducherry ke 30,000 se zyada PM Kisan beneficiaries hain. Four regions (Puducherry, Karaikal, Mahe, Yanam) mein rice, sugarcane, coconut cultivation hoti hai. Karaikal region (Tamil Nadu enclave) mein rice cultivation prominent hai. Karaikal ke Murugan kehte hain — "Bhai, chawal ki kmein hoti hai yahan, PM Kisan ka paisa beech mein kaam aata hai." e-District land records verification ke liye use hote hain.',
    districts: ['Puducherry', 'Karaikal', 'Mahe', 'Yanam'],
    landPortal: 'e-District portal + puducherry.gov.in + puducherrylr.gov.in',
    helpline: '0413-2222244 (Puducherry Agriculture Department) + 155261 + 1800-345-6789',
    specialNote: 'Rice cultivators in Karaikal (Tamil Nadu enclave) major beneficiaries',
    keywords: ['pm kisan puducherry list 2026', 'pm kisan karaikal rice', 'e-district pm kisan puducherry', 'pm kisan mahe status', 'pm kisan yanam village wise', 'pm kisan rice puducherry', 'pm kisan four regions', 'pm kisan sugarcane puducherry', 'pm kisan puducherry 24vi kist', 'pm kisan puducherry rejection', 'pm kisan puducherry ekyc', 'pm kisan puducherry pdf download'],
  },
  'andaman-nicobar': {
    name: 'Andaman & Nicobar',
    icon: '🏝️',
    beneficiaries: '10,000+',
    description: 'A&N ke 10,000 se zyada PM Kisan beneficiaries hain. Unique tropical agriculture hai — coconut, arecanut, banana, spices cultivation. Port Blair ke Rajesh ji kehte hain — "Bhai, coconut ki kmein hoti hai yahan, PM Kisan ka paisa beech mein kaam aata hai." South Andaman (Port Blair), North Andaman (Mayabunder), Nicobar (Car Nicobar) districts mein small cultivators hain. Nicobar mein tribal farmers ke paas customary land rights hain — khas documentation requirements hain.',
    districts: ['Port Blair', 'Car Nicobar', 'Mayabunder', 'Rangat', 'Diglipur', 'Little Andaman', 'Campbell Bay'],
    landPortal: 'UT land records + andaman.gov.in + andamanlr.gov.in',
    helpline: '03192-233055 (A&N Agriculture Department) + 155261 + 1800-345-6789',
    specialNote: 'Tribal farmers in Nicobar with customary land rights need special documentation',
    keywords: ['pm kisan andaman nicobar list 2026', 'pm kisan tropical andaman', 'pm kisan port blair roster', 'pm kisan nicobar tribal', 'pm kisan coconut andaman', 'pm kisan car nicobar village wise', 'customary land pm kisan andaman', 'pm kisan arecanut andaman', 'pm kisan andaman 24vi kist', 'pm kisan andaman rejection', 'pm kisan andaman ekyc', 'pm kisan andaman pdf download'],
  },
  'ladakh': {
    name: 'Ladakh',
    icon: '🏔️',
    beneficiaries: '20,000+',
    description: 'Ladakh ke 20,000 se zyada PM Kisan beneficiaries hain. Unique high-altitude agriculture hai — barley, apricot, green pea cultivation Leh aur Kargil districts mein. Leh ke Tsering Namgyal kehte hain — "Bhai, thand bahut hoti hai yahan, PM Kisan ka paisa input cost cover karta hai." Cold desert region mein extreme climate hai — ₹6000 annual support high input costs cover karta hai. UT land records system verification ke liye use hota hai.',
    districts: ['Leh', 'Kargil', 'Nubra', 'Zanskar'],
    landPortal: 'UT land records + ladakh.gov.in + ladakhlr.gov.in',
    helpline: '01982-252064 (Ladakh Agriculture Department) + 155261 + 1800-345-6789',
    specialNote: 'High-altitude cold desert — ₹6000 crucial for high input costs, extreme climate',
    keywords: ['pm kisan ladakh list 2026', 'pm kisan high altitude ladakh', 'pm kisan leh roster', 'pm kisan kargil village wise', 'pm kisan barley ladakh', 'pm kisan apricot ladakh', 'pm kisan cold desert ladakh', 'pm kisan extreme climate', 'pm kisan ladakh 24vi kist', 'pm kisan ladakh rejection', 'pm kisan ladakh ekyc', 'pm kisan ladakh pdf download'],
  },
  'lakshadweep': {
    name: 'Lakshadweep',
    icon: '🌊',
    beneficiaries: '5,000+',
    description: 'Lakshadweep ke 5,000 se zyada PM Kisan beneficiaries hain. Economy coconut cultivation, tuna fishing, coir production par based hai. Kavaratti ke Mohamed kehte hain — "Bhai, nariyal ki kmein hoti hai yahan, PM Kisan ka paisa beech mein kaam aata hai." 10 inhabited islands (Kavaratti, Agatti, Amini, Minicoy, Andrott, Kalpeni, Kiltan, Chetlat, Bitra, Kadmat) par coconut cultivators primary beneficiaries hain. High transportation costs ko ₹6000 help karta hai.',
    districts: ['Kavaratti', 'Agatti', 'Amini', 'Minicoy', 'Andrott', 'Kalpeni', 'Kiltan', 'Chetlat', 'Bitra', 'Kadmat'],
    landPortal: 'UT Administration land records + lakshadweep.gov.in + lakshadweeplr.gov.in',
    helpline: '04896-266205 (Lakshadweep Agriculture Department) + 155261 + 1800-345-6789',
    specialNote: 'Coconut cultivators across 10 inhabited islands — high transportation costs',
    keywords: ['pm kisan lakshadweep list 2026', 'pm kisan islands lakshadweep', 'pm kisan coconut lakshadweep', 'pm kisan kavaratti roster', 'pm kisan agatti village wise', 'pm kisan minicoy status', 'pm kisan tuna fishing lakshadweep', 'pm kisan high transport cost', 'pm kisan lakshadweep 24vi kist', 'pm kisan lakshadweep rejection', 'pm kisan lakshadweep ekyc', 'pm kisan lakshadweep pdf download'],
  },
  'chandigarh': {
    name: 'Chandigarh',
    icon: '🏛️',
    beneficiaries: '20,000+',
    description: 'Chandigarh ke 20,000 se zyada PM Kisan beneficiaries hain. Limited but productive peri-urban agriculture hai — wheat, vegetables, dairy units city ke outskirts par. Sector 45 ke Harpreet Singh kehte hain — "Bhai, sabzi ki kmein hoti hai outskirts par, PM Kisan ka paisa beech mein kaam aata hai." UT Administration land records verification ke liye use hote hain. Vegetable cultivators jo city markets ko supply karte hain aur dairy farmers typical beneficiaries hain.',
    districts: ['Chandigarh'],
    landPortal: 'UT Administration land records + chandigarh.gov.in + chandigarhlr.gov.in',
    helpline: '0172-2704567 (Chandigarh Agriculture Department) + 155261 + 1800-345-6789',
    specialNote: 'Peri-urban vegetable suppliers to city markets — limited but productive',
    keywords: ['pm kisan chandigarh list 2026', 'pm kisan peri-urban chandigarh', 'pm kisan vegetable chandigarh', 'pm kisan dairy chandigarh', 'pm kisan wheat chandigarh', 'pm kisan city markets chandigarh', 'pm kisan ut chandigarh', 'pm kisan chandigarh 24vi kist', 'pm kisan chandigarh rejection', 'pm kisan chandigarh ekyc', 'pm kisan chandigarh pdf download', 'pm kisan chandigarh roster'],
  },
  'dadra-nagar-haveli': {
    name: 'Dadra & Nagar Haveli',
    icon: '🌾',
    beneficiaries: '30,000+',
    description: 'DNH ke 30,000 se zyada PM Kisan beneficiaries hain. Tribal-dominated agriculture hai — rice, ragi, mango cultivation. Silvassa ke Bhikhu bhai kehte hain — "Bhai, aam ki kmein hoti hai yahan, PM Kisan ka paisa beech mein kaam aata hai." Silvassa, Daman, Diu mein small tribal cultivators hain. Forest land rights holders aur mango orchard owners key beneficiaries hain. UT land records verification ke liye use hote hain.',
    districts: ['Silvassa', 'Amli'],
    landPortal: 'UT land records + dnh.gov.in + dnhlr.gov.in',
    helpline: '0260-3296789 (DNH Agriculture Department) + 155261 + 1800-345-6789',
    specialNote: 'Tribal farmers with forest land rights eligible — mango orchard owners',
    keywords: ['pm kisan dadra nagar haveli list 2026', 'pm kisan tribal dnh', 'pm kisan silvassa roster', 'forest land pm kisan dnh', 'pm kisan mango dnh', 'pm kisan ragi dnh', 'pm kisan amli village wise', 'pm kisan forest rights dnh', 'pm kisan dnh 24vi kist', 'pm kisan dnh rejection', 'pm kisan dnh ekyc', 'pm kisan dnh pdf download'],
  },
  'daman-diu': {
    name: 'Daman & Diu',
    icon: '🏝️',
    beneficiaries: '10,000+',
    description: 'Daman & Diu ke 10,000 se zyada PM Kisan beneficiaries hain. Rice, coconut, mango cultivation prominent hai. Daman ke Paresh bhai kehte hain — "Bhai, nariyal aur aam ki kmein hoti hai yahan, PM Kisan ka paisa beech mein kaam aata hai." Small cultivators eligible hain. UT land records verification ke liye use hote hain.',
    districts: ['Daman', 'Diu'],
    landPortal: 'UT land records + daman.nic.in + damanlr.gov.in',
    helpline: '0260-2521234 (D&D Agriculture Department) + 155261 + 1800-345-6789',
    specialNote: 'Coconut aur mango cultivators major beneficiaries — small holdings',
    keywords: ['pm kisan daman diu list 2026', 'pm kisan coconut daman', 'pm kisan mango diu', 'pm kisan rice daman', 'pm kisan small holdings daman', 'pm kisan ut daman', 'pm kisan daman 24vi kist', 'pm kisan daman rejection', 'pm kisan daman ekyc', 'pm kisan daman pdf download', 'pm kisan daman roster', 'pm kisan diu village wise'],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const stateInfo = STATE_DATA[state];

  if (!stateInfo) {
    return { title: 'State Not Found' };
  }

  return {
    title: `PM Kisan Beneficiary List ${stateInfo.name} 2026 — Village Wise Roster & Status Check`,
    description: `${stateInfo.name} mein PM Kisan beneficiary list check karo. ${stateInfo.beneficiaries} registered farmers. Village wise roster, status check, aur PDF download guide.`,
    keywords: stateInfo.keywords.join(', '),
  };
}

export async function generateStaticParams() {
  return Object.keys(STATE_DATA).map((state) => ({ state }));
}

export default async function StateBeneficiaryPage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const stateInfo = STATE_DATA[state];

  if (!stateInfo) {
    notFound();
  }

  return (
    <>
      <div className="bg-[var(--color-primary)] py-8">
        <div className="container-site max-w-3xl text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            {stateInfo.icon} {stateInfo.name}
          </span>
          <h1 className="text-2xl md:text-3xl font-black text-white mb-2">
            PM Kisan Beneficiary List {stateInfo.name}
          </h1>
          <p className="text-green-200 text-sm">
            {stateInfo.beneficiaries} Registered Farmers
          </p>
        </div>
      </div>

      <div className="container-site max-w-3xl py-8">
        <nav className="text-xs text-[var(--color-text-muted)] mb-6 flex gap-1 flex-wrap">
          <Link href="/" className="hover:text-[var(--color-primary)]">Home</Link>
          <span>/</span>
          <Link href="/beneficiary-list" className="hover:text-[var(--color-primary)]">Beneficiary List</Link>
          <span>/</span>
          <span className="text-[var(--color-text)] font-medium">{stateInfo.name}</span>
        </nav>

        <PdfDownloadButton stateName={stateInfo.name} />

        <section className="mb-6">
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            {stateInfo.description}
          </p>
        </section>

        <div className="mb-6">
          <a
            href="https://pmkisan.gov.in/BeneficiaryList.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[var(--color-primary)] hover:opacity-90 text-white font-black py-4 rounded-xl text-center transition-all shadow-md hover:shadow-lg"
          >
            📋 Official Beneficiary List Dekho →
          </a>
          <p className="text-xs text-[var(--color-text-muted)] text-center mt-2">
            Official portal par jakar apna naam check karo
          </p>
        </div>

        <section className="mb-6">
          <h2 className="font-black text-[var(--color-text)] mb-3">📍 Major Districts:</h2>
          <div className="flex flex-wrap gap-2">
            {stateInfo.districts.map((district) => (
              <span
                key={district}
                className="px-3 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-bold rounded-xl"
              >
                {district}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
            <h3 className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">📋 Land Record Portal</h3>
            <p className="text-xs text-blue-800 dark:text-blue-300">{stateInfo.landPortal}</p>
          </div>
        </section>

        {stateInfo.stateScheme && (
          <section className="mb-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-4">
              <h3 className="font-black text-purple-800 dark:text-purple-300 text-sm mb-2">🎁 State Scheme (Additional Benefit)</h3>
              <p className="text-xs text-purple-800 dark:text-purple-300">{stateInfo.stateScheme}</p>
            </div>
          </section>
        )}

        {stateInfo.specialNote && (
          <section className="mb-6">
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
              <h3 className="font-black text-amber-800 dark:text-amber-300 text-sm mb-2">⚠️ Special Note</h3>
              <p className="text-xs text-amber-800 dark:text-amber-300">{stateInfo.specialNote}</p>
            </div>
          </section>
        )}

        {stateInfo.helpline && (
          <section className="mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
              <h3 className="font-black text-green-800 dark:text-green-300 text-sm mb-2">📞 Helpline Numbers</h3>
              <p className="text-xs text-green-800 dark:text-green-300">{stateInfo.helpline}</p>
            </div>
          </section>
        )}

        <section className="mb-6">
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-xl p-5">
            <h2 className="font-black text-green-800 dark:text-green-300 mb-3">
              {stateInfo.name} Mein Naam Kaise Check Karein?
            </h2>
            <ol className="space-y-2 text-sm text-green-800 dark:text-green-300">
              <li><strong>1.</strong> Upar diye gaye official portal button par click karo</li>
              <li><strong>2.</strong> "Beneficiary List" option select karo</li>
              <li><strong>3.</strong> State mein "{stateInfo.name}" already selected hoga</li>
              <li><strong>4.</strong> Apna District select karo</li>
              <li><strong>5.</strong> Block aur Village choose karo</li>
              <li><strong>6.</strong> "Get Report" click karo — poori list aa jayegi</li>
              <li><strong>7.</strong> Ctrl+F se apna naam search karo</li>
            </ol>
          </div>
        </section>

        <section className="mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
            <h3 className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">📥 PDF Kaise Download Karein?</h3>
            <p className="text-xs text-blue-800 dark:text-blue-300">
              Official portal par list khulne ke baad:
              <br />
              • <strong>PC:</strong> Ctrl+P dabao → "Save as PDF" select karo
              <br />
              • <strong>Mobile:</strong> Share → Print → Save as PDF
              <br />
              • Ya upar wala <strong>green button</strong> dabao — {stateInfo.name} ka pura page PDF mein save ho jayega!
            </p>
          </div>
        </section>

        <Link
          href="/beneficiary-list"
          className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold text-sm hover:underline"
        >
          ← Back to All States
        </Link>
      </div>
    </>
  );
}