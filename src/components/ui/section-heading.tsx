import { DashDivider } from "@/components/ui/dash-divider";

export function SectionHeading({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const wrapperClasses = ["space-y-1", className].filter(Boolean).join(" ");

  return (
    <div className={wrapperClasses}>
      <h2 className="section-title">{title}</h2>
      <DashDivider />
    </div>
  );
}
