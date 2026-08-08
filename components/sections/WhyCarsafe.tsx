"use client";

import { FadeIn } from "@/components/motion/FadeIn";

const points = [
  {
    number: "01",
    title: "FORMULATED FOR RESULTS",
    description:
      "Every CARSAFE product is designed around a clear purpose — better cleaning, stronger protection and a finish you can actually see.",
  },
  {
    number: "02",
    title: "BUILT FOR ENTHUSIASTS",
    description:
      "Made for people who don't see their car as just another vehicle. Every detail matters, from the first wash to the final finish.",
  },
  {
    number: "03",
    title: "PRO-GRADE PERFORMANCE",
    description:
      "We focus on performance, ease of use and consistency so you can achieve professional-looking results without complicated processes.",
  },
  {
    number: "04",
    title: "NO UNNECESSARY HYPE",
    description:
      "Clear products, clear purpose and honest performance. CARSAFE is built around what actually makes a difference to your vehicle.",
  },
];

export function WhyAutoDone() {
  return (
    <section
      id="why"
      className="bg-[#0A0A0A] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-24">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8956C] sm:text-xs">
                WHY CARSAFE
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase italic leading-[0.9] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
                CARE
                <br />
                WITHOUT
                <br />
                COMPROMISE.
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
                CARSAFE exists for people who care about how their vehicle
                looks, feels and performs. We create premium automotive care
                products that make maintaining that standard simpler.
              </p>
            </div>

          </div>
        </FadeIn>

        {/* =====================================================
            WHY CARSAFE POINTS
        ===================================================== */}

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:mt-14 lg:mt-24 lg:grid-cols-4">

          {points.map((point, index) => (
            <FadeIn
              key={point.number}
              delay={index * 0.06}
            >
              <article
                className="
                  group
                  h-full
                  bg-[#0A0A0A]
                  p-4
                  transition-colors
                  duration-500
                  hover:bg-white/[0.025]
                  sm:p-6
                  lg:p-8
                  xl:p-10
                "
              >

                {/* NUMBER */}

                <span className="text-[9px] font-semibold tracking-[0.2em] text-[#C8956C] sm:text-xs">
                  {point.number}
                </span>

                {/* TITLE */}

                <h3 className="mt-6 text-sm font-black uppercase italic leading-[1.05] tracking-tight text-white sm:mt-8 sm:text-lg lg:text-xl">
                  {point.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="mt-4 text-[11px] leading-5 text-zinc-500 sm:mt-5 sm:text-sm sm:leading-6">
                  {point.description}
                </p>

              </article>
            </FadeIn>
          ))}

        </div>

      </div>
    </section>
  );
}