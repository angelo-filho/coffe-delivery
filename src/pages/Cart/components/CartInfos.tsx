import { Trash } from "phosphor-react";
import { ItemCount } from "../../../components/ItemCount";
import { useCart } from "../../../hooks/useCart";
import { currencyFormat } from "../../../utils/currencyFormat";
import { coffeesList } from "../../Home/data/coffeesList";
import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

export function CartInfos() {
  const {
    cartItems,
    handleAddItemToCart,
    handleRemoveItemFromCart,
    handleMakeCartEmpty,
  } = useCart();

  const navigate = useNavigate();

  const itemsTotalPrice = cartItems.reduce((prev, item) => {
    const coffee = coffeesList.find((coffee) => coffee.name === item.itemName);

    return prev + coffee.price * item.quantity;
  }, 0);

  const deliveryPrice = itemsTotalPrice ? 3.5 : 0;

  const totalToPay = itemsTotalPrice + deliveryPrice;

  function handleConfirmOrder() {
    navigate("/success?nome=angelo&sobrenome=filho");
  }

  return (
    <section className="mt-10 xl:mt-0 xl:col-span-2">
      <h3 className="font-cursive font-bold text-lg text-base-700">
        Cafés selecionados
      </h3>

      <div className="mt-[15px] p-4 bg-base-100 rounded-md rounded-tr-[44px] rounded-bl-[44px] md:p-10">
        <ul>
          {cartItems.map((item) => {
            const coffee = coffeesList.find(
              (coffee) => coffee.name === item.itemName
            );

            const totalPrice = coffee.price! * item.quantity;

            return (
              <li
                key={coffee!.name}
                className="flex justify-between py-6 border-b border-b-base-300 first:pt-0"
              >
                <div className="flex gap-5">
                  <img
                    src={coffee!.imgURL}
                    alt={coffee!.name}
                    className="h-16 object-contain hidden sm:inline"
                  />

                  <div className="flex flex-col gap-2">
                    <span>{coffee!.name}</span>

                    <div className="h-8 flex items-center gap-3">
                      <ItemCount
                        quantity={item.quantity}
                        onSubtract={() =>
                          handleAddItemToCart(item.quantity - 1, item.itemName)
                        }
                        onAdd={() =>
                          handleAddItemToCart(item.quantity + 1, item.itemName)
                        }
                      />

                      <button
                        type="button"
                        className="group p-2 flex items-center gap-2 bg-base-300 rounded-md text-xs hover:bg-base-400 transition-colors"
                        onClick={() => handleRemoveItemFromCart(coffee!.name)}
                      >
                        <Trash size={16} className="text-purple-400" />
                        <span>REMOVER</span>
                      </button>
                    </div>
                  </div>
                </div>

                <strong className="text-base-700">
                  {currencyFormat(totalPrice)}
                </strong>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-center justify-between text-base-600">
            <span>Total de itens</span>
            <span>{currencyFormat(itemsTotalPrice)}</span>
          </div>

          <div className="flex items-center justify-between text-base-600">
            <span>Entrega</span>
            <span>{currencyFormat(deliveryPrice)}</span>
          </div>

          <div className="flex items-center justify-between text-xl font-bold text-base-600">
            <strong>Total</strong>
            <strong>{currencyFormat(totalToPay)}</strong>
          </div>
        </div>

        <button
          type="button"
          className="w-full mt-6 py-3 bg-yellow-400 rounded-md text-white transition-colors hover:bg-yellow-700"
          onClick={handleConfirmOrder}
        >
          CONFIRMAR PEDIDO
        </button>
      </div>
    </section>
  );
}
