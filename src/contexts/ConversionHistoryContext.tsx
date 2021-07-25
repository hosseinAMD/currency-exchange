import { StorageKeys } from "constants/StorageKeys";
import { ConversionHistory } from "models/ConversionHistory";
import { useCallback } from "react";
import { useEffect } from "react";
import { ReactNode, useState } from "react";
import { createContext } from "react";
import { getFromStorage, saveToStorage } from "utils/storage";

export interface ConversionHistoryContextProps {
  data: Array<ConversionHistory>;
  addToHistory: (historyObj: ConversionHistory) => void;
  getFromHistory: (uuid: string) => ConversionHistory | undefined;
  removeFromHistory: (uuid: string) => void;
}

export const ConversionHistoryContext =
  createContext<ConversionHistoryContextProps>({
    data: [],
    addToHistory: () => {},
    getFromHistory: () => undefined,
    removeFromHistory: () => {},
  });

const ConversionHistoryContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Array<ConversionHistory>>(
    getFromStorage(StorageKeys.conversionHistory, true) || []
  );

  const addToHistory = (historyObj: ConversionHistory) => {
    setData([...data, historyObj]);
  };

  const getFromHistory = (uuid: string) => {
    const item = data.find((item) => item.uuid === uuid);
    if (!item) return undefined;
    return item;
  };

  const removeFromHistory = (uuid: string) => {
    const newData = data.filter((item) => item.uuid !== uuid);
    setData(newData);
  };

  const presistData = useCallback(() => {
    saveToStorage(StorageKeys.conversionHistory, data, true);
  }, [data]);

  useEffect(() => {
    presistData();
  }, [presistData]);

  return (
    <ConversionHistoryContext.Provider
      value={{ data, addToHistory, getFromHistory, removeFromHistory }}
    >
      {children}
    </ConversionHistoryContext.Provider>
  );
};

export default ConversionHistoryContextProvider;
