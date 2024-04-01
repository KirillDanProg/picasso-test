import React from "react";
import ReactDOM from "react-dom/client";
import { Providers } from "./provider";
import { router } from "./router";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers router={router} />
  </React.StrictMode>
);
