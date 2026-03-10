// Importação da criação de contexto do REA
import { useContext } from "react";
// Importando contexto da pasta contexto
import { AuthContext } from "../contexts/UserContext.jsx";

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
    const usuarioEncintrado = (usuarios || []).find(
      (u) => u.email === email && u.senha === senha,
    );
    if (usuarioEncintrado) {
      const usuario = {
        id:
        nome:
        email:
        
      }
    } 
  };
}
