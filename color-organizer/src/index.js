import React, { createContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import ColorProvider from "./hooks/color-hook";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
export const ColorContext = createContext();

root.render(
  <ColorProvider>
    <App />
  </ColorProvider>
);
