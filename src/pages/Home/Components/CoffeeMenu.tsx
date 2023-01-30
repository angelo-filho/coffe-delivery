import { CoffeeCard } from "../../../components/CoffeeCard";
import { coffeesList } from "../data/coffeesList";

export function CoffeeMenu() {
  return (
    <section className="w-full max-w-screen-xl mt-10 mx-auto px-4 pb-10 xl:p-0 xl:pb-40 xl:mt-0">
      <h2 className="mb-14 font-cursive font-extrabold text-center text-3xl text-base-700 xl:text-left">
        Nossos cafés
      </h2>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 xl:justify-start">
        {coffeesList.map((coffee) => (
          <CoffeeCard key={coffee.name} coffee={coffee} />
        ))}
      </div>
    </section>
  );
}
