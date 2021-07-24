import ConvertForm from "components/pages/home/convert-form";
import Result from "components/pages/home/result";
import { useFetch } from "hooks/use-fetch";
import t from "i18n";
import { ConvertResultData } from "models/ConvertResultData";
import { FormEvent, Fragment, useState } from "react";
import { useMemo } from "react";
import { ChangeEvent } from "react";
import { getPrice } from "services/convertor";
import ExchangeHistory from "./exchange-history";

const Home: React.FC = () => {
  const [convertData, setConvertData] = useState<Record<string, string>>({});
  const [exchangeData, setExchangeData] = useState<
    ConvertResultData | undefined
  >(undefined);

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
      res &&
        res.length > 0 &&
        setExchangeData({
          price: res[0].price,
          from: convertData.from,
          target: convertData.target,
        });
    },
    false
  );

  const convert = (event: FormEvent) => {
    event.preventDefault();
    fetchApi();
  };

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
          />
          <ExchangeHistory
            from={exchangeData.from}
            target={exchangeData.target}
          />
        </Fragment>
      )}
    </div>
  );
};

export default Home;
