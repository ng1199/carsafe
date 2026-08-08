import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { products } from "@/lib/constants/site";
import ProductActions from "./ProductActions";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.id === slug
  );

  {/* =====================================================
      PRODUCT NOT FOUND
  ===================================================== */}

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-5 text-white sm:px-6">

        <div className="text-center">

          <Link
            href="/"
            className="text-lg font-black tracking-[0.25em]"
          >
            CARSAFE
          </Link>

          <h1 className="mt-5 text-3xl font-black uppercase italic sm:text-4xl">
            PRODUCT NOT FOUND
          </h1>

          <Link
            href="/#products"
            className="mt-7 inline-flex border border-white/20 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] transition hover:border-white hover:bg-white hover:text-black sm:text-xs sm:tracking-[0.2em]"
          >
            BACK TO PRODUCTS
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="border-b border-white/[0.06]">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 sm:py-5 lg:px-8">

          {/* BACK */}

          <Link
            href="/#products"
            className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.15em] text-zinc-500 transition hover:text-white sm:gap-2 sm:text-xs sm:tracking-[0.2em]"
          >
            <ArrowLeft size={14} />
            <span>Back</span>
          </Link>

          {/* LOGO */}

          <Link
            href="/"
            className="text-lg font-black tracking-[0.25em] sm:text-xl"
          >
            CARSAFE
          </Link>

          {/* CART */}

          <Link
            href="/cart"
            className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.15em] text-zinc-500 transition hover:text-white sm:gap-2 sm:text-xs sm:tracking-[0.2em]"
          >
            <ShoppingBag size={14} />
            <span>Cart</span>
          </Link>

        </div>

      </header>

      {/* =====================================================
          PRODUCT
      ===================================================== */}

      <section className="px-5 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-24">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-20">

          {/* =================================================
              IMAGE
          ================================================= */}

          <div className="relative aspect-square w-full overflow-hidden bg-[#101010]">

            <Image
              src={product.image}
              alt={`CARSAFE ${product.name}`}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />

          </div>

          {/* =================================================
              DETAILS
          ================================================= */}

          <div className="flex flex-col justify-center">

            {/* CATEGORY */}

            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C8956C] sm:text-xs sm:tracking-[0.3em]">
              {product.category}
            </p>

            {/* TIER */}

            {product.tier === "Hero" && (
              <div className="mt-3 sm:mt-5">

                <span className="border border-[#C8956C]/40 bg-[#C8956C]/10 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#C8956C] sm:px-3 sm:py-2 sm:text-[10px] sm:tracking-[0.2em]">
                  HERO PRODUCT
                </span>

              </div>
            )}

            {/* NAME */}

            <h1 className="mt-4 text-4xl font-black uppercase italic leading-[0.9] tracking-[-0.04em] sm:mt-6 sm:text-5xl md:text-7xl">
              {product.name}
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-500 sm:mt-7 sm:text-base sm:leading-7 md:text-lg md:leading-8">
              {product.description}
            </p>

            {/* PRICE */}

            <div className="mt-6 border-y border-white/[0.08] py-5 sm:mt-8 sm:py-6">

              <span className="text-2xl font-semibold sm:text-3xl">
                {product.price}
              </span>

            </div>

            {/* ACTIONS */}

            <div className="mt-5 sm:mt-7">
              <ProductActions productName={product.name} />
            </div>

            {/* =================================================
                PRODUCT BENEFITS
            ================================================= */}

            <div className="mt-7 grid grid-cols-3 border-t border-white/[0.08] pt-6 sm:mt-10 sm:pt-8">

              {/* QUALITY */}

              <div className="pr-2">

                <p className="text-[8px] font-semibold uppercase tracking-[0.13em] text-zinc-500 sm:text-[10px] sm:tracking-[0.15em]">
                  QUALITY
                </p>

                <p className="mt-1.5 text-[9px] leading-4 text-zinc-600 sm:mt-2 sm:text-xs">
                  Enthusiast grade
                </p>

              </div>

              {/* SHIPPING */}

              <div className="border-l border-white/[0.08] px-3 sm:px-5">

                <p className="text-[8px] font-semibold uppercase tracking-[0.13em] text-zinc-500 sm:text-[10px] sm:tracking-[0.15em]">
                  SHIPPING
                </p>

                <p className="mt-1.5 text-[9px] leading-4 text-zinc-600 sm:mt-2 sm:text-xs">
                  India wide
                </p>

              </div>

              {/* SUPPORT */}

              <div className="border-l border-white/[0.08] pl-3 sm:pl-5">

                <p className="text-[8px] font-semibold uppercase tracking-[0.13em] text-zinc-500 sm:text-[10px] sm:tracking-[0.15em]">
                  SUPPORT
                </p>

                <p className="mt-1.5 text-[9px] leading-4 text-zinc-600 sm:mt-2 sm:text-xs">
                  CARSAFE team
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}