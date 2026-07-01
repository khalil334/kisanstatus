'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Kuch Galat Ho Gaya!</h2>
        <p className="text-gray-600 mb-6">
          Sorry, page load hone mein problem aa gayi. Please dobara try karein.
        </p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          Dobara Try Karein
        </button>
      </div>
    </div>
  );
}