import { ReactElement, ReactNode } from "react";
import { CartContextWrapper } from "./cart-context";

interface ContextWrapperProps {
  children: ReactElement | ReactElement[];
}

export const ContextWrapper = ({ children }: { children: ReactNode }) => (
  <CartContextWrapper>{children}</CartContextWrapper>
);
