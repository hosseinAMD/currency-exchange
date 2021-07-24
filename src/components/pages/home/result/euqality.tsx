export interface EqualityProps {
  leftHandLabel: string;
  leftHandValue: string | number;
  rightHandLable: string;
  rightHandValue: string | number;
  leftHandClassName?: string;
  rightHandClassName?: string;
  className?: string;
}

const Equality: React.FC<EqualityProps> = ({
  leftHandLabel,
  leftHandValue,
  rightHandLable,
  rightHandValue,
  leftHandClassName,
  rightHandClassName,
  className,
}) => {
  return (
    <p className={className}>
      <span className={leftHandClassName}>
        {leftHandValue} {leftHandLabel}
      </span>{" "}
      ={" "}
      <span className={rightHandClassName}>
        {rightHandValue} {rightHandLable}
      </span>
    </p>
  );
};

export default Equality;
