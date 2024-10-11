import { Layout, Menu } from 'antd';
import CloudIco from '../icons/CloudIco';
import CloudSun from '../icons/CloudSun';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

function LargeSidebar({ selectedMenu, setSelectedMenu }) {
  const navigate = useNavigate();

  return (
    <Sider
      width={200}
      className="site-layout-background hidden lg:block flex-col"
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
        selectedKeys={[selectedMenu]} // Establecer la clave seleccionada aquí
        style={{ height: 'calc(100% - 120px)', borderRight: 0 }}
      >
        <Menu.Item 
          key="resumen" 
          icon={<CloudSun />} 
          onClick={() => { setSelectedMenu('resumen'); }}
          style={selectedMenu === 'resumen' ? { backgroundColor: '#e6f7ff', color: '#1890ff' } : {}}
        >
          Resumen diario
        </Menu.Item>
        <Menu.Item 
          key="historico" 
          icon={<CloudIco />} 
          onClick={() => { setSelectedMenu('historico'); }}
          style={selectedMenu === 'historico' ? { backgroundColor: '#e6f7ff', color: '#1890ff' } : {}}
        >
          Histórico
        </Menu.Item>

        <Menu.Item 
          key="logout" 
          icon={<LogoutOutlined />} 
          style={{ color: 'red', marginBottom: '0' }} 
          onClick={() => navigate("/app/")}
        >
          Salir
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default LargeSidebar;
