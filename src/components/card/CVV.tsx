import { useCardContext } from "@/hooks/useCreditCardContext";
import NumberButton from "./NumberButton";

const CVV: React.FC = () => {
  const { cardState } = useCardContext();
  const cvvArray = cardState.cvv.split("");

  return (
    <div className="flex justify-start items-center">
      <span className="font-bold text-2xl">CVV</span>
      <NumberButton content={cvvArray[0]} />
      <NumberButton content={cvvArray[1]} />
      <NumberButton content={cvvArray[2]} />
    </div>
  );
};

export default CVV;
