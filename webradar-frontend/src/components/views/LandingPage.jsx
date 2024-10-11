// src/components/LandingPage.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header"; // Importar el nuevo Header
import Footer from "../layout/Footer"; // Importar el nuevo Footer
import AOS from "aos";
import "aos/dist/aos.css";
import LinkIcon from "../icons/Link"; // Importar el icono
import Slider from "react-slick";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white font-poppins">
      {" "}
      {/* Aplicar Poppins aquí */}
      <Header />
      {/* SECCION 1 HERO */}
      <section className="relative flex flex-col md:flex-row items-center justify-center md:justify-between text-center py-16 px-8 bg-transparent mx-auto h-1/2">
        <div className="flex flex-col items-center  md:w-1/2">
          <h1
            className="text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Perfilador de lluvias{" "}
            <span className="text-blue-600 z-0">Radar</span>
          </h1>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
          <img  
            src="/app/radar.webp"
            alt="Radar"
            className="w-full h-auto rounded-lg shadow-lg max-w-xs md:max-w-lg"
          />
        </div>
      </section>
      {/* SECCION 2 TERXTO DE INTRODUCCION - CARRUSEL */}
      <section className="flex flex-col md:flex-row items-center p-8 bg-gray-100 text-gray-800 max-w-screen-3xl justify-center">
        {/* Carrusel de Imágenes */}
        <div className="md:w-1/3">
          <Slider
            dots={true}
            infinite={true}
            speed={1000}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true} // Cambia automáticamente
            autoplaySpeed={4000} // Cambia cada 3 segundos
          >
            <div>
              <img
                src="/app/lluvia-1.png"
                alt="Imagen 1"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src="/app/lluvia-2.png"
                alt="Imagen 2"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src="/app/lluvia-3.png"
                alt="Imagen 3"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src="/app/lluvia-4.png"
                alt="Imagen 4"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src="/app/lluvia-5.png"
                alt="Imagen 5"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </Slider>
        </div>

        <div className="max-w-screen-2xl mt-8 px-12 py-8 md:w-1/2 ">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
            Moderno Radar Perfilador
          </h2>
          <p className="text-lg mb-4 text-justify">
            En Rancagua, la meteorología juega un papel crucial en la
            comprensión de los patrones climáticos de la región, especialmente
            en relación con las precipitaciones. El análisis detallado de
            fenómenos atmosféricos, como la isoterma cero, es fundamental para
            predecir cambios en el clima y manejar adecuadamente los recursos
            hídricos. Por ello, se ha vuelto esencial el uso de tecnologías
            avanzadas que permitan un monitoreo más preciso y automatizado,
            optimizando así las herramientas disponibles para mejorar la
            predicción y el análisis del clima en la región.
          </p>
        </div>
      </section>
      {/* SECCION 3 - CARTA ENLACE RAUL VALENZUELA */}
      <section>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-8 bg-white shadow-lg rounded-lg max-w-screen-2xl mx-auto p-10">
          {/* Primer Div: Información del Profesor */}
          <div className="lg:w-1/2 mb-4 lg:mb-0 flex flex-col items-center">
            <a
              href="https://raulvalenzuela.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-600 mb-4"
            >
              <img
                src="/app/rv.png"
                alt="Raúl Valenzuela"
                className="w-full h-full object-cover"
              />
            </a>
            <div className="text-center flex items-center">
              <a
                href="https://raulvalenzuela.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold mb-2 text-blue-600 mr-2"
              >
                Raúl Valenzuela
              </a>
              <LinkIcon className="text-blue-600 w-6 h-6" />{" "}
              {/* Icono al lado del nombre */}
            </div>
            <p className="text-gray-700 text-justify w-8/12">
              Profesor de la Universidad de O'Higgins (UOH), Rancagua, Chile e
              Investigador Adjunto del Centro de Investigación en Clima y 
              Resiliencia (CR2). Sus intereses incluyen procesos de
              precipitación asociados a Ríos Atmosféricos, pronósticos de
              precipitación y meteorología GPS.
            </p>
          </div>

          {/* Segundo Div: Imagen del Dashboard */}
          <div className="lg:w-1/2 flex flex-col items-center">
            <a
              href="/app/dashboard"
              className="block w-80 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-4 border-blue-600 shadow-lg"
            >
              <img
                src="/app/middle-card.png"
                alt="Ir a la dashboard"
                className="w-full h-full object-cover"
              />
            </a>
            <a
              href="/app/dashboard"
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Ir a la aplicación
            </a>
          </div>
        </div>
      </section>
      {/* SECCION 4 - DE QUE SE TRATA EL PERFILADOR RADAR  */}
      <section>
        <div
          className="mt-8 px-12 py-8 max-w-screen-2xl justify-center mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-bold mb-6 sm:text-center ">
            ¿Qué es un Perfilador de Lluvias Radar?
          </h2>
          <p className="text-lg mb-4 text-justify">
            Se trata de un radar perfilador de lluvias que observará
            permanentemente —de forma vertical— sobre el lugar donde se
            encuentra ubicado, en este caso el Campus Rancagua de la
            Universidad. “La desventaja es que solo vemos lo que ocurre sobre el
            radar. Por ejemplo, si una lluvia pasa sobre San Fernando, pero no
            en Rancagua, no la veremos. Pese a la dificultad, el radar estará
            midiendo sobre Rancagua y ayudará a entender mejor la estructura de
            la lluvia y su evolución en el tiempo”.
          </p>
          <p className="text-lg mb-4 text-justify">
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
          <p className="text-lg mb-4 text-justify">
            Para hacer una comparación, el académico explica que un pluviómetro
            solo mide la precipitación en superficie y la frecuencia máxima
            normalmente ronda los 5 minutos, “es decir, con un pluviómetro cada
            5 minutos tenemos una medición, con el MRR medimos 15 veces más
            rápido”, puntualiza.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;
