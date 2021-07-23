import t from "i18n";
import "./submit-button.scss";

export interface SubmitButtonProps {
  label: string;
  loading?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  label,
  loading = false,
}) => {
  return (
    <input
      className="submit-button"
      type="submit"
      disabled={loading}
      value={loading ? t("loading") : label}
    />
  );
};

export default SubmitButton;
