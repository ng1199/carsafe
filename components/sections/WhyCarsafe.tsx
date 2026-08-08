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
      id="about"
      className="bg-[#0A0A0A] px-6 py-32 lg:px-20 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C8956C]">
                WHY CARSAFE
              </p>

              <h2 className="mt-6 max-w-3xl text-5xl font-black uppercase italic leading-[0.9] tracking-[-0.04em] text-white md:text-7xl">
                CARE
                <br />
                WITHOUT
                <br />
                COMPROMISE.
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-xl text-lg leading-8 text-zinc-400">
                CARSAFE exists for people who care about how their vehicle
                looks, feels and performs. We create premium automotive care
                products that make maintaining that standard simpler.
              </p>
            </div>

          </div>
        </FadeIn>

        {/* Points */}

        <div className="mt-24 border-t border-white/10 lg:mt-32">

          {points.map((point, index) => (
            <FadeIn key={point.number} delay={index * 0.08}>

              <div className="group grid gap-6 border-b border-white/10 py-10 transition-colors duration-500 hover:bg-white/[0.02] md:grid-cols-[100px_1fr_1.5fr] md:items-center md:gap-12">

                <span className="text-sm font-semibold tracking-[0.2em] text-[#C8956C]">
                  {point.number}
                </span>

                <h3 className="text-xl font-black uppercase italic tracking-tight text-white md:text-2xl">
                  {point.title}
                </h3>

                <p className="max-w-xl text-sm leading-7 text-zinc-500 md:text-base">
                  {point.description}
                </p>

              </div>

            </FadeIn>
          ))}

        </div>

      </div>
    </section>
  );
}