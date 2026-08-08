"use client";

import { useState } from "react";
import { Mail, MessageCircle, Camera, Send } from "lucide-react";
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
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-4 text-sm text-white placeholder:text-zinc-600 outline-none transition-all duration-300 focus:border-[#C8956C]/50 focus:bg-white/[0.05]";

  return (
    <section
      id="contact"
      className="bg-[#0A0A0A] px-6 py-32 lg:px-20 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C8956C]">
              GET IN TOUCH
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase italic leading-[0.9] tracking-[-0.04em] text-white md:text-7xl">
              LET&apos;S TALK
              <br />
              CARS.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
              Have a question about a product, your order, or which CARSAFE
              product is right for your vehicle? We&apos;re here to help.
            </p>
          </div>
        </FadeIn>

        {/* Content */}
        <div className="mt-20 grid gap-16 lg:mt-28 lg:grid-cols-5 lg:gap-20">
          {/* Contact Information */}
          <FadeIn className="lg:col-span-2">
            <div className="space-y-10">
              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                  <Mail
                    size={18}
                    className="text-[#C8956C]"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <Label className="text-zinc-500">EMAIL</Label>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-3 block text-base text-white transition-colors hover:text-[#C8956C]"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                  <MessageCircle
                    size={18}
                    className="text-[#C8956C]"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <Label className="text-zinc-500">WHATSAPP</Label>

                  <p className="mt-3 text-base text-white">
                    Coming soon
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                  <Camera
                    size={18}
                    className="text-[#C8956C]"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <Label className="text-zinc-500">INSTAGRAM</Label>

                  <p className="mt-3 text-base text-white">
                    @carsafe
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="border-t border-white/10 pt-8">
                <Label className="text-zinc-500">BASED IN</Label>

                <p className="mt-3 text-base text-white">
                  {siteConfig.address}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.1} className="lg:col-span-3">
            <GlassCard className="p-8 md:p-12">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#C8956C]/30 bg-[#C8956C]/10">
                    <Send size={22} className="text-[#C8956C]" />
                  </div>

                  <h3 className="text-2xl font-black uppercase italic text-white">
                    MESSAGE RECEIVED
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-zinc-500">
                    Thanks for reaching out to CARSAFE. We&apos;ll get back to
                    you as soon as possible.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-7"
                >
                  {/* Name + Email */}
                  <div className="grid gap-7 sm:grid-cols-2">
                    <div>
                      <Label
                        as="label"
                        htmlFor="name"
                        className="mb-3 block text-zinc-500"
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
                        className="mb-3 block text-zinc-500"
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

                  {/* Order */}
                  <div>
                    <Label
                      as="label"
                      htmlFor="order"
                      className="mb-3 block text-zinc-500"
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

                  {/* Topic */}
                  <div>
                    <Label
                      as="label"
                      htmlFor="topic"
                      className="mb-3 block text-zinc-500"
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

                  {/* Message */}
                  <div>
                    <Label
                      as="label"
                      htmlFor="message"
                      className="mb-3 block text-zinc-500"
                    >
                      MESSAGE
                    </Label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className={`${fieldClass} resize-none`}
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  {/* Submit */}
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