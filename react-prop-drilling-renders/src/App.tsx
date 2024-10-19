"use client";
import { useState } from "react";
import { Cart, Item } from "./component/cart";
import { DonateButton } from "./component/donation-button";
import { ProductButton } from "./component/product-button";

export default function App() {
  const [cart, setCart] = useState({
    items: [] as Item[],
    price: 0,
  });

  const handleClickAddToCart = (product: Item) => {
    setCart({
      items: [...cart.items, product],
      price: cart.price + product.price,
    });
  };

  const handleClickAddDonation = () => {
    setCart({
      ...cart,
      price: cart.price + 10,
    });
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
      <Cart cart={cart} />
    </div>
  );
}
