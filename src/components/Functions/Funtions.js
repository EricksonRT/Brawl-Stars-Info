import axios from 'axios';
// Usando axios, se obtiene el json correspondiente, y recibiendo un estado de argumento, nos permite podes utilizarlo directamente en el
// UseEffect del componente *Events*
export const getEventsActives = async (state) => {
  const response = await axios.get('https://api.brawlapi.com/v1/events');
  // data.active && data.upcoming
  // Enviamos los eventos
  state(response.data.active);
};

export const getEventsUpcoming = async (state) => {
  const response = await axios.get('https://api.brawlapi.com/v1/events');
  // data.active && data.upcoming
  // Enviamos los eventos
  state(response.data.upcoming);
};
