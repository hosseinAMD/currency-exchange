import { useContext } from "react";
import HistoryHeader from "components/pages/history/history-header";
import HistoryRow from "components/pages/history/history-row";
import { ConversionHistoryContext } from "contexts/ConversionHistoryContext";
import t from "i18n";
import "./history.scss";

const History: React.FC = () => {
  const { data, clearHistory } = useContext(ConversionHistoryContext);

  return (
    <div>
      <div className="conversion-history-header">
        <p className="page-title">{t("conversionHistory")}</p>
        <div>
          <button onClick={clearHistory} className="clear-history">
            {t("clearHistory")}
          </button>
        </div>
      </div>
      <div>
        <HistoryHeader header={[t("date"), t("event"), t("actions")]} />
        {data.map((item) => (
          <HistoryRow key={item.uuid} {...item} />
        ))}
      </div>
    </div>
  );
};

export default History;
