import { Trash } from "phosphor-react";
import { ItemCount } from "../../../components/ItemCount";
import { coffeesList } from "../../Home/data/coffeesList";

export function CartInfos() {
  const coffees = coffeesList.slice(0, 3);

  return (
    <section className="mt-10 xl:mt-0 xl:col-span-2">
      <h3 className="font-cursive font-bold text-lg text-base-700">
        Cafés selecionados
      </h3>

      <div className="mt-[15px] p-4 bg-base-100 rounded-md rounded-tr-[44px] rounded-bl-[44px] md:p-10">
        <ul>
          {coffees.map((coffee) => (
            <li
              key={coffee.name}
              className="flex justify-between py-6 border-b border-b-base-300 first:pt-0"
            >
              <div className="flex gap-5">
                <img
                  src={coffee.imgURL}
                  alt="Café Tradicional"
                  className="h-16 object-contain hidden sm:inline"
                />

                <div className="flex flex-col gap-2">
                  <span>{coffee.name}</span>

                  <div className="h-8 flex items-center gap-3">
                    <ItemCount />

                    <button
                      type="button"
                      className="group p-2 flex items-center gap-2 bg-base-300 rounded-md text-xs hover:bg-base-400 transition-colors"
                    >
                      <Trash size={16} className="text-purple-400 " />
                      REMOVER
                    </button>
                  </div>
                </div>
              </div>

              <strong className="text-base-700">R$ 9,90</strong>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-center justify-between text-base-600">
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </div>

          <div className="flex items-center justify-between text-base-600">
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>

          <div className="flex items-center justify-between text-xl font-bold text-base-600">
            <strong>Total</strong>
            <strong>R$ 33,20</strong>
          </div>
        </div>

        <button
          type="button"
          className="w-full mt-6 py-3 bg-yellow-400 rounded-md text-white transition-colors hover:bg-yellow-700"
        >
          CONFIRMAR PEDIDO
        </button>
      </div>
    </section>
  );
}
