export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <div className="loading-spinner mx-auto" aria-hidden="true" />
        <p className="text-sm font-medium text-[var(--color-text-muted)] animate-pulse">
          Kripya thoda intezar karein, page load ho raha hai...
        </p>
      </div>
    </div>
  );
}
