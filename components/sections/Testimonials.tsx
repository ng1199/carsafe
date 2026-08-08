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
      className="bg-[#050505] px-6 py-32 lg:px-20 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        <FadeIn>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C8956C]">
                REVIEWS
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase italic leading-[0.9] tracking-[-0.04em] text-white md:text-7xl">
                MADE TO
                <br />
                BE NOTICED.
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-zinc-500">
              What matters most is what happens after the bottle is opened.
              Real results, real vehicles, real enthusiasts.
            </p>
          </div>
        </FadeIn>

        {/* Review */}

        <FadeIn delay={0.1}>
          <div className="mt-20 border-y border-white/10 py-16 md:mt-28 md:py-24">

            <Quote
              size={36}
              strokeWidth={1}
              className="text-[#C8956C]"
            />

            <blockquote className="mt-8 max-w-5xl text-3xl font-medium leading-tight tracking-tight text-white md:text-5xl">
              “{review.quote}”
            </blockquote>

            <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  {review.name}
                </p>

                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-zinc-500">
                  {review.product}
                </p>
              </div>

              {/* Controls */}

              <div className="flex items-center gap-3">

                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous review"
                  className="flex h-12 w-12 items-center justify-center border border-white/10 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next review"
                  className="flex h-12 w-12 items-center justify-center border border-white/10 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>
          </div>
        </FadeIn>

        {/* Indicators */}

        <div className="mt-8 flex gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Go to review ${index + 1}`}
              className={`h-1 transition-all duration-300 ${
                index === active
                  ? "w-10 bg-[#C8956C]"
                  : "w-4 bg-white/20"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}