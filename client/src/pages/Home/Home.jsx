// Import da BarraNavegacao
import BarraNavegacao from "../../components/BarraNavegacao/BarraNavegacao";

// import { useState, useEffect } from "react";

import { Container, Button, Alert } from "react-bootstrap";

const Home = () => {
  
  return (
    <div>
      <Container className="">
        <BarraNavegacao />
        <h1>HOME</h1>
      </Container>
    </div>
  );
};

export default Home;
