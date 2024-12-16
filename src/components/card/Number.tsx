import { useCardContext } from "@/hooks/useCreditCardContext";
import NumberButton from "./NumberButton";

const Number: React.FC = () => {
  const { cardState } = useCardContext();
  const numArray = cardState.cardNumber.split("");
  return (
    <div className="flex justify-center">
      <div className="flex justify-center p-2">
        <NumberButton mode={1} content={numArray[0]} />
        <NumberButton mode={-1} content={numArray[1]} />
        <NumberButton mode={-1} content={numArray[2]} />
        <NumberButton mode={-1} content={numArray[3]} />
      </div>
      <div className="flex justify-center p-2">
        <NumberButton mode={-1} content={numArray[4]} />
        <NumberButton mode={-1} content={numArray[5]} />
        <NumberButton mode={-1} content={numArray[6]} />
        <NumberButton mode={-1} content={numArray[7]} />
      </div>
      <div className="flex justify-center p-2">
        <NumberButton mode={-1} content={numArray[8]} />
        <NumberButton mode={-1} content={numArray[9]} />
        <NumberButton mode={-1} content={numArray[10]} />
        <NumberButton mode={-1} content={numArray[11]} />
      </div>
      <div className="flex justify-center p-2">
        <NumberButton mode={-1} content={numArray[12]} />
        <NumberButton mode={-1} content={numArray[13]} />
        <NumberButton mode={-1} content={numArray[14]} />
        <NumberButton mode={-1} content={numArray[15]} />
      </div>
    </div>
  );
};

export default Number;
