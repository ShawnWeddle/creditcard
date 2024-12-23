import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useCardContext } from "@/hooks/useCreditCardContext";
import { useDialogContext } from "@/hooks/useDialogContext";

const Game01: React.FC = () => {
  const { cardDispatch, cardState } = useCardContext();
  const { dialogDispatch } = useDialogContext();

  const [breakdown, setBreakdown] = useState(
    new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  );

  const handleSet = (num: number) => {
    const newBD = new Set([...breakdown]);
    if (newBD.has(num)) {
      newBD.delete(num);
    } else {
      newBD.add(num);
    }
    setBreakdown(newBD);
  };

  const handleSubmit = (num: number) => {
    const activeState = cardState;
    const activeCCN = cardState.cardNumber;
    const midCCN = activeCCN.split("");
    midCCN[0] = num.toString();
    const newCCN = midCCN.join("");
    cardDispatch({
      type: "CHANGE_CARD_NUMBER",
      payload: { ...activeState, cardNumber: newCCN },
    });
    dialogDispatch({
      type: "CLOSE_DIALOG",
      payload: {
        open: false,
        mode: -1,
      },
    });
  };

  const NumButton = (num: number) => {
    return (
      <button
        onClick={() => {
          handleSet(num);
        }}
        className={cn(
          "text-lg border-black border-2 rounded aspect-square p-1 font-semibold m-1",
          {
            "border-red-500 bg-red-500 text-white": !breakdown.has(num),
          }
        )}
      >
        {num}
      </button>
    );
  };

  return (
    <div>
      <div className="text-xl font-semibold text-center">
        Select all incorrect digits
      </div>
      <div className="flex justify-center my-4">
        <div className="grid grid-cols-3">
          {NumButton(1)}
          {NumButton(2)}
          {NumButton(3)}
          {NumButton(4)}
          {NumButton(5)}
          {NumButton(6)}
          {NumButton(7)}
          {NumButton(8)}
          {NumButton(9)}
          <div></div>
          {NumButton(0)}
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          type="submit"
          variant="secondary"
          disabled={[...breakdown].length !== 1}
          onClick={() => {
            handleSubmit([...breakdown][0]);
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Game01;
