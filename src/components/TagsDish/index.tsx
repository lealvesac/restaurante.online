import { Dish } from "types/Dish";
import styles from "./TagsDish.module.scss";
import classNames from "classnames";

export default function TagsDish({ category, size, serving, price }: Dish) {
  return (
    <div className={styles.tags}>
      <div
        className={classNames({
          [styles.tags__tipo]: true,
          [styles[`tags__tipo__${category.label.toLocaleLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.tags__porcao}>{size}g</div>
      <div className={styles.tags__qtdpessoas}>
        Serve {serving} pessoa{serving === 1 ? "" : "s"}
      </div>
      <div className={styles.tags__valor}>R${price.toFixed(2)}</div>
    </div>
  );
}
