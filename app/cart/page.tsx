"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";
import { useCart } from "@/lib/cart/CartContext";

export default function CartPage() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalPrice,
  } = useCart();

  const formatPrice = (price: number) =>
    `₹${price.toLocaleString("en-IN")}`;

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="border-b border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 sm:py-6 lg:px-8">

          <Link
            href="/"
            className="text-lg font-black tracking-[0.25em] sm:text-xl"
          >
            CARSAFE
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500 transition hover:text-white sm:text-xs sm:tracking-[0.2em]"
          >
            <ArrowLeft size={14} />
            <span>Continue Shopping</span>
          </Link>

        </div>
      </header>

      {/* =====================================================
          CART
      ===================================================== */}

      <section className="px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          {/* HEADER */}

          <div className="mb-9 sm:mb-12">

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8956C] sm:text-xs">
              YOUR CART
            </p>

            <h1 className="mt-3 text-4xl font-black uppercase italic leading-[0.9] tracking-[-0.04em] sm:mt-4 sm:text-5xl md:text-7xl">
              READY TO
              <br />
              DETAIL.
            </h1>

          </div>

          {/* =================================================
              EMPTY CART
          ================================================= */}

          {items.length === 0 ? (

            <div className="border border-white/10 bg-[#0D0D0D] px-5 py-16 text-center sm:px-6 sm:py-20">

              <h2 className="text-2xl font-black uppercase italic sm:text-3xl">
                YOUR CART IS EMPTY
              </h2>

              <p className="mx-auto mt-4 max-w-md text-xs leading-6 text-zinc-500 sm:text-sm sm:leading-7">
                Your CARSAFE products will appear here once you add
                something to your cart.
              </p>

              <Link
                href="/#products"
                className="mt-7 inline-flex h-11 items-center justify-center bg-[#C8956C] px-7 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition hover:bg-[#D7A77D] sm:h-12 sm:px-8 sm:text-xs"
              >
                SHOP PRODUCTS
              </Link>

            </div>

          ) : (

            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">

              {/* =================================================
                  CART ITEMS
              ================================================= */}

              <div className="space-y-3 lg:col-span-2 sm:space-y-5">

                {items.map((item) => {

                  const numericPrice = Number(
                    item.price.replace(/[₹,\s]/g, "")
                  );

                  const itemTotal =
                    numericPrice * item.quantity;

                  return (
                    <article
                      key={item.id}
                      className="flex gap-3 border border-white/10 bg-[#0D0D0D] p-3 sm:gap-5 sm:p-5"
                    >

                      {/* IMAGE */}

                      <div className="relative h-24 w-24 shrink-0 overflow-hidden bg-[#111] sm:h-32 sm:w-32 md:h-36 md:w-36">

                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="144px"
                          className="object-cover"
                        />

                      </div>

                      {/* DETAILS */}

                      <div className="flex min-w-0 flex-1 flex-col justify-between">

                        <div>

                          <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#C8956C] sm:text-[10px] sm:tracking-[0.25em]">
                            {item.category}
                          </p>

                          <h2 className="mt-1.5 text-sm font-black uppercase italic leading-tight sm:mt-2 sm:text-xl">
                            {item.name}
                          </h2>

                          <p className="mt-1.5 text-xs text-zinc-500 sm:mt-3 sm:text-sm">
                            {item.price}
                          </p>

                        </div>

                        {/* QUANTITY + REMOVE */}

                        <div className="mt-3 flex flex-wrap items-center gap-3 sm:mt-5 sm:gap-4">

                          <div className="flex h-8 items-center border border-white/10 sm:h-10">

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity - 1
                                )
                              }
                              aria-label="Decrease quantity"
                              className="flex h-full w-8 items-center justify-center text-zinc-500 transition hover:text-white sm:w-10"
                            >
                              <Minus size={12} />
                            </button>

                            <span className="w-7 text-center text-xs sm:w-10 sm:text-sm">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity + 1
                                )
                              }
                              aria-label="Increase quantity"
                              className="flex h-full w-8 items-center justify-center text-zinc-500 transition hover:text-white sm:w-10"
                            >
                              <Plus size={12} />
                            </button>

                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                            className="flex items-center gap-1.5 text-[8px] font-semibold uppercase tracking-[0.15em] text-zinc-600 transition hover:text-red-400 sm:text-[10px] sm:tracking-[0.2em]"
                          >
                            <Trash2 size={12} />
                            REMOVE
                          </button>

                        </div>

                      </div>

                      {/* ITEM TOTAL */}

                      <div className="hidden shrink-0 text-right sm:block">

                        <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                          TOTAL
                        </p>

                        <p className="mt-2 text-base font-semibold md:text-lg">
                          {formatPrice(itemTotal)}
                        </p>

                      </div>

                    </article>
                  );
                })}

              </div>

              {/* =================================================
                  ORDER SUMMARY
              ================================================= */}

              <aside className="h-fit border border-white/10 bg-[#0D0D0D] p-5 sm:p-7 lg:p-8">

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C8956C] sm:text-xs">
                  ORDER SUMMARY
                </p>

                <div className="mt-6 space-y-4 border-b border-white/10 pb-5 sm:mt-8 sm:space-y-5 sm:pb-7">

                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-zinc-500">
                      Subtotal
                    </span>

                    <span>
                      {formatPrice(totalPrice)}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4 text-xs sm:text-sm">

                    <span className="text-zinc-500">
                      Shipping
                    </span>

                    <span className="text-right text-zinc-400">
                      Calculated at checkout
                    </span>

                  </div>

                </div>

                <div className="flex items-end justify-between py-5 sm:py-7">

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
                    TOTAL
                  </span>

                  <span className="text-xl font-semibold sm:text-2xl">
                    {formatPrice(totalPrice)}
                  </span>

                </div>

                <Link
                  href="/checkout"
                  className="flex h-12 w-full items-center justify-center bg-[#C8956C] text-[10px] font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#D7A77D] sm:h-14 sm:text-xs sm:tracking-[0.2em]"
                >
                  PROCEED TO CHECKOUT
                </Link>

                <Link
                  href="/#products"
                  className="mt-2.5 flex h-12 w-full items-center justify-center border border-white/10 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition hover:border-white sm:h-14 sm:text-xs sm:tracking-[0.2em]"
                >
                  CONTINUE SHOPPING
                </Link>

              </aside>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}