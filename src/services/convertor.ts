import { baseUrl, nomicKey } from "./config";

export const getPrice = (from?: string, target?: string) => {
  return `${baseUrl}currencies/ticker?key=${nomicKey}&ids=${from}&convert=${target}`;
};

export const getExchangeHistory = (
  from?: string,
  target?: string,
  start?: string,
  end?: string
) => {
  return encodeURI(
    `${baseUrl}currencies/sparkline?key=${nomicKey}&ids=${from}&convert=${target}&start=${start}&end=${end}`
  );
};
