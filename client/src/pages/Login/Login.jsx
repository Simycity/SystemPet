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
import { Navigate, useNavigate } from "react-router-dom";

// Importando hook para a verficação de login
import { useVerificaLogin } from "../../hooks/useUsuarios.js";

// Iniciando o formulário de Login
const Login = () => {
  // Criando o navigate
  const navigate = useNavigate();

  // Utilizando variavel de contexto do usuario
  const { logout } = useContext(AuthContext);

  // Assim que entrar na página, o LocalStorage é resetado
  useEffect(() => {
    logout();
  }, []);

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

    // Chamando função assíncrona para a verificação de login
    // await = objeto de espera
    const resposta = await verificaLogin(data);

    if (resposta === "Login efetuado com sucesso") {
      alert(resposta);
      navigate("/home");
    } else {
      // Exibe mensagem de erro
      setAlerta("my-3 w-75 mx-auto");
    }
  };

  // 2 - Caso dê errado
  // errors = objeto com todos os erros de envio
  const onError = (errors) => {
    console.log("Errors:", errors);
  };

  return (
    <div className={styles.pageLogin}>
      <Container>
        <Row>
          {/* Campo para Imagem/Logo */}
          <Col></Col>

          {/* Inicio do Formulário */}
          <Col>
            <Form>
              <FloatingLabel></FloatingLabel>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Exportando arquivo de Login
export default Login;
