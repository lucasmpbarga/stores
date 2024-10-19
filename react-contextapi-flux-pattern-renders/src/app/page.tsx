"use client";
import { Cart } from "@/component/cart";
import { DonateButton } from "@/component/donation-button";
import { ProductButton } from "@/component/product-button";
import { addItem } from "@/store/cart-store/cart.action";
import { useStore } from "@/store/store";

export default function Home() {
  const { dispatch } = useStore();

  const handleProductClick = (label: string, price: number) => {
    dispatch(addItem(10));
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
