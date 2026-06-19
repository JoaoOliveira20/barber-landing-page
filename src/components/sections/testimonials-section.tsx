import type { Testimonial } from "@/config/content";

import { Container } from "@/components/layout/container";
import { testimonials } from "@/config/content";

type RatingStarsProps = Readonly<{
  rating: Testimonial["rating"];
}>;

function RatingStars({ rating }: RatingStarsProps) {
  return (
    <div
      role="img"
      aria-label={`Avaliação: ${rating} de 5 estrelas`}
      className="flex gap-1 text-accent-strong"
    >
      {Array.from({ length: rating }, (_, index) => (
        <svg
          key={index}
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-4 fill-current"
        >
          <path d="m12 2.5 2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.31l-5.8 3.05 1.11-6.46-4.7-4.58 6.49-.94L12 2.5Z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-title"
      className="overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.24em] text-accent-strong uppercase">
              Quem conhece, recomenda
            </p>
            <h2
              id="testimonials-title"
              className="mt-4 max-w-2xl font-display text-3xl leading-tight font-semibold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl"
            >
              Confiança construída em cada atendimento.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-muted lg:text-right">
            Relatos de quem encontrou atendimento pontual, cuidado nos detalhes
            e um resultado que inspira confiança.
          </p>
        </div>

        <ul className="-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 [scrollbar-width:none] sm:-mx-6 sm:mt-10 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {testimonials.map((testimonial, index) => (
            <li
              key={testimonial.name}
              className="min-w-[88%] snap-center sm:min-w-[58%] lg:min-w-0"
            >
              <figure className="flex h-full min-h-72 flex-col border border-white/10 bg-surface p-6 shadow-[0_18px_55px_rgba(0,0,0,0.18)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_65px_rgba(0,0,0,0.28)] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-80 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <RatingStars rating={testimonial.rating} />
                  <span
                    aria-hidden="true"
                    className="font-display text-sm text-accent/70"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <blockquote className="mt-8">
                  <p className="font-display text-lg leading-7 text-foreground sm:text-2xl sm:leading-9">
                    “{testimonial.quote}”
                  </p>
                </blockquote>

                <figcaption className="mt-auto border-t border-white/10 pt-6">
                  <cite className="not-italic">
                    <span className="block text-sm font-bold text-foreground">
                      {testimonial.name}
                    </span>
                    <span className="mt-1 block text-xs text-muted">
                      {testimonial.occupation}
                    </span>
                  </cite>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-center text-xs font-semibold tracking-wide text-subtle uppercase lg:hidden">
          Deslize para ver mais avaliações
        </p>
      </Container>
    </section>
  );
}
