// Importando estilização
import styles from "./Login.module.css";

// Importações do Bootstrap
import {
  Container,
  FloatinLabel,
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
import { Navigate } from "react-router-dom";

// Importação do contexto e verificação de usuário
import { AuthContext } from "../../contexts/UserContext.jsx";
import { useContext } from "react";

// Iniciando o formulário de Login
const Login = () => {
  return (
    <div>
      <Container>
        <h1>Login</h1>
      </Container>
    </div>
  );
};

// Exportando arquivo de Login
export default Login;
