import NumberButton from "./NumberButton";

const CVV: React.FC = () => {
  return (
    <div className="flex justify-start items-center">
      <span className="font-bold text-2xl">CVV</span>
      <NumberButton>2</NumberButton>
      <NumberButton>2</NumberButton>
      <NumberButton>2</NumberButton>
    </div>
  );
};

export default CVV;
