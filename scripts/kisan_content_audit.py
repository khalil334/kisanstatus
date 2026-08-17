#!/usr/bin/env python3
"""Content-quality audit for kisanstatus article components (Next.js/TSX).

Detects: thin content, AI-uniform phrasing, duplicate/identical structure,
repetitive keywords (stuffing), boilerplate intros/FAQ clones.
Outputs JSON to stdout; consumed by the report writer.
"""
import json, os, re, sys, hashlib
from collections import Counter, defaultdict

ROOT = sys.argv[1]
ART_DIR = os.path.join(ROOT, "components", "articles")

# ---------- text extraction ----------
STR_RE = re.compile(r"""(?<![\w$])(['"])((?:\\.|(?!\1)[^\\\n])*)\1""")
TMPL_RE = re.compile(r"`((?:\\.|[^`\\])*)`", re.S)
JSXTEXT_RE = re.compile(r">([^<>{}]{3,})<")

CODEY = re.compile(
    r"^(?:@/|\./|\.\./|https?://|/[a-z0-9\-/\[\]._]*$|#|[a-z-]+:[a-z0-9]|"
    r"(?:[\w-]+\s+)*(?:flex|grid|text-|bg-|mb-|mt-|px-|py-|p-|m-|w-|h-|border|rounded|font-|leading-|gap-|max-|min-|hover:|md:|lg:|sm:|focus:|space-|items-|justify-|shadow|overflow|absolute|relative|sticky|block|inline|hidden|truncate|tracking-|uppercase|whitespace|col-|row-|z-|top-|left-|right-|bottom-|opacity-|ring-|divide-|order-|aspect-|object-|cursor-|transition|duration-|animate-|list-|underline|decoration-|align-|table-|fill-|stroke-|container-|prose))"
)
WORDY = re.compile(r"[A-Za-z\u0900-\u097F]{2,}")

def looks_like_prose(s):
    s = s.strip()
    if len(s) < 12:
        return False
    if CODEY.match(s):
        return False
    if s.count("-") > 3 and " " not in s:
        return False
    words = WORDY.findall(s)
    if len(words) < 3:
        return False
    # class-name soup: many hyphens/colons relative to spaces
    if (s.count(":") + s.count("-")) > len(words):
        return False
    if re.fullmatch(r"[A-Za-z0-9_./\-\[\]]+", s):
        return False
    return True

def extract_text(src):
    body = re.sub(r"^import[^\n]*\n", "", src, flags=re.M)
    chunks = []
    for m in STR_RE.finditer(body):
        s = m.group(2)
        if looks_like_prose(s):
            chunks.append(s)
    for m in TMPL_RE.finditer(body):
        s = re.sub(r"\$\{[^}]*\}", " ", m.group(1))
        if looks_like_prose(s):
            chunks.append(s)
    for m in JSXTEXT_RE.finditer(body):
        s = re.sub(r"\s+", " ", m.group(1))
        if looks_like_prose(s):
            chunks.append(s)
    # dedupe preserving order
    seen, out = set(), []
    for c in chunks:
        k = c.strip().lower()
        if k not in seen:
            seen.add(k)
            out.append(c.strip())
    return out

# ---------- structure signature ----------
def structure_sig(src):
    comps = re.findall(r"<([A-Z][A-Za-z0-9]*)", src)
    hs = re.findall(r"<(h[1-6])\b", src)
    seq = comps + hs
    # collapse consecutive repeats to capture shape not volume
    coll = []
    for c in seq:
        if not coll or coll[-1] != c:
            coll.append(c)
    return coll

def jaccard(a, b):
    sa, sb = set(a), set(b)
    if not sa or not sb:
        return 0.0
    return len(sa & sb) / len(sa | sb)

def ngrams(seq, n=4):
    return set(tuple(seq[i:i+n]) for i in range(max(0, len(seq)-n+1)))

# ---------- AI-uniform phrase markers ----------
AI_PHRASES = [
    "in this article", "in this guide", "is article mein", "is guide mein",
    "let's dive", "it is important to note", "yeh dhyan rakhein ki",
    "in conclusion", "to sum up", "ant mein", "conclusion", "final thoughts",
    "step-by-step", "step by step", "as we all know", "jaisa ki hum sab jante hain",
    "ek nazar mein", "chaliye jante hain", "aaiye jante hain", "chaliye samajhte hain",
    "sabse pehle", "sabse pehli baat", "puri jankari", "complete jankari",
    "detail mein samjhenge", "vistar se", "yahan hum", "is post mein",
    "note karein", "dhyan dein", "yaad rakhein", "bilkul free",
    "aasan bhasha mein", "simple bhasha mein", "kaafi log puchte hain",
    "log aksar puchte hain", "sawal aata hai",
]

BOILER_MIN = 40  # chars

def main():
    files = []
    for dp, _, fn in os.walk(ART_DIR):
        for f in fn:
            if f.endswith(".tsx"):
                files.append(os.path.join(dp, f))
    files.sort()

    arts = []
    for path in files:
        src = open(path, encoding="utf-8").read()
        rel = os.path.relpath(path, ROOT)
        chunks = extract_text(src)
        text = " ".join(chunks)
        words = WORDY.findall(text)
        wc = len(words)
        low = text.lower()

        ai_hits = sorted({p for p in AI_PHRASES if p in low})

        # keyword repetition
        stop = set("""aur ka ke ki ko se ka hai hain ho hoga hogi mein me par ye yeh wo woh
        kya kaise kyun jo bhi nahi na to toh ek do teen agar tab tak liye lie apna apne apni
        kar karein karna karte kiya jata jati jate raha rahi rahe hota hoti hote sakta sakte sakti
        the and for you your with this that from will can are was not but all any how what when
        which who why has have had our their they them there here more most also than then very
        into out about after before during only over under again such other some each own same
        both few between because while where both""".split())
        toks = [w.lower() for w in words if len(w) > 2 and w.lower() not in stop]
        cnt = Counter(toks)
        top = cnt.most_common(8)
        density = [(w, c, round(100.0 * c / max(wc, 1), 2)) for w, c in top]

        # bigram/trigram stuffing
        bg = Counter(" ".join(toks[i:i+2]) for i in range(len(toks)-1))
        tg = Counter(" ".join(toks[i:i+3]) for i in range(len(toks)-2))
        rep_phr = [(p, c) for p, c in (bg + tg).most_common(6) if c >= 6]

        arts.append({
            "file": rel,
            "name": os.path.splitext(os.path.basename(path))[0],
            "bytes": len(src),
            "words": wc,
            "chunks": chunks,
            "sig": structure_sig(src),
            "ai_phrases": ai_hits,
            "top_keywords": density,
            "repeated_phrases": rep_phr,
            "has_faq": bool(re.search(r"FAQ|faqs?_data|FAQBlock", src, re.I)),
            "faq_count": len(re.findall(r"\bq:\s*['\"]", src, re.I)),
            "h2_count": len(re.findall(r"<h2\b", src)) + len(re.findall(r"<SH\b", src)),
            "internal_links": len(re.findall(r"<Link\b", src)),
            "tables": len(re.findall(r"<table\b", src)),
            "images": len(re.findall(r"<Image\b", src)),
        })

    # ---------- cross-article duplicate paragraphs ----------
    chunk_owners = defaultdict(set)
    for a in arts:
        for c in a["chunks"]:
            if len(c) >= BOILER_MIN:
                chunk_owners[c.lower()].add(a["name"])
    dup_chunks = {c: sorted(o) for c, o in chunk_owners.items() if len(o) >= 3}
    for a in arts:
        shared = [c for c in a["chunks"] if len(c) >= BOILER_MIN and c.lower() in dup_chunks]
        a["dup_chunk_count"] = len(shared)
        a["dup_ratio"] = round(len(shared) / max(len([c for c in a["chunks"] if len(c) >= BOILER_MIN]), 1), 3)
        a["dup_examples"] = shared[:3]

    # ---------- structure clusters ----------
    pairs = []
    for i in range(len(arts)):
        for j in range(i+1, len(arts)):
            gi, gj = ngrams(arts[i]["sig"]), ngrams(arts[j]["sig"])
            if not gi or not gj:
                continue
            sim = len(gi & gj) / len(gi | gj)
            if sim >= 0.75:
                pairs.append((arts[i]["name"], arts[j]["name"], round(sim, 3)))

    # union-find clusters
    parent = {}
    def find(x):
        parent.setdefault(x, x)
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(a, b):
        ra, rb = find(a), find(b)
        if ra != rb:
            parent[ra] = rb
    for a, b, _ in pairs:
        union(a, b)
    clusters = defaultdict(list)
    for n in parent:
        clusters[find(n)].append(n)
    struct_clusters = sorted([sorted(v) for v in clusters.values() if len(v) >= 3],
                             key=len, reverse=True)

    json.dump({
        "articles": arts,
        "structure_pairs": sorted(pairs, key=lambda p: -p[2])[:80],
        "structure_clusters": struct_clusters,
        "duplicate_boilerplate": sorted(
            [{"text": c, "articles": o, "count": len(o)} for c, o in dup_chunks.items()],
            key=lambda d: -d["count"])[:60],
    }, sys.stdout)

main()
