import { useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Bot } from "../../icons/bot.svg";
import css from "./MenuList.module.scss";

const options = [
  { name: "Скринер пампа цены", route: "/pump" },
  { name: "Скринер открытого интереса", route: "/openinterest" },
  { name: "Скринер плотностей", route: "/orderbook" },
  { name: "Скринер повышенных объёмов", route: "/volumes" },
];

export const MenuList = () => {
  const handleScroll = () => {
    if (window.scrollY < 50) {
      window.scrollBy({
        top: 250, // Adjust the value as per your needs
        behavior: "smooth",
      });
    }
  };

  const navigate = useNavigate();
  const location = useLocation();

  // Navigate to the first option on initial load if not already on a valid route
  useEffect(() => {
    if (location.pathname === "/") {
      navigate(options[0].route);
    }
  }, [location.pathname, navigate]);

  return (
    <ul className={css.list}>
      {options?.map((item, index) => (
        <li className={css.item} key={index}>
          <NavLink
            to={item.route}
            onClick={handleScroll}
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
