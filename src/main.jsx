import React from "react";
import ReactDOM from "react-dom/client";
import "./base.scss";
import "normalize.css";
import AppRoutes from "./routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
