export function DashDivider({ className }: { className?: string }) {
  const classes = ["flex items-center gap-2", className].filter(Boolean).join(" ");

  return (
    <div className={classes} aria-hidden="true">
      <span className="h-0.5 w-8 bg-current opacity-40" />
      <span className="h-1 w-1 bg-current opacity-40" />
      <span className="h-0.5 w-8 bg-current opacity-40" />
    </div>
  );
}
