//Importação dos componentes do bootstrap
import {
  Container,
  FloatingLabel,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

import styles from "./Login.module.css";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <div className={styles.pageLogin}>
      <Container>
        {/* Linha para guardar os campos de Login e ícone */}

        <Row className="g-0">
          {/* Coluna para o ícone da página */}
          <Col className={styles.left}>
            <img src={logo} alt="Logo" />
          </Col>

          {/* Lado do Formulário */}
          <Col md={6} className={styles.right}>
            <Form style={{ width: "100%", maxWidth: "400px" }}>
              {/* Campo para Título do sistema */}
              <h1 className="mb-5">LOGIN</h1>

              {/* Caixa para o email */}
              <FloatingLabel
                controlId="floatingEmail"
                label="Digite seu email"
                // className="mb-5"
                className={styles.floating}
              >
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className={styles.inputLine}
                />
              </FloatingLabel>

              {/* Caixa para senha */}
              <FloatingLabel
                controlId="floatingSenha"
                label="Digite a sua senha"
                // className="mb-5"
                className={styles.floating}
              >
                <Form.Control
                  type="password"
                  placeholder="Senha"
                  className={styles.inputLine}
                />
              </FloatingLabel>

              <Row className={styles.remeberPassword}>
                <a href="./Cadastro"></a>
              </Row>

              {/* Lembre-se de mim */}
              <Form.Check
                type="checkbox"
                label="Lembre-se de mim"
                className={styles.remember}
              />

              <Button
                style={{ backgroundColor: "#207178" }}
                variant="primary"
                type="submit"
                className="mt-5"
                size="lg"
              >
                Entrar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
