import { ExchangeHistoryData } from "models/ExchangeHistoryData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { formatDate } from "utils/date";
import "./exchange-history-chart.scss";

export interface ExchangeHistoryChartProps {
  data: Array<ExchangeHistoryData>;
}

const ExchangeHistoryChart: React.FC<ExchangeHistoryChartProps> = ({
  data,
}) => {
  return (
    <div className="chart">
      <LineChart
        width={720}
        height={300}
        data={data}
        className="chart__wrapper"
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="time"
          fontSize={"0.75rem"}
          tickFormatter={(value) => formatDate(value)}
        />
        <YAxis dataKey="price" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#009688"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default ExchangeHistoryChart;
