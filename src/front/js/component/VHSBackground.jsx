import React, { useEffect } from "react";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "./../../styles/VHSBackground.css" // Estilos que pondremos abajo

export const  VHSBackground = () => {
  useEffect(() => {
    Splitting(); // Inicializa animaciones de texto
    console.clear();
  }, []);

  return (
    <>
      <div className="scanlines"></div>

      <div className="intro-wrap">
        <div className="noise"></div>
        <div className="noise noise-moving"></div>

        <div className="play" data-splitting>PLAY</div>
        <div className="time">--:--</div>
        <div className="recordSpeed">SLP 0:00:00</div>
      </div>
    </>
  );
}
