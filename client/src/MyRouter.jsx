import { createBrowserRouter } from "react-router-dom";

// Importação do componente principal
import App from "./App.jsx";

// Importação de Erro de Página & Rotas Protegidas
import PaginaErro from "./pages/PaginaError.jsx";
import RotasProtegidas from "./pages/RotasProtegidas.jsx";

// Importação das páginas principais
import Login from "./pages/Login/Login.jsx";
import Cadastro from "./pages/Cadastro/Cadastro.jsx";
import Home from "./pages/Home/Home.jsx";

// Importação das páginas de Funcionários
import VerFuncionarios from "./pages/Funcionarios/VerFuncionarios.js";
import AtualizarFuncionarios from "./pages/Funcionarios/AtualizarFuncionario/AtualizarFuncionario.jsx";
import CadastarFuncionario from "./pages/Funcionarios/CadastroFuncionario/CadastrarFuncionario.jsx";

// Importação da págin de Clientes
import VerClientes from "./pages/Clientes/VerCliente.jsx";
import AtualizarClientes from "./pages/Clientes/AtualizarCliente/AtualizarCliente.jsx";
import CadastrarClientes from "./pages/Clientes/CadastrarCliente/CadastrarCliente.jsx";

// Importando página de Pets
import VerPet from "./pages/Pets/VerPet.jsx";
import AtualizarPet from "./pages/Pets/AtualizarPet/AtualizarPets.jsx";
import CadastrarPet from "./pages/Pets/CadastrarPet/CadastrarPets.jsx";

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

  // Rota da Home
  {
    path: "/",
    element: <RotasProtegidas />,
    errorElement: <PaginaErro />,
    children: [
      { path: "/home", element: <Home /> },

      // Rota de funcionários
      {
        path: "/funcionarios",
        children: [
          { index: true, element: <VerFuncionarios /> },
          { index: "cadastrar", element: <CadastarFuncionario /> },
          { index: "atualizar", element: <AtualizarFuncionarios /> },
        ],
      },

      // Rota de clientes
      {
        path: "/clientes",
        children: [
          { index: true, element: <VerClientes /> },
          { index: "cadastrar", element: <CadastrarClientes /> },
          { index: "atualizar", element: <AtualizarClientes /> },
        ],
      },

      // Rota de pets
      {
        path: "/pets",
        children: [
          { index: true, element: <VerPet /> },
          { index: "cadastrar", element: <CadastrarPet /> },
          { index: "atualizar", element: <AtualizarPet /> },
        ],
      },

      








    ],
  },
]);

export default router;
