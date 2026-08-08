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
      className="bg-[#050505] px-6 py-32 lg:px-20 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}

        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C8956C]">
              CARSAFE PRODUCTS
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase italic leading-[0.9] tracking-[-0.04em] text-white md:text-7xl">
              BUILT FOR
              <br />
              ENTHUSIASTS.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-zinc-500 md:text-lg">
              Premium automotive care products designed to protect,
              restore and elevate every drive.
            </p>
          </div>
        </FadeIn>

        {/* ================= HERO PRODUCTS ================= */}

        <div className="mt-24">

          <FadeIn>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C8956C]">
                  01
                </p>

                <h3 className="mt-3 text-3xl font-black uppercase italic text-white md:text-4xl">
                  HERO PRODUCTS
                </h3>
              </div>

              <span className="hidden text-xs uppercase tracking-[0.2em] text-zinc-600 md:block">
                {heroProducts.length} PRODUCTS
              </span>
            </div>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {heroProducts.map((product, index) => (
              <FadeIn
                key={product.id}
                delay={index * 0.08}
              >
                <article className="group h-full overflow-hidden border border-white/10 bg-[#0D0D0D] transition-all duration-500 hover:border-[#C8956C]/40">

                  {/* IMAGE */}

                  <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">

                    <Image
                      src={product.image}
                      alt={`CARSAFE ${product.name}`}
                      fill
                      priority={index < 3}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5">
                      <span className="border border-[#C8956C]/40 bg-black/60 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8956C] backdrop-blur-md">
                        HERO PRODUCT
                      </span>
                    </div>

                  </div>

                  {/* INFORMATION */}

                  <div className="p-7 md:p-8">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C8956C]">
                      {product.category}
                    </p>

                    <h4 className="mt-4 text-2xl font-black uppercase italic leading-tight text-white">
                      {product.name}
                    </h4>

                    <p className="mt-4 text-sm leading-6 text-zinc-500">
                      {product.description}
                    </p>

                    <div className="mt-7 flex items-center justify-between">

                      <span className="text-sm font-semibold text-white">
                        {product.price}
                      </span>

                      <Link
                        href={`/products/${product.id}`}
                        aria-label={`View ${product.name}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:border-[#C8956C]/50 hover:bg-[#C8956C] hover:text-black"
                      >
                        <ArrowUpRight size={17} />
                      </Link>

                    </div>

                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ================= CORE PRODUCTS ================= */}

        <div className="mt-32">

          <FadeIn>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C8956C]">
                  02
                </p>

                <h3 className="mt-3 text-3xl font-black uppercase italic text-white md:text-4xl">
                  CORE PRODUCTS
                </h3>
              </div>

              <span className="hidden text-xs uppercase tracking-[0.2em] text-zinc-600 md:block">
                {coreProducts.length} PRODUCTS
              </span>
            </div>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coreProducts.map((product, index) => (
              <FadeIn
                key={product.id}
                delay={index * 0.08}
              >
                <article className="group h-full overflow-hidden border border-white/10 bg-[#0D0D0D] transition-all duration-500 hover:border-[#C8956C]/40">

                  {/* IMAGE */}

                  <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">

                    <Image
                      src={product.image}
                      alt={`CARSAFE ${product.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5">
                      <span className="border border-white/20 bg-black/60 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-md">
                        CORE PRODUCT
                      </span>
                    </div>

                  </div>

                  {/* INFORMATION */}

                  <div className="p-7 md:p-8">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C8956C]">
                      {product.category}
                    </p>

                    <h4 className="mt-4 text-2xl font-black uppercase italic leading-tight text-white">
                      {product.name}
                    </h4>

                    <p className="mt-4 text-sm leading-6 text-zinc-500">
                      {product.description}
                    </p>

                    <div className="mt-7 flex items-center justify-between">

                      <span className="text-sm font-semibold text-white">
                        {product.price}
                      </span>

                      <Link
                        href={`/products/${product.id}`}
                        aria-label={`View ${product.name}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:border-[#C8956C]/50 hover:bg-[#C8956C] hover:text-black"
                      >
                        <ArrowUpRight size={17} />
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