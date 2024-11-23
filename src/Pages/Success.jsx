import css from "./Success.module.scss";

const Success = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <svg
          width="100"
          height="100"
          viewBox="9 14 30 10"
          fill="none"
          stroke="#04cd25"
          stroke-width="4"
          stroke-dasharray="100"
          strokeLinecap="round"
        >
          <path id="check" d="M 12,22 L 22,31 L 36,13" stroke-dashoffset="0">
            <animate
              attributeName="stroke-dashoffset"
              from="100"
              to="0"
              dur="3.5s"
            ></animate>
          </path>
        </svg>
      </div>
      <p className={css.text}>
        Оплата успешно произведена! <br />
        Ожидайте сигнал бота об оплате.
      </p>
    </div>
  );
};

export default Success;
