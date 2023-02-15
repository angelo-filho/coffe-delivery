import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { useCart } from "../hooks/useCart";

interface ItemCountProps {
  quantity: number;
  onSubtract: () => void;
  onAdd: () => void;
}

export function ItemCount({ quantity, onSubtract, onAdd }: ItemCountProps) {
  return (
    <div className="px-2 w-fit h-full  flex items-center gap-2 bg-base-300 rounded-md text-base">
      <button
        type="button"
        className="text-purple-400 transition-colors hover:text-purple-700"
        onClick={onSubtract}
      >
        <Minus size={14} />
      </button>
      {quantity}
      <button
        type="button"
        className="text-purple-400 transition-colors hover:text-purple-700"
        onClick={onAdd}
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
