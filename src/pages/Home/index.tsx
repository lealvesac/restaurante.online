import menu from "data/menu.json";
import styles from "./Home.module.scss";
import stylesTheme from "styles/Theme.module.scss";
import ourHome from "assets/ourhome.png";
import { useNavigate } from "react-router-dom";
import { Dish } from "types/Dish";

export default function Home() {
  let recommendedDishes = [...menu];
  recommendedDishes = recommendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);
  const navigate = useNavigate();

  function redirDetails(dish: Dish) {
    navigate(`/dish/${dish.id}`, { state: { dish }, replace: true });
  }

  return (
    <section>
      <h3 className={stylesTheme.title}>Recomendações da Cozinha</h3>
      <div className={styles.recommendeds}>
        {recommendedDishes.map((item) => (
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <div>
              <button
                className={styles.recommended__button}
                onClick={() => redirDetails(item)}
              >
                Ver mais...
              </button>
            </div>
          </div>
        ))}
      </div>
      <h3 className={stylesTheme.title}>Nossa Casa</h3>
      <div className={styles.ourHome}>
        <img src={ourHome} alt="Restaurante Online" />
        <div className={styles.ourHome__address}>
          Rua Passo Lardo, 8919 <br /> <br /> Vila Maria - SP
        </div>
      </div>
    </section>
  );
}
