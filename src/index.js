import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TabProvider } from "./context/TabContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TabProvider>
      <App />
    </TabProvider>
  </React.StrictMode>
);
