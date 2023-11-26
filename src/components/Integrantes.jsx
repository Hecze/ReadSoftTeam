import React from 'react';
import '../styles/integrantes.css'; // Asegúrate de tener la ruta correcta al archivo CSS
import Navbar from './Navbar'; // Asegúrate de tener la ruta correcta al componente Navbar

const Integrantes = () => {
  return (
    <>
      <div className="encabezado">
        <h1>Integrantes</h1>
      </div>

      <div className="fila_tarjetas">

        <div className="tarjeta">

          <div className="front">
            <img src="luis_cuadros.jpg" alt="Luis Fernando Cuadros Calapuja" />
            <h3>Cuadros Calapuja<br/>Luis Fernando</h3>
          </div>

          <div className="back">
            <h3>Cuadros Calapuja Luis Fernando</h3>
            <h4>Investigador académico principal</h4>
            <div className="iconos">
              <a className="github" href="https://github.com/LuisFerCuadros"><img src="/github.png" alt="GitHub" /></a>
              <a className="instagram" href="https://www.instagram.com/litfer_5/"><img src="instragram.jpg" alt="Instagram" /></a>
            </div>
            <a href="#">Más información</a>
          </div>

        </div>
        <div className="tarjeta">

<div className="front">
  <img src="kevin.jpeg" alt="Rivera Marcos Kevin Jesus" style={{ objectPosition: 'top' }} />
  <h3>Rivera Marcos<br />Kevin Jesus</h3>
</div>

<div className="back">
  <h3>Rivera Marcos Kevin Jesus</h3>
  <h4>Revisor y editor</h4>
  <div className="iconos">
    <a className="github" href="https://github.com/kriveramarcos"><img src="github.png" alt="GitHub" /></a>
  </div>
  <a href="#">Más información</a>
</div>

</div>


        <div className="tarjeta">

          <div className="front">
            <img src="luis_facundo.jpeg" alt="Facundo Vargas Luis Fernando" style={{ objectPosition: 'right' }} />
            <h3>Facundo Vargas<br />Luis Fernando</h3>
          </div>

          <div className="back">
            <h3>Facundo Vargas Luis Fernando</h3>
            <h4>Co-investigador académico</h4>
            <div className="iconos">
              <a className="github" href="https://github.com/LuisF00"><img src="/github.png" alt="GitHub" /></a>
            </div>
            <a href="#">Más información</a>
          </div>

        </div>

        <div className="tarjeta">

          <div className="front">
          <img src="davi.jpg" alt="Facundo Vargas Luis Fernando" style={{ objectPosition: 'right' }} />
            <h3>Guzman Chavez<br />Manuel David</h3>
          </div>

          <div className="back">
            <h3>Guzman Chavez Manuel David</h3>
            <h4>Maquetador web</h4>
            <div className="iconos">
              <a className="github" href="https://github.com/WhenDavi"><img src="github.png" alt="GitHub" /></a>
            </div>
            <a href="#">Más información</a>
          </div>

        </div>


        <div className="tarjeta">

          <div className="front">
            <img src="iris.jpg" alt="Hanampa Bellido Iris Marisol" />
            <h3>Hanampa Bellido<br />Iris Marisol</h3>
          </div>

          <div className="back">
            <h3>Hanampa Bellido Iris Marisol</h3>
            <h4>Diseñadora web</h4>
            <div className="iconos">
              <a className="github" href="https://github.com/irishbe"><img src="github.png" alt="GitHub" /></a>
            </div>
            <a href="#">Más información</a>
          </div>

        </div>


        <div className="tarjeta">

          <div className="front">
            <img src="hector.jpg" alt="Zerrillo Gonzales Hector Manuel" style={{ objectPosition: 'top' }} />
            <h3>Zerrillo Gonzales<br />Hector Manuel</h3>
          </div>

          <div className="back">
            <h3>Zerrillo Gonzales Hector Manuel</h3>
            <h4>Responsable de publicación</h4>
            <div className="iconos">
              <a className="github" href="https://github.com/Hecze"><img src="github.png" alt="GitHub" /></a>
              <a className="linkedin" href="https://pe.linkedin.com/in/hector-zerrillo-a24b04288"><img src="linkedin.png" alt="LinkedIn" /></a>
            </div>
            <a href="#">Más información</a>
          </div>

        </div>

      </div>
    </>
  );
};

export default Integrantes;
