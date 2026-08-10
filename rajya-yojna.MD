# Task: Fix rajya-yojana articles (KisanStatus.com)

**Folder:** `components/articles/rajya-yojana/` — 10 article files (`.tsx`).
**Goal:** every article ≥ 2,000 words of useful prose + remove the shared FAQ component.

## Progress tracker

Update this table after every batch. Status: `todo` → `in-progress` → `done (PR #n / commit)`.

| # | Batch | File | Words (verified 2026-08-10, after fix) | Status |
|---|-------|------|------------------------------|--------|
| 1 | 1 | KrishakUnnatiYojanaStatusCheck.tsx | ~2,104 | done (PR #188) |
| 2 | 1 | StateKisanYojanaHub.tsx | ~2,013 | done (PR #188) |
| 3 | 1 | PmKisanPatiPatniRule.tsx | ~2,074 | done (PR #188) |
| 4 | 2 | MpKisanKalyanYojanaKist.tsx | ~2,033 | done (PR #189) |
| 5 | 2 | RythuBharosaStatusCheck.tsx | ~2,065 | done (PR #189) |
| 6 | 2 | OdishaCmKisanStatusCheck.tsx | ~2,073 | done (PR #189) |
| 7 | 3 | NamoShetkariYojanaStatus.tsx | ~2,072 | done (PR #190) |
| 8 | 3 | AnnadataSukhibhavaStatusCheck.tsx | ~2,130 | done (PR #190) |
| 9 | 3 | KrishakBandhuStatusCheck.tsx | ~2,074 (length was OK — Fix 2 only) | done (PR #190) |
| 10 | 4 | RajasthanKisanSammanNidhi9000.tsx | ~2,373 (length OK — Fix 2 only) | done (PR #191) |

All 10 files: `ArticleShared`/`FAQBlock` import removed; FAQ rendered inline (same FAQ data,
accordion `<details>` markup + FAQPage JSON-LD). Completed 2026-08-10.

Word counts = prose words (JSX tags/imports stripped), measured from source on 2026-08-10.
Counting method: strip `{…}` expressions, `<…>` tags, and import lines; count remaining
`\w` + Devanagari word tokens.

## Fix 1 — Expand thin content to 2,000+ words

- **Never delete existing content.** Only add.
- Add genuinely useful material: state-specific examples, district-wise differences,
  document checklists, real farmer timeline scenarios, common mistakes & fixes.
- Avoid repetitive keywords; prefer low-competition long-tail phrasing.
- Each article's intro must stay/become unique — no shared opening template.

## Fix 2 — Remove ArticleShared / FAQBlock (all 10 files)

Every file currently has:
- `import { FAQBlock } from '@/components/ArticleShared';` (line ~7)
- One `<FAQBlock faqs={FAQS_DATA} caption="…" />` usage near the end.

Change to:
- Delete the `ArticleShared` import.
- Replace `<FAQBlock …/>` with inline JSX rendering the same FAQ content
  (keep the existing `FAQS_DATA` questions/answers; render them directly).
- **Do NOT touch:** tool components (`KrishakBandhuChecker`, `OdishaCmKisanChecker`,
  `PmKisanFamilyChecker`, etc.), other imports (React/Next/Image/`ui/*`), image paths
  (`hero.webp`, `status-check-phone.webp`, …), facts, dates, amounts, official links.

## Workflow

1. Work in batches of 3 files (see tracker), thinnest first.
2. Branch per batch → commit → push → PR to `main`.
3. After each batch is merged, update the tracker table above in the same or next PR.
4. Output stays valid TSX in the same format as the original file.

## Notes for the agent (next session)

- Repo worktree: use `repo-worktree.sh enter https://github.com/khalil334/kisanstatus.git`.
- GitHub secret name: `github_kisanstatus` (fine-grained PAT, contents+PR write).
- Verify word counts yourself before/after editing — don't trust stale numbers here.
