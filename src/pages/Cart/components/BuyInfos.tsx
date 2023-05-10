import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";

import * as ToggleGroup from "@radix-ui/react-radio-group";

import { Input } from "./Input";
import { Controller, useFormContext } from "react-hook-form";
import { AddressFormType } from "..";

export function BuyInfos() {
  const { control } = useFormContext<AddressFormType>();

  return (
    <section className="xl:col-span-3">
      <h3 className="font-cursive font-bold text-lg text-base-700">
        Complete seu pedido
      </h3>

      <div className="mt-[15px] p-4 bg-base-100 rounded-md md:p-10">
        <div className="mb-8 flex flex-col gap-2 md:flex-row">
          <MapPinLine size={22} className="text-yellow-700" />

          <div>
            <strong className="font-sans font-normal text-base text-base-700">
              Endereço de Entrega
            </strong>
            <p className="text-sm text-base-600">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </div>

        <form className="grid grid-cols-9 gap-4">
          <Input placeholder="CEP" cols="col-span-9 md:col-span-3" name="cep" />

          <Input
            placeholder="Rua"
            cols="col-span-5 md:col-span-9"
            name="street"
          />

          <Input
            placeholder="Número"
            cols="col-span-4 md:col-span-3"
            name="number"
          />

          <Input
            placeholder="Complemento"
            cols="col-span-9 md:col-span-6"
            optional
            name="complement"
          />

          <Input
            placeholder="Bairro"
            cols="col-span-9 md:col-span-3"
            name="district"
          />

          <Input
            placeholder="Cidade"
            cols="col-span-6 md:col-span-5"
            name="city"
          />

          <Input placeholder="UF" cols="col-span-3 md:col-span-1" name="uf" />
        </form>
      </div>

      <div className="mt-3 p-4 bg-base-100 rounded-md md:p-10">
        <div className="mb-8 flex flex-col gap-2 md:flex-row">
          <CurrencyDollar size={22} className="text-purple-400" />

          <div>
            <strong className="font-sans font-normal text-base text-base-700">
              Pagamento
            </strong>
            <p className="text-sm text-base-600">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>

        <Controller
          control={control}
          name="paymentMethod"
          render={({ field: { value, onChange } }) => {
            return (
              <ToggleGroup.Root
                value={value}
                onValueChange={onChange}
                className="grid md:grid-cols-3 gap-3"
              >
                <ToggleGroup.Item
                  value="cartão de crédito"
                  className="p-4 flex items-center justify-center gap-3 text-xs text-base-600 bg-base-300 border rounded-md transition-colors hover:bg-base-400 data-[state='checked']:bg-purple-100 data-[state='checked']:ring-1 data-[state='checked']:ring-purple-400"
                >
                  <CreditCard size={16} className="text-purple-400" />
                  CARTÃO DE CRÉDITO
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="cartão de débito"
                  className="p-4 flex items-center justify-center gap-3 text-xs text-base-600 bg-base-300 border rounded-md transition-colors hover:bg-base-400 data-[state='checked']:bg-purple-100 data-[state='checked']:ring-1 data-[state='checked']:ring-purple-400"
                >
                  <Bank size={16} className="text-purple-400" />
                  CARTÃO DE DÉBITO
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="dinheiro"
                  className="p-4 flex items-center justify-center gap-3 text-xs text-base-600 bg-base-300 border rounded-md transition-colors hover:bg-base-400 data-[state='checked']:bg-purple-100 data-[state='checked']:ring-1 data-[state='checked']:ring-purple-400"
                >
                  <Money size={16} className="text-purple-400" />
                  DINHEIRO
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            );
          }}
        />
      </div>
    </section>
  );
}
