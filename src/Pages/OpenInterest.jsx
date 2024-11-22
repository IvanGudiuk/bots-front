import { NavLink } from "react-router-dom";
import { ReactComponent as Bot } from "../icons/openInterest.svg";
import signalImage from "../icons/openinterest.png";
import css from "./Pump.module.scss";

const OpenInterest = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.name}>
        <Bot /> Скринер открытого интереса
      </h2>
      <p className={css.text}>
        — это Telegram-бот, который уведомляет о росте открытого интереса
        активов на криптовалютной бирже Bybit в режиме реального времени.
        Уведомления отправляются на основе индивидуальных настроек пользователя.
        Вы можете выбрать <span className={css.highlight}>период времени</span>{" "}
        (от 1 до 30 минут), за который открытый интерес должен измениться, а
        также задать{" "}
        <span className={css.highlight}>
          процент изменения открытого интереса
        </span>{" "}
        за этот период.{" "}
        <span className={css.highlight}>
          Сигналы приходят на основе данных для фьючерсов (бессрочных USDT).
        </span>
      </p>
      <p className={css.text}>
        <span className={css.highlight}>Открытый интерес</span> — это показатель
        общего количества активных контрактов, таких как фьючерсы или опционы,
        которые остаются не закрытыми или не исполненными на данный момент. Этот
        индикатор часто используется на рынках деривативов, включая
        криптовалютные, чтобы оценить активность и ликвидность инструмента.
      </p>
      <p className={css.text}>
        Резкое увеличение открытого интереса вместе с увеличением цены и объёмов
        торгов может являться сигналом о начале длительного роста актива.
      </p>
      <h3 className={css.name}>Как понимать сигналы бота?</h3>
      <p className={css.head}>Каждый сигнал содержит 6 строчек:</p>
      <ul className={css.list}>
        <li className={css.item}>
          1. Название актива с встроенной ссылкой на сервис{" "}
          <a
            href="https://coinglass.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            coinglass.com
          </a>
          , чтобы вы могли сразу перейти к графикам технического анализа данного
          актива.
        </li>
        <li className={css.item}>
          2. Процент, на который вырос открытый интерес.
        </li>
        <li className={css.item}>
          3. Процент, на который измененилась цена за тот же период.
        </li>
        <li className={css.item}>4. Время, за которое произошло изменение.</li>
        <li className={css.item}>
          5. Торговый оборот актива за последние 24 часа.
        </li>
        <li className={css.item}>6. Сигнал за сутки.</li>
      </ul>
      <img src={signalImage} alt="signal" className={css.img} />
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
      {/* <NavLink to={"/payment/openinterest"} className={css.btn}>
        Оплатить подписку на скринер открытого интереса
      </NavLink> */}
    </div>
  );
};

export default OpenInterest;
