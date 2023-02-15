import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { useCart } from "../hooks/useCart";

export function Header() {
  const { cartItems } = useCart();

  return (
    <header className="flex items-center justify-between w-full max-w-screen-xl mx-auto p-4 lg:py-8 xl:px-0">
      <Link to="/">
        <img
          src={logo}
          alt="Logo Coffe Delivery"
          className="w-16 md:w-[85px]"
        />
      </Link>

      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1 p-2 rounded-md text-sm text-purple-700 bg-purple-100">
          <MapPin size={22} weight="fill" className="text-purple-400" />
          Manaus, AM
        </span>

        <Link
          to="/cart"
          type="button"
          className="relative p-2 rounded-md bg-yellow-100 text-yellow-700"
        >
          <ShoppingCart size={22} weight="fill" />

          {cartItems?.length > 0 && (
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs text-white bg-yellow-700 ">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
