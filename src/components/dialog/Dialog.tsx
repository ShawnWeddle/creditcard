import { useDialogContext } from "@/hooks/useDialogContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
          <DialogDescription>Add your first digit</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogMain;
