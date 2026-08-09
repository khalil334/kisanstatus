https://github.com/khalil334/kisanstatus/tree/main/components%2Farticles%2Fhindi-yojana
har 3 article fix karny ke bad ye file b update kia karo or articles Auto merge karke phr next 3 py kam Start karo 3 3 karke sab fix karo
 मेरे KisanStatus.com के lib/hindi-articles-data.ts file में 15 Hindi articles का meta data fix करो। सिर्फ इस file को edit करो — articles का content बिल्कुल unchanged रहे।

## Current Problems:
- 12/15 titles 40 characters से कम हैं (ideal: 50-60 chars)
- 15/15 descriptions 120 characters से कम हैं (ideal: 150-160 chars)

## Requirements:

### Title (titleHi field)
- 8-12 words (50-60 characters max)
- हर title अलग style में हो — कोई uniform template नहीं:
  - कुछ direct question ("Kaise...? / Kab...?")
  - कुछ bold statement ("Janiye... / Puri Jankari...")
  - कुछ urgency ("Rukawat? / Problem? / Fix...")
  - कुछ benefit-driven ("₹2000 Kist / ₹12000...")
  - कुछ curiosity ("Jaanein... / Secret...")
- Low-competitive long-tail keywords naturally include करो
- Hinglish mix — jaise real Indian user Google pe search karta hai

### Description (desc field)
- 20-30 words (150-160 characters max)
- Conversational, natural tone — robotic नहीं
- Primary + 1-2 secondary keywords naturally
- Action-oriented — click karne pe majboor करे
- हर description unique हो

### Keyword Research
- Google Autocomplete style long-tail keywords (4-8 words)
- Question-based ("kaise", "kya", "kab", "kyu")
- India-specific terms

Output: सिर्फ lib/hindi-articles-data.ts का updated code — baqi कोई file मत छेड़ो।
