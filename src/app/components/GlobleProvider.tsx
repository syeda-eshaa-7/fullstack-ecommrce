import { ReactNode } from "react";
import { CartProvider } from "../context/CartContaxt";

interface GlobalProviderProps {
  children: ReactNode;
}

export function GlobalProvider({ children }: GlobalProviderProps) {
  return <CartProvider>{children}</CartProvider>;
}
