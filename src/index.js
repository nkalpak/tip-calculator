import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import { ThemeUiProvider } from "./lib/theme-ui";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeUiProvider>
      <App />
    </ThemeUiProvider>
  </React.StrictMode>
);
