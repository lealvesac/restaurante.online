import styles from "./DefaultPage.module.scss";
import { Outlet } from "react-router-dom";
import stylesTheme from "styles/Theme.module.scss";

export default function DefaultPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A melhor refeição da região.</div>
      </header>
      <div className={stylesTheme.container}>
        <Outlet />
      </div>
    </>
  );
}
