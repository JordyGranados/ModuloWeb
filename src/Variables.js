import React from 'react';

function Variables() {
  const nombre = 'Juan';
  const edad = 25;
  const ciudad = 'Ciudad de México';
  const esEstudiante = true;

  return (
    <div>
      <h2>Componente con Variables</h2>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
      <p>Ciudad: {ciudad}</p>
      <p>Es estudiante: {esEstudiante ? 'Sí' : 'No'}</p>
    </div>
  );
}

export default Variables;
