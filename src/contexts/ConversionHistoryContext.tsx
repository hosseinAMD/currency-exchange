import { ConversionHistory } from "models/ConversionHistory";
import { ReactNode, useState } from "react";
import { createContext } from "react";

export interface ConversionHistoryContextProps {
  data: Array<ConversionHistory>;
  addToHistory: (historyObj: ConversionHistory) => void;
  removeFromHistory: (uuid: string) => void;
}

export const ConversionHistoryContext =
  createContext<ConversionHistoryContextProps>({
    data: [],
    addToHistory: () => {},
    removeFromHistory: () => {},
  });

const ConversionHistoryContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Array<ConversionHistory>>([]);

  const addToHistory = (historyObj: ConversionHistory) => {
    setData([...data, historyObj]);
  };

  const removeFromHistory = (uuid: string) => {
    const newData = data.filter((item) => item.uuid !== uuid);
    setData(newData);
  };

  return (
    <ConversionHistoryContext.Provider
      value={{ data, addToHistory, removeFromHistory }}
    >
      {children}
    </ConversionHistoryContext.Provider>
  );
};

export default ConversionHistoryContextProvider;
