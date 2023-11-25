"use client"

import React from 'react';
import Link from 'next/link';
import { Howl } from 'howler'; // Importa Howl desde la biblioteca howler
import '../styles/nav.css'; // Asegúrate de tener la ruta correcta al archivo CSS

const Navbar = () => {
  const sound = new Howl({
    src: ['/onk.mp3'],
    preload: true,
  });

  const playSound = () => {
    sound.play();
  };

  return (
    <header>
      <div className="logo">
        <img className="icono" src="/icono1.png" alt="Logo" width="60px" />
        <p style={{ fontSize: '20px' }}>ReadSoft Team</p>
      </div>
      <ul className="menu_horizontal">
        <li onClick={playSound}><Link href="/">Inicio</Link></li>
        <li onClick={playSound}><Link href="/presentacion">Presentación</Link></li>
        <li onClick={playSound}><Link href="/sobre">Quiénes somos</Link></li>
        <li onClick={playSound}><Link href="/ensayos">Ensayos</Link></li>
      </ul>
    </header>
  );
};

export default Navbar;
