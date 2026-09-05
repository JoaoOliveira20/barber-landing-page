import { DashDivider } from "@/components/ui/dash-divider";

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
      <DashDivider className="mt-3" />
    </div>
  );
}
