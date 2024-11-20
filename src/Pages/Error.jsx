import Err from "../icons/error.png";
import css from "./Error.module.scss";

const Error = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <img src={Err} alt="Error" className={css.img} />
      </div>
      <p className={css.error}>
        Во время оплаты произошла ошибка!
        <br />
        Пожалуйста, попробуйте снова.
      </p>
    </div>
  );
};

export default Error;
