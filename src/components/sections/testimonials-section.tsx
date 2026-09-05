import { Container } from "@/components/layout/container";
import { testimonials } from "@/config/content";

function StarRating() {
  return (
    <div className="select-none font-body text-lg font-bold tracking-widest text-papel" aria-hidden="true">
      ★★★★★
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="border-b-[3px] border-papel bg-tinta py-8 text-papel lg:py-12">
      <Container>
        <h2 className="mb-6 font-display text-headline-md uppercase text-papel">
          Palavra de quem senta na cadeira
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="flex flex-col justify-between py-3">
              <div className="space-y-2">
                <StarRating />
                <p className="font-body text-body-md italic text-papel/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-papel/20 pt-2">
                <span className="font-body text-label-lg uppercase text-papel">
                  {testimonial.name}
                </span>
                <span className="font-body text-label-sm text-papel/60">
                  {testimonial.tenure}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
