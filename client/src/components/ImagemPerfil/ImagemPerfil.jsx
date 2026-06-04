// Importando useState do REA
import { useState } from "react";

const ImagemPerfil = () => {
  // Tratando de variável para guardar arquivo
  const [arquivoSelecao, setArquivoSelecao] = useState(null); // Declarado como nulo ou vazio

  //  Cria um estado no React para armazenar a URL de pré-visualização da imagem
  const [visuImagemUrl, setVisuImagemUrl] = useState(null); // Declarado como nulo ou vazio

  // Criando uma função handle (acesso a recursos como pdfs, imagens e etc)
  const handleImage = (event) => {
    // Criando input de imagem
    const arquivoImagem = event.target.files[0];

    if (
      arquivoImagem &&
      (arquivoImagem.type === "image/jpg" ||
        arquivoImagem.type === "image/png" ||
        arquivoImagem.type === "image/jpeg")
    ) {
      setArquivoSelecao(arquivoImagem);
      setVisuImagemUrl(URL.createObjectURL(arquivoImagem)); //Criando a visualização de URL da imagem
    } else {
      alert("Anexe arquivos no formato JPG, JPEG e PNG");
      event.target.value = null;
      setArquivoSelecao(null);
      setVisuImagemUrl(null);
    }
  };
  
  return (
    <input
      type="file"
      accept="image/jpeg, image/png, image/jpeg"
      onChange={handleImage}
    />
  );
};

export default ImagemPerfil;
