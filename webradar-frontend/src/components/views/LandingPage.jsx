import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import LoadingScreen from "./LoadingScreen"; // Importa la pantalla de carga
import AOS from "aos"; // Importa AOS
import "aos/dist/aos.css"; // Importa los estilos de AOS

function LandingPage() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simula el tiempo de carga antes de mostrar el contenido
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); // Ajusta el tiempo de la pantalla de carga según lo necesario

    // Inicializa AOS
    AOS.init({
      duration: 1000, // Duración de la animación
      delay: 200, // Retraso
    });

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Muestra la pantalla de carga mientras `loading` sea true
    return <LoadingScreen />;
  }

  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Barra de navegación */}
      <header className="relative border-b border-gray-300 w-full p-4 flex justify-between items-center">
        {/* Pseudo-elemento para la mancha con gradiente */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div
            className="absolute top-0 right-0 w-64 h-64"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 115, 184, 0.3), transparent)",
              borderRadius: "50%",
            }}
          ></div>
        </div>

        {/* Logo alineado a la izquierda */}
        <div className="flex items-center">
          <img
            src="/app/logo-ico.png" // Ruta a la imagen dentro de public
            alt="AlphaNova Logo"
            className="h-10 w-auto pl-4" // Ajusta el tamaño de la imagen según sea necesario
          />
          <p className="text-blue-800 text-2xl font-bold ">AlphaNova</p>
        </div>

        {/* Botón alineado a la derecha */}
        <div>
          <button
            className="border border-gray-800 px-4 py-2 rounded-lg"
            onClick={() => navigate("/dashboard")} // Navega a /dashboard
          >
            Ir a la aplicación
          </button>
        </div>
      </header>

      {/* Sección principal con imagen de fondo */}
      <section
        className="relative flex flex-col md:flex-row items-center justify-center md:justify-between  text-center p-8 bg-transparent"
        // style={{
        //   // backgroundImage: 'url("/rcgua.png")',
        //   backgroundImage:
        //     'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("/rcgua.png")', // Fondo con transparencia
        //   backgroundSize: "cover",
        //   backgroundPosition: "top",
        //   height: "90vh",
        // }}
      >
        {/* Texto centrado */}
        {/* <h1
          className="text-6xl font-bold md:w-1/2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Perfilador de lluvias <span className="text-blue-600"> Radar </span>
        </h1> */}

        <div className="flex flex-col items-center">
          {/* Texto centrado */}
          <h1
            className="text-6xl font-bold md:w-1/2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Perfilador de lluvias <span className="text-blue-600">Radar</span>
          </h1>
          <br /> 
          
{/* Carrusel de íconos con desplazamiento continuo */}
<div className="overflow-hidden mt-8 w-full h-full bg-gray-200">
  <div className="max-w-2xl mx-auto flex justify-center items-center relative">
    <ul className="flex items-center animate-infinite-scroll">
      <li className="mx-4 transform transition-transform duration-300">
        <img
          width="100"
          className="object-cover scale-on-center"
          src="/app/img/marcas/1.png"
          alt="Marca 1"
        />
      </li>
      <li className="mx-4 transform transition-transform duration-300">
        <img
          width="100"
          className="object-cover scale-on-center"
          src="/app/img/marcas/2.png"
          alt="Marca 2"
        />
      </li>
      <li className="mx-4 transform transition-transform duration-300">
        <img
          width="100"
          className="object-cover scale-on-center"
          src="/app/img/marcas/3.png"
          alt="Marca 3"
        />
      </li>
    </ul>
  </div>
</div>
</div>


        {/* Imagen a la derecha */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/app/radar.webp"
            alt="Radar"
            className="h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Sección de contenido */}
      <section className="flex flex-col items-center p-8 bg-gray-100 text-gray-800">
        <div
          className="max-w-6xl"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
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
                src="/app/rv.png" // Ruta de la imagen de perfil
                alt="Raúl Valenzuela"
                className="w-full h-full object-cover"
              />
            </a>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Raúl Valenzuela</h3>
              <p className="text-gray-700">
                Profesor de la Universidad de O&apos;Higgins (UOH), Rancagua,
                Chile e Investigador Adjunto del Centro de Investigación en
                Clima y Resiliencia (CR2)...
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
                src="/app/landing.png" // Imagen representativa de la dashboard
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
            src="/app/uoh.png" // Ruta de la imagen UOH
            alt="UOH Logo"
            className="w-100 h-32 object-cover"
          />
        </a>

        {/* Segunda imagen */}
        <img
          src="/app/eing.png" // Segunda imagen
          alt="Segunda imagen"
          className="w-50 h-32 object-cover"
        />

        {/* Tercera imagen */}
        <img
          src="/app/public/ap.png" // Tercera imagen
          alt="Tercera imagen"
          className="w-50 h-32 object-cover"
        />
      </footer>
    </div>
  );
}

// Exportar el componente
export default LandingPage;
