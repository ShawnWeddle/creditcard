import { cn } from "@/lib/utils";

type NumberButtonProps = {
  content: string;
};

const NumberButton: React.FC<NumberButtonProps> = (
  props: NumberButtonProps
) => {
  const { content } = props;
  return (
    <button
      className={cn("text-2xl font-bold rounded p-1 px-2 m-1 my-3", {
        "bg-white": content === "X",
        "text-yellow-300": content !== "X",
      })}
    >
      {content}
    </button>
  );
};

export default NumberButton;
