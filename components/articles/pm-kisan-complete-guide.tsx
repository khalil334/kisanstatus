// ❌ Old (problematic in Next.js 15):
onError={(e) => {
  e.currentTarget.src = "...";
}}

// ✅ New (Next.js 15 compatible):
onError={(e) => {
  const target = e.target as HTMLImageElement;
  target.src = "...";
}}