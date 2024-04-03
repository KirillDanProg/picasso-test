import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./providers/router-provider/router";
import "./styles/index.scss";
import { RouterProviderC } from "./providers/router-provider";
import { StoreProvider } from "./providers/store-provider/ui";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <RouterProviderC router={router} />
  </StoreProvider>
);
