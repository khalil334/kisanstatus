import Link from 'next/link';
import ExternalLinkButton from '@/components/ExternalLinkButton';

export default function WestBengalMukhyamantriKrishakSammanNidhi() {
  const faqs = [
    {
      q: 'Kya har PM Kisan beneficiary ko West Bengal se ₹3,000 extra milenge?',
      a: 'Sirf woh PM Kisan beneficiary jinhe rajya ke niyam bhi pass karte hain. Component-2 ka fayda unhi ko hai jo PM Kisan ke eligible beneficiary hain aur rajya ki exclusion list me nahi aate. PM Kisan aata hai iska matlab ye nahi ki state wala hissa apne aap aa jayega, verification dono jagah hoti hai.',
    },
    {
      q: 'Pehli kist ₹2,000 ki kyun hai, ₹1,000 ki kyun nahi?',
      a: 'Component-2 saal ke ₹3,000 ko ₹1,000 ki teen kiston me deta hai, har chaar mahine me ek. Pehli baar do kistein ek saath di gayi, isliye 5 November ko ₹2,000 aaye. Agli kist ₹1,000 ki hogi, chaar mahine ke antar par.',
    },
    {
      q: 'Krishak Bandhu ka paisa pehle se mil raha hai, kya alag se form bharna padega?',
      a: 'Nahi. Purane Krishak Bandhu (Natun) ke eligible beneficiary Component-1 me apne aap aa jayenge, verification ke baad. PM Kisan wale Component-2 me bhi automatic enrolment hai. Naya form sirf unhe bharna hai jo pehle kisi bhi hisse me nahi the, woh apne block ke ADA office se sampark karein.',
    },
    {
      q: '40 decimal se kam zameen hai, kitna milega?',
      a: 'Component-1 me ₹4,000 saalana, do baar me ₹2,000 karke, Kharif aur Rabi me. Agar aap PM Kisan ke beneficiary bhi hain to uske upar Component-2 ke ₹3,000 aur milenge, kul ₹7,000. 40 decimal ya zyada zameen par Component-1 ₹6,000 hai, to PM Kisan ke saath kul ₹9,000 banta hai.',
    },
    {
      q: 'Pati-patni dono ko alag-alag milega?',
      a: 'Nahi. Component-1 me ek parivar se ek hi vyakti ko milta hai. Component-2 PM Kisan se juda hai, aur PM Kisan me bhi ek parivar ka rule hai. Dono ne register karwa liya to ek ka fayda rukega, aur extra liya hua paisa wapas bhi karna pad sakta hai.',
    },
    {
      q: '₹2 lakh wala death benefit ab bhi milega?',
      a: 'Is par notification me kuch nahi likha hai. Purane Krishak Bandhu (Natun) me mrityu par ₹2 lakh ki sahayta thi, nayi notification me uska zikr nahi hai, isliye uske jaari rehne par abhi kuch pakka nahi kaha ja sakta. Is par rajya ki taraf se koi saaf baat aate hi ye page update hoga.',
    },
  ];

  return (
    <>
      <article className="max-w-4xl mx-auto px-4 py-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-blue-600 dark:prose-a:text-blue-400">

        <div className="mb-8 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-600 not-prose shadow-sm">
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-0">
            <strong>Status (08/11/2026):</strong> Krishak Bandhu ab Mukhyamantri Krishak Samman Nidhi (MKSN) hai. Notification 29 October 2026 ko jaari hui. 5 November ko Pursurah me pehli kist release ho gayi — Times of India ne CM ke hawaale se transfer ki pushti ki hai. Neeche kya pakka hai aur kya abhi nahi, dono alag likhe hain.
          </p>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          West Bengal MKSN: PM Kisan Par ₹3,000 Extra — Kaun, Kab, Kaise
        </h1>

        <p>
          West Bengal ke kisanon ke liye ek purani scheme ka naam badla hai, aur usi ke saath PM Kisan walon ke liye saal ke ₹3,000 extra jud gaye hain. 28 October 2026 ko Nabanna me Cabinet ki baithak ke baad CM ne elaan kiya, aur 29 October ko Agriculture Department ne notification jaari kar di. Ab Krishak Bandhu ka naam Mukhyamantri Krishak Samman Nidhi hai, chhota naam MKSN.
        </p>

        <p>
          Naam ke peeche do hisse hain, aur dono ko alag samajhna zaroori hai, kyunki log inhe mila kar galat hisaab laga rahe hain. Pehla hissa purani Krishak Bandhu wali madad hai, zameen ke hisaab se ₹4,000 ya ₹6,000 saalana. Doosra hissa bilkul naya hai: jo kisan PM Kisan ka fayda le rahe hain, unhe rajya ki taraf se saal ke ₹3,000 aur milenge. Dono hisse ek saath samjho to poori tasveer banti hai, alag-alag padho to aadhi.
        </p>

        <p>
          Ek chhoti si baat naam par bhi. Notification me scheme ka naam &ldquo;Mukhyamantri Krishak Samman Nidhi&rdquo; likha hai, jabki CM aur khabron me &ldquo;Mukhyamantri Kisan Samman Nidhi&rdquo; bhi likha gaya hai. Dono ek hi scheme hain, kagaz par pehla wala naam chalega.
        </p>

        <h2>₹9,000 Ka Hisaab. Dono Hisse Ek Saath</h2>

        <p>
          Sabse pehle wohi hisaab jo sabse zyada poochha ja raha hai: ek PM Kisan wale kisan ko kul kitna milega. Kendra se ₹6,000, rajya se ₹3,000, kul ₹9,000 saalana. Lekin ye ₹9,000 sirf unhe milega jinke paas 40 decimal ya zyada zameen hai aur jo PM Kisan ke beneficiary bhi hain. Kam zameen walon ka hisaab neeche table me hai.
        </p>

        <div className="overflow-x-auto my-8 not-prose">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden text-sm shadow-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Hissa</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Saalana Rakam</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Kis Tarah</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">PM Kisan (Kendra)</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹6,000</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">3 × ₹2,000</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="border border-gray-300 dark:border-gray-600 p-3">MKSN Component-2 (Rajya, PM Kisan walon ke liye)</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹3,000</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">3 × ₹1,000, har chaar mahine me</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">MKSN Component-1, 40 decimal ya zyada zameen</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹6,000</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">2 × ₹3,000, Kharif aur Rabi me</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="border border-gray-300 dark:border-gray-600 p-3">MKSN Component-1, 40 decimal se kam zameen</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹4,000</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">2 × ₹2,000, Kharif aur Rabi me</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 font-semibold">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Kul (PM Kisan + MKSN, 40 decimal ya zyada)</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-700 dark:text-green-400">₹9,000</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">6 kistein saal bhar me</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Table ko dhyan se padhiye, to ek baat samajh aayegi: Component-1 aur Component-2 do alag raaste hain. Component-1 zameen par milta hai, chahe PM Kisan mile ya na mile. Component-2 sirf PM Kisan walon ko milta hai. Isliye ek kisan jiske paas 40 decimal se kam zameen hai aur PM Kisan bhi milta hai, use ₹4,000 ke saath ₹3,000 aur milenge, kul ₹7,000. Aur jise PM Kisan nahi milta, use sirf Component-1 ka hissa milega.
        </p>

        <h2>Pehli Kist 5 November: Kya Pakka Hai, Kya Nahi</h2>

        <p>
          Is scheme ki sabse zyada charcha wali baat pehli kist hai, aur ab us par sawaal nahi raha. 5 November 2026 ko Pursurah, Hooghly me hue Krishak Samman Nidhi karyakram me pehli kist release ho gayi. Times of India ki usi din ki report me likha hai ki PM Kisan walon ke liye saal ke ₹3,000 ki additional assistance disburse kar di gayi hai — matlab transfer ho gaya, sirf elaan nahi raha. Pehli baar ₹2,000 aane ki baat elaan aur scheme update se hai: Component-2 ki pehli do ₹1,000 wali kistein ek saath di gayin, aur rakam seedha bank khaaton me DBT se bheji gayi.
        </p>

        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-5 my-6 rounded-r-lg not-prose shadow-sm">
          <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2 text-sm">Abhi bhi kya nahi pata</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Transfer ho gaya, ye ab pakka hai. Lekin rajya ki taraf se abhi tak koi beneficiary list saamne nahi aayi hai, aur 5 November ko har kisan ke khaate me exactly ₹2,000 aaye ya nahi, iski alag se pushti bhi nahi hai — ₹2,000 ka aankda elaan aur scheme update par tika hai, Times of India ki report me saal ke ₹3,000 wali assistance ke disbursement ki baat hai.
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Apne khaate me paisa aaya ya nahi, ye sirf aapki passbook ya bank statement batayegi.
          </p>
        </div>

        <p>
          Ginati par bhi dhyaan dijiye, kyunki wahan abhi bhi alag-alag aankde ghoom rahe hain. Times of India ki report me CM ke shabdon me likha hai ki &lsquo;more than 46 lakh&rsquo; kisanon ko kul ₹9,000 saalana milenge. Usse pehle ki khabron me 48 lakh aur 50 lakh se zyada ke aankde bhi aaye the. Ye teeno ek hi baat nahi kehte, aur inme se koi bhi pehli kist pane walon ki pakki ginati nahi hai — woh sirf rajya ki list batayegi. CM ke &lsquo;more than 46 lakh&rsquo; wale bayan ko unke shabdon ke roop me padhiye, kist pane walon ki list ke roop me nahi. Jaise hi rajya ki taraf se koi list ya saaf aankda aayega, ye page update hoga.
        </p>

        <p>
          Agli kist kab aayegi, is par bhi abhi koi tareekh nahi hai. Component-2 ka niyam kehta hai ki har chaar mahine me ₹1,000 milega, lekin pehli kist ke baad ka calendar abhi elaan nahi hua. Koi bhi date WhatsApp ya YouTube par dikhe to use elaan mat maaniye.
        </p>

        <h2>Kaun Eligible Hai</h2>

        <p>
          Eligibility do hisson me banti hai, aur dono ke niyam alag hain.
        </p>

        <h3>Component-2: PM Kisan Walon Ke Liye ₹3,000</h3>

        <p>
          Is hisse ki shart sirf ek hai: aap PM Kisan ke eligible beneficiary hone chahiye. PM Kisan ke niyam yahan bhi lagenge, aur rajya ki exclusion list bhi. Koi alag form nahi bharna, koi alag registration nahi. PM Kisan me naam hai aur rajya ke niyam pass karte hain, to automatic enrolment hoga, verification ke baad.
        </p>

        <h3>Component-1: Zameen Ke Hisaab Se ₹6,000 Ya ₹4,000</h3>

        <p>
          Is hisse me zameen hi pehchan hai. 40 decimal ya zyada kheti ki zameen ho to ₹6,000 saalana, usse kam ho to ₹4,000. Sirf malik hi nahi, registered bargadar, patta holder aur registered sharecropper bhi isme aate hain, apne record ke saath. Zameen ki ginati 1 July 2026 ki tareekh par tiki hai, uske baad zameen me badlav ko aam taur par nahi gina jayega, aur ye cut-off paanch saal ke liye taya hai.
        </p>

        <p>
          Ek parivar se ek hi vyakti ko milega. Ghar me do logon ke naam zameen hai to bhi Component-1 ka fayda ek ko hi milega. Aadhaar se juda bank khaata hona zaroori hai, kyunki paisa DBT se hi aata hai. Purane Krishak Bandhu (Natun) ke eligible beneficiary is hisse me apne aap aa jayenge, verification ke baad, unhe bhi naya form nahi bharna.
        </p>

        <h2>Kaun Bahar Hai</h2>

        <p>
          Notification me bahar rakhe gaye logon ki list saaf likhi hai. Inme se kisi bhi category me aate hain to MKSN ka fayda nahi milega, chahe PM Kisan milta ho ya na ho:
        </p>

        <ul>
          <li>Sanstha ke naam par zameen rakhne wale (institutional landholders).</li>
          <li>Samvaidhanik padon par rahe ya maujooda log.</li>
          <li>Sarkari karmchari, chahe kaam kar rahe hon ya retired hon — sirf Group D, MTS aur Class IV ke karmchari isse bahar nahi hain.</li>
          <li>Pichhle assessment year me income tax bharne wale.</li>
          <li>Registered professional: doctor, engineer, lawyer, chartered accountant, architect, jo apna pesha karte hain.</li>
          <li>Retired pensioner jinhe mahine ke ₹10,000 ya zyada pension milti ho — Group D, MTS aur Class IV phir bhi eligible hain.</li>
          <li>NRI (Non-Resident Indian).</li>
          <li>Wo voter jinka naam SIR 2026 ke tahat voter list se hata diya gaya hai.</li>
        </ul>

        <p>
          Ye list PM Kisan ki exclusion list se bahut milti-julti hai, aur wahi iska matlab hai: jo PM Kisan se bahar hai, woh aam taur par MKSN se bhi bahar hoga. Agar aapko lagta hai ki aap galti se is list me aa gaye hain, to apne block ke ADA office me record dikha kar baat karein, online shikayat se zyada kaam wahi hoga.
        </p>

        <h2>Purane Krishak Bandhu Se Kya Badla</h2>

        <p>
          Bahut se kisan ye pooch rahe hain ki purani scheme me kya milta tha aur ab kya milega. Farq sirf naam ka nahi hai, rakam ka bhi hai, aur ye farq sabke liye fayde wala nahi hai.
        </p>

        <div className="overflow-x-auto my-8 not-prose">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden text-sm shadow-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Baab</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Purana Krishak Bandhu (Natun)</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Naya MKSN Component-1</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Saalana rakam</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹4,000 se ₹10,000, zameen ke hisaab se</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹4,000 ya ₹6,000, sirf do slab</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="border border-gray-300 dark:border-gray-600 p-3">40 decimal ya zyada</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹10,000 tak mil sakta tha</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹6,000 taya</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">40 decimal se kam</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Zameen ke hisaab se ₹4,000 se upar</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹4,000 taya</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Kist ka samay</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Do kistein saalana</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Do kistein, Kharif aur Rabi me</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">Death benefit</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">₹2 lakh parivar ko</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Nayi notification me zikr nahi, jaari rehna unclear</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <td className="border border-gray-300 dark:border-gray-600 p-3">PM Kisan top-up</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Nahi tha</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">Component-2: ₹3,000 saalana extra</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Table ki doosri line sabse zaroori hai. Jin kisanon ko purani scheme me ₹10,000 tak milta tha, unhe ab ₹6,000 milega. Ye koi galti nahi hai, naya niyam hi yehi hai. Iske badle me PM Kisan walon ko ₹3,000 ka naya hissa jud gaya hai, to jinhe dono milte hain unka kul ₹9,000 banta hai. Lekin jise PM Kisan nahi milta aur zameen zyada hai, uska hisaab pehle se kam ho gaya hai. Apna budget isi naye hisaab se banaiye, purani rakam par nahi.
        </p>

        <p>
          Death benefit wali baat par bhi dhyaan dijiye. Purani scheme me kisan ki mrityu par parivar ko ₹2 lakh milte the. Nayi notification me iska koi zikr nahi hai, aur rajya ki taraf se abhi tak ye saaf nahi hua ki ye sahayta jaari rahegi ya nahi. Jab tak saaf baat na aaye, is par bharosa karke koi faisla mat lijiye.
        </p>

        <h2>Apply Karna Hai Ya Automatic Hai</h2>

        <p>
          Is scheme ka sabse achha hissa ye hai ki zyada tar logon ko kuch nahi karna hai. Purane Krishak Bandhu ke beneficiary aur PM Kisan ke beneficiary, dono ke liye enrolment automatic hai, verification ke baad. Koi naya form, koi nayi fee, koi agent nahi. Agar koi &ldquo;form bharwane&rdquo; ke naam par paisa maange to samajh lijiye ki woh thag hai.
        </p>

        <p>
          Naya enrolment sirf unhe karwana hai jo pehle kisi bhi hisse me nahi the. Unke liye raasta apne block ke Assistant Director of Agriculture (ADA) ke office se hai. Wahan se form milega aur wahin jama hoga. Uske baad block level par jaanch, phir district level par aur State Nodal Officer se validation hoga. Poora hone par ek Unique Beneficiary Identification Number (UBIN) banega, tab enrolment poora mana jayega.
        </p>

        <h3>Naye Enrolment Ke Liye Kagaz</h3>

        <ul>
          <li>Aadhaar Card</li>
          <li>Voter ID ya West Bengal me rehne ka koi aur saboot, agar manga jaye</li>
          <li>Zameen ke kagaz: Record of Rights (RoR), Patta ya sambandhit land document</li>
          <li>Bank passbook, Aadhaar se juda DBT-enabled khaata</li>
          <li>Aadhaar ya bank se juda mobile number</li>
          <li>Recent photograph</li>
        </ul>

        <p>
          Kagaz jama karne se pehle ek baat jaanch lijiye: Aadhaar, bank aur land record, teeno me naam ek jaisa hai ya nahi. Spelling me ek akshar ka farak bhi verification me atak sakta hai. Ye wahi galti hai jo PM Kisan me sabse zyada payment rukwati hai, aur yahan bhi wahi hoga.
        </p>

        <h2>Status Kaise Dekhein</h2>

        <p>
          Status dekhne ka sabse seedha raasta official portal hai, krishakbandhu.wb.gov.in. Wahan scheme ki guidelines aur updates milenge. Iske alawa apne block ke ADA office se bhi maloom kar sakte hain, khaas taur par agar online kuch samajh na aaye to. Component-2 ka fayda PM Kisan se juda hai, isliye PM Kisan ka status bhi saath me dekhna chahiye, woh pmkisan.gov.in par &ldquo;Know Your Status&rdquo; se milta hai.
        </p>

        <ExternalLinkButton url="https://krishakbandhu.wb.gov.in" label="Official Portal. Krishak Bandhu West Bengal" />

        <p>
          Ek baat jo yahan likhna zaroori hai: is scheme ka koi alag helpline number abhi saamne nahi aaya hai. Koi number WhatsApp ya YouTube par dikhe to use official mat maaniye. Block ke ADA office ka number hi sabse bharosemand raasta hai.
        </p>

        <h2>Paisa Na Aaye To Kya Karein</h2>

        <p>
          5 November ki kist ke baad agar aapke khaate me kuch nahi aaya to pehle ye teen cheezein dekhiye, usi order me.
        </p>

        <p>
          Pehle, PM Kisan ka status kholiye. Component-2 ka paisa tabhi aayega jab PM Kisan me aapka naam eligible hai aur eKYC, land seeding aur bank seeding poori hai. PM Kisan me hi rukawat hai to state wala hissa bhi rukega, kyunki dono ek hi record se judte hain.
        </p>

        <p>
          Doosra, bank statement dekhiye, SMS ka intezaar mat kijiye. SMS kabhi-kabhi aata hi nahi, lekin paisa aa chuka hota hai. Passbook me &ldquo;DBT&rdquo; wali entry dhoondhiye.
        </p>

        <p>
          Teesra, agar PM Kisan me sab theek hai aur phir bhi state wala hissa nahi aaya to apne block ke ADA office me jaakar poochiye. Wahan se pata chalega ki aapka naam Component-2 ki list me hai ya verification me atka hai. Online shikayat karne se pehle ek baar wahan jaana zyada kaam aata hai.
        </p>

        <h2>Dusre States Me Bhi Aisa Hi Hai</h2>

        <p>
          West Bengal akela state nahi hai jo PM Kisan par apna hissa jodta hai. Rajasthan me bhi PM Kisan ke ₹6,000 par state ₹3,000 jodti hai, kul ₹9,000 banta hai, aur wahan bhi state ka hissa ₹1,000 ki teen kiston me aata hai. Madhya Pradesh, Maharashtra, Odisha aur Andhra Pradesh me bhi aisi hi state schemes hain, rakam aur niyam alag-alag hain. Sab states ki list ek jagah{' '}
          <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026">yahan</Link>{' '}
          hai. Apne state ki scheme samajhne ke liye wahi list kaam aayegi, kyunki har state ka top-up apne niyam se chalta hai, PM Kisan se nahi.
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
          <p className="text-xs text-[var(--color-text-muted)] mb-3 italic">West Bengal MKSN. ₹3,000 extra wale sawaal jo sab poochhte hain</p>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="border border-[var(--color-border)] rounded-xl overflow-hidden group"
              >
                <summary className="p-4 font-semibold text-[var(--color-text)] cursor-pointer bg-[var(--color-bg-alt)] hover:bg-green-50 dark:hover:bg-green-900/20 text-sm flex justify-between items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                  <span>{q}</span>
                  <span className="text-green-600 dark:text-green-400 text-xl group-open:rotate-45 transition-transform shrink-0">
                    +
                  </span>
                </summary>
                <div className="p-4 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)]">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </section>

        <h2>Sources</h2>

        <p>
          Is article ki har date aur figure inhi jagahon se milaayi gayi hai. Notification ka poora text Agriculture Department ki notification 1128-AG/O/9M(Nab)-56/2026, dated 29.10.2026 me hai:
        </p>

        <ul>
          <li><a href="https://www.thestatesman.com/cities/kolkata/suvendu-to-launch-industrial-policy-on-nov-5-cabinet-approves-draft-1503656351.html" target="_blank" rel="noopener noreferrer">The Statesman, 28 October 2026 — Cabinet elaan aur pehli kist ki tareekh</a></li>
          <li><a href="https://www.thehindubusinessline.com/news/national/west-bengal-cabinet-approves-new-industry-policy-to-attract-investments/article71638834.ece" target="_blank" rel="noopener noreferrer">The Hindu BusinessLine, 28 October 2026 — Cabinet elaan aur ₹3,000 ka structure</a></li>
          <li><a href="https://www.telegraphindia.com/west-bengal/bengal-cm-suvendu-adhikari-announces-subsidy-for-4-lakh-farmers-special-package-for-three-districts/cid/2187993" target="_blank" rel="noopener noreferrer">PTI via Telegraph India, 5 November 2026 — Pursurah karyakram aur CM ka 46 lakh wala bayan</a></li>
          <li><a href="https://timesofindia.indiatimes.com/city/kolkata/suvendu-announces-major-support-package-for-potato-farmers/articleshow/135577178.cms" target="_blank" rel="noopener noreferrer">Times of India, 5 November 2026 — Pursurah karyakram, ₹3,000 assistance ka disbursement aur 46 lakh se zyada kisanon ka aankda</a></li>
          <li><a href="http://wbpay.in/en/mukhyamantri-krishak-samman-nidhi-notification-1128-ag-en/" target="_blank" rel="noopener noreferrer">wbpay.in — Notification 1128-AG ka summary, dono components aur exclusions</a></li>
          <li><a href="https://www.govtschemes.in/west-bengal-mukhyamantri-kisan-samman-nidhi-scheme" target="_blank" rel="noopener noreferrer">govtschemes.in — Scheme ka vivran aur 5 November ki pehli kist ki update</a></li>
          <li><a href="https://krishakbandhu.wb.gov.in" target="_blank" rel="noopener noreferrer">krishakbandhu.wb.gov.in — Official portal</a></li>
        </ul>

        <p>
          Aakhri baar in sab se milaan 8 November 2026 ko kiya gaya. Beneficiary list aate hi ye article phir update hoga.
        </p>

        <div className="mt-8 p-5 bg-gray-100 dark:bg-gray-800 rounded-xl border-l-4 border-orange-500 not-prose shadow-sm">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
            <strong className="text-orange-600 dark:text-orange-400 block mb-2">Disclaimer:</strong>
            Ye lekh jaankari ka saathi hai, sarkari dastavez nahi. ₹9,000 se judi har baat krishakbandhu.wb.gov.in ya apne block ke ADA office se jaanch lein.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700 not-prose">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Isse Judi Zaroori Jaankari</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/articles/PmKisan24viKist2026" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-500 hover:shadow-lg transition-all">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-green-600 transition-colors mb-1">PM Kisan 24vi Kist</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">24vi kist 30 October ko release hui, status check karo.</p>
            </Link>
            <Link href="/rajya-yojana/rajasthan-kisan-samman-nidhi-9000" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-lg transition-all">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors mb-1">Rajasthan Kisan Samman Nidhi</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Wahan bhi ₹9,000 kul milte hain, niyam alag hain.</p>
            </Link>
            <Link href="/rajya-yojana/state-kisan-yojana-list-all-states-2026" className="group flex flex-col bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 hover:shadow-lg transition-all">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 transition-colors mb-1">Sabhi Rajyon Ki Kisan Yojanaen</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Sab states ka comparison ek jagah.</p>
            </Link>
          </div>
        </div>

      </article>
    </>
  );
}
