import React, { useState } from "react";
import IconList from "../IconList/IconList";

const ITEMS_PER_PAGE = 10;

export const MiComponente = ({ datos }) => {
  const [paginaActual, setPaginaActual] = useState(0);

  if (!datos) {
    return <div>Cargando...</div>;
  }

  // Divide los datos en páginas
  const paginas = [];
  for (let i = 0; i < datos.length; i += ITEMS_PER_PAGE) {
    paginas.push(datos.slice(i, i + ITEMS_PER_PAGE));
  }

  // Renderiza solo los datos para la página actual
  return (
    <div>
      {paginas[paginaActual].map((iconValue) => (
        <div className="grid">
          <IconList key={`iconList-${iconValue.id}`} props={iconValue} />
        </div>
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
