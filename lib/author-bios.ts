// Natural, varied author bios for Manish Kumar.
// Same person, same facts — but worded differently so the bio
// doesn't read as word-for-word boilerplate on every page.
// Selection is deterministic per page (hash of a stable key),
// so a given article always shows the same bio across builds.

export const AUTHOR_BIOS: readonly string[] = [
  'Main pichhle kai saalon se PM Kisan aur doosri sarkari yojanaon ko track kar raha hoon. Jo bhi likhta hoon, pehle pmkisan.gov.in aur state portals par khud check karta hoon — phir aasan bhasha mein samjhata hoon, taaki aapko sahi jankari ke liye idhar-udhar bhatakna na pade.',
  'PM Kisan, KCC aur baaki sarkari yojanaon par kai saal se likh raha hoon. Har guide publish karne se pehle official portal par khud process check karta hoon, taaki aap tak sirf verified jankari pahunche.',
  'Sarkari yojanaon ki jankari aksar itni uljhi hoti hai ki aam kisan ke liye samajhna mushkil ho jata hai — bas yahi problem solve karne ke liye main likhta hoon. Har baat pmkisan.gov.in ya state portal se verify karke hi batata hoon.',
  'Kai saalon se kisan yojanaon ko follow kar raha hoon — PM Kisan se lekar KCC loan aur subsidy schemes tak. Likhne se pehle official website par steps khud try karta hoon, phir seedhi-saadi bhasha mein samjhata hoon.',
  'Mera kaam simple hai: sarkari portals ki confusing jankari ko verify karke aasan Hindi mein aap tak pahunchana. PM Kisan ki har update main khud track karta hoon, taaki aapko galat ya purani jankari na mile.',
  'PM Kisan aur krishi yojanaon par regular research karta hoon. Guide likhne se pehle har step official portal par verify karna meri aadat hai — isliye jo yahan padhte hain, uspar aap bharosa kar sakte hain.',
  'Kheti-baadi se judi sarkari schemes — PM Kisan, Maandhan, KCC — in sab par kai saal se nazar rakhe hue hoon. Sirf wahi likhta hoon jo official sources par khud confirm kar chuka hoon, aur wo bhi aisi bhasha mein jo har kisan samajh sake.',
  'Yojanaon ke rules aksar badalte rehte hain, isliye main pmkisan.gov.in aur state portals ko lagatar check karta rehta hoon. Jo bhi naya update aata hai, use verify karke aasan shabdon mein aap tak pahunchata hoon.',
  'Main sarkari yojanaon ka koi official adhikari nahi hoon — ek researcher hoon jo kai saalon se PM Kisan jaisi schemes ko bariki se follow kar raha hai. Har jankari official portal se milaan karke hi publish karta hoon.',
  'Kisan bhaiyon ko sahi jankari ke liye das jagah bhatakna na pade — isi soch ke saath likhta hoon. PM Kisan status se lekar subsidy tak, har topic official source se check karke simple bhasha mein cover karta hoon.',
  'Har guide ke peeche ghanton ki research hoti hai — pehle official portal par process khud dekhta hoon, helpline numbers verify karta hoon, tab jaakar likhta hoon. Kai saalon se yahi kar raha hoon, PM Kisan aur baaki yojanaon ke liye.',
  'Sarkari yojana ki jankari mein choti si galti bhi kisan ka nuksan kara sakti hai. Isliye main har fact ko pmkisan.gov.in ya sambandhit state portal se verify karta hoon, aur phir use aam bolchal ki bhasha mein samjhata hoon.',
] as const;

/** Deterministic pick: same key always returns the same bio. */
export function getAuthorBio(key: string): string {
  let h = 0;
  for (let i = 0; i < key.length; i++) {
    h = (h * 31 + key.charCodeAt(i)) >>> 0;
  }
  return AUTHOR_BIOS[h % AUTHOR_BIOS.length];
}
