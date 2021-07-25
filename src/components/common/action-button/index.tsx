import { ActionButtonTypes } from "constants/ActionButtonTypes";
import "./action-button.scss";

export interface ActionButtonProps {
  label: string;
  icon: string;
  type: ActionButtonTypes;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  icon,
  type,
  onClick,
}) => {
  return (
    <div
      className={`action-button ${
        type === ActionButtonTypes.PRIMARY
          ? "action-button__primary"
          : "action-button__danger"
      }`}
      onClick={onClick}
    >
      <span className="material-icons action-button__icon">{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default ActionButton;
