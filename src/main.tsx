import { FluentProvider, teamsDarkTheme } from "@fluentui/react-components";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <FluentProvider theme={teamsDarkTheme}>
    <App />
  </FluentProvider>
  // </React.StrictMode>
);
