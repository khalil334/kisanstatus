import Image from 'next/image';

export type FigProps = {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

/**
 * Shared article figure block (image + caption).
 * `src` must be the full public path. Article files that used a local
 * IMG_BASE bind it via a one-line wrapper:
 *   const Fig = (p: FigProps) => <UIFig {...p} src={`${IMG_BASE}/${p.src}`} height={p.height ?? 675} />;
 */
export default function Fig({
  src,
  alt,
  caption,
  width = 1200,
  height = 675,
  priority = false,
}: FigProps) {
  return (
    <figure className="my-8 not-prose rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-cover"
        sizes="(max-width: 768px) 100vw, 768px"
        priority={priority}
      />
      <figcaption className="text-center text-xs text-gray-600 dark:text-gray-400 py-2 px-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        {caption}
      </figcaption>
    </figure>
  );
}
