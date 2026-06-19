import type { DifferentialIcon } from "@/config/content";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { differentials } from "@/config/content";

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
    expertise: (
      <>
        <path d="m6 4 12 16M18 4 6 20" />
        <circle cx="6" cy="4" r="2" />
        <circle cx="18" cy="4" r="2" />
      </>
    ),
    comfort: (
      <>
        <path d="M5 12V8a3 3 0 0 1 6 0v4M13 12V8a3 3 0 0 1 6 0v4" />
        <path d="M4 12h16v7H4zM7 19v2M17 19v2" />
      </>
    ),
    drink: (
      <>
        <path d="M6 5h10v8a5 5 0 0 1-10 0V5Z" />
        <path d="M16 8h2a3 3 0 0 1 0 6h-2M8 2v1M12 2v1" />
        <path d="M5 21h12" />
      </>
    ),
    products: (
      <>
        <path d="M9 3h6v4H9zM8 7h8l2 4v10H6V11l2-4Z" />
        <path d="M9 14h6M12 11v6" />
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

export function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="differentials-title"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 -z-10 size-[32rem] translate-x-1/2 rounded-full bg-accent/5 blur-3xl"
      />

      <Container className="grid gap-10 sm:gap-12 xl:grid-cols-[0.72fr_1.28fr] xl:gap-16">
        <div className="xl:pt-4">
          <p className="text-xs font-bold tracking-[0.24em] text-accent-strong uppercase">
            Por que nos escolher?
          </p>
          <h2
            id="differentials-title"
            className="mt-4 max-w-lg font-display text-3xl leading-tight font-semibold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl"
          >
            Uma pausa na rotina feita do seu jeito.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted">
            Da recepção ao acabamento, cada escolha foi pensada para oferecer
            conveniência, conforto e um atendimento genuinamente cuidadoso.
          </p>

          <div
            aria-hidden="true"
            className="mt-10 hidden h-px w-28 bg-gradient-to-r from-accent to-transparent xl:block"
          />
        </div>

        <ul className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
          {differentials.map((differential) => (
            <li
              key={differential.title}
              className="group bg-background p-6 transition-[background-color,box-shadow] duration-300 hover:bg-surface hover:shadow-[inset_0_1px_0_rgba(224,180,93,0.22)] motion-reduce:transition-none sm:p-7"
            >
              <div className="grid size-12 place-items-center border border-accent/30 text-accent-strong transition-colors group-hover:border-accent">
                <FeatureIcon name={differential.icon} />
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                {differential.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                {differential.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
