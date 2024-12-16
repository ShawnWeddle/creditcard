import { createContext, useReducer } from "react";

export const DialogContext = createContext<ContextType | null>(null);

type ContextType = {
  dialogState: DialogReducerState;
  dialogDispatch: React.Dispatch<DialogReducerAction>;
};

type DialogContextProviderProps = {
  children: React.ReactNode;
};

type DialogReducerState = {
  open: boolean;
  mode: number;
};

type DialogReducerAction = {
  type: "OPEN_DIALOG" | "CLOSE_DIALOG" | "CHANGE_GAME";
  payload: DialogReducerState;
};

export const dialogReducer = (
  state: DialogReducerState,
  action: DialogReducerAction
) => {
  switch (action.type) {
    case "OPEN_DIALOG":
      return {
        ...state,
        open: true,
      };
    case "CLOSE_DIALOG":
      return {
        ...state,
        open: false,
      };
    case "CHANGE_GAME":
      return {
        ...state,
        mode: action.payload.mode,
      };
    default:
      return state;
  }
};

export const DialogContextProvider = ({
  children,
}: DialogContextProviderProps) => {
  const [dialogState, dialogDispatch] = useReducer(dialogReducer, {
    open: false,
    mode: 0,
  });

  return (
    <DialogContext.Provider value={{ dialogState, dialogDispatch }}>
      {children}
    </DialogContext.Provider>
  );
};
