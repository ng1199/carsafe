import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { PremiumServices as Collections } from "@/components/sections/Collections";
import { WhyAutoDone as WhyCarsafe } from "@/components/sections/WhyCarsafe";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Collections />

        <FeaturedProducts />

        <WhyCarsafe />

        <Gallery />

        <Testimonials />
      </main>

      <Footer />
    </>
  );
}