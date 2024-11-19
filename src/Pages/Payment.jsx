import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RadioButtons } from "../Components/RadioButtons/RadioButtons";
import { Dropdown } from "../Components/Dropdown/Dropdown";
import css from "./Payment.module.scss";

const list = [
  { text: "Скринер пампа цены", value: "pump" },
  { text: "Скринер открытого интереса", value: "openinterest" },
  { text: "Скринер плотностей", value: "orderbook" },
  { text: "Скринер повышенных объёмов", value: "volumes" },
];

const monthes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const Payment = () => {
  const { userId, screener } = useParams();

  const [selectedValue, setSelectedValue] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("1");
  const [sum, setSum] = useState(3);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (selectedValue.length > 0) {
      // Базовая цена за одного бота на 1 месяц
      const basePrice = 3;

      let discount = 0;

      if (selectedMonth >= 3 && selectedMonth < 6) {
        discount = 1;
      } else if (selectedMonth >= 6 && selectedMonth < 9) {
        discount = 2;
      } else if (selectedMonth >= 9 && selectedMonth < 12) {
        discount = 3;
      }

      discount = selectedValue.length === 3 ? discount + 1 : discount;
      discount = selectedValue.length === 4 ? discount + 2 : discount;

      const initialSum =
        basePrice * Number(selectedMonth) * selectedValue.length;
      // Рассчитываем новую сумму
      const newSum = initialSum - discount;

      setSum(newSum);
      setDiscount(discount);
    }
  }, [selectedMonth, selectedValue]);

  return (
    <div className={css.wrapper}>
      <p className={css.head}>Оплата подписки:</p>
      <p className={css.title}>
        Выбирите ботов, на которые хотите подписаться:
      </p>
      <RadioButtons
        options={list}
        onChange={setSelectedValue}
        initialValue={screener}
      />
      <p className={css.title}>Период:</p>
      <Dropdown options={monthes} onChange={setSelectedMonth} />
      <div>
        <p className={css.title}>К оплате:</p>
        <span className={css.sum}>{sum}</span>{" "}
        <span className={css.currency}>usdt</span>
        <span className={css.commision}>* + коммисия сети</span>
        <span className={css.discount}>{`СКИДКА: ${discount} usdt`}</span>
      </div>
      <button
        type="button"
        className={css.btn}
      >{`Оплатить ${sum} usdt`}</button>
    </div>
  );
};

export default Payment;
