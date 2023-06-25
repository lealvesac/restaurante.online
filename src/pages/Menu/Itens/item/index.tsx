import styles from "./Item.module.scss";
import TagsDish from "components/TagsDish";
import { Dish } from "types/Dish";

export default function Item(itens: Dish) {
  const { title, description, photo } = itens;

  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsDish {...itens} />
      </div>
    </div>
  );
}
