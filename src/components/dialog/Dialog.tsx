import { useDialogContext } from "@/hooks/useDialogContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Game01 from "../games/Game1";

const DialogMain = () => {
  const { dialogState, dialogDispatch } = useDialogContext();
  const { open, mode } = dialogState;
  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (open) return;
        dialogDispatch({ type: "CLOSE_DIALOG", payload: { open, mode } });
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Digit {mode}</DialogTitle>
        </DialogHeader>
        <Game01 />
      </DialogContent>
    </Dialog>
  );
};

export default DialogMain;
