import { ReactNode } from "react";
import "./form-element.scss";

export interface FormElementProps {
  label: string;
  htmlFor: string;
  children: ReactNode;
}

const FormElement: React.FC<FormElementProps> = ({
  label,
  htmlFor,
  children,
}) => {
  return (
    <div className="form-element">
      <label className="form-element__label" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  );
};

export default FormElement;
