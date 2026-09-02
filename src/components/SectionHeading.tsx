export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-xl">
      <div className="text-sm text-accent font-medium">{eyebrow}</div>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
    </div>
  );
}
