import { Option } from "models/Option";
import { ChangeEvent } from "react";
import "./radio-input.scss";

export interface RadioInputProps {
  options: Array<Option>;
  checked: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput: React.FC<RadioInputProps> = ({
  options,
  checked,
  onChange,
}) => {
  return (
    <div className="radio-input">
      {options.map((item) => (
        <div key={item.value}>
          <input
            id={item.label}
            name={item.label}
            type="radio"
            value={item.value}
            checked={checked === item.value}
            onChange={onChange}
          />
          <label htmlFor={item.label}>{item.label}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioInput;
