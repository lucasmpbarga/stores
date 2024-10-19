"use client";
import { useCartContext } from "@/store/cart-context";
import { useEffect, useRef, useState } from "react";

const ItemsList = () => {
  const { items } = useCartContext();
  const [itemsListRenders, setItemsListRenders] = useState(0);

  useEffect(() => {
    setItemsListRenders((prev) => prev + 1);
  }, [items]);

  return (
    <div>
      <h1>Cart</h1>
      <p>Items in cart: {items.length}</p>
      <p>Items list renders: {itemsListRenders}</p>
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
