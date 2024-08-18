import React from 'react';

const Contacto = () => {
  return (
    <main className="content">
      <section className="features">
        <form action="#" method="POST">
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div>
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </section>
    </main>
  );
}

export default Contacto;
