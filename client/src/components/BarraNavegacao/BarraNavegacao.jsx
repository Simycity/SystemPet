// Importando componentes do bootstrap
import { Container, Nav, NavBar } from "react-bootstrap";

const BarraNavegacao = () => {
    return(
        <div>
            <NavBar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav.Brand href="#home">NavBar</Nav.Brand>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>    
                        <Nav.Link href="#Cadastro">Cadastro</Nav.Link>    
                        <Nav.Link href="#CardPet">CardPet</Nav.Link>    
                        <Nav.Link href="#Clientes">Funcionarios</Nav.Link>    
                        <Nav.Link href="#Funcionarios">Funcionarios</Nav.Link>    
                    </Nav>  
                </Container>
            </NavBar>
        </div>
    );
}

export default BarraNavegacao;