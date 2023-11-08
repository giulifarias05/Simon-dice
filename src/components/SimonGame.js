import React, { useState, useRef, useEffect } from "react";
import GameBtn from "./GameBtn";

const colores = ["green", "red", "yellow", "blue"];

function SimonGame() {
  const [secuencia, setSecuencia] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [playingIdx, setPlayingIdx] = useState(0);

  const greenRef = useRef(null);
  const redRef = useRef(null);
  const yellowRef = useRef(null);
  const blueRef = useRef(null);

  const resetearJuego = () => {
    setSecuencia([]);
    setPlaying(false);
    setPlayingIdx(0);
  };

  const addNewColor = () => {
    const color = colores[Math.floor(Math.random() * 4)];
    const newSecuencia = [...secuencia, color];
    setSecuencia(newSecuencia);
  };

  const SiguienteNivel = () => {
    if (!playing) {
      setPlaying(true);
      addNewColor();
    }
  };

  const handleColorClick = (e) => {
    if (playing) {
      e.target.classList.add("opacity-50");

      setTimeout(() => {
        e.target.classList.remove("opacity-50");

        const clickColor = e.target.getAttribute("color");

        if (secuencia[playingIdx] === clickColor) {
          if (playingIdx === secuencia.length - 1) {
            setTimeout(() => {
              setPlayingIdx(0);
              addNewColor();
            }, 250);
          }

          else {
            setPlayingIdx(playingIdx + 1);
          }
        }

        else {
          resetearJuego();
           alert("Perdiste!");
        }
      }, 250);
    }
  };

  useEffect(() => {
    console.log(secuencia);
    if (secuencia.length > 0) {
      const showSecuencia = (idx = 0) => {
        let ref = null;

        if (secuencia[idx] === "green") ref = greenRef;
        if (secuencia[idx] === "red") ref = redRef;
        if (secuencia[idx] === "yellow") ref = yellowRef;
        if (secuencia[idx] === "blue") ref = blueRef;

        setTimeout(() => {
          ref.current.classList.add("brightness-[2.5]");

          setTimeout(() => {
            ref.current.classList.remove("brightness-[2.5]");
            if (idx < secuencia.length - 1) showSecuencia(idx + 1);
          }, 250);
        }, 250);
      };

      showSecuencia();
    }
  }, [secuencia]);

  return (
    <div className="flex justify-center items-center bg-neutral-800 text-white w-screen h-screen">
      <div className="relative flex flex-col justify-center items-center">
        <div>
          <GameBtn
            color="green"
            border="rounded-tl-full"
            bg="bg-green-500"
            onClick={handleColorClick}
            ref={greenRef}
          />

          <GameBtn
            color="red"
            border="rounded-tr-full"
            bg="bg-red-500"
            onClick={handleColorClick}
            ref={redRef}
          />
        </div>

        <div>
          <GameBtn
            color="yellow"
            border="rounded-bl-full"
            bg="bg-yellow-400"
            onClick={handleColorClick}
            ref={yellowRef}
          />

          <GameBtn
            color="blue"
            border="rounded-br-full"
            bg="bg-blue-500"
            onClick={handleColorClick}
            ref={blueRef}
          />
        </div>

        <button
          className="absolute bg-neutral-900 text-white text-xl sm:text-2xl font-bold rounded-full w-[150px] sm:w-[175px] h-[150px] sm:h-[175px] duration-200 hover:scale-105"
          onClick={SiguienteNivel}
        >
          {secuencia.length === 0 ? "Jugar" : "Nivel " + secuencia.length}
        </button>
      </div>
    </div>
  );
}

export default SimonGame;
