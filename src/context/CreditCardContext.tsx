import { createContext, useReducer } from "react";

export const CardContext = createContext<ContextType | null>(null);

type ContextType = {
  cardState: CardReducerState;
  cardDispatch: React.Dispatch<CardReducerAction>;
};

type CardContextProviderProps = {
  children: React.ReactNode;
};

type CardReducerState = {
  cardNumber: string;
  expDate: [string, string];
  cvv: string;
  name: string;
};

type CardReducerAction = {
  type: "CHANGE_CARD_NUMBER" | "CHANGE_EXPDATE" | "CHANGE_CVV" | "CHANGE_NAME";
  payload: CardReducerState;
};

export const cardReducer = (
  state: CardReducerState,
  action: CardReducerAction
) => {
  switch (action.type) {
    case "CHANGE_CARD_NUMBER":
      return {
        ...state,
        cardNumber: action.payload.cardNumber,
      };
    case "CHANGE_EXPDATE":
      return {
        ...state,
        expDate: action.payload.expDate,
      };
    case "CHANGE_CVV":
      return {
        ...state,
        cvv: action.payload.cvv,
      };
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export const CardContextProvider = ({ children }: CardContextProviderProps) => {
  const [cardState, cardDispatch] = useReducer(cardReducer, {
    cardNumber: "XXXXXXXXXXXXXXXX",
    expDate: ["XX", "XX"],
    cvv: "XXX",
    name: "X",
  });

  return (
    <CardContext.Provider value={{ cardState, cardDispatch }}>
      {children}
    </CardContext.Provider>
  );
};
