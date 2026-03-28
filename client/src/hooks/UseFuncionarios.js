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

// Inserir funcionários
export function useInserirFuncionarios() {
  const inserirFuncionarios = async (data) => {
    try {
      const req = await fetch(`${url}/funcionarios`, {
        method: "POST",
        headers: { "Conten: Type": "application/json" },
        body: JSON.stringify(data),
      });

      const res = await req.json();
      console.log("Funcionário inserido:", res);
      return res;
    } catch (error) {
      console.log("Erro ao inserir funcionário:", error.message);
    }

    return { inserirFuncionarios };
  };
}

// Busca funcionários por ID
export function useFuncionarioPorId() {
  const buscaFuncionarioPorId = async (idFuncionario) => {
    try {
      const req = await fetch(`${url}/funcionarios/${idFuncionario}`);
      const res = await req.json();
      console.log("Funcionário encontrado: ", res);
    } catch (error) {
      console.log("Erro ao buscar funcionário", error.message);
    }
  };
  return { buscaFuncionarioPorId };
}

// Atualiza Funcionário
export function useAtualizaFuncionario() {
  const atualizarFuncionario = async (data, idFuncionarios) => {
    try {
      const req = await fetch(`${url}/funcionarios/${idFuncionarios}`, {
        method: "PUT",
        headers: { "Content: Type": "aplication/json" },
        body: JSON.stringify(data),
      });

      const res = await req.json();
      console.log("Funcionário atualizado com sucesso: ", res);
    } catch (error) {
      console.log("Erro ao atualizar o funcionário:", error.message);
    }
  };
  return { atualizarFuncionario };
}
