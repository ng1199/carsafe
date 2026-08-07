"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/constants/site";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !headlineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });
    });

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="CARSAFE Hero"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/60" />
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />      </div>

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Label className="mb-8 text-accent md:mb-10">
            PREMIUM CAR CARE PRODUCTS
          </Label>
        </motion.div>

        <h1 ref={headlineRef} className="font-black italic uppercase leading-[0.82] tracking-[-0.08em] text-[72px] md:text-[110px] lg:text-[145px]
xl:text-[160px] text-white">
          BUILT FOR
         <br />
          ENTHUSIASTS.
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-body-lg mt-12 max-w-xl text-silver md:mt-16"
        >
          Professional automotive care products engineered to protect,
          restore and elevate every drive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-14 flex flex-col gap-4 sm:flex-row md:mt-20"
        >
          <Button href="#" size="lg">
            SHOP PRODUCTS
          </Button>
          <Button href="#collections" variant="secondary" size="lg">
            VIEW COLLECTIONS
          </Button>
        </motion.div>
      </div>
    </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 right-6 z-10 md:right-10 lg:right-16"
      >
        <a
          href="#why"
          aria-label="Scroll to content"
          className="flex flex-col items-end gap-2 text-mist transition-colors duration-300 hover:text-white"
        >
          <Label as="span" className="text-mist">
            Scroll
          </Label>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
