import { cn } from "@/lib/utils";
import { useDialogContext } from "@/hooks/useDialogContext";

type NumberButtonProps = {
  content: string;
  mode: number;
};

const NumberButton: React.FC<NumberButtonProps> = (
  props: NumberButtonProps
) => {
  const { content, mode } = props;
  const newContent = content ?? "X";
  const { dialogDispatch } = useDialogContext();
  return (
    <button
      onClick={() => {
        dialogDispatch({
          type: "CHANGE_GAME",
          payload: { open: true, mode },
        });
        dialogDispatch({
          type: "OPEN_DIALOG",
          payload: { open: true, mode },
        });
      }}
      className={cn("text-2xl font-bold rounded p-1 px-2 m-1 my-3", {
        "bg-white": newContent === "X",
        "text-yellow-300": newContent !== "X",
      })}
    >
      {newContent ?? "X"}
    </button>
  );
};

export default NumberButton;
