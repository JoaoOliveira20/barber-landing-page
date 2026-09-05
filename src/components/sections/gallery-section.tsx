import { Container } from "@/components/layout/container";
import { PlaceholderPhoto } from "@/components/ui/placeholder-photo";
import { galleryIntro, galleryPlaceholderCount } from "@/config/content";

const tiles = Array.from({ length: galleryPlaceholderCount });

export function GallerySection() {
  return (
    <section id="galeria" className="section border-b-[3px] border-papel bg-tinta text-papel">
      <Container>
        <div className="mb-8 flex flex-col justify-between gap-2 border-b-2 border-papel pb-2 sm:flex-row sm:items-end">
          <h2 className="font-display text-headline-lg uppercase text-papel">
            {galleryIntro.title}
          </h2>
        </div>

        <div className="parallax-strip flex gap-4 overflow-x-auto sm:hidden">
          {tiles.map((_, index) => (
            <div key={index} className="h-64 w-64 shrink-0 overflow-hidden">
              <PlaceholderPhoto className="h-full w-full transition-transform duration-300 hover:scale-[1.02]" />
            </div>
          ))}
        </div>

        <div className="parallax-strip hidden grid-cols-2 gap-4 sm:grid lg:grid-cols-3">
          {tiles.map((_, index) => (
            <div
              key={index}
              className={`h-64 overflow-hidden lg:h-80 ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              <PlaceholderPhoto className="h-full w-full transition-transform duration-300 hover:scale-[1.02]" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
