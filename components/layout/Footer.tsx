import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/constants/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Label } from "@/components/ui/Label";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-void">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <FadeIn>
          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-20">
            <div className="lg:col-span-2">
              <p className="text-heading text-white">{siteConfig.name}</p>
              <p className="text-body mt-8 text-mist">{siteConfig.description}</p>
            </div>

            <div>
              <Label className="mb-6 text-mist">Navigation</Label>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-label text-silver transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Label className="mb-6 text-mist">Contact</Label>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-body text-silver transition-colors duration-300 hover:text-white"
                    style={{ maxWidth: "none" }}
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="text-body text-silver transition-colors duration-300 hover:text-white"
                    style={{ maxWidth: "none" }}
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <p
                    className="text-body text-silver"
                    style={{ maxWidth: "none" }}
                  >
                    {siteConfig.address}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-white/[0.06] pt-10 md:flex-row md:items-center">
            <p className="text-label text-mist">
              &copy; {year} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                href="#"
                className="text-label text-mist transition-colors duration-300 hover:text-white"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-label text-mist transition-colors duration-300 hover:text-white"
              >
                Terms
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
