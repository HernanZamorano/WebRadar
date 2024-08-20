import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/views/LandingPage';
import Dashboard from './components/views/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
