import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

document.documentElement.className =
  "overflow-x-hidden scroll-smooth scroll-pt-6 bg-[#090b0f]";
document.body.className =
  "m-0 min-w-80 overflow-x-hidden bg-[#090b0f] text-[#f7f7f2] antialiased [color-scheme:dark] [font-family:Inter,system-ui,sans-serif]";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
