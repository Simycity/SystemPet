import Button from "react-bootstrap";

// Importando Navigate para navegação entre páginas
import { useNavigate } from "react-router-dom";

// Código da página
const PaginaError = () => {
  const navigate = useNavigate(); //Declarando a navegação entre páginas
  return (
    <div>
      <h2>404: Página não encontrada ou não existe</h2>
      <Button
        variant="warning"
        onClcik={() => {
          navigate("/home");
        }}
      >
        Voltar para home
      </Button>
    </div>
  );
};

export default PaginaError;
