import IconButton from "components/common/icon-button";
import SubmitButton from "components/common/submit-button";
import TextInput from "components/common/text-input";
import t from "i18n";
import "./convert-button.scss";

export interface ConvertFormProps {}

const ConvertForm: React.FC<ConvertFormProps> = () => {
  return (
    <form className="convert-form">
      <TextInput name="amount" label={t("amount")} />
      <TextInput name="from" label={t("from")} />
      <IconButton icon="compare_arrows" onClick={() => {}} />
      <TextInput name="to" label={t("to")} />
      <SubmitButton label={t("convert")} />
    </form>
  );
};

export default ConvertForm;
