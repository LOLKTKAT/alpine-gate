import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

const rootElement = document.getElementById("root");

// Check if the root element exists before rendering
if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </React.StrictMode>,
    rootElement
  );
} else {
  console.error("Couldn't find the root element to mount the React app.");
}
