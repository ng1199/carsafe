"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";

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
      className="bg-[#050505] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADING */}

        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8956C] sm:text-xs">
              CARSAFE COLLECTIONS
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase italic leading-[0.9] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
              CARE FOR
              <br />
              EVERY SURFACE.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:mt-6 sm:text-base">
              Purpose-built care for every part of your vehicle.
            </p>
          </div>
        </FadeIn>

        {/* COLLECTION GRID */}

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 md:grid-cols-2 md:gap-8">

          {collections.map((item, index) => (
            <FadeIn
              key={item.title}
              delay={index * 0.08}
            >
              <div
                className="
                  group
                  relative
                  aspect-square
                  overflow-hidden
                  rounded-2xl
                  bg-[#111]
                  sm:rounded-3xl
                  md:aspect-[4/3]
                "
              >

                {/* IMAGE */}

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 639px) 50vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}

                <div className="absolute inset-0 bg-black/45 transition duration-500 group-hover:bg-black/30" />

                {/* CONTENT */}

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8">

                  <p className="mb-1 text-[8px] uppercase tracking-[0.25em] text-white/60 sm:mb-2 sm:text-[10px] sm:tracking-[0.3em]">
                    Collection
                  </p>

                  <h3 className="text-lg font-black uppercase italic leading-[0.95] text-white sm:text-2xl md:text-4xl">
                    {item.title}
                  </h3>

                </div>

              </div>
            </FadeIn>
          ))}

        </div>

      </div>
    </section>
  );
}