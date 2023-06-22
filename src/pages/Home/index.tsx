import menu from "data/menu.json";
import styles from "./Home.module.scss";

export default function Home() {
  let recommendedDishes = [...menu];
  recommendedDishes = recommendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <h3 className={styles.title}>Recomendações da Cozinha</h3>
      <div className={styles.recommendeds}>
        {recommendedDishes.map((item) => (
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <div>
              <button className={styles.recommended__button}>
                Ver mais...
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
