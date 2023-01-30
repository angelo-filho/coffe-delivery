import coffee from "../../../assets/hero_coffee.png";

import { IconProps, ShoppingCart } from "phosphor-react";
import { cloneElement } from "react";

const items = [
  {
    icon: <ShoppingCart />,
    bgColor: "bg-yellow-700",
    text: "Compra simples e segura",
  },
  {
    icon: <ShoppingCart />,
    bgColor: "bg-base-600",
    text: "Embalagem mantém o café intacto",
  },
  {
    icon: <ShoppingCart />,
    bgColor: "bg-yellow-400",
    text: "Entrega rápida e rastreada",
  },
  {
    icon: <ShoppingCart />,
    bgColor: "bg-purple-400",
    text: "O café chega fresquinho até você",
  },
];

export function Hero() {
  return (
    <section className="bg-hero-background bg-no-repeat xl:bg-repeat xl:bg-contain">
      <div className="w-full max-w-screen-xl mx-auto flex flex-wrap-reverse items-center justify-center xl:justify-between px-4 py-8 xl:py-24">
        <div className="mt-4 w-full max-w-[588px]">
          <h1 className="mb-4 font-cursive font-extrabold text-center text-4xl text-base-800 lg:5xl xl:text-left">
            Encontre o café perfeito para qualquer hora do dia
          </h1>

          <p className="mb-10 text-xl text-center text-base-700 lg:mb-16  xl:text-left">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 text-base-600"
              >
                <span
                  className={`p-2 rounded-full text-background ${item.bgColor}`}
                >
                  {cloneElement<IconProps>(item.icon, { weight: "fill" })}
                </span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        <img src={coffee} alt="Copo de café" className="w-full max-w-[476px]" />
      </div>
    </section>
  );
}
