import { useCardContext } from "@/hooks/useCreditCardContext";
import NumberButton from "./NumberButton";

const Name: React.FC = () => {
  const { cardState } = useCardContext();

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col">
        <span className="font-bold text-lg -my-1.5">NAME ON</span>
        <span className="font-bold text-lg -my-1.5">CARD</span>
      </div>
      <NumberButton mode={-1} content={cardState.name} />
    </div>
  );
};

export default Name;
