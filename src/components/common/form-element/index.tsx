import { ReactNode } from "react";
import "./form-element.scss";

export interface FormElementProps {
  label: string;
  children: ReactNode;
}

const FormElement: React.FC<FormElementProps> = ({ label, children }) => {
  return (
    <div className="form-element">
      <label className="form-element__label">{label}</label>
      {children}
    </div>
  );
};

export default FormElement;
