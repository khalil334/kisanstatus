# Fix Plan — rajya-yojana Articles (components/articles/rajya-yojana)

Scan date: 2026-08-04 · Branch base: main @ 345e33a

## Rules applied
- Har article me **minimum 5 images** (WebP, < 80 KB, realistic, achi quality)
- Duplicate content / repeated word-sequences fix
- AI-uniform paragraph & line lengths humanize — natural flow, no AI-sounding words
- Ek article = ek commit; PR review ke baad hi merge (no auto-merge)

## Article-by-article findings

| # | Article | Images | Needed | Content issues |
|---|---------|--------|--------|----------------|
| 1 | KrishakBandhuStatusCheck.tsx | **1** (hero only) | **+4** | FAQ answers body text ko repeat karte hain ("Baaki state schemes Aadhaar primary key banati hain…" 3×); "naam" 41×, "bank" 40×, "paisa" 38× — keyword stuffing kam karna |
| 2 | StateKisanYojanaHub.tsx | **1** (hero only) | **+4** | "alag" 46×, "rajya" 52×, "scheme" 48× repetition; "bhoomiheen aur batai par kheti karne wale" phrase 4× duplicate |
| 3 | OdishaCmKisanStatusCheck.tsx | **4** | **+1** | "Purana enrolment aap claim khatam nahi karta" 3× duplicate; "application stage bank account mapping aur kyc" 3× (prose already humanized in PR #52 — sirf dups + 1 image) |
| 4 | PmKisanPatiPatniRule.tsx | **4** | **+1** | Prose already humanized (PR #51) — sirf 1 image add |
| 5 | AnnadataSukhibhavaStatusCheck.tsx | 5 ✓ | 0 | "bataidar kisan bhi isme aate hain" 4× duplicate; "kisan" 45× — light dedup pass |
| 6 | NamoShetkariYojanaStatus.tsx | 5 ✓ | 0 | "shetkari" 45× + "namo" 40× + "kisan" 63× stuffing — humanize pass |
| 7 | RajasthanKisanSammanNidhi9000.tsx | 5 ✓ | 0 | "kisan" 57×, "aadhaar" 46× — moderate dedup; (CSS class repeats ignore — code, not content) |
| 8 | RythuBharosaStatusCheck.tsx | 5 ✓ | 0 | "rythu"/"bharosa" naturally high (scheme name) — light pass only if needed |
| 9 | MpKisanKalyanYojanaKist.tsx | 5 ✓ | 0 | Already fixed in PR #53 — **no changes** |

## Image spec
- Format: WebP, quality high, **file size < 80 KB**, 1200×675 (matches Fig component)
- Realistic photographic style — Indian farmers, offices, phones/portals, documents; no text overlays, no watermarks
- Path: `public/images/articles/rajya-yojna/<article-slug>/<name>.webp`
- Wired into article via existing `Fig` component with alt + caption (Hinglish, descriptive)

## Humanize spec
- Vary sentence + paragraph length (break AI-uniform rhythm)
- Remove exact-duplicate sentences/phrases (FAQ vs body)
- Reduce keyword density where a word repeats unnaturally (synonyms / restructure)
- No AI-tell words; keep Hinglish tone consistent with existing articles
- Facts, numbers, scheme names, links — **unchanged** (no fabrication)

## Execution order (1 commit each, separate PRs)
1. KrishakBandhuStatusCheck — +4 images + dedup/humanize
2. StateKisanYojanaHub — +4 images + dedup/humanize
3. OdishaCmKisanStatusCheck — +1 image + dedup
4. PmKisanPatiPatniRule — +1 image
5. NamoShetkariYojanaStatus — humanize pass
6. AnnadataSukhibhavaStatusCheck — light dedup
7. RajasthanKisanSammanNidhi9000 — moderate dedup
8. RythuBharosaStatusCheck — review-only / light pass

## After merge
- Re-check each changed article URL in browser (images load, layout OK)
- Trigger re-crawl in Ahrefs Site Audit (project Kisanstatus, id 10042735)
