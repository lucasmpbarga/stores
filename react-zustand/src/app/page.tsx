"use client";

import { Cart } from "@/component/cart";
import { DonateButton } from "@/component/donation-button";
import { ProductButton } from "@/component/product-button";
import { useCartStore } from "@/store/cart-store";

export default function Home() {
  const { addItem, items } = useCartStore();

  const handleProductClick = (label: string, price: number) => {
    const newItem = { name: label, price };

    addItem(newItem);
  };

  return (
    <div>
      <h1>ContextAPI Example</h1>
      <ProductButton
        label="Prodcut 1"
        price={10}
        onClick={handleProductClick}
      />
      <ProductButton
        label="Prodcut 2"
        price={20}
        onClick={handleProductClick}
      />
      <DonateButton />
      <Cart />
    </div>
  );
}
