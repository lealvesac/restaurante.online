import styles from "./Menu.module.scss";
import Search from "./Search";
import { useState } from "react";
import Filters from "./Filters";
import Order from "./Order";
import Itens from "./Itens";
import stylesTheme from "styles/Theme.module.scss";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState("");

  return (
    <section className={styles.menu}>
      <h3 className={stylesTheme.title}>Cardápio</h3>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.menu__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Order order={order} setOrder={setOrder} />
      </div>
      <Itens search={search} filter={filter} order={order} />
    </section>
  );
}
