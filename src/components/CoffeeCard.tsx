import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { ItemCount } from "./ItemCount";

interface Coffee {
  name: string;
  description: string;
  tags: string[];
  imgURL: string;
}

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <div className="w-[256px] px-6 pb-5 flex flex-col items-center bg-base-100 rounded-tl-md rounded-br-md rounded-tr-[64px] rounded-bl-[64px]">
      <img
        loading="lazy"
        src={coffee.imgURL}
        alt={coffee.name}
        className="w-[120px] -mt-5"
      />

      <div className="mt-3 flex items-center gap-1">
        {coffee.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 uppercase text-xs font-bold rounded-full bg-yellow-100 text-yellow-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <strong className="mt-4 font-cursive font-bold text-xl text-base-700">
        {coffee.name}
      </strong>
      <p className="mt-2 text-sm text-center text-base-500">
        {coffee.description}
      </p>

      <div className="w-full mt-8 flex items-center justify-between">
        <strong className="font-cursive font-extrabold text-2xl text-base-700">
          <span className="font-sans font-normal text-sm">R$</span> 9,90
        </strong>

        <div className="flex items-center gap-2 h-[2.375rem]">
          <ItemCount />

          <button className="p-2 h-full bg-purple-700 text-base-300 rounded-md">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
