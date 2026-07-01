import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-8xl mb-4">🌾</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Nahi Mili</h2>
        <p className="text-gray-600 mb-8">
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