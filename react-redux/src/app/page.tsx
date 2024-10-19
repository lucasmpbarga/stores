"use client";
import { Cart } from "@/component/cart";
import { DonateButton } from "@/component/donation-button";
import { ProductButton } from "@/component/product-button";
import { addItem, store } from "@/store/store";

export default function Home() {
  const handleProductClick = (label: string, price: number) => {
    store.dispatch(addItem({ name: label, price }));
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
