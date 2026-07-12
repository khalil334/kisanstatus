import Image from 'next/image';
import Link from 'next/link';
import { GovLink } from '@/components/ArticleShared';

export default function BakriPalanYojana() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-gray-800 leading-relaxed">
      <Image 
        src="/images/goat-farming/bakri-palan/hero.jpg" 
        alt="Bakri Palan Farm Setup in Rajasthan - National Livestock Mission Subsidy Guide" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md" 
      />
      
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Bakri Palan Yojana 2026: NLM Subsidy, Loan Process, aur Real Profit Analysis
      </h1>
      
      <p className="text-lg mb-4 italic">
        Pichle mahine Bikaner ke Nokha gaon mein ek 28 saal ka ladka mila. MBA chhod diya, gaon aaya, aur 15 Barbari bakriyon se shuru kiya. Aaj uske paas 80+ bakriyan hain.
      </p>
      
      <p className="mb-6">
        "Bhai, pehle saal mein 2 bakriyan mar gayi. 40,000 ka loss hua. Par tab bhi maine chhoda nahi," usne kaha. Yeh hai asliyat bakri palan ki. Na toh yeh koi raato-raat ameer banne ka formula hai, aur na hi isme koi risk nahi hai.
      </p>
      
      <p className="mb-6">
        Par jab theek se kiya jaye, toh gaon ka sabse reliable income source ban sakta hai. Sarkar ki National Livestock Mission (NLM) jaisi schemes isko aur bhi feasible bana deti hain. Aaj ke article mein hum sirf theory nahi, ground reality baat karenge - costs, risks, aur actual profit margins jo koi nahi batata.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Bakri Palan Mein Paisa Kahan Se Aata Hai? Teen Realistic Income Streams
      </h2>
      
      <p className="mb-4">
        Bahut log sirf bachhon ki bikri par focus karte hain, par successful farmers teeno revenue streams ko optimize karte hain.
      </p>
      
      <p className="mb-4">
        <strong>Bachhon ki bikri (70% revenue):</strong> Yeh aapka primary income source hai. Eid-ul-Adha aur Diwali ke season mein rates peak par hote hain. Ajmer ki mandi mein pichle Eid par Barbari breed ke 6 mahine ke bachhe 350 rupaye/kg live weight par bike the. Normal season mein yeh 280-320 rupaye/kg rehta hai.
      </p>
      
      <p className="mb-4">
        Matlab ek 20-25 kg ka bachha 6,000 se 8,500 rupaye mein bikega. Season aur mandi ke hisaab se yeh range upar-neeche hota rehta hai. Rajasthan mein Sirohi breed ke bachhe thoda premium rate par bikte hain (320-380 rupaye/kg), jabki UP/Bihar mein Barbari ka rate stable rehta hai.
      </p>

      <p className="mb-4">
        <strong>Doodh (15-20% revenue):</strong> Sojat aur Jamunapari naslein rozana 2-3 litre doodh deti hain. Gaon ke level par bakri ka doodh 80-100 rupaye/litre bikta hai. Shehari areas mein 150-200 rupaye tak milta hai. Par yaad rakho - yeh secondary income hai, primary nahi. Doodh dene wali naslein zyada feed khati hain aur unka management bhi intensive hota hai.
      </p>

      <p className="mb-6">
        <strong>Manure/Lenda (10-15% revenue):</strong> Ek truck (lagbhag 2-3 ton) lenda ka 2,000-3,000 rupaye milta hai. Agar aapke paas 50+ bakriyan hain, toh mahine mein 1-2 truck lenda nikalta hai. Organic farming wale kisaan regular khareedte hain. Kuch farmers isko suna kar packaged vermi-compost bhi banate hain, jisme margin 3-4x ho jata hai.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Nasl Ka Chunaav: Yahan 90% Naye Farmers Galti Karte Hain
      </h2>
      
      <p className="mb-4">
        Maine dekha hai ki naye log aksar YouTube dekh kar exotic naslein chun lete hain - Boer goat, Anglo-Nubian, ya Saanen. Phir 6 mahine baad pachtate hain. Kyun?
      </p>
      
      <p className="mb-4">
        Har nasl apne native environment ke liye develop hui hai. Boer goat (South African) wazan mein bhari hai (80-100 kg), par Rajasthan ki garmi aur local feed mein survive nahi kar sakti. Mortality rate 15-20% tak chala jata hai. Aapko wahi nasl chahiye jo aapke area ki climate, available feed, aur local market demand ke liye suitable ho.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-green-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Nasl</th>
              <th className="py-2 px-4 border-b text-left">Native Area</th>
              <th className="py-2 px-4 border-b text-left">Adult Weight</th>
              <th className="py-2 px-4 border-b text-left">Reality Check</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Sirohi</td>
              <td className="py-2 px-4 border-b">Rajasthan, Gujarat</td>
              <td className="py-2 px-4 border-b">35-45 kg</td>
              <td className="py-2 px-4 border-b">Best for beginners, kam feed mein chalti hai, mortality 2-3%</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Barbari</td>
              <td className="py-2 px-4 border-b">UP, Bihar, Haryana</td>
              <td className="py-2 px-4 border-b">25-35 kg</td>
              <td className="py-2 px-4 border-b">Chhote space mein rehti hai, 2-3 bachhe deti hai, ideal for stall feeding</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Sojat</td>
              <td className="py-2 px-4 border-b">Rajasthan (Pali, Jodhpur)</td>
              <td className="py-2 px-4 border-b">40-55 kg</td>
              <td className="py-2 px-4 border-b">Sabse badi desi nasl, doodh bhi achha deti hai (2.5-3L/day)</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Jamunapari</td>
              <td className="py-2 px-4 border-b">UP (Etawah, Agra)</td>
              <td className="py-2 px-4 border-b">45-60 kg</td>
              <td className="py-2 px-4 border-b">Zyada doodh (3-4L/day), par feed aur care zyada chahiye</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Osmanabadi</td>
              <td className="py-2 px-4 border-b">Maharashtra, Karnataka</td>
              <td className="py-2 px-4 border-b">30-40 kg</td>
              <td className="py-2 px-4 border-b">Drought-resistant, sukhe ilaqon ke liye best, kam paani mein chalti hai</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        Pashu Chikitsa Adhikari (Veterinary Officer) Dr. Rajesh Kumar, jo Ajmer mein 15 saal se practice kar rahe hain, kehte hain: "Pehli baar shuru karne walon ko hamesha apne zila ki native breed se start karna chahiye. Mortality rate 2-3% rehta hai, jabki exotic breeds mein 10-15% tak ho sakta hai. Aur native breeds ki local market mein demand bhi zyada hoti hai."
      </p>

      <p className="mb-6">
        Agar aap UP/Bihar se hain, toh Barbari best hai. Rajasthan/Gujarat mein Sirohi ya Sojat try karein. Maharashtra mein Osmanabadi. Apne local KVK (Krishi Vigyan Kendra) se confirm karein ki aapke specific area ke liye kaunsi breed recommend ki jati hai. KVK officers free consultation dete hain.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Kitna Paisa Lagega? Realistic Budget Breakdown (2026 Prices)
      </h2>
      
      <p className="mb-4">
        Yeh numbers approximate hain. Aapke area, labor cost, aur material quality ke hisaab se 20-30% upar-neeche ho sakte hain. Maine 20 bakri + 2 bakra wale farm ka realistic budget banaya hai.
      </p>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="font-bold text-lg mb-3">20 Bakri Farm Setup Cost (2026 Estimates)</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Shed (200-250 sq ft, cemented floor, proper drainage, ventilation):</span>
            <span className="font-semibold">₹80,000 - ₹1,20,000</span>
          </li>
          <li className="flex justify-between">
            <span>20 Female (6-8 months old, good breed, vaccinated):</span>
            <span className="font-semibold">₹1,40,000 - ₹1,80,000</span>
          </li>
          <li className="flex justify-between">
            <span>2 Male (1 year+, proven breeder, health certificate):</span>
            <span className="font-semibold">₹25,000 - ₹35,000</span>
          </li>
          <li className="flex justify-between">
            <span>6 months feed & fodder (green + dry + concentrate):</span>
            <span className="font-semibold">₹50,000 - ₹70,000</span>
          </li>
          <li className="flex justify-between">
            <span>Insurance (all animals, 1 year premium):</span>
            <span className="font-semibold">₹8,000 - ₹12,000</span>
          </li>
          <li className="flex justify-between">
            <span>Vaccination & medicines (initial 6 months):</span>
            <span className="font-semibold">₹5,000 - ₹8,000</span>
          </li>
          <li className="flex justify-between">
            <span>Equipment (feeders, water tanks, chaff cutter, ropes):</span>
            <span className="font-semibold">₹15,000 - ₹25,000</span>
          </li>
          <li className="flex justify-between border-t pt-2 font-bold text-lg">
            <span>Total Investment Range:</span>
            <span className="text-green-700">₹3,23,000 - ₹4,50,000</span>
          </li>
        </ul>
      </div>

      <p className="mb-4">
        Ab agar aapko kisi scheme se 50% subsidy mil jati hai, toh aapka out-of-pocket kharcha ₹1.6-2.25 lakh reh jata hai. Yeh substantial amount hai, par manageable hai agar aapke paas kuch savings hain ya family support hai.
      </p>

      <p className="mb-6">
        <strong>Hidden costs jo log bhool jaate hain:</strong> Land preparation (leveling, fencing), electricity connection, borewell ya water source, aur emergency fund (kam se kam 50,000 rupaye side mein rakhein unexpected expenses ke liye).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        National Livestock Mission (NLM) Subsidy: Complete Application Process
      </h2>
      
      <p className="mb-4">
        Yeh scheme 2014-15 se chal rahi hai, par 2021 mein isko revamp kiya gaya. Budget bada hai (₹2,000+ crore allocated), par awareness kam hai. Maine kai kisaanon se baat ki jinhe iske baare mein pata hi nahi tha.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-5 mb-6 rounded-r-lg">
        <h3 className="font-bold text-lg text-amber-900 mb-2">⚠️ Zaroori Baat: NLM-EDP Ka Minimum Unit Size</h3>
        <p className="mb-3 text-amber-900">
          Upar jo 20 bakri wala budget diya hai, wo <strong>NLM-EDP (Entrepreneurship Development Programme) ke liye directly eligible nahi hai</strong>. NLM-EDP ka minimum eligible unit size <strong>100 female + 5 male goats</strong> hai (scale 100+5 se 500+25 tak hoti hai). Yeh scheme bade commercial units ke liye design hui hai.
        </p>
        <p className="text-amber-900">
          Agar aap 10-20 bakriyon se shuru karna chahte hain (jo beginners ke liye recommended hai), toh neeche diye gaye <Link href="#chhote-farmers-ke-liye-vikalp" className="underline font-semibold hover:text-amber-700">alternative funding options</Link> dekhein.
        </p>
      </div>

      <p className="mb-4">
        <strong>Eligibility Criteria:</strong> Individual farmers, SHGs (Self Help Groups), FPOs (Farmer Producer Organizations), JLGs (Joint Liability Groups), Farmer Cooperative Organisations, aur Section 8 companies apply kar sakte hain. Zameen honi chahiye - owned ya leased (minimum 5-7 years lease agreement). Bank CIBIL score theek hona chahiye (700+ recommended). Koi purana loan default nahi hona chahiye. Agar aapka <Link href="/articles/KisanCreditCardOnlineApply2026" className="text-blue-600 hover:underline">Kisan Credit Card (KCC)</Link> already hai aur repayment history achhi hai, toh loan approval jaldi ho jata hai.
      </p>

      <p className="mb-4">
        <strong>Subsidy Structure:</strong> General category ko <strong>50% capital subsidy</strong> milti hai, maximum ceiling <strong>₹50 lakh tak</strong> hai. Yeh subsidy capital investment par milti hai - shed construction, equipment purchase, animal purchase sab cover hota hai. North-East aur Himalayan states mein central aur state government ka funding ratio 90:10 hai, baaki states mein 60:40.
      </p>

      <p className="mb-4">
        SC/ST farmers, women entrepreneurs, aur North-East regions ke liye additional benefits ho sakte hain - yeh state-specific hota hai. Exact figures jaanne ke liye local CVO (Chief Veterinary Officer) se baat karna best rehta hai, kyunki guidelines periodically update hoti rehti hain.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-green-700" id="chhote-farmers-ke-liye-vikalp">
        Chhote Farmers (10-50 Bakri) Ke Liye Funding Vikalp
      </h3>

      <p className="mb-4">
        Agar aap NLM-EDP ke minimum unit size (100+5) tak afford nahi kar sakte, toh tension mat lijiye. Chhote scale par start karne ke liye kai aur schemes available hain:
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
        <ul className="space-y-4">
          <li>
            <strong className="text-blue-900">1. State-Level Goat/Pashu Palan Schemes:</strong>
            <p className="mt-1 text-gray-700">
              Har state ki apni chhote scale ki schemes hoti hain, aur inke naam-benefits state ke hisaab se alag hote hain. Ek confirmed example - Madhya Pradesh ki <strong>"10+1 Goat Unit Scheme"</strong>, jo specifically chhote farmers ke liye design hui hai. Rajasthan, UP, Bihar, Maharashtra mein bhi aisi schemes hain, par exact naam aur subsidy percentage har saal change hote hain.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Best approach: Apne zila ke Pashu Palan Vibhag (Animal Husbandry Department) ko call karke pata karein ki current financial year mein kaunsi scheme chal rahi hai.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">2. PMEGP - Sirf Value-Addition Ke Liye (Important Clarification):</strong>
            <p className="mt-1 text-gray-700">
              Ek baat clear kar doon - PMEGP (Prime Minister's Employment Generation Programme) ki negative list mein <strong>"Animal Husbandry / Rearing" explicitly excluded hai</strong>. Matlab sirf bakriyan paalne ke liye aap PMEGP ka loan nahi le sakte.
            </p>
            <p className="mt-1 text-gray-700">
              Haan, agar aap bakri palan ke saath <strong>value-addition</strong> karna chahte hain - jaise meat processing unit, packaged chevon (bakri ka gosht), ya branded dairy products - tab PMEGP eligible hai. <Link href="/articles/KisanRinKahaSeLe2026" className="text-blue-600 hover:underline">Kisan loan guide</Link> mein doosre options bhi hain.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Maharashtra ke residents ke liye ek alag option hai - <strong>CMEGP</strong> (state-level scheme, PMEGP se alag). Wahan 50% tak subsidy milti hai, ₹20 lakh tak, specifically 100+5 unit ke liye. Par yeh sirf Maharashtra tak seemit hai.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">3. SC/ST Finance Corporations:</strong>
            <p className="mt-1 text-gray-700">
              Agar aap SC/ST category se hain, toh National SC/ST Finance and Development Corporation (NSFDC) ya aapki state ki apni corporation (jaise Maharashtra mein Maharashtra SC/ST Finance Corporation) se concessional loans mil sakte hain. Interest rates aur subsidy percentages state aur scheme ke hisaab se kaafi vary karte hain - kabhi 25% se lekar 50% tak bhi ho sakta hai, aur interest rates bhi market rate se kaam hote hain.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Exact terms jaanne ke liye apne district ke SC/ST welfare office ya corporation branch se baat karein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">4. Local Cooperative Banks, RRBs, aur Mudra Loan:</strong>
            <p className="mt-1 text-gray-700">
              District Central Cooperative Banks (DCCBs) aur Regional Rural Banks (RRBs) aksar pashu palan ke liye special loan schemes chalate hain. Inme interest rates generally commercial banks se kam hote hain, par exact figures har bank aur scheme par depend karte hain.
            </p>
            <p className="mt-1 text-gray-700">
              Ek aur option hai <Link href="/articles/KisanRinKahaSeLe2026" className="text-blue-600 hover:underline">Mudra Loan</Link> - Shishu, Kishor, aur Tarun categories mein bina collateral ke loan milta hai. Chhote goat farms ke liye yeh kaafi accessible option hai.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Apne nazdeeki cooperative bank ya RRB branch mein jaakar specifically pashu palan loan ke baare mein poochein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">5. Agriculture Infrastructure Fund (AIF):</strong>
            <p className="mt-1 text-gray-700">
              Agar aap infrastructure par invest karna chahte hain - jaise cold storage, meat processing plant, ya bada shed - toh AIF ek option hai. Iske under interest subsidy milti hai (typically 3% tak, 7 saal ke liye), aur loan limits kaafi high hote hain (₹2 crore tak).
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Par dhyan rahe - AIF sirf infrastructure projects ke liye hai, direct animal purchase ke liye nahi. Eligibility criteria specific hai, isliye nazdeeki bank branch se details confirm karein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">6. PM FME Yojana (Value Addition Ke Liye):</strong>
            <p className="mt-1 text-gray-700">
              Agar aap bakri palan ke saath <strong>meat processing ya packaging</strong> karna chahte hain, toh <Link href="/articles/pm-fme-yojana-food-processing" className="text-blue-600 hover:underline">PM FME Yojana</Link> ek relevant option hai. Isme food processing infrastructure par substantial subsidy milti hai.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Yeh schemes specifically processing units ke liye hain, sirf rearing ke liye nahi. Agar aap sirf 10-20 bakriyan paal rahe hain bina processing ke, toh yeh schemes aapke liye nahi hain.
            </p>
          </li>
        </ul>
      </div>

      <p className="mb-4 font-medium">NLM-EDP Application Process - Ground Reality (100+5 unit ke liye):</p>
      
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          <strong>DPR (Detailed Project Report) banwayein:</strong> Kisi experienced CA ya agriculture consultant se banwayein. Cost: ₹5,000-15,000. Isme 5-year financial projection, SWOT analysis, break-even calculation, aur cash flow statement honi chahiye. Kuch banks khud bhi bana dete hain agar aap unke through apply kar rahe hain. DPR quality bahut important hai - weak DPR reject ho sakta hai.
        </li>
        <li>
          <strong>Local Animal Husbandry Department office jayein:</strong> Apne zila ke Chief Veterinary Officer (CVO) se milein. Wo aapko current guidelines aur application form denge. Kuch states (jaise Rajasthan, MP, Maharashtra) mein online portal bhi hai, par offline process abhi bhi zyada reliable hai. CVO office se pata karein ki current cycle mein budget available hai ya nahi.
        </li>
        <li>
          <strong>Documents ready rakhein:</strong> Aadhaar card, PAN card, land documents (registry ya lease agreement), bank passbook (last 6 months statement), caste certificate (agar SC/ST hain), passport-size photos, site plan (hand-drawn bhi chalega), aur DPR. Sab documents self-attested hone chahiye.
        </li>
        <li>
          <strong>Site inspection:</strong> Department ke officers aapki zameen dekhne aayenge. Wo check karenge ki location suitable hai (residential area se door, pollution-free), water source available hai, aur aapka plan realistic hai. Yeh step 2-4 weeks mein hota hai. Inspection report positive honi chahiye.
        </li>
        <li>
          <strong>Bank loan approval:</strong> Agar department recommend karta hai, toh file bank jati hai. Bank apna due diligence karega - CIBIL check, financial capacity assessment. Loan approval mein 1-3 months lag sakte hain. Interest rate 9-11% hota hai (general category), par subsidy milne ke baad effective rate kam ho jata hai.
        </li>
        <li>
          <strong>Subsidy release:</strong> Loan disburse hone ke baad, subsidy ka hissa sarkar seedhe bank ko transfer karti hai. Aapko sirf apna margin amount dena hota hai. Yeh process 2-4 months leta hai.
        </li>
      </ol>

      <p className="mb-4">
        <strong>Ek practical baat:</strong> NLM guidelines har state mein thode alag apply hoti hain. Kabhi-kabhi budget khatam ho chuka hota hai, ya naya cycle shuru hone wala hota hai. Application dene se pehle local CVO office se current status zaroor pata kar lein - numbers aur timelines change hote rehte hain.
      </p>

      <p className="mb-4">
        Agar aap NLM-EDP ke liye apply karna chahte hain (100+5 unit ke liye), toh official application portal par jaakar latest guidelines check karein. Detailed scheme guidelines <Link href="https://dahd.gov.in/schemes/programmes/national_livestock_mission" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">dahd.gov.in par available hain</Link>.
      </p>

      <p className="mb-6">
        Neeche diya gaya link aapko direct application portal par le jayega:
      </p>

      <GovLink
        href="https://nlm.udyamimitra.in/"
        label="NLM Application Portal"
        guide="Apply Karein"
        portalName="nlm.udyamimitra.in"
      />

      <p className="mb-6">
        Chhote scale (10-50 bakri) par start karne ke liye state-level schemes best rehti hain. Apne zila ke Pashu Palan Vibhag se current schemes ke baare mein pata karein. General <Link href="/articles/KisanRinKahaSeLe2026" className="text-blue-600 hover:underline">kisan loan guide</Link> bhi padh sakte hain jisme multiple options explain kiye gaye hain.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        5-Year Profit Projection: Conservative vs Optimistic Scenario
      </h2>
      
      <p className="mb-4">
        Yeh calculation conservative hai. Agar sab kuch perfectly chala (mortality rate 5% se kam, market rates stable rahe), toh actual numbers isse 20-30% zyada ho sakte hain. Par realistic rehna zaroori hai.
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-blue-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Year</th>
              <th className="py-2 px-4 border-b text-left">Flock Size</th>
              <th className="py-2 px-4 border-b text-left">Revenue</th>
              <th className="py-2 px-4 border-b text-left">Expenses</th>
              <th className="py-2 px-4 border-b text-left">Net Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Year 1</td>
              <td className="py-2 px-4 border-b">20+30 kids</td>
              <td className="py-2 px-4 border-b">₹2,00,000-₹2,50,000</td>
              <td className="py-2 px-4 border-b">₹1,50,000-₹1,80,000</td>
              <td className="py-2 px-4 border-b">₹50,000-₹70,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Year 2</td>
              <td className="py-2 px-4 border-b">50+ animals</td>
              <td className="py-2 px-4 border-b">₹4,50,000-₹5,50,000</td>
              <td className="py-2 px-4 border-b">₹2,50,000-₹3,00,000</td>
              <td className="py-2 px-4 border-b">₹2,00,000-₹2,50,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Year 3</td>
              <td className="py-2 px-4 border-b">80-100 animals</td>
              <td className="py-2 px-4 border-b">₹8,00,000-₹10,00,000</td>
              <td className="py-2 px-4 border-b">₹4,00,000-₹5,00,000</td>
              <td className="py-2 px-4 border-b">₹4,00,000-₹5,00,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Year 4-5</td>
              <td className="py-2 px-4 border-b">100-120 animals</td>
              <td className="py-2 px-4 border-b">₹10,00,000-₹12,00,000</td>
              <td className="py-2 px-4 border-b">₹5,00,000-₹6,00,000</td>
              <td className="py-2 px-4 border-b">₹5,00,000-₹6,00,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-6">
        Year 3 tak aap mahine ka ₹35,000-₹40,000 net profit kama sakte hain. Yeh conservative estimate hai. Agar aap value addition karte hain (jaise processed meat, branded milk products, ya packaged manure), toh margins aur badh sakte hain. Kuch farmers direct consumers ko sell karke 20-30% extra margin kamate hain.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-red-700">
        Real Risks Jo Koi Nahi Batata - Transparency Zaroori Hai
      </h2>
      
      <p className="mb-4">
        Internet par sab log success stories share karte hain. Par failures ke baare mein koi baat nahi karta. Yeh woh risks hain jo aapko pata hone chahiye before investing:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Disease Outbreak - Sabse Bada Risk</h3>
          <p className="mt-2">
            PPR (Goat Plague), FMD (Foot and Mouth Disease), aur Enterotoxemia jaisi bimariyan poori flock ko khatam kar sakti hain. 2019 mein Rajasthan ke kuch districts (Jodhpur, Barmer) mein PPR outbreak hua tha, jisme 30-40% animals mar gaye the. Vaccination mandatory hai, par kabhi-kabhi vaccinated animals bhi affected ho jate hain (vaccine failure rate 5-10%). Ek baar outbreak ho gaya, toh quarantine karna padta hai aur movement restrict ho jati hai.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Market Price Fluctuation</h3>
          <p className="mt-2">
            Eid ke baad rates 20-30% gir jate hain. Agar aapne galat time par becha, toh loss ho sakta hai. Kuch saal mein oversupply hota hai aur rates bahut neeche aa jate hain (200-220 rupaye/kg tak). Weather bhi affect karta hai - achhi baarish mein fodder sasta hota hai, farmers zyada animals rakhte hain, supply badhti hai, rates girta hain.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Feed Cost Volatility</h3>
          <p className="mt-2">
            Sukhe ya baadh ke saal mein fodder prices 2-3x ho jate hain. Agar aapne pehle se stock nahi kiya, toh emergency mein mehnga khareedna padega. 2023 mein Maharashtra mein severe drought tha, jahan bhoosa ₹15/kg se ₹40/kg tak pahunch gaya tha. Aise saal mein profit margin negative bhi ho sakta hai.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Labor Dependency</h3>
          <p className="mt-2">
            Bakri palan 365 din ka kaam hai - koi chhutti nahi. Agar aapka worker chhod kar chala gaya aur replacement nahi mila, toh animals suffer karenge. Family involvement zaroori hai. Ya phir aapko khud daily 4-6 hours dene honge. Weekend par bhi kaam karna padega.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Reproductive Issues</h3>
          <p className="mt-2">
            Kuch bakriyan conceive nahi karti, ya miscarriage ho jata hai. Infertility rate 10-15% hota hai. Agar aapke paas 20 bakriyan hain aur 3-4 pregnant nahi hoti, toh aapka projection galat ho jayega. Veterinary care aur proper nutrition se yeh risk kam hota hai, par zero nahi hota.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Training Kahan Se Lein? Yeh Step Skip Mat Karna
      </h2>
      
      <p className="mb-4">
        Maine kai logon ko dekha hai jo YouTube dekh kar start kar dete hain. Phir pehli pregnancy mein complication aati hai (dystocia - difficult birth), aur unhe pata nahi hota ki kya karna hai. Result? Animal aur bachha dono mar jate hain. Ya fir vaccination schedule miss ho jata hai, aur outbreak ho jata hai.
      </p>

      <p className="mb-4">
        Professional training lein. Yeh 7-15 din ka course hota hai aur cost ₹2,000-₹5,000 (kabhi-kabhi free bhi hota hai government programs ke under).
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Krishi Vigyan Kendra (KVK):</strong> Har district mein hai. Contact karein aur unka training schedule pata karein. Wo practical hands-on training dete hain.
        </li>
        <li>
          <strong>Central Institute for Research on Goats (CIRG), Mathura:</strong> Premier institute. Inke short-term courses bahut comprehensive hote hain. CIRG ke training portal par jaakar aap upcoming batches check kar sakte hain:
        </li>
      </ul>

      <GovLink
        href="https://cirg.icar.gov.in/"
        label="CIRG Training Portal"
        guide="Goat Farming Courses Check Karein"
        portalName="cirg.icar.gov.in"
      />

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>State Veterinary Universities:</strong> Jaise Rajasthan University of Veterinary and Animal Sciences (RAJUVAS), Bikaner. Wo certificate courses bhi karate hain.
        </li>
        <li>
          <strong>Local successful farmers:</strong> Kuch farmers paid training dete hain (₹5,000-₹10,000 for 3-5 days hands-on training). Yeh sabse practical hota hai kyunki aap real farm par kaam seekhte hain.
        </li>
      </ul>

      <p className="mb-6">
        Training mein aap seekhenge: breed identification, vaccination techniques, pregnancy diagnosis (ultrasound ya palpation), birthing assistance, basic first aid, feed formulation (ration balancing), aur record keeping. Yeh sab theoretical knowledge nahi, hands-on skills hain jo aapko actual farm par seekhni padengi.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Kya Aapko Bakri Palan Shuru Karna Chahiye? Final Decision Framework
      </h2>
      
      <p className="mb-4">
        Bakri palan unke liye hai jo:
      </p>
      
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Long-term commitment ke liye ready hain (minimum 3-5 years)</li>
        <li>Daily 4-6 hours farm par de sakte hain (including weekends)</li>
        <li>₹1.5-2.5 lakh initial investment kar sakte hain (subsidy ke baad bhi)</li>
        <li>Learning mindset rakhte hain aur continuously improve karna chahte hain</li>
        <li>Risk lene ki capacity rakhte hain (mortality, market fluctuations afford kar sakte hain)</li>
        <li>Animals se comfortable hain aur unke saath kaam kar sakte hain</li>
      </ul>

      <p className="mb-4">
        Bakri palan unke liye nahi hai jo:
      </p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Quick money chahte hain (6-12 months mein rich nahi banenge)</li>
        <li>Passive income dhund rahe hain (yeh highly active business hai)</li>
        <li>Risk nahi le sakte (agar ek saal loss ho toh afford nahi kar sakte)</li>
        <li>Animals se comfortable nahi hain ya unhe handle nahi kar sakte</li>
        <li>Part-time karna chahte hain (yeh full-time commitment hai)</li>
      </ul>

      <p className="mb-6">
        Agar aap pehle category mein aate hain, toh chhote scale par start karein - 10 bakriyon se. Pehle saal seekhein, mistakes karein, experience gain karein. Phir gradually expand karein. Direct 50-100 animals se start mat karo - disaster ho sakta hai.
      </p>

      <p className="mb-6">
        Subsidy ka fayda zaroor uthayein. 50% subsidy milna koi chhoti baat nahi hai. Par yaad rakho - subsidy milna guaranteed nahi hai. Application process mein 3-6 months lag sakte hain, aur approval bhi. Isliye apni planning subsidy ke bina karein. Agar mil gayi, toh bonus samjho.
      </p>

      <p className="mb-6">
        Ek aur important point - vaccination schedule ko strictly follow karein. Yeh woh ek cheez hai jahan compromise nahi kiya ja sakta. Ek missed vaccination poori flock ko khatam kar sakti hai. Apne local veterinary officer se complete vaccination calendar le lein.
      </p>

      <p className="mb-6">
        Agar aap seriously interested hain, toh pehle apne local successful farmer se milein. Unse baat karein, unke challenges samjhein, unki mistakes se seekhein. Phir decision lein. Internet par padhna aur actually karna dono alag cheezein hain.
      </p>

      <p className="mb-6 italic text-gray-600">
        Note: Is article ki information general guidance ke liye hai. Costs, subsidies, aur procedures aapke location aur specific circumstances ke hisaab se alag ho sakte hain. Financial decisions lene se pehle veterinary officers, agriculture officers, ya CAs se consult karna samajhdari hai. Guidelines aur prices periodically update hote hain - latest info ke liye official sources check karein.
      </p>
    </article>
  );
}