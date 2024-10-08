import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Table } from 'antd';
import Plot from 'react-plotly.js';

const GraficoInteractivo = () => {
  const [graphData, setGraphData] = React.useState(null);
  const [layout, setLayout] = React.useState(null);

  React.useEffect(() => {
    // Cargar el archivo JSON generado por el backend
    fetch('http://127.0.0.1:8000/api/grafico/')
      .then((response) => response.json())
      .then((data) => {
        console.log('Datos recibidos:', data);  // Verifica la estructura de los datos recibidos
        setGraphData(data.data);
        setLayout(data.layout);
      })
      .catch((error) => {
        console.error('Error al cargar el gráfico:', error);
      });
  }, []);

  // Si los datos no se han cargado, mostrar un mensaje de carga
  if (!graphData || !layout) {
    return <div>Cargando gráfico...</div>;
  }

  // Ajustar la escala de colores y definir los valores zmin y zmax
  graphData.forEach(trace => {
    if (trace.type === 'heatmap') {
      trace.colorscale = [
        [0.0, 'rgb(0, 0, 255)'],   // Azul (precipitación baja, 0 dBZ)
        [0.2, 'rgb(0, 255, 0)'],   // Verde (precipitación ligera, 10 dBZ)
        [0.4, 'rgb(255, 255, 0)'], // Amarillo (precipitación moderada, 20 dBZ)
        [0.6, 'rgb(255, 165, 0)'], // Naranja (precipitación fuerte, 30 dBZ)
        [0.8, 'rgb(255, 0, 0)'],   // Rojo (precipitación intensa, 40 dBZ)
        [1.0, 'rgb(255, 255, 255)'] // Blanco (granizo o evento extremo, 50+ dBZ)
      ];
      trace.zmin = 0;  // Valor mínimo de reflectividad (0 dBZ)
      trace.zmax = 50; // Valor máximo de reflectividad (50 dBZ)
    }
  });

  return (
    <Plot
      data={graphData}
      layout={layout}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

function ImageCard() {
  // Datos de ejemplo para la tabla de Ant Design
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
  ];

  const data = [
    { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
    { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
    { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' },
  ];

  return (
    <div
      className="bg-white rounded-lg shadow-lg w-full"
      style={{
        margin: '10px',
        height: 'calc(100vh - 40px)', // Ajustar la altura total al alto de la pantalla
        display: 'flex',
        flexDirection: 'column',
        padding: '10px', // Padding para evitar que el contenido se desborde
      }}
    >
      <h2 className="text-xl font-bold mb-4 text-center">Gráfico Interactivo</h2>
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
        <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', flex: '1' }}>
          <GraficoInteractivo /> {/* Aquí se muestra el gráfico */}
        </div>
        <div style={{ flex: '1', display: 'flex', borderTop: '1px solid #ddd', padding: '10px' }}>
          <div style={{ flex: '1', padding: '0 10px', overflow: 'auto', maxHeight: '300px' }}>
            <Calendar />
          </div>
          <div style={{ flex: '1', padding: '0 10px', overflow: 'auto', maxHeight: '300px' }}>
            <Table columns={columns} dataSource={data} pagination={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
