import { create } from "zustand";

interface CartItem {
  name: string;
  price: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
  addItem: (item: CartItem) => void;
  addDonate: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  totalPrice: 0,
  addItem: (item: CartItem) =>
    set((state: CartState) => ({
      items: [...state.items, item],
      totalPrice: state.totalPrice + item.price,
    })),
  addDonate: () =>
    set((state: CartState) => ({
      totalPrice: state.totalPrice + 10,
    })),
}));
