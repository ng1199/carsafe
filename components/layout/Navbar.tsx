"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { navLinks } from "@/lib/constants/site";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cart/CartContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-black/70 backdrop-blur-2xl"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* LOGO */}

          <Link
            href="/"
            className="text-xl font-black uppercase tracking-[0.35em] text-white transition-opacity hover:opacity-80"
          >
            CARSAFE
          </Link>

          {/* DESKTOP NAVIGATION */}

          <div className="hidden items-center gap-10 lg:gap-14 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400 transition-all duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* DESKTOP ACTIONS */}

          <div className="hidden items-center gap-5 md:flex">

            {/* CART */}

            <Link
              href="/cart"
              className="relative flex h-10 w-10 items-center justify-center text-zinc-400 transition-colors hover:text-white"
              aria-label={`Cart with ${totalItems} items`}
            >
              <ShoppingBag size={19} />

              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C8956C] px-1 text-[9px] font-bold text-black">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            {/* SHOP BUTTON */}

            <Button href="#products" size="sm">
              SHOP →
            </Button>

          </div>

          {/* MOBILE ACTIONS */}

          <div className="flex items-center gap-2 md:hidden">

            {/* MOBILE CART */}

            <Link
              href="/cart"
              className="relative flex h-10 w-10 items-center justify-center text-white"
              aria-label={`Cart with ${totalItems} items`}
            >
              <ShoppingBag size={20} />

              {totalItems > 0 && (
                <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#C8956C] px-1 text-[8px] font-bold text-black">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            {/* MOBILE MENU */}

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center text-white"
              aria-label={
                mobileOpen ? "Close menu" : "Open menu"
              }
            >
              {mobileOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>

          </div>

        </nav>
      </header>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex h-full flex-col items-start justify-center gap-8 overflow-y-auto px-6 py-24 sm:gap-10 sm:px-10">

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.4,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() =>
                      setMobileOpen(false)
                    }
                    className="text-4xl font-black uppercase italic leading-none text-white sm:text-5xl"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* MOBILE CART */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.4,
                }}
              >
                <Link
                  href="/cart"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="flex items-center gap-3 text-2xl font-black uppercase italic text-white"
                >
                  <ShoppingBag size={24} />

                  CART

                  {totalItems > 0 && (
                    <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#C8956C] px-2 text-xs font-bold text-black">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </motion.div>

              {/* SHOP BUTTON */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.45,
                  duration: 0.4,
                }}
              >
                <Button
                  href="#products"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                >
                  SHOP →
                </Button>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}