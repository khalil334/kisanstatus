# Task: Fix rajya-yojana articles (KisanStatus.com)

**Folder:** `components/articles/rajya-yojana/` — 10 article files (`.tsx`).
**Goal:** every article ≥ 2,000 words of useful prose + remove the shared FAQ component.

## Progress tracker

Update this table after every batch. Status: `todo` → `in-progress` → `done (PR #n / commit)`.

| # | Batch | File | Words (verified 2026-08-10) | Status |
|---|-------|------|------------------------------|--------|
| 1 | 1 | KrishakUnnatiYojanaStatusCheck.tsx | ~1,300 | todo |
| 2 | 1 | StateKisanYojanaHub.tsx | ~1,259 | todo |
| 3 | 1 | PmKisanPatiPatniRule.tsx | ~1,548 | todo |
| 4 | 2 | MpKisanKalyanYojanaKist.tsx | ~1,725 | todo |
| 5 | 2 | RythuBharosaStatusCheck.tsx | ~1,727 | todo |
| 6 | 2 | OdishaCmKisanStatusCheck.tsx | ~1,790 | todo |
| 7 | 3 | NamoShetkariYojanaStatus.tsx | ~1,846 | todo |
| 8 | 3 | AnnadataSukhibhavaStatusCheck.tsx | ~1,987 | todo |
| 9 | 3 | KrishakBandhuStatusCheck.tsx | ~2,103 | todo |
| 10 | 4 | RajasthanKisanSammanNidhi9000.tsx | ~2,388 (length OK) | todo — Fix 2 only |

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
