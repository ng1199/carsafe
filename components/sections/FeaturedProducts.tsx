"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/constants/site";
import { FadeIn } from "@/components/motion/FadeIn";

export function FeaturedProducts() {
  const heroProducts = products.filter(
    (product) => product.tier === "Hero"
  );

  const coreProducts = products.filter(
    (product) => product.tier === "Core"
  );

  return (
    <section
      id="products"
      className="bg-[#050505] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= SECTION HEADER ================= */}

        <FadeIn>
          <div className="max-w-3xl">

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8956C] sm:text-xs sm:tracking-[0.35em]">
              CARSAFE PRODUCTS
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase italic leading-[0.9] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
              BUILT FOR
              <br />
              ENTHUSIASTS.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
              Premium automotive care products designed to protect,
              restore and elevate every drive.
            </p>

          </div>
        </FadeIn>

        {/* ================= HERO PRODUCTS ================= */}

        <div className="mt-12 sm:mt-20 md:mt-24">

          <FadeIn>
            <div className="mb-6 flex items-end justify-between sm:mb-10">

              <div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8956C] sm:text-xs">
                  01
                </p>

                <h3 className="mt-2 text-xl font-black uppercase italic text-white sm:mt-3 sm:text-3xl md:text-4xl">
                  HERO PRODUCTS
                </h3>

              </div>

              <span className="hidden text-xs uppercase tracking-[0.2em] text-zinc-600 sm:block">
                {heroProducts.length} PRODUCTS
              </span>

            </div>
          </FadeIn>

          {/* PRODUCT GRID */}

          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">

            {heroProducts.map((product, index) => (

              <FadeIn
                key={product.id}
                delay={index * 0.06}
              >

                <article className="group h-full overflow-hidden border border-white/10 bg-[#0D0D0D] transition-all duration-500 hover:border-[#C8956C]/40">

                  {/* IMAGE */}

                  <div className="relative aspect-square overflow-hidden bg-[#111]">

                    <Image
                      src={product.image}
                      alt={`CARSAFE ${product.name}`}
                      fill
                      priority={index < 3}
                      sizes="(max-width: 639px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* BADGE */}

                    <div className="absolute left-2 top-2 sm:left-5 sm:top-5">

                      <span className="border border-[#C8956C]/40 bg-black/60 px-2 py-1 text-[7px] font-semibold uppercase tracking-[0.15em] text-[#C8956C] backdrop-blur-md sm:px-3 sm:py-2 sm:text-[10px] sm:tracking-[0.2em]">
                        HERO
                      </span>

                    </div>

                  </div>

                  {/* INFORMATION */}

                  <div className="p-3 sm:p-5 md:p-7">

                    <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-[#C8956C] sm:text-[10px] sm:tracking-[0.25em]">
                      {product.category}
                    </p>

                    <h4 className="mt-2 line-clamp-2 text-sm font-black uppercase italic leading-[1.05] text-white sm:mt-3 sm:text-xl md:mt-4 md:text-2xl">
                      {product.name}
                    </h4>

                    {/* DESCRIPTION — hidden on very small screens */}

                    <p className="mt-2 hidden text-sm leading-6 text-zinc-500 sm:mt-3 sm:block md:mt-4">
                      {product.description}
                    </p>

                    {/* PRICE + ACTION */}

                    <div className="mt-4 flex items-center justify-between sm:mt-6 md:mt-7">

                      <span className="text-xs font-semibold text-white sm:text-sm">
                        {product.price}
                      </span>

                      <Link
                        href={`/products/${product.id}`}
                        aria-label={`View ${product.name}`}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:border-[#C8956C]/50 hover:bg-[#C8956C] hover:text-black sm:h-10 sm:w-10"
                      >
                        <ArrowUpRight size={15} />
                      </Link>

                    </div>

                  </div>

                </article>

              </FadeIn>

            ))}

          </div>

        </div>

        {/* ================= CORE PRODUCTS ================= */}

        <div className="mt-16 sm:mt-24 md:mt-32">

          <FadeIn>

            <div className="mb-6 flex items-end justify-between sm:mb-10">

              <div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8956C] sm:text-xs">
                  02
                </p>

                <h3 className="mt-2 text-xl font-black uppercase italic text-white sm:mt-3 sm:text-3xl md:text-4xl">
                  CORE PRODUCTS
                </h3>

              </div>

              <span className="hidden text-xs uppercase tracking-[0.2em] text-zinc-600 sm:block">
                {coreProducts.length} PRODUCTS
              </span>

            </div>

          </FadeIn>

          {/* CORE PRODUCT GRID */}

          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">

            {coreProducts.map((product, index) => (

              <FadeIn
                key={product.id}
                delay={index * 0.06}
              >

                <article className="group h-full overflow-hidden border border-white/10 bg-[#0D0D0D] transition-all duration-500 hover:border-[#C8956C]/40">

                  {/* IMAGE */}

                  <div className="relative aspect-square overflow-hidden bg-[#111]">

                    <Image
                      src={product.image}
                      alt={`CARSAFE ${product.name}`}
                      fill
                      sizes="(max-width: 639px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* BADGE */}

                    <div className="absolute left-2 top-2 sm:left-5 sm:top-5">

                      <span className="border border-white/20 bg-black/60 px-2 py-1 text-[7px] font-semibold uppercase tracking-[0.15em] text-zinc-300 backdrop-blur-md sm:px-3 sm:py-2 sm:text-[10px] sm:tracking-[0.2em]">
                        CORE
                      </span>

                    </div>

                  </div>

                  {/* INFORMATION */}

                  <div className="p-3 sm:p-5 md:p-7">

                    <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-[#C8956C] sm:text-[10px] sm:tracking-[0.25em]">
                      {product.category}
                    </p>

                    <h4 className="mt-2 line-clamp-2 text-sm font-black uppercase italic leading-[1.05] text-white sm:mt-3 sm:text-xl md:mt-4 md:text-2xl">
                      {product.name}
                    </h4>

                    <p className="mt-2 hidden text-sm leading-6 text-zinc-500 sm:mt-3 sm:block md:mt-4">
                      {product.description}
                    </p>

                    {/* PRICE + ACTION */}

                    <div className="mt-4 flex items-center justify-between sm:mt-6 md:mt-7">

                      <span className="text-xs font-semibold text-white sm:text-sm">
                        {product.price}
                      </span>

                      <Link
                        href={`/products/${product.id}`}
                        aria-label={`View ${product.name}`}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:border-[#C8956C]/50 hover:bg-[#C8956C] hover:text-black sm:h-10 sm:w-10"
                      >
                        <ArrowUpRight size={15} />
                      </Link>

                    </div>

                  </div>

                </article>

              </FadeIn>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}