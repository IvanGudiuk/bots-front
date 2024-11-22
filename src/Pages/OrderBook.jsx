import { NavLink } from "react-router-dom";
import { ReactComponent as Bot } from "../icons/orderbook.svg";
import signalImage from "../icons/orderbook.png";
import css from "./Pump.module.scss";

const OrderBook = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.name}>
        <Bot /> Скринер плотностей
      </h2>
      <p className={css.text}>
        - это Telegram-бот, который в реальном времени уведомляет о крупных
        лимитных заявках (плотностях) в биржевом стакане активов на
        криптовалютной бирже Bybit. Заявка считается крупной, если её объём
        превышает 10% от общего объёма стакана. Бот особенно полезен для
        трейдеров, использующих стратегии торговли на основе плотностей.{" "}
        <span className={css.highlight}>
          Сигналы приходят на основе данных для фьючерсов (бессрочных USDT).
        </span>
      </p>
      <h3 className={css.name}>Как понимать сигналы бота?</h3>
      <p className={css.head}>Каждый сигнал содержит 7 строчек:</p>
      <ul className={css.list}>
        <li className={css.item}>1. Название монеты.</li>
        <li className={css.item}>2. Размер заявки.</li>
        <li className={css.item}>
          3. Цена, по которой размещена заявка в биржевом стакане.
        </li>
        <li className={css.item}>
          4. Направление заявки (на покупку или продажу).
        </li>
        <li className={css.item}>5. Общий объём биржевого стакана.</li>
        <li className={css.item}>
          6. Соотношение ордеров на покупку и продажу в биржевом стакане.
        </li>
        <li className={css.item}>7. Текущая цена актива.</li>
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
        Оплатить подписку на скринер плотностей
      </NavLink> */}
    </div>
  );
};

export default OrderBook;
