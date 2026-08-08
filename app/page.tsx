import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/sections/Hero";
import { PremiumServices as Collections } from "@/components/sections/Collections";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { WhyAutoDone as WhyCarsafe } from "@/components/sections/WhyCarsafe";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* Product Collections */}
        <Collections />

        {/* Best Sellers */}
        <FeaturedProducts />

        {/* Why CARSAFE */}
        <WhyCarsafe />

        {/* Gallery */}
        <Gallery />

        {/* Reviews */}
        <Testimonials />

        {/* FAQ */}
        <FAQ />

        {/* Contact */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}