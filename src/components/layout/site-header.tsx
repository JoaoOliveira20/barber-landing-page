import { Container } from "@/components/layout/container";
import {
  navigationLinks,
  siteConfig,
  whatsappUrl,
} from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-9 z-40 mt-9 border-b border-foreground/10 bg-background/85 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-3 sm:h-18 sm:gap-4">
        <a
          href="#inicio"
          className="group inline-flex shrink-0 items-center gap-3"
          aria-label={`${siteConfig.name} — início`}
        >
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center border border-accent/60 text-sm font-bold text-accent-strong uppercase transition-colors group-hover:border-accent-strong"
          >
            {siteConfig.initials}
          </span>
          <span className="hidden text-lg font-bold tracking-wide text-foreground uppercase sm:inline sm:text-xl">
            {siteConfig.name}
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 xl:flex"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="whatsapp-cta inline-flex min-h-10 shrink-0 items-center justify-center whitespace-nowrap bg-accent px-3 text-xs font-bold text-accent-foreground hover:bg-accent-strong sm:px-5 sm:text-sm"
          aria-label={`Chamar a ${siteConfig.name} no WhatsApp`}
        >
          <span className="sm:hidden">WhatsApp</span>
          <span className="hidden sm:inline">Chamar no WhatsApp</span>
        </a>
      </Container>
    </header>
  );
}
