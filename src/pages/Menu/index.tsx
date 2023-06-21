import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Search from "./Search";
import { useState } from "react";
import Filters from "./Filters";
import Order from "./Order";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  return (
    <main>
      <nav className={styles.bannerMenu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A melhor refeição da região.</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <Search search={search} setSearch={setSearch} />
        <div className={styles.menu__filters}>
          <Filters filter={filter} setFilter={setFilter}/>
          <Order />
        </div>
      </section>
    </main>
  );
}
