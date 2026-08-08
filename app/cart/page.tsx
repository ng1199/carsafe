"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
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

      {/* HEADER */}

      <header className="border-b border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">

          <Link
            href="/"
            className="text-xl font-black tracking-[0.25em]"
          >
            CARSAFE
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 transition hover:text-white"
          >
            <ArrowLeft size={15} />
            Continue Shopping
          </Link>

        </div>
      </header>

      {/* CART */}

      <section className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C8956C]">
              YOUR CART
            </p>

            <h1 className="mt-4 text-5xl font-black uppercase italic tracking-[-0.04em] md:text-7xl">
              READY TO
              <br />
              DETAIL.
            </h1>
          </div>

          {items.length === 0 ? (

            /* EMPTY CART */

            <div className="border border-white/10 bg-[#0D0D0D] px-6 py-24 text-center">

              <h2 className="text-3xl font-black uppercase italic">
                YOUR CART IS EMPTY
              </h2>

              <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-zinc-500">
                Your CARSAFE products will appear here once you add
                something to your cart.
              </p>

              <Link
                href="/#products"
                className="mt-8 inline-flex h-12 items-center justify-center bg-[#C8956C] px-8 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-[#D7A77D]"
              >
                SHOP PRODUCTS
              </Link>

            </div>

          ) : (

            <div className="grid gap-12 lg:grid-cols-3">

              {/* CART ITEMS */}

              <div className="space-y-5 lg:col-span-2">

                {items.map((item) => {

                  const numericPrice = Number(
                    item.price.replace(/[₹,\s]/g, "")
                  );

                  const itemTotal =
                    numericPrice * item.quantity;

                  return (
                    <article
                      key={item.id}
                      className="flex flex-col gap-6 border border-white/10 bg-[#0D0D0D] p-5 sm:flex-row sm:items-center"
                    >

                      {/* IMAGE */}

                      <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-[#111] sm:h-36 sm:w-36">

                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="144px"
                          className="object-cover"
                        />

                      </div>

                      {/* DETAILS */}

                      <div className="flex-1">

                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C8956C]">
                          {item.category}
                        </p>

                        <h2 className="mt-2 text-xl font-black uppercase italic">
                          {item.name}
                        </h2>

                        <p className="mt-3 text-sm text-zinc-500">
                          {item.price}
                        </p>

                        {/* QUANTITY */}

                        <div className="mt-5 flex items-center gap-4">

                          <div className="flex h-10 items-center border border-white/10">

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity - 1
                                )
                              }
                              className="flex h-full w-10 items-center justify-center text-zinc-500 transition hover:text-white"
                            >
                              <Minus size={14} />
                            </button>

                            <span className="w-10 text-center text-sm">
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
                              className="flex h-full w-10 items-center justify-center text-zinc-500 transition hover:text-white"
                            >
                              <Plus size={14} />
                            </button>

                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                            className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600 transition hover:text-red-400"
                          >
                            <Trash2 size={14} />
                            Remove
                          </button>

                        </div>

                      </div>

                      {/* ITEM TOTAL */}

                      <div className="text-left sm:text-right">

                        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                          TOTAL
                        </p>

                        <p className="mt-2 text-lg font-semibold">
                          {formatPrice(itemTotal)}
                        </p>

                      </div>

                    </article>
                  );
                })}

              </div>

              {/* SUMMARY */}

              <aside className="h-fit border border-white/10 bg-[#0D0D0D] p-7 lg:p-8">

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8956C]">
                  ORDER SUMMARY
                </p>

                <div className="mt-8 space-y-5 border-b border-white/10 pb-7">

                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">
                      Subtotal
                    </span>

                    <span>
                      {formatPrice(totalPrice)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">
                      Shipping
                    </span>

                    <span className="text-zinc-400">
                      Calculated at checkout
                    </span>
                  </div>

                </div>

                <div className="flex items-end justify-between py-7">

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    TOTAL
                  </span>

                  <span className="text-2xl font-semibold">
                    {formatPrice(totalPrice)}
                  </span>

                </div>

                <Link
                    href="/checkout"
                    className="flex h-14 w-full items-center justify-center bg-[#C8956C] text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-[#D7A77D]"
                >
                    PROCEED TO CHECKOUT
                </Link>

                <Link
                  href="/#products"
                  className="mt-3 flex h-14 w-full items-center justify-center border border-white/10 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:border-white"
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