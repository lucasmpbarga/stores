import { ReactElement, ReactNode } from "react";
import { CartProvider } from "./cart-context";

interface StoreProviderProps {
  children: ReactElement | ReactElement[] | ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => (
  <CartProvider>{children}</CartProvider>
);
