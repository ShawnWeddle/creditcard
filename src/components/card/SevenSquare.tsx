import { cn } from "@/lib/utils";

interface SquareProps {
  num: number;
}

const SevenSquare: React.FC = () => {
  const picks: number[] = [];

  for (let i = 0; i < 49; i++) {
    picks[i] = Math.floor(Math.random() * 10);
  }

  const Square: React.FC<SquareProps> = (props: SquareProps) => {
    const { num } = props;
    const borderNum = Math.floor(Math.random() * 10);
    return (
      <div
        className={cn("w-12 aspect-square shadow border-4 rounded", {
          "bg-red-500": num === 0,
          "bg-orange-500": num === 1,
          "bg-yellow-300": num === 2,
          "bg-lime-300": num === 3,
          "bg-green-500": num === 4,
          "bg-cyan-500": num === 5,
          "bg-blue-500": num === 6,
          "bg-indigo-500": num === 7,
          "bg-purple-600": num === 8,
          "bg-pink-400": num === 9,
          "border-red-500": borderNum === 0,
          "border-orange-500": borderNum === 1,
          "border-yellow-300": borderNum === 2,
          "border-lime-400": borderNum === 3,
          "border-green-500": borderNum === 4,
          "border-cyan-500": borderNum === 5,
          "border-blue-500": borderNum === 6,
          "border-indigo-500": borderNum === 7,
          "border-purple-600": borderNum === 8,
          "border-pink-400": borderNum === 9,
        })}
      ></div>
    );
  };

  const Squares = picks.map((input, index) => {
    return <Square key={index} num={input} />;
  });

  return <div className="grid grid-cols-7 gap-2">{Squares}</div>;
};

export default SevenSquare;
