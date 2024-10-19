import { ReactElement, ReactNode } from "react";
import { CartContext } from "./cart-context";

interface StoreProviderProps {
  children: ReactElement | ReactElement[] | ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => (
  <CartContext>{children}</CartContext>
);
