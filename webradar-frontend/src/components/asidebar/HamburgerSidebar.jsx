import { useState } from 'react';
import { Layout, Drawer, Button, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import CloudIco from '../icons/CloudIco';
import CloudSun from '../icons/CloudSun';

const { Sider } = Layout;

function HamburgerSidebar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const goBack = () => {
    window.history.back(); // Función para volver a la página anterior
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
        bodyStyle={{ padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<CloudSun />}>
            Resumen diario
          </Menu.Item>
          <Menu.Item key="2" icon={<CloudIco />}>
            Historico
          </Menu.Item>
        </Menu>
        <div style={{ textAlign: 'center', padding: '16px', marginTop: 'auto' }}>
          <Button
            type="primary"
            danger
            onClick={goBack}
            style={{
              backgroundColor: '#ff4d4f',
              borderColor: '#ff4d4f',
              fontWeight: 'bold',
              fontSize: '16px',
              width: '100%',
            }}
          >
            Salir
          </Button>
        </div>
      </Drawer>
    </>
  );
}

export default HamburgerSidebar;
