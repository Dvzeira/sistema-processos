import { BrowserRouter, Routes, Route } from "react-router-dom";

import Processos from "./pages/Processos";
import Andamentos from "./pages/Andamentos";
import Navbar from "./componentes/NavBar";
import EditarProcesso from "./pages/EditarProcesso";
import EditarAndamento from "./pages/EditarAndamento";
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Processos />} />
        <Route path="/andamentos" element={<Andamentos />} />
        <Route path="/processos/editar/:id" element={<EditarProcesso />} />
        <Route path="/andamentos/editar/:id" element={<EditarAndamento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;