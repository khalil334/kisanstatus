import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        <div className="text-8xl mb-4" aria-hidden="true">🌾</div>
        <h1 className="text-4xl font-black text-[var(--color-text)] mb-2">
          Page Nahi Mili
        </h1>
        <p className="text-6xl font-black text-[var(--color-primary)] opacity-20 mb-4">
          404
        </p>
        <p className="text-[var(--color-text-muted)] mb-8">
          Ye page exist nahi karta ya move ho gaya hai.
        </p>
        <Link
          href="/"
          className="btn-primary"
        >
          Homepage Par Jaayein
        </Link>
      </div>
    </div>
  );
}