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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">

        <div className="max-w-xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C8956C]">
            CARSAFE
          </p>

          <h1 className="mt-6 text-5xl font-black uppercase italic leading-[0.9] md:text-7xl">
            ORDER
            <br />
            RECEIVED.
          </h1>

          <p className="mt-8 text-base leading-8 text-zinc-500">
            Thank you for choosing CARSAFE. Your test order has
            been successfully submitted.
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex h-14 items-center justify-center bg-[#C8956C] px-10 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-[#D7A77D]"
          >
            BACK TO CARSAFE
          </Link>

        </div>

      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">

        <div className="text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C8956C]">
            CARSAFE CHECKOUT
          </p>

          <h1 className="mt-5 text-4xl font-black uppercase italic">
            YOUR CART IS EMPTY
          </h1>

          <Link
            href="/#products"
            className="mt-8 inline-flex h-12 items-center justify-center bg-[#C8956C] px-8 text-xs font-bold uppercase tracking-[0.2em] text-black"
          >
            SHOP PRODUCTS
          </Link>

        </div>

      </main>
    );
  }

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

          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
            <Lock size={14} />
            Secure Checkout
          </div>

        </div>

      </header>

      {/* CONTENT */}

      <section className="px-6 py-14 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <Link
            href="/cart"
            className="mb-10 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500 transition hover:text-white"
          >
            <ArrowLeft size={15} />
            Back to cart
          </Link>

          <div className="grid gap-14 lg:grid-cols-3 lg:gap-20">

            {/* FORM */}

            <div className="lg:col-span-2">

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C8956C]">
                CHECKOUT
              </p>

              <h1 className="mt-5 text-5xl font-black uppercase italic leading-[0.9] md:text-6xl">
                YOUR
                <br />
                DETAILS.
              </h1>

              <form
                onSubmit={handleSubmit}
                className="mt-12 space-y-8"
              >

                {/* NAME */}

                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500"
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
                    className="w-full rounded-none border border-white/10 bg-[#0D0D0D] px-4 py-4 text-sm text-white outline-none transition focus:border-[#C8956C]/50"
                  />
                </div>

                {/* PHONE + EMAIL */}

                <div className="grid gap-8 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500"
                    >
                      MOBILE NUMBER
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-white/10 bg-[#0D0D0D] px-4 py-4 text-sm text-white outline-none transition focus:border-[#C8956C]/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500"
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
                      className="w-full border border-white/10 bg-[#0D0D0D] px-4 py-4 text-sm text-white outline-none transition focus:border-[#C8956C]/50"
                    />
                  </div>

                </div>

                {/* ADDRESS */}

                <div>
                  <label
                    htmlFor="address"
                    className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500"
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
                    className="w-full border border-white/10 bg-[#0D0D0D] px-4 py-4 text-sm text-white outline-none transition focus:border-[#C8956C]/50"
                  />
                </div>

                {/* CITY / STATE / PINCODE */}

                <div className="grid gap-8 md:grid-cols-3">

                  <div>
                    <label
                      htmlFor="city"
                      className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500"
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
                      className="w-full border border-white/10 bg-[#0D0D0D] px-4 py-4 text-sm text-white outline-none transition focus:border-[#C8956C]/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="state"
                      className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500"
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
                      className="w-full border border-white/10 bg-[#0D0D0D] px-4 py-4 text-sm text-white outline-none transition focus:border-[#C8956C]/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="pincode"
                      className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500"
                    >
                      PIN CODE
                    </label>

                    <input
                      id="pincode"
                      name="pincode"
                      inputMode="numeric"
                      value={form.pincode}
                      onChange={handleChange}
                      required
                      placeholder="248001"
                      className="w-full border border-white/10 bg-[#0D0D0D] px-4 py-4 text-sm text-white outline-none transition focus:border-[#C8956C]/50"
                    />
                  </div>

                </div>

                {/* PAYMENT */}

                <div className="border-t border-white/10 pt-10">

                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8956C]">
                    PAYMENT
                  </p>

                  <div className="mt-6 border border-[#C8956C]/40 bg-[#C8956C]/5 p-5">

                    <p className="text-sm font-semibold text-white">
                      Test Checkout
                    </p>

                    <p className="mt-2 text-xs leading-6 text-zinc-500">
                      No real payment will be processed. This is
                      currently a testing version of the CARSAFE
                      checkout.
                    </p>

                  </div>

                </div>

                <button
                  type="submit"
                  className="flex h-14 w-full items-center justify-center bg-[#C8956C] text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-[#D7A77D]"
                >
                  PLACE TEST ORDER
                </button>

              </form>

            </div>

            {/* ORDER SUMMARY */}

            <aside className="h-fit border border-white/10 bg-[#0D0D0D] p-7 lg:p-8">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8956C]">
                ORDER SUMMARY
              </p>

              <div className="mt-8 space-y-6">

                {items.map((item) => (

                  <div
                    key={item.id}
                    className="flex justify-between gap-5 border-b border-white/[0.06] pb-5"
                  >

                    <div>

                      <p className="text-sm font-semibold uppercase italic text-white">
                        {item.name}
                      </p>

                      <p className="mt-2 text-xs text-zinc-600">
                        Qty: {item.quantity}
                      </p>

                    </div>

                    <p className="text-sm text-white">
                      ₹
                      {(
                        Number(
                          item.price.replace(/[₹,\s]/g, "")
                        ) * item.quantity
                      ).toLocaleString("en-IN")}
                    </p>

                  </div>

                ))}

              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-7">

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  TOTAL
                </span>

                <span className="text-2xl font-semibold">
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