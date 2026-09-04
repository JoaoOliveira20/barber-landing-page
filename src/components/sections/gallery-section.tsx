import { Container } from "@/components/layout/container";
import { PlaceholderPhoto } from "@/components/ui/placeholder-photo";
import { galleryIntro, galleryPlaceholderCount } from "@/config/content";

const tiles = Array.from({ length: galleryPlaceholderCount });

export function GallerySection() {
  return (
    <section id="galeria" className="section bg-tinta">
      <Container>
        <h2 className="section-title border-b border-papel/20 pb-4 text-papel">
          {galleryIntro.title}
        </h2>

        <div className="parallax-strip mt-8 flex gap-1 overflow-x-auto sm:hidden">
          {tiles.map((_, index) => (
            <PlaceholderPhoto
              key={index}
              className="aspect-[4/3] w-64 shrink-0"
            />
          ))}
        </div>

        <div className="parallax-strip mt-8 hidden grid-cols-3 gap-1 sm:grid">
          {tiles.map((_, index) => (
            <PlaceholderPhoto
              key={index}
              className={
                index === 0
                  ? "col-span-2 aspect-[5/2]"
                  : index === 1
                    ? "aspect-[5/4]"
                    : "aspect-[3/2]"
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
