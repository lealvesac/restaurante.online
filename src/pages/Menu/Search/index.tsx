import iSearch from "interfaces/iSearch";
import styles from "./Search.module.scss";
import { CgSearch } from "react-icons/cg";

export default function Search({ search, setSearch }: iSearch) {
  return (
    <div className={styles.search}>
      <input
        value={search}
        onChange={(push) => setSearch(push.target.value)}
        placeholder="Buscar..."
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}
