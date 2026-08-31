"use client";

import Image from "next/image";
import type { GalleryItem } from "@/config/content";

import { Container } from "@/components/layout/container";
import { galleryItems, galleryNote } from "@/config/content";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

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
      className="gallery-photo object-cover"
    />
  );
}

type GalleryTileProps = Readonly<{
  item: GalleryItem;
  delayMs: number;
}>;

function GalleryTile({ item, delayMs }: GalleryTileProps) {
  const { elementRef, hasBeenRevealed } = useScrollReveal<HTMLElement>();

  return (
    <article
      ref={elementRef}
      className={`scroll-reveal relative isolate aspect-square grow basis-[280px] overflow-hidden border border-foreground/10 ${hasBeenRevealed ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <GalleryPhoto item={item} />
    </article>
  );
}

export function GallerySection() {
  const { elementRef, hasBeenRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="galeria"
      aria-labelledby="gallery-title"
      className="border-t border-foreground/8 bg-surface py-12 sm:py-16 lg:py-20"
    >
      <Container>
        <div
          ref={elementRef}
          className={`scroll-reveal ${hasBeenRevealed ? "is-visible" : ""}`}
        >
          <h2
            id="gallery-title"
            className="max-w-2xl font-display text-3xl leading-tight text-foreground uppercase sm:text-4xl lg:text-5xl"
          >
            A barbearia
          </h2>

          <p className="mt-3 max-w-xl text-sm text-muted">{galleryNote}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
          {galleryItems.map((item, index) => (
            <GalleryTile
              key={item.image.src}
              item={item}
              delayMs={index * 60}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
