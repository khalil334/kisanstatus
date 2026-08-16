// Author bios for Manish Kumar — same person, same facts, but worded the
// way a real person actually talks about himself in different moments:
// different lengths, different moods, different sentence rhythm. Some are
// two lines, some are one. Some mention verification, some don't bother.
// Selection is deterministic per page (hash of a stable key), so a given
// article always shows the same bio across builds.

export const AUTHOR_BIOS: readonly string[] = [
  'PM Kisan aur kheti ki yojanaon par likhta hoon, kai saal ho gaye. Jo cheez portal par khud check nahi ki, wo yahan nahi aati. Bas itna sa usool hai.',
  'Shuruat apne ghar ke liye hui thi, sach batau to. Papa ki kist atki thi, portal samajh nahi aa raha tha. Tab se PM Kisan aur baaki schemes ko khud track karna shuru kiya, aur likhna aadat ban gaya.',
  'Main sarkari aadmi nahi hoon. Bas itna karta hoon ki pmkisan.gov.in aur state portals ki uljhi hui jankari ko khud samajhta hoon, phir seedhi bhasha me yahan likh deta hoon.',
  'Yojanaon ke rules kab badal jaate hain, pata bhi nahi chalta. Isliye har guide likhne se pehle portal par jaakar khud dekhta hoon ki process abhi bhi wahi hai ya kuch naya aa gaya. Purani jankari se kisan ka nuksan hota hai, aur yahi cheez mujhse bardasht nahi hoti.',
  'KCC ho, Maandhan ho ya PM Kisan ki kist, sawal sabke milte-julte hote hain. Unhi sawalon ke jawab dhoondh kar likhta hoon. Andaze se kuch nahi, jo dikha wahi.',
  'Kai saal se yojanaon par kaam kar raha hoon. Aadhi mehnat likhne me nahi, verify karne me jaati hai. Helpline par call karna, portal par steps khud try karna, screenshots milana. Boring kaam hai par zaroori hai.',
  'Sarkari website ki bhasha samajhna asaan kaam nahi, sach me. Wahi kaam main karta hoon, aapke liye. PM Kisan se lekar tractor subsidy tak, jo bhi likhta hoon pehle khud samajhta hoon.',
  'Log poochte hain itna time kahan se aata hai portals check karne ka. Ab aadat hai. Nayi update aayi nahi ki pehle khud dekhta hoon, phir yahan likhta hoon. Kisi afwah par kuch nahi jaata is site par.',
  'Kisan bhaiyon ko das jagah na bhatakna pade, ek hi jagah sahi baat mil jaye. Site isi soch se banayi thi. Aaj bhi wahi koshish hai, har guide me.',
  'PM Kisan status, eKYC, kist ka paisa, form ke chakkar. In par saalon se likh raha hoon. Jawab hamesha official source se milta hai, meri taraf se sirf aasan bhasha judti hai.',
  'Ek galat helpline number ya chhoota hua document kisan ke kai din kharab kar deta hai. Ye baat dimag me rakh kar likhta hoon. Har number, har step, pehle khud check hota hai.',
  'Yojanaon ki duniya me afwahein bahut hain. Kabhi nayi kist ki, kabhi kisi naye rule ki. Main wahi likhta hoon jo portal par khud dekha ho, baaki sab shor hai.',
  'Kheti-baadi ki schemes follow karte karte kai saal ho gaye. Ab to WhatsApp par bhi log seedhe sawal bhejte hain. Jitne common sawal hain, sabke jawab yahan guides me daal raha hoon, dheere dheere.',
  'Likhna baad me aata hai, pehle samajhna padta hai. PM Kisan ka koi bhi update ho, pehle pmkisan.gov.in par khud dekhta hoon, phir do-teen jagah confirm karta hoon, tab yahan aata hai.',
  'Simple si baat hai. Sarkari portal jo baat pachees line me kehta hai, wo yahan do line me samajh aa jaye. Isi kaam me laga hoon, kai saalon se.',
  'Yojana ki jankari me galti ki gunjaish nahi hoti, isliye har fact official portal se milakar likhta hoon. Baki sab log jaise main bhi seekh hi raha hoon, roz kuch naya samne aata hai.',
] as const;

// Short one-liner under the author name. Was a single hardcoded line on
// every page ("Sarkari yojana information — official sources se verified"),
// which read machine-stamped. Now varies per page like the bio.
export const AUTHOR_TAGLINES: readonly string[] = [
  'PM Kisan aur sarkari yojanaon par likhta hoon',
  'Sarkari yojana ki verified jankari, aasan bhasha me',
  'Yojana guides, official portals se check karke',
  'Kheti aur sarkari schemes par research aur writing',
  'PM Kisan, KCC aur yojana updates cover karta hoon',
] as const;

// Disclaimer variants — same essential message (independent site, not a
// government portal; verify real work on official portals), worded
// differently so the block isn't byte-identical on every article.
export const DISCLAIMER_VARIANTS: readonly string[] = [
  'Seedhi baat bata doon — KisanStatus.com meri apni banayi site hai, sarkar ya kisi bhi sarkari portal se iska koi lena-dena nahi. Jo bhi likhta hoon, bas samjhane ke liye likhta hoon taaki aapka kaam aasaan ho. Kist, eKYC, registration — koi bhi asli kaam ho to seedha pmkisan.gov.in jaise official portal par hi karein, wahi aakhri sach hai.',
  'Ek baat clear kar doon — ye meri personal site hai, koi sarkari website nahi. Yahan sab kuch sirf samjhane ke liye likha gaya hai. Kist check, eKYC ya registration jaisa koi bhi asli kaam pmkisan.gov.in ya apne state ke official portal par hi karein.',
  'KisanStatus.com ka kisi sarkari vibhag se koi sambandh nahi hai — ye ek independent guide site hai. Yahan di gayi jankari samajhne ke liye hai; final aur updated jankari ke liye hamesha official portal (jaise pmkisan.gov.in) par hi bharosa karein.',
  'Note kar lein — ye site sarkari nahi hai, main apni taraf se yojanaon ki jankari aasan bhasha me likhta hoon. Koi bhi payment, eKYC ya form ka kaam karna ho to seedha official portal par jayein, wahi aakhri aur sahi jagah hai.',
  'Disclaimer seedha sa hai: KisanStatus ek niji (private) website hai, sarkar se iska koi lena-dena nahi. Content sirf jankari ke liye hai. Asli kaam — kist, registration, eKYC — hamesha pmkisan.gov.in jaise official portals par hi karein.',
  'Yahan jo bhi padha, wo samajhne ke liye likha gaya hai — KisanStatus koi sarkari portal nahi, meri apni site hai. Scheme ka koi bhi official kaam karne se pehle pmkisan.gov.in ya apne state ke portal par jaakar confirm zaroor karein.',
] as const;

function hash(key: string): number {
  let h = 0;
  for (let i = 0; i < key.length; i++) {
    h = (h * 31 + key.charCodeAt(i)) >>> 0;
  }
  return h;
}

/** Deterministic pick: same key always returns the same bio. */
export function getAuthorBio(key: string): string {
  return AUTHOR_BIOS[hash(key) % AUTHOR_BIOS.length];
}

/** Deterministic pick for the short tagline; offset so bio/tagline pairs vary. */
export function getAuthorTagline(key: string): string {
  return AUTHOR_TAGLINES[(hash(key) + 7) % AUTHOR_TAGLINES.length];
}

/** Deterministic pick for the disclaimer; offset so it doesn't pair with the bio. */
export function getDisclaimer(key: string): string {
  return DISCLAIMER_VARIANTS[(hash(key) + 3) % DISCLAIMER_VARIANTS.length];
}
