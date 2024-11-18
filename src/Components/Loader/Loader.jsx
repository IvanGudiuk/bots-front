import { useEffect } from "react";
import css from "./Loader.module.scss";

export const Loader = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={css.backdrop}>
      <div className={css.container}>
        <span className={css.loader}></span>
      </div>
    </div>
  );
};
