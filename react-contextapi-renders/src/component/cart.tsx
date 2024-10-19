"use client";

import { useRef } from "react";
import { useCartContext } from "../store/cart-context";

const ItemsList = () => {
  const { items } = useCartContext();

  const itemsListRenders = useRef(0);
  itemsListRenders.current += 1;

  return (
    <div>
      <h1>Cart</h1>
      <p>Items in cart: {items.length}</p>
      <p>Items list renders: {itemsListRenders.current}</p>
    </div>
  );
};

const TotalPrice = () => {
  const { totalPrice } = useCartContext();

  const totalPriceRenders = useRef(0);
  totalPriceRenders.current += 1;

  return (
    <div>
      <h1>Total Price</h1>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Price renders: {totalPriceRenders.current}</p>
    </div>
  );
};

export const Cart = () => {
  return (
    <div>
      <ItemsList />
      <TotalPrice />
    </div>
  );
};
