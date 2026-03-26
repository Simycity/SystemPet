// Importando componentes do bootstrap
import { Container, Nav, Navbar } from "react-bootstrap";

const BarraNavegacao = () => {
    return(
        <div>
            <Navbar.Brand bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav href="#home">NavBar</Nav>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>    
                        <Nav.Link href="#Cadastro">Cadastro</Nav.Link>    
                        <Nav.Link href="#CardPet">CardPet</Nav.Link>    
                        <Nav.Link href="#Clientes">Funcionarios</Nav.Link>    
                        <Nav.Link href="#Funcionarios">Funcionarios</Nav.Link>    
                    </Nav>  
                </Container>
            </Navbar.Brand>
        </div>
    );
}

export default BarraNavegacao;