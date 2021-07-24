import ConvertForm from "components/pages/home/convert-form";
import Result from "components/pages/home/result";
import { useFetch } from "hooks/use-fetch";
import t from "i18n";
import { FormEvent, useState } from "react";
import { useMemo } from "react";
import { ChangeEvent } from "react";
import { getPrice } from "services/convertor";

const Home: React.FC = () => {
  const [convertData, setConvertData] = useState<Record<string, string>>({});
  const [exchangeRate, setExchangeRate] = useState<string | undefined>(
    undefined
  );

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
    setExchangeRate(undefined);
  };

  const [loading, error, fetchApi] = useFetch(
    getPrice(convertData.from, convertData.target),
    (res) => {
      res && res.length > 0 && setExchangeRate(res[0].price);
    },
    false
  );

  const convert = (event: FormEvent) => {
    event.preventDefault();
    fetchApi();
  };

  const fromUnitRate = useMemo(
    () => 1 / Number(exchangeRate),
    [exchangeRate]
  ).toString();

  const targetValue = useMemo(
    () => Number(exchangeRate) * Number(convertData.amount),
    [exchangeRate, convertData.amount]
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
      {exchangeRate && (
        <Result
          from={convertData.from}
          fromValue={convertData.amount}
          fromUnitRate={fromUnitRate}
          target={convertData.target}
          targetValue={targetValue}
          targetUnitRate={exchangeRate}
        />
      )}
    </div>
  );
};

export default Home;
