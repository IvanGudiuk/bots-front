import { useState } from "react";
import css from "./RadioButtons.module.scss";

export const RadioButtons = ({ options, onChange, initialValue }) => {
  const [selectedOptions, setSelectedOptions] = useState([initialValue]);

  const handleChange = (value) => {
    const isSelected = selectedOptions.includes(value);

    if (isSelected) {
      // Remove the option if already selected
      const newSelections = selectedOptions.filter(
        (option) => option !== value
      );
      setSelectedOptions(newSelections);
      onChange(newSelections);
    } else {
      // Add the option if not selected
      const newSelections = [...selectedOptions, value];
      setSelectedOptions(newSelections);
      onChange(newSelections);
    }
  };

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {options.map(({ text, value }, index) => (
          <li key={index} className={css.item}>
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              value={value}
              checked={selectedOptions.includes(value)}
              onChange={() => handleChange(value)}
              className={css.field}
            />
            <label htmlFor={`checkbox-${index}`} className={css.name}></label>
            <span className={css.title}>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
