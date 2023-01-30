import { MapPin, ShoppingCart } from "phosphor-react";
import logo from "../assets/Logo.svg";

export function Header() {
  const cartHasItem = true;

  return (
    <header className="flex items-center justify-between w-full max-w-screen-xl mx-auto p-4">
      <img src={logo} alt="Logo Coffe Delivery" className="w-16 md:w-[85px]" />

      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1 p-2 rounded-md text-sm text-purple-700 bg-purple-100">
          <MapPin size={22} weight="fill" className="text-purple-400" />
          Porto Alegre, RS
        </span>

        <button
          type="button"
          className="relative p-2 rounded-md bg-yellow-100 text-yellow-700"
        >
          <ShoppingCart size={22} weight="fill" />

          {cartHasItem && (
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs text-white bg-yellow-700 ">
              3
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
