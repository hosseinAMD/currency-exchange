import { Option } from "models/Option";
import { ChangeEvent } from "react";
import FormElement from "../form-element";
import "./select-input.scss";

export interface SelectInputProps {
  options: Array<Option>;
  name: string;
  label: string;
  value?: string | number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <FormElement label={label} htmlFor={name}>
      <select
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        className="select-input"
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </FormElement>
  );
};

export default SelectInput;
