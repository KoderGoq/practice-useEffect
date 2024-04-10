import React, { useState, useEffect } from 'react';

// Utilizamos el estado para mantener el tamaño actual de la ventana.
const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Definimos una función handleResize que actualiza el estado con el tamaño actual de la ventana.
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  // Utilizamos el gancho useEffect para agregar un listener para el evento de redimensionamiento de la ventana cuando el componente se monta, y lo eliminamos cuando se desmonta.
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Una matriz de dependencia vacía significa que este efecto sólo se ejecutará una vez (en el montaje)

  // El componente muestra el tamaño actual de la ventana en tiempo real.
  return (
    <div>
      <h2>Window Size</h2>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>
    </div>
  );
};

export default WindowSize;
