import { Minus, Plus } from "phosphor-react";

export function ItemCount() {
  return (
    <div className="p-2 w-fit h-full flex items-center gap-2 bg-base-300 rounded-md">
      <button type="button" className="text-purple-400">
        <Minus />
      </button>
      1
      <button type="button" className="text-purple-400">
        <Plus />
      </button>
    </div>
  );
}
