"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const faqs = [
  {
    question: "Are CARSAFE products suitable for beginners?",
    answer:
      "Yes. CARSAFE products are designed to deliver professional-looking results while remaining simple enough for enthusiasts to use at home. Each product will include clear application instructions.",
  },
  {
    question: "How do I use Ceramic Spray?",
    answer:
      "Wash and thoroughly dry the vehicle first. Work on a clean, cool surface and apply the product according to the instructions provided with the bottle. Always test on a small area before full application.",
  },
  {
    question: "How long does the protection last?",
    answer:
      "Durability depends on the specific product, application method, vehicle usage and maintenance routine. We will provide product-specific durability information on each product page.",
  },
  {
    question: "Can I use CARSAFE products on any car?",
    answer:
      "Most CARSAFE products are designed for common automotive surfaces, but compatibility varies by product. Always check the individual product instructions before applying it to a new or delicate surface.",
  },
  {
    question: "Where do you deliver?",
    answer:
      "CARSAFE will initially focus on delivery across India. Shipping availability, delivery times and applicable charges will be displayed during checkout.",
  },
  {
    question: "How can I contact CARSAFE?",
    answer:
      "You can contact us through the contact section on this website. We will add our official email, WhatsApp and social channels as the brand launches.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-[#050505] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-4xl">

        {/* HEADER */}

        <FadeIn>
          <div className="text-left sm:text-center">

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8956C] sm:text-xs">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase italic leading-[0.9] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
              QUESTIONS.
              <br />
              ANSWERED.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:mx-auto sm:mt-6 sm:text-base">
              Everything you need to know before making CARSAFE part of your
              car care routine.
            </p>

          </div>
        </FadeIn>

        {/* QUESTIONS */}

        <div className="mt-10 border-t border-white/10 sm:mt-14 md:mt-20">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeIn key={faq.question} delay={index * 0.03}>

                <div className="border-b border-white/10">

                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left sm:gap-8 sm:py-7"
                  >
                    <span className="text-sm font-semibold leading-5 text-white sm:text-base md:text-lg">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 transition-transform duration-300 sm:h-9 sm:w-9 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown
                        size={15}
                        className="text-zinc-400"
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-5 opacity-100 sm:pb-7"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">

                      <p className="max-w-3xl pr-8 text-xs leading-6 text-zinc-500 sm:pr-12 sm:text-sm sm:leading-7 md:text-base">
                        {faq.answer}
                      </p>

                    </div>
                  </div>

                </div>

              </FadeIn>
            );
          })}

        </div>

      </div>
    </section>
  );
}