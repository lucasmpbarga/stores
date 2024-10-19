"use client";
import { useRef } from "react";

type ItemsListProps = {
  items: Item[];
};

const ItemsList = ({ items }: ItemsListProps) => {
  const itemsListRenders = useRef(0);
  itemsListRenders.current += 1;

  return (
    <div>
      <p>Items in cart: {items.length}</p>
      <p>Items list renders: {itemsListRenders.current}</p>
    </div>
  );
};

type TotalPriceProps = {
  price: number;
};

const TotalPrice = ({ price }: TotalPriceProps) => {
  const totalPriceRenders = useRef(0);
  totalPriceRenders.current += 1;

  return (
    <div>
      <h1>Total Price</h1>
      <p>Total Price: ${price}</p>
      <p>Total Price renders: {totalPriceRenders.current}</p>
    </div>
  );
};

export type Item = {
  label: string;
  price: number;
};

type CartProps = {
  cart: {
    items: Item[];
    price: number;
  };
};

export const Cart = ({ cart }: CartProps) => {
  return (
    <div>
      <h1>Cart</h1>
      <ItemsList items={cart.items} />
      <TotalPrice price={cart.price} />
    </div>
  );
};
