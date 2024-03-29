import { useForm, FormProvider } from "react-hook-form";
import { BuyInfos } from "./components/BuyInfos";
import { CartInfos } from "./components/CartInfos";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const addressFormValues = z.object({
  cep: z.string().min(6, "Mínimo de 6 caracteres"),
  street: z.string().min(1, "Mínimo de 1 caracteres"),
  number: z.string().min(1, "Mínimo de 1 caracteres"),
  district: z.string().min(1, "Mínimo de 1 caracteres"),
  complement: z.string().nullable(),
  city: z.string().min(2, "Mínimo de 2 caracteres"),
  uf: z.string().length(2, "Mínimo de 2 letras").toUpperCase(),
  paymentMethod: z.enum(["cartão de crédito", "cartão de débito", "dinheiro"]),
});

export type AddressFormType = z.infer<typeof addressFormValues>;

export function Cart() {
  const methods = useForm<AddressFormType>({
    defaultValues: {
      paymentMethod: "cartão de crédito",
    },
    resolver: zodResolver(addressFormValues),
  });

  return (
    <main className="max-w-screen-xl mt-10 mb-16 mx-auto px-4 grid gap-9 xl:grid-cols-5 xl:px-0">
      <FormProvider {...methods}>
        <BuyInfos />

        <CartInfos />
      </FormProvider>
    </main>
  );
}
