'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 text-center space-y-4">
        <h2 className="text-2xl font-black text-gray-900 dark:text-white">
          Kuch Galat Ho Gaya!
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          Maaf karein, is page ko load karne mein kuch samasya aa gayi hai.
          Kripya page ko refresh karein ya kuch der baad dobara koshish karein.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:bg-green-700 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
             Dobara Try Karein
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            🏠 Home Page Par Jaayein
          </Link>
        </div>
      </div>
    </div>
  );
}
