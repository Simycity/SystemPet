// Import do Container => REA Bootstrap
import { Container } from "react-bootstrap";
// Import do Outlet, componente do router-dom
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App d-flex">
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
}

export default App;
