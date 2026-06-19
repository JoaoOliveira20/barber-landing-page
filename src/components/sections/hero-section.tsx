import { Container } from "@/components/layout/container";
import { address, siteConfig, whatsappUrl } from "@/config/site";

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

      <Container className="grid items-center gap-10 py-12 sm:gap-14 sm:py-16 lg:py-20 xl:min-h-[calc(100dvh-4.5rem)] xl:grid-cols-[1.08fr_0.92fr] xl:gap-16">
        <div className="max-w-3xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.24em] text-accent-strong uppercase sm:text-sm">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Barbearia premium em {address.city}
          </p>

          <h1
            id="hero-title"
            className="font-display text-[clamp(2.625rem,6.5vw,6.75rem)] leading-[0.94] font-semibold tracking-[-0.045em] text-foreground sm:leading-[0.92]"
          >
            Mais que um corte.
            <span className="mt-2 block text-accent-strong">
              Uma presença que se nota.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Na {siteConfig.name}, cada detalhe é pensado para você desacelerar,
            renovar o visual e sair com a confiança de quem está na sua melhor
            versão.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-cta inline-flex min-h-13 items-center justify-center gap-3 whitespace-nowrap bg-accent px-5 text-sm font-bold text-accent-foreground shadow-[0_14px_40px_rgba(200,148,63,0.18)] hover:bg-accent-strong sm:px-6"
              aria-label="Chamar a Prime Barber no WhatsApp"
            >
              Chamar no WhatsApp
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#servicos"
              className="inline-flex min-h-13 items-center justify-center gap-3 whitespace-nowrap border border-white/15 bg-white/5 px-5 text-sm font-bold text-foreground transition-colors hover:border-accent/60 hover:bg-white/8 sm:px-6"
            >
              Ver serviços
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <ul
            aria-label="Informações rápidas"
            className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs font-semibold tracking-wide text-muted uppercase sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:pt-6"
          >
            <li>Atendimento com hora marcada</li>
            <li className="sm:before:mr-6 sm:before:text-accent sm:before:content-['•']">
              Terça a domingo
            </li>
            <li className="sm:before:mr-6 sm:before:text-accent sm:before:content-['•']">
              {address.neighborhood}
            </li>
          </ul>
        </div>

        <aside
          aria-label="Experiência Prime Barber"
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="relative overflow-hidden border border-white/12 bg-surface shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_35%,rgba(200,148,63,0.09))]"
            />
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-16 size-64 rounded-full border border-accent/20"
            />
            <div
              aria-hidden="true"
              className="absolute -top-8 -right-8 size-48 rounded-full border border-accent/25"
            />
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/6"
            />

            <div className="relative flex min-h-[21rem] flex-col justify-between p-6 sm:min-h-[25rem] sm:p-8 lg:min-h-[29rem] lg:p-9">
              <div className="flex items-start justify-between gap-4 text-[0.65rem] font-bold tracking-[0.22em] text-muted uppercase">
                <span>Experiência Prime</span>
                <span>{address.city}</span>
              </div>

              <div className="self-center text-center">
                <div className="mx-auto grid size-40 place-items-center rounded-full border border-accent/35 bg-background/55 shadow-[inset_0_0_50px_rgba(200,148,63,0.08)] sm:size-52 lg:size-56">
                  <div className="grid size-32 place-items-center rounded-full border border-white/10 sm:size-44 lg:size-48">
                    <span className="font-display text-6xl font-semibold tracking-[-0.08em] text-accent-strong sm:text-7xl lg:text-8xl">
                      PB
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-xs font-bold tracking-[0.3em] text-foreground uppercase">
                  Precisão · Estilo · Cuidado
                </p>
              </div>
            </div>

            <div className="relative grid border-t border-white/10 sm:grid-cols-[1.12fr_0.88fr]">
              <div className="grid grid-cols-[auto_1fr] items-center gap-4 p-5 sm:gap-5 sm:p-7">
                <span className="font-display text-4xl text-accent">01</span>
                <p className="text-sm leading-6 text-muted">
                  Seu momento, seu estilo e um atendimento feito sem pressa.
                </p>
              </div>

              <div className="border-t border-accent/20 bg-surface-elevated p-5 sm:border-t-0 sm:border-l sm:p-7">
                <p className="text-xs font-bold tracking-[0.18em] text-accent-strong uppercase">
                  Agendamento fácil
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Escolha seu horário em poucos minutos pelo WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </Container>
    </section>
  );
}
