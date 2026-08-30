"use client";

import type { Testimonial } from "@/config/content";

import { Container } from "@/components/layout/container";
import { testimonials } from "@/config/content";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type TestimonialCardProps = Readonly<{
  testimonial: Testimonial;
  delayMs: number;
}>;

function TestimonialCard({ testimonial, delayMs }: TestimonialCardProps) {
  const { elementRef, hasBeenRevealed } = useScrollReveal<HTMLElement>();

  return (
    <li className="min-w-[88%] snap-center sm:min-w-[58%] lg:min-w-0">
      <figure
        ref={elementRef}
        className={`scroll-reveal flex flex-col border border-foreground/10 bg-surface p-6 shadow-[0_18px_55px_rgba(0,0,0,0.18)] sm:p-8 ${hasBeenRevealed ? "is-visible" : ""}`}
        style={{ transitionDelay: `${delayMs}ms` }}
      >
        <blockquote>
          <p className="text-lg leading-7 text-foreground italic sm:text-xl sm:leading-8">
            “{testimonial.quote}”
          </p>
        </blockquote>

        <figcaption className="mt-6 border-t border-foreground/10 pt-6">
          <cite className="not-italic">
            <span className="block text-sm font-bold text-foreground">
              {testimonial.name}
            </span>
            {testimonial.attribution ? (
              <span className="mt-1 block text-xs text-muted">
                {testimonial.attribution}
              </span>
            ) : null}
          </cite>
        </figcaption>
      </figure>
    </li>
  );
}

export function TestimonialsSection() {
  const { elementRef, hasBeenRevealed } = useScrollReveal<HTMLHeadingElement>();

  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-title"
      className="overflow-hidden pt-14 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      <Container>
        <h2
          ref={elementRef}
          id="testimonials-title"
          className={`scroll-reveal max-w-2xl font-display text-3xl leading-tight text-foreground uppercase sm:text-4xl lg:text-5xl ${hasBeenRevealed ? "is-visible" : ""}`}
        >
          O que dizem
        </h2>

        <ul className="-mx-4 mt-8 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-4 pb-5 [scrollbar-width:none] sm:-mx-6 sm:mt-10 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              delayMs={index * 80}
            />
          ))}
        </ul>

        <p className="mt-4 text-center text-xs font-semibold tracking-wide text-subtle uppercase lg:hidden">
          Deslize para ver mais avaliações
        </p>
      </Container>
    </section>
  );
}
