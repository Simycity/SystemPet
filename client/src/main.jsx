import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Importando Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Importando Provedor de Rotas
import { RouterProvider } from "react-router-dom";
// Importando a Rota provedora (rota Pai)
import MyRouter from './MyRouter.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={MyRouter} />
  </StrictMode>,
)
