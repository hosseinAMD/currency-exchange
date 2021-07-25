import { useEffect, useCallback, useMemo, useState, ChangeEvent } from "react";
import { dayOptions } from "data/days";
import { useFetch } from "hooks/use-fetch";
import { ExchangeHistoryData } from "models/ExchangeHistoryData";
import { getExchangeHistory } from "services/convertor";
import { minusDays } from "utils/date";
import { exchangeHistoryDataParser } from "helpers/exchangeHistoryDataParser";
import Divider from "components/common/divider";
import { DisplayTypes } from "constants/ExchangeHistoryDisplayTypes";
import ExchangeHistoryPanel from "components/pages/home/exchange-history-panel";
import { displayTypeOptions } from "data/displayTypeOptions";
import ExchangeHistoryTables from "components/pages/home/exchange-history-tables";
import ExchangeHistoryChart from "components/pages/home/exchange-history-chart";
import PageLoader from "components/common/page-loader";
import t from "i18n";

export interface ExchangeHistoryProps {
  from: string;
  target: string;
}

const ExchangeHistory: React.FC<ExchangeHistoryProps> = ({ from, target }) => {
  const [days, setDays] = useState<number>(Number(dayOptions[0].value));
  const [data, setData] = useState<Array<ExchangeHistoryData>>([]);
  const [displayType, setDisplayType] = useState<string>(DisplayTypes.TABLE);
  const [avg, setAvg] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const selectDayHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setDays(Number(e.currentTarget.value));
  };

  const toggleDisplayType = (e: ChangeEvent<HTMLInputElement>) => {
    setDisplayType(e.currentTarget.value);
  };

  const endDate = useMemo(() => {
    const today = new Date();
    return today.toISOString();
  }, []);

  const startDate = useMemo(() => {
    const today = new Date();
    const start = minusDays(today, days);
    return start.toISOString();
  }, [days]);

  const responseHandler = useCallback((res) => {
    const parsedData = exchangeHistoryDataParser(res[0]);
    setData(parsedData.parsedArray);
    setAvg(parsedData.avg);
    setMax(parsedData.max);
    setMin(parsedData.min);
  }, []);

  const [loading, error, fetchApi] = useFetch(
    getExchangeHistory(from, target, startDate, endDate),
    responseHandler,
    false,
    1000
  );

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return (
    <div>
      <Divider />
      <p className="section-title">{t("exchangeHistory")}</p>
      <PageLoader loading={loading} error={error} onRefresh={fetchApi}>
        <ExchangeHistoryPanel
          duration={days}
          durationOptions={dayOptions}
          displayType={displayType}
          displayTypeOptions={displayTypeOptions}
          durationChangeHandler={selectDayHandler}
          toggleChartFlag={toggleDisplayType}
        />
        {displayType === DisplayTypes.TABLE ? (
          <ExchangeHistoryTables
            data={data}
            lowest={min}
            average={avg}
            highest={max}
          />
        ) : (
          <ExchangeHistoryChart data={data} />
        )}
      </PageLoader>
    </div>
  );
};

export default ExchangeHistory;
