// ── Dynamic Search from articles-data.ts ────────────────────────────────────
// ✅ Auto-updates when you add new articles to articles-data.ts
const CATEGORY_EMOJIS: Record<string, string> = {
  'status-check': '📆',
  'ekyc': '🔐',
  'payment': '💸',
  'loan': '💳',
  'registration': '📝',
  'farming': '🌱',
  'correction': '✏️',
};

function fuzzySearch(query: string) {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  return ARTICLES.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.keywords.some((kw) => kw.toLowerCase().includes(q)) ||
      item.category.toLowerCase().includes(q)
  )
    .sort((a, b) => {
      // Exact title match first
      const aExact = a.title.toLowerCase().includes(q) ? 0 : 1;
      const bExact = b.title.toLowerCase().includes(q) ? 0 : 1;
      if (aExact !== bExact) return aExact - bExact;
      // Then by published date (newest first)
      const dateA = new Date(a.publishedTime || 0).getTime();
      const dateB = new Date(b.publishedTime || 0).getTime();
      return dateB - dateA;
    })
    .slice(0, 6)
    .map((a) => ({
      slug: a.slug,
      title: a.title,
      emoji: CATEGORY_EMOJIS[a.category] || '📄',
      category: a.category,
    }));
}