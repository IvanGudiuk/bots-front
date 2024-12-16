import { ReactComponent as Bot } from "../icons/volumes.svg";
import signalImage from "../icons/volumes.png";
import css from "./Pump.module.scss";

const Volumes = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.name}>
        <Bot /> Скринер повышенного объёма
      </h2>
      <p className={css.text}>
        Это Telegram-бот, который в режиме реального времени уведомляет о
        повышенных объёмах торгов для активов на криптовалютной бирже Bybit.
        Обычно после пиковых объёмов торгов и наличия дивергенции по RSI
        наблюдается разворот локального или глобального тренда. Данные
        предоставляются для 15-минутного, часового или 4-часового таймфрейма и
        основаны на информации о{" "}
        <span className={css.highlight}>фьючерсах (бессрочных USDT)</span>.
      </p>
      <h3 className={css.name}>Как понимать сигналы бота?</h3>
      <p className={css.head}>Каждый сигнал содержит 4 строчки:</p>
      <ul className={css.list}>
        <li className={css.item}>1. Название монеты.</li>
        <li className={css.item}>
          2. Пороговое значение объёма, основанное на истории торгов
          определенного актива
        </li>
        <li className={css.item}>3. Текущее значение объёма торгов.</li>
        <li className={css.item}>4. Текущее значение объёма торгов.</li>
      </ul>
      <img src={signalImage} alt="signal" className={css.img} />
      <h3 className={css.name}>Как начать использование бота?</h3>
      <ul className={css.list}>
        <li className={css.item}>
          1. Перейти на наш{" "}
          <a
            href="https://t.me/pumpdumpscreener"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram-канал
          </a>
          , в котором можно получить доступ к боту.
        </li>
        <li className={css.item}>
          2. Перейти к боту и нажать кнопку 'Старт'. Установить ваши собственные
          праметры работы бота.{" "}
          <span className={css.highlight}>
            Первые 72 часа использования бесплатно
          </span>
          .
        </li>
        <li className={css.item}>3. Ожидать сигналы бота.</li>
      </ul>
      {/* <NavLink to={"/payment/orderbook"} className={css.btn}>
        Оплатить подписку на скринер повышенных объёмов торгов
      </NavLink> */}
    </div>
  );
};

export default Volumes;
