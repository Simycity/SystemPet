// Module
import styles from "./BarraNavegacao.module.css";

// Importando Logo
import logo from "../../assets/PetLux.png";

// Importando componentes do bootstrap
import { Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

const BarraNavegacao = () => {
  return (
    <div className={styles.page}>
      <img src={logo} alt="PetLux" className={styles.logo} />
      <Navbar bg="dark" variant="dark" className={styles.navbarCustom}>
        <Container>
          <Navbar.Brand className={styles.container}></Navbar.Brand>

          <Nav>
            <Nav.Link as={Link} to="/home" className={styles.navLink}>
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/cadastro" className={styles.navLink}>
              Cadastro
            </Nav.Link>

            <Nav.Link as={Link} to="/pets" className={styles.navLink}>
              Pets
            </Nav.Link>

            <Nav.Link as={Link} to="/funcoes" className={styles.navLink}>
              Funções
            </Nav.Link>
            
            <Nav.Link as={Link} to="/funcionarios" className={styles.navLink}>
              Funcionarios
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default BarraNavegacao;
