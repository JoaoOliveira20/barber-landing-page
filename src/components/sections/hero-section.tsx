import { Container } from "@/components/layout/container";
import { siteConfig, whatsappUrl } from "@/config/site";
import { heroContent } from "@/config/content";

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top,rgba(200,148,63,0.16),transparent_65%)]"
      />

      <Container className="grid items-center gap-10 py-12 sm:gap-14 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          <h1
            id="hero-title"
            className="font-display text-[clamp(2.625rem,6.5vw,6.75rem)] leading-[0.94] font-semibold tracking-[-0.045em] text-foreground sm:leading-[0.92]"
          >
            {heroContent.title}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {heroContent.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-cta inline-flex min-h-13 items-center justify-center gap-3 whitespace-nowrap bg-accent px-5 text-sm font-bold text-accent-foreground shadow-[0_14px_40px_rgba(200,148,63,0.18)] hover:bg-accent-strong sm:px-6"
              aria-label={`Chamar a ${siteConfig.name} no WhatsApp`}
            >
              {heroContent.primaryCtaLabel}
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#servicos"
              className="inline-flex min-h-13 items-center justify-center gap-3 whitespace-nowrap border border-white/15 bg-white/5 px-5 text-sm font-bold text-foreground transition-colors hover:border-accent/60 hover:bg-white/8 sm:px-6"
            >
              {heroContent.secondaryCtaLabel}
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <ul
            aria-label="Informações rápidas"
            className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs font-semibold tracking-wide text-muted uppercase sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:pt-6"
          >
            {heroContent.infoItems.map((item, index) => (
              <li
                key={item}
                className={
                  index === 0
                    ? undefined
                    : "sm:before:mr-6 sm:before:text-accent sm:before:content-['•']"
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
