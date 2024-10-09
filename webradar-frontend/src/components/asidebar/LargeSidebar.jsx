import { Layout, Menu } from 'antd';
import CloudIco from '../icons/CloudIco';
import CloudSun from '../icons/CloudSun';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const { Sider } = Layout;

function LargeSidebar() {
  const navigate = useNavigate(); // Usa el hook useNavigate para redirigir

  return (
    <Sider
      width={200}
      className="site-layout-background hidden lg:block"
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        height: '100vh', 
        borderRight: '2px solid #5D5D5D',
      }}
    >
      {/* Logo Section */}
      <div style={{
        backgroundColor: '#fff', 
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img
          src="/app/logo-ico.png"
          alt="Logo"
          style={{
            width: '80px',
            objectFit: 'cover',
          }}
        />
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={['2']}
        style={{ height: 'calc(100% - 120px)', borderRight: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <div>
          <Menu.Item key="1" icon={<CloudSun />}>
            Resumen diario
          </Menu.Item>
          <Menu.Item key="2" icon={<CloudIco />}>
            Historico
          </Menu.Item>
        </div>

        {/* Botón de Salir */}
        <Menu.Item 
          key="logout" 
          icon={<LogoutOutlined />} 
          style={{ color: 'red', marginTop: 'auto', display: 'block'  }} 
          onClick={() => {
            navigate("/app")// Redirige a la ruta de LandingPage
            onClose(); // Cierra el Drawer
          }} 
        >
          Salir
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default LargeSidebar;
