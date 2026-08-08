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

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C8956C]">
            CARSAFE
          </p>

          <h1 className="mt-5 text-4xl font-black uppercase italic">
            PRODUCT NOT FOUND
          </h1>

          <Link
            href="/#products"
            className="mt-8 inline-flex border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-white hover:bg-white hover:text-black"
          >
            BACK TO PRODUCTS
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* HEADER */}

      <div className="border-b border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

          <Link
            href="/#products"
            className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to products
          </Link>

          <Link
            href="/"
            className="text-lg font-black tracking-[0.25em]"
          >
            CARSAFE
          </Link>

          <Link
            href="/#contact"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500 transition hover:text-white"
          >
            <ShoppingBag size={16} />
            Cart
          </Link>

        </div>
      </div>

      {/* PRODUCT */}

      <section className="px-6 py-16 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">

          {/* IMAGE */}

          <div className="relative aspect-square overflow-hidden bg-[#101010]">
            <Image
              src={product.image}
              alt={`CARSAFE ${product.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* DETAILS */}

          <div className="flex flex-col justify-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C8956C]">
              {product.category}
            </p>

            {product.tier === "Hero" && (
              <div className="mt-5">
                <span className="border border-[#C8956C]/40 bg-[#C8956C]/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8956C]">
                  HERO PRODUCT
                </span>
              </div>
            )}

            <h1 className="mt-7 text-5xl font-black uppercase italic leading-[0.9] tracking-[-0.04em] md:text-7xl">
              {product.name}
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-zinc-500 md:text-lg">
              {product.description}
            </p>

            <div className="mt-10 border-y border-white/[0.08] py-7">
              <span className="text-3xl font-semibold">
                {product.price}
              </span>
            </div>

            <ProductActions productName={product.name} />

            <div className="mt-10 grid grid-cols-3 border-t border-white/[0.08] pt-8">

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500">
                  QUALITY
                </p>
                <p className="mt-2 text-xs text-zinc-700">
                  Enthusiast grade
                </p>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500">
                  SHIPPING
                </p>
                <p className="mt-2 text-xs text-zinc-700">
                  India wide
                </p>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500">
                  SUPPORT
                </p>
                <p className="mt-2 text-xs text-zinc-700">
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