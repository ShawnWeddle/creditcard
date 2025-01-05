// import { cn } from "@/lib/utils";

interface TileProps {
  color: number;
  position: number;
}

const pointsList: string[] = [
  "10,10 190,100 190,190 10,190",
  "10,10 100,10 190,190 10,190",
  "10,10 190,10 100,190 10,190",
  "10,10 190,10 190,100 10,190",
  "10,10 190,10 190,190 10,100",
  "10,10 190,10 190,190 100,190",
  "100,10 190,10 190,190 10,190",
  "10,100 190,10 190,190 10,190",
  "10,10 100,10 100,190 10,190",
  "100,10 190,10 190,190 100,190",
  "10,10 190,10 190,100 10,100",
  "10,100 190,100 190,190 10,190",
];

const colorList: string[] = [
  "#f00",
  "#ff0",
  "#0f0",
  "#0ff",
  "#00f",
  "#f0f",
  "#000",
  "#fff",
  "#b00",
  "#bb0",
  "#0b0",
  "#0bb",
];

const Tile: React.FC<TileProps> = (props: TileProps) => {
  const { color, position } = props;

  return (
    <svg width="200" height="200">
      <polygon
        points={pointsList[position]}
        fill={colorList[position]}
        stroke={colorList[position]}
        strokeWidth={10}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Tile;
