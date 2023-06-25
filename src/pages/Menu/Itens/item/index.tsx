import styles from "./Item.module.scss";
import TagsDish from "components/TagsDish";
import { useNavigate } from "react-router-dom";
import { Dish } from "types/Dish";

export default function Item(itens: Dish) {
  const { id, title, description, photo } = itens;
  const navigate = useNavigate();

  return (
    <div className={styles.item} onClick={() => navigate(`/dish/${id}`)}>
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
