https://github.com/khalil334/kisanstatus/tree/main/components%2Farticles%2Fhindi-yojana
token ke lye card do sitemap ma b fix karo jaha jaha fix karny ek zarorat ha fix karo or ye abi index ni ha to redirect ke b zarorat ni or homepage par b fix karo homepage py ni show ho rahy
मेरे lib/hindi-articles-data.ts में 15 Hindi articles हैं। हर article के `slug` field में `hi/` prefix जोड़ो ताकि Hinglish articles से URL differentiate हो — duplicate content risk न हो।

Example: `slug: 'pm-kisan-25vi-kist'` → `slug: 'hi/pm-kisan-25vi-kist'`

बाकी 14 slugs भी इसी pattern से `hi/` prefix जोड़ो। सिर्फ slug field edit करो — बाकी सब unchanged।
