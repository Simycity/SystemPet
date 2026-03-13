import { Outlet, Navigate } from "react-router-dom";

import Container from "react-bootstrap/Container";

// Importando informações de contexto e autenticação de usuario
import { AuthContext } from "../contexts/UserContext.jsx";
import { useContext } from "react";

// Importando Barra de Navegação
// import BarraNavegacao from "../components/BarraNavegacao/BarraNavegacao.jsx";

const RotasProtegidas = () => {

  // Pega a variável de usuario nome pra saber se tem alguém logado
  const { usuarioNome } = useContext(AuthContext);

  if (usuarioNome === "Visitante") {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      {/* Campo para NavBar */}

      {/* Container principal, dependendo em qual está */}
      <div
        className="d-flex flex-column min-vh-100 flex-grow-1 p-2 justify-content-center"
        style={{ marginLeft: "350px" }}
      >
        <Container fluid>
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

export default RotasProtegidas;
