export function SvgLandSeeding({ caption }: { caption: string }) {
  return (
    <figure className="my-6 rounded-2xl overflow-hidden border border-amber-100 bg-amber-50" role="img" aria-label={caption}>
      <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-44">
        <rect width="800" height="200" fill="#fffbeb"/>
        <rect x="50" y="40" width="150" height="120" rx="12" fill="#fff" stroke="#fcd34d" strokeWidth="2"/>
        <text x="125" y="90" textAnchor="middle" fill="#d97706" fontSize="22">📋</text>
        <text x="125" y="120" textAnchor="middle" fill="#92400e" fontSize="10">Khasra Records</text>
        <text x="245" y="105" textAnchor="middle" fill="#d97706" fontSize="20">→</text>
        <rect x="290" y="40" width="170" height="120" rx="12" fill="#fff" stroke="#fcd34d" strokeWidth="2"/>
        <text x="375" y="90" textAnchor="middle" fill="#d97706" fontSize="22">🏛️</text>
        <text x="375" y="120" textAnchor="middle" fill="#92400e" fontSize="10">Agriculture Office</text>
        <text x="510" y="105" textAnchor="middle" fill="#d97706" fontSize="20">→</text>
        <rect x="550" y="40" width="200" height="120" rx="12" fill="#fff" stroke="#86efac" strokeWidth="2"/>
        <text x="650" y="90" textAnchor="middle" fill="#16a34a" fontSize="22">✅</text>
        <text x="650" y="115" textAnchor="middle" fill="#15803d" fontSize="10" fontWeight="bold">Land Seeding: Yes</text>
      </svg>
      <figcaption className="text-center text-xs text-gray-500 py-2 bg-white border-t border-amber-100">{caption}</figcaption>
    </figure>
  );
}