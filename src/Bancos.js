import React from 'react';
import bancos from './bancos';

function Bancos() {
  return (
    <div>
      <h2>Componente con Bancos</h2>
      <p>Lista de bancos:</p>
      <ul>
        {bancos.map((banco) => (
          <li key={banco.id}>
            {banco.name} - {banco.country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bancos;
