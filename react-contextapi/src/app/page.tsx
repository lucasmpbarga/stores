"use client";
import { Cart } from "@/component/cart";
import { DonateButton } from "@/component/donation-button";
import { ProductButton } from "@/component/product-button";
import { useCartContext } from "./store/cart-context";

export default function Home() {
  const { addItem } = useCartContext();

  const handleProductClick = (label: string, price: number) => {
    addItem({ name: label, price });
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
