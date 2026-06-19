import Image from "next/image";
import type { GalleryItem } from "@/config/content";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { galleryItems } from "@/config/content";

type GalleryArtworkProps = Readonly<{
  visual: GalleryItem["visual"];
}>;

function GalleryArtwork({ visual }: GalleryArtworkProps) {
  const artwork = {
    cut: (
      <>
        <div className="absolute top-[18%] left-[18%] h-[68%] w-px rotate-[24deg] bg-accent/50" />
        <div className="absolute top-[12%] left-[48%] h-[76%] w-px -rotate-[18deg] bg-white/15" />
        <div className="absolute right-[10%] bottom-[8%] size-48 rounded-full border border-accent/20 sm:size-64" />
      </>
    ),
    beard: (
      <>
        <div className="absolute top-1/2 left-1/2 size-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/25" />
        <div className="absolute top-1/2 left-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/12" />
        <div className="absolute right-[15%] bottom-[12%] h-24 w-px bg-accent/40" />
      </>
    ),
    space: (
      <>
        <div className="absolute inset-x-[12%] top-[18%] h-px bg-white/12" />
        <div className="absolute inset-x-[18%] top-[34%] h-px bg-white/8" />
        <div className="absolute right-[14%] bottom-[10%] h-[56%] w-[38%] border border-accent/25" />
        <div className="absolute bottom-[14%] left-[12%] size-20 bg-accent/10" />
      </>
    ),
    service: (
      <>
        <div className="absolute top-[12%] left-[18%] h-[76%] w-[42%] -skew-x-12 border-x border-white/10 bg-white/[0.025]" />
        <div className="absolute right-[14%] bottom-[18%] size-28 rounded-full border border-accent/30" />
        <div className="absolute right-[25%] bottom-[5%] h-36 w-px rotate-45 bg-accent/35" />
      </>
    ),
    finish: (
      <>
        <div className="absolute top-1/2 left-[8%] h-px w-[84%] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <div className="absolute top-[20%] left-1/2 h-[60%] w-px bg-white/10" />
        <div className="absolute top-1/2 left-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-accent/20" />
      </>
    ),
  } satisfies Record<GalleryItem["visual"], ReactNode>;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(200,148,63,0.17),transparent_45%),linear-gradient(145deg,#1d1b17,#0d0c0a)]"
    >
      {artwork[visual]}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,9,8,0.94),transparent_65%)]" />
    </div>
  );
}

type GalleryMediaProps = Readonly<{
  item: GalleryItem;
}>;

function GalleryMedia({ item }: GalleryMediaProps) {
  if (!item.image) {
    return <GalleryArtwork visual={item.visual} />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
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
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,9,8,0.94),rgba(9,9,8,0.12)_75%)]" />
    </div>
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
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.24em] text-accent-strong uppercase">
              Galeria
            </p>
            <h2
              id="gallery-title"
              className="mt-4 max-w-2xl font-display text-3xl leading-tight font-semibold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl"
            >
              O cuidado aparece em cada detalhe.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-muted lg:text-right">
            Uma prévia visual dos cortes, do ambiente e do atendimento que
            definem a experiência Prime Barber.
          </p>
        </div>

        <div className="mt-8 grid auto-rows-[17rem] gap-4 sm:mt-10 sm:grid-cols-2 sm:auto-rows-[20rem] lg:grid-cols-12 lg:auto-rows-[16rem] xl:auto-rows-[18rem]">
          {galleryItems.map((item, index) => (
            <article
              key={item.title}
              className={`group relative isolate overflow-hidden border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.24)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_70px_rgba(0,0,0,0.34)] motion-reduce:transform-none motion-reduce:transition-none ${layoutClasses[item.layout]}`}
            >
              <GalleryMedia item={item} />

              <div className="absolute inset-0 bg-accent/0 transition-colors duration-300 group-hover:bg-accent/[0.035]" />

              <span
                aria-hidden="true"
                className="absolute top-5 right-5 font-display text-sm text-foreground/45"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative flex h-full flex-col justify-end p-5 sm:p-7">
                <p className="text-[0.65rem] font-bold tracking-[0.2em] text-accent-strong uppercase">
                  {item.category}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-foreground sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
