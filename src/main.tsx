import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { DataProvider } from "./contexts/MainContext";
import { router } from "./routes/index";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>,
);
