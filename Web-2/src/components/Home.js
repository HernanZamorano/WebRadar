// src/components/Home.js
import React, { useState } from 'react';
import '../styles.css';


const Home = () => {
  const [modalContent, setModalContent] = useState({ title: '', images: [] });

  const diasHistorial = [
    {
      src: 'https://pbs.twimg.com/media/GUAN4KZXwAEjCLo?format=jpg&name=4096x4096',
      fecha: '10 de Agosto, 2024',
    },
    {
      src: 'https://pbs.twimg.com/media/GUAN4KZXwAEjCLo?format=jpg&name=4096x4096',
      fecha: '11 de Agosto, 2024',
    },
  ];

  const eventosHistorial = [
    {
      src: 'https://pbs.twimg.com/media/GUAN4KZXwAEjCLo?format=jpg&name=4096x4096',
      fecha: '12 de Agosto, 2024',
    },
    {
      src: 'https://pbs.twimg.com/media/GUAN4KZXwAEjCLo?format=jpg&name=4096x4096',
      fecha: 'Evento: 13 de Agosto, 2024',
    },
  ];

  const showModal = (title, images) => {
    setModalContent({ title, images });
    document.getElementById('modal').style.display = 'block';
  };

  const closeModal = () => {
    document.getElementById('modal').style.display = 'none';
    setModalContent({ title: '', images: [] });
  };

  return (
    <>
      <main className="content">
        <section className="features">
          <div
            id="dias"
            className="feature btn btn-primary"
            onClick={() => showModal('MUESTREO HISTORIOGRAFICO DIARIO', diasHistorial)}
          >
            <h2>Días</h2>
            <p>Ver imágenes de histogramas por día.</p>
          </div>
          <div
            id="eventos"
            className="feature btn btn-primary"
            onClick={() => showModal('MUESTREO HISTORIOGRAFICO POR EVENTO OCURRIDOS', eventosHistorial)}
          >
            <h2>Eventos</h2>
            <p>Ver imágenes de histogramas por evento.</p>
          </div>
        </section>
      </main>

      <div id="modal" className="modal" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span id="cerrarModal" className="close" onClick={closeModal}>&times;</span>
          <h2>{modalContent.title}</h2>
          <div id="imagenesModal">
            {modalContent.images.map((imgData, index) => (
              <div key={index}>
                <img src={imgData.src} alt={`Imagen ${index}`} />
                <p>{imgData.fecha}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
