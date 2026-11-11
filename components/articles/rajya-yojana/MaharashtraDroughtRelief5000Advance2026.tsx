import Link from 'next/link';
import Image from 'next/image';
import CountdownRedirectButton from '@/components/CountdownRedirectButton';

export default function MaharashtraDroughtRelief5000Advance2026() {
  const faqs = [
    {
      q: '₹5,000 mere khaate me kab aayega? Koi tareekh hai?',
      a: 'Koi ek tareekh nahi hai. 5 November tak 87,45,669 kisanon ko ₹4,372.83 crore mil chuka tha, aur baaki eligible kisanon ko payment abhi bhi bheja ja raha hai. Vibhag ne kaha hai ki bank account ki technical dikkat ki wajah se kuch payment ruke hain, aur koi eligible kisan chhootega nahi. Apni passbook ya bank statement dekhiye — SMS ka intezaar mat kijiye.',
    },
    {
      q: 'Meri fasal 33% se kam kharab hui. Kya mujhe kuch nahi milega?',
      a: 'Is ₹5,000 wale advance ke liye 33% se zyada nuksan ki shart hai, jo NDRF ke niyam se li gayi hai. Kam nuksan walon ko ye advance nahi milega. Lekin aakhri muavza alag se aayega, jab survey poora hoga — uski dar NDRF ki per-hectare dar se tay hogi. Apne talathi se poochiye ki aapke gaon ka survey kis halat me hai.',
    },
    {
      q: 'Maine income tax bhara hai. Kya main bahar hoon?',
      a: 'Sirf kheti se alag kamai par income tax bharne wale is advance se bahar hain — ye baat Relief & Rehabilitation Department ke GR me likhi hai. Kheti ki kamai par tax nahi lagta, isliye aam kisan is shart se bahar nahi hota. Sarkari karmchari jinhe mahine ke ₹25,000 se zyada salary milti hai, ve bhi bahar hain.',
    },
    {
      q: 'Mere paas AgriStack Farmer ID nahi hai. Kya ₹5,000 nahi milega?',
      a: 'Milega, agar baaki shartein poori hain. Van adhikar wale kisan jinke paas Farmer ID nahi hai, unhe eKYC ke aadhar par advance diya ja raha hai. 1 November 2025 se 27 October 2026 ke beech kisi bhi sarkari yojana ke liye eKYC karwa chuke kisanon ko dobara eKYC nahi karwani.',
    },
    {
      q: 'Kya ₹5,000 PM Kisan ki kist hai?',
      a: 'Nahi, bilkul nahi. Ye Maharashtra sarkar ka ek baar ka sukha rahat advance hai, PM Kisan se iska koi lena-dena nahi hai. PM Kisan ki kistein apne samay par alag se aati rahengi, aur ye ₹5,000 usse alag hai.',
    },
    {
      q: 'Bijli bill maafi ka mujhe kaise fayda milega?',
      a: 'June 2026 tak ke bakaaya krishi bijli bill maaf karne ka elaan hua hai, lagbhag ₹58,000 crore ka. Iske liye alag se form bharne ki khabar abhi nahi aayi hai — bill me maafi kaise dikhegi, ye bijli vibhag batayega. Jab tak koi saaf nirdesh na aaye, apna bill dekhte rahiye aur kisi agent ko paisa mat dijiye.',
    },
  ];

  return (
    <>
      <article className="max-w-4xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">

        <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-600 not-prose shadow-sm">
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
            <strong>Status (09/11/2026):</strong> 27 October 2026 ko Cabinet ne ₹5,000 ka advance manzoor kiya tha, Diwali se pehle dene ke vaade ke saath. 5 November tak 87,45,669 kisanon ko ₹4,372.83 crore mil chuka hai — matlab lagbhag 58% logon tak paisa pahuncha. Baaki ka payment abhi chal raha hai. Neeche jo bhi aankda hai, woh 9 November tak ki verified khabron se hai.
          </p>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Maharashtra Drought Relief ₹5,000: Kisko Mila, Kisko Nahi, Aur Kab?
        </h1>

        <p>
          Diwali se pehle Maharashtra ke kisanon se ek vaada kiya gaya tha: sukhe se kharab hui fasal ke liye ₹5,000 turant, khaate me seedha. Vaada 27 October 2026 ko Cabinet ki baithak me hua, ₹7,500 crore ki manzoori ke saath. Diwali 8 November ko beet gayi. Ab sawaal ye nahi hai ki vaada hua tha ya nahi — sawaal ye hai ki paisa kahan tak pahuncha, kisko nahi mila, aur jo bache hain unhe kya karna hai.
        </p>

        <p>
          Is article me wahi likha hai jo 9 November tak saaf taur par pata chal saka hai: kitne kisanon ko paisa mila, kaun eligible hai aur kaun bahar hai, paisa na aaye to kya karein, aur ₹5,000 ke baad kya aayega. Jo baat abhi saaf nahi hai, use saaf likha hai — andaza nahi lagaya gaya.
        </p>

        <figure className="my-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md not-prose">
          <Image
            src="/images/articles/maharashtra-drought-relief-5000-advance-2026/drought-cracked-hero.webp"
            alt="Sookhe se phati hui zameen, Maharashtra ke sukha-grast talukon me kharif fasal ki haalat"
            width={1200}
            height={630}
            className="w-full object-cover"
            style={{ maxHeight: '420px', objectPosition: 'center' }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <figcaption className="text-center text-xs text-gray-500 dark:text-gray-400 py-2 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            Sookhi, phati zameen — isi haal ne 304 talukon me advance ki wajah banayi. Photo: Wikimedia Commons, CC BY-SA 4.0.
          </figcaption>
        </figure>

        <div className="my-8 p-6 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 dark:border-amber-600 rounded-2xl not-prose shadow-sm">
          <h3 className="font-black text-amber-900 dark:text-amber-200 text-lg mb-2">₹5,000 Aaya Ya Nahi — Abhi Ye Check Karo</h3>
          <p className="text-sm text-amber-900 dark:text-amber-100 leading-relaxed mb-3">
            Is advance ka <strong>koi online status portal nahi hai</strong> aur koi beneficiary list bhi publish nahi hui hai. Paisa aaya ya nahi, ye sirf aapki <strong>bank passbook ya SMS</strong> batayega. Passbook me ₹5,000 ki DBT entry dhoondhiye — SMS ka intezaar mat kijiye, kabhi-kabhi paisa aa jaata hai aur SMS aata hi nahi.
          </p>
          <p className="text-sm text-amber-900 dark:text-amber-100 leading-relaxed mb-4">
            Paisa nahi aaya hai to neeche wala raasta hai: pehle bank me account details check karwao, phir apne <strong>talathi ya tehsil</strong> se poochho. Aur kaun eligible hai, ye sarkar ke apne GR me saaf likha hai — use khud padhna ho to neeche wala button dabao.
          </p>
          <CountdownRedirectButton
            href="https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202610271811211341.pdf"
            label="Official GR Padho (PDF) →"
            seconds={5}
            variant="primary"
          />
          <p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed mt-3">
            Button dabate hi Maharashtra sarkar ka official GR khul jayega — gr.maharashtra.gov.in par GR No. समिती-२०२६/प्र.क्र.८२/मदत-२, 27 October 2026. 5 second ka intezaar, phir PDF khul jayegi. KisanStatus kabhi aapse Aadhaar number ya bank number nahi maangta; apna number sirf sarkari website par hi daalein, kabhi is site par nahi.
          </p>
        </div>

        <h2>Paisa Kahan Tak Pahuncha: 5 November Ka Hisaab</h2>

        <p>
          Sabse pakka aankda 5 November ka hai, jo Relief & Rehabilitation Minister Makarand Jadhav Patil ne bataya aur saat alag khabron ne dohraaya: <strong>87,45,669 kisan, ₹4,372.83 crore</strong>. Paisa bhejna 2 November se shuru hua tha. Kul 1.5 crore kisanon ko dena hai, to is hisaab se abhi lagbhag 58% logon tak paisa pahuncha hai, 42% abhi bhi intezaar me hain.
        </p>

        <p>
          Iske baad CM Devendra Fadnavis ne 7 aur 8 November ko kaha ki lagbhag 1.5 crore kisanon ke khaaton me ₹5,000 jama kar diye gaye hain, saath me ye bhi kaha ki process abhi chal rahi hai. Ye dono baatein ek saath padhiye: CM ka bayan ek daava hai, pakka ginati nahi. Pakki ginati abhi bhi wahi 87.45 lakh wali hai, 5 November ki. Uske baad ki koi nayi ginati 9 November tak saamne nahi aayi hai, isliye is article me wahi likhi hai.
        </p>

        <p>
          4 November ko CM ne kaha tha ki 73 lakh kisanon ko paisa mil chuka hai aur do din me 95% tak pahunchne ki ummeed hai. 5 November ki ginati batati hai ki ye ummeed poori nahi hui — 87.45 lakh, matlab 58%. Relief vibhag ke adhikariyon ne Times of India se kaha hai ki baaki payment abhi bheja ja raha hai, aur der ki wajah bank account ki technical dikkat ya galat details hain. Unhone ye bhi kaha hai ki koi eligible kisan chhoota nahi rahega.
        </p>

        <div className="overflow-x-auto my-8 not-prose">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden text-sm shadow-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Hissa</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Kisan</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Rakam</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Chhatrapati Sambhajinagar division (sabse zyada)</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">33.36 lakh</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹1,668.18 crore</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Amravati division</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">12,82,203</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">—</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Vidarbha (8 zilon me)</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Lagbhag 18 lakh</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹880 crore se zyada</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Pune zila</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">3,28,542</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹164.27 crore</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 font-semibold">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Kul (5 November tak)</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">87,45,669</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-700 dark:text-green-400">₹4,372.83 crore</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Pune zile ka ek aur aankda samajhne layak hai: wahan 10 taluke sukha-grast ghoshit hue aur 3.18 lakh hectare kheti par asar pada. Nagpur zile me ₹153 crore 3.05 lakh kisanon ko mile. Ye division aur zile ke aankde isliye likhe hain, taaki aap andaza laga sakein ki aapke aas-paas payment kis raftaar se ho raha hai — apne gaon ka aankda sirf talathi hi bata sakta hai.
        </p>

        <h2>Kaun Eligible Hai, Kaun Bahar</h2>

        <p>
          Shuru me kaha gaya tha ki 304 talukon ke sabhi kisanon ko ₹5,000 milega. Cabinet ne 27 October ko ye rukh badal diya: ab sirf unhe milega jinki kharif fasal ko <strong>33% se zyada nuksan</strong> hua hai. Ye seema NDRF ke niyam se li gayi hai. Sukha ghoshna do baar me hui thi — September ke aakhir me 265 taluke, phir October ke beech me 39-40 aur. Kul milakar rajya ke 358 talukon me se 305 ko sukha-grast ghoshit kiya gaya hai, jabki ₹5,000 wala advance 304 talukon ke liye hai. Ek aur badlaav: paisa parivar ko nahi, <strong>registered kisan ko</strong> milega — matlab ghar me jiske naam par kheti registered hai, use. Aur chhoti joton walon ke liye ek achhi baat: minimum sahayta ₹1,000 se badha kar ₹5,000 kar di gayi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
          <div className="p-5 bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-xl">
            <p className="font-black text-green-800 dark:text-green-300 text-base mb-3">Milega, agar ye sab hain</p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 list-none pl-0">
              <li>✓ Kharif 2026 me 33% se zyada fasal ka nuksan, 304 sukha-grast talukon me se kisi ek me</li>
              <li>✓ Registered kisan — zameen aapke naam par, ya aap registered kisan hain</li>
              <li>✓ eKYC poori — 1 Nov 2025 se 27 Oct 2026 ke beech kisi bhi sarkari yojana ke liye eKYC hui ho to dobara nahi karwani</li>
              <li>✓ Van adhikar wale kisan, jinke paas AgriStack Farmer ID nahi hai — eKYC ke aadhar par eligible</li>
              <li>✓ Aadhaar se juda bank khaata, jisme DBT aa sake</li>
            </ul>
          </div>
          <div className="p-5 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-xl">
            <p className="font-black text-red-800 dark:text-red-300 text-base mb-3">Nahi milega, agar inme se koi hai</p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 list-none pl-0">
              <li>✗ Kheti se alag kamai par income tax bharte hain</li>
              <li>✗ Sarkari karmchari ya adhikari, mahine ki salary ₹25,000 se zyada — Kendra ho ya rajya</li>
              <li>✗ Sarkari upakram (jaise Mahavitaran, MIDC, ST Mahamandal) ya sahayata-prapt sanstha ke karmchari, salary ₹25,000 se zyada</li>
              <li>✗ Krishi Utpanna Bazar Samiti, sahakari shakkar karkhana, spinning mill, sahakari bank ya doodh sangh ke padadhikari ya karmchari, salary ₹25,000 se zyada — lekin shakkar karkhane ke mausami mazdoor bahar nahi hain</li>
              <li>✗ Retired sarkari karmchari, mahine ki pension ₹25,000 se zyada (ex-servicemen ko chhoot hai)</li>
              <li>✗ Mantri, MP, MLA, MLC — maujooda ya pehle ke — aur Zilla Parishad, Panchayat Samiti ya nagar nikay ke sadasya</li>
            </ul>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
              Bahar wali list sarkar ke GR No. समिती-२०२६/प्र.क्र.८२/मदत-२ (27 October 2026) ke para 4 se hai.
            </p>
          </div>
        </div>

        <p>
          Ek galatfehmi yahin door kar lein: ye ₹5,000 PM Kisan ki kist nahi hai aur na hi uska top-up. Ye Maharashtra sarkar ka ek baar ka advance hai, sirf is saal ke sukhe ke liye. PM Kisan ki ₹2,000 wali kistein apne samay par alag se aati rahengi. Jo log ye samajh rahe hain ki ₹5,000 milne se PM Kisan ruk jayega, woh galat samajh rahe hain — dono ka koi lena-dena nahi hai.
        </p>

        <h2>₹5,000 Nahi Aaya To Pehle Ye Teen Kaam</h2>

        <p>
          Agar aap 304 talukon me se kisi ek me hain, nuksan 33% se zyada hai, aur phir bhi paisa nahi aaya, to ghabraiye mat — pehle ye teen kaam usi order me kijiye. Zyadatar rukawat inhi me se kisi ek wajah se hai.
        </p>

        <p>
          <strong>Pehla kaam: passbook khud dekhiye.</strong> Bank jaakar passbook update karwaiye ya bank ke app me statement dekhiye. ₹5,000 ki DBT entry dhoondhiye. SMS par bharosa mat kijiye — bahut baar paisa aa jaata hai aur SMS aata hi nahi, kyunki bank ka SMS alert band hota hai ya number purana hai. Agar entry mil gayi, to kaam khatam, paisa aa chuka hai.
        </p>

        <p>
          <strong>Doosra kaam: bank me account ki jaanch.</strong> Relief vibhag ne khud kaha hai ki der ki sabse badi wajah bank account ki technical dikkat ya galat details hain. Branch jaakar ye teen cheezein ek saath check karwaiye: account number sahi hai ya nahi, Aadhaar seeding (DBT ke liye NPCI seeding) active hai ya nahi, aur account dormant to nahi ho gaya. Inme se koi ek bhi gadbad ho to paisa wapas chala jaata hai, aur theek hone ke baad agli baar me aata hai.
        </p>

        <p>
          <strong>Teesra kaam: talathi ya tehsil se poochiye.</strong> Aapka naam eligible list me hai ya nahi, aapke gaon ka survey kahan tak pahuncha, aur nuksan ka percentage kya darj hua — ye sab kagaz talathi ke paas hai, kisi website par nahi. Online koi list nahi hai, isliye gaon ke kisi bhi aadmi se &ldquo;list me naam check kar do&rdquo; kehkar paisa mat dijiye. Koi agent ye kaam nahi kar sakta.
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 my-6 not-prose shadow-sm">
          <p className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-2">Agar teeno kaam kar liye aur phir bhi paisa nahi aaya</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            To shikayat ka raasta hai: tehsil office me likhit shikayat de sakte hain. Shikayat me apna naam, gaon, taluka aur bank account ki details likhiye. Aur ek baat yaad rakhiye — ₹5,000 nikalwane ke naam par koi bhi form bharne ki fee nahi hai. Jo aisa maange, woh thag hai.
          </p>
        </div>

        <figure className="my-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md not-prose">
          <Image
            src="/images/articles/maharashtra-drought-relief-5000-advance-2026/soybean-harvest-maharashtra.webp"
            alt="Maharashtra ke grameen ilake me soybean ki katai karte kisan"
            width={1200}
            height={630}
            className="w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <figcaption className="text-center text-xs text-gray-500 dark:text-gray-400 py-2 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            Soybean, kapas aur tur — isi kharif ki faslon par sukhe ki sabse zyada maar padi. Photo: Wikimedia Commons, CC BY-SA 4.0.
          </figcaption>
        </figure>

        <h2>₹5,000 Advance Hai, Poora Muavza Nahi</h2>

        <p>
          Ye samajhna sabse zaroori hai: ₹5,000 sirf turant ki madad hai. Asli muavza — fasal ke nuksan ka poora hisaab — abhi baaki hai. Relief Minister ne saaf kaha hai ki advance milne se baaki muavza nahi rukega, woh survey ke baad alag se tay hoga.
        </p>

        <p>
          Isi liye Maharashtra ne 31 October ko Kendra ko ek prastav bheja hai: lagbhag <strong>₹31,000 crore</strong> ki madad, National Disaster Response Fund se. Prastav me likha hai ki 16.6 million hectare me se 14.15 million hectare par 33% se zyada nuksan hua hai, 37,496 gaon aur 304 taluke isme aate hain. Prastav bheja ja chuka hai, iski pushti Additional Chief Secretary Vinita Ved Singal ne ki hai — lekin Kendra ne abhi is par koi faisla nahi kiya hai. Jab tak faisla nahi aata, &ldquo;kab milega&rdquo; ka koi jawab nahi hai, aur is article me koi tareekh nahi likhi ja rahi.
        </p>

        <div className="overflow-x-auto my-8 not-prose">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden text-sm shadow-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Fasal ki kism</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">NDRF ki dar (prati hectare)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Baarani (rain-fed) fasal</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹8,500</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Sinchai wali (assured irrigated) fasal</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹17,000</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Baagwani / perennial fasal</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹22,500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Ye darein prastav me likhi hain, aur aakhri muavza inhi daron se banta hai — ₹5,000 se nahi. Isiliye survey ka kaam itna zaroori hai: aapki fasal kis kism ki thi aur nuksan kitna hua, ye survey se tay hoga. Apne gaon me survey hua ya nahi, ye talathi se poochiye.
        </p>

        <h2>Bijli Bill Maafi: ₹58,000 Crore Wala Elaan</h2>

        <p>
          ₹5,000 ke saath ek aur bada elaan hua hai: kisanon ke <strong>June 2026 tak ke bakaaya krishi bijli bill maaf</strong> kiye jayenge, lagbhag ₹58,000 crore ke. CM ne Diwali par Lohari Sawanga me ye baat dohrayi, aur Times of India aur ANI ne iski khabar di hai.
        </p>

        <p>
          Is elaan ko ek purani khabar se mat milaiye. July 2026 me bhi ₹48,000 crore ke pending dues maaf karne ki baat aayi thi, jo naye connection aur purane bakaaye se judi thi. November wala elaan alag hai: June tak ke outstanding farm bills ki maafi, sukha rahat ke hisse ke roop me. Dono ke aankde alag hain, dono ke kaaran alag hain. Bill me maafi kaise dikhegi aur kis tareekh se, is par bijli vibhag ka saaf nirdesh abhi aana baaki hai — isliye is article me uska koi step nahi likha.
        </p>

        <h2>Isi Hafte Ki Do Aur Baatein</h2>

        <p>
          <strong>Borewell par chhoot.</strong> CM ne Diwali par Lohari Sawanga me elaan kiya ki jin ilaakon me phal-bagwani hi rozi ka zariya hai, wahan kheti ke borewell khodne par lagi rok me asthaayi chhoot milegi — <strong>15 December 2026 tak</strong>, prashasan ki permission se aur bhoojal nikaasi ki nigrani ke saath. Ye chhoot bina shart ke nahi hai. Saath me ye bhi elaan hua ki Lohari Sawanga ke 10 kisanon ko sinchai-kuan yojana ka fayda milega, aur aage badhe hue sinchai projects ke liye ₹15,000 crore karz se uplabdh karaye gaye hain.
        </p>

        <p>
          <strong>₹5,000 wapas karne ki appeal.</strong> Minister Girish Mahajan ne aarthik roop se saksham kisanon se appeal ki hai ki ve apna ₹5,000 Mukhyamantri Rahat Kosh me wapas kar dein, taaki woh paisa zyada zarooratmand tak pahunch sake. Unke Jamner kshetra ke lagbhag 50 kisanon ne khud aakar wapas karne ki ichha jatayi hai. Ye appeal hai, niyam nahi — wapas karna ya na karna aapki marzi hai. Aur ek baat: wapas karne ka koi official tareeka abhi publish nahi hua hai, isliye kisi ko bhi is naam par paisa mat dijiye.
        </p>

        <p>
          Revenue Minister Chandrashekhar Bawankule ne ek aur samay-seema tay ki hai: pichhle do saal me paani ki kami ke liye jin niji kuon ko requisition kiya gaya tha, unka bakaaya <strong>20 November tak</strong> clear karne ka aadesh diya gaya hai. Ye ₹5,000 se alag baat hai, lekin wahi kisanon se judti hai — agar aapka kuan requisition hua tha to apne tehsil se pooch lijiye.
        </p>

        <h2>Kuch Aur Sawaal</h2>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />
        <section className="mb-8 not-prose">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 italic">Maharashtra ₹5,000 advance — jo sawaal sabse zyada poochhe ja rahe hain</p>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden group"
              >
                <summary className="p-4 font-semibold text-gray-900 dark:text-gray-100 cursor-pointer bg-gray-50 dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3 focus:outline-none focus:ring-2 focus:ring-green-600">
                  <span>{q}</span>
                  <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">
                    +
                  </span>
                </summary>
                <div className="p-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-200 dark:border-gray-700">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </section>

        <h2>Sources</h2>

        <p>
          Is article ki har date aur figure inhi jagahon se milaayi gayi hai. Sabse pehle sarkar ka apna GR hai — GR No. समिती-२०२६/प्र.क्र.८२/मदत-२, 27 October 2026, Relief &amp; Rehabilitation Department, Maharashtra — jisme ₹5,000 ke advance ki eligibility aur exclusions saaf likhi hain:
        </p>

        <ul>
          <li><a href="https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202610271811211341.pdf" target="_blank" rel="noopener noreferrer">Maharashtra GR, 27 October 2026 (PDF) — ₹5,000 advance, eligibility, exclusions, ₹7,500 crore ka pravdhan</a></li>
          <li><a href="https://indianexpress.com/article/cities/mumbai/maharashtra-drought-2026-news-payouts-release-date-eligiblity-rs-5000-credit-10940097/" target="_blank" rel="noopener noreferrer">The Indian Express, 28 October 2026 — Cabinet faisla, ₹7,500 crore, 33% shart, exclusions</a></li>
          <li><a href="https://www.freepressjournal.in/amp/mumbai/maharashtra-cabinet-approves-7500-crore-for-drought-hit-farmers-5000-aid-restricted-to-those-with-over-33-crop-loss" target="_blank" rel="noopener noreferrer">Free Press Journal, 27 October 2026 — Cabinet manzoori, ₹2,000 + ₹5,500 crore ka vibhajan, eKYC chhoot</a></li>
          <li><a href="https://www.deccanchronicle.com/amp/nation/maharashtra-to-give-rs-5000-aid-to-15-crore-farmers-before-diwali-1999504" target="_blank" rel="noopener noreferrer">Deccan Chronicle, 28 October 2026 — GR jaari hone ki khabar, vistrit exclusions, NDRF prastav</a></li>
          <li><a href="https://www.moneycontrol.com/city/maharashtra-rs-5-000-drought-relief-who-will-get-the-money-and-when-will-it-reach-your-account-article-14062332.html" target="_blank" rel="noopener noreferrer">Moneycontrol, 28 October 2026 — kaun eligible hai, koi alag portal nahi</a></li>
          <li><a href="https://timesofindia.indiatimes.com/city/pune/maharashtra-disburses-rs4372-crore-diwali-relief-to-over-87-lakh-drought-hit-farmers/articleshow/135645588.cms" target="_blank" rel="noopener noreferrer">Times of India, 8 November 2026 — 87,45,669 kisan, ₹4,372.83 crore, division-wise hisaab</a></li>
          <li><a href="https://timesofindia.indiatimes.com/city/nagpur/rs-880cr-diwali-advance-dole-sent-to-vidarbha-farmers-a/cs/articleshow/135618691.cms" target="_blank" rel="noopener noreferrer">Times of India, 7 November 2026 — Vidarbha ₹880 crore, 18 lakh kisan, 2 November se shuruat</a></li>
          <li><a href="https://www.freepressjournal.in/amp/pune/pune-drought-farmers-receive-5000-advance-before-diwali-amid-crop-losses-across-318-lakh-hectares" target="_blank" rel="noopener noreferrer">Free Press Journal, 9 November 2026 — Pune zila: 3,28,542 kisan, ₹164.27 crore, 3.18 lakh hectare</a></li>
          <li><a href="https://indianexpress.com/article/cities/mumbai/maharashtra-devendra-fadnavis-diwali-drought-hit-farmer-relief-borewells-10955816/" target="_blank" rel="noopener noreferrer">The Indian Express, 9 November 2026 — 305 taluke ghoshit, borewell chhoot 15 December tak, ₹15,000 crore sinchai</a></li>
        </ul>

        <p>
          Aakhri baar in sab se milaan 9 November 2026 ko kiya gaya. Nayi ginati ya Kendra ka NDRF faisla aate hi ye article update hoga.
        </p>

        <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
            <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
            Ye lekh jaankari ka saathi hai, sarkari dastavez nahi. ₹5,000 se judi har baat apni passbook, talathi ya tehsil se jaanch lein. KisanStatus koi sarkari vibhag nahi hai aur payment process nahi karta.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700 not-prose">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Isse Judi Zaroori Jaankari</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/rajya-yojana/namo-shetkari-yojana-status-check-2026" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-500 hover:shadow-lg transition-all">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-green-600 transition-colors mb-1">Namo Shetkari Yojana</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Maharashtra ki doosri scheme — ₹2,000 ki kistein, status kaise dekhein.</p>
            </Link>
            <Link href="/articles/PmKisanMasterGuide2026" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-500 hover:shadow-lg transition-all">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-green-600 transition-colors mb-1">PM Kisan Master Guide</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">PM Kisan ki poori jankari — kist, eKYC, seeding, ek jagah.</p>
            </Link>
            <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 hover:shadow-lg transition-all">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 transition-colors mb-1">Sabhi Rajyon Ki Kisan Yojanaen</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Har state ki scheme ka comparison ek jagah.</p>
            </Link>
          </div>
        </div>

      </article>
    </>
  );
}

