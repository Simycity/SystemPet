// Importando URL da API
const url = import.meta.url.VITE_API_URL;

import { useState, useEffect } from "react";

// Lista de departamentos (Funções)
export function useListaFuncoes() {
  const [funcao, setFuncao] = useState([]);

  useEffect(() => {
    async function fetchFucoes() {
      try {
        const req = await fetch(`${url}/funcoes`);
        const resp = await req.json();
        setFuncao(resp);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchFucoes();
  }, []);
  return funcao;
}

// Lista de funcionários
export function useListaFuncionarios() {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    async function fetchFuncionarios() {
      try {
        const req = await fetch(`${url}/funcionarios`);
        const resp = await req.json();
        setFuncionarios(resp);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchFuncionarios();
  }, []);
  return funcionarios;
}

// Inserir Função
export function useInserirFuncao() {
  const inserirFuncao = async (data) => {
    try {
      const req = await fetch(`${url}/funcoes`, {
        method: "PUT",
        headers: { "Content: Type": "application/json" },
        body: JSON.stringify(data),
      });
      const res = await req.json();
      console.log("Função inserida:", res);
      return res;
    } catch (error) {
      console.log("Erro ao adicionar nova função", error.message);
      
    }
  };
  return { inserirFuncao };
}

// Atualiza Função
export function useAtualizaFuncao() {
  const atualizarFuncao = async (data, idFuncao) => {
    try {
      const req = await fetch(`${url}/funcao/${idFuncao}`, {
        method: "PUT",
        headers: { "Content: Type": "aplication/json" },
        body: JSON.stringify(data),
      });

      const res = await req.json();
      console.log("Função atualizada com sucesso: ", res);

    } catch (error) {
      console.log("Erro ao atualizar a função:", error.message);
    }
  };

  return { atualizarFuncao };
}

// Deleta Funcionário
export function useDeletaFuncao() {
  const deletaFuncao = async (idFuncao) => {
    try {
      const req = await fetch(`${url}/funcionarios/${idFuncao}`, {
        method: "DELETE",
      });

      const res = await req.json();
      console.log("Função deletada com sucesso!", res);

    } catch (error) {
      console.log("Erro ao deletar função: ", error.message);
    }
  };

  return { deletaFuncao };
}