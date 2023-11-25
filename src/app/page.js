import React from 'react';
import "../styles/index.css";
import Navbar from '../components/Navbar'; // Asegúrate de tener la ruta correcta al componente Navbar

const HomePage = () => {
  return (
    <>
          <Navbar />
      <div className="contenedor_titulos">
        <h1>ReadSoft Team</h1>
        <p>Donde la diversión se encuentra con la educación</p>
      </div>
    </>

  );
};

export default HomePage;
