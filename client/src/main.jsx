import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Importando Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importando o meu gerenciador de rotas
import MyRouter from "./MyRouter.jsx";
// Provedor de rotas, do react-router
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={MyRouter} />
  </StrictMode>
);
