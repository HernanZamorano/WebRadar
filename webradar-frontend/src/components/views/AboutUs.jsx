import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
    });
  }, []);

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

        <div className="flex space-x-4">
          <button
            className="text-gray-800 px-4 py-2"
            onClick={() => navigate("/app/")}
          >
            Pagina Principal
          </button>
          <button
            className="text-gray-800 px-4 py-2"
            onClick={() => navigate("/app/quienes-somos")}
          >
            Quienes Somos
          </button>
          <button
            className="text-gray-800 px-4 py-2"
            onClick={() => navigate("/app/faq")}
          >
            Preguntas Frecuentes
          </button>
          <button
            className="border border-gray-800 px-4 py-2 rounded-lg"
            onClick={() => navigate("http://localhost:5200/app/dashboard")}
          >
            Ir a la aplicación
          </button>
        </div>
      </header>

      <section className="flex flex-col md:flex-row p-8 bg-gray-100 text-gray-800">
        {/* Espacio lateral izquierdo */}
        <div className="hidden md:block w-1/4 p-20 space-y-4 mb-40 mt-10">
          <div className="text-center">
            <img src="/app/bodoque1.png" alt="Felipe Coliman" />
            <p className="text-xl font-semibold mt-2">Felipe Coliman</p>
            <p>
              <a href="https://www.linkedin.com/in/felipe-coliman-c/" className="text-blue-500">
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
            <img src="/app/bodoque2.png" alt="Alan Molina" />
            <p className="text-xl font-semibold mt-2">Alan Molina</p>
            <p>
              <a href="https://www.linkedin.com/in/alan-eduard-molina-hidalgo-122822289/" className="text-blue-500">
                LinkedIn
              </a>
            </p>
            <p>
              <a href="https://github.com/alanEmolina" className="text-blue-500">
                GitHub
              </a>
            </p>
          </div>

          {/* Agregar más contenido como imágenes y texto */}
        </div>

        {/* Contenido principal */}
        <div className="md:w-2/4 p-4 space-y-6">
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
            del clima. Nuestra misión es mejorar la comprensión de los
            fenómenos meteorológicos en la región de Rancagua, impulsando la
            región hacia nuevos proyectos tecnológicos que no solo beneficien a
            la comunidad local, sino que también promuevan un desarrollo
            sostenible a largo plazo.
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

        {/* Espacio lateral derecho */}
        <div className="hidden md:block w-1/4 p-20 space-y-4 mb-40 mt-10">
          <div className="text-center">
            <img src="/app/bodoque1.png" alt="Hernan Zamorano" />
            <p className="text-xl font-semibold mt-2">Hernán Zamorano</p>
            <p>
              <a href="https://www.linkedin.com/in/hernan-zamorano-b104b4294/" className="text-blue-500">
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
            <img src="/app/bodoque2.png" alt="Christian Torres" />
            <p className="text-xl font-semibold mt-2">Christian Torres</p>
            <p>
              <a href="https://www.linkedin.com/in/christian-torres-kalasic/" className="text-blue-500">
                LinkedIn
              </a>
            </p>
            <p>
              <a href="https://github.com/ChristkUOH01" className="text-blue-500">
                GitHub
              </a>
            </p>
          </div>

          {/* Agregar más contenido como imágenes y texto */}
        </div>
      </section>

      <footer className="flex flex-col md:flex-row justify-center bg-blue-700 p-6">
        <div className="flex flex-wrap justify-center items-center gap-6 mx-auto">
          <a href="https://www.uoh.cl" target="_blank" rel="noopener noreferrer">
            <img
              src="/app/uoh.png"
              alt="UOH Logo"
              className="max-w-full h-auto md:w-32"
            />
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
