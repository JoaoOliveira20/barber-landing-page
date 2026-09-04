import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/config/content";

function StarRating() {
  return (
    <div className="flex gap-1 text-mostarda" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6L1.3 7.7l6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="section bg-tinta">
      <Container>
        <SectionHeading title="Palavra de quem senta na cadeira" />

        <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name}>
              <StarRating />
              <p className="mt-4 font-body italic text-body text-papel/80">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-baseline justify-between gap-3 border-t border-papel/15 pt-4">
                <p className="font-body text-sm font-bold uppercase tracking-wide text-papel">
                  {testimonial.name}
                </p>
                <p className="whitespace-nowrap font-body text-xs text-papel/50">
                  {testimonial.tenure}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
