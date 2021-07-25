import { ConvertResultData } from "./ConvertResultData";

export interface ConversionHistory extends ConvertResultData {
  uuid: string;
  amount: string;
  date: Date;
}
