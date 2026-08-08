"use client";

import { useState } from "react";
import {
  Mail,
  MessageCircle,
  Camera,
  Send,
} from "lucide-react";
import { siteConfig } from "@/lib/constants/site";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { Label } from "@/components/ui/Label";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fieldClass =
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-all duration-300 focus:border-[#C8956C]/50 focus:bg-white/[0.05]";

  return (
    <section
      id="contact"
      className="bg-[#0A0A0A] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <FadeIn>
          <div className="max-w-3xl">

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8956C] sm:text-xs">
              GET IN TOUCH
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase italic leading-[0.9] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
              LET&apos;S TALK
              <br />
              CARS.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:mt-6 sm:text-base">
              Questions about CARSAFE? We&apos;re here to help.
            </p>

          </div>
        </FadeIn>

        {/* CONTENT */}

        <div className="mt-10 grid gap-10 sm:mt-14 lg:mt-20 lg:grid-cols-5 lg:gap-20">

          {/* CONTACT INFO */}

          <FadeIn className="lg:col-span-2">

            <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:block lg:space-y-10">

              {/* EMAIL */}

              <div className="flex items-start gap-3 sm:gap-5">

                <Mail
                  size={17}
                  className="mt-1 shrink-0 text-[#C8956C]"
                  strokeWidth={1.5}
                />

                <div className="min-w-0">

                  <Label className="text-zinc-500">
                    EMAIL
                  </Label>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-2 block break-all text-xs text-white hover:text-[#C8956C] sm:text-sm"
                  >
                    {siteConfig.email}
                  </a>

                </div>

              </div>

              {/* WHATSAPP */}

              <div className="flex items-start gap-3 sm:gap-5">

                <MessageCircle
                  size={17}
                  className="mt-1 shrink-0 text-[#C8956C]"
                  strokeWidth={1.5}
                />

                <div>

                  <Label className="text-zinc-500">
                    WHATSAPP
                  </Label>

                  <p className="mt-2 text-xs text-white sm:text-sm">
                    Coming soon
                  </p>

                </div>

              </div>

              {/* INSTAGRAM */}

              <div className="flex items-start gap-3 sm:gap-5">

                <Camera
                  size={17}
                  className="mt-1 shrink-0 text-[#C8956C]"
                  strokeWidth={1.5}
                />

                <div>

                  <Label className="text-zinc-500">
                    INSTAGRAM
                  </Label>

                  <p className="mt-2 text-xs text-white sm:text-sm">
                    @carsafe
                  </p>

                </div>

              </div>

              {/* LOCATION */}

              <div className="col-span-2 border-t border-white/10 pt-5 lg:col-span-1 lg:pt-8">

                <Label className="text-zinc-500">
                  BASED IN
                </Label>

                <p className="mt-2 text-xs text-white sm:text-sm">
                  {siteConfig.address}
                </p>

              </div>

            </div>

          </FadeIn>

          {/* FORM */}

          <FadeIn
            delay={0.08}
            className="lg:col-span-3"
          >

            <GlassCard className="p-5 sm:p-8 md:p-12">

              {submitted ? (

                <div className="flex min-h-[300px] flex-col items-center justify-center text-center sm:min-h-[360px]">

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#C8956C]/30 bg-[#C8956C]/10">

                    <Send
                      size={19}
                      className="text-[#C8956C]"
                    />

                  </div>

                  <h3 className="text-xl font-black uppercase italic text-white">
                    MESSAGE RECEIVED
                  </h3>

                  <p className="mt-3 max-w-md text-xs leading-6 text-zinc-500 sm:text-sm">
                    Thanks for reaching out to CARSAFE. We&apos;ll get back to
                    you as soon as possible.
                  </p>

                </div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-7"
                >

                  {/* NAME + EMAIL */}

                  <div className="grid gap-5 sm:grid-cols-2 sm:gap-7">

                    <div>

                      <Label
                        as="label"
                        htmlFor="name"
                        className="mb-2 block text-zinc-500"
                      >
                        NAME
                      </Label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className={fieldClass}
                        placeholder="Your name"
                      />

                    </div>

                    <div>

                      <Label
                        as="label"
                        htmlFor="email"
                        className="mb-2 block text-zinc-500"
                      >
                        EMAIL
                      </Label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={fieldClass}
                        placeholder="you@email.com"
                      />

                    </div>

                  </div>

                  {/* ORDER */}

                  <div>

                    <Label
                      as="label"
                      htmlFor="order"
                      className="mb-2 block text-zinc-500"
                    >
                      ORDER NUMBER
                    </Label>

                    <input
                      id="order"
                      name="order"
                      type="text"
                      className={fieldClass}
                      placeholder="Optional"
                    />

                  </div>

                  {/* TOPIC */}

                  <div>

                    <Label
                      as="label"
                      htmlFor="topic"
                      className="mb-2 block text-zinc-500"
                    >
                      WHAT CAN WE HELP WITH?
                    </Label>

                    <select
                      id="topic"
                      name="topic"
                      defaultValue=""
                      className={`${fieldClass} bg-[#111]`}
                    >
                      <option value="" disabled>
                        Select a topic
                      </option>

                      <option value="product">
                        Product question
                      </option>

                      <option value="order">
                        Order / shipping
                      </option>

                      <option value="recommendation">
                        Product recommendation
                      </option>

                      <option value="partnership">
                        Partnership
                      </option>

                      <option value="other">
                        Something else
                      </option>
                    </select>

                  </div>

                  {/* MESSAGE */}

                  <div>

                    <Label
                      as="label"
                      htmlFor="message"
                      className="mb-2 block text-zinc-500"
                    >
                      MESSAGE
                    </Label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className={`${fieldClass} resize-none`}
                      placeholder="Tell us how we can help..."
                    />

                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    SEND MESSAGE →
                  </Button>

                </form>

              )}

            </GlassCard>

          </FadeIn>

        </div>

      </div>
    </section>
  );
}