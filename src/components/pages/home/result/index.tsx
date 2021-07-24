import Equality from "./euqality";
import "./result.scss";

export interface ResultProps {
  from: string;
  target: string;
  fromUnitRate: string;
  targetUnitRate: string;
  fromValue: string;
  targetValue: string;
  error?: string;
}

const Result: React.FC<ResultProps> = ({
  from,
  target,
  fromUnitRate,
  targetUnitRate,
  fromValue,
  targetValue,
  error = "",
}) => {
  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="result">
      <Equality
        leftHandLabel={from}
        leftHandValue={fromValue}
        rightHandLable={target}
        rightHandValue={targetValue}
        className="page-title"
        rightHandClassName="result__main"
      />
      <Equality
        leftHandLabel={from}
        leftHandValue={1}
        rightHandLable={target}
        rightHandValue={targetUnitRate}
      />
      <Equality
        leftHandLabel={target}
        leftHandValue={1}
        rightHandLable={from}
        rightHandValue={fromUnitRate}
      />
    </div>
  );
};

export default Result;
