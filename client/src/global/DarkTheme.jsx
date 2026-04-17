import { useState, useEffect } from "react";
import styles from "./DarkMode.module.css";

function DarkTheme() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button className={styles.button} onClick={toggleTheme}>
      <span
        className={`${styles.icon} ${
          theme === "dark" ? styles.rotate : ""
        }`}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </span>

      <span className={styles.text}>
        {theme === "light" ? "Modo Escuro" : "Modo Claro"}
      </span>
    </button>
  );
}

export default DarkTheme;