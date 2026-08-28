// SPAM-UPDATE FIX (Aug 2026): Pehle yahan 16 rotating author bios, 5 taglines
// aur 10 disclaimer variants the jo har page par hash se alag-alag text dikhate
// the. Ek hi author ki har page par alag bio = template/AI-generation ka clear
// signal (Google E-E-A-T ke liye negative). Ab ek hi static, consistent bio,
// tagline aur disclaimer har jagah use hota hai. Function signatures wahi hain
// taake koi call-site na toote.

export const AUTHOR_BIO =
  'PM Kisan aur kheti ki sarkari yojanaon par likhta hoon. Har guide likhne se pehle pmkisan.gov.in ya state portal par process khud check karta hoon — jo cheez portal par khud verify nahi ki, wo is site par nahi aati. Main sarkari aadmi nahi hoon; kaam bas itna hai ki portals ki uljhi hui jankari seedhi bhasha me samjha doon.' as const;

export const AUTHOR_TAGLINE =
  'PM Kisan aur sarkari yojanaon par likhta hoon — official portals se khud verify karke' as const;

export const DISCLAIMER =
  'KisanStatus.com ek niji website hai — sarkar ya kisi sarkari vibhag se koi sambandh nahi. Yahan ki jankari samjhane ke liye hai; rules badal sakte hain aur galti bhi ho sakti hai. Kist, eKYC, registration ya payment jaisa asli kaam hamesha pmkisan.gov.in ya apne state ke official portal par hi karein. OTP ya password kisi ko na batayein.' as const;

// Backwards-compatible signatures — key ab ignore hota hai, sab jagah wahi
// static text milta hai.
export function getAuthorBio(_key: string): string {
  return AUTHOR_BIO;
}

export function getAuthorTagline(_key: string): string {
  return AUTHOR_TAGLINE;
}

export function getDisclaimer(_key: string): string {
  return DISCLAIMER;
}
