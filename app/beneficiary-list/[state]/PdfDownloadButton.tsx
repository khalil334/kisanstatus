'use client';

export default function PdfDownloadButton({ stateName }: { stateName: string }) {
  return (
    <button
      onClick={() => window.print()}
      className="w-full my-6 bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
    >
      <span className="text-2xl">📥</span>
      <div className="text-left">
        <p className="text-sm font-bold">{stateName} PM Kisan List PDF Download</p>
        <p className="text-xs opacity-90">Is page ko PDF mein save karo</p>
      </div>
    </button>
  );
}