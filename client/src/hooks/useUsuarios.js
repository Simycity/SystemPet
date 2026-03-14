// Importação da criação de contexto do REA
import { useContext } from "react";
// Importando contexto da pasta contexto
import { AuthContext } from "../contexts/UserContext.jsx";
// Importando componente de imagem
// import { ImagemPerfil } from "../components/ImagemPerfil/ImagemPerfil.jsx";

export function useVerificaLogin() {
  const { login } = useContext(AuthContext);

  //    Faz a busca tanto em /usuarios quanto em /funcionarios
  const buscaUsuarios = async () => {
    try {
      const [resUsuarios, resFuncionarios] = await Promise.all([
        fetch("http//localhost:5000/usuarios"),
        fetch("http//localhost:5000/funcionarios"),
      ]);

      /*
            Tratando de respostas
            Se a resposta for OK (status 200-299), converte para JSON
            Se não, retorna array vazio (evita erros)
        */
      const usuarios = resUsuarios.ok ? await resUsuarios.json() : [];
      const funcionarios = resFuncionarios.ok
        ? await resFuncionarios.json()
        : [];

      // Retorna um objeto com os dois arrays de dados
      return (usuarios, funcionarios);
    } catch (error) {
      console.error("Erro ao buscar usuário(s):", error);
      return { usuarios: [], funcionarios: [] };
    }
  };

  //   Função de verificação de login
  const verificaLogin = async (data) => {
    const { email, senha } = data;
    const { usuarios, funcionarios } = await buscaUsuarios();

    // Busca primeiramente em usuarios
    const usuarioEncontrado = (usuarios || []).find(
      (u) => u.email === email && u.senha === senha,
    );
    if (usuarioEncontrado) {
      const usuario = {
        id: usuarioEncontrado.id,
        nome:
          usuarioEncontrado.nome ||
          usuarioEncontrado.nome_funcionario ||
          "Usuário",
        email: usuarioEncontrado.email,
        ImagemPerfil:
          usuarioEncontrado.ImagemPerfil ||
          usuarioEncontrado.ImagemPerfil ||
          "",
      };
      login(usuario);
      return `Bem-vindo ${usuario.nome}`;
    }

    // Agora faz a busca em funcionarios
    const funcionarioEncontrado = (funcionarios || []).find(
      (f) => f.email === email && f.senha === senha,
    );
    if (funcionarioEncontrado) {
      const funcionario = {
        id: funcionarioEncontrado.id,
        nome:
          funcionarioEncontrado.nome ||
          funcionarioEncontrado.nome_funcionario ||
          "Funcionário",
        email: funcionarioEncontrado.email,
        ImagemPerfil:
          funcionarioEncontrado.ImagemPerfil ||
          funcionarioEncontrado.ImagemPerfil ||
          "",
      };
      login(funcionario);
      return `Bem-vindo ${funcionario.nome}`;
    }

    return "Email ou Senha inválidos";
  };

  return { verificaLogin };
}
