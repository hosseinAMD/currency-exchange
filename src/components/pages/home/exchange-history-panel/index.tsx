import SelectInput from "components/common/select-input";
import { Option } from "models/Option";
import { ChangeEvent } from "react";
import "./exchange-history-panel.scss";
import t from "i18n";
import RadioInput from "components/common/radio-input";

export interface ExchangeHistoryPanelProps {
  duration: number;
  displayType: string;
  durationOptions: Array<Option>;
  displayTypeOptions: Array<Option>;
  durationChangeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
  toggleChartFlag: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ExchangeHistoryPanel: React.FC<ExchangeHistoryPanelProps> = ({
  duration,
  displayType,
  displayTypeOptions,
  durationOptions,
  durationChangeHandler,
  toggleChartFlag,
}) => {
  return (
    <div className="panel">
      <SelectInput
        name="days"
        label={t("duration")}
        value={duration}
        options={durationOptions}
        onChange={durationChangeHandler}
      />
      <RadioInput
        checked={displayType}
        options={displayTypeOptions}
        onChange={toggleChartFlag}
      />
    </div>
  );
};

export default ExchangeHistoryPanel;
