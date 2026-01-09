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

// importando o hook para verificar o login, vindo do useUsuários
import { useVerificaLogin } from "../hooks/useUsuarios";

// Importando a função useform do pacote hook-form
import { useForm } from "react-hook-form";

//Importando o useState para tratar de variáveis
import { useEffect, useState } from "react";

// importação do Navigate para transitar entre as paginas
import { useNavigate } from "react-router-dom";

// Importar as informações do contexto autenticação de usuário
import { AuthContext } from "../contexts/UserContext.jsx";
import { useContext } from "react";

const Login = () => {
  // Usa as variáveis de contexto do usuário
  const { logout } = useContext(AuthContext);

  //Assim que entrar na página, o localStorage é resetado
  useEffect(() => {
    logout();
  }, []);

  //register = cria um objeto com os valores retirados dos inputs
  //handleSubmit = envia os dados formulário, caso dê erro ou sucesso
  //formState { erros } = objeto que guarda uma lista de erros que aconteceram na tentativa do envio
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Variável classes do Alert
  const [alertaClasse, setAlertaClasse] = useState("d-none");

  //Usando apenas a função verificaLogin, que importei do hook
  const { verificaLogin } = useVerificaLogin();

  //Criando o navigate
  const navigate = useNavigate();

  //Caso o envio dê certo
  // data = objeto com todas as informações preenchidas nos campos do formulário
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
      setAlertaClasse("my-3 w-75 mx-auto");
    }
  };

  //Caso o envio dê errado
  //errors = objeto com todos os erros do envio
  const onError = (errors) => {
    console.log("Errors:", errors);
  };

  return (
    <div className={styles.pageLogin}>
        <Container>
            
        </Container>
    </div>
  );
};

export default Login;
