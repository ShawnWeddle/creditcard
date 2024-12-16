import { useCardContext } from "@/hooks/useCreditCardContext";
import NumberButton from "./NumberButton";

const Number: React.FC = () => {
  const { cardState } = useCardContext();
  const numArray = cardState.cardNumber.split("");
  return (
    <div className="flex justify-center">
      <div className="flex justify-center p-2">
        <NumberButton content={numArray[0]} />
        <NumberButton content={numArray[1]} />
        <NumberButton content={numArray[2]} />
        <NumberButton content={numArray[3]} />
      </div>
      <div className="flex justify-center p-2">
        <NumberButton content={numArray[4]} />
        <NumberButton content={numArray[5]} />
        <NumberButton content={numArray[6]} />
        <NumberButton content={numArray[7]} />
      </div>
      <div className="flex justify-center p-2">
        <NumberButton content={numArray[8]} />
        <NumberButton content={numArray[9]} />
        <NumberButton content={numArray[10]} />
        <NumberButton content={numArray[11]} />
      </div>
      <div className="flex justify-center p-2">
        <NumberButton content={numArray[12]} />
        <NumberButton content={numArray[13]} />
        <NumberButton content={numArray[14]} />
        <NumberButton content={numArray[15]} />
      </div>
    </div>
  );
};

export default Number;
