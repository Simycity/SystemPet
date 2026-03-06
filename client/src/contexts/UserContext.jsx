// Importando os hooks de criação de contexto
import { createContext, useState, useEffect } from "react";

// Criando Contexto de autorização
export const AuthContext = createContext();

/*
    Criando o provider do contexto
    Provider = fornece as informações para os componentes filhos
*/
export const AuthProvider = (children) => {
  //    Declarando o estado (useState) para guardar o usuário logado no momento
  const [UsuarioNome, setUsuarioNome] = useState();

  /* 
    Utilizando o LocalStorage para busca de usuário, 
    se não encontrar nenhum, define-se como visitante 
  */
  useEffect(() => {
    const nomeAtual = localStorage.getItem("userName") || "Visitante";
    setUsuarioNome(nomeAtual);
  }, []);

  //   Função para receber o login e guardá-lo no localStorage
  const login = (data) => {
    console.log("Usuário logado: ", data);
    localStorage.setItem("ID", data.id);
    localStorage.setItem("userName", data.nome);
    localStorage.setItem("email", data.email);
    localStorage.setItem("imagemPerfil", data.imagemUrl);
    setUsuarioNome(data.nome);
  };

  //   Função que remove as informações de login do localStorage e redefine o nome de usuário para Visitante
  const logout = () => {
    localStorage.clear();
    setUsuarioNome("Visitante");
  };

  //   Retorno do Provider com as informações de usuário, login e logout
  return (
    <AuthContext.Provider value={{ UsuarioNome, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
