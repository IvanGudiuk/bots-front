import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MenuList } from "../MenuList/MenuList";
import { Loader } from "../Loader/Loader";
import heroImage from "../../icons/hero.jpg";
import css from "./SharedLayout.module.scss";

export const SharedLayout = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h2 className={css.text}>
          Скринеры рынка для биржи <span className={css.name}>Bybit</span>
        </h2>
        <h3 className={css.text}>Надежные боты для успешной торговли</h3>
        <img src={heroImage} className={css.hero} alt="hero" />
      </div>
      <MenuList />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
