import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

// ═══════════════════════════════════════════════════════════
// STATE DATA - 37 States & UTs
// ═══════════════════════════════════════════════════════════
const STATE_DATA: Record<string, {
  name: string;
  icon: string;
  beneficiaries: string;
  description: string;
  districts: string[];
}> = {
  'uttar-pradesh': {
    name: 'Uttar Pradesh',
    icon: '🏔️',
    beneficiaries: '2.5 Crore+',
    description: 'UP mein sabse zyada PM Kisan beneficiaries hain. Wheat, sugarcane aur rice cultivators yahan major beneficiaries hain.',
    districts: ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Meerut', 'Prayagraj', 'Ghaziabad'],
  },
  'bihar': {
    name: 'Bihar',
    icon: '🌊',
    beneficiaries: '80 Lakh+',
    description: 'Bihar ke small farmers PM Kisan se bahut benefit le rahe hain. Rice aur wheat cultivation primary hai.',
    districts: ['Patna', 'Gaya', 'Muzaffarpur', 'Darbhanga', 'Bhagalpur', 'Purnia'],
  },
  'madhya-pradesh': {
    name: 'Madhya Pradesh',
    icon: '🌿',
    beneficiaries: '70 Lakh+',
    description: 'MP mein soybean, wheat aur pulses cultivators PM Kisan beneficiaries hain.',
    districts: ['Indore', 'Bhopal', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar'],
  },
  'rajasthan': {
    name: 'Rajasthan',
    icon: '☀️',
    beneficiaries: '65 Lakh+',
    description: 'Rajasthan ke bajra, wheat aur mustard cultivators PM Kisan se benefit le rahe hain.',
    districts: ['Jaipur', 'Jodhpur', 'Kota', 'Udaipur', 'Ajmer', 'Bikaner'],
  },
  'maharashtra': {
    name: 'Maharashtra',
    icon: '🌾',
    beneficiaries: '1 Crore+',
    description: 'Maharashtra mein cotton, sugarcane aur onion cultivators major beneficiaries hain.',
    districts: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur'],
  },
  'west-bengal': {
    name: 'West Bengal',
    icon: '🐟',
    beneficiaries: '70 Lakh+',
    description: 'West Bengal mein rice, jute aur potato cultivators PM Kisan beneficiaries hain.',
    districts: ['Kolkata', 'Howrah', 'North 24 Parganas', 'South 24 Parganas', 'Burdwan'],
  },
  'karnataka': {
    name: 'Karnataka',
    icon: '🌴',
    beneficiaries: '50 Lakh+',
    description: 'Karnataka mein sugarcane, cotton aur ragi cultivators PM Kisan se benefit le rahe hain.',
    districts: ['Bengaluru', 'Mysuru', 'Hubballi', 'Mangaluru', 'Belagavi'],
  },
  'odisha': {
    name: 'Odisha',
    icon: '🌊',
    beneficiaries: '40 Lakh+',
    description: 'Odisha ke rice, pulses aur oilseeds cultivators PM Kisan beneficiaries hain.',
    districts: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Puri', 'Balasore'],
  },
  'tamil-nadu': {
    name: 'Tamil Nadu',
    icon: '🌞',
    beneficiaries: '40 Lakh+',
    description: 'Tamil Nadu mein rice, banana aur sugarcane cultivators major beneficiaries hain.',
    districts: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
  },
  'punjab': {
    name: 'Punjab',
    icon: '🌾',
    beneficiaries: '30 Lakh+',
    description: 'Punjab ke wheat, rice aur maize cultivators PM Kisan beneficiaries hain.',
    districts: ['Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda'],
  },
  'haryana': {
    name: 'Haryana',
    icon: '🚜',
    beneficiaries: '25 Lakh+',
    description: 'Haryana mein wheat, rice aur sugarcane cultivators PM Kisan se benefit le rahe hain.',
    districts: ['Chandigarh', 'Faridabad', 'Gurugram', 'Panipat', 'Ambala'],
  },
  'andhra-pradesh': {
    name: 'Andhra Pradesh',
    icon: '🌶️',
    beneficiaries: '50 Lakh+',
    description: 'AP ke rice, tobacco aur aquaculture farmers PM Kisan beneficiaries hain.',
    districts: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Nellore'],
  },
  'kerala': {
    name: 'Kerala',
    icon: '🌊',
    beneficiaries: '20 Lakh+',
    description: 'Kerala mein rice, coconut aur rubber cultivators PM Kisan se benefit le rahe hain.',
    districts: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam'],
  },
  'telangana': {
    name: 'Telangana',
    icon: '🌴',
    beneficiaries: '35 Lakh+',
    description: 'Telangana ke rice, cotton aur turmeric cultivators major beneficiaries hain.',
    districts: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam'],
  },
  'gujarat': {
    name: 'Gujarat',
    icon: '🌿',
    beneficiaries: '50 Lakh+',
    description: 'Gujarat mein cotton, groundnut aur wheat cultivators PM Kisan beneficiaries hain.',
    districts: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'],
  },
  'assam': {
    name: 'Assam',
    icon: '🌾',
    beneficiaries: '30 Lakh+',
    description: 'Assam ke rice, tea aur jute cultivators PM Kisan se benefit le rahe hain.',
    districts: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon'],
  },
  'jharkhand': {
    name: 'Jharkhand',
    icon: '🌊',
    beneficiaries: '30 Lakh+',
    description: 'Jharkhand mein rice, pulses aur vegetables cultivators major beneficiaries hain.',
    districts: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar'],
  },
  'uttarakhand': {
    name: 'Uttarakhand',
    icon: '🏔️',
    beneficiaries: '15 Lakh+',
    description: 'Uttarakhand ke rice, wheat aur horticulture farmers PM Kisan beneficiaries hain.',
    districts: ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rishikesh'],
  },
  'chhattisgarh': {
    name: 'Chhattisgarh',
    icon: '🌾',
    beneficiaries: '40 Lakh+',
    description: 'Chhattisgarh mein rice aur pulses cultivators PM Kisan se benefit le rahe hain.',
    districts: ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg'],
  },
  'himachal-pradesh': {
    name: 'Himachal Pradesh',
    icon: '🏔️',
    beneficiaries: '10 Lakh+',
    description: 'HP ke apple, wheat aur maize cultivators PM Kisan beneficiaries hain.',
    districts: ['Shimla', 'Mandi', 'Solan', 'Dharamshala', 'Kullu'],
  },
  'jammu-kashmir': {
    name: 'Jammu & Kashmir',
    icon: '🏔️',
    beneficiaries: '12 Lakh+',
    description: 'J&K mein apple, saffron aur rice cultivators major beneficiaries hain.',
    districts: ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Kathua'],
  },
  'goa': {
    name: 'Goa',
    icon: '🌿',
    beneficiaries: '1 Lakh+',
    description: 'Goa ke rice, coconut aur cashew cultivators PM Kisan se benefit le rahe hain.',
    districts: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa'],
  },
  'sikkim': {
    name: 'Sikkim',
    icon: '🏔️',
    beneficiaries: '50,000+',
    description: 'Sikkim mein cardamom, ginger aur rice cultivators PM Kisan beneficiaries hain.',
    districts: ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan'],
  },
  'tripura': {
    name: 'Tripura',
    icon: '🌊',
    beneficiaries: '4 Lakh+',
    description: 'Tripura ke rice, rubber aur pineapple cultivators major beneficiaries hain.',
    districts: ['Agartala', 'Udaipur', 'Dharmanagar', 'Kailashahar'],
  },
  'meghalaya': {
    name: 'Meghalaya',
    icon: '🌾',
    beneficiaries: '3 Lakh+',
    description: 'Meghalaya mein rice, ginger aur turmeric cultivators PM Kisan se benefit le rahe hain.',
    districts: ['Shillong', 'Tura', 'Jowai', 'Nongstoin'],
  },
  'manipur': {
    name: 'Manipur',
    icon: '🌿',
    beneficiaries: '3 Lakh+',
    description: 'Manipur ke rice, vegetables aur horticulture farmers PM Kisan beneficiaries hain.',
    districts: ['Imphal', 'Thoubal', 'Bishnupur', 'Churachandpur'],
  },
  'nagaland': {
    name: 'Nagaland',
    icon: '🌊',
    beneficiaries: '2 Lakh+',
    description: 'Nagaland mein rice, maize aur horticulture cultivators major beneficiaries hain.',
    districts: ['Kohima', 'Dimapur', 'Mokokchung', 'Wokha'],
  },
  'arunachal-pradesh': {
    name: 'Arunachal Pradesh',
    icon: '🏔️',
    beneficiaries: '2 Lakh+',
    description: 'AP ke rice, maize aur horticulture farmers PM Kisan se benefit le rahe hain.',
    districts: ['Itanagar', 'Naharlagun', 'Pasighat', 'Tezpur'],
  },
  'mizoram': {
    name: 'Mizoram',
    icon: '🌾',
    beneficiaries: '1 Lakh+',
    description: 'Mizoram mein rice, ginger aur vegetables cultivators PM Kisan beneficiaries hain.',
    districts: ['Aizawl', 'Lunglei', 'Champhai', 'Serchhip'],
  },
  'delhi': {
    name: 'Delhi',
    icon: '🏛️',
    beneficiaries: '50,000+',
    description: 'Delhi ke vegetables, dairy aur horticulture farmers PM Kisan se benefit le rahe hain.',
    districts: ['New Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi'],
  },
  'puducherry': {
    name: 'Puducherry',
    icon: '🌊',
    beneficiaries: '30,000+',
    description: 'Puducherry mein rice, sugarcane aur coconut cultivators major beneficiaries hain.',
    districts: ['Puducherry', 'Karaikal', 'Mahe', 'Yanam'],
  },
  'andaman-nicobar': {
    name: 'Andaman & Nicobar',
    icon: '🏝️',
    beneficiaries: '10,000+',
    description: 'A&N ke coconut, arecanut aur spices cultivators PM Kisan beneficiaries hain.',
    districts: ['Port Blair', 'Car Nicobar', 'Mayabunder', 'Rangat'],
  },
  'ladakh': {
    name: 'Ladakh',
    icon: '🏔️',
    beneficiaries: '20,000+',
    description: 'Ladakh mein barley, apricot aur peas cultivators PM Kisan se benefit le rahe hain.',
    districts: ['Leh', 'Kargil'],
  },
  'lakshadweep': {
    name: 'Lakshadweep',
    icon: '🌊',
    beneficiaries: '5,000+',
    description: 'Lakshadweep ke coconut cultivators aur tuna fishermen PM Kisan beneficiaries hain.',
    districts: ['Kavaratti', 'Agatti', 'Amini', 'Minicoy'],
  },
  'chandigarh': {
    name: 'Chandigarh',
    icon: '🏛️',
    beneficiaries: '20,000+',
    description: 'Chandigarh ke wheat, vegetables aur dairy farmers PM Kisan se benefit le rahe hain.',
    districts: ['Chandigarh'],
  },
  'dadra-nagar-haveli': {
    name: 'Dadra & Nagar Haveli',
    icon: '🌾',
    beneficiaries: '30,000+',
    description: 'DNH ke rice, ragi aur mango cultivators major beneficiaries hain.',
    districts: ['Silvassa', 'Amli'],
  },
  'daman-diu': {
    name: 'Daman & Diu',
    icon: '🏝️',
    beneficiaries: '10,000+',
    description: 'Daman & Diu ke rice, coconut aur mango cultivators PM Kisan beneficiaries hain.',
    districts: ['Daman', 'Diu'],
  },
};

// ═══════════════════════════════════════════════════════════
// METADATA
// ═══════════════════════════════════════════════════════════
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
  };
}

// ═══════════════════════════════════════════════════════════
// STATIC PARAMS
// ═══════════════════════════════════════════════════════════
export function generateStaticParams() {
  return Object.keys(STATE_DATA).map((state) => ({ state }));
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════
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
      {/* Hero Section */}
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

        {/* Breadcrumb */}
        <nav className="text-xs text-[var(--color-text-muted)] mb-6 flex gap-1 flex-wrap">
          <Link href="/" className="hover:text-[var(--color-primary)]">Home</Link>
          <span>/</span>
          <Link href="/beneficiary-list" className="hover:text-[var(--color-primary)]">Beneficiary List</Link>
          <span>/</span>
          <span className="text-[var(--color-text)] font-medium">{stateInfo.name}</span>
        </nav>

        {/* Description */}
        <section className="mb-6">
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            {stateInfo.description}
          </p>
        </section>

        {/* Official Portal Button */}
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

        {/* Districts */}
        <section className="mb-6">
          <h2 className="font-black text-[var(--color-text)] mb-3">
            📍 Major Districts:
          </h2>
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

        {/* How to Check */}
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

        {/* PDF Download Info */}
        <section className="mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
            <h3 className="font-black text-blue-800 dark:text-blue-300 text-sm mb-2">
              📥 PDF Kaise Download Karein?
            </h3>
            <p className="text-xs text-blue-800 dark:text-blue-300">
              Official portal par list khulne ke baad:
              <br />
              • <strong>PC:</strong> Ctrl+P dabao → "Save as PDF" select karo
              <br />
              • <strong>Mobile:</strong> Share → Print → Save as PDF
            </p>
          </div>
        </section>

        {/* Back Link */}
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