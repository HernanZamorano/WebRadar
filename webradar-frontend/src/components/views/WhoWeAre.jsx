import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";
import AOS from "aos";
import "aos/dist/aos.css";

function WhoWeAre() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    AOS.init({
      duration: 1000,
      delay: 200,
    });

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="relative border-b border-gray-300 w-full p-4 flex justify-between items-center">
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

        <div className="flex items-center">
          <img
            src="/app/logo-ico.png"
            alt="AlphaNova Logo"
            className="h-10 w-auto pl-4"
          />
          <p className="text-blue-800 text-2xl font-bold">AlphaNova</p>
        </div>
        <nav className="space-x-4">
          {/* Modificación: enlace hacia la ruta /Página Principal */}
          <Link to="/" relative="path">
          Página Principal
          </Link> 
          {/* Modificación: enlace hacia la ruta /quienes-somos */}
          <Link to="/quienes-somos" relative="path">
          Quienes Somos
        </Link>   
                  
        </nav>    
        <div>

          <button
            className="border border-gray-800 px-4 py-2 rounded-lg"
            onClick={() => navigate("/app/dashboard")}
          >
            Ir a la aplicación
          </button>
        </div>
      </header>

      <section
        className="relative flex flex-col md:flex-row items-center justify-center md:justify-between text-center p-8 bg-transparent mx-auto"
      >
        <div className="flex flex-col items-center">
          <h1
            className="text-6xl font-bold md:w-1/2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Perfilador de lluvias <span className="text-blue-600">Radar</span>
          </h1>
          <br />
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="/app/radar.webp"
            alt="Radar"
            className="h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="flex flex-col items-center p-8 bg-gray-100 text-gray-800 max-w-screen-3xl mx-auto">
        <div
          className="max-w-screen-2xl mt-8 p-8"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-bold mb-4">Moderno Radar Perfilador</h2>
          <p className="text-lg mb-4">
            En Rancagua, la meteorología juega un papel crucial en la comprensión de los patrones climáticos de la región, especialmente en relación con las precipitaciones. El análisis detallado de fenómenos atmosféricos, como la isoterma cero, es fundamental para predecir cambios en el clima y manejar adecuadamente los recursos hídricos. Sin embargo, el proceso tradicional de análisis presenta desafíos en cuanto a la eficiencia y la capacidad de manejar grandes volúmenes de datos en tiempo real. Por ello, se ha vuelto esencial el uso de tecnologías avanzadas que permitan un monitoreo más preciso y automatizado, optimizando así las herramientas disponibles para mejorar la predicción y el análisis del clima en la región.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center mt-8 bg-white shadow-lg p-6 rounded-lg max-w-screen-2xl mx-auto">
          <div className="lg:mr-6 mb-4 lg:mb-0 flex flex-col items-center lg:items-start">
            <a
              href="https://raulvalenzuela.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-600 mb-4"
            >
              <img
                src="/app/rv.png"
                alt="Raúl Valenzuela"
                className="w-full h-full object-cover"
              />
            </a>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Raúl Valenzuela</h3>
              <p className="text-gray-700">
              Profesor de la Universidad de O'Higgins (UOH), Rancagua, Chile e Investigador Adjunto del Centro 
              de Investigación en Clima y Resiliencia (CR2). Sus intereses incluyen procesos de precipitación 
              +asociados a Ríos Atmosféricos, pronósticos de precipitación y meteorología GPS.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <a
              href="/app/dashboard"
              className="block w-80 h-80 rounded-lg overflow-hidden border-4 border-blue-600"
            >
              <img
                src="/app/landing.png"
                alt="Ir a la dashboard"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </div>

        <div
          className="mt-8 p-8 max-w-screen-2xl"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
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

      <footer className="flex flex-col md:flex-row justify-center bg-blue-700 p-6">
        <div className="flex flex-wrap justify-center items-center gap-6 mx-auto">
          <a href="https://www.uoh.cl" target="_blank" rel="noopener noreferrer">
            <img src="/app/uoh.png" alt="UOH Logo" className="max-w-full h-auto md:w-32" />
          </a>
          <img src="/app/Logo-escuela-ing.svg" alt="Escuela de Ingeniería" className="max-w-full h-auto md:w-32" />
          <img src="/app/logo-alphanova-footer.svg" alt="Logo AlphaNova" className="max-w-full h-auto md:w-32" />
        </div>
      </footer>
    </div>
  );
}

export default WhoWeAre;
