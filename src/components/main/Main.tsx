// import CreditCard from "../card/CreditCard";
// import SevenSquare from "../card/SevenSquare";
import Tile from "../background/Tile";

const Main: React.FC = () => {
  const p = [];
  for (let i = 0; i < 100; i++) {
    p[i] = 1;
  }
  return (
    <div className="grid grid-cols-5">
      {p.map((num, index) => {
        return (
          <Tile
            key={index}
            color={4}
            position={Math.floor(Math.random() * 12)}
          />
        );
      })}
    </div>
  );
};

export default Main;
