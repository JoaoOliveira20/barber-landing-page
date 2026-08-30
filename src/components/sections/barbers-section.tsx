import { Container } from "@/components/layout/container";
import { barbers } from "@/config/content";

export function BarbersSection() {
  return (
    <section
      id="barbeiros"
      aria-labelledby="barbers-title"
      className="border-t border-white/8 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <h2
          id="barbers-title"
          className="max-w-2xl font-display text-3xl leading-tight font-semibold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl"
        >
          Quem vai te atender
        </h2>

        <ul className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2">
          {barbers.map((barber) => (
            <li
              key={barber.name}
              className="border border-white/10 bg-surface p-6 sm:p-7"
            >
              <div className="flex items-baseline gap-3">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {barber.name}
                </h3>
                {barber.role ? (
                  <span className="text-xs font-bold tracking-[0.18em] text-accent-strong uppercase">
                    {barber.role}
                  </span>
                ) : null}
              </div>

              <p className="mt-4 text-sm leading-6 text-muted">
                {barber.bio}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
