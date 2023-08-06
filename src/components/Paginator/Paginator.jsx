import React, { useState } from "react";

const datos = Array(100)
  .fill(null)
  .map((_, index) => ({
    id: index,
    contenido: `Elemento ${index + 1}`,
  }));

const ITEMS_PER_PAGE = 10;

export const MiComponente = ({ datos }) => {
  const [paginaActual, setPaginaActual] = useState(0);

  // Divide los datos en páginas
  const paginas = [];
  for (let i = 0; i < datos.length; i += ITEMS_PER_PAGE) {
    paginas.push(datos.slice(i, i + ITEMS_PER_PAGE));
  }

  // Renderiza solo los datos para la página actual
  return (
    <div>
      {paginas[paginaActual].map((item) => (
        <div key={item.id}>{item.contenido}</div>
      ))}
      <button
        onClick={() => setPaginaActual(paginaActual - 1)}
        disabled={paginaActual === 0}
      >
        Anterior
      </button>
      <button
        onClick={() => setPaginaActual(paginaActual + 1)}
        disabled={paginaActual === paginas.length - 1}
      >
        Siguiente
      </button>
    </div>
  );
};
