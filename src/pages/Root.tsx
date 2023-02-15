import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { CartProvider } from "../contexts/CartContext";

export function Root() {
  return (
    <>
      <CartProvider>
        <Header />

        <Outlet />
      </CartProvider>
    </>
  );
}
