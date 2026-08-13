// Natural, varied author bios for Manish Kumar.
// Same person, same facts — worded the way a human would introduce
// himself differently in different places: some short, some long,
// different openings, different rhythm. Selection is deterministic
// per page (hash of a stable key), so a given article always shows
// the same bio across builds.

export const AUTHOR_BIOS: readonly string[] = [
  'Main pichhle kai saalon se PM Kisan aur doosri sarkari yojanaon ko track kar raha hoon. Jo bhi likhta hoon, pehle pmkisan.gov.in aur state portals par khud check karta hoon — phir aasan bhasha mein samjhata hoon, taaki aapko sahi jankari ke liye idhar-udhar bhatakna na pade.',
  'PM Kisan, KCC, subsidy schemes — yeh sab main kai saal se follow kar raha hoon. Seedha sa usool hai: jab tak official portal par khud confirm na kar loon, likhta nahi.',
  'Sach kahoon to yeh sab shuru hi isliye kiya tha kyunki sarkari websites ki bhasha samajhna mushkil hai. Ab kai saal ho gaye — PM Kisan ki har update pehle pmkisan.gov.in par khud dekhta hoon, phir aam bolchal mein likhta hoon.',
  'Kai saalon se kisan yojanaon par likh raha hoon — PM Kisan se lekar KCC loan aur pension schemes tak. Guide likhne se pehle official website par steps khud try karta hoon. Jo kaam nahi karta, woh main likhta nahi.',
  'Yojanaon ke rules har kuch mahine badal jaate hain, aur purani jankari kisan ka nuksan kara sakti hai. Isliye main pmkisan.gov.in aur state portals par lagatar nazar rakhta hoon, aur har update verify karke hi yahan daalta hoon.',
  'PM Kisan aur krishi yojanaon par research karna mera roz ka kaam hai. Helpline number ho ya form ka koi step — jab tak official source par khud na dekh loon, publish nahi karta.',
  'Kheti-baadi se judi schemes — PM Kisan, Maandhan, KCC, subsidy — in par kai saal se likh raha hoon. Koshish yehi rehti hai ki jo baat sarkari portal par uljhi hui hai, woh yahan aapko do minute mein samajh aa jaye.',
  'Main koi sarkari adhikari nahi hoon — bas ek researcher hoon jo PM Kisan jaisi yojanaon ko saalon se bariki se follow kar raha hai. Har fact official portal se milaan karke likhta hoon, apni taraf se kuch nahi jodta.',
  'Kisan bhaiyon ko sahi jankari ke liye das jagah na bhatakna pade — isi soch se likhna shuru kiya tha. Aaj bhi har guide pehle pmkisan.gov.in ya state portal par khud check karta hoon, phir simple bhasha mein yahan likhta hoon.',
  'Har guide ke peeche ghanton ki research hoti hai — portal par process khud dekhna, helpline verify karna, screenshots milana. Kai saalon se yahi routine hai, PM Kisan ho ya koi aur yojana.',
  'Sarkari yojana ki jankari mein choti si galti bhi bhaari pad sakti hai — galat form, galat helpline, chhoota hua document. Isliye main har cheez pmkisan.gov.in ya sambandhit state portal se check karke hi likhta hoon.',
  'PM Kisan status, e-KYC, kist ka paisa — in sawalon par main kai saal se kaam kar raha hoon. Jawab hamesha official portal se verify hota hai; andaaze se kuch nahi likhta.',
  'Kai saal pehle PM Kisan ko track karna shuru kiya tha, aur ab yeh aadat ban gayi hai — koi bhi nayi update aaye, pehle official portal par khud dekhta hoon, phir usko aasan Hindi mein yahan samjhata hoon.',
  'Mera kaam itna hai: sarkari portals ki uljhi hui jankari ko verify karna aur usko aisi bhasha mein likhna jo har kisan samajh sake. PM Kisan se lekar state schemes tak, sab khud check karta hoon.',
  'Likhne se zyada waqt verify karne mein lagta hai — aur yehi theek hai. PM Kisan aur baaki yojanaon ki har jankari pehle pmkisan.gov.in ya state portal par confirm hoti hai, tab yahan aati hai.',
  'Yojanaon ki duniya mein afwahein bahut chalti hain — kabhi nayi kist ki, kabhi naye rule ki. Main kai saalon se sirf wahi likhta hoon jo official source par khud dekh chuka hoon. Baaki sab shor hai.',
] as const;

/** Deterministic pick: same key always returns the same bio. */
export function getAuthorBio(key: string): string {
  let h = 0;
  for (let i = 0; i < key.length; i++) {
    h = (h * 31 + key.charCodeAt(i)) >>> 0;
  }
  return AUTHOR_BIOS[h % AUTHOR_BIOS.length];
}
