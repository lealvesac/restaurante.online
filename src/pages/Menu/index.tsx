import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

function Menu() {
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
    </main>
  );
}

export default Menu;
