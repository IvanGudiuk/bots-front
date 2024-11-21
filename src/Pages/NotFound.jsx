import { ReactComponent as NotFound } from "../icons/notfound.svg";
import css from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <NotFound />
        <span className={css.text}>page not found</span>
      </div>
    </div>
  );
};

export default NotFound;
