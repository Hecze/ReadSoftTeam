import React, { useState, useEffect } from 'react';
import '../styles/ensayos.css'; // Asegúrate de tener la ruta correcta al archivo CSS

const Ensayos = () => {
  const [ensayos, setEnsayos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/ensayos');
        const data = await response.json();
        console.log(data);

        setEnsayos(data.result);
      } catch (error) {
        console.error('Error fetching ensayos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="encabezado">
        <h1>Ensayos</h1>
      </div>
      <p className="intro">En la actualidad, donde la tecnología y la información predominan, vemos un futuro prometedor en el papel vital que los videojuegos pueden desempeñar en el desarrollo continuo de nuestra sociedad. A través de nuestros ensayos, nos esforzamos por informar y destacar cómo los videojuegos no solo entretienen, sino que también ofrecen un terreno fértil para el crecimiento cognitivo.</p>
      <div className="ensayos">
        {ensayos.map((ensayo, index) => (
          <div key={index} className="ensayo">
            <div className="left-en">
              <img src={ensayo.img} alt="" />
              <a href={ensayo.link} target="_blank" rel="noopener noreferrer" className="butt">
                LEER
              </a>
            </div>
            <div className="right-en">
              <h1 className="name">{ensayo.name}</h1>
          <hr />

              <p className="date">Fecha de publicación: 20/11/2023</p>

              <p className="resumen">{ensayo.description}</p>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Ensayos;
