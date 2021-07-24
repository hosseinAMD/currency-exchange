import IconButton from "components/common/icon-button";
import SubmitButton from "components/common/submit-button";
import TextInput from "components/common/text-input";
import t from "i18n";
import { ChangeEvent, FormEvent } from "react";
import "./convert-button.scss";

export interface ConvertFormProps {
  amount?: string;
  from?: string;
  target?: string;
  loading?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>, name: string) => void;
  onSwap: () => void;
  onSubmit: (event: FormEvent) => void;
}

const ConvertForm: React.FC<ConvertFormProps> = ({
  amount,
  target,
  from,
  loading,
  onChange,
  onSwap,
  onSubmit,
}) => {
  return (
    <form className="convert-form" onSubmit={onSubmit}>
      <TextInput
        name="amount"
        label={t("amount")}
        value={amount}
        onChange={(e) => onChange(e, "amount")}
      />
      <TextInput
        name="from"
        label={t("from")}
        value={from}
        onChange={(e) => onChange(e, "from")}
      />
      <IconButton icon="compare_arrows" onClick={onSwap} />
      <TextInput
        name="target"
        label={t("to")}
        value={target}
        onChange={(e) => onChange(e, "target")}
      />
      <SubmitButton label={t("convert")} loading={loading} />
    </form>
  );
};

export default ConvertForm;
