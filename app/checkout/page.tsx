"use client";

import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart/CartContext";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();

  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const formatPrice = (price: number) =>
    `₹${price.toLocaleString("en-IN")}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSubmitted(true);
    clearCart();
  };

  {/* =====================================================
      ORDER RECEIVED
  ===================================================== */}

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-5 text-white sm:px-6">

        <div className="w-full max-w-xl text-center">

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8956C] sm:text-xs">
            CARSAFE
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase italic leading-[0.9] sm:mt-6 sm:text-5xl md:text-7xl">
            ORDER
            <br />
            RECEIVED.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-zinc-500 sm:mt-8 sm:text-base sm:leading-8">
            Thank you for choosing CARSAFE. Your test order has
            been successfully submitted.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex h-12 items-center justify-center bg-[#C8956C] px-8 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition hover:bg-[#D7A77D] sm:mt-10 sm:h-14 sm:px-10 sm:text-xs"
          >
            BACK TO CARSAFE
          </Link>

        </div>

      </main>
    );
  }

  {/* =====================================================
      EMPTY CART
  ===================================================== */}

  if (items.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-5 text-white sm:px-6">

        <div className="text-center">

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8956C] sm:text-xs">
            CARSAFE CHECKOUT
          </p>

          <h1 className="mt-4 text-3xl font-black uppercase italic sm:mt-5 sm:text-4xl">
            YOUR CART IS EMPTY
          </h1>

          <Link
            href="/#products"
            className="mt-7 inline-flex h-11 items-center justify-center bg-[#C8956C] px-7 text-[10px] font-bold uppercase tracking-[0.18em] text-black sm:mt-8 sm:h-12 sm:px-8 sm:text-xs"
          >
            SHOP PRODUCTS
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

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 sm:py-6 lg:px-8">

          <Link
            href="/"
            className="text-lg font-black tracking-[0.25em] sm:text-xl"
          >
            CARSAFE
          </Link>

          <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.15em] text-zinc-500 sm:gap-2 sm:text-xs sm:tracking-[0.2em]">

            <Lock size={13} />

            Secure Checkout

          </div>

        </div>

      </header>

      {/* =====================================================
          CHECKOUT CONTENT
      ===================================================== */}

      <section className="px-5 py-9 sm:px-6 sm:py-14 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          {/* BACK TO CART */}

          <Link
            href="/cart"
            className="mb-8 flex w-fit items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-zinc-500 transition hover:text-white sm:mb-10 sm:text-xs sm:tracking-[0.2em]"
          >
            <ArrowLeft size={14} />
            Back to cart
          </Link>

          <div className="grid gap-8 lg:grid-cols-3 lg:gap-20">

            {/* =================================================
                FORM
            ================================================= */}

            <div className="lg:col-span-2">

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8956C] sm:text-xs">
                CHECKOUT
              </p>

              <h1 className="mt-4 text-4xl font-black uppercase italic leading-[0.9] sm:text-5xl md:text-6xl">
                YOUR
                <br />
                DETAILS.
              </h1>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5 sm:mt-12 sm:space-y-8"
              >

                {/* NAME */}

                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:mb-3 sm:text-[10px]"
                  >
                    FULL NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    autoComplete="name"
                    className="w-full border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#C8956C]/50 sm:py-4"
                  />

                </div>

                {/* PHONE + EMAIL */}

                <div className="grid gap-5 sm:grid-cols-2 sm:gap-7">

                  <div>

                    <label
                      htmlFor="phone"
                      className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:mb-3 sm:text-[10px]"
                    >
                      MOBILE NUMBER
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      autoComplete="tel"
                      className="w-full border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#C8956C]/50 sm:py-4"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:mb-3 sm:text-[10px]"
                    >
                      EMAIL
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                      autoComplete="email"
                      className="w-full border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#C8956C]/50 sm:py-4"
                    />

                  </div>

                </div>

                {/* ADDRESS */}

                <div>

                  <label
                    htmlFor="address"
                    className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:mb-3 sm:text-[10px]"
                  >
                    DELIVERY ADDRESS
                  </label>

                  <input
                    id="address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    placeholder="House number, street, area"
                    autoComplete="street-address"
                    className="w-full border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#C8956C]/50 sm:py-4"
                  />

                </div>

                {/* CITY / STATE / PINCODE */}

                <div className="grid gap-5 sm:grid-cols-3 sm:gap-7">

                  <div>

                    <label
                      htmlFor="city"
                      className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:mb-3 sm:text-[10px]"
                    >
                      CITY
                    </label>

                    <input
                      id="city"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      required
                      placeholder="Dehradun"
                      autoComplete="address-level2"
                      className="w-full border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#C8956C]/50 sm:py-4"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="state"
                      className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:mb-3 sm:text-[10px]"
                    >
                      STATE
                    </label>

                    <input
                      id="state"
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      required
                      placeholder="Uttarakhand"
                      autoComplete="address-level1"
                      className="w-full border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#C8956C]/50 sm:py-4"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="pincode"
                      className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:mb-3 sm:text-[10px]"
                    >
                      PIN CODE
                    </label>

                    <input
                      id="pincode"
                      name="pincode"
                      inputMode="numeric"
                      maxLength={6}
                      value={form.pincode}
                      onChange={handleChange}
                      required
                      placeholder="248001"
                      autoComplete="postal-code"
                      className="w-full border border-white/10 bg-[#0D0D0D] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#C8956C]/50 sm:py-4"
                    />

                  </div>

                </div>

                {/* =================================================
                    PAYMENT
                ================================================= */}

                <div className="border-t border-white/10 pt-7 sm:pt-10">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C8956C] sm:text-xs">
                    PAYMENT
                  </p>

                  <div className="mt-4 border border-[#C8956C]/40 bg-[#C8956C]/5 p-4 sm:mt-6 sm:p-5">

                    <p className="text-sm font-semibold text-white">
                      Test Checkout
                    </p>

                    <p className="mt-1.5 text-xs leading-5 text-zinc-500 sm:mt-2 sm:leading-6">
                      No real payment will be processed. This is
                      currently a testing version of the CARSAFE
                      checkout.
                    </p>

                  </div>

                </div>

                {/* PLACE ORDER */}

                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center bg-[#C8956C] text-[10px] font-bold uppercase tracking-[0.18em] text-black transition hover:bg-[#D7A77D] sm:h-14 sm:text-xs sm:tracking-[0.2em]"
                >
                  PLACE TEST ORDER
                </button>

              </form>

            </div>

            {/* =================================================
                ORDER SUMMARY
            ================================================= */}

            <aside className="h-fit border border-white/10 bg-[#0D0D0D] p-5 sm:p-7 lg:p-8">

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C8956C] sm:text-xs">
                ORDER SUMMARY
              </p>

              <div className="mt-5 space-y-4 sm:mt-8 sm:space-y-6">

                {items.map((item) => (

                  <div
                    key={item.id}
                    className="flex justify-between gap-4 border-b border-white/[0.06] pb-4 sm:gap-5 sm:pb-5"
                  >

                    <div className="min-w-0">

                      <p className="text-xs font-semibold uppercase italic text-white sm:text-sm">
                        {item.name}
                      </p>

                      <p className="mt-1 text-[10px] text-zinc-600 sm:mt-2 sm:text-xs">
                        Qty: {item.quantity}
                      </p>

                    </div>

                    <p className="shrink-0 text-xs text-white sm:text-sm">

                      {formatPrice(
                        Number(
                          item.price.replace(/[₹,\s]/g, "")
                        ) * item.quantity
                      )}

                    </p>

                  </div>

                ))}

              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 sm:mt-8 sm:pt-7">

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
                  TOTAL
                </span>

                <span className="text-xl font-semibold sm:text-2xl">
                  {formatPrice(totalPrice)}
                </span>

              </div>

            </aside>

          </div>

        </div>

      </section>

    </main>
  );
}