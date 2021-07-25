import HistoryHeader from "components/pages/history/history-header";
import HistoryRow from "components/pages/history/history-row";
import { ConversionHistoryContext } from "contexts/ConversionHistoryContext";
import t from "i18n";
import { useContext } from "react";

const History: React.FC = () => {
  const { data } = useContext(ConversionHistoryContext);

  return (
    <div>
      <p className="page-title">{t("conversionHistory")}</p>
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
