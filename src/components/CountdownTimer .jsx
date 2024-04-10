// Imports
import React, { useState, useEffect } from 'react';

// Declarando componente Countdown Timer
const CountdownTimer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime); // Declarando estado time (tiempo restante del contador) - Initial time (valor inicial del contador)

  // Hook useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {      // Actualización del tiempo
      setTime(prevTime => {
        if (prevTime === 0) {
          clearInterval(intervalId);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    // Función de limpieza para limpiar el intervalo cuando se desmonta
    return () => {
      clearInterval(intervalId);
    };
  }, [initialTime]);

  // Renderizado del componente
  return (
    <div>
      <h2>Countdown Timer</h2>
      {time > 0 ? (
        <p>Tiempo restante: {time}</p>
      ) : (
        <p>¡Se acabó el tiempo!</p>
      )}
    </div>
  );
};

export default CountdownTimer;


















