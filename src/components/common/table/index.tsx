import { ReactNode } from "react";
import "./table.scss";

export interface TableProps {
  header: Array<string>;
  children: ReactNode;
  className?: string;
}

const Table: React.FC<TableProps> = ({ children, header, className }) => {
  return (
    <table className={`table ${className}`}>
      <thead>
        <tr className="table__header">
          {header.map((item) => (
            <td key={item}>{item}</td>
          ))}
        </tr>
      </thead>
      <tbody className="table__body">{children}</tbody>
    </table>
  );
};

export default Table;
