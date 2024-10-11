// src/components/Footer.jsx
function Footer() {
    return (
      <footer className="flex flex-col md:flex-row justify-center bg-blue-700 p-6">
        <div className="flex flex-wrap justify-center items-center gap-6 mx-auto">
          <a href="https://www.uoh.cl" target="_blank" rel="noopener noreferrer">
            <img src="/app/uoh.png" alt="UOH Logo" className="max-w-full h-auto md:w-32" />
          </a>
          <img src="/app/Logo-escuela-ing.svg" alt="Escuela de Ingeniería" className="max-w-full h-auto md:w-32" />
          <img src="/app/logo-alphanova-footer.svg" alt="Logo AlphaNova" className="max-w-full h-auto md:w-32" />
        </div>
      </footer>
    );
  }
  
  export default Footer;
  