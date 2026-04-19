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

// Lista de Pets
export function useListaPets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchPets() {
      try {
        const req = await fetch(`${url}/pets`);
        const res = await req.json();
        setPets(res);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchPets();
  }, []);

  return pets;
}

// Buscar funcionário por ID
export function useBuscaPetsId() {
  const buscarPetsPorId = async (idPets) => {
    try {
      const req = await fetch(`${url}/pets/${idPets}`);
      const res = await req.json();
      return res;
    } catch (erro) {
      console.log("Erro ao buscar pet:", erro.message);
    }
  };
  return { buscarPetsPorId };
}

// Inserir Pets
export function useInserirPets() {
  const inserirPets = async (data) => {
    try {
      const req = await fetch(`${url}/pets`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });

      const res = await req.json();
      console.log("Pet inserido:", res);
      return res;
    } catch (erro) {
      console.log("Erro ao inserir pet:", erro.message);
    }
  };
  return { inserirPets };
}

// Atualizar Pets
export function useAtualizarPets() {
  const atualizarPets = async (data, idPets) => {
    try {
      const req = await fetch(`${url}/pets/${idPets}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const res = await req.json();
      console.log("Pet atualizado:", res);
      return res;
    } catch (erro) {
      console.log("Erro ao atualizar pet:", erro.message);
    }
  };
  return { atualizarPets };
}

// Deletar Pets
export function useDeletarPet() {
  const deletarPets = async (idPets) => {
    try {
      const req = await fetch(`${url}/pets/${idPets}`, {
        method: "DELETE",
      });
      const res = await req.json();
      console.log("Pet deletado com sucesso", res);
      return res;
    } catch (erro) {
      console.log("Erro ao buscar pet: ", erro.message);
    }
  };
  return { deletarPets };
}
