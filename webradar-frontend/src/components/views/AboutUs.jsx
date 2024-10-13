// src/components/views/AboutUs.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../layout/Header"; // Importar el Header

function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <Header /> {/* Usar el nuevo componente Header */}
      <section className="flex flex-col p-8 bg-gray-100 text-gray-800 items-center">
        {/* Contenido principal */}
        <div className="p-4 space-y-6 max-w-3xl"> {/* Limitar el ancho del contenido */}
          <h1
            className="text-4xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Quienes Somos
          </h1>
          <p className="text-lg mt-4 text-justify">
            Somos una empresa comprometida con el desarrollo de soluciones
            tecnológicas de punta que facilitan el avance de la investigación y
            el análisis de datos, especialmente en el ámbito de la predicción
            del clima. Nuestra misión es mejorar la comprensión de los fenómenos
            meteorológicos en la región de Rancagua, impulsando la región hacia
            nuevos proyectos tecnológicos que no solo beneficien a la comunidad
            local, sino que también promuevan un desarrollo sostenible a largo
            plazo.
          </p>
          <h4
            className="text-4xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Nuestra Visión
          </h4>
          <p className="text-lg mt-4 text-justify">
            Creemos firmemente que la tecnología puede transformar la manera en
            que interpretamos y respondemos a los cambios climáticos. Con un
            enfoque en la innovación, aspiramos a ser líderes en el ámbito del
            monitoreo y análisis climático, ofreciendo soluciones que no solo
            sean precisas, sino también accesibles y comprensibles para todos.
            Nuestro objetivo es empoderar a las instituciones y empresas con
            herramientas que les permitan anticipar eventos climáticos y
            adaptarse a ellos de manera efectiva.
          </p>
          <h4
            className="text-4xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Nuestro Equipo
          </h4>
          <p className="text-lg mt-4 text-justify">
            Nuestro equipo está compuesto por profesionales altamente
            capacitados y con amplia experiencia en el campo de la meteorología
            y la tecnología. Cada miembro aporta un conjunto único de
            habilidades y conocimientos que, en conjunto, nos permite ofrecer
            servicios de monitoreo climático avanzados. Nos especializamos en el
            uso de tecnología de vanguardia, incluyendo sensores y software de
            análisis de datos, para proporcionar servicios que van más allá de
            la simple recopilación de datos.
          </p>
          <h4
            className="text-4xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Innovación y Confiabilidad
          </h4>
          <p className="text-lg mt-4 text-justify">
            Nos distinguimos por nuestra capacidad para combinar innovación
            tecnológica con un profundo conocimiento científico. Esto nos
            permite generar análisis climáticos precisos en tiempo real,
            completamente adaptados a las necesidades de nuestros clientes.
            Nuestro compromiso con la excelencia se refleja en la fiabilidad de
            nuestros sistemas, que no solo ofrecen datos precisos, sino también
            una interfaz amigable y accesible para la toma de decisiones
            informadas.
          </p>
          <h4
            className="text-4xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Impacto en la Comunidad
          </h4>
          <p className="text-lg mt-4 text-justify">
            Entendemos que nuestros servicios tienen un impacto directo en la
            capacidad de las comunidades y empresas para mitigar riesgos
            climáticos. Trabajamos en estrecha colaboración con nuestros
            clientes, brindando capacitación y soporte continuo para asegurarnos
            de que puedan utilizar nuestros sistemas de manera efectiva. Al
            hacerlo, ayudamos a optimizar operaciones estratégicas y a fomentar
            un entorno donde la innovación y la sostenibilidad puedan coexistir.
          </p>
          <h4
            className="text-4xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Compromiso con el Futuro
          </h4>
          <p className="text-lg mt-4 text-justify">
            Mirando hacia el futuro, estamos dedicados a continuar innovando y
            mejorando nuestras soluciones, incorporando los últimos avances en
            tecnología y ciencia climática. Creemos que, al mantenernos a la
            vanguardia de la tecnología, podemos no solo anticipar el futuro del
            clima, sino también ayudar a dar forma a un futuro más resiliente y
            sostenible para Rancagua y más allá.
          </p>
        </div>

        {/* Sección con imágenes de los integrantes */}
        <div className="w-full p-4 space-y-6 max-w-4xl">
          <h4
            className="text-4xl font-bold mb-4 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Nuestro Equipo
          </h4>
          <div className="flex flex-wrap justify-center space-x-8 mt-4">
            <div className="text-center">
              <img
                src="/app/foto-felipe.png"
                alt="Felipe Coliman"
                style={{
                  width: "150px", // Define el ancho
                  height: "150px", // Define la altura
                  borderRadius: "10px", // Bordes redondeados
                  objectFit: "cover", // Mantiene la proporción de la imagen
                }}
              />
              <p className="text-xl font-semibold mt-2">Felipe Coliman</p>
              <p>
                <a
                  href="https://www.linkedin.com/in/felipe-coliman-c/"
                  className="text-blue-500"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a href="https://github.com/Yazpherr" className="text-blue-500">
                  GitHub
                </a>
              </p>
            </div>

            <div className="text-center">
              <img
                src="/app/foto-alan.jpg"
                alt="Alan Molina"
                style={{
                  width: "150px", // Define el ancho
                  height: "150px", // Define la altura
                  borderRadius: "10px", // Bordes redondeados
                  objectFit: "cover", // Mantiene la proporción de la imagen
                }}
              />
              <p className="text-xl font-semibold mt-2">Alan Molina</p>
              <p>
                <a
                  href="https://www.linkedin.com/in/alan-eduard-molina-hidalgo-122822289/"
                  className="text-blue-500"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a href="https://github.com/alanEmolina" className="text-blue-500">
                  GitHub
                </a>
              </p>
            </div>

            <div className="text-center">
              <img
                src="/app/foto-hernan.jpg"
                alt="Hernan Zamorano"
                style={{
                  width: "150px", // Define el ancho
                  height: "150px", // Define la altura
                  borderRadius: "10px", // Bordes redondeados
                  objectFit: "cover", // Mantiene la proporción de la imagen
                }}
              />
              <p className="text-xl font-semibold mt-2">Hernán Zamorano</p>
              <p>
                <a
                  href="https://www.linkedin.com/in/hernan-zamorano-b104b4294/"
                  className="text-blue-500"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a href="https://github.com/HernanZamorano" className="text-blue-500">
                  GitHub
                </a>
              </p>
            </div>

            <div className="text-center">
              <img
                src="/app/foto-christian.jpg"
                alt="Christian Torres"
                style={{
                  width: "150px", // Define el ancho
                  height: "150px", // Define la altura
                  borderRadius: "10px", // Bordes redondeados
                  objectFit: "cover", // Mantiene la proporción de la imagen
                }}
              />
              <p className="text-xl font-semibold mt-2">Christian Torres</p>
              <p>
                <a
                  href="https://www.linkedin.com/in/christian-torres-c/"
                  className="text-blue-500"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a href="https://github.com/ChrisTCode" className="text-blue-500">
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col md:flex-row justify-center bg-blue-700 p-6">
        <div className="flex flex-wrap justify-center items-center gap-6 mx-auto">
          <a href="https://www.uoh.cl" target="_blank" rel="noopener noreferrer">
            <img src="/app/uoh.png" alt="UOH Logo" className="max-w-full h-auto md:w-32" />
          </a>
          <img
            src="/app/Logo-escuela-ing.svg"
            alt="Escuela de Ingeniería"
            className="max-w-full h-auto md:w-32"
          />
          <img
            src="/app/logo-alphanova-footer.svg"
            alt="Logo AlphaNova"
            className="max-w-full h-auto md:w-32"
          />
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
