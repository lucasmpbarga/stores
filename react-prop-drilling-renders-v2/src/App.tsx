"use client";
import { useState } from "react";
import { Cart, Item } from "./component/cart";
import { DonateButton } from "./component/donation-button";
import { ProductButton } from "./component/product-button";

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [price, setPrice] = useState(0);

  const handleClickAddToCart = (product: Item) => {
    setItems([...items, product]);
  };

  const handleClickAddDonation = () => {
    setPrice(price + 10);
  };

  return (
    <div>
      <h1>ContextAPI Example</h1>
      <ProductButton
        label="Prodcut 1"
        price={10}
        onClick={handleClickAddToCart}
      />
      <ProductButton
        label="Prodcut 2"
        price={20}
        onClick={handleClickAddToCart}
      />
      <DonateButton onClick={handleClickAddDonation} />
      <Cart items={items} price={price} />
    </div>
  );
}
