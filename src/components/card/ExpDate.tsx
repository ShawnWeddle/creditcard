import { useCardContext } from "@/hooks/useCreditCardContext";
import NumberButton from "./NumberButton";

const ExpDate: React.FC = () => {
  const { cardState } = useCardContext();
  const monthArray = cardState.expDate[0].split("");
  const yearArray = cardState.expDate[1].split("");

  return (
    <div className="flex justify-start items-center">
      <div className="flex flex-col">
        <span className="font-bold text-lg -my-1.5">GOOD</span>
        <span className="font-bold text-lg -my-1.5">THRU</span>
      </div>
      <NumberButton content={monthArray[0]} />
      <NumberButton content={monthArray[1]} />
      <span className="font-bold text-2xl">/</span>
      <NumberButton content={yearArray[0]} />
      <NumberButton content={yearArray[1]} />
    </div>
  );
};

export default ExpDate;
