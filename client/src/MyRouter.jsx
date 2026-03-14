import { createBrowserRouter } from "react-router-dom";

// Importação do componente principal
import App from "./App.jsx";

// Importação de Erro de Página & Rotas Protegidas
import PaginaErro from "./pages/PaginaError.jsx";
import RotasProtegidas from "./pages/RotasProtegidas.jsx";

// Importação das páginas
import Login from "./pages/Login/Login.jsx";
import Cadastro from "./pages/Cadastro/Cadastro.jsx";

const router = createBrowserRouter([
  // Adicionando a rota principal
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "cadastro", element: <Cadastro /> },
    ],
  },
]);

export default router;
