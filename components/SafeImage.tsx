'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * Tiny client island: next/image with an onError fallback source.
 * Keeps the surrounding article a server component (INP fix).
 */
export default function SafeImage({
  fallbackSrc,
  src,
  alt,
  ...rest
}: React.ComponentProps<typeof Image> & { fallbackSrc: string }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  return (
    <Image
      {...rest}
      src={currentSrc}
      alt={alt}
      onError={() => setCurrentSrc(fallbackSrc)}
    />
  );
}
