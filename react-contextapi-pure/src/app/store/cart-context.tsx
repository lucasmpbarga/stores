"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type Item = {
  name: string;
  price: number;
};

export interface CartContextState {
  items: Item[];
  addItem: (item: Item) => void;
  totalPrice: number;
  addDonation: (donation: number) => void;
}

const TabsContext = createContext({});

interface WrapperProps {
  children: ReactNode | ReactNode[];
}

export function CartContextWrapper({ children }: WrapperProps) {
  const [items, setItems] = useState<Item[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (item: Item) => {
    setItems([...items, item]);

    setTotalPrice((prev) => prev + item.price);
  };

  const addDonation = (donation: number) => {
    setTotalPrice((prev) => prev + donation);
  };

  const state: CartContextState = {
    items,
    addItem,
    totalPrice,
    addDonation,
  };

  return <TabsContext.Provider value={state}>{children}</TabsContext.Provider>;
}

export const useCartContext = () => {
  return useContext(TabsContext) as CartContextState;
};
