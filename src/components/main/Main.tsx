// import CreditCard from "../card/CreditCard";
// import SevenSquare from "../card/SevenSquare";
import Tile from "../background/Tile";
import { numberGeneration } from "@/utils/numberGenerator";

const Main: React.FC = () => {
  const pList = numberGeneration(5, 14, 12);
  const cList = numberGeneration(5, 14, 5);
  const list = pList.map((value, index) => {
    return [value, cList[index]];
  });
  return (
    <div className="grid grid-cols-5">
      {list.map((num, index) => {
        return <Tile key={index} color={num[1]} position={num[0]} />;
      })}
    </div>
  );
};

export default Main;
