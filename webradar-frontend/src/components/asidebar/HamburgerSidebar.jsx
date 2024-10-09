import { useState } from 'react';
import { Layout, Drawer, Button, Menu } from 'antd';
import { MenuOutlined, LogoutOutlined } from '@ant-design/icons'; // Importa el icono de salida
import CloudIco from '../icons/CloudIco';
import CloudSun from '../icons/CloudSun';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const { Sider } = Layout;

function HamburgerSidebar() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate(); // Usa el hook useNavigate para redirigir

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<MenuOutlined />} className="lg:hidden" />
      <Drawer
        title="Menu"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu mode="inline" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" icon={<CloudSun />}>
            Resumen diario
          </Menu.Item>
          <Menu.Item key="2" icon={<CloudIco />}>
            Historico
          </Menu.Item>

          {/* Botón de Salir */}
          <Menu.Item 
            key="logout" 
            icon={<LogoutOutlined />} 
            style={{ color: 'red', marginTop: 'auto', display: 'block' }}  
            onClick={() => {
              onClose(); // Cierra el Drawer
              navigate("/app"); // Redirige a la ruta de LandingPage
            }}
          >
            Salir
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
}

export default HamburgerSidebar;
