import LargeSidebar from '../asidebar/LargeSidebar';
import HamburgerSidebar from '../asidebar/HamburgerSidebar';
import ImageCard from '../ImageCard';
import { Layout } from 'antd';

const {  Content } = Layout;

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



// import LargeSidebar from '../asidebar/LargeSidebar';
// import HamburgerSidebar from '../asidebar/HamburgerSidebar';
// import { Layout, Calendar, Card, ConfigProvider } from 'antd';
// import locale from 'antd/es/locale/es_ES'; // Importa el archivo de idioma español
// import './Dashboard.css'; // Aquí puedes agregar estilos personalizados

// const { Content } = Layout;

// function Dashboard() {
//   return (
//     <ConfigProvider locale={locale}> {/* Configura el idioma español */}
//       <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f4f8' }}> {/* Fondo suave */}
//         {/* Large sidebar para pantallas grandes */}
//         <LargeSidebar />

//         {/* Hamburger sidebar para pantallas pequeñas y medianas */}
//         <HamburgerSidebar />

//         {/* Main content */}
//         <Layout>
//           <Content
//             style={{
//               margin: '20px',
//               padding: '20px',
//               backgroundColor: '#fff', /* Fondo blanco para el contenido */
//               borderRadius: '8px', /* Bordes redondeados */
//               boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', /* Sombra ligera */
//             }}
//           >
//             <div className="main-content" style={{ width: '100%' }}>
//               {/* Gráfico principal */}
//               <Card
//                 title="MRR at UOH-Rancagua"
//                 style={{
//                   marginBottom: '20px',
//                   borderRadius: '8px',
//                   boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', /* Sombra en el gráfico */
//                 }}
//                 headStyle={{ backgroundColor: '#f0f2f5', borderRadius: '8px 8px 0 0' }} /* Estilo para el título del gráfico */
//               >
//                 <img
//                   src="/ruta/a/grafico-principal.jpg"
//                   alt="Gráfico"
//                   style={{
//                     width: '100%',
//                     height: 'auto',
//                     borderRadius: '8px',
//                   }}
//                 />
//               </Card>

//               <div className="content-row" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
//                 {/* Calendario */}
//                 <Card
//                   title="Filtro por fechas"
//                   style={{
//                     width: '100%',
//                     borderRadius: '8px',
//                     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
//                   }}
//                   headStyle={{ backgroundColor: '#f0f2f5', borderRadius: '8px 8px 0 0' }} /* Estilo para el título del calendario */
//                 >
//                   <Calendar fullscreen={false} />
//                 </Card>
//               </div>
//             </div>
//           </Content>
//         </Layout>
//       </Layout>
//     </ConfigProvider>
//   );
// }

// export default Dashboard;

