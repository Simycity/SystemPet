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
import Funcionarios from "./pages/Funcionários/Funcionarios.jsx";
import VerFuncionarios from "./pages/Funcionários/VerFuncionarios.jsx";
import AtualizarFuncionarios from "./pages/Funcionários/AtualizarFuncionario/AtualizarFuncionario.jsx";
import CadastarFuncionario from "./pages/Funcionários/CadastroFuncionario/CadastrarFuncionario.jsx";

// Importação da págin DE Clientes
import Clientes from "./pages/Clientes/Clientes.jsx";
import VerClientes from "./pages/Clientes/VerCliente.jsx";
import AtualizarClientes from "./pages/Clientes/AtualizarCliente/AtualizarCliente.jsx";
import CastrarCliente from "./pages/Clientes/CadastrarCliente/CadastrarCliente.jsx";

// Importando página de Pets
import Pets from "./pages/Pets/Pets.jsx";
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
    children: [{ path: "home", element: <Home /> }],
  },
]);

export default router;
