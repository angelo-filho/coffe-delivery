import { Minus, Plus } from "phosphor-react";

export function ItemCount() {
  return (
    <div className="px-2 w-fit h-full  flex items-center gap-2 bg-base-300 rounded-md text-base">
      <button
        type="button"
        className="text-purple-400 transition-colors hover:text-purple-700"
      >
        <Minus size={14} />
      </button>
      1
      <button
        type="button"
        className="text-purple-400 transition-colors hover:text-purple-700"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
