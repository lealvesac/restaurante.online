import { useState } from "react";
import styles from "./Order.module.scss";
import options from "./options.json";
import classNames from "classnames";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import iOrder from "interfaces/iOrder";

export default function Order({ order, setOrder }: iOrder) {
  const [open, setOpen] = useState(false);
  const nameOrder =
    order && options.find((option) => option.value === order)?.name;

  return (
    <button
      className={classNames({
        [styles.order]: true,
        [styles["order--active"]]: order != "",
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{nameOrder || "Ordenar Por..."}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.order__options]: true,
          [styles["order__options--active"]]: open,
        })}
      >
        {options.map((option) => (
          <div
            className={styles.order__option}
            key={option.value}
            onClick={() => setOrder(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}
