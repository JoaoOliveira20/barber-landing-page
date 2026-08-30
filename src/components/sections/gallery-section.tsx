import Image from "next/image";
import type { GalleryItem } from "@/config/content";

import { Container } from "@/components/layout/container";
import { galleryItems, galleryNote } from "@/config/content";

type GalleryPhotoProps = Readonly<{
  item: GalleryItem;
}>;

function GalleryPhoto({ item }: GalleryPhotoProps) {
  return (
    <Image
      src={item.image.src}
      alt={item.image.alt}
      fill
      sizes="(min-width: 640px) 33vw, 50vw"
      className="object-cover"
    />
  );
}

export function GallerySection() {
  return (
    <section
      id="galeria"
      aria-labelledby="gallery-title"
      className="border-t border-foreground/8 bg-surface py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <h2
          id="gallery-title"
          className="max-w-2xl font-display text-3xl leading-tight text-foreground uppercase sm:text-4xl lg:text-5xl"
        >
          A barbearia
        </h2>

        <p className="mt-3 max-w-xl text-sm text-muted">{galleryNote}</p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {galleryItems.map((item) => (
            <article
              key={item.image.src}
              className="relative isolate aspect-[4/3] overflow-hidden border border-foreground/10"
            >
              <GalleryPhoto item={item} />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
