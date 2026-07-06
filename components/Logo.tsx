'use client';

import Image from 'next/image';
import { useState } from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'light', size = 'md' }: LogoProps) {
  const [imageError, setImageError] = useState(false);

  const textColor = variant === 'light' ? 'text-white' : 'text-green-800';
  const subColor = variant === 'light' ? 'text-green-200' : 'text-green-600';

  const sizeClasses = {
    sm: { container: 'gap-2', image: 'w-8 h-8', title: 'text-sm', subtitle: 'text-[9px]', imgSize: 32 },
    md: { container: 'gap-2.5', image: 'w-10 h-10', title: 'text-base', subtitle: 'text-[10px]', imgSize: 40 },
    lg: { container: 'gap-3', image: 'w-12 h-12', title: 'text-lg', subtitle: 'text-xs', imgSize: 48 },
  };

  const sizes = sizeClasses[size];

  return (
    <div
      className={`flex items-center ${sizes.container} no-underline group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-lg`}
      aria-label="KisanStatus.com - Home"
    >
      <div className="relative shrink-0 group-hover:scale-105 transition-transform duration-200">
        {imageError ? (
          <span className="text-3xl" role="img" aria-label="KisanStatus logo">🌾</span>
        ) : (
          <Image
            src="/favicon-64x64.png"
            alt="KisanStatus.com logo"
            width={sizes.imgSize}
            height={sizes.imgSize}
            priority
            className={`${sizes.image} object-contain`}
            onError={() => setImageError(true)}
          />
        )}
      </div>

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
