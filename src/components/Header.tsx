import logo from "../assets/Logo.svg";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <img src={logo} alt="Logo Coffe Delivery" />

      <div className="flex items-center">
        <div>Porto Alegre</div>

        <button type="button" className="">
          Carrinho
        </button>
      </div>
    </header>
  );
}
