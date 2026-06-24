/**
 * Logo.tsx — KisanStatus.com
 * Uses real logo image from /public/favicon-64x64.png
 * ✅ FIX: variant prop type explicitly defined to fix TypeScript error
 */
import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
}

export default function Logo({ variant = 'light' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-green-800';
  const subColor  = variant === 'light' ? 'text-green-200' : 'text-green-600';

  return (
    <div className="flex items-center gap-2.5 no-underline group">
      <div className="relative w-10 h-10 shrink-0 group-hover:scale-105 transition-transform">
        <Image
          src="/favicon-64x64.png"
          alt="KisanStatus.com logo — wheat and leaf"
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
          priority
        />
      </div>
      <div>
        <p className={`font-black text-base leading-none tracking-tight ${textColor}`}>
          KisanStatus<span className="text-green-400">.com</span>
        </p>
        <p className={`text-[10px] font-medium leading-none mt-0.5 ${subColor}`}>
          Sabhi Kisanon Ke Liye
        </p>
      </div>
    </div>
  );
}
