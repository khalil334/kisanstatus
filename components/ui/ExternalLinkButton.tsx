import ExternalLinkButtonBase from '@/components/ExternalLinkButton';

/**
 * `components/ui` alias for the shared ExternalLinkButton.
 *
 * Article bodies under `components/articles/rajya-yojana/` import this path and
 * pass the destination as `href`, while the underlying implementation takes
 * `url`. Accept both so either call style works.
 */
export default function ExternalLinkButton({
  href,
  url,
  label,
  className,
}: {
  href?: string;
  url?: string;
  label: string;
  className?: string;
}) {
  const target = href ?? url;
  if (!target) return null;
  return <ExternalLinkButtonBase url={target} label={label} className={className} />;
}
