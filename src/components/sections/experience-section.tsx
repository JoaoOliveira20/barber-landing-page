import { Container } from "@/components/layout/container";
import { experienceContent } from "@/config/content";

export function ExperienceSection() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experience-title"
      className="relative overflow-hidden border-y border-white/10 bg-surface py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(200,148,63,0.13),transparent_28rem)]"
      />

      <Container className="relative">
        <div className="grid gap-10 sm:gap-12 xl:grid-cols-[1.05fr_0.95fr] xl:items-center xl:gap-20">
          <div>
            <p className="text-xs font-bold tracking-[0.24em] text-accent-strong uppercase">
              {experienceContent.eyebrow}
            </p>

            <h2
              id="experience-title"
              className="mt-4 max-w-3xl font-display text-[clamp(2.25rem,6vw,5.75rem)] leading-[1] font-semibold tracking-[-0.045em] text-foreground sm:leading-[0.96]"
            >
              {experienceContent.title}
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {experienceContent.description}
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -top-5 -right-5 hidden h-full w-full border border-accent/20 sm:block"
            />

            <ol className="relative divide-y divide-white/10 border border-white/10 bg-background/80 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-sm">
              {experienceContent.highlights.map((highlight, index) => (
                <li
                  key={highlight.title}
                  className="group grid grid-cols-[auto_1fr] gap-5 p-6 transition-[background-color,box-shadow] duration-300 hover:bg-white/[0.025] hover:shadow-[inset_3px_0_0_rgba(200,148,63,0.45)] motion-reduce:transition-none sm:gap-7 sm:p-8"
                >
                  <span className="font-display text-sm text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="font-display text-xl leading-snug font-semibold text-foreground sm:text-2xl">
                      {highlight.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      {highlight.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3 sm:mt-16 sm:gap-5 lg:mt-18">
          <span
            aria-hidden="true"
            className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          />
          <p className="shrink-0 text-center text-[0.6rem] font-bold tracking-[0.2em] text-subtle uppercase sm:text-[0.65rem] sm:tracking-[0.28em]">
            Precisão · Conforto · Confiança
          </p>
          <span
            aria-hidden="true"
            className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          />
        </div>
      </Container>
    </section>
  );
}
