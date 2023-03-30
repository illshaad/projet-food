import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataFoodProvider } from "./context/context";
import Food from "./Components/food";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/food",
    element: <Food />,
  },
]);

root.render(
  <React.StrictMode>
    <DataFoodProvider>
      <RouterProvider router={router} />
    </DataFoodProvider>
  </React.StrictMode>
);

reportWebVitals();
