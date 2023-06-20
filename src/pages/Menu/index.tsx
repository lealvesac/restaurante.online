import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

function Menu() {
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
        <nav>
          <header className={styles.header}>
            <div className={styles.header__text}>
              A melhor refeição da região.
            </div>
          </header>
        </nav>
      </nav>
    </main>
  );
}

export default Menu;
