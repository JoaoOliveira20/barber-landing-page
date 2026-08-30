"use client";

import type { Differential, DifferentialIcon } from "@/config/content";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { differentials } from "@/config/content";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type FeatureIconProps = Readonly<{
  name: DifferentialIcon;
}>;

function FeatureIcon({ name }: FeatureIconProps) {
  const paths: Record<DifferentialIcon, ReactNode> = {
    calendar: (
      <>
        <path d="M7 3v3M17 3v3M4 9h16" />
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="m9 15 2 2 4-5" />
      </>
    ),
    drink: (
      <>
        <path d="M6 5h10v8a5 5 0 0 1-10 0V5Z" />
        <path d="M16 8h2a3 3 0 0 1 0 6h-2M8 2v1M12 2v1" />
        <path d="M5 21h12" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      {paths[name]}
    </svg>
  );
}

type DifferentialCardProps = Readonly<{
  differential: Differential;
  delayMs: number;
}>;

function DifferentialCard({ differential, delayMs }: DifferentialCardProps) {
  const { elementRef, hasBeenRevealed } = useScrollReveal<HTMLLIElement>();

  return (
    <li
      ref={elementRef}
      className={`scroll-reveal bg-background p-6 sm:p-7 ${hasBeenRevealed ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div className="grid size-12 place-items-center border border-accent/30 text-accent-strong">
        <FeatureIcon name={differential.icon} />
      </div>

      <h3 className="mt-6 text-lg font-bold text-foreground uppercase">
        {differential.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">
        {differential.description}
      </p>
    </li>
  );
}

export function DifferentialsSection() {
  const { elementRef, hasBeenRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="diferenciais"
      aria-labelledby="differentials-title"
      className="relative py-16 sm:py-20 lg:py-24"
    >
      <Container className="grid gap-10 sm:gap-12 xl:grid-cols-[0.72fr_1.28fr] xl:gap-16">
        <div
          ref={elementRef}
          className={`scroll-reveal xl:pt-4 ${hasBeenRevealed ? "is-visible" : ""}`}
        >
          <h2
            id="differentials-title"
            className="max-w-lg font-display text-3xl leading-tight text-foreground uppercase sm:text-4xl lg:text-5xl"
          >
            Por que os clientes voltam
          </h2>

          <div
            aria-hidden="true"
            className="mt-10 hidden h-px w-28 bg-gradient-to-r from-accent to-transparent xl:block"
          />
        </div>

        <ul className="grid gap-px overflow-hidden border border-foreground/10 bg-foreground/10 sm:grid-cols-3">
          {differentials.map((differential, index) => (
            <DifferentialCard
              key={differential.title}
              differential={differential}
              delayMs={index * 70}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
