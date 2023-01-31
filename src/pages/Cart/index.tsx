import { BuyInfos } from "./components/BuyInfos";
import { CartInfos } from "./components/CartInfos";

export function Cart() {
  return (
    <main className="max-w-screen-xl mt-10 mb-16 mx-auto px-4 grid gap-9 xl:grid-cols-5 xl:px-0">
      <BuyInfos />

      <CartInfos />
    </main>
  );
}
