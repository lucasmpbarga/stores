"use client";
import { Cart } from "./component/cart";
import { DonateButton } from "./component/donation-button";
import { ProductButton } from "./component/product-button";
import { StoreProvider } from "./store/_store";

export default function App() {
  return (
    <StoreProvider>
      <div>
        <h1>ContextAPI Example</h1>
        <ProductButton label="Prodcut 1" price={10} />
        <ProductButton label="Prodcut 2" price={20} />
        <DonateButton />
        <Cart />
      </div>
    </StoreProvider>
  );
}
