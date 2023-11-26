import React from "react";
import "../styles/integrantes.css"; // Asegúrate de tener la ruta correcta al archivo CSS
import { useState } from "react";
import Navbar from "./Navbar"; // Asegúrate de tener la ruta correcta al componente Navbar

const Integrantes = () => {
  const [modal, setModal] = useState(false);
  const [integrante, setIntegrante] = useState({});

  const handleClick = (integrante) => {
    setModal(true);
    setIntegrante(integrante);

    const audio = new Audio("onk.mp3");
    audio.play();
  };

  const integrantes = [
    {
      nombre: "Cuadros Calapuja Luis Fernando",
      rol: "Investigador académico principal",
      img: "/luis_cuadros.jpg",
      github: "https://github.com/LuisFerCuadros",
      descripcion:
        "Estudiante de la carrera de Ingeniería de Software de la UNMSM, si algo me interesa lo aprendo.",
    },
    {
      nombre: "Rivera Marcos Kevin Jesus",
      rol: "Revisor y editor",
      img: "/kevin.jpeg",
      github: "https://github.com/kriveramarcos",
      descripcion:
        "Soy un entusiasta y apasionado a los mundos virtuales de los videojuegos, donde la diversión no tiene fronteras y cada clic es el comienzo de una nueva y emocionante aventura. Mi objetivo es descubrir los secretos de cada juego, compartir experiencias únicas y conectar con la comunidad gamer.",
    },
    {
      nombre: "Facundo Vargas Luis Fernando",
      rol: "Co-investigador académico",
      img: "/luis_facundo.jpeg",
      github: "https://github.com/LuisF00",
      descripcion:
        "Fisiano con interés en aprender muchas cosas pero con poco tiempo.",
    },
    {
      nombre: "Guzman Chavez Manuel David",
      rol: "Maquetador web",
      img: "/davi.jpg",
      github: "https://github.com/WhenDavi",
      descripcion: "Me gusta crear cosas y aprender a hacerlas :D",
    },
    {
      nombre: "Hanampa Bellido Iris Marisol",
      rol: "Diseñadora web",
      img: "/iris.jpg",
      github: "https://github.com/irishbe",
      descripcion:
        "¡Hola! Soy Iris, estudiante de Ingeniería de Software, me gusta el diseño y el arte",
    },
    {
      nombre: "Zerrillo Gonzales Hector Manuel",
      rol: "Programador web",
      img: "/hector.jpeg",
      github: "https://github.com/Hecze",
      linkedin: "https://pe.linkedin.com/in/hector-zerrillo-a24b04288",
      descripcion:
        "Amante de los animales, emprendedor, fascinado por las posibilidades de la inteligencia artificial, autodidacta y filantropo en potencia.",
    },
  ];
  return (
    <div className="container">
      <div className="encabezado">
        <h1>Integrantes</h1>
      </div>

      {modal && (
        <>
          <div className="blur"></div>

          <div className="modal">
            <div className="close" onClick={() => setModal(false)}>
              X
            </div>
            <img src={integrante.img} alt="" />
            <div className="info">
              <h2>{integrante.nombre}</h2>
              <h3>{integrante.rol}</h3>
              <p>{integrante.descripcion}</p>
            </div>
          </div>
        </>
      )}

      <div className="fila_tarjetas">
        {integrantes.map((integrante, index) => (
          <div
            className="tarjeta"
            onClick={() => handleClick(integrante)}
            key={index}
          >
            <div className="front">
              <img src={integrante.img} alt={integrante.nombre} />
              <h3>{integrante.nombre}</h3>
            </div>

            <div className="back">
              <h3>{integrante.nombre}</h3>
              <h4>{integrante.rol}</h4>
              <div className="iconos">
                <a className="github" href={integrante.github}>
                  <img src="/github.png" alt="GitHub" />
                </a>
                {integrante.linkedin && (
                  <a className="linkedin" href={integrante.linkedin}>
                    <img src="/linkedin.png" alt="LinkedIn" />
                  </a>
                )}
              </div>
              <a href="#">Más información</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrantes;
