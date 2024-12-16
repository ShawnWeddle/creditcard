import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CardContextProvider } from "./context/CreditCardContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CardContextProvider>
      <App />
    </CardContextProvider>
  </StrictMode>
);
