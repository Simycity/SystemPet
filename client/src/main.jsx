import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Importando Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importando Provedor de Rotas
import { RouterProvider } from "react-router-dom";
// Importando a Rota provedora (rota Pai)
import MyRouter from "./MyRouter.jsx";

// Importando provedor de contexto
import { AuthProvider } from "./contexts/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Fornecendo as informações de contexto para toda a aplicação */}
    <AuthProvider>
      <RouterProvider router={MyRouter} />
    </AuthProvider>
  </StrictMode>,
);
