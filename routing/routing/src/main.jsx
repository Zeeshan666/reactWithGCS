import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Routes from "./Routes/index.js";
import "./index.css";

import { RouterProvider } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Routes}/>
  </StrictMode>
);
