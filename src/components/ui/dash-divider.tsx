export function DashDivider({ className }: { className?: string }) {
  const classes = ["flex items-center gap-2", className].filter(Boolean).join(" ");

  return (
    <div className={classes} aria-hidden="true">
      <span className="h-[2px] w-12 bg-current" />
      <span className="h-[3px] w-3 bg-current" />
      <span className="h-[2px] w-12 bg-current" />
    </div>
  );
}
