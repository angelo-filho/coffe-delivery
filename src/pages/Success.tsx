import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Success() {
  return (
    <main className="max-w-screen-xl mx-auto mt-20 px-4 pb-10 xl:px-0 flex flex-col xl:flex-row-reverse items-center xl:justify-between gap-10">
      <img
        src="/success-art.svg"
        alt="Man in a motorcycle"
        className="w-full max-w-[492px] mt-auto"
      />

      <div className="">
        <h2 className="font-cursive font-extrabold text-3xl xl:text-[2rem] text-yellow-700">
          Uhu! Pedido confirmado
        </h2>

        <p className="text-lg text-base-700 leading-normal">
          Agora é só aguardar que logo o café chegará até você
        </p>

        <div className="mt-5 p-6 lg:p-10 flex flex-col gap-8 border border-yellow-400 rounded-tl-[6px] rounded-tr-[32px] rounded-br-[6px] rounded-bl-[32px]">
          <div className="flex items-center gap-3 leading-snug">
            <span className="h-fit p-2 bg-purple-400 rounded-full">
              <MapPin weight="fill" className="text-2xl text-base-100" />
            </span>

            <span className="text-base-600">
              Entrega em{" "}
              <span className="font-bold ">
                Rua João Daniel Martinelli, 102
              </span>{" "}
              <br /> Farrapos - Porto Alegre, RS
            </span>
          </div>

          <div className="flex items-center gap-3 leading-snug">
            <span className="h-fit p-2 bg-yellow-400 rounded-full">
              <Timer weight="fill" className="text-2xl text-base-100" />
            </span>

            <span className="text-base-600">
              Previsão de entrega
              <br />
              <span className="font-bold ">20 min - 30 min</span> <br />{" "}
            </span>
          </div>

          <div className="flex items-center gap-3 leading-snug">
            <span className="h-fit p-2 bg-yellow-700 rounded-full">
              <CurrencyDollar
                weight="fill"
                className="text-2xl text-base-100"
              />
            </span>

            <span className="text-base-600">
              Previsão de entrega
              <br />
              <span className="font-bold ">20 min - 30 min</span> <br />{" "}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
