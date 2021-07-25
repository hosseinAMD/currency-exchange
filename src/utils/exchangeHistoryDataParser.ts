import { ExchangeHistoryData } from "models/ExchangeHistoryData";
import { getAvg, getMax, getMin } from "./calculator";

interface ParserResponse {
  parsedArray: Array<ExchangeHistoryData>;
  min: number;
  avg: number;
  max: number;
}

export const exchangeHistoryDataParser = (serverObj: any): ParserResponse => {
  const timesArray = serverObj.timestamps || [];
  const pricesArray = serverObj.prices || [];
  const parsedArray = [];
  for (let index = 0; index < timesArray.length; index++) {
    const parsedObj: ExchangeHistoryData = {
      id: index,
      time: new Date(timesArray[index]),
      price: Number(pricesArray[index]),
    };
    parsedArray.push(parsedObj);
  }
  const sortedArray = parsedArray.sort((a, b) => b.id - a.id);
  const avg = getAvg(pricesArray);
  const min = getMin(pricesArray);
  const max = getMax(pricesArray);
  return {
    parsedArray: sortedArray,
    min,
    max,
    avg,
  };
};
