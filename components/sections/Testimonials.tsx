"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/constants/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { Label } from "@/components/ui/Label";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className="section-padding bg-void">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="Trusted by enthusiasts"
          description="Don't take our word for it — hear from those who demand the best."
        />

        <FadeIn>
          <GlassCard className="relative mx-auto max-w-3xl p-12 md:p-16">
            <Quote
              size={40}
              className="mb-10 text-accent/30"
              strokeWidth={1}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <blockquote
                  className="text-body-lg text-silver"
                  style={{ maxWidth: "48ch", fontSize: "1.125rem" }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-12">
                  <p className="text-heading text-white">{testimonial.author}</p>
                  <Label className="mt-2 text-mist">{testimonial.vehicle}</Label>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-14 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 bg-accent"
                        : "w-4 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-silver transition-all duration-300 hover:border-white/20 hover:text-white"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-silver transition-all duration-300 hover:border-white/20 hover:text-white"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}
