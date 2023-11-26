import React from 'react';
import '../styles/present.css'; // Asegúrate de tener la ruta correcta al archivo CSS
import Navbar from './Navbar'; // Asegúrate de tener la ruta correcta al componente Navbar

const AboutUs = () => {
  return (
    <>
      <div className="encabezado">
        <h1>Presentación</h1>
      </div>

      <div className="bienvenida">
        <div className="bienvenida_img"></div>
        <div className="bienvenida_text">
          <h1>¡BIENVENIDOS A READSOFT TEAM!</h1>
          <p>Somos un apasionado grupo de estudiantes de la carrera de Ingeniería de Software de la prestigiosa Universidad Nacional Mayor de San Marcos, nos hemos unido con un propósito común: explorar y compartir nuestro entusiasmo por el fascinante mundo de los videojuegos desde una perspectiva académica y técnica.</p>
          <p>Nosotros, como amantes de los videojuegos, nos hemos embarcado en la misión de desafiar percepciones arraigadas, nuestra meta es romper con el estigma de que los videojuegos son solo formas de entretenimiento pasajero, al contrario, creemos firmemente en la importancia significativa que los videojuegos tienen en la educación y en el moldeo de habilidades cognitivas esenciales.</p>
        </div>
      </div>

      <hr />

      <div className="cualidades">
        <h1>MISIÓN</h1>
        <p>Nuestra misión es explorar y analizar el vasto mundo de los videojuegos desde una perspectiva académica, buscamos compartir conocimientos, perspectivas y reflexiones profundas que trasciendan la mera experiencia del jugador, a su vez, conectar a la comunidad de jugadores y amantes del conocimiento en un espacio <b>la diversión se encuentra con la educación.</b></p>
      </div>

      <div className="cualidades">
      <h1>VISION</h1>
        <p>Aspiramos a ser una plataforma referente en el análisis académico de videojuegos, reconocida por la calidad de nuestros ensayos y la amplitud de nuestras perspectivas, así mismo, buscamos construir una comunidad diversa de entusiastas de los videojuegos, académicos y profesionales de la ingeniería de software que encuentren en <b>ReadSoft Team</b> un espacio valioso para el intercambio de ideas y conocimientos</p>
      </div>

      <audio autoPlay>
        <source src="../multimedia/coin.mp3" type="audio/mp3" />
      </audio>
    </>
  );
};

export default AboutUs;
