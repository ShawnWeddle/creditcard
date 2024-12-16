import NumberButton from "./NumberButton";

const ExpDate: React.FC = () => {
  return (
    <div className="flex justify-start items-center">
      <div className="flex flex-col">
        <span className="font-bold text-lg -my-1.5">GOOD</span>
        <span className="font-bold text-lg -my-1.5">THRU</span>
      </div>
      <NumberButton>2</NumberButton>
      <NumberButton>2</NumberButton>
      <span className="font-bold text-2xl">/</span>
      <NumberButton>2</NumberButton>
      <NumberButton>2</NumberButton>
    </div>
  );
};

export default ExpDate;
