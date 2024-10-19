"use client";

import { Cart } from "./component/cart";
import { DonateButton } from "./component/donation-button";
import { ProductButton } from "./component/product-button";
import { StoreProvider } from "./store/_store";
import { useCartContext } from "./store/cart-context";

export default function App() {
  const { addItem } = useCartContext();

  const handleProductClick = (label: string, price: number) => {
    addItem({ name: label, price });
  };

  return (
    <div>
      <StoreProvider>
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
      </StoreProvider>
    </div>
  );
}
