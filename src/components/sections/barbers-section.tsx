"use client";

import type { Barber } from "@/config/content";

import { Container } from "@/components/layout/container";
import { barbers } from "@/config/content";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type BarberCardProps = Readonly<{
  barber: Barber;
  delayMs: number;
}>;

function BarberCard({ barber, delayMs }: BarberCardProps) {
  const { elementRef, hasBeenRevealed } = useScrollReveal<HTMLLIElement>();

  return (
    <li
      ref={elementRef}
      className={`scroll-reveal border border-foreground/10 bg-surface p-6 sm:p-7 ${hasBeenRevealed ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div className="flex items-baseline gap-3">
        <h3 className="text-2xl font-bold text-foreground uppercase">
          {barber.name}
        </h3>
        {barber.role ? (
          <span className="bg-background px-2 py-0.5 text-xs font-bold tracking-[0.18em] text-accent-strong uppercase">
            {barber.role}
          </span>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-muted">{barber.bio}</p>
    </li>
  );
}

export function BarbersSection() {
  const { elementRef, hasBeenRevealed } = useScrollReveal<HTMLHeadingElement>();

  return (
    <section
      id="barbeiros"
      aria-labelledby="barbers-title"
      className="border-t border-foreground/8 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <h2
          ref={elementRef}
          id="barbers-title"
          className={`scroll-reveal max-w-2xl font-display text-3xl leading-tight text-foreground uppercase sm:text-4xl lg:text-5xl ${hasBeenRevealed ? "is-visible" : ""}`}
        >
          Quem vai te atender
        </h2>

        <ul className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2">
          {barbers.map((barber, index) => (
            <BarberCard
              key={barber.name}
              barber={barber}
              delayMs={index * 80}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
