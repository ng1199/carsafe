"use client";

import Image from "next/image";
import { galleryImages } from "@/lib/constants/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

export function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-carbon">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Gallery"
          title="Our work speaks"
          description="A curated selection of vehicles we've had the privilege to protect and perfect."
        />

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 lg:gap-8">
          {galleryImages.map((image, i) => (
            <FadeIn key={image.id} delay={i * 0.06}>
              <div className="group relative mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-white/[0.06] lg:mb-8">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-carbon/0 transition-colors duration-500 group-hover:bg-carbon/20" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
