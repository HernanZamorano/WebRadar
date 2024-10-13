import React from 'react';
import { Select, InputNumber, Form, Button, ConfigProvider, Row, Col } from 'antd';
import { Calendar } from 'antd';
import esES from 'antd/es/locale/es_ES';
import Plot from 'react-plotly.js';

const { Option } = Select;

const GraficoInteractivo = () => {
  const [graphData, setGraphData] = React.useState(null);
  const [layout, setLayout] = React.useState(null);

  React.useEffect(() => {
    // Cargar el archivo JSON generado por el backend
    fetch('http://127.0.0.1:8000/api/grafico/')
      .then((response) => response.json())
      .then((data) => {
        setGraphData(data.data);
        setLayout(data.layout);
      })
      .catch((error) => {
        console.error('Error al cargar el gráfico:', error);
      });
  }, []);

  // Si los datos no se han cargado, mostrar un mensaje de carga
  if (!graphData || !layout) {
    return <div>Cargando gráfico histórico...</div>;
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
        [1.0, 'rgb(128, 0, 128)']  // Morado (granizo o evento extremo, 50+ dBZ)
      ];
      trace.zmin = 0;  // Valor mínimo de reflectividad (0 dBZ)
      trace.zmax = 50; // Valor máximo de reflectividad (50 dBZ)
    }
  });

  return (
    <Plot
      data={graphData}
      layout={layout}
      style={{ width: "100%", height: "100%" }} // Asegura que el gráfico ocupe todo el contenedor
    />
  );
};

function ImageCard() {
  const [filtroTipo, setFiltroTipo] = React.useState(null);
  const [altura, setAltura] = React.useState(null);

  const handleFilter = () => {
    console.log('Filtros aplicados:', { filtroTipo, altura });
  };

  return (
    <ConfigProvider locale={esES}>
      <div
        className="bg-white rounded-lg shadow-lg w-full content-container"
        style={{
          margin: '0px',
          height: 'calc(100vh - 40px)',
          display: 'flex',
          flexDirection: 'column',
          padding: '-10px',
        }}
      >
        <h2 className="text-xl font-bold mb-2 text-center">Historico MRR</h2>
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          <div style={{ overflowX: 'auto', flex: '1' }}>
            <GraficoInteractivo /> {/* Aquí se muestra el gráfico */}
          </div>
          <Row style={{ flex: '0 0 auto', marginTop: '10px' }}>
            <Col xs={24} sm={12} style={{ padding: '0 10px' }}>
              <Form layout="vertical" onFinish={handleFilter}>
                <Form.Item label="Variable" required>
                  <Select
                    value={filtroTipo}
                    onChange={setFiltroTipo}
                    placeholder="Seleccionar tipo de filtro"
                    style={{ width: '100%' }}
                  >
                    <Option value="dbz">DBZ</Option>
                    <Option value="velocidad">Velocidad Vertical</Option>
                    <Option value="spectrum">Ancho del Espectro</Option>
                  </Select>
                </Form.Item>

                <Form.Item label="Altura (m)">
                  <Select
                    value={altura}
                    onChange={setAltura}
                    placeholder="Seleccionar altura"
                    style={{ width: '100%' }}
                  >
                    <Option value="100">100</Option>
                    <Option value="250">250</Option>
                  </Select>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                    Filtrar
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col xs={24} sm={12} style={{ padding: '0 10px' }}>
              <Calendar fullscreen={false} />
            </Col>
          </Row>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default ImageCard;
