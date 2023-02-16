function imageURL(name: string) {
  return `/coffees/${name}.png`;
}

export const coffeesList = [
  {
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ["Tradicional"],
    imgURL: imageURL("Expresso"),
    price: 4.9,
  },
  {
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["Tradicional"],
    imgURL: imageURL("Americano"),
    price: 7.9,
  },
  {
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: ["Tradicional"],
    imgURL: imageURL("ExpressoCremoso"),
    price: 9.9,
  },
  {
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: ["Tradicional"],
    imgURL: imageURL("CaféGelado"),
    price: 9.9,
  },
  {
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["Tradicional", "Com leite"],
    imgURL: imageURL("CafécomLeite"),
    price: 7.9,
  },
  {
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["Tradicional", "Com leite"],
    imgURL: imageURL("Latte"),
    price: 19.9,
  },
  {
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["Tradicional", "Com leite"],
    imgURL: imageURL("Capuccino"),
    price: 15.9,
  },
  {
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["Tradicional", "Com leite"],
    imgURL: imageURL("Mochaccino"),
    price: 19.9,
  },
  {
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ["Tradicional", "Com leite"],
    imgURL: imageURL("Mochaccino"),
    price: 24.9,
  },
  {
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["Especial", "Com leite"],
    imgURL: imageURL("ChocolateQuente"),
    price: 12.9,
  },
  {
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["Especial", "Alcoólico", "Gelado"],
    imgURL: imageURL("Cubano"),
    price: 14.9,
  },
  {
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: ["Especial"],
    imgURL: imageURL("Havaiano"),
    price: 19.9,
  },
  {
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["Especial"],
    imgURL: imageURL("Árabe"),
    price: 19.9,
  },
  {
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["Especial", "Alcoólico"],
    imgURL: imageURL("Irlandês"),
    price: 19.9,
  },
];
