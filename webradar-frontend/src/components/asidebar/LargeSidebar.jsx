import { Layout, Menu } from 'antd';
import CloudIco from '../icons/CloudIco';
import CloudSun from '../icons/CloudSun';

const { Sider } = Layout;

function LargeSidebar() {
  return (
    <Sider
      width={200}
      className="site-layout-background hidden lg:block"
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        height: '100vh', // Ocupar todo el alto de la pantalla
        borderRight: '2px solid #5D5D5D', // Borde derecho de 2px con color #5D5D5D
      }}
    >
      {/* Logo Section */}
      <div style={{
        backgroundColor: '#fff', // Fondo blanco para el logo
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img
          src="/app/logo-ico.png" // Ruta al logo en la carpeta public
          alt="Logo"
          style={{
            width: '80px',
            objectFit: 'cover',
          }}
        />
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: 'calc(100% - 120px)', borderRight: 0 }} // Altura ajustada para el menú
      >
        <Menu.Item key="1" icon={<CloudSun />}>
          Resumen diario
        </Menu.Item>
        <Menu.Item key="2" icon={<CloudIco />}>
          Eventos
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default LargeSidebar;
