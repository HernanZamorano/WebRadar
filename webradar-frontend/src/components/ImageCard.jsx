import { useState, useEffect } from 'react';

function ImageCard() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // Definir la función para obtener una nueva imagen
    const fetchImage = () => {
      fetch('https://picsum.photos/800/600') // URL de Lorem Picsum para obtener una imagen aleatoria
        .then(response => {
          setImageUrl(response.url); // La URL de la imagen se obtiene directamente de la respuesta
        })
        .catch(error => console.error('Error fetching image:', error));
    };

    // Llamar a la función inmediatamente al montar el componente
    fetchImage();

    // Configurar un intervalo para actualizar la imagen cada 1 minuto (60000 ms)
    const intervalId = setInterval(fetchImage, 60000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg w-full"
      style={{
        margin: '10px',
        textAlign: 'center',
        height: 'calc(100vh - 40px)', // Altura del viewport menos los márgenes superior e inferior
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h2 className="text-xl font-bold mb-4">Random Image from Lorem Picsum</h2>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Random from API"
          className="w-full rounded-md"
          style={{
            maxHeight: '90%',
            objectFit: 'cover', // Asegura que la imagen cubra completamente el contenedor
            borderRadius: '8px',
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ImageCard;
