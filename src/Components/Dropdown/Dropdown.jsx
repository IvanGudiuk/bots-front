import { useState } from "react";
import { ReactComponent as Arrow } from "../../icons/arrow.svg";
import css from "./Dropdown.module.scss";

export const Dropdown = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(1);
  const [isShown, setIsShown] = useState(false);

  const handleChange = (value) => {
    setSelectedOption(value);
    onChange(value);
    setIsShown(false);
  };

  const handleDropdownOpen = () => {
    setIsShown((state) => !state);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <span className={css.value}>{selectedOption}</span>
        <button type="button" className={css.btn} onClick={handleDropdownOpen}>
          <Arrow />
        </button>
        <span className={css.month}>месяцев</span>
      </div>
      <ul
        className={
          isShown ? `${css.dropdown} ${css.visible}` : `${css.dropdown}`
        }
      >
        {options?.map((item, index) => (
          <li key={index} className={css.item}>
            <button
              type="button"
              onClick={() => handleChange(item)}
              className={css.option}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
