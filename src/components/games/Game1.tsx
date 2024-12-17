import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const Game01: React.FC = () => {
  const [breakdown, setBreakdown] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const setBD = (num: number) => {
    const newDB = [...breakdown];
    const single = newDB[num];
    newDB[num] = !single;
    setBreakdown(newDB);
  };

  const NumButton = (num: number) => {
    return (
      <button
        onClick={() => {
          setBD(num);
        }}
        className={cn(
          "text-lg border-black border-2 rounded aspect-square p-1 font-semibold m-1",
          {
            "border-red-500 bg-red-500 text-white": breakdown[num],
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
          variant="secondary"
          disabled={breakdown.filter((bool) => bool).length < 9}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Game01;

/*
const bd = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  };
*/
