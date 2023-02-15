import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { useCart } from "../hooks/useCart";

interface ItemCountProps {
  quantity: number;
  itemName: string;
  handleAddItemToCart: (quantity: number, itemName: string) => void;
}

export function ItemCount({
  quantity,
  itemName,
  handleAddItemToCart,
}: ItemCountProps) {
  return (
    <div className="px-2 w-fit h-full  flex items-center gap-2 bg-base-300 rounded-md text-base">
      <button
        type="button"
        className="text-purple-400 transition-colors hover:text-purple-700"
        onClick={() => handleAddItemToCart(quantity - 1, itemName)}
      >
        <Minus size={14} />
      </button>
      {quantity}
      <button
        type="button"
        className="text-purple-400 transition-colors hover:text-purple-700"
        onClick={() => handleAddItemToCart(quantity + 1, itemName)}
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
