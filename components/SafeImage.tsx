'use client';

import { useState } from 'react';
import Image from 'next/image';

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
