import styles from "./Home.module.css";

// Import da BarraNavegacao
import BarraNavegacao from "../../components/BarraNavegacao/BarraNavegacao";

// import { useState, useEffect } from "react";

import { Container, Button, Alert } from "react-bootstrap";

const Home = () => {
  return (
    <div className={styles.page}>
      <Container className={styles.container}>
        <BarraNavegacao className={styles.navBar} />
        <h1>HOME</h1>
      </Container>
    </div>
  );
};

export default Home;
