import React, { useState, useEffect } from "react";
import "../styles/ensayos.css"; // Asegúrate de tener la ruta correcta al archivo CSS

const Ensayos = () => {
  const [ensayos, setEnsayos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/ensayos");
        const data = await response.json();
        console.log(data);

        setEnsayos(data.result);
      } catch (error) {
        console.error("Error fetching ensayos:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (ensayoName) => {
    if (
      ensayoName !==
      "Videojuegos: Herramientas poderosas para potenciar desarrollo cognitivo en universitarios"
    ) {
      alert("Este no es el ensayo hecho para el curso de redacción");
    } else {
      // Ruta al archivo PDF
      const pdfUrl = "/ensayo.pdf";

      // Abrir el archivo PDF en una nueva ventana del navegador
      window.open(pdfUrl, "_blank");
    }
  };

  return (
    <div>
      <div className="encabezado">
        <h1>Ensayos</h1>
      </div>
      <p className="intro">
        En la actualidad, donde la tecnología y la información predominan, vemos
        un futuro prometedor en el papel vital que los videojuegos pueden
        desempeñar en el desarrollo continuo de nuestra sociedad. A través de
        nuestros ensayos, nos esforzamos por informar y destacar cómo los
        videojuegos no solo entretienen, sino que también ofrecen un terreno
        fértil para el crecimiento cognitivo.
      </p>
      <div className="ensayos">
        <div className="ensayo">
          <div
            className="left-en"
            onClick={() =>
              handleClick(
                "Videojuegos: Herramientas poderosas para potenciar desarrollo cognitivo en universitarios"
              )
            }
          >
            <img
              src="https://i.blogs.es/b7859f/super-mario-bros-la-pelicula/1366_2000.jpeg"
              alt=""
            />
            <a target="_blank" rel="noopener noreferrer" className="butt">
              LEER
            </a>
          </div>
          <div className="right-en">
            <h1 className="name">
              Videojuegos: Herramientas poderosas para potenciar desarrollo
              cognitivo en universitarios
            </h1>
            <hr />

            <p className="date">Fecha de publicación: 20/11/2023</p>

            <p className="resumen">
              Desde estimular nuestra mente hasta mejorar nuestra capacidad para
              tomar decisiones, los videojuegos son valiosas herramientas
              educativas que pueden impactar positivamente en cómo aprendemos y
              procesamos información. Son aliados importantes para lograr una
              educación más rica y adaptada a la complejidad del siglo XXI.
              ¿Listos para descubrir la educación detrás del joystick?
              ¡Acompáñennos!
            </p>
          </div>
        </div>
        <div className="recomendacion">
          <h1>Articulos Relacionados</h1>
          <p>
            En nuestra página, nos apasiona compartir contenido de calidad que
            eduque, inspire y entretenga. En esta sección, te presentamos una
            cuidada selección de artículos provenientes de diversas fuentes que
            consideramos lecturas imperdibles. Nota: Los artículos recomendados
            son propiedad y creaciones de sus respectivos autores. No nos
            adjudicamos la autoría de estos contenidos, pero los recomendamos
            por su valor y relevancia para nuestra audiencia.
          </p>
        </div>

        {ensayos.map((ensayo, index) => (
          <div key={index} className="ensayo">
            <div className="left-en" onClick={() => handleClick(ensayo.name)}>
              <img src={ensayo.img} alt="" />
              <a
                href={ensayo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="butt"
              >
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
