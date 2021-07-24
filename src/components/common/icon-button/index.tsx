import "./icon-button.scss";

export interface IconButtonProps {
  icon: string;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <button className="icon-button" type="button" onClick={onClick}>
      <span className="material-icons">{icon}</span>
    </button>
  );
};

export default IconButton;
