import React from 'react';
import '../styles/ensayos.css'; // Asegúrate de tener la ruta correcta al archivo CSS

const Ensayos = () => {
  
  return (
    <div>
      <div className="encabezado">
        <h1>Ensayos</h1>
      </div>
      <p className="intro">En la actualidad, donde la tecnología y la información predominan, vemos un futuro prometedor en el papel vital que los videojuegos pueden desempeñar en el desarrollo continuo de nuestra sociedad. A través de nuestros ensayos, nos esforzamos por informar y destacar cómo los videojuegos no solo entretienen, sino que también ofrecen un terreno fértil para el crecimiento cognitivo.</p>
      <div className="ensayos">
        <div className="ensayo">
          <div className="left-en">
            <img src="https://i.blogs.es/b7859f/super-mario-bros-la-pelicula/1366_2000.jpeg" alt="" />
            <div className="butt">LEER</div>
          </div>
          <div className="right-en">
            <h1 className="name">Videojuegos: Más allá del entretenimiento</h1>
            <p className="date">Fecha de publicación: 20/11/2023</p>
            <p className="resumen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae modi unde laboriosam tenetur perferendis quam ducimus doloribus fuga recusandae nam, facilis possimus mollitia ipsum a earum quas! Debitis, aliquam ratione.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ensayos;
