import { ItemCount } from "../../../components/ItemCount";

export function CartInfos() {
  return (
    <section>
      <h3>Cafés selecionados</h3>

      <div>
        <ul>
          <li>
            <img src="" alt="Café Tradicional" />

            <div>
              <span>Expresso Tradicional</span>

              <div>
                <ItemCount />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
