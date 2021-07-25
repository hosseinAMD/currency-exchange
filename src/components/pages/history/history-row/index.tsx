import { ConversionHistory } from "models/ConversionHistory";
import { formatDateTime } from "utils/date";
import t from "i18n";
import "./history-row.scss";
import { useMemo } from "react";
import ActionButton from "components/common/action-button";
import { ActionButtonTypes } from "constants/ActionButtonTypes";
import { useContext } from "react";
import { ConversionHistoryContext } from "contexts/ConversionHistoryContext";
import { useHistory } from "react-router-dom";
import { paths } from "router/paths";

export interface HistoryRowProps extends ConversionHistory {}

const HistoryRow: React.FC<HistoryRowProps> = ({
  date,
  from,
  target,
  amount,
  uuid,
}) => {
  const { removeFromHistory } = useContext(ConversionHistoryContext);
  const history = useHistory();

  const desc = useMemo(
    () =>
      `${t("historyDescription")} ${amount} ${t("from")} ${from} ${t(
        "to"
      )} ${target}`,
    [amount, from, target]
  );

  const remove = () => {
    removeFromHistory(uuid);
  };

  const view = () => {
    const path = `${paths.home}${uuid}`;
    history.push(path);
  };

  return (
    <div className="history-row">
      <div>{formatDateTime(date)}</div>
      <div>{desc}</div>
      <div className="history-row__actions">
        <ActionButton
          label={t("view")}
          icon="remove_red_eye"
          type={ActionButtonTypes.PRIMARY}
          onClick={view}
        />
        <ActionButton
          label={t("deleteFromHistory")}
          icon="delete_forever"
          type={ActionButtonTypes.DANGER}
          onClick={remove}
        />
      </div>
    </div>
  );
};

export default HistoryRow;
