"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const products = [
  {
    id: 1,
    title: "CERAMIC SPRAY",
    subtitle: "Exterior Care",
    description:
      "Hydrophobic protection with an ultra-gloss finish engineered for enthusiasts.",
    image: "/images/products/ceramic.jpg",
  },
  {
    id: 2,
    title: "RAIN REPELLENT",
    subtitle: "Glass Care",
    description:
      "Crystal clear visibility with long-lasting water repellency in every drive.",
    image: "/images/products/rain.jpg",
  },
  {
    id: 3,
    title: "TYRE SHINE",
    subtitle: "Wheel Care",
    description:
      "Deep satin finish that keeps tyres looking fresh without greasy residue.",
    image: "/images/products/tyre.jpg",
  },
];

export function FeaturedProducts() {
  return (
    <section
      id="products"
      className="bg-black py-32 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[0.35em] text-[#C8956C] text-sm">
          BEST SELLERS
        </p>

        <h2 className="text-white text-5xl md:text-7xl font-black italic mt-5">
          Featured Products
        </h2>

        <div className="mt-24 space-y-36">

          {products.map((product, index) => (

            <FadeIn key={product.id}>

              <div
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >

                <div>

                  <p className="uppercase tracking-[0.3em] text-[#C8956C] text-xs mb-5">
                    {product.subtitle}
                  </p>

                  <h3 className="text-white text-5xl md:text-7xl font-black italic leading-none">
                    {product.title}
                  </h3>

                  <p className="text-gray-400 mt-8 max-w-lg leading-8">
                    {product.description}
                  </p>

                  <button className="mt-12 flex items-center gap-3 border border-white px-8 py-4 uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">

                    SHOP NOW

                    <ArrowRight size={18} />

                  </button>

                </div>

                <div className="relative h-[650px] rounded-xl overflow-hidden">

                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />

                </div>

              </div>

            </FadeIn>

          ))}

        </div>

      </div>
    </section>
  );
}