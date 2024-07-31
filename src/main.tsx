import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { defineCustomElements } from "@arcgis/map-components/dist/loader";

import "./index.css";

defineCustomElements(window);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
