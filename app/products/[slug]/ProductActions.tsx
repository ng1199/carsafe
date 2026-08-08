"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart/CartContext";
import { products } from "@/lib/constants/site";

interface ProductActionsProps {
  productName: string;
}

export default function ProductActions({
  productName,
}: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.name === productName
  );

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const handleAddToCart = () => {
    if (!product) return;

    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      },
      quantity
    );

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="mt-8">

      {/* QUANTITY */}

      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-600">
        QUANTITY
      </p>

      <div className="flex h-12 w-36 items-center justify-between border border-white/10">

        <button
          type="button"
          onClick={decreaseQuantity}
          className="flex h-full w-12 items-center justify-center text-zinc-500 transition hover:text-white"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>

        <span className="text-sm text-white">
          {quantity}
        </span>

        <button
          type="button"
          onClick={increaseQuantity}
          className="flex h-full w-12 items-center justify-center text-zinc-500 transition hover:text-white"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>

      </div>

      {/* ADD TO CART */}

      <button
        type="button"
        onClick={handleAddToCart}
        className="mt-8 flex h-14 w-full items-center justify-center gap-3 bg-[#C8956C] text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-[#D7A77D]"
      >
        <ShoppingBag size={17} />

        {added ? "ADDED TO CART" : "ADD TO CART"}
      </button>

      {/* BUY NOW */}

      <button
        type="button"
        className="mt-3 flex h-14 w-full items-center justify-center border border-white/15 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white hover:text-black"
      >
        BUY NOW
      </button>

    </div>
  );
}