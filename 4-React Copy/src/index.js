import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

// This is the entry point for the app. You shouldn't need to change this file

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
