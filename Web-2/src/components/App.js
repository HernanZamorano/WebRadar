import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import './styles.css';

function App() {
  return (
    <Router>
      <header className="hero">
        <nav>
          <div className="logo">
            <a href="https://www.uoh.cl/" target="_blank" rel="noopener noreferrer">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiuAHAgbNMbdAfhqMs0wWeXMxdhvqhXsdTHA&s" alt="Logo" />
            </a>
          </div>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Perfilador de Lluvias por Radar</h1>
          <p>La Universidad de O'Higgins ha instalado un Radar Micro Rain para un análisis detallado de precipitaciones, con mediciones cada 20 segundos que mejoran la comprensión de la intensidad y tipo de lluvia en tiempo real.</p>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <footer>
        <div className="footer-content">
          <p>&copy; 2024 Perfilador de Lluvias por Radar. Todos los derechos reservados.</p>
          <a href="https://www.youtube.com/watch?v=n7iwlcThLZw" target="_blank" rel="noopener noreferrer">Entrevista con CNN Tiempo</a>
        </div>
      </footer>
    </Router>
  );
}

export default App;
