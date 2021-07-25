import ConvertForm from "components/pages/home/convert-form";
import Result from "components/pages/home/result";
import { ConversionHistoryContext } from "contexts/ConversionHistoryContext";
import { useFetch } from "hooks/use-fetch";
import t from "i18n";
import { ConversionHistory } from "models/ConversionHistory";
import { ConvertResultData } from "models/ConvertResultData";
import { FormEvent, Fragment, useState } from "react";
import { useMemo } from "react";
import { useContext } from "react";
import { ChangeEvent } from "react";
import { getPrice } from "services/convertor";
import ExchangeHistory from "./exchange-history";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export interface HomeParams {
  uuid?: string;
}

const Home: React.FC = () => {
  const [convertData, setConvertData] = useState<Record<string, string>>({});
  const [exchangeData, setExchangeData] = useState<
    ConvertResultData | undefined
  >(undefined);

  const { addToHistory, getFromHistory } = useContext(ConversionHistoryContext);

  const { uuid } = useParams<HomeParams>();

  const inputChangeHandler = (
    e: ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const value = e.currentTarget.value.toUpperCase();
    setConvertData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const swapTargetAndFrom = () => {
    const newTarget = convertData.from;
    const newFrom = convertData.target;
    setConvertData((data) => ({ ...data, target: newTarget, from: newFrom }));
    setExchangeData(undefined);
  };

  const [loading, error, fetchApi] = useFetch(
    getPrice(convertData.from, convertData.target),
    (res) => {
      const exchangeDataObj: ConvertResultData = {
        price: res[0]?.price,
        from: convertData.from,
        target: convertData.target,
      };
      const historyObj: ConversionHistory = {
        ...exchangeDataObj,
        amount: convertData.amount,
        date: new Date(),
        uuid: uuidv4(),
      };
      setExchangeData(exchangeDataObj);
      addToHistory(historyObj);
    },
    false
  );

  const convert = (event?: FormEvent) => {
    event && event.preventDefault();
    fetchApi();
  };

  useEffect(() => {
    if (uuid) {
      const conversionHistoryObj = getFromHistory(uuid);
      if (conversionHistoryObj) {
        setConvertData({
          from: conversionHistoryObj.from,
          target: conversionHistoryObj.target,
          amount: conversionHistoryObj.amount,
        });
      }
    }
  }, [uuid, getFromHistory]);

  const fromUnitRate = useMemo(
    () => 1 / Number(exchangeData?.price),
    [exchangeData?.price]
  ).toString();

  const targetValue = useMemo(
    () => Number(exchangeData?.price) * Number(convertData.amount),
    [exchangeData?.price, convertData.amount]
  ).toFixed(3);

  return (
    <div>
      <p className="page-title">{t("homeTitle")}</p>
      <ConvertForm
        amount={convertData.amount}
        from={convertData.from}
        target={convertData.target}
        loading={loading}
        onChange={inputChangeHandler}
        onSwap={swapTargetAndFrom}
        onSubmit={convert}
      />
      {exchangeData && convertData.from && convertData.target && (
        <Fragment>
          <Result
            from={exchangeData.from}
            fromValue={convertData.amount}
            fromUnitRate={fromUnitRate}
            target={exchangeData.target}
            targetValue={targetValue}
            targetUnitRate={exchangeData.price}
            error={error}
          />
          {exchangeData.price && (
            <ExchangeHistory
              from={exchangeData.from}
              target={exchangeData.target}
            />
          )}
        </Fragment>
      )}
    </div>
  );
};

export default Home;
