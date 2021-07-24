import Table from "components/common/table";
import { ExchangeHistoryData } from "models/ExchangeHistoryData";
import { formatDate } from "utils/date";
import t from "i18n";
import "./exchange-history-tables.scss";

export interface ExchangeHistoryTablesProps {
  data: Array<ExchangeHistoryData>;
  lowest: number;
  average: number;
  highest: number;
}

const ExchangeHistoryTables: React.FC<ExchangeHistoryTablesProps> = ({
  data,
  lowest,
  average,
  highest,
}) => {
  return (
    <div className="exchange-history-tables">
      <Table header={[t("date"), t("exchangeRate")]}>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{formatDate(item.time)}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </Table>
      <Table header={[t("statistics")]} className="stats">
        <tr>
          <td>{t("lowest")}</td>
          <td>{lowest}</td>
        </tr>
        <tr>
          <td>{t("average")}</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>{t("highest")}</td>
          <td>{highest}</td>
        </tr>
      </Table>
    </div>
  );
};

export default ExchangeHistoryTables;
