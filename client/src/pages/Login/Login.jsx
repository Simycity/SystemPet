// Importando estilização
import styles from "./Login.module.css";

// Importações do Bootstrap
import {
  Container,
  FloatingLabel,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

// Importando pacote de formulário
import { useForm } from "react-hook-form";

// Importação da verificação de login (autenticação)
import { AuthContext } from "../../contexts/UserContext.jsx";
import { useContext } from "react";

// Importando componentes que tratam de vaiáveis
import { useState, useEffect } from "react";

// Importação do Navigate
import { useNavigate } from "react-router-dom";

// Importando hook para a verficação de login
import { useVerificaLogin } from "../../hooks/useUsuarios.js";

// Importando a logo fo sistema
import logo from "../../assets/PetLux.png";

// Iniciando o formulário de Login
const Login = () => {
  // Criando o navigate
  const navigate = useNavigate();

  // Utilizando variavel de contexto do usuario
  const { logout } = useContext(AuthContext);

  // Assim que entrar na página, o LocalStorage é resetado
  useEffect(() => {
    logout();
  }, [logout]);

  // register = cria um obejto através dos valores do input
  // handleSubmit = envia os dados do formulário, caso de erro ou sucesso
  // formState{erros} = objeto que guarda uma lista de erros que aconteceram na hora do envio
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Classe Alert(bootstrap)
  const [alerta, setAlerta] = useState("d-none");

  // Utilizando hook de verificação de login
  const { verificaLogin } = useVerificaLogin();

  // CASOS:
  // 1 - Caso o envio dê certo
  // data = objeto que guarda todas as informações do formulário
  const onSubmit = async (data) => {
    console.log("Dados enviados:", data);

    //Chama a função assíncrona que verifica o login
    const resposta = await verificaLogin(data);

    //Caso a resposta seja positiva mostra o alerta e leva ele pra home
    if (resposta === "Login efetuado com sucesso") {
      alert(resposta);
      navigate("/home");
    } else {
      // exibe o alerta de erro
      setAlerta("my-3 w-75 mx-auto");
    }
  };

  // 2 - Caso dê errado
  // errors = objeto com todos os erros de envio
  const onError = (errors) => {
    console.log("Errors:", errors);
  };

  return (
    <div className={styles.box}>
      <Container fluid className={styles.pageLogin}>
        <Row className="h-100">
          {/* Campo de Imagem */}
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <img src={logo} alt="Logo do Sistema" className={styles.logo} />
          </Col>

          {/* Coluna com os campos de login*/}
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Form
              className={styles.form}
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              <h1 className={styles.tituloLogin}>LOGIN</h1>

              {/* Campo de Email */}
              <FloatingLabel
                controlId="inputEmail"
                label="Digite seu email"
                className="mb-4"
              >
                <Form.Control
                  type="email"
                  {...register("email", {
                    required: "O email é um campo obrigatório",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                      message: "Email inválido",
                    },
                    validate: (value) =>
                      value.includes("@") || "O email deve possuir um @",
                  })}
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </FloatingLabel>

              {/* Campo de Senha */}
              <FloatingLabel
                controlId="inputSenha"
                label="Digite sua senha"
                className="mb-5"
              >
                <Form.Control
                  type="password"
                  minLength={6}
                  maxLength={20}
                  {...register("senha", {
                    required: "Senha é um campo obrigatório",
                  })}
                />
                {errors.senha && (
                  <p className="error">{errors.senha.message}</p>
                )}
              </FloatingLabel>

              {/* Botão para o envio do formulário */}
              <Button
                style={{
                  backgroundColor: "#2d3839",
                  color: "#ffffff",
                }}
                type="submit"
                className="mb-3"
                size="lg"
              >
                LOGIN
              </Button>

              {/* Link para Página de Cadastro */}
              <p className={styles.linkCadastro}>
                Não possui conta?{""}
                <span
                  className={styles.link}
                  onClick={() => navigate("/cadastro")}
                >
                  Cadastre-se
                </span>
              </p>

              {/* Alerta */}
              <Alert variant="danger" className={alerta}>
                Usuário ou senha inválidos
              </Alert>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Exportando arquivo de Login
export default Login;
