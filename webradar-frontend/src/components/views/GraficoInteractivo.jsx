// // src/components/GraficoInteractivo.js
// import  { useState, useEffect } from 'react';
// import Plot from 'react-plotly.js';

// const GraficoInteractivo = () => {
//   const [graphData, setGraphData] = useState(null);
//   const [layout, setLayout] = useState(null);

//   useEffect(() => {
//     // Cargar el archivo JSON generado por el backend
//     fetch('http://localhost:8000/api/source/imagenes_generadas/imagen_interactiva.json')
//       .then((response) => response.json())
//       .then((data) => {
//         // El archivo JSON debería contener 'data' y 'layout' para Plotly
//         setGraphData(data.data);  // Asegúrate de que la estructura del JSON tenga estos campos
//         setLayout(data.layout);
//       })
//       .catch((error) => {
//         console.error('Error al cargar el gráfico:', error);
//       });
//   }, []);

//   // Si no se ha cargado el gráfico, mostrar un mensaje de carga
//   if (!graphData || !layout) {
//     return <div>Cargando gráfico...</div>;
//   }

//   return (
//     <Plot
//       data={graphData}
//       layout={layout}
//       style={{ width: "100%", height: "100%" }}
//     />
//   );
// };

// export default GraficoInteractivo;


// import  { useState, useEffect } from 'react';
// import Plot from 'react-plotly.js';

// const GraficoInteractivo = () => {
//   const [graphData, setGraphData] = useState(null);
//   const [layout, setLayout] = useState(null);

//   useEffect(() => {
//     // Cargar el archivo JSON generado por el backend
//     fetch('http://localhost:8000/api/grafico/')
//       .then((response) => response.json())
//       .then((data) => {
//         // Asegúrate de que 'data' tiene los campos correctos
//         console.log('Datos recibidos:', data);  // Útil para depuración
//         setGraphData(data.data);  // Asegúrate de que esto es correcto
//         setLayout(data.layout);   // Verifica si 'layout' también está presente
//       })
//       .catch((error) => {
//         console.error('Error al cargar el gráfico:', error);
//       });
//   }, []);

//   // Si los datos no se han cargado, mostrar un mensaje de carga
//   if (!graphData || !layout) {
//     return <div>Cargando gráfico...</div>;
//   }

//   return (
//     <Plot
//       data={graphData}   // Los datos de trazado
//       layout={layout}    // Configuración del diseño
//       style={{ width: "100%", height: "100%" }}  // Ajuste de tamaño
//     />
//   );
// };

// export default GraficoInteractivo;

// import React, { useState, useEffect } from 'react';
// import Plot from 'react-plotly.js';

// const GraficoInteractivo = () => {
//   const [graphData, setGraphData] = useState(null);
//   const [layout, setLayout] = useState(null);

//   useEffect(() => {
//     // Cargar el archivo JSON generado por el backend
//     fetch('http://localhost:8000/api/grafico/')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Datos recibidos:', data);  // Verifica la estructura de los datos recibidos
//         setGraphData(data.data);
//         setLayout(data.layout);
//       })
//       .catch((error) => {
//         console.error('Error al cargar el gráfico:', error);
//       });
//   }, []);

//   // Si los datos no se han cargado, mostrar un mensaje de carga
//   if (!graphData || !layout) {
//     return <div>Cargando gráfico...</div>;
//   }

//   // Cambiar la escala de colores a "Earth" o "Bilbao" o cualquier otra que prefieras
//   graphData.forEach(trace => {
//     if (trace.type === 'heatmap') {
//       trace.colorscale = 'Earth';  // O puedes probar con 'Bilbao', 'Jet', 'Cividis', etc.
//     }
//   });

//   return (
//     <Plot
//       data={graphData}
//       layout={layout}
//       style={{ width: "100%", height: "100%" }}
//     />
//   );
// };

// export default GraficoInteractivo;



// import React, { useState, useEffect } from 'react';
// import Plot from 'react-plotly.js';

// const GraficoInteractivo = () => {
//   const [graphData, setGraphData] = useState(null);
//   const [layout, setLayout] = useState(null);

//   useEffect(() => {
//     // Cargar el archivo JSON generado por el backend
//     fetch('http://localhost:8000/api/grafico/')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Datos recibidos:', data);  // Verifica la estructura de los datos recibidos
//         setGraphData(data.data);
//         setLayout(data.layout);
//       })
//       .catch((error) => {
//         console.error('Error al cargar el gráfico:', error);
//       });
//   }, []);

//   // Si los datos no se han cargado, mostrar un mensaje de carga
//   if (!graphData || !layout) {
//     return <div>Cargando gráfico...</div>;
//   }

//   // Cambiar la escala de colores a una personalizada
//   graphData.forEach(trace => {
//     if (trace.type === 'heatmap') {
//       trace.colorscale = [
//         [0.0, 'rgb(0, 0, 255)'],   // Azul (precipitación baja, 0 dBZ)
//         [0.2, 'rgb(0, 255, 0)'],   // Verde (precipitación ligera, 10 dBZ)
//         [0.4, 'rgb(255, 255, 0)'], // Amarillo (precipitación moderada, 20 dBZ)
//         [0.6, 'rgb(255, 165, 0)'], // Naranja (precipitación fuerte, 30 dBZ)
//         [0.8, 'rgb(255, 0, 0)'],   // Rojo (precipitación intensa, 40 dBZ)
//         [1.0, 'rgb(255, 255, 255)'] // Blanco (granizo o evento extremo, 50+ dBZ)
//       ];
//     }
//   });

//   return (
//     <Plot
//       data={graphData}
//       layout={layout}
//       style={{ width: "100%", height: "100%" }}
//     />
//   );
// };

// export default GraficoInteractivo;


import { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const GraficoInteractivo = () => {
  const [graphData, setGraphData] = useState(null);
  const [layout, setLayout] = useState(null);

  useEffect(() => {
    // Cargar el archivo JSON generado por el backend
    fetch('http://localhost:8000/api/grafico/')
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

      // Asegúrate de que los valores de reflectividad no se repitan en la barra
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

export default GraficoInteractivo;
