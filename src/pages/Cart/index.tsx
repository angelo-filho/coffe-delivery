import { BuyInfos } from "./components/BuyInfos";
import { CartInfos } from "./components/CartInfos";

export function Cart() {
  return (
    <main className="px-4 mt-10">
      <BuyInfos />

      <CartInfos />
    </main>
  );
}
