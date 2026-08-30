import { Container } from "@/components/layout/container";
import { testimonials } from "@/config/content";

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-title"
      className="overflow-hidden pt-14 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      <Container>
        <h2
          id="testimonials-title"
          className="max-w-2xl font-display text-3xl leading-tight font-semibold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl"
        >
          O que dizem
        </h2>

        <ul className="-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 [scrollbar-width:none] sm:-mx-6 sm:mt-10 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.name}
              className="min-w-[88%] snap-center sm:min-w-[58%] lg:min-w-0"
            >
              <figure className="flex h-full min-h-72 flex-col border border-white/10 bg-surface p-6 shadow-[0_18px_55px_rgba(0,0,0,0.18)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_65px_rgba(0,0,0,0.28)] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-80 sm:p-8">
                <blockquote>
                  <p className="font-display text-lg leading-7 text-foreground sm:text-2xl sm:leading-9">
                    “{testimonial.quote}”
                  </p>
                </blockquote>

                <figcaption className="mt-auto border-t border-white/10 pt-6">
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
          ))}
        </ul>

        <p className="mt-4 text-center text-xs font-semibold tracking-wide text-subtle uppercase lg:hidden">
          Deslize para ver mais avaliações
        </p>
      </Container>
    </section>
  );
}
