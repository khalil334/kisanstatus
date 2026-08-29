export const AUTHOR_BIO =
  'PM Kisan aur kheti ki sarkari yojanaon par likhta hoon. Har guide likhne se pehle pmkisan.gov.in ya state portal par process khud check karta hoon — jo cheez portal par khud verify nahi ki, wo is site par nahi aati. Main sarkari aadmi nahi hoon; kaam bas itna hai ki portals ki uljhi hui jankari seedhi bhasha me samjha doon.' as const;

export const AUTHOR_TAGLINE =
  'PM Kisan aur sarkari yojanaon par likhta hoon — official portals se khud verify karke' as const;

export const DISCLAIMER =
  'KisanStatus.com ek niji website hai — sarkar ya kisi sarkari vibhag se koi sambandh nahi. Yahan ki jankari samjhane ke liye hai; rules badal sakte hain aur galti bhi ho sakti hai. Kist, eKYC, registration ya payment jaisa asli kaam hamesha pmkisan.gov.in ya apne state ke official portal par hi karein. OTP ya password kisi ko na batayein.' as const;

export function getAuthorBio(_key: string): string {
  return AUTHOR_BIO;
}

export function getAuthorTagline(_key: string): string {
  return AUTHOR_TAGLINE;
}

export function getDisclaimer(_key: string): string {
  return DISCLAIMER;
}
