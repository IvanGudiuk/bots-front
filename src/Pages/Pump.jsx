import { ReactComponent as Bot } from "../icons/pump.svg";
import signalImage from "../icons/pumpsignal.jpg";
import css from "./Pump.module.scss";

const Pump = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.name}>
        <Bot /> Скринер пампа цены
      </h2>
      <p className={css.text}>
        — это Telegram-бот, который уведомляет о резком росте или падении цены
        на активы на криптовалютной бирже Bybit в режиме реального времени.
        Уведомления отправляются на основе индивидуальных настроек пользователя.
        Вы можете выбрать <span className={css.highlight}>период времени</span>{" "}
        (от 1 до 30 минут), за который цена актива должна измениться, а также
        задать <span className={css.highlight}>процент изменения цены</span> за
        этот период. Настройки для роста цены (пампа) и снижения цены (дампа)
        можно указать отдельно.{" "}
        <span className={css.highlight}>
          Сигналы приходят на основе данных для фьючерсов (бессрочных USDT).
        </span>
      </p>
      <h3 className={css.name}>Как понимать сигналы бота?</h3>
      <p className={css.head}>Каждый сигнал содержит 5 строчек:</p>
      <ul className={css.list}>
        <li className={css.item}>
          1. Направление изменения цены (PUMP - повышение цены; DUMP - снижение
          цены).
        </li>
        <li className={css.item}>
          2. Название актива с встроенной ссылкой на сервис{" "}
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
        <li className={css.item}>3. Процент, на который измененилась цена.</li>
        <li className={css.item}>
          4. Процент, на который измененился Открытый Интерес за это же время.
        </li>
        <li className={css.item}>5. Время, за которое произошло изменение.</li>
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
      {/* <NavLink to={"/payment/pump"} className={css.btn}>
        Оплатить подписку на скринер пампа цены
      </NavLink> */}
    </div>
  );
};

export default Pump;
