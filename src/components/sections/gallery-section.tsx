import Image from "next/image";

import { Container } from "@/components/layout/container";
import { galleryIntro, galleryPhotos } from "@/config/content";

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
          {galleryPhotos.map((photo) => (
            <div key={photo.src} className="relative h-64 w-64 shrink-0 overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="256px"
                className="object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>

        <div className="parallax-strip hidden grid-cols-2 gap-4 sm:grid lg:grid-cols-3">
          {galleryPhotos.map((photo) => (
            <div key={photo.src} className="relative h-64 overflow-hidden lg:h-80">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
