import React, { useState } from "react";
import Map from "../Maps/Map";

const ITEMS_PER_PAGE = 10;

export const Paginator = ({ props }) => {
  const [paginaActual, setPaginaActual] = useState(0);

  if (!props) {
    return <div>Cargando...</div>;
  }

  // Divide los datos en páginas
  const paginas = [];
  for (let i = 0; i < props.length; i += ITEMS_PER_PAGE) {
    paginas.push(props.slice(i, i + ITEMS_PER_PAGE));
  }

  // Renderiza solo los datos para la página actual
  return (
    <>
      {paginas[paginaActual].map((map) => (
        <Map props={map} key={`mapa id: ${map.id}`} />
      ))}
      <div className="groupButtons">
        <button
          className="buttonPag"
          onClick={() => setPaginaActual(paginaActual - 1)}
          disabled={paginaActual === 0}
        >
          Anterior
        </button>
        <button
          className="buttonPag"
          onClick={() => setPaginaActual(paginaActual + 1)}
          disabled={paginaActual === paginas.length - 1}
        >
          Siguiente
        </button>
      </div>
    </>
  );
};
