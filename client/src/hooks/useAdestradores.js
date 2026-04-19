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

// Lista de Adestradores
export function useListaAdestradores() {
  const [adestradores, setAdestradores] = useState([]);

  useEffect(() => {
    async function fetchAdestradores() {
      try {
        const req = await `${url}/adestradores`;
        const res = await req.json();
        setAdestradores(res);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchAdestradores();
  }, []);
  return adestradores;
}

// Busca adestrador por ID
export function useBuscarAdestradorId() {
  const buscarAdestradorPorId = async (idAdestrador) => {
    try {
      const req = await fetch(`${url}/adestradores/${idAdestrador}`);
      const res = await req.json();
      return res;
    } catch (erro) {
      console.log("Erro ao buscar adestrador: ", erro.message);
    }
  };
  return { buscarAdestradorPorId };
}

// Inserir Adestrador
export function useInserirAdestrador() {
  const inserirAdestrador = async (data) => {
    try {
      const req = await fetch(`${url}/adestradores`, {
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

// Atualiza Adestrador
export function useAtualizaAdestrador() {
  const autalizaAdestrador = async (data, idAdestrador) => {
    try {
      const req = await fetch(`${url}/adestradores/${idAdestrador}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });

      const res = await req.json();
      return res;
    } catch (erro) {
      console.log("Erro ao atualizar adestrador: ", erro.message);
    }
  };
  return { autalizaAdestrador };
}

// Deletar adestrador
export function useDeletarAdestrador() {
  const deletarAdestrador = async (idAdestrador) => {

    try {
      const req = await (`${url}/adestradores/${idAdestrador}`,
      {
        method: "DELETE",
      });

      const res = await req.json();
      console.log("Adestrador deletado com sucesso!", res);
      return res;

    } catch (erro) {
      console.log("Erro ao deletrar adestrador: ", erro.message);
    }
  };
  return { deletarAdestrador };
}
