"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !headlineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.3,
      });
    });

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-[#050505]"
    >
      {/* =====================================================
          HERO WALLPAPER
      ===================================================== */}

      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overall darkening */}

        <div className="absolute inset-0 bg-black/45" />

        {/* Left-side dark gradient for text */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

        {/* Bottom fade */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/10" />
      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="w-full max-w-5xl">

          {/* EYEBROW */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <Label className="mb-6 text-accent sm:mb-8 md:mb-10">
              PREMIUM CAR CARE PRODUCTS
            </Label>
          </motion.div>

          {/* =================================================
              HEADLINE
          ================================================= */}

          <h1
            ref={headlineRef}
            className="
              w-full
              max-w-[340px]
              font-black
              italic
              uppercase
              leading-[0.88]
              tracking-[-0.045em]
              text-[44px]
              text-white
              sm:max-w-[500px]
              sm:text-[52px]
              md:max-w-none
              md:text-[110px]
              lg:text-[145px]
              xl:text-[160px]
            "
          >
            BUILT FOR
            <br />
            ENTHUSIASTS.
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="
              mt-6
              max-w-[330px]
              text-sm
              leading-6
              text-silver
              sm:mt-8
              sm:max-w-xl
              sm:text-base
              sm:leading-7
              md:mt-16
              md:text-body-lg
            "
          >
            Professional automotive care products engineered to protect,
            restore and elevate every drive.
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="
              mt-8
              flex
              w-full
              flex-col
              gap-3
              sm:mt-10
              sm:w-auto
              sm:flex-row
              sm:gap-4
              md:mt-20
            "
          >
            <Button
              href="#products"
              size="lg"
              className="w-full sm:w-auto"
            >
              SHOP PRODUCTS
            </Button>

            <Button
              href="#collections"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              VIEW COLLECTIONS
            </Button>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-6
          right-5
          z-20
          sm:bottom-8
          sm:right-6
          md:bottom-10
          md:right-10
          lg:right-16
        "
      >
        <a
          href="#collections"
          aria-label="Scroll to collections"
          className="flex flex-col items-end gap-2 text-mist transition-colors duration-300 hover:text-white"
        >
          <Label as="span" className="text-mist">
            Scroll
          </Label>

          <ChevronDown
            size={18}
            className="animate-bounce"
          />
        </a>
      </motion.div>
    </section>
  );
}