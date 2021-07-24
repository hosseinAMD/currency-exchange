import { baseUrl, nomicKey } from "./config";

export const getPrice = (from?: string, target?: string) => {
  return `${baseUrl}currencies/ticker?key=${nomicKey}&ids=${from}&convert=${target}`;
};
