import { useState } from 'react';
import LargeSidebar from "../asidebar/LargeSidebar";
import HamburgerSidebar from "../asidebar/HamburgerSidebar";
import ResumenDiarioCard from './ResumenDiarioCard'; // Componente para Resumen Diario
import HistoricoCard from './HistoricoCard'; // Componente para Histórico
import { Layout } from "antd";

const { Content } = Layout;

function Dashboard() {
  const [selectedMenu, setSelectedMenu] = useState('resumen'); // Estado para controlar la selección

  // Función para renderizar el contenido basado en la selección
  const renderContent = () => {
    switch (selectedMenu) {
      case 'resumen':
        return <ResumenDiarioCard />;
      case 'historico':
        return <HistoricoCard />;
      default:
        return <ResumenDiarioCard />;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Large sidebar para pantallas grandes */}
      <LargeSidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />

      {/* Hamburger sidebar para pantallas pequeñas y medianas */}
      <HamburgerSidebar setSelectedMenu={setSelectedMenu} />

      {/* Main content */}
      <Layout>
        <Content
          style={{ margin: "10px", padding: "0", backgroundColor: "#f0f2f5" }}
        >
          <div className="w-full">
            {renderContent()} {/* Renderiza la carta correspondiente */}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
