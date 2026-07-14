import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 text-5xl mb-2" aria-hidden="true">
          🌾
        </div>
        
        <div className="space-y-3">
          <h1 className="text-4xl font-black text-[var(--color-text)]">
            404 - Page Nahi Mila
          </h1>
          <p className="text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed">
            Kshama karein, aap jis page ko dhoondh rahe hain, woh shayad move ho gaya hai ya ab exist nahi karta. 
            Kripya homepage par wapas jaayein ya hamare verified guides explore karein.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:bg-green-700 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            🏠 Homepage Par Jaayein
          </Link>
          <Link
            href="/articles"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text)] font-bold rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            📚 Sabhi Guides Dekhein
          </Link>
        </div>
      </div>
    </div>
  );
}