/**
 * Logo.tsx — Site branding component with image fallback
 * Responsive sizes, light/dark variants, accessible markup
 */
import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'light', size = 'md' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-green-800';
  const subColor = variant === 'light' ? 'text-green-200' : 'text-green-600';
  
  const sizeClasses = {
    sm: { container: 'gap-2', image: 'w-8 h-8', title: 'text-sm', subtitle: 'text-[9px]' },
    md: { container: 'gap-2.5', image: 'w-10 h-10', title: 'text-base', subtitle: 'text-[10px]' },
    lg: { container: 'gap-3', image: 'w-12 h-12', title: 'text-lg', subtitle: 'text-xs' },
  };

  const sizes = sizeClasses[size];

  return (
    <div 
      className={`flex items-center ${sizes.container} no-underline group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-lg`}
      aria-label="KisanStatus.com - Home"
      role="banner"
    >
      {/* Logo image with emoji fallback on error */}
      <div className="relative shrink-0 group-hover:scale-105 transition-transform duration-200">
        <Image
          src="/favicon-64x64.png"
          alt="KisanStatus.com logo — wheat and leaf symbol representing Indian agriculture"
          width={size === 'sm' ? 32 : size === 'lg' ? 48 : 40}
          height={size === 'sm' ? 32 : size === 'lg' ? 48 : 40}
          className={`${sizes.image} object-contain`}
          priority
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = '<span class="text-3xl">🌾</span>';
            }
          }}
        />
      </div>
      
      {/* Brand text — tagline uses varied keyword */}
      <div className="flex flex-col">
        <p className={`font-black ${sizes.title} leading-none tracking-tight ${textColor}`}>
          KisanStatus<span className="text-green-400">.com</span>
        </p>
        <p className={`${sizes.subtitle} font-medium leading-none mt-0.5 ${subColor}`}>
          Sabhi Cultivators Ke Liye
        </p>
      </div>
    </div>
  );
}