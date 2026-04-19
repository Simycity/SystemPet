const url = import.meta.env.VITE_URL_API;

import { useState, useEffect } from "react";

// Lista de departamentos
export function useListaDepartamentos() {
  const [departamentos, setDepartamentos] = useState([]);

  useEffect(() => {
    async function fetchDepartamentos() {
      try {
        const req = await fetch(`${url}/departamentos`);
        const res = await req.json();
        setDepartamentos(res);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchDepartamentos();
  }, []);

  return departamentos;
}

// Lista de Clientes
export function useListaClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function fetchClientes() {
      try {
        const req = await `${url}/clientes`;
        const res = await req.json();
        setClientes(res);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchClientes();
  }, []);
  return clientes;
}

// Busca Clientes por ID
export function useBuscarClientesId() {
  const buscarClientesPorId = async (idClientes) => {
    try {
      const req = await fetch(`${url}/clientes/${idClientes}`);
      const res = await req.json();
      return res;
    } catch (erro) {
      console.log("Erro ao buscar adestrador: ", erro.message);
    }
  };
  return { buscarClientesPorId };
}

// Inserir Clientes
export function useInserirAdestrador() {
  const inserirAdestrador = async (data) => {
    try {
      const req = await fetch(`${url}/clientes`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });

      const res = await req.json();
      return res;
    } catch (erro) {
      console.log("Erro ao inserir Adestrador: ", erro.message);
    }
  };
  return { inserirAdestrador };
}

// Atualiza clientes
export function useAtualizaAdestrador() {
  const autalizaAdestrador = async (data, idClientes) => {
    try {
      const req = await fetch(`${url}/clientes/${idClientes}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });

      const res = await req.json();
      return res;
    } catch (erro) {
      console.log("Erro ao atualizar cliente: ", erro.message);
    }
  };
  return { autalizaAdestrador };
}

// Deletar Clientes
export function useDeletarAdestrador() {
  const deletarAdestrador = async (idClientes) => {

    try {
      const req = await (`${url}/adestradores/${idClientes}`,
      {
        method: "DELETE",
      });

      const res = await req.json();
      console.log("Cliente deletado com sucesso!", res);
      return res;

    } catch (erro) {
      console.log("Erro ao deletrar cliente: ", erro.message);
    }
  };
  return { deletarAdestrador };
}
