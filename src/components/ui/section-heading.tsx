export function SectionHeading({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const classes = ["section-title", className].filter(Boolean).join(" ");

  return (
    <div>
      <h2 className={classes}>{title}</h2>
      <div className="mt-3 flex items-center gap-2" aria-hidden="true">
        <span className="h-0.5 w-8 bg-current opacity-40" />
        <span className="h-1 w-1 bg-current opacity-40" />
        <span className="h-0.5 w-8 bg-current opacity-40" />
      </div>
    </div>
  );
}
