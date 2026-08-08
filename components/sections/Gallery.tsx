"use client";

import Image from "next/image";
import { galleryImages } from "@/lib/constants/site";
import { FadeIn } from "@/components/motion/FadeIn";

export function Gallery() {
  return (
    <section
      id="work"
      className="bg-[#050505] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8956C] sm:text-xs">
              OUR WORK
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase italic leading-[0.9] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
              BUILT TO
              <br />
              BE SEEN.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:mt-6 sm:text-base">
              A closer look at the cars, finishes and details that inspire
              CARSAFE.
            </p>
          </div>
        </FadeIn>

        {/* GALLERY */}

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-3 lg:gap-8">
          {galleryImages.map((image, i) => (
            <FadeIn key={image.id} delay={i * 0.05}>
              <div className="group relative aspect-square overflow-hidden rounded-xl border border-white/[0.06] bg-[#111] sm:rounded-2xl lg:aspect-[4/3]">

                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 639px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}