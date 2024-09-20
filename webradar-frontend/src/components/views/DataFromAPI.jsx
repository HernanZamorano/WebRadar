// src/components/views/DataFromAPI.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFromAPI = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Hacer la solicitud GET a la API de Django
    // axios.get('http://127.0.0.1:8000/api/data/')
    axios.get('http://localhost:8000/api/data/')
    
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos: ', error);
      });
  }, []);

  return (
      <div>
    <h1> This no carga </h1>
      <h1>Datos desde la API</h1>
      {data ? <p>{data.message}</p> : <p>Cargando datos...</p>}
    </div>
  );
};

export default DataFromAPI;
