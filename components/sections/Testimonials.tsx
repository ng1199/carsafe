"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const reviews = [
  {
    quote:
      "The finish after using CARSAFE Ceramic Spray was exactly what I was looking for. Deep gloss, smooth paint and seriously impressive water beading.",
    name: "CARSAFE Customer",
    product: "Ceramic Spray",
  },
  {
    quote:
      "The Rain Repellent is incredibly easy to apply and the difference during rain is noticeable immediately. One of the easiest upgrades I've made to my car care routine.",
    name: "CARSAFE Customer",
    product: "Rain Repellent",
  },
  {
    quote:
      "Finally a tyre product that gives a clean, refined finish without making the tyres look greasy. It has become part of every wash.",
    name: "CARSAFE Customer",
    product: "Tyre Shine",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((current) => (current + 1) % reviews.length);
  };

  const previous = () => {
    setActive(
      (current) => (current - 1 + reviews.length) % reviews.length
    );
  };

  const review = reviews[active];

  return (
    <section
      id="reviews"
      className="bg-[#0A0A0A] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <FadeIn>
          <div className="max-w-3xl">

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8956C] sm:text-xs">
              REVIEWS
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase italic leading-[0.9] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
              MADE TO
              <br />
              BE NOTICED.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:mt-6 sm:text-base">
              Real results from real enthusiasts.
            </p>

          </div>
        </FadeIn>

        {/* REVIEW */}

        <FadeIn delay={0.08}>
          <div className="mt-10 border-y border-white/10 py-8 sm:mt-16 sm:py-12 md:mt-20 md:py-20">

            <Quote
              size={24}
              strokeWidth={1}
              className="text-[#C8956C] sm:h-8 sm:w-8"
            />

            <blockquote className="mt-5 max-w-4xl text-xl font-medium leading-[1.25] tracking-tight text-white sm:mt-7 sm:text-3xl md:text-5xl">
              “{review.quote}”
            </blockquote>

            <div className="mt-7 flex items-center justify-between gap-4 sm:mt-10">

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white sm:text-xs sm:tracking-[0.2em]">
                  {review.name}
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-zinc-500 sm:mt-2 sm:text-xs">
                  {review.product}
                </p>
              </div>

              <div className="flex gap-2">

                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous review"
                  className="flex h-9 w-9 items-center justify-center border border-white/10 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:h-11 sm:w-11"
                >
                  <ArrowLeft size={15} />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next review"
                  className="flex h-9 w-9 items-center justify-center border border-white/10 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:h-11 sm:w-11"
                >
                  <ArrowRight size={15} />
                </button>

              </div>

            </div>

          </div>
        </FadeIn>

        {/* INDICATORS */}

        <div className="mt-5 flex gap-2 sm:mt-7">
          {reviews.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Go to review ${index + 1}`}
              className={`h-1 transition-all duration-300 ${
                index === active
                  ? "w-8 bg-[#C8956C]"
                  : "w-3 bg-white/20"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}