import { demoWhatsappUrl } from "@/config/site";

export function DemoBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex h-9 items-center justify-center gap-2 overflow-hidden bg-surface-sunken px-3 text-center text-xs text-muted sm:px-4">
      <span className="truncate">Projeto demonstrativo</span>
      <span aria-hidden="true" className="hidden sm:inline">
        ·
      </span>
      <span className="hidden sm:inline">Site feito por João Pedro</span>
      <span aria-hidden="true">·</span>
      <a
        href={demoWhatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="shrink-0 font-bold text-accent-strong underline-offset-2 hover:underline"
      >
        Quero um assim
      </a>
    </div>
  );
}
