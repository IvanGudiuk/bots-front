import { NavLink } from "react-router-dom";
import { ReactComponent as Bot } from "../../icons/bot.svg";
import css from "./MenuList.module.scss";

const options = [
  { name: "Скринер пампа цены", route: "/pump" },
  { name: "Скринер открытого интереса", route: "/openinterest" },
  { name: "Скринер плотностей", route: "/orderbook" },
  { name: "Скринер повышенных объёмов", route: "/volumes" },
];

export const MenuList = () => {
  return (
    <ul className={css.list}>
      {options?.map((item) => (
        <li className={css.item}>
          <NavLink
            to={item.route}
            className={({ isActive }) =>
              isActive ? `${css.activeLink}` : `${css.link}`
            }
          >
            <Bot />
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
