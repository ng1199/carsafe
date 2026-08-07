"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { siteConfig } from "@/lib/constants/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 font-sans text-sm text-white placeholder:text-mist/50 outline-none transition-colors duration-300 focus:border-accent/40 focus:bg-white/[0.05]";

  return (
    <section id="contact" className="section-padding bg-void">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Begin your transformation"
          description="Schedule a consultation and discover what AUTO DONE can do for your vehicle."
        />

        <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
          <FadeIn className="lg:col-span-2">
            <div className="space-y-12">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                  <Mail size={18} className="text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <Label className="text-mist">Email</Label>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-body mt-3 block text-white transition-colors hover:text-accent"
                    style={{ maxWidth: "none" }}
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                  <Phone size={18} className="text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <Label className="text-mist">Phone</Label>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="text-body mt-3 block text-white transition-colors hover:text-accent"
                    style={{ maxWidth: "none" }}
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                  <MapPin size={18} className="text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <Label className="text-mist">Studio</Label>
                  <p
                    className="text-body mt-3 text-white"
                    style={{ maxWidth: "none" }}
                  >
                    {siteConfig.address}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-3">
            <GlassCard className="p-10 md:p-12">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                    <Send size={22} className="text-accent" />
                  </div>
                  <h3 className="text-heading text-white">Message received</h3>
                  <p className="text-body mt-4 text-mist">
                    Thank you for reaching out. We&apos;ll be in touch within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <Label as="label" htmlFor="name" className="mb-3 block text-mist">
                        Name
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
                      <Label as="label" htmlFor="email" className="mb-3 block text-mist">
                        Email
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

                  <div>
                    <Label as="label" htmlFor="vehicle" className="mb-3 block text-mist">
                      Vehicle
                    </Label>
                    <input
                      id="vehicle"
                      name="vehicle"
                      type="text"
                      className={fieldClass}
                      placeholder="Year, make, model"
                    />
                  </div>

                  <div>
                    <Label as="label" htmlFor="service" className="mb-3 block text-mist">
                      Service
                    </Label>
                    <select
                      id="service"
                      name="service"
                      className={fieldClass}
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-steel">
                        Select a service
                      </option>
                      <option value="ceramic" className="bg-steel">
                        Ceramic Coating
                      </option>
                      <option value="ppf" className="bg-steel">
                        Paint Protection Film
                      </option>
                      <option value="detailing" className="bg-steel">
                        Signature Detailing
                      </option>
                      <option value="correction" className="bg-steel">
                        Paint Correction
                      </option>
                    </select>
                  </div>

                  <div>
                    <Label as="label" htmlFor="message" className="mb-3 block text-mist">
                      Message
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={`${fieldClass} resize-none`}
                      placeholder="Tell us about your vehicle and goals"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send Message
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
