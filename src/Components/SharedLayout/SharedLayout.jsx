import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MenuList } from "../MenuList/MenuList";
import { Loader } from "../Loader/Loader";
import { ReactComponent as Telegram } from "../../icons/telegram.svg";
import heroImage from "../../icons/hero.jpg";
import css from "./SharedLayout.module.scss";

const SharedLayout = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h2 className={css.text}>
          Скринеры рынка для биржи <span className={css.name}>Bybit</span>
        </h2>
        <h3 className={css.text}>Надежные боты для успешной торговли</h3>
        <img src={heroImage} className={css.hero} alt="hero" />
      </div>
      <div className={css.box}>
        <MenuList />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <footer className={css.foot}>
        <p className={css.info}>
          По вопросам работы ботов пишите{" "}
          <a
            href="https://t.me/+380938632596"
            className={css.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Telegram />
          </a>
        </p>
      </footer>
    </div>
  );
};

export default SharedLayout;
