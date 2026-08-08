#	Bug	File	Kya Problem Hai	
1	Maandhan slug page corrupt	`app/maandhan/[slug]/page.tsx`	File repo mein cut off hai — `> = {` se shuru hoti hai, `slug` module level pe use ho raha hai bina define kiye. Deployed site pe chal raha hai, repo mein nahi — mismatch hai	
2	Calculator icons empty	`app/calculator/page.tsx`	Sab icons `return <></>;` kar rahe hain — koi SVG/icon nahi hai. Live `/calculator` pe sirf footer dikh raha hai, cards nahi	
3	TypeScript generics missing	`components/Header.tsx`	`Record` ka type param missing — `Record<string, string>` hona chahiye	
4	TypeScript generics missing	`app/calculator/page.tsx`	`Record` ka type param missing — `Record<GroupKey, GroupStyle>` hona chahiye	
5	`not-found.tsx` missing/broken	`app/not-found.tsx`	GitHub se fetch nahi ho rahi. Live site pe invalid URL pe sirf footer dikh raha hai, 404 UI nahi	
6	Footer spacing	`components/Footer.tsx`	Live site pe `© 2024-2026KisanStatus` — space nahi hai year aur name ke beech	
