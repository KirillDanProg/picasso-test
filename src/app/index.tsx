import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";
import "./styles/index.scss";
import { RouterProviderC } from "./providers/router-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProviderC router={router} />
  </React.StrictMode>
);
