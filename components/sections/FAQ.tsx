"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/constants/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/lib/utils/cn";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-carbon">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Common questions"
          description="Everything you need to know before booking your session."
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={faq.question} delay={i * 0.05}>
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left md:px-10 md:py-7"
                  aria-expanded={openIndex === i}
                >
                  <span className="text-heading text-white">{faq.question}</span>
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 transition-colors duration-300",
                      openIndex === i && "border-accent/30 bg-accent/10"
                    )}
                  >
                    {openIndex === i ? (
                      <Minus size={14} className="text-accent" />
                    ) : (
                      <Plus size={14} className="text-mist" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div className="border-t border-white/[0.06] px-8 pb-6 pt-5 md:px-10 md:pb-8">
                        <p className="text-body text-mist">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
