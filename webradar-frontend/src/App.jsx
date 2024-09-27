import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/views/LandingPage';
import Dashboard from './components/views/Dashboard';
import DataFromAPI from './components/views/DataFromAPI';  // Importa el nuevo componente
import GraficoInteractivo from './components/views/GraficoInteractivo';  // Importa el nuevo componente
import { useEffect } from "react";





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< LandingPage />} />
        <Route path="/dashboard" element={< Dashboard />} />
        <Route path="/data" element={< DataFromAPI />} />
        <Route path="/grafico" element={<GraficoInteractivo />} />  {/* Nueva ruta */}

      </Routes>
    </Router>
  );
}

export default App;
