import Image from "next/image";
import type { GalleryItem } from "@/config/content";

import { Container } from "@/components/layout/container";
import { galleryItems } from "@/config/content";

type GalleryPhotoProps = Readonly<{
  item: GalleryItem;
}>;

function GalleryPhoto({ item }: GalleryPhotoProps) {
  return (
    <Image
      src={item.image.src}
      alt={item.image.alt}
      fill
      sizes={
        item.layout === "standard"
          ? "(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw"
          : "(min-width: 1024px) 58vw, (min-width: 640px) 100vw, 100vw"
      }
      style={{ objectPosition: item.image.objectPosition ?? "center" }}
      className="object-cover transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
    />
  );
}

const layoutClasses = {
  featured: "sm:col-span-2 lg:col-span-7 lg:row-span-2",
  standard: "lg:col-span-5",
  wide: "lg:col-span-7",
} satisfies Record<GalleryItem["layout"], string>;

export function GallerySection() {
  return (
    <section
      id="galeria"
      aria-labelledby="gallery-title"
      className="border-t border-white/8 bg-surface py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <h2
          id="gallery-title"
          className="max-w-2xl font-display text-3xl leading-tight font-semibold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl"
        >
          A barbearia
        </h2>

        <div className="mt-8 grid auto-rows-[17rem] gap-4 sm:mt-10 sm:grid-cols-2 sm:auto-rows-[20rem] lg:grid-cols-12 lg:auto-rows-[16rem] xl:auto-rows-[18rem]">
          {galleryItems.map((item) => (
            <article
              key={item.image.src}
              className={`group relative isolate overflow-hidden border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.24)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_70px_rgba(0,0,0,0.34)] motion-reduce:transform-none motion-reduce:transition-none ${layoutClasses[item.layout]}`}
            >
              <GalleryPhoto item={item} />

              <div className="absolute inset-0 bg-accent/0 transition-colors duration-300 group-hover:bg-accent/[0.035]" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
