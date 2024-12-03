import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RadioButtons } from "../Components/RadioButtons/RadioButtons";
import { Dropdown } from "../Components/Dropdown/Dropdown";
import { Loader } from "../Components/Loader/Loader";
import css from "./Payment.module.scss";

const list = [
  { text: "Скринер пампа цены", value: "pump", link: "/" },
  {
    text: "Скринер открытого интереса",
    value: "openinterest",
    link: "/openinterest",
  },
  { text: "Скринер плотностей", value: "orderbook", link: "/orderbook" },
  { text: "Скринер повышенных объёмов", value: "volumes", link: "/volumes" },
];

const monthes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const axiosInstance = axios.create({
  baseURL: "https://bots-back.onrender.com", // Replace with your API base URL
});

const Payment = () => {
  const { userId, screener } = useParams();

  const [selectedValue, setSelectedValue] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("1");
  const [sum, setSum] = useState(2);
  const [discount, setDiscount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [link, setLink] = useState("");
  const [error, setError] = useState(
    "regtrh uytuyi uoip i789o ip o[ 'p][ gyhjhi hgkj hguij hfguikn vuyijn vyihj"
  );

  const fetchUserData = async () => {
    try {
      const response = await axiosInstance.get(`/users/${userId}`);
      const { bots } = response.data;
      setUserData(bots);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const paymentHandler = async () => {
    try {
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("monthes", Number(selectedMonth));
      formData.append("sum", sum);
      formData.append("bots", JSON.stringify(selectedValue) || []);

      const response = await axiosInstance.post(`/users/payment`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response && response?.data?.link) {
        setLink(response.data.link);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 35000);
    }
  }, [userData, selectedValue]);

  useEffect(() => {
    if (link) {
      window.location.href = link;
      setLink("");
    }
  }, [link]);

  useEffect(() => {
    if (screener) {
      setSelectedValue([...selectedValue, screener]);
    }
  }, [screener, setSelectedValue]);

  useEffect(() => {
    // if (selectedValue.length > 0) {
    // Базовая цена за одного бота на 1 месяц
    const basePrice = 3;

    // let discount = 0;

    // if (selectedMonth >= 3 && selectedMonth < 6) {
    //   discount = 1;
    // } else if (selectedMonth >= 6 && selectedMonth < 9) {
    //   discount = 2;
    // } else if (selectedMonth >= 9 && selectedMonth < 12) {
    //   discount = 3;
    // }

    // discount = selectedValue.length === 3 ? discount + 1 : discount;
    // discount = selectedValue.length === 4 ? discount + 2 : discount;

    const initialSum = basePrice * Number(selectedMonth) * selectedValue.length;
    // Рассчитываем новую сумму
    const newSum = initialSum - discount;

    setSum(newSum);
    setDiscount(discount);
    // }
  }, [selectedMonth, selectedValue]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={css.wrapper}>
      <div className={error ? `${css.popup} ${css.visible}` : `${css.popup}`}>
        <p className={css.error}>{error}</p>
      </div>
      <p className={css.head}>Оплата подписки:</p>
      <span className={css.info}>
        * здесь указаны только те боты, которыми вы уже пользовались
      </span>
      <p className={css.title}>
        Выбирите ботов, на которые хотите оплатить подписку:
      </p>
      {userData.length > 0 && (
        <RadioButtons
          options={list.filter((item) => userData.includes(item.value))}
          onChange={setSelectedValue}
          initialValue={screener}
        />
      )}
      <p className={css.title}>Период:</p>
      <Dropdown options={monthes} onChange={setSelectedMonth} />
      <div>
        <p className={css.title}>К оплате:</p>
        <div className={css.box}>
          <span className={css.sum}>{sum}</span>{" "}
          <span className={css.currency}>usdt</span>
        </div>
        <span className={css.commision}>* + комиссия сети</span>
        {/* <span className={css.discount}>{`СКИДКА: ${discount} usdt`}</span> */}
      </div>
      <button
        disabled={sum === 0}
        type="button"
        className={css.btn}
        onClick={paymentHandler}
      >{`Оплатить ${sum} usdt`}</button>
    </div>
  );
};

export default Payment;
