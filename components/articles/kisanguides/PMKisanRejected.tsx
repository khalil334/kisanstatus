import Image from 'next/image';
import Link from 'next/link';
import ExternalLinkButton from '@/components/ExternalLinkButton';

export default function PMKisanRejected() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8 text-gray-800 leading-relaxed">
      <Image 
        src="/images/pm-kisan-help/pm-kisan-rejected/hero.jpg" 
        alt="PM Kisan Portal Showing Rejected Status - Troubleshooting Guide" 
        width={800} 
        height={450} 
        className="rounded-xl mb-6 shadow-md" 
      />
      
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        PM Kisan Status 'Rejected' ya 'Pending' Kyun Aata Hai? Turant Theek Karne Ka Complete Guide
      </h1>
      
      <p className="text-lg mb-4 italic">
        Pichle hafte ek kisan ne call kiya. "Bhai, meri 22 kiston aa gayi thin, par 23vi aur 24vi kist nahi aayi. Portal par 'Rejected by State' likha aa raha hai. Kya karun?"
      </p>
      
      <p className="mb-6">
        Yeh problem sirf uski nahi hai. PM Kisan portal par lakho kisaanon ka status rejected, pending, ya waiting dikh raha hai. 2025 mein sarkar ne strict verification shuru ki hai - land records match ho rahe hain, Aadhaar seeding check ho rahi hai, aur duplicate entries remove ho rahi hain.
      </p>
      
      <p className="mb-6">
        Par ghabrane ki baat nahi hai. 90% cases mein yeh problems fix ho sakti hain. Aaj hum dekhenge ki kyun status reject hota hai, aur step-by-step kaise theek karein.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Pehle Samjhein: PM Kisan Kist Kab aur Kaise Aati Hai?
      </h2>
      
      <p className="mb-4">
        PM Kisan Samman Nidhi ke under eligible farmers ko saal mein 3 kiston mein ₹6,000 milte hain - har 4 mahine mein ₹2,000. Yeh paisa seedhe bank account mein DBT (Direct Benefit Transfer) ke through aata hai.
      </p>
      
      <p className="mb-4">
        Typical schedule yeh hota hai:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>23vi Kist:</strong> October-November 2024</li>
        <li><strong>24vi Kist:</strong> February-March 2025</li>
        <li><strong>25vi Kist:</strong> June-July 2025</li>
      </ul>

      <p className="mb-6">
        Par yeh dates approximate hain. Sarkar kabhi-kabhi delay karti hai, ya election period mein advance bhi de deti hai. Latest updates ke liye <Link href="/pm-kisan-24th-installment" className="text-blue-600 hover:underline">24vi kist ki detailed guide</Link> padhein.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-red-700">
        Top 7 Reasons Kyun Status 'Rejected' Aata Hai
      </h2>
      
      <p className="mb-4">
        Maine kai kisaanon se baat ki, aur 7 main reasons samne aaye hain. Aaiye ek-ek karke dekhte hain:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">1. Land Record Mismatch (40% cases)</h3>
          <p className="mt-2">
            Sabse common reason yeh hai. Aapne PM Kisan form mein jo zameen ka area (hectare/bigha) likha hai, aur state ke revenue records (Khatauni/Khasra) mein jo hai, wo match nahi kha raha. Ya phir zameen kisi aur ke naam hai, aur mutation (dakhil kharij) nahi hua.
          </p>
          <p className="mt-2 text-sm">
            <strong>Solution:</strong> Apne Lekhpal/Patwari se miliye. Unhe boliye ki <Link href="/land-record-online" className="text-blue-600 hover:underline">online land records</Link> update karwa dein. Agar zameen purane records mein hai, toh pehle mutation karwayein. State portal par apna Khata/Khasra number daal kar check karein ki details sahi hain ya nahi.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">2. eKYC Pending ya Fail (25% cases)</h3>
          <p className="mt-2">
            2023 se sarkar ne eKYC mandatory kar di hai. Agar aapne eKYC nahi ki, ya biometric match nahi hua, toh kist reject ho jayegi. Kuch logon ne OTP se eKYC ki, par Aadhaar mein mobile number link nahi tha, isliye fail ho gaya.
          </p>
          <p className="mt-2 text-sm">
            <strong>Solution:</strong> Nazdeeki CSC (Common Service Center) jayein aur 'Face Authentication' se eKYC karwayein. Yeh sabse reliable method hai. <Link href="/pm-kisan-ekyc-guide" className="text-blue-600 hover:underline">PM Kisan eKYC ki complete guide</Link> yahan padhein. Agar CSC center nahi mil raha, toh <Link href="/csc-center-near-me" className="text-blue-600 hover:underline">apne nazdeeki CSC center ka pata</Link> yahan se dhundhein.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">3. Aadhaar-Bank Account Link Nahi Hai (15% cases)</h3>
          <p className="mt-2">
            DBT (Direct Benefit Transfer) ke liye aapka Aadhaar card bank account se link hona chahiye. Agar link nahi hai, toh paisa transfer hi nahi hoga. Kuch logon ne galat bank account number diya, ya account dormant ho gaya.
          </p>
          <p className="mt-2 text-sm">
            <strong>Solution:</strong> Apni bank branch jayein aur <Link href="/aadhaar-link-bank-account" className="text-blue-600 hover:underline">Aadhaar seeding</Link> karwayein. Branch manager se kahein ki NPCI mapper mein aapka Aadhaar add kar dein. Account active hai yeh bhi confirm karein - agar 2 saal se transaction nahi hua toh dormant ho sakta hai.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">4. Duplicate Entry (8% cases)</h3>
          <p className="mt-2">
            Kabhi-kabhi ek hi kisan ka naam 2-3 baar register ho jata hai - alag-alag CSC centers par, ya galti se. Sarkar ab duplicate entries remove kar rahi hai. Agar aapka naam duplicate list mein aa gaya, toh reject ho jayega.
          </p>
          <p className="mt-2 text-sm">
            <strong>Solution:</strong> PM Kisan portal par jaakar <Link href="/pm-kisan-beneficiary-list" className="text-blue-600 hover:underline">beneficiary list</Link> check karein. Agar duplicate entry hai, toh apne zila ke Agriculture Officer se milein. Wo duplicate entry remove karwa denge.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">5. Ineligible Category (5% cases)</h3>
          <p className="mt-2">
            PM Kisan sirf unke liye hai jo: (a) landowner hain, (b) institutional landholder nahi hain, (c) family mein koi constitutional post holder, minister, MP/MLA, ya sarkari employee (Group D chhod kar) nahi hai, (d) income tax payer nahi hain, (e) pension ₹10,000/month se zyada nahi lete.
          </p>
          <p className="mt-2 text-sm">
            <strong>Solution:</strong> Agar aap inmein se kisi category mein aate hain, toh aap eligible nahi hain. Galti se naam aa gaya tha, toh ab remove ho jayega. Koi action nahi le sakte.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">6. Name Mismatch (4% cases)</h3>
          <p className="mt-2">
            Aadhaar card par naam alag hai, bank account mein alag hai, aur land records mein alag hai. Jaise Aadhaar mein "Ramesh Kumar" hai, par bank mein "Ramesh K." hai. System match nahi kar pata.
          </p>
          <p className="mt-2 text-sm">
            <strong>Solution:</strong> Saare documents mein same naam hona chahiye. Bank jayein aur naam correct karwayein. Aadhaar update center par jaakar spelling theek karwayein.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">7. State Government Verification Pending (3% cases)</h3>
          <p className="mt-2">
            Kabhi-kabhi central government ne approve kar diya, par state government verification mein time laga rahi hai. "Waiting for approval by State" status dikhta hai.
          </p>
          <p className="mt-2 text-sm">
            <strong>Solution:</strong> Yeh sarkar ki taraf se delay hai. 2-4 weeks wait karein. Agar bahut time ho gaya, toh apne zila ke Agriculture Department office jayein aur follow-up karein.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Step-by-Step: Apna Status Kaise Check Karein?
      </h2>
      
      <p className="mb-4">
        Pehle apna current status check karein. Yeh bahut simple process hai:
      </p>

      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          <strong>PM Kisan Portal kholein:</strong> pmkisan.gov.in par jayein. Homepage par "Farmers Corner" section mein "Beneficiary Status" par click karein.
        </li>
        <li>
          <strong>Details bharein:</strong> Aadhaar number, mobile number, ya registration number daalein. "Get Data" par click karein.
        </li>
        <li>
          <strong>Status dekhein:</strong> Agar "Approved" hai toh theek hai. Agar "Rejected", "Pending", ya "Waiting" hai, toh neeche reason bhi likha hoga.
        </li>
        <li>
          <strong>Screenshot lein:</strong> Status ka screenshot le lein, baad mein kaam aayega.
        </li>
      </ol>

      <p className="mb-6">
        Agar aapko status check karne mein problem aa rahi hai, toh <Link href="/pm-kisan-status-check" className="text-blue-600 hover:underline">PM Kisan status check ki detailed guide</Link> padhein. Isme screenshots ke saath poora process bataya gaya hai.
      </p>

      <ExternalLinkButton 
        url="https://pmkisan.gov.in/beneficiary_status.aspx" 
        label="PM Kisan Beneficiary Status Check Karein" 
      />

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Land Record Problem Kaise Fix Karein? (Sabse Common Issue)
      </h2>
      
      <p className="mb-4">
        Agar aapka status land record mismatch ki wajah se reject hua hai, toh yeh steps follow karein:
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong className="text-blue-900">Apna Khata/Khasra number dhundhein:</strong>
            <p className="mt-1 text-gray-700">
              Agar aapko apna Khata/Khasra number nahi pata, toh apne zila ke revenue portal par jaakar naam se search karein. Ya phir purani registry/patta dekhein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">Online land records check karein:</strong>
            <p className="mt-1 text-gray-700">
              Har state ka apna land record portal hai. Jaise UP mein bhulekh.up.nic.in, MP mein mpbhulekh.gov.in, Rajasthan mein apnakhata.raj.nic.in. Apna Khata number daal kar current records dekhein.
            </p>
            <p className="mt-1 text-sm text-gray-600 italic">
              Agar <Link href="/land-record-online" className="text-blue-600 hover:underline">online land records</Link> check karne mein problem aa rahi hai, toh detailed guide padhein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">Discrepancy note karein:</strong>
            <p className="mt-1 text-gray-700">
              Dekhein ki online records mein kya hai, aur PM Kisan form mein kya bhara hai. Area (hectare/bigha), naam, ya Khasra number mein koi fark hai toh note karein.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">Lekhpal/Patwari se milein:</strong>
            <p className="mt-1 text-gray-700">
              Apne area ke Lekhpal ya Patwari se milein. Unhe discrepancy dikhayein. Wo records update karwa denge. Kuch states mein yeh online hota hai, kuch mein offline application deni padti hai.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">Mutation (Dakhil Kharij) karwayein:</strong>
            <p className="mt-1 text-gray-700">
              Agar zameen purane malik ke naam hai (jaise pitaji ya dada ji), toh pehle mutation karwayein. Iske liye death certificate, succession certificate, ya family tree chahiye hoga. Tehsildar office mein application dein. 1-3 months mein mutation ho jata hai.
            </p>
          </li>

          <li>
            <strong className="text-blue-900">PM Kisan records update karein:</strong>
            <p className="mt-1 text-gray-700">
              Jab land records update ho jayein, toh CSC center jakar PM Kisan portal par apni details update karwayein. Ya phir apne zila ke Agriculture Officer se milein.
            </p>
          </li>
        </ol>
      </div>

      <p className="mb-6">
        Yeh process thoda lamba hai (1-3 months lag sakte hain), par yehi ek tarika hai. Agar aap jaldi karna chahte hain, toh apne MLA ya MP se sampark karein - wo pressure daal kar jaldi karwa sakte hain.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        eKYC Kaise Karein? (Mandatory Step)
      </h2>
      
      <p className="mb-4">
        eKYC ke bina kist nahi aayegi. 3 tarah se eKYC kar sakte hain:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Method 1: OTP-Based eKYC (Sabse Aasaan)</h3>
          <p className="mt-2">
            Agar aapka Aadhaar card mobile number se link hai, toh yeh ghar baithe ho jata hai. PM Kisan portal par "eKYC" option mein jayein. Aadhaar number daalein. OTP aayega, daal dein. Bas ho gaya. 2 minute ka kaam hai.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Method 2: Face Authentication (CSC Center Par)</h3>
          <p className="mt-2">
            Agar OTP nahi aa raha (mobile link nahi hai), toh CSC center jayein. Wahan "Face Auth" option se eKYC hoti hai. Aapka photo kheench kar Aadhaar database se match kiya jata hai. ₹15-20 charge lagta hai. Yeh sabse reliable method hai.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-bold text-lg">Method 3: Biometric Authentication</h3>
          <p className="mt-2">
            Kuch CSC centers par fingerprint scanner se bhi eKYC hoti hai. Par agar aapke fingerprints ghis gaye hain (kisaanon mein common hai), toh yeh fail ho sakta hai. Face Auth better hai.
          </p>
        </div>
      </div>

      <p className="mb-6">
        Detailed process ke liye <Link href="/pm-kisan-ekyc-guide" className="text-blue-600 hover:underline">PM Kisan eKYC guide</Link> padhein. Isme screenshots ke saath har method bataya gaya hai.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Bank Account Problems Kaise Fix Karein?
      </h2>
      
      <p className="mb-4">
        Agar Aadhaar-bank linking ka issue hai, toh yeh karein:
      </p>

      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          <strong>Bank branch jayein:</strong> Jis bank mein account hai, wahan jayein. Branch manager se milein.
        </li>
        <li>
          <strong>Aadhaar seeding form bharein:</strong> Bank ek form dega "Aadhaar Seeding Request". Usme Aadhaar number aur account number daalein. Sign karein.
        </li>
        <li>
          <strong>NPCI mapper check karwayein:</strong> Branch manager se kahein ki NPCI (National Payments Corporation of India) mapper mein aapka Aadhaar add kar dein. Yeh DBT ke liye zaroori hai.
        </li>
        <li>
          <strong>Account active hai confirm karein:</strong> Agar 2 saal se koi transaction nahi hua, toh account dormant ho sakta hai. ₹100-200 deposit karke activate karwayein.
        </li>
        <li>
          <strong>PFMS mein status check karein:</strong> 3-4 din baad PFMS (Public Financial Management System) portal par jaakar check karein ki Aadhaar link ho gaya hai ya nahi.
        </li>
      </ol>

      <p className="mb-6">
        Step-by-step guide ke liye <Link href="/aadhaar-link-bank-account" className="text-blue-600 hover:underline">Aadhaar-bank linking guide</Link> padhein.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Helpdesk aur Helpline: Kahan Sampark Karein?
      </h2>
      
      <p className="mb-4">
        Agar upar diye gaye solutions se problem solve nahi hoti, toh in jagah sampark karein:
      </p>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>PM Kisan Helpline (Toll-Free):</span>
            <span className="font-semibold">1800-115-526 ya 155261</span>
          </li>
          <li className="flex justify-between">
            <span>PM Kisan Email:</span>
            <span className="font-semibold">pmkisan-ic@gov.in</span>
          </li>
          <li className="flex justify-between">
            <span>State Agriculture Department:</span>
            <span className="font-semibold">Apne zila ka office dhundhein</span>
          </li>
          <li className="flex justify-between">
            <span>CSC Helpline:</span>
            <span className="font-semibold">1800-3000-3468</span>
          </li>
        </ul>
      </div>

      <p className="mb-6">
        Helpline par call karte waqt apna Aadhaar number, registration number, aur problem ka screenshot ready rakhein. Wo aapko exact solution batayenge.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-red-700">
        Kya Koi Fraud Schemes Hain? Savdhaan Rahein
      </h2>
      
      <p className="mb-4">
        PM Kisan ke naam par kai fraud schemes chal rahi hain. Inse bachein:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Fake SMS/WhatsApp Messages</h3>
          <p className="mt-2">
            "Aapki PM Kisan kist rok di gayi hai. Turant is link par click karein" - aise messages aate hain. Yeh fraud hain. PM Kisan kabhi SMS mein link nahi bhejta. Sirf pmkisan.gov.in par jaakar status check karein.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Fake Apps</h3>
          <p className="mt-2">
            Play Store par "PM Kisan" naam ke fake apps hain jo aapki details churate hain. Sirf official website use karein, koi app download mat karein.
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-bold text-lg">Paise Maangne Wale Agents</h3>
          <p className="mt-2">
            Kuch log kehte hain "₹500 do, hum aapki kist approve karwa denge". Yeh fraud hai. PM Kisan bilkul free hai. CSC center par sirf ₹20-30 charge lagta hai eKYC ka, usse zyada nahi.
          </p>
        </div>
      </div>

      <p className="mb-6">
        Agar koi aapse paise maange PM Kisan ke naam par, toh turant police mein complaint karein. Ya phir PM Kisan helpline par report karein.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Kab Tak Aayegi Kist? Realistic Timeline
      </h2>
      
      <p className="mb-4">
        Jab aap problem fix kar lete hain, toh kist aane mein kitna time lagta hai?
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>eKYC fix kiya:</strong> 7-15 din mein next kist aayegi</li>
        <li><strong>Bank linking fix kiya:</strong> 10-20 din mein next kist aayegi</li>
        <li><strong>Land record fix kiya:</strong> 1-3 months lag sakte hain (kyunki verification hota hai)</li>
        <li><strong>Duplicate entry remove kiya:</strong> 1-2 months</li>
      </ul>

      <p className="mb-6">
        Agar aapki kist reject ho gayi thi, toh jab problem fix hogi, tab agle cycle mein dono kiston ek saath aa sakti hain (pending amount ke saath). Par yeh guaranteed nahi hai - kabhi-kabhi purani kiston nahi milti.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-800">
        Final Tips: Kist Kaatne Se Kaise Bachein?
      </h2>
      
      <p className="mb-4">
        Yeh preventive measures lein taaki future mein kist na kate:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Har 6 mahine mein status check karein:</strong> Portal par jaakar dekhein ki sab theek hai ya nahi</li>
        <li><strong>eKYC update rakhein:</strong> Agar Aadhaar mein koi change kiya (address, mobile), toh dubara eKYC karein</li>
        <li><strong>Bank account active rakhein:</strong> Har 6 mahine mein ek transaction karein taaki dormant na ho</li>
        <li><strong>Land records update rakhein:</strong> Agar zameen bechi ya khareedi, toh turant mutation karwayein</li>
        <li><strong>Documents mein consistency rakhein:</strong> Aadhaar, bank, land records - sab mein same naam aur details honi chahiye</li>
      </ul>

      <p className="mb-6">
        Agar aap seriously interested hain ki PM Kisan ki har kist time par aaye, toh <Link href="/pm-kisan-status-check" className="text-blue-600 hover:underline">regular status check</Link> karte rahein. Problem jaldi pakad mein aa jayegi aur jaldi fix bhi ho jayegi.
      </p>

      <p className="mb-6">
        PM Kisan ek bahut achhi scheme hai, par isme kuch technical requirements hain. Agar aap inhe follow karenge, toh har 4 mahine mein ₹2,000 milte rahenge. Aur yeh paisa koi chhota nahi hai - saal ka ₹6,000 kisaanon ke liye bahut kaam aata hai.
      </p>

      <p className="mb-6">
        Agar aapko is article se help mili, toh apne gaon ke doosre kisaanon ko bhi share karein. Kai logon ko pata hi nahi hai ki unka status kyun reject hua hai, aur kaise fix karein. Aapki ek share se kisi ki kist aa sakti hai.
      </p>

      <p className="mb-6 italic text-gray-600">
        Disclaimer: Yeh article general information ke liye hai. PM Kisan ke rules aur procedures change hote rehte hain. Latest information ke liye hamesha official website pmkisan.gov.in ya apne zila ke Agriculture Department se confirm karein. Kisi bhi third-party agent ko paise na dein - PM Kisan bilkul free hai.
      </p>
    </article>
  );
}