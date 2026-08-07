"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const collections = [
  {
    title: "Exterior Care",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
  },
  {
    title: "Interior Care",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
  },
  {
    title: "Glass Care",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&q=80",
  },
  {
    title: "Wheel Care",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1200&q=80",
  },
];

export function PremiumServices() {
  return (
    <section
      id="collections"
      className="bg-[#050505] px-6 py-28 md:px-12 lg:px-20"
    >
      <SectionHeading
        label="COLLECTIONS"
        title="Explore Collections"
        description="Premium automotive care products designed for every part of your vehicle."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {collections.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.1}>
            <div className="group relative h-[450px] overflow-hidden rounded-3xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/35 transition" />

              <div className="absolute bottom-8 left-8">
                <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/70">
                  Collection
                </p>

                <h3 className="text-4xl font-black italic uppercase text-white md:text-5xl">
                  {item.title}
                </h3>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}