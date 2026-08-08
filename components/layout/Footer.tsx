import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/constants/site";
import { FadeIn } from "@/components/motion/FadeIn";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] px-5 pb-8 pt-14 sm:px-6 sm:pb-10 sm:pt-20 lg:px-8 lg:pt-28">
      <div className="mx-auto max-w-7xl">

        <FadeIn>

          {/* MAIN */}

          <div className="border-b border-white/[0.06] pb-10 sm:pb-14">

            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">

              {/* BRAND */}

              <div>

                <Link
                  href="/"
                  className="inline-block text-xl font-black uppercase tracking-[0.3em] text-white transition-opacity hover:opacity-70 sm:text-2xl"
                >
                  CARSAFE
                </Link>

                <p className="mt-4 max-w-sm text-xs leading-6 text-zinc-500 sm:text-sm sm:leading-7">
                  Professional automotive care products engineered for
                  enthusiasts who expect better from every detail.
                </p>

              </div>

              {/* SHOP */}

              <Link
                href="#products"
                className="inline-flex w-fit items-center gap-2 border border-white/10 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                SHOP PRODUCTS
                <ArrowUpRight size={13} />
              </Link>

            </div>

          </div>

          {/* LINKS */}

          <div className="grid grid-cols-2 gap-8 border-b border-white/[0.06] py-8 sm:grid-cols-4 sm:py-10">

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-zinc-600">
                PRODUCTS
              </p>

              <div className="mt-4 space-y-2.5">

                <Link
                  href="#products"
                  className="block text-xs text-zinc-400 hover:text-white"
                >
                  Ceramic Spray
                </Link>

                <Link
                  href="#products"
                  className="block text-xs text-zinc-400 hover:text-white"
                >
                  Rain Repellent
                </Link>

                <Link
                  href="#products"
                  className="block text-xs text-zinc-400 hover:text-white"
                >
                  Tyre Shine
                </Link>

              </div>
            </div>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-zinc-600">
                EXPLORE
              </p>

              <div className="mt-4 space-y-2.5">

                <Link
                  href="#collections"
                  className="block text-xs text-zinc-400 hover:text-white"
                >
                  Collections
                </Link>

                <Link
                  href="#work"
                  className="block text-xs text-zinc-400 hover:text-white"
                >
                  Our Work
                </Link>

                <Link
                  href="#reviews"
                  className="block text-xs text-zinc-400 hover:text-white"
                >
                  Reviews
                </Link>

              </div>
            </div>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-zinc-600">
                SUPPORT
              </p>

              <div className="mt-4 space-y-2.5">

                <Link
                  href="#faq"
                  className="block text-xs text-zinc-400 hover:text-white"
                >
                  FAQ
                </Link>

                <Link
                  href="#contact"
                  className="block text-xs text-zinc-400 hover:text-white"
                >
                  Contact
                </Link>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block break-all text-xs text-zinc-400 hover:text-white"
                >
                  Email
                </a>

              </div>
            </div>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-zinc-600">
                SOCIAL
              </p>

              <div className="mt-4 space-y-2.5">

                <span className="block text-xs text-zinc-500">
                  Instagram
                </span>

                <span className="block text-xs text-zinc-500">
                  WhatsApp — Soon
                </span>

              </div>
            </div>

          </div>

          {/* BOTTOM */}

          <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-600 sm:text-[10px]">
              © {year} {siteConfig.name}. ALL RIGHTS RESERVED.
            </p>

            <div className="flex gap-5">

              <Link
                href="#"
                className="text-[9px] uppercase tracking-[0.15em] text-zinc-600 hover:text-white sm:text-[10px]"
              >
                Privacy
              </Link>

              <Link
                href="#"
                className="text-[9px] uppercase tracking-[0.15em] text-zinc-600 hover:text-white sm:text-[10px]"
              >
                Terms
              </Link>

              <Link
                href="#"
                className="text-[9px] uppercase tracking-[0.15em] text-zinc-600 hover:text-white sm:text-[10px]"
              >
                Shipping
              </Link>

            </div>

          </div>

        </FadeIn>

      </div>
    </footer>
  );
}