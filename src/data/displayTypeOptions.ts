import { DisplayTypes } from "constants/ExchangeHistoryDisplayTypes";
import { Option } from "models/Option";

export const displayTypeOptions: Array<Option> = [
  {
    value: DisplayTypes.TABLE,
    label: "Table",
  },
  {
    value: DisplayTypes.CHART,
    label: "Chart",
  },
];
