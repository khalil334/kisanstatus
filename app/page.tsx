function HomeLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton - same aspect ratio */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] bg-gradient-to-r from-green-800 to-green-600">
        <div className="container-site h-full flex items-center">
          <div className="max-w-2xl">
            <div className="h-12 bg-white/20 rounded w-3/4 mb-4 animate-pulse" />
            <div className="h-6 bg-white/20 rounded w-full mb-2 animate-pulse" />
            <div className="h-6 bg-white/20 rounded w-5/6 mb-6 animate-pulse" />
            <div className="h-12 bg-white/30 rounded w-48 animate-pulse" />
          </div>
        </div>
      </div>
      {/* Rest same */}
    </div>
  );
}