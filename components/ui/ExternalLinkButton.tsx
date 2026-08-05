import ExternalLinkButtonBase from '@/components/ExternalLinkButton';

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
