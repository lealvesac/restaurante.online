import iOption from "interfaces/iOption";
import filters from "./filters.json";
import styles from "./Filter.module.scss";
import iFilter from "interfaces/iFilter";
import classNames from "classnames";

export default function Filters({ filter, setFilter }: iFilter) {
  function selectFilter(option: iOption) {
    if (filter === option.id) {
      return setFilter(null);
    }
    return setFilter(option.id);
  }

  return (
    <div className={styles.filters}>
      {filters.map((option) => (
        <button
          className={classNames({
            [styles.filter__filter]: true,
            [styles["filters__filter--active"]]: filter === option.id,
          })}
          key={option.id}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
