import React, { createContext, useState, useContext, ReactNode } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
};

type CartContextType = {
  items: CartItem[];
  price: number;
  setItems: (items: CartItem[]) => void;
  setPrice: (price: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [price, setPrice] = useState<number>(0);

  return (
    <CartContext.Provider value={{ items, price, setItems, setPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
