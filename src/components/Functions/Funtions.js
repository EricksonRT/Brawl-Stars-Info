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

export const getBrawlers = () => {
  // Envia todos los brawlers
  return fetch('https://api.brawlapi.com/v1/brawlers');
};

export const getIcons = () => {
  // Envia todos los mapas
  return fetch('https://api.brawlapi.com/v1/icons');
};
export const getMaps = () => {
  // Envia todos los mapas
  return fetch('https://api.brawlapi.com/v1/maps');
};

export const getGameModes = () => {
  // Envia todos los mapas
  return fetch('https://api.brawlapi.com/v1/gamemodes');
};

// Moment maneja fechas y horas de una manera fácil, que permite crear distintos formatos
import moment from 'moment';

export const formatDate = (originalDate) => {
  let date = moment.utc(originalDate);

  let newFormat = date.format('DD/MMM/YYYY HH:mm:ssa');
  return newFormat;
};
