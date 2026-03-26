// Importação do module
import styles from "./Cadastro.module.css";

import { useState } from "react";

import {
  Container,
  Row,
  Col,
  FloatingLabel,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import logo from "../../assets/PetLux.png";

const Cadastro = () => {
  // Declarando e utilizando useNavigate
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    confirmarEmail: "",
    senha: "",
    confirmarSenha: "",
  });

  const [erro, setErro] = useState("");

  const handleChange = (e) => {
    setForm({ ...Form, [e.target.nome]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email !== form.confirmarEmail) {
      setErro("Email's não não são iguais!");
      return;
    }

    if (form.senha !== form.confirmarSenha) {
      setErro("Senhas não são iguais!");
      return;
    }

    console.log("Dados cadastrados:", form);
    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  };

  return (
    <div className={styles.leftBox}>
      <Container fluid className={styles.pageCadastro}>
        <Row className="h-100">
          {/* Coluna para a logo */}
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <img src={logo} alt="Imagem logo" className={styles.logo} />
          </Col>

          {/* Coluna dos campos do form */}
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <div>
              {erro && (
                <Alert variant="danger" onClose={() => setErro("")} dismissible>
                  {erro}
                </Alert>
              )}
            </div>

            <Form className={styles.form} onSubmit={handleSubmit}>
              {/* Título da página */}
              <h1 className={styles.tituloCadastro}>Cadastro</h1>

              {/* Nome */}
              <FloatingLabel
                controlId="inputNome"
                label="Infome seu nome"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="Nome"
                  placeholder="Nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>

              {/* Email */}
              <FloatingLabel
                controlId="inputEmail"
                label="Informe seu Email"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>

              {/* Confirmar Email */}
              <FloatingLabel
                controlId="inputConfirmarEmail"
                label="Confirme seu Email"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  name="ConfirmarEmail"
                  placeholder="Confirme seu Email"
                  value={form.confirmarEmail}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>

              {/* Senha */}
              <FloatingLabel
                controlId="inputSenha"
                label="senha"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  name="senha"
                  placeholder="Digite sua senha"
                  value={form.senha}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>

              {/* Confirmar Senha */}
              <FloatingLabel
                controlId="inputConfirmarSenha"
                label="Confirmar Senha"
                className="mb-3"
              >
                <Form.Control
                  ype="password"
                  name="confirmarSenha"
                  placeholder="Confirmar Senha"
                  value={form.confirmarSenha}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>

              <div>
                <Button
                  style={{
                    backgroundColor: "#2d3839",
                    color: "#fffff",
                  }}
                  type="submit"
                  className="mb-4"
                  size="lg"
                >
                  CADASTRO
                </Button>
              </div>

              {/* Link para Página de Cadastro */}
              <p className={styles.linkCadastro}>
                Já possui uma conta?{""}
                <span
                  className={styles.link}
                  onClick={() => navigate("/login")}
                >
                  Faça login
                </span>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cadastro;
