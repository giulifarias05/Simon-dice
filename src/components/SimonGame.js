import React, { useState, useRef, useEffect } from "react";
import BotonColor from "./BotonColor";
const colores = ["green", "red", "yellow", "blue"];

function SimonGame() {
  const [secuencia, setSecuencia] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [Indexjug, setIndexjug] = useState(0);
  const [resultados, setResultados] = useState([]);
  const [audio] = useState(new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"));


  const greenRef = useRef(null);
  const redRef = useRef(null);
  const yellowRef = useRef(null);
  const blueRef = useRef(null);

  const resetearJuego = () => {
    setSecuencia([]);
    setPlaying(false);
    setIndexjug(0);
     audio.pause();
     audio.currentTime = 0;

  };

  const AgregarColor = () => {
    const color = colores[Math.floor(Math.random() * 4)];
    const newSecuencia = [...secuencia, color];
    setSecuencia(newSecuencia);
  };

  const SiguienteNivel = () => {
    if (!playing) {
      setPlaying(true);
      AgregarColor();
    }
  };

  const tocandoColor = (e) => {
    if (playing) {
      e.target.classList.add("opacity-50");

      setTimeout(() => {
        e.target.classList.remove("opacity-50");

        const clickColor = e.target.getAttribute("color");

        if (secuencia[Indexjug] === clickColor) {
          if (Indexjug === secuencia.length - 1) {
            setTimeout(() => {
              setIndexjug(0);
              AgregarColor();
            }, 250);
          }

          else {
            setIndexjug(Indexjug + 1);
          }
        }

        else {
          setResultados([...resultados, secuencia.length]);
          resetearJuego();
          alert(`Perdiste! Puntaje obtenido: ${secuencia.length}`);
           
        }
      }, 250);
    }
  };

  useEffect(() => {
    if (secuencia.length > 0) {
      const mostrarSecuencia = (idx = 0) => {
        let ref = null;

        if (secuencia[idx] === "green") ref = greenRef;
       if (secuencia[idx] === "red") ref = redRef;
        if (secuencia[idx] === "yellow") ref = yellowRef;
        if (secuencia[idx] === "blue") ref = blueRef;
        setTimeout(() => {
          ref.current.classList.add("brightness-[2.5]");

          setTimeout(() => {
            ref.current.classList.remove("brightness-[2.5]");
            if (idx < secuencia.length - 1) mostrarSecuencia(idx + 1); 
            

          }, 350); audio.play();

        }, 350);
      };

      mostrarSecuencia();
    }
  }, [secuencia]);

  if (resultados.length > 0) {
    const resultadosOrdenados = [...resultados].sort((a, b) => b - a);
    console.log('Puntajes obtenidos:', resultadosOrdenados);
  }
  

  return (
    <div className="flex justify-center items-center bg-neutral-800 text-white w-screen h-screen">
      <div className="relative flex flex-col justify-center items-center">
        <div>
          <BotonColor
            color="green"
            border="rounded-tl-full"
            bg="bg-green-500"
            onClick={tocandoColor}
            ref={greenRef}
          />

          <BotonColor
            color="red"
            border="rounded-tr-full"
            bg="bg-red-500"
            onClick={tocandoColor}
            ref={redRef}
          />
        </div>
        <div>
          <BotonColor
            color="yellow"
            border="rounded-bl-full"
            bg="bg-yellow-400"
            onClick={tocandoColor}
            ref={yellowRef}
          />

          <BotonColor
            color="blue"
            border="rounded-br-full"
            bg="bg-blue-500"
            onClick={tocandoColor}
            ref={blueRef}
          />
        </div>

        <button
          className="absolute bg-neutral-900 text-white text-xl sm:text-2xl font-bold rounded-full w-[100px] sm:w-[130px] h-[100px] sm:h-[130px] duration-200 hover:scale-105"
          onClick={SiguienteNivel}
        >
         {secuencia.length === 0 ? "Jugar" : `Nivel ${secuencia.length}`}
        </button>
              
      </div>
    </div>
  );
}

export default SimonGame;
