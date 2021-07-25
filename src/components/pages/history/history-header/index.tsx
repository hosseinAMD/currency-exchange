import "./history-header.scss";

export interface HistoryHeaderProps {
  header: Array<string>;
}

const HistoryHeader: React.FC<HistoryHeaderProps> = ({ header }) => {
  return (
    <div className="history-header">
      {header.map((item) => (
        <div key={item}>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default HistoryHeader;
