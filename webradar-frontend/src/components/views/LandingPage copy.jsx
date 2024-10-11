import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import LoadingScreen from './LoadingScreen'; // Importa la pantalla de carg
import { useState, useEffect } from 'react';


function LandingPage() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simula el tiempo de carga antes de mostrar el contenido
    const timer = setTimeout(() => {
      setLoading(false);
    }, 000); // Ajusta el tiempo de la pantalla de carga según lo necesario

    return () => clearTimeout(timer);
  }, []);

// function LandingPage() {
//   const navigate = useNavigate(); // Inicializa el hook de navegación

  return (
    <div className="min-h-screen flex flex-col">
      {/* Barra de navegación */}
      <header className="bg-transparent border-b border-gray-300 text-white w-full p-4 flex justify-between items-center">
        {/* Logo alineado a la izquierda */}
        <div className="flex items-center">
          <img
            src="/logo-ico.png" // Ruta a la imagen dentro de public
            alt="AlphaNova Logo"
            className="h-10 w-auto" // Ajusta el tamaño de la imagen según sea necesario
          />
        </div>

        {/* Navegación centrada */}
        <nav className="hidden md:flex flex-1 justify-center space-x-4">
          <a href="#seccion-principal" className="hover:underline">
            #seccion principal
          </a>
          <a href="#section1" className="hover:underline">
            #section 1
          </a>
          <a href="#section2" className="hover:underline">
            #section 2
          </a>
        </nav>

        {/* Botón alineado a la derecha */}
        <div>
          <button
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg"
            onClick={() => navigate('/dashboard')} // Navega a /dashboard
          >
            Ir a la aplicación
          </button>
        </div>
      </header>

      {/* Sección principal con imagen de fondo */}
      <section
        className="relative flex flex-col items-center justify-center text-white text-center p-8"
        style={{
          backgroundImage: 'url("/rcgua.png")', // Imagen de fondo
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
      >
        <h1 className="text-6xl font-bold">Perfilador de lluvias</h1>
      </section>

      {/* Sección de contenido */}
      <section className="flex flex-col items-center p-8 bg-gray-100 text-gray-800">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Moderno Radar Perfilador</h2>
          <p className="text-lg mb-4">
            En Rancagua, la meteorología juega un papel crucial en la
            comprensión de los patrones climáticos de la región, especialmente
            en relación con las precipitaciones. El análisis detallado de
            fenómenos atmosféricos, como la isoterma cero, es fundamental para
            predecir cambios en el clima y manejar adecuadamente los recursos
            hídricos. Sin embargo, el proceso tradicional de análisis presenta
            desafíos en cuanto a la eficiencia y la capacidad de manejar grandes
            volúmenes de datos en tiempo real. Por ello, se ha vuelto esencial
            el uso de tecnologías avanzadas que permitan un monitoreo más
            preciso y automatizado, optimizando así las herramientas disponibles
            para mejorar la predicción y el análisis del clima en la región.
          </p>
        </div>

        {/* Nueva sección con información y enlace a la dashboard */}
        <div className="flex flex-col lg:flex-row items-center mt-8 bg-white shadow-lg p-6 rounded-lg max-w-4xl">
          {/* Columna izquierda: Información de Raúl Valenzuela */}
          <div className="lg:w-1/2 lg:mr-6 mb-4 lg:mb-0 flex flex-col items-center lg:items-start">
            <a
              href="https://raulvalenzuela.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-600 mb-4"
            >
              <img
                src="/public/rv.png" // Ruta de la imagen de perfil
                alt="Raúl Valenzuela"
                className="w-full h-full object-cover"
              />
            </a>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Raúl Valenzuela</h3>
              <p className="text-gray-700">
                Profesor de la Universidad de O&apos;Higgins (UOH), Rancagua, Chile e
                Investigador Adjunto del Centro de Investigación en Clima y
                Resiliencia (CR2). Sus intereses incluyen procesos de
                precipitación asociados a Ríos Atmosféricos, pronósticos de
                precipitación y meteorología GPS.
              </p>
            </div>
          </div>

          {/* Columna derecha: Imagen con enlace a la dashboard */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <a
              href="/dashboard" // Actualiza la ruta para que navegue correctamente
              className="block w-80 h-80 rounded-lg overflow-hidden border-4 border-blue-600"
            >
              <img
                src="/public/landing.png" // Imagen representativa de la dashboard
                alt="Ir a la dashboard"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </div>

        {/* Nueva sección: Información detallada del radar perfilador de lluvias */}
        <div className="max-w-4xl mt-8">
          <p className="text-lg mb-4">
            Se trata de un radar perfilador de lluvias que observará
            permanentemente —de forma vertical— sobre el lugar donde se
            encuentra ubicado, en este caso el Campus Rancagua de la
            Universidad. “La desventaja es que solo vemos lo que ocurre sobre el
            radar. Por ejemplo, si una lluvia pasa sobre San Fernando, pero no
            en Rancagua, no la veremos. Pese a la dificultad, el radar estará
            midiendo sobre Rancagua y ayudará a entender mejor la estructura de
            la lluvia y su evolución en el tiempo”.
          </p>
          <p className="text-lg mb-4">
            Este Micro Rain Radar (MRR), de la empresa Metek, fue adquirido
            mediante un proyecto Fondecyt Iniciación e importado desde Alemania.
            “El MRR mide precipitación en todo el perfil de la atmósfera y, por
            lo tanto, podemos ver cambios en intensidad de lluvia con la altura
            y también cambios en el estado de la precipitación, si es líquida o
            sólida (nieve). Además, realiza mediciones cada 20 segundos
            aproximadamente. Esto permite lograr un análisis mucho más profundo
            de los mecanismos que realzan o suprimen la intensidad de la
            precipitación”, señala el Dr. Valenzuela.
          </p>
          <p className="text-lg mb-4">
            Para hacer una comparación, el académico explica que un pluviómetro
            solo mide la precipitación en superficie y la frecuencia máxima
            normalmente ronda los 5 minutos, “es decir, con un pluviómetro cada
            5 minutos tenemos una medición, con el MRR medimos 15 veces más
            rápido”, puntualiza.
          </p>
        </div>
      </section>

      {/* Sección final con tres imágenes en horizontal */}
      <footer className="flex justify-center bg-blue-700 p-6 space-x-6">
        {/* Primera imagen con enlace a www.uoh.cl */}
        <a href="https://www.uoh.cl" target="_blank" rel="noopener noreferrer">
          <img
            src="/public/uoh.png" // Ruta de la imagen UOH
            alt="UOH Logo"
            className="w-100 h-32 object-cover"
          />
        </a>

        {/* Segunda imagen */}
        <img
          src="/public/eing.png" // Segunda imagen
          alt="Segunda imagen"
          className="w-50 h-32 object-cover"
        />

        {/* Tercera imagen */}
        <img
          src="/public/ap.png" // Tercera imagen
          alt="Tercera imagen"
          className="w-50 h-32 object-cover"
        />
      </footer>
    </div>
  );
}

// Exportar el componente
export default LandingPage;
