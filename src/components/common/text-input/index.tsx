import { ChangeEvent } from "react";
import FormElement from "../form-element";
import "./text-input.scss";

export interface TextInputProps {
  name: string;
  label: string;
  value?: string;
  required?: boolean;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  required,
  type,
  value = "",
  onChange,
}) => {
  return (
    <FormElement label={label} htmlFor={name}>
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        required={required}
        onChange={onChange}
        className="input"
      />
    </FormElement>
  );
};

export default TextInput;
