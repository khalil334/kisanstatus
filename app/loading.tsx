export default function Loading() {
  return (
    <div
      className="min-h-[60vh] flex items-center justify-center px-4"
      role="status"
      aria-label="Page load ho raha hai, kripya intezar karein"
    >
      <div className="loading-spinner mx-auto" aria-hidden="true" />
    </div>
  );
}
