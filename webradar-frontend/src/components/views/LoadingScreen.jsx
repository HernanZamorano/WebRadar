import './LoadingScreen.css'; // Asegúrate de importar los estilos

const LoadingScreen = () => {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white">
        <div className="loader-container">
          {/* Imagen del logo de carga */}
          <img src="/app/logo-ico.png" alt="AlphaNova" className="w-20 h-20 mb-4 z-10" />
          {/* Círculo de carga alrededor del logo */}
          <div className="loader-circle"></div>
        </div>
        <h1 className="text-gradient font-bold text-3xl mt-6">AlphaNova</h1>
        <p className="text-xl text-gray-500 tracking-widest mt-2">Universidad de O&apos;Higgins</p>
      </div>
    );
  };
  
  export default LoadingScreen;
  
