import LargeSidebar from '../asidebar/LargeSidebar';
import HamburgerSidebar from '../asidebar/HamburgerSidebar';
import ImageCard from '../ImageCard';
import { Layout } from 'antd';

const { Content } = Layout;

function Dashboard() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Large sidebar para pantallas grandes */}
      <LargeSidebar />

      {/* Hamburger sidebar para pantallas pequeñas y medianas */}
      <HamburgerSidebar />

      {/* Main content */}
      <Layout>
        <Content style={{ margin: '10px', padding: '0', backgroundColor: '#f0f2f5' }}>
          <div className="w-full">
            {/* Tarjeta con la imagen */}
            <ImageCard />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
