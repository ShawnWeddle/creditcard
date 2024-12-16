import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CardContextProvider } from "./context/CreditCardContext.tsx";
import { DialogContextProvider } from "./context/DialogContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DialogContextProvider>
      <CardContextProvider>
        <App />
      </CardContextProvider>
    </DialogContextProvider>
  </StrictMode>
);
