// Importando API
const url = import.meta.env.VITE_API_URL;

import { useContext } from "react";

import { AuthContext } from "../contexts/UserContext.jsx";

export function useVerificaLogin() {

  const { login } = useContext(AuthContext);  

  // faz a busca tanto em /usuarios quanto em /funcionarios
  const buscaUsuarios = async () => {
    try {
      const [resUsuarios, resFuncionarios] = await Promise.all([
        fetch(`${url}/usuarios`),
        fetch(`${url}/funcionarios`),
      ]);

      const usuarios = resUsuarios.ok ? await resUsuarios.json() : [];
      const funcionarios = resFuncionarios.ok ? await resFuncionarios.json() : [];

      return { usuarios, funcionarios };

    } catch (error) {
      console.error("Erro ao buscar usuários:", error);

      return { usuarios: [], funcionarios: [] };
    }
  };

  const verificaLogin = async (data) => {

    if (!data) return "Dados não fornecidos";

    const { email, senha } = data;

    const { usuarios, funcionarios } = await buscaUsuarios();

    // procura primeiro em usuarios
    const usuarioEncontrado = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );

    if (usuarioEncontrado) {
      const usuario = {
        id: usuarioEncontrado.id,
        nome: usuarioEncontrado.nome || usuarioEncontrado.nome_funcionario || "Usuário",
        email: usuarioEncontrado.email,
        imagemPerfil: usuarioEncontrado.imagemPerfil || usuarioEncontrado.fotoArquivo || "",
      };

      login(usuario);

      return "Login efetuado com sucesso";
    }

    // procura em funcionarios
    const funcionarioEncontrado = funcionarios.find(
      (f) => f.email === email && f.senha === senha
    );

    if (funcionarioEncontrado) {
      const usuario = {
        id: funcionarioEncontrado.id,
        nome: funcionarioEncontrado.nome || funcionarioEncontrado.nome_funcionario || "Funcionário",
        email: funcionarioEncontrado.email,
        imagemPerfil: funcionarioEncontrado.imagemPerfil || funcionarioEncontrado.fotoArquivo || "",
      };

      login(usuario);
      
      return "Login efetuado com sucesso";
    }

    return "Usuário ou senha inválidos";
  };

  return { verificaLogin };
}
