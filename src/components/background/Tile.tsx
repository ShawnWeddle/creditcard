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
  "#FF8000",
  "#FFFF00",
  "#FF0080",
  "#00FF80",
  "#00FFFF",
];

const Tile: React.FC<TileProps> = (props: TileProps) => {
  const { color, position } = props;

  return (
    <svg width="200" height="200">
      <polygon
        points={pointsList[position]}
        fill="#0080FF"
        stroke={colorList[color]}
        strokeWidth={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Tile;
