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
      {/* Botón del menú hamburguesa */}
      <Button
        type="primary"
        onClick={showDrawer}
        icon={<MenuOutlined />}
        className="lg:hidden"
      />
      
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ padding: 0 }}
      >
        {/* Encabezado del Drawer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
          <h2 style={{ margin: 0,}}>Menu</h2>
          <Button onClick={onClose} type="default" style={{color: 'blue'}}>
            ocultar
          </Button>
        </div>
        
        <Menu mode="inline" defaultSelectedKeys={['2']}>
          <div>
            <Menu.Item key="1" icon={<CloudSun />}>
              Resumen diario
            </Menu.Item>
            <Menu.Item key="2" icon={<CloudIco />}>
              Histórico
            </Menu.Item>
          </div>
        </Menu>
      </Drawer>
    </>
  );
}

export default HamburgerSidebar;
