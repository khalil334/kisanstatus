# AI Content Fix Guide — KisanStatus.com

> Audit date: 2026-08-26 · Scope: 111 article components (`components/articles/**`) + metadata (`lib/*data*.ts`)
>
> Maqsad: site ka content AI-generated lagta hai — kaunse patterns pakde gaye, aur real insaan jaisa
> banane ke liye kya-kya fix karna hai. Har finding ke saath actual numbers hain (fabricated kuch nahi).

---

## Part 1 — Kya AI jaisa lag raha hai (measured findings)

### 1.1 Em-dash (—) ki bharmaar — SABSE BADA RED FLAG

- **4,340 em-dashes** across 111 articles = **~39 per article**.
- Insaan Hinglish/Hindi me itne dash use nahi karta. AI models (khaaskar ChatGPT/Claude) har
  doosri line me `—` daalte hain. Readers aur AI-detectors dono isko turant pakadte hain.
- Example pattern jo har jagah hai: *"FTO generate hone ke baad paisa kuch dino mein aata hai — official timeline nahi hai."*

**Fix:** Har article me em-dash count 5-8 se neeche lao. Zyaadatar jagah:
- `—` ko full stop se replace karo (do chhote sentence banao), ya
- comma / "lekin" / "par" / "matlab" jaise natural connector use karo.

| AI version | Human version |
|---|---|
| Paisa kuch dino mein aata hai — official timeline nahi hai. | Paisa kuch dino mein aa jata hai. Waise koi official timeline nahi hai. |
| Selection SHG se hota hai — online form nahi hai. | Online form hai hi nahi. Selection SHG ke through hota hai. |

### 1.2 "X nahi — Y" contrast formula (195 matches)

Pattern: *"koi alag yojana **nahi** — KCC ka hi roop hai"*, *"online form **nahi** — panchayat ke jariye"*.
Ye "negation + em-dash + correction" structure AI ka signature move hai. 195 baar milta hai.

**Fix:** Isko todo. Kabhi seedha bolo ("Iska koi online form nahi hota. Kaam panchayat se hota hai."),
kabhi sawal se shuru karo ("Online form dhundh rahe ho? Nahi milega, kyunki..."), kabhi example se.

### 1.3 Formula titles aur catchphrases

- **"…Ka Sach"** — 12 articles ke titles/descriptions me (core-articles-data.ts me 8).
- **"Seedhi baat / सीधी बात"** — 10 jagah.
- **"Ek line me…"** — 7 articles me same summary device.

**Fix:** Har title/lead apne topic se banao, ek hi punch-formula sab jagah mat chipkao. "Ka Sach"
2-3 jagah theek hai (jahan sach me myth-busting hai), baaki jagah specific title do:
- ❌ "PM Kisan 24vi Kist — Date Ka Sach, Status Ka Tarika"
- ✅ "PM Kisan 24vi Kist: October ka andaza kaise nikla, status kahan dekhe"

### 1.4 Har article ka same template (107/111 me identical structure)

- 107/111 articles me FAQ block, 55 me StepList, 51 me warning box (WB), 45 me info box (IB) —
  same order me: intro → status box → steps → warning → FAQ → sources.
- Section headings bhi copy-paste: "Sources" 19x, "FAQ — Aapke Sawaal" / "Aksar Puche Jaane Wale Sawal" repeated.

**Fix:** Structure helpful hai (SEO ke liye bhi), isko poora mat hatao — lekin variety lao:
- Kuch articles FAQ ke bina bhi complete ho sakte hain (chhote topics par forced FAQ mat daalo).
- Kisi article me pehle problem-story, kisi me pehle table, kisi me pehle checklist.
- FAQ headings vary karo, aur FAQ answers me kabhi 1 line, kabhi 4 line — sab uniform mat rakho.

### 1.5 Repeated paragraph openers (AI ka rhythm)

2,900 paragraphs scan kiye. Sabse common openers:

| Opener | Count |
|---|---|
| "PM Kisan…" | 34 |
| "Ek aur…" | 20 |
| "Agar aap…" | 18 |
| "Ek baat…" | 17 |
| "Aur agar…" / "और अगर…" | 17 |
| "Bahut se…" | 10 |
| "एक बात…" | 10 |

**Fix:** Ek article ke andar koi opener 2 baar se zyada na aaye. "Ek aur baat" / "Ek baat aur
samajh lo" type filler transitions kaat do — seedha point bolo. Paragraph kabhi example se,
kabhi number se, kabhi kisan ke sawal se shuru karo.

### 1.6 Paragraph length bahut uniform

- 2,900 paragraphs: median 226 chars, mean 243 — distribution bahut smooth/predictable hai.
- Insaan ki writing me 1-line ke jhatke bhi hote hain aur 6-line ki lambi baat bhi. AI sab
  180-320 chars me settle kar deta hai.

**Fix:** Jaan boojh ke rhythm todo:
- Kahin ek 5-6 word ka standalone sentence chhodo. ("Bas. Itna hi karna hai.")
- Kahin ek lamba paragraph rehne do jahan detail zaroori hai.
- Har section me 2-3 same-size paragraphs lagatar na hon.

### 1.7 FAQ answers ka uniform tone

FAQ answers sab ek jaise confident, ek jaisi length, ek jaisa "myth-bust + reassure" pattern
follow karte hain (e.g. har answer me "koi official baat nahi hui", "WhatsApp forward se nahi").

**Fix:** Kuch answers me uncertainty rakho ("Iska pakka jawab kisi ke paas nahi, lekin..."),
kuch me personal-style observation ("Humne dekha hai zyadatar cases me bank seeding hi issue hota hai").

---

## Part 2 — Real insaan jaise likhne ke rules (aage ke content ke liye)

1. **Pehle bolo, phir likho.** Jo likha hai use zor se padho. Jahan atako ya jo bolne me ajeeb
   lage, wahi AI-ish hai. Kisan se baat karte waqt "— lekin —" nahi bolte.
2. **Em-dash budget: max 5-8 per article.** Baaki jagah full stop ya "lekin/par/matlab".
3. **Har article me kam se kam 1 first-hand cheez:** khud ka observation, CSC wale se baat,
   kisi kisan ka real case (naam badal ke), portal ka fresh screenshot-note ("aaj check kiya to...").
   Ye cheez AI generate nahi kar sakta aur Google ka E-E-A-T bhi yahi maangta hai.
4. **Numbers ko round-off mat karo jab exact pata ho, aur exact mat banao jab pata na ho.**
   "Kareeb 3 mahine" theek hai; fake precision ("92 din") mat daalo.
5. **Transitions kaato:** "Ek aur baat", "Ye bhi jaan lo", "Ab baat karte hain" — in me se
   article me max 1-2. Section heading khud transition ka kaam karti hai.
6. **Ek article = ek awaaz.** Sab articles me same catchphrases mat repeat karo. Har topic
   ki apni entry line honi chahiye jo sirf usi topic par fit ho.
7. **Sentence length mix karo.** Chhota. Phir ek medium sentence jo baat aage badhaye. Aur phir
   kabhi-kabhi ek lamba sentence jisme poori detail ek saath aa jaye kyunki wahan zaroori hai.
8. **Lists sirf wahan jahan sach me list hai.** Har section ko bullet me todna AI habit hai.
   Do-teen cheezein hain to prose me hi likh do.

---

## Part 3 — Prioritised fix plan (repo me kahan haath lagana hai)

| # | Fix | Files | Effort | Impact |
|---|---|---|---|---|
| 1 | ~~Em-dash cleanup (4,340 → ~800)~~ **DONE** — 6,386 → 872 across 126 files (~7/article). Replaced with full stops, commas, or colons depending on context; kept ~1 in 8 for natural rhythm. | `components/articles/**/*.tsx`, `lib/*data*.ts` | High (per-file, but mechanical) | Highest |
| 2 | ~~"X nahi — Y" pattern rewrite (195 spots)~~ **DONE** — down to 11 remaining (within the <30 target); these read naturally and were left. | same | Medium | High |
| 3 | ~~Titles/descriptions de-formulize ("Ka Sach" x12, "Seedhi baat" x10)~~ **DONE** — 5 "Ka Sach" titles/seoTitles rewritten in `core-articles-data.ts`, `maandhan-data.ts`, `loan-mandi-pashupalan-data.ts`. Kept "खाद योजना ₹11,000 का सच" (genuine myth-bust, allowed). "Seedhi baat" in author-bio/site-config is a single shared string, handled with openers pass. | `lib/core-articles-data.ts`, `lib/*data*.ts` | Low (metadata only) | High |
| 4 | ~~Paragraph-opener dedupe ("Ek aur/Ek baat/Agar aap")~~ **DONE** — all 10 "Ek aur baat / Ek baat aur" filler transitions removed; "Agar aap" openers reduced to ≤2 per article in the 4 worst files. "PM Kisan" repeats are mostly `<SH>` SEO headings and were kept intentionally. | article components | Medium | Medium |
| 5 | Template variety (FAQ optional, section order shuffle) | article components + `ArticleShared.tsx` | Medium | Medium |
| 6 | Add first-hand E-E-A-T signals (1 per article, top-20 traffic pages pehle) | top articles | Ongoing | High (long-term) |

**Suggested order:** Pehle #3 (sirf metadata, 1 din ka kaam, poore site ke titles turant behtar).
Phir #1+#2 saath-saath, top-traffic 20 articles se shuru. #4-#6 rolling basis par.

### Quick self-check script (repo root se chalao)

```bash
# Em-dash count per article — 10 se upar wale pehle fix karo
grep -c "—" components/articles/**/*.tsx | sort -t: -k2 -rn | head -20

# "nahi —" pattern kitna bacha
grep -roh " nahi — \|nahi hai — " components/articles/ | wc -l

# Repeated openers
grep -roh ">Ek aur \|>Ek baat " components/articles/ | wc -l
```

Jab ye numbers girenge, content utna hi human lagega. Target: em-dash < 10/article,
"nahi —" pattern < 30 total, koi opener kisi ek article me 2 se zyada nahi.
