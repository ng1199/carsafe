import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/constants/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Label } from "@/components/ui/Label";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#050505] px-6 py-20 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">

        <FadeIn>

          {/* Main Footer */}

          <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">

            {/* Brand */}

            <div className="lg:col-span-5">

              <Link
                href="/"
                className="inline-block text-2xl font-black uppercase tracking-[0.3em] text-white transition-opacity hover:opacity-70"
              >
                CARSAFE
              </Link>

              <p className="mt-7 max-w-md text-sm leading-7 text-zinc-500">
                Professional automotive care products engineered for
                enthusiasts who expect better from every detail.
              </p>

              <Link
                href="#products"
                className="mt-8 inline-flex items-center gap-3 border border-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                SHOP PRODUCTS
                <ArrowUpRight size={15} />
              </Link>

            </div>

            {/* Products */}

            <div className="lg:col-span-2">

              <Label className="mb-6 block text-zinc-500">
                PRODUCTS
              </Label>

              <ul className="space-y-4">

                <li>
                  <Link
                    href="#products"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    Ceramic Spray
                  </Link>
                </li>

                <li>
                  <Link
                    href="#products"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    Rain Repellent
                  </Link>
                </li>

                <li>
                  <Link
                    href="#products"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    Tyre Shine
                  </Link>
                </li>

                <li>
                  <Link
                    href="#collections"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    All Collections
                  </Link>
                </li>

              </ul>

            </div>

            {/* Explore */}

            <div className="lg:col-span-2">

              <Label className="mb-6 block text-zinc-500">
                EXPLORE
              </Label>

              <ul className="space-y-4">

                <li>
                  <Link
                    href="#about"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    About CARSAFE
                  </Link>
                </li>

                <li>
                  <Link
                    href="#reviews"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    Reviews
                  </Link>
                </li>

                <li>
                  <Link
                    href="#faq"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    FAQ
                  </Link>
                </li>

                <li>
                  <Link
                    href="#contact"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    Contact
                  </Link>
                </li>

              </ul>

            </div>

            {/* Contact */}

            <div className="lg:col-span-3">

              <Label className="mb-6 block text-zinc-500">
                CONTACT
              </Label>

              <ul className="space-y-4">

                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {siteConfig.email}
                  </a>
                </li>

                <li>
                  <span className="text-sm text-zinc-500">
                    WhatsApp — Coming soon
                  </span>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    Customer Support
                  </a>
                </li>

              </ul>

            </div>

          </div>

          {/* Bottom */}

          <div className="mt-20 flex flex-col gap-6 border-t border-white/[0.06] pt-8 md:mt-28 md:flex-row md:items-center md:justify-between">

            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-600">
              © {year} {siteConfig.name}. ALL RIGHTS RESERVED.
            </p>

            <div className="flex flex-wrap gap-6">

              <Link
                href="#"
                className="text-[11px] uppercase tracking-[0.18em] text-zinc-600 transition-colors hover:text-white"
              >
                Privacy
              </Link>

              <Link
                href="#"
                className="text-[11px] uppercase tracking-[0.18em] text-zinc-600 transition-colors hover:text-white"
              >
                Terms
              </Link>

              <Link
                href="#"
                className="text-[11px] uppercase tracking-[0.18em] text-zinc-600 transition-colors hover:text-white"
              >
                Shipping
              </Link>

              <Link
                href="#"
                className="text-[11px] uppercase tracking-[0.18em] text-zinc-600 transition-colors hover:text-white"
              >
                Returns
              </Link>

            </div>

          </div>

        </FadeIn>

      </div>
    </footer>
  );
}